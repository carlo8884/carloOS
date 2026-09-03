'use client'

/**
 * Horse Height Converter -- /tools/horse-height-converter
 * Client compute component. Converts horse height between hands, inches, and
 * centimetres.
 *
 * CRITICAL NOTATION: height in hands is written hands.inches, NOT a decimal.
 *   1 hand = 4 inches
 *   15.2hh = 15 hands + 2 inches = 15*4 + 2 = 62 inches = 62 * 2.54 = 157.48 cm
 * The digit after the point is whole inches (0-3), never a decimal fraction.
 * To make this unambiguous, the hands input is split into two fields:
 * whole hands and the remaining inches (0-3). The converter NEVER treats
 * "15.2" as 15.2 decimal hands.
 *
 *   inches  = hands * 4 + extraInches
 *   cm      = inches * 2.54
 *   hands   = floor(inches / 4) . (inches mod 4)
 *
 * Reference / measurement utility only.
 */

import { useMemo, useState } from 'react'
import { AffiliateDisclosure, ShopCtas } from '@carloOS/ui'

const CM_PER_INCH = 2.54
const IN_PER_HAND = 4

type Mode = 'hands' | 'inches' | 'cm'

interface Result {
  inches: number
  cm: number
  hands: number
  handInches: number
  /** hands.inches notation string, e.g. "15.2" */
  handsNotation: string
  isPony: boolean
}

function fromInches(totalInches: number): Result {
  const hands = Math.floor(totalInches / IN_PER_HAND)
  // Remaining inches as whole-inch remainder for the hands.inches label.
  const remainder = totalInches - hands * IN_PER_HAND
  // Round the displayed remainder to the nearest whole inch (0-3) for notation.
  const handInches = Math.round(remainder)
  // 14.2hh (58 in) is the pony cutoff: <= 14.2hh = pony.
  const isPony = totalInches <= 58
  return {
    inches: totalInches,
    cm: totalInches * CM_PER_INCH,
    hands,
    handInches,
    handsNotation: `${hands}.${handInches}`,
    isPony,
  }
}

function round1(n: number): number {
  return Math.round(n * 10) / 10
}

