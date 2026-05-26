/**
 * POST /api/subscribe
 * Handles email capture from EmailCapture component.
 * Writes to: Supabase email_subscriptions table + Mailchimp audience.
 */

import { NextRequest, NextResponse } from 'next/server'
import { createServiceClient } from '@carloOS/db'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, siteId, source } = body

    // Validate
    if (!email || !email.includes('@')) {
      return NextResponse.json({ message: 'Invalid email address' }, { status: 400 })
    }

    if (!siteId) {
      return NextResponse.json({ message: 'Missing siteId' }, { status: 400 })
    }

    // Write to Supabase
    const supabase = createServiceClient()
    const { error: dbError } = await supabase
      .from('email_subscriptions')
      .upsert({
        site_id: siteId,
        email: email.toLowerCase().trim(),
        source: source ?? 'unknown',
        confirmed: false,
      }, {
        onConflict: 'site_id,email',
        ignoreDuplicates: false,
      })

    if (dbError) {
      console.error('Supabase insert error:', dbError)
      // Don't fail the user if DB write fails — still try Mailchimp
    }

    // Mailchimp subscription
    const mailchimpAudienceId = process.env.MAILCHIMP_AUDIENCE_ID
    const mailchimpApiKey = process.env.MAILCHIMP_API_KEY
    const mailchimpServer = process.env.MAILCHIMP_SERVER_PREFIX ?? 'us1'

    if (mailchimpAudienceId && mailchimpApiKey) {
      try {
        const mcResponse = await fetch(
          `https://${mailchimpServer}.api.mailchimp.com/3.0/lists/${mailchimpAudienceId}/members`,
          {
            method: 'POST',
            headers: {
              Authorization: `Basic ${Buffer.from(`anystring:${mailchimpApiKey}`).toString('base64')}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email_address: email.toLowerCase().trim(),
              status: 'pending',  // double opt-in
              tags: [siteId, source ?? 'unknown'],
              merge_fields: {
                SOURCE: source ?? 'unknown',
                SITE: siteId,
              },
            }),
          }
        )

        if (!mcResponse.ok && mcResponse.status !== 400) {
          // 400 often means already subscribed — not an error
          const mcData = await mcResponse.json()
          console.error('Mailchimp error:', mcData)
        } else {
          // Update Mailchimp ID in Supabase
          const mcData = await mcResponse.json()
          if (mcData.id) {
            await supabase
              .from('email_subscriptions')
              .update({ mailchimp_id: mcData.id })
              .eq('site_id', siteId)
              .eq('email', email.toLowerCase().trim())
          }
        }
      } catch (mcErr) {
        console.error('Mailchimp request failed:', mcErr)
        // Still return success — Supabase write succeeded
      }
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Subscribe API error:', err)
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}
