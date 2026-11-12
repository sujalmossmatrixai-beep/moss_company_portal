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
import ExploreMoreExperience, { ExploreProductType } from './components/explore/ExploreMoreExperience'
import ErrorBoundary from './components/ErrorBoundary'
import LeadExportModal from './components/admin/LeadExportModal'

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'demo' | 'techstack' | 'explore'>('home')
  const [demoProductIndex, setDemoProductIndex] = useState(0)
  const [exploreProduct, setExploreProduct] = useState<ExploreProductType>('med-ai')
  const [exploreItemId, setExploreItemId] = useState<string | undefined>(undefined)
  const [leadExportOpen, setLeadExportOpen] = useState(false)

  // Listen to hash changes and route smoothly
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase()

      if (hash.includes('interactive-demo')) {
        setCurrentView('demo')
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      if (hash.includes('techstack')) {
        setCurrentView('techstack')
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      if (hash.includes('admin-leads')) {
        setLeadExportOpen(true)
      }

      // Check Explore / Product exploration routes
      if (
        hash.startsWith('#/explore') ||
        hash.startsWith('#explore') ||
        hash.startsWith('#/products') ||
        hash.startsWith('#/academy') ||
        hash.startsWith('#/solutions')
      ) {
        let prod: ExploreProductType = 'med-ai'
        let item: string | undefined = undefined

        if (hash.includes('med-ai') || hash.includes('hospital') || hash.includes('doctor') || hash.includes('patient')) {
          prod = 'med-ai'
          if (hash.includes('patient-portal')) item = 'patient-portal'
          else if (hash.includes('doctor-portal')) item = 'doctor-portal'
          else if (hash.includes('hospital-portal')) item = 'hospital-portal'
          else if (hash.includes('pharmacy-portal')) item = 'pharmacy-portal'
          else if (hash.includes('laboratory-portal')) item = 'laboratory-portal'
        } else if (hash.includes('mapper') || hash.includes('migration')) {
          prod = 'mapper'
          if (hash.includes('schema-upload')) item = 'schema-ingestion'
          else if (hash.includes('mapping-engine')) item = 'mapping-engine'
          else if (hash.includes('er-diagram')) item = 'er-visualization'
        } else if (hash.includes('academy') || hash.includes('course') || hash.includes('hackathon')) {
          prod = 'academy'
          if (hash.includes('forward-deployed') || hash.includes('fde')) item = 'forward-deployed-engineering'
          else if (hash.includes('full-stack')) item = 'full-stack-development'
          else if (hash.includes('python')) item = 'python-dsa'
          else if (hash.includes('devops')) item = 'devops'
        } else if (hash.includes('solution') || hash.includes('agent')) {
          prod = 'solutions'
          if (hash.includes('multi-agent')) item = 'multi-agent-systems'
          else if (hash.includes('automation')) item = 'business-automation'
        }

        setExploreProduct(prod)
        setExploreItemId(item)
        setCurrentView('explore')
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      // Standard home anchor links
      if (
        hash === '' ||
        hash === '#' ||
        hash === '#products' ||
        hash === '#services' ||
        hash === '#testimonials' ||
        hash === '#faq' ||
        hash === '#contact'
      ) {
        setCurrentView('home')
      }
    }

    handleHash()
    window.addEventListener('hashchange', handleHash)

    const handleKeyDown = (e: KeyboardEvent) => {
      // Secret admin shortcut (Ctrl+Shift+L) to open leads export modal without visible UI button
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'L' || e.key === 'l')) {
        e.preventDefault()
        setLeadExportOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('hashchange', handleHash)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleOpenDemo = (productIndex: number = 0) => {
    setDemoProductIndex(productIndex)
    setCurrentView('demo')
    window.location.hash = 'interactive-demo'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleOpenTechStack = () => {
    setCurrentView('techstack')
    window.location.hash = 'techstack'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleOpenExplore = (productType: ExploreProductType, itemId?: string) => {
    setExploreProduct(productType)
    setExploreItemId(itemId)
    setCurrentView('explore')
    window.location.hash = itemId ? `/explore/${productType}/${itemId}` : `/explore/${productType}`
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
          window.location.hash = ''
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        onOpenDemo={() => handleOpenDemo(0)}
        onOpenTechStack={handleOpenTechStack}
        onOpenExplore={handleOpenExplore}
      />

      <main>
        {currentView === 'explore' ? (
          <ErrorBoundary onReset={handleBackToHome}>
            <ExploreMoreExperience
              initialProduct={exploreProduct}
              initialItemId={exploreItemId}
              onBackToHome={handleBackToHome}
              onOpenLeadExport={() => setLeadExportOpen(true)}
              onContactClick={() => {
                setCurrentView('home')
                window.location.hash = 'contact'
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }, 60)
              }}
            />
          </ErrorBoundary>
        ) : currentView === 'demo' ? (
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
            <Hero onOpenDemo={handleOpenDemo} onOpenExplore={handleOpenExplore} />

            {/* Enterprise Solutions Showcase */}
            <ProductShowcase onOpenDemo={handleOpenDemo} onOpenExplore={handleOpenExplore} />

            {/* How We Partner: Custom Build, Sell Solutions, 24/7 Support */}
            <ServicesModel />

            {/* Verified Outcomes, Metrics & Customer Reviews */}
            <Testimonials />

            {/* Interactive FAQ Accordion */}
            <FAQSection />

            {/* Enterprise Demo Booking & Consultation Section */}
            <ContactSection onOpenLeadExport={() => setLeadExportOpen(true)} />
          </>
        )}
      </main>

      {/* Enterprise Global Footer */}
      <Footer onOpenLeadExport={() => setLeadExportOpen(true)} />

      {/* Excel Leads Export & Management Modal */}
      <LeadExportModal
        isOpen={leadExportOpen}
        onClose={() => setLeadExportOpen(false)}
      />
    </div>
  )
}
