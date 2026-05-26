/**
 * POST /api/checkout
 * Creates a Stripe Checkout Session for premium membership.
 * Called from the membership upgrade UI.
 *
 * Body: { siteId, priceId, userId, successUrl, cancelUrl }
 */

import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-04-10',
})

// Stripe Price IDs per site — set in Stripe Dashboard and add to env vars
const PRICE_IDS: Record<string, string> = {
  'dog-com': process.env.STRIPE_PRICE_DOG_PREMIUM ?? '',
  'vets-co': process.env.STRIPE_PRICE_VETS_PREMIUM ?? '',
  'fish-com': process.env.STRIPE_PRICE_FISH_PREMIUM ?? '',
  'saddle-com': process.env.STRIPE_PRICE_SADDLE_PREMIUM ?? '',
  'lizard-com': process.env.STRIPE_PRICE_LIZARD_PREMIUM ?? '',
}

export async function POST(req: NextRequest) {
  try {
    const { siteId, userId, successUrl, cancelUrl } = await req.json()

    if (!siteId || !userId) {
      return NextResponse.json({ error: 'Missing siteId or userId' }, { status: 400 })
    }

    const priceId = PRICE_IDS[siteId]
    if (!priceId) {
      return NextResponse.json({ error: `No price configured for site: ${siteId}` }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      metadata: {
        user_id: userId,
        site_id: siteId,
      },
      success_url: successUrl ?? `${req.headers.get('origin')}/membership/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl ?? `${req.headers.get('origin')}/membership`,
      subscription_data: {
        trial_period_days: 7,
        metadata: { user_id: userId, site_id: siteId },
      },
      allow_promotion_codes: true,
    })

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (err) {
    console.error('Checkout session error:', err)
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
