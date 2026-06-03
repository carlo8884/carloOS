'use client'

/**
 * Ferret Lifetime Cost Calculator -- /tools/cost-calculator
 * Client compute component. Transparent, user-input-driven estimate of the
 * one-time, recurring, and lifetime cost of ferret ownership. No fabricated
 * authority figures -- defaults are clearly editable starting points.
 */

import { useMemo, useState } from 'react'

function dollars(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

interface Inputs {
  ferrets: number
  lifespanYears: number
  // one-time, shared across the household
  cageAndSetup: number
  // one-time, per ferret
  acquisition: number
  initialVet: number
  // recurring, per ferret
  monthlyFoodLitter: number
  monthlySupplies: number
  annualVet: number
  insuranceMonthly: number
}

const DEFAULTS: Inputs = {
  ferrets: 1,
  lifespanYears: 6,
  cageAndSetup: 250,
  acquisition: 150,
  initialVet: 250,
  monthlyFoodLitter: 45,
  monthlySupplies: 15,
  annualVet: 150,
  insuranceMonthly: 0,
}

interface Result {
  oneTime: number
  annualOngoing: number
  firstYear: number
  lifetime: number
  monthlyAverage: number
}

function compute(i: Inputs): Result {
  const n = Math.max(1, i.ferrets)
  const years = Math.max(1, i.lifespanYears)

  const oneTime = i.cageAndSetup + (i.acquisition + i.initialVet) * n
  const annualRecurring =
    (i.monthlyFoodLitter + i.monthlySupplies + i.insuranceMonthly) * 12 * n + i.annualVet * n

  const firstYear = oneTime + annualRecurring
  const lifetime = oneTime + annualRecurring * years
  const monthlyAverage = lifetime / (years * 12)

  return { oneTime, annualOngoing: annualRecurring, firstYear, lifetime, monthlyAverage }
}

interface Field {
  key: keyof Inputs
  label: string
  hint?: string
  min: number
  max: number
  step: number
  prefix?: string
  suffix?: string
}

const HOUSEHOLD_FIELDS: Field[] = [
  { key: 'ferrets', label: 'Number of ferrets', hint: 'Ferrets are social; many keepers house two or more.', min: 1, max: 12, step: 1 },
  { key: 'lifespanYears', label: 'Planning horizon (years)', hint: 'Pet ferrets commonly live 5–8 years; 6 is a reasonable planning figure.', min: 1, max: 12, step: 1, suffix: 'yrs' },
]

const ONETIME_FIELDS: Field[] = [
  { key: 'cageAndSetup', label: 'Cage + initial setup (household)', hint: 'Multi-level cage, bedding, litter pans, food/water bowls, hammocks, carrier. One-time, shared.', min: 0, max: 2000, step: 10, prefix: '$' },
  { key: 'acquisition', label: 'Acquisition (per ferret)', hint: 'Adoption fee or purchase price.', min: 0, max: 1000, step: 10, prefix: '$' },
  { key: 'initialVet', label: 'Initial vet (per ferret)', hint: 'First exam, vaccines (distemper/rabies), spay/neuter & descenting if not already done, microchip.', min: 0, max: 1000, step: 10, prefix: '$' },
]

const RECURRING_FIELDS: Field[] = [
  { key: 'monthlyFoodLitter', label: 'Food + litter / month (per ferret)', min: 0, max: 300, step: 5, prefix: '$' },
  { key: 'monthlySupplies', label: 'Supplies + enrichment / month (per ferret)', hint: 'Bedding replacement, toys, cleaning supplies, treats.', min: 0, max: 200, step: 5, prefix: '$' },
  { key: 'annualVet', label: 'Routine vet / year (per ferret)', hint: 'Annual wellness exam and vaccine boosters. Excludes illness.', min: 0, max: 1500, step: 25, prefix: '$' },
  { key: 'insuranceMonthly', label: 'Pet insurance / month (per ferret)', hint: 'Optional. Exotic-pet coverage varies; leave at 0 if self-insuring.', min: 0, max: 200, step: 5, prefix: '$' },
]

export default function CostCalculator() {
  const [inputs, setInputs] = useState<Inputs>(DEFAULTS)
  const result = useMemo(() => compute(inputs), [inputs])

  function set(key: keyof Inputs, raw: string) {
    const v = Number(raw)
    setInputs((prev) => ({ ...prev, [key]: Number.isFinite(v) ? Math.max(0, v) : 0 }))
  }

  function renderFields(fields: Field[]) {
    return fields.map((f) => (
      <div key={f.key}>
        <label htmlFor={`cc-${f.key}`} className="mb-1 block text-xs font-medium text-brand-text-mid">
          {f.label}
        </label>
        <div className="flex items-center gap-1">
          {f.prefix && <span className="text-sm text-brand-text-light">{f.prefix}</span>}
          <input
            id={`cc-${f.key}`}
            type="number"
            inputMode="decimal"
            min={f.min}
            max={f.max}
            step={f.step}
            value={inputs[f.key]}
            onChange={(e) => set(f.key, e.target.value)}
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
          />
          {f.suffix && <span className="text-sm text-brand-text-light">{f.suffix}</span>}
        </div>
        {f.hint && <p className="mt-1 text-2xs text-brand-text-light leading-snug">{f.hint}</p>}
      </div>
    ))
  }

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <p className="mb-3 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">Household</p>
          <div className="grid gap-3">{renderFields(HOUSEHOLD_FIELDS)}</div>
          <p className="mb-3 mt-6 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">One-time costs</p>
          <div className="grid gap-3">{renderFields(ONETIME_FIELDS)}</div>
        </div>
        <div>
          <p className="mb-3 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">Recurring costs</p>
          <div className="grid gap-3">{renderFields(RECURRING_FIELDS)}</div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <div className="rounded border border-brand-border bg-brand-white p-4">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light">One-time setup</p>
          <p className="mt-1 font-display text-2xl text-brand-text-dark">{dollars(result.oneTime)}</p>
        </div>
        <div className="rounded border border-brand-border bg-brand-white p-4">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light">Per year ongoing</p>
          <p className="mt-1 font-display text-2xl text-brand-text-dark">{dollars(result.annualOngoing)}</p>
        </div>
        <div className="rounded border border-brand-border bg-brand-white p-4">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light">First year total</p>
          <p className="mt-1 font-display text-2xl text-brand-text-dark">{dollars(result.firstYear)}</p>
        </div>
        <div className="rounded border-2 border-brand-primary bg-brand-primary-pale p-4">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">Lifetime estimate</p>
          <p className="mt-1 font-display text-2xl text-brand-text-dark">{dollars(result.lifetime)}</p>
          <p className="mt-1 text-2xs text-brand-text-light">≈ {dollars(result.monthlyAverage)}/mo averaged</p>
        </div>
      </div>

      <div className="mt-6 rounded border border-amber-700/40 bg-amber-950/20 p-4 text-sm text-amber-900">
        <span className="font-semibold">Budget for illness separately.</span> This estimate covers routine
        ownership only. Ferrets are prone to conditions whose treatment is not optional — adrenal disease,
        insulinoma, and gastrointestinal blockages frequently run into four figures per episode. Most
        exotic-pet veterinarians advise keeping a dedicated emergency fund (commonly $1,000–$3,000) or
        carrying insurance. See our <a href="/health" className="underline">ferret health</a> reference.
      </div>

      <p className="mt-4 text-xs text-brand-text-light">
        Estimator only. Defaults are editable starting points, not quoted prices — costs vary widely by
        region, food choice, insurer, and individual ferret. Use your own local figures for an accurate plan.
      </p>
    </div>
  )
}
