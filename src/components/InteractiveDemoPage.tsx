import { useState, useEffect } from 'react'

interface InteractiveDemoPageProps {
  initialProductIndex?: number
  onBack: () => void
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
    highlights: [
      {
        title: 'Neural Schema Mapping',
        desc: 'Auto-detects semantic field associations across SQL, NoSQL, and JSON structures with >99% precision.',
      },
      {
        title: 'Visual Pipeline Architect',
        desc: 'Drag-and-drop transformation canvas with automated SQL/PySpark code synthesis and dry-run execution.',
      },
      {
        title: 'Real-time Validation & Anomaly Fix',
        desc: 'Pre-flight integrity verifications that isolate schema drift and datatype conflicts before ingestion.',
      },
      {
        title: 'Enterprise Data Mesh Ready',
        desc: 'Native connectors for Snowflake, Databricks, AWS Redshift, PostgreSQL, Oracle, and Google BigQuery.',
      },
    ],
    specs: [
      { label: 'Supported Engines', value: 'Oracle, Postgres, Snowflake, Databricks, BigQuery, MongoDB' },
      { label: 'Resolution Precision', value: '99.8% Automated Accuracy' },
      { label: 'Data Ingestion SLA', value: 'Sub-second real-time streaming & batch CDC' },
      { label: 'Compliance & Security', value: 'SOC2 Type II, HIPAA, ISO 27001, 256-bit AES' },
    ],
    featuresList: [
      'Automated schema recognition & foreign key mapping',
      'AI-driven field transformation with type safety',
      'Visual migration pipeline with real-time dry-run',
      'Pre-flight integrity & conflict isolation',
      'Zero-downtime enterprise data guarantees',
    ],
    accent: '#1b95cd',
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
    highlights: [
      {
        title: 'Production-Led Curriculum',
        desc: 'Build enterprise-grade architectures on AWS, Databricks, Terraform, and Kubernetes.',
      },
      {
        title: 'Agentic AI & LLMOps Tracks',
        desc: 'Master LangChain, CrewAI, DSPy, vector embeddings, and RAG pipelines for production.',
      },
      {
        title: 'PySpark & Distributed Compute',
        desc: 'Scale data pipelines handling terabyte-level datasets using PySpark and Apache Airflow.',
      },
      {
        title: 'Direct Industry Mentorship',
        desc: 'Live sessions and code reviews led by senior architects from top global tech enterprises.',
      },
    ],
    specs: [
      { label: 'Active Alumni', value: '10,000+ Engineers placed globally' },
      { label: 'Campus Locations', value: 'Bangalore Hub, Nagpur Hub & Global Online' },
      { label: 'Mastery Specializations', value: '50+ High-Impact Enterprise Courses' },
      { label: 'Industry Partners', value: 'AWS, Databricks, Snowflake & Fortune 500 Tech' },
    ],
    featuresList: [
      'AWS, Databricks, Snowflake & Terraform masteries',
      'Agentic AI, DSPy & LLMOps production labs',
      'Kubernetes, Docker & modern CI/CD pipelines',
      'PySpark & Big Data architecture at scale',
      'Mentorship from top Bangalore & Silicon Valley architects',
    ],
    accent: '#1b95cd',
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
    highlights: [
      {
        title: 'Multimodal AI Synthesis',
        desc: 'Generate multi-format copy, voice synthesis, and dynamic video assets from a single prompt context.',
      },
      {
        title: 'Audience Analytics & Trend Radar',
        desc: 'Predictive virality and engagement models tailored to global distribution algorithms.',
      },
      {
        title: 'Centralized Asset Management',
        desc: 'Enterprise media vault with AI semantic search, automated tagging, and version tracking.',
      },
      {
        title: 'Automated Multi-Platform Publish',
        desc: 'Zero-touch scheduled publishing across Web, YouTube, TikTok, LinkedIn, and streaming hubs.',
      },
    ],
    specs: [
      { label: 'Alpha Release', value: 'Q2 2026 Private Alpha Rollout' },
      { label: 'Modalities Supported', value: 'Text, High-Fidelity Voice, Short-form & Long-form Video' },
      { label: 'Distribution Channels', value: 'YouTube, TikTok, Meta, LinkedIn, X, CMS API' },
      { label: 'Current Demand', value: '3,800+ Creator & Enterprise Agency Waitlist' },
    ],
    featuresList: [
      'AI-powered multimodal video, audio & text studio',
      'Audience trend prediction & algorithm optimization',
      'Unified digital asset management with AI search',
      'One-click multi-channel publishing & syndication',
      'Integrated engagement telemetry & analytics',
    ],
    accent: '#f59e0b',
  },
]

