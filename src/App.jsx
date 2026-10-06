import { Routes, Route, useLocation } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import SplashScreen from './components/SplashScreen.jsx'
import PageLoader from './components/PageLoader.jsx'
import AmbientBackground from './components/AmbientBackground.jsx'
import Seo from './components/Seo.jsx'

// Home ships in the initial bundle; everything else loads on demand.
const CaseStudy = lazy(() => import('./pages/CaseStudy.jsx'))
const PaidAds = lazy(() => import('./pages/PaidAds.jsx'))
const AIVideos = lazy(() => import('./pages/AIVideos.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <AmbientBackground />
      <SplashScreen />
      <PageLoader />
      <Seo />
      <ScrollManager />
      <Nav />
      <main id="main" tabIndex={-1}>
        <Suspense fallback={<div className="route-fallback" aria-hidden="true" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/paid-ads" element={<PaidAds />} />
            <Route path="/ai-videos" element={<AIVideos />} />
            <Route path="/work/:slug" element={<CaseStudy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
