/**
 * Infinite editorial marquee. Pure CSS animation (runs off the main thread),
 * pauses on hover, disabled under prefers-reduced-motion.
 */
export default function Marquee({ items }) {
  const seq = (key) => (
    <div className="marquee-seq" aria-hidden={key > 0 ? 'true' : undefined} key={key}>
      {items.map((it) => (
        <span key={it} style={{ display: 'inline-flex', alignItems: 'center', gap: 28 }}>
          {it} <span className="sep">✦</span>
        </span>
      ))}
    </div>
  )
  return (
    <div className="marquee" role="group" aria-label={`Clients: ${items.join(', ')}`}>
      <div className="marquee-track">{[0, 1].map(seq)}</div>
    </div>
  )
}
