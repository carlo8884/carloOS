'use client'

/**
 * Puppy Weight Predictor -- /tools/puppy-weight-predictor
 *
 * Client compute component. Estimates an ADULT weight RANGE from a puppy's
 * current age + current weight using the standard growth-percentage method:
 *
 *   adult weight ≈ current weight ÷ (fraction of adult weight reached at current age)
 *
 * Growth fractions vary by adult-size class -- toy/small breeds mature quickly
 * (~50% of adult weight by ~16 weeks, fully grown by ~10-12 months), while
 * large/giant breeds mature slowly (not fully grown until 18-24 months). The
 * fraction tables below are interpolated from published veterinary/AKC
 * growth-curve references and are presented as an estimate, not a guarantee.
 *
 * Output is deliberately a RANGE (±~10-15%) -- individual and breed variation
 * means a single number would be false precision.
 */

import { useMemo, useState } from 'react'

type Unit = 'lb' | 'kg'

interface SizeClass {
  key: string
  label: string
  blurb: string
  /** Adult-weight band for this size class, in lb, for context. */
  adultRangeLb: string
  /**
   * Growth fraction by age in weeks: the share of adult weight typically
   * reached at that age for this size class. Linearly interpolated between
   * the listed anchor points. Smaller classes mature faster (reach 1.0
   * sooner). Anchors are drawn from published size-class growth curves.
   */
  anchors: { weeks: number; fraction: number }[]
  /** Age (weeks) at which this class is treated as fully grown (fraction = 1.0). */
  matureWeeks: number
}

// Anchor points per size class. fraction = body weight / projected adult weight.
// Sources: AKC puppy growth guidance + Waltham/veterinary growth-curve literature.
const SIZE_CLASSES: SizeClass[] = [
  {
    key: 'toy',
    label: 'Toy (adult under ~12 lb)',
    blurb: 'Chihuahua, Yorkshire Terrier, Pomeranian, Maltese',
    adultRangeLb: 'under ~12 lb',
    matureWeeks: 40,
    anchors: [
      { weeks: 6, fraction: 0.22 },
      { weeks: 8, fraction: 0.31 },
      { weeks: 12, fraction: 0.45 },
      { weeks: 16, fraction: 0.58 },
      { weeks: 20, fraction: 0.70 },
      { weeks: 26, fraction: 0.85 },
      { weeks: 34, fraction: 0.96 },
      { weeks: 40, fraction: 1.0 },
    ],
  },
  {
    key: 'small',
    label: 'Small (adult ~12–25 lb)',
    blurb: 'Beagle, Cocker Spaniel, French Bulldog, Shih Tzu',
    adultRangeLb: '~12–25 lb',
    matureWeeks: 48,
    anchors: [
      { weeks: 6, fraction: 0.20 },
      { weeks: 8, fraction: 0.28 },
      { weeks: 12, fraction: 0.42 },
      { weeks: 16, fraction: 0.53 },
      { weeks: 20, fraction: 0.63 },
      { weeks: 26, fraction: 0.78 },
      { weeks: 34, fraction: 0.90 },
      { weeks: 44, fraction: 0.98 },
      { weeks: 48, fraction: 1.0 },
    ],
  },
  {
    key: 'medium',
    label: 'Medium (adult ~25–50 lb)',
    blurb: 'Border Collie, Australian Shepherd, Bulldog, Cocker mixes',
    adultRangeLb: '~25–50 lb',
    matureWeeks: 52,
    anchors: [
      { weeks: 6, fraction: 0.17 },
      { weeks: 8, fraction: 0.24 },
      { weeks: 12, fraction: 0.37 },
      { weeks: 16, fraction: 0.48 },
      { weeks: 20, fraction: 0.58 },
      { weeks: 26, fraction: 0.72 },
      { weeks: 34, fraction: 0.86 },
      { weeks: 44, fraction: 0.95 },
      { weeks: 52, fraction: 1.0 },
    ],
  },
  {
    key: 'large',
    label: 'Large (adult ~50–100 lb)',
    blurb: 'Labrador, German Shepherd, Golden Retriever, Boxer',
    adultRangeLb: '~50–100 lb',
    matureWeeks: 72,
    anchors: [
      { weeks: 6, fraction: 0.13 },
      { weeks: 8, fraction: 0.19 },
      { weeks: 12, fraction: 0.30 },
      { weeks: 16, fraction: 0.40 },
      { weeks: 20, fraction: 0.49 },
      { weeks: 26, fraction: 0.62 },
      { weeks: 34, fraction: 0.75 },
      { weeks: 44, fraction: 0.86 },
      { weeks: 52, fraction: 0.93 },
      { weeks: 72, fraction: 1.0 },
    ],
  },
  {
    key: 'giant',
    label: 'Giant (adult over ~100 lb)',
    blurb: 'Great Dane, Mastiff, Saint Bernard, Newfoundland',
    adultRangeLb: 'over ~100 lb',
    matureWeeks: 96,
    anchors: [
      { weeks: 6, fraction: 0.10 },
      { weeks: 8, fraction: 0.15 },
      { weeks: 12, fraction: 0.24 },
      { weeks: 16, fraction: 0.33 },
      { weeks: 20, fraction: 0.41 },
      { weeks: 26, fraction: 0.53 },
      { weeks: 34, fraction: 0.66 },
      { weeks: 44, fraction: 0.78 },
      { weeks: 52, fraction: 0.86 },
      { weeks: 72, fraction: 0.96 },
      { weeks: 96, fraction: 1.0 },
    ],
  },
]

