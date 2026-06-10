'use client'

/**
 * Pet Portion & Calorie Calculator -- /tools/portion-calculator
 * Client compute component. Uses the standard RER/MER equations (WSAVA/AAHA-style)
 * to estimate daily caloric needs for dogs and cats.
 *
 * RER (kcal/day) = 70 * (weight_kg ^ 0.75)
 * MER = factor * RER
 *
 * Output is an ESTIMATE only. Confirm target weight and daily intake with a veterinarian.
 */

import { useMemo, useState } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

type Species = 'dog' | 'cat'
type WeightUnit = 'lb' | 'kg'

interface LifeStageOption {
  label: string
  factor: number
}

const DOG_STAGES: LifeStageOption[] = [
  { label: 'Neutered adult', factor: 1.6 },
  { label: 'Intact adult', factor: 1.8 },
  { label: 'Weight loss', factor: 1.0 },
  { label: 'Active / working', factor: 2.0 },
  { label: 'Puppy under 4 months', factor: 3.0 },
  { label: 'Puppy 4-12 months', factor: 2.0 },
  { label: 'Senior', factor: 1.4 },
]

const CAT_STAGES: LifeStageOption[] = [
  { label: 'Neutered adult', factor: 1.2 },
  { label: 'Intact adult', factor: 1.4 },
  { label: 'Weight loss', factor: 0.8 },
  { label: 'Kitten', factor: 2.5 },
  { label: 'Senior', factor: 1.1 },
  { label: 'Obese-prone', factor: 1.0 },
]

interface Inputs {
  species: Species
  weight: number
  weightUnit: WeightUnit
  stageIndex: number
  kcalPerCup: number
  useKcalPerCup: boolean
}

const DEFAULTS: Inputs = {
  species: 'dog',
  weight: 30,
  weightUnit: 'lb',
  stageIndex: 0,
  kcalPerCup: 400,
  useKcalPerCup: false,
}

interface Result {
  weightKg: number
  rer: number
  factor: number
  mer: number
  cupsPerDay: number | null
}

// ─── Math ─────────────────────────────────────────────────────────────────────

function toKg(weight: number, unit: WeightUnit): number {
  return unit === 'kg' ? weight : weight / 2.2046
}

function calcRER(weightKg: number): number {
  return 70 * Math.pow(Math.max(weightKg, 0.5), 0.75)
}

function compute(inputs: Inputs): Result {
  const stages = inputs.species === 'dog' ? DOG_STAGES : CAT_STAGES
  const stage = stages[Math.min(inputs.stageIndex, stages.length - 1)]
  const weightKg = toKg(Math.max(inputs.weight, 0.1), inputs.weightUnit)
  const rer = calcRER(weightKg)
  const factor = stage.factor
  const mer = factor * rer
  const cupsPerDay =
    inputs.useKcalPerCup && inputs.kcalPerCup > 0 ? mer / inputs.kcalPerCup : null
  return { weightKg, rer, factor, mer, cupsPerDay }
}

// ─── Format helpers ───────────────────────────────────────────────────────────

function kcal(n: number): string {
  return Math.round(n).toLocaleString('en-US') + ' kcal'
}

