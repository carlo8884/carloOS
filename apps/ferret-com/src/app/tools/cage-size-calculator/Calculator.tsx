'use client'

/**
 * Ferret Cage Size Calculator -- /tools/cage-size-calculator
 *
 * Client compute. Ferret count + level count + daily out-of-cage hours →
 * a minimum L×W×H footprint. Constants match the published cage-setup and
 * multi-level-housing pages (AFA-cited 24×24 in floor and 18 in height
 * per ferret; 36×24 in preferred pair footprint).
 *
 * Husbandry PLANNING estimate only — not a clinical spec, not a brand
 * ranking. Bar spacing and out-of-cage time sit next to the math.
 */

import { useMemo, useState } from 'react'

/** AFA-cited planning floor: 24 × 24 in per ferret (4 sq ft). */
const SQIN_PER_FERRET = 24 * 24
const WIDTH_IN = 24
const HEIGHT_PER_LEVEL_IN = 18
const PAIR_MIN_LENGTH_IN = 36
const PLAY_MIN_HOURS = 4

type PlayBand = 'under-4' | 'about-4' | 'six-plus'

interface Result {
  lengthIn: number
  widthIn: number
  heightIn: number
  levels: number
  floorSqFt: number
  usableSqFt: number
  playShort: boolean
}

function compute(ferrets: number, levels: number, playHours: number): Result {
  const n = Math.max(1, ferrets)
  const L = Math.max(1, levels)
  const playShort = playHours < PLAY_MIN_HOURS
  // Low out-of-cage time: they are using the cage as a house. Add one
  // ferret-equivalent of floor rather than shrinking the footprint.
  const effectiveN = playShort ? n + 1 : n
  const neededSqIn = effectiveN * SQIN_PER_FERRET
  const footprintSqIn = Math.ceil(neededSqIn / L)
  const minLength = n >= 2 ? PAIR_MIN_LENGTH_IN : WIDTH_IN
  const lengthIn = Math.max(minLength, Math.ceil(footprintSqIn / WIDTH_IN))
  const widthIn = WIDTH_IN
  const heightIn = L * HEIGHT_PER_LEVEL_IN
  const floorSqFt = (lengthIn * widthIn) / 144
  const usableSqFt = floorSqFt * L
  return { lengthIn, widthIn, heightIn, levels: L, floorSqFt, usableSqFt, playShort }
}

function playHoursFromBand(band: PlayBand): number {
  if (band === 'under-4') return 2
  if (band === 'six-plus') return 7
  return 4
}

