import { NextResponse } from 'next/server'

/**
 * POST /api/subscribe
 *
 * Mailchimp newsletter subscribe endpoint. Adds the email to the
 * SeniorPetPharmacy audience with the appropriate tag (e.g.
 * `seniorpets:monthly`, `seniorpets:condition:<slug>`).
 *
 * Env vars used (all server-only):
 *   MAILCHIMP_API_KEY
 *   MAILCHIMP_AUDIENCE_ID
 *   MAILCHIMP_SERVER_PREFIX        (e.g. "us1")
 *
 * If env vars are missing, returns 503 so the UI can degrade gracefully.
 * The EmailCapture component is gated behind NEXT_PUBLIC_EMAIL_CAPTURE_ENABLED,
 * so during scaffolding nothing user-visible breaks.
 */
export async function POST(req: Request) {
  let body: { email?: string; siteId?: string; source?: string; tags?: string[] }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const { email, source = 'unknown', tags = ['seniorpets:monthly'] } = body
  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Email required' }, { status: 400 })
  }

  const apiKey = process.env.MAILCHIMP_API_KEY
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID
  const prefix = process.env.MAILCHIMP_SERVER_PREFIX
  if (!apiKey || !audienceId || !prefix) {
    return NextResponse.json(
      { error: 'Email capture not yet configured for this deployment' },
      { status: 503 },
    )
  }

  const tagList = [...new Set([...tags, `seniorpets:source:${source}`])]

  try {
    const res = await fetch(
      `https://${prefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString('base64')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
          tags: tagList,
          merge_fields: { SOURCE: source },
        }),
      },
    )

    if (!res.ok && res.status !== 400) {
      // 400 may indicate "already subscribed" — treat as success below
      return NextResponse.json({ error: 'Subscription failed' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Subscription failed' }, { status: 502 })
  }
}
