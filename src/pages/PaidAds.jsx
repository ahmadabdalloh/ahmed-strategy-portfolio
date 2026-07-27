import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import ScrollProgress from '../components/ScrollProgress.jsx'
import { paidCampaigns } from '../data/paidCampaigns.js'
import {
  messagingConversationCount,
  paidAccountCampaignCount,
  paidAccounts,
} from '../data/paidAccounts.js'
import { site, whatsappUrl } from '../data/site.js'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
      <path d="M4 10h11M11 6l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CampaignVideo({ campaign }) {
  return (
    <figure className="campaign-media campaign-video">
      <div className="campaign-video-shell">
        <video
          controls
          playsInline
          preload="metadata"
          poster={campaign.video.poster}
          aria-label={campaign.video.alt}
        >
          <source src={campaign.video.src} type="video/mp4" />
          Your browser does not support embedded video.
        </video>
      </div>
      <figcaption>{campaign.video.caption}</figcaption>
    </figure>
  )
}

function CampaignEvidence({ campaign, onOpen }) {
  return (
    <figure className="campaign-media campaign-result">
      <button
        className="campaign-evidence-button"
        type="button"
        onClick={() => onOpen({ ...campaign.evidence, title: `${campaign.client} campaign result` })}
        aria-label={`View the complete screenshot: ${campaign.evidence.alt}`}
      >
        <img
          src={campaign.evidence.src}
          alt={campaign.evidence.alt}
          loading="lazy"
          width="1600"
          height="983"
        />
        <span>View complete proof</span>
      </button>
      <figcaption>{campaign.evidence.caption}</figcaption>
    </figure>
  )
}

function formatNumber(value) {
  return new Intl.NumberFormat('en-US').format(value)
}

function formatMoney(value) {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: value < 1 ? 4 : 2,
    maximumFractionDigits: value < 1 ? 4 : 2,
  }).format(value)
}

function ResultCrop({ evidence, compact = false, onOpen }) {
  const crop = evidence.crop
  const scale = 100 / crop.width
  const ratio =
    (crop.sourceWidth * (crop.width / 100)) /
    (crop.sourceHeight * (crop.height / 100))

  return (
    <button
      type="button"
      className={`result-proof${compact ? ' result-proof-compact' : ''}`}
      onClick={() => onOpen(evidence)}
      aria-label={`View the complete screenshot: ${evidence.alt}`}
    >
      <span className="result-proof-frame" style={{ aspectRatio: ratio }}>
        <span className="result-proof-source" style={{ transform: `scale(${scale})` }}>
          <img
            src={evidence.src}
            alt={evidence.alt}
            loading="lazy"
            style={{ transform: `translate(-${crop.x}%, -${crop.y}%)` }}
          />
        </span>
      </span>
      <span className="result-proof-action">View complete proof <ArrowIcon /></span>
    </button>
  )
}

function AccountCampaign({ campaign, index, onOpen }) {
  return (
    <article className="account-campaign">
      <div className="account-campaign-copy">
        <p className="account-campaign-number">{String(index + 1).padStart(2, '0')}</p>
        <h3>{campaign.title}</h3>
        <p className="account-campaign-objective">{campaign.objective}</p>
        <p className="account-campaign-summary">{campaign.summary}</p>
        <dl className="account-campaign-metrics">
          <div>
            <dt>Result</dt>
            <dd>{formatNumber(campaign.result)} <span>{campaign.resultLabel}</span></dd>
          </div>
          <div>
            <dt>{campaign.costLabel}</dt>
            <dd>EGP {formatMoney(campaign.cost)}</dd>
          </div>
          <div>
            <dt>Spend</dt>
            <dd>EGP {formatMoney(campaign.spend)}</dd>
          </div>
          <div>
            <dt>Delivery</dt>
            <dd>{formatNumber(campaign.reach)} <span>reach</span></dd>
            <small>{formatNumber(campaign.impressions)} impressions</small>
          </div>
        </dl>
        <div className="account-campaign-decision">
          <span>My next action</span>
          <p>{campaign.decision}</p>
        </div>
      </div>
      <ResultCrop
        evidence={{ ...campaign.evidence, title: campaign.title }}
        onOpen={onOpen}
      />
    </article>
  )
}

