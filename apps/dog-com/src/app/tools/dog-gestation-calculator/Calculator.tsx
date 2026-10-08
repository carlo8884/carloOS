'use client'

/**
 * Dog Pregnancy / Whelping Calendar -- /tools/dog-gestation-calculator
 *
 * Merck Veterinary Manual, reproductive-system table:
 * https://www.merckvetmanual.com/reproductive-system/reproductive-system-introduction/the-reproductive-system-in-animals
 * "Gestation period is 58–72 d from breeding at unknown stage of estrus; from
 * day of ovulation ... gestation period is 62–64 d."
 * Whelping page (same manual): 58–72 days from the first breeding the female
 * permitted; 64–66 days from the LH surge / initial progesterone rise; a drop
 * in rectal temperature usually precedes delivery by about 8 to 24 hours.
 * https://www.merckvetmanual.com/management-and-nutrition/management-of-reproduction-dogs-and-cats/whelping-and-queening-in-bitches-and-queens
 *
 * AVG_DAYS = 63 is the midpoint of the 62–64 ovulation window only. It is not
 * Merck's average from an untimed breeding date.
 *
 * Husbandry information only -- NOT a diagnosis.
 */

import { useMemo, useState } from 'react'
import { ResultMeaning, ToolError } from '@carloOS/ui'

const AVG_DAYS = 63
const MIN_DAYS = 58
const MAX_DAYS = 72
const OVULATION_MIN_DAYS = 62
const OVULATION_MAX_DAYS = 64

function addDays(date: Date, days: number): Date {
  const d = new Date(date.getTime())
  d.setDate(d.getDate() + days)
  return d
}

function fmt(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function fmtShort(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

/** Parse a yyyy-mm-dd input string into a local-noon Date (avoids TZ drift). */
function parseInputDate(value: string): Date | null {
  if (!value) return null
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value)
  if (!m) return null
  const y = Number(m[1])
  const mo = Number(m[2])
  const d = Number(m[3])
  const dt = new Date(y, mo - 1, d, 12, 0, 0, 0)
  if (Number.isNaN(dt.getTime())) return null
  return dt
}

interface Stage {
  label: string
  fromDay: number
  toDay: number
  note: string
}

// Week-by-week husbandry checkpoints, keyed off days since breeding.
const STAGES: Stage[] = [
  {
    label: 'Weeks 1-2 (days 0-14)',
    fromDay: 0,
    toDay: 14,
    note: 'Fertilization and early embryo travel. Continue normal care and feeding. No visible signs yet; keep the dam calm and avoid strenuous activity.',
  },
  {
    label: 'Weeks 3-4 (days 15-28)',
    fromDay: 15,
    toDay: 28,
    note: 'Embryos implant in the uterine wall (~day 16-18). The Merck owner page says ultrasound is reliable by about days 25–35.',
  },
  {
    label: 'Weeks 5-6 (days 29-42)',
    fromDay: 29,
    toDay: 42,
    note: 'Fetal development accelerates and the dam’s appetite and weight typically increase. Many breeders gradually transition to a higher-calorie or puppy formula in this window; ask your veterinarian about feeding for pregnancy.',
  },
  {
    label: 'Weeks 7-8 (days 43-56)',
    fromDay: 43,
    toDay: 56,
    note: 'The Merck owner page says radiographs are useful after about day 45, and that the litter count is most reliable after about day 55. Set up a quiet whelping box now so the dam can acclimate.',
  },
  {
    label: 'Week 9 (days 57-72)',
    fromDay: 57,
    toDay: 72,
    note: 'Final stretch. Merck says a drop in rectal temperature usually precedes delivery by about 8 to 24 hours. This tool does not print a degree target. If the window passes with no labor, contact your veterinarian.',
  },
]

interface Result {
  breeding: Date
  due: Date
  windowStart: Date
  windowEnd: Date
  ultrasoundStart: Date
  ultrasoundEnd: Date
  xrayFrom: Date
}

type Clock = 'breeding' | 'ovulation'

function compute(breeding: Date, clock: Clock): Result {
  const ovulationClock = clock === 'ovulation'
  return {
    breeding,
    due: addDays(breeding, AVG_DAYS),
    windowStart: addDays(breeding, ovulationClock ? OVULATION_MIN_DAYS : MIN_DAYS),
    windowEnd: addDays(breeding, ovulationClock ? OVULATION_MAX_DAYS : MAX_DAYS),
    ultrasoundStart: addDays(breeding, 25),
    ultrasoundEnd: addDays(breeding, 35),
    xrayFrom: addDays(breeding, 45),
  }
}

/** Calendar-day delta from local today (noon) to the estimated due date. */
function daysUntil(due: Date): number {
  const today = new Date()
  const start = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 0, 0, 0)
  const end = new Date(due.getFullYear(), due.getMonth(), due.getDate(), 12, 0, 0, 0)
  return Math.round((end.getTime() - start.getTime()) / 86_400_000)
}

