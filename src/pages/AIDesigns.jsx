import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import designs from '../data/aiDesigns.json'
import Reveal from '../components/Reveal.jsx'

const categories = [
  ['all', 'All designs'], ['legal', 'Legal'], ['corporate', 'Corporate'],
  ['debt', 'Debt collection'], ['notary', 'Notary'], ['fateh', 'Al Fateh'],
]

function DesignCard({ design, onOpen }) {
  return (
    <article className="design-card">
      <button className="design-preview" type="button" onClick={() => onOpen(design)} aria-label={`View full design: ${design.title}`}>
        <img src={design.thumb} alt={design.alt} width={design.width} height={design.height} loading="lazy" />
        <span>View full design ↗</span>
      </button>
      <div className="design-caption"><p>{design.category}</p><h3>{design.title}</h3></div>
    </article>
  )
}

function DesignViewer({ design, onClose }) {
  const dialog = useRef(null)
  useEffect(() => {
    if (!design) return undefined
    const target = dialog.current
    const trigger = document.activeElement
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    target.showModal()
    return () => {
      target.close()
      document.body.style.overflow = overflow
      trigger?.focus()
    }
  }, [design])
  return (
    <dialog ref={dialog} className="design-dialog" aria-labelledby="design-dialog-title" onCancel={onClose}
      onClick={(event) => { if (event.target === event.currentTarget) onClose() }}>
      {design && <>
        <header><div><p>{design.category} · AI-assisted design</p><h2 id="design-dialog-title">{design.title}</h2></div>
          <div><a href={design.src} target="_blank" rel="noopener noreferrer">Open full-size image ↗</a><button type="button" onClick={onClose} autoFocus>Close</button></div>
        </header>
        <div className="design-dialog-image"><img src={design.src} alt={design.alt} width={design.width} height={design.height} /></div>
      </>}
    </dialog>
  )
}

export default function AIDesigns() {
  const [category, setCategory] = useState('all')
  const [limit, setLimit] = useState(12)
  const [active, setActive] = useState(null)
  const filtered = designs.filter((design) => category === 'all' || design.group === category)
  return (
    <article className="design-page">
      <header className="design-hero"><div className="wrap design-hero-grid">
        <div><p className="eyebrow">AI-assisted social design · Al Mahy + Al Fateh</p>
          <h1>One visual language.<br /><em>Five service stories.</em></h1>
          <p className="lede">Social campaign designs I created for legal, corporate, debt collection, notary, and accounting services—using AI imagery with a consistent branded layout.</p>
          <div className="hero-actions"><a className="btn btn-primary" href="#design-selection">View selected designs</a><Link className="btn btn-ghost" to="/ai-videos">See AI videos</Link></div>
        </div>
        <div className="design-hero-art" aria-hidden="true">
          {['notary-aug-29', 'fateh-poster-1', 'legal-aug-26'].map((id) => {
            const design = designs.find((item) => item.id === id)
            return <img key={id} src={design.thumb} alt="" width={design.width} height={design.height} />
          })}
        </div>
      </div></header>
      <section className="wrap design-context" aria-label="Project scope">
        <div><span>My contribution</span><p>AI-assisted visual creation and social-design layouts.</p></div>
        <div><span>Work shown</span><p>57 supplied designs and variations across five service categories.</p></div>
        <div><span>Evidence boundary</span><p>Creative samples, not campaign-performance claims. Publication and professional review are not verified here.</p></div>
      </section>
      <section className="section" id="design-selection"><div className="wrap">
        <Reveal><div className="section-head"><p className="eyebrow">Start here</p><h2>Six designs that show the range.</h2><p>Service posters, document-led layouts, visual metaphors, and bilingual explainers. Open a design to inspect its complete composition and typography.</p></div></Reveal>
        <div className="design-grid">{designs.filter((design) => design.featured).map((design) => <DesignCard key={design.id} design={design} onOpen={setActive} />)}</div>
      </div></section>
      <section className="section section-glass" id="design-library"><div className="wrap">
        <div className="section-head"><p className="eyebrow">Complete collection</p><h2>Browse by service.</h2><p>The source artwork is preserved. Gallery copies are optimized for the web, with no cropping of the designs.</p></div>
        <div className="design-filters" role="group" aria-label="Filter designs by service">
          {categories.map(([id, label]) => <button type="button" key={id} aria-pressed={category === id} onClick={() => { setCategory(id); setLimit(12) }}>{label}<span>{id === 'all' ? designs.length : designs.filter((design) => design.group === id).length}</span></button>)}
        </div>
        <p className="design-count" role="status">Showing {Math.min(limit, filtered.length)} of {filtered.length} designs</p>
        <div className="design-grid">{filtered.slice(0, limit).map((design) => <DesignCard key={design.id} design={design} onOpen={setActive} />)}</div>
        {limit < filtered.length && <div className="design-more"><button className="btn btn-dark" type="button" onClick={() => setLimit((value) => value + 12)}>Show more designs</button></div>}
        <aside className="design-disclosure"><strong>About the imagery and text</strong><p>People, scenes, documents, and dashboards in these AI-assisted designs are illustrative—not evidence of real clients, transactions, or outcomes. Legal and tax text is shown as part of the supplied artwork, not as advice or a verified current statement of law.</p></aside>
      </div></section>
      <DesignViewer design={active} onClose={() => setActive(null)} />
    </article>
  )
}
