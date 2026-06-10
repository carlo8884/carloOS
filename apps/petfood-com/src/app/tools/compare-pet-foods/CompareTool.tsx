'use client'

/**
 * Compare Pet Foods — /tools/compare-pet-foods
 *
 * Client-only decision tool. Pick 2–3 OTC brands and/or diet types; render a
 * disclosed, side-by-side comparison table on WSAVA-derived criteria. No network,
 * no PII, no health inputs.
 *
 * Guardrails (build brief §7 / QC §1):
 *  - Transparent comparison on DISCLOSED criteria — NOT a "best food" ranking. No
 *    brand "wins". No "best / #1 / cheapest / top-rated" language.
 *  - Empty / unstated fields render "—" — never a fabricated value (data nulls in
 *    otc-brands.ts are the single source of truth).
 *  - WSAVA framing is a "PetFood.com editorial reading", never a score/certification.
 *  - OTC brand columns → /go search CTA below an AffiliateDisclosure, rel="sponsored
 *    noopener". Vet-channel (monetizable:false) and grain-free-DCM columns → no buy
 *    CTA, "discuss with your veterinarian" note instead. Diet-type columns are
 *    comparison-only (no SKU, no CTA).
 */

import { useMemo, useState } from 'react'
import { AffiliateDisclosure } from '@carloOS/ui'
import {
  otcBrands,
  dietTypes,
  aafcoLabels,
  manufacturingLabels,
  priceBandLabels,
  type OtcBrand,
  type DietType,
} from '../../../data/otc-brands'

const MAX_PICKS = 3
const EM_DASH = '—'

type Selection =
  | { kind: 'brand'; data: OtcBrand }
  | { kind: 'diet'; data: DietType }

function brandById(id: string): OtcBrand | undefined {
  return otcBrands.find((b) => b.id === id)
}
function dietById(id: string): DietType | undefined {
  return dietTypes.find((d) => d.id === id)
}

/** Build the /go search URL for an OTC brand column. */
function buyHref(vendor: 'chewy-brand' | 'amazon-brand', term: string): string {
  return `/go/${vendor}/${encodeURIComponent(term)}?s=compare-tool`
}

const VENDOR_LABEL: Record<'chewy-brand' | 'amazon-brand', string> = {
  'chewy-brand': 'Chewy',
  'amazon-brand': 'Amazon',
}

