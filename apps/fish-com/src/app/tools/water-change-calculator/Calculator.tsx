'use client'

import { useMemo, useState } from 'react'
import { CalcCard, FieldNumber, FieldSelect, ResultPanel } from '../_components/CalcShell'
import { ResultCTA } from '../_components/ResultCTA'

type Param = 'nitrate' | 'tds' | 'gh' | 'salinity' | 'custom'

const PARAM_LABEL: Record<Param, { label: string; unit: string; safe: string }> = {
  nitrate: { label: 'Nitrate (NO₃)', unit: 'ppm', safe: 'Keep below 20 ppm for sensitive species, 40 ppm for community.' },
  tds: { label: 'TDS', unit: 'ppm', safe: 'Most fish tolerate 100–400 ppm. Match to species.' },
  gh: { label: 'General Hardness (GH)', unit: 'dGH', safe: 'Soft-water fish prefer < 8 dGH. Livebearers want > 10 dGH.' },
  salinity: { label: 'Salinity', unit: 'ppt', safe: 'Marine reef: 1.025 SG / 35 ppt. Brackish: 5–15 ppt.' },
  custom: { label: 'Custom parameter', unit: '', safe: 'Use any matching units (just keep both fields the same).' },
}

export default function WaterChangeCalculator() {
  const [tankGal, setTankGal] = useState('40')
  const [param, setParam] = useState<Param>('nitrate')
  const [current, setCurrent] = useState('60')
  const [target, setTarget] = useState('20')
  const [sourceLevel, setSourceLevel] = useState('0')

  type CalcResult =
    | { kind: 'error'; message: string }
    | { kind: 'ok'; pct: number; gallonsOut: number; litersOut: number; changesNeeded: number; multiChange: boolean }
    | null

  const result: CalcResult = useMemo(() => {
    const gal = parseFloat(tankGal) || 0
    const c = parseFloat(current) || 0
    const t = parseFloat(target) || 0
    const s = parseFloat(sourceLevel) || 0
    if (gal <= 0 || c <= 0 || t < 0) return null
    if (t >= c) return { kind: 'error', message: 'Target is already at or above current level. No water change needed for this parameter.' }
    if (s >= t) return { kind: 'error', message: 'Your source water already exceeds the target. A water change alone can\'t fix this — you need RO/DI water or remineralization.' }

    const fraction = (c - t) / (c - s)
    const pct = Math.min(100, fraction * 100)
    const gallonsOut = gal * fraction
    const litersOut = gallonsOut * 3.785

    const stepFraction = 0.5
    let changesNeeded = 1
    let level = c
    if (pct > 50) {
      changesNeeded = 0
      level = c
      while (level > t && changesNeeded < 20) {
        level = level * (1 - stepFraction) + s * stepFraction
        changesNeeded++
      }
    }

    return { kind: 'ok', pct, gallonsOut, litersOut, changesNeeded, multiChange: pct > 50 }
  }, [tankGal, current, target, sourceLevel])

  const meta = PARAM_LABEL[param]

  return (
    <div>
      <CalcCard>
        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-0">
          <FieldNumber
            label="Tank Volume"
            value={tankGal}
            onChange={setTankGal}
            unit="US gal"
            min={1}
            hint="Use net water volume."
          />
          <FieldSelect
            label="Parameter to Reduce"
            value={param}
            onChange={(v) => setParam(v as Param)}
            options={[
              { value: 'nitrate', label: 'Nitrate (most common)' },
              { value: 'tds', label: 'Total Dissolved Solids (TDS)' },
              { value: 'gh', label: 'General Hardness (GH)' },
              { value: 'salinity', label: 'Salinity' },
              { value: 'custom', label: 'Other (custom)' },
            ]}
          />
          <FieldNumber
            label={`Current ${meta.label}`}
            value={current}
            onChange={setCurrent}
            unit={meta.unit}
            min={0}
            hint={meta.safe}
          />
          <FieldNumber
            label={`Target ${meta.label}`}
            value={target}
            onChange={setTarget}
            unit={meta.unit}
            min={0}
          />
          <FieldNumber
            label="Source Water Level"
            value={sourceLevel}
            onChange={setSourceLevel}
            unit={meta.unit}
            min={0}
            hint="What's in your tap or RO water before going in. Most tap water has 0 ppm nitrate."
          />
        </div>
      </CalcCard>

      {result && result.kind === 'error' && (
        <ResultPanel
          primary={{ label: 'Cannot reduce', value: '—', sub: result.message }}
        />
      )}

      {result && result.kind === 'ok' && (
        <ResultPanel
          primary={{
            label: 'Water change needed',
            value: `${result.pct.toFixed(0)}%`,
            sub: result.multiChange
              ? `Single change too large. Reach target in ${result.changesNeeded} × 50% changes spread over days.`
              : `Replace ${result.gallonsOut.toFixed(1)} US gal (${result.litersOut.toFixed(0)} L) in one change.`,
          }}
          secondary={[
            { label: 'Volume out', value: `${result.gallonsOut.toFixed(1)} gal` },
            { label: 'In liters', value: `${result.litersOut.toFixed(0)} L` },
          ]}
          note={
            result.multiChange ? (
              <>
                <strong className="text-white/90">Large single water changes are stressful.</strong>{' '}
                Anything over 50% in one go risks pH/temperature shock, even with matched water. Spread it over several smaller changes 24–48 hours apart.
                For chronic high nitrate, fix the underlying cause: less feeding, more plants, larger filter, or fewer fish.
              </>
            ) : (
              <>
                Match temperature within 2°F before adding new water. Always dose dechlorinator (Seachem Prime, API Stress Coat) for tap water before it touches the tank.
              </>
            )
          }
        />
      )}

      {result && result.kind === 'ok' && (
        <ResultCTA
          heading="Shop water-change gear: gravel siphon and dechlorinator"
          blurb={
            <>
              A gravel-vacuum siphon makes a {result.pct.toFixed(0)}% change painless, and dechlorinator is required for any tap water before it touches the tank.
            </>
          }
          query="aquarium gravel vacuum siphon water dechlorinator"
          cta="Browse water-change gear on Amazon"
          source="tools-water-change"
        />
      )}
    </div>
  )
}
