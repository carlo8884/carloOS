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

/** Comparison-table and gift-guide shop links. Both use TableShopLink. */
export function tableShopHrefs(src) {
  const found = []
  const re = /<TableShopLink\b[^>]*?\bhref=\{(?:"([^"]+)"|`([^`]+)`)}/g
  for (const match of src.matchAll(re)) found.push(match[1] || match[2])
  return found
}

/** ReviewCard ctaHref and ShopCtas amazonHref / chewyHref hops. */
export function cardShopHrefs(src) {
  const found = []
  const re = /\b(?:ctaHref|amazonHref|chewyHref)\s*=\s*(?:"(\/go\/[^"]+)"|\{"(\/go\/[^"]+)"\})/g
  for (const match of src.matchAll(re)) found.push(match[1] || match[2])
  return found
}

export function missingShopSource(href) {
  return !String(href).includes('?s=')
}

/**
 * One redirect after the retailer URL is the store's own canonical or
 * product hop. A longer chain is a failure. Bot walls stay blocked.
 */
export function classifyRedirectChain(statuses, error = '') {
  if (error) return { kind: 'fail', detail: error }
  if (!statuses?.length) return { kind: 'fail', detail: 'no response' }
  const redirects = statuses.slice(0, -1).filter((status) => status >= 300 && status < 400).length
  const status = statuses[statuses.length - 1]
  if (redirects > 1) return { kind: 'fail', detail: `redirect chain ${redirects}` }
  if (status === 404 || status === 410) return { kind: 'fail', detail: `HTTP ${status}` }
  if (status >= 500 && status !== 503) return { kind: 'fail', detail: `HTTP ${status}` }
  if (status === 401 || status === 403 || status === 405 || status === 429 || status === 503) {
    return { kind: 'blocked', detail: `HTTP ${status}` }
  }
  if (status >= 200 && status < 400) return { kind: 'ok', detail: `HTTP ${status}` }
  if (status === 0) return { kind: 'fail', detail: 'no response' }
  return { kind: 'fail', detail: `HTTP ${status}` }
}

/** Amazon search hops must carry the tag when the environment has one. */
export function amazonTagProblem(url, env = {}) {
  if (String(url).includes('PLACEHOLDER')) return 'PLACEHOLDER'
  let parsed
  try {
    parsed = new URL(url)
  } catch {
    return 'bad url'
  }
  const host = parsed.hostname.toLowerCase().replace(/^www\./, '')
  if (host !== 'amazon.com' || !parsed.pathname.startsWith('/s')) return ''
  const tag = env.AFF_AMAZON_TAG || env.AFF_AMAZON_BRAND_TAG || ''
  if (!tag) return ''
  if (parsed.searchParams.get('tag') !== tag) return 'amazon tag mismatch'
  return ''
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

/**
 * A retailer search document is empty only when the page says so and it
 * does not also contain a normal result list. Rate-limit and captcha
 * pages are not empty searches.
 */
export function isEmptySearchHtml(html, asinCount = 0) {
  const text = String(html || '').toLowerCase()
  if (!text) return false
  if (text.includes('captcha') || text.includes('robot check') || text.includes('service unavailable')) return false
  const saysEmpty =
    text.includes('no results for your search query') ||
    text.includes('did not match any products')
  return saysEmpty && asinCount < 4
}

/**
 * Shop-link probe only. A 200 page that says the search is empty fails.
 * 401, 403, 405, 429, and 503 stay blocked, including when the body
 * also contains an empty-search phrase.
 */
export function shopSearchVerdict(statuses, error = '', html = '') {
  const verdict = classifyRedirectChain(statuses, error)
  if (verdict.kind !== 'ok') return verdict
  const asinCount = (String(html).match(/data-asin="[A-Z0-9]/gi) || []).length
  if (isEmptySearchHtml(html, asinCount)) return { kind: 'fail', detail: 'empty search' }
  return verdict
}

export function renderReport({ checkedAt, checked, failures, blocked, shop }) {
  const shopFailures = shop?.failures?.length ?? 0
  const lines = [
    `# Link monitor — ${checkedAt}`,
    '',
    `Checked ${checked} unique /go targets and outbound citations on dog-com, fish-com, horses-com, vets-co, and ferret-com.`,
    'A failure is a 404, a 410, a server error other than 503, or a connection error. 401, 403, 405, 429, and 503 stay in the blocked list.',
    `FAIL=${failures.length || shopFailures ? 1 : 0}`,
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
  if (shop) {
    lines.push('## Comparison-table and gift-guide shop links', '')
    lines.push(
      `Checked ${shop.checked} unique retailer targets from TableShopLink, ReviewCard, and ShopCtas hops on dog-com, fish-com, horses-com, vets-co, and ferret-com, including the November and December gift guides.`,
    )
    lines.push(
      `Hidden Chewy hops with no tag: ${shop.hidden}. Those rows do not render a shop link.`,
    )
    lines.push(
      'A shop failure is a 404, a 410, a server error other than 503, a missing ?s= source, an Amazon search whose tag does not match the environment, more than one redirect, or an empty retailer search. One redirect is the retailer canonical or product hop. 401, 403, 405, 429, and 503 stay blocked.',
    )
    lines.push('', '### Shop failures', '')
    if (!shop.failures.length) lines.push('none')
    else {
      for (const row of shop.failures) {
        lines.push(`- ${row.url} — ${row.detail} — ${row.where}`)
      }
    }
    lines.push('', '### Shop blocked', '')
    if (!shop.blocked.length) lines.push('none')
    else {
      const shown = shop.blocked.slice(0, 20)
      for (const row of shown) lines.push(`- ${row.url} — ${row.detail}`)
      if (shop.blocked.length > shown.length) {
        lines.push(`- ${shop.blocked.length - shown.length} more blocked shop URLs omitted`)
      }
    }
    lines.push('')
  }
  const body = lines.join('\n')
  if (/(^|\s)@/.test(body)) throw new Error('link monitor report must not mention anyone')
  return body
}
