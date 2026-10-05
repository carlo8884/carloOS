'use client'

/**
 * Cat Calorie Calculator -- /tools/cat-calorie-calculator
 * Client compute component. Implements WSAVA/AAHA-style feline RER/DER formulas.
 * RER = 70 * (weight_kg ^ 0.75)
 * DER = factor * RER
 * Feline factors (not dog MER): indoor vs outdoor, neuter status, life stage.
 * No fabricated breed-specific numbers; all factors are standard published values.
 */

import { useMemo, useState } from 'react'
import { AffiliateDisclosure, ResultMeaning, ToolError, numberFieldError } from '@carloOS/ui'

type Unit = 'lb' | 'kg'

interface LifeStageOption {
  label: string
  factor: number
}

const LIFE_STAGES: LifeStageOption[] = [
  { label: 'Neutered indoor adult', factor: 1.2 },
  { label: 'Intact indoor adult', factor: 1.4 },
  { label: 'Neutered outdoor / active', factor: 1.4 },
  { label: 'Intact outdoor / active', factor: 1.6 },
  { label: 'Weight loss (vet-supervised)', factor: 0.8 },
  { label: 'Weight gain', factor: 1.3 },
  { label: 'Kitten', factor: 2.5 },
  { label: 'Senior indoor', factor: 1.1 },
  { label: 'Obese-prone indoor', factor: 1.0 },
]

/** Typical adult weights by size class — starting points, not breed calorie tables. */
const SIZE_PRESETS: { label: string; lb: number | null }[] = [
  { label: 'Enter weight yourself', lb: null },
  { label: 'Small (typical ~8 lb)', lb: 8 },
  { label: 'Average indoor (typical ~10 lb)', lb: 10 },
  { label: 'Large (typical ~14 lb)', lb: 14 },
  { label: 'Giant / Maine Coon (typical ~18 lb)', lb: 18 },
]

interface Result {
  rer: number
  der: number
  cupsPerDay: number | null
}

function toKg(weight: number, unit: Unit): number {
  return unit === 'lb' ? weight / 2.2046 : weight
}

function compute(weightRaw: number, unit: Unit, factor: number, kcalPerCup: number | null): Result {
  const kg = toKg(Math.max(0.1, weightRaw), unit)
  const rer = 70 * Math.pow(kg, 0.75)
  const der = factor * rer
  const cupsPerDay = kcalPerCup && kcalPerCup > 0 ? der / kcalPerCup : null
  return { rer, der, cupsPerDay }
}

function kcal(n: number): string {
  return Math.round(n).toLocaleString('en-US') + ' kcal'
}

function catCalorieNext(stageLabel: string): { guideHref: string; guideLabel: string; hopHref: string; hopLabel: string } {
  if (stageLabel.startsWith('Weight loss') || stageLabel === 'Obese-prone indoor') {
    return {
      guideHref: '/tools/cat-body-condition-score',
      guideLabel: 'Score this cat before changing the portion',
      hopHref: '/go/amazon-brand/kitchen+gram+scale?s=tools-cat-calorie-calculator',
      hopLabel: 'Browse kitchen gram scales on Amazon →',
    }
  }
  if (stageLabel === 'Kitten') {
    return {
      guideHref: '/tools/cat-body-condition-score',
      guideLabel: 'Check the number against body condition',
      hopHref: '/go/amazon-brand/measured+cat+food?s=tools-cat-calorie-calculator',
      hopLabel: 'Browse measured cat food on Amazon →',
    }
  }
  return {
    guideHref: '/tools/cat-body-condition-score',
    guideLabel: 'Check the number against body condition',
    hopHref: '/go/amazon-brand/slow+feeder+cat+bowl?s=tools-cat-calorie-calculator',
    hopLabel: 'Browse slow-feeder cat bowls on Amazon →',
  }
}

