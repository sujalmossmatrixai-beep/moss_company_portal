import { useState } from 'react'
import Breadcrumbs from '../navigation/Breadcrumbs'
import StickyProductNav from '../navigation/StickyProductNav'
import ScreenshotGallery from '../media/ScreenshotGallery'
import { MOSS_AI_MAPPER_DATA } from '../../data/productData'

interface MossAIMapperPageProps {
  onNavigate: (path: string) => void
  onRequestDemo: () => void
}

export default function MossAIMapperPage({ onNavigate, onRequestDemo }: MossAIMapperPageProps) {
  const [activeStageIndex, setActiveStageIndex] = useState(0)
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'modules' | 'sandbox'>('modules')

  // Live simulation state
  const [isSimulating, setIsSimulating] = useState(false)
  const [confidence, setConfidence] = useState(99.4)

  const activeStage = MOSS_AI_MAPPER_DATA.workflowStages[activeStageIndex] || MOSS_AI_MAPPER_DATA.workflowStages[0]
  const activeModule = selectedModuleId
    ? MOSS_AI_MAPPER_DATA.modules.find((m) => m.id === selectedModuleId) || MOSS_AI_MAPPER_DATA.modules[0]
    : null

  const navSections = [
    { id: 'overview', label: 'Overview' },
    { id: 'screenshots', label: 'Screenshots' },
    { id: 'modules', label: 'Migration Modules' },
    { id: 'workflow', label: '8-Stage Workflow' },
    { id: 'sandbox', label: 'Live Neural Sandbox' },
  ]

  const mappedSample = [
    { source: 'customer_id (BIGINT)', target: 'user_uuid (UUID)', confidence: '99.8%', transform: 'uuid_generate_v5(NAMESPACE_OID, customer_id::text)' },
    { source: 'billing_address (JSON)', target: 'shipping_address_struct (OBJECT)', confidence: '98.7%', transform: 'PARSE_JSON(billing_address)::OBJECT' },
    { source: 'created_at (TIMESTAMP)', target: 'signup_epoch_utc (DATETIME)', confidence: '100.0%', transform: 'CONVERT_TIMEZONE(\'UTC\', created_at)' },
    { source: 'account_balance (DECIMAL)', target: 'wallet_credits (NUMERIC)', confidence: '99.5%', transform: 'CAST(account_balance AS NUMERIC(18,4))' },
  ]

  const handleSimulate = () => {
    setIsSimulating(true)
    setTimeout(() => {
      setIsSimulating(false)
      setConfidence(99.8)
    }, 800)
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#0d2335] pt-24 pb-20 selection:bg-sky-100 selection:text-[#1b95cd] text-left">
      <StickyProductNav
        sections={navSections}
        ctaLabel="Request Migration Demo"
        onCtaClick={onRequestDemo}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            { label: 'Products', onClick: () => onNavigate('/#products') },
            { label: 'Moss AI Mapper' },
          ]}
        />

        {/* ─────────────────────────────────────────────────────────────
            SECTION 1: Product Introduction
            ───────────────────────────────────────────────────────────── */}
        <section id="overview" className="py-8 sm:py-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1b95cd] border border-blue-200 text-xs font-['Poppins'] font-semibold mb-3">
            <span>⚡</span>
            <span>Autonomous Database Migration Engine</span>
          </div>

          <h1 className="font-['Poppins'] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0d2335] tracking-tight leading-tight max-w-4xl mb-5">
            Moss AI Mapper – Intelligent Schema Mapping and Data Migration.
          </h1>

          <p className="font-['Inter'] text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mb-8">
            {MOSS_AI_MAPPER_DATA.description}
          </p>

          <div className="flex flex-wrap items-center gap-3.5 mb-12">
            <a
              href="https://www.moss-ai-mapper.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-blue py-3 px-6 rounded-xl font-['Poppins'] font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <span>Launch Live Moss AI Mapper</span>
              <span>↗</span>
            </a>
            <button
              type="button"
              onClick={onRequestDemo}
              className="btn-secondary-outline py-3 px-6 rounded-xl font-['Poppins'] font-semibold text-xs sm:text-sm text-slate-700 cursor-pointer"
            >
              Request Enterprise PoC
            </button>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            {MOSS_AI_MAPPER_DATA.heroStats.map((stat, idx) => (
              <div key={idx} className="border-l-2 border-[#1b95cd] pl-3.5">
                <div className="text-xl sm:text-2xl font-['Poppins'] font-bold text-[#0d2335]">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 font-['Inter'] mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION 2: Application Screenshots
            ───────────────────────────────────────────────────────────── */}
        <section id="screenshots" className="py-12 border-t border-slate-200/80">
          <ScreenshotGallery
            screenshots={MOSS_AI_MAPPER_DATA.screenshots}
            title="Moss AI Mapper Workspace Screenshots"
            subtitle="Side-by-side neural mapping interface, entity-relationship topology, and dry-run telemetry."
          />
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION 3: Explore Migration Modules (6 Modules)
            ───────────────────────────────────────────────────────────── */}
        <section id="modules" className="py-12 border-t border-slate-200/80">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#1b95cd] font-['Poppins'] font-semibold text-xs tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Modular Architecture
            </span>
            <h2 className="font-['Poppins'] font-bold text-2.5xl sm:text-3xl text-[#0d2335] tracking-tight mt-2.5 mb-2">
              Explore Migration Modules
            </h2>
            <p className="font-['Inter'] text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every phase of database migration—from discovery to live validation—is powered by specialized autonomous modules.
            </p>
          </div>

          {/* 6 Module Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {MOSS_AI_MAPPER_DATA.modules.map((mod) => (
              <div
                key={mod.id}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-[#1b95cd]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#1b95cd] flex items-center justify-center text-2xl font-bold shadow-2xs group-hover:scale-105 transition-transform">
                      {mod.icon}
                    </div>
                    <span className="text-[10px] font-['Poppins'] font-bold px-2.5 py-0.5 rounded-full bg-slate-50 text-slate-500 border border-slate-200">
                      Module
                    </span>
                  </div>

                  <h3 className="font-['Poppins'] font-bold text-lg text-[#0d2335] mb-2 group-hover:text-[#1b95cd] transition-colors">
                    {mod.name}
                  </h3>

                  <p className="font-['Inter'] text-xs text-slate-600 leading-relaxed mb-4">
                    {mod.description}
                  </p>

                  <div className="space-y-1.5 mb-5">
                    {mod.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs font-['Inter'] text-slate-700">
                        <span className="text-[#1b95cd] font-bold shrink-0 mt-0.5">✓</span>
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedModuleId(mod.id)}
                    className="text-xs font-['Poppins'] font-semibold text-[#1b95cd] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inspect Module Workflow</span>
                    <span>→</span>
                  </button>
                  <span className="text-[10px] font-['Poppins'] text-slate-400">
                    SLA: 99.8%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal: Module Deep Dive when clicked */}
        {activeModule && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 text-left relative max-h-[90vh] overflow-y-auto">
              <button
                type="button"
                onClick={() => setSelectedModuleId(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors cursor-pointer text-sm"
              >
                ✕
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1b95cd] flex items-center justify-center text-3xl shrink-0 border border-blue-200">
                  {activeModule.icon}
                </div>
                <div>
                  <span className="text-[10px] font-['Poppins'] font-bold text-[#1b95cd] uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                    Module Exploration
                  </span>
                  <h3 className="font-['Poppins'] font-bold text-xl text-[#0d2335]">
                    {activeModule.name}
                  </h3>
                </div>
              </div>

              <p className="font-['Inter'] text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                {activeModule.description}
              </p>

              {/* Execution Workflow */}
              <div className="mb-5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <h4 className="font-['Poppins'] font-bold text-xs text-[#0d2335] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <span>🔄</span>
                  <span>Execution Workflow:</span>
                </h4>
                <ol className="space-y-1.5">
                  {activeModule.workflow.map((w, wIdx) => (
                    <li key={wIdx} className="flex items-center gap-2 text-xs font-['Inter'] text-slate-700">
                      <span className="w-4 h-4 rounded-full bg-blue-100 text-[#1b95cd] font-bold text-[10px] flex items-center justify-center shrink-0">
                        {wIdx + 1}
                      </span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="font-['Poppins'] font-bold text-xs text-[#0d2335] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span>🌟</span>
                  <span>Operational Benefits:</span>
                </h4>
                <div className="space-y-1.5">
                  {activeModule.benefits.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs font-['Inter'] text-emerald-800">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedModuleId(null)
                    onRequestDemo()
                  }}
                  className="flex-1 btn-primary-blue py-2.5 rounded-xl font-['Poppins'] font-semibold text-xs shadow-xs"
                >
                  Request Demo for {activeModule.name}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedModuleId(null)}
                  className="btn-secondary-outline py-2.5 px-4 rounded-xl font-['Poppins'] font-medium text-xs text-slate-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ─────────────────────────────────────────────────────────────
            SECTION 4: How Moss AI Mapper Works (8 Clickable Stages)
            ───────────────────────────────────────────────────────────── */}
        <section id="workflow" className="py-12 border-t border-slate-200/80">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#1b95cd] font-['Poppins'] font-semibold text-xs tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Interactive 8-Stage Process
            </span>
            <h2 className="font-['Poppins'] font-bold text-2.5xl sm:text-3xl text-[#0d2335] tracking-tight mt-2.5 mb-2">
              How Moss AI Mapper Works
            </h2>
            <p className="font-['Inter'] text-xs sm:text-sm text-slate-600 leading-relaxed">
              Click any stage in the migration lifecycle to learn more about its internal logic and validation checks.
            </p>
          </div>

          {/* Clickable 8-Stage Pipeline */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-8">
            {MOSS_AI_MAPPER_DATA.workflowStages.map((stage, idx) => (
              <button
                key={stage.step}
                type="button"
                onClick={() => setActiveStageIndex(idx)}
                className={`p-3 rounded-2xl text-center border transition-all cursor-pointer flex flex-col items-center justify-between min-h-[90px] ${
                  activeStageIndex === idx
                    ? 'bg-[#1b95cd] text-white border-[#1b95cd] shadow-md scale-102 ring-2 ring-[#1b95cd]/20'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50/30'
                }`}
              >
                <span className={`w-5 h-5 rounded-full text-[10px] font-['Poppins'] font-bold flex items-center justify-center mb-1 ${
                  activeStageIndex === idx ? 'bg-white text-[#1b95cd]' : 'bg-slate-100 text-slate-600'
                }`}>
                  {stage.step}
                </span>
                <span className="font-['Poppins'] font-bold text-[11px] leading-tight line-clamp-2">
                  {stage.title}
                </span>
                <span className={`text-[9px] mt-1 ${activeStageIndex === idx ? 'text-white/80' : 'text-slate-400'}`}>
                  Stage {stage.step}
                </span>
              </button>
            ))}
          </div>

          {/* Active Stage Detailed Box */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-200/90 shadow-sm flex flex-col sm:flex-row items-start justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#1b95cd] text-[10px] font-['Poppins'] font-bold">
                  Stage {activeStage.step} of 8
                </span>
                <h3 className="font-['Poppins'] font-bold text-xl sm:text-2xl text-[#0d2335]">
                  {activeStage.title}
                </h3>
              </div>
              <p className="font-['Poppins'] text-xs font-semibold text-[#1b95cd] mb-2">
                {activeStage.shortDesc}
              </p>
              <p className="font-['Inter'] text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeStage.detailedDesc}
              </p>
            </div>

            <div className="shrink-0 flex sm:flex-col gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setActiveStageIndex((prev) => (prev > 0 ? prev - 1 : 7))}
                className="btn-secondary-outline py-2 px-4 rounded-xl text-xs font-['Poppins'] font-medium"
              >
                ← Prev Stage
              </button>
              <button
                type="button"
                onClick={() => setActiveStageIndex((prev) => (prev < 7 ? prev + 1 : 0))}
                className="btn-primary-blue py-2 px-4 rounded-xl text-xs font-['Poppins'] font-medium"
              >
                Next Stage →
              </button>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION 5: Live Interactive Neural Sandbox
            ───────────────────────────────────────────────────────────── */}
        <section id="sandbox" className="py-12 border-t border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[#1b95cd] font-['Poppins'] font-semibold text-xs tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Interactive Engine
            </span>
            <h2 className="font-['Poppins'] font-bold text-2xl sm:text-3xl text-[#0d2335] tracking-tight mt-2">
              Live Schema Resolution Simulator
            </h2>
            <p className="font-['Inter'] text-xs sm:text-sm text-slate-500 mt-1">
              Experience how our neural mapper matches complex relational and JSON schemas in real time.
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-slate-800 gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-['Poppins'] text-xs sm:text-sm font-semibold text-white">
                  Source: Oracle 19c Enterprise → Target: Snowflake Modern Lakehouse
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-['JetBrains_Mono'] text-emerald-400">
                  Confidence: {confidence}%
                </span>
                <button
                  type="button"
                  onClick={handleSimulate}
                  disabled={isSimulating}
                  className="px-3.5 py-1.5 rounded-xl bg-[#1b95cd] hover:bg-[#1579b0] text-white text-xs font-['Poppins'] font-semibold transition-all cursor-pointer shadow-sm"
                >
                  {isSimulating ? 'Analyzing...' : '⚡ Re-Run Neural Match'}
                </button>
              </div>
            </div>

            <div className="space-y-3 font-['JetBrains_Mono'] text-xs mb-6">
              {mappedSample.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 flex flex-col md:flex-row md:items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sky-300 font-semibold">{item.source}</span>
                    <span className="text-slate-500">→</span>
                    <span className="text-emerald-300 font-semibold">{item.target}</span>
                  </div>

                  <div className="text-slate-400 text-[11px] truncate max-w-md">
                    <span className="text-purple-300 font-bold mr-1.5">formula:</span>
                    <code>{item.transform}</code>
                  </div>

                  <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded font-bold shrink-0 self-start md:self-auto">
                    {item.confidence}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/60 text-slate-400 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span>🔒 Zero-downtime Continuous Change Data Capture (CDC) streaming enabled.</span>
              <a
                href="https://www.moss-ai-mapper.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1b95cd] hover:underline font-['Poppins'] font-semibold"
              >
                Launch Full Mapping Canvas ↗
              </a>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION 6: CTA Banner
            ───────────────────────────────────────────────────────────── */}
        <section className="py-10 text-center">
          <div className="card-white-shadow rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-blue-50/80 via-white to-sky-50 border border-blue-200 text-center">
            <h2 className="font-['Poppins'] font-bold text-2.5xl sm:text-3xl text-[#0d2335] mb-3">
              Ready to Accelerate Your Enterprise Database Migration?
            </h2>
            <p className="font-['Inter'] text-xs sm:text-sm text-slate-600 max-w-lg mx-auto mb-6">
              Eliminate months of brittle spreadsheet mapping. Request an architecture review and custom dry-run benchmark.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={onRequestDemo}
                className="btn-primary-blue py-3.5 px-8 rounded-xl font-['Poppins'] font-semibold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                Schedule Migration PoC
              </button>
              <a
                href="https://www.moss-ai-mapper.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-outline py-3.5 px-6 rounded-xl font-['Poppins'] font-semibold text-sm text-slate-700"
              >
                Try Moss AI Mapper Free ↗
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

