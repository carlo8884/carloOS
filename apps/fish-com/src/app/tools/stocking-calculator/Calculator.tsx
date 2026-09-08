'use client'

import { useMemo, useState } from 'react'
import { CalcCard, FieldNumber, FieldSelect, ResultPanel } from '../_components/CalcShell'
import { ResultCTA } from '../_components/ResultCTA'

type Filtration = 'under' | 'rated' | 'over' | 'heavy'
type WaterType = 'fresh' | 'salt'
type Style = 'community' | 'cichlid' | 'planted' | 'reef'

const FILTRATION_FACTOR: Record<Filtration, number> = {
  under: 0.75,
  rated: 1.0,
  over: 1.3,
  heavy: 1.6,
}

const STYLE_FACTOR: Record<Style, number> = {
  community: 1.0,
  planted: 1.15,
  cichlid: 0.7,
  reef: 0.55,
}

export default function StockingCalculator() {
  const [tankGal, setTankGal] = useState('40')
  const [tankL, setTankL] = useState('36')
  const [tankW, setTankW] = useState('18')
  const [waterType, setWaterType] = useState<WaterType>('fresh')
  const [filtration, setFiltration] = useState<Filtration>('rated')
  const [style, setStyle] = useState<Style>('community')

  const result = useMemo(() => {
    const gal = parseFloat(tankGal) || 0
    const l = parseFloat(tankL) || 0
    const w = parseFloat(tankW) || 0
    if (gal <= 0) return null

    const surfaceIn2 = l * w
    // Rough planning model only: ~12 sq in surface per slim-community inch (freshwater).
    // Saltwater uses ~2× surface per inch. This is a bioload ceiling heuristic, not
    // species advice — it does not encode schooling, adult size, or territory.
    const baseInPerSqIn = waterType === 'salt' ? 1 / 24 : 1 / 12
    const filtrationAdj = FILTRATION_FACTOR[filtration]
    const styleAdj = STYLE_FACTOR[style]

    const slimInchesSurface = surfaceIn2 * baseInPerSqIn * filtrationAdj * styleAdj
    // Volume sanity cap — even infinite surface can't override absolute water volume
    const slimInchesVolume = gal * (waterType === 'salt' ? 0.6 : 1.1) * filtrationAdj * styleAdj
    const slimInches = Math.min(slimInchesSurface, slimInchesVolume)
    // Default 40g / 36×18 community / rated: volume 44, surface 54, ceiling 44, 60–80% band 26–35
    const planningLow = slimInches * 0.6
    const planningHigh = slimInches * 0.8
    const boundBy = slimInchesVolume <= slimInchesSurface ? 'volume' : 'surface area'

    return {
      slimInches,
      slimInchesSurface,
      slimInchesVolume,
      surfaceIn2,
      planningLow,
      planningHigh,
      boundBy,
    }
  }, [tankGal, tankL, tankW, waterType, filtration, style])

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
            hint="Use net water volume from our Volume Calculator."
          />
          <FieldSelect
            label="Water Type"
            value={waterType}
            onChange={(v) => setWaterType(v as WaterType)}
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
            hint="Surface area drives oxygen, not depth."
          />
          <FieldNumber
            label="Tank Width (front-to-back)"
            value={tankW}
            onChange={setTankW}
            unit="in"
            min={1}
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
            options={[
              { value: 'community', label: 'Standard community' },
              { value: 'planted', label: 'Heavily planted' },
              { value: 'cichlid', label: 'Cichlids / aggressive (territory)' },
              { value: 'reef', label: 'Reef tank with corals' },
            ]}
          />
        </div>
      </CalcCard>

      {result && result.slimInches > 0 && (
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

      {result && result.slimInches > 0 && (
        <ResultCTA
          heading="Track your bioload with a water test kit"
          blurb={
            <>
              Stocking math is a ceiling, not a guarantee. As you add fish, a {waterType === 'salt' ? 'saltwater' : 'freshwater'} test kit confirms the tank is keeping up with the load before problems show.
            </>
          }
          query={waterType === 'salt' ? 'saltwater aquarium test kit' : 'freshwater aquarium master test kit'}
          cta="Browse test kits on Amazon"
          source="tools-stocking"
        />
      )}
    </div>
  )
}
