'use client'

/**
 * Stall Bedding Calculator -- /tools/stall-bedding-calculator
 * Client compute component. Stall length × width × depth → bedding volume
 * and a planning bag/bale count.
 *
 * Volume (cu ft) = length_ft × width_ft × (depth_in / 12)
 * Units needed   = ceil(volume × stallCount / cuFtPerUnit)
 *
 * Planning yields (typical compressed bag / small square bale, expanded):
 *   pine shavings bag ≈ 8 cu ft
 *   wood pellet bag   ≈ 8 cu ft (40 lb bag after watering)
 *   straw bale        ≈ 12 cu ft
 *
 * Weekly restock ≈ 15% of the initial bed (daily pick-out of wet spots).
 * All outputs are husbandry PLANNING estimates. Bag yields vary by brand
 * and fluff; check the bag label. No fabricated precision, no clinical claims.
 */

import { useMemo, useState } from 'react'
import { AffiliateDisclosure, ShopCtas } from '@carloOS/ui'

type BeddingType = 'shavings' | 'pellets' | 'straw'

interface BeddingOption {
  value: BeddingType
  label: string
  unitLabel: string
  unitPlural: string
  /** Expanded cubic feet per bag or small square bale. */
  cuFtPerUnit: number
  note: string
}

const CU_FT_PER_SHAVINGS_BAG = 8
const CU_FT_PER_PELLET_BAG = 8
const CU_FT_PER_STRAW_BALE = 12
const WEEKLY_FRACTION = 0.15

const BEDDING: BeddingOption[] = [
  {
    value: 'shavings',
    label: 'Pine shavings',
    unitLabel: 'bag',
    unitPlural: 'bags',
    cuFtPerUnit: CU_FT_PER_SHAVINGS_BAG,
    note: 'A typical compressed pine-shavings bag expands to about 8 cubic feet. Dust-extracted bags are the usual pick for stalled horses with airway sensitivity.',
  },
  {
    value: 'pellets',
    label: 'Wood pellets',
    unitLabel: 'bag',
    unitPlural: 'bags',
    cuFtPerUnit: CU_FT_PER_PELLET_BAG,
    note: 'A typical 40 lb wood-pellet bag expands to about 8 cubic feet after watering. Pellets are denser in the bag and usually lower-dust than loose shavings once they fluff.',
  },
  {
    value: 'straw',
    label: 'Straw',
    unitLabel: 'bale',
    unitPlural: 'bales',
    cuFtPerUnit: CU_FT_PER_STRAW_BALE,
    note: 'A typical small square straw bale is about 12 cubic feet. Straw is warmer and cheaper by volume, but dustier and harder to pick clean than shavings or pellets.',
  },
]

interface Result {
  volumePerStall: number
  volumeTotal: number
  unitsInitial: number
  unitsWeekly: number
}

function compute(
  lengthFt: number,
  widthFt: number,
  depthIn: number,
  stallCount: number,
  bedding: BeddingOption,
): Result | null {
  if (!(lengthFt > 0) || !(widthFt > 0) || !(depthIn > 0) || !(stallCount > 0)) return null
  const volumePerStall = lengthFt * widthFt * (depthIn / 12)
  const volumeTotal = volumePerStall * stallCount
  const unitsInitial = Math.ceil(volumeTotal / bedding.cuFtPerUnit)
  const unitsWeekly = Math.max(stallCount, Math.ceil((volumeTotal * WEEKLY_FRACTION) / bedding.cuFtPerUnit))
  return { volumePerStall, volumeTotal, unitsInitial, unitsWeekly }
}

function round1(n: number): number {
  return Math.round(n * 10) / 10
}

