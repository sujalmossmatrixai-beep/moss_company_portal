import { useState } from 'react'

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newsletterEmail) {
      setSubscribed(true)
    }
  }

  return (
    <footer className="bg-white border-t border-slate-200 pt-12 pb-8 text-slate-600 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-slate-200">
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="flex items-center gap-2.5 mb-4 group"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1b95cd] to-[#1579b0] flex items-center justify-center text-white font-bold shadow-sm">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>
                <span className="font-['Poppins'] font-bold text-2xl text-[#0d2335] tracking-tight">
                  moss <span className="text-[#1b95cd]">nexus.</span>
                </span>
              </a>

              <p className="font-['Inter'] text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm mb-6">
                The Unified Enterprise Ecosystem: Autonomous Database Migration, Complete Hospital AI Package, Bespoke Client Agents, and Engineering Academy.
              </p>
            </div>

            {/* Live Operational Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-['Poppins'] font-medium w-fit mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>All Systems Operational · 99.99% SLA</span>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-2 text-slate-500">
              <a
                href="https://youtube.com/@moss-tech-hr?si=Hs0pXumjjgu9YS0W"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 hover:border-red-300 hover:bg-red-50 hover:text-red-600 flex items-center justify-center transition-colors text-slate-600"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1CDDiGghzJ/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 flex items-center justify-center transition-colors text-slate-600"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1CDDiGghzJ/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 hover:border-pink-300 hover:bg-pink-50 hover:text-pink-600 flex items-center justify-center transition-colors text-slate-600"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 1: Products */}
          <div className="lg:col-span-2">
            <h4 className="font-['Poppins'] font-semibold text-xs text-[#0d2335] uppercase tracking-wider mb-4">
              Moss Nexus Solutions
            </h4>
            <ul className="space-y-2.5 text-xs font-['Inter']">
              <li>
                <a
                  href="https://www.moss-ai-mapper.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1b95cd] transition-colors flex items-center gap-1.5 text-slate-600"
                >
                  <span>Moss Migration</span>
                  <span className="text-[10px] text-[#1b95cd] bg-blue-50 px-1.5 py-0.2 rounded border border-blue-200">Live</span>
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-[#1b95cd] transition-colors flex items-center gap-1.5 text-slate-600"
                >
                  <span>Moss Med AI</span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">Hospital</span>
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#1b95cd] transition-colors flex items-center gap-1.5 text-slate-600"
                >
                  <span>Moss Tech (Custom Solutions)</span>
                  <span className="text-[10px] text-purple-700 bg-purple-50 px-1.5 py-0.2 rounded border border-purple-200">Bespoke</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.moss-tech.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1b95cd] transition-colors flex items-center gap-1.5 text-slate-600"
                >
                  <span>Moss Academy</span>
                  <span className="text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200">Live</span>
                </a>
              </li>
              <li>
                <a href="#techstack" className="hover:text-[#1b95cd] transition-colors text-slate-600 flex items-center gap-1.5">
                  <span>Cloud & AI Stack</span>
                  <span className="text-[10px] text-[#1b95cd] bg-blue-50 px-1.5 py-0.2 rounded border border-blue-200">Specs</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Offerings & Engagement */}
          <div className="lg:col-span-2">
            <h4 className="font-['Poppins'] font-semibold text-xs text-[#0d2335] uppercase tracking-wider mb-4">
              Engagement
            </h4>
            <ul className="space-y-2.5 text-xs font-['Inter']">
              <li>
                <a href="#services" className="hover:text-[#1b95cd] transition-colors text-slate-600">
                  Custom Engineering
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#1b95cd] transition-colors text-slate-600">
                  Turnkey Software
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#1b95cd] transition-colors text-slate-600">
                  24/7 Enterprise Support
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#1b95cd] transition-colors text-slate-600">
                  Contact Team
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#1b95cd] transition-colors text-slate-600">
                  Enterprise FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter & Updates */}
          <div className="lg:col-span-4">
            <h4 className="font-['Poppins'] font-semibold text-xs text-[#0d2335] uppercase tracking-wider mb-4">
              Engineering Dispatch
            </h4>
            <p className="font-['Inter'] text-xs text-slate-500 mb-4">
              Receive quarterly technical whitepapers, database migration benchmarks, and agent architecture blueprints.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-700 font-['Poppins']">
                ✓ Subscribed to Moss Nexus Engineering updates.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="engineer@company.com"
                  className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-[#0d2335] placeholder-slate-400 focus:outline-none focus:border-[#1b95cd]"
                />
                <button
                  type="submit"
                  className="btn-primary-blue px-4 py-2 rounded-xl font-['Poppins'] font-medium text-xs shadow-sm cursor-pointer"
                >
                  Join
                </button>
              </form>
            )}

            <div className="mt-4 flex items-center gap-3 text-xs text-slate-400 font-['Inter']">
              <span>Bangalore Hub</span>
              <span>•</span>
              <span>Nagpur Hub</span>
              <span>•</span>
              <span>Global Enterprise Deployments</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-['Inter'] text-slate-500">
          <div>
            © 2026 Moss Nexus Technologies Inc. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="mailto:hr@moss-tech.com" className="hover:text-[#1b95cd] transition-colors">
              hr@moss-tech.com
            </a>
            <div className="flex items-center gap-1.5">
              <a href="tel:+918867475219" className="hover:text-[#1b95cd] transition-colors">
                +91-8867475219
              </a>
              <span className="text-slate-300">/</span>
              <a href="tel:+918669502045" className="hover:text-[#1b95cd] transition-colors">
                +91-8669502045
              </a>
            </div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="hover:text-[#1b95cd] transition-colors font-medium cursor-pointer"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
