'use client'

import { useState, useMemo } from 'react'

type Habit = 'terrestrial' | 'semi-arboreal' | 'arboreal'
type Mode = 'recommended' | 'check'

interface Multipliers {
  length: number
  width: number
  height: number
}

const HABIT_MULTIPLIERS: Record<Habit, Multipliers> = {
  terrestrial:   { length: 2,   width: 1, height: 1   },
  'semi-arboreal': { length: 1.5, width: 1, height: 1.5 },
  arboreal:      { length: 1,   width: 1, height: 2   },
}

const HABIT_LABELS: Record<Habit, string> = {
  terrestrial:    'Terrestrial (ground-dwelling)',
  'semi-arboreal': 'Semi-arboreal (ground + climbing)',
  arboreal:       'Arboreal (primarily climbing)',
}

const HABIT_NOTES: Record<Habit, string> = {
  terrestrial:    'Prioritizes floor area. Multiply adult length by 2 for enclosure length, 1x for width and height.',
  'semi-arboreal': 'Balanced floor and vertical space. 1.5x length, 1x width, 1.5x height.',
  arboreal:       'Prioritizes height for climbing. 1x length and width, 2x height.',
}

function round1(n: number) { return Math.round(n * 10) / 10 }
function round2(n: number) { return Math.round(n * 100) / 100 }

function inToCm(n: number) { return round1(n * 2.54) }
function cmToIn(n: number) { return round1(n / 2.54) }

function calcVolume(lIn: number, wIn: number, hIn: number) {
  const cubicIn = lIn * wIn * hIn
  const gallons = round1(cubicIn / 231)
  const liters = round1(gallons * 3.785)
  const sqIn = round1(lIn * wIn)
  const sqFt = round2(sqIn / 144)
  return { gallons, liters, sqIn, sqFt }
}

const toneClasses = {
  success: 'border-emerald-700/40 bg-emerald-950/30 text-emerald-200',
  warn:    'border-amber-700/40 bg-amber-950/30 text-amber-200',
  neutral: 'border-brand-border bg-brand-surface text-brand-text-mid ring-1 ring-white/8',
}

