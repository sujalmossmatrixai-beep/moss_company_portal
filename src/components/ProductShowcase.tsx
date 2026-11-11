import React from 'react'

export type ExploreProductType = 'med-ai' | 'mapper' | 'academy' | 'solutions'

interface ProductShowcaseProps {
  onOpenDemo?: (productIndex: number) => void
  onOpenExplore?: (productType: ExploreProductType, itemId?: string) => void
}

export const PRODUCTS_DATA = [
  {
    id: 'moss-migration',
    productType: 'mapper' as ExploreProductType,
    name: 'Moss Migration',
    badge: 'Live Production',
    badgeColor: 'blue',
    icon: '⚡',
    subtitle: 'Enterprise Database Migration & Schema Mapping Studio',
    url: 'https://www.moss-ai-mapper.com/',
    portalLabel: 'Visit Live Studio',
    headline: 'Eliminate 90% of Manual Data Engineering & Migration Overhead',
    description:
      'Autonomous schema discovery, hierarchical field matching, and zero-downtime cross-database CDC sync.',
    featuresList: [
      'Automated schema recognition & foreign key mapping',
      'AI field transformation with strict type safety',
      'Visual migration pipeline with real-time dry-run',
      'Continuous zero-downtime Change Data Capture (CDC)',
    ],
    accent: '#1b95cd',
    stat: '99.8% Precision',
  },
  {
    id: 'moss-med-ai',
    productType: 'med-ai' as ExploreProductType,
    name: 'Moss Med AI',
    badge: 'Hospital Ecosystem',
    badgeColor: 'emerald',
    icon: '🩺',
    subtitle: '5-Portal Hospital & Clinical AI Ecosystem',
    url: 'https://mossmed-ai.com/',
    portalLabel: 'Visit Live Portal',
    headline: 'Unified 5-Portal Suite for Patients, Doctors, Hospitals, Pharmacy & Labs',
    description:
      'Turnkey hospital package with dedicated Patient, Doctor, and Hospital portals, plus integrated Pharmacy & Laboratory modules.',
    featuresList: [
      'Patient Portal: Appointments, test results & health records',
      'Doctor Portal: Prescriptions, clinical EHR & appointments',
      'Hospital Portal: Operations, staff schedules & performance metrics',
      'Pharmacy & Lab: Prescription fulfillment & diagnostic sync',
    ],
    accent: '#10b981',
    stat: '5 Unified Portals',
  },
  {
    id: 'bespoke-agents',
    productType: 'solutions' as ExploreProductType,
    name: 'Bespoke AI Agents',
    badge: 'Enterprise AI',
    badgeColor: 'indigo',
    icon: '🤖',
    subtitle: 'Autonomous Workflow & Process Automation Agents',
    url: 'https://www.moss-tech.com/',
    portalLabel: 'Visit Company Portal',
    headline: 'Custom AI Agents Tailored to Your Proprietary Business Workflows',
    description:
      'End-to-end bespoke intelligent agents built to integrate with your enterprise databases, APIs, and workflows.',
    featuresList: [
      'Retrieval-Augmented Generation (RAG) on private company data',
      'Multi-agent swarms with autonomous coordination',
      'Secure air-gapped on-premise or private VPC deployments',
      'Complete compliance with SOC2 Type II & zero-data-retention',
    ],
    accent: '#6366f1',
    stat: '100% Private VPC',
  },
  {
    id: 'moss-academy',
    productType: 'academy' as ExploreProductType,
    name: 'Moss Academy',
    badge: 'Education & Careers',
    badgeColor: 'amber',
    icon: '🎓',
    subtitle: 'Workforce Development & Guaranteed Internship Program',
    url: 'https://www.moss-tech.com/',
    portalLabel: 'Visit Academy Portal',
    headline: 'Industry-Oriented Education with Guaranteed Career Launchpads',
    description:
      'Training software engineers in Forward Deployed Engineering, Agentic AI, full-stack development, and data systems.',
    featuresList: [
      'Forward Deployed Engineering (FDE) Flagship Program',
      'Agentic AI Developer Course with autonomous agent systems',
      'Guaranteed Internship Program on real enterprise projects',
      'Hands-on practical projects, mentorship & career support',
    ],
    accent: '#f59e0b',
    stat: 'Guaranteed Internship',
  },
]

