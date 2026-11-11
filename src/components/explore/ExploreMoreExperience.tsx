import React, { useState, useRef, useEffect } from 'react'
import {
  MOSS_MED_AI_DATA,
  MOSS_AI_MAPPER_DATA,
  MOSS_ACADEMY_DATA,
  CUSTOM_AI_SOLUTIONS_DATA,
} from '../../data/productData'

export type ExploreProductType = 'med-ai' | 'mapper' | 'academy' | 'solutions'

interface ExploreMoreExperienceProps {
  initialProduct?: ExploreProductType
  initialItemId?: string
  onBackToHome?: () => void
  onContactClick?: () => void
}

export default function ExploreMoreExperience({
  initialProduct = 'med-ai',
  initialItemId,
  onBackToHome,
  onContactClick,
}: ExploreMoreExperienceProps) {
  const [activeProduct, setActiveProduct] = useState<ExploreProductType>(initialProduct)

  // Sub-item selection states
  const [selectedMedPortal, setSelectedMedPortal] = useState<string>(
    initialProduct === 'med-ai' && initialItemId ? initialItemId : 'patient-portal'
  )
  const [selectedHospitalRole, setSelectedHospitalRole] = useState<string>('admin')

  const [selectedMapperModule, setSelectedMapperModule] = useState<string>(
    initialProduct === 'mapper' && initialItemId ? initialItemId : 'migration-setup'
  )

  const [selectedAcademyCourse, setSelectedAcademyCourse] = useState<string>(
    initialProduct === 'academy' && initialItemId ? initialItemId : 'forward-deployed-engineering'
  )

  const [selectedSolution, setSelectedSolution] = useState<string>(
    initialProduct === 'solutions' && initialItemId ? initialItemId : 'custom-ai-agents'
  )

  // Modals & lightboxes
  const [posterLightbox, setPosterLightbox] = useState<string | null>(null)
  const [enrollModalOpen, setEnrollModalOpen] = useState(false)
  const [enrollSubmitted, setEnrollSubmitted] = useState(false)
  const [enrollForm, setEnrollForm] = useState({
    name: '',
    email: '',
    phone: '',
    mode: 'Hybrid (Bangalore Campus)',
  })

  // Horizontal scroll refs
  const medScrollRef = useRef<HTMLDivElement>(null)
  const mapperScrollRef = useRef<HTMLDivElement>(null)
  const academyScrollRef = useRef<HTMLDivElement>(null)
  const solutionScrollRef = useRef<HTMLDivElement>(null)
  const detailsSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (initialProduct) {
      setActiveProduct(initialProduct)
    }
    if (initialItemId) {
      if (initialProduct === 'med-ai') setSelectedMedPortal(initialItemId)
      if (initialProduct === 'mapper') setSelectedMapperModule(initialItemId)
      if (initialProduct === 'academy') setSelectedAcademyCourse(initialItemId)
      if (initialProduct === 'solutions') setSelectedSolution(initialItemId)
    }
  }, [initialProduct, initialItemId])

  const scrollContainer = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -340 : 340
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const handleSelectMedPortal = (id: string) => {
    setSelectedMedPortal(id)
    setTimeout(() => {
      detailsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }, 50)
  }

  const handleSelectMapperModule = (id: string) => {
    setSelectedMapperModule(id)
    setTimeout(() => {
      detailsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }, 50)
  }

  const handleSelectAcademyCourse = (slug: string) => {
    setSelectedAcademyCourse(slug)
    setTimeout(() => {
      detailsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }, 50)
  }

  const handleSelectSolution = (id: string) => {
    setSelectedSolution(id)
    setTimeout(() => {
      detailsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }, 50)
  }

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEnrollSubmitted(true)
    setTimeout(() => {
      setEnrollSubmitted(false)
      setEnrollModalOpen(false)
    }, 2600)
  }

  // Data lookups with safe fallbacks
  const medPortals = MOSS_MED_AI_DATA?.portals || []
  const activeMedPortal =
    medPortals.find((p) => p.id === selectedMedPortal) || medPortals[0] || ({} as any)

  // Hospital Portal & Role Dashboards
  const hospitalPortalObj = (medPortals.find((p) => p.id === 'hospital-portal') as any) || {}
  const hospitalRoleDashboards: any[] = hospitalPortalObj?.roleDashboards || []
  const activeHospitalRole =
    hospitalRoleDashboards.find((r) => r.id === selectedHospitalRole) ||
    hospitalRoleDashboards[0] ||
    ({} as any)

  // Mapper Modules
  const mapperModules = MOSS_AI_MAPPER_DATA?.modules || []
  const activeMapperModule =
    mapperModules.find((m) => m.id === selectedMapperModule) || mapperModules[0] || ({} as any)

  // Academy Courses
  const academyCourses = MOSS_ACADEMY_DATA?.courses || []
  const activeAcademyCourse =
    academyCourses.find((c) => c.slug === selectedAcademyCourse) ||
    academyCourses[0] ||
    ({} as any)

  // Custom AI Solutions
  const customSolutions = CUSTOM_AI_SOLUTIONS_DATA?.solutions || []
  const activeSolutionObj =
    customSolutions.find((s) => s.id === selectedSolution) ||
    customSolutions[0] ||
    ({} as any)

  return (
    <div className="min-h-screen bg-white text-[#0d2335] pt-20 pb-20 font-['Inter',sans-serif]">
      {/* Top Header & Product Switcher Bar - Sober White and Blue */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-['Poppins'] font-semibold border border-slate-200 transition-colors cursor-pointer"
            >
              <span>← Back to Home</span>
            </button>
            <div className="h-4 w-px bg-slate-200 hidden sm:block" />
            <span className="text-xs text-slate-500 font-['Poppins'] hidden sm:inline">
              Product Exploration Hub
            </span>
          </div>

          {/* Product Switcher Tabs */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 border border-slate-200 overflow-x-auto">
            <button
              onClick={() => setActiveProduct('med-ai')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-['Poppins'] font-medium transition-all shrink-0 cursor-pointer ${
                activeProduct === 'med-ai'
                  ? 'bg-white text-[#1b95cd] font-semibold shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-[#0d2335]'
              }`}
            >
              Moss Med AI
            </button>

            <button
              onClick={() => setActiveProduct('mapper')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-['Poppins'] font-medium transition-all shrink-0 cursor-pointer ${
                activeProduct === 'mapper'
                  ? 'bg-white text-[#1b95cd] font-semibold shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-[#0d2335]'
              }`}
            >
              Moss AI Mapper
            </button>

            <button
              onClick={() => setActiveProduct('academy')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-['Poppins'] font-medium transition-all shrink-0 cursor-pointer ${
                activeProduct === 'academy'
                  ? 'bg-white text-[#1b95cd] font-semibold shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-[#0d2335]'
              }`}
            >
              Moss Academy
            </button>

            <button
              onClick={() => setActiveProduct('solutions')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-['Poppins'] font-medium transition-all shrink-0 cursor-pointer ${
                activeProduct === 'solutions'
                  ? 'bg-white text-[#1b95cd] font-semibold shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-[#0d2335]'
              }`}
            >
              Custom AI Solutions
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. MOSS MED AI PRODUCT EXPLORATION (Sober White & Blue)                   */}
      {/* ========================================================================= */}
      {activeProduct === 'med-ai' && (
        <div>
          {/* Top Product Details in Paragraph (as specifically requested) */}
          <section className="bg-[#f8f9fa] border-b border-slate-200 py-10 lg:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-md bg-sky-50 text-[#1b95cd] border border-sky-100 text-xs font-['Poppins'] font-semibold uppercase tracking-wider">
                  Healthcare Management Platform
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-white text-slate-600 text-xs font-['Inter'] border border-slate-200">
                  HL7 & FHIR R4 Compliant
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-white text-slate-600 text-xs font-['Inter'] border border-slate-200">
                  5 Dedicated Portals
                </span>
              </div>

              <h1 className="font-['Poppins'] font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0d2335] tracking-tight leading-tight max-w-4xl">
                Moss Med AI – Connecting Healthcare Through Intelligent Technology.
              </h1>

              {/* Comprehensive Paragraph about Moss Med AI */}
              <div className="mt-4 p-5 sm:p-6 bg-white rounded-xl border border-slate-200 text-slate-600 text-sm sm:text-base leading-relaxed max-w-5xl shadow-2xs">
                <p>
                  <strong className="text-[#0d2335] font-semibold">Moss Med AI</strong> is a comprehensive healthcare management platform designed to simplify hospital operations, strengthen doctor-patient communication, and provide a unified digital healthcare experience. The platform connects patients, doctors, and hospital administrators through dedicated portals, allowing each user to access the tools and information relevant to their responsibilities. Patients can book doctor consultations, maintain personal health records, and attend remote video visits. Doctors manage clinical charting, e-prescriptions, and diagnostic reports in a standardized EHR workspace. Hospital administrators access 9 specialized role-based operational dashboards for front desk scheduling, bed and ward allocation, billing oversight, and insurance TPA claims processing under strict HIPAA security.
                </p>
              </div>

              {/* Quick Metrics Bar & Screenshot Link */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-4 max-w-5xl">
                <div className="flex flex-wrap items-center gap-5 text-xs text-slate-600 font-['Inter']">
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#1b95cd] font-bold">✓</span> 99.8% Clinical Accuracy
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#1b95cd] font-bold">✓</span> Multi-Payer Insurance TPA
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#1b95cd] font-bold">✓</span> Zero Data Retention Guarantee
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="https://mossmed-ai.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-[#1b95cd] hover:bg-[#1579b0] text-white text-xs font-['Poppins'] font-semibold flex items-center gap-1.5 transition-colors shadow-2xs"
                  >
                    <span>Visit Live Portal (mossmed-ai.com) ↗</span>
                  </a>
                  <button
                    onClick={() => setPosterLightbox('/images/moss-med-ai-portals.png')}
                    className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 text-xs font-['Poppins'] font-medium border border-slate-200 hover:border-[#1b95cd] flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                  >
                    <span>View 5-Portals Screenshot</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* List of Products / Portals in HORIZONTAL CARDS (Sober White & Blue) */}
          <section className="bg-white border-b border-slate-200 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-['Poppins'] uppercase tracking-wider text-[#1b95cd] font-semibold">
                    Explore Moss Med AI Portals
                  </span>
                  <h2 className="font-['Poppins'] font-bold text-lg sm:text-xl text-[#0d2335] mt-0.5">
                    One Healthcare Platform. Five Connected Experiences.
                  </h2>
                </div>

                {/* Left/Right Scroll Controls */}
                <div className="hidden sm:flex items-center gap-1.5">
                  <button
                    onClick={() => scrollContainer(medScrollRef, 'left')}
                    className="w-7 h-7 rounded-lg bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center border border-slate-200 text-xs transition-colors cursor-pointer shadow-2xs"
                    aria-label="Scroll left"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => scrollContainer(medScrollRef, 'right')}
                    className="w-7 h-7 rounded-lg bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center border border-slate-200 text-xs transition-colors cursor-pointer shadow-2xs"
                    aria-label="Scroll right"
                  >
                    →
                  </button>
                </div>
              </div>

              {/* Horizontal Cards Row */}
              <div
                ref={medScrollRef}
                className="flex items-stretch gap-4 overflow-x-auto pb-3 pt-1 no-scrollbar scroll-smooth"
              >
                {medPortals.map((portal) => {
                  const isSelected = portal.id === selectedMedPortal

                  return (
                    <div
                      key={portal.id}
                      onClick={() => handleSelectMedPortal(portal.id)}
                      className={`shrink-0 w-[270px] sm:w-[300px] rounded-xl p-4.5 border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-sky-50/40 border-[#1b95cd] ring-1 ring-[#1b95cd] shadow-2xs'
                          : 'bg-white border-slate-200 hover:border-[#1b95cd]/60 hover:bg-slate-50/50'
                      }`}
                    >
                      <div>
                        {/* Icon and status badge */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-9 h-9 rounded-lg bg-sky-50 border border-sky-100 text-[#1b95cd] flex items-center justify-center text-lg">
                            {portal.icon || '🩺'}
                          </div>
                          <span
                            className={`text-[10px] font-['Poppins'] font-semibold px-2 py-0.5 rounded-full ${
                              isSelected
                                ? 'bg-[#1b95cd] text-white'
                                : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {isSelected ? 'Viewing' : 'Explore'}
                          </span>
                        </div>

                        <h3 className="font-['Poppins'] font-bold text-sm text-[#0d2335] mb-1">
                          {portal.name}
                        </h3>

                        <p className="font-['Inter'] text-xs text-slate-600 leading-relaxed line-clamp-2">
                          {portal.tagline}
                        </p>
                      </div>

                      {/* Card Button */}
                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <button
                          type="button"
                          className={`w-full py-1.5 px-3 rounded-lg text-xs font-['Poppins'] font-semibold transition-colors cursor-pointer flex items-center justify-center gap-1 ${
                            isSelected
                              ? 'bg-[#1b95cd] text-white'
                              : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                          }`}
                        >
                          <span>{isSelected ? 'Portal Details Open Below' : 'Explore Details →'}</span>
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* ============================================================== */}
          {/* IN-DEPTH PORTAL DETAILS SECTION (Sober White & Blue)           */}
          {/* ============================================================== */}
          <div ref={detailsSectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 text-[#1b95cd] text-2xl flex items-center justify-center shrink-0">
                    {activeMedPortal.icon || '🩺'}
                  </div>
                  <div>
                    <span className="text-[11px] font-['Poppins'] font-semibold text-[#1b95cd] uppercase tracking-wider block">
                      Portal In-Depth Details
                    </span>
                    <h2 className="font-['Poppins'] font-bold text-xl sm:text-2xl text-[#0d2335]">
                      {activeMedPortal.name}
                    </h2>
                    <p className="font-['Inter'] text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
                      {activeMedPortal.whyExists || activeMedPortal.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <a
                    href="https://mossmed-ai.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[#1b95cd] hover:bg-[#1579b0] text-white font-['Poppins'] font-semibold text-xs transition-colors flex items-center gap-1 shadow-2xs"
                  >
                    <span>Visit Live Portal ↗</span>
                  </a>
                  <button
                    onClick={onContactClick}
                    className="px-3.5 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 font-['Poppins'] font-medium text-xs transition-colors cursor-pointer border border-slate-200"
                  >
                    Request Demo
                  </button>
                  <a
                    href="tel:+918867475219"
                    className="px-3 py-2 rounded-lg bg-white hover:bg-slate-50 text-slate-700 text-xs font-['Poppins'] font-medium border border-slate-200 transition-colors"
                  >
                    Call Desk
                  </a>
                </div>
              </div>

              {/* SPECIAL CASE: HOSPITAL PORTAL (Displays the 9 Role-Based Dashboards) */}
              {selectedMedPortal === 'hospital-portal' ? (
                <div className="mt-6">
                  <div className="mb-4">
                    <span className="text-xs font-['Poppins'] font-semibold text-[#1b95cd] uppercase tracking-wider">
                      Role-Based Operations
                    </span>
                    <h3 className="font-['Poppins'] font-bold text-lg text-[#0d2335] mt-0.5">
                      Explore 9 Hospital Operational Dashboards
                    </h3>
                    <p className="font-['Inter'] text-xs text-slate-500 mt-0.5">
                      Select an operational role to view its dedicated responsibilities, workspaces, and workflows.
                    </p>
                  </div>

                  {/* Horizontal Role Selector Tabs */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-2.5 mb-5 no-scrollbar">
                    {hospitalRoleDashboards.map((role: any) => {
                      const isRoleActive = role.id === selectedHospitalRole
                      return (
                        <button
                          key={role.id}
                          onClick={() => setSelectedHospitalRole(role.id)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-['Poppins'] font-medium whitespace-nowrap transition-colors shrink-0 cursor-pointer ${
                            isRoleActive
                              ? 'bg-[#1b95cd] text-white shadow-2xs font-semibold'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          <span>{role.roleName}</span>
                        </button>
                      )
                    })}
                  </div>

                  {/* Active Role Dashboard Details */}
                  {activeHospitalRole?.roleName && (
                    <div className="rounded-xl bg-[#f8f9fa] border border-slate-200 p-5 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
                        <div>
                          <span className="text-[11px] font-['Poppins'] text-[#1b95cd] font-semibold uppercase tracking-wider">
                            Role Workspace
                          </span>
                          <h4 className="font-['Poppins'] font-bold text-lg text-[#0d2335]">
                            {activeHospitalRole.roleName}
                          </h4>
                          <p className="font-['Inter'] text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                            {activeHospitalRole.overview}
                          </p>
                        </div>
                        <span className="px-2.5 py-1 rounded-md bg-white text-slate-600 text-xs font-['Inter'] border border-slate-200 shrink-0">
                          {activeHospitalRole.badge || 'Operations'}
                        </span>
                      </div>

                      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Core Modules */}
                        <div className="p-4 rounded-xl bg-white border border-slate-200">
                          <h5 className="font-['Poppins'] text-xs font-bold text-[#0d2335] uppercase tracking-wider mb-3 text-[#1b95cd]">
                            Key Modules & Sections
                          </h5>
                          <div className="space-y-2.5">
                            {(activeHospitalRole.keyModules || []).map((km: any, idx: number) => (
                              <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                                <div className="text-xs font-['Poppins'] font-semibold text-[#0d2335]">{km.name}</div>
                                <div className="text-[11px] font-['Inter'] text-slate-500 mt-0.5">{km.desc}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Daily Workflow */}
                        <div className="p-4 rounded-xl bg-white border border-slate-200">
                          <h5 className="font-['Poppins'] text-xs font-bold text-[#0d2335] uppercase tracking-wider mb-3 text-[#1b95cd]">
                            Operational Workflow
                          </h5>
                          <ol className="space-y-2">
                            {(activeHospitalRole.workflow || activeHospitalRole.responsibilities || []).map(
                              (wf: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-2 text-xs font-['Inter'] text-slate-600">
                                  <span className="w-4 h-4 rounded-full bg-sky-100 text-[#1b95cd] flex items-center justify-center font-bold shrink-0 mt-0.5 text-[10px]">
                                    {idx + 1}
                                  </span>
                                  <span className="leading-relaxed">{wf}</span>
                                </li>
                              )
                            )}
                          </ol>
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="mt-4 p-3.5 rounded-xl bg-white border border-slate-200">
                        <div className="text-[11px] font-['Poppins'] font-semibold text-[#0d2335] uppercase tracking-wider mb-2">
                          Operational Value to Hospital:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {(activeHospitalRole.benefits || []).map((b: string, idx: number) => (
                            <div key={idx} className="flex items-start gap-1.5 text-xs font-['Inter'] text-slate-600">
                              <span className="text-[#1b95cd] font-bold">✓</span>
                              <span>{b}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* OTHER PORTALS: Features & Workflow */
                <div className="mt-6 space-y-6">
                  {/* Target Audience & Problems Solved */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-[#f8f9fa] border border-slate-200">
                      <span className="text-[11px] font-['Poppins'] font-semibold text-[#1b95cd] uppercase tracking-wider block mb-1">
                        Who Uses This Portal:
                      </span>
                      <p className="text-xs font-['Inter'] text-slate-700 leading-relaxed">
                        {activeMedPortal.whoUses}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#f8f9fa] border border-slate-200">
                      <span className="text-[11px] font-['Poppins'] font-semibold text-[#1b95cd] uppercase tracking-wider block mb-1">
                        Key Problems Solved:
                      </span>
                      <ul className="space-y-1">
                        {(activeMedPortal.problemsSolved || []).slice(0, 3).map((p: string, pIdx: number) => (
                          <li key={pIdx} className="text-xs font-['Inter'] text-slate-600 flex items-start gap-1.5">
                            <span className="text-[#1b95cd] font-bold">✓</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div>
                    <h3 className="font-['Poppins'] text-sm font-bold text-[#0d2335] uppercase tracking-wider mb-3">
                      Core Features in {activeMedPortal.name}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {(activeMedPortal.keyFeatures || []).map((feat: string, idx: number) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-[#f8f9fa] border border-slate-200 flex items-start gap-2.5"
                        >
                          <span className="text-[#1b95cd] font-bold text-xs mt-0.5">✓</span>
                          <div>
                            <span className="font-['Poppins'] text-xs font-semibold text-[#0d2335] block">{feat}</span>
                            <span className="font-['Inter'] text-[11px] text-slate-500 mt-0.5 block">
                              Automated sync across hospital health records.
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Workflow Steps */}
                  <div className="p-5 rounded-xl bg-[#f8f9fa] border border-slate-200">
                    <h4 className="font-['Poppins'] text-xs font-bold text-[#1b95cd] uppercase tracking-wider mb-3">
                      How It Works – {activeMedPortal.name} Workflow
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                      {(activeMedPortal.workflow || []).map((wf: any, idx: number) => (
                        <div key={idx} className="p-3 rounded-lg bg-white border border-slate-200">
                          <span className="text-[#1b95cd] font-bold font-['Poppins'] text-[11px]">
                            Step 0{idx + 1}
                          </span>
                          <div className="font-['Poppins'] font-semibold text-[#0d2335] mt-0.5">
                            {wf.title}
                          </div>
                          <div className="text-slate-500 font-['Inter'] mt-1 text-[11px] leading-relaxed">
                            {wf.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. MOSS AI MAPPER PRODUCT EXPLORATION (Sober White & Blue)                */}
      {/* ========================================================================= */}
      {activeProduct === 'mapper' && (
        <div>
          {/* Top Product Details in Paragraph */}
          <section className="bg-[#f8f9fa] border-b border-slate-200 py-10 lg:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-md bg-sky-50 text-[#1b95cd] border border-sky-100 text-xs font-['Poppins'] font-semibold uppercase tracking-wider">
                  Database Migration Platform
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-white text-slate-600 text-xs font-['Inter'] border border-slate-200">
                  Zero Downtime CDC
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-white text-slate-600 text-xs font-['Inter'] border border-slate-200">
                  99.8% Precision
                </span>
              </div>

              <h1 className="font-['Poppins'] font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0d2335] tracking-tight leading-tight max-w-4xl">
                Moss AI Mapper – Intelligent Schema Mapping and Data Migration.
              </h1>

              {/* Comprehensive Paragraph about Moss AI Mapper */}
              <div className="mt-4 p-5 sm:p-6 bg-white rounded-xl border border-slate-200 text-slate-600 text-sm sm:text-base leading-relaxed max-w-5xl shadow-2xs">
                <p>
                  <strong className="text-[#0d2335] font-semibold">Moss AI Mapper</strong> is an AI-assisted database migration platform designed to simplify schema analysis, source-to-target mapping, transformation planning, and migration validation. The application helps organizations understand differences between database structures and accelerate complex migration workflows. Organizations migrating between relational databases (PostgreSQL, MySQL, Oracle, SQL Server) and modern data warehouses or NoSQL stores face challenges with incompatible data types, naming disparities, and complex foreign key relationships. Moss AI Mapper automatically analyzes schema metadata, recommends accurate field correspondences, produces interactive Entity-Relationship (ER) diagrams, and verifies migration pipelines with continuous Change Data Capture (CDC) replication.
                </p>
              </div>

              {/* Links & Live Studio CTA */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-4 max-w-5xl">
                <div className="flex flex-wrap items-center gap-5 text-xs text-slate-600 font-['Inter']">
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#1b95cd] font-bold">✓</span> Automated Schema Discovery
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#1b95cd] font-bold">✓</span> Visual ER Relationship Graph
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#1b95cd] font-bold">✓</span> Real-Time Dry-Run Validation
                  </span>
                </div>

                <a
                  href="https://www.moss-ai-mapper.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#1b95cd] hover:bg-[#1579b0] text-white text-xs font-['Poppins'] font-semibold transition-colors cursor-pointer shadow-2xs flex items-center gap-1.5"
                >
                  <span>Visit Live Portal (moss-ai-mapper.com) ↗</span>
                </a>
              </div>
            </div>
          </section>

          {/* Horizontal Modules Cards */}
          <section className="bg-white border-b border-slate-200 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-['Poppins'] uppercase tracking-wider text-[#1b95cd] font-semibold">
                    Migration Architecture Modules
                  </span>
                  <h2 className="font-['Poppins'] font-bold text-lg sm:text-xl text-[#0d2335] mt-0.5">
                    End-to-End Migration Pipeline Modules
                  </h2>
                </div>

                <div className="hidden sm:flex items-center gap-1.5">
                  <button
                    onClick={() => scrollContainer(mapperScrollRef, 'left')}
                    className="w-7 h-7 rounded-lg bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center border border-slate-200 text-xs transition-colors cursor-pointer shadow-2xs"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => scrollContainer(mapperScrollRef, 'right')}
                    className="w-7 h-7 rounded-lg bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center border border-slate-200 text-xs transition-colors cursor-pointer shadow-2xs"
                  >
                    →
                  </button>
                </div>
              </div>

              <div
                ref={mapperScrollRef}
                className="flex items-stretch gap-4 overflow-x-auto pb-3 pt-1 no-scrollbar scroll-smooth"
              >
                {mapperModules.map((mod) => {
                  const isSelected = mod.id === selectedMapperModule

                  return (
                    <div
                      key={mod.id}
                      onClick={() => handleSelectMapperModule(mod.id)}
                      className={`shrink-0 w-[270px] sm:w-[300px] rounded-xl p-4.5 border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-sky-50/40 border-[#1b95cd] ring-1 ring-[#1b95cd] shadow-2xs'
                          : 'bg-white border-slate-200 hover:border-[#1b95cd]/60 hover:bg-slate-50/50'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-9 h-9 rounded-lg bg-sky-50 border border-sky-100 text-[#1b95cd] flex items-center justify-center text-lg">
                            {mod.icon || '⚡'}
                          </div>
                          <span
                            className={`text-[10px] font-['Poppins'] font-semibold px-2 py-0.5 rounded-full ${
                              isSelected
                                ? 'bg-[#1b95cd] text-white'
                                : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {isSelected ? 'Viewing' : 'Module'}
                          </span>
                        </div>

                        <h3 className="font-['Poppins'] font-bold text-sm text-[#0d2335] mb-1">
                          {mod.name}
                        </h3>

                        <p className="font-['Inter'] text-xs text-slate-600 leading-relaxed line-clamp-2">
                          {mod.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <button
                          type="button"
                          className={`w-full py-1.5 px-3 rounded-lg text-xs font-['Poppins'] font-semibold transition-colors cursor-pointer flex items-center justify-center ${
                            isSelected
                              ? 'bg-[#1b95cd] text-white'
                              : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                          }`}
                        >
                          <span>{isSelected ? 'Module Open Below' : 'Explore Module Details →'}</span>
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* IN-DEPTH MODULE DETAILS */}
          {activeMapperModule?.name && (
            <div ref={detailsSectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                  <div className="flex items-start gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 text-[#1b95cd] text-2xl flex items-center justify-center shrink-0">
                      {activeMapperModule.icon || '⚡'}
                    </div>
                    <div>
                      <span className="text-[11px] font-['Poppins'] font-semibold text-[#1b95cd] uppercase tracking-wider block">
                        Module Exploration
                      </span>
                      <h2 className="font-['Poppins'] font-bold text-xl sm:text-2xl text-[#0d2335]">
                        {activeMapperModule.name}
                      </h2>
                      <p className="font-['Inter'] text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
                        {activeMapperModule.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 shrink-0">
                    <a
                      href="https://www.moss-ai-mapper.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-[#1b95cd] hover:bg-[#1579b0] text-white font-['Poppins'] font-semibold text-xs transition-colors flex items-center gap-1 shadow-2xs"
                    >
                      <span>Visit Live Portal ↗</span>
                    </a>
                    <button
                      onClick={onContactClick}
                      className="px-3.5 py-2 rounded-lg bg-white hover:bg-slate-50 text-slate-700 text-xs font-['Poppins'] font-medium border border-slate-200 transition-colors cursor-pointer"
                    >
                      Consult Architect
                    </button>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Step-by-Step Execution */}
                  <div className="p-5 rounded-xl bg-[#f8f9fa] border border-slate-200">
                    <h3 className="font-['Poppins'] text-xs font-bold text-[#1b95cd] uppercase tracking-wider mb-3">
                      Technical Execution Steps
                    </h3>
                    <div className="space-y-2.5">
                      {(activeMapperModule.workflow || []).map((step: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white border border-slate-200">
                          <span className="w-4 h-4 rounded-full bg-sky-100 text-[#1b95cd] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="text-xs font-['Inter'] text-slate-600 leading-relaxed">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Capabilities & Benefits */}
                  <div className="p-5 rounded-xl bg-[#f8f9fa] border border-slate-200">
                    <h3 className="font-['Poppins'] text-xs font-bold text-[#1b95cd] uppercase tracking-wider mb-3">
                      Features & Validation Safeguards
                    </h3>
                    <div className="space-y-2">
                      {(activeMapperModule.features || []).map((cap: string, idx: number) => (
                        <div key={idx} className="p-2.5 rounded-lg bg-white border border-slate-200 flex items-start gap-2">
                          <span className="text-[#1b95cd] font-bold text-xs mt-0.5">✓</span>
                          <span className="text-xs font-['Inter'] text-slate-700 font-medium leading-relaxed">{cap}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 p-3 rounded-lg bg-white border border-slate-200">
                      <div className="text-[11px] font-['Poppins'] font-semibold text-[#0d2335] uppercase tracking-wider mb-1">
                        Benefits:
                      </div>
                      <div className="space-y-1">
                        {(activeMapperModule.benefits || []).map((b: string, bIdx: number) => (
                          <div key={bIdx} className="text-xs font-['Inter'] text-slate-600 flex items-start gap-1.5">
                            <span className="text-[#1b95cd] font-bold">✓</span>
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. MOSS ACADEMY PRODUCT EXPLORATION (Sober White & Blue)                  */}
      {/* ========================================================================= */}
      {activeProduct === 'academy' && (
        <div>
          {/* Top Product Details in Paragraph */}
          <section className="bg-[#f8f9fa] border-b border-slate-200 py-10 lg:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-md bg-sky-50 text-[#1b95cd] border border-sky-100 text-xs font-['Poppins'] font-semibold uppercase tracking-wider">
                  Workforce & Engineering Academy
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-white text-slate-600 text-xs font-['Inter'] border border-slate-200 font-medium">
                  Guaranteed Internship Program
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-white text-slate-600 text-xs font-['Inter'] border border-slate-200">
                  Bangalore & Nagpur Hubs
                </span>
              </div>

              <h1 className="font-['Poppins'] font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0d2335] tracking-tight leading-tight max-w-4xl">
                Moss Academy – Learn Today. Innovate Tomorrow. Build the Future.
              </h1>

              {/* Comprehensive Paragraph about Moss Academy */}
              <div className="mt-4 p-5 sm:p-6 bg-white rounded-xl border border-slate-200 text-slate-600 text-sm sm:text-base leading-relaxed max-w-5xl shadow-2xs">
                <p>
                  <strong className="text-[#0d2335] font-semibold">Moss Academy</strong> provides industry-oriented technical education focused on practical learning, modern software development, AI technologies, cloud engineering, and real-world project experience. The academy aims to help learners develop technical confidence through structured programs, hands-on assignments, mentorship, and practical projects. Every eligible student in our flagship programs is backed by a <strong className="text-[#1b95cd]">Guaranteed Internship Program</strong> to work directly on enterprise deployments, gain commercial project exposure, and launch an AI-ready career.
                </p>
              </div>

              {/* Sober Admission Offer Banner */}
              <div className="mt-4 p-4 rounded-xl bg-white border border-sky-200 flex flex-wrap items-center justify-between gap-3 max-w-5xl shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#1b95cd] flex items-center justify-center font-bold text-sm">
                    ⚡
                  </div>
                  <div>
                    <div className="text-xs font-['Poppins'] font-semibold text-[#1b95cd] uppercase tracking-wider">
                      Special Admission Offer · 20% OFF
                    </div>
                    <div className="text-xs sm:text-sm font-['Poppins'] text-[#0d2335] font-medium">
                      Forward Deployed Engineering · Original Fee: <span className="line-through text-slate-400">₹49,999</span> → Offer Price:{' '}
                      <span className="text-[#1b95cd] font-bold font-mono">₹39,999</span> · Limited Seats
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href="https://www.moss-tech.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-[#1b95cd] hover:bg-[#1579b0] text-white text-xs font-['Poppins'] font-semibold transition-colors shadow-2xs flex items-center gap-1"
                  >
                    <span>Visit Portal (moss-tech.com) ↗</span>
                  </a>
                  <button
                    onClick={() => setPosterLightbox('/images/fde-course.jpg')}
                    className="px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-['Poppins'] font-medium border border-slate-200 cursor-pointer"
                  >
                    View FDE Flyer
                  </button>
                  <button
                    onClick={() => setPosterLightbox('/images/agentic-ai-course.jpg')}
                    className="px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-['Poppins'] font-medium border border-slate-200 cursor-pointer"
                  >
                    View Agentic AI Flyer
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Horizontal Courses Cards */}
          <section className="bg-white border-b border-slate-200 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-['Poppins'] uppercase tracking-wider text-[#1b95cd] font-semibold">
                    Technical Career Tracks
                  </span>
                  <h2 className="font-['Poppins'] font-bold text-lg sm:text-xl text-[#0d2335] mt-0.5">
                    Explore Moss Academy Courses & Internships
                  </h2>
                </div>

                <div className="hidden sm:flex items-center gap-1.5">
                  <button
                    onClick={() => scrollContainer(academyScrollRef, 'left')}
                    className="w-7 h-7 rounded-lg bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center border border-slate-200 text-xs transition-colors cursor-pointer shadow-2xs"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => scrollContainer(academyScrollRef, 'right')}
                    className="w-7 h-7 rounded-lg bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center border border-slate-200 text-xs transition-colors cursor-pointer shadow-2xs"
                  >
                    →
                  </button>
                </div>
              </div>

              <div
                ref={academyScrollRef}
                className="flex items-stretch gap-4 overflow-x-auto pb-3 pt-1 no-scrollbar scroll-smooth"
              >
                {academyCourses.map((course) => {
                  const isSelected = course.slug === selectedAcademyCourse
                  const isFde = course.slug === 'forward-deployed-engineering'

                  return (
                    <div
                      key={course.id || course.slug}
                      onClick={() => handleSelectAcademyCourse(course.slug)}
                      className={`shrink-0 w-[280px] sm:w-[310px] rounded-xl p-4.5 border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-sky-50/40 border-[#1b95cd] ring-1 ring-[#1b95cd] shadow-2xs'
                          : 'bg-white border-slate-200 hover:border-[#1b95cd]/60 hover:bg-slate-50/50'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2.5">
                          <span className="text-[10px] font-mono text-[#1b95cd] font-semibold">
                            {course.duration}
                          </span>
                          {isFde && (
                            <span className="text-[9px] font-['Poppins'] font-bold px-2 py-0.5 rounded bg-sky-100 text-[#1b95cd]">
                              Flagship
                            </span>
                          )}
                        </div>

                        <h3 className="font-['Poppins'] font-bold text-sm text-[#0d2335] mb-1">
                          {course.title}
                        </h3>

                        <p className="font-['Inter'] text-xs text-slate-600 leading-relaxed line-clamp-2 mb-3">
                          {course.heroDescription}
                        </p>

                        <div className="flex flex-wrap gap-1 mb-2">
                          {(course.techIcons || []).slice(0, 3).map((tech: string, tIdx: number) => (
                            <span
                              key={tIdx}
                              className="px-1.5 py-0.5 rounded bg-slate-100 text-[10px] font-mono text-slate-600"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-100">
                        <div className="flex items-baseline justify-between mb-2 text-xs">
                          <span className="text-slate-400 line-through font-mono">{course.originalFee}</span>
                          <span className="font-bold text-[#0d2335] font-mono">{course.offerFee}</span>
                        </div>

                        <button
                          type="button"
                          className={`w-full py-1.5 px-3 rounded-lg text-xs font-['Poppins'] font-semibold transition-colors cursor-pointer flex items-center justify-center ${
                            isSelected
                              ? 'bg-[#1b95cd] text-white'
                              : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                          }`}
                        >
                          <span>{isSelected ? 'Syllabus Open Below' : 'View Course & Syllabus →'}</span>
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* IN-DEPTH COURSE DETAILS & SYLLABUS */}
          {activeAcademyCourse?.title && (
            <div ref={detailsSectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                  <div>
                    <span className="text-[11px] font-['Poppins'] font-semibold text-[#1b95cd] uppercase tracking-wider block">
                      Course Curriculum Explorer ({(activeAcademyCourse.curriculum || []).length} Modules)
                    </span>
                    <h2 className="font-['Poppins'] font-bold text-xl sm:text-2xl text-[#0d2335]">
                      {activeAcademyCourse.title}
                    </h2>
                    <p className="font-['Inter'] text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
                      {activeAcademyCourse.heroDescription}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                    <a
                      href="https://www.moss-tech.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-lg bg-white hover:bg-slate-50 text-[#1b95cd] border border-slate-200 hover:border-[#1b95cd] font-['Poppins'] font-semibold text-xs transition-colors flex items-center gap-1 shadow-2xs"
                    >
                      <span>Visit Portal ↗</span>
                    </a>
                    <button
                      onClick={() => setEnrollModalOpen(true)}
                      className="px-5 py-2.5 rounded-lg bg-[#1b95cd] hover:bg-[#1579b0] text-white font-['Poppins'] font-semibold text-xs transition-colors cursor-pointer"
                    >
                      Enroll Now ({activeAcademyCourse.offerFee})
                    </button>
                    <a
                      href="tel:+918867475219"
                      className="px-3.5 py-2.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 text-xs font-['Poppins'] font-medium border border-slate-200 transition-colors"
                    >
                      📞 8867475219
                    </a>
                  </div>
                </div>

                {/* Guaranteed Internship Box */}
                <div className="mt-5 p-4 rounded-xl bg-[#f8f9fa] border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-xs font-['Poppins'] font-bold text-[#1b95cd] uppercase tracking-wider">
                      Guaranteed Internship Program
                    </div>
                    <div className="text-xs font-['Inter'] text-slate-600 mt-0.5 max-w-2xl">
                      {activeAcademyCourse.internshipOpportunity}
                    </div>
                  </div>
                  <button
                    onClick={() => setEnrollModalOpen(true)}
                    className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-slate-50 text-[#1b95cd] text-xs font-['Poppins'] font-semibold border border-slate-200 shrink-0 cursor-pointer"
                  >
                    Apply for Internship Track →
                  </button>
                </div>

                {/* Syllabus Modules */}
                <div className="mt-6">
                  <h3 className="font-['Poppins'] text-xs font-bold text-[#0d2335] uppercase tracking-wider mb-3">
                    Course Syllabus ({(activeAcademyCourse.curriculum || []).length} Modules)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {(activeAcademyCourse.curriculum || []).map((mod: any, idx: number) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-[#f8f9fa] border border-slate-200"
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-[#1b95cd] font-mono text-[10px] font-bold">
                            {mod.module}
                          </span>
                          <span className="font-['Poppins'] text-xs font-semibold text-[#0d2335]">{mod.title}</span>
                        </div>
                        <ul className="space-y-1 mt-2">
                          {(mod.topics || []).map((t: string, tIdx: number) => (
                            <li key={tIdx} className="text-[11px] font-['Inter'] text-slate-600 flex items-start gap-1.5">
                              <span className="text-[#1b95cd] text-[9px] mt-0.5">▸</span>
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specifications Bar */}
                <div className="mt-5 p-4 rounded-xl bg-[#f8f9fa] border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <span className="text-slate-500 font-['Inter']">Learning Mode:</span>
                    <div className="font-semibold text-[#0d2335] font-['Poppins'] mt-0.5">{activeAcademyCourse.learningMode}</div>
                  </div>
                  <div>
                    <span className="text-slate-500 font-['Inter']">Class Timings:</span>
                    <div className="font-semibold text-[#0d2335] font-['Poppins'] mt-0.5">{activeAcademyCourse.classTimings}</div>
                  </div>
                  <div>
                    <span className="text-slate-500 font-['Inter']">Certification:</span>
                    <div className="font-semibold text-[#0d2335] font-['Poppins'] mt-0.5">{activeAcademyCourse.certificationDetails}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. CUSTOM AI SOLUTIONS PRODUCT EXPLORATION (Sober White & Blue)           */}
      {/* ========================================================================= */}
      {activeProduct === 'solutions' && (
        <div>
          <section className="bg-[#f8f9fa] border-b border-slate-200 py-10 lg:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-md bg-sky-50 text-[#1b95cd] border border-sky-100 text-xs font-['Poppins'] font-semibold uppercase tracking-wider">
                  Bespoke Enterprise AI
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-white text-slate-600 text-xs font-['Inter'] border border-slate-200">
                  Private VPC Deployment
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-white text-slate-600 text-xs font-['Inter'] border border-slate-200">
                  Zero Data Retention
                </span>
              </div>

              <h1 className="font-['Poppins'] font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0d2335] tracking-tight leading-tight max-w-4xl">
                From Business Challenges to Intelligent AI Solutions.
              </h1>

              <div className="mt-4 p-5 sm:p-6 bg-white rounded-xl border border-slate-200 text-slate-600 text-sm sm:text-base leading-relaxed max-w-5xl shadow-2xs">
                <p>
                  <strong className="text-[#0d2335] font-semibold">MossTech Custom Solutions</strong> helps organizations design, train, and deploy customized autonomous AI agents, multi-agent swarms, and enterprise workflow automation systems. Rather than generic chatbots, we engineer mission-critical systems with human-in-the-loop oversight, deterministic database tool execution, and complete private cloud isolation. We analyze your internal operations, evaluate private vector knowledge schemas, and deliver production software backed by commercial SLAs.
                </p>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-4 max-w-5xl">
                <div className="flex flex-wrap items-center gap-5 text-xs text-slate-600 font-['Inter']">
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#1b95cd] font-bold">✓</span> Private VPC Air-Gapped
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#1b95cd] font-bold">✓</span> Zero Data Retention Agreements
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#1b95cd] font-bold">✓</span> Commercial Production SLAs
                  </span>
                </div>

                <a
                  href="https://www.moss-tech.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#1b95cd] hover:bg-[#1579b0] text-white text-xs font-['Poppins'] font-semibold transition-colors cursor-pointer shadow-2xs flex items-center gap-1.5"
                >
                  <span>Visit Company Portal (moss-tech.com) ↗</span>
                </a>
              </div>
            </div>
          </section>

          {/* Horizontal Solutions Cards */}
          <section className="bg-white border-b border-slate-200 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-['Poppins'] uppercase tracking-wider text-[#1b95cd] font-semibold">
                    Specialized Solution Tracks
                  </span>
                  <h2 className="font-['Poppins'] font-bold text-lg sm:text-xl text-[#0d2335] mt-0.5">
                    Select an AI Solution Track
                  </h2>
                </div>

                <div className="hidden sm:flex items-center gap-1.5">
                  <button
                    onClick={() => scrollContainer(solutionScrollRef, 'left')}
                    className="w-7 h-7 rounded-lg bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center border border-slate-200 text-xs transition-colors cursor-pointer shadow-2xs"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => scrollContainer(solutionScrollRef, 'right')}
                    className="w-7 h-7 rounded-lg bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center border border-slate-200 text-xs transition-colors cursor-pointer shadow-2xs"
                  >
                    →
                  </button>
                </div>
              </div>

              <div
                ref={solutionScrollRef}
                className="flex items-stretch gap-4 overflow-x-auto pb-3 pt-1 no-scrollbar scroll-smooth"
              >
                {customSolutions.map((sol) => {
                  const isSelected = sol.id === selectedSolution

                  return (
                    <div
                      key={sol.id}
                      onClick={() => handleSelectSolution(sol.id)}
                      className={`shrink-0 w-[270px] sm:w-[300px] rounded-xl p-4.5 border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-sky-50/40 border-[#1b95cd] ring-1 ring-[#1b95cd] shadow-2xs'
                          : 'bg-white border-slate-200 hover:border-[#1b95cd]/60 hover:bg-slate-50/50'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-9 h-9 rounded-lg bg-sky-50 border border-sky-100 text-[#1b95cd] flex items-center justify-center text-lg">
                            {sol.icon || '🤖'}
                          </div>
                          <span
                            className={`text-[10px] font-['Poppins'] font-semibold px-2 py-0.5 rounded-full ${
                              isSelected
                                ? 'bg-[#1b95cd] text-white'
                                : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {isSelected ? 'Viewing' : 'Explore'}
                          </span>
                        </div>

                        <h3 className="font-['Poppins'] font-bold text-sm text-[#0d2335] mb-1">
                          {sol.title}
                        </h3>

                        <p className="font-['Inter'] text-xs text-slate-600 leading-relaxed line-clamp-2">
                          {sol.shortDesc}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <button
                          type="button"
                          className={`w-full py-1.5 px-3 rounded-lg text-xs font-['Poppins'] font-semibold transition-colors cursor-pointer flex items-center justify-center ${
                            isSelected
                              ? 'bg-[#1b95cd] text-white'
                              : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                          }`}
                        >
                          <span>{isSelected ? 'Architecture Open Below' : 'Explore Architecture →'}</span>
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* IN-DEPTH SOLUTION DETAILS */}
          {activeSolutionObj?.title && (
            <div ref={detailsSectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                  <div className="flex items-start gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 text-[#1b95cd] text-2xl flex items-center justify-center shrink-0">
                      {activeSolutionObj.icon || '🤖'}
                    </div>
                    <div>
                      <span className="text-[11px] font-['Poppins'] font-semibold text-[#1b95cd] uppercase tracking-wider block">
                        Enterprise AI Architecture
                      </span>
                      <h2 className="font-['Poppins'] font-bold text-xl sm:text-2xl text-[#0d2335]">
                        {activeSolutionObj.title}
                      </h2>
                      <p className="font-['Inter'] text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
                        {activeSolutionObj.overview}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={onContactClick}
                    className="px-4 py-2 rounded-lg bg-[#1b95cd] hover:bg-[#1579b0] text-white font-['Poppins'] font-medium text-xs transition-colors shrink-0 cursor-pointer"
                  >
                    Schedule Architecture Review
                  </button>
                </div>

                <div className="mt-5 p-4 rounded-xl bg-[#f8f9fa] border border-slate-200">
                  <div className="text-[11px] font-['Poppins'] text-[#1b95cd] font-semibold uppercase tracking-wider mb-1.5">
                    System Architecture Flow:
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-slate-200 text-xs font-mono text-slate-700 overflow-x-auto">
                    {activeSolutionObj.architecture}
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="p-4 rounded-xl bg-[#f8f9fa] border border-slate-200">
                    <h4 className="text-[11px] font-['Poppins'] font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                      Problems Addressed:
                    </h4>
                    <ul className="space-y-1.5 text-xs font-['Inter'] text-slate-600">
                      {(activeSolutionObj.problemsAddressed || []).map((p: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-slate-400 font-bold">•</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-[#f8f9fa] border border-slate-200">
                    <h4 className="text-[11px] font-['Poppins'] font-bold text-[#1b95cd] uppercase tracking-wider mb-2.5">
                      Proven Use Cases:
                    </h4>
                    <ul className="space-y-1.5 text-xs font-['Inter'] text-slate-600">
                      {(activeSolutionObj.useCases || []).map((u: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-[#1b95cd] font-bold">✓</span>
                          <span>{u}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Lightbox Modal for Authentic Screenshots & Flyers */}
      {posterLightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs cursor-pointer"
          onClick={() => setPosterLightbox(null)}
        >
          <div
            className="relative max-w-3xl max-h-[90vh] overflow-auto rounded-xl bg-white border border-slate-200 p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPosterLightbox(null)}
              className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-slate-100 text-xs cursor-pointer shadow-xs"
            >
              ✕
            </button>
            <img
              src={posterLightbox}
              alt="Asset Preview"
              className="w-full h-auto rounded-lg object-contain"
            />
          </div>
        </div>
      )}

      {/* Course Enrollment Modal (Sober White & Blue) */}
      {enrollModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="relative w-full max-w-md rounded-2xl bg-white border border-slate-200 p-6 shadow-2xl">
            <button
              onClick={() => setEnrollModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-sm p-1 cursor-pointer"
            >
              ✕
            </button>

            {enrollSubmitted ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 rounded-full bg-sky-50 text-[#1b95cd] flex items-center justify-center mx-auto text-xl mb-3">
                  ✓
                </div>
                <h3 className="font-['Poppins'] text-lg font-bold text-[#0d2335]">Enrollment Registered</h3>
                <p className="font-['Inter'] text-xs text-slate-600 mt-1">
                  Thank you! Our admissions coordinator will reach out to <span className="font-mono text-[#0d2335]">{enrollForm.email}</span> with onboarding materials.
                </p>
                <div className="mt-3 p-2.5 rounded-lg bg-sky-50 border border-sky-100 text-xs text-[#1b95cd] font-medium font-['Poppins']">
                  Locked in Special Offer Price: <strong>{activeAcademyCourse.offerFee}</strong>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded bg-sky-50 text-[#1b95cd] text-[10px] font-['Poppins'] font-bold">
                    Special Offer {activeAcademyCourse.offerFee}
                  </span>
                  <span className="text-[11px] text-slate-500 font-['Inter']">Admissions Open</span>
                </div>
                <h3 className="font-['Poppins'] text-lg font-bold text-[#0d2335]">{activeAcademyCourse.title}</h3>
                <p className="text-xs text-slate-500 font-['Inter'] mt-0.5">
                  Secure your cohort seat with guaranteed internship eligibility.
                </p>

                <form onSubmit={handleEnrollSubmit} className="mt-4 space-y-3 font-['Inter']">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={enrollForm.name}
                      onChange={(e) => setEnrollForm({ ...enrollForm, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-xs focus:outline-none focus:border-[#1b95cd]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Email</label>
                      <input
                        type="email"
                        required
                        value={enrollForm.email}
                        onChange={(e) => setEnrollForm({ ...enrollForm, email: e.target.value })}
                        placeholder="rahul@example.com"
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-xs focus:outline-none focus:border-[#1b95cd]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        required
                        value={enrollForm.phone}
                        onChange={(e) => setEnrollForm({ ...enrollForm, phone: e.target.value })}
                        placeholder="+91-8867475219"
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-xs focus:outline-none focus:border-[#1b95cd]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Campus / Learning Mode</label>
                    <select
                      value={enrollForm.mode}
                      onChange={(e) => setEnrollForm({ ...enrollForm, mode: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-[#1b95cd]"
                    >
                      <option value="Hybrid (Bangalore Campus)">Hybrid (Bangalore Campus + Online)</option>
                      <option value="Hybrid (Nagpur Campus)">Hybrid (Nagpur Campus + Online)</option>
                      <option value="100% Live Online">100% Live Online (Global Cohort)</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-lg bg-[#1b95cd] hover:bg-[#1579b0] text-white font-['Poppins'] font-semibold text-xs transition-colors cursor-pointer"
                    >
                      Confirm Enrollment · {activeAcademyCourse.offerFee}
                    </button>
                    <div className="flex items-center justify-between mt-2 text-[10px] text-slate-400">
                      <span>Limited Seats Cohort</span>
                      <span>Desk: 8867475219</span>
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
