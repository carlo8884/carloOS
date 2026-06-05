'use client'

/**
 * Dog Calorie Calculator -- /tools/dog-calorie-calculator
 * Client compute component. Implements WSAVA/AAHA-style RER/MER formulas.
 * RER = 70 * (weight_kg ^ 0.75)
 * MER = factor * RER
 * No fabricated breed-specific numbers; all factors are standard published values.
 */

import { useMemo, useState } from 'react'

type Unit = 'lb' | 'kg'

interface LifeStageOption {
  label: string
  factor: number
}

const LIFE_STAGES: LifeStageOption[] = [
  { label: 'Neutered adult', factor: 1.6 },
  { label: 'Intact adult', factor: 1.8 },
  { label: 'Weight loss', factor: 1.0 },
  { label: 'Weight gain', factor: 1.7 },
  { label: 'Light work / active', factor: 2.0 },
  { label: 'Puppy (0-4 months)', factor: 3.0 },
  { label: 'Puppy (4-12 months)', factor: 2.0 },
  { label: 'Senior (less active)', factor: 1.4 },
]

interface Result {
  rer: number
  mer: number
  cupsPerDay: number | null
}

function toKg(weight: number, unit: Unit): number {
  return unit === 'lb' ? weight / 2.2046 : weight
}

function compute(weightRaw: number, unit: Unit, factor: number, kcalPerCup: number | null): Result {
  const kg = toKg(Math.max(0.1, weightRaw), unit)
  const rer = 70 * Math.pow(kg, 0.75)
  const mer = factor * rer
  const cupsPerDay = kcalPerCup && kcalPerCup > 0 ? mer / kcalPerCup : null
  return { rer, mer, cupsPerDay }
}

function kcal(n: number): string {
  return Math.round(n).toLocaleString('en-US') + ' kcal'
}

