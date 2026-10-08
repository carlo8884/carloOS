'use client'

import { useMemo, useState } from 'react'
import { ResultMeaning, ResultPick, heaterFromGallons, numberFieldError } from '@carloOS/ui'
import { CalcCard, FieldNumber, FieldSelect, ResultPanel, UnitToggle } from '../_components/CalcShell'

type Shape = 'rectangular' | 'bowfront' | 'cylinder' | 'cube' | 'hexagonal'
type Unit = 'in' | 'cm'

const IN3_PER_US_GAL = 231
const IN3_PER_UK_GAL = 277.42
const IN3_PER_LITER = 61.0237
const IN_PER_CM = 0.393701

function shapeVolumeIn3(shape: Shape, l: number, w: number, h: number): number {
  // l = length, w = width (front-to-back), h = height — all inches
  switch (shape) {
    case 'rectangular':
    case 'cube':
      return l * w * h
    case 'bowfront':
      // Approx: rectangular volume + half of a shallow elliptical bow (~6% extra)
      return l * w * h * 1.06
    case 'cylinder':
      // l = diameter, h = height. Width ignored.
      return Math.PI * Math.pow(l / 2, 2) * h
    case 'hexagonal':
      // l = flat-to-flat width; hex area = (3*sqrt(3)/2) * s^2 where s = side = w/sqrt(3)
      // Easier: area = 0.866 * width^2 for regular hex face-to-face
      return 0.866 * l * l * h
  }
}

const STOCK_HINTS: Array<[number, string]> = [
  [5, 'Nano — betta solo, shrimp, or small invert tank'],
  [10, 'Small community — 6 neon tetras + 3 corys'],
  [20, 'Beginner sweet spot — small community + centerpiece'],
  [29, 'Standard community — schooling fish + small cichlids'],
  [40, 'Solid community — angelfish, larger schools, gouramis'],
  [55, 'Cichlid territory — Africans, larger SA cichlids'],
  [75, 'Advanced — oscars, large schools, planted aquascapes'],
  [125, 'Large display — predators, monster fish builds'],
  [180, 'Showpiece — saltwater reef or freshwater monsters'],
]

function stockingHint(usGal: number): string {
  if (usGal < 3) return 'Too small for fish — suitable for shrimp or snails only'
  let last = STOCK_HINTS[0][1]
  for (const [g, hint] of STOCK_HINTS) {
    if (usGal >= g) last = hint
  }
  return last
}

