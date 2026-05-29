/**
 * /go/[vendor]/[sku] — affiliate click-tracking redirect (PetFood.com).
 *
 * Looks up the vendor in apps/petfood-com/src/data/affiliate-routes.ts, fills
 * the `{sku}` placeholder, logs the click (console.log today; GA4 server
 * event in a follow-up PR), and 302-redirects to the affiliate URL.
 *
 * Returns 404 if the vendor is not registered. This is intentional — we
 * never want to silently proxy an unknown vendor (would defeat the point
 * of having a tracked allow-list).
 */

import { NextResponse } from 'next/server'
import { affiliateRoutes } from '@/data/affiliate-routes'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const SITE_ID = 'petfood-com'

interface RouteParams {
  params: { vendor: string; sku: string }
}

export async function GET(request: Request, { params }: RouteParams) {
  const vendor = (params.vendor || '').toLowerCase()
  const sku = params.sku || ''

  const route = affiliateRoutes[vendor]
  if (!route) {
    return new NextResponse('Vendor not found', { status: 404 })
  }
  if (route.requiresSku && !sku) {
    return new NextResponse('SKU required for vendor', { status: 400 })
  }

  // Substitute the `{sku}` slot, then look up the per-vendor tracking ID
  // from env and swap it in for any `PLACEHOLDER` substring in the URL
  // template (per ops/policies/bot-coordination.md §6 rule 3). The env-var
  // name is computed as: `AFF_` + uppercased vendor key with hyphens
  // replaced by underscores + `_TAG`. If the env var is unset the redirect
  // still works — only the attribution tag is missing.
  const envVarName = `AFF_${vendor.replace(/-/g, '_').toUpperCase()}_TAG`
  const trackingId = process.env[envVarName]
  const tagResolved = typeof trackingId === 'string' && trackingId.length > 0

  let target = route.template.replace('{sku}', encodeURIComponent(sku))
  if (tagResolved) {
    target = target.split('PLACEHOLDER').join(trackingId as string)
  }

  const referrer = request.headers.get('referer') || ''
  const userAgent = request.headers.get('user-agent') || ''

  // Click event log. Replaced with a GA4 server-side event in a follow-up
  // PR; for now we just emit structured JSON so the platform log pipeline
  // can pick it up.
  console.log(
    JSON.stringify({
      event: 'affiliate_click',
      site: SITE_ID,
      vendor,
      sku,
      referrer,
      userAgent,
      tagResolved,
      envVarName,
      timestamp: new Date().toISOString(),
    }),
  )

  return NextResponse.redirect(target, 302)
}
