import { Link } from 'react-router-dom'

const stylists = [
  {
    name: 'Aisha Wanjiru',
    role: 'Founder & Master Stylist',
    focus: 'Cutting, colour',
    img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&q=80&auto=format&fit=crop',
  },
  {
    name: 'Brian Otieno',
    role: 'Senior Stylist',
    focus: 'Braids, locs',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80&auto=format&fit=crop',
  },
  {
    name: 'Faith Achieng',
    role: 'Colour Specialist',
    focus: 'Balayage, gloss',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&q=80&auto=format&fit=crop',
  },
]

const values = [
  { title: 'Patience over shortcuts', desc: 'Every appointment starts with a real consultation, not a rush to the chair.' },
  { title: 'Healthy hair first', desc: "A style fades in a week; healthy hair keeps its shine long after." },
  { title: 'A small, focused studio', desc: 'Fewer chairs, one dedicated team, no rushing between clients.' },
]

export default function About() {
  return (
    <div>
      <section className="relative h-[38vh] min-h-[280px] overflow-hidden flex items-center">
        <img
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&q=80&auto=format&fit=crop"
          alt="Infinite Hair Glow team at work"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative max-w-6xl mx-auto px-6 text-center w-full">
          <p className="font-script italic text-lg text-gold-bright mb-1">About</p>
          <h1 className="font-display text-5xl text-ivory">Our Story</h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80&auto=format&fit=crop"
            alt="Infinite Hair Glow studio interior"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-script italic text-lg text-gold-bright mb-1">Beauty. Passion.</p>
          <h2 className="font-display text-4xl text-ivory mb-6">
            Hair care built on <span className="glow-text italic">patience</span>.
          </h2>
          <p className="text-ivory-dim leading-relaxed mb-4">
            Infinite Glow Hair Studio opened in Nairobi with a simple belief:
            a good style fades in a week, but healthy hair keeps its shine
            long after. Every appointment starts with a real conversation
            about your hair's history, not just the look you want today.
          </p>
          <p className="text-ivory-dim leading-relaxed">
            We keep the studio small on purpose &mdash; a few chairs, one
            team, no rushing. That's the whole philosophy behind the black
            &amp; gold: understated space, so the work is what stands out.
          </p>
        </div>
      </section>

      <section className="bg-panel border-y border-bronze/30">
        <div className="max-w-6xl mx-auto px-6 py-20 grid sm:grid-cols-3 gap-10">
          {values.map((v) => (
            <div key={v.title} className="text-center">
              <div className="w-10 h-10 border border-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              </div>
              <h3 className="font-display text-lg text-gold-bright mb-2">{v.title}</h3>
              <p className="text-sm text-ivory-dim leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="font-script italic text-lg text-gold-bright mb-1">Meet</p>
          <h2 className="font-display text-4xl text-ivory">The Team</h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {stylists.map((s) => (
            <div key={s.name}>
              <div className="aspect-[3/4] overflow-hidden mb-4">
                <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
              </div>
              <p className="font-display text-xl text-ivory mb-1">{s.name}</p>
              <p className="text-xs tracking-widest uppercase text-gold mb-2">{s.role}</p>
              <p className="text-sm text-ivory-dim">{s.focus}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/book"
            className="bg-gold text-ink px-8 py-3 text-sm tracking-[0.15em] uppercase hover:bg-gold-bright transition-colors"
          >
            Book an appointment
          </Link>
        </div>
      </section>
    </div>
  )
}
