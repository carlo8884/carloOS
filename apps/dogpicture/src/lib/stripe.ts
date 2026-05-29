/**
 * Stripe singleton.
 *
 * Lazy-init keeps the module import safe in environments where the env
 * isn't loaded yet (e.g. type-checking, sitemap generation). Throwing
 * happens only at first actual use.
 */

import Stripe from 'stripe'

let _stripe: Stripe | null = null

export function getStripe(): Stripe {
  if (_stripe) return _stripe
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) throw new Error('STRIPE_SECRET_KEY is not set')
  _stripe = new Stripe(key, { apiVersion: '2024-06-20' })
  return _stripe
}

export function siteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3010'
}
