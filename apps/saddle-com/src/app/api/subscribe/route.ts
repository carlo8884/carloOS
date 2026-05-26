import { NextRequest, NextResponse } from 'next/server'
import { createServiceClient } from '@carloOS/db'
export async function POST(req: NextRequest) {
  try {
    const { email, siteId, source } = await req.json()
    if (!email?.includes('@')) return NextResponse.json({ message: 'Invalid email' }, { status: 400 })
    const supabase = createServiceClient()
    await supabase.from('email_subscriptions').upsert(
      { site_id: siteId ?? 'saddle-com', email: email.toLowerCase().trim(), source: source ?? 'unknown', confirmed: false },
      { onConflict: 'site_id,email' }
    )
    return NextResponse.json({ success: true })
  } catch { return NextResponse.json({ message: 'Server error' }, { status: 500 }) }
}
