import { NextRequest, NextResponse } from 'next/server'
import { createServiceClient } from '@carloOS/db'

export async function POST(req: NextRequest) {
  try {
    const { email, siteId, source } = await req.json()
    if (!email?.includes('@')) return NextResponse.json({ message: 'Invalid email' }, { status: 400 })
    const supabase = createServiceClient()
    await supabase.from('email_subscriptions').upsert(
      { site_id: siteId ?? 'vets-co', email: email.toLowerCase().trim(), source: source ?? 'unknown', confirmed: false },
      { onConflict: 'site_id,email' }
    )
    const mcKey = process.env.MAILCHIMP_API_KEY
    const mcAudience = process.env.MAILCHIMP_AUDIENCE_ID
    const mcServer = process.env.MAILCHIMP_SERVER_PREFIX ?? 'us1'
    if (mcKey && mcAudience) {
      await fetch(`https://${mcServer}.api.mailchimp.com/3.0/lists/${mcAudience}/members`, {
        method: 'POST',
        headers: { Authorization: `Basic ${Buffer.from(`anystring:${mcKey}`).toString('base64')}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ email_address: email.toLowerCase().trim(), status: 'pending', tags: [siteId ?? 'vets-co', source ?? 'unknown'] }),
      }).catch(() => {})
    }
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}
