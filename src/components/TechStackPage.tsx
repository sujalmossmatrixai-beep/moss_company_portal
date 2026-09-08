import React, { useState } from 'react'

interface TechStackPageProps {
  onBack: () => void
  onOpenDemo?: () => void
}

interface TechDetail {
  name: string
  badge: string
  badgeColor: string
  description: string
  productionUse: string
  tags: string[]
  icon: string
}

const REACT_STACK: TechDetail[] = [
  {
    name: 'React 19',
    badge: 'Core UI Engine',
    badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    description: 'We leverage React 19 across all enterprise portals using Server Components (RSC), Server Actions, the use() hook, and optimistic UI updates.',
    productionUse: 'Powers Moss AI Mapper web studio, real-time schema mapping canvas, and interactive data transformation visualizers.',
    tags: ['React 19', 'Server Components', 'Actions', 'Optimistic UI', 'Concurrent Mode'],
    icon: '⚛️',
  },
  {
    name: 'Next.js 15',
    badge: 'Enterprise SSR',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
    description: 'Powers production portals and landing pages, delivering sub-second FCP via Turbopack, streaming SSR, and edge runtime caching.',
    productionUse: 'Mission-critical enterprise portals with static generation (SSG) and incremental static regeneration (ISR).',
    tags: ['Next.js 15', 'App Router', 'Turbopack', 'Streaming SSR', 'Edge Routes'],
    icon: '▲',
  },
  {
    name: 'TypeScript 5.7',
    badge: '100% Strict Type Safety',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    description: 'Zero `any` policy across our entire codebase. End-to-end type synchronization from backend API endpoints to client React UI state.',
    productionUse: 'Universal type contracts across 200+ data schemas, API response payloads, and agent execution states.',
    tags: ['TypeScript 5.7', 'Strict Mode', 'Generics', 'Zod Integration', 'tRPC Ready'],
    icon: '📘',
  },
  {
    name: 'Tailwind CSS v4',
    badge: 'Design System',
    badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
    description: 'Delivers instantaneous stylesheet compilation via @tailwindcss/vite, fluid responsive typography, and enterprise design tokens.',
    productionUse: 'Unified design system spanning dark/light modes, micro-interactions, and glassmorphic enterprise cards.',
    tags: ['Tailwind v4', 'Vite Plugin', 'CSS Themes', 'Micro-Animations', 'Fluid UI'],
    icon: '🎨',
  },
  {
    name: 'Vite 6',
    badge: 'Instant HMR & Build',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    description: 'Instantaneous Hot Module Replacement (HMR) and optimized Rollup builds provide developer velocity and ultra-lean production bundles.',
    productionUse: 'Rapid client application compilation and zero-config micro-frontend asset building.',
    tags: ['Vite 6', 'Native ESM', 'Lightning HMR', 'Rollup Build', 'Tree Shaking'],
    icon: '⚡',
  },
  {
    name: 'React Native & Expo',
    badge: 'Mobile Ecosystem',
    badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    description: 'Extending the React ecosystem to mobile devices, enabling engineers and executives to monitor migration pipelines on iOS and Android.',
    productionUse: 'Native push notifications, biometric auth, and real-time dashboard telemetry on iOS and Android devices.',
    tags: ['React Native', 'Expo Router', 'Cross-Platform', 'Native APIs', 'Hermes Engine'],
    icon: '📱',
  },
  {
    name: 'Zustand & Redux Toolkit',
    badge: 'Deterministic State',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    description: 'Atomic stores and predictable action dispatchers manage high-concurrency client state without unnecessary re-renders.',
    productionUse: 'Manages complex undo/redo histories and live field-matching nodes in our schema mapping studio.',
    tags: ['Zustand', 'Redux Toolkit', 'Immer State', 'Persist Middleware', 'Atomic Selectors'],
    icon: '🧠',
  },
  {
    name: 'TanStack Query',
    badge: 'Async Server State',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
    description: 'Automates background cache invalidation, parallel querying, infinite scrolling, and retry logic for high-frequency endpoints.',
    productionUse: 'Keeps 10,000+ data table rows and dry-run execution pipelines synchronized in real time.',
    tags: ['React Query', 'Auto Caching', 'Optimistic UI', 'Polling / Refetch', 'Deduplication'],
    icon: '🔄',
  },
]

