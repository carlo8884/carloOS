'use client'

/**
 * Dog Ideal Weight Calculator -- /tools/dog-ideal-weight-calculator
 *
 * Client compute component. Two complementary outputs:
 *
 *  1) Healthy adult weight RANGE by breed. Pulled from the curated Dog.com
 *     breed dataset (AKC-standard adult weight ranges). For a mixed-breed or
 *     unlisted dog, a size-class fallback band is used.
 *
 *  2) If the owner enters current weight + a 9-point body-condition score
 *     (BCS, the WSAVA standard), an estimated IDEAL weight using the standard
 *     veterinary heuristic that each BCS point above the ideal (4-5/9)
 *     represents roughly 10% over ideal body weight:
 *
 *        estimated ideal weight ≈ current weight / (1 + 0.10 * (BCS - 5))
 *
 *     plus the how-much-to-lose/gain context.
 *
 * Husbandry framing. BCS is an owner/vet assessment tool, not a diagnosis;
 * the page defers target-weight setting to the veterinarian for the
 * individual dog.
 */

import { useMemo, useState } from 'react'
import { AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { Breeds } from '../../../data/breeds'

type Unit = 'lb' | 'kg'

// Build the breed option list from the curated dataset (sorted by name).
const BREED_OPTIONS = [...Breeds]
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((b) => ({
    slug: b.slug,
    name: b.name,
    sizeCategory: b.sizeCategory,
    low: b.weightRangeLb[0],
    high: b.weightRangeLb[1],
  }))

// Size-class fallback bands (lb) for a mixed-breed or unlisted dog.
const SIZE_FALLBACK: { key: string; label: string; low: number; high: number }[] = [
  { key: 'toy', label: 'Toy (under ~12 lb)', low: 4, high: 12 },
  { key: 'small', label: 'Small (~12–25 lb)', low: 12, high: 25 },
  { key: 'medium', label: 'Medium (~25–50 lb)', low: 25, high: 50 },
  { key: 'large', label: 'Large (~50–90 lb)', low: 50, high: 90 },
  { key: 'giant', label: 'Giant (over ~90 lb)', low: 90, high: 150 },
]

// 9-point WSAVA body condition score.
const BCS_OPTIONS: { score: number; label: string; band: 'under' | 'ideal' | 'over' }[] = [
  { score: 1, label: '1 — Emaciated', band: 'under' },
  { score: 2, label: '2 — Very thin', band: 'under' },
  { score: 3, label: '3 — Thin', band: 'under' },
  { score: 4, label: '4 — Lean / ideal', band: 'ideal' },
  { score: 5, label: '5 — Ideal', band: 'ideal' },
  { score: 6, label: '6 — Slightly overweight', band: 'over' },
  { score: 7, label: '7 — Overweight', band: 'over' },
  { score: 8, label: '8 — Obese', band: 'over' },
  { score: 9, label: '9 — Severely obese', band: 'over' },
]

function toLb(weight: number, unit: Unit): number {
  return unit === 'kg' ? weight * 2.2046 : weight
}

function fromLb(lb: number, unit: Unit): number {
  return unit === 'kg' ? lb / 2.2046 : lb
}

function roundW(v: number): number {
  return v < 20 ? Math.round(v * 10) / 10 : Math.round(v)
}

function fmtRange(lowLb: number, highLb: number, unit: Unit): string {
  const u = unit === 'kg' ? 'kg' : 'lb'
  return `${roundW(fromLb(lowLb, unit))}–${roundW(fromLb(highLb, unit))} ${u}`
}

function fmtWeight(lb: number, unit: Unit): string {
  const u = unit === 'kg' ? 'kg' : 'lb'
  return `${roundW(fromLb(lb, unit))} ${u}`
}

interface BcsResult {
  idealLb: number
  deltaLb: number // current - ideal (positive = needs to lose)
  band: 'under' | 'ideal' | 'over'
}

function bcsEstimate(currentLb: number, score: number): BcsResult {
  // Each BCS point above 5/9 ≈ ~10% over ideal body weight (standard heuristic).
  const idealLb = currentLb / (1 + 0.1 * (score - 5))
  const opt = BCS_OPTIONS.find((o) => o.score === score)!
  return { idealLb, deltaLb: currentLb - idealLb, band: opt.band }
}

const SHOP_SOURCE = 'tools-dog-ideal-weight'

function resultShop(band: BcsResult['band'] | null): {
  heading: string
  blurb: string
  href: string
  label: string
} {
  if (band === 'under') {
    return {
      heading: 'Weigh meals while you book the vet',
      blurb:
        'An under-ideal estimate is a reason to call your veterinarian before adding calories — unexplained thinness can mean parasites, dental pain, or illness. A kitchen / pet scale lets you record what you are already feeding so the vet can review it. This tool does not set a target weight or diagnose a cause.',
      href: `/go/amazon-brand/digital+gram+scale+kitchen+pet?s=${SHOP_SOURCE}`,
      label: 'Browse kitchen / pet scales on Amazon →',
    }
  }
  if (band === 'over') {
    return {
      heading: 'Measure portions before you change the bowl',
      blurb:
        'An over-ideal estimate is a starting observation, not a diet plan. A portion-control food scale is how you record what is actually in the bowl so your veterinarian can set calories and a safe rate of loss. This tool does not diagnose a weight problem or set a target weight.',
      href: `/go/amazon-brand/portion+control+food+scale+dog?s=${SHOP_SOURCE}`,
      label: 'Browse portion-control food scales on Amazon →',
    }
  }
  if (band === 'ideal') {
    return {
      heading: 'Keep the routine with a measured feeder',
      blurb:
        'An ideal BCS is a feeding-and-exercise routine that is already working. An elevated slow-feeder bowl helps you keep portions consistent without speeding through the meal. Re-check weight and BCS every month or two, and let your veterinarian set any target if the score drifts.',
      href: `/go/amazon-brand/elevated+slow+feeder+bowl+dog?s=${SHOP_SOURCE}`,
      label: 'Browse elevated slow-feeder bowls on Amazon →',
    }
  }
  return {
    heading: 'Weigh with a digital scale, then score BCS',
    blurb:
      'A breed range is a starting band, not a target your veterinarian set. A digital kitchen / pet scale is how you record current weight and meals so the BCS estimate is based on a real number. Ask your veterinarian for a target weight — this tool does not diagnose a weight problem.',
    href: `/go/amazon-brand/digital+gram+scale+kitchen+pet?s=${SHOP_SOURCE}`,
    label: 'Browse kitchen / pet scales on Amazon →',
  }
}

export default function DogIdealWeightCalculator() {
  // -1 = "Mixed / not listed" → use size fallback
  const [breedSlug, setBreedSlug] = useState<string>('labrador-retriever')
  const [fallbackKey, setFallbackKey] = useState<string>('medium')
  const [weight, setWeight] = useState<string>('')
  const [unit, setUnit] = useState<Unit>('lb')
  const [bcs, setBcs] = useState<string>('') // '' = not entered

  const selectedBreed = BREED_OPTIONS.find((b) => b.slug === breedSlug) || null
  const fallback = SIZE_FALLBACK.find((s) => s.key === fallbackKey)!

  const range = useMemo(() => {
    if (selectedBreed) return { low: selectedBreed.low, high: selectedBreed.high, source: selectedBreed.name }
    return { low: fallback.low, high: fallback.high, source: fallback.label }
  }, [selectedBreed, fallback])

  const weightNum = parseFloat(weight) || 0
  const currentLb = weightNum > 0 ? toLb(weightNum, unit) : 0
  const bcsNum = bcs === '' ? null : parseInt(bcs, 10)

  const bcsResult = useMemo(
    () => (currentLb > 0 && bcsNum != null ? bcsEstimate(currentLb, bcsNum) : null),
    [currentLb, bcsNum]
  )
  const shop = resultShop(bcsResult?.band ?? null)

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        {/* Breed */}
        <div className="md:col-span-2">
          <label htmlFor="iw-breed" className="mb-1 block text-xs font-medium text-brand-text-mid">
            Breed
          </label>
          <select
            id="iw-breed"
            value={breedSlug}
            onChange={(e) => setBreedSlug(e.target.value)}
            className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
          >
            {BREED_OPTIONS.map((b) => (
              <option key={b.slug} value={b.slug}>
                {b.name}
              </option>
            ))}
            <option value="__mixed__">Mixed breed / not listed</option>
          </select>
          <p className="mt-1 text-2xs text-brand-text-light">
            Pick the closest breed, or choose &ldquo;Mixed breed / not listed&rdquo; to use a size class.
          </p>
        </div>

        {/* Size fallback (only when mixed) */}
        {!selectedBreed && (
          <div className="md:col-span-2">
            <label htmlFor="iw-size" className="mb-1 block text-xs font-medium text-brand-text-mid">
              Expected adult size class
            </label>
            <select
              id="iw-size"
              value={fallbackKey}
              onChange={(e) => setFallbackKey(e.target.value)}
              className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
            >
              {SIZE_FALLBACK.map((s) => (
                <option key={s.key} value={s.key}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Current weight (optional) */}
        <div>
          <label htmlFor="iw-weight" className="mb-1 block text-xs font-medium text-brand-text-mid">
            Current weight (optional)
          </label>
          <div className="flex gap-2">
            <input
              id="iw-weight"
              type="number"
              inputMode="decimal"
              min={0.1}
              max={300}
              step={0.1}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
              placeholder="e.g. 85"
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
            Add current weight + a body condition score for an estimated ideal weight.
          </p>
        </div>

        {/* Body condition score (optional) */}
        <div>
          <label htmlFor="iw-bcs" className="mb-1 block text-xs font-medium text-brand-text-mid">
            Body condition score (optional, 1–9)
          </label>
          <select
            id="iw-bcs"
            value={bcs}
            onChange={(e) => setBcs(e.target.value)}
            className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
          >
            <option value="">Not sure / skip</option>
            {BCS_OPTIONS.map((o) => (
              <option key={o.score} value={o.score}>
                {o.label}
              </option>
            ))}
          </select>
          <p className="mt-1 text-2xs text-brand-text-light">
            Not sure? The body condition score guide explains how to assess it by feel and sight.
          </p>
        </div>
      </div>

      {/* Results */}
      <div aria-live="polite" aria-atomic="true" className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Healthy range */}
        <div className="rounded border-2 border-brand-primary bg-brand-primary-pale p-4">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Healthy adult weight range
          </p>
          <p className="mt-1 font-display text-2xl text-brand-dark">
            {fmtRange(range.low, range.high, unit)}
          </p>
          <p className="mt-0.5 text-2xs text-brand-text-light">
            {selectedBreed
              ? `Typical adult range for ${range.source} (AKC-standard). Males often sit toward the top, females toward the bottom.`
              : `Typical band for ${range.source}. Pick a breed for a tighter range.`}
          </p>
        </div>

        {/* BCS-based ideal */}
        <div className="rounded border border-brand-border bg-brand-white p-4">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light">
            Estimated ideal weight (from BCS)
          </p>
          {!bcsResult && (
            <p className="mt-1 text-sm text-brand-text-mid">
              Enter current weight and a body condition score to estimate an ideal weight.
            </p>
          )}
          {bcsResult && (
            <>
              <p className="mt-1 font-display text-2xl text-brand-dark">
                {bcsResult.band === 'ideal'
                  ? 'Near ideal'
                  : fmtWeight(bcsResult.idealLb, unit)}
              </p>
              <p className="mt-0.5 text-2xs text-brand-text-light">
                {bcsResult.band === 'ideal'
                  ? 'A BCS of 4–5/9 is the target. Maintain current weight and re-check periodically.'
                  : bcsResult.band === 'over'
                    ? `About ${fmtWeight(Math.abs(bcsResult.deltaLb), unit)} over an estimated ideal — a gradual, vet-guided weight-loss plan is the safe path.`
                    : `About ${fmtWeight(Math.abs(bcsResult.deltaLb), unit)} under an estimated ideal — ask your veterinarian why before adding calories.`}
              </p>
            </>
          )}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-6 rounded border border-amber-700/40 bg-amber-950/20 p-4 text-sm text-amber-900">
        <span className="font-semibold">An estimate, not a target your vet set.</span>{' '}
        Breed ranges are AKC-standard adult bands, and the body-condition estimate uses the standard
        heuristic that each BCS point above the ideal (4–5/9) is roughly 10% over ideal body weight.
        Healthy weight depends on frame, sex, age, and muscle, so two dogs of the same breed can sit
        at different points in the range. Your veterinarian can set a target weight for your
        individual dog and rule out a medical cause for weight change.
      </div>

      <div className="mt-6 rounded-lg border border-brand-border bg-brand-white p-5">
        <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
          Next step
        </p>
        <p className="font-display text-base font-semibold leading-snug text-brand-text-dark">
          {shop.heading}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-brand-text-mid">{shop.blurb}</p>
        <AffiliateDisclosure variant="inline" siteId="dog-com" className="my-3" />
        <ShopCtas amazonHref={shop.href} amazonLabel={shop.label} />
      </div>

      <p className="mt-4 text-xs text-brand-text-light">
        Method: healthy range = AKC-standard adult weight band for the selected breed (or a
        size-class band for a mixed/unlisted dog). Estimated ideal weight ≈ current weight ÷ (1 +
        0.10 × (BCS − 5)), the standard veterinary body-condition heuristic. BCS is scored on the
        9-point WSAVA scale.
      </p>
    </div>
  )
}
