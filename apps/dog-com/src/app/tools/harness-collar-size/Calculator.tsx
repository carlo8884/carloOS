'use client'

/**
 * Dog Harness & Collar Size Calculator -- /tools/harness-collar-size
 *
 * Client compute component. Turns weight and/or size class plus neck and
 * chest measurements into typical manufacturer collar and harness size
 * bands (XS–XXL) with a conservative size-up when the measurement sits
 * near the top of a band.
 *
 * Product-sizing / husbandry guidance only -- not a medical claim, not a
 * brand-specific guarantee. Brands cut differently; check the product chart.
 */

import { useMemo, useState } from 'react'

type Unit = 'in' | 'cm'
type SizeClass = 'toy' | 'small' | 'medium' | 'large' | 'giant'
type BandId = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL'

interface Band {
  id: BandId
  minIn: number
  maxIn: number
  weightHint: string
}

interface SizePreset {
  label: string
  weightHint: string
  weightLb: number
  neckIn: number
  chestIn: number
  fallbackBand: BandId
}

// Conservative size-up when a measurement is within this many inches of
// the next band's minimum (typical "between sizes → size up" retail rule).
const SIZE_UP_MARGIN_IN = 0.5
const IN_PER_CM = 1 / 2.54
const LB_PER_KG = 2.20462

// Typical US retail collar bands by neck circumference. Adjacent mins
// equal the previous max so the picker can size up at the boundary.
const COLLAR_BANDS: Band[] = [
  { id: 'XS', minIn: 6, maxIn: 10, weightHint: 'toy, often under ~10 lb' },
  { id: 'S', minIn: 10, maxIn: 14, weightHint: '~10–25 lb' },
  { id: 'M', minIn: 14, maxIn: 18, weightHint: '~25–50 lb' },
  { id: 'L', minIn: 18, maxIn: 22, weightHint: '~50–80 lb' },
  { id: 'XL', minIn: 22, maxIn: 26, weightHint: '~80–110 lb' },
  { id: 'XXL', minIn: 26, maxIn: 32, weightHint: '~110 lb and up' },
]

// Typical US retail harness bands by chest / girth (behind the front legs).
const HARNESS_BANDS: Band[] = [
  { id: 'XS', minIn: 12, maxIn: 17, weightHint: 'toy, often under ~10 lb' },
  { id: 'S', minIn: 17, maxIn: 22, weightHint: '~10–25 lb' },
  { id: 'M', minIn: 22, maxIn: 28, weightHint: '~25–50 lb' },
  { id: 'L', minIn: 28, maxIn: 34, weightHint: '~50–80 lb' },
  { id: 'XL', minIn: 34, maxIn: 42, weightHint: '~80–110 lb' },
  { id: 'XXL', minIn: 42, maxIn: 52, weightHint: '~110 lb and up' },
]

const SIZE_PRESETS: Record<SizeClass, SizePreset> = {
  toy: {
    label: 'Toy (under ~10 lb)',
    weightHint: 'Chihuahua, Yorkie, Pomeranian',
    weightLb: 8,
    neckIn: 9,
    chestIn: 14,
    fallbackBand: 'XS',
  },
  small: {
    label: 'Small (~10–25 lb)',
    weightHint: 'Pug, Jack Russell, Mini Schnauzer',
    weightLb: 18,
    neckIn: 12,
    chestIn: 19,
    fallbackBand: 'S',
  },
  medium: {
    label: 'Medium (~25–50 lb)',
    weightHint: 'Beagle, Cocker, Border Collie',
    weightLb: 40,
    neckIn: 16,
    chestIn: 25,
    fallbackBand: 'M',
  },
  large: {
    label: 'Large (~50–90 lb)',
    weightHint: 'Lab, Golden, Shepherd',
    weightLb: 70,
    neckIn: 20,
    chestIn: 31,
    fallbackBand: 'L',
  },
  giant: {
    label: 'Giant (~90+ lb)',
    weightHint: 'Great Dane, Mastiff, Newf',
    weightLb: 110,
    neckIn: 24,
    chestIn: 38,
    fallbackBand: 'XL',
  },
}