const AI_STACK: TechDetail[] = [
  {
    name: 'Google Gemini 2.0',
    badge: 'Multimodal Intelligence',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    description: 'Integrates Gemini 2.0 Flash & Pro for high-speed multi-agent analysis, unstructured database document extraction, and schema translation.',
    productionUse: 'Instant parsing of legacy PDF schema documentation, complex ER diagrams, and multilingual field translations.',
    tags: ['Gemini 2.0', 'Flash / Pro', '2M Context', 'Multimodal', 'Vertex AI'],
    icon: '✨',
  },
  {
    name: 'OpenAI GPT-4o & o1',
    badge: 'Deterministic Reasoning',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    description: 'High-precision code synthesis engine utilizing OpenAI Structured Outputs to generate syntactically validated SQL and Python transformations.',
    productionUse: 'Generates automated PySpark scripts, dbt models, and schema validation assertions.',
    tags: ['GPT-4o', 'o1 Reasoning', 'Structured Outputs', 'Function Calling', 'Code Synthesis'],
    icon: '🤖',
  },
  {
    name: 'Anthropic Claude 3.5',
    badge: 'Deep Architecture',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    description: 'Claude 3.5 Sonnet is integrated for complex multi-step refactoring plans, edge-case isolation, and autonomous code review gates.',
    productionUse: 'Autonomous code reviews and deep architectural conflict resolution before migrations.',
    tags: ['Claude 3.5 Sonnet', 'Artifacts', 'Computer Use', 'Code Analysis', 'System Prompts'],
    icon: '🏛️',
  },
  {
    name: 'DSPy (Stanford)',
    badge: 'Programmatic AI Compilation',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    description: 'Replaces brittle manual prompt engineering with Stanford DSPy programmatic optimizers to systematically eliminate hallucinations.',
    productionUse: 'Guarantees 99.8% precision across ambiguous column mappings and legacy ERP field matching.',
    tags: ['DSPy', 'Teleprompters', 'MIPROv2', 'Prompt Compilation', 'Zero Hallucination'],
    icon: '⚙️',
  },
  {
    name: 'LangGraph & LangChain',
    badge: 'Multi-Agent Graphs',
    badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
    description: 'LangGraph orchestrates our autonomous migration agents: Discovery Agent, Mapping Agent, Transformation Validator, and Deployment Supervisor.',
    productionUse: 'Autonomous self-correcting agent loops that verify schema changes against test databases.',
    tags: ['LangGraph', 'LangChain', 'Multi-Agent', 'Stateful Graphs', 'Tool Augmentation'],
    icon: '🌐',
  },
  {
    name: 'pgvector & Pinecone',
    badge: 'Vector Search & RAG',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    description: 'Indexes millions of enterprise data dictionary definitions and schema metadata with HNSW vector indices for instant semantic lookup.',
    productionUse: 'Sub-millisecond semantic search across historical enterprise schema mappings and business glossaries.',
    tags: ['pgvector', 'Pinecone', 'HNSW Indexing', 'Cosine Similarity', 'Hybrid Search'],
    icon: '🔍',
  },
  {
    name: 'PyTorch & HuggingFace',
    badge: 'Deep Learning Core',
    badgeColor: 'bg-orange-50 text-orange-700 border-orange-200',
    description: 'Custom fine-tuned domain models for specialized enterprise industries (healthcare HIPAA, banking PCI-DSS) requiring proprietary embeddings.',
    productionUse: 'Domain-specific semantic matching models running on dedicated GPU compute clusters.',
    tags: ['PyTorch', 'HuggingFace', 'Transformers', 'LoRA / QLoRA', 'CUDA Accelerated'],
    icon: '🔥',
  },
  {
    name: 'Ollama & FastEmbed',
    badge: 'Air-Gapped Private AI',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
    description: 'Local embedding generation and private open-weights inference models running fully inside client air-gapped VPC perimeters.',
    productionUse: 'Allows strict compliance for banking and defense clients with 0% cloud data egress.',
    tags: ['Ollama', 'Private Inference', 'Air-Gapped', 'Local Embeddings', 'Llama 3'],
    icon: '🔒',
  },
]

