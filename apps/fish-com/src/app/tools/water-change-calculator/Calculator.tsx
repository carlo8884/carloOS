'use client'

/**
 * Aquarium Water Change Calculator -- /tools/water-change-calculator
 *
 * Client compute. Two modes:
 *   1. Volume (default) — tank size × fill % × change % → gallons/liters to
 *      remove and replace, plus an educational weekly-schedule tip by bioload.
 *   2. Dilution — existing nitrate/TDS/GH/salinity math (CI-pinned).
 *
 * Product-maintenance guidance only. No medical or disease claims.
 * Shop hops reuse live amazon-brand queries (Python-style changer, gravel
 * vacuum, API Master Test Kit) — no invented review URLs.
 */

import { useMemo, useState } from 'react'
import { CalcCard, FieldNumber, FieldSelect, ResultPanel, UnitToggle } from '../_components/CalcShell'
import { ResultCTA } from '../_components/ResultCTA'

const GAL_TO_L = 3.785

type Mode = 'volume' | 'dilution'
type Unit = 'gal' | 'L'
type Bioload = 'light' | 'community' | 'heavy' | 'reef'
type Param = 'nitrate' | 'tds' | 'gh' | 'salinity' | 'custom'

const BIOLOAD: Record<Bioload, { label: string; weeklyPct: string; tip: string }> = {
  light: {
    label: 'Light / heavily planted',
    weeklyPct: '25% every 10–14 days',
    tip: 'Plants consume nitrate. Test before stretching past two weeks.',
  },
  community: {
    label: 'Standard community',
    weeklyPct: '25% weekly',
    tip: 'The usual community-tank maintenance band for stable parameters.',
  },
  heavy: {
    label: 'Heavy bioload (goldfish, large cichlids)',
    weeklyPct: '30–50% weekly, or 25% twice weekly',
    tip: 'Messy fish produce more waste than a tetra community. Step volume or frequency up if nitrate climbs between changes.',
  },
  reef: {
    label: 'Saltwater reef',
    weeklyPct: '10–15% weekly',
    tip: 'Match salinity and temperature on replacement water. Large swings stress corals.',
  },
}

const PARAM_LABEL: Record<Param, { label: string; unit: string; safe: string }> = {
  nitrate: { label: 'Nitrate (NO₃)', unit: 'ppm', safe: 'Keep below 20 ppm for sensitive species, 40 ppm for community.' },
  tds: { label: 'TDS', unit: 'ppm', safe: 'Most fish tolerate 100–400 ppm. Match to species.' },
  gh: { label: 'General Hardness (GH)', unit: 'dGH', safe: 'Soft-water fish prefer < 8 dGH. Livebearers want > 10 dGH.' },
  salinity: { label: 'Salinity', unit: 'ppt', safe: 'Marine reef: 1.025 SG / 35 ppt. Brackish: 5–15 ppt.' },
  custom: { label: 'Custom parameter', unit: '', safe: 'Use any matching units (just keep both fields the same).' },
}

type VolumeResult =
  | { kind: 'error'; message: string }
  | { kind: 'ok'; filled: number; remove: number; removeOther: number; changePct: number }

function computeVolume(tank: number, fillPct: number, changePct: number, unit: Unit): VolumeResult | null {
  if (tank <= 0 || fillPct <= 0 || changePct <= 0) return null
  if (fillPct > 100) return { kind: 'error', message: 'Fill cannot exceed 100%. Use net water volume if the tank is not full.' }
  if (changePct > 100) return { kind: 'error', message: 'A single change cannot exceed 100% of the water that is actually in the tank.' }

  const filled = tank * (fillPct / 100)
  const remove = filled * (changePct / 100)
  const removeOther = unit === 'gal' ? remove * GAL_TO_L : remove / GAL_TO_L
  return { kind: 'ok', filled, remove, removeOther, changePct }
}

type DilutionResult =
  | { kind: 'error'; message: string }
  | { kind: 'ok'; pct: number; gallonsOut: number; litersOut: number; changesNeeded: number; multiChange: boolean }
  | null