export default function Calculator() {
  const [length, setLength] = useState('12')
  const [width, setWidth] = useState('12')
  const [depth, setDepth] = useState('6')
  const [stalls, setStalls] = useState('1')
  const [type, setType] = useState<BeddingType>('shavings')

  const bedding = BEDDING.find((b) => b.value === type) ?? BEDDING[0]

  const result = useMemo(() => {
    const l = parseFloat(length)
    const w = parseFloat(width)
    const d = parseFloat(depth)
    const n = parseFloat(stalls)
    if ([l, w, d, n].some((v) => Number.isNaN(v))) return null
    return compute(l, w, d, n, bedding)
  }, [length, width, depth, stalls, bedding])

  const unitWord = result && result.unitsInitial === 1 ? bedding.unitLabel : bedding.unitPlural
  const weeklyWord = result && result.unitsWeekly === 1 ? bedding.unitLabel : bedding.unitPlural

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="sb-type" className="mb-1 block text-sm font-medium text-brand-text-dark">
            Bedding type
          </label>
          <select
            id="sb-type"
            value={type}
            onChange={(e) => setType(e.target.value as BeddingType)}
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
          >
            {BEDDING.map((b) => (
              <option key={b.value} value={b.value}>
                {b.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="sb-stalls" className="mb-1 block text-sm font-medium text-brand-text-dark">
            Number of stalls
          </label>
          <input
            id="sb-stalls"
            type="number"
            inputMode="numeric"
            min="1"
            step="1"
            value={stalls}
            onChange={(e) => setStalls(e.target.value)}
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
          />
        </div>

        <div>
          <label htmlFor="sb-length" className="mb-1 block text-sm font-medium text-brand-text-dark">
            Stall length (ft)
          </label>
          <input
            id="sb-length"
            type="number"
            inputMode="decimal"
            min="0"
            step="0.5"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            placeholder="e.g. 12"
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
          />
        </div>

        <div>
          <label htmlFor="sb-width" className="mb-1 block text-sm font-medium text-brand-text-dark">
            Stall width (ft)
          </label>
          <input
            id="sb-width"
            type="number"
            inputMode="decimal"
            min="0"
            step="0.5"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            placeholder="e.g. 12"
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="sb-depth" className="mb-1 block text-sm font-medium text-brand-text-dark">
            Bed depth (inches)
          </label>
          <p className="mb-2 text-xs text-brand-text-mid">
            2–3 in over rubber mats; 4–6 in for a standard full bed; 8–10 in for a deep winter bed.
          </p>
          <input
            id="sb-depth"
            type="number"
            inputMode="decimal"
            min="0"
            step="0.5"
            value={depth}
            onChange={(e) => setDepth(e.target.value)}
            placeholder="e.g. 6"
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
          />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
        <div className="rounded border border-brand-border bg-brand-surface p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-mid">
            Initial bed
          </p>
          <p className="mt-1 font-display text-4xl text-brand-text-dark">
            {result ? `${result.unitsInitial} ${unitWord}` : '—'}
          </p>
          <p className="mt-1 text-xs text-brand-text-mid">
            {result
              ? `${round1(result.volumeTotal).toLocaleString()} cu ft total`
              : 'Enter stall size and depth'}
          </p>
        </div>
        <div className="rounded border border-brand-border bg-brand-surface p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-mid">
            Weekly restock
          </p>
          <p className="mt-1 font-display text-4xl text-brand-text-dark">
            {result ? `~${result.unitsWeekly} ${weeklyWord}` : '—'}
          </p>
          <p className="mt-1 text-xs text-brand-text-mid">
            About 15% of the initial bed after daily pick-out
          </p>
        </div>
        <div className="rounded border border-brand-border bg-brand-surface p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-mid">
            Per stall
          </p>
          <p className="mt-1 font-display text-lg text-brand-text-dark">
            {result ? `${round1(result.volumePerStall).toLocaleString()} cu ft` : bedding.label}
          </p>
          <p className="mt-1 text-xs text-brand-text-mid">
            {bedding.cuFtPerUnit} cu ft per {bedding.unitLabel}
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm text-brand-text-mid">{bedding.note}</p>

      {result && (
        <div className="mt-6 rounded-lg border border-brand-border bg-brand-surface p-5">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Next step
          </p>
          <p className="font-display text-base font-semibold leading-snug text-brand-text-dark">
            Shop stall bedding
          </p>
          <p className="mt-1 text-sm leading-relaxed text-brand-text-mid">
            Plan on {result.unitsInitial} {unitWord} to set the initial bed
            {result.volumeTotal !== result.volumePerStall
              ? ` across ${stalls} stalls`
              : ''}
            , then about {result.unitsWeekly} {weeklyWord} a week to replace what you pick out.
          </p>
          <AffiliateDisclosure variant="inline" siteId="horses-com" className="my-3" />
          <ShopCtas
            amazonHref={
              type === 'pellets'
                ? '/go/amazon-brand/wood+pellet+horse+stall+bedding?s=tools-stall-bedding-calculator'
                : type === 'straw'
                  ? '/go/amazon-brand/straw+horse+stall+bedding?s=tools-stall-bedding-calculator'
                  : '/go/amazon-brand/pine+shavings+horse+stall+bedding?s=tools-stall-bedding-calculator'
            }
            amazonLabel={
              type === 'pellets'
                ? 'Browse wood pellet bedding on Amazon →'
                : type === 'straw'
                  ? 'Browse straw stall bedding on Amazon →'
                  : 'Browse pine shavings on Amazon →'
            }
          />
        </div>
      )}

      <p className="mt-4 text-xs text-brand-text-mid">
        This is a planning <strong>estimate</strong>. Compressed bags fluff differently by brand,
        moisture, and how you bank the walls. Never use black-walnut shavings — they are a known
        laminitis trigger. For horses with heaves or other airway disease, prefer dust-extracted
        shavings, pellets, or mats over dusty straw, and ask your veterinarian about stall air
        quality.
      </p>
    </div>
  )
}
