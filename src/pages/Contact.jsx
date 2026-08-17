import { Link } from 'react-router-dom'

function IconPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0">
      <path d="M12 22s8-7.5 8-13a8 8 0 10-16 0c0 5.5 8 13 8 13z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}
function IconPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0">
      <path d="M4 4h4l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v4a2 2 0 01-2 2A16 16 0 014 6a2 2 0 012-2z" />
    </svg>
  )
}
function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0">
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M3 6l9 7 9-7" />
    </svg>
  )
}
function IconClock() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

export default function Contact() {
  return (
    <div>
      <section className="relative h-[32vh] min-h-[240px] overflow-hidden flex items-center">
        <img
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1600&q=80&auto=format&fit=crop"
          alt="Infinite Hair Glow studio"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative max-w-6xl mx-auto px-6 text-center w-full">
          <p className="font-script italic text-lg text-gold-bright mb-1">Get in touch</p>
          <h1 className="font-display text-5xl text-ivory">Contact</h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-ivory-dim leading-relaxed mb-10 max-w-md">
            Questions about a service, a booking, or a collaboration? Reach
            out directly, or head to the booking page to request an
            appointment.
          </p>

          <ul className="space-y-6 text-sm">
            <li className="flex gap-3 text-gold">
              <IconPin />
              <div>
                <p className="text-xs tracking-widest uppercase text-gold mb-1">Studio</p>
                <p className="text-ivory">Ciata City Mall, Ridgeways &mdash; 3rd Floor</p>
              </div>
            </li>
            <li className="flex gap-3 text-gold">
              <IconPhone />
              <div>
                <p className="text-xs tracking-widest uppercase text-gold mb-1">WhatsApp</p>
                <a href="https://wa.me/254728554175" target="_blank" rel="noreferrer" className="text-ivory hover:text-gold-bright">
                  +254 728 554175
                </a>
              </div>
            </li>
            <li className="flex gap-3 text-gold">
              <IconMail />
              <div>
                <p className="text-xs tracking-widest uppercase text-gold mb-1">Email</p>
                <a href="mailto:infiniteglow2025@gmail.com" className="text-ivory hover:text-gold-bright">
                  infiniteglow2025@gmail.com
                </a>
              </div>
            </li>
            <li className="flex gap-3 text-gold">
              <IconClock />
              <div>
                <p className="text-xs tracking-widest uppercase text-gold mb-1">Hours</p>
                <p className="text-ivory">Tue &ndash; Sun, 9:00am &ndash; 7:00pm</p>
              </div>
            </li>
          </ul>

          <div className="flex gap-5 mt-8">
            <a href="https://instagram.com/infinite.glow.hair.studio" target="_blank" rel="noreferrer" className="text-ivory-dim hover:text-gold-bright text-sm tracking-widest uppercase">
              Instagram
            </a>
            <a href="https://tiktok.com/@infinite.glow.hair.studio" target="_blank" rel="noreferrer" className="text-ivory-dim hover:text-gold-bright text-sm tracking-widest uppercase">
              TikTok
            </a>
          </div>

          <Link
            to="/book"
            className="inline-block mt-10 bg-gold text-ink px-8 py-3 text-sm tracking-[0.15em] uppercase hover:bg-gold-bright transition-colors"
          >
            Book an appointment
          </Link>
        </div>

        <div className="border border-bronze/30 aspect-square md:aspect-auto md:h-full relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80&auto=format&fit=crop"
            alt="Ciata City Mall studio location"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/50 flex items-center justify-center p-8 text-center">
            <p className="font-script italic text-2xl text-gold-bright">
              Ciata City Mall, Ridgeways &mdash; map coming soon
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
