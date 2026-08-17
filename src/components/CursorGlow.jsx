import { useState } from 'react'

export default function CursorGlow({ children, className = '' }) {
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
      {pos && (
        <div
          className="pointer-events-none absolute w-72 h-72 rounded-full opacity-40 transition-opacity duration-300"
          style={{
            left: pos.x - 144,
            top: pos.y - 144,
            background: 'radial-gradient(circle, rgba(232,205,132,0.35), transparent 70%)',
            filter: 'blur(10px)',
          }}
        />
      )}
      {children}
    </div>
  )
}