export function CompareTool() {
  // selected[] holds prefixed ids: "brand:blue-buffalo" | "diet:wet-vs-dry-food"
  const [selected, setSelected] = useState<string[]>([])

  const picks: Selection[] = useMemo(() => {
    return selected
      .map((key): Selection | null => {
        const [kind, id] = key.split(':')
        if (kind === 'brand') {
          const b = brandById(id)
          return b ? { kind: 'brand', data: b } : null
        }
        const d = dietById(id)
        return d ? { kind: 'diet', data: d } : null
      })
      .filter((s): s is Selection => s !== null)
  }, [selected])

  function toggle(key: string) {
    setSelected((prev) => {
      if (prev.includes(key)) return prev.filter((k) => k !== key)
      if (prev.length >= MAX_PICKS) return prev // cap at 3
      return [...prev, key]
    })
  }

  const atCap = selected.length >= MAX_PICKS
  const hasAnyBrand = picks.some((p) => p.kind === 'brand')

  return (
    <div className="not-prose">
      {/* ── Picker ── */}
      <fieldset className="rounded-lg border border-brand-border bg-brand-surface p-5 mb-6">
        <legend className="px-2 text-sm font-bold text-brand-dark">
          Pick 2–3 to compare ({selected.length}/{MAX_PICKS} selected)
        </legend>

        <p className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mt-2 mb-3">
          Over-the-counter brands
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {otcBrands.map((b) => {
              const key = `brand:${b.id}`
              const on = selected.includes(key)
              const disabled = !on && atCap
              return (
                <button
                  key={key}
                  type="button"
                  aria-pressed={on}
                  disabled={disabled}
                  onClick={() => toggle(key)}
                  className={[
                    'rounded-full border px-3 py-1.5 text-sm font-medium transition',
                    on
                      ? 'border-brand-primary bg-brand-primary text-white'
                      : 'border-brand-border bg-white text-brand-dark hover:border-brand-primary',
                    disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer',
                  ].join(' ')}
                >
                  {b.name}
                  {!b.monetizable ? ' (vet channel)' : ''}
                </button>
              )
            })}
        </div>

        <p className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
          Diet types (comparison-only)
        </p>
        <div className="flex flex-wrap gap-2">
          {dietTypes.map((d) => {
            const key = `diet:${d.id}`
            const on = selected.includes(key)
            const disabled = !on && atCap
            return (
              <button
                key={key}
                type="button"
                aria-pressed={on}
                disabled={disabled}
                onClick={() => toggle(key)}
                className={[
                  'rounded-full border px-3 py-1.5 text-sm font-medium transition',
                  on
                    ? 'border-brand-dark bg-brand-dark text-white'
                    : 'border-brand-border bg-white text-brand-dark hover:border-brand-dark',
                  disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer',
                ].join(' ')}
              >
                {d.name}
              </button>
            )
          })}
        </div>

        {selected.length > 0 && (
          <button
            type="button"
            onClick={() => setSelected([])}
            className="mt-4 text-xs text-brand-text-light underline hover:text-brand-primary"
          >
            Clear selection
          </button>
        )}
      </fieldset>

      {/* ── Prompt state (<2 selected) ── */}
      {picks.length < 2 && (
        <div className="rounded-lg border border-dashed border-brand-border bg-brand-surface p-6 text-center">
          <p className="text-sm text-brand-text-mid m-0">
            Pick at least <strong>two</strong> items above to see a side-by-side comparison on
            disclosed criteria. You can mix over-the-counter brands and diet types.
          </p>
        </div>
      )}

      {/* ── Comparison table ── */}
      {picks.length >= 2 && (
        <>
          {hasAnyBrand && <AffiliateDisclosure variant="inline" siteId="petfood-com" />}

          <div className="pf-compare">
            <div className="pf-compare-caption">
              Side-by-side on disclosed criteria — not a ranking
            </div>
            <div className="pf-compare-scroll">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Criterion</th>
                    {picks.map((p) => (
                      <th scope="col" key={`${p.kind}:${p.data.id}`}>
                        {p.kind === 'brand' ? (
                          <a href={`/brands/${p.data.evaluationSlug}`}>{p.data.name}</a>
                        ) : (
                          <a href={`/compare/${p.data.compareSlug}`}>{p.data.name}</a>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <Row
                    label="Type"
                    picks={picks}
                    brandCell={() => 'OTC brand'}
                    dietCell={() => 'Diet-type comparison'}
                  />
                  <Row
                    label="Corporate owner"
                    picks={picks}
                    brandCell={(b) => b.corporateOwner}
                    dietCell={() => null}
                  />
                  <Row
                    label="AAFCO substantiation posture"
                    picks={picks}
                    brandCell={(b) => (b.aafcoPosture ? aafcoLabels[b.aafcoPosture] : null)}
                    dietCell={() => null}
                  />
                  <Row
                    label="Manufacturing footprint"
                    picks={picks}
                    brandCell={(b) => (b.manufacturing ? manufacturingLabels[b.manufacturing] : null)}
                    dietCell={() => null}
                  />
                  <Row
                    label="Recall posture (qualitative)"
                    picks={picks}
                    brandCell={(b) => b.recallPosture}
                    dietCell={() => null}
                  />
                  <Row
                    label="Formats"
                    picks={picks}
                    brandCell={(b) => (b.formats.length ? b.formats.join(', ') : null)}
                    dietCell={() => null}
                  />
                  <Row
                    label="Price band (descriptive)"
                    picks={picks}
                    brandCell={(b) => (b.priceBand ? priceBandLabels[b.priceBand] : null)}
                    dietCell={() => null}
                  />
                  <Row
                    label="Grain-free / FDA-CVM DCM context"
                    picks={picks}
                    brandCell={(b) =>
                      b.grainFreeDcmContext
                        ? 'Named in / aligned with the FDA-CVM grain-free DCM investigation — discuss with your veterinarian'
                        : 'Not flagged in the source evaluation'
                    }
                    dietCell={(d) =>
                      d.id === 'grain-free-vs-grain-inclusive'
                        ? 'See the grain-free vs grain-inclusive comparison for the FDA-CVM DCM context'
                        : null
                    }
                  />
                  <Row
                    label="PetFood.com editorial reading (WSAVA-derived criteria)"
                    picks={picks}
                    brandCell={(b) => b.wsavaReadingNote}
                    dietCell={() => null}
                  />
                  {/* ── Where to buy / next step ── */}
                  <tr>
                    <th scope="row">Where to buy</th>
                    {picks.map((p) => (
                      <td key={`buy:${p.kind}:${p.data.id}`}>
                        {p.kind === 'brand' ? <BuyCell brand={p.data} /> : (
                          <span className="text-brand-text-light">
                            Comparison-only — a diet <em>type</em> has no single product.{' '}
                            <a href={`/compare/${p.data.compareSlug}`}>Read the comparison</a>.
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-4 text-xs text-brand-text-light">
            We compare on disclosed criteria only. Empty cells ({EM_DASH}) mean the brand&apos;s
            evaluation does not state that field — we never fill it with an assumed value. Veterinary-
            channel brands and any column flagged for the FDA-CVM grain-free DCM context show no buy
            link; those choices belong with your veterinarian. Where we link a retailer we may earn a
            commission at no extra cost to you, and we never rank by commission.
          </p>
        </>
      )}
    </div>
  )
}

// ── Row helper: renders one criterion across all picks, "—" for null ──
function Row({
  label,
  picks,
  brandCell,
  dietCell,
}: {
  label: string
  picks: Selection[]
  brandCell: (b: OtcBrand) => string | null
  dietCell: (d: DietType) => string | null
}) {
  return (
    <tr>
      <th scope="row">{label}</th>
      {picks.map((p) => {
        const value = p.kind === 'brand' ? brandCell(p.data) : dietCell(p.data)
        return (
          <td key={`${label}:${p.kind}:${p.data.id}`}>
            {value && value.trim() ? value : EM_DASH}
          </td>
        )
      })}
    </tr>
  )
}

// ── Buy cell: OTC → /go search CTA; vet-channel or grain-free-DCM → vet note, no CTA ──
function BuyCell({ brand }: { brand: OtcBrand }) {
  // Suppress CTA on vet-channel brands AND on grain-free-DCM columns (default-suppress
  // on clinical ambiguity — build brief §8).
  const suppressCta = !brand.monetizable || brand.grainFreeDcmContext || brand.buyVendors.length === 0

  if (suppressCta) {
    return (
      <span className="text-brand-text-mid">
        Discuss with your veterinarian.{' '}
        {!brand.monetizable
          ? 'This is a veterinary-channel brand; therapeutic SKUs are set by your vet.'
          : 'Grain-free / DCM context — no buy link here.'}
      </span>
    )
  }

  return (
    <span className="flex flex-col gap-1.5">
      {brand.buyVendors.map((vendor) => (
        <a
          key={vendor}
          href={buyHref(vendor, brand.buySearchTerm)}
          rel="sponsored noopener"
          target="_blank"
          className="inline-flex items-center font-semibold text-brand-primary no-underline hover:underline"
        >
          Search {brand.name} on {VENDOR_LABEL[vendor]} →
        </a>
      ))}
    </span>
  )
}
