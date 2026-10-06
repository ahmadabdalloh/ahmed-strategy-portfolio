import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { site, whatsappUrl } from '../data/site.js'

const LINKS = [
  { to: '/#work', label: 'Work' },
  { to: '/paid-ads', label: 'Paid ads' },
  { to: '/ai-videos', label: 'AI videos' },
  { to: '/#reels', label: 'Reels' },
  { to: '/#about', label: 'About' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const panelRef = useRef(null)
  const toggleRef = useRef(null)
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu whenever the route (or in-page anchor) changes.
  useEffect(() => { setOpen(false) }, [pathname, hash])

  // Esc closes, outside click closes, scroll locks while open.
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onPointer = (e) => {
      if (panelRef.current?.contains(e.target) || toggleRef.current?.contains(e.target)) return
      setOpen(false)
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [open])

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}${open ? ' menu-open' : ''}`}>
      <div className="wrap nav-inner">
        <Link to="/" className="nav-logo" aria-label="Ahmed Abdallah home">
          <img src="/media/loading-logo.svg" alt="" width="38" height="38" />
          <span>Ahmed&nbsp;Abdallah</span>
        </Link>

        <nav aria-label="Main navigation" className="nav-desktop">
          <ul className="nav-links">
            {LINKS.map((l) => (
              <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
            ))}
            <li>
              <a className="nav-cv" href={site.cv} download>
                CV <span aria-hidden="true">↓</span>
              </a>
            </li>
            <li>
              <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Get in touch
              </a>
            </li>
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle-bars" aria-hidden="true"><i /><i /><i /></span>
          <span className="nav-toggle-label">{open ? 'Close' : 'Menu'}</span>
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={panelRef}
        className={`nav-panel${open ? ' is-open' : ''}`}
        hidden={!open}
      >
        <nav aria-label="Mobile navigation">
          <ul>
            {LINKS.map((l) => (
              <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
            ))}
            <li>
              <a href={site.cv} download>Download CV <span aria-hidden="true">↓</span></a>
            </li>
          </ul>
        </nav>
        <a
          className="btn btn-primary nav-panel-cta"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get in touch on WhatsApp
        </a>
      </div>
    </header>
  )
}
