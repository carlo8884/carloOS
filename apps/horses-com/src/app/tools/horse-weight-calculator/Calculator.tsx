'use client'

/**
 * Horse Weight Calculator -- /tools/horse-weight-calculator
 * Carroll CL, Huntington PJ. Equine Vet J. 1988;20(1):41–45.
 * DOI 10.1111/j.2042-3306.1988.tb01451.x
 * The abstract’s average Y' for weight from girth² × length was 11900.
 * divisorMetric 11900 is that figure. divisorImperial 330 is the rounded
 * inch/pound form of 11900 (11900 / (2.54³ / 0.4536) ≈ 329).
 * Pony 299 / 10804 and draft 301 / 10874 are a planning figure. They are
 * not in that abstract. Youngstock reuses 330 as a planning estimate.
 *
 * All outputs are husbandry ESTIMATES, not measured weights. Framed as such.
 * No fabricated precision, no clinical claims.
 */

import { useMemo, useState } from 'react'
import { ResultMeaning, ResultPick, ToolError, blanketPick, numberFieldError, roundBlanketInches } from '@carloOS/ui'

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

// Riding 330 / 11900: Carroll & Huntington 1988 abstract, Y' = 11900.
// Pony and draft divisors: planning figure, not that paper.
const TYPES: TypeOption[] = [
  {
    value: 'pony',
    label: 'Pony',
    divisorImperial: 299,
    divisorMetric: 10804,
    note: 'Planning figure: divisor 299. Carroll & Huntington 1988 does not publish this pony constant in the abstract. The adult figure is 11900.',
  },
  {
    value: 'riding',
    label: 'Adult riding horse',
    divisorImperial: 330,
    divisorMetric: 11900,
    note: 'Carroll & Huntington 1988: average Y′ = 11900 for girth² × length. 330 is the rounded inch-and-pound form of 11900.',
  },
  {
    value: 'draft',
    label: 'Draft / heavy horse',
    divisorImperial: 301,
    divisorMetric: 10874,
    note: 'Planning figure: divisor 301. Carroll & Huntington 1988 does not publish this draft constant in the abstract.',
  },
  {
    value: 'youngstock',
    label: 'Foal / young stock',
    divisorImperial: 330,
    divisorMetric: 11900,
    note: 'Planning figure: youngstock reuses the adult 330 / 11900 divisors. Carroll & Huntington 1988 does not give a foal constant here. Weigh growing horses on a livestock scale.',
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
  const [girth, setGirth] = useState<string>('72')
  const [length, setLength] = useState<string>('64')

  const typeOption = TYPES.find((t) => t.value === type) ?? TYPES[1]
  const measureMin = unit === 'in' ? 20 : 51
  const measureMax = unit === 'in' ? 120 : 305
  const girthError = numberFieldError(girth, 'heart girth', measureMin, measureMax, unit)
  const lengthError = numberFieldError(length, 'body length', measureMin, measureMax, unit)
  const inputError = girthError || lengthError

  const result = useMemo(() => {
    if (inputError) return null
    const g = parseFloat(girth)
    const l = parseFloat(length)
    if (Number.isNaN(g) || Number.isNaN(l)) return null
    return compute(g, l, unit, typeOption)
  }, [girth, length, unit, typeOption, inputError])

  const unitLabel = unit === 'in' ? 'inches' : 'cm'

  const blanket = result
    ? blanketPick(
        roundBlanketInches(unit === 'in' ? parseFloat(length) : parseFloat(length) / 2.54),
        'tools-horse-weight-calculator',
        'body-length',
      )
    : null

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      {blanket ? <ResultPick linkFirst siteId="horses-com" pick={blanket} /> : null}
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
            aria-invalid={girthError ? true : undefined}
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
            aria-invalid={lengthError ? true : undefined}
            onChange={(e) => setLength(e.target.value)}
            placeholder={unit === 'in' ? 'e.g. 64' : 'e.g. 163'}
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
          />
        </div>
      </div>

      {inputError && <ToolError>{inputError}</ToolError>}

      {/* Result */}
      {result && <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
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
      </div>}

      {result && (
        <ResultMeaning>
          This figure is a girth-and-length estimate for planning feed and condition checks, not a scale weight.
        </ResultMeaning>
      )}

      <p className="mt-4 text-sm text-brand-text-mid">{typeOption.note}</p>

      {result && type !== 'youngstock' && (
        <p className="mt-2 text-sm text-brand-text-mid">
          To convert this estimate into a daily forage target,{' '}
          <a href="/nutrition/forage-basics" className="text-brand-primary underline">
            read forage basics
          </a>
          , then carry the pounds into the{' '}
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
        This is a girth-tape <strong>estimate</strong>. Carroll &amp; Huntington
        1988 does not publish a percent error for it. Ponies, drafts, heavily
        pregnant mares, and growing youngstock are a poorer fit. For medication
        dosing, sale weight, or any decision that needs a real number, weigh
        the horse on a livestock scale and consult your veterinarian.
      </p>
    </div>
  )
}
