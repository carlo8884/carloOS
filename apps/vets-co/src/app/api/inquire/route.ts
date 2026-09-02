import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const inbox = process.env.INQUIRE_EMAIL || process.env.NEXT_PUBLIC_INQUIRE_EMAIL
  if (!inbox) return NextResponse.json({ ok: false }, { status: 503 })
  const body = await req.json().catch(() => null)
  if (!body || typeof body !== 'object') return NextResponse.json({ ok: false }, { status: 400 })
  if (body.company_website) return NextResponse.json({ ok: true })
  if (body.robot !== 'on') return NextResponse.json({ ok: false }, { status: 400 })
  const intent = String(body.intent || 'offer')
  const payload = {
    _subject: intent === 'pro-application' ? 'Pro application — Vets.co' : 'Inquiry — Vets.co',
    intent,
    name: String(body.name || '').slice(0, 200),
    email: String(body.email || '').slice(0, 200),
    phone: String(body.phone || '').slice(0, 80),
    offer: String(body.offer || '').slice(0, 80),
    city: String(body.city || '').slice(0, 200),
    website: String(body.website || '').slice(0, 300),
    credentials: String(body.credentials || '').slice(0, 400),
    listing: String(body.listing || '').slice(0, 200),
    message: String(body.message || '').slice(0, 4000),
    site: 'vets.co',
  }
  const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(inbox)}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) return NextResponse.json({ ok: false }, { status: 502 })
  return NextResponse.json({ ok: true })
}
