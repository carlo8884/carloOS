/**
 * /dashboard/revenue/data — server-side affiliate event reader
 *
 * Reads from Supabase `events` table and aggregates by vendor, site,
 * source, and tag-resolution status. Powers the /dashboard/revenue UI.
 *
 * Lane: Monetization per ops/policies/bot-coordination.md §2
 * (apps/<site>/src/app/dashboard/revenue/*).
 *
 * Auth: HTTP header `X-Admin-Token` must match ADMIN_DASHBOARD_TOKEN
 * env var. (The dashboard UI passes this from a client-side
 * sessionStorage token after password login.)
 */

import { NextResponse, type NextRequest } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

interface EventRow {
  event_type: string
  event_data: Record<string, unknown>
  site_id: string
  created_at: string
}

interface RevenueResponse {
  generated_at: string
  window: '24h' | '7d' | '30d'
  total_affiliate_clicks: number
  by_vendor: Array<{ vendor: string; clicks: number; tag_resolved: number; tag_placeholder: number }>
  by_site: Array<{ site: string; clicks: number }>
  by_source: Array<{ source: string; clicks: number }>
  tag_readiness: {
    total_clicks_with_placeholder: number
    total_clicks_with_real_tag: number
    vendors_missing_tags: string[]
  }
  recent_clicks: Array<{
    vendor: string
    sku: string
    site: string
    source: string | null
    tag_resolved: boolean
    created_at: string
  }>
  supabase_configured: boolean
}

function windowToHours(window: string): number {
  switch (window) {
    case '7d': return 24 * 7
    case '30d': return 24 * 30
    case '24h':
    default: return 24
  }
}

export async function GET(request: NextRequest) {
  // Auth — require header token. Defaults to 'dev' when ADMIN_DASHBOARD_TOKEN
  // unset (development). Production should always set the env var.
  const expectedToken = process.env.ADMIN_DASHBOARD_TOKEN ?? 'dev'
  const providedToken = request.headers.get('x-admin-token')
  if (providedToken !== expectedToken) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  const url = new URL(request.url)
  const window = (url.searchParams.get('window') ?? '24h') as '24h' | '7d' | '30d'
  const hours = windowToHours(window)
  const sinceIso = new Date(Date.now() - hours * 3600_000).toISOString()

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseKey) {
    // No Supabase configured yet — return empty shape with a flag the UI
    // shows as an actionable "set up Supabase" hint.
    const empty: RevenueResponse = {
      generated_at: new Date().toISOString(),
      window,
      total_affiliate_clicks: 0,
      by_vendor: [],
      by_site: [],
      by_source: [],
      tag_readiness: {
        total_clicks_with_placeholder: 0,
        total_clicks_with_real_tag: 0,
        vendors_missing_tags: [],
      },
      recent_clicks: [],
      supabase_configured: false,
    }
    return NextResponse.json(empty)
  }

  // Query Supabase events table for affiliate_click events in window.
  // PostgREST query — uses ?event_type=eq.X&created_at=gte.Y&select=...
  const query =
    `?event_type=eq.affiliate_click` +
    `&created_at=gte.${encodeURIComponent(sinceIso)}` +
    `&select=event_type,event_data,site_id,created_at` +
    `&order=created_at.desc` +
    `&limit=5000`

  const response = await fetch(`${supabaseUrl}/rest/v1/events${query}`, {
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
    },
    cache: 'no-store',
  })

  if (!response.ok) {
    return NextResponse.json(
      { error: 'supabase query failed', status: response.status, body: await response.text() },
      { status: 502 },
    )
  }

  const events = (await response.json()) as EventRow[]

  // Aggregate
  const byVendor = new Map<string, { clicks: number; tagResolved: number; tagPlaceholder: number }>()
  const bySite = new Map<string, number>()
  const bySource = new Map<string, number>()
  const vendorsMissingTags = new Set<string>()
  let totalResolved = 0
  let totalPlaceholder = 0

  for (const e of events) {
    const ed = e.event_data ?? {}
    const vendor = String(ed.vendor ?? 'unknown')
    const source = ed.source ? String(ed.source) : null
    const tagResolved = Boolean(ed.tagResolved ?? ed.tag_resolved ?? false)

    // by vendor
    const vrow = byVendor.get(vendor) ?? { clicks: 0, tagResolved: 0, tagPlaceholder: 0 }
    vrow.clicks++
    if (tagResolved) vrow.tagResolved++
    else {
      vrow.tagPlaceholder++
      vendorsMissingTags.add(vendor)
    }
    byVendor.set(vendor, vrow)

    // by site
    bySite.set(e.site_id, (bySite.get(e.site_id) ?? 0) + 1)

    // by source
    if (source) bySource.set(source, (bySource.get(source) ?? 0) + 1)

    if (tagResolved) totalResolved++
    else totalPlaceholder++
  }

  const result: RevenueResponse = {
    generated_at: new Date().toISOString(),
    window,
    total_affiliate_clicks: events.length,
    by_vendor: Array.from(byVendor.entries())
      .map(([vendor, v]) => ({
        vendor,
        clicks: v.clicks,
        tag_resolved: v.tagResolved,
        tag_placeholder: v.tagPlaceholder,
      }))
      .sort((a, b) => b.clicks - a.clicks),
    by_site: Array.from(bySite.entries())
      .map(([site, clicks]) => ({ site, clicks }))
      .sort((a, b) => b.clicks - a.clicks),
    by_source: Array.from(bySource.entries())
      .map(([source, clicks]) => ({ source, clicks }))
      .sort((a, b) => b.clicks - a.clicks)
      .slice(0, 20),
    tag_readiness: {
      total_clicks_with_placeholder: totalPlaceholder,
      total_clicks_with_real_tag: totalResolved,
      vendors_missing_tags: Array.from(vendorsMissingTags).sort(),
    },
    recent_clicks: events.slice(0, 50).map((e) => ({
      vendor: String(e.event_data?.vendor ?? 'unknown'),
      sku: String(e.event_data?.sku ?? ''),
      site: e.site_id,
      source: e.event_data?.source ? String(e.event_data.source) : null,
      tag_resolved: Boolean(e.event_data?.tagResolved ?? e.event_data?.tag_resolved ?? false),
      created_at: e.created_at,
    })),
    supabase_configured: true,
  }

  return NextResponse.json(result)
}