function PaidAccount({ account, index, onOpen }) {
  return (
    <article className="paid-account" id={account.slug}>
      <Reveal>
        <header className="paid-account-head">
          <div>
            <p className="campaign-index">0{index} · Meta Ads · {account.period}</p>
            <h2>{account.client}: {account.title}</h2>
          </div>
          <span className="verified-mark">{account.campaigns.length} verified campaigns</span>
        </header>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="paid-account-intro">
          <p>{account.summary}</p>
          <div>
            <span>My role</span>
            <p>{account.role}</p>
            <small>{account.evidenceNote}</small>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="paid-account-highlights">
          {account.highlights.map((item) => (
            <div key={`${item.value}-${item.label}`}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
              <small>{item.note}</small>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="account-campaign-list">
        {account.campaigns.map((campaign, campaignIndex) => (
          <Reveal key={campaign.title} delay={(campaignIndex % 2) * 0.04}>
            <AccountCampaign campaign={campaign} index={campaignIndex} onOpen={onOpen} />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <details className="breakdown-gallery">
          <summary>
            <span>View {account.breakdowns.length} supporting account, ad-set, and creative breakdowns</span>
            <span aria-hidden="true">+</span>
          </summary>
          <div className="breakdown-gallery-grid">
            {account.breakdowns.map((item) => (
              <figure key={item.src}>
                <ResultCrop evidence={item} compact onOpen={onOpen} />
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </details>
      </Reveal>
    </article>
  )
}

function EvidenceViewer({ evidence, onClose }) {
  const closeButton = useRef(null)
  const [zoomed, setZoomed] = useState(false)

  useEffect(() => {
    if (!evidence) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButton.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [evidence, onClose])

  if (!evidence) return null

  return createPortal(
    <div
      className="evidence-viewer"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section
        className="evidence-viewer-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="evidence-viewer-title"
      >
        <header className="evidence-viewer-head">
          <div>
            <p>Original Ads Manager evidence</p>
            <h2 id="evidence-viewer-title">{evidence.title || 'Campaign screenshot'}</h2>
          </div>
          <div className="evidence-viewer-actions">
            <button type="button" onClick={() => setZoomed((current) => !current)}>
              {zoomed ? 'Fit to screen' : 'View at 100%'}
            </button>
            <a href={evidence.src} target="_blank" rel="noopener noreferrer">Open original</a>
            <button ref={closeButton} type="button" onClick={onClose} aria-label="Close screenshot viewer">
              Close
            </button>
          </div>
        </header>
        <div className={`evidence-viewer-canvas${zoomed ? ' is-zoomed' : ''}`}>
          <button
            type="button"
            onClick={() => setZoomed((current) => !current)}
            aria-label={zoomed ? 'Fit screenshot to screen' : 'View screenshot at full size'}
          >
            <img src={evidence.src} alt={evidence.alt} />
          </button>
        </div>
      </section>
    </div>,
    document.body,
  )
}

export default function PaidAds() {
  const [activeEvidence, setActiveEvidence] = useState(null)
  const totals = paidCampaigns.reduce(
    (acc, campaign) => ({
      leads: acc.leads + campaign.result.leads,
      spend: acc.spend + campaign.result.spend,
    }),
    { leads: 0, spend: 0 },
  )
  const campaignSnapshotCount = paidCampaigns.length + paidAccountCampaignCount

  useEffect(() => {
    document.title = `Paid Ads Results | ${site.name}`
  }, [])

  return (
    <article className="paid-page">
      <ScrollProgress />

      <header className="paid-page-hero">
        <div className="wrap paid-page-hero-grid">
          <Reveal>
            <h1>My paid ads, with the results to back them up.</h1>
            <p className="lede">
              I put the creative, spend, lead volume, and cost per result in one place,
              so you can see exactly what I ran and what it produced.
            </p>
            <div className="paid-page-actions">
              <a className="btn btn-primary" href="#campaigns">View campaign results</a>
              <a className="btn btn-ghost" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Discuss a campaign
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="paid-results-summary" aria-label="Verified paid advertising results">
              <p>Results I can verify</p>
              <div className="paid-results-summary-grid">
                <div><strong>{paidAccounts.length + 1}</strong><span>client accounts</span></div>
                <div><strong>{campaignSnapshotCount}</strong><span>campaign snapshots</span></div>
                <div><strong>{formatNumber(messagingConversationCount)}</strong><span>messaging conversations</span></div>
                <div><strong>{totals.leads}</strong><span>Meta leads</span></div>
              </div>
              <small>Different objectives stay separate, so unlike results are never blended into one average.</small>
            </div>
          </Reveal>
        </div>
      </header>

      <section className="section recruiter-proof" aria-labelledby="recruiter-proof-title">
        <div className="wrap">
          <Reveal>
            <div className="recruiter-proof-head">
              <div>
                <p className="section-kicker">A 30-second performance read</p>
                <h2 id="recruiter-proof-title">The results I would lead with in an interview.</h2>
              </div>
              <p>
                These are the clearest examples of lead generation, messaging efficiency,
                delivery at scale, and budget responsibility in the screenshots I can verify.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="recruiter-proof-grid">
              <div><strong>45</strong><span>Meta leads</span><small>EGP 8.56 each · Genio Academy</small></div>
              <div><strong>342</strong><span>conversations</span><small>EGP 7.24 each · Greener</small></div>
              <div><strong>419</strong><span>conversations</span><small>EGP 9.55 each · Pea Learning</small></div>
              <div><strong>EGP 19,302</strong><span>account spend shown</span><small>Pea Learning overview</small></div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="recruiter-capabilities">
              <strong>What this work shows</strong>
              <span>Campaign setup</span>
              <span>Audience and creative testing</span>
              <span>Budget monitoring</span>
              <span>Keep, pause, and scale decisions</span>
              <span>Honest result reporting</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section paid-campaigns" id="campaigns" aria-labelledby="campaigns-title">
        <div className="wrap">
          <Reveal>
            <div className="paid-page-section-head">
              <h2 id="campaigns-title">Campaign results</h2>
              <p>I show each objective and reporting window separately, with the original screenshot available for checking.</p>
            </div>
          </Reveal>

          {paidCampaigns.map((campaign, index) => (
            <article className="paid-campaign" id={campaign.slug} key={campaign.slug}>
              <Reveal>
                <div className="paid-campaign-head">
                  <div>
                    <p className="campaign-index">0{index + 1} · {campaign.platform} · {campaign.date}</p>
                    <h2>{campaign.client}: {campaign.title}</h2>
                  </div>
                  <span className="verified-mark">Verified snapshot</span>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="paid-campaign-brief">
                  <div>
                    <h3>Campaign objective</h3>
                    <p>{campaign.objective}</p>
                  </div>
                  <div>
                    <h3>My role</h3>
                    <p>{campaign.role}</p>
                  </div>
                  <div>
                    <h3>Reporting context</h3>
                    <p>{campaign.reportingWindow}</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="paid-campaign-metrics">
                  <div><strong>{campaign.result.leads}</strong><span>Meta leads</span></div>
                  <div><strong>{campaign.result.currency} {campaign.result.costPerLead.toFixed(2)}</strong><span>cost per lead</span></div>
                  <div><strong>{campaign.result.currency} {campaign.result.spend.toFixed(2)}</strong><span>campaign spend</span></div>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="campaign-decision">
                  <span>My next action</span>
                  <p>{campaign.decision}</p>
                </div>
              </Reveal>

              <div className="campaign-evidence-grid">
                <Reveal><CampaignEvidence campaign={campaign} onOpen={setActiveEvidence} /></Reveal>
                <Reveal delay={0.08}><CampaignVideo campaign={campaign} /></Reveal>
              </div>

              <Reveal>
                <div className="campaign-evidence-note">
                  <p>{campaign.evidenceNote}</p>
                  <div className="campaign-links">
                    <a href={campaign.publishedUrl} target="_blank" rel="noopener noreferrer">
                      Watch the published Reel <ArrowIcon />
                    </a>
                    <Link to={campaign.caseStudyUrl}>
                      Read the full Genio case study <ArrowIcon />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </article>
          ))}

          {paidAccounts.map((account, index) => (
            <PaidAccount
              account={account}
              index={paidCampaigns.length + index + 1}
              key={account.slug}
              onOpen={setActiveEvidence}
            />
          ))}
        </div>
      </section>

      <section className="section paid-reporting" aria-labelledby="reporting-title">
        <div className="wrap">
          <Reveal>
            <div className="paid-reporting-grid">
              <h2 id="reporting-title">What I include for every campaign</h2>
              <div>
                <p>
                  I include the result that matches the campaign objective and keep the original
                  screenshot available. Failed and low-volume tests stay visible when they help
                  explain what I changed next.
                </p>
                <ol>
                  <li><strong>Creative:</strong> the actual ad people saw.</li>
                  <li><strong>Media result:</strong> spend, volume, and cost per result.</li>
                  <li><strong>Context:</strong> campaign objective, platform, reporting window, and limitations.</li>
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <EvidenceViewer
        key={activeEvidence?.src || 'closed'}
        evidence={activeEvidence}
        onClose={() => setActiveEvidence(null)}
      />
    </article>
  )
}
