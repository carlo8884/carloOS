'use client'

/**
 * QuickQuiz — 5-question loan match quiz.
 *
 * Stateless on the server. Answers are stored in component state and
 * rendered into a result block with up to 3 ranked recommendations.
 *
 * The recommendation algorithm is intentionally simple — pick lenders
 * whose specialties intersect the user's purpose, who lend in the user's
 * state, whose min loan ≤ amount ≤ max loan, then rank by editorialScore.
 */

import { useMemo, useState } from 'react'
import { AffiliateLink } from '@carloOS/ui'
import { LENDERS, type LenderProfile, type Specialty } from '@/data/lenders'
import { STATES } from '@/data/states'

type Purpose = 'fix-and-flip' | 'brrrr' | 'refi' | 'bridge'
type PropertyType = 'SFR' | 'Multifamily' | 'Commercial'
type CreditRange = '<620' | '620-679' | '680-739' | '740+'

const PROPERTY_TYPES: PropertyType[] = ['SFR', 'Multifamily', 'Commercial']
const PURPOSES: Array<{ key: Purpose; label: string }> = [
  { key: 'fix-and-flip', label: 'Fix-and-Flip' },
  { key: 'brrrr', label: 'BRRRR (Buy/Rehab/Rent/Refi/Repeat)' },
  { key: 'refi', label: 'Cash-Out Refinance / DSCR Rental' },
  { key: 'bridge', label: 'Bridge Loan (short-term)' },
]
const CREDIT_RANGES: CreditRange[] = ['<620', '620-679', '680-739', '740+']

function purposeToSpecialties(p: Purpose): Specialty[] {
  switch (p) {
    case 'fix-and-flip':
      return ['fix-and-flip']
    case 'brrrr':
      return ['fix-and-flip', 'dscr-rental']
    case 'refi':
      return ['dscr-rental']
    case 'bridge':
      return ['bridge']
  }
}

function recommend(
  amount: number,
  propType: PropertyType,
  purpose: Purpose,
  state: string,
): LenderProfile[] {
  const wantedSpecialties = purposeToSpecialties(purpose)
  return LENDERS.filter((l) => {
    if (amount < l.loanMin || amount > l.loanMax) return false
    const inState =
      l.stateCoverage === 'nationwide'
        ? !(l.stateExclusions ?? []).includes(state)
        : l.stateCoverage.includes(state)
    if (!inState) return false
    if (propType === 'Multifamily' && !l.propertyTypes.includes('Multifamily')) return false
    if (propType === 'Commercial' && !l.propertyTypes.includes('Commercial') && !l.propertyTypes.includes('Mixed-Use')) return false
    return l.specialties.some((s) => wantedSpecialties.includes(s))
  })
    .sort((a, b) => b.editorialScore - a.editorialScore)
    .slice(0, 3)
}

