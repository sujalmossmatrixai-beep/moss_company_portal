import React, { useState } from 'react'
import Breadcrumbs from '../navigation/Breadcrumbs'
import { MOSS_ACADEMY_DATA } from '../../data/productData'

interface MossAcademyPageProps {
  onNavigate: (route: string) => void
}

export default function MossAcademyPage({ onNavigate }: MossAcademyPageProps) {
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'courses' | 'internships' | 'hackathons' | 'community'>('courses')

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-24 pb-20">
      {/* Top Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Breadcrumbs
          items={[
            { label: 'Home', path: '/' },
            { label: 'Moss Academy' },
          ]}
          onNavigate={onNavigate}
        />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-blue-950/40 via-slate-900/70 to-slate-950 py-14 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(14,165,233,0.18),rgba(255,255,255,0))]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading & Mission */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Industry-Oriented Engineering Education
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Learn Today.{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                  Build Tomorrow.
                </span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                {MOSS_ACADEMY_DATA.description}
              </p>

              {/* Offer Banner */}
              <div className="mt-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between gap-4 max-w-xl">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      Flagship Admission Offer
                    </div>
                    <div className="text-sm font-semibold text-white">
                      Forward Deployed Engineering · ₹39,999 (20% OFF)
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    window.location.hash = '/academy/courses/forward-deployed-engineering'
                  }}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shrink-0 transition-all shadow-md shadow-amber-500/20"
                >
                  View FDE Syllabus →
                </button>
              </div>

              {/* Stats Bar */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
                {MOSS_ACADEMY_DATA.stats.map((s, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="text-xl sm:text-2xl font-bold text-white">{s.value}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Promotional Posters Showcases */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div
                className="group relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-xl cursor-pointer"
                onClick={() => setSelectedPoster('/images/fde-course.jpg')}
              >
                <img
                  src="/images/fde-course.jpg"
                  alt="Forward Deployed Engineering Flyer"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left">
                  <span className="text-[10px] font-bold text-amber-400 uppercase">FDE Program</span>
                  <div className="text-xs font-semibold text-white">Guaranteed Internship</div>
                </div>
              </div>

              <div
                className="group relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-xl cursor-pointer"
                onClick={() => setSelectedPoster('/images/agentic-ai-course.jpg')}
              >
                <img
                  src="/images/agentic-ai-course.jpg"
                  alt="Agentic AI Course Flyer"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left">
                  <span className="text-[10px] font-bold text-cyan-400 uppercase">Agentic AI Track</span>
                  <div className="text-xs font-semibold text-white">Admissions Open Nov 30</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Navigation Tabs */}
      <section className="sticky top-16 z-30 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('courses')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                activeTab === 'courses'
                  ? 'bg-cyan-500 text-slate-950'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Industry Programs ({MOSS_ACADEMY_DATA.courses.length})
            </button>
            <button
              onClick={() => setActiveTab('internships')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                activeTab === 'internships'
                  ? 'bg-cyan-500 text-slate-950'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Guaranteed Internships
            </button>
            <button
              onClick={() => setActiveTab('hackathons')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                activeTab === 'hackathons'
                  ? 'bg-cyan-500 text-slate-950'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Hackathons & Sprints ({MOSS_ACADEMY_DATA.hackathons.length})
            </button>
            <button
              onClick={() => setActiveTab('community')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                activeTab === 'community'
                  ? 'bg-cyan-500 text-slate-950'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Student Community & Hubs
            </button>
          </div>
        </div>
      </section>

      {/* Main Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* TAB 1: COURSES */}
        {activeTab === 'courses' && (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Comprehensive Engineering Curricula
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Choose a career track. Every course includes live mentor feedback, hands-on labs, and certification.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MOSS_ACADEMY_DATA.courses.map((c) => {
                const isFlagship = c.slug === 'forward-deployed-engineering'
                return (
                  <div
                    key={c.id}
                    className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-200 relative ${
                      isFlagship
                        ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-amber-500/50 shadow-xl shadow-amber-500/5 ring-1 ring-amber-500/30'
                        : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                    }`}
                  >
                    {isFlagship && (
                      <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[11px] font-extrabold uppercase tracking-wider shadow">
                        ★ Flagship Course
                      </span>
                    )}

                    <div>
                      {/* Top Meta */}
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                        <span className="font-mono text-cyan-400">{c.duration}</span>
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium">
                          {c.discount}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1.5">{c.title}</h3>
                      <p className="text-xs text-cyan-300 font-medium mb-3">{c.subtitle}</p>
                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                        {c.heroDescription}
                      </p>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {c.techIcons.slice(0, 5).map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded bg-slate-800 text-[11px] font-mono text-slate-300 border border-slate-700/60"
                          >
                            {t}
                          </span>
                        ))}
                        {c.techIcons.length > 5 && (
                          <span className="px-1.5 py-0.5 text-[10px] text-slate-400">
                            +{c.techIcons.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bottom Pricing & CTA */}
                    <div className="pt-4 border-t border-slate-800">
                      <div className="flex items-baseline justify-between mb-3">
                        <span className="text-xs text-slate-400 line-through font-mono">
                          {c.originalFee}
                        </span>
                        <span className="text-2xl font-bold text-amber-400 font-mono">
                          {c.offerFee}
                        </span>
                      </div>

                      <button
                        onClick={() => {
                          window.location.hash = `/academy/courses/${c.slug}`
                        }}
                        className={`w-full py-2.5 rounded-xl font-semibold text-xs transition-all ${
                          isFlagship
                            ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold shadow-md shadow-orange-500/20'
                            : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                        }`}
                      >
                        Explore Course & Syllabus ({c.curriculum.length} Modules) →
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* TAB 2: INTERNSHIPS */}
        {activeTab === 'internships' && (
          <div>
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800 mb-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
                  Industry Immersion Pathway
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold text-white">
                  {MOSS_ACADEMY_DATA.internships.headline}
                </h2>
                <p className="mt-3 text-slate-300 text-base leading-relaxed">
                  {MOSS_ACADEMY_DATA.internships.overview}
                </p>
              </div>

              {/* Tracks */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {MOSS_ACADEMY_DATA.internships.tracks.map((t, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                      {t.role}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1">{t.title}</h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>

              {/* Eligibility & Selection */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-800">
                <div>
                  <h4 className="font-bold text-white text-base mb-3">Eligibility Standards</h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {MOSS_ACADEMY_DATA.internships.eligibility.map((el, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span>{el}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-white text-base mb-3">How Selection Works</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-mono">
                    {MOSS_ACADEMY_DATA.internships.howSelectionWorks}
                  </p>
                  <div className="mt-4">
                    <button
                      onClick={() => {
                        window.location.hash = '/academy/courses/forward-deployed-engineering'
                      }}
                      className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all"
                    >
                      Join FDE with Guaranteed Internship →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: HACKATHONS */}
        {activeTab === 'hackathons' && (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Upcoming & Active Hackathons
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Participate in national developer sprints, build autonomous agent architectures, and win cash awards & internships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {MOSS_ACADEMY_DATA.hackathons.map((h) => (
                <div
                  key={h.id}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                          h.status === 'Active'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                            : h.status === 'Upcoming'
                            ? 'bg-purple-500/10 text-purple-400 border border-purple-500/30'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {h.badge}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">Ends {h.regDeadline}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{h.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">{h.shortDesc}</p>

                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 mb-4">
                      <div className="text-[10px] text-purple-300 font-mono uppercase">Prize Pool</div>
                      <div className="text-sm font-bold text-white mt-0.5">{h.rewards}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      window.location.hash = `/academy/hackathons/${h.slug}`
                    }}
                    className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-all shadow-md shadow-purple-600/20"
                  >
                    View Challenge Details & Register →
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: COMMUNITY & HUBS */}
        {activeTab === 'community' && (
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Moss Student & Developer Community
            </h2>
            <p className="text-slate-300 text-sm mb-8 max-w-2xl">
              Connect with fellow builders, attend offline weekend workshops in Bangalore and Nagpur, and join our vibrant Discord and WhatsApp developer groups.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-2xl mb-2">🏢</div>
                <h3 className="text-lg font-bold text-white">Bangalore Campus Hub</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  High-speed fiber labs, GPU compute workstations, and weekly offline demo days with startup founders.
                </p>
                <div className="mt-4 text-xs font-mono text-cyan-400">Bangalore, Karnataka, India</div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-2xl mb-2">🏢</div>
                <h3 className="text-lg font-bold text-white">Nagpur R&D Center</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Engineering and data migration center offering mentorship, hackathon rooms, and career counseling.
                </p>
                <div className="mt-4 text-xs font-mono text-cyan-400">Nagpur, Maharashtra, India</div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-2xl mb-2">💬</div>
                <h3 className="text-lg font-bold text-white">Direct Admissions Desk</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Have questions regarding eligibility, cohort dates, or course syllabus? Reach our HR team directly.
                </p>
                <div className="mt-4 space-y-1 text-xs font-mono text-slate-300">
                  <div>📞 +91-8867475219 / 8669502045</div>
                  <div>✉️ hr@moss-tech.com</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox for Authentic Poster */}
      {selectedPoster && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md"
          onClick={() => setSelectedPoster(null)}
        >
          <div
            className="relative max-w-2xl max-h-[90vh] overflow-auto rounded-2xl bg-slate-900 border border-slate-700 p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPoster(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-950/80 border border-slate-700 text-white flex items-center justify-center hover:bg-slate-800"
            >
              ✕
            </button>
            <img
              src={selectedPoster}
              alt="Moss Academy Flyer"
              className="w-full h-auto rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}

