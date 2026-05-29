/**
 * InsuranceCTA — cross-portfolio promo block.
 *
 * Per Architect S8 / V2 §3.6 / Directive 6: every product preview should
 * offer "love your dog? insure them" routing back to the dog.com pet
 * insurance hub. We earn affiliate commission on top of the portrait sale.
 *
 * The link uses rel="sponsored" + UTM-tagged URL via `affiliateHref()`
 * (analogous to <AffiliateLink vendor="lemonade">) for FTC compliance
 * and attribution.
 */

import { affiliateHref } from '@/lib/affiliate'

export function InsuranceCTA({ vendor = 'lemonade' }: { vendor?: string }) {
  return (
    <a
      href={affiliateHref(vendor)}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className="block rounded-xl border border-brand-border bg-gradient-to-r from-brand-primary-pale to-brand-white p-5 sm:p-6 no-underline hover:border-brand-primary transition-colors group"
    >
      <div className="flex items-center gap-4">
        <span aria-hidden="true" className="text-3xl shrink-0">🛡️</span>
        <div className="flex-1 min-w-0">
          <div className="text-xs uppercase tracking-eyebrow text-brand-primary font-bold mb-1">
            From our portfolio · sponsored
          </div>
          <div className="font-display font-bold text-base sm:text-lg text-brand-text-dark leading-tight">
            Want to protect your masterpiece?
          </div>
          <div className="text-sm text-brand-text-mid mt-1">
            Compare top-rated pet insurance plans on dog.com →
          </div>
        </div>
        <span aria-hidden="true" className="hidden sm:inline text-brand-primary font-bold text-2xl group-hover:translate-x-1 transition-transform">
          →
        </span>
      </div>
    </a>
  )
}
