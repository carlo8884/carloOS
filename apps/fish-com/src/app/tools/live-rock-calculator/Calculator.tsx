'use client'

import { useMemo, useState } from 'react'
import { ResultMeaning, ResultPick, ToolError, liveRockPick, numberFieldError } from '@carloOS/ui'
import { liveRockPounds } from './model'

export default function LiveRockCalculator() {
  const [gallons, setGallons] = useState('40')
  const gallonsError = numberFieldError(gallons, 'volume', 1, 1000, 'gal')
  const result = useMemo(() => (gallonsError ? null : liveRockPounds(Number(gallons))), [gallons, gallonsError])

  return (
    <form className="not-prose my-6 rounded-xl border border-brand-border bg-brand-surface p-5" onSubmit={(e) => e.preventDefault()}>
      <label className="block text-sm font-semibold text-brand-dark">
        Display volume (US gallons)
        <input className="mt-1 min-h-11 w-full rounded-md border border-brand-border px-3" inputMode="decimal" value={gallons} onChange={(e) => setGallons(e.target.value)} />
      </label>
      {gallonsError && <ToolError>{gallonsError}</ToolError>}
      {result ? (
        <div className="mt-4">
          <p className="m-0 text-2xl font-bold text-brand-dark">{result.lowLb.toFixed(0)}–{result.highLb.toFixed(0)} lb of live rock</p>
          <ResultMeaning>
            The low end is 1 lb per gallon and the high end is 1.5 lb per gallon, the range on the saltwater setup page. Aquacultured rock is the page&apos;s preference over wild-caught rock. This is not a stocking calculator.
          </ResultMeaning>
          <ResultPick siteId="fish-com" pick={liveRockPick(Number(gallons), result.lowLb.toFixed(0), result.highLb.toFixed(0))} />
        </div>
      ) : null}
    </form>
  )
}