export default function CatCalorieCalculator() {
  const [weight, setWeight] = useState<string>('10')
  const [unit, setUnit] = useState<Unit>('lb')
  const [stageIndex, setStageIndex] = useState<number>(0)
  const [sizeIndex, setSizeIndex] = useState<number>(0)
  const [kcalPerCupStr, setKcalPerCupStr] = useState<string>('')

  function applySizePreset(index: number) {
    setSizeIndex(index)
    const preset = SIZE_PRESETS[index]
    if (preset.lb == null) return
    if (unit === 'lb') {
      setWeight(String(preset.lb))
    } else {
      setWeight((preset.lb / 2.2046).toFixed(1))
    }
  }

  const weightMax = unit === 'lb' ? 40 : 18
  const weightError = numberFieldError(weight, 'body weight', 1, weightMax, unit)
  const kcalError = kcalPerCupStr.trim() === ''
    ? null
    : numberFieldError(kcalPerCupStr, 'kcal per cup', 1, 1000, 'kcal')
  const weightNum = weightError ? 0 : parseFloat(weight)
  const kcalPerCup = kcalError || kcalPerCupStr.trim() === '' ? null : parseFloat(kcalPerCupStr)
  const factor = LIFE_STAGES[stageIndex].factor

  const result = useMemo(
    () => compute(weightNum, unit, factor, kcalPerCup),
    [weightNum, unit, factor, kcalPerCup]
  )

  const weightOk = !weightError && weightNum > 0
  const isValid = weightOk && !kcalError
  const isWeightLoss = LIFE_STAGES[stageIndex].label.startsWith('Weight loss')
  const next = catCalorieNext(LIFE_STAGES[stageIndex].label)

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      {/* Inputs */}
      <div className="grid gap-5 md:grid-cols-2">
        {/* Size class — optional weight starter, not a breed calorie table */}
        <div className="md:col-span-2">
          <label htmlFor="cc-size" className="mb-1 block text-xs font-medium text-brand-text-mid">
            Size class <span className="font-normal text-brand-text-light">(optional starter)</span>
          </label>
          <select
            id="cc-size"
            value={sizeIndex}
            onChange={(e) => applySizePreset(Number(e.target.value))}
            className="w-full max-w-md rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
          >
            {SIZE_PRESETS.map((s, i) => (
              <option key={s.label} value={i}>
                {s.label}
              </option>
            ))}
          </select>
          <p className="mt-1 text-2xs text-brand-text-light">
            Fills a typical adult weight so you can start. Override with the scale weight — the
            formula does not use breed-specific calorie tables.
          </p>
        </div>

        {/* Weight */}
        <div>
          <label htmlFor="cc-weight" className="mb-1 block text-xs font-medium text-brand-text-mid">
            Body weight
          </label>
          <div className="flex gap-2">
            <input
              id="cc-weight"
              type="number"
              inputMode="decimal"
              min={0.1}
              max={weightMax}
              aria-invalid={weightError ? true : undefined}
              step={0.1}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
              placeholder="e.g. 10"
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
          {weightError ? (
            <ToolError>{weightError}</ToolError>
          ) : (
            <p className="mt-1 text-2xs text-brand-text-light">
              Use your cat&apos;s target or current healthy weight, as assessed by your veterinarian.
            </p>
          )}
        </div>

        {/* Life stage / neuter / indoor-outdoor factor */}
        <div>
          <label htmlFor="cc-stage" className="mb-1 block text-xs font-medium text-brand-text-mid">
            Life stage, neuter status &amp; lifestyle
          </label>
          <select
            id="cc-stage"
            value={stageIndex}
            onChange={(e) => setStageIndex(Number(e.target.value))}
            className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
          >
            {LIFE_STAGES.map((s, i) => (
              <option key={s.label} value={i}>
                {s.label} (factor {s.factor})
              </option>
            ))}
          </select>
          <p className="mt-1 text-2xs text-brand-text-light">
            Feline DER factors are WSAVA/AAHA-style published values — lower than dog MER.
          </p>
        </div>

        {/* Optional kcal/cup */}
        <div className="md:col-span-2">
          <label htmlFor="cc-kcal" className="mb-1 block text-xs font-medium text-brand-text-mid">
            Food energy density <span className="font-normal text-brand-text-light">(optional)</span>
          </label>
          <div className="flex items-center gap-2 max-w-xs">
            <input
              id="cc-kcal"
              type="number"
              inputMode="decimal"
              min={1}
              max={10000}
              step={1}
              value={kcalPerCupStr}
              onChange={(e) => setKcalPerCupStr(e.target.value)}
              className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
              placeholder="e.g. 350"
            />
            <span className="text-sm text-brand-text-light whitespace-nowrap">kcal / cup</span>
          </div>
          {kcalError ? (
            <ToolError>{kcalError}</ToolError>
          ) : (
            <p className="mt-1 text-2xs text-brand-text-light">
              Found on the food bag (usually listed as &quot;kcal/cup&quot; or &quot;ME kcal/cup&quot; in the calorie statement). Leave blank to skip the cups estimate.
            </p>
          )}
        </div>
      </div>

      {/* Results */}
      <div aria-live="polite" aria-atomic="true" className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 lg:grid-cols-4">
        <div className="rounded border border-brand-border bg-brand-white p-4">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light">Weight (kg)</p>
          <p className="mt-1 font-display text-xl text-brand-dark">
            {weightOk ? toKg(weightNum, unit).toFixed(2) : '--'}
          </p>
        </div>
        <div className="rounded border border-brand-border bg-brand-white p-4">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light">RER / day</p>
          <p className="mt-1 font-display text-xl text-brand-dark">{weightOk ? kcal(result.rer) : '--'}</p>
          <p className="mt-0.5 text-2xs text-brand-text-light">70 &times; kg^0.75</p>
        </div>
        <div className="rounded border-2 border-brand-primary bg-brand-primary-pale p-4">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">DER / day</p>
          <p className="mt-1 font-display text-xl text-brand-dark">{weightOk ? kcal(result.der) : '--'}</p>
          <p className="mt-0.5 text-2xs text-brand-text-light">{factor} &times; RER</p>
        </div>
        <div className="rounded border border-brand-border bg-brand-white p-4">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light">Cups / day</p>
          <p className="mt-1 font-display text-xl text-brand-dark">
            {isValid && result.cupsPerDay !== null
              ? result.cupsPerDay.toFixed(1) + ' cups'
              : '--'}
          </p>
          <p className="mt-0.5 text-2xs text-brand-text-light">DER &divide; kcal/cup</p>
        </div>
      </div>
      {weightOk && (
        <>
        <ResultMeaning>
          Daily energy is the maintenance estimate for this weight and life stage. It is a starting point, not a feeding prescription.
        </ResultMeaning>
        <div className="mt-4">
          <p className="m-0 text-sm">
            <a href={next.guideHref} className="font-semibold text-brand-primary underline underline-offset-2">
              {next.guideLabel} →
            </a>
          </p>
          <AffiliateDisclosure variant="inline" siteId="vets-co" className="my-3" />
          <a
            href={next.hopHref}
            rel="sponsored noopener"
            className="inline-block font-semibold text-brand-primary underline underline-offset-2"
          >
            {next.hopLabel}
          </a>
        </div>
        </>
      )}

      {/* Disclaimer */}
      <div className="mt-6 rounded border border-amber-700/40 bg-amber-950/20 p-4 text-sm text-amber-900">
        <span className="font-semibold">An estimate, not a prescription.</span>{' '}
        Energy needs vary widely by individual; confirm your cat&apos;s target weight and intake with your veterinarian.
        This calculator uses the standard RER formula (70 &times; kg^0.75) and WSAVA/AAHA-style feline DER factors.
        Treat the result as a starting point, then adjust based on body condition score and veterinary guidance.
        {isWeightLoss ? (
          <>
            {' '}
            <span className="font-semibold">Weight-loss (0.8 × RER) is vet-supervised only.</span>{' '}
            Rapid calorie cuts or fasting in an overweight cat can trigger hepatic lipidosis (fatty liver).
            Never crash-diet a cat.
          </>
        ) : null}
      </div>

      <p className="mt-4 text-xs text-brand-text-light">
        Formulas: RER (kcal/day) = 70 &times; (body weight in kg)^0.75. DER = feline life-stage factor × RER.
        Source: consistent with WSAVA Global Nutrition Guidelines and AAHA Nutritional Assessment Guidelines.
        Neutered indoor adults typically use 1.2; intact indoor 1.4; outdoor/active 1.4–1.6; kittens 2.5.
        Cups/day = DER ÷ food energy density (kcal/cup) from the bag&apos;s calorie statement.
      </p>
    </div>
  )
}