const WEIGHT_FALLBACK: { maxLb: number; band: BandId }[] = [
  { maxLb: 10, band: 'XS' },
  { maxLb: 25, band: 'S' },
  { maxLb: 50, band: 'M' },
  { maxLb: 80, band: 'L' },
  { maxLb: 110, band: 'XL' },
  { maxLb: Infinity, band: 'XXL' },
]

interface Pick {
  band: Band
  sizedUp: boolean
  offChart: 'low' | 'high' | null
}

interface Result {
  collar: Pick
  harness: Pick
  usedNeck: boolean
  usedChest: boolean
  weightBand: BandId
  mismatch: boolean
}

function inFromUnit(v: number, unit: Unit): number {
  return unit === 'cm' ? v * IN_PER_CM : v
}

function lbFromDisplay(v: number, unit: Unit): number {
  return unit === 'cm' ? v * LB_PER_KG : v
}

function pickBand(valueIn: number, bands: Band[]): Pick {
  if (!Number.isFinite(valueIn) || valueIn <= 0) {
    return { band: bands[0], sizedUp: false, offChart: 'low' }
  }
  if (valueIn < bands[0].minIn) {
    return { band: bands[0], sizedUp: false, offChart: 'low' }
  }
  if (valueIn > bands[bands.length - 1].maxIn) {
    return { band: bands[bands.length - 1], sizedUp: false, offChart: 'high' }
  }
  let idx = 0
  for (let i = 0; i < bands.length; i++) {
    if (valueIn >= bands[i].minIn) idx = i
  }
  const next = bands[idx + 1]
  if (next && valueIn >= next.minIn - SIZE_UP_MARGIN_IN) {
    return { band: next, sizedUp: true, offChart: null }
  }
  return { band: bands[idx], sizedUp: false, offChart: null }
}

function bandById(id: BandId, bands: Band[]): Band {
  return bands.find((b) => b.id === id) ?? bands[0]
}

function weightToBand(weightLb: number): BandId {
  return WEIGHT_FALLBACK.find((row) => weightLb <= row.maxLb)?.band ?? 'XXL'
}

function compute(
  neckIn: number,
  chestIn: number,
  weightLb: number,
  sizeClass: SizeClass,
  hasNeck: boolean,
  hasChest: boolean,
  hasWeight: boolean,
): Result {
  const weightBand = hasWeight ? weightToBand(weightLb) : SIZE_PRESETS[sizeClass].fallbackBand
  const collar = hasNeck
    ? pickBand(neckIn, COLLAR_BANDS)
    : { band: bandById(weightBand, COLLAR_BANDS), sizedUp: false, offChart: null }
  const harness = hasChest
    ? pickBand(chestIn, HARNESS_BANDS)
    : { band: bandById(weightBand, HARNESS_BANDS), sizedUp: false, offChart: null }

  const measuredIds = [hasNeck ? collar.band.id : null, hasChest ? harness.band.id : null].filter(Boolean)
  const mismatch =
    (hasWeight || !hasNeck || !hasChest) &&
    measuredIds.some((id) => id && id !== weightBand)

  return {
    collar,
    harness,
    usedNeck: hasNeck,
    usedChest: hasChest,
    weightBand,
    mismatch,
  }
}

function showIn(nIn: number, unit: Unit): string {
  if (unit === 'cm') return `${Math.round(nIn * 2.54)} cm`
  return `${Math.round(nIn * 10) / 10}"`
}

function rangeLabel(band: Band, unit: Unit): string {
  return `${showIn(band.minIn, unit)}–${showIn(band.maxIn, unit)}`
}