export function EnclosureSizeCalculator() {
  const [mode, setMode] = useState<Mode>('recommended')
  const [unit, setUnit] = useState<'in' | 'cm'>('in')
  const [animalLength, setAnimalLength] = useState<string>('24')
  const [habit, setHabit] = useState<Habit>('terrestrial')

  // check-mode inputs
  const [tankL, setTankL] = useState<string>('48')
  const [tankW, setTankW] = useState<string>('24')
  const [tankH, setTankH] = useState<string>('24')

  const animalLengthNum = parseFloat(animalLength) || 0
  const animalLengthIn = unit === 'cm' ? cmToIn(animalLengthNum) : animalLengthNum

  const rec = useMemo(() => {
    if (animalLengthIn <= 0) return null
    const m = HABIT_MULTIPLIERS[habit]
    const lIn = round1(m.length * animalLengthIn)
    const wIn = round1(m.width  * animalLengthIn)
    const hIn = round1(m.height * animalLengthIn)
    return {
      lIn, wIn, hIn,
      lCm: inToCm(lIn), wCm: inToCm(wIn), hCm: inToCm(hIn),
      ...calcVolume(lIn, wIn, hIn),
    }
  }, [animalLengthIn, habit])

  // check mode
  const tankLNum = parseFloat(tankL) || 0
  const tankWNum = parseFloat(tankW) || 0
  const tankHNum = parseFloat(tankH) || 0
  const tankLIn = unit === 'cm' ? cmToIn(tankLNum) : tankLNum
  const tankWIn = unit === 'cm' ? cmToIn(tankWNum) : tankWNum
  const tankHIn = unit === 'cm' ? cmToIn(tankHNum) : tankHNum

  const tankStats = useMemo(() => {
    if (tankLIn <= 0 || tankWIn <= 0 || tankHIn <= 0) return null
    return { lIn: tankLIn, wIn: tankWIn, hIn: tankHIn, ...calcVolume(tankLIn, tankWIn, tankHIn) }
  }, [tankLIn, tankWIn, tankHIn])

  const checkVerdict = useMemo(() => {
    if (!rec || !tankStats) return null
    const lOk = tankStats.lIn >= rec.lIn
    const wOk = tankStats.wIn >= rec.wIn
    const hOk = tankStats.hIn >= rec.hIn
    if (lOk && wOk && hOk) {
      return { tone: 'success' as const, text: 'Your enclosure meets or exceeds the recommended minimums for all three dimensions.' }
    }
    const fails: string[] = []
    if (!lOk) fails.push(`length (need >= ${rec.lIn} in / ${rec.lCm} cm, have ${round1(tankStats.lIn)} in)`)
    if (!wOk) fails.push(`width (need >= ${rec.wIn} in / ${rec.wCm} cm, have ${round1(tankStats.wIn)} in)`)
    if (!hOk) fails.push(`height (need >= ${rec.hIn} in / ${rec.hCm} cm, have ${round1(tankStats.hIn)} in)`)
    return {
      tone: 'warn' as const,
      text: `Enclosure is below the recommended minimum in: ${fails.join('; ')}. Consider a larger enclosure or upgrading to the next standard size up.`,
    }
  }, [rec, tankStats])

  const inputClass = 'w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark text-sm'
  const labelClass = 'mb-1 block text-sm font-medium text-brand-text-mid'
  const hintClass = 'mt-1 text-xs text-brand-text-mid'

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      {/* Mode tabs */}
      <div className="mb-6 flex gap-2">
        <button
          type="button"
          onClick={() => setMode('recommended')}
          className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
            mode === 'recommended'
              ? 'bg-brand-primary text-brand-dark'
              : 'border border-brand-border text-brand-text-mid hover:border-brand-primary'
          }`}
        >
          Recommended Minimum
        </button>
        <button
          type="button"
          onClick={() => setMode('check')}
          className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
            mode === 'check'
              ? 'bg-brand-primary text-brand-dark'
              : 'border border-brand-border text-brand-text-mid hover:border-brand-primary'
          }`}
        >
          Check My Tank
        </button>
      </div>

      {/* Shared inputs */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="enc-unit" className={labelClass}>Unit</label>
          <select
            id="enc-unit"
            value={unit}
            onChange={(e) => setUnit(e.target.value as 'in' | 'cm')}
            className={inputClass}
          >
            <option value="in">Inches (in)</option>
            <option value="cm">Centimeters (cm)</option>
          </select>
        </div>

        <div>
          <label htmlFor="enc-habit" className={labelClass}>
            Animal habit
          </label>
          <select
            id="enc-habit"
            value={habit}
            onChange={(e) => setHabit(e.target.value as Habit)}
            className={inputClass}
          >
            {(Object.keys(HABIT_LABELS) as Habit[]).map((h) => (
              <option key={h} value={h}>{HABIT_LABELS[h]}</option>
            ))}
          </select>
          <p className={hintClass}>{HABIT_NOTES[habit]}</p>
        </div>

        <div>
          <label htmlFor="enc-length" className={labelClass}>
            Adult total length ({unit})
          </label>
          <input
            id="enc-length"
            type="number"
            min={1}
            step={0.5}
            value={animalLength}
            onChange={(e) => setAnimalLength(e.target.value)}
            className={inputClass}
          />
          <p className={hintClass}>
            Nose-to-tail tip total length of the adult animal. Use the expected adult size, not the current juvenile size.
          </p>
        </div>
      </div>

      {/* Recommended result */}
      {mode === 'recommended' && rec && (
        <div className="mt-6 space-y-4">
          <div className="rounded border border-brand-border bg-brand-surface p-4">
            <p className="mb-3 text-sm font-semibold text-brand-text-dark">
              Recommended Minimum Enclosure
            </p>
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { dim: 'Length', in: rec.lIn, cm: rec.lCm },
                { dim: 'Width',  in: rec.wIn, cm: rec.wCm },
                { dim: 'Height', in: rec.hIn, cm: rec.hCm },
              ].map(({ dim, in: inv, cm }) => (
                <div key={dim} className="rounded border border-brand-border/50 p-3">
                  <div className="text-xs text-brand-text-mid">{dim}</div>
                  <div className="text-lg font-bold text-brand-text-dark">
                    {unit === 'in' ? `${inv}"` : `${cm} cm`}
                  </div>
                  <div className="text-xs text-brand-text-mid">
                    {unit === 'in' ? `${cm} cm` : `${inv}"`}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded border border-brand-border/50 bg-brand-surface p-3">
              <div className="text-xs text-brand-text-mid mb-1">Floor footprint</div>
              <div className="font-semibold text-brand-text-dark">{rec.sqIn} sq in</div>
              <div className="text-xs text-brand-text-mid">{rec.sqFt} sq ft</div>
            </div>
            <div className="rounded border border-brand-border/50 bg-brand-surface p-3">
              <div className="text-xs text-brand-text-mid mb-1">Volume</div>
              <div className="font-semibold text-brand-text-dark">{rec.gallons} gal</div>
              <div className="text-xs text-brand-text-mid">{rec.liters} L</div>
            </div>
          </div>
        </div>
      )}

      {/* Check my tank mode */}
      {mode === 'check' && (
        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-3 gap-4">
            {[
              { id: 'tank-l', label: 'Tank length', val: tankL, set: setTankL },
              { id: 'tank-w', label: 'Tank width',  val: tankW, set: setTankW },
              { id: 'tank-h', label: 'Tank height', val: tankH, set: setTankH },
            ].map(({ id, label, val, set }) => (
              <div key={id}>
                <label htmlFor={id} className={labelClass}>
                  {label} ({unit})
                </label>
                <input
                  id={id}
                  type="number"
                  min={1}
                  step={0.5}
                  value={val}
                  onChange={(e) => set(e.target.value)}
                  className={inputClass}
                />
              </div>
            ))}
          </div>

          {tankStats && (
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded border border-brand-border/50 bg-brand-surface p-3">
                <div className="text-xs text-brand-text-mid mb-1">Floor footprint</div>
                <div className="font-semibold text-brand-text-dark">{tankStats.sqIn} sq in</div>
                <div className="text-xs text-brand-text-mid">{tankStats.sqFt} sq ft</div>
              </div>
              <div className="rounded border border-brand-border/50 bg-brand-surface p-3">
                <div className="text-xs text-brand-text-mid mb-1">Volume</div>
                <div className="font-semibold text-brand-text-dark">{tankStats.gallons} gal</div>
                <div className="text-xs text-brand-text-mid">{tankStats.liters} L</div>
              </div>
            </div>
          )}

          {checkVerdict && rec && (
            <div className={`rounded border p-4 ${toneClasses[checkVerdict.tone]}`}>
              <p className="text-sm font-semibold">
                {checkVerdict.tone === 'success' ? 'Enclosure passes minimum check' : 'Enclosure below recommended minimum'}
              </p>
              <p className="mt-1 text-sm">{checkVerdict.text}</p>
              <p className="mt-2 text-xs opacity-75">
                Recommended minimum for this animal: {rec.lIn}" L x {rec.wIn}" W x {rec.hIn}" H
              </p>
            </div>
          )}
        </div>
      )}

      {/* Disclaimer */}
      <div className="mt-6 rounded border border-brand-border/40 bg-brand-surface/50 p-4 text-sm text-brand-text-mid">
        <p>
          <strong className="text-brand-text-dark">These are widely-used MINIMUM guidelines; bigger is always better,</strong> and requirements vary by species, age, and activity level. Confirm against your species&apos; care sheet. See the{' '}
          <a href="/species" className="text-brand-primary underline-offset-2 hover:underline">species library</a>{' '}
          and{' '}
          <a href="/setup" className="text-brand-primary underline-offset-2 hover:underline">setup guides</a>{' '}
          for species-specific guidance.
        </p>
      </div>
    </div>
  )
}
