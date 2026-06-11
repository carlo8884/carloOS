'use client'

/**
 * Horse Feed / Hay Calculator -- /tools/horse-feed-calculator
 * Client compute component. Estimates daily forage / total dry-matter intake
 * from bodyweight, workload, and keeper type.
 *
 * Horses eat roughly 1.5–2.5% of bodyweight in dry matter (DM) per day,
 * forage-first (NRC 2007). This tool returns a daily DM range, a forage
 * baseline, and a "forage first; concentrates only fill the gap" message.
 *
 * Husbandry framing only. No clinical dosing, no medicated-diet prescriptions.
 */

import { useMemo, useState } from 'react'

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

// NRC (2007) total daily DM intake guidance: ~1.5–3.0% of bodyweight depending
// on workload, with forage at minimum ~1.5% of bodyweight to protect gut health.
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
    note: 'Light pleasure or trail work raises calorie needs modestly; quality forage usually still covers most of it.',
  },
  {
    value: 'moderate',
    label: 'Moderate work (3–5 hrs/wk)',
    dmRange: [1.75, 2.5],
    forageMin: 1.5,
    note: 'Regular schooling or ranch work may need a ration balancer or modest concentrate on top of forage to meet energy and nutrient needs.',
  },
  {
    value: 'heavy',
    label: 'Heavy work (race / hard sport)',
    dmRange: [2.0, 3.0],
    forageMin: 1.5,
    note: 'Hard-working horses have the highest energy demand. Keep forage at the core of the ration and add concentrates gradually to fill the calorie gap, fed in several small meals.',
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
  const [weight, setWeight] = useState<string>('')
  const [workload, setWorkload] = useState<Workload>('maintenance')
  const [keeper, setKeeper] = useState<Keeper>('average')

  const wl = WORKLOADS.find((w) => w.value === workload) ?? WORKLOADS[0]
  const kp = KEEPERS.find((k) => k.value === keeper) ?? KEEPERS[1]

  const result: Result | null = useMemo(() => {
    const bw = parseFloat(weight)
    if (Number.isNaN(bw) || !(bw > 0)) return null

    // Keeper biases the percentage band up or down by 0.25 pts, clamped to a
    // sane 1.25–3.25% envelope.
    const clamp = (v: number) => Math.max(1.25, Math.min(3.25, v))
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
  }, [weight, unit, wl, kp])

  const fmt = (n: number) => `${Math.round(n * 10) / 10} ${unit}`

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
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

      {/* Result */}
      <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
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
      </div>

      <div className="mt-6 rounded border border-emerald-700/40 bg-emerald-950/30 p-4 text-emerald-200">
        <p className="text-sm font-semibold">Forage first — concentrates only fill the gap.</p>
        <p className="mt-2 text-sm">
          Build the ration on forage (pasture, hay, haylage) and keep it at roughly 1.5% of
          bodyweight in dry matter or more to protect gut health and reduce ulcer and colic
          risk. Add concentrates or a ration balancer only to fill the energy or nutrient gap
          that forage alone leaves — never as the foundation of the diet.
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