export function QuickQuiz() {
  const [step, setStep] = useState(0)
  const [amount, setAmount] = useState<number>(250_000)
  const [propType, setPropType] = useState<PropertyType>('SFR')
  const [purpose, setPurpose] = useState<Purpose>('fix-and-flip')
  const [state, setState] = useState<string>('TX')
  const [credit, setCredit] = useState<CreditRange>('680-739')
  const [submitted, setSubmitted] = useState(false)

  const matches = useMemo(
    () => (submitted ? recommend(amount, propType, purpose, state) : []),
    [submitted, amount, propType, purpose, state],
  )

  if (submitted) {
    return (
      <div className="bg-brand-white border border-brand-border rounded-lg p-6">
        <h3 className="font-display text-xl font-bold mb-2">
          Your top matches
        </h3>
        <p className="text-sm text-brand-text-mid mb-5">
          Based on: ${amount.toLocaleString()} · {propType} · {purpose.replace('-', ' ')} · {state} · credit {credit}
        </p>

        {matches.length === 0 ? (
          <div className="text-sm text-brand-text-mid">
            No lenders matched. Try adjusting loan amount or state coverage.
          </div>
        ) : (
          <ul className="space-y-4">
            {matches.map((l, i) => (
              <li
                key={l.slug}
                className="flex items-start justify-between gap-4 border-t border-brand-border pt-4 first:border-0 first:pt-0"
              >
                <div>
                  <div className="text-2xs uppercase tracking-wider text-brand-text-light mb-0.5">
                    #{i + 1} Match · Editorial Score {l.editorialScore.toFixed(1)}/10
                  </div>
                  <div className="font-display text-lg font-bold">{l.name}</div>
                  <p className="text-sm text-brand-text-mid mt-1 max-w-xl">
                    {l.positioning}
                  </p>
                </div>
                <AffiliateLink
                  vendor={l.vendor}
                  source="quiz-result"
                  eventLabel={`quiz-${l.slug}`}
                  className="shrink-0 self-center px-4 py-2 bg-brand-primary text-brand-white text-xs font-semibold rounded no-underline"
                >
                  Get a Quote
                </AffiliateLink>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => {
              setSubmitted(false)
              setStep(0)
            }}
            className="px-4 py-2 border border-brand-border text-sm rounded"
          >
            Start over
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-brand-white border border-brand-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display text-xl font-bold">
          60-Second Lender Match
        </h3>
        <span className="text-2xs uppercase tracking-wider text-brand-text-light">
          Step {step + 1} / 5
        </span>
      </div>

      {step === 0 && (
        <div>
          <label className="block text-sm font-semibold mb-2">Loan amount (USD)</label>
          <input
            type="number"
            min={50_000}
            step={10_000}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full px-3 py-2 border border-brand-border rounded text-sm"
          />
          <button onClick={() => setStep(1)} className="mt-4 px-5 py-2 bg-brand-primary text-brand-white text-sm font-semibold rounded">
            Next
          </button>
        </div>
      )}

      {step === 1 && (
        <div>
          <label className="block text-sm font-semibold mb-2">Property type</label>
          <div className="flex flex-wrap gap-2">
            {PROPERTY_TYPES.map((p) => (
              <button
                key={p}
                onClick={() => setPropType(p)}
                className={`px-4 py-2 border text-sm rounded ${
                  propType === p
                    ? 'bg-brand-primary text-brand-white border-brand-primary'
                    : 'bg-brand-white border-brand-border text-brand-text-dark'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
          <button onClick={() => setStep(2)} className="mt-4 px-5 py-2 bg-brand-primary text-brand-white text-sm font-semibold rounded">
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <label className="block text-sm font-semibold mb-2">Purpose</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {PURPOSES.map((p) => (
              <button
                key={p.key}
                onClick={() => setPurpose(p.key)}
                className={`px-4 py-2 border text-sm rounded text-left ${
                  purpose === p.key
                    ? 'bg-brand-primary text-brand-white border-brand-primary'
                    : 'bg-brand-white border-brand-border text-brand-text-dark'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
          <button onClick={() => setStep(3)} className="mt-4 px-5 py-2 bg-brand-primary text-brand-white text-sm font-semibold rounded">
            Next
          </button>
        </div>
      )}

      {step === 3 && (
        <div>
          <label className="block text-sm font-semibold mb-2">State of property</label>
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full px-3 py-2 border border-brand-border rounded text-sm bg-brand-white"
          >
            {STATES.map((s) => (
              <option key={s.code} value={s.code}>{s.name}</option>
            ))}
          </select>
          <button onClick={() => setStep(4)} className="mt-4 px-5 py-2 bg-brand-primary text-brand-white text-sm font-semibold rounded">
            Next
          </button>
        </div>
      )}

      {step === 4 && (
        <div>
          <label className="block text-sm font-semibold mb-2">Credit range</label>
          <div className="flex flex-wrap gap-2">
            {CREDIT_RANGES.map((c) => (
              <button
                key={c}
                onClick={() => setCredit(c)}
                className={`px-4 py-2 border text-sm rounded ${
                  credit === c
                    ? 'bg-brand-primary text-brand-white border-brand-primary'
                    : 'bg-brand-white border-brand-border text-brand-text-dark'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <button onClick={() => setSubmitted(true)} className="mt-4 px-5 py-2 bg-brand-primary text-brand-white text-sm font-semibold rounded">
            See my matches
          </button>
        </div>
      )}

      <p className="text-2xs text-brand-text-light mt-5 leading-relaxed">
        Results are editorial recommendations only — not a loan offer or pre-approval. Lender terms, rates, and eligibility are determined at the lender&apos;s discretion.
      </p>
    </div>
  )
}
