import { useState } from 'react'

const FAQ_ITEMS = [
  {
    category: 'Moss AI Mapper',
    q: 'How does Moss AI Mapper differ from traditional ETL and schema conversion tools?',
    a: 'Traditional ETL relies on manual field-by-field regex mapping or brittle static scripts. Moss AI Mapper leverages proprietary semantic neural models that comprehend contextual table schemas, automatically synthesize complex transformations (e.g. nested JSON arrays to relational structures), detect schema drift, and generate reproducible PySpark/SQL migration code with zero data loss.',
  },
  {
    category: 'Security & Compliance',
    q: 'How does Moss ensure enterprise data privacy and zero data retention?',
    a: 'Moss operates under a strict Zero Data Retention (ZDR) architecture. During data migrations, your actual payload data never leaves your enterprise VPC or storage boundary. Moss only processes metadata, column statistics, and schema definitions. All telemetry is encrypted via AES-256 and TLS 1.3.',
  },
  {
    category: 'Moss Tech Academy',
    q: 'Are Moss Tech courses designed for individual engineers or corporate teams?',
    a: 'Both. We offer individual cohort-based masterclasses as well as customized enterprise workforce upskilling programs. Our curriculum is tailored for engineers transitioning into modern Cloud Engineering (AWS, Terraform, Kubernetes), Distributed Big Data (Databricks, PySpark, Snowflake), and Agentic AI engineering.',
  },
  {
    category: 'Deployment',
    q: 'Can Moss AI Mapper be deployed on-premise or in air-gapped private VPCs?',
    a: 'Yes. In addition to our managed SaaS offering, Moss AI Mapper can be deployed as an air-gapped Helm chart or Docker container cluster directly inside your AWS, Azure, or GCP private subnet with full RBAC and SAML/Okta single sign-on.',
  },
  {
    category: 'Moss Media',
    q: 'What is the release timeline and beta program for Moss Media?',
    a: 'Moss Media is currently in Private Alpha with select media agencies, creative studios, and high-growth brands. General access is targeted for 2026. You can request priority VIP early access by submitting the waitlist form above.',
  },
  {
    category: 'Support & SLAs',
    q: 'What level of technical support and SLA does Moss provide?',
    a: 'Enterprise agreements include a 99.99% availability SLA, dedicated Slack/Teams bridge channels, 24/7 incident response from senior cloud architects, and custom connector engineering support.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [selectedCat, setSelectedCat] = useState('All')

  const categories = ['All', 'Moss AI Mapper', 'Security & Compliance', 'Moss Tech Academy', 'Deployment', 'Moss Media']

  const filteredFaqs =
    selectedCat === 'All'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((f) => f.category === selectedCat || (selectedCat === 'Deployment' && f.category === 'Deployment'))

  return (
    <section id="faq" className="py-14 lg:py-16 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <p className="text-[#1b95cd] font-['Poppins'] font-semibold text-sm uppercase tracking-wider mb-2">
            Got Questions?
          </p>
          <h2 className="font-['Poppins'] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0d2335] tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="font-['Inter'] text-sm sm:text-base text-slate-600">
            Everything you need to know about our platforms, deployment, and enterprise security.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-['Poppins'] font-medium transition-all ${
                selectedCat === cat
                  ? 'btn-primary-blue shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#1b95cd]/60 shadow-md ring-1 ring-[#1b95cd]/15'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-['Poppins'] font-semibold text-base sm:text-lg text-[#0d2335]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 flex-shrink-0 ${
                      isOpen
                        ? 'bg-[#1b95cd] text-white rotate-180'
                        : 'bg-slate-100 text-slate-500 hover:bg-blue-50 hover:text-[#1b95cd]'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm font-['Inter'] text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    <p className="pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Footer Prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-blue-50/60 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-['Poppins'] font-bold text-base text-[#0d2335]">
              Need custom enterprise deployment details?
            </h4>
            <p className="font-['Inter'] text-xs text-slate-500">
              Our engineering solutions team is available for deep architectural reviews.
            </p>
          </div>
          <a
            href="#contact"
            className="btn-primary-blue px-5 py-2.5 rounded-xl font-['Poppins'] font-medium text-xs whitespace-nowrap"
          >
            Talk to an Architect
          </a>
        </div>
      </div>
    </section>
  )
}
