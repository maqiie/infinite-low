import { useState } from 'react'

const COLORS = ['#c9a24b', '#e8cd84', '#f4eee0']

export default function useConfettiBurst() {
  const [bursts, setBursts] = useState([])

  function fire(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()

    const pieces = Array.from({ length: 14 }).map((_, i) => {
      const angle = (Math.PI * 2 * i) / 14 + Math.random() * 0.5
      const distance = 40 + Math.random() * 40
      return {
        id: `${id}-${i}`,
        tx: Math.cos(angle) * distance,
        ty: Math.sin(angle) * distance,
        size: 3 + Math.random() * 4,
        color: COLORS[i % COLORS.length],
        left: x,
        top: y,
      }
    })

    setBursts((b) => [...b, { id, pieces }])
    setTimeout(() => {
      setBursts((b) => b.filter((burst) => burst.id !== id))
    }, 800)
  }

  return { fire, overlay: (
    <div className="absolute inset-0 pointer-events-none overflow-visible">
      {bursts.flatMap((burst) =>
        burst.pieces.map((p) => (
          <span
            key={p.id}
            className="confetti-piece"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              background: p.color,
              '--tx': `${p.tx}px`,
              '--ty': `${p.ty}px`,
            }}
          />
        ))
      )}
    </div>
  )}
}