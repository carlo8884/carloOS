'use client'

/**
 * Horse Gestation / Foaling Date Calculator -- /tools/horse-gestation-calculator
 * Client compute component. Estimates a mare's foaling date from her
 * breeding (last-cover) date.
 *
 * Mare gestation averages ~340 days, with a normal range of roughly
 * 320-362 days. Individual mares, season (spring-conceived foals tend to
 * gestate slightly longer), and breed all shift the figure. We default to
 * 340 days and let the user override the gestation length.
 *
 *   Estimated foaling date = breeding date + gestationDays
 *   Early window           = breeding date + 320 days
 *   Late window            = breeding date + 362 days
 *
 * Husbandry/breeding estimate ONLY. No veterinary diagnosis. The output is
 * framed against ultrasound-confirmed dating and veterinary foaling
 * management.
 */

import { useMemo, useState } from 'react'

const DEFAULT_GESTATION = 340
const EARLY_DAYS = 320
const LATE_DAYS = 362

interface Result {
  due: Date
  early: Date
  late: Date
  gestationUsed: number
}

function addDays(date: Date, days: number): Date {
  const d = new Date(date.getTime())
  d.setDate(d.getDate() + days)
  return d
}

function formatDate(d: Date): string {
  return d.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function compute(breedingDate: string, gestation: number): Result | null {
  if (!breedingDate) return null
  // Parse as a local date (avoid UTC shift on YYYY-MM-DD).
  const [y, m, day] = breedingDate.split('-').map((n) => parseInt(n, 10))
  if (!y || !m || !day) return null
  const base = new Date(y, m - 1, day)
  if (Number.isNaN(base.getTime())) return null
  const g = gestation > 0 ? gestation : DEFAULT_GESTATION
  return {
    due: addDays(base, g),
    early: addDays(base, EARLY_DAYS),
    late: addDays(base, LATE_DAYS),
    gestationUsed: g,
  }
}

export default function Calculator() {
  const [breedingDate, setBreedingDate] = useState<string>('')
  const [gestation, setGestation] = useState<string>(String(DEFAULT_GESTATION))

  const result = useMemo(() => {
    const g = parseInt(gestation, 10)
    return compute(breedingDate, Number.isNaN(g) ? DEFAULT_GESTATION : g)
  }, [breedingDate, gestation])

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="hg-date"
            className="mb-1 block text-sm font-medium text-brand-text-dark"
          >
            Breeding / last cover date
          </label>
          <p className="mb-2 text-xs text-brand-text-mid">
            The date the mare was bred (live cover or insemination). For a
            multi-day breeding window, use the last cover date.
          </p>
          <input
            id="hg-date"
            type="date"
            value={breedingDate}
            onChange={(e) => setBreedingDate(e.target.value)}
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
          />
        </div>

        <div>
          <label
            htmlFor="hg-gestation"
            className="mb-1 block text-sm font-medium text-brand-text-dark"
          >
            Gestation length (days)
          </label>
          <p className="mb-2 text-xs text-brand-text-mid">
            Defaults to the ~340-day average. Adjust if your mare or breed has a
            known tendency (normal range is roughly {EARLY_DAYS}&ndash;{LATE_DAYS}).
          </p>
          <input
            id="hg-gestation"
            type="number"
            inputMode="numeric"
            min="280"
            max="400"
            step="1"
            value={gestation}
            onChange={(e) => setGestation(e.target.value)}
            placeholder={String(DEFAULT_GESTATION)}
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
          />
        </div>
      </div>

      {/* Result */}
      <div className="mt-6 rounded border border-brand-border bg-brand-surface p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-mid">
          Estimated foaling date
        </p>
        <p className="mt-1 font-display text-3xl text-brand-text-dark">
          {result ? formatDate(result.due) : '—'}
        </p>
        <p className="mt-1 text-xs text-brand-text-mid">
          {result
            ? `Based on a ${result.gestationUsed}-day gestation`
            : 'Enter the breeding date'}
        </p>
      </div>

      {result && (
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded border border-brand-border bg-brand-surface p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-mid">
              Earliest expected (~{EARLY_DAYS} days)
            </p>
            <p className="mt-1 font-display text-lg text-brand-text-dark">
              {formatDate(result.early)}
            </p>
          </div>
          <div className="rounded border border-brand-border bg-brand-surface p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-mid">
              Latest expected (~{LATE_DAYS} days)
            </p>
            <p className="mt-1 font-display text-lg text-brand-text-dark">
              {formatDate(result.late)}
            </p>
          </div>
        </div>
      )}

      <p className="mt-4 text-sm text-brand-text-mid">
        Mare gestation varies with the individual, the season, and the breed.
        Spring-conceived foals tend to gestate slightly longer than
        autumn-conceived ones, and a healthy foal can arrive anywhere across the{' '}
        {EARLY_DAYS}&ndash;{LATE_DAYS}-day window. Treat the date above as a
        planning estimate, not a deadline.
      </p>

      <p className="mt-4 text-xs text-brand-text-mid">
        This is a breeding-management <strong>estimate</strong> from a calendar
        formula. It does not confirm pregnancy or stage of gestation.{' '}
        <strong>Consult your veterinarian</strong> for foaling management and an
        accurate due date via ultrasound.
      </p>
    </div>
  )
}