function daysUntilCopy(n: number): string {
  if (n > 1) return `${n} days from today`
  if (n === 1) return '1 day from today'
  if (n === 0) return 'due window starts around today'
  if (n === -1) return '1 day past day 63'
  return `${Math.abs(n)} days past day 63`
}

export default function DogGestationCalculator() {
  const [breedingStr, setBreedingStr] = useState<string>('')
  const [clock, setClock] = useState<Clock>('breeding')

  const breeding = useMemo(() => parseInputDate(breedingStr), [breedingStr])
  const breedingError = (() => {
    if (!breedingStr.trim()) return null
    if (!breeding) return 'Enter the breeding date as a date.'
    const year = breeding.getFullYear()
    if (year < 1990 || year > 2100) return 'Enter a breeding date between 1990 and 2100.'
    return null
  })()
  const result = useMemo(
    () => (breeding && !breedingError ? compute(breeding, clock) : null),
    [breeding, breedingError, clock],
  )
  const daysUntilDue = result ? daysUntil(result.due) : null

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      {/* Input */}
      <div className="max-w-sm">
        <label htmlFor="gest-date" className="mb-1 block text-xs font-medium text-brand-text-mid">
          Date of breeding (or ovulation, if known)
        </label>
        <input
          id="gest-date"
          type="date"
          value={breedingStr}
          aria-invalid={breedingError ? true : undefined}
          onChange={(e) => setBreedingStr(e.target.value)}
          className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
        />
        <p className="mt-1 text-2xs text-brand-text-light">
          A heat-start date is not a breeding date. This tool does not count 63 days from the first day of heat.
        </p>
        <fieldset className="mt-3">
          <legend className="mb-1 text-xs font-medium text-brand-text-mid">What date is this?</legend>
          <label className="mr-4 text-sm text-brand-text-mid">
            <input
              type="radio"
              name="gest-clock"
              className="mr-1"
              checked={clock === 'breeding'}
              onChange={() => setClock('breeding')}
            />
            Breeding, stage of estrus unknown
          </label>
          <label className="text-sm text-brand-text-mid">
            <input
              type="radio"
              name="gest-clock"
              className="mr-1"
              checked={clock === 'ovulation'}
              onChange={() => setClock('ovulation')}
            />
            Ovulation timed by a veterinarian
          </label>
        </fieldset>
      </div>

      {/* Results */}
      <div aria-live="polite" aria-atomic="true" className="mt-6">
        {breedingError && <ToolError>{breedingError}</ToolError>}
        {!result && !breedingError && (
          <div className="rounded border border-brand-border bg-brand-white p-5 text-sm text-brand-text-mid">
            Enter a date. An untimed breeding uses Merck’s 58–72 day window. A timed ovulation uses 62–64 days.
          </div>
        )}

        {result && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded border-2 border-brand-primary bg-brand-primary-pale p-4 sm:col-span-1">
                <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  {clock === 'ovulation' ? 'Ovulation midpoint (day 63)' : 'Day 63 is not the breeding average'}
                </p>
                <p className="mt-1 font-display text-xl text-brand-dark">{fmt(result.due)}</p>
                <p className="mt-0.5 text-2xs text-brand-text-light">
                  {clock === 'ovulation'
                    ? 'Midpoint of Merck’s 62–64 day ovulation window.'
                    : 'Shown only as the midpoint of the 62–64 day ovulation window. Merck does not average an untimed breeding at 63 days.'}
                  {daysUntilDue !== null ? ` · ${daysUntilCopy(daysUntilDue)}` : ''}
                </p>
              </div>
              <div className="rounded border border-brand-border bg-brand-white p-4 sm:col-span-2">
                <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light">
                  {clock === 'ovulation' ? 'Ovulation window (62–64 days)' : 'Breeding window (58–72 days)'}
                </p>
                <p className="mt-1 font-display text-xl text-brand-dark">
                  {fmt(result.windowStart)} &ndash; {fmt(result.windowEnd)}
                </p>
                <p className="mt-0.5 text-2xs text-brand-text-light">
                  {clock === 'ovulation'
                    ? 'Merck: 62–64 days from ovulation timed by progesterone or LH.'
                    : 'Merck: 58–72 days from breeding at an unknown stage of estrus.'}
                </p>
              </div>
            </div>
            <ResultMeaning>
              {clock === 'ovulation'
                ? 'That date is the midpoint of Merck’s 62–64 day ovulation window, not a confirmed whelping date.'
                : 'The range is Merck’s 58–72 day breeding window. Day 63 is the ovulation midpoint only.'}
            </ResultMeaning>

            {/* Checkpoint dates */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded border border-brand-border bg-brand-white p-4">
                <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light">
                  Ultrasound window (~days 25–35)
                </p>
                <p className="mt-1 font-display text-base text-brand-dark">
                  {fmtShort(result.ultrasoundStart)} &ndash; {fmtShort(result.ultrasoundEnd)}
                </p>
                <p className="mt-0.5 text-2xs text-brand-text-light">
                  Your veterinarian can confirm pregnancy by ultrasound in this range.
                </p>
              </div>
              <div className="rounded border border-brand-border bg-brand-white p-4">
                <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light">
                  X-ray for puppy count (~day 45+)
                </p>
                <p className="mt-1 font-display text-base text-brand-dark">
                  from {fmtShort(result.xrayFrom)}
                </p>
                <p className="mt-0.5 text-2xs text-brand-text-light">
                  Your veterinarian can X-ray once skeletons calcify to estimate litter size.
                </p>
              </div>
              <div className="rounded border border-brand-border bg-brand-white p-4">
                <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light">
                  Watch for the temperature drop
                </p>
                <p className="mt-1 font-display text-base text-brand-dark">
                  ~{fmtShort(addDays(result.windowStart, -1))} onward
                </p>
                <p className="mt-0.5 text-2xs text-brand-text-light">
                  Merck: a rectal-temperature drop usually precedes delivery by about 8 to 24 hours. No degree target is printed here.
                </p>
              </div>
            </div>

            {/* Stage timeline */}
            <div className="mt-6">
              <h3 className="mb-3 font-display text-lg font-semibold text-brand-text-dark">
                Week-by-week timeline
              </h3>
              <ol className="space-y-2">
                {STAGES.map((s) => {
                  const start = addDays(result.breeding, s.fromDay)
                  const end = addDays(result.breeding, s.toDay)
                  return (
                    <li
                      key={s.label}
                      className="rounded border border-brand-border bg-brand-white p-3 text-sm"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <span className="font-semibold text-brand-dark">{s.label}</span>
                        <span className="text-2xs text-brand-text-light">
                          {fmtShort(start)} &ndash; {fmtShort(end)}
                        </span>
                      </div>
                      <p className="mt-1 text-brand-text-mid leading-relaxed">{s.note}</p>
                    </li>
                  )
                })}
              </ol>
            </div>
            <p className="mt-4 text-sm">
              <a href="/tools/new-puppy-checklist" className="inline-block max-w-full whitespace-normal font-semibold text-brand-primary underline underline-offset-2">
                Next: new puppy checklist
              </a>
            </p>
          </>
        )}
      </div>

      {/* Disclaimer */}
      <div className="mt-6 rounded border border-amber-700/40 bg-amber-950/20 p-4 text-sm text-amber-900">
        <span className="font-semibold">A breeding estimate, not a diagnosis.</span>{' '}
        How we calculate: an untimed breeding uses Merck’s 58–72 day window. A veterinarian-timed
        ovulation uses 62–64 days, and day 63 is only that window’s midpoint. Pregnancy confirmation,
        puppy count, and labor concerns are questions for your veterinarian.
      </div>

      <p className="mt-4 text-xs text-brand-text-light">
        How we calculate: breeding at an unknown stage of estrus is 58–72 days (Merck Veterinary
        Manual reproductive-system table). Ovulation is 62–64 days, midpoint 63. Ultrasound is the
        Merck owner-page window of about days 25–35. Radiographs start after about day 45; litter
        count is most reliable after about day 55. Temperature timing is Merck’s 8 to 24 hours,
        with no degree figure.
      </p>
    </div>
  )
}
