import { NextResponse } from 'next/server'

/**
 * The analytics store is Supabase. While it is unset this route returns
 * HTTP 200 `{ ok: false }` and never 503. A present store still returns
 * `{ ok: false }`: the dashboard stays off, and this module does not
 * query the store or set env.
 */
export function analyticsStoreConfigured(env: NodeJS.ProcessEnv = process.env): boolean {
  return Boolean(env.NEXT_PUBLIC_SUPABASE_URL && env.SUPABASE_SERVICE_ROLE_KEY)
}

export function handleAnalyticsRequest(env: NodeJS.ProcessEnv = process.env): Response {
  void analyticsStoreConfigured(env)
  return NextResponse.json({ ok: false }, { status: 200 })
}
