/**
 * /go/[vendor]/[sku] — 302 affiliate hop.
 * Never leaves PLACEHOLDER in the Location header.
 * amazon-brand reads AFF_AMAZON_BRAND_TAG then AFF_AMAZON_TAG.
 * Missing tag → partner homepage, never 404.
 */

import { NextResponse } from 'next/server'
import { affiliateRoutes } from '@/data/affiliate-routes'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const SITE_ID = 'dog-com'

const HOMEPAGE: Record<string, string> = {
  amazon: 'https://www.amazon.com',
  'amazon-brand': 'https://www.amazon.com',
  chewy: 'https://www.chewy.com',
  'chewy-brand': 'https://www.chewy.com',
  'chewy-pharmacy': 'https://www.chewy.com',
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
  if (vendor === 'chewy-brand' || vendor === 'chewy-pharmacy') {
    const fallback = process.env.AFF_CHEWY_TAG
    if (typeof fallback === 'string' && fallback.length > 0) {
      return { tag: fallback, envVarName: 'AFF_CHEWY_TAG' }
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
    console.error('[/go] supabase event write failed', err)
  }
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
    const encodedSku = sku ? encodeURIComponent(sku) : ''
    target = route.template.replace('{sku}', encodedSku).split('PLACEHOLDER').join(tag)
    target = stripPlaceholder(target)
    if (!target || target.includes('PLACEHOLDER')) {
      target = partnerHome(vendor, route.template)
    }
  }

  const url = new URL(request.url)
  const source = url.searchParams.get('s')
  const referrer = request.headers.get('referer') || ''
  const userAgent = request.headers.get('user-agent') || ''

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
      target,
      timestamp: new Date().toISOString(),
    }),
  )

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
