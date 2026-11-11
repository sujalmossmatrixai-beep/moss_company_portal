import { useState } from 'react'
import Breadcrumbs from '../navigation/Breadcrumbs'
import StickyProductNav from '../navigation/StickyProductNav'
import ScreenshotGallery from '../media/ScreenshotGallery'
import { MOSS_MED_AI_DATA } from '../../data/productData'

interface HospitalPortalPageProps {
  onNavigate: (path: string) => void
  onRequestDemo: () => void
}

export default function HospitalPortalPage({ onNavigate, onRequestDemo }: HospitalPortalPageProps) {
  const portal = MOSS_MED_AI_DATA.portals.find((p) => p.id === 'hospital-portal')!
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(0)
  const [selectedRoleIndex, setSelectedRoleIndex] = useState(0)

  const activeFeature = portal.features[selectedFeatureIndex] || portal.features[0]
  const activeRole = portal.roleDashboards ? portal.roleDashboards[selectedRoleIndex] || portal.roleDashboards[0] : null

  const navSections = [
    { id: 'overview', label: 'Overview' },
    { id: 'preview', label: 'Operational Preview' },
    { id: 'roles', label: '9 Role Dashboards' },
    { id: 'features', label: 'Core Modules' },
    { id: 'workflow', label: 'Workflow' },
    { id: 'related', label: 'Related Portals' },
  ]

  const hospitalScreenshots = [
    {
      id: 'hosp-screen-main',
      imagePath: '/images/moss-med-ai-portals.png',
      title: 'Hospital Portal - Operational Command Center',
      description: 'Centralized administrator dashboard showing bed turnover, nurse allocation, and department revenue metrics.',
      associatedProduct: 'moss-med-ai' as const,
      associatedPortal: 'hospital-portal',
      alt: 'Hospital Operations Command Dashboard',
      displayOrder: 1,
      badge: 'Operations & Governance',
    },
  ]

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#0d2335] pt-24 pb-20 selection:bg-purple-100 selection:text-purple-800 text-left">
      <StickyProductNav
        sections={navSections}
        ctaLabel="Request a Demo"
        onCtaClick={onRequestDemo}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            { label: 'Products', onClick: () => onNavigate('/#products') },
            { label: 'Moss Med AI', onClick: () => onNavigate('/products/moss-med-ai') },
            { label: 'Hospital Portal' },
          ]}
        />

        {/* ─────────────────────────────────────────────────────────────
            A. PORTAL INTRODUCTION
            ───────────────────────────────────────────────────────────── */}
        <section id="overview" className="py-8 sm:py-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200 text-xs font-['Poppins'] font-semibold mb-3">
            <span>🏥</span>
            <span>Centralized Hospital Operations</span>
          </div>

          <h1 className="font-['Poppins'] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0d2335] tracking-tight mb-4">
            Hospital Portal – Orchestrating Every Ward, Shift, and Resource.
          </h1>

          <p className="font-['Inter'] text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mb-8">
            {portal.tagline} {portal.whyExists}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {/* Who Uses */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
              <span className="text-[10px] font-['Poppins'] font-bold text-purple-600 uppercase tracking-wider block mb-1.5">
                Who Uses It
              </span>
              <p className="font-['Inter'] text-xs text-slate-600 leading-relaxed">
                {portal.whoUses}
              </p>
            </div>

            {/* Problems Solved */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
              <span className="text-[10px] font-['Poppins'] font-bold text-emerald-600 uppercase tracking-wider block mb-1.5">
                Problems Solved
              </span>
              <ul className="text-xs font-['Inter'] text-slate-600 space-y-1">
                {portal.problemsSolved.slice(0, 3).map((p, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Benefits */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
              <span className="text-[10px] font-['Poppins'] font-bold text-blue-600 uppercase tracking-wider block mb-1.5">
                Main Benefits
              </span>
              <ul className="text-xs font-['Inter'] text-slate-600 space-y-1">
                {portal.mainBenefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-purple-500 font-bold">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            B. PORTAL DASHBOARD PREVIEW
            ───────────────────────────────────────────────────────────── */}
        <section id="preview" className="py-10 border-t border-slate-200/80">
          <ScreenshotGallery
            screenshots={hospitalScreenshots}
            title="Hospital Operations Workspace Preview"
            subtitle="Central administrative interface designed for clinical executives and department managers."
          />
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION 4: EXPLORE ROLE-BASED DASHBOARDS (9 ROLES)
            ───────────────────────────────────────────────────────────── */}
        {portal.roleDashboards && portal.roleDashboards.length > 0 && (
          <section id="roles" className="py-12 border-t border-slate-200/80">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-[#8b5cf6] font-['Poppins'] font-semibold text-xs tracking-wider uppercase bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                Multi-Role Governance
              </span>
              <h2 className="font-['Poppins'] font-bold text-2.5xl sm:text-3xl text-[#0d2335] tracking-tight mt-2.5 mb-2">
                Explore Role-Based Dashboards
              </h2>
              <p className="font-['Inter'] text-xs sm:text-sm text-slate-600 leading-relaxed">
                Hospital workflows vary drastically across administration, nursing, finance, and emergency triage. Select a role below to explore its dedicated interface.
              </p>
              <div className="mt-2 text-[11px] font-['Inter'] text-slate-400 italic">
                *Note: Pharmacy and Laboratory dashboards operate as standalone portal offerings.
              </div>
            </div>

            {/* 9 Role Pills / Selector Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-8">
              {portal.roleDashboards.map((role, idx) => (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setSelectedRoleIndex(idx)}
                  className={`p-3 rounded-2xl text-left border transition-all cursor-pointer flex items-center gap-2.5 ${
                    selectedRoleIndex === idx
                      ? 'bg-purple-600 text-white border-purple-600 shadow-md scale-102 font-semibold'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-purple-300 hover:bg-purple-50/40'
                  }`}
                >
                  <span className="text-xl shrink-0">{role.icon}</span>
                  <div className="min-w-0">
                    <div className="font-['Poppins'] text-xs truncate leading-snug">
                      {role.roleName.replace(' Dashboard', '')}
                    </div>
                    <div className={`text-[10px] truncate ${selectedRoleIndex === idx ? 'text-purple-200' : 'text-slate-400'}`}>
                      {role.badge}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Expanded Role Detail View */}
            {activeRole && (
              <div className="bg-white rounded-3xl p-6 sm:p-9 border border-purple-200/90 shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3.5">
                    <div className="w-13 h-13 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center text-3xl shrink-0 border border-purple-200">
                      {activeRole.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-['Poppins'] font-bold text-purple-700 uppercase tracking-wider bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
                        {activeRole.badge}
                      </span>
                      <h3 className="font-['Poppins'] font-bold text-xl sm:text-2xl text-[#0d2335] mt-1">
                        {activeRole.roleName}
                      </h3>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={onRequestDemo}
                    className="btn-primary-blue text-xs font-['Poppins'] font-semibold py-2 px-4 rounded-xl shadow-xs self-start sm:self-auto cursor-pointer"
                  >
                    Request Demo for {activeRole.badge} →
                  </button>
                </div>

                {/* Role Overview */}
                <div className="mb-6">
                  <h4 className="font-['Poppins'] font-semibold text-xs text-slate-400 uppercase tracking-wider mb-2">
                    Role Overview & Scope:
                  </h4>
                  <p className="font-['Inter'] text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                    {activeRole.overview}
                  </p>
                </div>

                {/* Grid: Responsibilities & Key Modules */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Responsibilities */}
                  <div className="p-4 rounded-2xl bg-purple-50/40 border border-purple-100">
                    <h4 className="font-['Poppins'] font-bold text-xs text-[#0d2335] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <span>📋</span>
                      <span>Everyday Responsibilities:</span>
                    </h4>
                    <ul className="space-y-2">
                      {activeRole.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2 text-xs font-['Inter'] text-slate-700">
                          <span className="text-purple-600 font-bold shrink-0 mt-0.5">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Modules */}
                  <div className="p-4 rounded-2xl bg-blue-50/40 border border-blue-100">
                    <h4 className="font-['Poppins'] font-bold text-xs text-[#0d2335] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <span>💻</span>
                      <span>Key Dashboard Modules:</span>
                    </h4>
                    <div className="space-y-2.5">
                      {activeRole.keyModules.map((mod, mIdx) => (
                        <div key={mIdx} className="text-xs">
                          <div className="font-['Poppins'] font-semibold text-[#0d2335]">
                            {mod.name}
                          </div>
                          <div className="font-['Inter'] text-[11px] text-slate-500">
                            {mod.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Workflow & Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                  <div>
                    <h4 className="font-['Poppins'] font-bold text-xs text-[#0d2335] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <span>🔄</span>
                      <span>Task Execution Workflow:</span>
                    </h4>
                    <ol className="space-y-1.5">
                      {activeRole.workflow.map((w, wIdx) => (
                        <li key={wIdx} className="flex items-center gap-2 text-xs font-['Inter'] text-slate-700">
                          <span className="w-4 h-4 rounded-full bg-purple-100 text-purple-700 font-bold text-[10px] flex items-center justify-center shrink-0">
                            {wIdx + 1}
                          </span>
                          <span>{w}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div>
                    <h4 className="font-['Poppins'] font-bold text-xs text-[#0d2335] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <span>🏆</span>
                      <span>Operational Benefits:</span>
                    </h4>
                    <div className="space-y-1.5">
                      {activeRole.benefits.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 text-xs font-['Inter'] text-emerald-800">
                          <span className="text-emerald-500 font-bold">✓</span>
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        )}

        {/* ─────────────────────────────────────────────────────────────
            C. CORE HOSPITAL MODULES (General Features)
            ───────────────────────────────────────────────────────────── */}
        <section id="features" className="py-12 border-t border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[#8b5cf6] font-['Poppins'] font-semibold text-xs tracking-wider uppercase bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
              Cross-Department Modules
            </span>
            <h2 className="font-['Poppins'] font-bold text-2xl sm:text-3xl text-[#0d2335] tracking-tight mt-2">
              Enterprise Hospital Modules
            </h2>
            <p className="font-['Inter'] text-xs sm:text-sm text-slate-500 mt-1">
              Select any core operational module to explore its technical capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-2.5">
              {portal.features.map((feat, idx) => (
                <button
                  key={feat.id}
                  type="button"
                  onClick={() => setSelectedFeatureIndex(idx)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                    selectedFeatureIndex === idx
                      ? 'bg-purple-50/80 border-purple-500 shadow-sm ring-2 ring-purple-500/20'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{feat.icon}</span>
                    <div>
                      <h4 className="font-['Poppins'] font-semibold text-xs sm:text-sm text-[#0d2335]">
                        {feat.name}
                      </h4>
                      <p className="font-['Inter'] text-[11px] text-slate-500 line-clamp-1">
                        {feat.shortDesc}
                      </p>
                    </div>
                  </div>
                  <span className={`text-xs font-bold ${selectedFeatureIndex === idx ? 'text-purple-600' : 'text-slate-300'}`}>
                    →
                  </span>
                </button>
              ))}
            </div>

            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{activeFeature.icon}</span>
                <div>
                  <span className="text-[10px] font-['Poppins'] font-bold text-purple-600 uppercase tracking-wider bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                    Hospital Module
                  </span>
                  <h3 className="font-['Poppins'] font-bold text-xl sm:text-2xl text-[#0d2335]">
                    {activeFeature.name}
                  </h3>
                </div>
              </div>

              <p className="font-['Inter'] text-sm text-slate-600 leading-relaxed mb-6">
                {activeFeature.detailedExplanation}
              </p>

              <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <h4 className="font-['Poppins'] font-semibold text-xs text-[#0d2335] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <span>⚙️</span>
                  <span>How It Operates:</span>
                </h4>
                <ol className="space-y-2">
                  {activeFeature.howItWorks.map((step, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2.5 text-xs font-['Inter'] text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                        {sIdx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h4 className="font-['Poppins'] font-semibold text-xs text-[#0d2335] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <span>🌟</span>
                  <span>Institutional Benefits:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeFeature.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="p-3 rounded-xl bg-purple-50/50 border border-purple-100 flex items-start gap-2 text-xs font-['Inter'] text-slate-700">
                      <span className="text-purple-600 font-bold mt-0.5">✓</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            D. HOW IT WORKS (WORKFLOW)
            ───────────────────────────────────────────────────────────── */}
        <section id="workflow" className="py-12 border-t border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[#8b5cf6] font-['Poppins'] font-semibold text-xs tracking-wider uppercase bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
              Operational Cycle
            </span>
            <h2 className="font-['Poppins'] font-bold text-2xl sm:text-3xl text-[#0d2335] tracking-tight mt-2">
              Hospital Operations Lifecycle
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {portal.workflow.map((w, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs relative">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-['Poppins'] font-bold flex items-center justify-center text-xs mb-3 shadow-xs">
                  {w.step}
                </div>
                <h4 className="font-['Poppins'] font-bold text-sm text-[#0d2335] mb-1">
                  {w.title}
                </h4>
                <p className="font-['Inter'] text-xs text-slate-500 leading-relaxed">
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            E. RELATED PORTALS
            ───────────────────────────────────────────────────────────── */}
        <section id="related" className="py-12 border-t border-slate-200/80">
          <h3 className="font-['Poppins'] font-bold text-xl text-[#0d2335] mb-6">
            Explore Other Moss Med AI Portals
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div
              onClick={() => onNavigate('/products/moss-med-ai/patient-portal')}
              className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-400 shadow-2xs hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl">
                  👤
                </div>
                <h4 className="font-['Poppins'] font-bold text-base text-[#0d2335] group-hover:text-emerald-600 transition-colors">
                  Patient Portal →
                </h4>
              </div>
              <p className="font-['Inter'] text-xs text-slate-500 leading-relaxed">
                Empowering patients to book appointments, review test reports, and manage personal health records.
              </p>
            </div>

            <div
              onClick={() => onNavigate('/products/moss-med-ai/doctor-portal')}
              className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-400 shadow-2xs hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl">
                  🩺
                </div>
                <h4 className="font-['Poppins'] font-bold text-base text-[#0d2335] group-hover:text-blue-600 transition-colors">
                  Doctor Portal →
                </h4>
              </div>
              <p className="font-['Inter'] text-xs text-slate-500 leading-relaxed">
                Helping doctors manage consultations, appointments, and patient information through an integrated clinical workspace.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            F. CTA BANNER
            ───────────────────────────────────────────────────────────── */}
        <section className="py-10 text-center">
          <div className="card-white-shadow rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-purple-50 via-white to-sky-50 border border-purple-200 text-center">
            <h2 className="font-['Poppins'] font-bold text-2.5xl sm:text-3xl text-[#0d2335] mb-3">
              Experience Smarter Healthcare Management.
            </h2>
            <p className="font-['Inter'] text-xs sm:text-sm text-slate-600 max-w-lg mx-auto mb-6">
              Transform your hospital with synchronized role-based dashboards, rapid bed turnaround, and transparent financial RCM oversight.
            </p>
            <button
              type="button"
              onClick={onRequestDemo}
              className="btn-primary-blue py-3.5 px-8 rounded-xl font-['Poppins'] font-semibold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              Request a Demo
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

