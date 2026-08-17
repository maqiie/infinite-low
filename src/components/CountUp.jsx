import { useEffect, useRef, useState } from 'react'

// Animates from 0 up to the numeric part of `value` when it scrolls into
// view. Keeps any non-numeric suffix/prefix (e.g. "5+", "4.9★") intact.
export default function CountUp({ value, duration = 1200 }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(null)

  const match = String(value).match(/^([^\d]*)([\d.,]+)(.*)$/)
  const prefix = match ? match[1] : ''
  const numStr = match ? match[2] : ''
  const suffix = match ? match[3] : ''
  const target = numStr ? parseFloat(numStr.replace(/,/g, '')) : null
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0

  useEffect(() => {
    const node = ref.current
    if (!node || target === null) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.unobserve(node)

        const start = performance.now()
        function tick(now) {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setDisplay(target * eased)
          if (progress < 1) requestAnimationFrame(tick)
          else setDisplay(target)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [target, duration])

  if (target === null) {
    return <span ref={ref}>{value}</span>
  }

  const shown = display === null ? 0 : display
  const formatted = decimals ? shown.toFixed(decimals) : Math.round(shown).toLocaleString()

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}