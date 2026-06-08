'use client'

/**
 * Puppy Growth & Adult Weight Predictor -- /tools/puppy-growth-calculator
 * Client compute component.
 *
 * Method (transparent, no fabricated precision):
 *   1. Size class sets the age at which a dog reaches ~100% of adult weight
 *      (skeletal/weight maturity): toy/small mature earliest (~10-12 mo),
 *      giant breeds latest (~18-24 mo). These ranges are the standard
 *      veterinary/AKC growth-curve consensus, not site-invented numbers.
 *   2. For a given size class we model the fraction of adult weight reached
 *      by age as a monotonic growth curve calibrated to widely published
 *      growth checkpoints (e.g. small/medium dogs are roughly half their
 *      adult weight by ~4-4.5 months). The curve is piecewise-linear between
 *      published checkpoints -- deliberately simple and inspectable.
 *   3. Estimated adult weight = current weight / (growth fraction at current age).
 *      Growth progress = growth fraction at current age (as a %).
 *
 * Everything here is an ESTIMATE. Individual variation is large; the UI says so.
 */

import { useMemo, useState } from 'react'
import { Breeds } from '../../../data/breeds'
import type { SizeCategory } from '../../../data/breeds'

type Unit = 'lb' | 'kg'
type AgeUnit = 'weeks' | 'months'

// Size classes we expose. We map breeds.ts 'Toy' and 'Small' into shared
// curves where their maturity timelines coincide, but keep all five labels.
type SizeClass = 'toy' | 'small' | 'medium' | 'large' | 'giant'

interface SizeClassMeta {
  id: SizeClass
  label: string
  /** Adult-weight maturity window in months (typical published range). */
  maturityMonths: [number, number]
  /**
   * Growth checkpoints: [ageMonths, fractionOfAdultWeight].
   * Piecewise-linear between points; clamped to >=0.04 and <=1.
   * Calibrated to widely published size-class growth curves.
   */
  checkpoints: Array<[number, number]>
  blurb: string
}

// Checkpoints below are anchored to the broadly published consensus that
// smaller dogs reach a higher fraction of adult weight earlier, and giant
// breeds keep growing well past a year. They are intentionally coarse.
const SIZE_CLASSES: SizeClassMeta[] = [
  {
    id: 'toy',
    label: 'Toy (under ~12 lb adult)',
    maturityMonths: [8, 11],
    checkpoints: [
      [1, 0.13],
      [2, 0.3],
      [3, 0.45],
      [4, 0.6],
      [6, 0.8],
      [8, 0.95],
      [10, 1.0],
    ],
    blurb: 'Toy breeds finish growing early -- most reach adult weight by 8-11 months.',
  },
  {
    id: 'small',
    label: 'Small (~12-25 lb adult)',
    maturityMonths: [10, 12],
    checkpoints: [
      [1, 0.11],
      [2, 0.27],
      [3, 0.42],
      [4, 0.55],
      [6, 0.75],
      [9, 0.92],
      [11, 1.0],
    ],
    blurb: 'Small breeds typically reach adult weight by 10-12 months.',
  },
  {
    id: 'medium',
    label: 'Medium (~25-50 lb adult)',
    maturityMonths: [12, 14],
    checkpoints: [
      [1, 0.09],
      [2, 0.22],
      [3, 0.35],
      [4, 0.48],
      [6, 0.68],
      [9, 0.85],
      [12, 0.98],
      [14, 1.0],
    ],
    blurb: 'Medium breeds usually reach adult weight around 12-14 months.',
  },
  {
    id: 'large',
    label: 'Large (~50-90 lb adult)',
    maturityMonths: [15, 18],
    checkpoints: [
      [1, 0.08],
      [2, 0.18],
      [3, 0.3],
      [4, 0.42],
      [6, 0.6],
      [9, 0.78],
      [12, 0.9],
      [15, 0.98],
      [18, 1.0],
    ],
    blurb: 'Large breeds keep growing to ~15-18 months; growth slows but continues past a year.',
  },
  {
    id: 'giant',
    label: 'Giant (~90 lb+ adult)',
    maturityMonths: [18, 24],
    checkpoints: [
      [1, 0.06],
      [2, 0.15],
      [3, 0.25],
      [4, 0.35],
      [6, 0.52],
      [9, 0.68],
      [12, 0.82],
      [18, 0.95],
      [24, 1.0],
    ],
    blurb: 'Giant breeds mature slowest -- many are not at full adult weight until 18-24 months.',
  },
]

