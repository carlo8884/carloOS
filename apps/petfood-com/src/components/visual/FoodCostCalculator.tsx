'use client'

import { useMemo, useState } from 'react'

function dollars(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

interface Inputs {
  cupsPerDay: number
  bagSizeLb: number
  bagPriceUsd: number
}

interface Result {
  /** Cups per pound of typical dry kibble (industry rule of thumb). */
  cupsPerLb: number
  cupsPerBag: number
  daysPerBag: number
  costPerCup: number
  costPerDay: number
  costPerMonth: number
  costPerYear: number
}

// Typical dry-kibble bulk density: ~4 oz per US cup (industry rule of thumb;
// varies +/- 25% by kibble shape / density). Used to convert bag-weight to
// cup count. Users with the actual manufacturer-stated value should override
// in the advanced tab (not yet exposed).
const DEFAULT_CUPS_PER_LB = 4

function compute({ cupsPerDay, bagSizeLb, bagPriceUsd }: Inputs): Result {
  const cupsPerBag = bagSizeLb * DEFAULT_CUPS_PER_LB
  const daysPerBag = cupsPerDay > 0 ? cupsPerBag / cupsPerDay : 0
  const costPerCup = cupsPerBag > 0 ? bagPriceUsd / cupsPerBag : 0
  const costPerDay = costPerCup * cupsPerDay
  const costPerMonth = costPerDay * 30
  const costPerYear = costPerDay * 365
  return { cupsPerLb: DEFAULT_CUPS_PER_LB, cupsPerBag, daysPerBag, costPerCup, costPerDay, costPerMonth, costPerYear }
}

interface FoodSlot {
  id: 'A' | 'B'
  name: string
}

const SLOTS: FoodSlot[] = [
  { id: 'A', name: 'Food A' },
  { id: 'B', name: 'Food B' },
]

export function FoodCostCalculator() {
  const [compareMode, setCompareMode] = useState(false)
  const [inputsA, setInputsA] = useState<Inputs>({ cupsPerDay: 2, bagSizeLb: 30, bagPriceUsd: 65 })
  const [inputsB, setInputsB] = useState<Inputs>({ cupsPerDay: 2, bagSizeLb: 24, bagPriceUsd: 75 })

  const resultA = useMemo(() => compute(inputsA), [inputsA])
  const resultB = useMemo(() => compute(inputsB), [inputsB])

  function renderInputs(slot: FoodSlot, inputs: Inputs, setInputs: (i: Inputs) => void) {
    return (
      <div className="rounded border border-brand-border bg-brand-bg p-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-brand-text-muted">{slot.name}</p>
        <div className="grid grid-cols-1 gap-3">
          <div>
            <label htmlFor={`cups-${slot.id}`} className="mb-1 block text-xs font-medium text-brand-text-muted">
              Cups per day
            </label>
            <input
              id={`cups-${slot.id}`}
              type="number"
              min={0.25}
              max={20}
              step={0.25}
              value={inputs.cupsPerDay}
              onChange={(e) => setInputs({ ...inputs, cupsPerDay: Math.max(0, Number(e.target.value) || 0) })}
              className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text"
            />
          </div>
          <div>
            <label htmlFor={`bag-${slot.id}`} className="mb-1 block text-xs font-medium text-brand-text-muted">
              Bag size (lb)
            </label>
            <input
              id={`bag-${slot.id}`}
              type="number"
              min={1}
              max={50}
              step={1}
              value={inputs.bagSizeLb}
              onChange={(e) => setInputs({ ...inputs, bagSizeLb: Math.max(1, Number(e.target.value) || 1) })}
              className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text"
            />
          </div>
          <div>
            <label htmlFor={`price-${slot.id}`} className="mb-1 block text-xs font-medium text-brand-text-muted">
              Bag price ($)
            </label>
            <input
              id={`price-${slot.id}`}
              type="number"
              min={1}
              max={500}
              step={1}
              value={inputs.bagPriceUsd}
              onChange={(e) => setInputs({ ...inputs, bagPriceUsd: Math.max(0, Number(e.target.value) || 0) })}
              className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text"
            />
          </div>
        </div>
      </div>
    )
  }

  function renderResults(slot: FoodSlot, r: Result) {
    return (
      <div className="rounded border border-brand-border bg-brand-bg p-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-brand-text-muted">{slot.name} — results</p>
        <dl className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <dt className="text-brand-text-muted">Cost / day</dt>
            <dd className="font-display text-xl text-brand-text">{dollars(r.costPerDay)}</dd>
          </div>
          <div>
            <dt className="text-brand-text-muted">Cost / month</dt>
            <dd className="font-display text-xl text-brand-text">{dollars(r.costPerMonth)}</dd>
          </div>
          <div>
            <dt className="text-brand-text-muted">Cost / year</dt>
            <dd className="font-display text-xl text-brand-text">{dollars(r.costPerYear)}</dd>
          </div>
          <div>
            <dt className="text-brand-text-muted">Cost / cup</dt>
            <dd className="font-display text-xl text-brand-text">{dollars(r.costPerCup)}</dd>
          </div>
        </dl>
        <p className="mt-3 text-xs text-brand-text-muted">
          One bag ≈ {Math.round(r.cupsPerBag)} cups → ≈ {r.daysPerBag > 0 ? r.daysPerBag.toFixed(0) : '—'} days per bag.
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-brand-text-muted">Compare two foods side-by-side.</p>
        <label className="flex cursor-pointer items-center gap-2 text-sm text-brand-text">
          <input
            type="checkbox"
            checked={compareMode}
            onChange={(e) => setCompareMode(e.target.checked)}
            className="h-4 w-4 rounded border border-brand-border bg-brand-bg"
          />
          Compare 2 foods
        </label>
      </div>

      <div className={`grid grid-cols-1 gap-4 ${compareMode ? 'md:grid-cols-2' : ''}`}>
        {renderInputs(SLOTS[0], inputsA, setInputsA)}
        {compareMode && renderInputs(SLOTS[1], inputsB, setInputsB)}
      </div>

      <div className={`mt-6 grid grid-cols-1 gap-4 ${compareMode ? 'md:grid-cols-2' : ''}`}>
        {renderResults(SLOTS[0], resultA)}
        {compareMode && renderResults(SLOTS[1], resultB)}
      </div>

      {compareMode && (
        <div className="mt-6 rounded border border-brand-border bg-brand-bg p-4 text-sm">
          <p className="font-semibold text-brand-text">Side-by-side delta</p>
          <p className="mt-1 text-brand-text-muted">
            Food A costs {dollars(resultA.costPerYear)} per year. Food B costs {dollars(resultB.costPerYear)} per year. Difference: {dollars(Math.abs(resultA.costPerYear - resultB.costPerYear))} per year ({resultA.costPerYear < resultB.costPerYear ? 'Food A is cheaper' : resultB.costPerYear < resultA.costPerYear ? 'Food B is cheaper' : 'tied'}).
          </p>
        </div>
      )}

      <p className="mt-4 text-xs text-brand-text-muted">
        Cup-to-pound conversion uses {DEFAULT_CUPS_PER_LB} cups per pound, the industry rule of thumb for standard dry kibble (real density varies ±25% by kibble shape). For an exact number, use the manufacturer&apos;s stated weight-per-cup on the bag, or measure the bag&apos;s actual cup count and override cups-per-day accordingly.
      </p>
    </div>
  )
}
