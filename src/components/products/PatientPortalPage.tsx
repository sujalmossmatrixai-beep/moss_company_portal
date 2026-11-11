import { useState } from 'react'
import Breadcrumbs from '../navigation/Breadcrumbs'
import StickyProductNav from '../navigation/StickyProductNav'
import ScreenshotGallery from '../media/ScreenshotGallery'
import { MOSS_MED_AI_DATA } from '../../data/productData'

interface PatientPortalPageProps {
  onNavigate: (path: string) => void
  onRequestDemo: () => void
}

export default function PatientPortalPage({ onNavigate, onRequestDemo }: PatientPortalPageProps) {
  const portal = MOSS_MED_AI_DATA.portals.find((p) => p.id === 'patient-portal')!
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(0)

  const activeFeature = portal.features[selectedFeatureIndex] || portal.features[0]

  const navSections = [
    { id: 'overview', label: 'Overview' },
    { id: 'preview', label: 'Dashboard Preview' },
    { id: 'features', label: 'Features Exploration' },
    { id: 'workflow', label: 'How It Works' },
    { id: 'related', label: 'Related Portals' },
  ]

  const patientScreenshots = [
    {
      id: 'patient-screen-main',
      imagePath: '/images/moss-med-ai-portals.png',
      title: 'Patient Portal - Central Health Dashboard',
      description: 'Unified view displaying upcoming doctor consultations, digital prescriptions, and recent lab results.',
      associatedProduct: 'moss-med-ai' as const,
      associatedPortal: 'patient-portal',
      alt: 'Patient Portal Dashboard Interface',
      displayOrder: 1,
      badge: 'Patient Workspace',
    },
  ]

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#0d2335] pt-24 pb-20 selection:bg-emerald-100 selection:text-emerald-800 text-left">
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
            { label: 'Patient Portal' },
          ]}
        />

        {/* ─────────────────────────────────────────────────────────────
            A. PORTAL INTRODUCTION
            ───────────────────────────────────────────────────────────── */}
        <section id="overview" className="py-8 sm:py-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-['Poppins'] font-semibold mb-3">
            <span>👤</span>
            <span>Patient Healthcare Gateway</span>
          </div>

          <h1 className="font-['Poppins'] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0d2335] tracking-tight mb-4">
            Patient Portal – Empowering Your Healthcare Journey.
          </h1>

          <p className="font-['Inter'] text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mb-8">
            {portal.tagline} {portal.whyExists}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {/* Who Uses */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
              <span className="text-[10px] font-['Poppins'] font-bold text-emerald-600 uppercase tracking-wider block mb-1.5">
                Who Uses It
              </span>
              <p className="font-['Inter'] text-xs text-slate-600 leading-relaxed">
                {portal.whoUses}
              </p>
            </div>

            {/* Problems Solved */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
              <span className="text-[10px] font-['Poppins'] font-bold text-blue-600 uppercase tracking-wider block mb-1.5">
                Problems Solved
              </span>
              <ul className="text-xs font-['Inter'] text-slate-600 space-y-1">
                {portal.problemsSolved.slice(0, 3).map((p, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Benefits */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
              <span className="text-[10px] font-['Poppins'] font-bold text-purple-600 uppercase tracking-wider block mb-1.5">
                Main Benefits
              </span>
              <ul className="text-xs font-['Inter'] text-slate-600 space-y-1">
                {portal.mainBenefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold">✓</span>
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
            screenshots={patientScreenshots}
            title="Patient Portal Interface Preview"
            subtitle="Review the real patient application interface with interactive zoom and full-screen view."
          />
        </section>

        {/* ─────────────────────────────────────────────────────────────
            C. DETAILED FEATURE EXPLORATION
            ───────────────────────────────────────────────────────────── */}
        <section id="features" className="py-12 border-t border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[#10b981] font-['Poppins'] font-semibold text-xs tracking-wider uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Interactive Capabilities
            </span>
            <h2 className="font-['Poppins'] font-bold text-2xl sm:text-3xl text-[#0d2335] tracking-tight mt-2">
              Detailed Feature Exploration
            </h2>
            <p className="font-['Inter'] text-xs sm:text-sm text-slate-500 mt-1">
              Select any feature below to inspect how it works and the direct patient benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Feature Tabs Selector (4 cols) */}
            <div className="lg:col-span-4 space-y-2.5">
              {portal.features.map((feat, idx) => (
                <button
                  key={feat.id}
                  type="button"
                  onClick={() => setSelectedFeatureIndex(idx)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                    selectedFeatureIndex === idx
                      ? 'bg-emerald-50/80 border-emerald-400 shadow-sm ring-2 ring-emerald-400/20'
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
                  <span className={`text-xs font-bold ${selectedFeatureIndex === idx ? 'text-emerald-600' : 'text-slate-300'}`}>
                    →
                  </span>
                </button>
              ))}
            </div>

            {/* Active Feature Detail Pane (8 cols) */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{activeFeature.icon}</span>
                <div>
                  <span className="text-[10px] font-['Poppins'] font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Feature Deep Dive
                  </span>
                  <h3 className="font-['Poppins'] font-bold text-xl sm:text-2xl text-[#0d2335]">
                    {activeFeature.name}
                  </h3>
                </div>
              </div>

              <p className="font-['Inter'] text-sm text-slate-600 leading-relaxed mb-6">
                {activeFeature.detailedExplanation}
              </p>

              {/* How it Works steps */}
              <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <h4 className="font-['Poppins'] font-semibold text-xs text-[#0d2335] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <span>⚙️</span>
                  <span>How It Works:</span>
                </h4>
                <ol className="space-y-2">
                  {activeFeature.howItWorks.map((step, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2.5 text-xs font-['Inter'] text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                        {sIdx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Benefits Checklist */}
              <div>
                <h4 className="font-['Poppins'] font-semibold text-xs text-[#0d2335] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <span>🌟</span>
                  <span>Benefits to the Patient:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeFeature.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 flex items-start gap-2 text-xs font-['Inter'] text-slate-700">
                      <span className="text-emerald-600 font-bold mt-0.5">✓</span>
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
            <span className="text-[#10b981] font-['Poppins'] font-semibold text-xs tracking-wider uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Simple 4-Step Journey
            </span>
            <h2 className="font-['Poppins'] font-bold text-2xl sm:text-3xl text-[#0d2335] tracking-tight mt-2">
              How Patients Interact with the Portal
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {portal.workflow.map((w, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs relative">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white font-['Poppins'] font-bold flex items-center justify-center text-xs mb-3 shadow-xs">
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
                Helping doctors manage consultations, e-prescriptions, and patient information through an integrated clinical workspace.
              </p>
            </div>

            <div
              onClick={() => onNavigate('/products/moss-med-ai/hospital-portal')}
              className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-purple-400 shadow-2xs hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl">
                  🏥
                </div>
                <h4 className="font-['Poppins'] font-bold text-base text-[#0d2335] group-hover:text-purple-600 transition-colors">
                  Hospital Portal & Role Dashboards →
                </h4>
              </div>
              <p className="font-['Inter'] text-xs text-slate-500 leading-relaxed">
                A centralized operational workspace with 9 role-based dashboards for administrators, nurses, finance, and ER teams.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            F. CTA BANNER
            ───────────────────────────────────────────────────────────── */}
        <section className="py-10 text-center">
          <div className="card-white-shadow rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-emerald-50 via-white to-sky-50 border border-emerald-200 text-center">
            <h2 className="font-['Poppins'] font-bold text-2.5xl sm:text-3xl text-[#0d2335] mb-3">
              Experience Smarter Healthcare Management.
            </h2>
            <p className="font-['Inter'] text-xs sm:text-sm text-slate-600 max-w-lg mx-auto mb-6">
              Equip your hospital with patient-centric digital care. Request a personalized walkthrough of the Patient Portal.
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

