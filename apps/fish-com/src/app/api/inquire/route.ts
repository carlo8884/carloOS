import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const inbox = process.env.INQUIRE_EMAIL || process.env.NEXT_PUBLIC_INQUIRE_EMAIL
  if (!inbox) return NextResponse.json({ ok: false }, { status: 503 })

  const body = await req.json().catch(() => null)
  if (!body || typeof body !== 'object') return NextResponse.json({ ok: false }, { status: 400 })
  if (body.company_website) return NextResponse.json({ ok: true })
  if (body.robot !== 'on') return NextResponse.json({ ok: false }, { status: 400 })

  const payload = {
    _subject: 'Inquiry — Fish.com',
    name: String(body.name || '').slice(0, 200),
    email: String(body.email || '').slice(0, 200),
    phone: String(body.phone || '').slice(0, 80),
    offer: String(body.offer || '').slice(0, 80),
    message: String(body.message || '').slice(0, 4000),
    site: 'fish.com',
  }

  const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(inbox)}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) return NextResponse.json({ ok: false }, { status: 502 })
  return NextResponse.json({ ok: true })
}
