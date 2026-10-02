/**
 * Next.js /go handler factory. All five launch sites import this — do not
 * copy PLACEHOLDER substitution into per-app route files.
 */

import { NextResponse } from 'next/server'
import { track } from '@vercel/analytics/server'
import {
  resolveAffiliateHop,
  type AffiliateRoute,
} from '@carloOS/config/affiliate-hop'

export type GoRouteParams = {
  params: { vendor: string; sku?: string | string[] }
}

function skuFromParams(sku: string | string[] | undefined): string {
  if (!sku) return ''
  if (Array.isArray(sku)) return sku.filter(Boolean).join('/')
  return sku
}

export function createGoGet(siteId: string, routes: Record<string, AffiliateRoute>) {
  return async function GET(request: Request, context: GoRouteParams) {
    const vendor = (context.params?.vendor || '').toLowerCase()
    const sku = skuFromParams(context.params?.sku)
    const hop = resolveAffiliateHop({ vendor, sku, routes })

    const url = new URL(request.url)
    const source = url.searchParams.get('s')
    console.log(
      JSON.stringify({
        event: 'affiliate_click',
        site: siteId,
        vendor: hop.vendor,
        sku: hop.sku,
        source,
        tagResolved: hop.tagResolved,
        envVarName: hop.envVarName,
        target: hop.target,
        timestamp: new Date().toISOString(),
      }),
    )

    // Vercel Web Analytics custom event. Site is the project. Page is `source`
    // (`?s=`). Product is `sku`. Does not block the redirect for long: on
    // Vercel, track() registers waitUntil and returns. No extra env var —
    // VERCEL_URL is injected. Web Analytics must be enabled on the project.
    const clip = (value: string) => (value.length <= 255 ? value : value.slice(0, 255))
    await Promise.race([
      track(
        'affiliate_click',
        {
          vendor: clip(hop.vendor || 'unknown'),
          sku: clip(hop.sku || 'none'),
          source: clip(source || 'none'),
          tagged: hop.tagResolved ? 'yes' : 'no',
        },
        { request },
      ).catch((err) => {
        console.error('[affiliate-click] analytics track failed', err)
      }),
      new Promise((resolve) => setTimeout(resolve, 800)),
    ])

    return NextResponse.redirect(hop.target, 302)
  }
}
