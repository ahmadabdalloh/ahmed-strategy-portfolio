import { useCallback, useEffect, useRef, useState } from 'react'

const SPLASH_KEY = 'ahmed-portfolio-splash-seen'

export default function SplashScreen() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false
    const forceIntro = new URLSearchParams(window.location.search).get('intro') === '1'
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return !reducedMotion && (forceIntro || sessionStorage.getItem(SPLASH_KEY) !== '1')
  })
  const [leaving, setLeaving] = useState(false)
  const exitTimer = useRef(null)

  const closeSplash = useCallback(() => {
    setLeaving((isLeaving) => {
      if (isLeaving) return isLeaving
      sessionStorage.setItem(SPLASH_KEY, '1')
      exitTimer.current = window.setTimeout(() => setVisible(false), 650)
      return true
    })
  }, [])

  useEffect(() => {
    if (!visible) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const fallback = window.setTimeout(closeSplash, 4200)

    return () => {
      document.body.style.overflow = previousOverflow
      window.clearTimeout(fallback)
      window.clearTimeout(exitTimer.current)
    }
  }, [visible, closeSplash])

  if (!visible) return null

  return (
    <div
      className={`splash-screen${leaving ? ' splash-screen--leaving' : ''}`}
      role="dialog"
      aria-label="Ahmed Abdallah portfolio introduction"
      aria-modal="true"
    >
      <div className="splash-intro" aria-hidden="true">
        <span className="splash-intro__grid" />
        <span className="splash-intro__index">Portfolio / 2026</span>
        <div className="splash-intro__identity">
          <img className="splash-intro__mark" src="/media/loading-logo.svg" alt="" />
          <p className="splash-intro__eyebrow">Marketing strategy / Content systems / Media planning</p>
          <strong>Ahmed Abdallah</strong>
          <p className="splash-intro__role">Content &amp; Growth Strategist</p>
          <span className="splash-intro__rule" />
        </div>
        <span className="splash-intro__status">Building decisions that work</span>
      </div>
    </div>
  )
}
