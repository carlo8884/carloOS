'use client'

import { HopDisclosure } from '../../../components/HopDisclosure'
import Link from 'next/link'
/**
 * Horse Size for Rider Calculator -- /tools/horse-size-for-rider
 * Client compute component. Suggests a horse bodyweight range and an
 * approximate height (hands) band from rider weight, height, and discipline,
 * using a planning figure that rider + tack falls roughly within 15–20%
 * of the horse's bodyweight. That band is not a fetched welfare standard.
 *
 * This is EDUCATIONAL GUIDANCE, not a rule and not veterinary advice. The
 * percentage is a guideline, not a hard cutoff; the right horse depends on its
 * individual conformation, fitness, age, and soundness. Output always defers to
 * a riding instructor and an assessment of the individual horse.
 */

import { useMemo, useState } from 'react'
import { ResultMeaning, ToolError, numberFieldError } from '@carloOS/ui'

type Unit = 'imperial' | 'metric'

// Tack weight assumption added to rider weight before applying the percentage.
// English tack is lighter; western saddles are substantially heavier.
const TACK_LB = { english: 25, western: 45, none: 0 } as const
type Discipline = keyof typeof TACK_LB

const DISCIPLINES: { value: Discipline; label: string; note: string }[] = [
  { value: 'english', label: 'English / general riding (~25 lb tack)', note: 'English saddles and bridle are lighter; a typical setup adds roughly 20–30 lb.' },
  { value: 'western', label: 'Western (~45 lb tack)', note: 'Western saddles are heavier; a full setup commonly adds 40–50 lb.' },
  { value: 'none', label: 'Bareback / no tack', note: 'No tack weight added; rider weight only.' },
]

// Experience nudges where in the 15–20% band we anchor the recommendation.
// A beginner sits less balanced and is harder on the horse's back, so we steer
// toward the more conservative (lower %) end → a larger horse.
const EXPERIENCE: { value: string; label: string; pct: number; note: string }[] = [
  { value: 'beginner', label: 'Beginner', pct: 0.15, note: 'Beginners ride less balanced, so we anchor at the conservative 15% end (a larger, more forgiving horse).' },
  { value: 'intermediate', label: 'Intermediate', pct: 0.175, note: 'A balanced intermediate rider can sit toward the middle of the 15–20% band.' },
  { value: 'advanced', label: 'Advanced', pct: 0.20, note: 'A fit, balanced rider distributes weight well and may use the upper (20%) end of the guideline.' },
]

interface Result {
  riderLb: number
  tackLb: number
  combinedLb: number
  /** Recommended minimum horse weight at the chosen % anchor. */
  minHorseLb: number
  /** Conservative horse weight at the 15% end. */
  conservativeHorseLb: number
  /** Upper horse weight at the 20% end. */
  upperHorseLb: number
  heightBand: string
}

// Rough mapping from suggested horse bodyweight to a typical height band, used
// only to give a familiar "hands" reference. Horse weight-to-height varies by
// build, so this is presented as approximate.
function heightBandForWeight(lb: number): string {
  if (lb < 800) return 'about 13.0–14.2 hh (large pony / small horse)'
  if (lb < 1000) return 'about 14.2–15.2 hh (small to mid-size horse)'
  if (lb < 1200) return 'about 15.0–16.0 hh (mid-size horse)'
  if (lb < 1400) return 'about 15.2–16.2 hh (larger horse)'
  return 'about 16.0–17.0+ hh (large horse / heavier build)'
}

function compute(
  riderWeightLb: number,
  discipline: Discipline,
  experiencePct: number,
): Result | null {
  if (!(riderWeightLb > 0)) return null
  const tackLb = TACK_LB[discipline]
  const combinedLb = riderWeightLb + tackLb
  // combined ≤ pct * horseWeight  →  horseWeight ≥ combined / pct
  const minHorseLb = combinedLb / experiencePct
  const conservativeHorseLb = combinedLb / 0.15 // 15% end → larger horse
  const upperHorseLb = combinedLb / 0.20 // 20% end → smaller horse
  return {
    riderLb: riderWeightLb,
    tackLb,
    combinedLb,
    minHorseLb,
    conservativeHorseLb,
    upperHorseLb,
    heightBand: heightBandForWeight(minHorseLb),
  }
}

