import React, { useState } from 'react'
import { saveLead, ProductCategory, exportMasterExcelWorkbook } from '../utils/leadStorage'

interface ContactSectionProps {
  onOpenLeadExport?: () => void
}

export default function ContactSection({ onOpenLeadExport }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    interest: 'Moss Tech: Build Your Custom Solution',
    teamSize: '10-50',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText('hr@moss-tech.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Automatically categorize into the right Excel sheet
    let category: ProductCategory = 'Custom AI Solutions'
    if (formData.interest.includes('Med AI') || formData.interest.includes('Hospital')) {
      category = 'Moss Med AI'
    } else if (formData.interest.includes('Migration') || formData.interest.includes('Mapper')) {
      category = 'Moss AI Mapper'
    } else if (formData.interest.includes('Academy') || formData.interest.includes('Enroll')) {
      category = 'Moss Academy Inquiries'
    }

    saveLead({
      fullName: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      phone: formData.phone || '+91-8867475219',
      organization: formData.company,
      productCategory: category,
      specificItem: formData.interest,
      message: formData.message || `Team scope: ${formData.teamSize} users. Role: ${formData.role || 'Unspecified'}`,
      source: 'Homepage Demo & Consultation Booking Form',
    })

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 600)
  }

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          BOOKING & CONSULTATION SECTION: Form & Engagement
          ───────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-12 lg:py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="card-white-shadow rounded-3xl p-6 sm:p-10 lg:p-12 bg-white border border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Consultation Value Proposition */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full text-left">
                <div>
                  <span className="text-[#1b95cd] font-['Poppins'] font-semibold text-xs uppercase tracking-wider mb-2 inline-block">
                    Enterprise Consultation & Demo
                  </span>
                  <h2 className="font-['Poppins'] font-bold text-2.5xl sm:text-3xl lg:text-4xl text-[#0d2335] tracking-tight leading-tight mb-4">
                    Let's Partner on Migration, Hospital AI, Custom Agents, or Academy
                  </h2>
                  <p className="font-['Inter'] text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    Whether you want Moss Tech to engineer custom solutions and autonomous agents for your business, license <strong>Moss Migration</strong>, deploy the <strong>Moss Med AI</strong> hospital ecosystem, enroll in <strong>Moss Academy</strong>, or set up 24/7 enterprise SLAs — our senior architects are here to guide you.
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="w-5 h-5 rounded-full bg-blue-100 text-[#1b95cd] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        ✓
                      </div>
                      <div>
                        <div className="font-['Poppins'] font-semibold text-xs text-[#0d2335]">
                          1-on-1 Scoping with Senior Tech Leads
                        </div>
                        <div className="font-['Inter'] text-[11px] text-slate-500">
                          Direct technical review without generic sales layers.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="w-5 h-5 rounded-full bg-blue-100 text-[#1b95cd] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        ✓
                      </div>
                      <div>
                        <div className="font-['Poppins'] font-semibold text-xs text-[#0d2335]">
                          Enterprise NDA & Data Isolation
                        </div>
                        <div className="font-['Inter'] text-[11px] text-slate-500">
                          Full confidentiality agreements with Zero Data Retention policies.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="w-5 h-5 rounded-full bg-blue-100 text-[#1b95cd] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        ✓
                      </div>
                      <div>
                        <div className="font-['Poppins'] font-semibold text-xs text-[#0d2335]">
                          Milestone-Driven Delivery Roadmap
                        </div>
                        <div className="font-['Inter'] text-[11px] text-slate-500">
                          Detailed architectural specification, fixed deliverables, and clear timelines.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-['Inter'] text-slate-500">
                  Prefer direct phone or email?{' '}
                  <a href="#connect" className="text-[#1b95cd] font-semibold hover:underline">
                    View direct phone lines and email below ↓
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Consultation Booking Form */}
              <div className="lg:col-span-7">
                {isSubmitted ? (
                  <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-blue-50/60 to-sky-50/40 border border-blue-200/80 text-center animate-in fade-in duration-300">
                    <div className="w-16 h-16 rounded-full bg-[#1b95cd] text-white flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg">
                      ✓
                    </div>
                    <h3 className="font-['Poppins'] font-bold text-2xl text-[#0d2335] mb-2">
                      Inquiry Received!
                    </h3>
                    <p className="font-['Inter'] text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                      Thank you, <span className="font-semibold text-[#0d2335]">{formData.firstName}</span>. A senior Moss Nexus solutions architect will review your requirements and reach out within 4 business hours.
                    </p>
                    <div className="p-4 rounded-xl bg-white border border-blue-100 text-xs font-['Inter'] text-slate-500 max-w-sm mx-auto mb-6 text-left">
                      <p className="font-semibold text-slate-700 mb-1">Summary of Request:</p>
                      <p>• Solution Interest: {formData.interest}</p>
                      <p>• Organization: {formData.company || 'Enterprise'}</p>
                      <p>• Phone / WhatsApp: {formData.phone || '+91-8867475219'}</p>
                    </div>

                    <button
                      onClick={() => {
                        setIsSubmitted(false)
                        setFormData({
                          firstName: '',
                          lastName: '',
                          email: '',
                          phone: '',
                          company: '',
                          role: '',
                          interest: 'Moss Tech: Build Your Custom Solution',
                          teamSize: '10-50',
                          message: '',
                        })
                      }}
                      className="text-xs text-slate-500 hover:text-slate-800 underline font-['Poppins'] cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div className="border-b border-slate-100 pb-3 mb-2">
                      <h3 className="font-['Poppins'] font-bold text-lg text-[#0d2335]">
                        Schedule Architecture Scoping Session
                      </h3>
                      <p className="font-['Inter'] text-xs text-slate-500">
                        Fill in your details below and an engineer will connect with you.
                      </p>
                    </div>

                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-['Poppins'] font-semibold text-[#0d2335] mb-1.5">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          placeholder="Satish"
                          className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-[#0d2335] placeholder-slate-400 focus:outline-none focus:border-[#1b95cd] focus:ring-2 focus:ring-[#1b95cd]/15 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-['Poppins'] font-semibold text-[#0d2335] mb-1.5">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          placeholder="Kumar"
                          className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-[#0d2335] placeholder-slate-400 focus:outline-none focus:border-[#1b95cd] focus:ring-2 focus:ring-[#1b95cd]/15 transition-all"
                        />
                      </div>
                    </div>

                    {/* Work Email & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-['Poppins'] font-semibold text-[#0d2335] mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="satish@enterprise.com"
                          className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-[#0d2335] placeholder-slate-400 focus:outline-none focus:border-[#1b95cd] focus:ring-2 focus:ring-[#1b95cd]/15 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-['Poppins'] font-semibold text-[#0d2335] mb-1.5">
                          Company or Hospital Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="MetroHealth System / Enterprise Corp"
                          className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-[#0d2335] placeholder-slate-400 focus:outline-none focus:border-[#1b95cd] focus:ring-2 focus:ring-[#1b95cd]/15 transition-all"
                        />
                      </div>
                    </div>

                    {/* Interest & Team Size */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-['Poppins'] font-semibold text-[#0d2335] mb-1.5">
                          How Can We Help You? *
                        </label>
                        <select
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-[#0d2335] focus:outline-none focus:border-[#1b95cd] focus:ring-2 focus:ring-[#1b95cd]/15 transition-all"
                        >
                          <option value="Moss Tech: Build Your Custom Solution">🛠️ Moss Tech: Build Your Custom Solution</option>
                          <option value="Buy / License Moss Migration">⚡ Buy / License Moss Migration (Database Migration)</option>
                          <option value="Deploy Moss Med AI Hospital Package">🩺 Deploy Moss Med AI (Hospital Ecosystem Package)</option>
                          <option value="Enroll / Corporate Upskilling with Moss Academy">🎓 Enroll / Corporate Upskilling with Moss Academy</option>
                          <option value="Enterprise 24/7 Support & Maintenance">🛡️ Enterprise 24/7 Support & SLAs</option>
                          <option value="General Enterprise Consultation">💬 General Enterprise Consultation & Architecture Review</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-['Poppins'] font-semibold text-[#0d2335] mb-1.5">
                          Estimated Scope / Team Size
                        </label>
                        <select
                          value={formData.teamSize}
                          onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-[#0d2335] focus:outline-none focus:border-[#1b95cd] focus:ring-2 focus:ring-[#1b95cd]/15 transition-all"
                        >
                          <option value="1-10">Departmental / 1 - 10 Users</option>
                          <option value="10-50">Mid-Sized / 10 - 50 Users</option>
                          <option value="50-200">Large Hospital / 50 - 200 Users</option>
                          <option value="200+">Enterprise-Wide / 200+ Users</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-['Poppins'] font-semibold text-[#0d2335] mb-1.5">
                        Project Requirements or Notes (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly describe your database migration goals, hospital EHR requirements, custom agent ideas, or training cohort scope..."
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-[#0d2335] placeholder-slate-400 focus:outline-none focus:border-[#1b95cd] focus:ring-2 focus:ring-[#1b95cd]/15 transition-all resize-none"
                      />
                    </div>

                    {/* Submit CTA */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-primary-blue py-3.5 px-6 rounded-xl font-['Poppins'] font-semibold text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            <span>Transmitting Secure Request...</span>
                          </>
                        ) : (
                          <>
                            <span>Schedule Consultation</span>
                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </>
                        )}
                      </button>
                      <p className="text-[11px] font-['Inter'] text-slate-400 text-center mt-2.5">
                        🔒 All submissions protected by enterprise NDA and Zero Data Retention standards.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          COMPACT SECTION: Direct Contact Channels & Global Hubs
          (Placed immediately above footer)
          ───────────────────────────────────────────────────────────── */}
      <section id="connect" className="py-7 lg:py-8 bg-slate-50 border-t border-b border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Compact Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4">
            <div>
              <span className="text-[#1b95cd] font-['Poppins'] font-semibold text-[10px] tracking-wider uppercase">
                Direct Channels & Global Reach
              </span>
              <h2 className="font-['Poppins'] font-bold text-lg sm:text-xl text-[#0d2335] tracking-tight">
                Connect Directly with Moss Nexus
              </h2>
            </div>
            <p className="font-['Inter'] text-[11px] sm:text-xs text-slate-500">
              Immediate contact lines, engineering offices, and official social channels.
            </p>
          </div>

          {/* 4 Compact, Sleek Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Card 1: Direct Email */}
            <div className="bg-white rounded-xl p-3 sm:p-3.5 border border-slate-200 shadow-xs hover:border-[#1b95cd]/40 hover:shadow-sm transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-['Poppins'] text-slate-400 font-semibold uppercase tracking-wider">
                    Direct Email
                  </span>
                  <div className="w-6 h-6 rounded-md bg-blue-50 text-[#1b95cd] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <a
                  href="mailto:hr@moss-tech.com"
                  className="font-['Poppins'] font-semibold text-xs sm:text-sm text-[#0d2335] hover:text-[#1b95cd] transition-colors break-all block"
                >
                  hr@moss-tech.com
                </a>
                <p className="text-[10.5px] font-['Inter'] text-slate-500 mt-1">
                  HR & solutions desk for fast turnaround.
                </p>
              </div>

              <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="mailto:hr@moss-tech.com"
                  className="text-[11px] font-['Poppins'] font-medium text-[#1b95cd] hover:underline"
                >
                  Send email →
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-[10px] font-['Poppins'] px-1.5 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                >
                  {copiedEmail ? '✓ Copied' : 'Copy'}
                </button>
              </div>
            </div>

            {/* Card 2: Phone & WhatsApp */}
            <div className="bg-white rounded-xl p-3 sm:p-3.5 border border-slate-200 shadow-xs hover:border-[#1b95cd]/40 hover:shadow-sm transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-['Poppins'] text-slate-400 font-semibold uppercase tracking-wider">
                    Phone & WhatsApp
                  </span>
                  <div className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col gap-0.5">
                  <a
                    href="tel:+918867475219"
                    className="font-['Poppins'] font-semibold text-xs sm:text-sm text-[#0d2335] hover:text-[#1b95cd] transition-colors"
                  >
                    +91-8867475219
                  </a>
                  <a
                    href="tel:+918669502045"
                    className="font-['Poppins'] font-semibold text-xs sm:text-sm text-[#0d2335] hover:text-[#1b95cd] transition-colors"
                  >
                    +91-8669502045
                  </a>
                </div>
                <p className="text-[10.5px] font-['Inter'] text-slate-500 mt-1">
                  Direct client consulting & WhatsApp chat.
                </p>
              </div>

              <div className="pt-2 mt-2 border-t border-slate-100 flex items-center gap-1.5 text-[10.5px] font-['Poppins'] text-emerald-600 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Lines Active</span>
              </div>
            </div>

            {/* Card 3: Headquarters & Hubs */}
            <div className="bg-white rounded-xl p-3 sm:p-3.5 border border-slate-200 shadow-xs hover:border-[#1b95cd]/40 hover:shadow-sm transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-['Poppins'] text-slate-400 font-semibold uppercase tracking-wider">
                    Headquarters & Hubs
                  </span>
                  <div className="w-6 h-6 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div className="font-['Poppins'] font-semibold text-xs sm:text-sm text-[#0d2335]">
                  Bangalore & Nagpur
                </div>
                <div className="text-[10.5px] font-['Poppins'] text-slate-500 font-medium">
                  India · Global Delivery
                </div>
                <p className="text-[10.5px] font-['Inter'] text-slate-500 mt-1">
                  Engineering labs & client delivery centers.
                </p>
              </div>

              <div className="pt-2 mt-2 border-t border-slate-100 text-[10.5px] font-['Poppins'] text-slate-400">
                Enterprise Deployments
              </div>
            </div>

            {/* Card 4: Connect on Social Media */}
            <div className="bg-white rounded-xl p-3 sm:p-3.5 border border-slate-200 shadow-xs hover:border-[#1b95cd]/40 hover:shadow-sm transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-['Poppins'] text-slate-400 font-semibold uppercase tracking-wider">
                    Social Media
                  </span>
                  <div className="w-6 h-6 rounded-md bg-pink-50 text-pink-600 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 mt-1">
                  <a
                    href="https://youtube.com/@moss-tech-hr?si=Hs0pXumjjgu9YS0W"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-red-50 hover:text-red-600 border border-slate-200/80 transition-all text-[11px] font-['Poppins'] font-medium text-slate-700"
                  >
                    <svg className="w-3.5 h-3.5 text-red-600 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span>YouTube Channel</span>
                  </a>

                  <a
                    href="https://www.facebook.com/share/1CDDiGghzJ/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-blue-50 hover:text-blue-600 border border-slate-200/80 transition-all text-[11px] font-['Poppins'] font-medium text-slate-700"
                  >
                    <svg className="w-3.5 h-3.5 text-blue-600 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Facebook Community</span>
                  </a>

                  <a
                    href="https://www.facebook.com/share/1CDDiGghzJ/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-pink-50 hover:text-pink-600 border border-slate-200/80 transition-all text-[11px] font-['Poppins'] font-medium text-slate-700"
                  >
                    <svg className="w-3.5 h-3.5 text-pink-600 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Instagram Profile</span>
                  </a>
                </div>
              </div>

              <div className="pt-2 mt-2 border-t border-slate-100 text-[10.5px] font-['Poppins'] text-slate-400">
                Official Channels
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
