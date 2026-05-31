'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { AffiliateLink, AffiliateDisclosure, EmailCapture } from '@carloOS/ui'
import { CARRIERS, type CarrierProfile } from '../../../data/insurance-carriers'

type Answers = {
  species: 'dog' | 'cat' | ''
  ageStage: 'puppy' | 'adult' | 'senior' | ''
  priority: 'coverage' | 'budget' | 'flexibility' | 'reputation' | ''
  budget: 'low' | 'mid' | 'high' | ''
}

const QUESTIONS: {
  key: keyof Answers
  prompt: string
  options: { value: string; label: string; sub?: string }[]
}[] = [
  {
    key: 'species',
    prompt: "What pet are you insuring?",
    options: [
      { value: 'dog', label: 'Dog' },
      { value: 'cat', label: 'Cat' },
    ],
  },
  {
    key: 'ageStage',
    prompt: "What life stage is your pet in?",
    options: [
      { value: 'puppy', label: 'Under 1 year', sub: 'Puppy / kitten' },
      { value: 'adult', label: '1–7 years', sub: 'Healthy adult' },
      { value: 'senior', label: '7+ years', sub: 'Senior' },
    ],
  },
  {
    key: 'priority',
    prompt: "What matters most to you?",
    options: [
      { value: 'coverage', label: 'Maximum coverage', sub: 'I want everything included' },
      { value: 'flexibility', label: 'Plan flexibility', sub: 'I want to customize limits and deductibles' },
      { value: 'budget', label: 'Lowest premium', sub: 'I want the cheapest defensible plan' },
      { value: 'reputation', label: 'Track record', sub: 'I want a carrier with long operating history' },
    ],
  },
  {
    key: 'budget',
    prompt: 'What monthly premium feels right?',
    options: [
      { value: 'low', label: 'Under $30/mo' },
      { value: 'mid', label: '$30–$50/mo' },
      { value: 'high', label: '$50+/mo, give me the best' },
    ],
  },
]

function recommend(answers: Answers): {
  top: CarrierProfile
  alternates: CarrierProfile[]
  reasoning: string
} {
  // Heuristic scoring based on answers.
  const scored = CARRIERS.map((c) => {
    let score = c.editorialScore

    // Age fit
    if (answers.ageStage === 'senior') {
      if (c.ageLimits.max.includes('no upper')) score += 1.5
      else score -= 0.5
    }

    // Priority
    if (answers.priority === 'coverage') {
      if (c.coversExamFees === true) score += 0.8
      if (c.coversAlternative) score += 0.3
      if (c.coversBehavioral) score += 0.3
      if (c.annualLimitOptions.includes('unlimited')) score += 0.5
    }
    if (answers.priority === 'flexibility') {
      score += c.reimbursementOptions.length * 0.2
      score += c.annualLimitOptions.length * 0.15
    }
    if (answers.priority === 'budget') {
      score -= c.samplePremiumMonthly.low * 0.04
    }
    if (answers.priority === 'reputation') {
      const age = 2026 - (c.yearFounded ?? 2020)
      score += age * 0.06
    }

    // Budget tier
    if (answers.budget === 'low' && c.samplePremiumMonthly.low > 30) score -= 1.5
    if (answers.budget === 'mid' && (c.samplePremiumMonthly.low < 20 || c.samplePremiumMonthly.high > 60))
      score -= 0.8
    if (answers.budget === 'high' && c.samplePremiumMonthly.low < 30) score -= 0.4

    return { c, score }
  })

  scored.sort((a, b) => b.score - a.score)
  const top = scored[0].c
  const alternates = scored.slice(1, 3).map((s) => s.c)

  const reasoning = [
    answers.ageStage === 'senior'
      ? `Senior pets need a carrier without an enrollment age cap. ${top.name} ${top.ageLimits.max.includes('no upper') ? 'has no upper age limit' : 'caps at ' + top.ageLimits.max}.`
      : null,
    answers.priority === 'coverage'
      ? `${top.name} is one of the strongest carriers for comprehensive coverage out of the box.`
      : null,
    answers.priority === 'budget'
      ? `At $${top.samplePremiumMonthly.low}–$${top.samplePremiumMonthly.high}/mo for the reference profile, ${top.name} is competitively priced.`
      : null,
    answers.priority === 'flexibility'
      ? `${top.name} offers ${top.reimbursementOptions.length} reimbursement options and ${top.annualLimitOptions.length} annual limit tiers.`
      : null,
    answers.priority === 'reputation'
      ? `${top.name} was founded in ${top.yearFounded} and carries an ${top.amBestRating ?? '—'} A.M. Best rating.`
      : null,
  ]
    .filter(Boolean)
    .join(' ')

  return { top, alternates, reasoning: reasoning || `${top.name} fits your profile best.` }
}

