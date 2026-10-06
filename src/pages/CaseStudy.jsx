import { useParams, Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'
import ScrollProgress from '../components/ScrollProgress.jsx'
import NotFound from './NotFound.jsx'
import { projects, getProject } from '../data/projects.js'

const clipVariants = {
  hidden: { clipPath: 'inset(0% 0% 100% 0%)' },
  show: {
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 0.85, ease: [0.23, 1, 0.32, 1] },
  },
}
const zoomVariants = {
  hidden: { scale: 1.08 },
  show: { scale: 1, transition: { duration: 0.85, ease: [0.23, 1, 0.32, 1] } },
}

function ExternalArrow() {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
      <path d="M6 14 14 6M8 6h6v6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Figure({ img }) {
  const reduce = useReducedMotion()
  return (
    <figure className="frame">
      {reduce ? (
        <div className="clip">
          <img src={img.src} alt={img.alt} loading="lazy" width="1600" height="900" />
        </div>
      ) : (
        /* IntersectionObserver watches the unclipped wrapper; a fully
           clip-path'd element never intersects, so the clip animates on
           the child via variant propagation. */
        <motion.div
          className="clip"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.div variants={clipVariants}>
            <motion.img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width="1600"
              height="900"
              variants={zoomVariants}
            />
          </motion.div>
        </motion.div>
      )}
      <figcaption>{img.caption}</figcaption>
    </figure>
  )
}

