# Infinite Hair Glow — Frontend

React + Vite + Tailwind CSS v4. Black & gold salon site with a booking
form that posts to the Rails API.

## Setup

```bash
cp .env.example .env    # points to your local Rails API
npm install
npm run dev              # http://localhost:5173
```

## Structure

- `src/pages/` — Home, Services, Gallery, About, Book, Contact
- `src/components/` — Navbar, Footer
- `src/lib/services.js` — service menu data (edit prices/names here)
- `src/lib/api.js` — `createBooking()`, posts to `VITE_API_URL + /api/v1/bookings`
- `src/index.css` — Tailwind v4 theme tokens (colors, fonts) + the
  `.glow-text` shimmer effect used for the brand accent

## Design tokens

| Token | Value | Use |
|---|---|---|
| `--color-ink` | `#0d0b09` | page background |
| `--color-panel` | `#17140f` | cards, form fields |
| `--color-gold` | `#c9a24b` | primary accent, buttons |
| `--color-gold-bright` | `#e8cd84` | hover state, highlights |
| `--color-bronze` | `#7a6640` | borders, muted text |
| `--color-ivory` | `#f4eee0` | primary text |

Fonts: **Bodoni Moda** (display headings), **Manrope** (body/UI),
**Cormorant Garamond italic** (script accent, used sparingly for quotes).

Run `npm run build` to produce a production bundle in `dist/`.
