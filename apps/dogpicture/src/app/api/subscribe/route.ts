/**
 * POST /api/subscribe
 *
 * Adds the email to the configured Mailchimp audience with the tag
 * `MAILCHIMP_DOGPICTURE_TAG` (default: `dogpicture:weekly`). Used by the
 * EmailCapture component in the homepage footer.
 *
 * In dev (no MAILCHIMP_API_KEY) we log and return success so the UI flow
 * still completes.
 */

import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  try {
    const { email, source } = (await req.json()) as { email?: string; source?: string }
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    const tag = process.env.MAILCHIMP_DOGPICTURE_TAG ?? 'dogpicture:weekly'

    if (!process.env.MAILCHIMP_API_KEY || !process.env.MAILCHIMP_AUDIENCE_ID) {
      console.log('[subscribe][dev]', { email, tag, source })
      return NextResponse.json({ ok: true, mock: true })
    }

    const server = process.env.MAILCHIMP_SERVER_PREFIX ?? 'us1'
    const audience = process.env.MAILCHIMP_AUDIENCE_ID
    const endpoint = `https://${server}.api.mailchimp.com/3.0/lists/${audience}/members`

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${process.env.MAILCHIMP_API_KEY}`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
        tags: [tag, source ?? 'dogpicture:footer'],
      }),
    })

    // Mailchimp returns 400 for already-subscribed — treat as success.
    if (!res.ok && res.status !== 400) {
      const body = await res.text()
      console.error('[subscribe] mailchimp error', res.status, body)
      return NextResponse.json({ error: 'Subscribe failed' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[subscribe] error', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
