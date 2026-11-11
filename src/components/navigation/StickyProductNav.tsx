interface NavSection {
  id: string
  label: string
}

interface StickyProductNavProps {
  sections: NavSection[]
  activeSection?: string
  ctaLabel?: string
  onCtaClick?: () => void
}

export default function StickyProductNav({
  sections,
  activeSection,
  ctaLabel = 'Request Demo',
  onCtaClick,
}: StickyProductNavProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="sticky top-15.5 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs py-2.5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Navigation Links */}
        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-1 no-scrollbar text-xs font-['Poppins']">
          {sections.map((sec) => (
            <button
              key={sec.id}
              type="button"
              onClick={() => scrollTo(sec.id)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all font-medium cursor-pointer ${
                activeSection === sec.id
                  ? 'bg-blue-50 text-[#1b95cd] font-semibold border border-blue-200/80 shadow-2xs'
                  : 'text-slate-600 hover:text-[#0d2335] hover:bg-slate-100/70'
              }`}
            >
              {sec.label}
            </button>
          ))}
        </div>

        {/* Right Quick Action CTA */}
        {ctaLabel && (
          <button
            type="button"
            onClick={onCtaClick}
            className="btn-primary-blue text-[11px] font-['Poppins'] font-semibold py-1.5 px-3.5 rounded-lg whitespace-nowrap shadow-xs hover:shadow transition-all shrink-0 cursor-pointer"
          >
            {ctaLabel}
          </button>
        )}
      </div>
    </div>
  )
}

