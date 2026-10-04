'use client'

/**
 * Pond volume calculator — /tools/pond-volume-calculator
 *
 * Rectangular: L × W × avg depth. Circular: π × (diameter/2)² × avg depth.
 * Oval: π × (L/2) × (W/2) × avg depth. Convert ft³ → US gal with 7.48052.
 * Optional ~85% factor for sloped / irregular liner ponds.
 *
 * Smoke (straight sides, feet):
 *   10 × 8 × 2 ft rectangle → 10 * 8 * 2 * 7.48052 = 1196.8832 ≈ 1197 US gal
 *   circular diameter 10 ft × depth 2 ft → Math.PI * (10 / 2) ** 2 * 2 * 7.48052 ≈ 1175 US gal
 *
 * Product-maintenance guidance only. Shop hops reuse live amazon-brand queries.
 */

import { useMemo, useState } from 'react'
import { ResultMeaning, ResultPick, numberFieldError, pondLinerPick } from '@carloOS/ui'
import { CalcCard, FieldNumber, FieldSelect, ResultPanel, UnitToggle } from '../_components/CalcShell'

type Shape = 'rectangular' | 'circular' | 'oval'
type Unit = 'ft' | 'm'

const GAL_PER_FT3 = 7.48052 // US gallons per cubic foot
const LITERS_PER_US_GAL = 3.78541
const FT_PER_M = 3.28084

const IRREGULAR_FACTOR = 0.85 // ~85% for irregular / sloped-side ponds

export function computePondVolume(
  shape: Shape,
  unit: Unit,
  length: number,
  width: number,
  depth: number,
  irregular: boolean,
): { usGal: number; liters: number; volumeFt3: number } | null {
  if (depth <= 0) return null

  const toFt = (v: number) => (unit === 'm' ? v * FT_PER_M : v)
  const lFt = toFt(length)
  const wFt = toFt(width)
  const dFt = toFt(depth)

  let areaFt2 = 0
  switch (shape) {
    case 'rectangular':
      if (lFt <= 0 || wFt <= 0) return null
      areaFt2 = lFt * wFt
      break
    case 'circular':
      // length field = diameter
      if (lFt <= 0) return null
      areaFt2 = Math.PI * Math.pow(lFt / 2, 2)
      break
    case 'oval':
      if (lFt <= 0 || wFt <= 0) return null
      areaFt2 = Math.PI * (lFt / 2) * (wFt / 2)
      break
  }

  const volumeFt3 = areaFt2 * dFt
  const factor = irregular ? IRREGULAR_FACTOR : 1
  const usGal = volumeFt3 * GAL_PER_FT3 * factor
  const liters = usGal * LITERS_PER_US_GAL

  return { usGal, liters, volumeFt3: volumeFt3 * factor }
}

export default function PondVolumeCalculator() {
  const [shape, setShape] = useState<Shape>('rectangular')
  const [unit, setUnit] = useState<Unit>('ft')
  const [length, setLength] = useState('10')
  const [width, setWidth] = useState('8')
  const [depth, setDepth] = useState('2')
  const [irregular, setIrregular] = useState<'no' | 'yes'>('no')

  const showWidth = shape !== 'circular'
  const dimMax = unit === 'ft' ? 200 : 60
  const depthMax = unit === 'ft' ? 30 : 10
  const lengthError = numberFieldError(
    length,
    shape === 'circular' ? 'diameter' : 'length',
    unit === 'ft' ? 0.5 : 0.2,
    dimMax,
    unit,
  )
  const widthError = showWidth
    ? numberFieldError(width, 'width', unit === 'ft' ? 0.5 : 0.2, dimMax, unit)
    : null
  const depthError = numberFieldError(depth, 'average depth', unit === 'ft' ? 0.1 : 0.05, depthMax, unit)
  const inputError = lengthError || widthError || depthError

  const result = useMemo(() => {
    if (inputError) return null
    return computePondVolume(
      shape,
      unit,
      parseFloat(length) || 0,
      parseFloat(width) || 0,
      parseFloat(depth) || 0,
      irregular === 'yes',
    )
  }, [shape, unit, length, width, depth, irregular, inputError])

  return (
    <div>
      <CalcCard>
        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-0">
          <div className="col-span-full">
            <UnitToggle
              value={unit}
              onChange={(v) => setUnit(v as Unit)}
              options={[
                { value: 'ft', label: 'Feet' },
                { value: 'm', label: 'Meters' },
              ]}
            />
          </div>

          <FieldSelect
            label="Pond Shape"
            value={shape}
            onChange={(v) => setShape(v as Shape)}
            options={[
              { value: 'rectangular', label: 'Rectangular' },
              { value: 'circular', label: 'Circular' },
              { value: 'oval', label: 'Oval' },
            ]}
          />

          <FieldNumber
            label={shape === 'circular' ? 'Diameter' : 'Length'}
            value={length}
            onChange={setLength}
            unit={unit}
            min={unit === 'ft' ? 0.5 : 0.2}
            max={dimMax}
            step={0.1}
            error={lengthError}
          />

          {showWidth && (
            <FieldNumber
              label="Width"
              value={width}
              onChange={setWidth}
              unit={unit}
              min={unit === 'ft' ? 0.5 : 0.2}
              max={dimMax}
              step={0.1}
              error={widthError}
            />
          )}

          <FieldNumber
            label="Average Depth"
            value={depth}
            onChange={setDepth}
            unit={unit}
            min={unit === 'ft' ? 0.1 : 0.05}
            max={depthMax}
            step={0.1}
            hint="Use average depth, not the deepest point, if the bottom is contoured."
            error={depthError}
          />

          <FieldSelect
            label="Irregular / sloped sides?"
            value={irregular}
            onChange={(v) => setIrregular(v as 'no' | 'yes')}
            options={[
              { value: 'no', label: 'No — straight sides' },
              { value: 'yes', label: 'Yes — apply ~85% factor' },
            ]}
          />
        </div>
      </CalcCard>

      {result && (
        <>
          <ResultPanel
            primary={{
              label: 'Estimated pond volume',
              value: `${Math.round(result.usGal).toLocaleString()} US gal`,
              sub: `${Math.round(result.liters).toLocaleString()} liters`,
            }}
            secondary={[
              { label: 'US gallons', value: `${Math.round(result.usGal).toLocaleString()}` },
              { label: 'Liters', value: `${Math.round(result.liters).toLocaleString()}` },
              { label: 'Cubic feet', value: `${result.volumeFt3.toFixed(0)}` },
              { label: 'Shape', value: shape.charAt(0).toUpperCase() + shape.slice(1) },
            ]}
            note={
              <>
                <strong className="text-white/90">This is an estimate.</strong>{' '}
                Real ponds have sloped sides, shelves, and overflow that the geometry can&apos;t capture. For irregular or
                contoured ponds, applying the ~85% factor brings the figure closer to true water volume. Use this number to
                size liners, pumps, filters, and koi medication conservatively.
              </>
            }
          />
          <ResultMeaning>
            That gallon figure is the water in this shape at the average depth you entered. Size the liner, pump, and filter from it, and treat a contoured pond as smaller than the box.
          </ResultMeaning>
          <ResultPick siteId="fish-com" pick={pondLinerPick(result.usGal)} />
        </>
      )}
    </div>
  )
}
