import { useRef, useState } from 'react'
import ImageWithFallback from './ImageWithFallback.jsx'

export default function BeforeAfter({ before, after, beforeLabel = 'Before', afterLabel = 'After' }) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef(null)
  const dragging = useRef(false)

  function updateFromClientX(clientX) {
    const rect = containerRef.current.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, pct)))
  }

  function handlePointerDown(e) {
    dragging.current = true
    updateFromClientX(e.clientX)
  }
  function handlePointerMove(e) {
    if (!dragging.current) return
    updateFromClientX(e.clientX)
  }
  function stopDragging() {
    dragging.current = false
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/10] rounded-3xl overflow-hidden select-none shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] cursor-ew-resize"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerLeave={stopDragging}
    >
      {/* After image, full */}
      <ImageWithFallback
        src={after}
        alt={afterLabel}
        label={afterLabel}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before image, clipped to slider position */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <ImageWithFallback
          src={before}
          alt={beforeLabel}
          label={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Labels */}
      <span className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-[10px] tracking-[0.15em] uppercase text-ivory pointer-events-none">
        {beforeLabel}
      </span>
      <span className="absolute top-4 right-4 glass rounded-full px-3 py-1 text-[10px] tracking-[0.15em] uppercase text-gold-bright pointer-events-none">
        {afterLabel}
      </span>

      {/* Divider handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-gold-bright pointer-events-none"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold-bright">
            <path d="M8 5l-5 7 5 7M16 5l5 7-5 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  )
}