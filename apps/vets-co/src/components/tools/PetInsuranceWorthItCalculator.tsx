'use client'

/**
 * PetInsuranceWorthItCalculator — "Is pet insurance worth it?" breakeven tool.
 *
 * COO-lane interactive primitive (not a visual component): a pure-browser
 * calculator that models, for a given carrier quote and an expected-annual-
 * vet-cost scenario, (a) annual premium vs. modeled reimbursement and (b) the
 * breakeven point — the eligible-vet-cost level at which reimbursement equals
 * the annual premium, i.e. the policy "pays for itself."
 *
 * Honest framing (QC §1): insurance is catastrophic-cost protection, not
 * guaranteed savings. The tool never guarantees savings and routes high-intent
 * users to the neutral comparison + the coverage finder, not to a "buy" CTA.
 *
 * Math (standard annual-deductible / fixed-percentage model):
 *   annualPremium = monthlyPremium * 12
 *   reimbursable  = max(0, eligibleCosts - deductible) * (reimbursementPct/100)
 *   reimbursed    = min(reimbursable, annualLimit)            // null = unlimited
 *   netVsPremium  = reimbursed - annualPremium                // >0 => "paid for itself"
 *
 * Breakeven (eligible-cost level X where reimbursed == annualPremium), before
 * the annual cap binds:
 *   max(0, X - deductible) * pct = annualPremium
 *   X = deductible + annualPremium / pct
 * If that X would require reimbursement above the annual cap (annualPremium >
 * cap), the premium can never be recovered within the cap and there is no
 * breakeven — the tool says so honestly.
 */

import { useMemo, useState } from 'react'

