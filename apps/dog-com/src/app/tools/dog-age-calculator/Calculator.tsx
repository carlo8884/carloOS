'use client'

/**
 * Dog Age in Human Years Calculator -- /tools/dog-age-calculator
 * Client compute component. Implements the AVMA/AAHA-style banded model.
 *
 * Formula (exact):
 *   age <= 1  : human = age * 15
 *   age <= 2  : human = 15 + (age - 1) * 9       (age 2 = 24)
 *   age >  2  : human = 24 + (age - 2) * perYear
 *     perYear: Small (<=20 lb) = 4, Medium (21-50 lb) = 5,
 *              Large (51-90 lb) = 5, Giant (>90 lb) = 6
 *
 * No fabricated breed-specific numbers. Life stage labels are qualitative.
 */

import { useMemo, useState } from 'react'

type SizeCategory = 'small' | 'medium' | 'large' | 'giant'

interface SizeOption {
  value: SizeCategory
  label: string
  perYear: number
}

const SIZES: SizeOption[] = [
  { value: 'small',  label: 'Small (up to 20 lb)',  perYear: 4 },
  { value: 'medium', label: 'Medium (21-50 lb)',     perYear: 5 },
  { value: 'large',  label: 'Large (51-90 lb)',      perYear: 5 },
  { value: 'giant',  label: 'Giant (over 90 lb)',    perYear: 6 },
]

function computeHumanAge(dogAge: number, perYear: number): number {
  if (dogAge <= 0) return 0
  if (dogAge <= 1) return Math.round(dogAge * 15)
  if (dogAge <= 2) return Math.round(15 + (dogAge - 1) * 9)
  return Math.round(24 + (dogAge - 2) * perYear)
}

function getLifeStage(dogAge: number, size: SizeCategory): string {
  if (dogAge < 1) return 'Puppy'
  if (dogAge < 2) return 'Adolescent'
  // Senior thresholds approximate AVMA/AAHA-style guidance; larger dogs age faster
  const seniorAge = size === 'giant' ? 6 : size === 'large' ? 7 : size === 'medium' ? 8 : 9
  const matureAge = size === 'giant' ? 4 : size === 'large' ? 5 : size === 'medium' ? 6 : 7
  if (dogAge >= seniorAge) return 'Senior'
  if (dogAge >= matureAge) return 'Mature adult'
  return 'Adult'
}

export default function DogAgeCalculator() {
  const [ageStr, setAgeStr] = useState<string>('3')
  const [size, setSize]     = useState<SizeCategory>('medium')

  const dogAge  = parseFloat(ageStr) || 0
  const sizeOpt = SIZES.find((s) => s.value === size) ?? SIZES[1]
  const isValid = dogAge > 0

  const humanAge  = useMemo(() => computeHumanAge(dogAge, sizeOpt.perYear), [dogAge, sizeOpt])
  const lifeStage = useMemo(() => getLifeStage(dogAge, size),                [dogAge, size])

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      {/* Inputs */}
      <div className="grid gap-5 md:grid-cols-2">
        {/* Dog age */}
        <div>
          <label htmlFor="da-age" className="mb-1 block text-xs font-medium text-brand-text-mid">
            Dog&apos;s age (years)
          </label>
          <input
            id="da-age"
            type="number"
            inputMode="decimal"
            min={0}
            max={30}
            step={0.1}
            value={ageStr}
            onChange={(e) => setAgeStr(e.target.value)}
            className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
            placeholder="e.g. 3"
          />
          <p className="mt-1 text-2xs text-brand-text-light">
            One decimal is fine (e.g. 1.5 for 18 months). Min 0, max 30.
          </p>
        </div>

        {/* Size category */}
        <div>
          <label htmlFor="da-size" className="mb-1 block text-xs font-medium text-brand-text-mid">
            Size category
          </label>
          <select
            id="da-size"
            value={size}
            onChange={(e) => setSize(e.target.value as SizeCategory)}
            className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
          >
            {SIZES.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
          <p className="mt-1 text-2xs text-brand-text-light">
            Based on adult body weight. Larger dogs age faster in later years.
          </p>
        </div>
      </div>

      {/* Results */}
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {/* Human age -- primary result */}
        <div className="sm:col-span-2 rounded border-2 border-brand-primary bg-brand-primary-pale p-5">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Estimated human-age equivalent
          </p>
          <p className="mt-2 font-display text-5xl font-bold text-brand-dark leading-none">
            {isValid ? humanAge : '--'}
          </p>
          <p className="mt-1 text-sm text-brand-text-mid">
            {isValid ? 'human years (approximate)' : 'Enter an age to calculate'}
          </p>
        </div>

        {/* Life stage */}
        <div className="rounded border border-brand-border bg-brand-white p-5 flex flex-col justify-center">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light">
            Life stage
          </p>
          <p className="mt-2 font-display text-2xl font-semibold text-brand-dark">
            {isValid ? lifeStage : '--'}
          </p>
          <p className="mt-1 text-2xs text-brand-text-light">
            Qualitative label; varies by individual
          </p>
        </div>
      </div>

      {/* Formula reference row */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="rounded border border-brand-border bg-brand-white p-3">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light">Dog age</p>
          <p className="mt-1 font-display text-lg text-brand-dark">
            {isValid ? dogAge.toFixed(1) + ' yr' : '--'}
          </p>
        </div>
        <div className="rounded border border-brand-border bg-brand-white p-3">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light">Size</p>
          <p className="mt-1 font-display text-lg text-brand-dark">
            {sizeOpt.label.split(' (')[0]}
          </p>
        </div>
        <div className="rounded border border-brand-border bg-brand-white p-3">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light">Rate (age &gt; 2)</p>
          <p className="mt-1 font-display text-lg text-brand-dark">
            {sizeOpt.perYear} human yr / yr
          </p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-6 rounded border border-amber-700/40 bg-amber-950/20 p-4 text-sm text-amber-900">
        <span className="font-semibold">An approximation.</span>{' '}
        Aging varies by breed, size, and individual health; smaller dogs generally age more slowly
        in later years. Not a substitute for veterinary assessment.
      </div>

      <p className="mt-4 text-xs text-brand-text-light">
        Formula: age&nbsp;&le;&nbsp;1&nbsp;yr: 15&nbsp;&times;&nbsp;dog-age;
        age&nbsp;1-2&nbsp;yr: 15&nbsp;+&nbsp;9&nbsp;&times;&nbsp;(age&nbsp;-&nbsp;1);
        age&nbsp;&gt;&nbsp;2&nbsp;yr: 24&nbsp;+&nbsp;size-factor&nbsp;&times;&nbsp;(age&nbsp;-&nbsp;2).
        Size factors after age&nbsp;2: Small&nbsp;4, Medium&nbsp;5, Large&nbsp;5, Giant&nbsp;6
        human years per calendar year.
        Model consistent with AVMA and AAHA-style published life-stage frameworks.
      </p>
    </div>
  )
}
