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

export type HopDestinationType = 'ASIN' | 'search' | 'other'

/** ASIN, Amazon search query, or anything else the hop opens. */
export function hopDestination(partner: string, product: string): {
  destination_type: HopDestinationType
  destination: string
} {
  const compact = product.replace(/\s+/g, '')
  if (partner === 'amazon' && /^[A-Z0-9]{10}$/i.test(compact)) {
    return { destination_type: 'ASIN', destination: compact.toUpperCase() }
  }
  if (partner === 'amazon-brand' || partner === 'amazon') {
    return { destination_type: 'search', destination: product }
  }
  return { destination_type: 'other', destination: product }
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
  /** Review-card id, or hero / result / table / search-recovery. */
  slot?: string | null
  /** On-site suggestion from an empty search or a 404. Not a /go hop. */
  recoveryPath?: string | null
}

/** Null when the anchor is not a /go hop and not a marked partner link. */
export function affiliateClickParams(input: AffiliateClickInput): Record<string, string> | null {
  let url: URL
  try {
    url = new URL(input.href, input.origin ?? 'https://dog.com')
  } catch {
    return null
  }
  const recoveryPath = (input.recoveryPath ?? '').trim()
  const go = goHopParts(url.pathname)
  if (!go && !input.marked && !recoveryPath) return null
  const sourceParam = url.searchParams.get('s')
  const source = sourceParam || input.page
  const placement = shopPlacement({
    marked: input.marked,
    source: sourceParam,
    inTable: input.inTable,
    inHero: input.inHero,
    inQuickPick: input.inQuickPick,
  })
  const partner = recoveryPath ? input.site : go?.partner || url.hostname.replace(/^www\./, '')
  const product = recoveryPath
    || go?.product
    || (input.dataProduct ?? '').trim()
    || (input.text ?? '').replace(/\s+/g, ' ').trim()
  const destination = hopDestination(partner, product)
  const slot = (input.slot ?? '').trim() || (recoveryPath ? 'search-recovery' : placement)
  return {
    site: input.site,
    page: input.page,
    source,
    partner,
    vendor: partner,
    product,
    placement,
    link_url: recoveryPath || (go ? `${url.pathname}${url.search}` : url.href),
    slot,
    destination_type: recoveryPath ? 'other' : destination.destination_type,
    destination: recoveryPath || destination.destination,
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
  const destination = hopDestination(fields.partner, fields.product)
  const params = new URLSearchParams({
    v: '2',
    tid: measurementId,
    cid: fields.clientId,
    en: 'affiliate_click',
    'ep.site': fields.site,
    'ep.page': fields.page,
    'ep.source': fields.source,
    'ep.partner': fields.partner,
    'ep.vendor': fields.partner,
    'ep.product': fields.product,
    'ep.placement': 'email landing',
    'ep.slot': 'email landing',
    'ep.destination_type': destination.destination_type,
    'ep.destination': destination.destination,
  })
  return `https://www.google-analytics.com/g/collect?${params.toString()}`
}

/**
 * Same email /go hit, second GA4 event. card_id matches the email slot.
 * On-site shop clicks send hop_click from AffiliateClickListener instead.
 */
export function emailLandingHopClickUrl(
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
  const collect = emailLandingCollectUrl(measurementId, fields)
  if (!collect) return null
  const url = new URL(collect)
  url.searchParams.set('en', 'hop_click')
  url.searchParams.set('ep.card_id', 'email landing')
  return url.toString()
}
