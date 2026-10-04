'use client'

/**
 * Puppy First-Year Budget Calculator -- /tools/puppy-first-year-budget
 *
 * Client compute component. Turns adult size + acquisition path into a
 * first-year planning range (setup, food, vet, training). Defaults are
 * typical US retail starting points the owner can edit — not a quote,
 * not a survey, not a hands-on test.
 *
 * Product / planning guidance only — no clinical claims.
 */

import { useMemo, useState } from 'react'
import { ResultMeaning, ResultPick, ToolError, numberFieldError, puppyClassFoodPick } from '@carloOS/ui'

type Size = 'small' | 'medium' | 'large' | 'giant'
type Acquisition = 'adopted' | 'purchased' | 'already'

interface SizeBand {
  label: string
  weightHint: string
  crateAndGear: number
  monthlyFood: number
  firstYearVet: number
  trainingMisc: number
  acquisitionAdopt: number
  acquisitionPurchase: number
}

// Typical US retail starting points by expected adult size. Owners edit every
// line. Not a survey result and not a quote from any clinic or retailer.
const SIZE_DEFAULTS: Record<Size, SizeBand> = {
  small: {
    label: 'Small (under ~20 lb)',
    weightHint: 'toy / small breeds',
    crateAndGear: 180,
    monthlyFood: 35,
    firstYearVet: 400,
    trainingMisc: 150,
    acquisitionAdopt: 200,
    acquisitionPurchase: 800,
  },
  medium: {
    label: 'Medium (~20–50 lb)',
    weightHint: 'most companion breeds',
    crateAndGear: 250,
    monthlyFood: 50,
    firstYearVet: 500,
    trainingMisc: 200,
    acquisitionAdopt: 250,
    acquisitionPurchase: 1200,
  },
  large: {
    label: 'Large (~50–90 lb)',
    weightHint: 'Labs, Goldens, Shepherds',
    crateAndGear: 350,
    monthlyFood: 70,
    firstYearVet: 600,
    trainingMisc: 250,
    acquisitionAdopt: 300,
    acquisitionPurchase: 1500,
  },
  giant: {
    label: 'Giant (~90+ lb)',
    weightHint: 'Great Dane, Mastiff, Newf',
    crateAndGear: 450,
    monthlyFood: 95,
    firstYearVet: 700,
    trainingMisc: 300,
    acquisitionAdopt: 350,
    acquisitionPurchase: 1800,
  },
}

interface Result {
  crateAndGear: number
  foodYear: number
  firstYearVet: number
  trainingMisc: number
  acquisition: number
  firstYear: number
}

function acquisitionFee(band: SizeBand, path: Acquisition): number {
  if (path === 'adopted') return band.acquisitionAdopt
  if (path === 'purchased') return band.acquisitionPurchase
  return 0
}

function compute(band: SizeBand, path: Acquisition, overrides: Partial<Result> & { monthlyFood?: number }): Result {
  const crateAndGear = overrides.crateAndGear ?? band.crateAndGear
  const monthlyFood = overrides.monthlyFood ?? band.monthlyFood
  const firstYearVet = overrides.firstYearVet ?? band.firstYearVet
  const trainingMisc = overrides.trainingMisc ?? band.trainingMisc
  const acquisition = overrides.acquisition ?? acquisitionFee(band, path)
  const foodYear = monthlyFood * 12
  const firstYear = crateAndGear + foodYear + firstYearVet + trainingMisc + acquisition
  return { crateAndGear, foodYear, firstYearVet, trainingMisc, acquisition, firstYear }
}

