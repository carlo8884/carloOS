'use client'

/**
 * Horse Weight Calculator -- /tools/horse-weight-calculator
 * Client compute component. Implements the standard heart-girth + body-length
 * weight-tape estimation (Carroll & Huntington 1988).
 *
 * Adult horse (imperial):  Weight (lb)  = (girth_in^2 * length_in) / 330
 * Adult horse (metric):    Weight (kg)  = (girth_cm^2 * length_cm) / 11900
 *
 * The divisor is type-dependent. Carroll & Huntington (1988) published
 * separate constants for ponies, riding horses, and draft/heavy types; the
 * widely cited imperial divisors are ~299 (pony), 330 (adult riding horse),
 * and ~301 (draft/heavy). We expose a type selector that swaps the divisor.
 * Foals use a different relationship entirely, so we present the foal/young-
 * stock case qualitatively rather than inventing a precise constant.
 *
 * All outputs are husbandry ESTIMATES, not measured weights. Framed as such.
 * No fabricated precision, no clinical claims.
 */

import { useMemo, useState } from 'react'

type Unit = 'in' | 'cm'
type HorseType = 'pony' | 'riding' | 'draft' | 'youngstock'

interface TypeOption {
  value: HorseType
  label: string
  /** Imperial divisor (girth_in^2 * length_in) / divisor = lb. */
  divisorImperial: number
  /** Metric divisor (girth_cm^2 * length_cm) / divisor = kg. */
  divisorMetric: number
  note: string
}

// Imperial divisors from the Carroll & Huntington (1988) weight-estimation work,
// as reproduced by university extension references. Metric divisors are the
// imperial divisor scaled by the unit-conversion factor so the two unit modes
// agree to within rounding (1 in = 2.54 cm, 1 lb = 0.4536 kg →
// metric divisor = imperial divisor * 2.54^3 / 0.4536 ≈ imperial * 36.13).
const TYPES: TypeOption[] = [
  {
    value: 'pony',
    label: 'Pony',
    divisorImperial: 299,
    divisorMetric: 10804,
    note: 'Ponies carry proportionally more girth for their length, so the published pony divisor (~299) returns a slightly higher estimate than the adult-horse divisor would.',
  },
  {
    value: 'riding',
    label: 'Adult riding horse',
    divisorImperial: 330,
    divisorMetric: 11900,
    note: 'The standard adult light-horse formula. This is the divisor used on most commercial weight tapes.',
  },
  {
    value: 'draft',
    label: 'Draft / heavy horse',
    divisorImperial: 301,
    divisorMetric: 10874,
    note: 'Draft and heavy warmblood types are denser for their measurements; the published heavy-horse divisor (~301) corrects for that.',
  },
  {
    value: 'youngstock',
    label: 'Foal / young stock',
    divisorImperial: 330,
    divisorMetric: 11900,
    note: 'Foals and growing youngstock follow a different girth-to-weight relationship than mature horses, so girth-tape estimates are unreliable for them. Treat any figure here as a rough placeholder only and weigh growing horses on a livestock scale where possible.',
  },
]

interface Result {
  lb: number
  kg: number
}

function compute(
  girth: number,
  length: number,
  unit: Unit,
  type: TypeOption,
): Result | null {
  if (!(girth > 0) || !(length > 0)) return null
  if (unit === 'in') {
    const lb = (girth * girth * length) / type.divisorImperial
    return { lb, kg: lb * 0.453592 }
  }
  const kg = (girth * girth * length) / type.divisorMetric
  return { kg, lb: kg / 0.453592 }
}

function round(n: number): number {
  return Math.round(n)
}

