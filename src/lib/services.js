export const serviceGroups = [
  {
    group: 'Cut & Style',
    items: [
      { name: 'Signature Cut', price: 'KSh 2,500', duration: '45 min' },
      { name: 'Wash, Cut & Blow-dry', price: 'KSh 3,200', duration: '1 hr' },
      { name: 'Silk Press', price: 'KSh 3,500', duration: '1 hr 15 min' },
    ],
  },
  {
    group: 'Color',
    items: [
      { name: 'Full Colour', price: 'KSh 6,500', duration: '2 hr' },
      { name: 'Balayage & Highlights', price: 'KSh 9,000', duration: '3 hr' },
      { name: 'Gloss & Toner', price: 'KSh 3,000', duration: '45 min' },
    ],
  },
  {
    group: 'Braids & Locs',
    items: [
      { name: 'Knotless Braids', price: 'KSh 4,500', duration: '3 hr' },
      { name: 'Cornrows', price: 'KSh 2,000', duration: '1 hr 30 min' },
      { name: 'Loc Retwist', price: 'KSh 3,000', duration: '1 hr 30 min' },
    ],
  },
  {
    group: 'Treatments',
    items: [
      { name: 'Deep Conditioning', price: 'KSh 1,800', duration: '30 min' },
      { name: 'Scalp Treatment', price: 'KSh 2,200', duration: '40 min' },
      { name: 'Keratin Treatment', price: 'KSh 8,000', duration: '2 hr 30 min' },
    ],
  },
]

export const serviceNames = serviceGroups.flatMap((g) => g.items.map((i) => i.name))
