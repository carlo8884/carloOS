/**
 * Analytics Dashboard Component
 * Client component — fetches from /api/analytics to display site metrics.
 * Used internally for monitoring without needing GA.
 *
 * Shows:
 * - Top pages by views
 * - Email signup rate by source
 * - Affiliate click-through by product
 * - Species/breed page performance
 */

'use client'

import { useState, useEffect } from 'react'
import type { SiteId } from '@carloOS/config'

interface PageStat {
  path: string
  views: number
  unique_sessions: number
}

interface AffiliateStat {
  product: string
  program: string
  clicks: number
  ctr: number
}

interface EmailStat {
  source: string
  signups: number
  rate: number
}

interface DashboardData {
  period: string
  total_views: number
  total_sessions: number
  email_signups: number
  affiliate_clicks: number
  top_pages: PageStat[]
  affiliate_clicks_by_product: AffiliateStat[]
  email_by_source: EmailStat[]
}

interface AnalyticsDashboardProps {
  siteId: SiteId
  /** Number of days to show (default: 30) */
  days?: number
}

function StatCard({ label, value, sub }: { label: string; value: string | number; sub?: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">
      <div className="text-xs font-bold tracking-wider uppercase text-gray-400 mb-1.5">{label}</div>
      <div className="text-3xl font-bold text-gray-900">{typeof value === 'number' ? value.toLocaleString() : value}</div>
      {sub && <div className="text-xs text-gray-400 mt-1">{sub}</div>}
    </div>
  )
}

function MiniBar({ label, value, max, format }: { label: string; value: number; max: number; format?: (v: number) => string }) {
  const pct = max > 0 ? (value / max) * 100 : 0
  const display = format ? format(value) : value.toLocaleString()
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 min-w-0">
        <div className="text-xs font-medium text-gray-700 truncate mb-1">{label}</div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full rounded-full bg-orange-500 transition-all duration-500" style={{ width: `${pct}%` }} />
        </div>
      </div>
      <div className="text-xs font-bold text-gray-900 flex-shrink-0 w-16 text-right">{display}</div>
    </div>
  )
}

