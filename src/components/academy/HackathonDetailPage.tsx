import React, { useState } from 'react'
import Breadcrumbs from '../navigation/Breadcrumbs'
import { MOSS_ACADEMY_DATA } from '../../data/productData'
import { saveLead } from '../../utils/leadStorage'

interface HackathonDetailPageProps {
  hackathonSlug: string
  onNavigate: (route: string) => void
}

export default function HackathonDetailPage({
  hackathonSlug,
  onNavigate,
}: HackathonDetailPageProps) {
  const hackathon =
    MOSS_ACADEMY_DATA.hackathons.find((h) => h.slug === hackathonSlug) ||
    MOSS_ACADEMY_DATA.hackathons[0]

  const [registerModalOpen, setRegisterModalOpen] = useState(false)
  const [registerSubmitted, setRegisterSubmitted] = useState(false)
  const [regForm, setRegForm] = useState({
    teamName: '',
    leadName: '',
    leadEmail: '',
    leadPhone: '',
    teamSize: '3 members',
    problemStatement: hackathon.problemStatements[0]?.title || '',
  })

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    saveLead({
      fullName: regForm.leadName,
      email: regForm.leadEmail,
      phone: regForm.leadPhone,
      company: `Team: ${regForm.teamName} (${regForm.teamSize})`,
      category: 'Moss Academy Inquiries',
      specificItem: `${hackathon.title} - ${regForm.problemStatement}`,
      message: `Hackathon Registration: Team ${regForm.teamName}. Problem: ${regForm.problemStatement}`,
    })
    setRegisterSubmitted(true)
    setTimeout(() => {
      setRegisterSubmitted(false)
      setRegisterModalOpen(false)
    }, 2500)
  }

  const isCompleted = hackathon.status === 'Completed'

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-24 pb-20">
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Breadcrumbs
          items={[
            { label: 'Home', path: '/' },
            { label: 'Moss Academy', path: '/academy' },
            { label: 'Hackathons', path: '/academy#hackathons' },
            { label: hackathon.title },
          ]}
          onNavigate={onNavigate}
        />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-purple-950/30 via-slate-900/60 to-slate-950 py-12 lg:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(168,85,247,0.15),rgba(255,255,255,0))]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                hackathon.status === 'Active'
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                  : hackathon.status === 'Upcoming'
                  ? 'bg-purple-500/10 text-purple-400 border border-purple-500/30'
                  : 'bg-slate-800 text-slate-400 border border-slate-700'
              }`}
            >
              {hackathon.badge}
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 text-xs border border-slate-700">
              Format: {hackathon.participationFormat}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-4xl leading-tight">
            {hackathon.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {hackathon.overview}
          </p>

          {/* Reward & Highlights Card */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-purple-950/60 via-slate-900 to-indigo-950/60 border border-purple-500/30 max-w-4xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs text-purple-300 font-semibold uppercase tracking-wider">
                  🏆 Prize Pool & Fast-Track Honors
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {hackathon.rewards}
                </div>
              </div>
              {!isCompleted ? (
                <button
                  onClick={() => setRegisterModalOpen(true)}
                  className="px-7 py-3 rounded-xl bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold text-sm shrink-0 shadow-lg shadow-purple-500/20 transition-all"
                >
                  Register Team Now
                </button>
              ) : (
                <span className="px-5 py-2 rounded-xl bg-slate-800 text-slate-400 text-xs font-mono">
                  Challenge Concluded
                </span>
              )}
            </div>
          </div>

          {/* Timeline Bar */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-xs text-slate-400">Registration Ends</div>
              <div className="text-sm font-semibold text-white mt-0.5">{hackathon.regDeadline}</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-xs text-slate-400">Sprint Starts</div>
              <div className="text-sm font-semibold text-white mt-0.5">{hackathon.eventStartDate}</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-xs text-slate-400">Submission Due</div>
              <div className="text-sm font-semibold text-white mt-0.5">{hackathon.submissionDeadline}</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-xs text-slate-400">Results Announced</div>
              <div className="text-sm font-semibold text-white mt-0.5">{hackathon.resultDate}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statements */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="text-xs font-semibold text-purple-400 uppercase tracking-widest">
            Challenge Tracks
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            Choose Your Problem Statement
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hackathon.problemStatements.map((ps, idx) => (
            <div
              key={ps.id}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  Track 0{idx + 1}
                </span>
                <h3 className="text-lg font-bold text-white mt-3">{ps.title}</h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">{ps.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <button
                  onClick={() => {
                    setRegForm((prev) => ({ ...prev, problemStatement: ps.title }))
                    setRegisterModalOpen(true)
                  }}
                  disabled={isCompleted}
                  className="w-full py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-xs font-semibold text-purple-300 transition-colors"
                >
                  Select This Track →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rules & Evaluation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Rules */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span>📜</span> Official Rules & Guidelines
            </h3>
            <ul className="space-y-3">
              {hackathon.rules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="text-purple-400 font-bold shrink-0">•</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Evaluation Criteria */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span>⚖️</span> Evaluation Criteria
            </h3>
            <div className="space-y-3">
              {hackathon.evaluationCriteria.map((crit, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">{crit.category}</span>
                    <span className="text-xs font-mono font-bold text-purple-400">{crit.weight}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{crit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      {registerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-700 p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setRegisterModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg p-2"
            >
              ✕
            </button>

            {registerSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto text-3xl mb-4">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white">Team Registered!</h3>
                <p className="text-sm text-slate-300 mt-2">
                  Welcome team <span className="text-purple-400 font-semibold">{regForm.teamName}</span>! Hackathon confirmation, Discord invite, and API credentials have been dispatched to <span className="font-mono text-white">{regForm.leadEmail}</span>.
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold text-white">Register for {hackathon.title}</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Team registration is free. Mentorship and evaluation are provided by MossTech architects.
                </p>

                <form onSubmit={handleRegisterSubmit} className="mt-5 space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Team Name</label>
                    <input
                      type="text"
                      required
                      value={regForm.teamName}
                      onChange={(e) => setRegForm({ ...regForm, teamName: e.target.value })}
                      placeholder="e.g. Neural Pioneers"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Team Lead Name</label>
                      <input
                        type="text"
                        required
                        value={regForm.leadName}
                        onChange={(e) => setRegForm({ ...regForm, leadName: e.target.value })}
                        placeholder="Lead full name"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Lead Email</label>
                      <input
                        type="email"
                        required
                        value={regForm.leadEmail}
                        onChange={(e) => setRegForm({ ...regForm, leadEmail: e.target.value })}
                        placeholder="lead@university.edu"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Lead Phone / WhatsApp</label>
                      <input
                        type="tel"
                        required
                        value={regForm.leadPhone}
                        onChange={(e) => setRegForm({ ...regForm, leadPhone: e.target.value })}
                        placeholder="+91-8867475219"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Team Size</label>
                      <select
                        value={regForm.teamSize}
                        onChange={(e) => setRegForm({ ...regForm, teamSize: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-purple-500"
                      >
                        <option value="Solo (1 member)">Solo (1 member)</option>
                        <option value="2 members">2 members</option>
                        <option value="3 members">3 members</option>
                        <option value="4 members (Max)">4 members (Max)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Preferred Problem Track</label>
                    <select
                      value={regForm.problemStatement}
                      onChange={(e) => setRegForm({ ...regForm, problemStatement: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-purple-500"
                    >
                      {hackathon.problemStatements.map((ps) => (
                        <option key={ps.id} value={ps.title}>
                          {ps.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-purple-500/20"
                    >
                      Complete Free Registration
                    </button>
                    <p className="text-[11px] text-slate-500 text-center mt-2">
                      Questions? Reach out to hr@moss-tech.com or call +91-8867475219
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

