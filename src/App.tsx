import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServicesModel from './components/ServicesModel'
import ProductShowcase from './components/ProductShowcase'
import Testimonials from './components/Testimonials'
import FAQSection from './components/FAQSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import InteractiveDemoPage from './components/InteractiveDemoPage'
import TechStackPage from './components/TechStackPage'

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'demo' | 'techstack'>('home')
  const [demoProductIndex, setDemoProductIndex] = useState(0)

  // Listen to hash changes
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#interactive-demo') {
        setCurrentView('demo')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (window.location.hash === '#techstack') {
        setCurrentView('techstack')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const handleOpenDemo = (productIndex: number = 0) => {
    setDemoProductIndex(productIndex)
    setCurrentView('demo')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleOpenTechStack = () => {
    setCurrentView('techstack')
    window.location.hash = 'techstack'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToHome = () => {
    setCurrentView('home')
    window.location.hash = 'products'
    setTimeout(() => {
      const el = document.getElementById('products')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
      else window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 50)
  }

  return (
    <div className="bg-white text-[#0d2335] min-h-screen selection:bg-sky-100 selection:text-[#1b95cd]">
      {/* Global Navbar */}
      <Navbar
        onGoHome={() => {
          setCurrentView('home')
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        onOpenDemo={() => handleOpenDemo(0)}
        onOpenTechStack={handleOpenTechStack}
      />

      <main>
        {currentView === 'demo' ? (
          <InteractiveDemoPage
            initialProductIndex={demoProductIndex}
            onBack={handleBackToHome}
          />
        ) : currentView === 'techstack' ? (
          <TechStackPage
            onBack={handleBackToHome}
            onOpenDemo={() => handleOpenDemo(0)}
          />
        ) : (
          <>
            {/* Hero Section */}
            <Hero onOpenDemo={handleOpenDemo} />

            {/* Enterprise Solutions Showcase */}
            <ProductShowcase onOpenDemo={handleOpenDemo} />

            {/* How We Partner: Custom Build, Sell Solutions, 24/7 Support */}
            <ServicesModel />

            {/* Verified Outcomes, Metrics & Customer Reviews */}
            <Testimonials />

            {/* Interactive FAQ Accordion */}
            <FAQSection />

            {/* Enterprise Demo Booking & Consultation Section */}
            <ContactSection />
          </>
        )}
      </main>

      {/* Enterprise Global Footer */}
      <Footer />
    </div>
  )
}

