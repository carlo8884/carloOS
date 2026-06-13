'use client'

/**
 * Pet Food Transition Calculator -- /tools/food-transition-calculator
 *
 * Client compute component. Builds a day-by-day "mix old + new" schedule for
 * switching a dog or cat to a new food, using the standard gradual-transition
 * guidance (ramp new food 25% -> 50% -> 75% -> 100% across the chosen window).
 *
 * Husbandry guidance only -- NOT a medical-diet protocol. Abrupt switches are a
 * common cause of GI upset; the schedule is the widely published owner remedy.
 * Output defers to a veterinarian for prescription/therapeutic-diet switches
 * and for any animal that shows ongoing GI signs.
 */

import { useMemo, useState } from 'react'

type Unit = 'cups' | 'g'

interface Phase {
  label: string
  dayStart: number
  dayEnd: number
  newPct: number
  newAmount: number
  oldAmount: number
}

// Standard four-step ramp. Percentages are of the pet's normal daily amount.
const STEP_PCTS = [0.25, 0.5, 0.75, 1.0]

/** Distribute `days` across the four phases as evenly as possible (earlier phases absorb the remainder). */
function distributeDays(days: number): number[] {
  const base = Math.floor(days / 4)
  const rem = days % 4
  return STEP_PCTS.map((_, i) => base + (i < rem ? 1 : 0))
}

function compute(totalDaily: number, lengthDays: number): Phase[] {
  const counts = distributeDays(lengthDays)
  const phases: Phase[] = []
  let cursor = 1
  STEP_PCTS.forEach((pct, i) => {
    const span = counts[i]
    if (span <= 0) return
    const dayStart = cursor
    const dayEnd = cursor + span - 1
    cursor = dayEnd + 1
    phases.push({
      label: `${Math.round(pct * 100)}% new food`,
      dayStart,
      dayEnd,
      newPct: pct,
      newAmount: totalDaily * pct,
      oldAmount: totalDaily * (1 - pct),
    })
  })
  return phases
}

function fmt(n: number, unit: Unit): string {
  if (unit === 'cups') return `${(Math.round(n * 100) / 100).toString()} cups`
  return `${Math.round(n)} g`
}

const LENGTHS: { days: number; label: string; note: string }[] = [
  { days: 7, label: '7 days (standard)', note: 'The usual window for a healthy adult with no history of a sensitive stomach.' },
  { days: 10, label: '10 days (cautious)', note: 'A gentler ramp for pets that have had mild GI upset on past switches.' },
  { days: 14, label: '14 days (sensitive)', note: 'The slowest common ramp — for known-sensitive stomachs, seniors, or a big formula change (e.g. protein source).' },
]

export default function FoodTransitionCalculator() {
  const [totalDaily, setTotalDaily] = useState<number>(2)
  const [unit, setUnit] = useState<Unit>('cups')
  const [lengthIndex, setLengthIndex] = useState<number>(0)

  const length = LENGTHS[lengthIndex]
  const phases = useMemo(() => compute(totalDaily, length.days), [totalDaily, length.days])

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Daily amount */}
        <div>
          <label htmlFor="ft-amount" className="mb-2 block text-xs font-medium text-brand-text-mid">
            Total food per day
          </label>
          <input
            id="ft-amount"
            type="number"
            inputMode="decimal"
            min={0.1}
            max={2000}
            step={unit === 'cups' ? 0.25 : 10}
            value={totalDaily}
            onChange={(e) => setTotalDaily(Math.max(0.1, Number(e.target.value) || 0.1))}
            className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-text-dark"
          />
          <p className="mt-1 text-2xs text-brand-text-light leading-snug">
            Your pet&apos;s current normal daily amount (sum of all meals).
          </p>
        </div>

        {/* Unit toggle */}
        <div>
          <p className="mb-2 text-xs font-medium text-brand-text-mid">Unit</p>
          <div className="flex rounded border border-brand-border overflow-hidden">
            {(['cups', 'g'] as Unit[]).map((u) => (
              <button
                key={u}
                type="button"
                onClick={() => setUnit(u)}
                className={[
                  'flex-1 py-2 text-sm font-semibold transition-colors',
                  unit === u
                    ? 'bg-brand-primary text-brand-white'
                    : 'bg-brand-white text-brand-text-mid hover:bg-brand-surface',
                ].join(' ')}
              >
                {u === 'cups' ? 'Cups' : 'Grams'}
              </button>
            ))}
          </div>
        </div>

        {/* Transition length */}
        <div>
          <label htmlFor="ft-length" className="mb-2 block text-xs font-medium text-brand-text-mid">
            Transition length
          </label>
          <select
            id="ft-length"
            value={lengthIndex}
            onChange={(e) => setLengthIndex(Number(e.target.value))}
            className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-text-dark"
          >
            {LENGTHS.map((l, i) => (
              <option key={i} value={i}>{l.label}</option>
            ))}
          </select>
          <p className="mt-1 text-2xs text-brand-text-light leading-snug">{length.note}</p>
        </div>
      </div>

      {/* Schedule table */}
      <div className="mt-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-brand-border text-left text-xs uppercase tracking-wide text-brand-text-light">
              <th className="py-2 pr-4 font-semibold">Days</th>
              <th className="py-2 pr-4 font-semibold">Mix</th>
              <th className="py-2 pr-4 font-semibold">New food</th>
              <th className="py-2 font-semibold">Old food</th>
            </tr>
          </thead>
          <tbody>
            {phases.map((p, i) => (
              <tr key={i} className="border-b border-brand-border/60">
                <td className="py-2.5 pr-4 font-medium text-brand-text-dark">
                  {p.dayStart === p.dayEnd ? `Day ${p.dayStart}+` : `Days ${p.dayStart}–${p.dayEnd}`}
                </td>
                <td className="py-2.5 pr-4 text-brand-text-mid">
                  {Math.round(p.newPct * 100)}% new / {Math.round((1 - p.newPct) * 100)}% old
                </td>
                <td className="py-2.5 pr-4 text-brand-text-dark">{fmt(p.newAmount, unit)}</td>
                <td className="py-2.5 text-brand-text-dark">{fmt(p.oldAmount, unit)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-brand-text-mid">
        The last row is your new food at 100% — the switch is complete. Keep total daily calories
        the same throughout; you are changing the <em>ratio</em>, not the amount. Watch the stool:
        if it turns loose or your pet refuses meals, hold at the current step a few extra days (or
        drop back one) before moving on.
      </p>
      <p className="mt-3 text-2xs leading-snug text-brand-text-light">
        Husbandry guidance only, not a medical-diet protocol. For a switch to or from a
        veterinary therapeutic diet, or for any pet with ongoing vomiting or diarrhoea, follow your
        veterinarian&apos;s timeline instead.
      </p>
    </div>
  )
}