export default function ProductShowcase({ onOpenDemo, onOpenExplore }: ProductShowcaseProps) {
  const handleOpen = (index: number) => {
    const prod = PRODUCTS_DATA[index]
    if (onOpenExplore) {
      onOpenExplore(prod.productType)
    } else if (onOpenDemo) {
      onOpenDemo(index)
    } else {
      window.location.hash = `/explore/${prod.productType}`
    }
  }

  const handleOpenSpecific = (
    e: React.MouseEvent,
    productType: ExploreProductType,
    itemId?: string
  ) => {
    e.stopPropagation()
    if (onOpenExplore) {
      onOpenExplore(productType, itemId)
    } else {
      window.location.hash = itemId
        ? `/explore/${productType}/${itemId}`
        : `/explore/${productType}`
    }
  }

  return (
    <section id="products" className="py-12 lg:py-16 bg-[#f8f9fa] relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-9">
          <p className="text-[#1b95cd] font-['Poppins'] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2">
            Enterprise Solutions
          </p>
          <h2 className="font-['Poppins'] font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0d2335] tracking-tight mb-2.5">
            Four Unified Pillars of Moss Nexus
          </h2>
          <p className="font-['Inter'] text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Explore our specialized solutions: autonomous database migration, hospital clinical AI package, bespoke client agents, and workforce academy.
          </p>
        </div>

        {/* 4 Cards Horizontally Across Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-5 mb-0">
          {PRODUCTS_DATA.map((prod, i) => (
            <div
              key={prod.id}
              onClick={() => handleOpen(i)}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs hover:border-[#1b95cd]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Top Banner Box */}
                <div className="p-3.5 rounded-xl bg-gradient-to-br from-slate-50 to-blue-50/40 border border-slate-100 mb-3.5 flex flex-col justify-between h-34 group-hover:border-blue-100 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-lg bg-blue-100/80 text-[#1b95cd] flex items-center justify-center font-bold text-lg shadow-2xs group-hover:scale-105 transition-transform">
                      {prod.icon}
                    </div>
                    <span className="inline-flex items-center text-[10px] font-['Poppins'] font-semibold px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600">
                      {prod.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-['Poppins'] font-bold text-sm text-[#0d2335] leading-tight group-hover:text-[#1b95cd] transition-colors">
                      {prod.name}
                    </h3>
                    <p className="font-['Inter'] text-[10px] text-slate-500 font-medium line-clamp-1 mt-0.5">
                      {prod.subtitle}
                    </p>
                  </div>
                </div>

                {/* Key Stat Badge */}
                <div className="mb-2.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-sky-50 text-[#1b95cd] border border-sky-100 text-[10px] font-['Poppins'] font-semibold">
                  <span>⚡</span>
                  <span>{prod.stat}</span>
                </div>

                {/* Specific 5-Portal Suite Pills for Moss Med AI */}
                {prod.id === 'moss-med-ai' && (
                  <div className="mb-2.5 p-2 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="text-[9px] font-['Poppins'] font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Included Portals (Click to explore):
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <button
                        type="button"
                        onClick={(e) => handleOpenSpecific(e, 'med-ai', 'patient-portal')}
                        className="text-[9.5px] font-['Poppins'] font-medium px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-colors cursor-pointer"
                      >
                        🟢 Patient
                      </button>
                      <button
                        type="button"
                        onClick={(e) => handleOpenSpecific(e, 'med-ai', 'doctor-portal')}
                        className="text-[9.5px] font-['Poppins'] font-medium px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors cursor-pointer"
                      >
                        🔵 Doctor
                      </button>
                      <button
                        type="button"
                        onClick={(e) => handleOpenSpecific(e, 'med-ai', 'hospital-portal')}
                        className="text-[9.5px] font-['Poppins'] font-medium px-1.5 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100 transition-colors cursor-pointer"
                      >
                        🟣 Hospital
                      </button>
                      <button
                        type="button"
                        onClick={(e) => handleOpenSpecific(e, 'med-ai', 'pharmacy-portal')}
                        className="text-[9.5px] font-['Poppins'] font-medium px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200 transition-colors cursor-pointer"
                      >
                        ⚪ Pharmacy
                      </button>
                      <button
                        type="button"
                        onClick={(e) => handleOpenSpecific(e, 'med-ai', 'laboratory-portal')}
                        className="text-[9.5px] font-['Poppins'] font-medium px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200 transition-colors cursor-pointer"
                      >
                        ⚪ Lab
                      </button>
                    </div>
                  </div>
                )}

                {/* Specific Featured Courses Pills for Moss Academy */}
                {prod.id === 'moss-academy' && (
                  <div className="mb-2.5 p-2 rounded-xl bg-amber-50/70 border border-amber-200/80 text-left">
                    <div className="text-[9px] font-['Poppins'] font-bold text-amber-800 uppercase tracking-wider mb-1 flex items-center justify-between">
                      <span>Flagship Tracks:</span>
                      <span className="text-[9px] bg-red-600 text-white px-1.5 py-0.2 rounded font-bold">₹39,999</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <button
                        type="button"
                        onClick={(e) => handleOpenSpecific(e, 'academy', 'forward-deployed-engineering')}
                        className="text-[9.5px] font-['Poppins'] font-semibold text-amber-950 flex items-center gap-1 hover:text-amber-700 text-left transition-colors cursor-pointer"
                      >
                        <span>🚀</span>
                        <span>Forward Deployed Engineering (FDE)</span>
                      </button>
                      <button
                        type="button"
                        onClick={(e) => handleOpenSpecific(e, 'academy', 'forward-deployed-engineering')}
                        className="text-[9.5px] font-['Poppins'] font-medium text-amber-800 flex items-center gap-1 hover:text-amber-600 text-left transition-colors cursor-pointer"
                      >
                        <span>🤖</span>
                        <span>Agentic AI Developer Course</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Compact Description */}
                <p className="font-['Inter'] text-[11px] text-slate-600 leading-relaxed line-clamp-2 mb-3">
                  {prod.description}
                </p>

                {/* Checklist Features */}
                <div className="space-y-1.5 mb-4 text-[11px] font-['Inter'] text-slate-600">
                  {prod.featuresList.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <span className="w-3.5 h-3.5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-[9px] font-bold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="line-clamp-1 leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Visit Live Portal & Explore Details */}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-1.5">
                {prod.url && (
                  <a
                    href={prod.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full py-2 px-3 rounded-xl bg-[#1b95cd] hover:bg-[#1579b0] text-white font-['Poppins'] text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                  >
                    <span>{prod.portalLabel || 'Visit Live Portal'}</span>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleOpen(i)
                  }}
                  className="w-full py-2 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-['Poppins'] text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-slate-200"
                >
                  <span>Explore Product Details →</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
