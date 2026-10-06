/**
 * Shared /go hop resolver — one implementation for dog, fish, horses, vets, ferret.
 * Never writes literal PLACEHOLDER into Location or hop query strings.
 * Empty retail hop → partner homepage 302. Missing Amazon/Chewy tag → partner homepage, never 404.
 * Other vendors (insurance, telehealth) keep the template path when the tag is unset,
 * with the PLACEHOLDER param removed, so a quote button does not dump onto a homepage.
 * When AFF_<VENDOR>_TAG is set, that tag is substituted into the template.
 * amazon-brand falls back to AFF_AMAZON_TAG when AFF_AMAZON_BRAND_TAG is empty.
 */

import { crossSiteHref } from './site-origin'

export interface AffiliateRoute {
  name: string
  template: string
  requiresSku?: boolean
}

export const PARTNER_HOME: Record<string, string> = {
  amazon: 'https://www.amazon.com',
  'amazon-brand': 'https://www.amazon.com',
  chewy: 'https://www.chewy.com',
  'chewy-brand': 'https://www.chewy.com',
  'chewy-pharmacy': 'https://www.chewy.com',
}

/** Dog.com insurance Quote/Find CTAs go here. Do not re-rank carriers on Dog.com. */
export const VETS_PET_INSURANCE_REVIEW = crossSiteHref('vets-co', '/reviews/best-pet-insurance')

const CHEWY_TAG_KEYS = ['AFF_CHEWY_TAG', 'AFF_CHEWY_BRAND_TAG', 'AFF_CHEWY_PHARMACY_TAG'] as const

export function isChewyHop(vendorOrHref: string): boolean {
  return vendorOrHref.toLowerCase().includes('chewy')
}

/** True only when a Chewy tag is set. Empty hop → hide the button, never href="#". */
export function isChewyHopLive(env: NodeJS.ProcessEnv = process.env): boolean {
  return CHEWY_TAG_KEYS.some((key) => {
    const value = env[key]
    return typeof value === 'string' && value.length > 0
  })
}

export function visibleChewyHref(
  href: string | undefined,
  env: NodeJS.ProcessEnv = process.env,
): string | undefined {
  if (!href || href === '#') return undefined
  if (isChewyHop(href) && !isChewyHopLive(env)) return undefined
  return href
}

/**
 * Chewy-brand search hops can earn on Amazon until Carlo sets a Chewy tag.
 * Only `/go/chewy-brand/{query}` rewrites. `/go/chewy/connect` and pharmacy
 * hops stay hidden — those are not Amazon search queries.
 */