function VideoFigure({ video }) {
  return (
    <figure className="frame video-frame">
      <div className="video-shell">
        <video
          controls
          playsInline
          preload="metadata"
          poster={video.poster}
          aria-label={video.alt}
        >
          <source src={video.src} type="video/mp4" />
          Your browser does not support embedded video.
        </video>
      </div>
      <figcaption>{video.caption}</figcaption>
      {video.href && (
        <a
          className="media-proof-link"
          href={video.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          View the published Reel on Facebook <span aria-hidden="true">→</span>
        </a>
      )}
    </figure>
  )
}

function DriveEmbed({ embed }) {
  const [playing, setPlaying] = useState(false)
  return (
    <article className={`drive-proof${playing ? ' is-playing' : ''}`}>
      <div className="drive-proof-media">
        {playing ? (
          <iframe
            src={`https://drive.google.com/file/d/${embed.id}/preview`}
            title={embed.title}
            allow="autoplay; fullscreen"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <button type="button" onClick={() => setPlaying(true)} aria-label={`Play ${embed.title}`}>
            <span className="drive-proof-index">{embed.index}</span>
            <span className="drive-proof-play" aria-hidden="true">▶</span>
            <span className="drive-proof-format">Captured + edited for social</span>
          </button>
        )}
      </div>
      <div className="drive-proof-copy">
        <strong>{embed.title}</strong>
        <span>{embed.caption}</span>
        <a href={`https://drive.google.com/file/d/${embed.id}/view`} target="_blank" rel="noopener noreferrer">
          Open on Drive <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  )
}

function SectionMetrics({ metrics }) {
  return (
    <div className="case-metric-grid" aria-label="Verified results">
      {metrics.map((metric) => (
        <div key={metric.label}>
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
          {metric.note && <small>{metric.note}</small>}
        </div>
      ))}
    </div>
  )
}

function Workflow({ steps }) {
  return (
    <ol className="case-workflow">
      {steps.map((step, index) => (
        <li key={step.title}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <div><strong>{step.title}</strong><p>{step.body}</p></div>
        </li>
      ))}
    </ol>
  )
}

function TrackerTable({ tracker }) {
  return (
    <div className="case-tracker">
      <div className="case-tracker-head">
        <div><span>Production tracker excerpt</span><strong>{tracker.title}</strong></div>
        <small>{tracker.note}</small>
      </div>
      <div className="case-tracker-scroll">
        <table>
          <thead><tr>{tracker.columns.map((column) => <th key={column}>{column}</th>)}</tr></thead>
          <tbody>
            {tracker.rows.map((row) => (
              <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`}>{cell}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function CaseStudy() {
  const { slug } = useParams()
  const { hash } = useLocation()
  const pr = getProject(slug)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!pr || !hash) return undefined
    const timer = window.setTimeout(() => {
      const target = document.getElementById(hash.slice(1))
      target?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
    }, 80)
    return () => window.clearTimeout(timer)
  }, [hash, pr, reduce])

  if (!pr) return <NotFound />

  const idx = projects.findIndex((x) => x.slug === slug)
  const prev = projects[(idx - 1 + projects.length) % projects.length]
  const next = projects[(idx + 1) % projects.length]

  return (
    <article>
      <ScrollProgress />
      {/* ---------- header ---------- */}
      <header className="cs-hero">
        <div className="wrap">
          <Reveal>
            <p className="crumbs">
              <Link to="/#work">← All work</Link>
            </p>
            <p className="eyebrow">{pr.client}</p>
            <h1 style={{ marginTop: 10, maxWidth: '18ch' }}>{pr.title}</h1>
            <p className="cs-kicker">
              <span>{pr.category}</span>
              <span className="dot">{pr.industry}</span>
              <span className="dot">{pr.lang}</span>
            </p>
            <p className="lede cs-summary" style={{ maxWidth: '68ch' }}>{pr.summary}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="cs-meta">
              <div>
                <h3>Objective</h3>
                <p>{pr.objective}</p>
              </div>
              <div>
                <h3>Deliverables</h3>
                <ul>{pr.deliverables.map((d) => <li key={d}>{d}</li>)}</ul>
              </div>
              <div>
                <h3>Channels & tools</h3>
                <div className="chips">{pr.tools.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="cs-stats">
              {pr.stats.map((s) => (
                <div className="cs-stat" key={s.label}>
                  <div className="v">{s.value}</div>
                  <div className="l">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </header>

      {/* ---------- narrative sections ---------- */}
      {pr.sections.map((sec) => {
        const videos = sec.videos ?? []
        const mediaCount = sec.images.length + videos.length
        const hasSupplemental = mediaCount > 0 || sec.metrics?.length || sec.workflow?.length || sec.tracker || sec.embeds?.length
        return (
        <section className="cs-section" id={sec.id} key={sec.heading}>
          <div className="wrap">
            <Reveal>
              <div className={`body-grid ${hasSupplemental ? '' : 'solo'}`}>
                <h2>{sec.heading}</h2>
                <div>
                  <p className="body">{sec.body}</p>
                  {sec.quote && (
                    <blockquote className="pullquote" dir={sec.quote.rtl ? 'rtl' : undefined} lang={sec.quote.rtl ? 'ar' : undefined}>
                      <p>{sec.quote.text}</p>
                      <cite dir="ltr">{sec.quote.source}</cite>
                    </blockquote>
                  )}
                  {sec.link && (
                    <a
                      className="cs-section-link"
                      href={sec.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {sec.link.label}
                      <ExternalArrow />
                    </a>
                  )}
                  {sec.links?.length > 0 && (
                    <div className="cs-resource-links">
                      {sec.links.map((link) => (
                        <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                          {link.label}<ExternalArrow />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
            {sec.metrics?.length > 0 && <Reveal><SectionMetrics metrics={sec.metrics} /></Reveal>}
            {sec.workflow?.length > 0 && <Reveal><Workflow steps={sec.workflow} /></Reveal>}
            {sec.tracker && <Reveal><TrackerTable tracker={sec.tracker} /></Reveal>}
            {mediaCount > 0 && (
              <div className="fig-grid">
                {sec.images.map((img, i) => (
                  <Reveal key={img.src + i} delay={(i % 2) * 0.07}>
                    <Figure img={img} />
                  </Reveal>
                ))}
                {videos.map((video, i) => (
                  <Reveal key={video.src + i} delay={((sec.images.length + i) % 2) * 0.07}>
                    <VideoFigure video={video} />
                  </Reveal>
                ))}
              </div>
            )}
            {sec.embeds?.length > 0 && (
              <div className="drive-proof-grid">
                {sec.embeds.map((embed, index) => (
                  <Reveal key={embed.id} delay={(index % 2) * 0.06}>
                    <DriveEmbed embed={{ ...embed, index: String(index + 1).padStart(2, '0') }} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>
        )
      })}

      {/* ---------- outcome ---------- */}
      <div className="wrap">
        <Reveal>
          <div className="cs-outcome">
            <h2>What the client walked away with</h2>
            <p>{pr.outcome}</p>
          </div>
        </Reveal>

        <nav className="cs-nav" aria-label="More case studies">
          <Link to={`/work/${prev.slug}`}>
            <span>← Previous</span>
            <strong>{prev.client}</strong>
          </Link>
          <Link to={`/work/${next.slug}`} className="next">
            <span>Next →</span>
            <strong>{next.client}</strong>
          </Link>
        </nav>
      </div>
    </article>
  )
}