export function AnalyticsDashboard({ siteId, days = 30 }: AnalyticsDashboardProps) {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/analytics?site=${siteId}&days=${days}`)
        if (!res.ok) throw new Error('Failed to load analytics')
        const json = await res.json()
        setData(json)
      } catch (err) {
        setError('Analytics unavailable — Supabase not connected')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [siteId, days])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20 text-gray-400 text-sm">
        Loading analytics…
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
        <div className="text-amber-600 font-semibold text-sm mb-1">Analytics Not Available</div>
        <div className="text-amber-500 text-xs">{error ?? 'Connect Supabase to enable analytics tracking.'}</div>
      </div>
    )
  }

  const maxViews = Math.max(...data.top_pages.map(p => p.views), 1)
  const maxClicks = Math.max(...data.affiliate_clicks_by_product.map(a => a.clicks), 1)
  const maxSignups = Math.max(...data.email_by_source.map(e => e.signups), 1)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs font-bold tracking-wider uppercase text-gray-400">{siteId}</div>
          <h2 className="text-xl font-bold text-gray-900">Last {days} Days</h2>
        </div>
        <div className="text-xs text-gray-400">{data.period}</div>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Views" value={data.total_views} />
        <StatCard label="Sessions" value={data.total_sessions} />
        <StatCard label="Email Signups" value={data.email_signups} sub={`${((data.email_signups / data.total_sessions) * 100).toFixed(1)}% conversion`} />
        <StatCard label="Affiliate Clicks" value={data.affiliate_clicks} sub={`${((data.affiliate_clicks / data.total_views) * 100).toFixed(1)}% CTR`} />
      </div>

      {/* Three columns */}
      <div className="grid lg:grid-cols-3 gap-5">
        {/* Top pages */}
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <div className="text-xs font-bold tracking-wider uppercase text-gray-400 mb-4">Top Pages</div>
          <div className="space-y-3">
            {data.top_pages.slice(0, 8).map(page => (
              <MiniBar key={page.path} label={page.path} value={page.views} max={maxViews} />
            ))}
          </div>
        </div>

        {/* Affiliate clicks */}
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <div className="text-xs font-bold tracking-wider uppercase text-gray-400 mb-4">Affiliate Clicks</div>
          <div className="space-y-3">
            {data.affiliate_clicks_by_product.slice(0, 8).map(item => (
              <MiniBar key={item.product} label={`${item.product} (${item.program})`} value={item.clicks} max={maxClicks} />
            ))}
          </div>
        </div>

        {/* Email by source */}
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <div className="text-xs font-bold tracking-wider uppercase text-gray-400 mb-4">Email Signups by Source</div>
          <div className="space-y-3">
            {data.email_by_source.slice(0, 8).map(item => (
              <MiniBar key={item.source} label={item.source} value={item.signups} max={maxSignups} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Analytics API Route (add to each app) ─────────────────────────────────────

export const ANALYTICS_API_ROUTE_CODE = `
/**
 * GET /api/analytics?site=dog-com&days=30
 * Internal analytics endpoint — requires SUPABASE_SERVICE_ROLE_KEY
 */
import { NextRequest, NextResponse } from 'next/server'
import { createServiceClient } from '@carloOS/db'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const siteId = searchParams.get('site') ?? 'dog-com'
  const days = parseInt(searchParams.get('days') ?? '30', 10)
  const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString()

  const supabase = createServiceClient()

  const [events, emails] = await Promise.all([
    supabase.from('user_interactions')
      .select('event_type, page_path, session_id, properties')
      .eq('site_id', siteId)
      .gte('created_at', since),
    supabase.from('email_subscriptions')
      .select('source, created_at')
      .eq('site_id', siteId)
      .gte('created_at', since),
  ])

  const ev = events.data ?? []
  const em = emails.data ?? []

  // Aggregate
  const pageViews: Record<string, { views: number; sessions: Set<string> }> = {}
  const affiliateClicks: Record<string, number> = {}

  for (const e of ev) {
    if (e.event_type === 'page_view') {
      if (!pageViews[e.page_path]) pageViews[e.page_path] = { views: 0, sessions: new Set() }
      pageViews[e.page_path].views++
      pageViews[e.page_path].sessions.add(e.session_id)
    }
    if (e.event_type === 'affiliate_click') {
      const key = e.properties?.product ?? 'unknown'
      affiliateClicks[key] = (affiliateClicks[key] ?? 0) + 1
    }
  }

  const emailBySource: Record<string, number> = {}
  for (const e of em) {
    emailBySource[e.source] = (emailBySource[e.source] ?? 0) + 1
  }

  const totalViews = ev.filter(e => e.event_type === 'page_view').length
  const totalSessions = new Set(ev.map(e => e.session_id)).size

  return NextResponse.json({
    period: \`\${since.slice(0,10)} to \${new Date().toISOString().slice(0,10)}\`,
    total_views: totalViews,
    total_sessions: totalSessions,
    email_signups: em.length,
    affiliate_clicks: Object.values(affiliateClicks).reduce((a, b) => a + b, 0),
    top_pages: Object.entries(pageViews)
      .map(([path, d]) => ({ path, views: d.views, unique_sessions: d.sessions.size }))
      .sort((a, b) => b.views - a.views),
    affiliate_clicks_by_product: Object.entries(affiliateClicks)
      .map(([product, clicks]) => ({ product, program: 'various', clicks, ctr: 0 }))
      .sort((a, b) => b.clicks - a.clicks),
    email_by_source: Object.entries(emailBySource)
      .map(([source, signups]) => ({ source, signups, rate: 0 }))
      .sort((a, b) => b.signups - a.signups),
  })
}
`
