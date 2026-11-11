import { useState, useMemo } from 'react'

interface FAQItem {
  id: string
  category: 'Moss Migration' | 'Moss Med AI' | 'Custom Agents' | 'Moss Academy' | 'Security & SLAs'
  icon: string
  q: string
  a: string
  highlights?: string[]
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'migration-zero-downtime',
    category: 'Moss Migration',
    icon: '⚡',
    q: 'How does Moss Migration ensure zero downtime during live production database cutovers?',
    a: 'Moss Migration utilizes a dual-phase replication architecture. First, it automatically analyzes source schemas and synthesizes type-safe transformation logic. Second, it initiates continuous real-time Change Data Capture (CDC) from binary logs (e.g., PostgreSQL WAL, Oracle Redo logs, MySQL binlog) to stream delta transactions. Both source and destination systems remain in sync until your team validates the pre-flight check and triggers the instant DNS cutover.',
    highlights: ['Zero disruption to active production traffic', 'Continuous Change Data Capture (CDC)', 'Pre-flight integrity dry-run validation'],
  },
  {
    id: 'migration-heterogeneous',
    category: 'Moss Migration',
    icon: '⚡',
    q: 'Which database engines and data warehouses are supported out of the box?',
    a: 'Moss Migration natively supports bidirectional and one-way migrations across Oracle, PostgreSQL Enterprise, MySQL, Microsoft SQL Server, MongoDB, Snowflake, Databricks Lakehouse, AWS Redshift, and Google BigQuery. Our neural mapper handles complex nested JSON-to-relational unwrapping and schema drift reconciliation automatically.',
    highlights: ['Snowflake, Databricks, PostgreSQL, Oracle & Redshift', 'Automated nested JSON to relational mapping', 'Real-time schema drift isolation'],
  },
  {
    id: 'medai-ehr-integration',
    category: 'Moss Med AI',
    icon: '🩺',
    q: 'How does the Moss Med AI hospital package integrate with existing hospital EHRs like Epic and Cerner?',
    a: 'Moss Med AI functions as a non-intrusive clinical intelligence layer. It connects via standardized FHIR R4 APIs and HL7 v2/v3 message interfaces (ADT, ORU, MDM). Clinical notes and telemetry sent to Moss Med AI are parsed in sub-100ms and returned as structured FHIR Observations, Conditions, and MedicationRequests directly into your native EHR view without altering doctor workflows.',
    highlights: ['Native FHIR R4 & HL7 v2/v3 certified connectors', 'Zero changes required to clinician UI or EHR workflows', 'Compatible with Epic Systems, Oracle Cerner & MEDITECH'],
  },
  {
    id: 'medai-hipaa-compliance',
    category: 'Moss Med AI',
    icon: '🩺',
    q: 'What clinical coding systems and diagnostic sentinels are included in the hospital package?',
    a: 'The package features full automated ICD-10-CM/PCS and SNOMED-CT clinical coding, RxNorm medication normalization, real-time drug-drug interaction checking, and ICU telemetry sentinels that track acute kidney injury (KDIGO criteria), sepsis early warnings, and hyperkalemia ECG alarms.',
    highlights: ['ICD-10, SNOMED-CT & RxNorm automated coding', 'Real-time ICU & pharmacy contraindication sentinels', 'Clinical decision support grounded in peer-reviewed literature'],
  },
  {
    id: 'custom-agents-process',
    category: 'Custom Agents',
    icon: '🤖',
    q: 'What is the process when Moss Tech builds custom autonomous agents for a client?',
    a: 'We follow a four-stage engineering sprint: 1) Architectural Scoping to map your domain business rules and target APIs; 2) Agent Graph Synthesis using state-machine DAGs and deterministic guardrails; 3) Private Sandboxing with dry-run regression testing; and 4) Deployment into your dedicated cloud VPC or on-premise Kubernetes cluster with complete source code ownership and 24/7 SLAs.',
    highlights: ['Fixed 4-week rapid deployment sprints', 'Full source code & agent weights ownership', 'Private VPC deployment with zero third-party leakage'],
  },
  {
    id: 'custom-agents-determinism',
    category: 'Custom Agents',
    icon: '🤖',
    q: 'How do you prevent hallucinations and ensure deterministic agent tool calling?',
    a: 'We enforce strict constrained JSON schema generation, isolated execution sandboxes, and cryptographic execution ledgers. Agents cannot execute financial or operational database writes without passing mathematical validation checks, policy guardrails, and role-based confirmation gates.',
    highlights: ['Deterministic schema constraints', 'Mathematical & organizational guardrail checks', 'Audit trail logged on tamper-proof cryptographic ledger'],
  },
  {
    id: 'academy-tracks',
    category: 'Moss Academy',
    icon: '🎓',
    q: 'What engineering tracks and corporate training programs does Moss Academy offer?',
    a: 'Moss Academy provides high-intensity cohorts in Agentic AI & DSPy/LLMOps, Distributed Big Data (Databricks, PySpark, Snowflake), and Enterprise Cloud/DevOps (AWS, Kubernetes, Terraform). Programs are available as individual masterclasses and customized corporate workforce upskilling for engineering teams transitioning into production AI.',
    highlights: ['Bangalore Hub, Nagpur Hub & Global Remote Cohorts', 'Hands-on production labs on AWS, Databricks & Kubernetes', '10,000+ alumni placed across top tech enterprises'],
  },
  {
    id: 'security-zero-retention',
    category: 'Security & SLAs',
    icon: '🛡️',
    q: 'What is Moss Nexus Zero Data Retention (ZDR) and how is client data protected?',
    a: 'Under our Zero Data Retention architecture, customer payloads, database rows, and patient health information (PHI) never leave your private enterprise boundary or VPC. Moss models only process metadata, vector embeddings, and schema definitions in-memory. All network transmission is locked via TLS 1.3 and encrypted at rest with AES-256.',
    highlights: ['100% HIPAA, HITECH & SOC2 Type II compliant', 'Zero payload data stored on external servers', 'Air-gapped on-premise deployment available'],
  },
  {
    id: 'enterprise-slas',
    category: 'Security & SLAs',
    icon: '🛡️',
    q: 'What uptime SLAs and dedicated support options are provided?',
    a: 'All enterprise licensing tiers include guaranteed 99.99% availability SLAs, sub-15 minute critical incident response times, dedicated Technical Account Managers (TAMs), shared Slack/Teams bridges, and proactive 24/7 cluster health monitoring.',
    highlights: ['99.99% guaranteed availability SLA', 'Sub-15 minute emergency incident response', 'Dedicated Slack / Microsoft Teams engineering bridge'],
  },
]