function round1(n: number): string {
  return n.toFixed(1)
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function PortionCalculator() {
  const [inputs, setInputs] = useState<Inputs>(DEFAULTS)
  const result = useMemo(() => compute(inputs), [inputs])

  function set<K extends keyof Inputs>(key: K, value: Inputs[K]) {
    setInputs((prev) => ({ ...prev, [key]: value }))
  }

  const stages = inputs.species === 'dog' ? DOG_STAGES : CAT_STAGES

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">

      {/* Species + Weight */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {/* Species toggle */}
        <div>
          <p className="mb-2 text-xs font-medium text-brand-text-mid">Species</p>
          <div className="flex rounded border border-brand-border overflow-hidden">
            {(['dog', 'cat'] as Species[]).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => {
                  set('species', s)
                  set('stageIndex', 0)
                }}
                className={[
                  'flex-1 py-2 text-sm font-semibold capitalize transition-colors',
                  inputs.species === s
                    ? 'bg-brand-primary text-brand-white'
                    : 'bg-brand-white text-brand-text-mid hover:bg-brand-surface',
                ].join(' ')}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Weight value */}
        <div>
          <label htmlFor="pc-weight" className="mb-2 block text-xs font-medium text-brand-text-mid">
            Body weight
          </label>
          <input
            id="pc-weight"
            type="number"
            inputMode="decimal"
            min={0.1}
            max={300}
            step={0.5}
            value={inputs.weight}
            onChange={(e) => set('weight', Math.max(0.1, Number(e.target.value) || 0.1))}
            className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-text-dark"
          />
        </div>

        {/* Weight unit toggle */}
        <div>
          <p className="mb-2 text-xs font-medium text-brand-text-mid">Unit</p>
          <div className="flex rounded border border-brand-border overflow-hidden">
            {(['lb', 'kg'] as WeightUnit[]).map((u) => (
              <button
                key={u}
                type="button"
                onClick={() => set('weightUnit', u)}
                className={[
                  'flex-1 py-2 text-sm font-semibold uppercase transition-colors',
                  inputs.weightUnit === u
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

      {/* Life stage / activity */}
      <div className="mt-6">
        <label htmlFor="pc-stage" className="mb-2 block text-xs font-medium text-brand-text-mid">
          Life stage / activity level
        </label>
        <select
          id="pc-stage"
          value={inputs.stageIndex}
          onChange={(e) => set('stageIndex', Number(e.target.value))}
          className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-text-dark"
        >
          {stages.map((stage, i) => (
            <option key={i} value={i}>
              {stage.label} (MER factor {stage.factor}x)
            </option>
          ))}
        </select>
        <p className="mt-1 text-2xs text-brand-text-light leading-snug">
          MER factors follow standard WSAVA/AAHA-style RER guidelines. Weight loss and obese-prone
          factors should be used only under veterinary supervision.
        </p>
      </div>

      {/* Optional: kcal per cup */}
      <div className="mt-6">
        <div className="flex items-center gap-3 mb-2">
          <input
            id="pc-use-kcal"
            type="checkbox"
            checked={inputs.useKcalPerCup}
            onChange={(e) => set('useKcalPerCup', e.target.checked)}
            className="h-4 w-4 rounded border-brand-border text-brand-primary"
          />
          <label htmlFor="pc-use-kcal" className="text-xs font-medium text-brand-text-mid cursor-pointer">
            Convert to cups/day (enter food energy density)
          </label>
        </div>
        {inputs.useKcalPerCup && (
          <div className="flex items-center gap-2">
            <input
              id="pc-kcal-cup"
              type="number"
              inputMode="decimal"
              min={1}
              max={2000}
              step={10}
              value={inputs.kcalPerCup}
              onChange={(e) => set('kcalPerCup', Math.max(1, Number(e.target.value) || 1))}
              className="w-36 rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-text-dark"
            />
            <span className="text-sm text-brand-text-light">kcal per cup (from the food bag label)</span>
          </div>
        )}
      </div>

      {/* Results */}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
        <div className="rounded border border-brand-border bg-brand-white p-4">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light">Weight (kg)</p>
          <p className="mt-1 font-display text-2xl text-brand-text-dark">
            {round1(result.weightKg)} kg
          </p>
        </div>
        <div className="rounded border border-brand-border bg-brand-white p-4">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light">RER (kcal/day)</p>
          <p className="mt-1 font-display text-2xl text-brand-text-dark">{kcal(result.rer)}</p>
          <p className="mt-1 text-2xs text-brand-text-light">Resting energy requirement</p>
        </div>
        <div className="col-span-2 sm:col-span-1 rounded border-2 border-brand-primary bg-brand-primary-pale p-4">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">MER (kcal/day)</p>
          <p className="mt-1 font-display text-2xl text-brand-text-dark">{kcal(result.mer)}</p>
          <p className="mt-1 text-2xs text-brand-text-light">
            Maintenance energy requirement ({result.factor}x RER)
          </p>
        </div>
      </div>

      {/* Cups per day (conditional) */}
      {inputs.useKcalPerCup && result.cupsPerDay !== null && (
        <div className="mt-3 rounded border-2 border-brand-primary bg-brand-primary-pale p-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">Estimated cups/day</p>
            <p className="mt-1 font-display text-3xl text-brand-text-dark">{round1(result.cupsPerDay)}</p>
            <p className="mt-1 text-2xs text-brand-text-light">
              Based on {inputs.kcalPerCup} kcal/cup from the food label
            </p>
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div className="mt-6 rounded border border-amber-700/40 bg-amber-950/20 p-4 text-sm text-amber-900">
        <span className="font-semibold">This is an estimate, not a prescription.</span>{' '}
        Individual caloric needs vary by breed, body composition, health status, and environment.
        Confirm your pet&apos;s target weight and appropriate daily intake with your veterinarian
        before making feeding changes.
      </div>

      <p className="mt-4 text-xs text-brand-text-light">
        Formula: RER = 70 &times; (weight_kg<sup>0.75</sup>); MER = factor &times; RER.
        MER factors based on standard WSAVA/AAHA-style maintenance energy guidelines.
        lb converted to kg at 1 lb = 0.4536 kg (1/2.2046).
      </p>
    </div>
  )
}
