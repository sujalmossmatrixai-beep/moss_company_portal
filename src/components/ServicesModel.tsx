import { useState } from 'react'

export default function ServicesModel() {
  const [activeService, setActiveService] = useState<number>(0)

  const services = [
    {
      id: 0,
      badge: 'CUSTOM CLIENT PROJECTS',
      title: 'We Build Custom Products & Solutions',
      subtitle: 'From Business Requirement to Scalable Production',
      desc: 'Have a project or unique business requirement? Our elite engineering team takes your vision from discovery, technical scoping, and system architecture all the way to a robust, production-grade deployment. We engineer modern AI platforms, high-throughput backend microservices, distributed data systems, and responsive web applications.',
      features: [
        'End-to-end custom software & product engineering',
        'Agentic AI, LLMs & intelligent automation workflows',
        'Cloud-native microservices (AWS, Azure, GCP & Kubernetes)',
        'Legacy system modernization & complex database migrations',
        'Rigorous automated testing, security audits & zero-downtime CI/CD',
      ],
      ctaText: 'Start a Custom Project',
      ctaType: 'build',
      icon: (
        <svg className="w-6 h-6 text-[#1b95cd]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: 1,
      badge: 'TURNKEY PRODUCTS & LICENSING',
      title: 'We Build & Sell Ready-to-Deploy Solutions',
      subtitle: 'Battle-Tested Software Products Ready for Your Business',
      desc: 'Looking for proven software to solve immediate business bottlenecks? We develop high-impact, proprietary solutions tailored to market demands and license them directly to enterprises. Accelerate your roadmap with off-the-shelf software or let us customize any module to fit your exact operational workflows.',
      features: [
        'Moss AI Mapper: Autonomous schema migration & data mapping engine',
        'Moss Tech Academy: Enterprise technical upskilling & training platform',
        'Moss Media: Multimodal AI content intelligence & distribution studio',
        'White-label options with customized branding & domain configurations',
        'Flexible licensing, dedicated hosting, or on-premise deployments',
      ],
      ctaText: 'Buy / License a Solution',
      ctaType: 'buy',
      icon: (
        <svg className="w-6 h-6 text-[#1b95cd]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
    {
      id: 2,
      badge: '24/7 MANAGED SERVICES',
      title: 'Dedicated Enterprise Support & Maintenance',
      subtitle: 'Reliable SLAs, Monitoring, Upgrades & Continuous Evolution',
      desc: 'We do not just deliver software and walk away. For both custom-built client projects and our ready-to-deploy products, we provide comprehensive 24/7 technical support, proactive health monitoring, security patches, performance optimizations, and ongoing feature enhancements.',
      features: [
        'Guaranteed 99.99% availability & rapid incident response SLAs',
        '24/7 dedicated engineering support & technical account managers',
        'Continuous performance tuning, database optimization & scaling',
        'Regular security patching, vulnerability scans & compliance checks',
        'Continuous feature upgrades & roadmap alignment',
      ],
      ctaText: 'Contact Support Team',
      ctaType: 'support',
      icon: (
        <svg className="w-6 h-6 text-[#1b95cd]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ]

  const handleCtaClick = (type: string) => {
    const contactEl = document.getElementById('contact')
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="py-14 lg:py-16 bg-[#f8f9fa] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-['Poppins'] font-bold text-[#1b95cd] bg-blue-50 border border-blue-100 mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#1b95cd] animate-pulse" />
            HOW WE PARTNER WITH ENTERPRISES
          </div>
          <h2 className="font-['Poppins'] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0d2335] tracking-tight mb-3">
            We Build Custom Projects, Deliver Turnkey Solutions & Provide 24/7 Support
          </h2>
          <p className="font-['Inter'] text-base text-slate-600 leading-relaxed">
            Whether you need an engineering partner to bring a complex custom project to life, want to buy and license a ready-made solution, or need ongoing enterprise support — our team is here for you.
          </p>
        </div>

        {/* 3 Core Offerings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-0">
          {services.map((service, index) => {
            const isHighlighted = activeService === index
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveService(index)}
                className={`rounded-3xl p-8 bg-white border transition-all duration-300 flex flex-col justify-between relative ${
                  isHighlighted
                    ? 'border-[#1b95cd] shadow-[0_12px_35px_rgba(27,149,205,0.12)] -translate-y-1.5 ring-1 ring-[#1b95cd]/30'
                    : 'border-slate-200 shadow-sm hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center p-3">
                      {service.icon}
                    </div>
                    <span className="font-['Poppins'] text-[11px] font-bold text-[#1b95cd] uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50/80 border border-blue-100">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="font-['Poppins'] font-bold text-xl text-[#0d2335] mb-1.5 leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-['Poppins'] text-xs font-semibold text-[#1b95cd] mb-4">
                    {service.subtitle}
                  </p>

                  <p className="font-['Inter'] text-sm text-slate-600 leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-2.5 mb-8 pt-4 border-t border-slate-100">
                    <div className="font-['Poppins'] text-xs font-bold text-[#0d2335] uppercase tracking-wide">
                      What's Included:
                    </div>
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <svg className="w-4 h-4 text-[#1b95cd] shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="font-['Inter'] text-xs text-slate-700 leading-normal">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCtaClick(service.ctaType)}
                  className={`w-full py-3 px-4 rounded-xl font-['Poppins'] font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                    isHighlighted
                      ? 'btn-primary-blue shadow-md'
                      : 'bg-slate-50 text-[#0d2335] border border-slate-200 hover:bg-blue-50 hover:text-[#1b95cd] hover:border-blue-200'
                  }`}
                >
                  <span>{service.ctaText}</span>
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
