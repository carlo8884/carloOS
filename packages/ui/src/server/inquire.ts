import { NextResponse } from 'next/server'
import { INQUIRE_FALLBACK_HREF } from '../inquire-copy'

function clip(value: unknown, max: number): string {
  return String(value ?? '').slice(0, max)
}

function fail(status: number, error: string) {
  return NextResponse.json(
    { ok: false, error, fallback: INQUIRE_FALLBACK_HREF },
    { status },
  )
}

/**
 * Shared inquire handler for the five earning sites.
 * No inbox, or a rejected send, returns ok:false. ok:true only after the
 * upstream accepts the note (or the hidden honeypot trips).
 */
export async function handleInquirePost(
  req: Request,
  opts: {
    siteName: string
    siteHost: string
    env?: NodeJS.ProcessEnv
    fetchImpl?: typeof fetch
  },
): Promise<Response> {
  const env = opts.env ?? process.env
  const fetchImpl = opts.fetchImpl ?? fetch
  const inbox = env.INQUIRE_EMAIL || env.NEXT_PUBLIC_INQUIRE_EMAIL
  if (!inbox) return fail(503, 'unconfigured')

  const body = await req.json().catch(() => null)
  if (!body || typeof body !== 'object') return fail(400, 'bad-request')
  const record = body as Record<string, unknown>
  if (record.company_website) return NextResponse.json({ ok: true })
  if (record.robot !== 'on') return fail(400, 'robot')

  const intent = String(record.intent || 'offer')
  const payload = {
    _subject:
      intent === 'pro-application'
        ? `Pro application — ${opts.siteName}`
        : `Inquiry — ${opts.siteName}`,
    intent,
    name: clip(record.name, 200),
    email: clip(record.email, 200),
    phone: clip(record.phone, 80),
    offer: clip(record.offer, 80),
    city: clip(record.city, 200),
    website: clip(record.website, 300),
    credentials: clip(record.credentials, 400),
    listing: clip(record.listing, 200),
    message: clip(record.message, 4000),
    site: opts.siteHost,
  }

  let res: Response
  try {
    res = await fetchImpl(`https://formsubmit.co/ajax/${encodeURIComponent(inbox)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    })
  } catch {
    return fail(502, 'rejected')
  }
  if (!res.ok) return fail(502, 'rejected')
  return NextResponse.json({ ok: true })
}
