'use client'

/**
 * Dog Pregnancy / Whelping Calendar -- /tools/dog-gestation-calculator
 *
 * Client compute component. Canine gestation averages ~63 days from the date
 * of breeding/ovulation, with a normal range of 58-68 days (variation is
 * mostly explained by the gap between breeding and actual conception, since
 * sperm can survive several days in the female tract and an egg matures over
 * a window).
 *
 *   estimated whelping date = breeding date + 63 days
 *   normal window           = breeding date + 58 days ... + 68 days
 *
 * Husbandry/breeding information only -- NOT a diagnosis. Vet checkpoints are
 * framed as "your veterinarian can confirm via ultrasound/X-ray". The
 * temperature-drop note is general owner knowledge, not a medical instruction.
 */

import { useMemo, useState } from 'react'

const AVG_DAYS = 63
const MIN_DAYS = 58
const MAX_DAYS = 68

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
    note: 'Embryos implant in the uterine wall (~day 16-18). Your veterinarian can confirm pregnancy by ultrasound from about days 25-30, which can also check fetal heartbeats.',
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
    note: 'From about day 45, skeletons have calcified enough that your veterinarian can take an X-ray to estimate the puppy count, which helps you know when whelping is complete. Set up a quiet whelping box now so the dam can acclimate.',
  },
  {
    label: 'Week 9 (days 57-63+)',
    fromDay: 57,
    toDay: 70,
    note: 'Final stretch. A well-known owner sign is a drop in the dam’s rectal temperature (often to roughly 98-99°F / below ~100°F) in the ~12-24 hours before labor begins. If the due window passes with no labor, or you have any concern, contact your veterinarian.',
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

function compute(breeding: Date): Result {
  return {
    breeding,
    due: addDays(breeding, AVG_DAYS),
    windowStart: addDays(breeding, MIN_DAYS),
    windowEnd: addDays(breeding, MAX_DAYS),
    ultrasoundStart: addDays(breeding, 25),
    ultrasoundEnd: addDays(breeding, 30),
    xrayFrom: addDays(breeding, 45),
  }
}

export default function DogGestationCalculator() {
  const [breedingStr, setBreedingStr] = useState<string>('')

  const breeding = useMemo(() => parseInputDate(breedingStr), [breedingStr])
  const result = useMemo(() => (breeding ? compute(breeding) : null), [breeding])

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
          onChange={(e) => setBreedingStr(e.target.value)}
          className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
        />
        <p className="mt-1 text-2xs text-brand-text-light">
          If you had a single breeding, use that date. If your veterinarian timed ovulation by
          progesterone testing, the ovulation date gives the tightest estimate.
        </p>
      </div>

      {/* Results */}
      <div aria-live="polite" aria-atomic="true" className="mt-6">
        {!result && (
          <div className="rounded border border-brand-border bg-brand-white p-5 text-sm text-brand-text-mid">
            Enter a breeding date to estimate the whelping (due) date and the normal 58-68 day window.
          </div>
        )}

        {result && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded border-2 border-brand-primary bg-brand-primary-pale p-4 sm:col-span-1">
                <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Estimated whelping date
                </p>
                <p className="mt-1 font-display text-xl text-brand-dark">{fmt(result.due)}</p>
                <p className="mt-0.5 text-2xs text-brand-text-light">
                  Breeding date + 63 days (the canine average)
                </p>
              </div>
              <div className="rounded border border-brand-border bg-brand-white p-4 sm:col-span-2">
                <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light">
                  Normal whelping window (58-68 days)
                </p>
                <p className="mt-1 font-display text-xl text-brand-dark">
                  {fmt(result.windowStart)} &ndash; {fmt(result.windowEnd)}
                </p>
                <p className="mt-0.5 text-2xs text-brand-text-light">
                  Most litters arrive inside this range; the spread reflects how breeding date can
                  differ from true conception.
                </p>
              </div>
            </div>

            {/* Checkpoint dates */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded border border-brand-border bg-brand-white p-4">
                <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light">
                  Ultrasound window (~days 25-30)
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
                  A drop below ~100&deg;F often precedes labor by ~12-24 hours.
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
          </>
        )}
      </div>

      {/* Disclaimer */}
      <div className="mt-6 rounded border border-amber-700/40 bg-amber-950/20 p-4 text-sm text-amber-900">
        <span className="font-semibold">A breeding estimate, not a diagnosis.</span>{' '}
        This calendar adds the canine average of 63 days (normal range 58-68) to your breeding date.
        Because breeding date and true conception can differ by several days, the due date is an
        estimate. Pregnancy confirmation, puppy count, and any concern about the dam or labor are
        questions for your veterinarian, who can confirm via ultrasound and X-ray.
      </div>

      <p className="mt-4 text-xs text-brand-text-light">
        Method: estimated whelping date = breeding date + 63 days; normal window = breeding date +
        58 to +68 days. Ultrasound (~days 25-30) and X-ray (~day 45+) windows are typical veterinary
        checkpoints, and the pre-labor temperature drop is a general owner observation.
      </p>
    </div>
  )
}