export default function InsuranceQuizPage() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({
    species: '',
    ageStage: '',
    priority: '',
    budget: '',
  })

  const done = step >= QUESTIONS.length
  const result = useMemo(() => (done ? recommend(answers) : null), [done, answers])

  const setAnswer = (key: keyof Answers, value: string) => {
    setAnswers((a) => ({ ...a, [key]: value as Answers[typeof key] }))
    setStep((s) => s + 1)
  }

  const reset = () => {
    setStep(0)
    setAnswers({ species: '', ageStage: '', priority: '', budget: '' })
  }

  return (
    <AffiliateDisclosure variant="banner">
      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">
          🛡️ 60-second insurance quiz
        </span>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl"
          style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}
        >
          Which pet insurance fits your dog?
        </h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
          Four questions. No email required to see the result. We'll match you
          to a recommended carrier from the 9 major U.S. providers.
        </p>
      </div>

      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">
          Home
        </Link>
        <span>›</span>
        <Link href="/pet-insurance" className="hover:text-brand-primary no-underline">
          Pet Insurance
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid">Quiz</span>
      </nav>

      <div className="px-container sm:px-container-sm py-14 max-w-3xl mx-auto">
        {!done && (
          <div>
            <div className="mb-6 text-sm text-brand-text-light">
              Question {step + 1} of {QUESTIONS.length}
            </div>
            <h2 className="font-display text-2xl font-bold tracking-tight mb-6">
              {QUESTIONS[step].prompt}
            </h2>
            <div className="grid gap-3">
              {QUESTIONS[step].options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setAnswer(QUESTIONS[step].key, opt.value)}
                  className="text-left border border-brand-border rounded-xl p-5 hover:border-brand-primary hover:bg-brand-primary-pale transition bg-white"
                >
                  <div className="font-semibold">{opt.label}</div>
                  {opt.sub && <div className="text-sm text-brand-text-mid mt-1">{opt.sub}</div>}
                </button>
              ))}
            </div>
            {step > 0 && (
              <button
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                className="mt-6 text-sm text-brand-text-light underline"
              >
                ← Back
              </button>
            )}
          </div>
        )}

        {done && result && (
          <div>
            <div className="mb-6 text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
              🎯 Your match
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight mb-2">
              {result.top.name}
            </h2>
            <p className="text-brand-text-mid mb-6">{result.top.tagline}</p>

            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5 mb-8">
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
                <strong>Why this fits:</strong> {result.reasoning}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-brand-surface border border-brand-border rounded-xl p-4">
                <div className="text-xs text-brand-text-light mb-1">Sample premium</div>
                <div className="font-display text-lg font-bold">
                  ${result.top.samplePremiumMonthly.low}–${result.top.samplePremiumMonthly.high}/mo
                </div>
              </div>
              <div className="bg-brand-surface border border-brand-border rounded-xl p-4">
                <div className="text-xs text-brand-text-light mb-1">Editorial score</div>
                <div className="font-display text-lg font-bold">{result.top.editorialScore}/10</div>
              </div>
            </div>

            <div className="mb-10">
              <AffiliateLink
                vendor={result.top.vendor}
                sku="home"
                source="pet-insurance-quiz-result"
                className="inline-block bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold no-underline hover:opacity-90"
              >
                Get a {result.top.name} quote →
              </AffiliateLink>
              <Link
                href={`/pet-insurance/${result.top.slug}`}
                className="inline-block ml-4 text-brand-primary font-semibold no-underline hover:underline"
              >
                See the full review
              </Link>
            </div>

            <h3 className="font-display text-xl font-bold mb-4">
              Also worth considering
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {result.alternates.map((a) => (
                <Link
                  key={a.slug}
                  href={`/pet-insurance/${a.slug}`}
                  className="border border-brand-border rounded-xl p-5 hover:border-brand-primary transition no-underline"
                >
                  <div className="font-display text-lg font-bold mb-1">{a.name}</div>
                  <div className="text-sm text-brand-text-mid mb-2">{a.tagline}</div>
                  <div className="text-xs text-brand-primary font-semibold">
                    Score: {a.editorialScore}/10 →
                  </div>
                </Link>
              ))}
            </div>

            <button
              onClick={reset}
              className="text-sm text-brand-text-light underline mb-10"
            >
              Take the quiz again
            </button>

            <EmailCapture
              variant="section"
              siteId="dog-com"
              tag="dog-com:insurance-comparison"
              title="Want the full carrier comparison?"
              subtitle="Side-by-side spreadsheet of all 9 carriers. We'll email it instantly."
              buttonText="Send the spreadsheet"
            />
          </div>
        )}
      </div>
    </AffiliateDisclosure>
  )
}
