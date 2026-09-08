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
    <footer className="bg-white border-t border-slate-200 pt-12 pb-8 text-slate-600 relative">
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
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span className="font-['Poppins'] font-bold text-2xl text-[#0d2335] tracking-tight">
                  moss<span className="text-[#1b95cd]">.</span>
                </span>
              </a>

              <p className="font-['Inter'] text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm mb-6">
                Engineering next-generation intelligent platforms across automated data migration, elite cloud engineering education, and AI-driven media intelligence.
              </p>
            </div>

            {/* Live Operational Status (HotelKey style) */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-['Poppins'] font-medium w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>All Systems Operational · 99.99% SLA</span>
            </div>
          </div>

          {/* Column 1: Products */}
          <div className="lg:col-span-2">
            <h4 className="font-['Poppins'] font-semibold text-xs text-[#0d2335] uppercase tracking-wider mb-4">
              Products
            </h4>
            <ul className="space-y-2.5 text-xs font-['Inter']">
              <li>
                <a
                  href="https://www.moss-ai-mapper.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1b95cd] transition-colors flex items-center gap-1.5 text-slate-600"
                >
                  <span>Moss AI Mapper</span>
                  <span className="text-[10px] text-[#1b95cd] bg-blue-50 px-1.5 py-0.2 rounded border border-blue-200">Live</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.moss-tech.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1b95cd] transition-colors flex items-center gap-1.5 text-slate-600"
                >
                  <span>Moss Tech Academy</span>
                  <span className="text-[10px] text-[#1b95cd] bg-blue-50 px-1.5 py-0.2 rounded border border-blue-200">Live</span>
                </a>
              </li>
              <li>
                <span className="text-slate-400 flex items-center gap-1.5">
                  <span>Moss Media</span>
                  <span className="text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200">2026</span>
                </span>
              </li>
              <li>
                <a href="#techstack" className="hover:text-[#1b95cd] transition-colors text-slate-600 flex items-center gap-1.5">
                  <span>Cloud, AI & React Stack</span>
                  <span className="text-[10px] text-[#1b95cd] bg-blue-50 px-1.5 py-0.2 rounded border border-blue-200">New</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#1b95cd] transition-colors text-slate-600">
                  Full-Stack Architecture
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
              Receive quarterly technical whitepapers, migration benchmarks, and curriculum releases.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-700 font-['Poppins']">
                ✓ Subscribed to Moss Engineering updates.
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
                  className="btn-primary-blue px-4 py-2 rounded-xl font-['Poppins'] font-medium text-xs shadow-sm"
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
              <span>Global Remote</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-['Inter'] text-slate-500">
          <div>
            © 2026 Moss Technologies. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:support@moss-tech.com" className="hover:text-[#1b95cd] transition-colors">
              support@moss-tech.com
            </a>
            <span>+91-7028295228</span>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="hover:text-[#1b95cd] transition-colors font-medium"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
