/**
 * Next.js /go handler factory. All five launch sites import this — do not
 * copy PLACEHOLDER substitution into per-app route files.
 */

import { NextResponse } from 'next/server'
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
    console.log(
      JSON.stringify({
        event: 'affiliate_click',
        site: siteId,
        vendor: hop.vendor,
        sku: hop.sku,
        source: url.searchParams.get('s'),
        tagResolved: hop.tagResolved,
        envVarName: hop.envVarName,
        target: hop.target,
        timestamp: new Date().toISOString(),
      }),
    )

    return NextResponse.redirect(hop.target, 302)
  }
}
