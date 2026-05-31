/**
 * Affiliate redirect handler — reusable across all 10 apps.
 *
 * Each app exposes /go/[vendor]/[sku]/route.ts that calls this handler.
 * The handler:
 *   1. Looks up the vendor in the VENDORS registry
 *   2. Builds the affiliate URL (with tracking codes from env)
 *   3. Fires an `affiliate_click` event to Supabase (server-side, so it
 *      doesn't depend on the client's beacon working)
 *   4. Issues a 302 redirect to the affiliate URL
 *
 * Built per Architect Directive 2.
 *
 * USAGE in apps/<site>/src/app/go/[vendor]/[sku]/route.ts:
 *
 *   import { handleAffiliateRedirect } from '@carloOS/ui/server/affiliate-redirect'
 *   export const GET = handleAffiliateRedirect('dog-com')
 */

import { NextResponse, type NextRequest } from 'next/server'
import type { Vendor } from '../components/AffiliateLink'
import { VENDORS } from '../components/affiliate-vendors'

type SiteId = string

interface RouteContext {
  params: Promise<{ vendor: string; sku: string }>
}

export function handleAffiliateRedirect(siteId: SiteId) {
  return async function GET(req: NextRequest, ctx: RouteContext) {
    const { vendor: vendorRaw, sku } = await ctx.params
    const vendor = vendorRaw as Vendor

    const config = VENDORS[vendor]
    if (!config) {
      // Unknown vendor — 404 rather than silently failing.
      return NextResponse.json(
        { error: 'Unknown vendor', vendor: vendorRaw },
        { status: 404 },
      )
    }

    const url = config.buildUrl(sku)
    const sourceParam = new URL(req.url).searchParams.get('s') ?? null

    // Fire server-side analytics event. Fails silently — never block
    // the redirect on a logging failure.
    fireServerEvent({
      siteId,
      vendor,
      sku,
      source: sourceParam,
      userAgent: req.headers.get('user-agent') ?? null,
      referer: req.headers.get('referer') ?? null,
    }).catch((err) => {
      console.error('[affiliate-redirect] event log failed', err)
    })

    return NextResponse.redirect(url, { status: 302 })
  }
}

async function fireServerEvent(payload: {
  siteId: string
  vendor: string
  sku: string
  source: string | null
  userAgent: string | null
  referer: string | null
}) {
  // POST to /api/analytics on the SAME deployment. That route already
  // exists per the current schema — it just needs to know how to
  // handle a server-side affiliate_click event.
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!supabaseUrl || !supabaseKey) return

  await fetch(`${supabaseUrl}/rest/v1/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({
      site_id: payload.siteId,
      event_type: 'affiliate_click_redirect',
      event_data: {
        vendor: payload.vendor,
        sku: payload.sku,
        source: payload.source,
        user_agent: payload.userAgent,
        referer: payload.referer,
      },
    }),
  })
}
