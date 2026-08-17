import { useState } from 'react'
import { Link } from 'react-router-dom'
import QuickBook from '../components/QuickBook.jsx'
import Reveal from '../components/Reveal.jsx'
import ImageWithFallback from '../components/ImageWithFallback.jsx'
import CountUp from '../components/CountUp.jsx'
import Lightbox from '../components/Lightbox.jsx'
import BeforeAfter from '../components/BeforeAfter.jsx'
import CursorTrail from '../components/CursorTrail.jsx'
import MagneticButton from '../components/MagneticButton.jsx'
import useConfettiBurst from '../components/useConfettiBurst.jsx'
import SpinBadge from '../components/SpinBadge.jsx'

const marqueeItems = ['Hair Styling', 'Braids & Locs', 'Colour', 'Treatments', 'Bridal', 'Silk Press']

const stats = [
  { value: '5+', label: 'Years' },
  { value: '2,000+', label: 'Clients' },
  { value: '4.9★', label: 'Rating' },
]

const services = [
  {
    label: 'Hair Styling',
    desc: 'Cut, colour, treatments & stunning styles',
    img: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=900&q=80&auto=format&fit=crop',
  },
  {
    label: 'Braids & Locs',
    desc: 'Knotless braids, cornrows & retwists',
    img: 'https://images.unsplash.com/photo-1595473616333-dc4c74a568bf?w=900&q=80&auto=format&fit=crop',
  },
  {
    label: 'Colour',
    desc: 'Full colour, balayage & gloss',
    img: 'https://images.unsplash.com/photo-1522337560212-72a19afe6a5b?w=900&q=80&auto=format&fit=crop',
  },
  {
    label: 'Treatments',
    desc: 'Deep conditioning & scalp care',
    img: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=900&q=80&auto=format&fit=crop',
  },
]

