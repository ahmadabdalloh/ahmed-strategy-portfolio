import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { whatsappUrl } from '../data/site.js'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="wrap nav-inner">
        <Link to="/" className="nav-logo" aria-label="Ahmed Abdallah home">
          <img src="/media/loading-logo.svg" alt="" width="38" height="38" />
          <span>Ahmed&nbsp;Abdallah</span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="nav-links">
            <li className="hide-s"><Link to="/#work">Work</Link></li>
            <li className="hide-m"><Link to="/paid-ads">Paid ads</Link></li>
            <li className="hide-m"><Link to="/#reels">Reels</Link></li>
            <li className="hide-m"><Link to="/#about">About</Link></li>
            <li>
              <a
                className="nav-cta"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
