'use client'

import { useMemo, useState } from 'react'
import { ResultMeaning, ResultPick, ToolError, horseWaterPick, numberFieldError } from '@carloOS/ui'
import { horseWaterGallons } from './model'

export default function HorseWaterCalculator() {
  const [weight, setWeight] = useState('1000')
  const [freezing, setFreezing] = useState(false)
  const weightError = numberFieldError(weight, 'weight', 100, 2500, 'lb')
  const result = useMemo(() => (weightError ? null : horseWaterGallons(Number(weight))), [weight, weightError])
  const low = result ? result.lowGal.toFixed(1) : ''
  const high = result ? result.highGal.toFixed(1) : ''

  return (
    <form className="not-prose mt-0 mb-6 rounded-xl border border-brand-border bg-brand-surface p-5" onSubmit={(e) => e.preventDefault()}>
      {result ? (
        <ResultPick linkFirst siteId="horses-com" pick={horseWaterPick(freezing, low, high)} />
      ) : null}
      <label className="block text-sm font-semibold text-brand-dark">
        Body weight (lb)
        <input className="mt-1 min-h-11 w-full rounded-md border border-brand-border px-3" inputMode="decimal" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </label>
      <label className="mt-4 flex min-h-11 items-center gap-3 text-sm font-semibold text-brand-dark">
        <input className="h-6 w-6" type="checkbox" checked={freezing} onChange={(e) => setFreezing(e.target.checked)} />
        The stall water can freeze
      </label>
      {weightError && <ToolError>{weightError}</ToolError>}
      {result ? (
        <div className="mt-4">
          <p className="m-0 text-2xl font-bold text-brand-dark">{low}–{high} gal/day</p>
          <ResultMeaning>
            How we calculate: the low end is Merck’s maintenance minimum of 5 L per 100 kg (about 0.60 gal per 100 lb; {result.lowL.toFixed(0)} L here). The high end, 1 gal per 100 lb ({result.highL.toFixed(0)} L here), is a planning figure. Offer water free-choice. A sudden drop in drinking is a reason to call a veterinarian.
          </ResultMeaning>
          <p className="mt-3 text-sm">
            <a href="/nutrition/water-requirements" className="font-semibold text-brand-primary underline underline-offset-2">Read the water requirements guide →</a>
          </p>
        </div>
      ) : null}
    </form>
  )
}
