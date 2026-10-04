/**
 * Pure helpers for the weekly link monitor.
 * The scheduled workflow checks every /go target and outbound citation
 * on the five earning sites. This file does not fetch and does not
 * open issues.
 */

export const EARNING_SITES = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']

const SKIP_HOSTS = new Set([
  'dog.com',
  'www.dog.com',
  'fish.com',
  'www.fish.com',
  'horses.com',
  'www.horses.com',
  'vets.co',
  'www.vets.co',
  'ferret.com',
  'www.ferret.com',
  'ferrets.com',
  'www.ferrets.com',
  'lizard.com',
  'www.lizard.com',
  'saddle.com',
  'www.saddle.com',
  'petfood.com',
  'www.petfood.com',
  'petfoods.com',
  'www.petfoods.com',
  'schema.org',
  'www.schema.org',
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'images.unsplash.com',
  'images.pexels.com',
  'plus.unsplash.com',
  'localhost',
  '127.0.0.1',
])

export function goHrefsFromSource(src) {
  const found = new Set()
  const re = /\/go\/[a-z0-9-]+(?:\/[^"'\\\s?#)]+)?/gi
  for (const match of src.matchAll(re)) found.add(match[0])
  return [...found]
}

export function cleanUrl(raw) {
  return raw.replace(/[`'"\],.;)]+$/g, '')
}

export function citationUrlsFromSource(src) {
  const found = new Set()
  const re = /https?:\/\/[^\s"'<>)]+/gi
  for (const match of src.matchAll(re)) {
    const url = cleanUrl(match[0])
    if (url.includes('PLACEHOLDER') || url.includes('{') || url.includes('}')) continue
    let host
    try {
      host = new URL(url).hostname.toLowerCase()
    } catch {
      continue
    }
    if (SKIP_HOSTS.has(host)) continue
    found.add(url)
  }
  return [...found]
}

/**
 * ok: the URL answered.
 * blocked: a bot wall or rate limit, not a dead link.
 * fail: missing page, DNS/TLS/connection failure, or a 5xx other than 503.
 */
export function classifyStatus(status, error) {
  if (error) return 'fail'
  if (status >= 200 && status < 400) return 'ok'
  if (status === 401 || status === 403 || status === 405 || status === 429 || status === 503) return 'blocked'
  return 'fail'
}

export function renderReport({ checkedAt, checked, failures, blocked }) {
  const lines = [
    `# Link monitor — ${checkedAt}`,
    '',
    `Checked ${checked} unique /go targets and outbound citations on dog-com, fish-com, horses-com, vets-co, and ferret-com.`,
    'A failure is a 404, a 410, a server error other than 503, or a connection error. 401, 403, 405, 429, and 503 stay in the blocked list.',
    `FAIL=${failures.length ? 1 : 0}`,
    '',
    '## Failures',
  ]
  if (!failures.length) lines.push('none')
  else {
    for (const row of failures) {
      lines.push(`- ${row.url} — ${row.detail} — ${row.where}`)
    }
  }
  lines.push('', '## Blocked', '')
  if (!blocked.length) lines.push('none')
  else {
    const shown = blocked.slice(0, 40)
    for (const row of shown) lines.push(`- ${row.url} — ${row.detail}`)
    if (blocked.length > shown.length) lines.push(`- ${blocked.length - shown.length} more blocked URLs omitted`)
  }
  lines.push('')
  const body = lines.join('\n')
  if (/(^|\s)@/.test(body)) throw new Error('link monitor report must not mention anyone')
  return body
}
