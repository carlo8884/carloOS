'use client'

import { useMemo, useState } from 'react'
import { CalcCard, FieldNumber, FieldSelect, ResultPanel } from '../_components/CalcShell'

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
    // Modern surface-area model: ~12 sq inches of surface per inch of slim community fish (freshwater)
    // Saltwater fish need ~2x the surface area per inch due to oxygen demand and territorial behavior
    const baseInPerSqIn = waterType === 'salt' ? 1 / 24 : 1 / 12
    const filtrationAdj = FILTRATION_FACTOR[filtration]
    const styleAdj = STYLE_FACTOR[style]

    const slimInchesSurface = surfaceIn2 * baseInPerSqIn * filtrationAdj * styleAdj
    // Volume sanity cap — even infinite surface can't override absolute water volume
    const slimInchesVolume = gal * (waterType === 'salt' ? 0.6 : 1.1) * filtrationAdj * styleAdj
    const slimInches = Math.min(slimInchesSurface, slimInchesVolume)

    // Convenience: convert "slim inches" into approximate counts for common community fish
    const examples = waterType === 'salt'
      ? [
          { name: 'Clownfish (3 in)', count: Math.floor(slimInches / 4) },
          { name: 'Royal Gramma (3 in)', count: Math.floor(slimInches / 4) },
          { name: 'Yellow Tang (6 in)', count: Math.floor(slimInches / 9) },
        ]
      : [
          { name: 'Neon Tetra (1.5 in)', count: Math.floor(slimInches / 1.5) },
          { name: 'Harlequin Rasbora (2 in)', count: Math.floor(slimInches / 2) },
          { name: 'Corydoras (2.5 in)', count: Math.floor(slimInches / 3) },
          { name: 'Angelfish (5 in)', count: Math.floor(slimInches / 7) },
        ]

    return {
      slimInches,
      surfaceIn2,
      examples,
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
            label: 'Estimated stocking capacity',
            value: `${result.slimInches.toFixed(0)} inches of slim fish`,
            sub: `~${result.surfaceIn2.toFixed(0)} sq in surface area · filtration- and style-adjusted`,
          }}
          secondary={result.examples.map((e) => ({
            label: e.name,
            value: e.count > 0 ? `~${e.count} fish` : '— too small',
          }))}
          note={
            <>
              <strong className="text-white/90">This is a starting point, not a hard limit.</strong>{' '}
              Honest stocking depends on the actual species — body mass, swimming style, schooling needs, and temperament matter more than length.
              Schooling fish need groups of 6+, territorial fish need <em>much</em> more space than their size suggests, and a heavy bioload (goldfish, oscars)
              effectively halves capacity even with great filtration. Use this number as a ceiling and stock to 60–80% for stability.
            </>
          }
        />
      )}
    </div>
  )
}
