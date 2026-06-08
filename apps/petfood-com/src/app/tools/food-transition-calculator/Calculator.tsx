'use client'

/**
 * Food Transition Schedule Generator -- /tools/food-transition-calculator
 * Client compute component. Generates a day-by-day old:new food mixing schedule
 * for switching a dog or cat onto a new food, following the standard gradual
 * transition approach described in WSAVA/AAHA-style general feeding guidance.
 *
 * The schedule is a planning aid, NOT a diagnosis. Pace is driven by the pet's
 * tolerance: if stool softens, hold or step back. Persistent GI signs are a
 * veterinary matter.
 */

import { useMemo, useState } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

type Pace = '7' | '10' | '14' | 'sensitive'
type AmountUnit = 'cups' | 'grams'

interface PaceOption {
  value: Pace
  label: string
  days: number
  note: string
}

const PACE_OPTIONS: PaceOption[] = [
  {
    value: '7',
    label: '7 days — standard',
    days: 7,
    note: 'Typical healthy adult dog or cat with no known food sensitivity.',
  },
  {
    value: '10',
    label: '10 days — gentle',
    days: 10,
    note: 'A slightly slower default many veterinarians prefer, especially for cats.',
  },
  {
    value: '14',
    label: '14 days — slow',
    days: 14,
    note: 'Larger ingredient change (e.g. new protein, kibble → fresh, or OTC → therapeutic under vet guidance).',
  },
  {
    value: 'sensitive',
    label: 'Sensitive stomach — extended',
    days: 21,
    note: 'History of GI upset, IBD, or a pet that reacted to a previous switch. Extend further if any loose stool appears.',
  },
]

interface Inputs {
  pace: Pace
  useAmount: boolean
  amount: number
  amountUnit: AmountUnit
}

const DEFAULTS: Inputs = {
  pace: '7',
  useAmount: false,
  amount: 2,
  amountUnit: 'cups',
}

interface DayRow {
  day: number
  newPct: number
  oldPct: number
  newAmount: number | null
  oldAmount: number | null
}

// ─── Schedule logic ─────────────────────────────────────────────────────────
//
// The new-food percentage rises from a small first-day fraction to 100% on the
// final day, distributed evenly across the transition window. We round to the
// nearest 5% for a practical, scoop-friendly schedule, and force the final day
// to 100% so the plan always lands on a full switch.

function buildSchedule(inputs: Inputs): DayRow[] {
  const opt = PACE_OPTIONS.find((p) => p.value === inputs.pace) ?? PACE_OPTIONS[0]
  const days = opt.days
  const amount = inputs.useAmount && inputs.amount > 0 ? inputs.amount : null

  const rows: DayRow[] = []
  for (let i = 1; i <= days; i++) {
    let newPct: number
    if (i === days) {
      newPct = 100
    } else {
      // Even ramp: day i targets i/days of the new food, rounded to 5%.
      const raw = (i / days) * 100
      newPct = Math.max(5, Math.round(raw / 5) * 5)
      if (newPct >= 100) newPct = 95 // keep 100% reserved for the final day
    }
    const oldPct = 100 - newPct
    rows.push({
      day: i,
      newPct,
      oldPct,
      newAmount: amount !== null ? (amount * newPct) / 100 : null,
      oldAmount: amount !== null ? (amount * oldPct) / 100 : null,
    })
  }
  return rows
}

// ─── Format helpers ───────────────────────────────────────────────────────────

