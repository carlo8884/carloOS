'use client'

/**
 * Horse Blanket Size Calculator -- /tools/horse-blanket-size-calculator
 *
 * US horse-blanket sizing is the body measurement itself: measure in a straight
 * line from the centre of the chest, along the side, to the point of the buttock
 * (edge of the tail), in inches — that number, rounded to the nearest standard
 * 3-inch size, is the blanket size. Also gives the approximate EU/cm equivalent
 * from the standard conversion. Round up if between sizes. Brand cuts vary, so
 * the output is a starting size, not a guarantee. No fabricated precision.
 */

import { useMemo, useState } from 'react'

type Unit = 'in' | 'cm'

function compute(value: number, unit: Unit) {
  const inches = unit === 'cm' ? value / 2.54 : value
  if (!isFinite(inches) || inches <= 0) return null
  // Standard US sizes run in 3-inch increments (pony 48 → draft 90).
  const us = Math.max(48, Math.min(90, Math.round(inches / 3) * 3))
  // Standard US→EU(cm) conversion: 69" = 125 cm, +10 cm per 3" step.
  const eu = Math.round((125 + ((us - 69) * 10) / 3) / 5) * 5
  // Whether the raw measurement fell between standard sizes (rounded down).
  const roundedUp = inches - us > 0.01
  const cat = us <= 66 ? 'Pony' : us <= 75 ? 'Cob / small horse' : us <= 81 ? 'Horse (full)' : 'Large horse / draft'
  return { us, eu, inches: Math.round(inches), roundedUp, cat }
}

export default function HorseBlanketSizeCalculator() {
  const [value, setValue] = useState('78')
  const [unit, setUnit] = useState<Unit>('in')

  const r = useMemo(() => compute(parseFloat(value), unit), [value, unit])

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <label className="block mb-4">
        <span className="block text-xs font-bold uppercase tracking-eyebrow text-brand-text-light mb-1.5">
          Chest-to-tail measurement
        </span>
        <div className="flex items-center gap-2">
          <input
            type="number"
            inputMode="decimal"
            min={0}
            step={1}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full max-w-[180px] rounded border border-brand-border bg-brand-white px-3 py-2.5 text-base text-brand-text-dark outline-none focus:border-brand-primary"
          />
          <div className="flex rounded border border-brand-border overflow-hidden">
            {(['in', 'cm'] as Unit[]).map((u) => (
              <button
                key={u}
                type="button"
                onClick={() => setUnit(u)}
                className={[
                  'px-3 py-2 text-sm font-semibold transition-colors',
                  unit === u ? 'bg-brand-primary text-white' : 'bg-brand-white text-brand-text-dark hover:bg-brand-surface',
                ].join(' ')}
              >
                {u}
              </button>
            ))}
          </div>
        </div>
        <span className="mt-1.5 block text-2xs leading-snug text-brand-text-light">
          Measure with the horse standing square: from the centre of the chest, along the side, to the point of the
          buttock (the edge of the tail).
        </span>
      </label>

      {r ? (
        <div className="rounded-lg border border-brand-border bg-brand-white p-5 sm:p-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <p className="text-2xs uppercase tracking-eyebrow text-brand-text-light">US / UK size</p>
              <p className="mt-1 font-display text-3xl font-black text-brand-dark">{r.us}&Prime;</p>
              <p className="text-xs text-brand-text-light">{r.cat}</p>
            </div>
            <div>
              <p className="text-2xs uppercase tracking-eyebrow text-brand-text-light">Approx. EU size</p>
              <p className="mt-1 font-display text-3xl font-black text-brand-dark">{r.eu} cm</p>
              <p className="text-xs text-brand-text-light">from your ~{r.inches}&Prime; measurement</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-brand-text-mid">
            {r.roundedUp
              ? 'Your measurement fell between sizes, so we rounded up — a blanket a touch large is far better than one that rubs the shoulders and chest.'
              : 'Your measurement matches a standard size. If your horse is broad or heavily muscled, or between this and the next size, go up.'}{' '}
            EU/UK cuts vary by brand, so treat the cm figure as a starting point and check the manufacturer&apos;s own
            size chart.
          </p>
        </div>
      ) : (
        <p className="text-sm text-brand-text-light">Enter the chest-to-tail measurement to get the blanket size.</p>
      )}

      <p className="mt-4 text-2xs leading-snug text-brand-text-light">
        US blanket sizing <em>is</em> the chest-to-tail measurement in inches, rounded to the nearest 3-inch standard
        size (48&Prime;–90&Prime;). Fit also depends on cut, shoulder gusset, and neck style — when in doubt, size up
        and check the brand&apos;s chart.
      </p>
    </div>
  )
}
