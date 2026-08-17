export default function SpinBadge({ text = 'BOOK NOW ✦ BOOK NOW ✦ ', className = '' }) {
  return (
    <div className={`relative w-24 h-24 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
        <defs>
          <path id="spin-badge-circle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
        </defs>
        <text fontSize="9" letterSpacing="1" fill="#e8cd84">
          <textPath href="#spin-badge-circle">{text}</textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d0b09" strokeWidth="2">
            <path d="M12 2l2.4 7.2H22l-6 4.4 2.3 7.1L12 16.3 5.7 20.7 8 13.6l-6-4.4h7.6z" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  )
}