'use client'

/**
 * Horse Cost-of-Ownership Calculator -- /tools/horse-cost-calculator
 * Client compute component. Sums recurring monthly horse-keeping costs into a
 * monthly + annual total, broken down by category, with an optional one-time
 * startup estimate.
 *
 * All figures are USER-EDITABLE and seeded with realistic 2026 US ranges drawn
 * from university-extension and industry cost references. Regional and
 * individual variation is large; every output is framed as an ESTIMATE, not a
 * quote. No fabricated precision, no guarantees.
 */

import { useMemo, useState } from 'react'

interface BoardOption {
  value: string
  label: string
  /** Seed default $/month. Editable by the user. */
  monthly: number
  note: string
}

// Seed defaults reflect commonly published 2026 US ranges. Boarding is the
// single largest and most regionally variable line item, so we give the user a
// board type plus an editable dollar field rather than a fixed number.
const BOARD_OPTIONS: BoardOption[] = [
  {
    value: 'full',
    label: 'Full board (stall + feed + turnout + care)',
    monthly: 700,
    note: 'Full-service barns commonly run $400–1,200+/mo, higher near major metros and at show barns.',
  },
  {
    value: 'partial',
    label: 'Partial / pasture board (feed in, some care)',
    monthly: 400,
    note: 'Partial board commonly runs $250–600/mo depending on what the barn provides.',
  },
  {
    value: 'pasture',
    label: 'Pasture board (field + water, minimal care)',
    monthly: 250,
    note: 'Pasture board commonly runs $150–400/mo; you supply more of the daily labor.',
  },
  {
    value: 'self',
    label: 'Self-care / home (you provide everything)',
    monthly: 150,
    note: 'Self-care covers a stall/space rental only; you buy feed, bedding, and do all labor. Keeping at home shifts cost to land, hay, and facilities.',
  },
]

interface CostState {
  boardType: string
  board: number
  feed: number
  farrierVisit: number
  vetAnnual: number
  insuranceMonthly: number
  insuranceOn: boolean
  startupOn: boolean
  startupTack: number
  startupFirstVet: number
}

const DEFAULTS: CostState = {
  boardType: 'full',
  board: 700,
  feed: 120, // supplemental feed/hay beyond what board provides; full-board often bundles hay
  farrierVisit: 55, // trim; shoeing runs higher (see note)
  vetAnnual: 500, // routine spring/fall exam + core vaccines + annual dental float
  insuranceMonthly: 45, // major-medical + mortality on a mid-value horse
  insuranceOn: false,
  startupOn: false,
  startupTack: 1500, // saddle, bridle, pad, halters, grooming, blankets, basics
  startupFirstVet: 600, // pre-purchase exam + initial workup/vaccines
}

const FARRIER_CYCLE_WEEKS = 6
// 52 weeks / 6-week cycle ≈ 8.67 visits per year.
const FARRIER_VISITS_PER_YEAR = 52 / FARRIER_CYCLE_WEEKS

