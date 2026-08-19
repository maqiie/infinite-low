import { useState } from 'react'
import { Link } from 'react-router-dom'
import QuickBook from '../components/QuickBook.jsx'
import Reveal from '../components/Reveal.jsx'
import ImageWithFallback from '../components/ImageWithFallback.jsx'
import CountUp from '../components/CountUp.jsx'
import Lightbox from '../components/Lightbox.jsx'
import BeforeAfter from '../components/BeforeAfter.jsx'

// Every ID below has been verified against Unsplash search/photo pages directly.
const img = (id, w = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

const HERO_IMG = img('photo-1600948836101-f9ffda59d250', 2000)   // salon chairs & mirrors
const CHAIR_IMG = img('photo-1521590832167-7bcbfaa6381f', 1200)  // maroon chairs at white vanity
const MIRROR_IMG = img('photo-1633681926022-84c23e8cb2d6', 1200) // modern salon, black chairs

const stats = [
  { value: '5+', label: 'Years in Nairobi' },
  { value: '2,000+', label: 'Clients styled' },
  { value: '15+', label: 'Signature services' },
  { value: '4.9★', label: 'Average rating' },
]

const services = [
  {
    plate: 'I',
    name: 'Hair Styling',
    desc: 'Cut, colour and considered finishing.',
    img: img('photo-1580618672591-eb180b1a973f', 900), // hairstylist blow-drying client
  },
  {
    plate: 'II',
    name: 'Braids & Locs',
    desc: 'Knotless braids, cornrows, retwists.',
    img: img('photo-1708170236221-688b2e563123', 900), // your dreadlocks portrait
  },
  {
    plate: 'III',
    name: 'Colour Bar',
    desc: 'Full colour, balayage, gloss.',
    img: img('photo-1629397685944-7073f5589754', 900), // hairstylist curling iron in salon
  },
  {
    plate: 'IV',
    name: 'Treatments',
    desc: 'Deep conditioning, scalp care.',
    img: img('photo-1595475884562-073c30d45670', 900), // hairdressing tools
  },
]

const atelier = [
  { src: CHAIR_IMG, caption: 'The Vanity', span: 'md:col-span-7' },
  { src: MIRROR_IMG, caption: 'Gold Detail', span: 'md:col-span-5' },
]

export default function Home() {
  const [lightboxImage, setLightboxImage] = useState(null)

  return (
    <div className="relative">
      <div className="grain-overlay" />
      <style>{`
        @keyframes kenBurns { 0% { transform: scale(1); } 100% { transform: scale(1.08); } }
        .hero-photo { animation: kenBurns 24s ease-out forwards; }
        .luxe-photo { filter: saturate(0.82) contrast(1.05) brightness(0.96); }
        @media (prefers-reduced-motion: reduce) { .hero-photo { animation: none; } }
      `}</style>

      {/* ============ MASTHEAD / HERO — real photo + gold mesh tint + grain ============ */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={HERO_IMG}
            alt="Infinite Glow studio interior"
            label="Studio"
            className="hero-photo luxe-photo w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
          <div
            className="absolute inset-0 opacity-60"
            style={{ backgroundImage: 'radial-gradient(circle at 85% 15%, rgba(232,205,132,0.30), transparent 45%), radial-gradient(circle at 10% 90%, rgba(122,102,64,0.25), transparent 50%)' }}
          />
          <div
            className="absolute inset-0"
            style={{ boxShadow: 'inset 0 0 200px 50px rgba(0,0,0,0.65)' }}
          />
        </div>

        <div className="ring-deco hidden md:block absolute w-72 h-72 -top-20 -right-20 z-10" />

        <Reveal className="relative z-10 max-w-6xl mx-auto w-full px-6 pt-10 flex items-center justify-between border-b border-gold/20 pb-5">
          <span className="text-[10px] tracking-[0.4em] uppercase text-ivory-dim">Nairobi</span>
          <span className="flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-gold">
            <span className="w-1 h-1 rotate-45 bg-gold" />
            Infinite Glow Hair Studio
            <span className="w-1 h-1 rotate-45 bg-gold" />
          </span>
          <span className="text-[10px] tracking-[0.4em] uppercase text-ivory-dim">Est. 2019</span>
        </Reveal>

        <div className="relative z-10 max-w-6xl mx-auto px-6 flex-1 flex flex-col justify-end pb-16 w-full">
          <Reveal delay={100}>
            <p className="font-script italic text-2xl text-gold-bright mb-6">
              An atelier for hair, considered.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <h1 className="font-display font-light text-7xl md:text-9xl leading-[0.85] text-ivory">
              Find your
              <span className="glow-text italic font-normal draw-line block">glow.</span>
            </h1>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <Link
                to="/book"
                className="bg-gold text-ink px-9 py-4 text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-gold-bright hover:shadow-[0_0_40px_rgba(232,205,132,0.4)] transition-all duration-500"
              >
                Reserve a chair
              </Link>
              <Link
                to="/services"
                className="text-ivory-dim text-[11px] tracking-[0.3em] uppercase hover:text-gold-bright transition-colors duration-500 border-b border-transparent hover:border-gold-bright pb-1"
              >
                The menu
              </Link>
            </div>
          </Reveal>

          <Reveal delay={550} className="flex flex-wrap gap-10 mt-16">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl glow-text"><CountUp value={s.value} /></p>
                <p className="text-[10px] tracking-[0.15em] uppercase text-ivory-dim mt-1">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ FIG. 01 — PHILOSOPHY ============ */}
      <section className="relative border-b border-bronze/20 overflow-hidden bg-panel">
        <span className="ghost-glyph absolute -top-10 left-1/2 -translate-x-1/2 text-[16rem] md:text-[22rem] leading-none select-none pointer-events-none">
          01
        </span>
        <Reveal className="relative max-w-2xl mx-auto px-6 py-32 text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-8">Fig. 01 — Philosophy</p>
          <p className="font-script italic text-3xl md:text-4xl text-ivory leading-relaxed">
            <span className="font-display not-italic text-5xl md:text-6xl text-gold-bright align-top mr-1 leading-none">W</span>
            e don&apos;t style hair to trend. We style it to last &mdash;
            healthy, considered, unmistakably yours.
          </p>
        </Reveal>
      </section>

      {/* ============ FIG. 02 — SERVICES, real photos, plate numbers ============ */}
      <section className="border-b border-bronze/20 py-28">
        <Reveal className="max-w-6xl mx-auto px-6 mb-16">
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-3">Fig. 02 — The Menu</p>
          <h2 className="font-display font-light text-4xl md:text-5xl text-ivory">Services</h2>
        </Reveal>

        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 100}>
              <Link to="/services" className="group relative block aspect-[3/4] overflow-hidden foil-frame">
                <ImageWithFallback
                  src={s.img}
                  alt={s.name}
                  label={s.name}
                  className="luxe-photo w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1400ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
                <span className="ghost-glyph absolute top-2 right-3 text-6xl leading-none opacity-70">
                  {s.plate}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display font-light text-xl text-ivory mb-1">{s.name}</h3>
                  <p className="text-ivory-dim text-xs font-light leading-relaxed opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                    {s.desc}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300} className="text-center mt-12">
          <Link
            to="/services"
            className="text-gold text-[10px] tracking-[0.3em] uppercase hover:text-gold-bright transition-colors"
          >
            View the full menu &rarr;
          </Link>
        </Reveal>
      </section>

      {/* ============ FIG. 03 — THE ATELIER ============ */}
      <section className="border-b border-bronze/20 py-28 bg-panel">
        <Reveal className="max-w-6xl mx-auto px-6 mb-12">
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-3">Fig. 03 — The Atelier</p>
          <h2 className="font-display font-light text-4xl text-ivory">Inside the studio</h2>
        </Reveal>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-4">
          {atelier.map((a) => (
            <Reveal key={a.caption} className={`${a.span} group`}>
              <button onClick={() => setLightboxImage({ src: a.src, label: a.caption })} className="block w-full text-left">
                <div className="relative aspect-[4/3] overflow-hidden mb-3 foil-frame">
                  <ImageWithFallback
                    src={a.src}
                    alt={a.caption}
                    label={a.caption}
                    className="luxe-photo w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                  />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-500" />
                  <span className="absolute bottom-3 right-3 w-8 h-8 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold-bright">
                      <path d="M8 3H3v5M21 8V3h-5M3 16v5h5M16 21h5v-5" />
                    </svg>
                  </span>
                </div>
                <p className="text-[10px] tracking-[0.25em] uppercase text-ivory-dim">{a.caption}</p>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ FIG. 04 — BEFORE / AFTER + BOOK ============ */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-12">
          <Reveal>
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-3">Fig. 04 — The Result</p>
            <h2 className="font-display font-light text-4xl text-ivory mb-8">Transformation</h2>
            <BeforeAfter
              before="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&q=80&auto=format&fit=crop"
              after={img('photo-1708170236221-688b2e563123', 1200)}
            />
          </Reveal>
          <Reveal delay={150} className="md:mt-20">
            <QuickBook />
          </Reveal>
        </div>
      </section>

      {/* ============ CLOSING MASTHEAD ============ */}
      <section className="relative overflow-hidden mesh-bg">
        <div className="ring-deco hidden md:block absolute w-56 h-56 -bottom-16 -left-16" style={{ animationDuration: '25s' }} />
        <Reveal className="relative max-w-3xl mx-auto px-6 py-32 text-center">
          <h2 className="font-display font-light text-5xl md:text-6xl text-ivory leading-[0.95] mb-10">
            Ready for your
            <span className="glow-text italic block">glow up?</span>
          </h2>
          <Link
            to="/book"
            className="inline-block bg-gold text-ink px-10 py-4 text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-gold-bright hover:shadow-[0_0_40px_rgba(232,205,132,0.4)] transition-all duration-500"
          >
            Reserve a chair
          </Link>
        </Reveal>
        <Reveal className="relative max-w-6xl mx-auto px-6 pb-10 flex items-center justify-between border-t border-ivory/10 pt-5">
          <span className="text-[10px] tracking-[0.4em] uppercase text-ivory-dim">By appointment only</span>
          <span className="text-[10px] tracking-[0.4em] uppercase text-ivory-dim">Ridgeways, Nairobi</span>
        </Reveal>
      </section>

      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </div>
  )
}