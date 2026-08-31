/** Fish.com /go — 302. Never leave PLACEHOLDER in Location. Missing tag → partner home. */

import { NextResponse } from 'next/server'
import { affiliateRoutes } from '@/data/affiliate-routes'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const SITE_ID = 'fish-com'

const HOMEPAGE: Record<string, string> = {
  amazon: 'https://www.amazon.com',
  'amazon-brand': 'https://www.amazon.com',
  chewy: 'https://www.chewy.com',
  'chewy-brand': 'https://www.chewy.com',
}

interface RouteParams {
  params: { vendor: string; sku: string }
}

function resolveTag(vendor: string): { tag: string; envVarName: string } {
  const primaryName = `AFF_${vendor.replace(/-/g, '_').toUpperCase()}_TAG`
  const primary = process.env[primaryName]
  if (typeof primary === 'string' && primary.length > 0) {
    return { tag: primary, envVarName: primaryName }
  }
  if (vendor === 'amazon-brand' || vendor === 'amazon') {
    const fallback = process.env.AFF_AMAZON_TAG
    if (typeof fallback === 'string' && fallback.length > 0) {
      return { tag: fallback, envVarName: 'AFF_AMAZON_TAG' }
    }
  }
  return { tag: '', envVarName: primaryName }
}

function partnerHome(vendor: string, template: string): string {
  if (HOMEPAGE[vendor]) return HOMEPAGE[vendor]
  try {
    return new URL(template.replace('{sku}', '')).origin
  } catch {
    return 'https://www.amazon.com'
  }
}

function stripPlaceholder(url: string): string {
  return url
    .replace(/[?&][^=]*PLACEHOLDER[^&]*/g, '')
    .replace(/PLACEHOLDER/g, '')
    .replace(/\?&/, '?')
    .replace(/&&+/g, '&')
    .replace(/[?&]$/, '')
}

export async function GET(request: Request, { params }: RouteParams) {
  const vendor = (params.vendor || '').toLowerCase()
  const sku = params.sku || ''
  const route = affiliateRoutes[vendor]
  if (!route) {
    return NextResponse.redirect('https://www.amazon.com', 302)
  }

  const { tag, envVarName } = resolveTag(vendor)
  const tagResolved = tag.length > 0

  let target: string
  if (!tagResolved) {
    target = partnerHome(vendor, route.template)
  } else {
    target = route.template.replace('{sku}', sku ? encodeURIComponent(sku) : '').split('PLACEHOLDER').join(tag)
    target = stripPlaceholder(target)
    if (!target || target.includes('PLACEHOLDER')) {
      target = partnerHome(vendor, route.template)
    }
  }

  console.log(
    JSON.stringify({
      event: 'affiliate_click',
      site: SITE_ID,
      vendor,
      sku,
      tagResolved,
      envVarName,
      target,
      timestamp: new Date().toISOString(),
    }),
  )

  return NextResponse.redirect(target, 302)
}
