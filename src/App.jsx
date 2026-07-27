import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import CaseStudy from './pages/CaseStudy.jsx'
import PaidAds from './pages/PaidAds.jsx'
import SplashScreen from './components/SplashScreen.jsx'
import PageLoader from './components/PageLoader.jsx'
import AmbientBackground from './components/AmbientBackground.jsx'

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
      <AmbientBackground />
      <SplashScreen />
      <PageLoader />
      <ScrollManager />
      <Nav />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paid-ads" element={<PaidAds />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