function dollars(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

interface Inputs {
  monthlyPremium: number
  deductible: number
  reimbursementPct: number
  annualLimit: number | null
  eligibleCosts: number
}

interface Result {
  annualPremium: number
  reimbursable: number
  reimbursed: number
  netVsPremium: number
  capBinding: boolean
  breakeven: number | null // null => premium exceeds the annual cap, never recoverable
}

export function computeWorthIt({
  monthlyPremium,
  deductible,
  reimbursementPct,
  annualLimit,
  eligibleCosts,
}: Inputs): Result {
  const pct = reimbursementPct / 100
  const annualPremium = monthlyPremium * 12
  const aboveDeductible = Math.max(0, eligibleCosts - deductible)
  const reimbursable = aboveDeductible * pct
  const reimbursed = annualLimit === null ? reimbursable : Math.min(reimbursable, annualLimit)
  const netVsPremium = reimbursed - annualPremium
  const capBinding = annualLimit !== null && reimbursable > annualLimit

  // Breakeven eligible-cost level where reimbursed == annualPremium.
  // Unreachable if the premium itself exceeds the annual cap (rare but honest to flag).
  let breakeven: number | null
  if (pct <= 0) {
    breakeven = null
  } else if (annualLimit !== null && annualPremium > annualLimit) {
    breakeven = null
  } else {
    breakeven = deductible + annualPremium / pct
  }

  return { annualPremium, reimbursable, reimbursed, netVsPremium, capBinding, breakeven }
}

const REIMBURSEMENT_OPTIONS = [70, 80, 90]
const LIMIT_PRESETS: Array<{ label: string; value: number | null }> = [
  { label: '$5,000 / year', value: 5000 },
  { label: '$10,000 / year', value: 10000 },
  { label: '$15,000 / year', value: 15000 },
  { label: 'Unlimited', value: null },
]

// Sensible expected-cost scenarios (eligible illness/accident costs only —
// routine wellness excluded). Anchored to NAPHIA aggregate claim ranges and
// typical vet-bill bands; presets set the slider, which the user can override.
const COST_SCENARIOS: Array<{ label: string; value: number; note: string }> = [
  { label: 'Healthy year', value: 300, note: 'A minor issue or two — an ear infection, a GI upset.' },
  { label: 'Moderate', value: 1500, note: 'A non-routine workup: imaging, bloodwork, a short treatment course.' },
  { label: 'One major incident', value: 6000, note: 'A single serious event — foreign-body surgery, a cruciate repair.' },
  { label: 'Catastrophic', value: 12000, note: 'Cancer care, emergency surgery + hospitalization, or a chronic condition.' },
]

export function PetInsuranceWorthItCalculator() {
  const [monthlyPremium, setMonthlyPremium] = useState(45)
  const [deductible, setDeductible] = useState(250)
  const [reimbursementPct, setReimbursementPct] = useState(80)
  const [annualLimit, setAnnualLimit] = useState<number | null>(10000)
  const [eligibleCosts, setEligibleCosts] = useState(1500)

  const result = useMemo(
    () => computeWorthIt({ monthlyPremium, deductible, reimbursementPct, annualLimit, eligibleCosts }),
    [monthlyPremium, deductible, reimbursementPct, annualLimit, eligibleCosts],
  )

  const paidForItself = result.netVsPremium > 0
  const tone = paidForItself
    ? 'border-emerald-700/40 bg-emerald-950/30 text-emerald-200'
    : 'border-amber-700/40 bg-amber-950/30 text-amber-200'

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="wi-premium" className="mb-2 block text-sm font-medium text-brand-text-mid">
            Monthly premium ($)
          </label>
          <input
            id="wi-premium"
            type="number"
            min={5}
            max={500}
            step={1}
            value={monthlyPremium}
            onChange={(e) => setMonthlyPremium(Math.max(0, Number(e.target.value) || 0))}
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
          />
          <p className="mt-1 text-xs text-brand-text-mid">
            Typical accident-and-illness premiums run roughly $25–$70/mo for dogs and $12–$40/mo for cats, rising with age and breed. Use the carrier&apos;s quote for your pet.
          </p>
        </div>

        <div>
          <label htmlFor="wi-deductible" className="mb-2 block text-sm font-medium text-brand-text-mid">
            Annual deductible ($)
          </label>
          <input
            id="wi-deductible"
            type="number"
            min={0}
            max={2000}
            step={50}
            value={deductible}
            onChange={(e) => setDeductible(Math.max(0, Number(e.target.value) || 0))}
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
          />
          <p className="mt-1 text-xs text-brand-text-mid">Most carriers offer $100–$1,000. You pay this before reimbursement begins.</p>
        </div>

        <div>
          <label htmlFor="wi-reimbursement" className="mb-2 block text-sm font-medium text-brand-text-mid">
            Reimbursement %
          </label>
          <div className="flex gap-2">
            {REIMBURSEMENT_OPTIONS.map((pct) => (
              <button
                key={pct}
                type="button"
                onClick={() => setReimbursementPct(pct)}
                className={`flex-1 rounded border px-3 py-2 text-sm font-semibold transition ${
                  reimbursementPct === pct
                    ? 'border-brand-primary bg-brand-primary text-white'
                    : 'border-brand-border bg-brand-surface text-brand-text-mid hover:text-brand-text-dark'
                }`}
              >
                {pct}%
              </button>
            ))}
          </div>
          <p className="mt-1 text-xs text-brand-text-mid">Share of the bill (above the deductible) the carrier reimburses. Usually 70 / 80 / 90%.</p>
        </div>

        <div>
          <label htmlFor="wi-limit" className="mb-2 block text-sm font-medium text-brand-text-mid">
            Annual payout cap
          </label>
          <select
            id="wi-limit"
            value={annualLimit === null ? 'unlimited' : String(annualLimit)}
            onChange={(e) => setAnnualLimit(e.target.value === 'unlimited' ? null : Number(e.target.value))}
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
          >
            {LIMIT_PRESETS.map((opt) => (
              <option key={opt.label} value={opt.value === null ? 'unlimited' : String(opt.value)}>
                {opt.label}
              </option>
            ))}
          </select>
          <p className="mt-1 text-xs text-brand-text-mid">The ceiling on what the carrier pays per year. A low cap can bind on a catastrophic bill.</p>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="wi-costs" className="mb-2 block text-sm font-medium text-brand-text-mid">
            Expected eligible vet costs this year: <span className="font-semibold text-brand-text-dark">{dollars(eligibleCosts)}</span>
          </label>
          <input
            id="wi-costs"
            type="range"
            min={0}
            max={15000}
            step={100}
            value={eligibleCosts}
            onChange={(e) => setEligibleCosts(Math.max(0, Number(e.target.value) || 0))}
            className="w-full accent-brand-primary"
          />
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {COST_SCENARIOS.map((s) => (
              <button
                key={s.label}
                type="button"
                onClick={() => setEligibleCosts(s.value)}
                title={s.note}
                className={`rounded border px-2 py-2 text-xs font-semibold transition ${
                  eligibleCosts === s.value
                    ? 'border-brand-primary bg-brand-primary text-white'
                    : 'border-brand-border bg-brand-surface text-brand-text-mid hover:text-brand-text-dark'
                }`}
              >
                {s.label}
                <span className="mt-0.5 block text-2xs font-normal opacity-80">{dollars(s.value)}</span>
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs text-brand-text-mid">
            Illness and accident costs only — routine wellness (exams, vaccines, dental cleaning) is usually excluded from standard policies. Drag the slider or pick a scenario.
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
        <div className="rounded border border-brand-border bg-brand-surface p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-mid">Annual premium</p>
          <p className="mt-1 text-2xl font-display text-brand-text-dark">{dollars(result.annualPremium)}</p>
          <p className="mt-1 text-xs text-brand-text-mid">What you pay regardless of claims.</p>
        </div>
        <div className="rounded border border-brand-border bg-brand-surface p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-mid">Modeled reimbursement</p>
          <p className="mt-1 text-2xl font-display text-brand-text-dark">{dollars(result.reimbursed)}</p>
          {result.capBinding && (
            <p className="mt-1 text-xs text-brand-warning">Capped by the annual limit (would be {dollars(result.reimbursable)} uncapped).</p>
          )}
        </div>
        <div className="rounded border border-brand-border bg-brand-surface p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-mid">Reimbursement − premium</p>
          <p className="mt-1 text-2xl font-display text-brand-text-dark">
            {result.netVsPremium > 0 ? '+' : ''}
            {dollars(result.netVsPremium)}
          </p>
          <p className="mt-1 text-xs text-brand-text-mid">At {dollars(eligibleCosts)} in eligible costs.</p>
        </div>
      </div>

      <div className={`mt-6 rounded border p-4 ${tone}`}>
        <p className="text-xs font-semibold uppercase tracking-wide opacity-80">Breakeven</p>
        {result.breakeven === null ? (
          <p className="mt-1 text-sm">
            With this premium and annual cap, reimbursement can never exceed the premium within the cap — the policy
            cannot pay for itself at any claim level under these inputs. Lower the deductible, raise the cap, or
            re-check the premium against a carrier quote.
          </p>
        ) : (
          <>
            <p className="mt-1 text-2xl font-display">
              {dollars(result.breakeven)}
            </p>
            <p className="mt-1 text-sm">
              Your insurance pays for itself if your <strong>eligible</strong> vet costs this year exceed{' '}
              {dollars(result.breakeven)}. Below that, you pay more in premium than the policy reimburses;
              above it, the policy returns more than it costs. {paidForItself
                ? `At your current ${dollars(eligibleCosts)} scenario, it pays for itself.`
                : `At your current ${dollars(eligibleCosts)} scenario, it does not — but that is the expected case in a low-cost year.`}
            </p>
          </>
        )}
      </div>

      <p className="mt-4 text-xs text-brand-text-mid leading-relaxed">
        This is a planning estimate, not a guarantee of savings. Insurance is risk protection against rare, large
        bills — in most individual years a policy does not &ldquo;pay for itself,&rdquo; and that is by design, the
        same as home or auto insurance. Actual reimbursement depends on the policy contract, pre-existing and
        hereditary exclusions, waiting periods, state regulation, and the carrier&apos;s adjudication. Premiums also
        rise at renewal as a pet ages. Verify every figure against the carrier&apos;s Sample Policy and Schedule of
        Benefits before deciding.
      </p>
    </div>
  )
}
