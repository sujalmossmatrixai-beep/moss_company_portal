import { useState } from 'react'
import type { ScreenshotItem } from '../../data/productData'

interface ScreenshotGalleryProps {
  screenshots: ScreenshotItem[]
  title?: string
  subtitle?: string
}

export default function ScreenshotGallery({
  screenshots,
  title = 'Application Screenshots',
  subtitle = 'Authentic interfaces capturing the real-world operational workspace.',
}: ScreenshotGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)

  if (!screenshots || screenshots.length === 0) return null

  const current = screenshots[currentIndex] || screenshots[0]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length)
    setZoomLevel(1)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
    setZoomLevel(1)
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-6">
        <span className="text-[#1b95cd] font-['Poppins'] font-semibold text-xs tracking-wider uppercase bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
          Live Product Interfaces
        </span>
        <h3 className="font-['Poppins'] font-bold text-xl sm:text-2xl text-[#0d2335] tracking-tight mt-2">
          {title}
        </h3>
        <p className="font-['Inter'] text-xs sm:text-sm text-slate-500 mt-1">
          {subtitle}
        </p>
      </div>

      {/* Main Large Showcase Box */}
      <div className="bg-white rounded-3xl p-3 sm:p-5 border border-slate-200/90 shadow-md">
        <div className="relative group rounded-2xl overflow-hidden bg-slate-950/5 border border-slate-200">
          {/* Top Info Bar inside preview */}
          <div className="absolute top-0 left-0 right-0 z-10 p-3 sm:p-4 bg-gradient-to-b from-black/60 to-transparent flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              {current.badge && (
                <span className="text-[10px] font-['Poppins'] font-bold px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30">
                  {current.badge}
                </span>
              )}
              <span className="font-['Poppins'] font-semibold text-xs sm:text-sm drop-shadow-sm truncate max-w-xs sm:max-w-md">
                {current.title}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="px-2.5 py-1 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-['Poppins'] font-medium transition-all flex items-center gap-1 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              <span className="hidden sm:inline">Full Screen</span>
            </button>
          </div>

          {/* Active Image */}
          <div
            onClick={() => setLightboxOpen(true)}
            className="w-full h-64 sm:h-96 md:h-[480px] flex items-center justify-center p-2 sm:p-6 cursor-zoom-in relative bg-radial from-slate-50 to-slate-100"
          >
            <img
              src={current.imagePath}
              alt={current.alt || current.title}
              className="max-h-full max-w-full object-contain rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-[1.01]"
            />
          </div>

          {/* Previous / Next Arrows */}
          {screenshots.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  prevSlide()
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-slate-700 shadow-md flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs"
                aria-label="Previous screenshot"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  nextSlide()
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-slate-700 shadow-md flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs"
                aria-label="Next screenshot"
              >
                ›
              </button>
            </>
          )}

          {/* Bottom Caption Bar */}
          <div className="p-3 bg-white border-t border-slate-100 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <p className="font-['Inter'] text-xs text-slate-600">
              {current.description}
            </p>
            <span className="text-[11px] font-['Poppins'] font-semibold text-slate-400 shrink-0">
              {currentIndex + 1} of {screenshots.length}
            </span>
          </div>
        </div>

        {/* Thumbnails Strip */}
        {screenshots.length > 1 && (
          <div className="flex items-center gap-2.5 mt-3 overflow-x-auto py-1 no-scrollbar">
            {screenshots.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setCurrentIndex(idx)
                  setZoomLevel(1)
                }}
                className={`relative shrink-0 w-20 sm:w-28 h-14 sm:h-18 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                  currentIndex === idx
                    ? 'border-[#1b95cd] shadow-md scale-102 ring-2 ring-[#1b95cd]/20'
                    : 'border-slate-200 opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={item.imagePath}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ─────────────────────────────────────────────────────────────
          FULL-SCREEN LIGHTBOX MODAL
          ───────────────────────────────────────────────────────────── */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200">
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white pb-3 border-b border-white/10">
            <div>
              <h4 className="font-['Poppins'] font-bold text-sm sm:text-base">
                {current.title}
              </h4>
              <p className="font-['Inter'] text-xs text-white/70">
                {current.description}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setZoomLevel((z) => (z === 1 ? 1.5 : 1))}
                className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-xs font-['Poppins'] text-white transition-colors cursor-pointer"
              >
                {zoomLevel === 1 ? 'Zoom +' : 'Reset Zoom'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setLightboxOpen(false)
                  setZoomLevel(1)
                }}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer text-sm"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Image Container */}
          <div className="relative flex-1 flex items-center justify-center overflow-auto p-4 my-2">
            <img
              src={current.imagePath}
              alt={current.alt || current.title}
              style={{ transform: `scale(${zoomLevel})` }}
              className="max-h-[80vh] max-w-full object-contain rounded-xl transition-transform duration-200"
            />

            {screenshots.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevSlide}
                  className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center text-xl transition-all cursor-pointer"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center text-xl transition-all cursor-pointer"
                >
                  ›
                </button>
              </>
            )}
          </div>

          {/* Bottom Status */}
          <div className="text-center text-xs font-['Poppins'] text-white/60 pt-2 border-t border-white/10">
            Viewing {currentIndex + 1} of {screenshots.length} · Press ESC to exit
          </div>
        </div>
      )}
    </div>
  )
}

