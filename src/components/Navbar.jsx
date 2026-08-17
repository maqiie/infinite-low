import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `relative text-sm tracking-[0.15em] uppercase transition-colors pb-1 ${
      isActive
        ? 'text-gold-bright after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-gold-bright'
        : 'text-ivory-dim hover:text-gold'
    }`

  return (
    <header className="sticky top-0 z-50 bg-ink/90 backdrop-blur border-b border-bronze/30">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        <NavLink to="/" className="font-display text-2xl tracking-wide text-ivory" onClick={() => setOpen(false)}>
          Infinite <span className="glow-text">Hair Glow</span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/book"
            className="bg-gold text-ink text-sm tracking-[0.1em] uppercase px-5 py-2.5 rounded-full hover:bg-gold-bright transition-colors"
          >
            Book Now
          </NavLink>
        </nav>

        <button
          className="md:hidden text-ivory"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6 L20 20 M20 6 L6 20" strokeLinecap="round" />
            ) : (
              <path d="M4 8 H22 M4 13 H22 M4 18 H22" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-bronze/30 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/book"
            onClick={() => setOpen(false)}
            className="border border-gold text-gold-bright text-sm tracking-[0.15em] uppercase px-5 py-3 text-center hover:bg-gold hover:text-ink transition-colors"
          >
            Book Now
          </NavLink>
        </nav>
      )}
    </header>
  )
}
