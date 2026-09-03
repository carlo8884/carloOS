'use client'

/**
 * Ferret Litter Planner -- /tools/litter-planner
 *
 * Client compute. Ferrets + change cadence → recommended corner pans
 * (one per ferret plus one extra) and 30 lb bags per month. Uses the
 * published 6–8 week / 30 lb bag planning figure from the starter-kit
 * notes (midpoint 7 weeks). Husbandry planning only — never recommends
 * clumping clay.
 */

import { useMemo, useState } from 'react'

type Cadence = 'daily' | 'every-2-days'

const WEEKS_PER_30LB_BAG = 7
const PANS_EXTRA = 1

interface Result {
  pans: number
  bagsPerMonth: number
  bagsPerYear: number
}

function compute(ferrets: number): Result {
  const n = Math.max(1, ferrets)
  const pans = n + PANS_EXTRA
  const bagsPerYear = (n * 52) / WEEKS_PER_30LB_BAG
  const bagsPerMonth = bagsPerYear / 12
  return { pans, bagsPerMonth, bagsPerYear }
}

export default function LitterPlanner() {
  const [ferrets, setFerrets] = useState(2)
  const [cadence, setCadence] = useState<Cadence>('daily')

  const result = useMemo(() => compute(ferrets), [ferrets])

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="lp-ferrets" className="mb-2 block text-xs font-medium text-brand-text-mid">
            Number of ferrets
          </label>
          <input
            id="lp-ferrets"
            type="number"
            inputMode="numeric"
            min={1}
            max={12}
            step={1}
            value={ferrets}
            onChange={(e) => setFerrets(Math.max(1, Math.min(12, Number(e.target.value) || 1)))}
            className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-text-dark"
          />
          <p className="mt-1 text-2xs text-brand-text-light leading-snug">
            Ferrets are social; many keepers house two or more. Litter scales with headcount.
          </p>
        </div>
        <div>
          <p className="mb-2 text-xs font-medium text-brand-text-mid">Full pan change</p>
          <div className="flex rounded border border-brand-border overflow-hidden">
            {(
              [
                ['daily', 'Daily'],
                ['every-2-days', 'Every 2 days'],
              ] as [Cadence, string][]
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => setCadence(value)}
                className={[
                  'flex-1 py-2 text-sm font-semibold transition-colors',
                  cadence === value
                    ? 'bg-brand-primary text-white'
                    : 'bg-brand-white text-brand-text-mid hover:bg-brand-surface',
                ].join(' ')}
              >
                {label}
              </button>
            ))}
          </div>
          <p className="mt-1 text-2xs text-brand-text-light leading-snug">
            Scoop wet spots at every change. The bag math uses the 30 lb / ~7-week planning figure, not cadence.
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-lg border border-brand-border bg-brand-white p-5 sm:p-6">
        <div className="grid gap-5 sm:grid-cols-3">
          <div>
            <p className="text-2xs uppercase tracking-wide text-brand-text-light">Corner pans</p>
            <p className="mt-1 font-display text-2xl font-bold text-brand-primary">{result.pans}</p>
            <p className="mt-1 text-2xs text-brand-text-light">One per ferret plus one extra</p>
          </div>
          <div>
            <p className="text-2xs uppercase tracking-wide text-brand-text-light">30 lb bags / month</p>
            <p className="mt-1 font-display text-2xl font-bold text-brand-dark">
              {result.bagsPerMonth.toFixed(1)}
            </p>
          </div>
          <div>
            <p className="text-2xs uppercase tracking-wide text-brand-text-light">30 lb bags / year</p>
            <p className="mt-1 font-display text-2xl font-bold text-brand-dark">
              {result.bagsPerYear.toFixed(0)}
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-brand-text-mid">
          {cadence === 'daily'
            ? 'Daily full changes keep odor down and keep ferrets using the pan instead of a nearby corner.'
            : 'Every-other-day full changes work if you scoop wet spots daily. If accidents start, go back to daily.'}{' '}
          Default litter is recycled paper pellet — never clumping clay or aromatic pine/cedar shavings.
        </p>
      </div>

      <p className="mt-5 text-2xs leading-snug text-brand-text-light">
        Planning figure only: a 30 lb paper-pellet bag lasts about 6–8 weeks for one ferret (this tool uses
        the 7-week midpoint). High-output kits, summer heat, and extra play-area pans use more. Confirm
        respiratory or GI signs with an exotic-animal veterinarian, not a litter swap alone.
      </p>
    </div>
  )
}
