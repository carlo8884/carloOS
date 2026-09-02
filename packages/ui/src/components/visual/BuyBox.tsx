/**
 * BuyBox — shared visual primitive for affiliate "where to buy" sections.
 *
 * Used on monetized editorial pages (brand comparisons, condition-diet
 * matrices, husbandry guides) to render the affiliate purchase options
 * with a consistent visual treatment portfolio-wide.
 *
 * Visual Bot lane per `ops/policies/bot-coordination.md §2` — this lives
 * under packages/ui/src/components/visual/* (NEW shared visual primitives).
 * Drop-in replacement for the inline-styled `<div><a rel="sponsored">`
 * patterns shipped by Monetization on PetFood.com (PR #176) and elsewhere.
 *
 * Trust posture (QC §1):
 *  - Renders `rel="sponsored noopener"` by default — FTC + safe outbound.
 *  - Disclosure line is OWNER-SUPPLIED via the `disclosure` prop; component
 *    does not fabricate editorial framing.
 *  - No "ranked by commission" implication; brand order is whatever the
 *    caller passes in (alphabetical / editorial / publication date).
 *  - Component does not introduce "vet-recommended" or any credential
 *    framing on its own.
 *
 * Example:
 *   <BuyBox
 *     label="Where to buy either line"
 *     disclosure="We earn a commission when you purchase through these links."
 *     brands={[
 *       { name: 'Orijen', vendors: [
 *         { vendor: 'chewy', href: '/go/chewy-brand/Orijen?s=orijen-vs-acana' },
 *         { vendor: 'amazon', href: '/go/amazon-brand/Orijen?s=orijen-vs-acana' },
 *       ]},
 *       { name: 'Acana', vendors: [
 *         { vendor: 'chewy', href: '/go/chewy-brand/Acana?s=orijen-vs-acana' },
 *         { vendor: 'amazon', href: '/go/amazon-brand/Acana?s=orijen-vs-acana' },
 *       ]},
 *     ]}
 *   />
 */

import type { ReactElement } from 'react'
import { isChewyHop, visibleChewyHref } from '@carloOS/config/affiliate-hop'

export type BuyBoxVendor = 'chewy' | 'amazon' | 'smartpak' | 'dover' | 'walmart' | 'other'

export interface BuyBoxVendorLink {
  vendor: BuyBoxVendor
  href: string
  /** Optional label override; defaults to the vendor's display name. */
  label?: string
}

export interface BuyBoxBrand {
  name: string
  vendors: BuyBoxVendorLink[]
}

export interface BuyBoxProps {
  /** Optional eyebrow / section label (e.g. "Where to buy"). */
  label?: string
  /** Brands + their vendor links. */
  brands: BuyBoxBrand[]
  /**
   * FTC affiliate disclosure copy. REQUIRED to surface — pass the standard
   * site disclosure line (e.g. "We earn a commission when you purchase
   * through these links — at no extra cost to you.").
   */
  disclosure: string
  /**
   * Optional second disclosure line. Used by sites whose editorial policy
   * is to explicitly state "we never rank by commission" or similar.
   */
  secondaryDisclosure?: string
}

const VENDOR_LABEL: Record<BuyBoxVendor, string> = {
  chewy: 'Chewy',
  amazon: 'Amazon',
  smartpak: 'SmartPak',
  dover: 'Dover',
  walmart: 'Walmart',
  other: 'Buy',
}

const VENDOR_CLASSES: Record<BuyBoxVendor, string> = {
  chewy: 'bg-brand-primary text-white hover:opacity-90',
  amazon: 'bg-brand-dark text-white hover:opacity-90',
  smartpak: 'bg-brand-primary text-white hover:opacity-90',
  dover: 'bg-brand-dark text-white hover:opacity-90',
  walmart: 'bg-brand-primary text-white hover:opacity-90',
  other: 'bg-brand-text-mid text-white hover:opacity-90',
}

export function BuyBox({ label, brands, disclosure, secondaryDisclosure }: BuyBoxProps): ReactElement {
  return (
    <aside
      data-buy-box=""
      className="my-6 rounded-lg border border-brand-border bg-brand-surface p-5 sm:p-6"
      aria-label={label ?? 'Where to buy'}
    >
      {label && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-text-mid">{label}</p>
      )}

      <p className="mb-1 text-sm leading-relaxed text-brand-text-mid">{disclosure}</p>
      {secondaryDisclosure && (
        <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">{secondaryDisclosure}</p>
      )}

      <div className={`mt-3 grid gap-3 ${brands.length > 1 ? 'sm:grid-cols-2' : 'grid-cols-1'}`}>
        {brands.map((brand) => (
          <div key={brand.name}>
            <p className="mb-2 text-xs font-bold text-brand-text-dark">{brand.name}</p>
            <div className="flex flex-wrap gap-2">
              {brand.vendors.map((v) => {
                const href = isChewyHop(v.vendor) || isChewyHop(v.href)
                  ? visibleChewyHref(v.href)
                  : v.href && v.href !== '#'
                    ? v.href
                    : undefined
                if (!href) return null
                return (
                <a
                  key={v.vendor + href}
                  href={href}
                  rel="sponsored noopener"
                  aria-label={`Buy ${brand.name} on ${v.label ?? VENDOR_LABEL[v.vendor]}`}
                  className={`inline-flex items-center gap-1 rounded px-3 py-1.5 text-xs font-semibold no-underline transition ${VENDOR_CLASSES[v.vendor]}`}
                >
                  {v.label ?? VENDOR_LABEL[v.vendor]} <span aria-hidden>→</span>
                </a>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}
