'use client'

/**
 * Ferret First-Year / Monthly Cost Calculator -- /tools/cost-calculator
 *
 * Client compute. Number of ferrets + housing + food style → monthly and
 * first-year planning ranges. Defaults are labeled US retail starting
 * points the keeper can edit — not a quote, not a survey, not a hands-on test.
 *
 * Planning tool only. Illness (adrenal, insulinoma, blockage) is called out
 * separately and is not folded into the monthly figure.
 */

import { useMemo, useState } from 'react'

type Housing = 'starter' | 'multilevel' | 'room'
type FoodStyle = 'kibble' | 'kibble-topper' | 'whole-prey'

interface HousingBand {
  label: string
  hint: string
  cageAndSetup: number
}

interface FoodBand {
  label: string
  hint: string
  monthlyFoodLitter: number
}

// Typical US retail starting points. Keepers edit every line. Not a survey
// result and not a quote from any clinic or retailer.
const HOUSING: Record<Housing, HousingBand> = {
  starter: {
    label: 'Starter cage',
    hint: 'Compact multi-level starter cage plus pans, hammocks, bowls, and a carrier. Shared household cost.',
    cageAndSetup: 180,
  },
  multilevel: {
    label: 'Multi-level cage',
    hint: 'Critter Nation–class double unit plus bedding, pans, and day-one accessories. Shared household cost.',
    cageAndSetup: 350,
  },
  room: {
    label: 'Room / playpen',
    hint: 'Playpen panels and a sleeping cage rather than one large tower. Shared household cost.',
    cageAndSetup: 280,
  },
}

const FOOD: Record<FoodStyle, FoodBand> = {
  kibble: {
    label: 'High-protein kibble',
    hint: 'Commercial ferret kibble plus paper or wood-pellet litter.',
    monthlyFoodLitter: 40,
  },
  'kibble-topper': {
    label: 'Kibble + toppers',
    hint: 'Kibble as the staple, freeze-dried meat as a topper. Litter unchanged.',
    monthlyFoodLitter: 65,
  },
  'whole-prey': {
    label: 'Whole-prey / raw',
    hint: 'Frozen whole prey or commercial raw. Higher food cost; litter similar.',
    monthlyFoodLitter: 85,
  },
}

interface Inputs {
  ferrets: number
  lifespanYears: number
  cageAndSetup: number
  acquisition: number
  initialVet: number
  monthlyFoodLitter: number
  monthlySupplies: number
  annualVet: number
  insuranceMonthly: number
}

const OTHER_DEFAULTS = {
  ferrets: 2,
  lifespanYears: 6,
  acquisition: 150,
  initialVet: 250,
  monthlySupplies: 15,
  annualVet: 150,
  insuranceMonthly: 0,
}

interface Result {
  oneTime: number
  annualOngoing: number
  monthlyRecurring: number
  firstYear: number
  lifetime: number
}

function compute(i: Inputs): Result {
  const n = Math.max(1, i.ferrets)
  const years = Math.max(1, i.lifespanYears)

  const oneTime = i.cageAndSetup + (i.acquisition + i.initialVet) * n
  const annualRecurring =
    (i.monthlyFoodLitter + i.monthlySupplies + i.insuranceMonthly) * 12 * n + i.annualVet * n
  const monthlyRecurring = annualRecurring / 12
  const firstYear = oneTime + annualRecurring
  const lifetime = oneTime + annualRecurring * years

  return { oneTime, annualOngoing: annualRecurring, monthlyRecurring, firstYear, lifetime }
}

function dollars(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
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
  { key: 'cageAndSetup', label: 'Cage + initial setup (household)', hint: 'Filled from the housing preset. Edit to match your receipt.', min: 0, max: 2000, step: 10, prefix: '$' },
  { key: 'acquisition', label: 'Acquisition (per ferret)', hint: 'Adoption fee or purchase price.', min: 0, max: 1000, step: 10, prefix: '$' },
  { key: 'initialVet', label: 'Initial vet (per ferret)', hint: 'First exam, vaccines (distemper/rabies), spay/neuter if not already done, microchip.', min: 0, max: 1000, step: 10, prefix: '$' },
]

const RECURRING_FIELDS: Field[] = [
  { key: 'monthlyFoodLitter', label: 'Food + litter / month (per ferret)', hint: 'Filled from the food-style preset. Edit to match your bag prices.', min: 0, max: 300, step: 5, prefix: '$' },
  { key: 'monthlySupplies', label: 'Supplies + enrichment / month (per ferret)', hint: 'Bedding replacement, toys, cleaning supplies, treats.', min: 0, max: 200, step: 5, prefix: '$' },
  { key: 'annualVet', label: 'Routine vet / year (per ferret)', hint: 'Annual wellness exam and vaccine boosters. Excludes illness.', min: 0, max: 1500, step: 25, prefix: '$' },
  { key: 'insuranceMonthly', label: 'Pet insurance / month (per ferret)', hint: 'Optional. Exotic-pet coverage varies; leave at 0 if self-insuring.', min: 0, max: 200, step: 5, prefix: '$' },
]

