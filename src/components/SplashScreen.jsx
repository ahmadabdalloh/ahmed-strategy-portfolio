import { useCallback, useEffect, useRef, useState } from 'react'

const SPLASH_KEY = 'ahmed-portfolio-splash-seen'
/* Held just long enough to register as a brand moment, short enough that
   nobody waits on it. Any click, key press, or scroll dismisses it early. */
const HOLD_MS = 1400
const EXIT_MS = 420

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
      exitTimer.current = window.setTimeout(() => setVisible(false), EXIT_MS)
      return true
    })
  }, [])

  useEffect(() => {
    if (!visible) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const autoClose = window.setTimeout(closeSplash, HOLD_MS)
    const onAnyInput = () => closeSplash()
    window.addEventListener('keydown', onAnyInput)
    window.addEventListener('wheel', onAnyInput, { passive: true })
    window.addEventListener('touchstart', onAnyInput, { passive: true })

    return () => {
      document.body.style.overflow = previousOverflow
      window.clearTimeout(autoClose)
      window.clearTimeout(exitTimer.current)
      window.removeEventListener('keydown', onAnyInput)
      window.removeEventListener('wheel', onAnyInput)
      window.removeEventListener('touchstart', onAnyInput)
    }
  }, [visible, closeSplash])

  if (!visible) return null

  return (
    <div
      className={`splash-screen${leaving ? ' splash-screen--leaving' : ''}`}
      aria-hidden="true"
      onClick={closeSplash}
    >
      <div className="splash-intro">
        <span className="splash-intro__grid" aria-hidden="true" />
        <span className="splash-intro__index" aria-hidden="true">Portfolio / 2026</span>
        <div className="splash-intro__identity">
          <img className="splash-intro__mark" src="/media/loading-logo.svg" alt="" />
          <p className="splash-intro__eyebrow">Marketing strategy / Content systems / Media planning</p>
          <strong>Ahmed Abdallah</strong>
          <p className="splash-intro__role">Content &amp; Growth Strategist</p>
          <span className="splash-intro__rule" aria-hidden="true" />
        </div>
        <span className="splash-intro__status" aria-hidden="true">Building decisions that work</span>
      </div>
    </div>
  )
}