export default function Calculator() {
  const [unit, setUnit] = useState<Unit>('in')
  const [type, setType] = useState<HorseType>('riding')
  const [girth, setGirth] = useState<string>('')
  const [length, setLength] = useState<string>('')

  const typeOption = TYPES.find((t) => t.value === type) ?? TYPES[1]

  const result = useMemo(() => {
    const g = parseFloat(girth)
    const l = parseFloat(length)
    if (Number.isNaN(g) || Number.isNaN(l)) return null
    return compute(g, l, unit, typeOption)
  }, [girth, length, unit, typeOption])

  const unitLabel = unit === 'in' ? 'inches' : 'cm'

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      {/* Unit toggle */}
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-brand-text-mid">
          Units
        </span>
        {(['in', 'cm'] as Unit[]).map((u) => (
          <button
            key={u}
            type="button"
            onClick={() => setUnit(u)}
            className={`rounded border px-3 py-1.5 text-sm transition ${
              unit === u
                ? 'border-brand-primary bg-brand-primary/10 text-brand-text-dark'
                : 'border-brand-border text-brand-text-mid hover:border-brand-primary'
            }`}
          >
            {u === 'in' ? 'Inches' : 'Centimetres'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="hw-type"
            className="mb-1 block text-sm font-medium text-brand-text-dark"
          >
            Horse type
          </label>
          <select
            id="hw-type"
            value={type}
            onChange={(e) => setType(e.target.value as HorseType)}
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
          >
            {TYPES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>

        <div className="hidden sm:block" aria-hidden="true" />

        <div>
          <label
            htmlFor="hw-girth"
            className="mb-1 block text-sm font-medium text-brand-text-dark"
          >
            Heart girth ({unitLabel})
          </label>
          <p className="mb-2 text-xs text-brand-text-mid">
            Measure the circumference around the barrel just behind the withers
            and elbows, snug at the end of an exhale.
          </p>
          <input
            id="hw-girth"
            type="number"
            inputMode="decimal"
            min="0"
            step="0.1"
            value={girth}
            onChange={(e) => setGirth(e.target.value)}
            placeholder={unit === 'in' ? 'e.g. 72' : 'e.g. 183'}
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
          />
        </div>

        <div>
          <label
            htmlFor="hw-length"
            className="mb-1 block text-sm font-medium text-brand-text-dark"
          >
            Body length ({unitLabel})
          </label>
          <p className="mb-2 text-xs text-brand-text-mid">
            Measure from the point of shoulder to the point of buttock (the
            pin bone), along the side of the horse.
          </p>
          <input
            id="hw-length"
            type="number"
            inputMode="decimal"
            min="0"
            step="0.1"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            placeholder={unit === 'in' ? 'e.g. 64' : 'e.g. 163'}
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
          />
        </div>
      </div>

      {/* Result */}
      <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="rounded border border-brand-border bg-brand-surface p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-mid">
            Estimated weight
          </p>
          <p className="mt-1 font-display text-4xl text-brand-text-dark">
            {result ? `${round(result.lb).toLocaleString()} lb` : '—'}
          </p>
          <p className="mt-1 text-xs text-brand-text-mid">
            {result ? `≈ ${round(result.kg).toLocaleString()} kg` : 'Enter girth and length'}
          </p>
        </div>
        <div className="rounded border border-brand-border bg-brand-surface p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-mid">
            Method
          </p>
          <p className="mt-1 font-display text-lg text-brand-text-dark">
            {typeOption.label}
          </p>
          <p className="mt-1 text-xs text-brand-text-mid">
            Divisor {unit === 'in' ? typeOption.divisorImperial : typeOption.divisorMetric}{' '}
            ({unit === 'in' ? 'imperial' : 'metric'})
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm text-brand-text-mid">{typeOption.note}</p>

      {result && type !== 'youngstock' && (
        <p className="mt-2 text-sm text-brand-text-mid">
          To convert this estimate into a daily forage target, carry it into the{' '}
          <a href="/tools/horse-feed-calculator" className="text-brand-primary underline">
            horse feed &amp; hay calculator
          </a>
          . To judge whether that weight is appropriate for your horse&rsquo;s frame,
          score condition with the{' '}
          <a href="/tools/body-condition-score" className="text-brand-primary underline">
            body condition score tool
          </a>
          .
        </p>
      )}

      <p className="mt-4 text-xs text-brand-text-mid">
        This is a girth-tape <strong>estimate</strong>, typically within roughly
        ±5–10% of scale weight for mature light horses, and less accurate for
        ponies, drafts, heavily pregnant mares, and growing youngstock. For
        medication dosing, sale weight, or any decision that needs a real
        number, weigh the horse on a livestock scale and consult your
        veterinarian.
      </p>
    </div>
  )
}
