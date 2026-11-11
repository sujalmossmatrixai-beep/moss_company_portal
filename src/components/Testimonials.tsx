export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'Moss Migration reduced our cross-cloud database migration timeline from an estimated 4 months of manual mapping down to under 8 days. The automated schema drift detection saved us hundreds of engineering hours.',
      author: 'Vikram Raghavan',
      role: 'Principal Data Architect',
      company: 'Global Fintech Cloud Platform',
      badge: 'Moss Migration',
      avatar: 'VR',
    },
    {
      quote:
        'Integrating the Moss Med AI hospital package cut our clinical documentation overhead by 60% while providing accurate ICD-10 coding and real-time drug contraindication checks. The Zero Data Retention architecture made HIPAA compliance completely effortless.',
      author: 'Dr. Rebecca Vance, MD',
      role: 'Chief Medical Information Officer',
      company: 'MetroHealth System',
      badge: 'Moss Med AI',
      avatar: 'RV',
    },
    {
      quote:
        'Moss Tech designed and deployed bespoke autonomous agent swarms directly into our private AWS VPC. The custom agents now handle thousands of daily client compliance and reconciliation workflows with zero downtime.',
      author: 'James Thornton',
      role: 'CTO & Head of Engineering',
      company: 'Apex Digital Capital',
      badge: 'Custom Client Agents',
      avatar: 'JT',
    },
    {
      quote:
        'The Moss Academy corporate training delivered the most rigorous Agentic AI and Databricks curriculum our engineers have experienced. Our team went from concepts to deploying production RAG systems in 4 weeks.',
      author: 'Ananya Deshmukh',
      role: 'VP of Engineering',
      company: 'Global SaaS Enterprise',
      badge: 'Moss Academy',
      avatar: 'AD',
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
            Trusted by Enterprise & Healthcare Leaders
          </h2>
          <p className="font-['Inter'] text-base text-slate-600 leading-relaxed">
            Real feedback from chief architects, hospital CMIOs, and engineering leaders scaling production workloads with Moss Nexus.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group hover:translate-y-[-3px]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-['Poppins'] font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#1b95cd] border border-blue-100">
                    {item.badge}
                  </span>
                  <div className="flex gap-0.5 text-amber-400 text-xs">
                    {'★'.repeat(5)}
                  </div>
                </div>

                <p className="font-['Inter'] text-xs text-slate-700 leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3.5 border-t border-slate-100">
                <div className="w-9 h-9 rounded-full bg-blue-100 text-[#1b95cd] flex items-center justify-center font-['Poppins'] font-bold text-xs border border-blue-200 shrink-0">
                  {item.avatar}
                </div>
                <div className="min-w-0">
                  <h4 className="font-['Poppins'] font-bold text-xs text-[#0d2335] truncate">
                    {item.author}
                  </h4>
                  <p className="font-['Inter'] text-[11px] text-slate-400 truncate">
                    {item.role} · {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Metrics Banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
          {[
            { metric: '90%', label: 'Time Saved', sub: 'On database migrations with Moss Migration' },
            { metric: '99.8%', label: 'Clinical Precision', sub: 'On hospital EHR with Moss Med AI' },
            { metric: '10,000+', label: 'Engineers Upskilled', sub: 'Through Moss Academy cohorts' },
            { metric: '99.99%', label: 'Target SLA', sub: 'Enterprise uptime availability' },
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