function usd(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

interface Breakdown {
  label: string
  monthly: number
  annual: number
}

export default function Calculator() {
  const [s, setS] = useState<CostState>(DEFAULTS)

  function set<K extends keyof CostState>(key: K, value: CostState[K]) {
    setS((prev) => ({ ...prev, [key]: value }))
  }

  function selectBoard(boardType: string) {
    const opt = BOARD_OPTIONS.find((o) => o.value === boardType) ?? BOARD_OPTIONS[0]
    setS((prev) => ({ ...prev, boardType, board: opt.monthly }))
  }

  const boardOption = BOARD_OPTIONS.find((o) => o.value === s.boardType) ?? BOARD_OPTIONS[0]

  const { recurringMonthly, recurringAnnual, breakdown, startupTotal } = useMemo(() => {
    const farrierAnnual = (s.farrierVisit || 0) * FARRIER_VISITS_PER_YEAR
    const insuranceMonthly = s.insuranceOn ? s.insuranceMonthly || 0 : 0

    const rows: Breakdown[] = [
      { label: 'Boarding', monthly: s.board || 0, annual: (s.board || 0) * 12 },
      { label: 'Feed & hay (supplemental)', monthly: s.feed || 0, annual: (s.feed || 0) * 12 },
      { label: `Farrier (every ${FARRIER_CYCLE_WEEKS} wks)`, monthly: farrierAnnual / 12, annual: farrierAnnual },
      { label: 'Routine vet, dental & vaccines', monthly: (s.vetAnnual || 0) / 12, annual: s.vetAnnual || 0 },
      { label: 'Insurance', monthly: insuranceMonthly, annual: insuranceMonthly * 12 },
    ]

    const recurringMonthly = rows.reduce((a, r) => a + r.monthly, 0)
    const recurringAnnual = rows.reduce((a, r) => a + r.annual, 0)
    const startupTotal = s.startupOn ? (s.startupTack || 0) + (s.startupFirstVet || 0) : 0

    return { recurringMonthly, recurringAnnual, breakdown: rows, startupTotal }
  }, [s])

  const numberField = (
    id: string,
    label: string,
    value: number,
    onChange: (n: number) => void,
    help?: string,
  ) => (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-brand-text-dark">
        {label}
      </label>
      {help && <p className="mb-2 text-xs text-brand-text-mid">{help}</p>}
      <div className="flex items-center rounded border border-brand-border bg-brand-surface">
        <span className="px-3 text-brand-text-mid" aria-hidden="true">$</span>
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min="0"
          step="1"
          value={Number.isFinite(value) ? value : ''}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          className="w-full rounded-r border-0 bg-transparent px-1 py-2 text-brand-text-dark focus:outline-none"
        />
      </div>
    </div>
  )

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      {/* Board type */}
      <div className="mb-5">
        <label htmlFor="hc-board-type" className="mb-1 block text-sm font-medium text-brand-text-dark">
          Boarding arrangement
        </label>
        <select
          id="hc-board-type"
          value={s.boardType}
          onChange={(e) => selectBoard(e.target.value)}
          className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
        >
          {BOARD_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <p className="mt-2 text-xs text-brand-text-mid">{boardOption.note}</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {numberField('hc-board', 'Boarding ($/month)', s.board, (n) => set('board', n), 'Editable — start from the board-type default above, then adjust to a real quote in your area.')}
        {numberField('hc-feed', 'Feed & hay ($/month)', s.feed, (n) => set('feed', n), 'Supplemental grain/hay beyond what board provides. Self-care owners should raise this to cover all forage.')}
        {numberField('hc-farrier', 'Farrier ($/visit)', s.farrierVisit, (n) => set('farrierVisit', n), `Charged every ~${FARRIER_CYCLE_WEEKS} weeks (~${FARRIER_VISITS_PER_YEAR.toFixed(1)} visits/yr). A trim runs less; full shoeing runs more.`)}
        {numberField('hc-vet', 'Routine vet, dental & vaccines ($/year)', s.vetAnnual, (n) => set('vetAnnual', n), 'Annual wellness: spring/fall exam, core vaccines, and a dental float. Excludes emergencies/lameness work.')}
      </div>

      {/* Insurance toggle */}
      <div className="mt-5 rounded border border-brand-border p-4">
        <label className="flex items-center gap-2 text-sm font-medium text-brand-text-dark">
          <input
            type="checkbox"
            checked={s.insuranceOn}
            onChange={(e) => set('insuranceOn', e.target.checked)}
          />
          Include insurance (optional)
        </label>
        {s.insuranceOn && (
          <div className="mt-3 max-w-xs">
            {numberField('hc-ins', 'Insurance ($/month)', s.insuranceMonthly, (n) => set('insuranceMonthly', n), 'Major-medical + mortality cover varies with the horse’s value and use.')}
          </div>
        )}
      </div>

      {/* Startup toggle */}
      <div className="mt-4 rounded border border-brand-border p-4">
        <label className="flex items-center gap-2 text-sm font-medium text-brand-text-dark">
          <input
            type="checkbox"
            checked={s.startupOn}
            onChange={(e) => set('startupOn', e.target.checked)}
          />
          Add one-time startup costs (tack, pre-purchase exam)
        </label>
        {s.startupOn && (
          <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {numberField('hc-tack', 'Tack & equipment (one-time)', s.startupTack, (n) => set('startupTack', n), 'Saddle, bridle, pads, halters, grooming kit, blankets, first-aid basics.')}
            {numberField('hc-fvet', 'Pre-purchase exam + initial vet (one-time)', s.startupFirstVet, (n) => set('startupFirstVet', n), 'Vetting before purchase plus the first round of vaccines/workup.')}
          </div>
        )}
      </div>

      {/* Result */}
      <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="rounded border border-brand-border bg-brand-surface p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-mid">Estimated monthly</p>
          <p className="mt-1 font-display text-4xl text-brand-text-dark">{usd(Math.round(recurringMonthly))}</p>
          <p className="mt-1 text-xs text-brand-text-mid">recurring cost / month</p>
        </div>
        <div className="rounded border border-brand-border bg-brand-surface p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-mid">Estimated annual</p>
          <p className="mt-1 font-display text-4xl text-brand-text-dark">{usd(Math.round(recurringAnnual))}</p>
          <p className="mt-1 text-xs text-brand-text-mid">recurring cost / year</p>
        </div>
      </div>

      {/* Breakdown table */}
      <div className="mt-4 overflow-hidden rounded border border-brand-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-brand-surface text-left text-brand-text-mid">
              <th className="px-4 py-2 font-semibold">Category</th>
              <th className="px-4 py-2 text-right font-semibold">Monthly</th>
              <th className="px-4 py-2 text-right font-semibold">Annual</th>
            </tr>
          </thead>
          <tbody>
            {breakdown
              .filter((r) => r.monthly > 0 || r.annual > 0)
              .map((r) => (
                <tr key={r.label} className="border-t border-brand-border">
                  <td className="px-4 py-2 text-brand-text-dark">{r.label}</td>
                  <td className="px-4 py-2 text-right text-brand-text-mid">{usd(Math.round(r.monthly))}</td>
                  <td className="px-4 py-2 text-right text-brand-text-mid">{usd(Math.round(r.annual))}</td>
                </tr>
              ))}
            <tr className="border-t border-brand-border bg-brand-surface font-semibold">
              <td className="px-4 py-2 text-brand-text-dark">Total recurring</td>
              <td className="px-4 py-2 text-right text-brand-text-dark">{usd(Math.round(recurringMonthly))}</td>
              <td className="px-4 py-2 text-right text-brand-text-dark">{usd(Math.round(recurringAnnual))}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {s.startupOn && startupTotal > 0 && (
        <p className="mt-4 text-sm text-brand-text-mid">
          <strong>One-time startup (not in the totals above):</strong> about{' '}
          <strong className="text-brand-text-dark">{usd(Math.round(startupTotal))}</strong> for tack and the
          pre-purchase exam. Add the purchase price of the horse itself separately — it ranges enormously.
        </p>
      )}

      <p className="mt-4 text-xs text-brand-text-mid">
        These are <strong>estimates</strong>, not quotes. Regional and individual variation is large:
        boarding near major metros, shoeing versus barefoot trims, an aging horse&rsquo;s dental and joint
        needs, and a single colic or lameness event can each move the number by hundreds or thousands of
        dollars. Build an emergency fund on top of this budget and get real local quotes before you buy.
      </p>
    </div>
  )
}