const CATEGORIES = [
  { id: 'All', label: 'All Questions', icon: '✦', count: FAQ_ITEMS.length },
  { id: 'Moss Migration', label: 'Moss Migration', icon: '⚡', count: 2 },
  { id: 'Moss Med AI', label: 'Moss Med AI (Hospital)', icon: '🩺', count: 2 },
  { id: 'Custom Agents', label: 'Moss Tech (Custom Solutions)', icon: '🛠️', count: 2 },
  { id: 'Moss Academy', label: 'Moss Academy', icon: '🎓', count: 1 },
  { id: 'Security & SLAs', label: 'Security & SLAs', icon: '🛡️', count: 2 },
]

export default function FAQSection() {
  const [selectedCat, setSelectedCat] = useState('All')
  const [openId, setOpenId] = useState<string | null>('migration-zero-downtime')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter items based on category and live search query
  const filteredFaqs = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchesCat = selectedCat === 'All' || item.category === selectedCat
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCat && matchesSearch
    })
  }, [selectedCat, searchQuery])

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="faq" className="py-16 lg:py-20 bg-slate-50/70 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-['Poppins'] font-bold text-[#1b95cd] bg-blue-50 border border-blue-100 mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#1b95cd] animate-pulse" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="font-['Poppins'] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0d2335] tracking-tight mb-3">
            Clear Answers for Engineering & Healthcare Leaders
          </h2>
          <p className="font-['Inter'] text-sm sm:text-base text-slate-600 leading-relaxed">
            Everything you need to know about our database migration engine, hospital clinical package, bespoke client agents, and workforce academy.
          </p>
        </div>

        {/* 2-Column Elevated Modern Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Category Navigation & Support Box (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24">
            
            {/* Search Input Box */}
            <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs">
              <label className="block text-[11px] font-['Poppins'] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Quick Search
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by keyword (e.g. HIPAA, CDC, FHIR)..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-xs text-[#0d2335] placeholder-slate-400 focus:outline-none focus:border-[#1b95cd] focus:ring-2 focus:ring-[#1b95cd]/15 transition-all"
                />
                <svg className="w-4 h-4 text-slate-400 absolute left-3 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600 text-xs cursor-pointer p-0.5"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Vertical Category Filter Tabs */}
            <div className="bg-white rounded-2xl border border-slate-200 p-2 shadow-2xs">
              <div className="px-3 py-2 text-[11px] font-['Poppins'] font-bold text-slate-400 uppercase tracking-wider">
                Topic Navigation
              </div>
              <div className="space-y-1">
                {CATEGORIES.map((cat) => {
                  const isActive = selectedCat === cat.id
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedCat(cat.id)
                        setSearchQuery('')
                      }}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-['Poppins'] transition-all cursor-pointer text-left ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-50 to-sky-50/60 text-[#1b95cd] font-bold border border-blue-200/80 shadow-2xs'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-[#0d2335] font-medium'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <span className="text-sm shrink-0">{cat.icon}</span>
                        <span className="truncate">{cat.label}</span>
                      </div>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full shrink-0 ${
                          isActive
                            ? 'bg-[#1b95cd] text-white font-bold'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {cat.count}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Direct Architect Consultation Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0d2335] to-[#12314a] text-white shadow-md">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[11px] font-['Poppins'] font-bold text-emerald-400 uppercase tracking-wider">
                  Live Technical Support
                </span>
              </div>
              <h4 className="font-['Poppins'] font-bold text-base mb-1.5 leading-snug">
                Have specific architectural questions?
              </h4>
              <p className="font-['Inter'] text-xs text-slate-300 leading-relaxed mb-4">
                Our principal enterprise architects and healthcare informatics team can review your schema, EHR stack, or agent requirements.
              </p>
              <a
                href="#contact"
                className="btn-primary-blue w-full py-2.5 px-4 rounded-xl text-xs font-['Poppins'] font-semibold flex items-center justify-center gap-2 shadow-sm text-center"
              >
                <span>Consult with an Architect</span>
                <span>→</span>
              </a>
            </div>

          </div>

          {/* Right Column: High-End Interactive Accordion Cards (lg:col-span-8) */}
          <div className="lg:col-span-8 space-y-3.5 text-left">
            
            {/* Results Count Header */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-200/80 text-xs font-['Inter'] text-slate-500">
              <span>
                Showing <strong className="text-[#0d2335]">{filteredFaqs.length}</strong> questions in{' '}
                <span className="text-[#1b95cd] font-semibold">{selectedCat === 'All' ? 'All Categories' : selectedCat}</span>
              </span>
              {selectedCat !== 'All' && (
                <button
                  onClick={() => setSelectedCat('All')}
                  className="text-[#1b95cd] hover:underline font-medium cursor-pointer"
                >
                  View All Topics →
                </button>
              )}
            </div>

            {/* Empty State when Search has no matches */}
            {filteredFaqs.length === 0 && (
              <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center">
                <div className="text-3xl mb-2">🔍</div>
                <h4 className="font-['Poppins'] font-bold text-sm text-[#0d2335] mb-1">
                  No matching questions found
                </h4>
                <p className="font-['Inter'] text-xs text-slate-500 mb-4">
                  We couldn't find any questions matching "{searchQuery}". Try a different keyword or reset filters.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCat('All')
                  }}
                  className="btn-secondary-outline px-4 py-2 rounded-xl text-xs font-['Poppins'] font-medium"
                >
                  Reset Search
                </button>
              </div>
            )}

            {/* Accordion Item Cards */}
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id
              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-[#1b95cd] shadow-md ring-1 ring-[#1b95cd]/20'
                      : 'border-slate-200 hover:border-slate-300 shadow-2xs hover:shadow-xs'
                  }`}
                >
                  {/* Card Trigger Button */}
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 focus:outline-none cursor-pointer group"
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold shrink-0 mt-0.5 transition-colors ${
                          isOpen
                            ? 'bg-blue-100/80 text-[#1b95cd]'
                            : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-[#1b95cd]'
                        }`}
                      >
                        {faq.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[10px] font-['Poppins'] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 border border-slate-200/60">
                            {faq.category}
                          </span>
                        </div>
                        <h3
                          className={`font-['Poppins'] font-bold text-sm sm:text-base leading-snug transition-colors ${
                            isOpen ? 'text-[#1b95cd]' : 'text-[#0d2335] group-hover:text-[#1b95cd]'
                          }`}
                        >
                          {faq.q}
                        </h3>
                      </div>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-1 transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#1b95cd] text-white rotate-180'
                          : 'bg-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-[#1b95cd]'
                      }`}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Card Answer Body */}
                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-slate-100 animate-in fade-in duration-200">
                      <p className="font-['Inter'] text-xs sm:text-sm text-slate-600 leading-relaxed pt-4 mb-4">
                        {faq.a}
                      </p>

                      {/* Feature Highlights Pills */}
                      {faq.highlights && (
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <span className="text-[10px] font-['Poppins'] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                            Key Takeaways:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {faq.highlights.map((h, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center gap-1.5 text-[11px] font-['Inter'] font-medium text-slate-700 bg-white px-2.5 py-1 rounded-lg border border-slate-200/80 shadow-2xs"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1b95cd]" />
                                <span>{h}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}

          </div>

        </div>

      </div>
    </section>
  )
}
