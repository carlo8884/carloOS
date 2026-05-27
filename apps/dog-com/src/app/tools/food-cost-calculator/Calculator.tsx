'use client'

import { useState, useMemo } from 'react'

// Resting Energy Requirement (kcal/day) per WSAVA / NRC 2006:
//   RER = 70 × (BWkg)^0.75
function calcRER(weightKg: number): number {
  if (weightKg <= 0) return 0
  return 70 * Math.pow(weightKg, 0.75)
}

// AAHA-published starting-point multipliers. Individual dogs vary; a
// body-condition score check confirms the estimate at 2-4 weeks.
const MER_FACTORS: Record<string, { label: string; factor: number; note: string }> = {
  puppy_4mo: { label: 'Puppy < 4 months', factor: 3.0, note: 'Rapid growth — high energy demand' },
  puppy_adult: { label: 'Puppy 4 mo to adult', factor: 2.0, note: 'Slowing growth, still elevated' },
  intact_adult: { label: 'Intact adult', factor: 1.8, note: 'Higher than neutered counterparts' },
  neutered_adult: { label: 'Neutered adult, average activity', factor: 1.6, note: 'Most common case' },
  inactive: { label: 'Adult, inactive / indoor only', factor: 1.4, note: 'Couch dog' },
  weight_loss: { label: 'Weight-loss program', factor: 1.0, note: 'Restricted; vet should supervise' },
  weight_gain: { label: 'Underweight / weight-gain', factor: 1.7, note: 'See vet to rule out medical cause' },
  active_working: { label: 'Active / working dog', factor: 2.5, note: 'Sport, herding, long daily exercise' },
  senior: { label: 'Senior (low activity)', factor: 1.4, note: '7+ years; metabolism slows' },
  pregnant: { label: 'Pregnant (last 3 weeks)', factor: 3.0, note: 'Final trimester surge' },
  lactating: { label: 'Lactating', factor: 4.0, note: 'Up to 8× RER with large litters' },
}

const KCAL_DENSITY_PRESETS = [
  { label: 'Standard dry kibble (≈360 kcal/cup)', kcalPerCup: 360 },
  { label: 'High-calorie dry (≈400 kcal/cup)', kcalPerCup: 400 },
  { label: 'Performance / sport (≈450 kcal/cup)', kcalPerCup: 450 },
  { label: 'Weight-control dry (≈320 kcal/cup)', kcalPerCup: 320 },
  { label: 'Light senior (≈300 kcal/cup)', kcalPerCup: 300 },
]

export function Calculator() {
  const [weight, setWeight] = useState<number>(20)
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lb'>('lb')
  const [lifestyle, setLifestyle] = useState<string>('neutered_adult')
  const [kcalPerCup, setKcalPerCup] = useState<number>(360)
  const [bagPrice, setBagPrice] = useState<number>(60)
  const [bagWeightLb, setBagWeightLb] = useState<number>(30)

  const result = useMemo(() => {
    const weightKg = weightUnit === 'kg' ? weight : weight / 2.2046
    const rer = calcRER(weightKg)
    const mer = rer * (MER_FACTORS[lifestyle]?.factor ?? 1.6)
    const cupsPerDay = kcalPerCup > 0 ? mer / kcalPerCup : 0
    const gramsPerCup = 110
    const cupsPerBag = (bagWeightLb * 453.592) / gramsPerCup
    const daysPerBag = cupsPerDay > 0 ? cupsPerBag / cupsPerDay : 0
    const monthlyCost = daysPerBag > 0 ? (30 / daysPerBag) * bagPrice : 0
    const annualCost = monthlyCost * 12
    return { rer, mer, cupsPerDay, daysPerBag, monthlyCost, annualCost }
  }, [weight, weightUnit, lifestyle, kcalPerCup, bagPrice, bagWeightLb])

  const lifestyleNote = MER_FACTORS[lifestyle]?.note ?? ''

  return (
    <section
      aria-labelledby="calculator-heading"
      className="bg-brand-surface border border-brand-border rounded-lg p-6 md:p-8 mb-10"
    >
      <h2 id="calculator-heading" className="sr-only">Calculator</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="dfc-weight">
            Dog&apos;s weight
          </label>
          <div className="flex gap-2">
            <input
              id="dfc-weight"
              type="number"
              min={1}
              step={0.5}
              value={weight}
              onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
              className="flex-1 px-3 py-2 border border-brand-border rounded"
              aria-label="Weight value"
            />
            <select
              value={weightUnit}
              onChange={(e) => setWeightUnit(e.target.value as 'kg' | 'lb')}
              className="px-3 py-2 border border-brand-border rounded"
              aria-label="Weight unit"
            >
              <option value="lb">lb</option>
              <option value="kg">kg</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="dfc-lifestyle">
            Life stage / activity
          </label>
          <select
            id="dfc-lifestyle"
            value={lifestyle}
            onChange={(e) => setLifestyle(e.target.value)}
            className="w-full px-3 py-2 border border-brand-border rounded"
          >
            {Object.entries(MER_FACTORS).map(([k, v]) => (
              <option key={k} value={k}>
                {v.label}
              </option>
            ))}
          </select>
          <p className="text-xs text-brand-text-light mt-1">{lifestyleNote}</p>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="dfc-kcal">
            Kcal per cup (from your bag)
          </label>
          <select
            id="dfc-kcal"
            value={kcalPerCup}
            onChange={(e) => setKcalPerCup(parseInt(e.target.value, 10))}
            className="w-full px-3 py-2 border border-brand-border rounded"
          >
            {KCAL_DENSITY_PRESETS.map((p) => (
              <option key={p.kcalPerCup} value={p.kcalPerCup}>
                {p.label}
              </option>
            ))}
          </select>
          <p className="text-xs text-brand-text-light mt-1">
            Always check the actual bag — kcal/cup ranges from ~280 to 500+.
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="dfc-price">
            Bag price (USD)
          </label>
          <input
            id="dfc-price"
            type="number"
            min={0}
            step={1}
            value={bagPrice}
            onChange={(e) => setBagPrice(parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-brand-border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="dfc-bagweight">
            Bag weight (lb)
          </label>
          <input
            id="dfc-bagweight"
            type="number"
            min={1}
            step={1}
            value={bagWeightLb}
            onChange={(e) => setBagWeightLb(parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-brand-border rounded"
          />
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-brand-border grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
        <Stat label="RER" value={`${result.rer.toFixed(0)} kcal/day`} />
        <Stat label="Daily intake (MER)" value={`${result.mer.toFixed(0)} kcal/day`} highlight />
        <Stat label="Cups per day" value={result.cupsPerDay.toFixed(2)} />
        <Stat label="≈ Monthly cost" value={`$${result.monthlyCost.toFixed(2)}`} highlight />
      </div>

      <p className="text-xs text-brand-text-light mt-4 text-center">
        Annual cost estimate: <strong>${result.annualCost.toFixed(0)}</strong> ·
        One bag lasts roughly {result.daysPerBag.toFixed(0)} days at this intake.
      </p>
    </section>
  )
}

function Stat({
  label,
  value,
  highlight = false,
}: {
  label: string
  value: string
  highlight?: boolean
}) {
  return (
    <div
      className={
        highlight
          ? 'bg-brand-primary/10 border border-brand-primary/30 rounded p-3'
          : 'border border-brand-border rounded p-3'
      }
    >
      <div className="text-xs uppercase tracking-wide text-brand-text-light">{label}</div>
      <div className="text-xl font-bold text-brand-text mt-1">{value}</div>
    </div>
  )
}
