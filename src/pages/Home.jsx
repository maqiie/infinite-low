import { useState } from 'react'
import { Link } from 'react-router-dom'
import QuickBook from '../components/QuickBook.jsx'
import Reveal from '../components/Reveal.jsx'
import ImageWithFallback from '../components/ImageWithFallback.jsx'
import CountUp from '../components/CountUp.jsx'
import Lightbox from '../components/Lightbox.jsx'
import BeforeAfter from '../components/BeforeAfter.jsx'

// ---- Image helper ----
const img = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

// ---- Carefully curated Unsplash IDs for luxury vibe ----
const HERO_BG = img('photo-1600948836101-f9ffda59d250', 2000)         // salon interior
const HERO_FLOATING = img('photo-1522335789203-aabd1fc54bc9', 400)    // hair product bottle (floating)
const ABOUT_IMG = img('photo-1580618672591-eb180b1a973f', 1200)       // stylist at work
const PORTFOLIO_IMAGES = [
  img('photo-1708170236221-688b2e563123', 800),  // dreadlocks
  img('photo-1629397685944-7073f5589754', 800),  // curling
  img('photo-1595475884562-073c30d45670', 800),  // tools
  img('photo-1521590832167-7bcbfaa6381f', 800),  // vanity
  img('photo-1633681926022-84c23e8cb2d6', 800),  // modern salon
]
const TESTIMONIAL_AVATARS = [
  img('photo-1494790108377-be9c29b29330', 100), // woman
  img('photo-1507003211169-0a1dd7228f2d', 100), // man
  img('photo-1438761681033-6461ffad8d80', 100), // woman
]

// ---- Data ----
const stats = [
  { value: '10+', label: 'Years of Excellence' },
  { value: '3,000+', label: 'Transformations' },
  { value: '18+', label: 'Signature Services' },
  { value: '4.9★', label: 'Guest Rating' },
]

const services = [
  {
    plate: 'I',
    name: 'Hair Sculpture',
    desc: 'Precision cuts, bespoke colour, and finishing that defines.',
    img: img('photo-1580618672591-eb180b1a973f', 900),
  },
  {
    plate: 'II',
    name: 'Braids & Locs Artistry',
    desc: 'Knotless braids, cornrows, retwists – crafted with care.',
    img: img('photo-1708170236221-688b2e563123', 900),
  },
  {
    plate: 'III',
    name: 'Colour Atelier',
    desc: 'Balayage, full colour, gloss – dimension and shine.',
    img: img('photo-1629397685944-7073f5589754', 900),
  },
  {
    plate: 'IV',
    name: 'Treatment Suite',
    desc: 'Deep conditioning, scalp therapy, and restorative rituals.',
    img: img('photo-1595475884562-073c30d45670', 900),
  },
]

const testimonials = [
  {
    name: 'Amina K.',
    role: 'Regular client',
    text: 'Infinite Glow is my sanctuary. Every visit leaves me feeling renewed and radiant. The attention to detail is unmatched.',
    avatar: TESTIMONIAL_AVATARS[0],
  },
  {
    name: 'James M.',
    role: 'First-time guest',
    text: 'I walked in unsure and left with a look that turned heads. The team truly listens and delivers artistry.',
    avatar: TESTIMONIAL_AVATARS[1],
  },
  {
    name: 'Grace W.',
    role: 'Loyal customer',
    text: 'From braids to colour, they’ve transformed my hair over the years. Always ahead of the curve, always caring.',
    avatar: TESTIMONIAL_AVATARS[2],
  },
]

