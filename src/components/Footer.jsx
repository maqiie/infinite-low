import { Link } from 'react-router-dom'

function IconPin() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0 mt-0.5">
      <path d="M12 22s8-7.5 8-13a8 8 0 10-16 0c0 5.5 8 13 8 13z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}
function IconPhone() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0 mt-0.5">
      <path d="M4 4h4l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v4a2 2 0 01-2 2A16 16 0 014 6a2 2 0 012-2z" />
    </svg>
  )
}
function IconMail() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0 mt-0.5">
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M3 6l9 7 9-7" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-bronze/30 mt-24 bg-panel">
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        <div>
          <p className="font-display text-2xl text-ivory mb-2">
            Infinite <span className="glow-text">Glow</span>
          </p>
          <p className="text-xs tracking-[0.2em] uppercase text-bronze mb-4">Hair Studio</p>
          <p className="text-sm text-ivory-dim leading-relaxed mb-5">
            Where beauty meets luxury.
          </p>
          <div className="flex gap-4 text-ivory-dim">
            <a href="https://instagram.com/infinite.glow.hair.studio" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-gold-bright">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
            </a>
            <a href="https://tiktok.com/@infinite.glow.hair.studio" target="_blank" rel="noreferrer" aria-label="TikTok" className="hover:text-gold-bright">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 3v10.5a3.5 3.5 0 11-3-3.46M14 3a5 5 0 005 5" /></svg>
            </a>
            <a href="https://wa.me/254728554175" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-gold-bright">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21l1.6-4.8A8 8 0 1110 20l-7 1z" /></svg>
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">Quick Links</p>
          <ul className="text-sm text-ivory-dim space-y-2">
            <li><Link to="/" className="hover:text-gold-bright">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold-bright">About Us</Link></li>
            <li><Link to="/services" className="hover:text-gold-bright">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-gold-bright">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-gold-bright">Contact</Link></li>
            <li><Link to="/book" className="hover:text-gold-bright">Book Now</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">Contact Us</p>
          <ul className="text-sm text-ivory-dim space-y-3">
            <li className="flex gap-2">
              <IconPin />
              <span>Ciata City Mall, Ridgeways &mdash; 3rd Floor</span>
            </li>
            <li className="flex gap-2">
              <IconPhone />
              <a href="https://wa.me/254728554175" target="_blank" rel="noreferrer" className="hover:text-gold-bright">
                +254 728 554175
              </a>
            </li>
            <li className="flex gap-2">
              <IconMail />
              <a href="mailto:infiniteglow2025@gmail.com" className="hover:text-gold-bright break-all">
                infiniteglow2025@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">Opening Hours</p>
          <ul className="text-sm text-ivory-dim space-y-2">
            <li className="flex justify-between gap-4"><span>Tue &ndash; Fri</span><span>9:00am &ndash; 7:00pm</span></li>
            <li className="flex justify-between gap-4"><span>Saturday</span><span>9:00am &ndash; 6:00pm</span></li>
            <li className="flex justify-between gap-4"><span>Sunday</span><span>10:00am &ndash; 5:00pm</span></li>
            <li className="flex justify-between gap-4"><span>Monday</span><span>Closed</span></li>
          </ul>
        </div>
      </div>

      <div className="hairline" />

      <p className="text-center text-xs text-ivory-dim/60 py-6 tracking-wide">
        &copy; {new Date().getFullYear()} Infinite Glow Hair Studio. All rights reserved.
      </p>
    </footer>
  )
}
