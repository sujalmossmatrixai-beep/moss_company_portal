interface BreadcrumbItem {
  label: string
  href?: string
  onClick?: () => void
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex items-center text-xs font-['Inter'] text-slate-500 flex-wrap gap-1.5">
      <button
        type="button"
        onClick={() => {
          window.location.hash = ''
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        className="hover:text-[#1b95cd] transition-colors flex items-center gap-1 cursor-pointer font-medium"
      >
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span>Home</span>
      </button>

      {items.map((item, idx) => {
        const isLast = idx === items.length - 1
        return (
          <div key={idx} className="flex items-center gap-1.5">
            <span className="text-slate-300">/</span>
            {isLast ? (
              <span className="font-semibold text-[#0d2335] truncate max-w-[200px] sm:max-w-none">
                {item.label}
              </span>
            ) : (
              <button
                type="button"
                onClick={item.onClick}
                className="hover:text-[#1b95cd] transition-colors cursor-pointer truncate max-w-[150px] sm:max-w-none font-medium"
              >
                {item.label}
              </button>
            )}
          </div>
        )
      })}
    </nav>
  )
}