/** Linear interpolation of the growth fraction at a given age (weeks). */
function fractionAt(cls: SizeClass, weeks: number): number {
  const a = cls.anchors
  if (weeks <= a[0].weeks) return a[0].fraction
  if (weeks >= a[a.length - 1].weeks) return 1.0
  for (let i = 0; i < a.length - 1; i++) {
    const lo = a[i]
    const hi = a[i + 1]
    if (weeks >= lo.weeks && weeks <= hi.weeks) {
      const t = (weeks - lo.weeks) / (hi.weeks - lo.weeks)
      return lo.fraction + t * (hi.fraction - lo.fraction)
    }
  }
  return 1.0
}

function toLb(weight: number, unit: Unit): number {
  return unit === 'kg' ? weight * 2.2046 : weight
}

interface Prediction {
  fraction: number
  pointLb: number
  lowLb: number
  highLb: number
  matureWeeks: number
  alreadyGrown: boolean
}

function predict(cls: SizeClass, ageWeeks: number, currentWeightLb: number): Prediction {
  const fraction = fractionAt(cls, ageWeeks)
  const point = currentWeightLb / fraction
  // Range reflects individual + breed variation. Tighter near maturity (less
  // growth left to vary), wider for very young puppies.
  const spread = ageWeeks >= cls.matureWeeks ? 0.05 : fraction >= 0.6 ? 0.10 : 0.15
  return {
    fraction,
    pointLb: point,
    lowLb: point * (1 - spread),
    highLb: point * (1 + spread),
    matureWeeks: cls.matureWeeks,
    alreadyGrown: ageWeeks >= cls.matureWeeks,
  }
}

function fmtRange(lowLb: number, highLb: number, unit: Unit): string {
  const conv = (v: number) => (unit === 'kg' ? v / 2.2046 : v)
  const u = unit === 'kg' ? 'kg' : 'lb'
  const lo = conv(lowLb)
  const hi = conv(highLb)
  const round = (v: number) => (v < 20 ? Math.round(v * 10) / 10 : Math.round(v))
  return `${round(lo)}–${round(hi)} ${u}`
}

