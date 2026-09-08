import { useState } from 'react'
import heroNeuralCore from '../assets/hero-neural-core.png'
import heroAbstractMesh from '../assets/hero-abstract-mesh.png'

interface HeroProps {
  onOpenDemo?: (productIndex: number) => void
}

export default function Hero({ onOpenDemo }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision'>('mission')

  const handleOpen = (index: number = 0) => {
    if (onOpenDemo) {
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
          
          {/* Left Column: Hero Copy (Original HotelKey Style) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-20">
            {/* Top Category Label */}
            <p className="text-[#1b95cd] font-['Poppins'] font-semibold text-sm sm:text-base tracking-wide mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1b95cd] inline-block pulse-blue" />
              Simple. Intelligent. Scalable.
            </p>

            {/* Main Headline */}
            <h1 className="font-['Poppins'] font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] text-[#0d2335] tracking-tight leading-[1.15] mb-6">
              Transforming Enterprise Technology with a Seamless, AI-Powered Ecosystem.
            </h1>

            {/* Subtext */}
            <p className="font-['Inter'] text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Empowering organizations to automate complex data migrations, upskill engineering workforces, and build the future of multimodal content intelligence.
            </p>

            {/* Trust Markers Bar */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200/80 w-full text-xs font-['Inter'] text-slate-500">
              <div className="flex items-center gap-1.5 font-medium">
                <span className="text-[#1b95cd] font-bold">✓</span>
                <span>SOC2 Type II Ready</span>
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
                    Company Direction
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
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-['Poppins'] font-medium transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      activeTab === tab.id
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
                      Empowering Global Enterprises & Builders Through Transformative Technology
                    </p>
                    <p className="font-['Inter'] text-xs text-slate-600 leading-relaxed">
                      To engineer high-velocity, intelligent digital infrastructure and upskill the engineering workforce—accelerating innovation with zero downtime and extreme rigor.
                    </p>
                  </div>

                  {/* 4 Pillars Bento Grid */}
                  <div className="grid grid-cols-2 gap-2.5 font-['Poppins']">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#0d2335] mb-1">
                        <span>⚡</span>
                        <span>Autonomous AI</span>
                      </div>
                      <p className="text-[11px] text-slate-500 font-['Inter'] leading-tight">
                        Eliminating repetitive engineering friction.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#0d2335] mb-1">
                        <span>🎓</span>
                        <span>Workforce Enablement</span>
                      </div>
                      <p className="text-[11px] text-slate-500 font-['Inter'] leading-tight">
                        10,000+ engineers trained in modern tech.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#0d2335] mb-1">
                        <span>🛡️</span>
                        <span>Zero-Trust Security</span>
                      </div>
                      <p className="text-[11px] text-slate-500 font-['Inter'] leading-tight">
                        Bank-grade cryptographic data safety.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#0d2335] mb-1">
                        <span>🚀</span>
                        <span>Continuous Velocity</span>
                      </div>
                      <p className="text-[11px] text-slate-500 font-['Inter'] leading-tight">
                        Micro-latency scale & 99.99% uptime.
                      </p>
                    </div>
                  </div>

                  {/* Live Counter Footer */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-['Poppins']">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1b95cd]" />
                      <span>Active Worldwide Reach</span>
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
                      Pioneering the Next Era of Autonomous Enterprise Intelligence & Media
                    </p>
                    <p className="font-['Inter'] text-xs text-slate-600 leading-relaxed">
                      A future where autonomous AI agents, resilient multi-cloud architectures, and creative media converge into a unified, self-healing digital ecosystem.
                    </p>
                  </div>

                  {/* 4 Pillars Bento Grid */}
                  <div className="grid grid-cols-2 gap-2.5 font-['Poppins']">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#0d2335] mb-1">
                        <span>🌐</span>
                        <span>Sovereign AI</span>
                      </div>
                      <p className="text-[11px] text-slate-500 font-['Inter'] leading-tight">
                        Transparent & controllable agentic systems.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#0d2335] mb-1">
                        <span>🌍</span>
                        <span>50k+ Alumni Network</span>
                      </div>
                      <p className="text-[11px] text-slate-500 font-['Inter'] leading-tight">
                        Global elite engineers leading tech.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#0d2335] mb-1">
                        <span>🔄</span>
                        <span>Self-Healing Infra</span>
                      </div>
                      <p className="text-[11px] text-slate-500 font-['Inter'] leading-tight">
                        Autonomous telemetry preventing downtime.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#0d2335] mb-1">
                        <span>✦</span>
                        <span>Creative Media</span>
                      </div>
                      <p className="text-[11px] text-slate-500 font-['Inter'] leading-tight">
                        Multimodal content engines at scale.
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
