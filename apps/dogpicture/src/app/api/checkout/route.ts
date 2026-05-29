/**
 * POST /api/checkout
 *
 * Body:
 *   { generationId: string, productType: ProductType, email: string }
 *
 * Returns: { url } — redirect target to Stripe Checkout
 *
 * Notes:
 *   - We collect shipping address in Stripe for physical goods (Printify
 *     needs it). Digital orders skip address collection.
 *   - The success URL routes to /order/{CHECKOUT_SESSION_ID} which polls
 *     the order status table.
 *   - generationId is stamped onto metadata so the webhook can find the
 *     image_url after payment without us needing a DB lookup in this
 *     route's hot path.
 */

import { NextResponse } from 'next/server'
import { getStripe, siteUrl } from '@/lib/stripe'
import { PRODUCTS, type ProductType } from '@/data/products'
import { getGeneration } from '@/lib/orders'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      generationId?: string
      productType?: ProductType
      email?: string
    }

    const { generationId, productType, email } = body
    if (!generationId || !productType || !email) {
      return NextResponse.json(
        { error: 'generationId, productType, and email are required' },
        { status: 400 },
      )
    }

    const product = PRODUCTS[productType]
    if (!product) return NextResponse.json({ error: 'Unknown product' }, { status: 400 })

    const generation = await getGeneration(generationId)
    if (!generation) return NextResponse.json({ error: 'Generation not found' }, { status: 404 })

    const stripe = getStripe()
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      customer_email: email,
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: product.priceCents,
            product_data: {
              name: `${product.name} — ${generation.pet_name}`,
              description: product.description,
              images: [generation.generated_url],
            },
          },
          quantity: 1,
        },
      ],
      shipping_address_collection: product.physical
        ? { allowed_countries: ['US', 'CA', 'GB', 'AU', 'DE', 'FR', 'IE', 'NL', 'SE'] }
        : undefined,
      metadata: {
        product_type: productType,
        generation_id: generationId,
        pet_name: generation.pet_name,
        image_url: generation.generated_url,
      },
      success_url: `${siteUrl()}/order/{CHECKOUT_SESSION_ID}?status=success`,
      cancel_url: `${siteUrl()}/preview/${generationId}?canceled=1`,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('[checkout] error', err)
    const msg = err instanceof Error ? err.message : 'Internal error'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