const CLOUD_STACK: TechDetail[] = [
  {
    name: 'Amazon Web Services (AWS)',
    badge: 'Primary Multi-Region',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    description: 'Core cloud provider running AWS EKS (Kubernetes), Amazon Aurora Multi-AZ PostgreSQL, S3 Data Lakes, CloudFront CDN, and Lambda.',
    productionUse: 'Hosts primary production clusters with 99.99% enterprise SLA and automated disaster recovery.',
    tags: ['AWS EKS', 'Aurora PostgreSQL', 'S3 Glacier', 'CloudFront', 'AWS Lambda'],
    icon: '☁️',
  },
  {
    name: 'Google Cloud Platform (GCP)',
    badge: 'Big Data & AI Infra',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    description: 'Utilized for high-throughput BigQuery data warehouse pipelines, Google Vertex AI model endpoints, and GKE multi-tenant clusters.',
    productionUse: 'Powers big data analytical pipelines and distributed model inference nodes.',
    tags: ['GCP GKE', 'BigQuery', 'Vertex AI', 'Cloud Run', 'Cloud Spanner'],
    icon: '🌐',
  },
  {
    name: 'Microsoft Azure',
    badge: 'Hybrid Enterprise',
    badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
    description: 'Seamless hybrid enterprise integrations for Fortune 500 clients, featuring dedicated enterprise Azure OpenAI instances and Entra ID SSO.',
    productionUse: 'Enterprise single-sign-on (SSO), private VPC peering, and air-gapped OpenAI compute.',
    tags: ['Azure AKS', 'Azure OpenAI', 'Entra ID SSO', 'Blob Storage', 'ExpressRoute'],
    icon: '🏢',
  },
  {
    name: 'Kubernetes (K8s)',
    badge: 'Container Orchestration',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    description: 'All backend services and AI workers run inside auto-scaling Kubernetes clusters with Istio service mesh and self-healing node managers.',
    productionUse: 'Scales from 10 to 500+ worker pods dynamically during peak migration workloads.',
    tags: ['Kubernetes', 'Istio Mesh', 'HPA Auto-Scale', 'Helm Charts', 'Canary Rollout'],
    icon: '☸️',
  },
  {
    name: 'Docker & OCI Containers',
    badge: 'Immutable Containers',
    badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    description: 'Lightweight multi-stage container builds with minimal attack surfaces (Alpine & Distroless), vulnerability-scanned via Trivy.',
    productionUse: 'Standardized reproducible execution environments across local dev, staging, and production.',
    tags: ['Docker', 'Multi-Stage', 'Distroless', 'Trivy Scanned', 'Fast Cold-Starts'],
    icon: '🐳',
  },
  {
    name: 'Apache Kafka',
    badge: 'Real-Time Event Stream',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
    description: 'Decoupled event-driven backbone processing millions of data mutation events per second with strict ordering guarantees.',
    productionUse: 'Streams live migration change-data-capture (CDC) events from source to destination databases.',
    tags: ['Apache Kafka', 'Event Streaming', 'CDC Pipeline', 'Dead Letter Queues', 'High Throughput'],
    icon: '⚡',
  },
  {
    name: 'PostgreSQL Enterprise',
    badge: 'ACID Transactional Core',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    description: 'Relational database engine configured with read replicas, PgBouncer pooling, and automated Write-Ahead Log (WAL) replication.',
    productionUse: 'Stores enterprise customer configurations, user accounts, audit trails, and migration history.',
    tags: ['PostgreSQL 16', 'PgBouncer', 'WAL Archiving', 'Read Replicas', 'ACID Compliance'],
    icon: '🐘',
  },
  {
    name: 'Redis In-Memory Cluster',
    badge: 'Sub-Millisecond Cache',
    badgeColor: 'bg-red-50 text-red-700 border-red-200',
    description: 'High-speed in-memory store utilizing Redlock algorithms for distributed transaction concurrency control and session token caching.',
    productionUse: 'Handles rate-limiting counters, active migration locking, and sub-millisecond session validation.',
    tags: ['Redis 7', 'In-Memory Cache', 'Redlock Mutex', 'Pub/Sub', 'Sub-ms Latency'],
    icon: '🔴',
  },
]

