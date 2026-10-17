/**
 * AI-answer referrers for Vets.co and Ferret.com.
 * GA4 only. A Vercel custom event waits until the analytics mount in PR #2832
 * is on main. No-op when the measurement ID is unset: callers skip the send.
 */

export const AI_SOURCE_STORAGE_KEY = 'carlo_ai_source'
export const AI_REFERRAL_SENT_KEY = 'carlo_ai_referral_sent'

const AI_SITES = new Set(['vets-co', 'ferret-com'])

const SOURCES: Array<{ id: string; host: string; pathPrefix?: string }> = [
  { id: 'chat.openai.com', host: 'chat.openai.com' },
  { id: 'chatgpt.com', host: 'chatgpt.com' },
  { id: 'perplexity.ai', host: 'perplexity.ai' },
  { id: 'gemini.google.com', host: 'gemini.google.com' },
  { id: 'copilot.microsoft.com', host: 'copilot.microsoft.com' },
  { id: 'claude.ai', host: 'claude.ai' },
  { id: 'bing.com/chat', host: 'bing.com', pathPrefix: '/chat' },
]

function hostMatches(hostname: string, host: string): boolean {
  const name = hostname.toLowerCase().replace(/^www\./, '')
  return name === host || name.endsWith(`.${host}`)
}

function fromUrl(raw: string): string | null {
  let url: URL
  try {
    url = new URL(raw)
  } catch {
    return null
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return null
  for (const source of SOURCES) {
    if (!hostMatches(url.hostname, source.host)) continue
    if (source.pathPrefix && !url.pathname.toLowerCase().startsWith(source.pathPrefix)) continue
    return source.id
  }
  return null
}

/** Canonical ai_source, or null when the referrer and utm_source are not an AI answer surface. */
export function matchAiSource(input: { referrer?: string | null; utmSource?: string | null }): string | null {
  const utm = (input.utmSource ?? '').trim()
  if (utm) {
    const fromUtm = fromUrl(utm.includes('://') ? utm : `https://${utm}`)
    if (fromUtm) return fromUtm
  }
  const referrer = (input.referrer ?? '').trim()
  if (!referrer) return null
  return fromUrl(referrer)
}

/**
 * Fresh referrer or utm wins. A stored id from earlier in the session still
 * counts after the next page's referrer is this site.
 */
export function resolveAiSource(input: {
  referrer?: string | null
  utmSource?: string | null
  stored?: string | null
}): string | null {
  const fresh = matchAiSource({ referrer: input.referrer, utmSource: input.utmSource })
  if (fresh) return fresh
  return matchAiSource({ utmSource: input.stored })
}

/** Adds ai_source on Vets.co and Ferret.com only. Other sites keep the original payload. */
export function affiliateClickWithAiSource<T extends Record<string, unknown>>(
  site: string,
  params: T,
  source: string | null,
): T {
  if (!source || !AI_SITES.has(site)) return params
  return { ...params, ai_source: source }
}
