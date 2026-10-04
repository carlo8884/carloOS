/**
 * Shared /api/subscribe — five launch sites only.
 * Delivers to the same FormSubmit inbox as /api/inquire (INQUIRE_EMAIL).
 * Does not add Mailchimp. Empty inbox → 503, never a fake success.
 */
import { fishSubscribeDeliveryEnabled } from './capture-flags'
import {
  JUNK_EMAIL_MESSAGE,
  RATE_LIMIT_MESSAGE,
  clientIp,
  honeypotTripped,
  isJunkEmail,
  takeRateLimit,
} from './form-guard'

export function isValidSubscribeEmail(email: string): boolean {
  if (email.length < 3 || email.length > 200) return false
  const at = email.indexOf('@')
  if (at < 1 || at === email.length - 1) return false
  return email.includes('.', at + 1)
}

export function parseSubscribeBody(
  body: unknown,
):
  | { kind: 'honeypot' }
  | { kind: 'ok'; email: string; siteId: string; source: string }
  | { kind: 'error'; status: number; message: string } {
  if (!body || typeof body !== 'object') {
    return { kind: 'error', status: 400, message: 'Invalid request' }
  }
  const rec = body as Record<string, unknown>
  if (honeypotTripped(rec)) {
    return { kind: 'honeypot' }
  }
  const email = String(rec.email || '')
    .trim()
    .toLowerCase()
  if (!isValidSubscribeEmail(email) || isJunkEmail(email)) {
    return { kind: 'error', status: 400, message: JUNK_EMAIL_MESSAGE }
  }
  return {
    kind: 'ok',
    email,
    siteId: String(rec.siteId || '').slice(0, 80),
    source: String(rec.source || 'unknown').slice(0, 80),
  }
}

export async function deliverSubscribe(opts: {
  email: string
  site: string
  source: string
  inbox: string
  fetchImpl?: typeof fetch
}): Promise<{ ok: true } | { ok: false; status: number; message: string }> {
  const fetchImpl = opts.fetchImpl ?? fetch
  const res = await fetchImpl(
    `https://formsubmit.co/ajax/${encodeURIComponent(opts.inbox)}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        _subject: `Newsletter — ${opts.site}`,
        email: opts.email,
        source: opts.source,
        site: opts.site,
        intent: 'newsletter',
      }),
    },
  )
  if (!res.ok) {
    return { ok: false, status: 502, message: 'Could not save this address. Try again.' }
  }
  return { ok: true }
}

export async function handleSubscribePost(
  req: Request,
  opts: {
    site: string
    env?: NodeJS.ProcessEnv
    fetchImpl?: typeof fetch
    limit?: number
    now?: number
  },
): Promise<{ status: number; body: { ok?: boolean; message?: string } }> {
  const env = opts.env ?? process.env
  const inbox = env.INQUIRE_EMAIL || env.NEXT_PUBLIC_INQUIRE_EMAIL
  if (opts.site === 'fish.com' && !fishSubscribeDeliveryEnabled(env)) {
    return {
      status: 503,
      body: { message: 'Email capture is not connected yet. Try again later.' },
    }
  }
  if (!inbox) {
    return {
      status: 503,
      body: { message: 'Email capture is not connected yet. Try again later.' },
    }
  }

  const raw = await req.json().catch(() => null)
  const record = raw && typeof raw === 'object' ? (raw as Record<string, unknown>) : null
  if (record && honeypotTripped(record)) return { status: 200, body: { ok: true } }

  const limited = takeRateLimit(`subscribe:${clientIp(req)}`, { limit: opts.limit, now: opts.now })
  if (!limited.ok) return { status: 429, body: { message: RATE_LIMIT_MESSAGE } }

  const parsed = parseSubscribeBody(raw)
  if (parsed.kind === 'honeypot') return { status: 200, body: { ok: true } }
  if (parsed.kind === 'error') return { status: parsed.status, body: { message: parsed.message } }

  const delivered = await deliverSubscribe({
    email: parsed.email,
    site: opts.site,
    source: parsed.source,
    inbox,
    fetchImpl: opts.fetchImpl,
  })
  if (!delivered.ok) return { status: delivered.status, body: { message: delivered.message } }
  return { status: 200, body: { ok: true } }
}
