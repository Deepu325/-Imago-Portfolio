import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import WorkPage from './pages/WorkPage'
import ContactPage from './pages/ContactPage'

// Minimal versions for other pages to ensure navigation works
const StubPage = ({ title }) => (
  <div className="bg-imago-green min-h-screen text-imago-cream flex items-center justify-center pt-20">
    <div className="text-center">
      <h1 className="text-6xl font-display">{title}</h1>
      <p className="mt-4 text-imago-gold tracking-widest uppercase">Coming Soon</p>
      <a href="/" className="btn-outline mt-10">Back to Home</a>
    </div>
  </div>
)

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<StubPage title="404" />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
