import { useParams, Link, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'
import ScrollProgress from '../components/ScrollProgress.jsx'
import { projects, getProject } from '../data/projects.js'
import { site } from '../data/site.js'

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

export default function CaseStudy() {
  const { slug } = useParams()
  const { hash } = useLocation()
  const pr = getProject(slug)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (pr) document.title = `${pr.client}: ${pr.title} | ${site.name}`
  }, [pr])

  useEffect(() => {
    if (!pr || !hash) return undefined
    const timer = window.setTimeout(() => {
      const target = document.getElementById(hash.slice(1))
      target?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
    }, 80)
    return () => window.clearTimeout(timer)
  }, [hash, pr, reduce])

  if (!pr) return <Navigate to="/" replace />

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
        return (
        <section className="cs-section" id={sec.id} key={sec.heading}>
          <div className="wrap">
            <Reveal>
              <div className={`body-grid ${mediaCount === 0 ? 'solo' : ''}`}>
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
                </div>
              </div>
            </Reveal>
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
