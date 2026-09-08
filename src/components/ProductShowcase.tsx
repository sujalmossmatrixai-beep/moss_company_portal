interface ProductShowcaseProps {
  onOpenDemo?: (productIndex: number) => void
}

const PRODUCTS_DATA = [
  {
    id: 'ai-mapper',
    name: 'Moss AI Mapper',
    badge: 'Live Production',
    badgeColor: 'blue',
    icon: '⚡',
    subtitle: 'Autonomous Enterprise Data Migration & Schema Mapping Studio',
    url: 'https://www.moss-ai-mapper.com/',
    headline: 'Eliminate 90% of Manual Data Engineering & Migration Overhead',
    description:
      'An enterprise-grade, AI-driven data migration engine that automatically discovers schemas, matches complex hierarchical fields, writes transformation logic, and orchestrates zero-downtime data migrations across heterogeneous databases.',
    featuresList: [
      'Automated schema recognition & foreign key mapping',
      'AI-driven field transformation with type safety',
      'Visual migration pipeline with real-time dry-run',
      'Pre-flight integrity & conflict isolation',
    ],
    accent: '#1b95cd',
    stat: '99.8% Precision',
  },
  {
    id: 'moss-tech',
    name: 'Moss Tech Academy',
    badge: 'Live Platform',
    badgeColor: 'blue',
    icon: '🎓',
    subtitle: 'High-Impact Cloud Engineering, AI & Modern DevOps Academy',
    url: 'https://www.moss-tech.com/',
    headline: 'Bridging the Gap Between Theory and Production-Grade Systems',
    description:
      'Headquartered in Bangalore and Nagpur, Moss Tech equips thousands of ambitious engineers with real-world architectures: hands-on Agentic AI development, Big Data distributed pipelines, Kubernetes clusters, and enterprise cloud infrastructure.',
    featuresList: [
      'AWS, Databricks, Snowflake & Terraform masteries',
      'Agentic AI, DSPy & LLMOps production labs',
      'Kubernetes, Docker & modern CI/CD pipelines',
      'PySpark & Big Data architecture at scale',
    ],
    accent: '#1b95cd',
    stat: '10,000+ Alumni',
  },
  {
    id: 'moss-media',
    name: 'Moss Media',
    badge: 'Private Alpha · 2026',
    badgeColor: 'amber',
    icon: '✦',
    subtitle: 'Next-Generation Multimodal AI Content Intelligence & Distribution',
    url: null,
    headline: 'The Creative Engine at the Intersection of AI and Global Storytelling',
    description:
      'Moss Media brings generative intelligence, content discovery algorithms, automated video/audio asset creation, and cross-channel distribution under a unified orchestration layer built for media organizations, agencies, and high-growth brands.',
    featuresList: [
      'AI-powered multimodal video, audio & text studio',
      'Audience trend prediction & algorithm optimization',
      'Unified digital asset management with AI search',
      'One-click multi-channel publishing & syndication',
    ],
    accent: '#f59e0b',
    stat: '10x Content Speed',
  },
]

export default function ProductShowcase({ onOpenDemo }: ProductShowcaseProps) {
  const handleOpen = (index: number) => {
    if (onOpenDemo) {
      onOpenDemo(index)
    } else {
      window.location.hash = 'interactive-demo'
    }
  }

  return (
    <section id="products" className="py-14 lg:py-16 bg-[#f8f9fa] relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-[#1b95cd] font-['Poppins'] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2">
            Enterprise Solutions
          </p>
          <h2 className="font-['Poppins'] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0d2335] tracking-tight mb-3">
            Grow Better with Moss Platforms
          </h2>
          <p className="font-['Inter'] text-base text-slate-600 leading-relaxed">
            From automated AI data migration to world-class cloud engineering education and multimodal media creation — explore our specialized enterprise applications.
          </p>
        </div>

        {/* 3-Card Solution Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-0">
          {PRODUCTS_DATA.map((prod, i) => (
            <div
              key={prod.id}
              onClick={() => handleOpen(i)}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:border-[#1b95cd]/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Top Banner Box */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/40 border border-slate-100 mb-6 flex flex-col justify-between h-44 group-hover:border-blue-100 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-blue-100/80 text-[#1b95cd] flex items-center justify-center font-bold text-lg shadow-2xs group-hover:scale-105 transition-transform">
                      {prod.icon}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-['Poppins'] font-semibold px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600">
                      {prod.badge}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-['Poppins'] font-bold text-xl text-[#0d2335] group-hover:text-[#1b95cd] transition-colors mb-1">
                      {prod.name}
                    </h3>
                    <p className="font-['Inter'] text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {prod.subtitle}
                    </p>
                  </div>
                </div>

                {/* Key Stat Badge */}
                <div className="mb-5 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-sky-50 text-[#1b95cd] border border-sky-100 text-xs font-['Poppins'] font-semibold">
                  <span>⚡</span>
                  <span>{prod.stat}</span>
                </div>

                {/* Checklist Features */}
                <div className="space-y-2.5 mb-6 text-xs font-['Inter'] text-slate-600">
                  {prod.featuresList.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 border-t border-slate-100">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleOpen(i)
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-slate-50 hover:bg-[#1b95cd] text-slate-700 hover:text-white font-['Poppins'] text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-2xs group-hover:bg-[#1b95cd] group-hover:text-white"
                >
                  <span>Explore Interactive Demo</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