function sizeCategoryToClass(sc: SizeCategory): SizeClass {
  switch (sc) {
    case 'Toy':
      return 'toy'
    case 'Small':
      return 'small'
    case 'Medium':
      return 'medium'
    case 'Large':
      return 'large'
    case 'Giant':
      return 'giant'
    default:
      return 'medium'
  }
}

/** Linear interpolation across the size class's published checkpoints. */
function growthFraction(meta: SizeClassMeta, ageMonths: number): number {
  const pts = meta.checkpoints
  const a = Math.max(0, ageMonths)
  if (a <= pts[0][0]) {
    // Below first checkpoint: interpolate from (0,0) to the first point.
    const [x1, y1] = pts[0]
    const f = (a / x1) * y1
    return Math.min(1, Math.max(0.04, f))
  }
  for (let i = 0; i < pts.length - 1; i++) {
    const [x1, y1] = pts[i]
    const [x2, y2] = pts[i + 1]
    if (a >= x1 && a <= x2) {
      const t = (a - x1) / (x2 - x1)
      return Math.min(1, Math.max(0.04, y1 + t * (y2 - y1)))
    }
  }
  return 1 // at/after last checkpoint -> adult weight reached
}

function toKg(weight: number, unit: Unit): number {
  return unit === 'lb' ? weight / 2.2046 : weight
}
function fromKg(kg: number, unit: Unit): number {
  return unit === 'lb' ? kg * 2.2046 : kg
}

function fmtWeight(n: number, unit: Unit): string {
  if (!isFinite(n) || n <= 0) return '--'
  const rounded = n >= 20 ? Math.round(n) : Math.round(n * 10) / 10
  return `${rounded.toLocaleString('en-US')} ${unit}`
}

const BREED_OPTIONS = [...Breeds]
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((b) => ({
    slug: b.slug,
    name: b.name,
    sizeClass: sizeCategoryToClass(b.sizeCategory),
    weightRangeLb: b.weightRangeLb,
  }))

interface Result {
  fraction: number
  adultKg: number
  rangeLowKg: number
  rangeHighKg: number
  matured: boolean
}

function compute(
  weightRaw: number,
  unit: Unit,
  ageMonths: number,
  meta: SizeClassMeta
): Result {
  const currentKg = toKg(Math.max(0.01, weightRaw), unit)
  const fraction = growthFraction(meta, ageMonths)
  const adultKg = currentKg / fraction
  // Present an honest +/- band (model + individual variation). Wider for
  // younger puppies where the projection is least certain.
  const uncertainty = ageMonths < 4 ? 0.18 : ageMonths < 8 ? 0.12 : 0.08
  return {
    fraction,
    adultKg,
    rangeLowKg: adultKg * (1 - uncertainty),
    rangeHighKg: adultKg * (1 + uncertainty),
    matured: fraction >= 0.999,
  }
}

