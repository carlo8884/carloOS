import { NextRequest, NextResponse } from "next/server"
import { createServiceClient } from "@carloOS/db"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const siteId = searchParams.get("site") ?? "dog-com"
  const days = parseInt(searchParams.get("days") ?? "30", 10)
  const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString()

  try {
    const supabase = createServiceClient()
    const [{ data: ev }, { data: em }] = await Promise.all([
      supabase.from("user_interactions").select("event_type,page_path,session_id,properties").eq("site_id", siteId).gte("created_at", since),
      supabase.from("email_subscriptions").select("source,created_at").eq("site_id", siteId).gte("created_at", since),
    ])
    const events = ev ?? []; const emails = em ?? []
    const pageViews: Record<string, { views: number; sessions: Set<string> }> = {}
    const affiliateClicks: Record<string, number> = {}
    for (const e of events) {
      if (e.event_type === "page_view") {
        if (!pageViews[e.page_path]) pageViews[e.page_path] = { views: 0, sessions: new Set() }
        pageViews[e.page_path].views++; pageViews[e.page_path].sessions.add(e.session_id)
      }
      if (e.event_type === "affiliate_click") {
        const k = e.properties?.product ?? "unknown"
        affiliateClicks[k] = (affiliateClicks[k] ?? 0) + 1
      }
    }
    const emailBySource: Record<string, number> = {}
    for (const e of emails) { emailBySource[e.source] = (emailBySource[e.source] ?? 0) + 1 }
    return NextResponse.json({
      period: `${since.slice(0,10)} to ${new Date().toISOString().slice(0,10)}`,
      total_views: events.filter(e => e.event_type === "page_view").length,
      total_sessions: new Set(events.map(e => e.session_id)).size,
      email_signups: emails.length,
      affiliate_clicks: Object.values(affiliateClicks).reduce((a, b) => a + b, 0),
      top_pages: Object.entries(pageViews).map(([path, d]) => ({ path, views: d.views, unique_sessions: d.sessions.size })).sort((a, b) => b.views - a.views),
      affiliate_clicks_by_product: Object.entries(affiliateClicks).map(([product, clicks]) => ({ product, program: "various", clicks, ctr: 0 })).sort((a, b) => b.clicks - a.clicks),
      email_by_source: Object.entries(emailBySource).map(([source, signups]) => ({ source, signups, rate: 0 })).sort((a, b) => b.signups - a.signups),
    })
  } catch {
    return NextResponse.json({ error: "Analytics not available" }, { status: 500 })
  }
}
