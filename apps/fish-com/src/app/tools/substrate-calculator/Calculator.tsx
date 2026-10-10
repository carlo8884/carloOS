'use client'

import { useMemo, useState } from 'react'
import { ResultMeaning, numberFieldError } from '@carloOS/ui'
import { CalcCard, FieldNumber, FieldSelect, ResultPanel, UnitToggle } from '../_components/CalcShell'
import { ResultCTA } from '../_components/ResultCTA'

type Unit = 'in' | 'cm'
type Substrate = 'gravel' | 'sand' | 'aquasoil'

const CM_PER_IN = 2.54
const G_PER_LB = 453.592
const KG_PER_G = 0.001

// Working densities (g/cm³) for bag-weight planning. Not a lab measurement.
const DENSITY: Record<Substrate, { value: number; label: string; note: string }> = {
  gravel: {
    value: 1.6,
    label: 'Gravel',
    note: 'planning figure 1.6 g/cm³, not a lab measurement',
  },
  sand: {
    value: 1.5,
    label: 'Sand',
    note: 'planning figure 1.5 g/cm³, not a lab measurement',
  },
  aquasoil: {
    value: 0.8,
    label: 'Aqua soil (planted)',
    note: 'planning figure 0.8 g/cm³, not a lab measurement',
  },
}

const BUY_MARGIN = 1.1 // buy ~10% extra

export default function SubstrateCalculator() {
  const [unit, setUnit] = useState<Unit>('in')
  const [length, setLength] = useState('30')
  const [width, setWidth] = useState('12')
  const [depth, setDepth] = useState('2')
  const [substrate, setSubstrate] = useState<Substrate>('gravel')

  const dimMax = unit === 'in' ? 240 : 600
  const depthMax = unit === 'in' ? 12 : 30
  const lengthError = numberFieldError(length, 'tank length', 1, dimMax, unit)
  const widthError = numberFieldError(width, 'tank width', 1, dimMax, unit)
  const depthError = numberFieldError(depth, 'substrate depth', unit === 'in' ? 0.25 : 0.5, depthMax, unit)
  const inputError = lengthError || widthError || depthError

  const result = useMemo(() => {
    if (inputError) return null
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
  }, [unit, length, width, depth, substrate, inputError])

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
            min={1}
            max={dimMax}
            step={0.1}
            error={lengthError}
          />

          <FieldNumber
            label="Tank Width (front to back)"
            value={width}
            onChange={setWidth}
            unit={unit}
            min={1}
            max={dimMax}
            step={0.1}
            error={widthError}
          />

          <FieldNumber
            label="Substrate Depth"
            value={depth}
            onChange={setDepth}
            unit={unit}
            min={unit === 'in' ? 0.25 : 0.5}
            max={depthMax}
            step={0.1}
            hint="UF/IFAS VM144 places gravel 2–3 in deep on an undergravel plate, or 5 in with live plants. Enter the depth you want."
            error={depthError}
          />

          <FieldSelect
            label="Substrate Type"
            value={substrate}
            onChange={(v) => setSubstrate(v as Substrate)}
            options={[
              { value: 'gravel', label: 'Gravel (planning density 1.6 g/cm³)' },
              { value: 'sand', label: 'Sand (planning density 1.5 g/cm³)' },
              { value: 'aquasoil', label: 'Aqua soil — planted (planning density 0.8 g/cm³)' },
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
              Bags settle, slope, and never pour to an exact level. Use the liters figure to count bags.
              Weights use this calculator&apos;s working density ({DENSITY[substrate].note}). Check the weight
              printed on the bag.
            </>
          }
        />
      )}

      {result && (
        <ResultMeaning>
          That weight is how much substrate to buy for this footprint and depth, including about 10% extra for settling. Check the bag, because poured density varies by product.
        </ResultMeaning>
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
