import Breadcrumbs from '../navigation/Breadcrumbs'
import StickyProductNav from '../navigation/StickyProductNav'
import ScreenshotGallery from '../media/ScreenshotGallery'
import { MOSS_MED_AI_DATA } from '../../data/productData'

interface MossMedAIPageProps {
  onNavigate: (path: string) => void
  onRequestDemo: () => void
}

export default function MossMedAIPage({ onNavigate, onRequestDemo }: MossMedAIPageProps) {
  const navSections = [
    { id: 'overview', label: 'Overview' },
    { id: 'screenshots', label: 'Screenshots' },
    { id: 'portals', label: 'Three Portals' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'security', label: 'Security & HIPAA' },
  ]

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#0d2335] pt-24 pb-20 selection:bg-sky-100 selection:text-[#1b95cd]">
      {/* Sticky Product Sub-Navigation */}
      <StickyProductNav
        sections={navSections}
        ctaLabel="Request a Demo"
        onCtaClick={onRequestDemo}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: 'Products', onClick: () => onNavigate('/#products') },
            { label: 'Moss Med AI' },
          ]}
        />

        {/* ─────────────────────────────────────────────────────────────
            SECTION 1: Product Introduction
            ───────────────────────────────────────────────────────────── */}
        <section id="overview" className="py-8 sm:py-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-['Poppins'] font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Comprehensive Hospital & Clinical Ecosystem</span>
          </div>

          <h1 className="font-['Poppins'] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0d2335] tracking-tight leading-tight max-w-4xl mb-5">
            Moss Med AI – Connecting Healthcare Through Intelligent Technology.
          </h1>

          <p className="font-['Inter'] text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mb-8">
            Moss Med AI is a comprehensive healthcare management platform designed to simplify hospital operations, strengthen doctor-patient communication, and provide a unified digital healthcare experience. The platform connects patients, doctors, and hospital administrators through dedicated portals, allowing each user to access the tools and information relevant to their responsibilities.
          </p>

          <div className="flex flex-wrap items-center gap-3.5 mb-12">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('portals')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary-blue py-3 px-6 rounded-xl font-['Poppins'] font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Explore Portals</span>
              <span>↓</span>
            </button>
            <button
              type="button"
              onClick={onRequestDemo}
              className="btn-secondary-outline py-3 px-6 rounded-xl font-['Poppins'] font-semibold text-xs sm:text-sm text-slate-700 cursor-pointer hover:bg-slate-50 transition-all"
            >
              Request Demo
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            {MOSS_MED_AI_DATA.heroStats.map((stat, idx) => (
              <div key={idx} className="text-left border-l-2 border-emerald-500 pl-3.5">
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
            SECTION 2: Product Screenshots Gallery
            ───────────────────────────────────────────────────────────── */}
        <section id="screenshots" className="py-12 border-t border-slate-200/80">
          <ScreenshotGallery
            screenshots={MOSS_MED_AI_DATA.screenshots}
            title="Moss Med AI Workspace Screenshots"
            subtitle="Explore high-resolution previews of our connected healthcare workspace."
          />
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION 3: Explore Moss Med AI Portals
            ───────────────────────────────────────────────────────────── */}
        <section id="portals" className="py-12 border-t border-slate-200/80 text-left">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#1b95cd] font-['Poppins'] font-semibold text-xs tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Three Connected Experiences
            </span>
            <h2 className="font-['Poppins'] font-bold text-2.5xl sm:text-3xl lg:text-4xl text-[#0d2335] tracking-tight mt-2.5 mb-3">
              One Healthcare Platform. Three Connected Experiences.
            </h2>
            <p className="font-['Inter'] text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every participant in modern healthcare deserves a purpose-built workspace. Explore our dedicated portals below.
            </p>
          </div>

          {/* Three Large Portal Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {MOSS_MED_AI_DATA.portals.map((portal) => (
              <div
                key={portal.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${portal.bgLight} ${portal.textColor} flex items-center justify-center text-2xl font-bold shadow-2xs group-hover:scale-105 transition-transform`}>
                      {portal.icon}
                    </div>
                    <span className={`text-[10px] font-['Poppins'] font-bold px-2.5 py-0.5 rounded-full ${portal.bgLight} ${portal.textColor} border border-current/20`}>
                      Active Portal
                    </span>
                  </div>

                  <h3 className="font-['Poppins'] font-bold text-xl text-[#0d2335] mb-2 group-hover:text-[#1b95cd] transition-colors">
                    {portal.name}
                  </h3>

                  <p className="font-['Inter'] text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {portal.tagline}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-[11px] font-['Poppins'] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                      Key Capabilities:
                    </h4>
                    <ul className="space-y-2">
                      {portal.keyFeatures.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs font-['Inter'] text-slate-700">
                          <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                            ✓
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => onNavigate(portal.path)}
                    className={`w-full py-3 px-4 rounded-xl text-white font-['Poppins'] font-semibold text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer ${portal.btnColor}`}
                  >
                    <span>Explore {portal.name}</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Upcoming Portals Notice */}
          <div className="mt-8 p-4 rounded-2xl bg-slate-100/70 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-2.5">
              <span className="text-base">🧪</span>
              <span>
                <strong>Pharmacy & Laboratory Portals:</strong> Additional modules are actively running in pilot deployments with hospital partner networks for Q3 2026.
              </span>
            </div>
            <span className="text-[11px] font-['Poppins'] font-semibold text-[#1b95cd] whitespace-nowrap bg-white px-2.5 py-1 rounded-lg border border-slate-200">
              Pilot Release Track
            </span>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION 4: How It Works
            ───────────────────────────────────────────────────────────── */}
        <section id="how-it-works" className="py-12 border-t border-slate-200/80 text-left">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#1b95cd] font-['Poppins'] font-semibold text-xs tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              End-to-End Orchestration
            </span>
            <h2 className="font-['Poppins'] font-bold text-2xl sm:text-3xl text-[#0d2335] tracking-tight mt-2">
              Synchronized Healthcare Delivery
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1b95cd] font-['Poppins'] font-bold flex items-center justify-center mb-3 text-sm">
                01
              </div>
              <h4 className="font-['Poppins'] font-bold text-sm text-[#0d2335] mb-1">
                Patient Self-Booking
              </h4>
              <p className="font-['Inter'] text-xs text-slate-500 leading-relaxed">
                Patient selects appointment slot or joins emergency triage via mobile or web portal.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1b95cd] font-['Poppins'] font-bold flex items-center justify-center mb-3 text-sm">
                02
              </div>
              <h4 className="font-['Poppins'] font-bold text-sm text-[#0d2335] mb-1">
                Clinical Consultation
              </h4>
              <p className="font-['Inter'] text-xs text-slate-500 leading-relaxed">
                Doctor conducts examination with AI-assisted chart structuring and safe e-prescribing.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1b95cd] font-['Poppins'] font-bold flex items-center justify-center mb-3 text-sm">
                03
              </div>
              <h4 className="font-['Poppins'] font-bold text-sm text-[#0d2335] mb-1">
                Hospital Ward & Logistics
              </h4>
              <p className="font-['Inter'] text-xs text-slate-500 leading-relaxed">
                Hospital admins coordinate bed allocation, nurse rosters, and TPA pre-authorization.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1b95cd] font-['Poppins'] font-bold flex items-center justify-center mb-3 text-sm">
                04
              </div>
              <h4 className="font-['Poppins'] font-bold text-sm text-[#0d2335] mb-1">
                Discharge & Records
              </h4>
              <p className="font-['Inter'] text-xs text-slate-500 leading-relaxed">
                Final bills settle digitally and verified FHIR clinical records sync to patient vault.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION 5: CTA Banner
            ───────────────────────────────────────────────────────────── */}
        <section id="security" className="py-10 text-center">
          <div className="card-white-shadow rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-blue-50/80 via-white to-emerald-50/60 border border-slate-200 relative overflow-hidden">
            <span className="text-[#1b95cd] font-['Poppins'] font-semibold text-xs uppercase tracking-wider">
              Ready to Upgrade Hospital Workflows?
            </span>
            <h2 className="font-['Poppins'] font-bold text-2.5xl sm:text-3xl lg:text-4xl text-[#0d2335] tracking-tight mt-2 mb-4">
              Experience Smarter Healthcare Management.
            </h2>
            <p className="font-['Inter'] text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed">
              Join leading healthcare networks leveraging Moss Med AI for zero-downtime EHR interoperability, reduced documentation burden, and synchronized operations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={onRequestDemo}
                className="btn-primary-blue py-3.5 px-8 rounded-xl font-['Poppins'] font-semibold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                Request a Demo
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/products/moss-med-ai/hospital-portal')}
                className="btn-secondary-outline py-3.5 px-6 rounded-xl font-['Poppins'] font-semibold text-sm text-slate-700 cursor-pointer"
              >
                Explore Hospital Dashboards →
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

