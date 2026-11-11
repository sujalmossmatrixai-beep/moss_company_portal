import React, { useState } from 'react'
import Breadcrumbs from '../navigation/Breadcrumbs'
import { MOSS_ACADEMY_DATA } from '../../data/productData'

interface CourseDetailPageProps {
  courseSlug: string
  onNavigate: (route: string) => void
}

export default function CourseDetailPage({ courseSlug, onNavigate }: CourseDetailPageProps) {
  const course =
    MOSS_ACADEMY_DATA.courses.find((c) => c.slug === courseSlug) ||
    MOSS_ACADEMY_DATA.courses[0]

  const [expandedModule, setExpandedModule] = useState<number | null>(0)
  const [enrollModalOpen, setEnrollModalOpen] = useState(false)
  const [imageModalOpen, setImageModalOpen] = useState(false)
  const [enrollSubmitted, setEnrollSubmitted] = useState(false)
  const [enrollData, setEnrollData] = useState({
    fullName: '',
    email: '',
    phone: '',
    mode: 'Hybrid (Bangalore Campus)',
    background: 'Student / Recent Graduate',
  })

  const isFde = course.slug === 'forward-deployed-engineering'
  const posterImage = isFde ? '/images/fde-course.jpg' : '/images/agentic-ai-course.jpg'

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEnrollSubmitted(true)
    setTimeout(() => {
      setEnrollSubmitted(false)
      setEnrollModalOpen(false)
    }, 2800)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-24 pb-20">
      {/* Breadcrumb Trail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Breadcrumbs
          items={[
            { label: 'Home', path: '/' },
            { label: 'Moss Academy', path: '/academy' },
            { label: course.title },
          ]}
          onNavigate={onNavigate}
        />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-blue-950/40 via-slate-900/60 to-slate-950 py-12 lg:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.15),rgba(255,255,255,0))]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Details & Enrollment CTA */}
            <div className="lg:col-span-7">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                  Admissions Open
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
                  ⚡ {course.discount}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                  Guaranteed Internship Program
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="mt-3 text-lg font-medium text-cyan-400">
                {course.subtitle}
              </p>

              <p className="mt-4 text-slate-300 text-base leading-relaxed">
                {course.heroDescription}
              </p>

              {/* Pricing & Duration Bar */}
              <div className="mt-6 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Course Duration & Format</div>
                  <div className="text-sm font-semibold text-white mt-0.5">{course.duration}</div>
                </div>

                <div className="flex items-baseline gap-3">
                  <div className="text-xs text-slate-500 line-through font-mono">{course.originalFee}</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">
                    {course.offerFee}
                  </div>
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-500/20 text-amber-300">
                    SAVE 20%
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setEnrollModalOpen(true)}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-base shadow-lg shadow-orange-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  Enroll Now ({course.offerFee})
                </button>
                <a
                  href="tel:+918867475219"
                  className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-sm transition-all flex items-center gap-2"
                >
                  <span>📞 Call 8867475219</span>
                </a>
                <a
                  href="mailto:hr@moss-tech.com?subject=Moss%20Academy%20Course%20Inquiry"
                  className="px-6 py-3.5 rounded-xl bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700 text-slate-300 font-medium text-sm transition-all"
                >
                  hr@moss-tech.com
                </a>
              </div>

              {/* Tech Stack Pills */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-400 font-mono">Technologies:</span>
                {course.techIcons.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-slate-850 bg-slate-800/80 border border-slate-700 text-xs text-slate-300 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Authentic Promotional Flyer */}
            <div className="lg:col-span-5">
              <div className="relative group cursor-pointer" onClick={() => setImageModalOpen(true)}>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-amber-500 to-blue-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
                <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl">
                  <img
                    src={posterImage}
                    alt={`${course.title} Admissions Flyer`}
                    className="w-full h-auto max-h-[520px] object-contain mx-auto group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-700 text-xs text-cyan-300 flex items-center gap-1.5 backdrop-blur-md">
                    <span>🔍 Click to Expand Flyer</span>
                  </div>
                </div>
              </div>

              {/* Second Flyer Thumbnail if FDE */}
              {isFde && (
                <div
                  className="mt-4 p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between cursor-pointer hover:border-slate-700 transition-all"
                  onClick={() => setImageModalOpen(true)}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src="/images/agentic-ai-course.jpg"
                      alt="Agentic AI Course"
                      className="w-12 h-14 object-cover rounded-md border border-slate-700"
                    />
                    <div>
                      <div className="text-xs font-semibold text-white">Agentic AI Developer Course</div>
                      <div className="text-[11px] text-amber-400">Diwali Offer · ₹39,999 · Batch Starts Nov 30th</div>
                    </div>
                  </div>
                  <span className="text-xs text-cyan-400 font-medium">View Flyer →</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience & Prerequisites */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🎯</span>
              <h3 className="text-lg font-bold text-white">Who Is This Course For?</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">{course.whoIsFor}</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">📋</span>
              <h3 className="text-lg font-bold text-white">Prerequisites & Eligibility</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">{course.prerequisites}</p>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800">
          <h2 className="text-2xl font-bold text-white mb-2">What You Will Master</h2>
          <p className="text-slate-400 text-sm mb-6">
            Engineered around real industry standards, production tools, and commercial deployments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {course.learningOutcomes.map((outcome, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </div>
                <span className="text-sm text-slate-200 font-medium leading-relaxed">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Curriculum Accordion */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
              Comprehensive Syllabus
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Detailed Learning Journey ({course.curriculum.length} Modules)
            </h2>
          </div>
          <button
            onClick={() => setExpandedModule(expandedModule === null ? 0 : null)}
            className="text-xs text-slate-400 hover:text-cyan-400 transition-colors"
          >
            {expandedModule === null ? 'Expand First Module' : 'Collapse Active'}
          </button>
        </div>

        <div className="space-y-3">
          {course.curriculum.map((mod, idx) => {
            const isExpanded = expandedModule === idx
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'bg-slate-900 border-cyan-500/50 shadow-lg shadow-cyan-500/5'
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70'
                }`}
              >
                <button
                  onClick={() => setExpandedModule(isExpanded ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs font-mono font-bold ${
                        isExpanded
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {mod.module}
                    </span>
                    <h3 className="font-semibold text-base sm:text-lg text-white">{mod.title}</h3>
                  </div>
                  <span className={`text-sm transition-transform duration-200 ${isExpanded ? 'rotate-180 text-cyan-400' : 'text-slate-400'}`}>
                    ▼
                  </span>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-2 border-t border-slate-800/80">
                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-2 font-mono">
                      Module Topics & Lab Exercises:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {mod.topics.map((topic, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className="text-cyan-400 text-xs mt-1">▸</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Guaranteed Internship Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-cyan-950/40 border border-emerald-500/30">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
                🤝 Industry Immersion Program
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Guaranteed Internship Opportunity
              </h2>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                {course.internshipOpportunity}
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" /> Real Client Sprints
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" /> Engineering Mentorship
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" /> Verifiable Work Experience
                </span>
              </div>
            </div>

            <button
              onClick={() => setEnrollModalOpen(true)}
              className="px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shrink-0 transition-all shadow-lg shadow-emerald-500/20"
            >
              Apply for Internship Cohort
            </button>
          </div>
        </div>
      </section>

      {/* Course Specifications Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800">
          <h2 className="text-xl font-bold text-white mb-6">Program Logistics & Specifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Class Timings</div>
              <div className="text-sm font-semibold text-white mt-1">{course.classTimings}</div>
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Learning Mode</div>
              <div className="text-sm font-semibold text-white mt-1">{course.learningMode}</div>
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Certification</div>
              <div className="text-sm font-semibold text-white mt-1">{course.certificationDetails}</div>
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Admissions Desk</div>
              <div className="text-sm font-semibold text-white mt-1">
                +91-8867475219 / hr@moss-tech.com
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Switch to Other Academy Courses */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-xl font-bold text-white mb-6">Explore Other Moss Academy Tracks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MOSS_ACADEMY_DATA.courses
            .filter((c) => c.slug !== course.slug)
            .slice(0, 3)
            .map((other) => (
              <button
                key={other.slug}
                onClick={() => {
                  window.location.hash = `/academy/courses/${other.slug}`
                }}
                className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 text-left transition-all"
              >
                <div className="text-xs font-mono text-cyan-400 mb-1">{other.duration}</div>
                <h3 className="font-semibold text-white text-base">{other.title}</h3>
                <p className="text-xs text-slate-400 mt-2 line-clamp-2">{other.subtitle}</p>
                <div className="mt-3 text-xs text-cyan-400 font-medium">View Course Details →</div>
              </button>
            ))}
        </div>
      </section>

      {/* Full-Screen Flyer Lightbox Modal */}
      {imageModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md"
          onClick={() => setImageModalOpen(false)}
        >
          <div
            className="relative max-w-3xl max-h-[90vh] overflow-auto rounded-2xl bg-slate-900 border border-slate-700 p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setImageModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-950/80 border border-slate-700 text-white flex items-center justify-center hover:bg-slate-800"
            >
              ✕
            </button>
            <img
              src={posterImage}
              alt={`${course.title} Admissions Flyer`}
              className="w-full h-auto rounded-xl object-contain"
            />
          </div>
        </div>
      )}

      {/* Course Enrollment Modal */}
      {enrollModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-700 p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setEnrollModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg p-2"
            >
              ✕
            </button>

            {enrollSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto text-3xl mb-4">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white">Enrollment Registered!</h3>
                <p className="text-sm text-slate-300 mt-2">
                  Thank you for applying to <span className="text-cyan-400">{course.title}</span>. Our admissions coordinator will contact you at <span className="font-mono text-white">{enrollData.email}</span> with payment instructions and onboarding materials.
                </p>
                <div className="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400">
                  You have locked in the <span className="text-amber-400 font-bold">{course.offerFee}</span> special offer price.
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-xs font-bold">
                    Special Offer {course.offerFee}
                  </span>
                  <span className="text-xs text-slate-400">Admissions Open</span>
                </div>
                <h3 className="text-xl font-bold text-white">{course.title}</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill in your details to lock in the 20% discount and secure your cohort seat.
                </p>

                <form onSubmit={handleEnrollSubmit} className="mt-5 space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={enrollData.fullName}
                      onChange={(e) => setEnrollData({ ...enrollData, fullName: e.target.value })}
                      placeholder="e.g. Priya Nair"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={enrollData.email}
                        onChange={(e) => setEnrollData({ ...enrollData, email: e.target.value })}
                        placeholder="priya@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        required
                        value={enrollData.phone}
                        onChange={(e) => setEnrollData({ ...enrollData, phone: e.target.value })}
                        placeholder="+91-9876543210"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Learning Mode & Campus</label>
                    <select
                      value={enrollData.mode}
                      onChange={(e) => setEnrollData({ ...enrollData, mode: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-500"
                    >
                      <option value="Hybrid (Bangalore Campus)">Hybrid (Bangalore Campus + Online)</option>
                      <option value="Hybrid (Nagpur Campus)">Hybrid (Nagpur Campus + Online)</option>
                      <option value="100% Live Online">100% Live Online (Global Cohort)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Current Background</label>
                    <select
                      value={enrollData.background}
                      onChange={(e) => setEnrollData({ ...enrollData, background: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-500"
                    >
                      <option value="Student / Recent Graduate">Student / Recent Graduate (BE/B.Tech/BCA/MCA)</option>
                      <option value="Junior Software Engineer">Working Professional (1-3 yrs experience)</option>
                      <option value="Career Switcher">Career Switcher into Tech</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-slate-950 font-bold text-sm hover:from-amber-400 hover:to-orange-400 transition-all shadow-lg shadow-orange-500/25"
                    >
                      Confirm Enrollment · {course.offerFee}
                    </button>
                    <div className="flex items-center justify-between mt-2 text-[11px] text-slate-500">
                      <span>Limited Seats Cohort</span>
                      <span>📞 Queries: 8867475219</span>
                    </div>
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

