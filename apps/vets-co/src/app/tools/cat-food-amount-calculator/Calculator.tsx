'use client'

import { useMemo, useState } from 'react'
import { ResultMeaning, ResultPick, ToolError, catFoodAmountPick, numberFieldError } from '@carloOS/ui'
import { CAT_STAGES, catFoodGrams } from './model'

type Unit = 'lb' | 'kg'

export default function CatFoodAmountCalculator() {
  const [weight, setWeight] = useState('10')
  const [unit, setUnit] = useState<Unit>('lb')
  const [stageIndex, setStageIndex] = useState(0)
  const [kcalPerKg, setKcalPerKg] = useState('3800')

  const weightError = numberFieldError(weight, 'weight', 1, unit === 'lb' ? 30 : 14, unit)
  const kcalError = numberFieldError(kcalPerKg, 'kcal per kg', 500, 7000, 'kcal/kg')
  const stage = CAT_STAGES[stageIndex]

  const result = useMemo(() => {
    if (weightError || kcalError) return null
    return catFoodGrams(Number(weight), unit, stage.factor, Number(kcalPerKg))
  }, [weight, unit, stage, kcalPerKg, weightError, kcalError])

  return (
    <form className="not-prose my-6 rounded-xl border border-brand-border bg-brand-surface p-5" onSubmit={(e) => e.preventDefault()}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-brand-dark">
          Weight
          <span className="mt-1 flex gap-2">
            <input className="min-h-11 w-full rounded-md border border-brand-border px-3" inputMode="decimal" value={weight} onChange={(e) => setWeight(e.target.value)} />
            <select className="min-h-11 rounded-md border border-brand-border px-2" value={unit} onChange={(e) => setUnit(e.target.value as Unit)}>
              <option value="lb">lb</option>
              <option value="kg">kg</option>
            </select>
          </span>
        </label>
        <label className="block text-sm font-semibold text-brand-dark">
          Life stage
          <select className="mt-1 min-h-11 w-full rounded-md border border-brand-border px-2" value={stageIndex} onChange={(e) => setStageIndex(Number(e.target.value))}>
            {CAT_STAGES.map((item, index) => (
              <option key={item.label} value={index}>{item.label} (×{item.factor})</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-semibold text-brand-dark sm:col-span-2">
          Food energy, kcal per kg (from the label)
          <input className="mt-1 min-h-11 w-full rounded-md border border-brand-border px-3" inputMode="decimal" value={kcalPerKg} onChange={(e) => setKcalPerKg(e.target.value)} />
        </label>
      </div>
      {(weightError || kcalError) && <ToolError>{weightError || kcalError}</ToolError>}
      {result ? (
        <div className="mt-4">
          <p className="m-0 text-2xl font-bold text-brand-dark">{Math.round(result.grams).toLocaleString('en-US')} g/day</p>
          <ResultMeaning>
            Resting energy is {Math.round(result.rer).toLocaleString('en-US')} kcal. This stage multiplies that by {stage.factor}. Grams are that energy divided by the label&apos;s kcal per kg. This is a portion estimate, not a diagnosis.
          </ResultMeaning>
          <ResultPick siteId="vets-co" pick={catFoodAmountPick(stage.label, result.grams)} />
        </div>
      ) : null}
    </form>
  )
}
