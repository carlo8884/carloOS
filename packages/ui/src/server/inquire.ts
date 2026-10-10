import { NextResponse } from 'next/server'
import {
  clientIp,
  honeypotTripped,
  isJunkEmail,
  isJunkLabel,
  isJunkMessage,
  isJunkOffer,
  isJunkPhone,
  takeRateLimit,
} from '@carloOS/config/form-guard'
import { inquireCaptureEnabled } from '@carloOS/config/capture-flags'
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
 * No inbox returns ok:false with HTTP 200 so a visitor never sees 503.
 * A rejected send returns ok:false. ok:true only after the upstream
 * accepts the note (or the hidden honeypot trips).
 */
export async function handleInquirePost(
  req: Request,
  opts: {
    siteName: string
    siteHost: string
    env?: NodeJS.ProcessEnv
    fetchImpl?: typeof fetch
    limit?: number
    now?: number
  },
): Promise<Response> {
  const env = opts.env ?? process.env
  const fetchImpl = opts.fetchImpl ?? fetch
  const inbox = env.INQUIRE_EMAIL || env.NEXT_PUBLIC_INQUIRE_EMAIL
  if (!inquireCaptureEnabled(opts.siteHost, env) || !inbox) {
    return NextResponse.json(
      { ok: false, error: 'unconfigured', fallback: INQUIRE_FALLBACK_HREF },
      { status: 200 },
    )
  }

  const body = await req.json().catch(() => null)
  if (!body || typeof body !== 'object') return fail(400, 'bad-request')
  const record = body as Record<string, unknown>
  if (honeypotTripped(record)) return NextResponse.json({ ok: true })

  const limited = takeRateLimit(`inquire:${clientIp(req)}`, { limit: opts.limit, now: opts.now })
  if (!limited.ok) return fail(429, 'rate-limit')

  if (record.robot !== 'on') return fail(400, 'robot')
  const email = String(record.email || '')
  const name = String(record.name || '')
  const message = String(record.message || '')
  if (
    isJunkEmail(email) ||
    isJunkLabel(name) ||
    isJunkMessage(message) ||
    isJunkPhone(String(record.phone || '')) ||
    isJunkOffer(String(record.offer || ''))
  ) {
    return fail(422, 'junk')
  }

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
