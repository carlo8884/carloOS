/**
 * Shared /go hop resolver — one implementation for dog, fish, horses, vets, ferret.
 * Never writes literal PLACEHOLDER into Location or hop query strings.
 * Empty hop → partner homepage 302. Missing tag → partner homepage, never 404.
 * amazon-brand falls back to AFF_AMAZON_TAG when AFF_AMAZON_BRAND_TAG is empty.
 */

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

const DEFAULT_HOME = 'https://www.amazon.com'

export function resolveTag(
  vendor: string,
  env: NodeJS.ProcessEnv = process.env,
): { tag: string; envVarName: string } {
  const primaryName = `AFF_${vendor.replace(/-/g, '_').toUpperCase()}_TAG`
  const primary = env[primaryName]
  if (typeof primary === 'string' && primary.length > 0) {
    return { tag: primary, envVarName: primaryName }
  }
  if (vendor === 'amazon-brand' || vendor === 'amazon') {
    const fallback = env.AFF_AMAZON_TAG
    if (typeof fallback === 'string' && fallback.length > 0) {
      return { tag: fallback, envVarName: 'AFF_AMAZON_TAG' }
    }
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
  return url
    .replace(/[?&][^=]*PLACEHOLDER[^&]*/g, '')
    .replace(/PLACEHOLDER/g, '')
    .replace(/\?&/, '?')
    .replace(/&&+/g, '&')
    .replace(/[?&]$/, '')
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

  if (!sku || !tagResolved) {
    return { target: partnerHome(vendor, route.template), tagResolved, envVarName, vendor, sku }
  }

  let target = route.template.replace('{sku}', encodeURIComponent(sku)).split('PLACEHOLDER').join(tag)
  target = stripPlaceholder(target)
  if (!target || target.includes('PLACEHOLDER')) {
    target = partnerHome(vendor, route.template)
  }

  return { target, tagResolved, envVarName, vendor, sku }
}
