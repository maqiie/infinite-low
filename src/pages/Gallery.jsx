import { Link } from 'react-router-dom'

const tiles = [
  { label: 'Silk Press', span: 'row-span-2', src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=700&q=80&auto=format&fit=crop' },
  { label: 'Nail Art', span: '', src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=700&q=80&auto=format&fit=crop' },
  { label: 'Balayage', span: '', src: 'https://images.unsplash.com/photo-1522337560212-72a19afe6a5b?w=700&q=80&auto=format&fit=crop' },
  { label: 'Facial Treatment', span: 'row-span-2', src: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=700&q=80&auto=format&fit=crop' },
  { label: 'Knotless Braids', span: '', src: 'https://images.unsplash.com/photo-1595473616333-dc4c74a568bf?w=700&q=80&auto=format&fit=crop' },
  { label: 'Studio Interior', span: '', src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=700&q=80&auto=format&fit=crop' },
  { label: 'Signature Cut', span: '', src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=80&auto=format&fit=crop' },
  { label: 'Colour Gloss', span: '', src: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=700&q=80&auto=format&fit=crop' },
]

export default function Gallery() {
  return (
    <div>
      <section className="relative h-[38vh] min-h-[280px] overflow-hidden flex items-center">
        <img
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1600&q=80&auto=format&fit=crop"
          alt="Infinite Hair Glow studio"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative max-w-6xl mx-auto px-6 text-center w-full">
          <p className="font-script italic text-lg text-gold-bright mb-1">Our</p>
          <h1 className="font-display text-5xl text-ivory">Gallery</h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-ivory-dim max-w-xl mx-auto text-center mb-14">
          A look inside the studio and a sample of recent work.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px]">
          {tiles.map((tile) => (
            <div
              key={tile.label}
              className={`relative overflow-hidden group ${tile.span}`}
            >
              <img
                src={tile.src}
                alt={tile.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute inset-0 border border-transparent group-hover:border-gold/60 transition-colors" />
              <p className="absolute bottom-3 left-4 font-display text-ivory">{tile.label}</p>
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
      </div>
    </div>
  )
}
