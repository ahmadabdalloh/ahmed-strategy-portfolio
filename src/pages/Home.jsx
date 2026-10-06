import { Link } from 'react-router-dom'
import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import MaskedTitle from '../components/MaskedTitle.jsx'
import Marquee from '../components/Marquee.jsx'
import { site, whatsappUrl, proofStats, reels, about, featuredSlugs } from '../data/site.js'
import { projects } from '../data/projects.js'
import { contextFor } from '../data/projectContext.js'

/** Covers ship at 640/960/1600 so phones don't download a 1600px file. */
const coverSrcSet = (cover) => {
  const base = cover.replace(/\.webp$/, '')
  return `${base}-640.webp 640w, ${base}-960.webp 960w, ${cover} 1600w`
}

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
  const featured = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean)
  const rest = projects.filter((p) => !featuredSlugs.includes(p.slug))

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
                'Social media &',
                <em key="em">content specialist.</em>,
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
            <Reveal delay={0.26}>
              <p className="hero-cv">
                <a href={site.cv} download>
                  Download my CV <span aria-hidden="true">↓</span>
                </a>
                <span className="hero-cv-note">PDF · two pages of results, projects and tools</span>
              </p>
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
                  <img src={featured[0].cover} alt="" width="1600" height="900" />
                </span>
              </span>
              <span className="proof-caption">Content production, campaign evidence, and strategy deliverables.</span>
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
                <h2 id="work-title">Selected projects. Clear roles. Evidence you can review.</h2>
                <p className="lede" style={{ maxWidth: '34ch', fontSize: '1rem' }}>
                  Start with Cloud9’s content production and results. Each project separates
                  the work delivered from measured outcomes and proposed plans.
                </p>
              </div>
            </Reveal>
          </div>
          {/* three featured, then the rest — so nobody has to choose from ten */}
          <div className="work-featured">
            {featured.map((pr, i) => (
              <Reveal key={pr.slug} delay={i * 0.06}>
                <Link className="project-card project-card--featured" to={`/work/${pr.slug}`}>
                  <div className="pc-media">
                    <img
                      src={pr.cover}
                      srcSet={coverSrcSet(pr.cover)}
                      sizes="(min-width: 980px) 620px, 100vw"
                      alt={pr.coverAlt}
                      loading={i === 0 ? 'eager' : 'lazy'}
                      fetchpriority={i === 0 ? 'high' : undefined}
                      width="1600" height="900"
                    />
                  </div>
                  <div className="pc-body">
                    <div className="pc-meta">
                      <span className="tag">{pr.category}</span>
                      <span>{pr.lang}</span>
                    </div>
                    <p className="project-status">{contextFor(pr.slug).status}</p>
                    <h3 className="pc-title">{pr.client}: {contextFor(pr.slug).title}</h3>
                    <p className="pc-sum">{pr.summary}</p>
                    <span className="pc-link">Read the case study <span className="arr" aria-hidden="true">→</span></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="work-divider">
              <span>More strategy and content projects</span>
            </p>
          </Reveal>

          <details className="portfolio-details"><summary>Browse {rest.length} more projects</summary><div className="work-grid">
            {rest.map((pr, i) => (
              <Reveal key={pr.slug} delay={(i % 2) * 0.06}>
                <Link className="project-card project-card--compact" to={`/work/${pr.slug}`}>
                  <div className="pc-media">
                    <img
                      src={pr.cover}
                      srcSet={coverSrcSet(pr.cover)}
                      sizes="(min-width: 780px) 540px, 100vw"
                      alt={pr.coverAlt}
                      loading="lazy"
                      width="1600" height="900"
                    />
                  </div>
                  <div className="pc-body">
                    <div className="pc-meta">
                      <span className="tag">{pr.category}</span>
                      <span>{pr.lang}</span>
                    </div>
                    <p className="project-status">{contextFor(pr.slug).status}</p>
                    <h3 className="pc-title">{pr.client}: {contextFor(pr.slug).title}</h3>
                    <p className="pc-sum">{pr.summary}</p>
                    <span className="pc-link">Read the case study <span className="arr" aria-hidden="true">→</span></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div></details>
        </div>
      </section>

      {/* ---------- PROOF ---------- */}
      <section className="section" aria-label="Selected results with reporting context" style={{ paddingTop: 0 }}>
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
                  <span><strong>45</strong> Genio Meta leads</span>
                  <span><strong>EGP 8.56</strong> cost per lead</span>
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
      <section className="section" id="reels" aria-labelledby="reels-title">
        <div className="wrap">
          <div className="section-head">
            <Reveal><p className="eyebrow">Short-form production</p></Reveal>
            <Reveal><div className="row"><h2 id="reels-title">From the brief to the finished Reel.</h2><a href={site.reelsFolder} target="_blank" rel="noreferrer">Open the full Reels folder →</a></div></Reveal>
          </div>
          <div className="reels-grid">{reels.map((r, i) => <Reveal key={r.id} delay={i * 0.08}><div className="reel"><ReelPlayer reel={r} index={i} /><div className="reel-body"><h3>{r.title}</h3><p>{r.note}</p></div></div></Reveal>)}</div>
        </div>
      </section>

      {/* ---------- AI VIDEO SHOWCASE ---------- */}
      <section className="section ai-home-section" aria-labelledby="ai-home-title">
        <div className="wrap">
          <Reveal>
            <Link className="ai-home-card" to="/ai-videos">
              <div className="ai-home-media">
                <img
                  src="/work/ai-videos/ai-video-showcase-og.webp"
                  alt="Al Mahy legal explainer thumbnail about personal status judgment enforcement"
                  loading="lazy"
                  width="1200"
                  height="630"
                />
                <span className="ai-home-play" aria-hidden="true">▶</span>
                <span className="ai-home-tool">Created with Higgsfield</span>
              </div>
              <div className="ai-home-copy">
                <p className="eyebrow">New · AI video showcase</p>
                <h2 id="ai-home-title">Five legal explainers, built as one visual system.</h2>
                <p>
                  See how I used Higgsfield to turn complex legal subjects into clear,
                  bilingual videos designed for vertical social viewing.
                </p>
                <div className="ai-home-facts" aria-label="AI video showcase details">
                  <span><strong>5</strong> finished videos</span>
                  <span><strong>9:16</strong> mobile-first</span>
                  <span><strong>AR + EN</strong> delivery</span>
                </div>
                <span className="ai-home-link">Watch the AI video showcase <span aria-hidden="true">→</span></span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- DIGITAL PRODUCTS ---------- */}
      <section className="section" aria-labelledby="design-home-title"><div className="wrap">
        <Link className="design-home-card" to="/ai-designs">
          <img src="/work/ai-designs/fateh/fateh-poster-1-thumb.webp" alt="AI-assisted Al Fateh campaign using an iceberg visual metaphor" width="1080" height="1080" loading="lazy" />
          <div><p className="eyebrow">AI-assisted design</p><h2 id="design-home-title">Social creative for Al Mahy and Al Fateh.</h2><p>Browse selected artwork and the complete 57-design collection, organized by service. Creative samples—not performance claims.</p><span className="pc-link">Explore the AI designs →</span></div>
        </Link>
      </div></section>
      <section className="section digital-home-section" aria-labelledby="digital-home-title">
        <div className="wrap">
          <Reveal>
            <Link className="digital-home-card" to="/digital-products">
              <div className="digital-home-copy">
                <p className="eyebrow">Live web products</p>
                <h2 id="digital-home-title">From campaign attention to a working digital journey.</h2>
                <p>
                  Explore three products I built across nursery admissions, international
                  freight, and hospital attendance—designed around the real next action.
                </p>
                <div className="digital-home-facts" aria-label="Digital product portfolio details">
                  <span><strong>3</strong> live products</span>
                  <span><strong>2</strong> bilingual</span>
                  <span><strong>3</strong> sectors</span>
                </div>
                <span className="digital-home-link">Explore the web products <span aria-hidden="true">→</span></span>
              </div>
              <div className="digital-home-media" aria-hidden="true">
                <img className="digital-home-shot digital-home-shot-main" src="/work/digital-products/cloud9-tour-booking.webp" alt="" width="1440" height="1000" loading="lazy" />
                <img className="digital-home-shot digital-home-shot-back" src="/work/digital-products/inter-freight-cargo.webp" alt="" width="1440" height="1000" loading="lazy" />
                <span className="digital-home-badge">Designed + built</span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- ABOUT ---------- */}
      <section className="section section-glass" id="about" aria-labelledby="about-title">
        <div className="wrap">
          <div className="section-head">
            <Reveal><p className="eyebrow">About</p></Reveal>
            <Reveal delay={0.06}><h2 id="about-title">From the first brief to the final edit.</h2></Reveal>
          </div>
          <div className="about-grid">
            <Reveal className="about-bio">
              {about.bio.map((par) => <p key={par.slice(0, 24)}>{par}</p>)}
              <div className="experience-card"><p className="eyebrow">Current experience</p><h3>Marketing Intern in Content and Social Media</h3><p><strong>4mind · Cairo · 2026–Present</strong></p><p>Content research, creative briefs, on-site capture, and Reel editing. Produce 8–10 social posts per week across Facebook, Instagram, TikTok, LinkedIn, and WhatsApp Channel against weekly targets.</p></div>
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
              <p className="eyebrow" style={{ color: 'var(--accent-on-dark)' }}>Contact</p>
              <h2 id="contact-title">Have a brand that needs a system, not just posts?</h2>
              <p>
                I take on freelance strategy projects and full-time roles. Tell me about the brand,
                the market, and what a good result would look like in 90 days.
              </p>
              <div className="contact-actions">
                <a className="btn btn-primary" href={`mailto:${site.email}`}>Email me</a>
                <a className="btn btn-outline-light" href={site.linkedin} target="_blank" rel="noreferrer">
                  Connect on LinkedIn
                </a>
                <a className="btn btn-outline-light" href={site.cv} download>
                  Download CV <span aria-hidden="true">↓</span>
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
