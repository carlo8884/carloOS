/**
 * SuppliesCTA — tasteful, app-local affiliate CTA block for Ferrets.com's
 * single commercial-intent setup page (/acquiring/first-supplies).
 *
 * Ferrets.com is the editorial directory; the sister commercial site is
 * Ferret.com. This block is a restrained, opt-in shortcut for owners who want
 * to source the core *physical, non-medical* starter supplies — cage, bedding,
 * litter pan, diet — without leaving the page. It is NOT a review buy-box: no
 * scores, no fabricated ratings, no superlatives (QC §1.1/§1.4). Every product
 * here is a physical supply (§1.5.b allows these in commercial links; no
 * clinical/medicated items).
 *
 * Compliance:
 *  - <AffiliateDisclosure variant="inline"> renders ABOVE the first CTA
 *    (FTC 16 CFR Part 255; QC §3.2).
 *  - Links route through the existing /go/[vendor]/[sku] tracker — only
 *    vendors/SKUs already registered in affiliate-routes.ts and already in
 *    production on the sister site Ferret.com. No invented vendors or SKUs.
 *  - rel="sponsored nofollow noopener".
 */

import { AffiliateDisclosure } from '@carloOS/ui'

interface SupplyLink {
  /** Display label for the supply category. */
  label: string
  /** What it is, in one plain line (no superlatives, no ratings). */
  note: string
  /** Existing /go route — vendor + sku must be registered + production-real. */
  href: string
}

// Marshall SKUs below are the same physical, ferret-specific supplies already
// linked on the sister site Ferret.com (apps/ferret-com/src/app/care/cage-setup
// and care/diet-basics) and registered in this app's affiliate-routes.ts. No
// new vendors or SKUs are introduced here.
const SUPPLIES: SupplyLink[] = [
  {
    label: 'Multi-level ferret cage',
    note: 'Ferret-appropriate bar spacing and separate levels for sleeping and eliminating.',
    href: '/go/marshall/designer-ferret-cage?s=acquiring-first-supplies',
  },
  {
    label: 'Sleep sack & hammock set',
    note: 'Enclosed bedding that satisfies the burrowing drive, plus an elevated hammock.',
    href: '/go/marshall/ferret-sleep-sack?s=acquiring-first-supplies',
  },
  {
    label: 'Corner litter pan',
    note: 'Corner-shaped with a low entry lip — ferrets prefer corners to eliminate.',
    href: '/go/marshall/lock-n-litter-pan?s=acquiring-first-supplies',
  },
  {
    label: 'Obligate-carnivore diet',
    note: 'A species-appropriate high-protein, high-fat ferret diet — reliably available.',
    href: '/go/marshall/premium-ferret-diet?s=acquiring-first-supplies',
  },
]

export function SuppliesCTA() {
  return (
    <section
      aria-labelledby="starter-supplies"
      className="mt-12 mb-10 p-6 rounded-xl border border-brand-border bg-brand-surface"
    >
      <h2
        id="starter-supplies"
        className="font-display font-bold text-brand-text-dark mb-2"
        style={{ fontSize: '1.375rem' }}
      >
        Source the core starter supplies
      </h2>
      <p className="text-sm text-brand-text-mid leading-relaxed mb-4 m-0">
        Want to put the essentials in a cart while you read? These are the four
        physical items every new owner needs ready before pickup. For full
        side-by-side product comparisons, the sister site{' '}
        <a
          href="https://ferret.com"
          rel="noopener"
          className="text-brand-primary font-medium hover:underline"
        >
          Ferret.com
        </a>{' '}
        covers cages, food, and supplies in depth.
      </p>

      {/* FTC disclosure ABOVE the first CTA (QC §3.2). */}
      <AffiliateDisclosure
        variant="inline"
        siteId="ferrets-com"
        className="mb-4"
      />

      <ul className="list-none p-0 m-0 grid gap-3 sm:grid-cols-2">
        {SUPPLIES.map((s) => (
          <li
            key={s.href}
            className="p-4 rounded-lg border border-brand-border bg-brand-primary-pale/30 flex flex-col gap-2"
          >
            <span className="font-display font-bold text-brand-text-dark text-base">
              {s.label}
            </span>
            <span className="text-xs text-brand-text-mid leading-relaxed">
              {s.note}
            </span>
            <a
              href={s.href}
              rel="sponsored nofollow noopener"
              className="mt-1 inline-flex items-center justify-center rounded-md bg-brand-primary px-4 py-2 text-sm font-semibold text-white no-underline hover:opacity-90 self-start"
            >
              Find on Marshall &rarr;
            </a>
          </li>
        ))}
      </ul>

      <p className="text-2xs text-brand-text-light leading-relaxed mt-4 m-0">
        These are physical setup supplies only. Ferrets.com does not link
        medicated or prescription products for purchase. Prioritize safety —
        appropriate bar spacing and a species-appropriate diet — over looks.
      </p>
    </section>
  )
}