function round(n: number, step = 5): number {
  return Math.round(n / step) * step
}

export default function Calculator() {
  const [unit, setUnit] = useState<Unit>('imperial')
  const [discipline, setDiscipline] = useState<Discipline>('english')
  const [experience, setExperience] = useState<string>('intermediate')
  const [weight, setWeight] = useState<string>('160')
  const [heightFt, setHeightFt] = useState<string>('')
  const [heightIn, setHeightIn] = useState<string>('')
  const [heightCm, setHeightCm] = useState<string>('')

  const expOption = EXPERIENCE.find((e) => e.value === experience) ?? EXPERIENCE[1]
  const discOption = DISCIPLINES.find((d) => d.value === discipline) ?? DISCIPLINES[0]
  const weightError = numberFieldError(
    weight,
    'rider weight',
    unit === 'imperial' ? 50 : 20,
    unit === 'imperial' ? 400 : 200,
    unit === 'imperial' ? 'lb' : 'kg',
  )
  const heightError = ((): string | null => {
    if (unit === 'imperial') {
      if (!heightFt.trim() && !heightIn.trim()) return null
      const feetError = numberFieldError(heightFt, 'height in feet', 3, 7, 'ft')
      if (feetError) return feetError
      if (!Number.isInteger(Number(heightFt))) return 'Enter a whole number of feet.'
      if (!heightIn.trim()) return null
      const inchesError = numberFieldError(heightIn, 'height in inches', 0, 11, 'in')
      if (inchesError) return inchesError
      if (!Number.isInteger(Number(heightIn))) return 'Enter whole inches from 0 to 11.'
      return null
    }
    if (!heightCm.trim()) return null
    return numberFieldError(heightCm, 'height', 90, 220, 'cm')
  })()
  const inputError = weightError || heightError

  const riderWeightLb = useMemo(() => {
    if (weightError) return null
    const w = parseFloat(weight)
    if (Number.isNaN(w) || w <= 0) return null
    return unit === 'imperial' ? w : w / 0.453592
  }, [weight, unit, weightError])

  const result = useMemo(() => {
    if (inputError || riderWeightLb == null) return null
    return compute(riderWeightLb, discipline, expOption.pct)
  }, [riderWeightLb, discipline, expOption.pct, inputError])

  // Tall riders need leg length / barrel; flag if rider height suggests a taller horse.
  const riderTall = useMemo(() => {
    if (unit === 'imperial') {
      const ft = parseFloat(heightFt)
      const inch = parseFloat(heightIn) || 0
      if (Number.isNaN(ft)) return null
      const totalIn = ft * 12 + inch
      return totalIn >= 72 // 6'0"+
    }
    const cm = parseFloat(heightCm)
    if (Number.isNaN(cm)) return null
    return cm >= 183
  }, [heightFt, heightIn, heightCm, unit])

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      {/* Unit toggle */}
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-brand-text-mid">Units</span>
        {(['imperial', 'metric'] as Unit[]).map((u) => (
          <button
            key={u}
            type="button"
            onClick={() => setUnit(u)}
            className={`rounded border px-3 py-1.5 text-sm transition ${
              unit === u
                ? 'border-brand-primary bg-brand-primary/10 text-brand-text-dark'
                : 'border-brand-border text-brand-text-mid hover:border-brand-primary'
            }`}
          >
            {u === 'imperial' ? 'lb / ft-in' : 'kg / cm'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="hs-weight" className="mb-1 block text-sm font-medium text-brand-text-dark">
            Rider weight ({unit === 'imperial' ? 'lb' : 'kg'})
          </label>
          <input
            id="hs-weight"
            type="number"
            inputMode="decimal"
            min="0"
            step="1"
            value={weight}
            aria-invalid={weightError ? true : undefined}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={unit === 'imperial' ? 'e.g. 160' : 'e.g. 73'}
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
          />
        </div>

        <div>
          <span className="mb-1 block text-sm font-medium text-brand-text-dark">
            Rider height ({unit === 'imperial' ? 'ft / in' : 'cm'})
          </span>
          {unit === 'imperial' ? (
            <div className="flex gap-2">
              <input
                aria-label="Height feet"
                type="number"
                inputMode="numeric"
                min="0"
                step="1"
                value={heightFt}
                aria-invalid={unit === 'imperial' && heightError ? true : undefined}
                onChange={(e) => setHeightFt(e.target.value)}
                placeholder="ft"
                className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
              />
              <input
                aria-label="Height inches"
                type="number"
                inputMode="numeric"
                min="0"
                max="11"
                step="1"
                value={heightIn}
                aria-invalid={unit === 'imperial' && heightIn.trim() !== '' && heightError ? true : undefined}
                onChange={(e) => setHeightIn(e.target.value)}
                placeholder="in"
                className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
              />
            </div>
          ) : (
            <input
              aria-label="Height centimetres"
              type="number"
              inputMode="numeric"
              min="0"
              step="1"
              value={heightCm}
              aria-invalid={unit === 'metric' && heightError ? true : undefined}
              onChange={(e) => setHeightCm(e.target.value)}
              placeholder="cm"
              className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
            />
          )}
          <p className="mt-1 text-xs text-brand-text-mid">Used as a leg-length consideration, not a weight calculation.</p>
        </div>

        <div>
          <label htmlFor="hs-disc" className="mb-1 block text-sm font-medium text-brand-text-dark">
            Discipline / tack
          </label>
          <select
            id="hs-disc"
            value={discipline}
            onChange={(e) => setDiscipline(e.target.value as Discipline)}
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
          >
            {DISCIPLINES.map((d) => (
              <option key={d.value} value={d.value}>
                {d.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="hs-exp" className="mb-1 block text-sm font-medium text-brand-text-dark">
            Experience level
          </label>
          <select
            id="hs-exp"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
          >
            {EXPERIENCE.map((e) => (
              <option key={e.value} value={e.value}>
                {e.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {inputError && <ToolError>{inputError}</ToolError>}

      {/* Result */}
      {result && <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="rounded border border-brand-border bg-brand-surface p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-mid">
            Suggested horse weight range
          </p>
          <p className="mt-1 font-display text-3xl text-brand-text-dark">
            {result
              ? `${round(result.upperHorseLb).toLocaleString()}–${round(result.conservativeHorseLb).toLocaleString()} lb`
              : '—'}
          </p>
          <p className="mt-1 text-xs text-brand-text-mid">
            {result
              ? 'planning figure: rider + tack within about 15–20% of bodyweight'
              : 'Enter rider weight to estimate'}
          </p>
        </div>
        <div className="rounded border border-brand-border bg-brand-surface p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-mid">
            Approximate height band
          </p>
          <p className="mt-1 font-display text-lg text-brand-text-dark">
            {result ? result.heightBand : '—'}
          </p>
          <p className="mt-1 text-xs text-brand-text-mid">
            {result ? 'a rough height reference for that weight' : ''}
          </p>
        </div>
      </div>}

      {result && (
        <>
        <ResultMeaning>
          This range is the horse bodyweight that keeps rider plus tack near 15–20 percent, a welfare planning guide rather than a hard fitting rule.
        </ResultMeaning>
        <p className="mt-3 text-sm">
          <Link href="/guides/saddle-fit-basics" className="font-semibold text-brand-primary underline">
            Read saddle-fit basics
          </Link>
        </p>
        </>
      )}

      {result && (
        <div className="mt-4 rounded border border-brand-border bg-brand-surface p-4 text-sm text-brand-text-mid">
          <p>
            <strong className="text-brand-text-dark">How this was worked out.</strong> Rider weight{' '}
            {round(result.riderLb, 1).toLocaleString()} lb + tack {result.tackLb} lb ({discOption.label.split(' (')[0]}) ={' '}
            {round(result.combinedLb, 1).toLocaleString()} lb carried. Dividing by this planning figure
            (rider + tack within about 15–20% of bodyweight) gives a horse of roughly{' '}
            {round(result.upperHorseLb).toLocaleString()} lb at the 20% end up to{' '}
            {round(result.conservativeHorseLb).toLocaleString()} lb at the more conservative 15% end.
          </p>
          <p className="mt-2">{expOption.note}</p>
          {riderTall && (
            <p className="mt-2">
              At your height, also weigh <strong>leg length</strong>: a taller rider often looks and
              functions better on a horse toward the upper end of the height band, where the barrel fills
              the leg. Height affects fit and appearance, not the carrying-capacity math.
            </p>
          )}
        </div>
      )}

      {result && (
        <div className="mt-6 rounded-lg border border-brand-border bg-brand-surface p-5">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Next step
          </p>
          <p className="font-display text-base font-semibold leading-snug text-brand-text-dark">
            {discipline === 'western'
              ? 'Shop a Western saddle'
              : discipline === 'english'
                ? 'Shop an English saddle'
                : 'Shop an ASTM/SEI riding helmet'}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-brand-text-mid">
            {discipline === 'western' ? (
              <>
                The range is {round(result.upperHorseLb).toLocaleString()}–
                {round(result.conservativeHorseLb).toLocaleString()} lb
                ({result.heightBand}). A Western saddle is the heavier tack this
                calculator already added (~45 lb) — fit it to the horse, not the
                rider&rsquo;s preference alone.
              </>
            ) : discipline === 'english' ? (
              <>
                The range is {round(result.upperHorseLb).toLocaleString()}–
                {round(result.conservativeHorseLb).toLocaleString()} lb
                ({result.heightBand}). An English saddle is the lighter tack this
                calculator already added (~25 lb) — have a fitter check the tree
                against the horse you are looking at.
              </>
            ) : (
              <>
                The range is {round(result.upperHorseLb).toLocaleString()}–
                {round(result.conservativeHorseLb).toLocaleString()} lb
                ({result.heightBand}). Bareback adds no tack weight, but an
                ASTM/SEI riding helmet is still the safety baseline for every
                rider, every ride.
              </>
            )}
          </p>
          <HopDisclosure siteId="horses-com" href={["/go/amazon-brand/western+horse+saddle?s=tools-horse-size-for-rider", "/go/amazon-brand/english+horse+saddle?s=tools-horse-size-for-rider", "/go/amazon-brand/ASTM+SEI+horse+riding+helmet?s=tools-horse-size-for-rider"]} />
          <a
            href={
              discipline === 'western'
                ? '/go/amazon-brand/western+horse+saddle?s=tools-horse-size-for-rider'
                : discipline === 'english'
                  ? '/go/amazon-brand/english+horse+saddle?s=tools-horse-size-for-rider'
                  : '/go/amazon-brand/ASTM+SEI+horse+riding+helmet?s=tools-horse-size-for-rider'
            }
            rel="sponsored noopener"
            className="inline-block max-w-full whitespace-normal text-left rounded bg-brand-dark px-4 py-2.5 text-sm font-bold text-white no-underline"
          >
            {discipline === 'western'
              ? 'Browse Western saddles on Amazon →'
              : discipline === 'english'
                ? 'Browse English saddles on Amazon →'
                : 'Browse ASTM/SEI riding helmets on Amazon →'}
          </a>
        </div>
      )}

      <p className="mt-4 text-xs text-brand-text-mid">
        This is <strong>educational guidance</strong>, not a rule and not veterinary advice. The
        15&ndash;20% figure is a welfare <em>guideline</em>; a fit, well-conformed, sound horse may carry
        comfortably toward the upper end, while an unfit, young, old, or poorly-built horse may struggle
        below it. Bodyweight is only one factor &mdash; conformation, back strength, fitness, balance of
        the rider, and saddle fit all matter. Work with a riding instructor and assess the individual
        horse before deciding what it can carry.
      </p>
    </div>
  )
}
