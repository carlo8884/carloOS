/**
 * POST /api/webhooks/stripe
 * Handles Stripe webhook events for membership management.
 * Events handled:
 *   - checkout.session.completed
 *   - customer.subscription.created
 *   - customer.subscription.updated
 *   - customer.subscription.deleted
 *   - invoice.payment_succeeded
 *   - invoice.payment_failed
 */

import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createServiceClient } from '@carloOS/db'
import type { SiteId } from '@carloOS/config'

// ── Stripe client ─────────────────────────────────────────────────────────────

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-04-10',
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

// ── Route handler ─────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const body = await req.text()
  const signature = req.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'Missing stripe-signature header' }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  const supabase = createServiceClient()

  try {
    switch (event.type) {

      // ── New checkout completed ──────────────────────────────────────────────
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session

        if (session.mode !== 'subscription') break

        const subscription = await stripe.subscriptions.retrieve(session.subscription as string)
        const userId = session.metadata?.user_id
        const siteId = session.metadata?.site_id as SiteId

        if (!userId || !siteId) {
          console.error('Missing metadata in checkout session:', session.id)
          break
        }

        await supabase.from('memberships').upsert({
          user_id: userId,
          site_id: siteId,
          tier: 'premium',
          status: 'active',
          stripe_customer_id: session.customer as string,
          stripe_subscription_id: subscription.id,
          stripe_price_id: subscription.items.data[0]?.price.id ?? null,
          current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
          current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
        }, { onConflict: 'user_id,site_id' })

        console.log(`✅ Membership created: user=${userId}, site=${siteId}`)
        break
      }

      // ── Subscription updated ────────────────────────────────────────────────
      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription

        const statusMap: Record<string, string> = {
          active: 'active',
          trialing: 'trialing',
          past_due: 'past_due',
          canceled: 'canceled',
          incomplete: 'incomplete',
          incomplete_expired: 'canceled',
        }

        await supabase
          .from('memberships')
          .update({
            status: statusMap[subscription.status] ?? 'active',
            tier: subscription.status === 'active' || subscription.status === 'trialing'
              ? 'premium' : 'free',
            current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
            current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
            canceled_at: subscription.canceled_at
              ? new Date(subscription.canceled_at * 1000).toISOString()
              : null,
          })
          .eq('stripe_subscription_id', subscription.id)

        console.log(`✅ Membership updated: sub=${subscription.id}, status=${subscription.status}`)
        break
      }

      // ── Subscription deleted / canceled ──────────────────────────────────────
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription

        await supabase
          .from('memberships')
          .update({
            status: 'canceled',
            tier: 'free',
            canceled_at: new Date().toISOString(),
          })
          .eq('stripe_subscription_id', subscription.id)

        console.log(`✅ Membership canceled: sub=${subscription.id}`)
        break
      }

      // ── Payment succeeded ─────────────────────────────────────────────────────
      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice
        const subscriptionId = invoice.subscription as string

        if (subscriptionId) {
          await supabase
            .from('memberships')
            .update({ status: 'active', tier: 'premium' })
            .eq('stripe_subscription_id', subscriptionId)

          console.log(`✅ Payment succeeded, membership reactivated: sub=${subscriptionId}`)
        }
        break
      }

      // ── Payment failed ────────────────────────────────────────────────────────
      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice
        const subscriptionId = invoice.subscription as string

        if (subscriptionId) {
          await supabase
            .from('memberships')
            .update({ status: 'past_due' })
            .eq('stripe_subscription_id', subscriptionId)

          console.warn(`⚠️  Payment failed: sub=${subscriptionId}`)
        }
        break
      }

      default:
        // Ignore unhandled events
        break
    }
  } catch (err) {
    console.error(`Error handling webhook ${event.type}:`, err)
    return NextResponse.json({ error: 'Webhook handler error' }, { status: 500 })
  }

  return NextResponse.json({ received: true })
}
