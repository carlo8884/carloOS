'use client'

/**
 * Reptile Cost of Ownership Calculator -- /tools/reptile-cost-calculator
 *
 * Client compute component. Estimates the one-time setup cost plus the monthly
 * and annual running cost of keeping a reptile, broken down by line item.
 *
 * Distinct from the per-species equipment build guides (/builds): this is the
 * BUDGET tool. Every figure is USER-EDITABLE and seeded with realistic 2026 US
 * ranges; the only computed value is electricity (watts x hours x rate), the
 * line owners most often underestimate. Everything is framed as an ESTIMATE.
 * No fabricated precision, no guarantees.
 */

import { useMemo, useState } from 'react'

interface Preset {
  key: string
  label: string
  setup: number          // one-time setup ($)
  watts: number          // combined heat + UVB wattage while on
  hoursPerDay: number    // hours the heat/UVB run per day
  feeders: number        // $/month food + feeders
  substrate: number      // $/month substrate / bedding
  supplements: number    // $/month calcium / vitamin dust
  uvbBulb: number        // replacement UVB/heat bulb cost ($)
  uvbMonths: number      // replacement interval (months); 0 = none
  note: string
}

// Seeded from commonly published keeper ranges. All values are editable below.
const PRESETS: Preset[] = [
  { key: 'bearded-dragon', label: 'Bearded dragon', setup: 350, watts: 150, hoursPerDay: 12, feeders: 30, substrate: 8, supplements: 4, uvbBulb: 35, uvbMonths: 6, note: 'High heat + strong UVB + live insects make beardies one of the pricier common lizards to run.' },
  { key: 'leopard-gecko', label: 'Leopard gecko', setup: 200, watts: 60, hoursPerDay: 12, feeders: 20, substrate: 5, supplements: 3, uvbBulb: 30, uvbMonths: 9, note: 'Lower wattage and a smaller enclosure; low-level UVB is now widely recommended.' },
  { key: 'crested-gecko', label: 'Crested gecko', setup: 200, watts: 25, hoursPerDay: 12, feeders: 15, substrate: 6, supplements: 2, uvbBulb: 25, uvbMonths: 12, note: 'Room-temperature species; powdered diet keeps feeder cost low.' },
  { key: 'ball-python', label: 'Ball python', setup: 250, watts: 100, hoursPerDay: 24, feeders: 15, substrate: 8, supplements: 1, uvbBulb: 25, uvbMonths: 12, note: 'Heat runs 24/7; one rodent a week keeps food cost modest. Low-level UVB optional.' },
  { key: 'custom', label: 'Custom / other species', setup: 250, watts: 100, hoursPerDay: 12, feeders: 20, substrate: 6, supplements: 3, uvbBulb: 30, uvbMonths: 9, note: 'Start from these mid-range defaults and edit every field to your animal and setup.' },
]

const DEFAULT_RATE = 0.17 // US average $/kWh (2026); editable

interface State {
  presetKey: string
  setup: number
  watts: number
  hoursPerDay: number
  rate: number
  feeders: number
  substrate: number
  supplements: number
  uvbBulb: number
  uvbMonths: number
  vetFund: number
}

function fromPreset(p: Preset): State {
  return {
    presetKey: p.key,
    setup: p.setup,
    watts: p.watts,
    hoursPerDay: p.hoursPerDay,
    rate: DEFAULT_RATE,
    feeders: p.feeders,
    substrate: p.substrate,
    supplements: p.supplements,
    uvbBulb: p.uvbBulb,
    uvbMonths: p.uvbMonths,
    vetFund: 10,
  }
}

function compute(s: State) {
  const electricity = (s.watts / 1000) * s.hoursPerDay * 30 * s.rate
  const uvbMonthly = s.uvbMonths > 0 ? s.uvbBulb / s.uvbMonths : 0
  const monthly = electricity + s.feeders + s.substrate + s.supplements + uvbMonthly + s.vetFund
  const annual = monthly * 12
  return {
    electricity,
    uvbMonthly,
    monthly,
    annual,
    firstYear: s.setup + annual,
  }
}

function usd(n: number): string {
  return '$' + (Math.round(n * 100) / 100).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })
}
function usd0(n: number): string {
  return '$' + Math.round(n).toLocaleString('en-US')
}

function Field({ label, value, onChange, step = 1, prefix, suffix }: {
  label: string; value: number; onChange: (n: number) => void; step?: number; prefix?: string; suffix?: string
}) {
  return (
    <label style={{ display: 'block' }}>
      <span style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--brand-text-mid, #8a96ad)', marginBottom: 4 }}>{label}</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {prefix && <span style={{ color: 'var(--brand-text-light, #6b7280)', fontSize: 14 }}>{prefix}</span>}
        <input
          type="number" inputMode="decimal" min={0} step={step} value={value}
          onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))}
          style={{ width: '100%', borderRadius: 6, border: '1px solid var(--brand-border, #2a3142)', background: 'var(--brand-white, #fff)', padding: '8px 10px', color: 'var(--brand-text-dark, #1a1f2e)' }}
        />
        {suffix && <span style={{ color: 'var(--brand-text-light, #6b7280)', fontSize: 13, whiteSpace: 'nowrap' }}>{suffix}</span>}
      </span>
    </label>
  )
}