function computeDilution(gal: number, c: number, t: number, s: number): DilutionResult {
  if (gal <= 0 || c <= 0 || t < 0) return null
  if (t >= c) return { kind: 'error', message: 'Target is already at or above current level. No water change needed for this parameter.' }
  if (s >= t) return { kind: 'error', message: 'Your source water already exceeds the target. A water change alone can\'t fix this — you need RO/DI water or remineralization.' }

  const fraction = (c - t) / (c - s)
  const pct = Math.min(100, fraction * 100)
  const gallonsOut = gal * fraction
  const litersOut = gallonsOut * GAL_TO_L

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
}

function volumeShop(removeGal: number): { query: string; cta: string; heading: string } {
  if (removeGal >= 20) {
    return {
      query: 'python water changer',
      cta: 'Browse Python-style water changers on Amazon',
      heading: 'A hose-to-sink changer makes large weekly changes faster',
    }
  }
  return {
    query: 'aquarium gravel vacuum siphon water dechlorinator',
    cta: 'Browse gravel vacuums on Amazon',
    heading: 'A gravel-vacuum siphon handles this change in one pass',
  }
}

export default function WaterChangeCalculator() {
  const [mode, setMode] = useState<Mode>('volume')
  const [unit, setUnit] = useState<Unit>('gal')
  const [tankSize, setTankSize] = useState('40')
  const [fillPct, setFillPct] = useState('100')
  const [changePct, setChangePct] = useState('25')
  const [bioload, setBioload] = useState<Bioload>('community')

  const [tankGal, setTankGal] = useState('40')
  const [param, setParam] = useState<Param>('nitrate')
  const [current, setCurrent] = useState('60')
  const [target, setTarget] = useState('20')
  const [sourceLevel, setSourceLevel] = useState('0')

  const volume = useMemo(() => {
    const tank = parseFloat(tankSize) || 0
    const fill = parseFloat(fillPct) || 0
    const change = parseFloat(changePct) || 0
    return computeVolume(tank, fill, change, unit)
  }, [tankSize, fillPct, changePct, unit])

  const dilution: DilutionResult = useMemo(() => {
    const gal = parseFloat(tankGal) || 0
    const c = parseFloat(current) || 0
    const t = parseFloat(target) || 0
    const s = parseFloat(sourceLevel) || 0
    return computeDilution(gal, c, t, s)
  }, [tankGal, current, target, sourceLevel])

  const meta = PARAM_LABEL[param]
  const load = BIOLOAD[bioload]
  const unitLabel = unit === 'gal' ? 'US gal' : 'L'
  const otherLabel = unit === 'gal' ? 'L' : 'US gal'

  const removeGal =
    volume && volume.kind === 'ok'
      ? unit === 'gal'
        ? volume.remove
        : volume.remove / GAL_TO_L
      : 0
  const shop = volumeShop(removeGal)

  function switchUnit(next: Unit) {
    if (next === unit) return
    const n = parseFloat(tankSize)
    if (n > 0) {
      setTankSize(next === 'L' ? (n * GAL_TO_L).toFixed(1) : (n / GAL_TO_L).toFixed(1))
    }
    setUnit(next)
  }

  return (
    <div>
      <CalcCard>
        <UnitToggle
          value={mode}
          onChange={(v) => setMode(v as Mode)}
          options={[
            { value: 'volume', label: 'Volume to change' },
            { value: 'dilution', label: 'Nitrate / parameter target' },
          ]}
        />

        {mode === 'volume' && (
          <>
            <UnitToggle
              value={unit}
              onChange={(v) => switchUnit(v as Unit)}
              options={[
                { value: 'gal', label: 'US gal' },
                { value: 'L', label: 'Liters' },
              ]}
            />
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-0">
              <FieldNumber
                label="Tank Volume"
                value={tankSize}
                onChange={setTankSize}
                unit={unitLabel}
                min={1}
                hint="Labeled gallons, or net volume from the volume calculator."
              />
              <FieldNumber
                label="Current Fill"
                value={fillPct}
                onChange={setFillPct}
                unit="%"
                min={1}
                hint="100% if the tank is filled to the normal water line."
              />
              <FieldNumber
                label="Water Change"
                value={changePct}
                onChange={setChangePct}
                unit="%"
                min={1}
                hint="Typical community change is 25%. Cap a single change at 50%."
              />
              <FieldSelect
                label="Bioload / stocking note"
                value={bioload}
                onChange={(v) => setBioload(v as Bioload)}
                options={(Object.keys(BIOLOAD) as Bioload[]).map((key) => ({
                  value: key,
                  label: BIOLOAD[key].label,
                }))}
              />
            </div>
          </>
        )}

        {mode === 'dilution' && (
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
        )}
      </CalcCard>

      {mode === 'volume' && volume && volume.kind === 'error' && (
        <ResultPanel primary={{ label: 'Cannot calculate', value: '—', sub: volume.message }} />
      )}

      {mode === 'volume' && volume && volume.kind === 'ok' && (
        <ResultPanel
          primary={{
            label: 'Remove and replace',
            value: `${volume.remove.toFixed(1)} ${unitLabel}`,
            sub: `${volume.changePct.toFixed(0)}% of ${volume.filled.toFixed(1)} ${unitLabel} currently in the tank · ${volume.removeOther.toFixed(1)} ${otherLabel}`,
          }}
          secondary={[
            { label: 'Filled volume', value: `${volume.filled.toFixed(1)} ${unitLabel}` },
            { label: 'Schedule tip', value: load.weeklyPct },
          ]}
          note={
            <>
              <strong className="text-white/90">{load.tip}</strong>{' '}
              Match temperature within 2°F and dose dechlorinator before new water touches the tank.
              Single changes over 50% raise the risk of a parameter swing — split those across two days.
              This is maintenance math, not veterinary advice.
            </>
          }
        />
      )}

      {mode === 'volume' && volume && volume.kind === 'ok' && (
        <ResultCTA
          heading={shop.heading}
          blurb={
            <>
              Same Amazon hops used on water-test and fin-rot maintenance pages — no invented SKUs.
              Fish.com earns a commission on qualifying purchases at no extra cost to you.
            </>
          }
          query={shop.query}
          cta={shop.cta}
          source="tools-water-change-calculator"
        />
      )}

      {mode === 'dilution' && dilution && dilution.kind === 'error' && (
        <ResultPanel primary={{ label: 'Cannot reduce', value: '—', sub: dilution.message }} />
      )}

      {mode === 'dilution' && dilution && dilution.kind === 'ok' && (
        <ResultPanel
          primary={{
            label: 'Water change needed',
            value: `${dilution.pct.toFixed(0)}%`,
            sub: dilution.multiChange
              ? `Single change too large. Reach target in ${dilution.changesNeeded} × 50% changes spread over days.`
              : `Replace ${dilution.gallonsOut.toFixed(1)} US gal (${dilution.litersOut.toFixed(0)} L) in one change.`,
          }}
          secondary={[
            { label: 'Volume out', value: `${dilution.gallonsOut.toFixed(1)} gal` },
            { label: 'In liters', value: `${dilution.litersOut.toFixed(0)} L` },
          ]}
          note={
            dilution.multiChange ? (
              <>
                <strong className="text-white/90">Large single water changes are stressful.</strong>{' '}
                Anything over 50% in one go risks a pH or temperature swing, even with matched water. Spread it over several smaller changes 24–48 hours apart.
                For chronic high nitrate, fix the underlying cause: less feeding, more plants, larger filter, or fewer fish.
              </>
            ) : (
              <>
                Match temperature within 2°F before adding new water. Always dose dechlorinator for tap water before it touches the tank.
              </>
            )
          }
        />
      )}

      {mode === 'dilution' && dilution && dilution.kind === 'ok' && (
        <ResultCTA
          heading="Shop a liquid test kit before the next change"
          blurb={
            <>
              Dilution math is only as good as the reading. The same API Freshwater Master Test Kit hop used on the water-test review.
            </>
          }
          query="api freshwater master test kit"
          cta="Browse API Master Test Kit on Amazon"
          source="tools-water-change-calculator"
        />
      )}
    </div>
  )
}
