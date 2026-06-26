import { Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './components/layout/Layout'
import FloatingWidgets from './components/FloatingWidgets'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Corridors = lazy(() => import('./pages/Corridors'))
const Projects = lazy(() => import('./pages/Projects'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const Services = lazy(() => import('./pages/Services'))
const Insights = lazy(() => import('./pages/Insights'))
const Testimonials = lazy(() => import('./pages/Testimonials'))
const Contact = lazy(() => import('./pages/Contact'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const Disclaimer = lazy(() => import('./pages/Disclaimer'))

function PageLoader() {
  return (
    <div className="min-h-screen bg-navy-deep flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="corridors" element={<Corridors />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:slug" element={<ProjectDetail />} />
            <Route path="services" element={<Services />} />
            <Route path="insights" element={<Insights />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="disclaimer" element={<Disclaimer />} />
            <Route path="invest" element={<Navigate to="/contact" replace />} />
            <Route path="sell" element={<Navigate to="/contact" replace />} />
            <Route path="tools" element={<Navigate to="/insights" replace />} />
          </Route>
        </Routes>
      </Suspense>
      <FloatingWidgets />
    </>
  )
}
