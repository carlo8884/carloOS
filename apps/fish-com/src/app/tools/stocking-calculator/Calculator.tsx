'use client'

import { useMemo, useState } from 'react'
import { ResultMeaning, numberFieldError } from '@carloOS/ui'
import { CalcCard, FieldNumber, FieldSelect, ResultPanel } from '../_components/CalcShell'
import {
  STYLES_FOR_WATER,
  estimateStocking,
  type Filtration,
  type Style,
} from './model'
import { useStockingWater } from './StockingWaterContext'

const STYLE_OPTIONS: Record<Style, { value: Style; label: string }> = {
  community: { value: 'community', label: 'Standard community' },
  planted: { value: 'planted', label: 'Heavily planted' },
  cichlid: { value: 'cichlid', label: 'Cichlids / aggressive (territory)' },
  reef: { value: 'reef', label: 'Reef tank with corals' },
}

export default function StockingCalculator() {
  const [tankGal, setTankGal] = useState('40')
  const [tankL, setTankL] = useState('36')
  const [tankW, setTankW] = useState('18')
  const { waterType, setWaterType } = useStockingWater()
  const [filtration, setFiltration] = useState<Filtration>('rated')
  const [style, setStyle] = useState<Style>('community')

  const galError = numberFieldError(tankGal, 'tank volume', 1, 1000, 'US gal')
  const lengthError = numberFieldError(tankL, 'tank length', 1, 240, 'in')
  const widthError = numberFieldError(tankW, 'tank width', 1, 96, 'in')
  const inputError = galError || lengthError || widthError

  const result = useMemo(() => {
    if (inputError) return null
    const gal = parseFloat(tankGal) || 0
    const l = parseFloat(tankL) || 0
    const w = parseFloat(tankW) || 0
    return estimateStocking({
      gal,
      lengthIn: l,
      widthIn: w,
      waterType,
      filtration,
      style,
    })
  }, [tankGal, tankL, tankW, waterType, filtration, style, inputError])

  const styleOptions = STYLES_FOR_WATER[waterType].map((id) => STYLE_OPTIONS[id])

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
            max={1000}
            hint="Use net water volume from our Volume Calculator."
            error={galError}
          />
          <FieldSelect
            label="Water Type"
            value={waterType}
            onChange={(v) => {
              const next = v as typeof waterType
              setWaterType(next)
              if (!STYLES_FOR_WATER[next].includes(style)) {
                setStyle('community')
              }
            }}
            options={[
              { value: 'fresh', label: 'Freshwater' },
              { value: 'salt', label: 'Saltwater / Marine' },
            ]}
          />
          <FieldNumber
            label="Tank Length"
            value={tankL}
            onChange={setTankL}
            unit="in"
            min={1}
            max={240}
            hint="Surface area drives oxygen, not depth."
            error={lengthError}
          />
          <FieldNumber
            label="Tank Width (front-to-back)"
            value={tankW}
            onChange={setTankW}
            unit="in"
            min={1}
            max={96}
            error={widthError}
          />
          <FieldSelect
            label="Filtration"
            value={filtration}
            onChange={(v) => setFiltration(v as Filtration)}
            options={[
              { value: 'under', label: 'Underrated for tank (filter too small)' },
              { value: 'rated', label: 'Rated for tank size (manufacturer match)' },
              { value: 'over', label: 'Oversized (1.5–2× rated flow)' },
              { value: 'heavy', label: 'Heavy (sump or 2× canisters)' },
            ]}
          />
          <FieldSelect
            label="Aquascape Style"
            value={style}
            onChange={(v) => setStyle(v as Style)}
            options={styleOptions}
          />
        </div>
      </CalcCard>

      {!inputError && result && result.slimInches > 0 && (
        <ResultPanel
          primary={{
            label: 'Rough planning estimate — not a species count',
            value: `${result.slimInches.toFixed(0)} slim inches`,
            sub: `Slim-inch bioload ceiling · bound by ${result.boundBy} · ~${result.surfaceIn2.toFixed(0)} sq in surface`,
          }}
          secondary={[
            { label: 'Volume bound', value: `${result.slimInchesVolume.toFixed(0)} slim in` },
            { label: 'Surface bound', value: `${result.slimInchesSurface.toFixed(0)} slim in` },
            {
              label: '60–80% planning band',
              value: `${result.planningLow.toFixed(0)}–${result.planningHigh.toFixed(0)} slim in`,
            },
            { label: 'Species headcount', value: 'Not calculated' },
          ]}
          note={
            <>
              <strong className="text-white/90">This is a rough planning ceiling, not stocking advice.</strong>{' '}
              The math is a slim-inch / bioload estimate (surface area vs volume, then filtration and aquascape
              factors). It does not encode schooling minimums, adult size, territory, or temperament — so it
              cannot tell you how many angels, tetras, or tangs to buy. Use the 60–80% band as a conservative
              starting point, then choose species from care guides and a compatibility check. Heavy-bodied fish
              (goldfish, oscars) consume this ceiling much faster than slim community fish.
            </>
          }
        />
      )}
      {!inputError && result && result.slimInches > 0 && (
        <ResultMeaning>
          Slim inches are a planning ceiling for waste and oxygen, not a count of fish you should buy.
        </ResultMeaning>
      )}
    </div>
  )
}
