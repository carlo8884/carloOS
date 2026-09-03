'use client'

/**
 * Aquarium Filter GPH / Turnover Calculator -- /tools/filter-gph-calculator
 *
 * Client compute. Gallons × tank-style turnover band → recommended filter
 * flow (GPH). Companion to the existing stocking calculator (which already
 * models bioload). Does not invent SKUs; shop hops reuse live amazon-brand
 * queries from the filter and nano-tank reviews.
 */

import { useMemo, useState } from 'react'
import { CalcCard, FieldNumber, FieldSelect, ResultPanel } from '../_components/CalcShell'
import { ResultCTA } from '../_components/ResultCTA'

type Style = 'community' | 'planted' | 'goldfish' | 'cichlid' | 'reef'

interface TurnoverBand {
  label: string
  min: number
  max: number
  note: string
}

// Standard hobby turnover bands (tank volumes per hour). Community 4–6×,
// planted 4–6×, goldfish/heavy 6–10×, cichlid 8–10×, reef 10–20×.
const TURNOVER: Record<Style, TurnoverBand> = {
  community: {
    label: 'Community freshwater',
    min: 4,
    max: 6,
    note: 'Typical hang-on-back or canister rating for mixed tetras, rasboras, and livebearers.',
  },
  planted: {
    label: 'Heavily planted',
    min: 4,
    max: 6,
    note: 'Same band as community; plants consume nutrients but you still want even flow across the scape.',
  },
  goldfish: {
    label: 'Goldfish / heavy bioload',
    min: 6,
    max: 10,
    note: 'Goldfish and other messy fish need more mechanical and biological turnover than a community tetra tank.',
  },
  cichlid: {
    label: 'Cichlids / high flow',
    min: 8,
    max: 10,
    note: 'African and many New World cichlids prefer stronger current and produce more waste per inch.',
  },
  reef: {
    label: 'Reef / marine',
    min: 10,
    max: 20,
    note: 'Display return plus powerheads. The filter/sump return is only part of total flow on a reef.',
  },
}

interface Result {
  gphMin: number
  gphMax: number
  gphMid: number
  filterClass: string
}

function filterClass(gphMid: number, gal: number): string {
  if (gal <= 15) return 'Nano sponge or small HOB'
  if (gphMid < 250) return 'Hang-on-back sized above the tank'
  if (gphMid < 500) return 'Mid canister or oversized HOB'
  return 'Large canister or sump return'
}

function compute(gal: number, style: Style): Result | null {
  if (gal <= 0) return null
  const band = TURNOVER[style]
  const gphMin = gal * band.min
  const gphMax = gal * band.max
  const gphMid = (gphMin + gphMax) / 2
  return { gphMin, gphMax, gphMid, filterClass: filterClass(gphMid, gal) }
}

function shopQuery(gal: number): { query: string; cta: string; heading: string } {
  if (gal <= 15) {
    return {
      query: 'fluval spec v 5 gallon',
      cta: 'Browse nano tanks on Amazon',
      heading: 'A purpose-built nano often includes filtration',
    }
  }
  if (gal <= 40) {
    return {
      query: 'aquaclear 70 filter',
      cta: 'Browse hang-on-back filters on Amazon',
      heading: 'Size the HOB above the tank label',
    }
  }
  return {
    query: 'fluval 307 canister filter',
    cta: 'Browse canister filters on Amazon',
    heading: 'A canister is the usual step-up past 40 gallons',
  }
}

export default function FilterGphCalculator() {
  const [gallons, setGallons] = useState('20')
  const [style, setStyle] = useState<Style>('community')

  const result = useMemo(() => {
    const gal = parseFloat(gallons) || 0
    return compute(gal, style)
  }, [gallons, style])

  const gal = parseFloat(gallons) || 0
  const band = TURNOVER[style]
  const shop = shopQuery(gal)

  return (
    <div>
      <CalcCard>
        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-0">
          <FieldNumber
            label="Tank Volume"
            value={gallons}
            onChange={setGallons}
            unit="US gal"
            min={1}
            hint="Use net water volume from the volume calculator."
          />
          <FieldSelect
            label="Tank Style"
            value={style}
            onChange={(v) => setStyle(v as Style)}
            options={(Object.keys(TURNOVER) as Style[]).map((key) => ({
              value: key,
              label: TURNOVER[key].label,
            }))}
          />
        </div>
      </CalcCard>

      {result && (
        <ResultPanel
          primary={{
            label: 'Recommended filter flow',
            value: `${Math.round(result.gphMin)}–${Math.round(result.gphMax)} GPH`,
            sub: `${band.min}–${band.max}× turnover on a ${gal || 0} gallon ${band.label.toLowerCase()} tank · midpoint ${Math.round(result.gphMid)} GPH`,
          }}
          secondary={[
            { label: 'Filter class', value: result.filterClass },
            { label: 'Turnover band', value: `${band.min}–${band.max}×` },
          ]}
          note={
            <>
              <strong className="text-white/90">Manufacturer “rated for X gallons” labels assume light stocking.</strong>{' '}
              {band.note} Buy the next size up from the box rating. Pair this number with the{' '}
              stocking calculator — flow does not replace a sensible bioload.
            </>
          }
        />
      )}

      {result && gal > 0 && (
        <ResultCTA
          heading={shop.heading}
          blurb={
            <>
              Same Amazon hops used on the filter and nano-tank reviews — no invented SKUs. Fish.com
              earns a commission on qualifying purchases at no extra cost to you.
            </>
          }
          query={shop.query}
          cta={shop.cta}
          source="tools-filter-gph-calculator"
        />
      )}
    </div>
  )
}
