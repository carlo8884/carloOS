'use client'

import { useMemo, useState } from 'react'

/**
 * Girth Size Calculator.
 *
 * Two paths to a recommended girth length:
 *   1. Measure: enter the measured girth-billet-to-billet length and convert.
 *   2. Estimate: pick saddle type + horse size band for a starting length.
 *
 * Output is a recommended size with a one-size-either-way caveat. Educational
 * sizing guidance; brands vary, so a try-on or brand sizing chart confirms.
 */

type SaddleType = 'long' | 'short'
type HorseSize = 'pony' | 'cob' | 'horse' | 'large-horse' | 'warmblood-xl'
type Mode = 'estimate' | 'measure'

interface SizeRow {
  id: HorseSize
  label: string
  approxHands: string
  longInches: [number, number]
  shortInches: [number, number]
}

// Long girth = dressage / monoflap (billets sit low, girth is long, no overgirth).
// Short girth = jump / GP / close-contact (billets sit high under a long flap).
const SIZE_TABLE: SizeRow[] = [
  { id: 'pony', label: 'Pony', approxHands: 'under ~14.2 hh', longInches: [36, 42], shortInches: [18, 22] },
  { id: 'cob', label: 'Cob / small horse', approxHands: '~14.2–15.2 hh', longInches: [42, 48], shortInches: [22, 24] },
  { id: 'horse', label: 'Horse (average)', approxHands: '~15.2–16.2 hh', longInches: [48, 54], shortInches: [24, 28] },
  { id: 'large-horse', label: 'Large horse', approxHands: '~16.2–17 hh', longInches: [54, 56], shortInches: [28, 30] },
  { id: 'warmblood-xl', label: 'Warmblood / draft / XL', approxHands: '~17 hh and up', longInches: [56, 60], shortInches: [30, 34] },
]

function midPoint([lo, hi]: [number, number]) {
  const mid = Math.round((lo + hi) / 2)
  // Girths come in even sizes; snap to the nearest even inch.
  return mid % 2 === 0 ? mid : mid + 1
}

function inchesToCm(inches: number) {
  return Math.round(inches * 2.54)
}

// Measured billet-to-billet (under the belly, billet ring to billet ring) maps
// roughly 1:1 to girth length for both long and short girths.
function measuredToSize(measured: number) {
  // Snap up to the nearest even inch — better slightly long than too short.
  return measured % 2 === 0 ? measured : Math.ceil(measured / 2) * 2
}

export function GirthSizeCalculator() {
  const [mode, setMode] = useState<Mode>('estimate')
  const [saddleType, setSaddleType] = useState<SaddleType>('short')
  const [horseSize, setHorseSize] = useState<HorseSize>('horse')
  const [measured, setMeasured] = useState<string>('')

  const result = useMemo(() => {
    if (mode === 'measure') {
      const m = parseFloat(measured)
      if (!measured || Number.isNaN(m) || m <= 0) return null
      const inches = measuredToSize(m)
      return {
        inches,
        cm: inchesToCm(inches),
        band: null as null | [number, number],
      }
    }
    const row = SIZE_TABLE.find((r) => r.id === horseSize)!
    const band = saddleType === 'long' ? row.longInches : row.shortInches
    return { inches: midPoint(band), cm: inchesToCm(midPoint(band)), band }
  }, [mode, saddleType, horseSize, measured])

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <div className="mb-6 flex gap-2 rounded bg-brand-surface p-1" role="tablist" aria-label="Calculation mode">
        {(['estimate', 'measure'] as Mode[]).map((m) => (
          <button
            key={m}
            role="tab"
            aria-selected={mode === m}
            onClick={() => setMode(m)}
            className={`flex-1 rounded px-4 py-2 text-sm font-semibold uppercase tracking-wide transition ${
              mode === m ? 'bg-brand-primary text-white' : 'text-brand-text-mid hover:text-brand-text-dark'
            }`}
          >
            {m === 'estimate' ? 'Estimate by size' : 'I measured it'}
          </button>
        ))}
      </div>

      <div className="mb-6">
        <label htmlFor="saddle-type" className="mb-2 block text-sm font-medium text-brand-text-mid">
          Saddle type
        </label>
        <select
          id="saddle-type"
          value={saddleType}
          onChange={(e) => setSaddleType(e.target.value as SaddleType)}
          className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
        >
          <option value="short">Jump / GP / close-contact — short girth (high billets)</option>
          <option value="long">Dressage / monoflap — long girth (low billets)</option>
        </select>
        <p className="mt-1 text-xs text-brand-text-mid">
          Dressage and monoflap saddles have long billets and take a long girth that buckles low, near the elbow. Jump, GP, and close-contact saddles have short billets under a long flap and take a short girth that buckles up under the flap.
        </p>
      </div>

      {mode === 'estimate' ? (
        <div>
          <label htmlFor="horse-size" className="mb-2 block text-sm font-medium text-brand-text-mid">
            Horse size
          </label>
          <select
            id="horse-size"
            value={horseSize}
            onChange={(e) => setHorseSize(e.target.value as HorseSize)}
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
          >
            {SIZE_TABLE.map((r) => (
              <option key={r.id} value={r.id}>
                {r.label} ({r.approxHands})
              </option>
            ))}
          </select>
          <p className="mt-1 text-xs text-brand-text-mid">
            Size bands are a starting point. Barrel shape (well-sprung vs slab-sided) shifts the result, so confirm with a measurement or a try-on.
          </p>
        </div>
      ) : (
        <div>
          <label htmlFor="measured" className="mb-2 block text-sm font-medium text-brand-text-mid">
            Measured length, billet ring to billet ring (inches)
          </label>
          <input
            id="measured"
            type="number"
            inputMode="decimal"
            min={10}
            max={70}
            step={0.5}
            value={measured}
            onChange={(e) => setMeasured(e.target.value)}
            placeholder="e.g. 26"
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
          />
          <p className="mt-1 text-xs text-brand-text-mid">
            With the saddle on and billets hanging, run a soft tape from one billet ring, under the belly in the girth groove, to the billet ring on the other side. That distance is your girth length.
          </p>
        </div>
      )}

      <div className="mt-6 rounded border border-brand-border bg-brand-surface p-4">
        {result ? (
          <>
            <p className="text-base font-semibold text-brand-text-dark">
              Recommended girth: {result.inches}&quot; ({result.cm} cm)
            </p>
            <p className="mt-2 text-sm text-brand-text-mid">
              Buy this size, and keep one size either way in mind — you want to girth
              up on the middle holes, leaving room to go tighter or looser as the
              horse changes condition. If you are between sizes, size up: a girth
              buckling too low on a jump saddle, or too high on a dressage saddle,
              causes rubs and instability.
            </p>
            {result.band && (
              <p className="mt-2 text-xs text-brand-text-mid">
                Typical range for this size and saddle type: {result.band[0]}&quot;–{result.band[1]}&quot;.
              </p>
            )}
          </>
        ) : (
          <p className="text-sm text-brand-text-mid">Enter a measurement to see a recommended girth size.</p>
        )}
      </div>

      <p className="mt-4 text-xs text-brand-text-mid">
        Sizing guidance only. Girth sizing varies by manufacturer; always check the brand&apos;s own size chart and, where possible, try the girth on the horse. Saddle.com Editorial does not sell or fit girths.
      </p>
    </div>
  )
}