export default function VolumeCalculator() {
  const [shape, setShape] = useState<Shape>('rectangular')
  const [unit, setUnit] = useState<Unit>('in')
  const [length, setLength] = useState('36')
  const [width, setWidth] = useState('18')
  const [height, setHeight] = useState('18')
  const [fillPct, setFillPct] = useState('92')
  const showWidth = shape !== 'cylinder' && shape !== 'hexagonal'

  const dimMax = unit === 'in' ? 240 : 600
  const lengthError = numberFieldError(length, shape === 'cylinder' ? 'diameter' : 'length', 1, dimMax, unit)
  const widthError = showWidth ? numberFieldError(width, 'width', 1, dimMax, unit) : null
  const heightError = numberFieldError(height, 'height', 1, dimMax, unit)
  const fillError = numberFieldError(fillPct, 'fill level', 1, 100, '%')
  const inputError = lengthError || widthError || heightError || fillError

  const result = useMemo(() => {
    if (inputError) return null
    const lRaw = parseFloat(length) || 0
    const wRaw = parseFloat(width) || 0
    const hRaw = parseFloat(height) || 0
    if (lRaw <= 0 || hRaw <= 0) return null

    const toIn = (v: number) => (unit === 'cm' ? v * IN_PER_CM : v)
    const l = toIn(lRaw)
    const w = toIn(wRaw)
    const h = toIn(hRaw)

    const grossIn3 = shapeVolumeIn3(shape, l, w, h)
    const fill = Math.max(0, Math.min(100, parseFloat(fillPct) || 92)) / 100
    const netIn3 = grossIn3 * fill

    return {
      grossUSGal: grossIn3 / IN3_PER_US_GAL,
      grossUKGal: grossIn3 / IN3_PER_UK_GAL,
      grossLiters: grossIn3 / IN3_PER_LITER,
      netUSGal: netIn3 / IN3_PER_US_GAL,
      netLiters: netIn3 / IN3_PER_LITER,
      weightLbs: (netIn3 / IN3_PER_US_GAL) * 8.345, // 8.345 lb per US gallon of fresh water
      weightKg: (netIn3 / IN3_PER_LITER) * 1.0,
    }
  }, [shape, unit, length, width, height, fillPct, inputError])

  return (
    <div>
      {!inputError && result && result.grossUSGal > 0 ? (
        <ResultPick linkFirst siteId="fish-com" pick={heaterFromGallons(result.netUSGal)} />
      ) : null}
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

          <FieldSelect
            label="Tank Shape"
            value={shape}
            onChange={(v) => setShape(v as Shape)}
            options={[
              { value: 'rectangular', label: 'Rectangular (most common)' },
              { value: 'cube', label: 'Cube' },
              { value: 'bowfront', label: 'Bow-front' },
              { value: 'hexagonal', label: 'Hexagonal' },
              { value: 'cylinder', label: 'Cylinder / Column' },
            ]}
          />

          <FieldNumber
            label={shape === 'cylinder' ? 'Diameter' : shape === 'hexagonal' ? 'Width (flat-to-flat)' : 'Length'}
            value={length}
            onChange={setLength}
            unit={unit}
            min={1}
            max={dimMax}
            step={0.1}
            error={lengthError}
          />

          {showWidth && (
            <FieldNumber
              label="Width (front to back)"
              value={width}
              onChange={setWidth}
              unit={unit}
              min={1}
              max={dimMax}
              step={0.1}
              error={widthError}
            />
          )}

          <FieldNumber
            label="Height"
            value={height}
            onChange={setHeight}
            unit={unit}
            min={1}
            max={dimMax}
            step={0.1}
            error={heightError}
          />

          <FieldNumber
            label="Water Fill Level"
            value={fillPct}
            onChange={setFillPct}
            unit="%"
            min={1}
            max={100}
            step={1}
            hint="A 92% fill is a planning figure for substrate, decor, and freeboard, not a measured displacement."
            error={fillError}
          />
        </div>
      </CalcCard>

      {!inputError && result && result.grossUSGal > 0 && (
        <ResultPanel
          primary={{
            label: 'Net water volume',
            value: `${result.netUSGal.toFixed(1)} US gal`,
            sub: `${result.netLiters.toFixed(1)} liters · ${result.weightLbs.toFixed(0)} lb / ${result.weightKg.toFixed(0)} kg full tank weight`,
          }}
          secondary={[
            { label: 'Gross volume (US)', value: `${result.grossUSGal.toFixed(1)} gal` },
            { label: 'Gross volume (UK)', value: `${result.grossUKGal.toFixed(1)} gal` },
            { label: 'Gross volume (L)', value: `${result.grossLiters.toFixed(0)} L` },
            { label: 'Stocking class', value: stockingHint(result.netUSGal).split(' — ')[0] },
          ]}
          note={
            <>
              <strong className="text-white/90">{stockingHint(result.netUSGal)}.</strong>{' '}
              Tank weight assumes freshwater; saltwater is ~3% heavier. Always verify your floor can support the load — a filled 75-gallon tank weighs over 800 lb.
            </>
          }
        />
      )}

      {!inputError && result && result.grossUSGal > 0 && (
        <>
        <ResultMeaning>
          Net volume is the water you can put in at this fill level. Size stocking, filtration, and the heater from that number, not from the empty glass.
        </ResultMeaning>
        </>
      )}
    </div>
  )
}
