import { useEffect } from 'react'
import ImageWithFallback from './ImageWithFallback.jsx'

export default function Lightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return

    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [image, onClose])

  if (!image) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-ink/90 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={image.label}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-6 right-6 w-10 h-10 rounded-full glass flex items-center justify-center text-ivory hover:text-gold-bright transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
        </svg>
      </button>

      <div
        className="relative max-w-3xl w-full rounded-3xl overflow-hidden shadow-[0_30px_80px_-15px_rgba(0,0,0,0.8)]"
        onClick={(e) => e.stopPropagation()}
      >
        <ImageWithFallback
          src={image.src}
          alt={image.label}
          label={image.label}
          className="w-full max-h-[80vh] object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6">
          <p className="font-display text-2xl text-ivory">{image.label}</p>
        </div>
      </div>
    </div>
  )
}