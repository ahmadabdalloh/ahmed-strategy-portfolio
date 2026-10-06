import { useLayoutEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

/* Route transition wipe. Kept deliberately short — the app is client-side,
   so anything longer than this is invented waiting. */
const DURATION_MS = 320
const READY_MS = 40
const EXIT_MS = 220

export default function PageLoader() {
  const { pathname } = useLocation()
  const firstRoute = useRef(true)
  const [visible, setVisible] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const [progress, setProgress] = useState(0)

  useLayoutEffect(() => {
    if (firstRoute.current) {
      firstRoute.current = false
      return undefined
    }
    // Anyone who asked for less motion gets an instant route change.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    let cancelled = false
    let frame
    let readyTimer
    let exitTimer
    const startedAt = performance.now()
    const duration = DURATION_MS

    setVisible(true)
    setLeaving(false)
    setProgress(0)

    const update = (now) => {
      if (cancelled) return
      const elapsed = Math.min(1, (now - startedAt) / duration)
      const eased = 1 - Math.pow(1 - elapsed, 2.2)
      setProgress(Math.round(eased * 100))

      if (elapsed < 1) {
        frame = requestAnimationFrame(update)
        return
      }

      readyTimer = window.setTimeout(() => {
        setLeaving(true)
        exitTimer = window.setTimeout(() => setVisible(false), EXIT_MS)
      }, READY_MS)
    }

    frame = requestAnimationFrame(update)

    return () => {
      cancelled = true
      cancelAnimationFrame(frame)
      window.clearTimeout(readyTimer)
      window.clearTimeout(exitTimer)
    }
  }, [pathname])

  if (!visible) return null

  return (
    <div
      className={`page-loader${leaving ? ' page-loader--leaving' : ''}`}
      role="status"
      aria-live="polite"
      aria-label={`Loading page, ${progress} percent`}
    >
      <div className="page-loader__glow" aria-hidden="true" />
      <img className="page-loader__mark" src="/media/loading-logo.svg" alt="" />
      <p className="page-loader__name">Ahmed Abdallah</p>
      <p className="page-loader__role">Marketing · Strategy</p>
      <div className="page-loader__progress" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>
      <p className="page-loader__status">
        {progress >= 100 ? 'Ready' : `Loading ${String(progress).padStart(2, '0')}%`}
      </p>
    </div>
  )
}