export function amazonFallbackFromChewyHref(href: string): string | undefined {
  const match = href.match(/^(\/go\/)chewy-brand\/([^?#]+)([?#].*)?$/i)
  if (!match) return undefined
  return `${match[1]}amazon-brand/${match[2]}${match[3] ?? ''}`
}

/** Shop CTA href: hide empty Chewy, or fall Chewy-brand search hops back to Amazon. Never "#". */
export function visibleShopHref(
  href: string | undefined,
  env: NodeJS.ProcessEnv = process.env,
): string | undefined {
  if (!href || href === '#') return undefined
  if (!isChewyHop(href)) return href
  const chewy = visibleChewyHref(href, env)
  if (chewy) return chewy
  return amazonFallbackFromChewyHref(href)
}

/** Display names for a product-row shop link. Unknown vendors are not labeled. */
const SHOP_RETAILER: Record<string, string> = {
  amazon: 'Amazon',
  'amazon-brand': 'Amazon',
  chewy: 'Chewy',
  'chewy-brand': 'Chewy',
  'chewy-pharmacy': 'Chewy',
  smartpak: 'SmartPak',
  schneider: 'Schneiders',
  ridingwarehouse: 'Riding Warehouse',
  dover: 'Dover',
  wysong: 'Wysong',
  marshall: 'Marshall',
  trupanion: 'Trupanion',
  'healthy-paws': 'Healthy Paws',
  embrace: 'Embrace',
  'pets-best': 'Pets Best',
  lemonade: 'Lemonade',
  pumpkin: 'Pumpkin',
  vetster: 'Vetster',
  askvet: 'AskVet',
}

/**
 * A comparison-table shop link built from an existing /go href.
 * Chewy-brand search hops fall back to the same Amazon search.
 * The ?s= attribution query is kept. /home stays /home.
 */
export function tableShopLink(
  href: string,
  product: string,
  env: NodeJS.ProcessEnv = process.env,
): { href: string; label: string } | null {
  const visible = visibleShopHref(href, env)
  if (!visible?.startsWith('/go/')) return null
  const path = visible.split('?')[0].split('/')
  const vendor = path[2] ?? ''
  const sku = path[3] ?? ''
  const retailer = SHOP_RETAILER[vendor]
  if (!retailer || !product.trim()) return null
  const sameName = product.trim().toLowerCase() === retailer.toLowerCase()
  const label = sku === 'home' || sameName ? `${product} quote` : `${product} on ${retailer}`
  return { href: visible, label }
}

const DEFAULT_HOME = 'https://www.amazon.com'

/** Vendors whose `/home` sku means the storefront, not a product slug. */
const STOREFRONT_HOME = new Set([
  'embark',
  'wisdom-panel',
  'smartpak',
  'dover',
  'schneider',
  'ridingwarehouse',
  'marshall',
  'wysong',
])

/** Amazon and Chewy stay on the partner homepage until a tag and sku exist. */
const RETAIL_VENDORS = new Set(['amazon', 'amazon-brand', 'chewy', 'chewy-brand', 'chewy-pharmacy'])

export function isRetailVendor(vendor: string): boolean {
  return RETAIL_VENDORS.has(vendor)
}

/** Associates tag, copied from AFF_AMAZON_TAG with nothing appended and no built-in default. */
export function amazonAssociateTag(env: NodeJS.ProcessEnv = process.env): string {
  const tag = env.AFF_AMAZON_TAG
  return typeof tag === 'string' ? tag : ''
}

const PARTNER_ID_VENDORS = new Set(['trupanion', 'healthy-paws', 'embrace'])

/**
 * Trupanion, Healthy Paws, and Embrace quote buttons stay on the page, but
 * they are not a working hop until that vendor's AFF_*_TAG is set. Other
 * hrefs are unchanged. This does not invent an ID.
 */
export function partnerTagReady(
  href: string | undefined,
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  if (!href) return false
  const vendor = href.match(/^\/go\/([^/?#]+)/)?.[1] ?? ''
  if (!PARTNER_ID_VENDORS.has(vendor)) return true
  return resolveTag(vendor, env).tag.length > 0
}

export function partnerNeededLabel(label: string): string {
  const base = label.replace(/\s*→\s*$/, '').trim()
  return base ? 'Quotes not available here yet' : 'Quotes not available here yet'
}

/** True when this href is a Trupanion, Healthy Paws, or Embrace quote and its tag is unset. */
export function partnerQuoteHeld(
  href: string | undefined,
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  if (!href) return false
  return !partnerTagReady(href, env)
}

export function resolveTag(
  vendor: string,
  env: NodeJS.ProcessEnv = process.env,
): { tag: string; envVarName: string } {
  if (vendor === 'amazon' || vendor === 'amazon-brand') {
    if (vendor === 'amazon-brand') {
      const brand = env.AFF_AMAZON_BRAND_TAG
      if (typeof brand === 'string' && brand.length > 0) {
        return { tag: brand, envVarName: 'AFF_AMAZON_BRAND_TAG' }
      }
    }
    const tag = amazonAssociateTag(env)
    if (tag.length > 0) return { tag, envVarName: 'AFF_AMAZON_TAG' }
    return {
      tag: '',
      envVarName: vendor === 'amazon' ? 'AFF_AMAZON_TAG' : 'AFF_AMAZON_BRAND_TAG',
    }
  }
  const primaryName = `AFF_${vendor.replace(/-/g, '_').toUpperCase()}_TAG`
  const primary = env[primaryName]
  if (typeof primary === 'string' && primary.length > 0) {
    return { tag: primary, envVarName: primaryName }
  }
  if (vendor === 'chewy-brand' || vendor === 'chewy-pharmacy') {
    const fallback = env.AFF_CHEWY_TAG
    if (typeof fallback === 'string' && fallback.length > 0) {
      return { tag: fallback, envVarName: 'AFF_CHEWY_TAG' }
    }
  }
  return { tag: '', envVarName: primaryName }
}

export function partnerHome(vendor: string, template?: string): string {
  if (PARTNER_HOME[vendor]) return PARTNER_HOME[vendor]
  if (template) {
    try {
      return new URL(template.replace('{sku}', '')).origin
    } catch {
      return DEFAULT_HOME
    }
  }
  return DEFAULT_HOME
}

export function stripPlaceholder(url: string): string {
  let out = url.replace(/PLACEHOLDER/g, '')
  // Drop params whose value was only PLACEHOLDER (now empty). Keep real values.
  out = out
    .replace(/([?&])[^=?]+=(?=&|$)/g, '$1')
    .replace(/\?&/g, '?')
    .replace(/&&+/g, '&')
    .replace(/[?&]$/, '')
  if (!out.includes('?') && out.includes('&')) out = out.replace('&', '?')
  return out
}

export interface HopResult {
  target: string
  tagResolved: boolean
  envVarName: string
  vendor: string
  sku: string
}

export function resolveAffiliateHop(opts: {
  vendor: string
  sku?: string
  routes: Record<string, AffiliateRoute>
  env?: NodeJS.ProcessEnv
}): HopResult {
  const vendor = (opts.vendor || '').toLowerCase()
  const sku = opts.sku || ''
  const env = opts.env ?? process.env
  const { tag, envVarName } = resolveTag(vendor, env)
  const tagResolved = tag.length > 0
  const route = opts.routes[vendor]

  if (!route) {
    return { target: DEFAULT_HOME, tagResolved, envVarName, vendor, sku }
  }

  // `/go/<vendor>/home` on these stores is the storefront, not a product
  // named "home". A path like /products/home or /pt/home 404s.
  if (STOREFRONT_HOME.has(vendor) && sku.toLowerCase() === 'home') {
    return { target: partnerHome(vendor, route.template), tagResolved, envVarName, vendor, sku }
  }

  const retail = isRetailVendor(vendor)
  // Retail: no sku or no tag → homepage. Never an untagged Amazon/Chewy URL.
  if (retail && (!sku || !tagResolved)) {
    return { target: partnerHome(vendor, route.template), tagResolved, envVarName, vendor, sku }
  }
  // Non-retail product URLs that require a sku still go home when the sku is empty.
  if (!retail && !sku && route.requiresSku !== false) {
    return { target: partnerHome(vendor, route.template), tagResolved, envVarName, vendor, sku }
  }

  // Path skus use + as a word separator (fi+series+3). encodeURIComponent
  // would turn that into %2B, and Amazon then searches for the plus signs.
  let target = route.template.split('{sku}').join(encodeURIComponent(sku.replaceAll('+', ' ')))
  if (tag) target = target.split('PLACEHOLDER').join(tag)
  target = stripPlaceholder(target)
  if (!target || target.includes('PLACEHOLDER')) {
    target = partnerHome(vendor, route.template)
  }

  return { target, tagResolved, envVarName, vendor, sku }
}
