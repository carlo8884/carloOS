/**
 * Shared spam checks for the guide address form and the inquiry form.
 * Honeypot hits look like success so a bot is not told it was caught.
 * Junk and rate limits say the note was not saved.
 */

const HONEYPOT = 'company_website'

const JUNK_WORDS = new Set([
  'test',
  'testing',
  'asdf',
  'asdfasdf',
  'qwerty',
  'spam',
  'fake',
  'xxx',
  'aaa',
  'none',
  'null',
  'na',
  'abc',
  'foo',
  'bar',
  'admin',
  'user',
])

const JUNK_DOMAINS = new Set([
  'test.com',
  'asdf.com',
  'fake.com',
  'spam.com',
  'mailinator.com',
  'guerrillamail.com',
  'guerrillamail.info',
  'yopmail.com',
  'tempmail.com',
  '10minutemail.com',
  'trashmail.com',
  'sharklasers.com',
])

const hits = new Map<string, number[]>()

export function honeypotTripped(record: Record<string, unknown>): boolean {
  const value = record[HONEYPOT]
  return typeof value === 'string' && value.trim().length > 0
}

export function isJunkEmail(email: string): boolean {
  const normalized = email.trim().toLowerCase()
  if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(normalized)) return true
  const at = normalized.indexOf('@')
  const local = normalized.slice(0, at)
  const domain = normalized.slice(at + 1)
  if (JUNK_WORDS.has(local)) return true
  if (/^(.)\1{5,}$/.test(local)) return true
  if (JUNK_DOMAINS.has(domain)) return true
  const host = domain.split('.')[0] || ''
  if (JUNK_WORDS.has(host)) return true
  if (/^(.)\1{3,}$/.test(host)) return true
  return false
}

export function isJunkLabel(value: string): boolean {
  const text = value.trim().toLowerCase()
  if (!text) return false
  if (text.length < 2) return true
  if (JUNK_WORDS.has(text)) return true
  if (/^(.)\1{4,}$/.test(text)) return true
  return false
}

export function isJunkMessage(value: string): boolean {
  const text = value.trim()
  if (text.length < 4) return true
  if (isJunkLabel(text)) return true
  if (/^(https?:\/\/\S+)$/i.test(text)) return true
  return false
}

export function isJunkPhone(value: string): boolean {
  const text = value.trim()
  if (!text) return false
  const digits = text.replace(/\D/g, '')
  if (digits.length < 7 || digits.length > 15) return true
  if (/^(.)\1+$/.test(digits)) return true
  if (digits === '1234567890' || digits === '0123456789') return true
  return false
}

export function isJunkOffer(value: string): boolean {
  const text = value.trim()
  if (!text) return false
  return !/^\d{1,9}(\.\d{1,2})?$/.test(text.replace(/[$,\s]/g, ''))
}

export function clientIp(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for')
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim()
    if (first) return first.slice(0, 80)
  }
  const real = req.headers.get('x-real-ip')?.trim()
  if (real) return real.slice(0, 80)
  return 'unknown'
}

export function takeRateLimit(
  key: string,
  opts?: { limit?: number; windowMs?: number; now?: number },
): { ok: true } | { ok: false; retryAfterSec: number } {
  const limit = opts?.limit ?? 8
  const windowMs = opts?.windowMs ?? 10 * 60 * 1000
  const now = opts?.now ?? Date.now()
  const recent = (hits.get(key) ?? []).filter((at) => now - at < windowMs)
  if (recent.length >= limit) {
    hits.set(key, recent)
    const retryAfterSec = Math.max(1, Math.ceil((recent[0] + windowMs - now) / 1000))
    return { ok: false, retryAfterSec }
  }
  recent.push(now)
  hits.set(key, recent)
  return { ok: true }
}

export function resetFormGuardForTests(): void {
  hits.clear()
}

export const JUNK_EMAIL_MESSAGE = "That address doesn't look usable. Enter the one you actually use."
export const RATE_LIMIT_MESSAGE = 'Too many tries from this network. Wait a few minutes and try again.'
export const JUNK_NOTE_MESSAGE = "That note doesn't look usable, so it was not sent."
