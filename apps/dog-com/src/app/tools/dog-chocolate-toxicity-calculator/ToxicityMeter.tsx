'use client'

/**
 * Dog Chocolate Toxicity Meter -- /tools/dog-chocolate-toxicity-calculator
 *
 * EDUCATIONAL exposure estimator, NOT a diagnosis tool. It computes an
 * approximate theobromine dose (mg per kg body weight) from published
 * theobromine concentrations by chocolate type, then maps that dose to
 * standard veterinary-toxicology risk tiers.
 *
 * CRITICAL (QC §1): every result -- including the lowest tier -- tells the
 * owner to call their vet or a poison-control hotline RIGHT NOW. The tool
 * NEVER says "wait and see", never diagnoses, never gives treatment
 * instructions. Its only job is to help the owner give the vet useful numbers.
 */

import { useMemo, useState } from 'react'

type WeightUnit = 'lb' | 'kg'
type AmountUnit = 'oz' | 'g'

interface ChocolateType {
  key: string
  label: string
  /** Approximate theobromine content, mg per ounce. Published veterinary refs. */
  mgPerOz: number
  note: string
}

// Theobromine concentrations from standard veterinary toxicology references
// (VCA, Merck Vet Manual, ASPCA APCC). Values are approximate averages; real
// products vary by cocoa percentage and recipe.
const CHOCOLATE_TYPES: ChocolateType[] = [
  { key: 'white', label: 'White chocolate', mgPerOz: 0.25, note: 'Negligible theobromine — but fat/sugar can still cause GI upset or pancreatitis.' },
  { key: 'milk', label: 'Milk chocolate', mgPerOz: 58, note: 'Most candy bars and milk-chocolate chips.' },
  { key: 'semisweet', label: 'Semisweet / dark chocolate chips', mgPerOz: 150, note: 'Chocolate chips and most dark bars.' },
  { key: 'dark', label: 'Dark chocolate (high cocoa)', mgPerOz: 228, note: 'Higher-cocoa dark bars (60–85%).' },
  { key: 'baking', label: 'Unsweetened baking chocolate', mgPerOz: 390, note: 'Baker\'s squares — among the most dangerous.' },
  { key: 'cocoa', label: 'Dry cocoa powder', mgPerOz: 737, note: 'Unsweetened cocoa powder — the most concentrated common form.' },
]

const OZ_PER_GRAM = 1 / 28.3495

interface Tier {
  key: 'minimal' | 'mild' | 'moderate' | 'severe'
  label: string
  accent: string
  bg: string
  border: string
  summary: string
}

// Standard veterinary-toxicology dose bands (theobromine, mg/kg body weight).
// Sources: Merck Vet Manual, VCA, ASPCA APCC. Presented as ranges, not a
// diagnosis.
const TIERS: Record<Tier['key'], Tier> = {
  minimal: {
    key: 'minimal',
    label: 'Below the common signs threshold',
    accent: '#5A5A5A',
    bg: 'rgba(120,120,120,0.07)',
    border: 'rgba(120,120,120,0.35)',
    summary:
      'The estimated dose is below the level (~20 mg/kg) at which signs are commonly reported. That does NOT mean it is safe — small dogs, repeat exposures, and individual sensitivity matter, and fat and sugar can still cause GI upset.',
  },
  mild: {
    key: 'mild',
    label: 'Mild / GI signs possible (~20–40 mg/kg)',
    accent: '#C8952A',
    bg: 'rgba(200,149,42,0.08)',
    border: 'rgba(200,149,42,0.40)',
    summary:
      'At roughly 20–40 mg/kg, vomiting, diarrhoea, restlessness, and increased thirst are commonly reported in veterinary references.',
  },
  moderate: {
    key: 'moderate',
    label: 'Cardiac signs possible (~40–60 mg/kg)',
    accent: '#C8702A',
    bg: 'rgba(200,112,42,0.09)',
    border: 'rgba(200,112,42,0.45)',
    summary:
      'At roughly 40–60 mg/kg, cardiac signs such as a racing or irregular heartbeat become possible in addition to GI signs.',
  },
  severe: {
    key: 'severe',
    label: 'Severe / seizure risk (over ~60 mg/kg)',
    accent: '#C84A2A',
    bg: 'rgba(200,74,42,0.10)',
    border: 'rgba(200,74,42,0.50)',
    summary:
      'Above roughly 60 mg/kg, severe signs including tremors and seizures are described in veterinary toxicology references. This is a level associated with emergency care.',
  },
}

