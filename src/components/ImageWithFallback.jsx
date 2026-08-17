import { useState } from 'react'

// If the real photo URL 404s or is blocked, this swaps in a generated
// gold-on-ink placeholder instead of the browser's broken-image icon.
export default function ImageWithFallback({ src, alt, className = '', label }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    const text = encodeURIComponent(label || alt || 'Infinite Glow')
    const fallback = `data:image/svg+xml;utf8,
      <svg xmlns='http://www.w3.org/2000/svg' width='800' height='1000'>
        <defs>
          <radialGradient id='g' cx='30%25' cy='25%25' r='75%25'>
            <stop offset='0%25' stop-color='%23c9a24b' stop-opacity='0.35'/>
            <stop offset='100%25' stop-color='%230d0b09' stop-opacity='1'/>
          </radialGradient>
        </defs>
        <rect width='800' height='1000' fill='%2317140f'/>
        <rect width='800' height='1000' fill='url(%23g)'/>
        <text x='50%25' y='50%25' font-family='serif' font-size='34' fill='%23e8cd84' text-anchor='middle' dominant-baseline='middle'>${text}</text>
      </svg>`
    return <img src={fallback} alt={alt} className={className} />
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      loading="lazy"
    />
  )
}