export default function Calculator() {
  const [mode, setMode] = useState<Mode>('hands')
  const [handsWhole, setHandsWhole] = useState<string>('')
  const [handsInches, setHandsInches] = useState<string>('')
  const [inches, setInches] = useState<string>('')
  const [cm, setCm] = useState<string>('')

  const result = useMemo<Result | null>(() => {
    if (mode === 'hands') {
      const h = parseInt(handsWhole, 10)
      const i = handsInches === '' ? 0 : parseInt(handsInches, 10)
      if (Number.isNaN(h) || h <= 0) return null
      if (Number.isNaN(i) || i < 0 || i > 3) return null
      return fromInches(h * IN_PER_HAND + i)
    }
    if (mode === 'inches') {
      const v = parseFloat(inches)
      if (Number.isNaN(v) || v <= 0) return null
      return fromInches(v)
    }
    const v = parseFloat(cm)
    if (Number.isNaN(v) || v <= 0) return null
    return fromInches(v / CM_PER_INCH)
  }, [mode, handsWhole, handsInches, inches, cm])

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      {/* Mode toggle */}
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-brand-text-mid">
          Convert from
        </span>
        {([
          ['hands', 'Hands'],
          ['inches', 'Inches'],
          ['cm', 'Centimetres'],
        ] as [Mode, string][]).map(([m, label]) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={`rounded border px-3 py-1.5 text-sm transition ${
              mode === m
                ? 'border-brand-primary bg-brand-primary/10 text-brand-text-dark'
                : 'border-brand-border text-brand-text-mid hover:border-brand-primary'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {mode === 'hands' && (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="hh-whole"
              className="mb-1 block text-sm font-medium text-brand-text-dark"
            >
              Hands (whole)
            </label>
            <input
              id="hh-whole"
              type="number"
              inputMode="numeric"
              min="0"
              step="1"
              value={handsWhole}
              onChange={(e) => setHandsWhole(e.target.value)}
              placeholder="e.g. 15"
              className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
            />
          </div>
          <div>
            <label
              htmlFor="hh-inches"
              className="mb-1 block text-sm font-medium text-brand-text-dark"
            >
              + inches (0&ndash;3)
            </label>
            <p className="mb-2 text-xs text-brand-text-mid">
              The digit after the point in &ldquo;15.2hh&rdquo; is inches, not a
              decimal. Enter 0&ndash;3.
            </p>
            <input
              id="hh-inches"
              type="number"
              inputMode="numeric"
              min="0"
              max="3"
              step="1"
              value={handsInches}
              onChange={(e) => setHandsInches(e.target.value)}
              placeholder="e.g. 2"
              className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
            />
          </div>
        </div>
      )}

      {mode === 'inches' && (
        <div>
          <label
            htmlFor="hh-in"
            className="mb-1 block text-sm font-medium text-brand-text-dark"
          >
            Height in inches
          </label>
          <input
            id="hh-in"
            type="number"
            inputMode="decimal"
            min="0"
            step="0.1"
            value={inches}
            onChange={(e) => setInches(e.target.value)}
            placeholder="e.g. 62"
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark sm:max-w-xs"
          />
        </div>
      )}

      {mode === 'cm' && (
        <div>
          <label
            htmlFor="hh-cm"
            className="mb-1 block text-sm font-medium text-brand-text-dark"
          >
            Height in centimetres
          </label>
          <input
            id="hh-cm"
            type="number"
            inputMode="decimal"
            min="0"
            step="0.1"
            value={cm}
            onChange={(e) => setCm(e.target.value)}
            placeholder="e.g. 157.5"
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark sm:max-w-xs"
          />
        </div>
      )}

      {/* Results */}
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="rounded border border-brand-border bg-brand-surface p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-mid">
            Hands
          </p>
          <p className="mt-1 font-display text-3xl text-brand-text-dark">
            {result ? `${result.handsNotation}hh` : '—'}
          </p>
          <p className="mt-1 text-xs text-brand-text-mid">
            {result ? `${result.hands} hands ${result.handInches} in` : 'Enter a value'}
          </p>
        </div>
        <div className="rounded border border-brand-border bg-brand-surface p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-mid">
            Inches
          </p>
          <p className="mt-1 font-display text-3xl text-brand-text-dark">
            {result ? `${round1(result.inches)} in` : '—'}
          </p>
        </div>
        <div className="rounded border border-brand-border bg-brand-surface p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-mid">
            Centimetres
          </p>
          <p className="mt-1 font-display text-3xl text-brand-text-dark">
            {result ? `${round1(result.cm)} cm` : '—'}
          </p>
        </div>
      </div>

      {result && (
        <p className="mt-4 text-sm text-brand-text-mid">
          {result.isPony ? (
            <>
              At <strong>{result.handsNotation}hh</strong> (14.2hh or under), this
              animal is classified as a <strong>pony</strong> under the standard
              definition.
            </>
          ) : (
            <>
              At <strong>{result.handsNotation}hh</strong> (over 14.2hh), this animal
              is classified as a <strong>horse</strong> under the standard definition.
            </>
          )}
        </p>
      )}

      {result && (
        <div className="mt-6 rounded-lg border border-brand-border bg-brand-surface p-5">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Next step
          </p>
          <p className="font-display text-base font-semibold leading-snug text-brand-text-dark">
            Shop a horse measuring stick
          </p>
          <p className="mt-1 text-sm leading-relaxed text-brand-text-mid">
            {result.handsNotation}hh is {round1(result.inches)} in ({round1(result.cm)} cm).
            A measuring stick with a level is how you confirm that number at the withers
            on hard, level ground — the same method used for official measurement.
          </p>
          <AffiliateDisclosure variant="inline" siteId="horses-com" className="my-3" />
          <ShopCtas
            amazonHref="/go/amazon-brand/horse+measuring+stick?s=tools-horse-height-converter"
            amazonLabel="Browse horse measuring sticks on Amazon →"
          />
        </div>
      )}

      <p className="mt-4 text-xs text-brand-text-mid">
        Conversions are exact (1 hand = 4 inches; 1 inch = 2.54 cm). The
        hands.inches notation is read as whole hands plus inches (0&ndash;3),
        not as a decimal: 15.2hh means 15 hands and 2 inches, i.e. 62 inches.
        Official measurement for competition is taken at the withers on a hard,
        level surface, often with the horse barefoot.
      </p>
    </div>
  )
}
