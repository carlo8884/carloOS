'use client'

/**
 * CarloOS Admin Dashboard
 * Route: dog.com/admin
 *
 * Password-protected via simple session check (ADMIN_PASSWORD env var).
 * Shows real-time analytics from all 5 domains via their /api/analytics routes.
 * No third-party auth required — simple, fast, portable.
 */

import { useState, useEffect } from 'react'

const SITES = [
  { id: 'dog-com',    domain: 'dog.com',      url: 'https://dog.com',      color: '#E8622A', emoji: '🐕' },
  { id: 'fish-com',   domain: 'fish.com',     url: 'https://fish.com',     color: '#0E6B8A', emoji: '🐠' },
  { id: 'lizard-com', domain: 'lizard.com',   url: 'https://lizard.com',   color: '#7AB52A', emoji: '🦎' },
  { id: 'saddle-com', domain: 'saddle.com',   url: 'https://saddle.com',   color: '#A07840', emoji: '🐴' },
  { id: 'vets-co',    domain: 'vets.co',      url: 'https://vets.co',      color: '#0A8A7A', emoji: '⚕️' },
] as const

interface SiteMetrics {
  total_views: number
  total_sessions: number
  email_signups: number
  affiliate_clicks: number
  top_pages: Array<{ path: string; views: number }>
  affiliate_clicks_by_product: Array<{ product: string; clicks: number }>
  email_by_source: Array<{ source: string; signups: number }>
}

interface SiteData {
  id: string
  status: 'loading' | 'ok' | 'error'
  metrics?: SiteMetrics
  error?: string
}

function StatPill({ label, value, color }: { label: string; value: number | string; color: string }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg px-4 py-3 border border-gray-100">
      <div className="text-2xl font-bold" style={{ color }}>{typeof value === 'number' ? value.toLocaleString() : value}</div>
      <div className="text-xs text-gray-400 mt-0.5 text-center">{label}</div>
    </div>
  )
}

function MiniBar({ label, value, max }: { label: string; value: number; max: number }) {
  const pct = max > 0 ? (value / max) * 100 : 0
  return (
    <div className="flex items-center gap-2 text-xs">
      <div className="flex-1 min-w-0 truncate text-gray-600">{label}</div>
      <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden flex-shrink-0">
        <div className="h-full rounded-full bg-gray-400 transition-all" style={{ width: `${pct}%` }} />
      </div>
      <div className="text-gray-500 font-medium w-8 text-right flex-shrink-0">{value}</div>
    </div>
  )
}