function tierFor(mgPerKg: number): Tier {
  if (mgPerKg >= 60) return TIERS.severe
  if (mgPerKg >= 40) return TIERS.moderate
  if (mgPerKg >= 20) return TIERS.mild
  return TIERS.minimal
}

interface Result {
  totalMg: number
  mgPerKg: number
  tier: Tier
  kg: number
}

function compute(
  type: ChocolateType,
  amount: number,
  amountUnit: AmountUnit,
  weight: number,
  weightUnit: WeightUnit
): Result {
  const oz = amountUnit === 'g' ? amount * OZ_PER_GRAM : amount
  const kg = weightUnit === 'lb' ? weight / 2.2046 : weight
  const totalMg = type.mgPerOz * oz
  const mgPerKg = kg > 0 ? totalMg / kg : 0
  return { totalMg, mgPerKg, tier: tierFor(mgPerKg), kg }
}

const ASPCA = '888-426-4435'
const PPH = '855-764-7661'

export default function ChocolateToxicityMeter() {
  const [typeIndex, setTypeIndex] = useState<number>(1) // milk chocolate default
  const [amount, setAmount] = useState<string>('2')
  const [amountUnit, setAmountUnit] = useState<AmountUnit>('oz')
  const [weight, setWeight] = useState<string>('30')
  const [weightUnit, setWeightUnit] = useState<WeightUnit>('lb')

  const amountNum = parseFloat(amount) || 0
  const weightNum = parseFloat(weight) || 0
  const type = CHOCOLATE_TYPES[typeIndex]
  const isValid = amountNum > 0 && weightNum > 0

  const result = useMemo(
    () => (isValid ? compute(type, amountNum, amountUnit, weightNum, weightUnit) : null),
    [isValid, type, amountNum, amountUnit, weightNum, weightUnit]
  )

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      {/* Inputs */}
      <div className="grid gap-5 md:grid-cols-2">
        {/* Chocolate type */}
        <div className="md:col-span-2">
          <label htmlFor="ct-type" className="mb-1 block text-xs font-medium text-brand-text-mid">
            Type of chocolate eaten
          </label>
          <select
            id="ct-type"
            value={typeIndex}
            onChange={(e) => setTypeIndex(Number(e.target.value))}
            className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
          >
            {CHOCOLATE_TYPES.map((t, i) => (
              <option key={t.key} value={i}>
                {t.label}
              </option>
            ))}
          </select>
          <p className="mt-1 text-2xs text-brand-text-light">{type.note}</p>
        </div>

        {/* Amount eaten */}
        <div>
          <label htmlFor="ct-amount" className="mb-1 block text-xs font-medium text-brand-text-mid">
            Amount eaten
          </label>
          <div className="flex gap-2">
            <input
              id="ct-amount"
              type="number"
              inputMode="decimal"
              min={0.01}
              max={1000}
              step={0.1}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
              placeholder="e.g. 2"
            />
            <div className="flex rounded border border-brand-border overflow-hidden text-sm">
              {(['oz', 'g'] as AmountUnit[]).map((u) => (
                <button
                  key={u}
                  type="button"
                  onClick={() => setAmountUnit(u)}
                  aria-pressed={amountUnit === u}
                  className={[
                    'px-3 py-2 font-medium transition-colors',
                    amountUnit === u
                      ? 'bg-brand-primary text-brand-white'
                      : 'bg-brand-white text-brand-text-mid hover:bg-brand-surface',
                  ].join(' ')}
                >
                  {u}
                </button>
              ))}
            </div>
          </div>
          <p className="mt-1 text-2xs text-brand-text-light">
            A standard chocolate bar is roughly 1.5 oz (43 g). Estimate generously if unsure.
          </p>
        </div>

        {/* Dog weight */}
        <div>
          <label htmlFor="ct-weight" className="mb-1 block text-xs font-medium text-brand-text-mid">
            Dog body weight
          </label>
          <div className="flex gap-2">
            <input
              id="ct-weight"
              type="number"
              inputMode="decimal"
              min={0.5}
              max={300}
              step={0.1}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
              placeholder="e.g. 30"
            />
            <div className="flex rounded border border-brand-border overflow-hidden text-sm">
              {(['lb', 'kg'] as WeightUnit[]).map((u) => (
                <button
                  key={u}
                  type="button"
                  onClick={() => setWeightUnit(u)}
                  aria-pressed={weightUnit === u}
                  className={[
                    'px-3 py-2 font-medium transition-colors',
                    weightUnit === u
                      ? 'bg-brand-primary text-brand-white'
                      : 'bg-brand-white text-brand-text-mid hover:bg-brand-surface',
                  ].join(' ')}
                >
                  {u}
                </button>
              ))}
            </div>
          </div>
          <p className="mt-1 text-2xs text-brand-text-light">Use your dog&apos;s actual current weight.</p>
        </div>
      </div>

      {/* CALL-THE-VET BANNER — renders above the estimate on EVERY state, before any number. */}
      <div
        role="alert"
        className="mt-6 rounded-xl p-5"
        style={{ background: 'rgba(200,74,42,0.07)', border: '2px solid rgba(200,74,42,0.45)' }}
      >
        <div className="text-2xs font-bold tracking-eyebrow uppercase mb-2" style={{ color: '#C84A2A' }}>
          Call now — do not wait for this estimate
        </div>
        <p className="text-sm text-brand-dark leading-relaxed m-0">
          If your dog ate chocolate, <strong>call your veterinarian or the ASPCA Animal Poison Control
          Center ({ASPCA}) or the Pet Poison Helpline ({PPH}) right now.</strong> This tool only
          estimates the exposure so you can give them useful numbers. It is educational and does not
          replace professional advice. Do not wait for symptoms to appear.
        </p>
      </div>

      {/* Results */}
      <div aria-live="polite" aria-atomic="true" className="mt-4">
        {!isValid && (
          <div className="rounded border border-brand-border bg-brand-white p-5 text-sm text-brand-text-mid">
            Enter the chocolate type, amount eaten, and your dog&apos;s weight to estimate the theobromine
            exposure to read to your vet or poison-control line.
          </div>
        )}

        {isValid && result && (
          <div
            className="rounded-xl p-5 sm:p-6"
            style={{ background: result.tier.bg, border: `2px solid ${result.tier.border}` }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div className="rounded border border-brand-border bg-brand-white p-4">
                <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light">
                  Estimated theobromine dose
                </p>
                <p className="mt-1 font-display text-2xl text-brand-dark">
                  {result.mgPerKg.toFixed(1)} mg/kg
                </p>
                <p className="mt-0.5 text-2xs text-brand-text-light">
                  {Math.round(result.totalMg).toLocaleString('en-US')} mg total ÷ {result.kg.toFixed(1)} kg
                </p>
              </div>
              <div className="rounded border-2 p-4" style={{ borderColor: result.tier.border, background: '#fff' }}>
                <p className="text-2xs font-bold uppercase tracking-eyebrow" style={{ color: result.tier.accent }}>
                  Risk tier (educational)
                </p>
                <p className="mt-1 font-display text-base font-bold" style={{ color: result.tier.accent }}>
                  {result.tier.label}
                </p>
              </div>
            </div>

            <p className="text-sm text-brand-text-mid leading-relaxed mb-4">{result.tier.summary}</p>

            {/* Call-to-action repeated on the result itself, EVERY tier */}
            <div className="rounded-lg bg-brand-white border border-brand-border p-4">
              <p className="text-sm font-semibold text-brand-dark leading-relaxed m-0 mb-2">
                Read this estimate to your vet or a poison-control line now:
              </p>
              <ul className="list-none p-0 m-0 grid gap-1 text-sm text-brand-text-mid">
                <li>
                  ASPCA Animal Poison Control:{' '}
                  <span className="font-bold text-brand-dark">{ASPCA}</span> (24/7, a consultation fee applies)
                </li>
                <li>
                  Pet Poison Helpline:{' '}
                  <span className="font-bold text-brand-dark">{PPH}</span> (24/7, a consultation fee applies)
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Persistent not-a-diagnosis note */}
      <div className="mt-4 rounded-lg border border-brand-border bg-brand-white p-4">
        <p className="text-xs text-brand-text-light leading-relaxed m-0">
          <span className="font-semibold text-brand-text-mid">Not a diagnosis.</span> This estimate uses
          average published theobromine concentrations and standard veterinary dose bands. Real products
          vary, caffeine adds to the toxic load, and individual dogs differ — only a veterinarian can
          assess your dog. The thresholds shown are general veterinary-toxicology ranges, not a safe
          limit. When in doubt, call.
        </p>
      </div>
    </div>
  )
}
