import { useState } from 'react'
import { Link } from 'react-router-dom'
import QuickBook from '../components/QuickBook.jsx'
import Reveal from '../components/Reveal.jsx'
import ImageWithFallback from '../components/ImageWithFallback.jsx'
import Lightbox from '../components/Lightbox.jsx'
import BeforeAfter from '../components/BeforeAfter.jsx'

// People-free: interiors, materials, tools, textures only.
const img = (id, w = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

const HERO_IMG = img('photo-1600948836101-f9ffda59d250', 2000)
const MARBLE_IMG = img('photo-1615529182904-14819c35db37', 1800)
const CHAIR_IMG = img('photo-1521590832167-7bcbfaa6381f', 1200)
const TOOLS_IMG = img('photo-1522337894620-3d9be9c2b2b1', 1200)
const MIRROR_IMG = img('photo-1633681926022-84c23e8cb2d6', 1200)
const PRODUCTS_IMG = img('photo-1595425964272-c845e3ec5a5f', 1200)
const CANDLE_IMG = img('photo-1602523961358-f9f03dd557db', 1000)
const FLORAL_IMG = img('photo-1519378058457-4c29a0a2efac', 1000)

const services = [
  { plate: 'I', name: 'Hair Styling', desc: 'Cut, colour and considered finishing.', img: img('photo-1560066984-138dadb4c035', 1400) },
  { plate: 'II', name: 'Braids & Locs', desc: 'Knotless braids, cornrows, retwists.', img: img('photo-1595473616333-dc4c74a568bf', 1400) },
  { plate: 'III', name: 'Colour Bar', desc: 'Full colour, balayage, gloss.', img: img('photo-1522337560212-72a19afe6a5b', 1400) },
]

const atelier = [
  { src: MARBLE_IMG, caption: 'Plate IV — The Marble Bar', span: 'md:col-span-7' },
  { src: MIRROR_IMG, caption: 'Plate V — Gold Detail', span: 'md:col-span-5' },
  { src: CANDLE_IMG, caption: 'Plate VI — Still Life', span: 'md:col-span-4' },
  { src: CHAIR_IMG, caption: 'Plate VII — The Studio', span: 'md:col-span-8' },
]

export default function Home() {
  const [lightboxImage, setLightboxImage] = useState(null)

  return (
    <div className="relative">
      <div className="grain-overlay" />
      <style>{`
        @keyframes kenBurns { 0% { transform: scale(1); } 100% { transform: scale(1.08); } }
        .hero-photo { animation: kenBurns 24s ease-out forwards; }
        .luxe-photo { filter: saturate(0.78) contrast(1.05) brightness(0.96) sepia(0.05); }
        .plate-number {
          font-family: inherit;
          -webkit-text-stroke: 1px rgba(201,162,75,0.35);
          color: transparent;
        }
        @media (prefers-reduced-motion: reduce) { .hero-photo { animation: none; } }
      `}</style>

      {/* MASTHEAD / HERO */}
      <section className="relative min-h-[96vh] flex flex-col overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={HERO_IMG}
            alt="Studio interior"
            label="Studio"
            className="hero-photo luxe-photo w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/25" />
        </div>

        <Reveal className="relative z-10 max-w-6xl mx-auto w-full px-6 pt-10 flex items-center justify-between border-b border-ivory/15 pb-5">
          <span className="text-[10px] tracking-[0.4em] uppercase text-ivory-dim">Nairobi</span>
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold">Infinite Hair Glow</span>
          <span className="text-[10px] tracking-[0.4em] uppercase text-ivory-dim">Est. 2019</span>
        </Reveal>

        <div className="relative z-10 max-w-6xl mx-auto px-6 flex-1 flex items-end pb-20 w-full">
          <div>
            <Reveal delay={100}>
              <p className="font-script italic text-2xl text-gold-bright mb-6">
                An atelier for hair, considered.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <h1 className="font-display font-light text-6xl md:text-8xl leading-[0.86] text-ivory">
                Find your
                <span className="glow-text italic block">glow.</span>
              </h1>
            </Reveal>
            <Reveal delay={340}>
              <div className="mt-10 flex flex-wrap items-center gap-8">
                <Link
                  to="/book"
                  className="border border-gold text-gold-bright px-9 py-3.5 text-[11px] tracking-[0.3em] uppercase hover:bg-gold hover:text-ink transition-colors duration-500"
                >
                  Reserve a chair
                </Link>
                <Link
                  to="/services"
                  className="text-ivory-dim text-[11px] tracking-[0.3em] uppercase hover:text-gold-bright transition-colors duration-500"
                >
                  The menu
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={500} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-ivory-dim">
          <span className="w-px h-10 bg-gradient-to-b from-transparent via-ivory-dim to-transparent" />
          <span className="text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        </Reveal>
      </section>

      {/* FIG. 01 — PHILOSOPHY, watermark plate number, drop cap */}
      <section className="relative border-b border-bronze/20 overflow-hidden">
        <span className="plate-number absolute -top-10 left-1/2 -translate-x-1/2 font-display text-[16rem] md:text-[22rem] leading-none select-none pointer-events-none">
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

      {/* FIG. 02 — SERVICES, full spreads alternating sides */}
      <section className="border-b border-bronze/20">
        <Reveal className="max-w-6xl mx-auto px-6 pt-24">
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-3">Fig. 02 — The Menu</p>
          <h2 className="font-display font-light text-4xl md:text-5xl text-ivory">Services</h2>
        </Reveal>

        {services.map((s, i) => (
          <Reveal key={s.name}>
            <div className={`grid md:grid-cols-2 items-center ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}>
              <div className="aspect-[4/3] md:aspect-[16/11] overflow-hidden [direction:ltr] group">
                <ImageWithFallback
                  src={s.img}
                  alt={s.name}
                  label={s.name}
                  className="luxe-photo w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1400ms] ease-out"
                />
              </div>
              <div className="px-6 md:px-16 py-16 [direction:ltr]">
                <span className="plate-number font-display text-8xl md:text-9xl leading-none">
                  {s.plate}
                </span>
                <h3 className="font-display font-light text-3xl text-ivory mt-4 mb-3">{s.name}</h3>
                <p className="text-ivory-dim font-light max-w-xs mb-6">{s.desc}</p>
                <Link
                  to="/services"
                  className="text-gold text-[10px] tracking-[0.3em] uppercase hover:text-gold-bright transition-colors"
                >
                  View the full menu &rarr;
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* FIG. 03 — THE ATELIER, asymmetric spread with enlarge affordance */}
      <section className="border-b border-bronze/20 py-24">
        <Reveal className="max-w-6xl mx-auto px-6 mb-12">
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-3">Fig. 03 — The Atelier</p>
          <h2 className="font-display font-light text-4xl text-ivory">Materials &amp; space</h2>
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

      {/* FIG. 04 — INSTRUMENTS, still-life pair */}
      <section className="border-b border-bronze/20 py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-3">Fig. 04 — Instruments</p>
            <h2 className="font-display font-light text-4xl text-ivory mb-6">
              Chosen tools, <span className="glow-text italic">chosen products.</span>
            </h2>
            <p className="text-ivory-dim font-light leading-relaxed max-w-sm">
              Every tool on our station and every product on our shelf is
              professional-grade, texture-matched, and selected for how it
              treats hair &mdash; not how it photographs.
            </p>
          </Reveal>
          <Reveal delay={120} className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden foil-frame">
              <ImageWithFallback src={TOOLS_IMG} alt="Styling tools" label="Tools" className="luxe-photo w-full h-full object-cover" />
            </div>
            <div className="aspect-[3/4] overflow-hidden mt-8 foil-frame">
              <ImageWithFallback src={PRODUCTS_IMG} alt="Product bottles" label="Products" className="luxe-photo w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FIG. 05 — BEFORE/AFTER + BOOK */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-12">
          <Reveal>
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-3">Fig. 05 — The Result</p>
            <h2 className="font-display font-light text-4xl text-ivory mb-8">Transformation</h2>
            <BeforeAfter
              before="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&q=80&auto=format&fit=crop"
              after="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1200&q=80&auto=format&fit=crop"
            />
          </Reveal>
          <Reveal delay={150} className="md:mt-20">
            <QuickBook />
          </Reveal>
        </div>
      </section>

      {/* CLOSING MASTHEAD, mirrors the opening */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src={FLORAL_IMG} alt="" label="" className="luxe-photo w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ink/88" />
        </div>
        <Reveal className="relative max-w-3xl mx-auto px-6 py-32 text-center">
          <h2 className="font-display font-light text-5xl md:text-6xl text-ivory leading-[0.95] mb-10">
            Ready for your
            <span className="glow-text italic block">glow up?</span>
          </h2>
          <Link
            to="/book"
            className="inline-block border border-gold text-gold-bright px-10 py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-gold hover:text-ink transition-colors duration-500"
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