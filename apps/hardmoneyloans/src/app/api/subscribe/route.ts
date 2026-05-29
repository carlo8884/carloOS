import { NextResponse } from 'next/server'

/**
 * /api/subscribe — Mailchimp newsletter subscribe endpoint.
 *
 * Wires to MAILCHIMP_API_KEY + MAILCHIMP_AUDIENCE_ID + MAILCHIMP_SERVER_PREFIX
 * when present. Tags the contact with the form's `source` value so the
 * "hardmoneyloans:market-update" segment can be targeted in Mailchimp.
 */
export async function POST(req: Request) {
  let body: { email?: string; source?: string; siteId?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ message: 'Bad JSON' }, { status: 400 })
  }
  const { email, source } = body
  if (!email || !email.includes('@')) {
    return NextResponse.json({ message: 'Invalid email' }, { status: 400 })
  }

  const key = process.env.MAILCHIMP_API_KEY
  const audience = process.env.MAILCHIMP_AUDIENCE_ID
  const prefix = process.env.MAILCHIMP_SERVER_PREFIX

  if (!key || !audience || !prefix) {
    return NextResponse.json(
      { message: 'Email capture not yet available' },
      { status: 503 },
    )
  }

  try {
    const url = `https://${prefix}.api.mailchimp.com/3.0/lists/${audience}/members`
    const tag = source ?? 'hardmoneyloans:market-update'
    const auth = Buffer.from(`anystring:${key}`).toString('base64')
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'pending',
        tags: [tag],
      }),
    })
    if (!res.ok) {
      const j = await res.json().catch(() => ({}))
      return NextResponse.json(
        { message: j.title ?? 'Subscribe failed' },
        { status: 502 },
      )
    }
    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json(
      { message: err instanceof Error ? err.message : 'unknown' },
      { status: 500 },
    )
  }
}
