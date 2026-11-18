import { lazy, Suspense, useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Footer from './components/Footer'
import Home from './pages/Home'

const About = lazy(() => import('./pages/About'))
const PracticeAreas = lazy(() => import('./pages/PracticeAreas'))
const Attorneys = lazy(() => import('./pages/Attorneys'))
const Insights = lazy(() => import('./pages/Insights'))
const Article = lazy(() => import('./pages/Article'))
const Careers = lazy(() => import('./pages/Careers'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

/** Scroll to top on route change, or to the #hash target once the page has rendered. */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  const prevPath = useRef(null)
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    // Animate only for in-page jumps; a new page should land on its anchor instantly.
    const smooth = prevPath.current === pathname
    prevPath.current = pathname
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }
    let tries = 0
    let timer
    const id = decodeURIComponent(hash.slice(1))
    const tick = () => {
      const el = document.getElementById(id)
      if (el) {
        // let the lazy-loaded page lay out before measuring
        timer = setTimeout(() => {
          const offset = parseFloat(getComputedStyle(el).scrollMarginTop) || 16
          const top = el.getBoundingClientRect().top + window.scrollY - offset
          window.scrollTo({ top, behavior: smooth ? 'smooth' : 'instant' })
        }, 30)
      } else if (tries++ < 60) timer = setTimeout(tick, 50)
    }
    timer = setTimeout(tick, 60)
    return () => clearTimeout(timer)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand focus:px-5 focus:py-3 focus:text-white"
      >
        Skip to content
      </a>
      <ScrollManager />
      <Suspense fallback={<div className="min-h-screen" aria-busy="true" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/practice-areas" element={<PracticeAreas />} />
          <Route path="/attorneys" element={<Attorneys />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<Article />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </MotionConfig>
  )
}
