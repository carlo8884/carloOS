'use client'

/**
 * Horse Feed / Hay Calculator -- /tools/horse-feed-calculator
 * Client compute component. Estimates daily forage / total dry-matter intake
 * from bodyweight, workload, and keeper type.
 *
 * Merck Veterinary Manual (citing Nutrient Requirements of Horses, 6th ed.,
 * NRC 2007): at least 1.5–2% of body weight in forage per day on a dry-matter
 * basis, and maximal daily intake estimated at 2.5–3% of body weight in dry
 * matter. Workload splits inside that envelope, and the ±0.25 keeper shift,
 * are planning figures. The percent band is clamped to 1.5–3.0.
 *
 * Husbandry framing only. No clinical dosing, no medicated-diet prescriptions.
 */

import { useMemo, useState } from 'react'
import { ResultMeaning, ResultPick, ToolError, foragePick, numberFieldError } from '@carloOS/ui'

type Unit = 'lb' | 'kg'
type Workload = 'maintenance' | 'light' | 'moderate' | 'heavy'
type Keeper = 'easy' | 'average' | 'hard'

interface WorkloadOption {
  value: Workload
  label: string
  /** Total daily DM as a fraction of bodyweight: [min, max]. */
  dmRange: [number, number]
  /** Suggested forage share of total DM (min-forage fraction of bodyweight). */
  forageMin: number
  note: string
}

// Merck: forage at least 1.5–2% of body weight (DM); maximal intake 2.5–3% BW DM.
// https://www.merckvetmanual.com/management-and-nutrition/nutrition-horses/nutritional-requirements-of-horses
// Maintenance uses that forage band. Light, moderate, and heavy splits are planning figures inside 1.5–3%.
const WORKLOADS: WorkloadOption[] = [
  {
    value: 'maintenance',
    label: 'Maintenance (no work)',
    dmRange: [1.5, 2.0],
    forageMin: 1.5,
    note: 'An idle or lightly turned-out horse can usually meet its needs on good forage alone, often with no concentrate at all.',
  },
  {
    value: 'light',
    label: 'Light work (1–3 hrs/wk)',
    dmRange: [1.5, 2.5],
    forageMin: 1.5,
    note: 'Planning split inside the published 1.5–3% envelope. Light pleasure or trail work raises calorie needs modestly; quality forage usually still covers most of it.',
  },
  {
    value: 'moderate',
    label: 'Moderate work (3–5 hrs/wk)',
    dmRange: [1.75, 2.5],
    forageMin: 1.5,
    note: 'Planning split. The 1.75% floor is not a separate figure on the Merck page. Regular schooling may need a ration balancer on top of forage.',
  },
  {
    value: 'heavy',
    label: 'Heavy work (race / hard sport)',
    dmRange: [2.0, 3.0],
    forageMin: 1.5,
    note: 'Planning split. The 3% ceiling matches Merck’s estimated maximal intake. Keep forage at the core and add concentrates gradually, in several small meals.',
  },
]

const KEEPERS: { value: Keeper; label: string; bias: number; note: string }[] = [
  {
    value: 'easy',
    label: 'Easy keeper (holds weight easily)',
    bias: -0.25,
    note: 'Easy keepers maintain on less feed and are prone to obesity and laminitis. Lean toward the lower end of the range and prioritise lower-calorie forage with a slow-feeder net.',
  },
  {
    value: 'average',
    label: 'Average',
    bias: 0,
    note: 'Use the standard range and adjust based on body condition score over the following weeks.',
  },
  {
    value: 'hard',
    label: 'Hard keeper (struggles to hold weight)',
    bias: 0.25,
    note: 'Hard keepers need the upper end of the range, higher-calorie forage, and often added fat sources. Rule out dental, parasite, and health issues first.',
  },
]

interface Result {
  unit: Unit
  totalMin: number
  totalMax: number
  forageMin: number
  forageMid: number
}

function toDisplay(weightKg: number, unit: Unit): number {
  return unit === 'kg' ? weightKg : weightKg / 0.453592
}