export default function PuppyWeightPredictor() {
  const [sizeIndex, setSizeIndex] = useState<number>(3) // default Large (most-searched)
  const [ageWeeks, setAgeWeeks] = useState<string>('14')
  const [weight, setWeight] = useState<string>('20')
  const [unit, setUnit] = useState<Unit>('lb')

  const ageNum = parseFloat(ageWeeks) || 0
  const weightNum = parseFloat(weight) || 0
  const cls = SIZE_CLASSES[sizeIndex]
  const currentWeightLb = toLb(Math.max(0.1, weightNum), unit)

  const isValid = ageNum >= 4 && ageNum <= 104 && weightNum > 0

  const result = useMemo(
    () => (isValid ? predict(cls, ageNum, currentWeightLb) : null),
    [isValid, cls, ageNum, currentWeightLb]
  )

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      {/* Inputs */}
      <div className="grid gap-5 md:grid-cols-2">
        {/* Size class */}
        <div className="md:col-span-2">
          <label htmlFor="pw-size" className="mb-1 block text-xs font-medium text-brand-text-mid">
            Expected adult size class
          </label>
          <select
            id="pw-size"
            value={sizeIndex}
            onChange={(e) => setSizeIndex(Number(e.target.value))}
            className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
          >
            {SIZE_CLASSES.map((s, i) => (
              <option key={s.key} value={i}>
                {s.label}
              </option>
            ))}
          </select>
          <p className="mt-1 text-2xs text-brand-text-light">
            Pick by breed if known (e.g. {cls.blurb}). For a mixed-breed puppy, estimate from the
            parents&apos; sizes or a breed/DNA test.
          </p>
        </div>

        {/* Current age in weeks */}
        <div>
          <label htmlFor="pw-age" className="mb-1 block text-xs font-medium text-brand-text-mid">
            Current age (weeks)
          </label>
          <input
            id="pw-age"
            type="number"
            inputMode="decimal"
            min={4}
            max={104}
            step={1}
            value={ageWeeks}
            onChange={(e) => setAgeWeeks(e.target.value)}
            className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
            placeholder="e.g. 14"
          />
          <p className="mt-1 text-2xs text-brand-text-light">
            Months × 4.3 ≈ weeks. The method is most reliable from about 8–24 weeks.
          </p>
        </div>

        {/* Current weight */}
        <div>
          <label htmlFor="pw-weight" className="mb-1 block text-xs font-medium text-brand-text-mid">
            Current weight
          </label>
          <div className="flex gap-2">
            <input
              id="pw-weight"
              type="number"
              inputMode="decimal"
              min={0.1}
              max={300}
              step={0.1}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
              placeholder="e.g. 20"
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
            Weigh your puppy at home (hold puppy on a scale, then subtract your weight) or at the vet.
          </p>
        </div>
      </div>

      {/* Results */}
      <div aria-live="polite" aria-atomic="true" className="mt-6">
        {!isValid && (
          <div className="rounded border border-brand-border bg-brand-white p-5 text-sm text-brand-text-mid">
            Enter an age (4–104 weeks) and a current weight to see an estimated adult-weight range.
          </div>
        )}

        {isValid && result && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded border border-brand-border bg-brand-white p-4">
              <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light">
                Adult weight reached
              </p>
              <p className="mt-1 font-display text-xl text-brand-dark">
                {Math.round(result.fraction * 100)}%
              </p>
              <p className="mt-0.5 text-2xs text-brand-text-light">
                at {Math.round(ageNum)} weeks ({cls.label.split(' (')[0]})
              </p>
            </div>
            <div className="rounded border-2 border-brand-primary bg-brand-primary-pale p-4 sm:col-span-2">
              <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                Estimated adult weight
              </p>
              <p className="mt-1 font-display text-2xl text-brand-dark">
                {result.alreadyGrown
                  ? 'Likely fully grown'
                  : fmtRange(result.lowLb, result.highLb, unit)}
              </p>
              <p className="mt-0.5 text-2xs text-brand-text-light">
                {result.alreadyGrown
                  ? `This size class is typically full-grown by about ${result.matureWeeks} weeks.`
                  : `A range, not a single number — individual and breed variation is real.`}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Disclaimer */}
      <div className="mt-6 rounded border border-amber-700/40 bg-amber-950/20 p-4 text-sm text-amber-900">
        <span className="font-semibold">An estimate, not a guarantee.</span>{' '}
        This uses the standard growth-percentage method (adult weight ≈ current weight ÷ the share of
        adult weight reached at the current age) with published size-class growth curves. Real puppies
        vary by breed, sex, nutrition, neuter timing, and individual genetics. Treat the range as a
        planning guide, and ask your veterinarian to track growth against a body-condition curve.
      </div>

      <p className="mt-4 text-xs text-brand-text-light">
        Method: adult weight ≈ current weight ÷ growth fraction, where the growth fraction is the typical
        share of adult body weight reached at the current age for the selected size class. Fractions are
        interpolated from published AKC and veterinary growth-curve references. Smaller breeds reach 100%
        sooner (~10–12 months); large and giant breeds keep growing to 18–24 months.
      </p>
    </div>
  )
}