function fmtAmount(n: number, unit: AmountUnit): string {
  if (unit === 'grams') return `${Math.round(n)} g`
  // cups → round to nearest 1/8 cup for a usable scoop figure
  const eighths = Math.round(n * 8) / 8
  const label = Number.isInteger(eighths) ? String(eighths) : eighths.toFixed(3).replace(/0+$/, '')
  return `${label} cup${eighths === 1 ? '' : 's'}`
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function FoodTransitionCalculator() {
  const [inputs, setInputs] = useState<Inputs>(DEFAULTS)
  const schedule = useMemo(() => buildSchedule(inputs), [inputs])
  const activeOption = PACE_OPTIONS.find((p) => p.value === inputs.pace) ?? PACE_OPTIONS[0]

  function set<K extends keyof Inputs>(key: K, value: Inputs[K]) {
    setInputs((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      {/* Pace selector */}
      <div>
        <p className="mb-2 text-xs font-medium text-brand-text-mid">Transition length</p>
        <div className="grid gap-2 sm:grid-cols-2">
          {PACE_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => set('pace', opt.value)}
              className={[
                'rounded border px-4 py-3 text-left text-sm font-semibold transition-colors',
                inputs.pace === opt.value
                  ? 'border-brand-primary bg-brand-primary text-brand-white'
                  : 'border-brand-border bg-brand-white text-brand-text-mid hover:border-brand-primary',
              ].join(' ')}
            >
              {opt.label}
            </button>
          ))}
        </div>
        <p className="mt-2 text-2xs leading-snug text-brand-text-light">{activeOption.note}</p>
      </div>

      {/* Optional daily amount */}
      <div className="mt-6">
        <div className="mb-2 flex items-center gap-3">
          <input
            id="ft-use-amount"
            type="checkbox"
            checked={inputs.useAmount}
            onChange={(e) => set('useAmount', e.target.checked)}
            className="h-4 w-4 rounded border-brand-border text-brand-primary"
          />
          <label htmlFor="ft-use-amount" className="cursor-pointer text-xs font-medium text-brand-text-mid">
            Split my daily amount per day (optional)
          </label>
        </div>
        {inputs.useAmount && (
          <div className="flex flex-wrap items-center gap-2">
            <input
              id="ft-amount"
              type="number"
              inputMode="decimal"
              min={0.1}
              max={2000}
              step={inputs.amountUnit === 'grams' ? 5 : 0.25}
              value={inputs.amount}
              onChange={(e) => set('amount', Math.max(0.1, Number(e.target.value) || 0.1))}
              className="w-32 rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-text-dark"
            />
            <div className="flex overflow-hidden rounded border border-brand-border">
              {(['cups', 'grams'] as AmountUnit[]).map((u) => (
                <button
                  key={u}
                  type="button"
                  onClick={() => set('amountUnit', u)}
                  className={[
                    'px-3 py-2 text-sm font-semibold capitalize transition-colors',
                    inputs.amountUnit === u
                      ? 'bg-brand-primary text-brand-white'
                      : 'bg-brand-white text-brand-text-mid hover:bg-brand-surface',
                  ].join(' ')}
                >
                  {u}
                </button>
              ))}
            </div>
            <span className="text-sm text-brand-text-light">total food per day</span>
          </div>
        )}
        <p className="mt-1 text-2xs leading-snug text-brand-text-light">
          Use the same total daily amount for both foods. If the old and new foods differ in calorie
          density, confirm the new food&apos;s portion with the feeding guide on the bag or the{' '}
          <a
            href="/tools/portion-calculator"
            className="text-brand-primary underline-offset-2 hover:underline"
          >
            portion calculator
          </a>
          .
        </p>
      </div>

      {/* Schedule table */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-brand-border text-left">
              <th className="py-2 pr-3 font-semibold text-brand-text-dark">Day</th>
              <th className="py-2 pr-3 font-semibold text-brand-text-dark">Old food</th>
              <th className="py-2 pr-3 font-semibold text-brand-text-dark">New food</th>
              {inputs.useAmount && (
                <>
                  <th className="py-2 pr-3 font-semibold text-brand-text-dark">Old amount</th>
                  <th className="py-2 font-semibold text-brand-text-dark">New amount</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {schedule.map((row) => {
              const isFinal = row.newPct === 100
              return (
                <tr
                  key={row.day}
                  className={[
                    'border-b border-brand-border',
                    isFinal ? 'bg-brand-primary-pale font-semibold' : '',
                  ].join(' ')}
                >
                  <td className="py-2 pr-3 text-brand-text-dark">
                    Day {row.day}
                    {isFinal && <span className="ml-1 text-2xs text-brand-primary">100% new</span>}
                  </td>
                  <td className="py-2 pr-3 text-brand-text-mid">{row.oldPct}%</td>
                  <td className="py-2 pr-3 text-brand-text-dark">{row.newPct}%</td>
                  {inputs.useAmount && (
                    <>
                      <td className="py-2 pr-3 text-brand-text-mid">
                        {row.oldAmount !== null ? fmtAmount(row.oldAmount, inputs.amountUnit) : '—'}
                      </td>
                      <td className="py-2 text-brand-text-dark">
                        {row.newAmount !== null ? fmtAmount(row.newAmount, inputs.amountUnit) : '—'}
                      </td>
                    </>
                  )}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* GI-upset watch guidance */}
      <div className="mt-6 rounded border border-brand-border bg-brand-white p-4">
        <p className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
          Watch your pet — let tolerance set the pace
        </p>
        <ul className="space-y-1.5 text-sm leading-relaxed text-brand-text-mid">
          <li>
            <span className="font-semibold text-brand-text-dark">Stool stays firm:</span> continue to
            the next day&apos;s ratio as scheduled.
          </li>
          <li>
            <span className="font-semibold text-brand-text-dark">Mild soft stool or gas:</span> hold
            at the current ratio for an extra day or two before advancing. Do not rush back up.
          </li>
          <li>
            <span className="font-semibold text-brand-text-dark">
              Loose stool returns when you advance:
            </span>{' '}
            step back to the last ratio your pet tolerated and extend the schedule. A sensitive pet
            may need three weeks or more.
          </li>
          <li>
            <span className="font-semibold text-brand-text-dark">Call your veterinarian</span> if you
            see repeated vomiting, diarrhea lasting more than 24–48 hours, blood in the stool,
            lethargy, refusal to eat, or any sign of dehydration — at any point in the transition.
          </li>
        </ul>
      </div>

      {/* Disclaimer */}
      <div className="mt-4 rounded border border-amber-700/40 bg-amber-950/20 p-4 text-sm text-amber-900">
        <span className="font-semibold">This schedule is general guidance, not a diagnosis.</span>{' '}
        Healthy pets usually transition well over 7–14 days, but the right pace is the one your pet
        tolerates. For persistent GI issues, an underlying condition, or any prescription/therapeutic
        diet, your veterinarian should direct the change.
      </div>
    </div>
  )
}
