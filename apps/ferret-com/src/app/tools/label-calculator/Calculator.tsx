'use client'

import { useMemo, useState } from 'react'
import { ResultMeaning, ResultPick, ToolError, ferretLabelPick, numberFieldError } from '@carloOS/ui'
import { labelMath } from './model'

export default function LabelCalculator() {
  const [protein, setProtein] = useState('36')
  const [fat, setFat] = useState('18')
  const [fiber, setFiber] = useState('3')
  const [moisture, setMoisture] = useState('10')
  const [ash, setAsh] = useState('')
  const proteinError = numberFieldError(protein, 'protein', 0, 90, '%')
  const fatError = numberFieldError(fat, 'fat', 0, 60, '%')
  const fiberError = numberFieldError(fiber, 'fiber', 0, 30, '%')
  const moistureError = numberFieldError(moisture, 'moisture', 0, 90, '%')
  const ashError = ash.trim() === '' ? null : numberFieldError(ash, 'ash', 0, 20, '%')
  const fieldError = proteinError || fatError || fiberError || moistureError || ashError

  const result = useMemo(() => {
    if (fieldError) return null
    return labelMath({
      protein: Number(protein),
      fat: Number(fat),
      fiber: Number(fiber),
      moisture: Number(moisture),
      ash: ash.trim() === '' ? null : Number(ash),
    })
  }, [protein, fat, fiber, moisture, ash, fieldError])

  return (
    <form className="not-prose my-6 rounded-xl border border-brand-border bg-brand-surface p-5" onSubmit={(e) => e.preventDefault()}>
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          ['Crude protein %', protein, setProtein],
          ['Crude fat %', fat, setFat],
          ['Crude fiber %', fiber, setFiber],
          ['Moisture %', moisture, setMoisture],
        ].map(([label, value, set]) => (
          <label key={String(label)} className="block text-sm font-semibold text-brand-dark">
            {label as string}
            <input className="mt-1 min-h-11 w-full rounded-md border border-brand-border px-3" inputMode="decimal" value={value as string} onChange={(e) => (set as (v: string) => void)(e.target.value)} />
          </label>
        ))}
        <label className="block text-sm font-semibold text-brand-dark sm:col-span-2">
          Ash % (leave blank if the label omits it)
          <input className="mt-1 min-h-11 w-full rounded-md border border-brand-border px-3" inputMode="decimal" value={ash} onChange={(e) => setAsh(e.target.value)} />
        </label>
      </div>
      {(fieldError || result === null) && (
        <ToolError>
          {fieldError || 'Those percentages add up past 100, so carbohydrate by difference is not a useful number.'}
        </ToolError>
      )}
      {result ? (
        <div className="mt-4">
          <p className="m-0 text-2xl font-bold text-brand-dark">{result.dmCarb.toFixed(1)}% carbohydrate, dry matter</p>
          <ResultMeaning>
            Dry matter is {result.dryMatterPercent.toFixed(0)}%. Protein is {result.dmProtein.toFixed(1)}% and fat is {result.dmFat.toFixed(1)}% on that basis.
            {result.ashOmitted ? ' Ash was omitted, so this uses 7%, the midpoint of the label page’s 6–8% note, and the carbohydrate estimate is only as good as that stand-in.' : ''}
            {' '}The label page’s worked protein example is 36% protein at 10% moisture, which is 40% protein on a dry-matter basis.
          </ResultMeaning>
          <ResultPick siteId="ferret-com" pick={ferretLabelPick(result.dmCarb)} />
        </div>
      ) : null}
    </form>
  )
}
