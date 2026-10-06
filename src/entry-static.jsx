// ============================================================
// Build-time rendering entry. Mirrors App.jsx's route table but
// imports the pages eagerly (lazy() can't be resolved by a
// synchronous renderToString pass).
// The browser still gets the lazy, code-split version from App.jsx.
// ============================================================
import { StaticRouter } from 'react-router-dom/server'
import { Routes, Route } from 'react-router-dom'
import { renderToString } from 'react-dom/server'

import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import AmbientBackground from './components/AmbientBackground.jsx'
import Home from './pages/Home.jsx'
import CaseStudy from './pages/CaseStudy.jsx'
import PaidAds from './pages/PaidAds.jsx'
import AIVideos from './pages/AIVideos.jsx'
import NotFound from './pages/NotFound.jsx'

function StaticApp() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <AmbientBackground />
      <Nav />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paid-ads" element={<PaidAds />} />
          <Route path="/ai-videos" element={<AIVideos />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export function renderRoute(url) {
  return renderToString(
    <StaticRouter location={url}>
      <StaticApp />
    </StaticRouter>,
  )
}

export { routes, metaForPath, personJsonLd } from './seo.js'
export { site } from './data/site.js'
