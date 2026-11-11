import { useState } from 'react'
import heroNeuralCore from '../assets/hero-neural-core.png'
import heroAbstractMesh from '../assets/hero-abstract-mesh.png'

interface HeroProps {
  onOpenDemo?: (productIndex: number) => void
  onOpenExplore?: (productType: 'med-ai' | 'mapper' | 'academy' | 'solutions') => void
}

export default function Hero({ onOpenDemo, onOpenExplore }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision'>('mission')

  const handleOpen = (index: number = 0) => {
    if (onOpenExplore) {
      onOpenExplore('med-ai')
    } else if (onOpenDemo) {
      onOpenDemo(index)
    } else {
      const el = document.getElementById('products')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative bg-gradient-to-b from-[#f8fafc] via-[#fcfdff] to-white pt-28 pb-12 lg:pt-32 lg:pb-14 border-b border-slate-200/60 overflow-hidden">

      {/* Seamless Integrated Ambient Tech Background Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Soft Radial Ambient Glows */}
        <div className="absolute top-1/4 right-[5%] w-[680px] h-[580px] bg-sky-200/35 rounded-full blur-3xl -translate-y-1/4" />
        <div className="absolute top-10 left-[5%] w-[480px] h-[380px] bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/3 w-[450px] h-[350px] bg-indigo-100/20 rounded-full blur-3xl" />

        {/* Ambient Subtle Grid */}
        <div className="absolute inset-0 grid-background-light opacity-35" />

        {/* Seamless Merged Fluid Neural Flow Graphic across right side */}
        <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[65%] max-w-[850px] h-[90%] max-h-[680px] flex items-center justify-end">
          <img
            src={heroNeuralCore}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-contain object-right mask-hero-ambient mix-blend-multiply opacity-80"
          />
        </div>

        {/* Subtle Ambient Wave Stream Overlay */}
        <div className="absolute right-0 bottom-0 w-[55%] h-[50%] max-h-[350px] flex items-end justify-end opacity-40">
          <img
            src={heroAbstractMesh}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-right mask-hero-ambient mix-blend-multiply"
          />
        </div>

        {/* Soft Light Overlay on the left side to guarantee flawless text contrast */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/90 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-20">
            {/* Top Category Label */}
            <p className="text-[#1b95cd] font-['Poppins'] font-semibold text-xs sm:text-xs tracking-wide mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1b95cd] inline-block pulse-blue" />
              Moss Nexus · Unified Enterprise & Healthcare Ecosystem
            </p>

            {/* Main Headline */}
            <h1 className="font-['Poppins'] font-bold text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] text-[#0d2335] tracking-tight leading-snug mb-5">
              The Unified Ecosystem for Database Migration, Hospital AI, Custom Agents & Engineering Mastery.
            </h1>

            {/* Subtext */}
            <p className="font-['Inter'] text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              <strong>Moss Nexus</strong> orchestrates mission-critical technology: autonomous database migrations with <strong>Moss Migration</strong>, a complete hospital ecosystem package with <strong>Moss Med AI</strong>, bespoke engineering with <strong>Moss Tech (Build Your Custom Solution)</strong>, and workforce excellence through <strong>Moss Academy</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                type="button"
                onClick={() => handleOpen(0)}
                className="btn-primary-blue inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-['Poppins'] font-semibold text-sm shadow-md cursor-pointer"
              >
                <span>Explore Moss Nexus Solutions</span>
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault()
                  const el = document.getElementById('services')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-secondary-outline px-6 py-3.5 rounded-xl font-['Poppins'] font-medium text-sm text-slate-700 cursor-pointer hover:border-[#1b95cd] hover:text-[#1b95cd]"
              >
                How We Partner
              </a>
            </div>

            {/* Trust Markers Bar */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200/80 w-full text-xs font-['Inter'] text-slate-500">
              <div className="flex items-center gap-1.5 font-medium">
                <span className="text-[#1b95cd] font-bold">✓</span>
                <span>HIPAA & SOC2 Type II</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <span className="text-[#1b95cd] font-bold">✓</span>
                <span>Zero Data Retention</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <span className="text-[#1b95cd] font-bold">✓</span>
                <span>99.99% Enterprise SLA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Mission & Vision Glass Card */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end z-20">

            {/* Main Interactive Mission & Vision Glass Card */}
            <div className="w-full max-w-[480px] bg-white/95 backdrop-blur-xl rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-[0_12px_40px_rgba(13,35,53,0.08)]">

              {/* Card Header with Tab Switcher */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1b95cd] animate-pulse" />
                  <span className="font-['Poppins'] text-xs font-bold text-[#0d2335] uppercase tracking-wider">
                    Moss Nexus Direction
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-[#1b95cd] font-['Inter'] px-2 py-0.5 rounded-md bg-blue-50 border border-blue-100">
                  Mission & Vision
                </span>
              </div>

              {/* Mission vs Vision Switcher Tabs */}
              <div className="flex bg-slate-100/90 p-1 rounded-xl mb-5 gap-1">
                {[
                  { id: 'mission', label: 'Our Mission', icon: '🎯' },
                  { id: 'vision', label: 'Our Vision', icon: '🔭' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-['Poppins'] font-medium transition-all flex items-center justify-center gap-2 cursor-pointer ${activeTab === tab.id
                        ? 'bg-white text-[#1b95cd] font-semibold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                      }`}
                  >
                    <span>{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Dynamic Content Display */}
              {activeTab === 'mission' && (
                <div className="space-y-4 animate-in fade-in duration-200 text-left">
                  {/* Mission Banner */}
                  <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100">
                    <span className="text-[10px] font-['Poppins'] font-bold text-[#1b95cd] uppercase tracking-wider block mb-1">
                      Purpose & Commitment
                    </span>
                    <p className="font-['Poppins'] font-bold text-sm text-[#0d2335] leading-snug mb-1.5">
                      Empowering Global Enterprises & Healthcare Through 4 Synergistic Pillars
                    </p>
                    <p className="font-['Inter'] text-xs text-slate-600 leading-relaxed">
                      To unify autonomous database migration, complete hospital AI ecosystems, custom client agent engineering, and high-impact engineering education.
                    </p>
                  </div>

                  {/* 4 Pillars Bento Grid */}
                  <div className="grid grid-cols-2 gap-2.5 font-['Poppins']">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#0d2335] mb-1">
                        <span>⚡</span>
                        <span>Moss Migration</span>
                      </div>
                      <p className="text-[11px] text-slate-500 font-['Inter'] leading-tight">
                        Zero-downtime database engine.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#0d2335] mb-1">
                        <span>🩺</span>
                        <span>Moss Med AI</span>
                      </div>
                      <p className="text-[11px] text-slate-500 font-['Inter'] leading-tight">
                        5-portal hospital ecosystem.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#0d2335] mb-1">
                        <span>🛠️</span>
                        <span>Moss Tech</span>
                      </div>
                      <p className="text-[11px] text-slate-500 font-['Inter'] leading-tight">
                        Build your custom solution.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#0d2335] mb-1">
                        <span>🎓</span>
                        <span>Moss Academy</span>
                      </div>
                      <p className="text-[11px] text-slate-500 font-['Inter'] leading-tight">
                        10,000+ engineers upskilled.
                      </p>
                    </div>
                  </div>

                  {/* Live Counter Footer */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-['Poppins']">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1b95cd]" />
                      <span>Enterprise Multi-Region Reach</span>
                    </span>
                    <a
                      href="#services"
                      onClick={(e) => {
                        e.preventDefault()
                        const el = document.getElementById('services')
                        if (el) el.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="text-[#1b95cd] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      How We Partner →
                    </a>
                  </div>
                </div>
              )}

              {activeTab === 'vision' && (
                <div className="space-y-4 animate-in fade-in duration-200 text-left">
                  {/* Vision Banner */}
                  <div className="p-3.5 rounded-xl bg-sky-50/70 border border-sky-100">
                    <span className="text-[10px] font-['Poppins'] font-bold text-[#1b95cd] uppercase tracking-wider block mb-1">
                      Future Horizon
                    </span>
                    <p className="font-['Poppins'] font-bold text-sm text-[#0d2335] leading-snug mb-1.5">
                      Pioneering Autonomous Systems, Connected Health & Engineering Mastery
                    </p>
                    <p className="font-['Inter'] text-xs text-slate-600 leading-relaxed">
                      A future where autonomous database infrastructure, connected hospital care, and bespoke enterprise AI agents operate seamlessly alongside top engineering talent.
                    </p>
                  </div>

                  {/* 4 Pillars Bento Grid */}
                  <div className="grid grid-cols-2 gap-2.5 font-['Poppins']">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#0d2335] mb-1">
                        <span>🌐</span>
                        <span>Sovereign Data</span>
                      </div>
                      <p className="text-[11px] text-slate-500 font-['Inter'] leading-tight">
                        Zero data retention across cloud.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#0d2335] mb-1">
                        <span>🏥</span>
                        <span>Connected Health</span>
                      </div>
                      <p className="text-[11px] text-slate-500 font-['Inter'] leading-tight">
                        FHIR R4 hospital ecosystem.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#0d2335] mb-1">
                        <span>🤝</span>
                        <span>Autonomous Swarms</span>
                      </div>
                      <p className="text-[11px] text-slate-500 font-['Inter'] leading-tight">
                        Client workflows on autopilot.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#0d2335] mb-1">
                        <span>🌍</span>
                        <span>Global Academy</span>
                      </div>
                      <p className="text-[11px] text-slate-500 font-['Inter'] leading-tight">
                        Alumni leading Fortune 500 tech.
                      </p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-['Poppins']">
                    <span className="text-slate-500">Target Milestones: 2026-2030</span>
                    <a
                      href="#products"
                      onClick={(e) => {
                        e.preventDefault()
                        const el = document.getElementById('products')
                        if (el) el.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="text-[#1b95cd] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      Explore Solutions →
                    </a>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
