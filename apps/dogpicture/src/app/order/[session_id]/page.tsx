/**
 * /order/[session_id] — thank-you + status tracking page.
 *
 * The server component renders an initial snapshot; the embedded
 * <OrderStatusPoller> client component polls /api/order?session_id= every
 * few seconds to update the badge as the Stripe webhook completes
 * fulfillment.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata } from '@carloOS/ui'
import { getOrderBySession } from '@/lib/orders'
import { PRODUCTS } from '@/data/products'
import { OrderStatusPoller } from './OrderStatusPoller'
import { InsuranceCTA } from '@/components/InsuranceCTA'

interface PageProps {
  params: { session_id: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return buildMetadata({
    siteId: 'dogpicture',
    title: 'Your order',
    description: 'Track your DogPicture order status.',
    path: `/order/${params.session_id}`,
    type: 'website',
    noIndex: true,
  })
}

export default async function OrderPage({ params }: PageProps) {
  const order = await getOrderBySession(params.session_id)

  if (!order) {
    // Webhook may not have landed yet — render a polling shell.
    return (
      <div className="max-w-content mx-auto px-container-sm sm:px-10 py-16 text-center">
        <h1 className="font-display font-black text-brand-text-dark text-3xl tracking-tight mb-3">
          Thanks — finalizing your order
        </h1>
        <p className="text-base text-brand-text-mid mb-8">
          We&apos;re writing it to our books. This usually takes a few seconds.
        </p>
        <OrderStatusPoller sessionId={params.session_id} />
        <Link
          href="/"
          className="inline-flex items-center mt-8 text-brand-primary font-semibold no-underline hover:underline"
        >
          ← Back to home
        </Link>
      </div>
    )
  }

  const product = PRODUCTS[order.product_type]

  return (
    <div className="max-w-content-wide mx-auto px-container-sm sm:px-10 py-12 sm:py-16">
      <header className="text-center mb-10">
        <div className="text-4xl mb-3" aria-hidden="true">🎉</div>
        <h1 className="font-display font-black text-brand-text-dark text-3xl sm:text-4xl tracking-tight mb-3">
          Thank you{order.pet_name ? `! ${order.pet_name} is on its way.` : '!'}
        </h1>
        <p className="text-base text-brand-text-mid max-w-xl mx-auto">
          A receipt has been sent to <strong>{order.customer_email}</strong>.
        </p>
      </header>

      <div className="grid md:grid-cols-[1fr_380px] gap-10">
        <div className="space-y-6">
          {order.image_url && (
            <div className="aspect-square relative rounded-xl overflow-hidden border border-brand-border shadow-card max-w-md mx-auto md:mx-0">
              <Image
                src={order.image_url}
                alt={order.pet_name ?? 'Your portrait'}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          )}

          <InsuranceCTA vendor="lemonade" />
        </div>

        <aside className="bg-brand-white rounded-xl border border-brand-border p-6 space-y-5">
          <div>
            <div className="text-xs font-bold uppercase tracking-eyebrow text-brand-primary mb-2">
              Order
            </div>
            <div className="font-display font-bold text-brand-text-dark">{product.name}</div>
            <div className="text-sm text-brand-text-mid">
              ${(order.total_cents / 100).toFixed(2)} · Order #{order.id.slice(0, 10)}
            </div>
          </div>

          <OrderStatusPoller sessionId={params.session_id} initialStatus={order.status} />

          {!product.physical && order.image_url && (
            <a
              href={order.image_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-brand-primary text-white font-bold text-sm py-3.5 rounded-pill no-underline hover:bg-brand-primary-light transition-colors"
            >
              Download your portrait →
            </a>
          )}

          <p className="text-xs text-brand-text-light leading-relaxed">
            Questions? Email <a href="mailto:hello@dogpicture.com" className="text-brand-primary">hello@dogpicture.com</a> with your order number.
          </p>
        </aside>
      </div>
    </div>
  )
}
