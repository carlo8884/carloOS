import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dogpicture',
  title: 'Refund Policy | DogPicture.com',
  description: 'How refunds work for digital and physical DogPicture.com orders.',
  path: '/legal/refund-policy',
})

export default function RefundPolicyPage() {
  return (
    <div className="px-container-sm sm:px-10 py-16 max-w-content mx-auto">
      <nav className="text-xs text-brand-text-light flex gap-2 mb-8">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <Link href="/legal/terms" className="hover:text-brand-primary no-underline">Legal</Link>
        <span>›</span>
        <span className="text-brand-text-mid">Refund Policy</span>
      </nav>
      <h1 className="font-display font-black text-brand-text-dark text-3xl tracking-tight mb-2">
        Refund Policy
      </h1>
      <p className="text-sm text-brand-text-light mb-10">Last updated: May 2026</p>

      <div className="carloOS-article">
        <h2>Digital Downloads — final sale after delivery</h2>
        <p>
          Digital portrait downloads are <strong>non-refundable once the file has been delivered</strong>.
          Because we cannot &ldquo;return&rdquo; a downloaded image, all sales are final from the moment the
          download link is sent to your email.
        </p>
        <p>
          If your preview did not render correctly or you never received the download email after
          checkout, contact <a href="mailto:hello@dogpicture.com">hello@dogpicture.com</a> within 7
          days and we will regenerate or refund at our discretion.
        </p>

        <h2>Physical Products — refundable per Printify terms</h2>
        <p>
          Physical products (canvas, mug, T-shirt, blanket, framed print) are fulfilled by our
          print partner Printify. We accept refund and replacement requests for:
        </p>
        <ul>
          <li><strong>Damaged in transit</strong> — full replacement at no cost. Send a photo of the damage within 14 days of delivery.</li>
          <li><strong>Print defects</strong> — full replacement. Send a photo within 14 days.</li>
          <li><strong>Wrong item shipped</strong> — full replacement.</li>
          <li><strong>Lost in transit</strong> — full replacement once the carrier confirms loss.</li>
        </ul>
        <p>
          Because every product is printed on demand specifically for you, we cannot accept returns
          for buyer&apos;s remorse, ordering the wrong size, or changes of mind once the order has
          entered production.
        </p>

        <h2>Cancellations</h2>
        <p>
          You can cancel an order within 60 minutes of checkout for a full refund, before it enters
          production. After 60 minutes the order is locked in with the print shop.
        </p>

        <h2>How to request a refund or replacement</h2>
        <p>
          Email <a href="mailto:hello@dogpicture.com">hello@dogpicture.com</a> with:
        </p>
        <ul>
          <li>Your order number (starts with <code>cs_</code>)</li>
          <li>A clear photo of the issue (for damage/defects)</li>
          <li>Your shipping address (for replacements)</li>
        </ul>
        <p>Refunds appear on your original payment method within 5–10 business days.</p>

        <h2>Pricing transparency</h2>
        <p>
          Digital: $9 · Mug: $25 · T-Shirt: $35 · Canvas: $59 · Blanket: $69 · Framed Print: $89 ·
          Digital + Canvas Bundle: $35 (saves $33 vs à la carte). Shipping is calculated at
          checkout. Prices are in USD.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-brand-border flex gap-6 text-sm">
        <Link href="/legal/terms" className="text-brand-primary hover:underline">Terms of Use</Link>
        <Link href="/legal/privacy-policy" className="text-brand-primary hover:underline">Privacy Policy</Link>
      </div>
    </div>
  )
}
