import { Link } from 'react-router-dom'
import { serviceGroups } from '../lib/services.js'

const groupImages = {
  'Cut & Style': 'https://images.unsplash.com/photo-1522336572468-97b06e8ef143?w=700&q=80&auto=format&fit=crop',
  'Color': 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=80&auto=format&fit=crop',
  'Braids & Locs': 'https://images.unsplash.com/photo-1595473616333-dc4c74a568bf?w=700&q=80&auto=format&fit=crop',
  'Treatments': 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=700&q=80&auto=format&fit=crop',
}

export default function Services() {
  return (
    <div>
      <section className="relative h-[38vh] min-h-[280px] overflow-hidden flex items-center">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80&auto=format&fit=crop"
          alt="Stylist working at Infinite Hair Glow"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative max-w-6xl mx-auto px-6 text-center w-full">
          <p className="font-script italic text-lg text-gold-bright mb-1">Our</p>
          <h1 className="font-display text-5xl text-ivory">Services</h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-ivory-dim max-w-xl mx-auto text-center mb-16">
          Every service starts with a consultation, so your stylist can match
          the technique to your hair &mdash; not the other way around. Prices
          are a starting guide; longer or thicker hair may adjust the quote.
        </p>

        <div className="space-y-20">
          {serviceGroups.map((group, i) => (
            <div
              key={group.group}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={groupImages[group.group]}
                  alt={group.group}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-display text-3xl text-gold-bright mb-6">{group.group}</h2>
                <ul className="space-y-4">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex justify-between border-b border-bronze/20 pb-3">
                      <div>
                        <p className="text-ivory">{item.name}</p>
                        <p className="text-xs text-ivory-dim/70 mt-0.5">{item.duration}</p>
                      </div>
                      <span className="text-ivory-dim">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
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
