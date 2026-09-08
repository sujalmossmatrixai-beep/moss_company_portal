import { useState } from 'react'

export default function ArchitectureTrust() {
  const [activeTab, setActiveTab] = useState<'architecture' | 'mission' | 'vision'>('architecture')
  const [activeArchLayer, setActiveArchLayer] = useState<number>(0)

  const architectureLayers = [
    {
      id: 0,
      badge: 'LAYER 01 · EDGE & INGRESS',
      title: 'Global Edge & API Gateway Tier',
      tagline: 'Micro-Latency Ingress, Dynamic Load Balancing & Zero-Trust Auth',
      desc: 'All inbound enterprise traffic is routed through globally distributed edge points of presence. Includes automated DDoS protection, TLS 1.3 termination, rate-limiting, and stateless OAuth2/JWT cryptographic token validation.',
      nodes: ['Envoy Proxy', 'Cloudflare Edge', 'TLS 1.3 Term.', 'OAuth2 / JWT', 'WAF Protection', 'Rate Limiter'],
      metrics: '< 15ms Edge Latency · 99.999% SLA',
    },
    {
      id: 1,
      badge: 'LAYER 02 · DISTRIBUTED SERVICES',
      title: 'Microservices & AI Orchestration Core',
      tagline: 'Containerized Kubernetes Clusters & Agentic AI Pipelines',
      desc: 'Our application backend runs on resilient, multi-region Kubernetes clusters. Microservices auto-scale horizontally based on real-time CPU/memory thresholds, running alongside dedicated asynchronous Agentic AI execution workers.',
      nodes: ['Kubernetes (EKS/GKE)', 'FastAPI & Node.js', 'Agentic AI / DSPy', 'Celery Workers', 'gRPC Internal Mesh', 'Auto-Scaler'],
      metrics: 'Auto-Scales 10x in < 30s · Zero Downtime Deployments',
    },
    {
      id: 2,
      badge: 'LAYER 03 · STREAMING & EVENTS',
      title: 'High-Throughput Event-Driven Backbone',
      tagline: 'Real-Time Kafka Event Streaming & In-Memory Caching',
      desc: 'Decoupled asynchronous event streams process millions of messages per second with strict ordering guarantees. Fast Redis caching clusters eliminate redundant database queries and maintain sub-millisecond session states.',
      nodes: ['Apache Kafka', 'Redis Cluster', 'Event Sourcing', 'Distributed Locks', 'Dead Letter Queues', 'Pub/Sub Engine'],
      metrics: '1M+ Events/sec Throughput · Sub-millisecond Cache Latency',
    },
    {
      id: 3,
      badge: 'LAYER 04 · PERSISTENCE & DATA',
      title: 'Enterprise Relational, Vector & Lakehouse Layer',
      tagline: 'Multi-Model Data Management, ACID Compliance & Lakehouse Analytics',
      desc: 'Hybrid persistence strategy utilizing ACID-compliant PostgreSQL with read-replicas for transactional integrity, pgvector/Pinecone for high-dimensional AI vector embeddings, and Databricks/Snowflake for massive analytical workloads.',
      nodes: ['PostgreSQL (ACID)', 'Read Replicas', 'pgvector & Pinecone', 'Databricks Lakehouse', 'Snowflake DW', 'Point-in-Time Backup'],
      metrics: 'Continuous WAL Replication · AES-256 Storage Encryption',
    },
    {
      id: 4,
      badge: 'LAYER 05 · SECURITY & TELEMETRY',
      title: 'Zero-Trust Security & Observability Mesh',
      tagline: 'Full-Stack Distributed Tracing, HSM Vault & Automated Self-Healing',
      desc: 'End-to-end telemetry powered by OpenTelemetry and Prometheus tracks distributed traces across all microservices. Automated health probes detect anomalies and trigger self-healing rollbacks before service degradation.',
      nodes: ['OpenTelemetry', 'Prometheus & Grafana', 'HashiCorp Vault', 'Hardware Security (HSM)', 'Automated Rollback', 'Audit Logging'],
      metrics: '24/7 Real-Time Telemetry · Instant Anomaly Alerting',
    },
  ]

  const currentLayer = architectureLayers[activeArchLayer]

  return (
    <section id="architecture" className="py-24 lg:py-32 bg-white relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-['Poppins'] font-bold text-[#1b95cd] bg-blue-50 border border-blue-100 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#1b95cd] animate-pulse" />
            ENTERPRISE ARCHITECTURE & FOUNDATION
          </div>
          <h2 className="font-['Poppins'] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0d2335] tracking-tight mb-4">
            Engineered for Zero-Downtime Resilience & Extreme Scale
          </h2>
          <p className="font-['Inter'] text-base text-slate-600 leading-relaxed">
            Explore our battle-tested backend enterprise architecture, distributed multi-cloud systems design, and our overarching mission and vision.
          </p>
        </div>

        {/* Top-Level Tab Switcher: Architecture vs Mission vs Vision */}
        <div className="card-white-shadow rounded-3xl p-6 sm:p-10 mb-16 bg-[#f8f9fa] border border-slate-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-8 border-b border-slate-200 gap-4">
            <div>
              <span className="font-['Poppins'] text-xs text-[#1b95cd] uppercase tracking-wider font-semibold">
                Strategic Foundation
              </span>
              <h3 className="font-['Poppins'] font-bold text-xl text-[#0d2335]">
                {activeTab === 'architecture' && 'Enterprise Backend Architecture'}
                {activeTab === 'mission' && 'Our Company Mission'}
                {activeTab === 'vision' && 'Our Future Vision'}
              </h3>
            </div>

            {/* Main Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveTab('architecture')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-['Poppins'] font-semibold transition-all ${
                  activeTab === 'architecture'
                    ? 'btn-primary-blue shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:text-[#1b95cd] hover:border-slate-300'
                }`}
              >
                Backend Architecture
              </button>
              <button
                onClick={() => setActiveTab('mission')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-['Poppins'] font-semibold transition-all ${
                  activeTab === 'mission'
                    ? 'btn-primary-blue shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:text-[#1b95cd] hover:border-slate-300'
                }`}
              >
                Our Mission
              </button>
              <button
                onClick={() => setActiveTab('vision')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-['Poppins'] font-semibold transition-all ${
                  activeTab === 'vision'
                    ? 'btn-primary-blue shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:text-[#1b95cd] hover:border-slate-300'
                }`}
              >
                Our Vision
              </button>
            </div>
          </div>

          {/* VIEW 1: ENTERPRISE BACKEND ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div>
              {/* Architecture Layer Switcher Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {architectureLayers.map((layer, index) => (
                  <button
                    key={layer.id}
                    onClick={() => setActiveArchLayer(index)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-['Poppins'] font-semibold transition-all flex items-center gap-2 ${
                      activeArchLayer === index
                        ? 'bg-[#0d2335] text-white shadow-sm'
                        : 'bg-white text-slate-600 border border-slate-200 hover:border-[#1b95cd]/40 hover:text-[#1b95cd]'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${activeArchLayer === index ? 'bg-[#1b95cd]' : 'bg-slate-300'}`} />
                    Layer 0{index + 1}: {layer.title.split(' ')[0]} {layer.title.split(' ')[1] || ''}
                  </button>
                ))}
              </div>

              {/* Active Architecture Layer Banner */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm mb-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-['Poppins'] text-xs font-bold text-[#1b95cd] px-2.5 py-0.5 rounded-md bg-blue-50 border border-blue-100">
                        {currentLayer.badge}
                      </span>
                      <span className="text-xs font-['Inter'] text-slate-400">
                        {currentLayer.metrics}
                      </span>
                    </div>
                    <h4 className="font-['Poppins'] font-bold text-xl sm:text-2xl text-[#0d2335] mb-2">
                      {currentLayer.title}
                    </h4>
                    <p className="font-['Poppins'] text-xs font-semibold text-[#1b95cd] mb-3">
                      {currentLayer.tagline}
                    </p>
                    <p className="font-['Inter'] text-sm text-slate-600 leading-relaxed mb-6">
                      {currentLayer.desc}
                    </p>

                    {/* Architectural Component Nodes */}
                    <div>
                      <div className="font-['Poppins'] text-xs font-bold text-[#0d2335] uppercase tracking-wider mb-2.5">
                        Integrated Technologies & Protocols:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {currentLayer.nodes.map((node, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-lg bg-slate-50 text-slate-700 border border-slate-200 text-xs font-['Inter'] font-medium"
                          >
                            {node}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Architecture Guarantees Sidebar */}
                  <div className="lg:w-80 p-5 rounded-xl bg-gradient-to-br from-blue-50/80 to-slate-50 border border-blue-100 flex flex-col justify-between">
                    <div className="text-xs font-['Poppins'] uppercase font-bold text-[#1b95cd] mb-3 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#1b95cd]" />
                      Backend Guarantees
                    </div>
                    <ul className="space-y-2 text-xs font-['Inter'] text-slate-700 mb-4">
                      <li className="flex items-center gap-2">
                        <span className="text-[#1b95cd] font-bold">✓</span> Zero Single Point of Failure
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#1b95cd] font-bold">✓</span> Sub-50ms Global Query Latency
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#1b95cd] font-bold">✓</span> End-to-End Cryptographic Proof
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#1b95cd] font-bold">✓</span> 99.99% Availability SLA
                      </li>
                    </ul>
                    <div className="text-[11px] font-['Inter'] text-slate-500 italic border-t border-blue-200/60 pt-3">
                      Modular design allows custom microservice & database integrations for enterprise clients.
                    </div>
                  </div>
                </div>
              </div>

              {/* 5-Layer Stack Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                {architectureLayers.map((layer, idx) => {
                  const isCurrent = activeArchLayer === idx
                  return (
                    <div
                      key={layer.id}
                      onClick={() => setActiveArchLayer(idx)}
                      className={`p-4 rounded-xl cursor-pointer transition-all border ${
                        isCurrent
                          ? 'bg-white border-[#1b95cd] shadow-md ring-2 ring-[#1b95cd]/20'
                          : 'bg-white/80 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="text-[10px] font-['Poppins'] font-bold text-[#1b95cd] mb-1">
                        0{idx + 1} · {layer.badge.split('·')[1]?.trim() || ''}
                      </div>
                      <div className="font-['Poppins'] font-bold text-xs text-[#0d2335] leading-tight mb-1">
                        {layer.title}
                      </div>
                      <div className="font-['Inter'] text-[11px] text-slate-500 line-clamp-2">
                        {layer.tagline}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* VIEW 2: OUR MISSION */}
          {activeTab === 'mission' && (
            <div className="space-y-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="max-w-2xl">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-['Poppins'] font-bold text-[#1b95cd] bg-blue-50 border border-blue-100 mb-3">
                      PURPOSE & MISSION
                    </span>
                    <h4 className="font-['Poppins'] font-bold text-xl sm:text-2xl text-[#0d2335] mb-3">
                      Empowering Global Enterprises & Builders Through Transformative Technology
                    </h4>
                    <p className="font-['Inter'] text-sm text-slate-600 leading-relaxed">
                      Our mission is to engineer high-velocity, intelligent digital infrastructure and upskill the engineering workforce. We bridge the gap between breakthrough technological innovation and mission-critical enterprise production, enabling businesses to scale seamlessly and engineers to achieve peak mastery.
                    </p>
                  </div>

                  <div className="lg:w-80 p-5 rounded-xl bg-gradient-to-br from-blue-50/80 to-slate-50 border border-blue-100 flex flex-col justify-between">
                    <div className="text-xs font-['Poppins'] uppercase font-bold text-[#1b95cd] mb-2 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#1b95cd]" />
                      Core Commitment
                    </div>
                    <p className="font-['Inter'] text-xs italic text-slate-700 leading-relaxed">
                      "Building resilient, intelligent platforms and empowering engineers to drive the future of digital enterprise."
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  {
                    title: 'Autonomous Enterprise Platforms',
                    desc: 'Developing AI-native tools and robust platforms that eliminate repetitive engineering friction and accelerate business agility.',
                    tag: 'Platform Innovation',
                  },
                  {
                    title: 'Engineering Workforce Enablement',
                    desc: 'Equipping 10,000+ engineers with production-grade architectural skills, real-world systems rigor, and modern tech masteries.',
                    tag: 'Ecosystem Growth',
                  },
                  {
                    title: 'Uncompromising Trust & Security',
                    desc: 'Maintaining bank-grade security, zero-trust architectures, and strict compliance across every system we engineer.',
                    tag: 'Zero-Trust Posture',
                  },
                  {
                    title: 'Continuous Operational Velocity',
                    desc: 'Delivering micro-latency execution, high throughput, and zero-downtime reliability for mission-critical enterprise workloads.',
                    tag: 'Operational Rigor',
                  },
                ].map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#1b95cd]/50 transition-all shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-['Poppins'] text-xs font-bold text-[#1b95cd] px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100">
                        {pillar.tag}
                      </span>
                      <span className="text-xs font-['Poppins'] font-semibold text-slate-400">
                        0{idx + 1}
                      </span>
                    </div>
                    <h5 className="font-['Poppins'] font-bold text-base text-[#0d2335] mb-2">
                      {pillar.title}
                    </h5>
                    <p className="font-['Inter'] text-xs text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VIEW 3: OUR VISION */}
          {activeTab === 'vision' && (
            <div className="space-y-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="max-w-2xl">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-['Poppins'] font-bold text-[#1b95cd] bg-blue-50 border border-blue-100 mb-3">
                      FUTURE OUTLOOK
                    </span>
                    <h4 className="font-['Poppins'] font-bold text-xl sm:text-2xl text-[#0d2335] mb-3">
                      Pioneering the Next Era of Autonomous Enterprise Intelligence & Creative Media
                    </h4>
                    <p className="font-['Inter'] text-sm text-slate-600 leading-relaxed">
                      We envision a future where autonomous AI systems, resilient multi-cloud architectures, and creative media intelligence converge into a unified ecosystem. An ecosystem where data flows effortlessly, operations heal automatically, and human creativity is amplified at global scale.
                    </p>
                  </div>

                  <div className="lg:w-80 p-5 rounded-xl bg-gradient-to-br from-blue-50/80 to-slate-50 border border-blue-100 flex flex-col justify-between">
                    <div className="text-xs font-['Poppins'] uppercase font-bold text-[#1b95cd] mb-2 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#1b95cd]" />
                      Vision Statement
                    </div>
                    <p className="font-['Inter'] text-xs italic text-slate-700 leading-relaxed">
                      "Pioneering intelligent, resilient foundations that will power the next decade of global enterprise growth."
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  {
                    title: 'Sovereign & Ethical AI Systems',
                    desc: 'Championing transparent, controllable AI models and agentic workflows that respect organizational data governance.',
                    tag: 'Sovereign AI',
                  },
                  {
                    title: 'Worldwide Engineering Network',
                    desc: 'Building a global community of 50,000+ alumni leading mission-critical engineering initiatives across top Fortune 500 enterprises.',
                    tag: 'Global Impact',
                  },
                  {
                    title: 'Self-Healing Distributed Systems',
                    desc: 'Advancing autonomous telemetry and intelligent orchestration that prevent downtime before it occurs.',
                    tag: 'Autonomous Infra',
                  },
                  {
                    title: 'Next-Gen Creative Intelligence',
                    desc: 'Redefining storytelling and multimodal digital asset distribution through state-of-the-art AI creative engines.',
                    tag: 'Multimodal Media',
                  },
                ].map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#1b95cd]/50 transition-all shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-['Poppins'] text-xs font-bold text-[#1b95cd] px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100">
                        {pillar.tag}
                      </span>
                      <span className="text-xs font-['Poppins'] font-semibold text-slate-400">
                        0{idx + 1}
                      </span>
                    </div>
                    <h5 className="font-['Poppins'] font-bold text-base text-[#0d2335] mb-2">
                      {pillar.title}
                    </h5>
                    <p className="font-['Inter'] text-xs text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Security & Enterprise Guarantees Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: (
                <svg className="w-6 h-6 text-[#1b95cd]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: 'Zero-Trust Security',
              desc: 'End-to-end encryption at rest and in transit, strict role-based access, and hardware security module credential protection.',
            },
            {
              icon: (
                <svg className="w-6 h-6 text-[#1b95cd]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              ),
              title: 'Multi-Cloud & Air-Gapped',
              desc: 'Deployable on your dedicated AWS, Azure, GCP Virtual Private Cloud, or on-premise infrastructure for sovereign compliance.',
            },
            {
              icon: (
                <svg className="w-6 h-6 text-[#1b95cd]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              ),
              title: 'Data Privacy & Sovereignty',
              desc: 'Strict adherence to international data protection principles, zero unauthorized retention, and regulatory compliance readiness.',
            },
            {
              icon: (
                <svg className="w-6 h-6 text-[#1b95cd]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              title: '99.99% Enterprise SLA',
              desc: 'Multi-region redundancy, automated failover routing, and dedicated 24/7 enterprise response teams guarantee uptime.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#1b95cd]/40 shadow-sm transition-all hover:translate-y-[-2px]"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h4 className="font-['Poppins'] font-bold text-base text-[#0d2335] mb-2">
                {item.title}
              </h4>
              <p className="font-['Inter'] text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
