import React, { useState } from 'react'

interface TechPillar {
  title: string
  icon: string
  badge: string
  badgeColor: string
  desc: string
  techs: { name: string; tag: string; iconBg: string }[]
}

const TECH_PILLARS: TechPillar[] = [
  {
    title: 'Modern React & Web Tier',
    icon: '⚛️',
    badge: 'React 19 Standard',
    badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    desc: 'Ultra-fast, responsive user experiences built with React Server Components, streaming SSR, and strict type safety.',
    techs: [
      { name: 'React 19', tag: 'Core UI', iconBg: 'bg-cyan-100 text-cyan-700' },
      { name: 'Next.js 15', tag: 'SSR / Edge', iconBg: 'bg-slate-100 text-slate-800' },
      { name: 'TypeScript', tag: 'Type-Safe', iconBg: 'bg-blue-100 text-blue-700' },
      { name: 'Tailwind CSS v4', tag: 'Styling', iconBg: 'bg-sky-100 text-sky-700' },
      { name: 'Vite 6', tag: 'Bundler', iconBg: 'bg-purple-100 text-purple-700' },
      { name: 'React Native', tag: 'Mobile', iconBg: 'bg-cyan-100 text-cyan-700' },
      { name: 'Zustand', tag: 'State', iconBg: 'bg-indigo-100 text-indigo-700' },
      { name: 'TanStack Query', tag: 'Cache', iconBg: 'bg-rose-100 text-rose-700' },
    ],
  },
  {
    title: 'Autonomous & Cloud AI',
    icon: '🤖',
    badge: 'Zero-Hallucination',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    desc: 'Multimodal intelligence, self-correcting agentic graphs, and programmatic prompt compilation.',
    techs: [
      { name: 'Google Gemini 2.0', tag: 'Multimodal', iconBg: 'bg-blue-100 text-blue-700' },
      { name: 'OpenAI GPT-4o', tag: 'Reasoning', iconBg: 'bg-emerald-100 text-emerald-700' },
      { name: 'Claude 3.5', tag: 'Code Gen', iconBg: 'bg-amber-100 text-amber-700' },
      { name: 'DSPy (Stanford)', tag: 'Compiled AI', iconBg: 'bg-purple-100 text-purple-700' },
      { name: 'LangGraph', tag: 'Agents', iconBg: 'bg-teal-100 text-teal-700' },
      { name: 'pgvector', tag: 'Vector RAG', iconBg: 'bg-blue-100 text-blue-700' },
      { name: 'PyTorch', tag: 'Deep Learning', iconBg: 'bg-orange-100 text-orange-700' },
      { name: 'Pinecone', tag: 'Embeddings', iconBg: 'bg-sky-100 text-sky-700' },
    ],
  },
  {
    title: 'Multi-Cloud & Data Backbone',
    icon: '☁️',
    badge: '99.99% Availability',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    desc: 'Multi-region distributed clusters, low-latency streaming event pipelines, and ACID data persistence.',
    techs: [
      { name: 'AWS Cloud', tag: 'EKS / S3', iconBg: 'bg-amber-100 text-amber-700' },
      { name: 'Google Cloud', tag: 'BigQuery / GKE', iconBg: 'bg-blue-100 text-blue-700' },
      { name: 'Microsoft Azure', tag: 'AKS / OpenAI', iconBg: 'bg-sky-100 text-sky-700' },
      { name: 'Kubernetes', tag: 'Auto-Scale', iconBg: 'bg-blue-100 text-blue-700' },
      { name: 'Docker', tag: 'Containers', iconBg: 'bg-cyan-100 text-cyan-700' },
      { name: 'Apache Kafka', tag: 'CDC Stream', iconBg: 'bg-slate-200 text-slate-800' },
      { name: 'PostgreSQL', tag: 'ACID Core', iconBg: 'bg-indigo-100 text-indigo-700' },
      { name: 'Redis', tag: 'In-Memory', iconBg: 'bg-red-100 text-red-700' },
    ],
  },
]

const TICKER_ITEMS = [
  'React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS v4', 'Google Gemini 2.0',
  'OpenAI GPT-4o', 'Claude 3.5', 'DSPy Stanford', 'LangGraph Agents', 'AWS Cloud',
  'Google Cloud GKE', 'Microsoft Azure', 'Kubernetes', 'Docker', 'Apache Kafka',
  'PostgreSQL', 'pgvector', 'Databricks', 'Snowflake', 'Redis', 'FastAPI Python', 'Vite 6'
]

export default function TechStackShowcase() {
  const [activeTab, setActiveTab] = useState<number>(0)

  return (
    <section id="techstack" className="py-14 sm:py-16 bg-white relative border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-['Poppins'] font-semibold text-[#1b95cd] bg-blue-50 border border-blue-100 mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#1b95cd] animate-pulse" />
            Enterprise Tech Stack
          </div>
          <h2 className="font-['Poppins'] font-bold text-2xl sm:text-3xl text-[#0d2335] tracking-tight">
            Powered by <span className="text-[#1b95cd]">Cloud</span>, Autonomous <span className="text-[#1b95cd]">AI</span> & <span className="text-[#1b95cd]">React</span>
          </h2>
          <p className="font-['Inter'] text-xs sm:text-sm text-slate-500 mt-2">
            Battle-tested technologies powering Moss Migration, Moss Med AI, Moss Tech Custom Solutions, and Moss Academy.
          </p>
        </div>

        {/* 3 Compact Stack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {TECH_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="card-white-shadow rounded-2xl p-5 bg-white border border-slate-200/90 flex flex-col justify-between hover:border-[#1b95cd]/40 transition-all duration-200"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{pillar.icon}</span>
                    <h3 className="font-['Poppins'] font-bold text-sm sm:text-base text-[#0d2335]">
                      {pillar.title}
                    </h3>
                  </div>
                  <span className={`text-[10px] font-['Poppins'] font-semibold px-2 py-0.5 rounded-full border ${pillar.badgeColor}`}>
                    {pillar.badge}
                  </span>
                </div>

                <p className="font-['Inter'] text-xs text-slate-500 mb-4 leading-relaxed">
                  {pillar.desc}
                </p>

                {/* Tech Badges Grid */}
                <div className="grid grid-cols-2 gap-1.5">
                  {pillar.techs.map((tech, tIdx) => (
                    <div
                      key={tIdx}
                      className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-100 hover:bg-blue-50/60 hover:border-blue-200 transition-colors"
                    >
                      <span className="font-['Poppins'] font-semibold text-xs text-[#0d2335]">
                        {tech.name}
                      </span>
                      <span className="font-['Inter'] text-[9px] text-slate-400 font-medium bg-white px-1.5 py-0.2 rounded border border-slate-200">
                        {tech.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Smooth Infinite Marquee */}
        <div className="relative w-full overflow-hidden pt-2 border-t border-slate-100">
          <div className="flex gap-3 w-max animate-ticker py-2">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/70 text-xs font-['Poppins'] font-medium text-slate-700 whitespace-nowrap hover:border-[#1b95cd] hover:text-[#1b95cd] transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#1b95cd]" />
                {item}
              </span>
            ))}
          </div>

          {/* Side Fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
        </div>

      </div>
    </section>
  )
}