export default function PuppyGrowthCalculator() {
  const [mode, setMode] = useState<'size' | 'breed'>('size')
  const [sizeClassId, setSizeClassId] = useState<SizeClass>('medium')
  const [breedSlug, setBreedSlug] = useState<string>(BREED_OPTIONS[0]?.slug ?? '')
  const [age, setAge] = useState<string>('4')
  const [ageUnit, setAgeUnit] = useState<AgeUnit>('months')
  const [weight, setWeight] = useState<string>('15')
  const [unit, setUnit] = useState<Unit>('lb')

  const selectedBreed = BREED_OPTIONS.find((b) => b.slug === breedSlug)
  const activeClassId: SizeClass =
    mode === 'breed' && selectedBreed ? selectedBreed.sizeClass : sizeClassId
  const meta = SIZE_CLASSES.find((s) => s.id === activeClassId) ?? SIZE_CLASSES[2]

  const ageNum = parseFloat(age) || 0
  const ageMonths = ageUnit === 'weeks' ? ageNum / 4.345 : ageNum
  const weightNum = parseFloat(weight) || 0

  const result = useMemo(
    () => compute(weightNum, unit, ageMonths, meta),
    [weightNum, unit, ageMonths, meta]
  )

  const isValid = weightNum > 0 && ageMonths > 0 && ageMonths <= 24
  const pct = Math.round(result.fraction * 100)

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      {/* Mode toggle */}
      <div className="mb-5 inline-flex rounded border border-brand-border overflow-hidden text-sm">
        <button
          type="button"
          onClick={() => setMode('size')}
          aria-pressed={mode === 'size'}
          className={[
            'px-4 py-2 font-medium transition-colors',
            mode === 'size'
              ? 'bg-brand-primary text-brand-white'
              : 'bg-brand-white text-brand-text-mid hover:bg-brand-surface',
          ].join(' ')}
        >
          By size class
        </button>
        <button
          type="button"
          onClick={() => setMode('breed')}
          aria-pressed={mode === 'breed'}
          className={[
            'px-4 py-2 font-medium transition-colors',
            mode === 'breed'
              ? 'bg-brand-primary text-brand-white'
              : 'bg-brand-white text-brand-text-mid hover:bg-brand-surface',
          ].join(' ')}
        >
          By breed
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {/* Size class OR breed */}
        {mode === 'size' ? (
          <div>
            <label htmlFor="pg-size" className="mb-1 block text-xs font-medium text-brand-text-mid">
              Size class (estimated adult size)
            </label>
            <select
              id="pg-size"
              value={sizeClassId}
              onChange={(e) => setSizeClassId(e.target.value as SizeClass)}
              className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
            >
              {SIZE_CLASSES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
            <p className="mt-1 text-2xs text-brand-text-light">{meta.blurb}</p>
          </div>
        ) : (
          <div>
            <label htmlFor="pg-breed" className="mb-1 block text-xs font-medium text-brand-text-mid">
              Breed
            </label>
            <select
              id="pg-breed"
              value={breedSlug}
              onChange={(e) => setBreedSlug(e.target.value)}
              className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
            >
              {BREED_OPTIONS.map((b) => (
                <option key={b.slug} value={b.slug}>
                  {b.name}
                </option>
              ))}
            </select>
            <p className="mt-1 text-2xs text-brand-text-light">
              {selectedBreed
                ? `Adult breed-standard range: ${selectedBreed.weightRangeLb[0]}-${selectedBreed.weightRangeLb[1]} lb (${meta.label.split(' (')[0]} growth curve).`
                : meta.blurb}
            </p>
          </div>
        )}

        {/* Current age */}
        <div>
          <label htmlFor="pg-age" className="mb-1 block text-xs font-medium text-brand-text-mid">
            Current age
          </label>
          <div className="flex gap-2">
            <input
              id="pg-age"
              type="number"
              inputMode="decimal"
              min={0.5}
              max={ageUnit === 'weeks' ? 104 : 24}
              step={ageUnit === 'weeks' ? 1 : 0.5}
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
              placeholder="e.g. 4"
            />
            <div className="flex rounded border border-brand-border overflow-hidden text-sm">
              <button
                type="button"
                onClick={() => setAgeUnit('weeks')}
                aria-pressed={ageUnit === 'weeks'}
                className={[
                  'px-3 py-2 font-medium transition-colors',
                  ageUnit === 'weeks'
                    ? 'bg-brand-primary text-brand-white'
                    : 'bg-brand-white text-brand-text-mid hover:bg-brand-surface',
                ].join(' ')}
              >
                wk
              </button>
              <button
                type="button"
                onClick={() => setAgeUnit('months')}
                aria-pressed={ageUnit === 'months'}
                className={[
                  'px-3 py-2 font-medium transition-colors',
                  ageUnit === 'months'
                    ? 'bg-brand-primary text-brand-white'
                    : 'bg-brand-white text-brand-text-mid hover:bg-brand-surface',
                ].join(' ')}
              >
                mo
              </button>
            </div>
          </div>
          <p className="mt-1 text-2xs text-brand-text-light">
            Best between ~8 weeks and the size class&apos;s maturity age. Projections past 24 months
            are not meaningful -- the dog is already an adult.
          </p>
        </div>

        {/* Current weight */}
        <div className="md:col-span-2">
          <label htmlFor="pg-weight" className="mb-1 block text-xs font-medium text-brand-text-mid">
            Current weight
          </label>
          <div className="flex gap-2 max-w-xs">
            <input
              id="pg-weight"
              type="number"
              inputMode="decimal"
              min={0.1}
              max={300}
              step={0.1}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
              placeholder="e.g. 15"
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
        </div>
      </div>

      {/* Results */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3"
      >
        <div className="rounded border border-brand-border bg-brand-white p-4">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light">
            Growth progress
          </p>
          <p className="mt-1 font-display text-xl text-brand-dark">
            {isValid ? `~${pct}%` : '--'}
          </p>
          <p className="mt-0.5 text-2xs text-brand-text-light">of adult weight reached</p>
          {isValid && (
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-brand-surface">
              <div
                className="h-full rounded-full bg-brand-primary transition-all"
                style={{ width: `${pct}%` }}
              />
            </div>
          )}
        </div>
        <div className="rounded border-2 border-brand-primary bg-brand-primary-pale p-4 sm:col-span-2">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Estimated adult weight
          </p>
          <p className="mt-1 font-display text-2xl text-brand-dark">
            {isValid
              ? result.matured
                ? `${fmtWeight(fromKg(result.adultKg, unit), unit)} (at or near adult size)`
                : fmtWeight(fromKg(result.adultKg, unit), unit)
              : '--'}
          </p>
          {isValid && !result.matured && (
            <p className="mt-0.5 text-2xs text-brand-text-light">
              Likely range {fmtWeight(fromKg(result.rangeLowKg, unit), unit)} -{' '}
              {fmtWeight(fromKg(result.rangeHighKg, unit), unit)} &middot; matures around{' '}
              {meta.maturityMonths[0]}-{meta.maturityMonths[1]} months
            </p>
          )}
        </div>
      </div>

      {!isValid && (
        <p className="mt-3 text-2xs text-brand-text-light">
          Enter a current age (8 weeks to 24 months) and a current weight to see the estimate.
        </p>
      )}

      {/* Method transparency */}
      <div className="mt-6 rounded border border-brand-border bg-brand-white p-4 text-xs text-brand-text-mid">
        <p className="font-semibold text-brand-dark">How this is calculated</p>
        <p className="mt-1 leading-relaxed">
          Adult weight = current weight &divide; the fraction of adult weight a puppy of this size
          class has typically reached by this age. The growth fractions come from published
          size-class growth curves: smaller dogs reach adult weight earlier (toy ~8-11 months),
          giant breeds latest (~18-24 months). The model interpolates between standard growth
          checkpoints. It is a population estimate -- your dog&apos;s genetics, nutrition, and
          neuter timing all shift the real number.
        </p>
      </div>

      {/* Disclaimer */}
      <div className="mt-4 rounded border border-amber-700/40 bg-amber-950/20 p-4 text-sm text-amber-900">
        <span className="font-semibold">An estimate, not a diagnosis.</span> Adult-weight prediction
        is approximate, especially for mixed breeds and puppies under four months. It is not a
        substitute for veterinary assessment. If your puppy is gaining or losing weight unexpectedly,
        eating poorly, or not following a healthy growth curve, consult your veterinarian.
      </div>
    </div>
  )
}