export default function Calculator() {
  const [unit, setUnit] = useState<Unit>('lb')
  const [weight, setWeight] = useState<string>('1000')
  const [workload, setWorkload] = useState<Workload>('maintenance')
  const [keeper, setKeeper] = useState<Keeper>('average')

  const wl = WORKLOADS.find((w) => w.value === workload) ?? WORKLOADS[0]
  const kp = KEEPERS.find((k) => k.value === keeper) ?? KEEPERS[1]
  const weightError = numberFieldError(
    weight,
    'bodyweight',
    unit === 'lb' ? 100 : 45,
    unit === 'lb' ? 2500 : 1200,
    unit,
  )

  const result: Result | null = useMemo(() => {
    if (weightError) return null
    const bw = parseFloat(weight)
    if (Number.isNaN(bw) || !(bw > 0)) return null

    // Keeper bias is a planning shift of 0.25 points, clamped to Merck’s
    // 1.5% forage floor and 3% estimated maximal intake.
    const clamp = (v: number) => Math.max(1.5, Math.min(3.0, v))
    const minPct = clamp(wl.dmRange[0] + kp.bias)
    const maxPct = clamp(wl.dmRange[1] + kp.bias)
    const foragePct = clamp(wl.forageMin + Math.min(0, kp.bias))

    return {
      unit,
      totalMin: (bw * minPct) / 100,
      totalMax: (bw * maxPct) / 100,
      forageMin: (bw * foragePct) / 100,
      forageMid: (bw * ((foragePct + Math.min(maxPct, foragePct + 0.5)) / 2)) / 100,
    }
  }, [weight, unit, wl, kp, weightError])

  const fmt = (n: number) => `${Math.round(n * 10) / 10} ${unit}`

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      {result ? (
        <ResultPick linkFirst siteId="horses-com" pick={foragePick(`${fmt(result.forageMin)}+`, wl.label)} />
      ) : null}
      {/* Unit toggle */}
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-brand-text-mid">
          Units
        </span>
        {(['lb', 'kg'] as Unit[]).map((u) => (
          <button
            key={u}
            type="button"
            onClick={() => setUnit(u)}
            className={`rounded border px-3 py-1.5 text-sm transition ${
              unit === u
                ? 'border-brand-primary bg-brand-primary/10 text-brand-text-dark'
                : 'border-brand-border text-brand-text-mid hover:border-brand-primary'
            }`}
          >
            {u === 'lb' ? 'Pounds' : 'Kilograms'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label
            htmlFor="hf-weight"
            className="mb-1 block text-sm font-medium text-brand-text-dark"
          >
            Bodyweight ({unit})
          </label>
          <p className="mb-2 text-xs text-brand-text-mid">
            Don&rsquo;t have a figure? Estimate it first with the{' '}
            <a href="/tools/horse-weight-calculator" className="text-brand-primary underline">
              horse weight calculator
            </a>
            , then enter the result here.
          </p>
          <input
            id="hf-weight"
            type="number"
            inputMode="decimal"
            min="0"
            step="1"
            value={weight}
            aria-invalid={weightError ? true : undefined}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={unit === 'lb' ? 'e.g. 1000' : 'e.g. 450'}
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
          />
        </div>

        <div>
          <label
            htmlFor="hf-workload"
            className="mb-1 block text-sm font-medium text-brand-text-dark"
          >
            Workload
          </label>
          <select
            id="hf-workload"
            value={workload}
            onChange={(e) => setWorkload(e.target.value as Workload)}
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
          >
            {WORKLOADS.map((w) => (
              <option key={w.value} value={w.value}>
                {w.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="hf-keeper"
            className="mb-1 block text-sm font-medium text-brand-text-dark"
          >
            Keeper type
          </label>
          <select
            id="hf-keeper"
            value={keeper}
            onChange={(e) => setKeeper(e.target.value as Keeper)}
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
          >
            {KEEPERS.map((k) => (
              <option key={k.value} value={k.value}>
                {k.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {weightError && <ToolError>{weightError}</ToolError>}

      {/* Result */}
      {result && <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="rounded border border-brand-border bg-brand-surface p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-mid">
            Total daily dry matter
          </p>
          <p className="mt-1 font-display text-3xl text-brand-text-dark">
            {result ? `${fmt(result.totalMin)} – ${fmt(result.totalMax)}` : '—'}
          </p>
          <p className="mt-1 text-xs text-brand-text-mid">
            {result ? 'Dry-matter weight, all feeds combined' : 'Enter a bodyweight'}
          </p>
        </div>
        <div className="rounded border border-brand-border bg-brand-surface p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-mid">
            Forage baseline (minimum)
          </p>
          <p className="mt-1 font-display text-3xl text-brand-text-dark">
            {result ? `${fmt(result.forageMin)}+` : '—'}
          </p>
          <p className="mt-1 text-xs text-brand-text-mid">
            {result ? 'Keep forage DM at or above this floor' : 'Enter a bodyweight'}
          </p>
        </div>
      </div>}

      {result && (
        <>
        <ResultMeaning>
          This range is a daily dry-matter target from the bodyweight you entered, a forage-first planning figure rather than a weighed ration.
        </ResultMeaning>
        <p className="mt-3 text-sm">
          <a href="/nutrition/forage-basics" className="font-semibold text-brand-primary underline underline-offset-2">Read forage basics →</a>
        </p>
        </>
      )}

      <div className="mt-6 rounded border border-emerald-700 bg-emerald-950 p-4 text-emerald-200">
        <p className="text-sm font-semibold">Forage first — concentrates only fill the gap.</p>
        <p className="mt-2 text-sm">
          How we calculate: Merck, citing Nutrient Requirements of Horses (NRC 2007), says horses
          should get at least 1.5–2% of body weight in forage per day on a dry-matter basis, and
          estimates maximal daily intake at 2.5–3% of body weight. Maintenance uses that 1.5–2%
          forage band. Light, moderate, and heavy splits, and the 0.25-point keeper shift, are
          planning figures clamped to 1.5–3%. The 88–90% hay dry-matter step below is a planning
          conversion, not a forage analysis.
        </p>
      </div>

      <p className="mt-4 text-sm text-brand-text-mid">{wl.note}</p>
      <p className="mt-2 text-sm text-brand-text-mid">{kp.note}</p>

      <div className="mt-4 rounded border border-brand-border bg-brand-surface p-4 text-xs text-brand-text-mid">
        <p>
          <strong>Dry matter vs. as-fed.</strong> These figures are dry-matter (DM) weights.
          Grass hay is roughly 88–90% DM, so a horse needing 18 lb of hay DM eats about 20 lb
          of hay as-fed. Fresh pasture is much wetter (often 20–30% DM), so a horse on grass
          eats far more by weight to reach the same dry matter.
        </p>
      </div>

      <p className="mt-4 text-xs text-brand-text-mid">
        These are general husbandry estimates based on published intake ranges, not a clinical
        diet. Introduce all feed changes gradually over 7–14 days. For pregnant or lactating
        mares, growing horses, seniors, hard keepers, metabolic or sick horses, and any
        special case, consult an equine nutritionist or your veterinarian for a tailored
        ration.
      </p>
    </div>
  )
}