function dollars(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

const MONEY_MAX = 20000

export default function PuppyFirstYearBudget() {
  const [size, setSize] = useState<Size>('medium')
  const [path, setPath] = useState<Acquisition>('adopted')
  const [crateText, setCrateText] = useState('250')
  const [foodText, setFoodText] = useState('50')
  const [vetText, setVetText] = useState('500')
  const [trainingText, setTrainingText] = useState('200')
  const [acquisitionText, setAcquisitionText] = useState('250')

  const band = SIZE_DEFAULTS[size]
  const crateError = numberFieldError(crateText, 'crate and gear cost', 0, MONEY_MAX)
  const foodError = numberFieldError(foodText, 'monthly food cost', 0, MONEY_MAX)
  const vetError = numberFieldError(vetText, 'first-year vet cost', 0, MONEY_MAX)
  const trainingError = numberFieldError(trainingText, 'training and miscellaneous cost', 0, MONEY_MAX)
  const acquisitionError = numberFieldError(acquisitionText, 'acquisition fee', 0, MONEY_MAX)
  const inputError = crateError || foodError || vetError || trainingError || acquisitionError
  const result = useMemo(() => {
    if (inputError) return null
    return compute(band, path, {
      crateAndGear: Number(crateText),
      monthlyFood: Number(foodText),
      firstYearVet: Number(vetText),
      trainingMisc: Number(trainingText),
      acquisition: Number(acquisitionText),
    })
  }, [band, path, crateText, foodText, vetText, trainingText, acquisitionText, inputError])

  function onSize(next: Size) {
    const nextBand = SIZE_DEFAULTS[next]
    setSize(next)
    setCrateText(String(nextBand.crateAndGear))
    setFoodText(String(nextBand.monthlyFood))
    setVetText(String(nextBand.firstYearVet))
    setTrainingText(String(nextBand.trainingMisc))
    setAcquisitionText(String(acquisitionFee(nextBand, path)))
  }

  function onPath(next: Acquisition) {
    setPath(next)
    setAcquisitionText(String(acquisitionFee(SIZE_DEFAULTS[size], next)))
  }

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <p className="mb-2 text-xs font-medium text-brand-text-mid">Expected adult size</p>
          <div className="grid grid-cols-2 gap-2">
            {(Object.keys(SIZE_DEFAULTS) as Size[]).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => onSize(s)}
                className={[
                  'rounded border px-3 py-2 text-left text-sm font-semibold transition-colors',
                  size === s
                    ? 'border-brand-primary bg-brand-primary text-white'
                    : 'border-brand-border bg-brand-white text-brand-text-mid hover:bg-brand-surface',
                ].join(' ')}
              >
                {SIZE_DEFAULTS[s].label}
              </button>
            ))}
          </div>
          <p className="mt-1 text-2xs text-brand-text-light leading-snug">{band.weightHint}</p>
        </div>
        <div>
          <p className="mb-2 text-xs font-medium text-brand-text-mid">How the puppy arrives</p>
          <div className="flex rounded border border-brand-border overflow-hidden">
            {(
              [
                ['adopted', 'Adopted'],
                ['purchased', 'Purchased'],
                ['already', 'Already home'],
              ] as [Acquisition, string][]
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => onPath(value)}
                className={[
                  'flex-1 py-2 text-sm font-semibold transition-colors',
                  path === value
                    ? 'bg-brand-primary text-white'
                    : 'bg-brand-white text-brand-text-mid hover:bg-brand-surface',
                ].join(' ')}
              >
                {label}
              </button>
            ))}
          </div>
          <p className="mt-1 text-2xs text-brand-text-light leading-snug">
            Adoption and purchase fees vary widely — edit the line below to match your receipt.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <NumberField
          id="pb-crate"
          label="Crate, bowls, leash, bed (one-time)"
          value={crateText}
          onChange={setCrateText}
          error={crateError}
        />
        <NumberField
          id="pb-food"
          label="Food per month"
          value={foodText}
          onChange={setFoodText}
          error={foodError}
        />
        <NumberField
          id="pb-vet"
          label="First-year vet (vaccines, spay/neuter, preventives)"
          value={vetText}
          onChange={setVetText}
          error={vetError}
        />
        <NumberField
          id="pb-train"
          label="Training, toys, miscellaneous"
          value={trainingText}
          onChange={setTrainingText}
          error={trainingError}
        />
        <NumberField
          id="pb-acq"
          label={path === 'already' ? 'Acquisition (set to 0 if already home)' : 'Adoption or purchase fee'}
          value={acquisitionText}
          onChange={setAcquisitionText}
          error={acquisitionError}
        />
      </div>

      {result && (
      <div className="mt-8 rounded-lg border border-brand-border bg-brand-white p-5 sm:p-6">
        <p className="text-2xs uppercase tracking-wide text-brand-text-light">First-year planning total</p>
        <p className="mt-1 font-display text-3xl font-bold text-brand-primary">{dollars(result.firstYear)}</p>
        <p className="mt-2 text-sm leading-relaxed text-brand-text-mid">
          Setup {dollars(result.crateAndGear)} + food {dollars(result.foodYear)} + vet {dollars(result.firstYearVet)}{' '}
          + training {dollars(result.trainingMisc)} + arrival {dollars(result.acquisition)}. Edit any line — these are
          starting points, not a quote.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div>
            <p className="text-2xs uppercase tracking-wide text-brand-text-light">Food (12 months)</p>
            <p className="font-display text-xl font-semibold text-brand-dark">{dollars(result.foodYear)}</p>
          </div>
          <div>
            <p className="text-2xs uppercase tracking-wide text-brand-text-light">One-time gear</p>
            <p className="font-display text-xl font-semibold text-brand-dark">{dollars(result.crateAndGear)}</p>
          </div>
        </div>
        <ResultMeaning>
          That total adds the gear, food, vet, training, and arrival lines you entered, and it is a planning figure rather than a quote.
        </ResultMeaning>
        <ResultPick siteId="dog-com" pick={puppyClassFoodPick(size, 'tools-puppy-first-year-budget')} />
      </div>
      )}

      <p className="mt-5 text-sm leading-relaxed text-brand-text-mid">
        The crate is usually the largest gear line. Size it to the adult dog and use a divider — the{' '}
        <a href="/tools/dog-crate-size-calculator" className="text-brand-primary underline-offset-2 hover:underline">
          crate size calculator
        </a>{' '}
        gives the length. Same Amazon crate hop as the new-puppy checklist.
      </p>

      <p className="mt-5 text-2xs leading-snug text-brand-text-light">
        Planning ranges only. Vet fees, food, and adoption costs vary by region and the individual dog. Confirm
        vaccines, spay/neuter timing, and parasite prevention with your veterinarian.
      </p>
    </div>
  )
}

function NumberField({
  id,
  label,
  value,
  onChange,
  error,
}: {
  id: string
  label: string
  value: string
  onChange: (raw: string) => void
  error: string | null
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-xs font-medium text-brand-text-mid">
        {label}
      </label>
      <div className="flex items-center gap-1">
        <span className="text-sm text-brand-text-light">$</span>
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={0}
          max={MONEY_MAX}
          step={5}
          value={value}
          aria-invalid={error ? true : undefined}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-text-dark"
        />
      </div>
      {error ? <ToolError>{error}</ToolError> : null}
    </div>
  )
}
