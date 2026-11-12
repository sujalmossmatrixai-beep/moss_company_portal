import React, { useState, useEffect } from 'react'
import Breadcrumbs from '../navigation/Breadcrumbs'
import { CUSTOM_AI_SOLUTIONS_DATA } from '../../data/productData'
import { saveLead } from '../../utils/leadStorage'

interface CustomSolutionsPageProps {
  selectedSolutionId?: string
  onNavigate: (route: string) => void
  onOpenContactModal?: () => void
}

export default function CustomSolutionsPage({
  selectedSolutionId,
  onNavigate,
  onOpenContactModal,
}: CustomSolutionsPageProps) {
  const [activeSolutionId, setActiveSolutionId] = useState<string>(
    selectedSolutionId || 'custom-ai-agents'
  )
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    solution: '',
    message: '',
  })

  useEffect(() => {
    if (selectedSolutionId) {
      setActiveSolutionId(selectedSolutionId)
    }
  }, [selectedSolutionId])

  const activeSolution =
    CUSTOM_AI_SOLUTIONS_DATA.solutions.find((s) => s.id === activeSolutionId) ||
    CUSTOM_AI_SOLUTIONS_DATA.solutions[0]

  const handleSolutionSelect = (id: string) => {
    setActiveSolutionId(id)
    window.location.hash = `/solutions/${id}`
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    saveLead({
      fullName: formData.name,
      email: formData.email,
      company: formData.company,
      category: 'Custom AI Solutions',
      specificItem: formData.solution || activeSolution.title,
      message: formData.message || `Inquiry for ${formData.solution || activeSolution.title}`,
    })
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setInquiryModalOpen(false)
    }, 2500)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-24 pb-20">
      {/* Top Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Breadcrumbs
          items={[
            { label: 'Home', path: '/' },
            { label: 'Custom AI Solutions', path: '/solutions' },
            ...(activeSolution ? [{ label: activeSolution.title }] : []),
          ]}
          onNavigate={onNavigate}
        />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-900/80 via-slate-950 to-slate-950 py-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(14,165,233,0.18),rgba(255,255,255,0))]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Enterprise Tailored Engineering
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            From Business Challenges to{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Intelligent AI Solutions.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {CUSTOM_AI_SOLUTIONS_DATA.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setInquiryModalOpen(true)}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Request Architecture Consultation
            </button>
            <a
              href="mailto:hr@moss-tech.com?subject=Custom%20AI%20Solutions%20Scoping%20Inquiry"
              className="px-7 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 font-semibold transition-all"
            >
              Direct Email (hr@moss-tech.com)
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400">100%</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Private VPC Deployable</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold text-sky-400">SOC2 & HIPAA</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Zero Data Retention</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400">6 Tracks</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Specialized AI Systems</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400">2-4 Weeks</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Production MVP Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Navigation Pills / Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-8">
          <h2 className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
            Specialized Delivery Capabilities
          </h2>
          <p className="text-2xl font-bold text-white mt-1">Select an AI Solution Track</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CUSTOM_AI_SOLUTIONS_DATA.solutions.map((sol) => {
            const isSelected = sol.id === activeSolutionId
            return (
              <button
                key={sol.id}
                onClick={() => handleSolutionSelect(sol.id)}
                className={`text-left p-5 rounded-2xl border transition-all duration-200 relative overflow-hidden ${
                  isSelected
                    ? 'bg-gradient-to-br from-cyan-950/60 via-slate-900 to-slate-900 border-cyan-500/70 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500/50'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />
                )}
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                    {sol.icon}
                  </span>
                  <div>
                    <h3 className={`font-semibold text-base ${isSelected ? 'text-cyan-300' : 'text-white'}`}>
                      {sol.title}
                    </h3>
                    <span className="text-xs text-slate-400">Enterprise Solution</span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 line-clamp-2 mt-2 leading-relaxed">
                  {sol.shortDesc}
                </p>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className={`font-medium ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`}>
                    {isSelected ? 'Currently Viewing' : 'Explore Architecture →'}
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  )}
                </div>
              </button>
            )
          })}
        </div>
      </section>

      {/* Active Solution Deep Dive Section */}
      {activeSolution && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl p-6 sm:p-10 shadow-2xl">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
              <div className="flex items-start gap-4">
                <span className="text-4xl p-4 rounded-2xl bg-slate-800 border border-slate-700">
                  {activeSolution.icon}
                </span>
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-2">
                    Active Architecture Focus
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">{activeSolution.title}</h2>
                  <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
                    {activeSolution.overview}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0">
                <button
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, solution: activeSolution.title }))
                    setInquiryModalOpen(true)
                  }}
                  className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all"
                >
                  Scope This Solution
                </button>
                <a
                  href="tel:+918867475219"
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-all"
                >
                  Call +91-8867475219
                </a>
              </div>
            </div>

            {/* Architecture Diagram Box */}
            <div className="mt-8 p-6 rounded-2xl bg-slate-950/80 border border-cyan-500/30">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                    System Architecture & Execution Pipeline
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-500">Zero Third-Party Leaks</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-sm sm:text-base font-mono text-slate-200 overflow-x-auto leading-relaxed">
                {activeSolution.architecture}
              </div>
            </div>

            {/* Grid of Details: Problems Addressed & Practical Use Cases */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Business Problems Addressed */}
              <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-lg bg-red-500/10 text-red-400 text-sm">⚠️</div>
                  <h3 className="text-lg font-bold text-white">Business Inefficiencies Addressed</h3>
                </div>
                <ul className="space-y-3">
                  {activeSolution.problemsAddressed.map((prob, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="text-red-400 mt-0.5 shrink-0 font-bold">✕</span>
                      <span>{prob}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Practical Use Cases */}
              <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 text-sm">💡</div>
                  <h3 className="text-lg font-bold text-white">Proven Industry Use Cases</h3>
                </div>
                <ul className="space-y-3">
                  {activeSolution.useCases.map((uc, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="text-emerald-400 mt-0.5 shrink-0 font-bold">✓</span>
                      <span>{uc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Key Capabilities */}
            <div className="mt-8 p-6 rounded-2xl bg-slate-950/60 border border-slate-800">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 text-sm">⚡</div>
                <h3 className="text-lg font-bold text-white">Key Technical Capabilities</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {activeSolution.keyCapabilities.map((cap, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-cyan-400 font-mono text-xs block mb-1">Feature 0{idx + 1}</span>
                    <p className="text-sm text-slate-200 font-medium">{cap}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Development Approach & Security */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-cyan-400 text-lg">🚀</span>
                  <h4 className="font-bold text-white text-base">Development & Delivery Phases</h4>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-mono">
                  {activeSolution.developmentApproach}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-emerald-400 text-lg">🛡️</span>
                  <h4 className="font-bold text-white text-base">Security & Governance Protocol</h4>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeSolution.security}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Enterprise Consultation CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 bg-gradient-to-r from-blue-900/60 via-slate-900 to-cyan-950/70 border border-cyan-500/30 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-bold text-white">
              Ready to Scope Your Custom AI Architecture?
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              Connect directly with MossTech forward deployment architects in Bangalore or Nagpur. We evaluate workflows, data schemas, and security guardrails within 48 hours.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setInquiryModalOpen(true)}
                className="px-8 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-base shadow-lg shadow-cyan-400/20 transition-all"
              >
                Schedule Engineering Consultation
              </button>
              <a
                href="mailto:hr@moss-tech.com"
                className="px-8 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white font-semibold text-base border border-slate-700 transition-all"
              >
                Email hr@moss-tech.com
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span>📞 +91-8867475219 / +91-8669502045</span>
              <span>•</span>
              <span>📍 Bangalore & Nagpur, India</span>
              <span>•</span>
              <span>🔒 Zero-Data-Retention Agreements Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry / Consultation Modal */}
      {inquiryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-700 p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setInquiryModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg p-2"
            >
              ✕
            </button>

            {formSubmitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto text-3xl mb-4">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white">Inquiry Received</h3>
                <p className="text-sm text-slate-300 mt-2">
                  Our solutions desk has received your request. An architect will contact you within 24 hours at the provided email.
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold text-white">Request AI Architecture Consultation</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Discuss requirements, data schemas, or private VPC deployment with our engineering leads.
                </p>

                <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Work Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Company / Organization</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company name"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Solution Track</label>
                    <select
                      value={formData.solution || activeSolution.title}
                      onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-500"
                    >
                      {CUSTOM_AI_SOLUTIONS_DATA.solutions.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Project Brief / Business Problem</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what workflow or challenge you would like to automate..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25"
                    >
                      Submit Scoping Request
                    </button>
                    <p className="text-[11px] text-slate-500 text-center mt-2">
                      Protected by NDA & strict confidential scoping standards.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

