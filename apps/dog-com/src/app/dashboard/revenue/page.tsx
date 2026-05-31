'use client'

/**
 * CarloOS Revenue Dashboard
 * Route: dog.com/dashboard/revenue
 *
 * Admin-only. Reads affiliate-click events from Supabase via
 * /dashboard/revenue/data and aggregates them into a single view:
 *   - Total clicks (24h / 7d / 30d)
 *   - Top vendors with attribution status (tag resolved vs placeholder)
 *   - Top source pages
 *   - Per-site breakdown
 *   - "Tag readiness" — which vendors still need AFF_<VENDOR>_TAG env vars
 *   - Recent clicks feed
 *
 * Lane: Monetization per ops/policies/bot-coordination.md §2.
 * Auth: client-side sessionStorage check, password matches
 *       NEXT_PUBLIC_ADMIN_PASSWORD_HINT (same pattern as /admin).
 *       API token is independent (ADMIN_DASHBOARD_TOKEN env var on server).
 */

import { useState, useEffect, useCallback } from 'react'

type Window = '24h' | '7d' | '30d'

interface RevenueData {
  generated_at: string
  window: Window
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

const SESSION_KEY = 'carloOS_revenue_admin'

function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [pw, setPw] = useState('')
  const [error, setError] = useState(false)
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const correct =
            pw === (process.env.NEXT_PUBLIC_ADMIN_PASSWORD_HINT ?? 'carlo')
          if (correct) {
            sessionStorage.setItem(SESSION_KEY, '1')
            onLogin()
          } else {
            setError(true)
            setTimeout(() => setError(false), 1500)
          }
        }}
        className="bg-white border border-gray-200 rounded-2xl p-10 w-full max-w-sm"
      >
        <div className="text-center mb-8">
          <div className="text-4xl mb-3">💰</div>
          <h1 className="font-bold text-xl text-gray-900">Revenue Dashboard</h1>
          <p className="text-sm text-gray-400 mt-1">Admin · monetization metrics</p>
        </div>
        <input
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          placeholder="Password"
          className={`w-full border rounded-lg px-4 py-3 text-sm outline-none mb-3 transition-colors ${
            error ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-gray-400'
          }`}
        />
        <button
          type="submit"
          className="w-full bg-gray-900 text-white rounded-lg py-3 text-sm font-semibold hover:bg-gray-700"
        >
          Sign in
        </button>
      </form>
    </div>
  )
}

function StatCard({
  label,
  value,
  subtitle,
  tone = 'neutral',
}: {
  label: string
  value: number | string
  subtitle?: string
  tone?: 'neutral' | 'good' | 'warn' | 'bad'
}) {
  const toneClasses = {
    neutral: 'bg-white border-gray-200',
    good: 'bg-emerald-50 border-emerald-200',
    warn: 'bg-amber-50 border-amber-200',
    bad: 'bg-red-50 border-red-200',
  }[tone]
  return (
    <div className={`rounded-xl border p-5 ${toneClasses}`}>
      <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
        {label}
      </div>
      <div className="text-3xl font-bold text-gray-900 leading-tight">
        {typeof value === 'number' ? value.toLocaleString() : value}
      </div>
      {subtitle && <div className="text-xs text-gray-500 mt-1">{subtitle}</div>}
    </div>
  )
}

