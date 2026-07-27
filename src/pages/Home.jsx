import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import MaskedTitle from '../components/MaskedTitle.jsx'
import Marquee from '../components/Marquee.jsx'
import { site, whatsappUrl, proofStats, reels, about } from '../data/site.js'
import { projects } from '../data/projects.js'

function ReelPlayer({ reel, index }) {
  const [playing, setPlaying] = useState(false)
  const poster = index === 0
    ? '/work/besttrade-b2b/beanos-story.webp'
    : '/work/myo-recovery/video-formats.webp'

  return (
    <div className={`reel-player${playing ? ' is-playing' : ''}`}>
      {playing ? (
        <iframe
          src={`https://drive.google.com/file/d/${reel.id}/preview`}
          title={reel.title}
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      ) : (
        <button
          className="reel-poster"
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play ${reel.title}`}
        >
          <img src={poster} alt="" width="1600" height="900" loading="lazy" />
          <span className="reel-shade" aria-hidden="true" />
          <span className="reel-play" aria-hidden="true">Play</span>
          <span className="reel-format" aria-hidden="true">Short-form / 9:16</span>
        </button>
      )}
    </div>
  )
}

export default function Home() {
  useEffect(() => {
    document.title = `${site.name} | ${site.role}`
  }, [])

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <span className="hero-rule" aria-hidden="true" />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <Reveal>
              <p className="eyebrow">{site.positioning}</p>
            </Reveal>
            <MaskedTitle
              lines={[
                `${site.name}.`,
                'Marketing decisions',
                <em key="em">that book revenue.</em>,
              ]}
            />
            <Reveal delay={0.16}>
              <p className="lede">{site.valueProp}</p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#work">View my work</a>
                <Link className="btn btn-dark" to="/paid-ads">Paid ad results</Link>
                <a
                  className="btn btn-ghost"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get in touch
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="hero-cred">{site.credibility}</p>
            </Reveal>
          </div>
          <Reveal className="hero-proof" delay={0.18} y={18}>
            <a href="#work" className="hero-proof-link" aria-label="Preview selected case studies">
              <span className="proof-note">Strategy / Content / Media</span>
              <span className="proof-stack" aria-hidden="true">
                <span className="proof-sheet proof-sheet-back">
                  <img src={projects[2].cover} alt="" width="1600" height="900" />
                </span>
                <span className="proof-sheet proof-sheet-mid">
                  <img src={projects[7].cover} alt="" width="1600" height="900" />
                </span>
                <span className="proof-sheet proof-sheet-front">
                  <img src={projects[0].cover} alt="" width="1600" height="900" />
                </span>
              </span>
              <span className="proof-caption">Ten client systems I built from research through execution.</span>
            </a>
          </Reveal>
        </div>
        <a className="scroll-cue" href="#work" aria-label="Scroll down to selected work">
          <span>Scroll</span>
          <span className="scroll-cue__track" aria-hidden="true"><i /></span>
        </a>
      </section>

      {/* ---------- MARQUEE ---------- */}
      <Marquee
        items={[
          'KAVUN',
          'Juan Valdez Egypt', 'Cloud9 Nursery',
          'Velora Fit', 'MYO Recovery', 'ElRehab Hospital', 'SwimEgypt',
          'Genio Academy', 'Citrine Store', 'Best Trade',
        ]}
      />

      {/* ---------- WORK ---------- */}
      <section className="section" id="work" aria-labelledby="work-title">
        <div className="wrap">
          <div className="section-head">
            <Reveal><p className="eyebrow">Selected work</p></Reveal>
            <Reveal delay={0.06}>
              <div className="row">
                <h2 id="work-title">Ten systems across nine industries. The same discipline every time.</h2>
                <p className="lede" style={{ maxWidth: '34ch', fontSize: '1rem' }}>
                  In every case study, I show the objective, the strategy, the content system,
                  and the decisions behind the budget.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="work-grid">
            {projects.map((pr, i) => (
              <Reveal key={pr.slug} delay={(i % 2) * 0.08}>
                <Link className="project-card" to={`/work/${pr.slug}`}>
                  <div className="pc-media">
                    <img
                      src={pr.cover}
                      alt={pr.coverAlt}
                      loading={i < 2 ? 'eager' : 'lazy'}
                      width="1600" height="900"
                    />
                  </div>
                  <div className="pc-body">
                    <div className="pc-meta">
                      <span className="tag">{pr.category}</span>
                      <span>{pr.lang}</span>
                    </div>
                    <h3 className="pc-title">{pr.client}: {pr.title}</h3>
                    <p className="pc-sum">{pr.summary}</p>
                    <span className="pc-link">Read the case study <span className="arr" aria-hidden="true">→</span></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PROOF ---------- */}
      <section className="section" aria-label="Scope of work at a glance" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal>
            <div className="stats">
              {proofStats.map((s) => (
                <div className="stat" key={s.label}>
                  <div className="v">{s.value}</div>
                  <div className="l">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- PAID MEDIA EVIDENCE ---------- */}
      <section className="section paid-proof-section" aria-labelledby="paid-proof-title">
        <div className="wrap">
          <Reveal>
            <Link className="paid-proof-card" to="/paid-ads">
              <div className="paid-proof-copy">
                <p className="eyebrow">Paid media evidence</p>
                <h2 id="paid-proof-title">See the campaigns and the proof behind each result.</h2>
                <p>
                  I have collected campaign-level evidence across Genio Academy, Greener,
                  and Pea Learning. Each objective stays separate, with the original
                  Ads Manager screenshot available for checking.
                </p>
                <div className="paid-proof-metrics" aria-label="Paid advertising evidence library">
                  <span><strong>3</strong> client accounts</span>
                  <span><strong>16</strong> campaign snapshots</span>
                  <span><strong>29</strong> proof screenshots</span>
                </div>
                <span className="paid-proof-cta">
                  Explore all paid ad results <span aria-hidden="true">→</span>
                </span>
              </div>
              <div className="paid-proof-media">
                <img
                  src="/work/genio-academy/paid-ads-results.webp"
                  alt="Meta Ads Manager result showing 45 leads at EGP 8.56 per lead for the Genio Academy AI Camp campaign"
                  loading="lazy"
                  width="1600"
                  height="983"
                />
                <span className="paid-proof-badge">Campaign snapshot · 21 Jul 2026</span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- REELS ---------- */}
      <section className="section" id="reels" aria-labelledby="reels-title" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <Reveal><p className="eyebrow">Short-form production</p></Reveal>
            <Reveal delay={0.06}>
              <div className="row">
                <h2 id="reels-title">Strategy on paper, proof on camera.</h2>
                <a href={site.reelsFolder} target="_blank" rel="noreferrer" style={{ fontWeight: 620 }}>
                  Open the full reels folder →
                </a>
              </div>
            </Reveal>
          </div>
          <div className="reels-grid">
            {reels.map((r, i) => (
              <Reveal key={r.id} delay={i * 0.08}>
                <div className="reel">
                  <ReelPlayer reel={r} index={i} />
                  <div className="reel-body">
                    <h3>{r.title}</h3>
                    <p>{r.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ABOUT ---------- */}
      <section className="section section-glass" id="about" aria-labelledby="about-title">
        <div className="wrap">
          <div className="section-head">
            <Reveal><p className="eyebrow">About</p></Reveal>
            <Reveal delay={0.06}><h2 id="about-title">Attention is cheap. Trust is the asset.</h2></Reveal>
          </div>
          <div className="about-grid">
            <Reveal className="about-bio">
              {about.bio.map((par) => <p key={par.slice(0, 24)}>{par}</p>)}
            </Reveal>
            <Reveal delay={0.1}>
              <div className="process">
                {about.process.map((st, i) => (
                  <div className="process-item" key={st.step}>
                    <div className="n">0{i + 1}</div>
                    <div>
                      <h3>{st.step}</h3>
                      <p>{st.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="skills">
            {Object.entries(about.skills).map(([group, items], i) => (
              <Reveal key={group} delay={i * 0.06}>
                <div className="skill-group">
                  <h3>{group}</h3>
                  <ul>{items.map((it) => <li key={it}>{it}</li>)}</ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section className="section" id="contact" aria-labelledby="contact-title">
        <div className="wrap">
          <Reveal>
            <div className="contact">
              <p className="eyebrow" style={{ color: 'var(--accent)' }}>Contact</p>
              <h2 id="contact-title">Have a brand that needs a system, not just posts?</h2>
              <p>
                I take on freelance strategy projects and full-time roles. Tell me about the brand,
                the market, and what a good result would look like in 90 days.
              </p>
              <div className="contact-actions">
                <a className="btn btn-primary" href={`mailto:${site.email}`}>Email me</a>
                <a className="btn btn-ghost" style={{ color: 'var(--on-dark)', boxShadow: 'inset 0 0 0 1.5px #454034' }}
                  href={site.linkedin} target="_blank" rel="noreferrer">
                  Connect on LinkedIn
                </a>
              </div>
              <div className="contact-alt">
                <a href={`mailto:${site.email}`}>{site.email}</a>
                <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp {site.phone}</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