export default function HarnessCollarSizeCalculator() {
  const [sizeClass, setSizeClass] = useState<SizeClass>('medium')
  const [unit, setUnit] = useState<Unit>('in')
  const [weight, setWeight] = useState<number>(SIZE_PRESETS.medium.weightLb)
  const [neck, setNeck] = useState<number>(SIZE_PRESETS.medium.neckIn)
  const [chest, setChest] = useState<number>(SIZE_PRESETS.medium.chestIn)

  const result = useMemo(() => {
    const neckIn = inFromUnit(neck, unit)
    const chestIn = inFromUnit(chest, unit)
    const weightLb = lbFromDisplay(weight, unit)
    return compute(neckIn, chestIn, weightLb, sizeClass, neck > 0, chest > 0, weight > 0)
  }, [neck, chest, weight, sizeClass, unit])

  function onSize(next: SizeClass) {
    setSizeClass(next)
    const preset = SIZE_PRESETS[next]
    if (unit === 'cm') {
      setWeight(Math.round((preset.weightLb / LB_PER_KG) * 10) / 10)
      setNeck(Math.round(preset.neckIn * 2.54))
      setChest(Math.round(preset.chestIn * 2.54))
    } else {
      setWeight(preset.weightLb)
      setNeck(preset.neckIn)
      setChest(preset.chestIn)
    }
  }

  function onUnit(next: Unit) {
    if (next === unit) return
    if (next === 'cm') {
      setWeight(Math.round((weight * (unit === 'in' ? 1 / LB_PER_KG : 1)) * 10) / 10)
      setNeck(Math.round(inFromUnit(neck, unit) * 2.54))
      setChest(Math.round(inFromUnit(chest, unit) * 2.54))
    } else {
      const neckIn = inFromUnit(neck, unit)
      const chestIn = inFromUnit(chest, unit)
      const weightLb = lbFromDisplay(weight, unit)
      setWeight(Math.round(weightLb * 10) / 10)
      setNeck(Math.round(neckIn * 10) / 10)
      setChest(Math.round(chestIn * 10) / 10)
    }
    setUnit(next)
  }

  const weightUnit = unit === 'cm' ? 'kg' : 'lb'

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <p className="mb-2 text-xs font-medium text-brand-text-mid">Breed size class</p>
          <div className="grid grid-cols-2 gap-2">
            {(Object.keys(SIZE_PRESETS) as SizeClass[]).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => onSize(s)}
                className={[
                  'rounded border px-3 py-2 text-left text-sm font-semibold transition-colors',
                  sizeClass === s
                    ? 'border-brand-primary bg-brand-primary text-white'
                    : 'border-brand-border bg-brand-white text-brand-text-mid hover:bg-brand-surface',
                ].join(' ')}
              >
                {SIZE_PRESETS[s].label}
              </button>
            ))}
          </div>
          <p className="mt-1 text-2xs text-brand-text-light leading-snug">{SIZE_PRESETS[sizeClass].weightHint}</p>
        </div>
        <div>
          <p className="mb-2 text-xs font-medium text-brand-text-mid">Units</p>
          <div className="flex rounded border border-brand-border overflow-hidden">
            {(['in', 'cm'] as Unit[]).map((u) => (
              <button
                key={u}
                type="button"
                onClick={() => onUnit(u)}
                className={[
                  'flex-1 py-2 text-sm font-semibold uppercase transition-colors',
                  unit === u
                    ? 'bg-brand-primary text-white'
                    : 'bg-brand-white text-brand-text-mid hover:bg-brand-surface',
                ].join(' ')}
              >
                {u === 'in' ? 'in / lb' : 'cm / kg'}
              </button>
            ))}
          </div>
          <p className="mt-1 text-2xs text-brand-text-light leading-snug">
            Measurements beat weight. Weight and size class are a starting band when you have not measured yet.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <NumberField
          id="hc-weight"
          label={`Weight (${weightUnit})`}
          value={weight}
          min={1}
          max={unit === 'cm' ? 120 : 250}
          step={unit === 'cm' ? 0.5 : 1}
          onChange={setWeight}
          hint="Optional. Used as a cross-check and as a fallback if a measurement is blank."
        />
        <NumberField
          id="hc-neck"
          label={`Neck circumference (${unit})`}
          value={neck}
          min={1}
          max={unit === 'cm' ? 90 : 36}
          step={unit === 'cm' ? 1 : 0.5}
          onChange={setNeck}
          hint="Tape around the neck where a flat collar sits — snug, not tight."
        />
        <NumberField
          id="hc-chest"
          label={`Chest / girth (${unit})`}
          value={chest}
          min={1}
          max={unit === 'cm' ? 140 : 56}
          step={unit === 'cm' ? 1 : 0.5}
          onChange={setChest}
          hint="Widest point of the ribcage, just behind the front legs."
        />
      </div>

      <div className="mt-8 rounded-lg border border-brand-border bg-brand-white p-5 sm:p-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <p className="text-2xs uppercase tracking-wide text-brand-text-light">Recommended collar band</p>
            <p className="mt-1 font-display text-3xl font-bold text-brand-primary">{result.collar.band.id}</p>
            <p className="mt-1 text-sm text-brand-text-mid">
              Neck {rangeLabel(result.collar.band, unit)}
              {result.usedNeck ? '' : ' · from weight / size class'}
            </p>
            {result.collar.sizedUp && (
              <p className="mt-2 text-sm font-semibold text-brand-dark">
                Between sizes — sized up. A slightly longer collar is easier to adjust than one that is too short.
              </p>
            )}
            {result.collar.offChart === 'high' && (
              <p className="mt-2 text-sm text-brand-text-mid">
                Above a typical XXL chart — look at giant-breed or custom collars and confirm the product’s neck range.
              </p>
            )}
          </div>
          <div>
            <p className="text-2xs uppercase tracking-wide text-brand-text-light">Recommended harness band</p>
            <p className="mt-1 font-display text-3xl font-bold text-brand-primary">{result.harness.band.id}</p>
            <p className="mt-1 text-sm text-brand-text-mid">
              Chest {rangeLabel(result.harness.band, unit)}
              {result.usedChest ? '' : ' · from weight / size class'}
            </p>
            {result.harness.sizedUp && (
              <p className="mt-2 text-sm font-semibold text-brand-dark">
                Between sizes — sized up. Extra adjuster travel is safer than a girth that will not close.
              </p>
            )}
            {result.harness.offChart === 'high' && (
              <p className="mt-2 text-sm text-brand-text-mid">
                Above a typical XXL chart — look at giant-breed harnesses and read the brand’s girth range before buying.
              </p>
            )}
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-brand-text-mid">
          These are typical S/M/L/XL retail bands ({result.collar.band.weightHint} for the collar class).
          Brand charts differ — match your tape numbers to the specific collar or harness, not the letter alone.
        </p>
        {result.mismatch && (
          <p className="mt-3 text-sm leading-relaxed text-brand-text-mid">
            Weight points at <strong>{result.weightBand}</strong> while a measurement pointed elsewhere.
            Trust the tape. Coat, chest shape, and brand cut all move the letter size.
          </p>
        )}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-brand-border bg-brand-white p-4">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-2">Fit tips</p>
          <ul className="m-0 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-brand-text-mid">
            <li>Two fingers should slide under a collar or harness strap once it is on.</li>
            <li>A harness chest strap sits behind the front legs, not on the throat.</li>
            <li>Keep a flat collar for ID tags; use a harness for walks so leash pressure is off the neck.</li>
            <li>Recheck after a coat clip or a big weight change.</li>
          </ul>
        </div>
        <div className="rounded-lg border border-brand-border bg-brand-white p-4">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-2">When to size up</p>
          <ul className="m-0 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-brand-text-mid">
            <li>The measurement is within {showIn(SIZE_UP_MARGIN_IN, unit)} of the next band — this tool already sizes up.</li>
            <li>A growing puppy: buy adjustable gear and remeasure every few weeks.</li>
            <li>A thick coat, barrel chest, or the two-finger check fails on the current size.</li>
            <li>The next size still has unused adjuster holes after a comfortable fit.</li>
          </ul>
        </div>
      </div>

      <p className="mt-5 text-2xs leading-snug text-brand-text-light">
        Product-sizing guidance from typical manufacturer neck and girth bands. Not a veterinary assessment
        and not a fit guarantee for any one brand. If a strap rubs, pinches, or the dog can back out, stop
        and refit or choose another style.
      </p>
    </div>
  )
}

function NumberField({
  id,
  label,
  value,
  min,
  max,
  step,
  onChange,
  hint,
}: {
  id: string
  label: string
  value: number
  min: number
  max: number
  step: number
  onChange: (n: number) => void
  hint: string
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-xs font-medium text-brand-text-mid">
        {label}
      </label>
      <input
        id={id}
        type="number"
        inputMode="decimal"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))}
        className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-text-dark"
      />
      <p className="mt-1 text-2xs text-brand-text-light leading-snug">{hint}</p>
    </div>
  )
}
