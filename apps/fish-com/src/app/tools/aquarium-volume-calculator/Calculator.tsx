'use client'

import { useState, useMemo } from 'react'
import { CalculatorShell, StatTile } from '@carloOS/ui'

/* Conversion + math helpers
 * 1 US gallon = 231 in^3   ·  1 imp gallon = 277.42 in^3  ·  1 L = 61.024 in^3
 * Rectangular: V = L × W × H
 * Bowfront (approx): V ≈ L × W × H × 1.06 (small bow); for serious accuracy
 *   the keeper should measure max depth; we use a sane multiplier.
 * Cylinder: V = π × r^2 × H
 * Hex (6-sided regular): V = 1.5 × √3 × s^2 × H where s = side length
 */

const SHAPES = {
  rect:   { label: 'Rectangular (standard)' },
  bow:    { label: 'Bowfront (approx)' },
  cylinder: { label: 'Cylinder / column' },
  hex:    { label: 'Hexagonal (regular)' },
} as const

type Shape = keyof typeof SHAPES

function volumeIn3(shape: Shape, dim: { a: number; b: number; c: number; d: number }): number {
  const { a, b, c, d } = dim
  switch (shape) {
    case 'rect':     return a * b * c
    case 'bow':      return a * b * c * 1.06
    case 'cylinder': return Math.PI * Math.pow(a / 2, 2) * c
    case 'hex':      return 1.5 * Math.sqrt(3) * Math.pow(d, 2) * c
  }
}

const IN3_PER_US_GAL = 231
const IN3_PER_L = 61.024
const LBS_PER_GAL = 8.345          // freshwater @ 25°C ≈ 8.345 lb/gal
const KG_PER_L = 1.000             // freshwater
// Realistic stocking rule-of-thumb (the "1 inch of fish per gallon" is an
// oversimplification but still the most-searched starting point — we use
// it as an *upper* bound and recommend going under).
const INCHES_PER_GAL_UPPER = 1.0

export function Calculator() {
  const [shape, setShape] = useState<Shape>('rect')
  const [unit, setUnit] = useState<'in' | 'cm'>('in')
  const [length, setLength] = useState<number>(36)
  const [width, setWidth] = useState<number>(18)
  const [height, setHeight] = useState<number>(18)
  // For cylinder we use length as diameter (clearer in UI label).
  // For hex we use width as side-length.
  const [side, setSide] = useState<number>(12)

  const result = useMemo(() => {
    // Convert to inches if user supplied cm
    const toIn = (n: number) => (unit === 'in' ? n : n / 2.54)
    const dim = {
      a: toIn(length),
      b: toIn(width),
      c: toIn(height),
      d: toIn(side),
    }
    const in3 = volumeIn3(shape, dim)
    const gallons = in3 / IN3_PER_US_GAL
    const liters = in3 / IN3_PER_L
    const filledGallons = gallons * 0.90  // realistic 90% fill line
    const weightLb = filledGallons * LBS_PER_GAL
    const weightKg = (liters * 0.90) * KG_PER_L
    const stockingMaxInches = filledGallons * INCHES_PER_GAL_UPPER
    return { gallons, liters, filledGallons, weightLb, weightKg, stockingMaxInches }
  }, [shape, unit, length, width, height, side])

  return (
    <CalculatorShell
      ariaLabel="Aquarium volume and weight calculator"
      inputs={
        <>
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="av-shape">
              Tank shape
            </label>
            <select
              id="av-shape"
              value={shape}
              onChange={(e) => setShape(e.target.value as Shape)}
              className="w-full px-3 py-2 border border-brand-border rounded"
            >
              {Object.entries(SHAPES).map(([k, v]) => (
                <option key={k} value={k}>{v.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="av-unit">
              Units
            </label>
            <select
              id="av-unit"
              value={unit}
              onChange={(e) => setUnit(e.target.value as 'in' | 'cm')}
              className="w-full px-3 py-2 border border-brand-border rounded"
            >
              <option value="in">inches</option>
              <option value="cm">centimeters</option>
            </select>
          </div>

          {shape !== 'cylinder' && shape !== 'hex' && (
            <>
              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="av-length">
                  Length ({unit})
                </label>
                <input
                  id="av-length"
                  type="number"
                  min={1}
                  step={0.5}
                  value={length}
                  onChange={(e) => setLength(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-brand-border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="av-width">
                  Width ({unit})
                </label>
                <input
                  id="av-width"
                  type="number"
                  min={1}
                  step={0.5}
                  value={width}
                  onChange={(e) => setWidth(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-brand-border rounded"
                />
              </div>
            </>
          )}

          {shape === 'cylinder' && (
            <div>
              <label className="block text-sm font-semibold mb-1" htmlFor="av-diameter">
                Diameter ({unit})
              </label>
              <input
                id="av-diameter"
                type="number"
                min={1}
                step={0.5}
                value={length}
                onChange={(e) => setLength(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-brand-border rounded"
              />
            </div>
          )}

          {shape === 'hex' && (
            <div>
              <label className="block text-sm font-semibold mb-1" htmlFor="av-side">
                Side length ({unit})
              </label>
              <input
                id="av-side"
                type="number"
                min={1}
                step={0.5}
                value={side}
                onChange={(e) => setSide(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-brand-border rounded"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="av-height">
              Height ({unit})
            </label>
            <input
              id="av-height"
              type="number"
              min={1}
              step={0.5}
              value={height}
              onChange={(e) => setHeight(parseFloat(e.target.value) || 0)}
              className="w-full px-3 py-2 border border-brand-border rounded"
            />
            <p className="text-xs text-brand-text-light mt-1">
              Use interior dimensions, not exterior — glass thickness can move volume by 5%+.
            </p>
          </div>
        </>
      }
      results={
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <StatTile
            label="Total volume"
            value={`${result.gallons.toFixed(1)} gal`}
            sub={`${result.liters.toFixed(0)} L`}
            highlight
          />
          <StatTile
            label="Filled (90%)"
            value={`${result.filledGallons.toFixed(1)} gal`}
            sub="Realistic fill line"
          />
          <StatTile
            label="Water weight"
            value={`${result.weightLb.toFixed(0)} lb`}
            sub={`${result.weightKg.toFixed(0)} kg`}
            highlight
          />
          <StatTile
            label="Stocking ceiling"
            value={`${result.stockingMaxInches.toFixed(0)}″ of fish`}
            sub="Upper bound; aim lower"
          />
        </div>
      }
      footnote={
        <>
          Heater sizing rule of thumb: <strong>3-5 W per gallon</strong>. Filter
          rule of thumb: turnover <strong>4-8×</strong> the filled volume per
          hour. Reinforced stand required above ~50 gal.
        </>
      }
    />
  )
}