const moodboard = [
  { src: 'https://images.unsplash.com/photo-1595473616333-dc4c74a568bf?w=500&q=80&auto=format&fit=crop', label: 'Braids', rotate: '-rotate-6', float: 'float-slow' },
  { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&q=80&auto=format&fit=crop', label: 'Silk Press', rotate: 'rotate-3', float: 'float-slower' },
  { src: 'https://images.unsplash.com/photo-1522337560212-72a19afe6a5b?w=500&q=80&auto=format&fit=crop', label: 'Colour', rotate: '-rotate-2', float: 'float-slowest' },
  { src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&q=80&auto=format&fit=crop', label: 'Studio', rotate: 'rotate-6', float: 'float-slow' },
]

const sparklePositions = [
  { top: '10%', left: '15%', size: 4 },
  { top: '25%', left: '80%', size: 3 },
  { top: '60%', left: '10%', size: 5 },
  { top: '75%', left: '70%', size: 3 },
  { top: '40%', left: '50%', size: 4 },
  { top: '15%', left: '55%', size: 3 },
]

export default function Home() {
  const [lightboxImage, setLightboxImage] = useState(null)
  const [activeService, setActiveService] = useState(0)
  const { fire: fireConfetti, overlay: confettiOverlay } = useConfettiBurst()

  return (
    <div className="relative overflow-hidden">
      {sparklePositions.map((s, i) => (
        <span
          key={i}
          className="sparkle"
          style={{ top: s.top, left: s.left, width: s.size, height: s.size, animationDelay: `${i * 0.4}s` }}
        />
      ))}

      {/* Hero — moodboard collage + sparkle cursor trail */}
      <CursorTrail className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 relative">
          <svg
            className="hidden md:block absolute top-6 left-1/3 w-6 h-6 text-gold/50 animate-spin-slow"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"
          >
            <path d="M12 2l2.4 7.2H22l-6 4.4 2.3 7.1L12 16.3 5.7 20.7 8 13.6l-6-4.4h7.6z" strokeLinejoin="round" />
          </svg>
          <svg
            className="hidden md:block absolute bottom-10 right-1/3 w-4 h-4 text-gold-bright/60 animate-spin-slow"
            style={{ animationDirection: 'reverse', animationDuration: '9s' }}
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"
          >
            <path d="M12 2l2.4 7.2H22l-6 4.4 2.3 7.1L12 16.3 5.7 20.7 8 13.6l-6-4.4h7.6z" strokeLinejoin="round" />
          </svg>

          <div className="text-center max-w-2xl mx-auto relative z-10">
            <Reveal>
              <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs tracking-[0.2em] uppercase text-gold-bright mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-bright animate-pulse" />
                Now booking &middot; Ridgeways, Nairobi
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="font-display text-6xl md:text-7xl leading-[0.95] text-ivory">
                Enhance your
                <span className="glow-text italic block">beauty & glow.</span>
              </h1>
            </Reveal>
            <Reveal delay={250}>
              <p className="mt-6 text-ivory-dim leading-relaxed text-lg">
                Premium hair, braids &amp; treatment services in Nairobi.
              </p>
            </Reveal>
            <Reveal delay={350}>
              <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
                <MagneticButton
                  as={Link}
                  to="/book"
                  className="inline-block bg-gold text-ink px-8 py-4 rounded-full text-sm tracking-[0.1em] uppercase font-medium hover:bg-gold-bright hover:shadow-[0_0_40px_rgba(232,205,132,0.4)]"
                >
                  Book an appointment
                </MagneticButton>
                <div className="hidden sm:block">
                  <SpinBadge />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Scattered floating polaroids, wobble on hover */}
          {[
            { pos: 'hidden lg:block absolute -top-4 -left-4 w-40', item: moodboard[0] },
            { pos: 'hidden lg:block absolute top-10 -right-2 w-36', item: moodboard[1] },
            { pos: 'hidden md:block absolute bottom-0 left-4 w-32', item: moodboard[2] },
            { pos: 'hidden md:block absolute bottom-4 right-8 w-32', item: moodboard[3] },
          ].map(({ pos, item }, i) => (
            <Reveal key={item.label} delay={200 + i * 80} className={`${pos} ${item.float}`}>
              <Link
                to="/gallery"
                className={`group block bg-panel p-2 pb-5 rounded-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)] ${item.rotate} spring-hover`}
              >
                <ImageWithFallback src={item.src} alt={item.label} label={item.label} className="w-full aspect-square object-cover rounded-lg wobble-on-hover" />
                <p className="text-center text-[10px] tracking-widest uppercase text-ivory-dim mt-2">{item.label}</p>
              </Link>
            </Reveal>
          ))}

          {/* Stat chips, pop on hover */}
          <Reveal delay={500} className="flex justify-center gap-4 mt-16 relative z-10 flex-wrap">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl px-6 py-4 text-center spring-hover">
                <p className="font-display text-2xl glow-text"><CountUp value={s.value} /></p>
                <p className="text-[10px] tracking-[0.15em] uppercase text-ivory-dim mt-0.5">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </CursorTrail>

      {/* Wavy divider */}
      <svg viewBox="0 0 1200 40" className="w-full h-6 text-panel" preserveAspectRatio="none">
        <path
          fill="currentColor"
          d="M0,20 C150,45 350,-5 600,20 C850,45 1050,-5 1200,20 L1200,40 L0,40 Z"
        />
      </svg>

      {/* Marquee ticker — items pop and glow on hover */}
      <div className="relative bg-panel overflow-hidden py-3">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-6 px-6 shrink-0 group">
              <span className="font-display text-lg text-ivory-dim group-hover:text-gold-bright group-hover:scale-110 inline-block transition-all duration-300">
                {item}
              </span>
              <span className="text-gold text-sm wobble-on-hover inline-block">&#10022;</span>
            </span>
          ))}
        </div>
      </div>

      {/* Wavy divider (flipped) closing the marquee band */}
      <svg viewBox="0 0 1200 40" className="w-full h-6 text-panel rotate-180" preserveAspectRatio="none">
        <path
          fill="currentColor"
          d="M0,20 C150,45 350,-5 600,20 C850,45 1050,-5 1200,20 L1200,40 L0,40 Z"
        />
      </svg>

      {/* Interactive service picker — confetti pop on select */}
      <section className="relative max-w-6xl mx-auto px-6 py-28">
        {confettiOverlay}
        <Reveal className="text-center mb-14">
          <p className="font-script italic text-lg text-gold-bright mb-1">Our</p>
          <h2 className="font-display text-5xl text-ivory">Services</h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]">
              {services.map((s, i) => (
                <ImageWithFallback
                  key={s.label}
                  src={s.img}
                  alt={s.label}
                  label={s.label}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    i === activeService ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="font-display text-2xl text-ivory">{services[activeService].label}</h3>
                <p className="text-sm text-ivory-dim">{services[activeService].desc}</p>
              </div>
            </div>

            <div className="space-y-2">
              {services.map((s, i) => (
                <button
                  key={s.label}
                  onClick={(e) => {
                    setActiveService(i)
                    fireConfetti(e)
                  }}
                  className={`w-full text-left px-6 py-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group hover:scale-[1.02] ${
                    i === activeService
                      ? 'bg-gold/10 border-gold text-gold-bright'
                      : 'border-bronze/30 text-ivory-dim hover:border-gold/50 hover:text-ivory'
                  }`}
                  style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
                >
                  <span className="font-display text-xl">{s.label}</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className={`transition-transform duration-300 ${i === activeService ? 'translate-x-1' : 'group-hover:translate-x-1'}`}
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              ))}
              <Link
                to="/services"
                className="inline-block mt-4 text-xs tracking-[0.15em] uppercase text-gold hover:text-gold-bright"
              >
                View full menu &rarr;
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Before / After drag slider */}
      <section className="max-w-4xl mx-auto px-6 pb-28">
        <Reveal className="text-center mb-10">
          <p className="font-script italic text-lg text-gold-bright mb-1">See the</p>
          <h2 className="font-display text-5xl text-ivory mb-3">Transformation</h2>
          <p className="text-sm text-ivory-dim">Drag the slider to compare &#8596;</p>
        </Reveal>
        <Reveal delay={100}>
          <BeforeAfter
            before="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1000&q=80&auto=format&fit=crop"
            after="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1000&q=80&auto=format&fit=crop"
          />
        </Reveal>
      </section>

      {/* Quick Book */}
      <section className="max-w-2xl mx-auto px-6 pb-28">
        <Reveal className="shine-sweep rounded-3xl">
          <QuickBook />
        </Reveal>
      </section>

      {/* CTA strip */}
      <section className="relative overflow-hidden py-24">
        <div className="glow-orb w-[600px] h-[600px] bg-gold/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <Reveal className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-ivory mb-8">
            Ready for your <span className="glow-text italic">glow up</span>?
          </h2>
          <MagneticButton
            as={Link}
            to="/book"
            className="inline-block bg-gold text-ink px-10 py-4 rounded-full text-sm tracking-[0.1em] uppercase font-medium shadow-[0_15px_35px_-8px_rgba(201,162,75,0.4)] hover:bg-gold-bright hover:shadow-[0_20px_50px_-8px_rgba(232,205,132,0.6)]"
          >
            Book your slot
          </MagneticButton>
        </Reveal>
      </section>

      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </div>
  )
}