export default function CostCalculator() {
  const [housing, setHousing] = useState<Housing>('multilevel')
  const [foodStyle, setFoodStyle] = useState<FoodStyle>('kibble')
  const [inputs, setInputs] = useState<Inputs>({
    ...OTHER_DEFAULTS,
    cageAndSetup: HOUSING.multilevel.cageAndSetup,
    monthlyFoodLitter: FOOD.kibble.monthlyFoodLitter,
  })
  const result = useMemo(() => compute(inputs), [inputs])

  function applyHousing(next: Housing) {
    setHousing(next)
    setInputs((prev) => ({ ...prev, cageAndSetup: HOUSING[next].cageAndSetup }))
  }

  function applyFood(next: FoodStyle) {
    setFoodStyle(next)
    setInputs((prev) => ({ ...prev, monthlyFoodLitter: FOOD[next].monthlyFoodLitter }))
  }

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
            className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-text-dark"
          />
          {f.suffix && <span className="text-sm text-brand-text-light">{f.suffix}</span>}
        </div>
        {f.hint && <p className="mt-1 text-2xs text-brand-text-light leading-snug">{f.hint}</p>}
      </div>
    ))
  }

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <div className="mb-6">
        <p className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">Housing</p>
        <div className="flex flex-wrap rounded border border-brand-border overflow-hidden">
          {(Object.keys(HOUSING) as Housing[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => applyHousing(key)}
              aria-pressed={housing === key}
              className={[
                'flex-1 min-w-[7rem] px-3 py-2 text-sm font-semibold transition-colors',
                housing === key
                  ? 'bg-brand-primary text-white'
                  : 'bg-brand-white text-brand-text-mid hover:bg-brand-surface',
              ].join(' ')}
            >
              {HOUSING[key].label}
            </button>
          ))}
        </div>
        <p className="mt-1 text-2xs text-brand-text-light leading-snug">{HOUSING[housing].hint}</p>
      </div>

      <div className="mb-6">
        <p className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">Food style</p>
        <div className="flex flex-wrap rounded border border-brand-border overflow-hidden">
          {(Object.keys(FOOD) as FoodStyle[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => applyFood(key)}
              aria-pressed={foodStyle === key}
              className={[
                'flex-1 min-w-[7rem] px-3 py-2 text-sm font-semibold transition-colors',
                foodStyle === key
                  ? 'bg-brand-primary text-white'
                  : 'bg-brand-white text-brand-text-mid hover:bg-brand-surface',
              ].join(' ')}
            >
              {FOOD[key].label}
            </button>
          ))}
        </div>
        <p className="mt-1 text-2xs text-brand-text-light leading-snug">{FOOD[foodStyle].hint}</p>
      </div>

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

      <div aria-live="polite" aria-atomic="true" className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <div className="rounded border-2 border-brand-primary bg-brand-primary-pale p-4">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">Monthly (ongoing)</p>
          <p className="mt-1 font-display text-2xl text-brand-text-dark">{dollars(result.monthlyRecurring)}</p>
          <p className="mt-1 text-2xs text-brand-text-light">Food, litter, supplies, routine vet, insurance</p>
        </div>
        <div className="rounded border-2 border-brand-primary bg-brand-primary-pale p-4">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">First year</p>
          <p className="mt-1 font-display text-2xl text-brand-text-dark">{dollars(result.firstYear)}</p>
          <p className="mt-1 text-2xs text-brand-text-light">Setup + 12 months of recurring</p>
        </div>
        <div className="rounded border border-brand-border bg-brand-white p-4">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light">One-time setup</p>
          <p className="mt-1 font-display text-2xl text-brand-text-dark">{dollars(result.oneTime)}</p>
        </div>
        <div className="rounded border border-brand-border bg-brand-white p-4">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light">Per year ongoing</p>
          <p className="mt-1 font-display text-2xl text-brand-text-dark">{dollars(result.annualOngoing)}</p>
          <p className="mt-1 text-2xs text-brand-text-light">≈ {dollars(result.lifetime)} over {inputs.lifespanYears} yrs</p>
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
        Estimator only. Housing and food-style presets are editable starting points, not quoted prices —
        costs vary widely by region, food choice, insurer, and individual ferret. Use your own local figures
        for an accurate plan.
      </p>
    </div>
  )
}
