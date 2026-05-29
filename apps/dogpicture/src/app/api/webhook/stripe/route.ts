/**
 * POST /api/webhook/stripe
 *
 * Stripe webhook entry. We verify the signature with STRIPE_WEBHOOK_SECRET
 * and handle `checkout.session.completed`:
 *
 *   - digital_only         → email the high-res download link
 *   - any physical product → POST to Printify, store printify_order_id
 *
 * Stripe replays webhooks if we don't 200 — every handler is idempotent
 * (upsert by stripe_session_id).
 */

import { NextResponse } from 'next/server'
import type Stripe from 'stripe'
import { getStripe } from '@/lib/stripe'
import { PRODUCTS, type ProductType } from '@/data/products'
import { saveOrder, updateOrderStatus } from '@/lib/orders'
import { createPrintifyOrder, type PrintifyAddress } from '@/lib/printify'
import { sendDigitalDelivery } from '@/lib/email'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET
  if (!secret) {
    return NextResponse.json({ error: 'STRIPE_WEBHOOK_SECRET not set' }, { status: 500 })
  }

  const sig = req.headers.get('stripe-signature')
  if (!sig) return NextResponse.json({ error: 'Missing signature' }, { status: 400 })

  const raw = await req.text()
  let event: Stripe.Event
  try {
    event = getStripe().webhooks.constructEvent(raw, sig, secret)
  } catch (err) {
    console.error('[stripe webhook] signature check failed', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type !== 'checkout.session.completed') {
    return NextResponse.json({ received: true })
  }

  const session = event.data.object as Stripe.Checkout.Session
  const md = session.metadata ?? {}
  const productType = md.product_type as ProductType | undefined
  const generationId = md.generation_id as string | undefined
  const imageUrl = md.image_url as string | undefined
  const petName = md.pet_name as string | undefined
  const email = session.customer_details?.email ?? session.customer_email ?? ''

  if (!productType || !generationId || !email) {
    console.error('[stripe webhook] missing metadata', { md })
    return NextResponse.json({ received: true, skipped: true })
  }

  const product = PRODUCTS[productType]
  await saveOrder({
    id: session.id,
    stripe_session_id: session.id,
    customer_email: email,
    product_type: productType,
    generation_id: generationId,
    status: 'paid',
    printify_order_id: null,
    total_cents: session.amount_total ?? product.priceCents,
    image_url: imageUrl ?? null,
    pet_name: petName ?? null,
  })

  try {
    if (!product.physical) {
      // Digital delivery — send the download link to the buyer.
      if (imageUrl) {
        await sendDigitalDelivery({ to: email, downloadUrl: imageUrl, petName: petName ?? 'your dog' })
      }
      await updateOrderStatus(session.id, { status: 'fulfilled' })
    } else {
      // Physical fulfillment via Printify.
      const shipping = mapShipping(session.customer_details, session.shipping_details)
      const printifyRes = await createPrintifyOrder({
        externalId: session.id,
        productType,
        imageUrl: imageUrl ?? '',
        customerEmail: email,
        shipping,
      })
      await updateOrderStatus(session.id, {
        status: 'fulfilled',
        printify_order_id: printifyRes.id,
      })
    }
  } catch (err) {
    console.error('[stripe webhook] fulfillment failed', err)
    await updateOrderStatus(session.id, { status: 'failed' })
    // Still return 200 — we have the order recorded; ops can re-fulfill.
  }

  return NextResponse.json({ received: true })
}

function mapShipping(
  customer: Stripe.Checkout.Session.CustomerDetails | null,
  shipping: Stripe.Checkout.Session.ShippingDetails | null | undefined,
): PrintifyAddress | undefined {
  const addr = shipping?.address ?? customer?.address
  if (!addr) return undefined
  const fullName = shipping?.name ?? customer?.name ?? ''
  const [first, ...rest] = fullName.split(' ')
  return {
    first_name: first || 'Customer',
    last_name: rest.join(' ') || '',
    email: customer?.email ?? '',
    phone: customer?.phone ?? undefined,
    country: addr.country ?? 'US',
    region: addr.state ?? undefined,
    address1: addr.line1 ?? '',
    address2: addr.line2 ?? undefined,
    city: addr.city ?? '',
    zip: addr.postal_code ?? '',
  }
}
