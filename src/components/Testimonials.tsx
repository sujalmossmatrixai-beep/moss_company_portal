export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'Moss AI Mapper reduced our cross-cloud database migration timeline from an estimated 4 months of manual mapping down to under 8 days. The automated schema drift detection saved us hundreds of engineering hours.',
      author: 'Vikram Raghavan',
      role: 'Principal Data Architect',
      company: 'Fintech Cloud Platform',
      badge: 'Enterprise Migration',
      avatar: 'VR',
    },
    {
      quote:
        'The Moss Tech academy delivered the most comprehensive Agentic AI and Databricks training our engineering team has experienced. Our engineers went from conceptual knowledge to deploying production RAG workflows in 4 weeks.',
      author: 'Ananya Deshmukh',
      role: 'VP of Engineering',
      company: 'Global SaaS Enterprise',
      badge: 'Corporate Upskilling',
      avatar: 'AD',
    },
    {
      quote:
        'Zero schema loss and seamless type casting across PostgreSQL to Snowflake. Moss has built something uniquely powerful for modern data engineering teams operating under strict enterprise SLAs.',
      author: 'Marcus Chen',
      role: 'Head of Infrastructure',
      company: 'NextGen Logistics',
      badge: 'High-Volume Ingestion',
      avatar: 'MC',
    },
  ]

  return (
    <section id="testimonials" className="py-14 lg:py-16 bg-[#f8f9fa] relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-[#1b95cd] font-['Poppins'] font-semibold text-sm uppercase tracking-wider mb-2">
            Customer Success & Outcomes
          </p>
          <h2 className="font-['Poppins'] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0d2335] tracking-tight mb-3">
            Trusted by Engineering Leaders
          </h2>
          <p className="font-['Inter'] text-base text-slate-600 leading-relaxed">
            Real feedback from engineering leaders, data architects, and CTOs scaling production workloads with Moss.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group hover:translate-y-[-3px]"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-['Poppins'] font-medium px-2.5 py-0.5 rounded-full bg-blue-50 text-[#1b95cd] border border-blue-100">
                    {item.badge}
                  </span>
                  <div className="flex gap-1 text-amber-400 text-sm">
                    {'★'.repeat(5)}
                  </div>
                </div>

                <p className="font-['Inter'] text-sm text-slate-700 leading-relaxed mb-8">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-[#1b95cd] flex items-center justify-center font-['Poppins'] font-bold text-xs border border-blue-200">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="font-['Poppins'] font-bold text-sm text-[#0d2335]">
                    {item.author}
                  </h4>
                  <p className="font-['Inter'] text-xs text-slate-400">
                    {item.role} · {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Metrics Banner (HotelKey Impact Stats Style) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
          {[
            { metric: '90%', label: 'Time Saved', sub: 'On manual schema mappings' },
            { metric: '10,000+', label: 'Engineers Upskilled', sub: 'Through Moss Tech tracks' },
            { metric: '99.99%', label: 'Target SLA', sub: 'Enterprise uptime availability' },
            { metric: 'Zero', label: 'Data Loss', sub: 'Deterministic verification pipeline' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-4">
              <div className="font-['Poppins'] font-bold text-3xl sm:text-4xl text-[#1b95cd] mb-1">
                {stat.metric}
              </div>
              <div className="font-['Poppins'] font-semibold text-sm text-[#0d2335]">
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
