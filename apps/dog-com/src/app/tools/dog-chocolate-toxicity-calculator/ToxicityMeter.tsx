'use client'

import { HopDisclosure } from '../../../components/HopDisclosure'
import Link from 'next/link'
/**
 * Dog Chocolate Toxicity Meter -- /tools/dog-chocolate-toxicity-calculator
 *
 * EDUCATIONAL exposure estimator, NOT a diagnosis tool. It computes an
 * approximate methylxanthine dose (theobromine plus caffeine, mg per kg)
 * from the Merck Veterinary Manual table, then maps that dose to the
 * sign thresholds on the same page. One dark-chocolate row is a planning
 * concentration because Merck does not list it.
 *
 * CRITICAL (QC §1): every result -- including the lowest tier -- tells the
 * owner to call their vet or a poison-control hotline RIGHT NOW. The tool
 * NEVER says "wait and see", never diagnoses, never gives treatment
 * instructions. Its only job is to help the owner give the vet useful numbers.
 */

import { useMemo, useState } from 'react'
import { ResultMeaning, ToolError, numberFieldError } from '@carloOS/ui'

type WeightUnit = 'lb' | 'kg'
type AmountUnit = 'oz' | 'g'

interface ChocolateType {
  key: string
  label: string
  /** Methylxanthines, mg per ounce, or a planning figure when Merck has no row. */
  mgPerOz: number
  /** True when mgPerOz is not a Merck table value. */
  planning: boolean
  note: string
}

