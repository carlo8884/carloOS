'use client'

import { useMemo, useState } from 'react'
import { CalcCard, FieldNumber, FieldSelect, ResultPanel, UnitToggle } from '../_components/CalcShell'
import { ResultCTA } from '../_components/ResultCTA'

type Unit = 'in' | 'cm'
type Substrate = 'gravel' | 'sand' | 'aquasoil'

const CM_PER_IN = 2.54
const G_PER_LB = 453.592
const KG_PER_G = 0.001

// Bulk densities (g/cm³), poured/settled — realistic aquarium values.
// Gravel and sand are denser than aqua soil, which is a light baked clay.
const DENSITY: Record<Substrate, { value: number; label: string; note: string }> = {
  gravel: {
    value: 1.6,
    label: 'Gravel',
    note: 'standard aquarium gravel, ~1.5–1.7 g/cm³ poured',
  },
  sand: {
    value: 1.5,
    label: 'Sand',
    note: 'aquarium / play sand, ~1.5 g/cm³ poured',
  },
  aquasoil: {
    value: 0.8,
    label: 'Aqua soil (planted)',
    note: 'baked-clay aquasoil is much lighter, ~0.7–0.9 g/cm³',
  },
}

const BUY_MARGIN = 1.1 // buy ~10% extra

export default function SubstrateCalculator() {
  const [unit, setUnit] = useState<Unit>('in')
  const [length, setLength] = useState('30')
  const [width, setWidth] = useState('12')
  const [depth, setDepth] = useState('2')
  const [substrate, setSubstrate] = useState<Substrate>('gravel')

  const result = useMemo(() => {
    const lRaw = parseFloat(length) || 0
    const wRaw = parseFloat(width) || 0
    const dRaw = parseFloat(depth) || 0
    if (lRaw <= 0 || wRaw <= 0 || dRaw <= 0) return null

    // Convert all dimensions to cm, then compute volume in cm³.
    const toCm = (v: number) => (unit === 'in' ? v * CM_PER_IN : v)
    const lCm = toCm(lRaw)
    const wCm = toCm(wRaw)
    const dCm = toCm(dRaw)

    const volumeCm3 = lCm * wCm * dCm
    const density = DENSITY[substrate].value
    const grams = volumeCm3 * density
    const kg = grams * KG_PER_G
    const lbs = grams / G_PER_LB
    const liters = volumeCm3 / 1000 // 1 L = 1000 cm³

    return {
      volumeCm3,
      liters,
      kg,
      lbs,
      kgBuy: kg * BUY_MARGIN,
      lbsBuy: lbs * BUY_MARGIN,
      litersBuy: liters * BUY_MARGIN,
    }
  }, [unit, length, width, depth, substrate])

  return (
    <div>
      <CalcCard>
        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-0">
          <div className="col-span-full">
            <UnitToggle
              value={unit}
              onChange={(v) => setUnit(v as Unit)}
              options={[
                { value: 'in', label: 'Inches' },
                { value: 'cm', label: 'Centimeters' },
              ]}
            />
          </div>

          <FieldNumber
            label="Tank Length"
            value={length}
            onChange={setLength}
            unit={unit}
            min={0}
            step={0.1}
          />

          <FieldNumber
            label="Tank Width (front to back)"
            value={width}
            onChange={setWidth}
            unit={unit}
            min={0}
            step={0.1}
          />

          <FieldNumber
            label="Substrate Depth"
            value={depth}
            onChange={setDepth}
            unit={unit}
            min={0}
            step={0.1}
            hint="1–2 in (2.5–5 cm) is typical; go 2.5–3 in for rooted/planted tanks."
          />

          <FieldSelect
            label="Substrate Type"
            value={substrate}
            onChange={(v) => setSubstrate(v as Substrate)}
            options={[
              { value: 'gravel', label: 'Gravel (~1.6 g/cm³)' },
              { value: 'sand', label: 'Sand (~1.5 g/cm³)' },
              { value: 'aquasoil', label: 'Aqua soil — planted (~0.8 g/cm³)' },
            ]}
          />
        </div>
      </CalcCard>

      {result && (
        <ResultPanel
          primary={{
            label: 'Substrate to buy (incl. ~10% extra)',
            value: `${result.lbsBuy.toFixed(1)} lb`,
            sub: `${result.kgBuy.toFixed(1)} kg · about ${result.litersBuy.toFixed(1)} liters of ${DENSITY[substrate].label.toLowerCase()}`,
          }}
          secondary={[
            { label: 'Exact volume', value: `${result.liters.toFixed(1)} L` },
            { label: 'Exact weight', value: `${result.lbs.toFixed(1)} lb` },
            { label: 'Exact weight (kg)', value: `${result.kg.toFixed(1)} kg` },
            { label: 'Density used', value: `${DENSITY[substrate].value} g/cm³` },
          ]}
          note={
            <>
              <strong className="text-white/90">Buy ~10% extra.</strong>{' '}
              Bags settle, slope, and never pour to an exact level. Weights are estimates from typical poured densities
              ({DENSITY[substrate].note}); your product&apos;s actual density may vary, so check the bag.
            </>
          }
        />
      )}

      {result && (
        <ResultCTA
          heading={`Shop ${DENSITY[substrate].label.toLowerCase()} for your tank`}
          blurb={
            <>
              You need about {result.lbsBuy.toFixed(0)} lb ({result.kgBuy.toFixed(0)} kg) including a 10% buffer. Match the
              substrate type to your fish and plants before buying.
            </>
          }
          query={`aquarium ${substrate === 'aquasoil' ? 'aquasoil planted substrate' : substrate}`}
          cta={`Browse ${DENSITY[substrate].label.toLowerCase()} on Amazon`}
          source="tools-substrate-calculator"
        />
      )}
    </div>
  )
}
