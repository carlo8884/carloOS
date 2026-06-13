'use client'

/**
 * Dog Water Intake Calculator -- /tools/dog-water-intake-calculator
 *
 * Client compute component. Estimates a dog's typical daily water need from
 * body weight using the standard husbandry rule of thumb: roughly half an ounce
 * to one ounce of water per pound of body weight per day (≈ 50–65 ml/kg).
 *
 * Husbandry guidance only -- NOT a clinical tool. Persistent increases or
 * decreases in drinking can signal disease; the page defers those to a vet.
 */

import { useMemo, useState } from 'react'

type Unit = 'lb' | 'kg'

const LB_PER_KG = 2.2046
const OZ_LOW_PER_LB = 0.5 // typical lower bound, oz water per lb/day
const OZ_HIGH_PER_LB = 1.0 // typical upper bound (active / warm conditions)
const ML_PER_OZ = 29.5735
const OZ_PER_CUP = 8

interface Result {
  lowOz: number
  highOz: number
  lowMl: number
  highMl: number
  lowCups: number
  highCups: number
}

function compute(weight: number, unit: Unit): Result {
  const lb = unit === 'kg' ? weight * LB_PER_KG : weight
  const lowOz = lb * OZ_LOW_PER_LB
  const highOz = lb * OZ_HIGH_PER_LB
  return {
    lowOz,
    highOz,
    lowMl: lowOz * ML_PER_OZ,
    highMl: highOz * ML_PER_OZ,
    lowCups: lowOz / OZ_PER_CUP,
    highCups: highOz / OZ_PER_CUP,
  }
}

function r1(n: number): string {
  return (Math.round(n * 10) / 10).toString()
}

export default function DogWaterIntakeCalculator() {
  const [weight, setWeight] = useState<number>(40)
  const [unit, setUnit] = useState<Unit>('lb')

  const result = useMemo(() => compute(weight, unit), [weight, unit])

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Weight */}
        <div>
          <label htmlFor="wi-weight" className="mb-2 block text-xs font-medium text-brand-text-mid">
            Dog body weight
          </label>
          <input
            id="wi-weight"
            type="number"
            inputMode="decimal"
            min={0.5}
            max={250}
            step={0.5}
            value={weight}
            onChange={(e) => setWeight(Math.max(0.5, Number(e.target.value) || 0.5))}
            className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-text-dark"
          />
        </div>

        {/* Unit */}
        <div>
          <p className="mb-2 text-xs font-medium text-brand-text-mid">Unit</p>
          <div className="flex rounded border border-brand-border overflow-hidden">
            {(['lb', 'kg'] as Unit[]).map((u) => (
              <button
                key={u}
                type="button"
                onClick={() => setUnit(u)}
                className={[
                  'flex-1 py-2 text-sm font-semibold uppercase transition-colors',
                  unit === u
                    ? 'bg-brand-primary text-brand-white'
                    : 'bg-brand-white text-brand-text-mid hover:bg-brand-surface',
                ].join(' ')}
              >
                {u}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Result */}
      <div className="mt-8 rounded-lg border border-brand-border bg-brand-white p-5 sm:p-6">
        <p className="text-2xs uppercase tracking-wide text-brand-text-light">Typical daily water intake</p>
        <p className="mt-1 font-display text-3xl font-bold text-brand-primary">
          {r1(result.lowOz)}–{r1(result.highOz)} oz
        </p>
        <p className="mt-1 text-sm text-brand-text-mid">
          ≈ {Math.round(result.lowMl)}–{Math.round(result.highMl)} ml &middot; about {r1(result.lowCups)}–{r1(result.highCups)} cups per day
        </p>
        <p className="mt-3 text-sm leading-relaxed text-brand-text-mid">
          The lower end suits a calm day indoors; the upper end reflects a hot day, hard exercise, or a
          dry-kibble diet (canned food supplies a lot of water on its own). This is total water — what your
          dog drinks plus the moisture in its food.
        </p>
      </div>

      <p className="mt-5 text-2xs leading-snug text-brand-text-light">
        Husbandry estimate only. A sustained jump or drop in how much your dog drinks — or sudden excessive
        thirst — can be an early sign of conditions like diabetes, kidney disease, or infection; contact your
        veterinarian if drinking changes markedly or you are concerned.
      </p>
    </div>
  )
}
