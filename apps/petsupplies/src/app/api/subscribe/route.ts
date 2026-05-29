/**
 * /api/subscribe — newsletter signup endpoint.
 *
 * Forwards to Mailchimp's audience members API when MAILCHIMP_API_KEY and
 * MAILCHIMP_AUDIENCE_ID are present. Otherwise returns 503 to keep the form
 * disabled (matching dog-com's pattern until ESP is wired).
 *
 * Source tag from the form body is sent as a Mailchimp tag — for the
 * homepage this is "petsupplies:weekly" per Architect S1 spec.
 */

import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  let payload: { email?: string; siteId?: string; source?: string }
  try {
    payload = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }
  const { email, source } = payload
  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
  }

  const apiKey = process.env.MAILCHIMP_API_KEY
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID
  if (!apiKey || !audienceId) {
    return NextResponse.json(
      { error: 'Email capture not yet configured. Subscribe again once Mailchimp is wired.' },
      { status: 503 },
    )
  }

  // Mailchimp API key format is <key>-<dc>, where dc is the data-center suffix.
  const dc = apiKey.split('-')[1]
  if (!dc) {
    return NextResponse.json({ error: 'Invalid Mailchimp API key' }, { status: 500 })
  }

  const tag = source ?? 'petsupplies:weekly'
  const url = `https://${dc}.api.mailchimp.com/3.0/lists/${audienceId}/members`
  const auth = Buffer.from(`anystring:${apiKey}`).toString('base64')

  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${auth}`,
    },
    body: JSON.stringify({
      email_address: email,
      status: 'pending', // double opt-in
      tags: [tag],
      merge_fields: { SOURCE: tag },
    }),
  })

  if (resp.ok) {
    return NextResponse.json({ ok: true })
  }

  // Mailchimp returns 400 for "Member Exists" — treat as success so users
  // already on the list get a confirmation instead of an error.
  const detail = await resp.json().catch(() => ({}))
  if (detail?.title === 'Member Exists') {
    return NextResponse.json({ ok: true, alreadySubscribed: true })
  }
  return NextResponse.json(
    { error: detail?.detail ?? 'Subscription failed' },
    { status: resp.status },
  )
}
