import { useState } from 'react'

const testimonials = [
  {
    name: 'Wambui M.',
    quote:
      'The best salon experience in Nairobi. The team is professional, friendly, and my hair has never looked better.',
  },
  {
    name: 'Amina K.',
    quote:
      'From the moment you walk in, you feel taken care of. I love the attention to detail on every visit.',
  },
  {
    name: 'Naliaka W.',
    quote:
      'Clean, luxurious space and genuinely skilled stylists. My braids lasted twice as long as anywhere else.',
  },
]

function Stars() {
  return (
    <div className="flex gap-1 text-gold mb-3" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  function prev() {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  }

  function next() {
    setIndex((i) => (i + 1) % testimonials.length)
  }

  const current = testimonials[index]

  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <div className="glass rounded-3xl px-6 py-16 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Testimonials</p>
        <h2 className="font-display text-3xl text-ivory mb-10">What our clients say</h2>

        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-bronze/40 flex items-center justify-center text-ivory-dim hover:border-gold hover:text-gold-bright transition-colors"
          >
            &larr;
          </button>

          <div className="min-h-[160px] flex flex-col items-center justify-center">
            <Stars />
            <p className="text-ivory-dim leading-relaxed max-w-md mb-4">
              &ldquo;{current.quote}&rdquo;
            </p>
            <p className="font-display text-gold-bright">{current.name}</p>
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-bronze/40 flex items-center justify-center text-ivory-dim hover:border-gold hover:text-gold-bright transition-colors"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  )
}
