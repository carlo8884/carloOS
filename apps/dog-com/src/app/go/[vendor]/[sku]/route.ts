/**
 * /go/[vendor]/[sku] — affiliate click-tracking redirect (Dog.com).
 *
 * Looks up the vendor in apps/dog-com/src/data/affiliate-routes.ts, fills
 * the `{sku}` placeholder, logs the click to Supabase events table for
 * /dashboard/revenue + console.log fallback, and 302-redirects.
 *
 * Source-page attribution: reads `?s=<source>` query param (set by
 * funnel pages via the AffiliateLink href pattern).
 *
 * Returns 404 if the vendor is not registered. This is intentional — we
 * never want to silently proxy an unknown vendor (would defeat the point
 * of having a tracked allow-list).
 *
 * Lane: Monetization per ops/policies/bot-coordination.md §2 ("may
 * extend behavior" of /go handlers explicitly permitted).
 */

import { NextResponse } from 'next/server'
import { affiliateRoutes } from '@/data/affiliate-routes'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const SITE_ID = 'dog-com'

interface RouteParams {
  params: { vendor: string; sku: string }
}

/**
 * Fire-and-forget Supabase event write. Never blocks redirect on
 * failure — best-effort attribution capture.
 */
async function writeEventToSupabase(payload: {
  site_id: string
  vendor: string
  sku: string
  source: string | null
  tag_resolved: boolean
  env_var_name: string
  referrer: string
  user_agent: string
}): Promise<void> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!supabaseUrl || !supabaseKey) return

  try {
    await fetch(`${supabaseUrl}/rest/v1/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({
        site_id: payload.site_id,
        event_type: 'affiliate_click',
        event_data: {
          vendor: payload.vendor,
          sku: payload.sku,
          source: payload.source,
          tagResolved: payload.tag_resolved,
          envVarName: payload.env_var_name,
          referrer: payload.referrer,
          userAgent: payload.user_agent,
        },
      }),
    })
  } catch (err) {
    // Best-effort. Don't block redirect.
    console.error('[/go] supabase event write failed', err)
  }
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

  // Source-page attribution from ?s=<source> query param.
  const url = new URL(request.url)
  const source = url.searchParams.get('s')

  const referrer = request.headers.get('referer') || ''
  const userAgent = request.headers.get('user-agent') || ''

  // Structured log for platform log pipeline (always).
  console.log(
    JSON.stringify({
      event: 'affiliate_click',
      site: SITE_ID,
      vendor,
      sku,
      source,
      referrer,
      userAgent,
      tagResolved,
      envVarName,
      timestamp: new Date().toISOString(),
    }),
  )

  // Best-effort Supabase write for /dashboard/revenue. Does not block.
  writeEventToSupabase({
    site_id: SITE_ID,
    vendor,
    sku,
    source,
    tag_resolved: tagResolved,
    env_var_name: envVarName,
    referrer,
    user_agent: userAgent,
  }).catch(() => {})

  return NextResponse.redirect(target, 302)
}
