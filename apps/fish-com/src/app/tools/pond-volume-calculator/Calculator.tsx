'use client'

import { useMemo, useState } from 'react'
import { CalcCard, FieldNumber, FieldSelect, ResultPanel, UnitToggle } from '../_components/CalcShell'

type Shape = 'rectangular' | 'circular' | 'oval'
type Unit = 'ft' | 'm'

const GAL_PER_FT3 = 7.48052 // US gallons per cubic foot
const LITERS_PER_US_GAL = 3.78541
const FT_PER_M = 3.28084

const IRREGULAR_FACTOR = 0.85 // ~85% for irregular / sloped-side ponds

export default function PondVolumeCalculator() {
  const [shape, setShape] = useState<Shape>('rectangular')
  const [unit, setUnit] = useState<Unit>('ft')
  const [length, setLength] = useState('8')
  const [width, setWidth] = useState('6')
  const [depth, setDepth] = useState('2')
  const [irregular, setIrregular] = useState<'no' | 'yes'>('no')

  const result = useMemo(() => {
    const lRaw = parseFloat(length) || 0
    const wRaw = parseFloat(width) || 0
    const dRaw = parseFloat(depth) || 0
    if (dRaw <= 0) return null

    // Convert to feet for the gallon formula.
    const toFt = (v: number) => (unit === 'm' ? v * FT_PER_M : v)
    const lFt = toFt(lRaw)
    const wFt = toFt(wRaw)
    const dFt = toFt(dRaw)

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
    const factor = irregular === 'yes' ? IRREGULAR_FACTOR : 1
    const usGal = volumeFt3 * GAL_PER_FT3 * factor
    const liters = usGal * LITERS_PER_US_GAL

    return { usGal, liters, volumeFt3: volumeFt3 * factor }
  }, [shape, unit, length, width, depth, irregular])

  const showWidth = shape !== 'circular'

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
            min={0}
            step={0.1}
          />

          {showWidth && (
            <FieldNumber
              label="Width"
              value={width}
              onChange={setWidth}
              unit={unit}
              min={0}
              step={0.1}
            />
          )}

          <FieldNumber
            label="Average Depth"
            value={depth}
            onChange={setDepth}
            unit={unit}
            min={0}
            step={0.1}
            hint="Use average depth, not the deepest point, if the bottom is contoured."
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
              size pumps, filters, and koi medication conservatively.
            </>
          }
        />
      )}
    </div>
  )
}