export default function DogCalorieCalculator() {
  const [weight, setWeight] = useState<string>('30')
  const [unit, setUnit] = useState<Unit>('lb')
  const [stageIndex, setStageIndex] = useState<number>(0)
  const [kcalPerCupStr, setKcalPerCupStr] = useState<string>('')

  const weightNum = parseFloat(weight) || 0
  const kcalPerCup = kcalPerCupStr.trim() !== '' ? parseFloat(kcalPerCupStr) || null : null
  const factor = LIFE_STAGES[stageIndex].factor

  const result = useMemo(
    () => compute(weightNum, unit, factor, kcalPerCup),
    [weightNum, unit, factor, kcalPerCup]
  )

  const isValid = weightNum > 0

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      {/* Inputs */}
      <div className="grid gap-5 md:grid-cols-2">
        {/* Weight */}
        <div>
          <label htmlFor="dc-weight" className="mb-1 block text-xs font-medium text-brand-text-mid">
            Body weight
          </label>
          <div className="flex gap-2">
            <input
              id="dc-weight"
              type="number"
              inputMode="decimal"
              min={0.1}
              max={200}
              step={0.1}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
              placeholder="e.g. 30"
            />
            <div className="flex rounded border border-brand-border overflow-hidden text-sm">
              <button
                type="button"
                onClick={() => setUnit('lb')}
                aria-pressed={unit === 'lb'}
                className={[
                  'px-3 py-2 font-medium transition-colors',
                  unit === 'lb'
                    ? 'bg-brand-primary text-brand-white'
                    : 'bg-brand-white text-brand-text-mid hover:bg-brand-surface',
                ].join(' ')}
              >
                lb
              </button>
              <button
                type="button"
                onClick={() => setUnit('kg')}
                aria-pressed={unit === 'kg'}
                className={[
                  'px-3 py-2 font-medium transition-colors',
                  unit === 'kg'
                    ? 'bg-brand-primary text-brand-white'
                    : 'bg-brand-white text-brand-text-mid hover:bg-brand-surface',
                ].join(' ')}
              >
                kg
              </button>
            </div>
          </div>
          <p className="mt-1 text-2xs text-brand-text-light">
            Use your dog&apos;s target or current healthy weight, as assessed by your veterinarian.
          </p>
        </div>

        {/* Life stage / activity factor */}
        <div>
          <label htmlFor="dc-stage" className="mb-1 block text-xs font-medium text-brand-text-mid">
            Life stage / activity level
          </label>
          <select
            id="dc-stage"
            value={stageIndex}
            onChange={(e) => setStageIndex(Number(e.target.value))}
            className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
          >
            {LIFE_STAGES.map((s, i) => (
              <option key={i} value={i}>
                {s.label} (factor {s.factor})
              </option>
            ))}
          </select>
          <p className="mt-1 text-2xs text-brand-text-light">
            Factors are standard WSAVA/AAHA-style published values.
          </p>
        </div>

        {/* Optional kcal/cup */}
        <div className="md:col-span-2">
          <label htmlFor="dc-kcal" className="mb-1 block text-xs font-medium text-brand-text-mid">
            Food energy density <span className="font-normal text-brand-text-light">(optional)</span>
          </label>
          <div className="flex items-center gap-2 max-w-xs">
            <input
              id="dc-kcal"
              type="number"
              inputMode="decimal"
              min={1}
              max={10000}
              step={1}
              value={kcalPerCupStr}
              onChange={(e) => setKcalPerCupStr(e.target.value)}
              className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
              placeholder="e.g. 375"
            />
            <span className="text-sm text-brand-text-light whitespace-nowrap">kcal / cup</span>
          </div>
          <p className="mt-1 text-2xs text-brand-text-light">
            Found on the food bag (usually listed as &quot;kcal/cup&quot; or &quot;ME kcal/cup&quot; in the calorie statement). Leave blank to skip the cups estimate.
          </p>
        </div>
      </div>

      {/* Results */}
      <div aria-live="polite" aria-atomic="true" className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 lg:grid-cols-4">
        <div className="rounded border border-brand-border bg-brand-white p-4">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light">Weight (kg)</p>
          <p className="mt-1 font-display text-xl text-brand-dark">
            {isValid ? toKg(weightNum, unit).toFixed(2) : '--'}
          </p>
        </div>
        <div className="rounded border border-brand-border bg-brand-white p-4">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light">RER / day</p>
          <p className="mt-1 font-display text-xl text-brand-dark">{isValid ? kcal(result.rer) : '--'}</p>
          <p className="mt-0.5 text-2xs text-brand-text-light">70 &times; kg^0.75</p>
        </div>
        <div className="rounded border-2 border-brand-primary bg-brand-primary-pale p-4">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">MER / day</p>
          <p className="mt-1 font-display text-xl text-brand-dark">{isValid ? kcal(result.mer) : '--'}</p>
          <p className="mt-0.5 text-2xs text-brand-text-light">{factor} &times; RER</p>
        </div>
        <div className="rounded border border-brand-border bg-brand-white p-4">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light">Cups / day</p>
          <p className="mt-1 font-display text-xl text-brand-dark">
            {isValid && result.cupsPerDay !== null
              ? result.cupsPerDay.toFixed(1) + ' cups'
              : '--'}
          </p>
          <p className="mt-0.5 text-2xs text-brand-text-light">MER &divide; kcal/cup</p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-6 rounded border border-amber-700/40 bg-amber-950/20 p-4 text-sm text-amber-900">
        <span className="font-semibold">An estimate, not a prescription.</span>{' '}
        Energy needs vary widely by individual; confirm your dog&apos;s target weight and intake with your veterinarian.
        This calculator uses the standard RER formula (70 &times; kg^0.75) and WSAVA/AAHA-style MER factors.
        Treat the result as a starting point, then adjust based on body condition score and veterinary guidance.
      </div>

      <p className="mt-4 text-xs text-brand-text-light">
        Formulas: RER (kcal/day) = 70 &times; (body weight in kg)^0.75. MER = life-stage factor &times; RER.
        Source: consistent with WSAVA Global Nutrition Guidelines and AAHA Nutritional Assessment Guidelines.
        Cups/day = MER &divide; food energy density (kcal/cup) from the bag&apos;s calorie statement.
      </p>
    </div>
  )
}
