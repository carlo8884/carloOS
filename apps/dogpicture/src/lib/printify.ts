/**
 * Printify fulfillment helper.
 *
 * createPrintifyOrder takes a portrait_orders row + the buyer's shipping
 * address and POSTs to Printify's external_orders endpoint. In dev / mock
 * mode (DOGPICTURE_LIVE_MODE != 'true' or PRINTIFY_API_KEY missing) we
 * synthesize a dummy order ID so the webhook handler can still write a
 * `printify_order_id` to Supabase and the order page can render.
 *
 * Reference: https://developers.printify.com/#external-orders
 */

import { PRODUCTS, type ProductType } from '@/data/products'

const LIVE =
  process.env.DOGPICTURE_LIVE_MODE === 'true' &&
  !!process.env.PRINTIFY_API_KEY &&
  !!process.env.PRINTIFY_SHOP_ID

export interface PrintifyAddress {
  first_name: string
  last_name: string
  email: string
  phone?: string
  country: string
  region?: string
  address1: string
  address2?: string
  city: string
  zip: string
}

export interface CreateOrderInput {
  externalId: string // our Stripe session id — Printify dedupes on this
  productType: ProductType
  imageUrl: string   // the generated portrait
  customerEmail: string
  shipping?: PrintifyAddress
}

export interface PrintifyOrderResult {
  id: string
  mode: 'live' | 'mock'
}

export async function createPrintifyOrder(input: CreateOrderInput): Promise<PrintifyOrderResult> {
  const product = PRODUCTS[input.productType]
  if (!product.physical) {
    throw new Error(`Product ${input.productType} is digital — do not call Printify`)
  }

  if (!LIVE) {
    // Deterministic dummy ID — helpful in dev to confirm flow without a key.
    return { id: `mock_${input.externalId}`, mode: 'mock' }
  }

  const shopId = process.env.PRINTIFY_SHOP_ID
  const endpoint = `https://api.printify.com/v1/shops/${shopId}/orders.json`

  const payload = {
    external_id: input.externalId,
    label: `DogPicture #${input.externalId.slice(0, 8)}`,
    line_items: [
      {
        print_provider_id: 1, // placeholder — set per blueprint in production
        blueprint_id: product.printifyBlueprintId,
        variant_id: product.printifyVariantId,
        print_areas: { front: input.imageUrl },
        quantity: 1,
      },
    ],
    shipping_method: 1,
    send_shipping_notification: true,
    address_to: input.shipping ?? {
      // Stripe collects this — if missing the order will sit in draft state.
      first_name: 'Pending',
      last_name: 'Shipping',
      email: input.customerEmail,
      country: 'US',
      address1: 'TBD',
      city: 'TBD',
      zip: '00000',
    },
  }

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.PRINTIFY_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Printify ${res.status}: ${body.slice(0, 200)}`)
  }

  const json = (await res.json()) as { id: string }
  return { id: json.id, mode: 'live' }
}
