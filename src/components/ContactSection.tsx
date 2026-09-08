import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    interest: 'Build a Custom Product / Client Project',
    teamSize: '10-50',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 900)
  }

  return (
    <section id="contact" className="py-14 lg:py-16 bg-[#f8f9fa] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="card-white-shadow rounded-3xl p-6 sm:p-10 lg:p-12 bg-white border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Contact & Global Hubs */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <p className="text-[#1b95cd] font-['Poppins'] font-semibold text-sm uppercase tracking-wider mb-2">
                  Contact Our Engineering & Sales Team
                </p>
                <h2 className="font-['Poppins'] font-bold text-3xl sm:text-4xl text-[#0d2335] tracking-tight leading-tight mb-4">
                  Let's Build, Buy, or Support Your Next Big Solution
                </h2>
                <p className="font-['Inter'] text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                  Whether you want us to build a custom product from your business requirements, purchase and license one of our turnkey solutions, or set up 24/7 dedicated enterprise support — our team is ready to partner with you.
                </p>

                {/* Direct Contact Cards */}
                <div className="space-y-3.5 mb-8">
                  <a
                    href="mailto:support@moss-tech.com"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#1b95cd]/40 hover:bg-blue-50/40 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-blue-100 text-[#1b95cd] flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[11px] font-['Poppins'] text-slate-400 font-medium">DIRECT EMAIL & SALES</div>
                      <div className="font-['Poppins'] font-semibold text-sm text-[#0d2335] group-hover:text-[#1b95cd] transition-colors">
                        support@moss-tech.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+917028295228"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#1b95cd]/40 hover:bg-blue-50/40 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-blue-100 text-[#1b95cd] flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[11px] font-['Poppins'] text-slate-400 font-medium">PHONE & WHATSAPP</div>
                      <div className="font-['Poppins'] font-semibold text-sm text-[#0d2335] group-hover:text-[#1b95cd] transition-colors">
                        +91-7028295228
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="w-11 h-11 rounded-xl bg-blue-100 text-[#1b95cd] flex items-center justify-center font-bold">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[11px] font-['Poppins'] text-slate-400 font-medium">HEADQUARTERS & HUBS</div>
                      <div className="font-['Poppins'] font-semibold text-sm text-[#0d2335]">
                        Bangalore & Nagpur, India
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1b95cd] animate-pulse" />
                <div className="text-xs font-['Inter'] text-slate-600">
                  <span className="text-[#0d2335] font-semibold">Average Response Time:</span> Under 2 business hours for custom project & product inquiries.
                </div>
              </div>
            </div>

            {/* Right Column: HotelKey Demo Booking Form */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                <div className="p-8 sm:p-12 rounded-2xl bg-slate-50 border border-slate-200 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-['Poppins'] font-bold text-2xl text-[#0d2335] mb-2">
                    Inquiry Submitted Successfully!
                  </h3>
                  <p className="font-['Inter'] text-sm text-slate-600 max-w-md mx-auto mb-8">
                    Thank you, {formData.firstName}. A senior solutions architect from Moss will review your project details and get in touch within 2 hours.
                  </p>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 text-left max-w-md mx-auto mb-8 space-y-2 text-xs font-['Poppins']">
                    <div className="flex justify-between text-slate-500">
                      <span>Inquiry Focus:</span>
                      <span className="text-[#1b95cd] font-semibold">{formData.interest}</span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Target Contact:</span>
                      <span className="text-[#0d2335] font-medium">{formData.email}</span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Ticket Reference:</span>
                      <span className="text-emerald-700 font-semibold font-['JetBrains_Mono']">#MOSS-{Math.floor(100000 + Math.random() * 900000)}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        company: '',
                        role: '',
                        interest: 'Build a Custom Product / Client Project',
                        teamSize: '10-50',
                        message: '',
                      })
                    }}
                    className="btn-secondary-outline px-6 py-2.5 rounded-xl text-xs font-['Poppins'] font-medium"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4"
                >
                  <div className="border-b border-slate-200 pb-3 mb-2">
                    <h3 className="font-['Poppins'] font-bold text-lg text-[#0d2335]">
                      Discuss Your Project, Product Purchase or Support
                    </h3>
                    <p className="font-['Inter'] text-xs text-slate-500">
                      Tell us what you want to build or buy, and our team will get back with a roadmap & proposal.
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
                        placeholder="Sharma"
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-[#0d2335] placeholder-slate-400 focus:outline-none focus:border-[#1b95cd] focus:ring-2 focus:ring-[#1b95cd]/15 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Company */}
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
                        Company / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Enterprise Corp"
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
                        <option value="Build a Custom Product / Client Project">🛠️ I want to Build a Custom Product / Project</option>
                        <option value="Buy / License Moss AI Mapper">📦 I want to Buy / License Moss AI Mapper</option>
                        <option value="Buy / License Moss Tech Academy">🎓 I want to Buy / License Moss Tech Platform</option>
                        <option value="Buy / License Moss Media Studio">✦ I want to Inquire About Moss Media</option>
                        <option value="Enterprise 24/7 Support & Maintenance">🛡️ I need Enterprise 24/7 Support & SLAs</option>
                        <option value="General Enterprise Consultation">💬 General Enterprise Consultation</option>
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
                        <option value="1-10">Small Project / 1 - 10 Users</option>
                        <option value="10-50">Mid-Sized / 10 - 50 Users</option>
                        <option value="50-200">Large / 50 - 200 Users</option>
                        <option value="200+">Enterprise-Wide / 200+ Users</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-['Poppins'] font-semibold text-[#0d2335] mb-1.5">
                      Project Requirements, Desired Features or Timeline
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what product you want to build, which solution you want to license, or what support SLA you require..."
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-[#0d2335] placeholder-slate-400 focus:outline-none focus:border-[#1b95cd] focus:ring-2 focus:ring-[#1b95cd]/15 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary-blue w-full py-3.5 rounded-xl font-['Poppins'] font-medium text-sm tracking-wide disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? 'Processing Request...' : 'Send Inquiry to Moss Team →'}
                  </button>

                  <p className="text-center font-['Inter'] text-[11px] text-slate-400">
                    🔒 All submissions protected by enterprise NDA and zero data retention standards.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