export default function CageSizeCalculator() {
  const [ferrets, setFerrets] = useState(2)
  const [levels, setLevels] = useState(3)
  const [playBand, setPlayBand] = useState<PlayBand>('about-4')

  const result = useMemo(
    () => compute(ferrets, levels, playHoursFromBand(playBand)),
    [ferrets, levels, playBand],
  )

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <div className="grid gap-6 sm:grid-cols-3">
        <div>
          <label htmlFor="cs-ferrets" className="mb-2 block text-xs font-medium text-brand-text-mid">
            Number of ferrets
          </label>
          <input
            id="cs-ferrets"
            type="number"
            inputMode="numeric"
            min={1}
            max={12}
            step={1}
            value={ferrets}
            onChange={(e) => setFerrets(Math.max(1, Math.min(12, Number(e.target.value) || 1)))}
            className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-text-dark"
          />
          <p className="mt-1 text-2xs text-brand-text-light leading-snug">
            Ferrets are social; many keepers house two or more. Floor scales with headcount.
          </p>
        </div>

        <div>
          <p className="mb-2 text-xs font-medium text-brand-text-mid">Cage levels</p>
          <div className="flex rounded border border-brand-border overflow-hidden">
            {([1, 2, 3] as const).map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setLevels(value)}
                className={[
                  'flex-1 py-2 text-sm font-semibold transition-colors',
                  levels === value
                    ? 'bg-brand-primary text-white'
                    : 'bg-brand-white text-brand-text-mid hover:bg-brand-surface',
                ].join(' ')}
              >
                {value}
              </button>
            ))}
          </div>
          <p className="mt-1 text-2xs text-brand-text-light leading-snug">
            Stacking levels multiplies usable habitat without growing the room footprint.
          </p>
        </div>

        <div>
          <p className="mb-2 text-xs font-medium text-brand-text-mid">Daily out-of-cage time</p>
          <div className="flex rounded border border-brand-border overflow-hidden">
            {(
              [
                ['under-4', '< 4 h'],
                ['about-4', '4 h'],
                ['six-plus', '6–8 h'],
              ] as [PlayBand, string][]
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => setPlayBand(value)}
                className={[
                  'flex-1 py-2 text-sm font-semibold transition-colors',
                  playBand === value
                    ? 'bg-brand-primary text-white'
                    : 'bg-brand-white text-brand-text-mid hover:bg-brand-surface',
                ].join(' ')}
              >
                {label}
              </button>
            ))}
          </div>
          <p className="mt-1 text-2xs text-brand-text-light leading-snug">
            Four hours is the working minimum. Below that, the tool adds one ferret-equivalent of floor.
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-lg border border-brand-border bg-brand-white p-5 sm:p-6">
        <div className="grid gap-5 sm:grid-cols-3">
          <div>
            <p className="text-2xs uppercase tracking-wide text-brand-text-light">Minimum footprint</p>
            <p className="mt-1 font-display text-2xl font-bold text-brand-primary">
              {result.lengthIn} × {result.widthIn} × {result.heightIn}
              <span className="ml-1 text-base font-semibold text-brand-text-mid">in</span>
            </p>
            <p className="mt-1 text-2xs text-brand-text-light">L × W × H — {result.levels} level{result.levels === 1 ? '' : 's'}</p>
          </div>
          <div>
            <p className="text-2xs uppercase tracking-wide text-brand-text-light">Floor (one level)</p>
            <p className="mt-1 font-display text-2xl font-bold text-brand-dark">
              {result.floorSqFt.toFixed(0)}
              <span className="ml-1 text-base font-semibold text-brand-text-mid">sq ft</span>
            </p>
            <p className="mt-1 text-2xs text-brand-text-light">
              {result.lengthIn} × {result.widthIn} in
            </p>
          </div>
          <div>
            <p className="text-2xs uppercase tracking-wide text-brand-text-light">Usable habitat</p>
            <p className="mt-1 font-display text-2xl font-bold text-brand-dark">
              {result.usableSqFt.toFixed(0)}
              <span className="ml-1 text-base font-semibold text-brand-text-mid">sq ft</span>
            </p>
            <p className="mt-1 text-2xs text-brand-text-light">Floor × {result.levels} level{result.levels === 1 ? '' : 's'}</p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-brand-text-mid">
          {result.playShort
            ? 'Out-of-cage time is under the four-hour working minimum, so the footprint includes one extra ferret-equivalent of floor. The cage is the bedroom, not the house — add supervised play in a ferret-proofed room rather than treating a bigger cage as a substitute.'
            : 'This is a sleeping-and-litter footprint, not a full-time house. Keep supervised out-of-cage time at four hours a day or more, split across the crepuscular morning and evening peaks if that is easier.'}{' '}
          Bar spacing: one inch or less for adults, half an inch or less for kits. Solid floors or fleece-covered wire — never a bare grid.
        </p>
      </div>

      <p className="mt-5 text-2xs leading-snug text-brand-text-light">
        Planning figure only, from the American Ferret Association owner-education minimums cited on
        the cage-setup page: 24 × 24 in of floor and 18 in of height per ferret, with a 36 × 24 in
        preferred pair footprint. Multi-level cages multiply usable area; they do not replace playtime.
        Confirm injuries, escape, or housing-related illness with an exotic-animal veterinarian.
      </p>
    </div>
  )
}
