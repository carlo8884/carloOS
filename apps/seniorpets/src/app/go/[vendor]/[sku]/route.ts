import { NextResponse } from 'next/server'
import { affiliateRoutes } from '@/data/affiliate-routes'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const SITE_ID = 'seniorpets'

interface RouteParams {
  params: { vendor: string; sku: string }
}

export async function GET(request: Request, { params }: RouteParams) {
  const vendor = (params.vendor || '').toLowerCase()
  const sku = params.sku || ''

  const route = affiliateRoutes[vendor]
  if (!route) return new NextResponse('Vendor not found', { status: 404 })
  if (route.requiresSku && !sku) return new NextResponse('SKU required', { status: 400 })

  const target = route.template.replace('{sku}', encodeURIComponent(sku))
  const referrer = request.headers.get('referer') || ''
  const userAgent = request.headers.get('user-agent') || ''

  console.log(JSON.stringify({
    event: 'affiliate_click',
    site: SITE_ID,
    vendor,
    sku,
    referrer,
    userAgent,
    timestamp: new Date().toISOString(),
  }))

  return NextResponse.redirect(target, 302)
}