const COURSES_DATA = [
  { category: 'AI & ML', title: 'Agentic AI & Enterprise RAG Systems', level: 'Advanced', duration: '8 Weeks', tags: ['LangChain', 'OpenAI', 'DSPy', 'VectorDB'] },
  { category: 'Cloud & DevOps', title: 'AWS Cloud Architect & Terraform Masterclass', level: 'Intermediate', duration: '10 Weeks', tags: ['AWS', 'Terraform', 'Docker', 'CI/CD'] },
  { category: 'Data Engineering', title: 'Databricks, Lakehouse & PySpark at Scale', level: 'Advanced', duration: '12 Weeks', tags: ['Databricks', 'PySpark', 'Delta Lake', 'Airflow'] },
  { category: 'Cloud & DevOps', title: 'Kubernetes Production Orchestration', level: 'Intermediate', duration: '6 Weeks', tags: ['Kubernetes', 'Helm', 'Prometheus', 'ServiceMesh'] },
  { category: 'Data Engineering', title: 'Snowflake Modern Data Warehouse Mastery', level: 'All Levels', duration: '6 Weeks', tags: ['Snowflake', 'dbt', 'SQL', 'Data Mesh'] },
]

export default function InteractiveDemoPage({ initialProductIndex = 0, onBack }: InteractiveDemoPageProps) {
  const [selectedProduct, setSelectedProduct] = useState(initialProductIndex)
  const [activeCourseFilter, setActiveCourseFilter] = useState('All')
  const [mappingConfidence, setMappingConfidence] = useState(99.4)
  const [isSimulating, setIsSimulating] = useState(false)
  const [waitlistEmail, setWaitlistEmail] = useState('')
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false)

  useEffect(() => {
    setSelectedProduct(initialProductIndex)
  }, [initialProductIndex])

  const currentProduct = PRODUCTS_DATA[selectedProduct]


  const mappedFields = [
    { source: 'customer_id (BIGINT)', target: 'user_uuid (UUID)', match: '99.8%', status: 'CONFIRMED' },
    { source: 'created_at (TIMESTAMP)', target: 'signup_epoch_utc (DATETIME)', match: '100.0%', status: 'CONFIRMED' },
    { source: 'billing_address_json (JSON)', target: 'shipping_address_struct (OBJECT)', match: '98.5%', status: 'CONFIRMED' },
    { source: 'account_balance (DECIMAL)', target: 'wallet_credits (NUMERIC)', match: '99.2%', status: 'CONFIRMED' },
  ]

  const handleSimulateMapping = () => {
    setIsSimulating(true)
    setTimeout(() => {
      setMappingConfidence(Number((99.2 + Math.random() * 0.7).toFixed(1)))
      setIsSimulating(false)
    }, 900)
  }

  const filteredCourses =
    activeCourseFilter === 'All'
      ? COURSES_DATA
      : COURSES_DATA.filter((c) => c.category === activeCourseFilter)

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#0d2335] pt-24 pb-20 selection:bg-sky-100 selection:text-[#1b95cd]">
      {/* Top Breadcrumbs & Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#1b95cd] hover:border-[#1b95cd] font-['Poppins'] text-xs font-semibold shadow-xs transition-all cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>← Back to Enterprise Solutions</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#1b95cd] border border-blue-200 text-xs font-['Poppins'] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#1b95cd] animate-pulse" />
              {currentProduct.name} Interactive Studio
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dedicated Product Page Header */}
        <div className="text-left max-w-4xl mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-10 h-10 rounded-2xl bg-blue-100/80 text-[#1b95cd] flex items-center justify-center font-bold text-xl shadow-2xs">
              {currentProduct.icon}
            </span>
            <div>
              <p className="text-[#1b95cd] font-['Poppins'] font-semibold text-xs uppercase tracking-wider">
                Enterprise Solution Details
              </p>
              <h1 className="font-['Poppins'] font-bold text-3xl sm:text-4xl text-[#0d2335] tracking-tight">
                {currentProduct.name}
              </h1>
            </div>
          </div>
          <p className="font-['Inter'] text-base text-slate-600 leading-relaxed max-w-3xl">
            {currentProduct.subtitle}. Explore live architecture specifications, test the interactive platform sandbox, and access the application below.
          </p>
        </div>

        {/* Main Enterprise Platform Interactive Showcase Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-xl mb-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            
            {/* Left Column: Comprehensive Application Information */}
            <div className="lg:col-span-6 flex flex-col text-left">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-[#1b95cd] border border-blue-200 text-xs font-['Poppins'] font-semibold uppercase tracking-wider">
                  {currentProduct.badge}
                </span>
                <span className="text-xs text-slate-400 font-['Inter']">
                  Enterprise Platform Node
                </span>
              </div>

              <h2 className="font-['Poppins'] font-bold text-2xl sm:text-3xl text-[#0d2335] tracking-tight mb-4">
                {currentProduct.headline}
              </h2>

              <p className="font-['Inter'] text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                {currentProduct.description}
              </p>

              {/* Technical Specifications Grid */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6">
                <h4 className="font-['Poppins'] font-bold text-xs uppercase tracking-wider text-slate-500 mb-3">
                  Technical Architecture & Specs
                </h4>
                <div className="space-y-2 text-xs font-['Inter']">
                  {currentProduct.specs.map((s, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-200/50 last:border-0 last:pb-0">
                      <span className="font-medium text-slate-500">{s.label}:</span>
                      <span className="font-semibold text-slate-800 text-right">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {currentProduct.highlights.map((feat, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1b95cd]" />
                      <h4 className="font-['Poppins'] font-semibold text-xs sm:text-sm text-[#0d2335]">
                        {feat.title}
                      </h4>
                    </div>
                    <p className="font-['Inter'] text-xs text-slate-500 leading-relaxed pl-3.5">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Primary Direct Product Access Button */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
                {currentProduct.url ? (
                  <a
                    href={currentProduct.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-blue inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-['Poppins'] font-semibold text-sm shadow-md"
                  >
                    <span>Launch & Access {currentProduct.name}</span>
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 text-xs font-['Poppins'] font-semibold">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    Private Alpha Onboarding Active · 2026
                  </span>
                )}

                <button
                  onClick={onBack}
                  className="btn-secondary-outline px-5 py-3.5 rounded-xl font-['Poppins'] font-medium text-xs text-slate-700 cursor-pointer"
                >
                  Return to Portal
                </button>
              </div>
            </div>

            {/* Right Column: Live Interactive Simulation Workspace */}
            <div className="lg:col-span-6">
              {/* Product 0: AI Mapper Simulator */}
              {selectedProduct === 0 && (
                <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm text-left">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#1b95cd]" />
                      <span className="font-['Poppins'] text-xs font-semibold text-[#0d2335]">
                        Live Schema Resolution Simulator
                      </span>
                    </div>
                    <button
                      onClick={handleSimulateMapping}
                      disabled={isSimulating}
                      className="px-3.5 py-1.5 rounded-lg bg-[#1b95cd] text-white hover:bg-[#1579b0] font-['Poppins'] text-xs font-medium transition-all cursor-pointer shadow-xs"
                    >
                      {isSimulating ? 'Analyzing...' : '⚡ Re-Run Neural Match'}
                    </button>
                  </div>

                  <div className="space-y-2.5 mb-5 font-['JetBrains_Mono'] text-xs">
                    {mappedFields.map((field, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-2 shadow-xs"
                      >
                        <div className="flex flex-col">
                          <span className="text-slate-400 text-[10px]">Source Table</span>
                          <span className="text-[#0d2335] font-medium">{field.source}</span>
                        </div>

                        <div className="flex flex-col items-center px-2">
                          <span className="text-[10px] text-[#1b95cd] font-bold">{field.match}</span>
                          <svg className="w-5 h-4 text-[#1b95cd]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>

                        <div className="flex flex-col text-right">
                          <span className="text-slate-400 text-[10px]">Destination (Snowflake)</span>
                          <span className="text-emerald-700 font-medium">{field.target}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-between text-xs font-['Poppins'] mb-5">
                    <span className="text-slate-600 font-medium">Confidence Score:</span>
                    <span className="text-[#1b95cd] font-bold">{mappingConfidence}% Perfect Semantic Match</span>
                  </div>

                  <a
                    href="https://www.moss-ai-mapper.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-3 rounded-xl bg-white border border-[#1b95cd]/40 text-[#1b95cd] hover:bg-[#1b95cd] hover:text-white text-xs font-['Poppins'] font-semibold transition-all shadow-xs"
                  >
                    Open Full Production AI Mapper Studio ↗
                  </a>
                </div>
              )}

              {/* Product 1: Moss Tech Course Catalog */}
              {selectedProduct === 1 && (
                <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm text-left">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#1b95cd]" />
                      <span className="font-['Poppins'] text-xs font-semibold text-[#0d2335]">
                        Curriculum Catalog & Labs
                      </span>
                    </div>
                    <span className="text-[11px] font-['Inter'] text-slate-500">
                      Bangalore · Nagpur · Online
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {['All', 'AI & ML', 'Cloud & DevOps', 'Data Engineering'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCourseFilter(cat)}
                        className={`px-3 py-1 rounded-full text-xs font-['Poppins'] font-medium transition-all cursor-pointer ${
                          activeCourseFilter === cat
                            ? 'btn-primary-blue text-white font-semibold'
                            : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-3 max-h-[320px] overflow-y-auto pr-1">
                    {filteredCourses.map((c, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-white border border-slate-200 flex flex-col gap-2 shadow-xs"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-['Poppins'] font-semibold text-xs sm:text-sm text-[#0d2335]">
                            {c.title}
                          </span>
                          <span className="text-[10px] font-['Poppins'] px-2 py-0.5 rounded bg-blue-50 text-[#1b95cd] border border-blue-200">
                            {c.duration}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {c.tags.map((t) => (
                            <span
                              key={t}
                              className="text-[10px] font-['Inter'] text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-100"
                            >
                              #{t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://www.moss-tech.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block text-center py-3 rounded-xl bg-white border border-[#1b95cd]/40 text-[#1b95cd] hover:bg-[#1b95cd] hover:text-white text-xs font-['Poppins'] font-semibold transition-all shadow-xs"
                  >
                    Enroll & View All 50+ Courses on Moss Tech →
                  </a>
                </div>
              )}

              {/* Product 2: Moss Media Waitlist Studio */}
              {selectedProduct === 2 && (
                <div className="p-6 sm:p-7 rounded-2xl bg-amber-50/50 border border-amber-200/70 shadow-sm text-left">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-amber-200/50">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                      <span className="font-['Poppins'] text-xs font-semibold text-[#0d2335]">
                        Moss Media Studio Preview
                      </span>
                    </div>
                    <span className="text-[10px] font-['Poppins'] text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full font-medium">
                      ALPHA ACCESS
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-amber-200 mb-5">
                    <div className="text-xs font-['Poppins'] text-slate-500 mb-2 flex items-center justify-between">
                      <span>Multi-Channel Generation Engine</span>
                      <span className="text-amber-600 font-semibold">Q2 2026</span>
                    </div>
                    <div className="space-y-2 text-xs font-['Inter'] text-slate-600">
                      <div className="flex items-center gap-2">
                        <span className="text-amber-600 font-bold">✓</span>
                        <span>Multimodal Script-to-Video Production</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-amber-600 font-bold">✓</span>
                        <span>Real-time Predictive Audience Engagement</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-amber-600 font-bold">✓</span>
                        <span>Automated Global Social Syndication</span>
                      </div>
                    </div>
                  </div>

                  {waitlistSubmitted ? (
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                      <div className="text-sm font-['Poppins'] font-bold text-emerald-800 mb-1">
                        🎉 You are on the VIP Waitlist!
                      </div>
                      <p className="text-xs text-emerald-700">
                        We will notify you with private alpha access credentials prior to the 2026 launch.
                      </p>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault()
                        if (waitlistEmail) setWaitlistSubmitted(true)
                      }}
                      className="space-y-3"
                    >
                      <label className="block text-xs font-['Poppins'] font-medium text-slate-700">
                        Join the Creator & Agency Alpha:
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="email"
                          required
                          value={waitlistEmail}
                          onChange={(e) => setWaitlistEmail(e.target.value)}
                          placeholder="name@company.com"
                          className="flex-1 bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1b95cd]"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-['Poppins'] font-medium text-xs transition-all shadow-sm cursor-pointer"
                        >
                          Join Waitlist
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
