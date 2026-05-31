'use client'

import { useState, useMemo } from 'react'
import { FieldNumber, FieldSelect } from '../_components/CalcShell'

type StarterMethod = 'fishless-ammonia' | 'bottled-bacteria' | 'used-media' | 'fish-in'

interface Stage {
  label: string
  rangeDays: [number, number]
  description: string
}

interface MethodConfig {
  label: string
  baseDays: number
  baseLow: number
  baseHigh: number
  notes: string
  warning?: string
}

const METHODS: Record<StarterMethod, MethodConfig> = {
  'fishless-ammonia': {
    label: 'Fishless ammonia (most reliable)',
    baseDays: 35,
    baseLow: 28,
    baseHigh: 42,
    notes: 'Dose pure ammonia to ~4 ppm, re-dose when consumed. Tank is empty of fish until cycle completes.',
  },
  'bottled-bacteria': {
    label: 'Fishless + bottled bacteria starter',
    baseDays: 18,
    baseLow: 14,
    baseHigh: 25,
    notes: 'Tetra SafeStart, Seachem Stability, Dr. Tim\'s One & Only — accelerates colonization by 1-3 weeks.',
  },
  'used-media': {
    label: 'Seeded with used filter media',
    baseDays: 10,
    baseLow: 7,
    baseHigh: 14,
    notes: 'Most reliable acceleration — used media from an established healthy tank contains active bacteria.',
  },
  'fish-in': {
    label: 'Fish-in cycling (not recommended)',
    baseDays: 45,
    baseLow: 28,
    baseHigh: 56,
    notes: 'Fish produce the ammonia; daily 25-50% water changes required to keep ammonia / nitrite below 0.25 ppm.',
    warning: 'Fish-in cycling exposes fish to weeks of toxic ammonia / nitrite. Use only when fish-out is impossible. Daily water changes are non-negotiable.',
  },
}

function temperatureMultiplier(tempF: number): number {
  // Nitrosomonas / Nitrobacter optimal: ~78-84°F. Slower below 70, slower above 90.
  if (tempF < 65) return 1.8
  if (tempF < 72) return 1.3
  if (tempF >= 78 && tempF <= 84) return 1.0
  if (tempF > 90) return 1.4
  return 1.1
}

interface Result {
  totalDays: number
  rangeLow: number
  rangeHigh: number
  stages: Stage[]
  tempEffect: string
  warning?: string
  methodNotes: string
}

function compute(method: StarterMethod, tempF: number): Result {
  const config = METHODS[method]
  const tmult = temperatureMultiplier(tempF)
  const total = Math.round(config.baseDays * tmult)
  const low = Math.round(config.baseLow * tmult)
  const high = Math.round(config.baseHigh * tmult)

  // Standard cycle stages (proportions roughly hold across methods)
  const stages: Stage[] = [
    {
      label: 'Phase 1 — Ammonia rises',
      rangeDays: [1, Math.round(total * 0.3)],
      description: 'Ammonia concentration climbs as waste accumulates (or as you dose pure ammonia). Nitrosomonas colonies begin establishing on filter media.',
    },
    {
      label: 'Phase 2 — Nitrite spike',
      rangeDays: [Math.round(total * 0.2), Math.round(total * 0.6)],
      description: 'Ammonia begins falling as Nitrosomonas mature. Nitrite rises sharply — typically the longest phase, and where most "cycle stalls" happen.',
    },
    {
      label: 'Phase 3 — Nitrate appears',
      rangeDays: [Math.round(total * 0.5), Math.round(total * 0.85)],
      description: 'Nitrobacter / Nitrospira colonies mature; nitrite begins falling; nitrate climbs. The cycle is almost complete.',
    },
    {
      label: 'Phase 4 — Cycle complete',
      rangeDays: [Math.round(total * 0.85), total],
      description: 'Both 4 ppm ammonia and 4 ppm nitrite dose to zero within 24 hours. Nitrate present (40-80 ppm typical). Water change down to <40 ppm nitrate, then begin fish stocking.',
    },
  ]

  let tempEffect = ''
  if (tempF < 72) tempEffect = `Cool water slows bacterial growth — adds ~${Math.round((tmult - 1) * 100)}% to the typical timeline.`
  else if (tempF >= 78 && tempF <= 84) tempEffect = 'Tropical-tank temperature is near-optimal for cycling bacteria.'
  else if (tempF > 90) tempEffect = `Very warm water — bacteria can stress above 90°F; adds ~${Math.round((tmult - 1) * 100)}% to the timeline.`
  else tempEffect = 'Slightly below optimal; minor slowing.'

  return {
    totalDays: total,
    rangeLow: low,
    rangeHigh: high,
    stages,
    tempEffect,
    warning: config.warning,
    methodNotes: config.notes,
  }
}

export default function Calculator() {
  const [method, setMethod] = useState<StarterMethod>('bottled-bacteria')
  const [tempF, setTempF] = useState('78')

  const result = useMemo(() => compute(method, Number(tempF) || 78), [method, tempF])

  return (
    <div className="border border-brand-border rounded p-6 bg-brand-surface">
      <FieldSelect
        label="Cycling method"
        value={method}
        onChange={(v) => setMethod(v as StarterMethod)}
        options={(Object.entries(METHODS) as Array<[StarterMethod, MethodConfig]>).map(([k, v]) => ({ value: k, label: v.label }))}
      />
      <p className="text-xs text-brand-text-light -mt-2 mb-4">{result.methodNotes}</p>

      <FieldNumber
        label="Tank temperature (°F)"
        value={tempF}
        onChange={setTempF}
        unit="°F"
        min={50}
        step={1}
        hint="Tropical setup ~78°F is near-optimal. Cold-water tanks cycle noticeably slower."
      />

      {result.warning && (
        <div className="mb-4 rounded border border-amber-700/50 bg-amber-950/30 p-3 text-sm text-amber-100">
          <span className="font-semibold">Welfare note: </span>{result.warning}
        </div>
      )}

      <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="rounded border border-brand-border bg-brand-white p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-light">Estimated cycle time</p>
          <p className="mt-1 font-display text-3xl text-brand-dark">{result.totalDays} days</p>
          <p className="mt-1 text-xs text-brand-text-light">Typical range: {result.rangeLow}-{result.rangeHigh} days</p>
        </div>
        <div className="rounded border border-brand-border bg-brand-white p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-light">Temperature effect</p>
          <p className="mt-1 text-sm text-brand-dark">{result.tempEffect}</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-bold uppercase tracking-wide text-brand-text-light mb-3">Stage timeline</h3>
        <ul className="space-y-3">
          {result.stages.map((stage, i) => (
            <li key={i} className="rounded border border-brand-border bg-brand-white p-3">
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-semibold text-brand-dark">{stage.label}</p>
                <p className="text-xs text-brand-text-light whitespace-nowrap">Days {stage.rangeDays[0]}–{stage.rangeDays[1]}</p>
              </div>
              <p className="mt-1 text-sm text-brand-text">{stage.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-4 text-xs text-brand-text-light">
        Estimator only. Real cycling time depends on bacterial colonization rate, filter media surface area, and uncontrolled variables (e.g. residual cleaner residues in new tanks). The only ground-truth signal is a test kit reading 0 ppm ammonia and 0 ppm nitrite within 24 hours of a 4 ppm ammonia dose.
      </p>
    </div>
  )
}
