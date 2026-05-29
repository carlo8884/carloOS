/**
 * POST /api/subscribe
 *
 * Body: { email: string, siteId: string, source: string }
 *
 * Adds the email to Mailchimp with a tag like "askthevet:triage-history".
 * If Mailchimp env vars are missing, no-ops with a 204 so the UI proceeds.
 */

import { NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

interface SubscribeBody {
  email: string
  siteId: string
  source: string
}

export async function POST(req: Request) {
  let body: SubscribeBody
  try {
    body = (await req.json()) as SubscribeBody
  } catch {
    return NextResponse.json({ message: 'Invalid JSON' }, { status: 400 })
  }

  if (!body.email || !body.email.includes('@')) {
    return NextResponse.json({ message: 'Valid email required' }, { status: 400 })
  }

  const apiKey = process.env.MAILCHIMP_API_KEY
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX // e.g. "us21"

  // No-op gracefully if Mailchimp isn't configured.
  if (!apiKey || !audienceId || !serverPrefix) {
    return NextResponse.json({ ok: true, noop: true })
  }

  const tag = `${body.siteId}:${body.source}`
  const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: body.email,
        status: 'subscribed',
        tags: [tag],
      }),
    })

    if (!res.ok && res.status !== 400) {
      // 400 often means "already subscribed" — treat as success.
      const text = await res.text()
      return NextResponse.json({ message: text }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json(
      { message: err instanceof Error ? err.message : 'Subscribe failed' },
      { status: 502 },
    )
  }
}
