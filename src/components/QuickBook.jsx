import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { serviceNames } from '../lib/services.js'

export default function QuickBook() {
  const navigate = useNavigate()
  const [service, setService] = useState(serviceNames[0])
  const [date, setDate] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const params = new URLSearchParams()
    if (service) params.set('service', service)
    if (date) params.set('date', date)
    navigate(`/book?${params.toString()}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass rounded-3xl p-8 h-full flex flex-col justify-center"
    >
      <p className="font-script italic text-xl text-gold-bright mb-1">Book your</p>
      <h3 className="font-display text-3xl text-ivory mb-6">Appointment</h3>

      <div className="space-y-4">
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full bg-ink/60 border border-bronze/40 rounded-xl px-4 py-3 text-sm text-ivory focus:border-gold outline-none"
        >
          {serviceNames.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full bg-ink/60 border border-bronze/40 rounded-xl px-4 py-3 text-sm text-ivory focus:border-gold outline-none"
        />

        <button
          type="submit"
          className="w-full bg-gold text-ink rounded-full px-6 py-3 text-sm tracking-[0.1em] uppercase hover:bg-gold-bright hover:shadow-[0_0_25px_rgba(232,205,132,0.35)] transition-all duration-300"
        >
          Book Now
        </button>
      </div>
    </form>
  )
}
