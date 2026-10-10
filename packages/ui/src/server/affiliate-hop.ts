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
import { emailLandingCollectUrl, emailLandingHopClickUrl } from '../lib/affiliate-click'

export type GoRouteParams = {
  params: { vendor: string; sku?: string | string[] }
}

function skuFromParams(sku: string | string[] | undefined): string {
  if (!sku) return ''
  if (Array.isArray(sku)) return sku.filter(Boolean).join('/')
  return sku
}

const clip = (value: string) => (value.length <= 255 ? value : value.slice(0, 255))

async function logAffiliateClick(
  request: Request,
  fields: {
    site: string
    vendor: string
    sku: string
    source: string
    tagResolved: boolean
    envVarName: string
    target: string
  },
) {
  console.log(
    JSON.stringify({
      event: 'affiliate_click',
      site: fields.site,
      vendor: fields.vendor,
      sku: fields.sku,
      source: fields.source,
      tagResolved: fields.tagResolved,
      envVarName: fields.envVarName,
      target: fields.target,
      timestamp: new Date().toISOString(),
    }),
  )

  // Vercel Web Analytics custom event. `site` and `source` (`?s=`) travel
  // with the event. Does not block the redirect for long: on Vercel, track()
  // registers waitUntil and returns. Web Analytics must be enabled.
  // A direct email /go hit never runs the page, so that one case also sends
  // the same GA4 event. Same-site navigations already fired gtag.
  const fetchSite = request.headers.get('sec-fetch-site')
  const clientAlreadyFired = fetchSite === 'same-origin' || fetchSite === 'same-site'
  const emailFields = {
    site: fields.site,
    page: new URL(request.url).pathname,
    source: fields.source,
    partner: fields.vendor,
    product: fields.sku.replace(/\+/g, ' '),
    clientId: crypto.randomUUID(),
  }
  const collect = clientAlreadyFired
    ? null
    : emailLandingCollectUrl(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, emailFields)
  const hopCollect = clientAlreadyFired
    ? null
    : emailLandingHopClickUrl(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, emailFields)
  const sendCollect = (target: string | null) =>
    target
      ? fetch(target, { method: 'POST' }).catch((err) => {
          console.error('[affiliate-click] ga4 collect failed', err)
        })
      : Promise.resolve()
  const ga = Promise.all([sendCollect(collect), sendCollect(hopCollect)])
  await Promise.race([
    Promise.all([
      track(
        'affiliate_click',
        {
          site: clip(fields.site),
          vendor: clip(fields.vendor || 'unknown'),
          sku: clip(fields.sku || 'none'),
          source: clip(fields.source || 'none'),
          tagged: fields.tagResolved ? 'yes' : 'no',
        },
        { request },
      ).catch((err) => {
        console.error('[affiliate-click] analytics track failed', err)
      }),
      ga,
    ]),
    new Promise((resolve) => setTimeout(resolve, 800)),
  ])
}

export function createGoGet(siteId: string, routes: Record<string, AffiliateRoute>) {
  return async function GET(request: Request, context: GoRouteParams) {
    const vendor = (context.params?.vendor || '').toLowerCase()
    const sku = skuFromParams(context.params?.sku)
    const hop = resolveAffiliateHop({ vendor, sku, routes })
    const source = new URL(request.url).searchParams.get('s') || 'none'

    await logAffiliateClick(request, {
      site: siteId,
      vendor: hop.vendor || 'unknown',
      sku: hop.sku || 'none',
      source,
      tagResolved: hop.tagResolved,
      envVarName: hop.envVarName,
      target: hop.target,
    })

    return NextResponse.redirect(hop.target, 302)
  }
}

/** Bare `/go` has no vendor. Log the click and send the reader to the disclosure. */
export function createGoIndexGet(siteId: string) {
  return async function GET(request: Request) {
    const source = new URL(request.url).searchParams.get('s') || 'none'
    await logAffiliateClick(request, {
      site: siteId,
      vendor: 'unknown',
      sku: 'none',
      source,
      tagResolved: false,
      envVarName: '',
      target: '/disclosure',
    })
    return NextResponse.redirect(new URL('/disclosure', request.url), 302)
  }
}