export default function Home() {
  const [lightboxImage, setLightboxImage] = useState(null)

  return (
    <div className="relative bg-charcoal overflow-x-hidden">
      {/* Global grain overlay */}
      <div className="grain-overlay" />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap');

        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }

        @keyframes kenBurns { 0% { transform: scale(1); } 100% { transform: scale(1.08); } }
        @keyframes float { 0% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(2deg); } 100% { transform: translateY(0px) rotate(0deg); } }
        .hero-photo { animation: kenBurns 24s ease-out forwards; }
        .float-element { animation: float 8s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .hero-photo { animation: none; } .float-element { animation: none; } }

        .glass-card {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(201, 168, 76, 0.15);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }
        .gold-glow {
          text-shadow: 0 0 60px rgba(201, 168, 76, 0.25);
        }
        .mesh-bg {
          background-image: 
            radial-gradient(circle at 20% 80%, rgba(201, 168, 76, 0.06) 0%, transparent 60%),
            radial-gradient(circle at 80% 20%, rgba(201, 168, 76, 0.04) 0%, transparent 60%);
        }
        .hover-lift {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px -15px rgba(201, 168, 76, 0.25);
        }
      `}</style>

      {/* ========== 1. HERO – Full screen with floating element ========== */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={HERO_BG}
            alt="Luxury salon interior"
            label="Hero"
            className="hero-photo luxe-photo w-full h-full object-cover"
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 via-transparent to-charcoal/20" />
          <div className="absolute inset-0 opacity-60" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(201,168,76,0.20), transparent 55%)' }} />
          <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 150px 30px rgba(0,0,0,0.5)' }} />
        </div>

        {/* Floating decorative element (small product bottle) */}
        <div className="absolute hidden md:block bottom-20 right-10 w-28 h-28 z-10 float-element opacity-70">
          <ImageWithFallback
            src={HERO_FLOATING}
            alt=""
            label=""
            className="w-full h-full object-contain rounded-full shadow-2xl border border-gold/30"
          />
        </div>

        {/* Top bar */}
        <Reveal className="relative z-20 max-w-7xl mx-auto w-full px-6 pt-6 flex items-center justify-between border-b border-gold/20 pb-4">
          <span className="text-[10px] tracking-[0.3em] uppercase text-ivory/50 font-sans">Nairobi</span>
          <span className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-gold font-sans">
            <span className="w-1 h-1 rotate-45 bg-gold" />
            Infinite Glow
            <span className="w-1 h-1 rotate-45 bg-gold" />
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-ivory/50 font-sans">Est. 2019</span>
        </Reveal>

        {/* Hero content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 flex-1 flex flex-col justify-center items-center text-center w-full">
          <Reveal delay={100}>
            <p className="font-sans text-sm tracking-[0.4em] uppercase text-gold/80 mb-6">Luxury Hair Atelier</p>
          </Reveal>
          <Reveal delay={200}>
            <h1 className="font-serif font-light text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-ivory">
              Elevate <br />
              <span className="gold-glow italic font-normal text-gold">Your Essence</span>
            </h1>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              <Link
                to="/book"
                className="bg-gold text-charcoal px-10 py-4 text-[11px] tracking-[0.3em] uppercase font-medium font-sans hover:bg-gold-bright hover:shadow-[0_0_50px_rgba(201,168,76,0.3)] transition-all duration-500"
              >
                Book a Chair
              </Link>
              <Link
                to="/services"
                className="text-ivory/60 text-[11px] tracking-[0.3em] uppercase font-sans hover:text-gold transition-colors duration-300 border-b border-transparent hover:border-gold pb-1"
              >
                Explore Services
              </Link>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal delay={550} className="flex flex-wrap justify-center gap-8 md:gap-12 mt-16">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-serif text-3xl md:text-4xl gold-glow text-gold"><CountUp value={s.value} /></p>
                <p className="text-[10px] tracking-[0.15em] uppercase text-ivory/50 font-sans mt-1">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ========== 2. ABOUT – split layout with overlay image ========== */}
      <section className="relative border-y border-gold/10 overflow-hidden mesh-bg py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left – image with golden overlay */}
          <Reveal className="relative">
            <div className="relative aspect-[4/3] rounded-md overflow-hidden glass-card">
              <ImageWithFallback
                src={ABOUT_IMG}
                alt="Stylist working"
                label="About"
                className="w-full h-full object-cover luxe-photo"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 bg-charcoal/70 backdrop-blur px-4 py-2 rounded-sm border border-gold/20">
                <span className="text-gold text-[10px] tracking-widest uppercase font-sans">Since 2019</span>
              </div>
            </div>
          </Reveal>

          {/* Right – text */}
          <Reveal delay={150}>
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold/70 font-sans mb-4">Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ivory leading-tight mb-6">
              Crafting <span className="italic text-gold">timeless</span> beauty
            </h2>
            <p className="text-ivory/70 font-sans text-base leading-relaxed mb-6">
              Infinite Glow was born from a desire to redefine hair artistry in Nairobi. 
              We blend precision, care, and an intuitive understanding of each client’s 
              identity to deliver looks that transcend trends.
            </p>
            <p className="text-ivory/70 font-sans text-base leading-relaxed mb-8">
              Every appointment is a tailored journey — from consultation to the final 
              reveal. Our atelier is a sanctuary where your hair’s health and your 
              confidence are paramount.
            </p>
            <div className="flex items-center gap-4">
              <span className="font-serif italic text-2xl text-gold">“</span>
              <p className="text-ivory/80 text-sm italic font-serif">
                Hair is not just style — it’s self-expression.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== 3. SERVICES – large image cards ========== */}
      <section className="border-b border-gold/10 py-24 mesh-bg">
        <Reveal className="max-w-7xl mx-auto px-6 mb-16">
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold/70 font-sans mb-2">The Menu</p>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-ivory">Our Services</h2>
        </Reveal>

        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 100}>
              <Link to="/services" className="group relative block aspect-[3/4] rounded-md overflow-hidden glass-card hover-lift">
                <ImageWithFallback
                  src={s.img}
                  alt={s.name}
                  label={s.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1400ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
                <span className="absolute top-3 right-4 text-7xl leading-none opacity-30 font-serif text-gold">{s.plate}</span>
                <div className="absolute inset-x-0 bottom-0 p-6 text-left">
                  <h3 className="font-serif text-2xl text-ivory mb-1">{s.name}</h3>
                  <p className="text-ivory/50 text-sm font-sans leading-relaxed opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
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
            className="text-gold/80 text-[10px] tracking-[0.3em] uppercase font-sans hover:text-gold transition-colors"
          >
            View Full Menu &rarr;
          </Link>
        </Reveal>
      </section>

      {/* ========== 4. PORTFOLIO – gallery grid (multiple images) ========== */}
      <section className="border-b border-gold/10 py-24 bg-charcoal/30">
        <Reveal className="max-w-7xl mx-auto px-6 mb-12">
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold/70 font-sans mb-2">Portfolio</p>
          <h2 className="font-serif font-light text-4xl text-ivory">Recent Work</h2>
        </Reveal>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[280px]">
          {PORTFOLIO_IMAGES.map((src, idx) => (
            <Reveal key={idx} delay={idx * 50} className={`${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
              <button
                onClick={() => setLightboxImage({ src, label: `Portfolio ${idx + 1}` })}
                className="w-full h-full relative group overflow-hidden rounded-md glass-card hover-lift"
              >
                <ImageWithFallback
                  src={src}
                  alt={`Work ${idx + 1}`}
                  label=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="w-12 h-12 rounded-full glass-card flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                      <path d="M8 3H3v5M21 8V3h-5M3 16v5h5M16 21h5v-5" />
                    </svg>
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ========== 5. TESTIMONIALS ========== */}
      <section className="border-b border-gold/10 py-24 mesh-bg">
        <Reveal className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold/70 font-sans mb-2">Kind Words</p>
          <h2 className="font-serif font-light text-4xl text-ivory">What Our Guests Say</h2>
        </Reveal>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="glass-card p-6 rounded-md text-center h-full flex flex-col items-center hover-lift">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold/40 mb-4">
                  <ImageWithFallback
                    src={t.avatar}
                    alt={t.name}
                    label=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-ivory/80 text-sm font-sans leading-relaxed mb-4 flex-1">“{t.text}”</p>
                <div>
                  <p className="text-ivory font-serif text-base">{t.name}</p>
                  <p className="text-gold/60 text-[10px] tracking-widest uppercase font-sans">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ========== 6. BEFORE/AFTER + QUICKBOOK ========== */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
          <Reveal>
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold/70 font-sans mb-2">Transformations</p>
            <h2 className="font-serif font-light text-4xl text-ivory mb-6">Before & After</h2>
            <div className="rounded-md overflow-hidden glass-card">
              <BeforeAfter
                before="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&q=80&auto=format&fit=crop"
                after={img('photo-1708170236221-688b2e563123', 1200)}
              />
            </div>
          </Reveal>
          <Reveal delay={150} className="md:mt-0">
            <div className="glass-card p-6 md:p-8 rounded-md">
              <h3 className="font-serif text-2xl text-ivory mb-4">Book Your Experience</h3>
              <QuickBook />
              <div className="mt-6 pt-6 border-t border-gold/10 text-center text-ivory/40 text-xs font-sans">
                <p>📞 +254 700 123 456</p>
                <p className="mt-1">📍 Ridgeways, Nairobi</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== 7. CLOSING CTA ========== */}
      <section className="relative overflow-hidden mesh-bg border-t border-gold/10 py-24">
        <div className="absolute w-64 h-64 -bottom-20 -left-20 bg-gold/5 rounded-full blur-3xl" />
        <Reveal className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif font-light text-5xl md:text-7xl text-ivory leading-[1] mb-8">
            Ready for <br />
            <span className="gold-glow italic text-gold">Your Glow Up?</span>
          </h2>
          <Link
            to="/book"
            className="inline-block bg-gold text-charcoal px-12 py-4 text-[11px] tracking-[0.3em] uppercase font-medium font-sans hover:bg-gold-bright hover:shadow-[0_0_50px_rgba(201,168,76,0.3)] transition-all duration-500"
          >
            Reserve a Chair
          </Link>
        </Reveal>
      </section>

      {/* ========== 8. FOOTER ========== */}
      <footer className="border-t border-gold/10 py-8 bg-charcoal/80">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-ivory/40 text-xs font-sans">
          <p>© 2026 Infinite Glow. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-gold transition-colors">Pinterest</a>
            <a href="#" className="hover:text-gold transition-colors">TikTok</a>
          </div>
          <p className="text-[10px] tracking-widest">By appointment only</p>
        </div>
      </footer>

      {/* Lightbox */}
      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </div>
  )
}