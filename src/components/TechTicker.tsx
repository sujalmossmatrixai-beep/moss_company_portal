import { useState } from 'react'

const TECH_ECOSYSTEM = [
  { name: 'AWS Cloud', category: 'Cloud' },
  { name: 'Microsoft Azure', category: 'Cloud' },
  { name: 'Google Cloud Platform', category: 'Cloud' },
  { name: 'Databricks Lakehouse', category: 'Data' },
  { name: 'Snowflake', category: 'Data' },
  { name: 'PostgreSQL Enterprise', category: 'Data' },
  { name: 'Apache Kafka', category: 'Data' },
  { name: 'PySpark Distributed', category: 'Data' },
  { name: 'dbt Core & Cloud', category: 'Data' },
  { name: 'Apache Airflow', category: 'Data' },
  { name: 'Redis In-Memory', category: 'Data' },
  { name: 'Agentic AI & DSPy', category: 'AI' },
  { name: 'LangChain & RAG', category: 'AI' },
  { name: 'OpenAI & Anthropic LLMs', category: 'AI' },
  { name: 'FastAPI & Python', category: 'AI' },
  { name: 'Kubernetes', category: 'DevOps' },
  { name: 'Terraform IaC', category: 'DevOps' },
  { name: 'Docker Containers', category: 'DevOps' },
  { name: 'Jenkins CI/CD', category: 'DevOps' },
  { name: 'GitHub Actions', category: 'DevOps' },
  { name: 'Next.js React 19', category: 'Frontend' },
  { name: 'Vercel Edge', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
]

export default function TechTicker() {
  const [selectedCat, setSelectedCat] = useState('All')

  const categories = [
    { label: 'All Ecosystem', value: 'All' },
    { label: 'Cloud & Infra', value: 'Cloud' },
    { label: 'Data & Analytics', value: 'Data' },
    { label: 'AI & LLMs', value: 'AI' },
    { label: 'DevOps & CI/CD', value: 'DevOps' },
    { label: 'Modern Web', value: 'Frontend' },
  ]

  const filtered =
    selectedCat === 'All'
      ? TECH_ECOSYSTEM
      : TECH_ECOSYSTEM.filter((item) => item.category === selectedCat)

  const tickerList = [...filtered, ...filtered, ...filtered]

  return (
    <section id="technology" className="py-20 bg-white border-b border-slate-200/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-['Poppins'] font-semibold text-[#1b95cd] bg-blue-50 border border-blue-100 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#1b95cd] animate-pulse" />
          Enterprise Technology Ecosystem
        </div>
        <h3 className="font-['Poppins'] font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0d2335] tracking-tight mb-3">
          Serving 10,000+ Engineers & Mission-Critical Enterprise Workloads.
        </h3>
        <p className="font-['Inter'] text-sm text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          Empowering global engineering teams, intelligent platforms, and enterprise data architectures across leading Cloud, AI, Data, DevOps, and Web ecosystems.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCat(cat.value)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-['Poppins'] transition-all ${
                selectedCat === cat.value
                  ? 'btn-primary-blue font-semibold shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 font-medium'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Infinite Seamless Ticker with White Gradient Edges */}
      <div className="relative w-full overflow-hidden mb-12">
        <div className="flex gap-4 w-max animate-ticker">
          {tickerList.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#1b95cd]/50 shadow-sm transition-all hover:bg-blue-50/40 group"
            >
              <span className="w-2 h-2 rounded-full bg-[#1b95cd] group-hover:scale-125 transition-transform" />
              <span className="font-['Poppins'] font-medium text-sm text-[#0d2335] whitespace-nowrap">
                {item.name}
              </span>
              <span className="font-['Inter'] text-[11px] text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200">
                {item.category}
              </span>
            </div>
          ))}
        </div>

        {/* White Fade Mask on Left and Right */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent" />
      </div>

      {/* Trust Metrics Highlight Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#f8f9fa] border border-slate-200">
          {[
            { metric: '100M+', label: 'Records Migrated', sub: 'Sub-second real-time CDC' },
            { metric: '99.99%', label: 'Platform Availability', sub: 'Zero-Downtime Architecture' },
            { metric: '50+', label: 'Ecosystem Integrations', sub: 'Native Cloud & Data Connectors' },
            { metric: 'Global', label: 'Enterprise Impact', sub: 'Powering Scalable Workloads' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-2">
              <div className="font-['Poppins'] font-bold text-2xl sm:text-3xl text-[#1b95cd] tracking-tight mb-0.5">
                {stat.metric}
              </div>
              <div className="font-['Poppins'] font-semibold text-xs sm:text-sm text-[#0d2335]">
                {stat.label}
              </div>
              <div className="font-['Inter'] text-[11px] text-slate-500 mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

