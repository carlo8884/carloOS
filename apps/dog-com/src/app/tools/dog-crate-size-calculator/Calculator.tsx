'use client'

/**
 * Dog Crate Size Calculator -- /tools/dog-crate-size-calculator
 *
 * Client compute component. Turns two measurements (dog length nose-to-tail-base
 * and standing height floor-to-head) into the minimum internal crate dimensions
 * and the recommended standard crate size.
 *
 * Sizing rule (standard breeder/trainer guidance): a crate should let the dog
 * stand without ducking, turn around, and lie flat. Add ~4 inches to each body
 * measurement, then pick the smallest standard crate that meets both.
 *
 * Product-sizing / husbandry guidance only -- no clinical claims.
 */

import { useMemo, useState } from 'react'

type Unit = 'in' | 'cm'

const IN_PER_CM = 1 / 2.54
const ADD_INCHES = 4 // headroom + room to turn and stretch

// Common manufacturer crate line (length x width x height, inches).
const STANDARD_CRATES = [
  { len: 18, width: 12, height: 14, sizeClass: 'XS', weightHint: 'toy breeds, up to ~12 lb' },
  { len: 22, width: 13, height: 16, sizeClass: 'S', weightHint: '~13–25 lb' },
  { len: 24, width: 18, height: 19, sizeClass: 'S/M', weightHint: '~26–30 lb' },
  { len: 30, width: 19, height: 21, sizeClass: 'M', weightHint: '~31–40 lb' },
  { len: 36, width: 23, height: 25, sizeClass: 'L', weightHint: '~41–70 lb' },
  { len: 42, width: 28, height: 30, sizeClass: 'XL', weightHint: '~71–90 lb' },
  { len: 48, width: 30, height: 33, sizeClass: 'XXL', weightHint: '~91–110+ lb' },
]

interface Result {
  minLength: number
  minHeight: number
  crate: (typeof STANDARD_CRATES)[number] | null
}

function compute(lengthIn: number, heightIn: number): Result {
  const minLength = lengthIn + ADD_INCHES
  const minHeight = heightIn + ADD_INCHES
  const crate = STANDARD_CRATES.find((c) => c.len >= minLength && c.height >= minHeight) ?? null
  return { minLength, minHeight, crate }
}

function inFromUnit(v: number, unit: Unit): number {
  return unit === 'cm' ? v * IN_PER_CM : v
}

function show(nIn: number, unit: Unit): string {
  if (unit === 'cm') return `${Math.round(nIn * 2.54)} cm`
  return `${Math.round(nIn * 10) / 10}"`
}

export default function DogCrateSizeCalculator() {
  const [length, setLength] = useState<number>(24)
  const [height, setHeight] = useState<number>(18)
  const [unit, setUnit] = useState<Unit>('in')

  const result = useMemo(() => {
    const lengthIn = inFromUnit(length, unit)
    const heightIn = inFromUnit(height, unit)
    return compute(lengthIn, heightIn)
  }, [length, height, unit])

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <div className="grid gap-6 sm:grid-cols-3">
        {/* Length */}
        <div>
          <label htmlFor="cs-length" className="mb-2 block text-xs font-medium text-brand-text-mid">
            Body length (nose → tail base)
          </label>
          <input
            id="cs-length"
            type="number"
            inputMode="decimal"
            min={1}
            max={120}
            step={unit === 'cm' ? 1 : 0.5}
            value={length}
            onChange={(e) => setLength(Math.max(1, Number(e.target.value) || 1))}
            className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-text-dark"
          />
          <p className="mt-1 text-2xs text-brand-text-light leading-snug">
            Measure from the tip of the nose to the base of the tail (not the tail tip).
          </p>
        </div>

        {/* Height */}
        <div>
          <label htmlFor="cs-height" className="mb-2 block text-xs font-medium text-brand-text-mid">
            Standing height (floor → top of head)
          </label>
          <input
            id="cs-height"
            type="number"
            inputMode="decimal"
            min={1}
            max={60}
            step={unit === 'cm' ? 1 : 0.5}
            value={height}
            onChange={(e) => setHeight(Math.max(1, Number(e.target.value) || 1))}
            className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-text-dark"
          />
          <p className="mt-1 text-2xs text-brand-text-light leading-snug">
            Floor to the top of the head while the dog sits or stands tall (the taller of the two).
          </p>
        </div>

        {/* Unit */}
        <div>
          <p className="mb-2 text-xs font-medium text-brand-text-mid">Unit</p>
          <div className="flex rounded border border-brand-border overflow-hidden">
            {(['in', 'cm'] as Unit[]).map((u) => (
              <button
                key={u}
                type="button"
                onClick={() => setUnit(u)}
                className={[
                  'flex-1 py-2 text-sm font-semibold uppercase transition-colors',
                  unit === u
                    ? 'bg-brand-primary text-brand-white'
                    : 'bg-brand-white text-brand-text-mid hover:bg-brand-surface',
                ].join(' ')}
              >
                {u}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Result */}
      <div className="mt-8 rounded-lg border border-brand-border bg-brand-white p-5 sm:p-6">
        <div className="grid gap-5 sm:grid-cols-3">
          <div>
            <p className="text-2xs uppercase tracking-wide text-brand-text-light">Minimum internal length</p>
            <p className="mt-1 font-display text-2xl font-bold text-brand-dark">{show(result.minLength, unit)}</p>
          </div>
          <div>
            <p className="text-2xs uppercase tracking-wide text-brand-text-light">Minimum internal height</p>
            <p className="mt-1 font-display text-2xl font-bold text-brand-dark">{show(result.minHeight, unit)}</p>
          </div>
          <div>
            <p className="text-2xs uppercase tracking-wide text-brand-text-light">Recommended crate size</p>
            {result.crate ? (
              <p className="mt-1 font-display text-2xl font-bold text-brand-primary">
                {result.crate.len}&quot; <span className="text-base font-semibold text-brand-text-mid">({result.crate.sizeClass})</span>
              </p>
            ) : (
              <p className="mt-1 text-sm font-semibold text-brand-text-mid">
                Larger than a standard 48&quot; crate — look at giant-breed / custom kennels.
              </p>
            )}
          </div>
        </div>
        {result.crate && (
          <p className="mt-4 text-sm leading-relaxed text-brand-text-mid">
            A <strong>{result.crate.len}&quot;</strong> crate (typically {result.crate.len}×{result.crate.width}×{result.crate.height}&quot;,
            commonly labelled <strong>{result.crate.sizeClass}</strong>, {result.crate.weightHint}) is the smallest standard size that
            lets your dog stand, turn, and lie flat with room to spare. If your dog is between sizes or still growing, size up.
          </p>
        )}
      </div>

      <p className="mt-5 text-sm leading-relaxed text-brand-text-mid">
        <strong>Buying for a puppy?</strong> Size the crate to the expected <em>adult</em> dimensions and
        use a divider panel to shrink the usable space while house-training — a crate that is too big lets a
        puppy soil one end and sleep in the other, which defeats the purpose.
      </p>
      <p className="mt-3 text-2xs leading-snug text-brand-text-light">
        Product-sizing guidance based on standard manufacturer crate dimensions; brands vary, so check the
        specific crate&apos;s internal measurements before buying.
      </p>
    </div>
  )
}
