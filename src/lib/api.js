const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export async function createBooking(payload) {
  const res = await fetch(`${API_URL}/api/v1/bookings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ booking: payload }),
  })

  const data = await res.json().catch(() => ({}))

  if (!res.ok) {
    const message =
      data?.errors?.join(', ') || 'Something went wrong sending your request.'
    throw new Error(message)
  }

  return data
}
