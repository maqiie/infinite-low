import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { createBooking } from '../lib/api.js'
import { serviceNames } from '../lib/services.js'

export default function Book() {
  const [searchParams] = useSearchParams()

  const initialForm = {
    name: '',
    email: '',
    phone: '',
    service: searchParams.get('service') || serviceNames[0],
    preferred_date: searchParams.get('date') || '',
    notes: '',
  }

  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [error, setError] = useState('')

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    setError('')
    try {
      await createBooking(form)
      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      setError(err.message)
    }
  }

  if (status === 'success') {
    return (
      <div className="max-w-xl mx-auto px-6 py-32 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Request sent</p>
        <h1 className="font-display text-4xl text-ivory mb-4">
          You're on the <span className="glow-text italic">books</span>.
        </h1>
        <p className="text-ivory-dim mb-8">
          We've received your request and will confirm your slot by phone or
          email within one business day.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="border border-gold text-gold-bright px-6 py-3 text-sm tracking-[0.15em] uppercase hover:bg-gold hover:text-ink transition-colors"
        >
          Book another
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-xl mx-auto px-6 py-20">
      <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Reserve your chair</p>
      <h1 className="font-display text-4xl text-ivory mb-3">Book an appointment</h1>
      <p className="text-ivory-dim mb-10">
        Tell us what you're after and a preferred date. This sends a request
        &mdash; we'll confirm the exact time with you directly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <Field label="Full name">
          <input
            required
            type="text"
            value={form.name}
            onChange={update('name')}
            className="w-full bg-panel border border-bronze/40 px-4 py-3 text-ivory focus:border-gold outline-none"
            placeholder="Your name"
          />
        </Field>

        <div className="grid sm:grid-cols-2 gap-6">
          <Field label="Email">
            <input
              required
              type="email"
              value={form.email}
              onChange={update('email')}
              className="w-full bg-panel border border-bronze/40 px-4 py-3 text-ivory focus:border-gold outline-none"
              placeholder="you@example.com"
            />
          </Field>
          <Field label="Phone">
            <input
              required
              type="tel"
              value={form.phone}
              onChange={update('phone')}
              className="w-full bg-panel border border-bronze/40 px-4 py-3 text-ivory focus:border-gold outline-none"
              placeholder="07xx xxx xxx"
            />
          </Field>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <Field label="Service">
            <select
              value={form.service}
              onChange={update('service')}
              className="w-full bg-panel border border-bronze/40 px-4 py-3 text-ivory focus:border-gold outline-none"
            >
              {serviceNames.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </Field>
          <Field label="Preferred date">
            <input
              required
              type="date"
              value={form.preferred_date}
              onChange={update('preferred_date')}
              className="w-full bg-panel border border-bronze/40 px-4 py-3 text-ivory focus:border-gold outline-none"
            />
          </Field>
        </div>

        <Field label="Notes (optional)">
          <textarea
            value={form.notes}
            onChange={update('notes')}
            rows={4}
            className="w-full bg-panel border border-bronze/40 px-4 py-3 text-ivory focus:border-gold outline-none resize-none"
            placeholder="Anything your stylist should know"
          />
        </Field>

        {status === 'error' && (
          <p className="text-sm text-red-400 border border-red-400/40 px-4 py-3">
            {error || 'Something went wrong. Please try again.'}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-gold text-ink px-8 py-3 text-sm tracking-[0.15em] uppercase hover:bg-gold-bright transition-colors disabled:opacity-60"
        >
          {status === 'submitting' ? 'Sending…' : 'Request appointment'}
        </button>
      </form>
    </div>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-xs tracking-[0.2em] uppercase text-ivory-dim mb-2">
        {label}
      </span>
      {children}
    </label>
  )
}