export default function RevenueDashboard() {
  const [authed, setAuthed] = useState(false)
  const [window, setWindow] = useState<Window>('24h')
  const [data, setData] = useState<RevenueData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === '1') setAuthed(true)
  }, [])

  const load = useCallback(async () => {
    if (!authed) return
    setLoading(true)
    setError(null)
    try {
      const adminToken =
        process.env.NEXT_PUBLIC_ADMIN_DASHBOARD_TOKEN ?? 'dev'
      const res = await fetch(`/dashboard/revenue/data?window=${window}`, {
        headers: { 'X-Admin-Token': adminToken },
        cache: 'no-store',
      })
      if (!res.ok) {
        setError(`API ${res.status}: ${await res.text()}`)
        setLoading(false)
        return
      }
      setData(await res.json())
    } catch (e) {
      setError(String(e))
    } finally {
      setLoading(false)
    }
  }, [authed, window])

  useEffect(() => {
    load()
  }, [load])

  if (!authed) return <AdminLogin onLogin={() => setAuthed(true)} />

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-400 mb-1">CarloOS Admin</div>
            <h1 className="text-2xl font-bold text-gray-900">Revenue Dashboard</h1>
            {data?.generated_at && (
              <div className="text-xs text-gray-400 mt-1">
                Updated {new Date(data.generated_at).toLocaleString()}
              </div>
            )}
          </div>
          <div className="flex gap-2 items-center">
            {(['24h', '7d', '30d'] as const).map((w) => (
              <button
                key={w}
                onClick={() => setWindow(w)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold ${
                  window === w
                    ? 'bg-gray-900 text-white'
                    : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {w}
              </button>
            ))}
            <button
              onClick={load}
              disabled={loading}
              className="ml-2 px-3 py-1.5 rounded-md text-xs font-semibold bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            >
              {loading ? 'Loading…' : 'Refresh'}
            </button>
            <button
              onClick={() => {
                sessionStorage.removeItem(SESSION_KEY)
                setAuthed(false)
              }}
              className="ml-2 text-xs text-gray-400 hover:text-gray-600"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 text-sm text-red-900">
            <strong>Error:</strong> {error}
          </div>
        )}

        {data && !data.supabase_configured && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-900">
            <strong>Supabase not configured.</strong> Set{' '}
            <code className="bg-white px-1 rounded">NEXT_PUBLIC_SUPABASE_URL</code> and{' '}
            <code className="bg-white px-1 rounded">SUPABASE_SERVICE_ROLE_KEY</code> in
            this Vercel project to start receiving event data. Until then, this
            dashboard shows an empty state.
          </div>
        )}

        {data && (
          <>
            {/* Top-line stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <StatCard
                label={`Affiliate Clicks (${window})`}
                value={data.total_affiliate_clicks}
              />
              <StatCard
                label="With Real Tracking ID"
                value={data.tag_readiness.total_clicks_with_real_tag}
                tone="good"
                subtitle="Attributed → commission flows"
              />
              <StatCard
                label="With PLACEHOLDER"
                value={data.tag_readiness.total_clicks_with_placeholder}
                tone={data.tag_readiness.total_clicks_with_placeholder > 0 ? 'warn' : 'neutral'}
                subtitle="Click happened but commission lost"
              />
              <StatCard
                label="Vendors Missing Tags"
                value={data.tag_readiness.vendors_missing_tags.length}
                tone={data.tag_readiness.vendors_missing_tags.length > 0 ? 'warn' : 'good'}
                subtitle="Run set-affiliate-tag.sh per vendor"
              />
            </div>

            {/* Vendors missing tags — actionable list */}
            {data.tag_readiness.vendors_missing_tags.length > 0 && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h2 className="font-bold text-amber-900 mb-2">
                  🚧 Vendors getting clicks but no attribution
                </h2>
                <p className="text-sm text-amber-900 mb-3">
                  These vendors had clicks during this window but the tracking
                  tag is still PLACEHOLDER. Set the env var to start earning
                  attributed commission.
                </p>
                <div className="flex flex-wrap gap-2">
                  {data.tag_readiness.vendors_missing_tags.map((v) => (
                    <code
                      key={v}
                      className="bg-white border border-amber-300 px-2 py-1 rounded text-xs font-mono text-amber-900"
                    >
                      AFF_{v.replace(/-/g, '_').toUpperCase()}_TAG
                    </code>
                  ))}
                </div>
                <div className="mt-3 text-xs text-amber-800">
                  Run: <code className="bg-white px-1 rounded">bash scripts/set-affiliate-tag.sh &lt;VENDOR&gt; &lt;id&gt;</code>
                </div>
              </div>
            )}

            {/* By vendor */}
            <section>
              <h2 className="font-bold text-gray-900 mb-3 text-lg">By vendor</h2>
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500">
                    <tr>
                      <th className="text-left px-5 py-3 font-semibold">Vendor</th>
                      <th className="text-right px-5 py-3 font-semibold">Clicks</th>
                      <th className="text-right px-5 py-3 font-semibold">Attributed</th>
                      <th className="text-right px-5 py-3 font-semibold">Placeholder</th>
                      <th className="text-right px-5 py-3 font-semibold">% Attributed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.by_vendor.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-5 py-8 text-center text-gray-400">
                          No affiliate clicks yet. Will appear here as traffic flows
                          through <code>/go/&lt;vendor&gt;/&lt;sku&gt;</code> links.
                        </td>
                      </tr>
                    ) : (
                      data.by_vendor.map((v) => {
                        const pct = v.clicks > 0 ? Math.round((v.tag_resolved / v.clicks) * 100) : 0
                        return (
                          <tr key={v.vendor} className="border-b border-gray-100 last:border-0">
                            <td className="px-5 py-3 font-mono text-xs">{v.vendor}</td>
                            <td className="px-5 py-3 text-right font-semibold">{v.clicks.toLocaleString()}</td>
                            <td className="px-5 py-3 text-right text-emerald-700">{v.tag_resolved.toLocaleString()}</td>
                            <td className="px-5 py-3 text-right text-amber-700">{v.tag_placeholder.toLocaleString()}</td>
                            <td className="px-5 py-3 text-right">
                              <span
                                className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${
                                  pct === 100 ? 'bg-emerald-100 text-emerald-800' :
                                  pct >= 50 ? 'bg-amber-100 text-amber-800' :
                                  'bg-red-100 text-red-800'
                                }`}
                              >
                                {pct}%
                              </span>
                            </td>
                          </tr>
                        )
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Two-column: by site + by source */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section>
                <h2 className="font-bold text-gray-900 mb-3 text-lg">By site</h2>
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <table className="w-full text-sm">
                    <tbody>
                      {data.by_site.length === 0 ? (
                        <tr>
                          <td className="px-5 py-8 text-center text-gray-400">
                            No clicks yet
                          </td>
                        </tr>
                      ) : (
                        data.by_site.map((s) => (
                          <tr key={s.site} className="border-b border-gray-100 last:border-0">
                            <td className="px-5 py-3 font-mono text-xs">{s.site}</td>
                            <td className="px-5 py-3 text-right font-semibold">{s.clicks.toLocaleString()}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="font-bold text-gray-900 mb-3 text-lg">Top source pages</h2>
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <table className="w-full text-sm">
                    <tbody>
                      {data.by_source.length === 0 ? (
                        <tr>
                          <td className="px-5 py-8 text-center text-gray-400">
                            No source attribution yet
                          </td>
                        </tr>
                      ) : (
                        data.by_source.slice(0, 10).map((s) => (
                          <tr key={s.source} className="border-b border-gray-100 last:border-0">
                            <td className="px-5 py-3 font-mono text-xs truncate max-w-xs">{s.source}</td>
                            <td className="px-5 py-3 text-right font-semibold">{s.clicks.toLocaleString()}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>

            {/* Recent clicks */}
            <section>
              <h2 className="font-bold text-gray-900 mb-3 text-lg">Recent clicks (last 50)</h2>
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <table className="w-full text-xs font-mono">
                  <thead className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-sans">
                    <tr>
                      <th className="text-left px-4 py-2 font-semibold">Time</th>
                      <th className="text-left px-4 py-2 font-semibold">Site</th>
                      <th className="text-left px-4 py-2 font-semibold">Vendor</th>
                      <th className="text-left px-4 py-2 font-semibold">SKU</th>
                      <th className="text-left px-4 py-2 font-semibold">Source</th>
                      <th className="text-left px-4 py-2 font-semibold">Tag</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.recent_clicks.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="px-4 py-8 text-center text-gray-400 font-sans">
                          No recent clicks. As real users click affiliate links, the events
                          will appear here.
                        </td>
                      </tr>
                    ) : (
                      data.recent_clicks.map((c, i) => (
                        <tr key={i} className="border-b border-gray-100 last:border-0">
                          <td className="px-4 py-2 text-gray-500">
                            {new Date(c.created_at).toLocaleString()}
                          </td>
                          <td className="px-4 py-2">{c.site}</td>
                          <td className="px-4 py-2">{c.vendor}</td>
                          <td className="px-4 py-2 truncate max-w-[120px]">{c.sku}</td>
                          <td className="px-4 py-2 truncate max-w-[200px]">{c.source ?? '—'}</td>
                          <td className="px-4 py-2">
                            {c.tag_resolved ? (
                              <span className="text-emerald-700">✓ real</span>
                            ) : (
                              <span className="text-amber-700">⚠ placeholder</span>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Footer / what this is */}
            <div className="text-xs text-gray-400 pt-8">
              Data source: Supabase <code>events</code> table where{' '}
              <code>event_type = 'affiliate_click'</code>. Events are written by the
              per-site <code>/go/[vendor]/[sku]/route.ts</code> handler. If a vendor
              shows here with PLACEHOLDER tags, that means the click happened but
              affiliate commission was lost — set the env var to fix.
              <br />
              Lane: Monetization. See ops/policies/bot-coordination.md §2.
            </div>
          </>
        )}
      </main>
    </div>
  )
}
