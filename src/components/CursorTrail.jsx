import { useState } from 'react'

const DOTS = [
  { size: 8, delay: 0, opacity: 0.9 },
  { size: 6, delay: 60, opacity: 0.6 },
  { size: 4, delay: 120, opacity: 0.4 },
]

export default function CursorTrail({ children, className = '' }) {
  const [pos, setPos] = useState(null)

  return (
    <div
      className={`relative ${className}`}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      }}
      onMouseLeave={() => setPos(null)}
    >
      {pos &&
        DOTS.map((dot, i) => (
          <span
            key={i}
            className="pointer-events-none absolute rounded-full bg-gold-bright"
            style={{
              left: pos.x - dot.size / 2,
              top: pos.y - dot.size / 2,
              width: dot.size,
              height: dot.size,
              opacity: dot.opacity,
              transitionDelay: `${dot.delay}ms`,
              transition: 'left 0.15s ease-out, top 0.15s ease-out',
              boxShadow: '0 0 12px rgba(232,205,132,0.6)',
            }}
          />
        ))}
      {children}
    </div>
  )
}