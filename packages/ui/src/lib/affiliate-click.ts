/**
 * One affiliate_click payload for every shop hop.
 * Site, page path, partner, product or query, and placement travel together.
 * Email hops that never render this site (the message links straight at /go)
 * use the same fields from the server collect helper below. That helper reads
 * the measurement ID the layout already uses. It does not add an ID.
 */

export const SHOP_PLACEMENTS = ['hero', 'card', 'table', 'quick-pick', 'email landing'] as const

export type ShopPlacement = (typeof SHOP_PLACEMENTS)[number]

const MARKED = new Set<string>(SHOP_PLACEMENTS.filter((placement) => placement !== 'email landing'))

export function shopPlacement(input: {
  marked?: string | null
  source?: string | null
  inTable?: boolean
  inHero?: boolean
  inQuickPick?: boolean
}): ShopPlacement {
  const source = input.source ?? ''
  if (source.startsWith('email')) return 'email landing'
  if (input.marked && MARKED.has(input.marked)) return input.marked as ShopPlacement
  if (input.inQuickPick) return 'quick-pick'
  if (input.inHero) return 'hero'
  if (input.inTable) return 'table'
  return 'card'
}

/** Partner is the /go vendor. Product is the sku or search query. */
export function goHopParts(pathname: string): { partner: string; product: string } | null {
  let path = pathname
  try {
    path = decodeURIComponent(pathname)
  } catch {
    /* keep the raw path */
  }
  const parts = path.split('/').filter(Boolean)
  if (parts[0] !== 'go' || !parts[1]) return null
  return {
    partner: parts[1],
    product: parts.slice(2).join('/').replace(/\+/g, ' '),
  }
}

export interface AffiliateClickInput {
  site: string
  page: string
  href: string
  origin?: string
  marked?: string | null
  inTable?: boolean
  inHero?: boolean
  inQuickPick?: boolean
  text?: string
  dataProduct?: string | null
}

/** Null when the anchor is not a /go hop and not a marked partner link. */
export function affiliateClickParams(input: AffiliateClickInput): Record<string, string> | null {
  let url: URL
  try {
    url = new URL(input.href, input.origin ?? 'https://dog.com')
  } catch {
    return null
  }
  const go = goHopParts(url.pathname)
  if (!go && !input.marked) return null
  const sourceParam = url.searchParams.get('s')
  const source = sourceParam || input.page
  const placement = shopPlacement({
    marked: input.marked,
    source: sourceParam,
    inTable: input.inTable,
    inHero: input.inHero,
    inQuickPick: input.inQuickPick,
  })
  const partner = go?.partner || url.hostname.replace(/^www\./, '')
  const product = go?.product || (input.dataProduct ?? '').trim() || (input.text ?? '').replace(/\s+/g, ' ').trim()
  return {
    site: input.site,
    page: input.page,
    source,
    partner,
    product,
    placement,
    link_url: go ? `${url.pathname}${url.search}` : url.href,
  }
}

/**
 * GA4 collect URL for a direct /go hit whose ?s= starts with email.
 * On-site clicks already fire gtag, so callers skip this when the browser
 * says the navigation came from the same site.
 */
export function emailLandingCollectUrl(
  measurementId: string | undefined,
  fields: {
    site: string
    page: string
    source: string
    partner: string
    product: string
    clientId: string
  },
): string | null {
  if (!measurementId || measurementId === 'G-XXXXXXXXXX') return null
  if (!fields.source.startsWith('email')) return null
  const params = new URLSearchParams({
    v: '2',
    tid: measurementId,
    cid: fields.clientId,
    en: 'affiliate_click',
    'ep.site': fields.site,
    'ep.page': fields.page,
    'ep.source': fields.source,
    'ep.partner': fields.partner,
    'ep.product': fields.product,
    'ep.placement': 'email landing',
  })
  return `https://www.google-analytics.com/g/collect?${params.toString()}`
}