export default function ReptileCostCalculator() {
  const [s, setS] = useState<State>(() => fromPreset(PRESETS[0]))
  const preset = PRESETS.find((p) => p.key === s.presetKey) ?? PRESETS[0]
  const r = useMemo(() => compute(s), [s])
  const set = (patch: Partial<State>) => setS((prev) => ({ ...prev, ...patch }))

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      {/* Species preset */}
      <label className="block mb-6">
        <span className="mb-2 block text-xs font-medium text-brand-text-mid">Species (seeds editable defaults)</span>
        <select
          value={s.presetKey}
          onChange={(e) => { const p = PRESETS.find((x) => x.key === e.target.value)!; setS(fromPreset(p)) }}
          className="w-full rounded border border-brand-border bg-brand-white px-3 py-2 text-brand-text-dark"
        >
          {PRESETS.map((p) => <option key={p.key} value={p.key}>{p.label}</option>)}
        </select>
        <span className="mt-1 block text-2xs text-brand-text-light leading-snug">{preset.note}</span>
      </label>

      {/* One-time */}
      <h3 className="mb-3 text-sm font-bold text-brand-text-dark uppercase tracking-wide">One-time setup</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-6">
        <Field label="Initial setup (enclosure, heat, UVB, decor)" value={s.setup} onChange={(n) => set({ setup: n })} step={10} prefix="$" />
      </div>
      <p className="-mt-4 mb-6 text-2xs text-brand-text-light leading-snug">
        Want the itemized gear list for your species? See the{' '}
        <a href="/builds" className="text-brand-primary underline-offset-2 hover:underline">vivarium build guides</a>.
      </p>

      {/* Running costs */}
      <h3 className="mb-3 text-sm font-bold text-brand-text-dark uppercase tracking-wide">Monthly running cost</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Field label="Heat + UVB wattage (while on)" value={s.watts} onChange={(n) => set({ watts: n })} step={5} suffix="W" />
        <Field label="Hours per day on" value={s.hoursPerDay} onChange={(n) => set({ hoursPerDay: Math.min(24, n) })} step={1} suffix="h" />
        <Field label="Electricity rate" value={s.rate} onChange={(n) => set({ rate: n })} step={0.01} prefix="$" suffix="/kWh" />
        <Field label="Food + feeders" value={s.feeders} onChange={(n) => set({ feeders: n })} step={1} prefix="$" suffix="/mo" />
        <Field label="Substrate / bedding" value={s.substrate} onChange={(n) => set({ substrate: n })} step={1} prefix="$" suffix="/mo" />
        <Field label="Supplements (calcium / vitamin)" value={s.supplements} onChange={(n) => set({ supplements: n })} step={1} prefix="$" suffix="/mo" />
        <Field label="UVB/heat bulb replacement" value={s.uvbBulb} onChange={(n) => set({ uvbBulb: n })} step={1} prefix="$" />
        <Field label="Bulb replaced every" value={s.uvbMonths} onChange={(n) => set({ uvbMonths: n })} step={1} suffix="months" />
        <Field label="Vet / emergency fund" value={s.vetFund} onChange={(n) => set({ vetFund: n })} step={1} prefix="$" suffix="/mo" />
      </div>

      {/* Results */}
      <div className="mt-8 rounded-lg border border-brand-border bg-brand-white p-5 sm:p-6">
        <div className="grid gap-5 sm:grid-cols-3">
          <div>
            <p className="text-2xs uppercase tracking-wide text-brand-text-light">Monthly running cost</p>
            <p className="mt-1 font-display text-2xl font-bold text-brand-dark">{usd(r.monthly)}</p>
          </div>
          <div>
            <p className="text-2xs uppercase tracking-wide text-brand-text-light">Per year (running)</p>
            <p className="mt-1 font-display text-2xl font-bold text-brand-dark">{usd0(r.annual)}</p>
          </div>
          <div>
            <p className="text-2xs uppercase tracking-wide text-brand-text-light">First year (setup + running)</p>
            <p className="mt-1 font-display text-2xl font-bold text-brand-primary">{usd0(r.firstYear)}</p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-brand-text-mid">
          Of the monthly figure, electricity is about <strong>{usd(r.electricity)}</strong> and the amortised bulb
          replacement about <strong>{usd(r.uvbMonthly)}</strong> — the two lines new keepers most often forget. Heat and
          UVB run for years, so the running cost, not the setup, is what makes a reptile a long-term commitment.
        </p>
      </div>

      <p className="mt-4 text-2xs leading-snug text-brand-text-light">
        Estimate only. Costs vary widely by species, enclosure size, local electricity and feeder prices, and your
        animal&apos;s needs. Edit every field to match your situation; the seeded numbers are mid-range US starting points.
      </p>
    </div>
  )
}