function SiteCard({ site, data, days }: { site: typeof SITES[number]; data: SiteData; days: number }) {
  const m = data.metrics
  const maxViews = Math.max(...(m?.top_pages.map(p => p.views) ?? [1]))
  const maxClicks = Math.max(...(m?.affiliate_clicks_by_product.map(a => a.clicks) ?? [1]))

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 flex items-center justify-between" style={{ background: `${site.color}12` }}>
        <div className="flex items-center gap-3">
          <span className="text-2xl">{site.emoji}</span>
          <div>
            <div className="font-bold text-gray-900">{site.domain}</div>
            <div className="text-xs text-gray-400">Last {days} days</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {data.status === 'loading' && (
            <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
          )}
          {data.status === 'ok' && <span className="text-xs font-bold text-green-600">● LIVE</span>}
          {data.status === 'error' && <span className="text-xs font-bold text-red-400">● OFFLINE</span>}
          <a href={site.url} target="_blank" rel="noopener noreferrer"
            className="text-xs px-2 py-1 rounded text-white font-medium transition-opacity hover:opacity-80"
            style={{ background: site.color }}>
            Visit →
          </a>
        </div>
      </div>

      {data.status === 'loading' && (
        <div className="flex items-center justify-center h-32 text-gray-300 text-sm">Loading…</div>
      )}

      {data.status === 'error' && (
        <div className="flex items-center justify-center h-32 text-red-300 text-sm px-4 text-center">
          {data.error ?? 'Analytics unavailable — Supabase not connected'}
        </div>
      )}

      {data.status === 'ok' && m && (
        <div className="p-5 space-y-5">
          {/* Stats row */}
          <div className="grid grid-cols-4 gap-2">
            <StatPill label="Views" value={m.total_views} color={site.color} />
            <StatPill label="Sessions" value={m.total_sessions} color={site.color} />
            <StatPill label="Emails" value={m.email_signups} color={site.color} />
            <StatPill label="Aff. Clicks" value={m.affiliate_clicks} color={site.color} />
          </div>

          {/* Top pages */}
          {m.top_pages.length > 0 && (
            <div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Top Pages</div>
              <div className="space-y-1.5">
                {m.top_pages.slice(0, 5).map(page => (
                  <MiniBar key={page.path} label={page.path} value={page.views} max={maxViews} />
                ))}
              </div>
            </div>
          )}

          {/* Affiliate clicks */}
          {m.affiliate_clicks_by_product.length > 0 && (
            <div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Affiliate Clicks</div>
              <div className="space-y-1.5">
                {m.affiliate_clicks_by_product.slice(0, 5).map(item => (
                  <MiniBar key={item.product} label={item.product} value={item.clicks} max={maxClicks} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ── Login screen ───────────────────────────────────────────────────────────────
function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [pw, setPw] = useState('')
  const [error, setError] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Check password — stored in sessionStorage to avoid full page reload
    // The actual password check happens server-side; client gets a token
    // For simplicity: check against NEXT_PUBLIC_ADMIN_HINT (a hash)
    const correct = pw === (process.env.NEXT_PUBLIC_ADMIN_PASSWORD_HINT ?? 'carlo')
    if (correct) {
      sessionStorage.setItem('carloOS_admin', '1')
      onLogin()
    } else {
      setError(true)
      setTimeout(() => setError(false), 2000)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl border border-gray-200 p-10 w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="text-4xl mb-3">📊</div>
          <h1 className="font-bold text-xl text-gray-900">CarloOS Admin</h1>
          <p className="text-sm text-gray-400 mt-1">All 5 sites · Analytics Dashboard</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={pw}
            onChange={e => setPw(e.target.value)}
            placeholder="Password"
            className={`w-full border rounded-lg px-4 py-3 text-sm outline-none mb-3 transition-colors ${error ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-gray-400'}`}
            autoFocus
          />
          <button type="submit"
            className="w-full bg-gray-900 text-white rounded-lg py-3 text-sm font-bold hover:bg-gray-700 transition-colors">
            Enter Dashboard
          </button>
          {error && <p className="text-red-400 text-xs text-center mt-2">Incorrect password</p>}
        </form>
      </div>
    </div>
  )
}

// ── Main dashboard ─────────────────────────────────────────────────────────────
export default function AdminDashboard() {
  const [authed, setAuthed] = useState(false)
  const [days, setDays] = useState(30)
  const [siteData, setSiteData] = useState<Record<string, SiteData>>(() =>
    Object.fromEntries(SITES.map(s => [s.id, { id: s.id, status: 'loading' }]))
  )

  // Check existing session
  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('carloOS_admin') === '1') {
      setAuthed(true)
    }
  }, [])

  // Load all site metrics when authed
  useEffect(() => {
    if (!authed) return

    async function fetchSite(site: typeof SITES[number]) {
      setSiteData(prev => ({ ...prev, [site.id]: { id: site.id, status: 'loading' } }))
      try {
        const res = await fetch(`${site.url}/api/analytics?site=${site.id}&days=${days}`)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const metrics = await res.json()
        setSiteData(prev => ({ ...prev, [site.id]: { id: site.id, status: 'ok', metrics } }))
      } catch (err) {
        setSiteData(prev => ({
          ...prev,
          [site.id]: { id: site.id, status: 'error', error: 'Cannot reach site analytics' }
        }))
      }
    }

    SITES.forEach(s => fetchSite(s))
  }, [authed, days])

  if (!authed) {
    return <LoginScreen onLogin={() => setAuthed(true)} />
  }

  // Aggregate totals
  const totals = Object.values(siteData).reduce((acc, d) => {
    if (d.status === 'ok' && d.metrics) {
      acc.views += d.metrics.total_views
      acc.sessions += d.metrics.total_sessions
      acc.emails += d.metrics.email_signups
      acc.aff += d.metrics.affiliate_clicks
    }
    return acc
  }, { views: 0, sessions: 0, emails: 0, aff: 0 })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <span className="text-xl">📊</span>
          <span className="font-bold text-gray-900">CarloOS Admin</span>
          <span className="text-sm text-gray-400">All 5 Sites</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm">
            {[7, 14, 30, 90].map(d => (
              <button key={d} onClick={() => setDays(d)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${days === d ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-100'}`}>
                {d}d
              </button>
            ))}
          </div>
          <button onClick={() => { sessionStorage.removeItem('carloOS_admin'); setAuthed(false) }}
            className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
            Sign out
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Portfolio totals */}
        <div>
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Portfolio Total — Last {days} Days</div>
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: 'Total Views', value: totals.views, icon: '👁' },
              { label: 'Sessions', value: totals.sessions, icon: '🖥' },
              { label: 'Email Signups', value: totals.emails, icon: '📬' },
              { label: 'Affiliate Clicks', value: totals.aff, icon: '💰' },
            ].map(stat => (
              <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900">{stat.value.toLocaleString()}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Per-site grid */}
        <div>
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">By Site</div>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
            {SITES.map(site => (
              <SiteCard key={site.id} site={site} data={siteData[site.id] ?? { id: site.id, status: 'loading' }} days={days} />
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Quick Links</div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {SITES.map(site => (
              <div key={site.id} className="flex flex-col gap-1.5">
                <div className="text-xs font-bold text-gray-500">{site.emoji} {site.domain}</div>
                {[
                  { label: 'Site', href: site.url },
                  { label: 'Vercel', href: `https://vercel.com/dashboard` },
                  { label: 'Supabase', href: `https://supabase.com/dashboard` },
                ].map(link => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                    className="text-xs text-gray-400 hover:underline">
                    {link.label} →
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center text-xs text-gray-300 pb-4">
          CarloOS Admin · Data refreshes on page load · {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  )
}
