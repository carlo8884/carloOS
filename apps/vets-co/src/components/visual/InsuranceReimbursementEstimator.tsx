'use client'

import { useMemo, useState } from 'react'
import { ResultMeaning, ToolError, numberFieldError } from '@carloOS/ui'

function dollars(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

interface Scenario {
  monthlyPremium: number
  annualDeductible: number
  reimbursementPct: number
  annualLimit: number | null
  expectedAnnualClaims: number
}

interface Result {
  annualPremium: number
  reimbursableBeforeCap: number
  reimbursed: number
  outOfPocketBills: number
  totalAnnualCost: number
  withoutInsuranceCost: number
  netBenefit: number
}

function compute({ monthlyPremium, annualDeductible, reimbursementPct, annualLimit, expectedAnnualClaims }: Scenario): Result {
  const annualPremium = monthlyPremium * 12
  const aboveDeductible = Math.max(0, expectedAnnualClaims - annualDeductible)
  const reimbursableBeforeCap = aboveDeductible * (reimbursementPct / 100)
  const reimbursed = annualLimit === null ? reimbursableBeforeCap : Math.min(reimbursableBeforeCap, annualLimit)
  const outOfPocketBills = expectedAnnualClaims - reimbursed
  const totalAnnualCost = annualPremium + outOfPocketBills
  const withoutInsuranceCost = expectedAnnualClaims
  const netBenefit = withoutInsuranceCost - totalAnnualCost
  return {
    annualPremium,
    reimbursableBeforeCap,
    reimbursed,
    outOfPocketBills,
    totalAnnualCost,
    withoutInsuranceCost,
    netBenefit,
  }
}

const REIMBURSEMENT_OPTIONS = [70, 80, 90]
const LIMIT_PRESETS: Array<{ label: string; value: number | null }> = [
  { label: '$5,000 annual', value: 5000 },
  { label: '$10,000 annual', value: 10000 },
  { label: '$15,000 annual', value: 15000 },
  { label: 'Unlimited', value: null },
]

export function InsuranceReimbursementEstimator() {
  const [monthlyPremiumRaw, setMonthlyPremiumRaw] = useState('45')
  const [annualDeductibleRaw, setAnnualDeductibleRaw] = useState('500')
  const [reimbursementPct, setReimbursementPct] = useState(80)
  const [annualLimit, setAnnualLimit] = useState<number | null>(10000)
  const [expectedAnnualClaimsRaw, setExpectedAnnualClaimsRaw] = useState('3000')

  const premiumError = numberFieldError(monthlyPremiumRaw, 'monthly premium', 0, 100000, 'dollars')
  const deductibleError = numberFieldError(annualDeductibleRaw, 'annual deductible', 0, 100000, 'dollars')
  const claimsError = numberFieldError(expectedAnnualClaimsRaw, 'expected covered claims', 0, 100000, 'dollars')
  const inputsValid = !premiumError && !deductibleError && !claimsError
  const monthlyPremium = inputsValid ? Number(monthlyPremiumRaw) : 0
  const annualDeductible = inputsValid ? Number(annualDeductibleRaw) : 0
  const expectedAnnualClaims = inputsValid ? Number(expectedAnnualClaimsRaw) : 0

  const result = useMemo(
    () => (inputsValid
      ? compute({ monthlyPremium, annualDeductible, reimbursementPct, annualLimit, expectedAnnualClaims })
      : null),
    [inputsValid, monthlyPremium, annualDeductible, reimbursementPct, annualLimit, expectedAnnualClaims],
  )

  const benefit = result?.netBenefit ?? 0
  const benefitTone =
    benefit > 0
      ? 'border-emerald-700/40 bg-emerald-950/30 text-emerald-200'
      : benefit < 0
        ? 'border-amber-700/40 bg-amber-950/30 text-amber-200'
        : 'border-brand-border bg-brand-surface text-brand-text-dark'

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="premium" className="mb-2 block text-sm font-medium text-brand-text-mid">
            Monthly premium ($)
          </label>
          <input
            id="premium"
            type="number"
            min={0}
            max={100000}
            step={1}
            value={monthlyPremiumRaw}
            onChange={(e) => setMonthlyPremiumRaw(e.target.value)}
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
          />
          <p className="mt-1 text-xs text-brand-text-mid">From the carrier&apos;s quote for the specific pet (age, breed, ZIP).</p>
          {premiumError && <ToolError>{premiumError}</ToolError>}
        </div>

        <div>
          <label htmlFor="deductible" className="mb-2 block text-sm font-medium text-brand-text-mid">
            Annual deductible ($)
          </label>
          <input
            id="deductible"
            type="number"
            min={0}
            max={100000}
            step={50}
            value={annualDeductibleRaw}
            onChange={(e) => setAnnualDeductibleRaw(e.target.value)}
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
          />
          <p className="mt-1 text-xs text-brand-text-mid">Most carriers offer $100-$1,000. Per-condition deductibles (Trupanion-style) behave differently — see methodology.</p>
          {deductibleError && <ToolError>{deductibleError}</ToolError>}
        </div>

        <div>
          <label htmlFor="reimbursement" className="mb-2 block text-sm font-medium text-brand-text-mid">
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
          <p className="mt-1 text-xs text-brand-text-mid">Carriers typically offer 70 / 80 / 90% reimbursement tiers above the deductible.</p>
        </div>

        <div>
          <label htmlFor="limit" className="mb-2 block text-sm font-medium text-brand-text-mid">
            Annual reimbursement cap
          </label>
          <select
            id="limit"
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
          <p className="mt-1 text-xs text-brand-text-mid">The annual ceiling on reimbursement. Caps below $10K can be binding for serious illness or surgery.</p>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="claims" className="mb-2 block text-sm font-medium text-brand-text-mid">
            Expected covered claims this year ($)
          </label>
          <input
            id="claims"
            type="number"
            min={0}
            max={100000}
            step={100}
            value={expectedAnnualClaimsRaw}
            onChange={(e) => setExpectedAnnualClaimsRaw(e.target.value)}
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
          />
          <p className="mt-1 text-xs text-brand-text-mid">
            Routine wellness is usually excluded (or paid via separate wellness add-on). Use this for unexpected illness + accident only.
          </p>
          {claimsError && <ToolError>{claimsError}</ToolError>}
        </div>
      </div>

      {result && (
      <>
      <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="rounded border border-brand-border bg-brand-surface p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-mid">Annual premium</p>
          <p className="mt-1 text-2xl font-display text-brand-text-dark">{dollars(result.annualPremium)}</p>
        </div>
        <div className="rounded border border-brand-border bg-brand-surface p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-mid">Reimbursed this year</p>
          <p className="mt-1 text-2xl font-display text-brand-text-dark">{dollars(result.reimbursed)}</p>
          {annualLimit !== null && result.reimbursableBeforeCap > result.reimbursed && (
            <p className="mt-1 text-xs text-brand-warning">Capped by annual limit (would have been {dollars(result.reimbursableBeforeCap)} uncapped).</p>
          )}
        </div>
        <div className="rounded border border-brand-border bg-brand-surface p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-mid">Out-of-pocket on vet bills</p>
          <p className="mt-1 text-2xl font-display text-brand-text-dark">{dollars(result.outOfPocketBills)}</p>
        </div>
        <div className="rounded border border-brand-border bg-brand-surface p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-mid">Total annual cost with insurance</p>
          <p className="mt-1 text-2xl font-display text-brand-text-dark">{dollars(result.totalAnnualCost)}</p>
          <p className="mt-1 text-xs text-brand-text-mid">Premium + out-of-pocket on bills.</p>
        </div>
      </div>

      <div className={`mt-6 rounded border p-4 ${benefitTone}`}>
        <p className="text-xs font-semibold uppercase tracking-wide opacity-80">Net benefit vs. paying out-of-pocket</p>
        <p className="mt-1 text-2xl font-display">
          {benefit > 0 ? '+' : ''}
          {dollars(benefit)} / year
        </p>
        <p className="mt-1 text-sm">
          {benefit > 0
            ? `At ${dollars(expectedAnnualClaims)} in claims, insurance saves you ${dollars(benefit)} this year. The expected break-even claims amount is shown in the methodology section.`
            : benefit < 0
              ? `At ${dollars(expectedAnnualClaims)} in claims, you would pay ${dollars(Math.abs(benefit))} more with insurance than without. Insurance is best modelled as catastrophic-bill protection, not expected-value-positive at every claim level.`
              : `At ${dollars(expectedAnnualClaims)} in claims, insurance is break-even for this scenario.`}
        </p>
      </div>
      <ResultMeaning>
        Net benefit compares premium plus leftover bills with paying the same claims yourself. It is an estimate from these inputs, not a carrier quote.
      </ResultMeaning>
      </>
      )}

      <p className="mt-4 text-xs text-brand-text-mid">
        Estimator only. Actual reimbursement depends on the policy contract, excluded conditions, pre-existing condition exclusions, state regulations, and the carrier&apos;s adjudication. Verify against the carrier&apos;s Sample Policy and Schedule of Benefits before purchasing.
      </p>
    </div>
  )
}
