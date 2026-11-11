import { useState } from 'react'

export default function ServicesModel() {
  const [activeService, setActiveService] = useState<number>(0)

  const services = [
    {
      id: 0,
      badge: 'MOSS TECH CUSTOM SOLUTIONS',
      title: 'Moss Tech: Build Your Custom Solution',
      subtitle: 'From Business Requirement to Production-Grade Custom Software & Agents',
      desc: 'Need tailored software or autonomous AI agents for your business? Moss Tech partners directly with your team from discovery, system scoping, and API integration to build your custom solution and deploy it into production.',
      features: [
        'End-to-end custom software & product engineering built to your specs',
        'Custom autonomous AI agent swarms tailored to client business logic',
        'Deterministic tool execution, API connectors & transactional sandboxes',
        'Private VPC deployment inside your cloud (AWS, Azure, GCP & On-Prem)',
        'Rigorous automated testing, security audits & zero-downtime CI/CD',
      ],
      ctaText: 'Build Your Custom Solution',
      ctaType: 'build',
      icon: (
        <svg className="w-5 h-5 text-[#1b95cd]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: 1,
      badge: 'TURNKEY PLATFORMS & LICENSING',
      title: 'Turnkey Software & Hospital Ecosystem',
      subtitle: 'Battle-Tested Software Platforms Ready for Your Business',
      desc: 'Looking for proven software to solve immediate business bottlenecks? We develop high-impact, proprietary solutions tailored to market demands and license them directly to enterprises and hospital networks.',
      features: [
        'Moss Migration: Autonomous schema migration & cross-database sync engine',
        'Moss Med AI: Complete hospital ecosystem package with EHR interoperability',
        'White-label options with customized branding & domain configurations',
        'Air-gapped hospital deployments, dedicated VPC hosting, or managed SaaS',
        '100% HIPAA, HITECH & SOC2 Type II compliant with Zero Data Retention',
      ],
      ctaText: 'Buy / License a Solution',
      ctaType: 'buy',
      icon: (
        <svg className="w-5 h-5 text-[#1b95cd]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
    {
      id: 2,
      badge: 'INDUSTRY-GRADE TRAINING',
      title: 'Moss Academy Engineering Training',
      subtitle: 'Production-Led Technical Mastery & Corporate Upskilling',
      desc: 'Bridge the gap between conceptual theory and enterprise-scale production. We deliver industry-grade masterclasses, corporate engineering bootcamps, and specialized tracks in Agentic AI, Databricks Big Data, and Cloud DevOps.',
      features: [
        'Agentic AI, DSPy, RAG & LLMOps production engineering masterclasses',
        'Databricks, PySpark, Snowflake & modern Lakehouse architecture at scale',
        'AWS, Kubernetes, Terraform & enterprise CI/CD deployment tracks',
        'Custom corporate cohorts tailored to your engineering roadmaps',
        'Direct mentorship from top Silicon Valley & Bangalore principal architects',
      ],
      ctaText: 'Enroll in Industry Training',
      ctaType: 'academy',
      icon: (
        <svg className="w-5 h-5 text-[#1b95cd]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v7" />
        </svg>
      ),
    },
    {
      id: 3,
      badge: '24/7 MANAGED SERVICES',
      title: 'Dedicated Enterprise Support & Maintenance',
      subtitle: 'Reliable SLAs, Monitoring, Upgrades & Continuous Evolution',
      desc: 'We do not just deliver software and walk away. For custom-built client projects, turnkey products, and corporate deployments, we provide comprehensive 24/7 technical support, health monitoring, security patches, and optimizations.',
      features: [
        'Guaranteed 99.99% availability & rapid incident response SLAs',
        '24/7 dedicated engineering support & technical account managers',
        'Continuous performance tuning, database optimization & scaling',
        'Regular security patching, vulnerability scans & compliance checks',
        'Continuous feature upgrades & architectural roadmap alignment',
      ],
      ctaText: 'Contact Support Team',
      ctaType: 'support',
      icon: (
        <svg className="w-5 h-5 text-[#1b95cd]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-['Poppins'] font-bold text-[#1b95cd] bg-blue-50 border border-blue-100 mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#1b95cd] animate-pulse" />
            HOW MOSS NEXUS PARTNERS WITH CLIENTS
          </div>
          <h2 className="font-['Poppins'] font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0d2335] tracking-tight mb-3">
            Custom Client Agents, Turnkey Ecosystem, Industry-Grade Training & 24/7 SLAs
          </h2>
          <p className="font-['Inter'] text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Whether you want Moss Tech to build custom solutions and autonomous agents for your business, license our turnkey platforms (Moss Migration & Moss Med AI), upskill your engineering teams with industry-grade training via Moss Academy, or need ongoing managed operations — our team delivers.
          </p>
        </div>

        {/* 4 Core Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-0">
          {services.map((service, index) => {
            const isHighlighted = activeService === index
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveService(index)}
                className={`rounded-3xl p-6 sm:p-7 bg-white border transition-all duration-300 flex flex-col justify-between relative ${
                  isHighlighted
                    ? 'border-[#1b95cd] shadow-[0_12px_35px_rgba(27,149,205,0.12)] -translate-y-1.5 ring-1 ring-[#1b95cd]/30'
                    : 'border-slate-200 shadow-sm hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center p-2.5">
                      {service.icon}
                    </div>
                    <span className="font-['Poppins'] text-[10px] font-bold text-[#1b95cd] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50/80 border border-blue-100">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="font-['Poppins'] font-bold text-lg sm:text-xl text-[#0d2335] mb-1 leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-['Poppins'] text-xs font-semibold text-[#1b95cd] mb-3">
                    {service.subtitle}
                  </p>

                  <p className="font-['Inter'] text-xs text-slate-600 leading-relaxed mb-5">
                    {service.desc}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-2 mb-6 pt-3.5 border-t border-slate-100">
                    <div className="font-['Poppins'] text-[11px] font-bold text-[#0d2335] uppercase tracking-wide">
                      What's Included:
                    </div>
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <svg className="w-3.5 h-3.5 text-[#1b95cd] shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="font-['Inter'] text-xs text-slate-700 leading-tight">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCtaClick(service.ctaType)}
                  className={`w-full py-3 px-3.5 rounded-xl font-['Poppins'] font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    isHighlighted
                      ? 'btn-primary-blue shadow-md'
                      : 'bg-slate-50 text-[#0d2335] border border-slate-200 hover:bg-blue-50 hover:text-[#1b95cd] hover:border-blue-200'
                  }`}
                >
                  <span>{service.ctaText}</span>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
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
