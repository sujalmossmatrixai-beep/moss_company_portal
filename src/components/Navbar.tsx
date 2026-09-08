import React, { useState, useEffect } from 'react'
import TechStackModal from './TechStackModal'

interface NavbarProps {
  onGoHome?: () => void
  onOpenDemo?: () => void
  onOpenTechStack?: () => void
}

export default function Navbar({ onGoHome, onOpenTechStack }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [techModalOpen, setTechModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ['products', 'services', 'testimonials', 'faq', 'contact']
      const current = sections.find((sec) => {
        const el = document.getElementById(sec)
        if (el) {
          const rect = el.getBoundingClientRect()
          return rect.top <= 200 && rect.bottom >= 200
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Solutions', href: '#products' },
    { name: 'Services & Engagement', href: '#services' },
    { name: 'Customer Impact', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    setTechDropdownOpen(false)
    if (onGoHome) {
      onGoHome()
    }
    setTimeout(() => {
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 50)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] py-3.5'
            : 'bg-white border-b border-slate-100 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
            onClick={(e) => {
              e.preventDefault()
              if (onGoHome) onGoHome()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#1b95cd] to-[#1579b0] shadow-[0_4px_12px_rgba(27,149,205,0.3)] group-hover:scale-105 transition-transform duration-200">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>

            <div className="flex items-baseline">
              <span className="font-['Poppins'] font-bold text-2xl tracking-tight text-[#0d2335]">
                moss<span className="text-[#1b95cd]">.</span>
              </span>
              <span className="ml-2 hidden sm:inline-block font-['Inter'] text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                Enterprise AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            <a
              href="#products"
              onClick={(e) => handleNavClick(e, '#products')}
              className={`px-4 py-2 text-sm font-['Poppins'] font-medium transition-all duration-150 rounded-lg ${
                activeSection === 'products'
                  ? 'text-[#1b95cd] bg-blue-50/60 font-semibold'
                  : 'text-slate-600 hover:text-[#1b95cd] hover:bg-slate-50'
              }`}
            >
              Solutions
            </a>

            <a
              href="#services"
              onClick={(e) => handleNavClick(e, '#services')}
              className={`px-4 py-2 text-sm font-['Poppins'] font-medium transition-all duration-150 rounded-lg ${
                activeSection === 'services'
                  ? 'text-[#1b95cd] bg-blue-50/60 font-semibold'
                  : 'text-slate-600 hover:text-[#1b95cd] hover:bg-slate-50'
              }`}
            >
              Services & Engagement
            </a>

            <a
              href="#testimonials"
              onClick={(e) => handleNavClick(e, '#testimonials')}
              className={`px-4 py-2 text-sm font-['Poppins'] font-medium transition-all duration-150 rounded-lg ${
                activeSection === 'testimonials'
                  ? 'text-[#1b95cd] bg-blue-50/60 font-semibold'
                  : 'text-slate-600 hover:text-[#1b95cd] hover:bg-slate-50'
              }`}
            >
              Customer Impact
            </a>

            <a
              href="#faq"
              onClick={(e) => handleNavClick(e, '#faq')}
              className={`px-4 py-2 text-sm font-['Poppins'] font-medium transition-all duration-150 rounded-lg ${
                activeSection === 'faq'
                  ? 'text-[#1b95cd] bg-blue-50/60 font-semibold'
                  : 'text-slate-600 hover:text-[#1b95cd] hover:bg-slate-50'
              }`}
            >
              FAQ
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                if (onOpenTechStack) onOpenTechStack()
                else setTechModalOpen(true)
              }}
              className="text-slate-600 hover:text-[#1b95cd] font-['Poppins'] text-xs font-semibold px-3 py-2 transition-colors border border-slate-200 rounded-xl hover:border-blue-200 bg-slate-50/50"
            >
              ⚡ Tech Specs
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-primary-blue inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-['Poppins'] font-medium tracking-wide"
            >
              <span>Book a Demo</span>
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-[#1b95cd] focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" 
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-18 right-4 left-4 p-6 bg-white border border-slate-200 rounded-2xl shadow-2xl flex flex-col gap-4 z-50 animate-in fade-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="font-['Poppins'] text-xs text-[#1b95cd] uppercase tracking-wider font-semibold">
                Menu
              </span>
              <span className="text-xs text-slate-400 font-['Inter']">
                Moss Enterprise
              </span>
            </div>

            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2.5 rounded-lg text-sm font-['Poppins'] font-medium text-slate-700 hover:bg-blue-50 hover:text-[#1b95cd] transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false)
                  if (onOpenTechStack) onOpenTechStack()
                  else setTechModalOpen(true)
                }}
                className="px-3 py-2.5 rounded-lg text-sm font-['Poppins'] font-semibold text-[#1b95cd] bg-blue-50/70 hover:bg-blue-100 transition-colors flex items-center justify-between text-left"
              >
                <span>⚡ Cloud, AI & React Stack Specs</span>
                <span>→</span>
              </button>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="btn-primary-blue w-full text-center py-3 px-4 rounded-xl font-['Poppins'] font-medium text-sm"
              >
                Book a Demo
              </a>
              <div className="text-center font-['Inter'] text-xs text-slate-400">
                Support: support@moss-tech.com
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tech Stack Interactive Overlay Modal */}
      <TechStackModal isOpen={techModalOpen} onClose={() => setTechModalOpen(false)} />
    </>
  )
}