export default function TechStackPage({ onBack, onOpenDemo }: TechStackPageProps) {
  const [activeTab, setActiveTab] = useState<'react' | 'ai' | 'cloud'>('react')
  const [searchQuery, setSearchQuery] = useState('')

  const getActiveStack = () => {
    switch (activeTab) {
      case 'react':
        return REACT_STACK
      case 'ai':
        return AI_STACK
      case 'cloud':
        return CLOUD_STACK
      default:
        return REACT_STACK
    }
  }

  const filteredStack = getActiveStack().filter(
    (item) =>
      searchQuery === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-slate-50 text-[#0d2335] pt-24 pb-20">
      
      {/* Top Banner Navigation Header */}
      <div className="bg-white border-b border-slate-200 py-6 mb-10 sticky top-16 z-30 shadow-sm backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-['Poppins'] font-semibold text-xs transition-colors"
            >
              <span>←</span>
              <span>Back to Home</span>
            </button>

            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1b95cd] animate-pulse" />
                <h1 className="font-['Poppins'] font-bold text-xl sm:text-2xl text-[#0d2335]">
                  Enterprise Technology Ecosystem
                </h1>
              </div>
              <p className="font-['Inter'] text-xs text-slate-500 hidden sm:block">
                Dedicated Technical Architecture & Spec Book · Cloud, AI & React Stack
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                if (onOpenDemo) onOpenDemo()
                else onBack()
              }}
              className="btn-primary-blue px-5 py-2.5 rounded-xl font-['Poppins'] font-semibold text-xs"
            >
              Book Architecture Demo
            </a>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-['Poppins'] font-bold text-[#1b95cd] bg-blue-50 border border-blue-100 mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#1b95cd] animate-pulse" />
            ENTERPRISE PRODUCTION STACK & INFRASTRUCTURE
          </div>

          <h2 className="font-['Poppins'] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0d2335] tracking-tight mb-4">
            Engineered with <span className="text-[#1b95cd]">Cloud</span>, Autonomous <span className="text-[#1b95cd]">AI</span> & Full <span className="text-[#1b95cd]">React 19</span> Stack
          </h2>

          <p className="font-['Inter'] text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore the complete technical catalog powering Moss AI Mapper, Moss Tech Academy, and our Fortune 500 customer deployments globally.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="font-['Poppins'] font-bold text-2xl text-[#1b95cd]">React 19</div>
              <div className="font-['Inter'] text-xs text-slate-500 font-medium mt-0.5">Server Components Standard</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="font-['Poppins'] font-bold text-2xl text-emerald-600">DSPy AI</div>
              <div className="font-['Inter'] text-xs text-slate-500 font-medium mt-0.5">Zero-Hallucination Compiler</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="font-['Poppins'] font-bold text-2xl text-purple-600">99.99%</div>
              <div className="font-['Inter'] text-xs text-slate-500 font-medium mt-0.5">Multi-Cloud SLA</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="font-['Poppins'] font-bold text-2xl text-indigo-600">&lt; 15ms</div>
              <div className="font-['Inter'] text-xs text-slate-500 font-medium mt-0.5">Edge Gateway Streaming</div>
            </div>
          </div>
        </div>

        {/* Tab Selection & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
          
          {/* Main Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('react')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-['Poppins'] font-semibold transition-all ${
                activeTab === 'react'
                  ? 'btn-primary-blue shadow-sm scale-102'
                  : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <span>⚛️</span>
              <span>React & Modern Web ({REACT_STACK.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('ai')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-['Poppins'] font-semibold transition-all ${
                activeTab === 'ai'
                  ? 'btn-primary-blue shadow-sm scale-102'
                  : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <span>🤖</span>
              <span>Autonomous AI ({AI_STACK.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('cloud')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-['Poppins'] font-semibold transition-all ${
                activeTab === 'cloud'
                  ? 'btn-primary-blue shadow-sm scale-102'
                  : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <span>☁️</span>
              <span>Multi-Cloud & Data ({CLOUD_STACK.length})</span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search tech specs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl text-[#0d2335] placeholder:text-slate-400 focus:outline-none focus:border-[#1b95cd] focus:bg-white transition-all"
            />
            <svg className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Detailed Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredStack.map((item, idx) => (
            <div
              key={idx}
              className="card-white-shadow rounded-2xl p-6 bg-white border border-slate-200/90 flex flex-col justify-between hover:border-[#1b95cd]/40 transition-all duration-200"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-2xl shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-['Poppins'] font-bold text-lg text-[#0d2335]">
                        {item.name}
                      </h3>
                      <span className={`inline-block text-[11px] font-['Poppins'] font-semibold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="font-['Inter'] text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 mb-4">
                  <span className="font-['Poppins'] font-semibold text-xs text-[#1b95cd] block mb-1">
                    ⚡ Moss Production Deployment:
                  </span>
                  <p className="font-['Inter'] text-xs text-slate-600 leading-relaxed">
                    {item.productionUse}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-['Inter'] font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md border border-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Back Banner */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="font-['Poppins'] font-bold text-xl text-[#0d2335]">
              Ready to build on our Cloud, AI & React architecture?
            </h3>
            <p className="font-['Inter'] text-xs sm:text-sm text-slate-500 mt-1">
              Speak with our principal enterprise architects to review zero-downtime integration blueprints.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onBack}
              className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-['Poppins'] font-semibold text-xs transition-colors"
            >
              ← Back to Main Page
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                if (onOpenDemo) onOpenDemo()
                else onBack()
              }}
              className="btn-primary-blue px-6 py-2.5 rounded-xl font-['Poppins'] font-semibold text-xs"
            >
              Book Consultation
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
