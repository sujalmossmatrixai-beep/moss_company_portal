import React, { useState } from 'react'

interface TechStackModalProps {
  isOpen: boolean
  onClose: () => void
}

const TECH_CATEGORIES = [
  {
    id: 'react',
    title: 'React & Modern Frontend Tier',
    icon: '⚛️',
    badge: 'React 19 Standard',
    desc: 'Server components, streaming SSR, optimistic UI transitions, and strict TypeScript contracts.',
    items: [
      { name: 'React 19', detail: 'Server Components, Actions & use() hook', tag: 'Core UI' },
      { name: 'Next.js 15', detail: 'Turbopack, App Router & Edge SSR', tag: 'SSR / Edge' },
      { name: 'TypeScript 5.7', detail: 'End-to-end type contracts & static verification', tag: 'Strict Type' },
      { name: 'Tailwind CSS v4', detail: 'Modern CSS-first theme engine & micro-animations', tag: 'Design System' },
      { name: 'Vite 6', detail: 'Native ESM dev server & Rollup bundle optimizer', tag: 'HMR Engine' },
      { name: 'React Native & Expo', detail: 'Cross-platform native iOS & Android companion apps', tag: 'Mobile Ecosystem' },
      { name: 'Zustand & Redux', detail: 'Atomic stores & deterministic client state trees', tag: 'State Core' },
      { name: 'TanStack Query', detail: 'Async server state synchronization & optimistic caching', tag: 'Cache Sync' },
    ],
  },
  {
    id: 'ai',
    title: 'Generative & Autonomous AI Core',
    icon: '🤖',
    badge: 'Zero Hallucination',
    desc: 'Multimodal intelligence, self-correcting agentic graphs, and programmatic prompt compilation.',
    items: [
      { name: 'Google Gemini 2.0', detail: '2M+ context window & multimodal document extraction', tag: 'Multimodal' },
      { name: 'OpenAI GPT-4o & o1', detail: 'Structured Output synthesis & advanced code generation', tag: 'Reasoning' },
      { name: 'Anthropic Claude 3.5', detail: 'High-precision architectural code review & refactoring', tag: 'Code Analysis' },
      { name: 'DSPy (Stanford)', detail: 'Programmatic prompt compilation & MIPROv2 optimization', tag: 'Compiled AI' },
      { name: 'LangGraph & LangChain', detail: 'Cyclic graph multi-agent state orchestration', tag: 'Multi-Agent' },
      { name: 'pgvector & Pinecone', detail: 'Sub-millisecond HNSW vector indexing for RAG pipelines', tag: 'Vector RAG' },
      { name: 'PyTorch & HuggingFace', detail: 'Domain-specific fine-tuning & local GPU transformer labs', tag: 'Deep Learning' },
      { name: 'Ollama & FastEmbed', detail: 'Air-gapped on-premise private model inference', tag: 'Private AI' },
    ],
  },
  {
    id: 'cloud',
    title: 'Multi-Cloud, DevOps & Data Backbone',
    icon: '☁️',
    badge: '99.99% Enterprise SLA',
    desc: 'Multi-region distributed Kubernetes clusters, low-latency streaming event buses, and ACID storage.',
    items: [
      { name: 'AWS Cloud', detail: 'EKS Kubernetes, Aurora Multi-AZ PostgreSQL, S3 Data Lakes', tag: 'Primary Cloud' },
      { name: 'Google Cloud (GCP)', detail: 'Vertex AI, GKE multi-tenant clusters & BigQuery DW', tag: 'AI Infrastructure' },
      { name: 'Microsoft Azure', detail: 'Azure AKS, dedicated enterprise OpenAI & Entra ID SSO', tag: 'Enterprise Hybrid' },
      { name: 'Kubernetes (K8s)', detail: 'Horizontal pod autoscaling & zero-downtime canary deploys', tag: 'Orchestration' },
      { name: 'Docker Containers', detail: 'Immutable multi-stage distroless container builds', tag: 'Containerization' },
      { name: 'Apache Kafka', detail: 'Distributed event streaming & CDC real-time pipelines', tag: 'Event Stream' },
      { name: 'PostgreSQL Enterprise', detail: 'ACID transactional engine with pgvector & read replicas', tag: 'ACID Storage' },
      { name: 'Redis In-Memory', detail: 'Sub-millisecond distributed caching & Redlock locks', tag: 'Cache Mutex' },
    ],
  },
]

export default function TechStackModal({ isOpen, onClose }: TechStackModalProps) {
  const [activeTab, setActiveTab] = useState<string>('react')

  if (!isOpen) return null

  const activeCategory = TECH_CATEGORIES.find((c) => c.id === activeTab) || TECH_CATEGORIES[0]

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xl z-10 animate-in zoom-in-95 duration-200 my-auto">
        {/* Header */}
        <div className="flex items-start justify-between pb-6 border-b border-slate-100 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-['Poppins'] font-semibold text-[#1b95cd] bg-blue-50 border border-blue-100 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#1b95cd] animate-pulse" />
              FULL ENTERPRISE TECH SPECIFICATIONS
            </div>
            <h2 className="font-['Poppins'] font-bold text-2xl sm:text-3xl text-[#0d2335]">
              Cloud, Autonomous AI & React Stack
            </h2>
            <p className="font-['Inter'] text-xs sm:text-sm text-slate-500 mt-1">
              Complete technical breakdown of the technologies powering Moss production systems.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-xl bg-slate-100 text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors focus:outline-none shrink-0"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-2 my-6 p-1.5 bg-slate-50 rounded-2xl border border-slate-200">
          {TECH_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-['Poppins'] font-semibold transition-all ${
                activeTab === cat.id
                  ? 'btn-primary-blue shadow-sm scale-102'
                  : 'text-slate-600 hover:text-[#1b95cd] hover:bg-white'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.title.split(' ')[0]} Ecosystem</span>
            </button>
          ))}
        </div>

        {/* Active Category Specs Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
            <div>
              <h3 className="font-['Poppins'] font-bold text-base text-[#0d2335] flex items-center gap-2">
                <span>{activeCategory.icon}</span>
                <span>{activeCategory.title}</span>
              </h3>
              <p className="font-['Inter'] text-xs text-slate-600 mt-0.5">
                {activeCategory.desc}
              </p>
            </div>
            <span className="hidden sm:inline-block text-xs font-['Poppins'] font-semibold px-3 py-1 rounded-full bg-white text-[#1b95cd] border border-blue-200 shrink-0">
              {activeCategory.badge}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[360px] overflow-y-auto pr-1">
            {activeCategory.items.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white border border-slate-200/90 hover:border-[#1b95cd]/50 shadow-sm transition-all hover:bg-slate-50/60"
              >
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-['Poppins'] font-bold text-sm text-[#0d2335]">
                    {item.name}
                  </h4>
                  <span className="text-[10px] font-['Inter'] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    {item.tag}
                  </span>
                </div>
                <p className="font-['Inter'] text-xs text-slate-500 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-['Inter'] text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Enterprise Multi-Region Infrastructure & 100% Type-Safe Standard</span>
          </div>

          <button
            onClick={onClose}
            className="btn-primary-blue px-6 py-2.5 rounded-xl font-['Poppins'] font-semibold text-xs w-full sm:w-auto"
          >
            Close Tech Specs
          </button>
        </div>
      </div>
    </div>
  )
}