// Merck Veterinary Manual, Chocolate Toxicosis in Animals:
// https://www.merckvetmanual.com/toxicology/food-hazards/chocolate-toxicosis-in-animals
// Methylxanthines (theobromine + caffeine), not theobromine alone.
// White 1.1 mg/oz (0.04 mg/g). Milk 64 mg/oz (2.3 mg/g).
// Semisweet and sweet dark 150–160 mg/oz (5.3–5.6 mg/g); this meter uses 160, the top of that range.
// Baker's unsweetened 440 mg/oz (15.5 mg/g). Cocoa powder 807 mg/oz (28.5 mg/g).
// High-cocoa dark at 228 mg/oz is not in that table.
const CHOCOLATE_TYPES: ChocolateType[] = [
  { key: 'white', label: 'White chocolate', mgPerOz: 1.1, planning: false, note: 'Merck lists 1.1 mg of methylxanthines per ounce and calls white chocolate a negligible source. Fat and sugar can still upset the gut.' },
  { key: 'milk', label: 'Milk chocolate', mgPerOz: 64, planning: false, note: 'Merck lists 64 mg of methylxanthines per ounce (2.3 mg/g).' },
  { key: 'semisweet', label: 'Semisweet and sweet dark chocolate', mgPerOz: 160, planning: false, note: 'Merck lists 150–160 mg/oz. This meter uses 160, the top of that range.' },
  { key: 'dark', label: 'Dark chocolate (high cocoa)', mgPerOz: 228, planning: true, note: 'Planning figure: 228 mg/oz is not in the Merck table. Use semisweet and sweet dark when you want the published range.' },
  { key: 'baking', label: 'Unsweetened baking chocolate', mgPerOz: 440, planning: false, note: 'Merck lists 440 mg of methylxanthines per ounce (15.5 mg/g) for unsweetened baker\'s chocolate.' },
  { key: 'cocoa', label: 'Dry cocoa powder', mgPerOz: 807, planning: false, note: 'Merck lists 807 mg of methylxanthines per ounce (28.5 mg/g) for cocoa powder.' },
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

// Merck Veterinary Manual sign thresholds for methylxanthines in dogs:
// mild signs may occur at 20 mg/kg; cardiotoxic effects at 40–50 mg/kg;
// seizures at doses of 60 mg/kg or more. This meter starts the cardiac band
// at 40 mg/kg and the severe band at 60 mg/kg. The gap from 50 to 60 is not
// a separate published tier.
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
    label: 'Mild signs possible (Merck: 20 mg/kg)',
    accent: '#C8952A',
    bg: 'rgba(200,149,42,0.08)',
    border: 'rgba(200,149,42,0.40)',
    summary:
      'Merck says mild signs may occur at 20 mg/kg of methylxanthines. That band on this meter runs until the 40 mg/kg cardiotoxic threshold.',
  },
  moderate: {
    key: 'moderate',
    label: 'Cardiotoxic effects (Merck: 40–50 mg/kg)',
    accent: '#C8702A',
    bg: 'rgba(200,112,42,0.09)',
    border: 'rgba(200,112,42,0.45)',
    summary:
      'Merck describes cardiotoxic effects at 40–50 mg/kg. This meter starts that band at 40 mg/kg and holds it until the 60 mg/kg seizure threshold. 50–60 mg/kg is not a separate published tier.',
  },
  severe: {
    key: 'severe',
    label: 'Seizure risk (Merck: 60 mg/kg or more)',
    accent: '#C84A2A',
    bg: 'rgba(200,74,42,0.10)',
    border: 'rgba(200,74,42,0.50)',
    summary:
      'Merck describes seizures at 60 mg/kg or more of methylxanthines. This is a level associated with emergency care.',
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
const SHOP_SOURCE = 'tools-chocolate-toxicity'

function resultShop(tier: Tier['key']): {
  heading: string
  blurb: string
  href: string
  label: string
} {
  switch (tier) {
    case 'severe':
      return {
        heading: 'Pack a pet first-aid kit for the clinic ride',
        blurb:
          'This estimate is in the severe range. Call your veterinarian or a poison-control hotline first. A pet first-aid kit belongs in the car for the trip — it does not treat chocolate poisoning.',
        href: `/go/amazon-brand/pet+first+aid+kit+dog?s=${SHOP_SOURCE}`,
        label: 'Browse pet first-aid kits on Amazon →',
      }
    case 'moderate':
      return {
        heading: 'Pack a pet emergency kit for the clinic ride',
        blurb:
          'Cardiac signs are possible at this dose. Call your veterinarian or a poison-control hotline first. A pet emergency kit is for the ride to the clinic — it does not treat chocolate poisoning.',
        href: `/go/amazon-brand/pet+emergency+kit+dog+toxin?s=${SHOP_SOURCE}`,
        label: 'Browse pet emergency / toxin kits on Amazon →',
      }
    case 'mild':
      return {
        heading: 'Keep a pet first-aid kit after you call',
        blurb:
          'GI signs are possible. Call poison control now even if your dog looks fine. A pet first-aid kit is a cabinet item after that call — not a treatment for chocolate poisoning.',
        href: `/go/amazon-brand/pet+first+aid+kit+dog?s=${SHOP_SOURCE}`,
        label: 'Browse pet first-aid kits on Amazon →',
      }
    default:
      return {
        heading: 'A crate for quiet rest while you wait on poison control',
        blurb:
          'The estimate is below the common-signs threshold — still call. A crate can keep a nauseous dog contained and quiet while you follow poison-control instructions. It does not treat chocolate poisoning.',
        href: `/go/amazon-brand/dog+crate+for+recovery?s=${SHOP_SOURCE}`,
        label: 'Browse recovery crates on Amazon →',
      }
  }
}

export default function ChocolateToxicityMeter() {
  const [typeIndex, setTypeIndex] = useState<number>(1) // milk chocolate default
  const [amount, setAmount] = useState<string>('2')
  const [amountUnit, setAmountUnit] = useState<AmountUnit>('oz')
  const [weight, setWeight] = useState<string>('30')
  const [weightUnit, setWeightUnit] = useState<WeightUnit>('lb')

  const type = CHOCOLATE_TYPES[typeIndex]
  const amountMax = amountUnit === 'g' ? 28000 : 1000
  const weightMax = weightUnit === 'lb' ? 250 : 113
  const amountError = numberFieldError(amount, 'chocolate amount', 0.1, amountMax, amountUnit)
  const weightError = numberFieldError(weight, 'body weight', 0.5, weightMax, weightUnit)

  const result = useMemo(() => {
    if (amountError || weightError) return null
    return compute(type, Number(amount), amountUnit, Number(weight), weightUnit)
  }, [amountError, weightError, type, amount, amountUnit, weight, weightUnit])
  const shop = result ? resultShop(result.tier.key) : null

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
              min={0.1}
              max={amountMax}
              step={0.1}
              value={amount}
              aria-invalid={amountError ? true : undefined}
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
          {amountError ? (
            <ToolError>{amountError}</ToolError>
          ) : (
            <p className="mt-1 text-2xs text-brand-text-light">
              A standard chocolate bar is roughly 1.5 oz (43 g). Estimate generously if unsure.
            </p>
          )}
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
              max={weightMax}
              step={0.1}
              value={weight}
              aria-invalid={weightError ? true : undefined}
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
          {weightError ? (
            <ToolError>{weightError}</ToolError>
          ) : (
            <p className="mt-1 text-2xs text-brand-text-light">Use your dog&apos;s actual current weight.</p>
          )}
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
        {result && (
          <div
            className="rounded-xl p-5 sm:p-6"
            style={{ background: result.tier.bg, border: `2px solid ${result.tier.border}` }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div className="rounded border border-brand-border bg-brand-white p-4">
                <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light">
                  Estimated methylxanthine dose
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
            <ResultMeaning>
              That mg/kg figure is an educational methylxanthine estimate (theobromine plus caffeine) from the chocolate type and amount, not a diagnosis.
            </ResultMeaning>
            <p className="mt-3 text-sm">
              <Link href="/health/dog-symptoms-guide" className="font-semibold text-brand-primary underline">
                Read the dog symptoms guide
              </Link>
            </p>

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

      {shop && (
        <div className="mt-6 rounded-lg border border-brand-border bg-brand-white p-5">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Next step
          </p>
          <p className="font-display text-base font-semibold leading-snug text-brand-text-dark">
            {shop.heading}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-brand-text-mid">{shop.blurb}</p>
          <HopDisclosure siteId="dog-com" href={shop.href} />
          <a
            href={shop.href}
            rel="sponsored noopener"
            className="inline-block max-w-full whitespace-normal text-left rounded bg-brand-dark px-4 py-2.5 text-sm font-bold text-white no-underline"
          >
            {shop.label}
          </a>
        </div>
      )}

      {/* Persistent not-a-diagnosis note */}
      <div className="mt-4 rounded-lg border border-brand-border bg-brand-white p-4">
        <p className="text-xs text-brand-text-light leading-relaxed m-0">
          <span className="font-semibold text-brand-text-mid">How we calculate.</span> Concentrations and
          sign thresholds are the methylxanthine figures on the Merck Veterinary Manual chocolate page:
          white 1.1, milk 64, semisweet and sweet dark 160 (the top of 150–160), baker&apos;s chocolate 440,
          and cocoa powder 807 mg per ounce. Mild signs from 20 mg/kg, cardiotoxic effects from 40 mg/kg,
          seizures from 60 mg/kg. The high-cocoa dark row at 228 mg/oz is a planning figure; Merck does not
          list it. Real products vary. This is not a diagnosis. When in doubt, call.
        </p>
      </div>
    </div>
  )
}
