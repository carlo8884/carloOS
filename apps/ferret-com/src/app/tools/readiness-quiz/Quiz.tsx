'use client'

/**
 * Ferret Readiness Quiz -- /tools/readiness-quiz
 * Client component. 10 honest questions across legality, time, other pets,
 * budget, odor/allergy tolerance, housing, vet access, and commitment.
 * Scores answers into 4 tiers with calibrated, non-judgmental guidance.
 * No fabricated statistics. No medical claims.
 */

import { useState } from 'react'
import Link from 'next/link'

interface Choice {
  label: string
  score: number
  note?: string
}

interface Question {
  id: string
  text: string
  subtext?: string
  choices: Choice[]
}

const QUESTIONS: Question[] = [
  {
    id: 'legality',
    text: 'Where do you live?',
    subtext: 'Ferrets are banned in California, Hawaii, New York City, and a number of other municipalities. Check before you commit.',
    choices: [
      { label: 'A state or country where ferrets are fully legal', score: 3 },
      { label: 'I am not sure yet', score: 1 },
      { label: 'A place where ferrets are restricted or banned', score: 0 },
    ],
  },
  {
    id: 'time',
    text: 'How many hours per day can you reliably give a ferret supervised out-of-cage time?',
    subtext: 'Ferrets need a minimum of 3-4 hours of free-roam time outside the cage daily. This is not optional.',
    choices: [
      { label: '4 or more hours most days', score: 3 },
      { label: '3-4 hours most days', score: 2 },
      { label: '1-2 hours most days', score: 1 },
      { label: 'Less than 1 hour most days', score: 0 },
    ],
  },
  {
    id: 'schedule',
    text: 'How consistent is your schedule over the next 5-10 years?',
    subtext: 'Pet ferrets commonly live 6-8 years. Long travel, relocation, or major life changes affect care continuity.',
    choices: [
      { label: 'Fairly stable; I have backup care plans for travel', score: 3 },
      { label: 'Variable, but I could arrange care coverage', score: 2 },
      { label: 'I travel frequently or expect major changes soon', score: 1 },
      { label: 'I have not thought through long-term coverage', score: 0 },
    ],
  },
  {
    id: 'other_pets',
    text: 'Do you have other pets?',
    subtext: 'Ferrets are predators and prey to larger animals. Dogs (especially terriers and sighthounds) and birds of prey are high-risk. Cats and rabbits require careful, supervised introductions.',
    choices: [
      { label: 'No other pets', score: 3 },
      { label: 'Cats or small dogs with calm temperaments', score: 2 },
      { label: 'Large or hunting-breed dogs, or birds of prey', score: 0 },
      { label: 'Rabbits, guinea pigs, or other small prey animals', score: 0 },
    ],
  },
  {
    id: 'budget_setup',
    text: 'Are you prepared for the one-time setup cost (cage, supplies, initial vet care) and ongoing yearly costs?',
    subtext: 'Setup typically runs $400-$600+; ongoing care is commonly $400-$800+ per year per ferret, not including illness.',
    choices: [
      { label: 'Yes, I have budgeted for setup and yearly care', score: 3 },
      { label: 'I can manage it, but it will be tight', score: 1 },
      { label: 'I have not looked at the numbers yet', score: 0 },
    ],
  },
  {
    id: 'budget_vet',
    text: 'Can you set aside an emergency fund or carry exotic-pet insurance?',
    subtext: 'Adrenal disease, insulinoma, and gastrointestinal blockages are common in ferrets. Treatment often runs $1,000-$3,000+ per episode. This is not a rare edge case.',
    choices: [
      { label: 'Yes, I can maintain a $1,500+ emergency fund or carry insurance', score: 3 },
      { label: 'Possibly, with planning', score: 1 },
      { label: 'No, unexpected vet costs would be a serious problem', score: 0 },
    ],
  },
  {
    id: 'odor',
    text: 'How do you feel about animal odor?',
    subtext: 'Ferrets have a natural musky scent that comes from skin oils, not just the scent glands. Even descented ferrets have a noticeable smell. Litter boxes need daily cleaning.',
    choices: [
      { label: 'Fine with it; I have had mustelids or other working-scent animals before', score: 3 },
      { label: 'Manageable with good cage hygiene', score: 2 },
      { label: 'I am sensitive to animal odors', score: 0 },
    ],
  },
  {
    id: 'housing',
    text: 'Does your housing situation allow ferrets?',
    subtext: 'Rental leases often restrict exotic pets. Check your lease or HOA rules before getting a ferret.',
    choices: [
      { label: 'I own my home, or my lease explicitly allows ferrets', score: 3 },
      { label: 'My lease allows pets; I need to confirm ferrets specifically', score: 1 },
      { label: 'My lease restricts exotic pets or I have not checked', score: 0 },
    ],
  },
  {
    id: 'vet_access',
    text: 'Is there an exotic-animal or small-mammal veterinarian within a reasonable distance?',
    subtext: 'General-practice vets often have limited ferret experience. Access to an exotics-experienced vet is important, especially for illness.',
    choices: [
      { label: 'Yes, there is an exotics vet nearby', score: 3 },
      { label: 'I have not looked yet but will before getting a ferret', score: 1 },
      { label: 'The nearest exotics vet is very far away', score: 0 },
    ],
  },
  {
    id: 'commitment',
    text: 'How do you approach long-term pet care?',
    subtext: 'Ferrets are a 6-10 year commitment that deepens as the animal ages and develops health issues.',
    choices: [
      { label: 'I plan to provide full care through illness and old age', score: 3 },
      { label: 'I am committed but have not thought through end-of-life care', score: 1 },
      { label: 'I would rehome if care became too demanding', score: 0 },
    ],
  },
]

interface ResultTier {
  min: number
  max: number
  label: string
  labelClass: string
  summary: string
  guidance: string[]
  links: { text: string; href: string }[]
}

const RESULT_TIERS: ResultTier[] = [
  {
    min: 24,
    max: 30,
    label: 'Strong fit',
    labelClass: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    summary: 'Your answers suggest you are well-positioned for ferret ownership. You have the time, housing, financial cushion, and realistic expectations the commitment requires.',
    guidance: [
      'Confirm your local legality and lease terms before moving forward.',
      'Locate an exotics-experienced vet before you bring a ferret home, not after.',
      'Read through the ownership resources below so there are no surprises in year two or three when health issues often emerge.',
      'Consider adopting from a shelter or rescue before purchasing from a breeder.',
    ],
    links: [
      { text: 'Ferret legality by state', href: '/ownership/ferret-legality-by-state' },
      { text: 'Cost of owning a ferret', href: '/ownership/cost-of-owning-a-ferret' },
      { text: 'Adoption vs. buying', href: '/ownership/adoption-vs-buying' },
      { text: 'Cost calculator', href: '/tools/cost-calculator' },
    ],
  },
  {
    min: 16,
    max: 23,
    label: 'Fit with preparation',
    labelClass: 'text-amber-700 bg-amber-50 border-amber-200',
    summary: 'Your situation is workable, but a few gaps could become real problems. Address them before committing rather than after.',
    guidance: [
      'Review the questions where you scored lower and make a concrete plan for each one.',
      'If the emergency vet budget is the gap, look into exotic-pet insurance before getting a ferret, not when the first illness hits.',
      'If schedule consistency is the gap, confirm backup care arrangements for travel and emergencies.',
      'If other-pet compatibility is the gap, read the ferrets-and-other-pets guide carefully before any introductions.',
    ],
    links: [
      { text: 'Cost of owning a ferret', href: '/ownership/cost-of-owning-a-ferret' },
      { text: 'Ferret insurance basics', href: '/ownership/ferret-insurance-basics' },
      { text: 'Ferrets and other pets', href: '/ownership/ferrets-and-other-pets' },
      { text: 'Cost calculator', href: '/tools/cost-calculator' },
    ],
  },
  {
    min: 8,
    max: 15,
    label: 'Not quite yet',
    labelClass: 'text-orange-700 bg-orange-50 border-orange-200',
    summary: 'Several of your answers point to real barriers that could result in a difficult experience for you or the ferret. That is worth taking seriously before committing.',
    guidance: [
      'Identify which barriers are fixable and which are not. Legality and housing are fixed constraints; time and budget are adjustable.',
      'If the barriers are temporary, revisit this quiz in a few months when your situation changes.',
      'If the time barrier is the issue, a lower-maintenance companion animal may be a better fit for this stage of your life.',
    ],
    links: [
      { text: 'Ferret legality by state', href: '/ownership/ferret-legality-by-state' },
      { text: 'Cost of owning a ferret', href: '/ownership/cost-of-owning-a-ferret' },
    ],
  },
  {
    min: 0,
    max: 7,
    label: 'Significant barriers present',
    labelClass: 'text-red-700 bg-red-50 border-red-200',
    summary: 'Your answers indicate one or more hard blockers: legal restrictions, no capacity for vet emergencies, housing that does not permit the animal, or very limited daily time.',
    guidance: [
      'A hard blocker (illegality, housing restriction, inability to fund emergency care) is not a gap to work around; it is a reason to wait.',
      'Ferrets surrendered due to unresolvable situations end up in shelters, often in poor health. Starting from a solid foundation protects both you and the animal.',
      'Read through the ownership section anyway. When circumstances change, you will be far better prepared.',
    ],
    links: [
      { text: 'Ferret legality by state', href: '/ownership/ferret-legality-by-state' },
      { text: 'Cost of owning a ferret', href: '/ownership/cost-of-owning-a-ferret' },
    ],
  },
]

function getTier(score: number): ResultTier {
  return (
    RESULT_TIERS.find((t) => score >= t.min && score <= t.max) ?? RESULT_TIERS[RESULT_TIERS.length - 1]
  )
}

export default function Quiz() {
  const [answers, setAnswers] = useState<Record<string, number | null>>({})
  const [submitted, setSubmitted] = useState(false)

  const totalQuestions = QUESTIONS.length
  const answeredCount = Object.values(answers).filter((v) => v !== null).length
  const allAnswered = answeredCount === totalQuestions

  function handleChoice(questionId: string, score: number) {
    setAnswers((prev: Record<string, number | null>) => ({ ...prev, [questionId]: score }))
  }

  function handleSubmit() {
    if (allAnswered) setSubmitted(true)
  }

  function handleReset() {
    setAnswers({})
    setSubmitted(false)
  }

  const answerValues = Object.values(answers) as Array<number | null>
  const score = answerValues.reduce<number>((sum, v) => sum + (v !== null ? v : 0), 0)
  const tier = submitted ? getTier(score) : null

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      {!submitted ? (
        <>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex-1 h-2 rounded-full bg-brand-border overflow-hidden">
              <div
                className="h-2 rounded-full bg-brand-primary transition-all duration-300"
                style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
              />
            </div>
            <span className="text-xs text-brand-text-light whitespace-nowrap">{answeredCount} / {totalQuestions}</span>
          </div>

          <div className="space-y-8">
            {QUESTIONS.map((q, idx) => {
              const selected = answers[q.id]
              return (
                <div key={q.id}>
                  <p className="mb-1 text-xs font-bold uppercase tracking-eyebrow text-brand-primary">
                    Question {idx + 1}
                  </p>
                  <p className="mb-1 font-display text-lg font-semibold text-brand-text-dark">{q.text}</p>
                  {q.subtext && (
                    <p className="mb-3 text-sm text-brand-text-mid leading-relaxed">{q.subtext}</p>
                  )}
                  <div className="space-y-2">
                    {q.choices.map((c) => {
                      const isSelected = selected === c.score && selected !== null
                        // handle the case where multiple choices might have the same score
                        // we need a unique key per choice — use the label
                      const key = `${q.id}-${c.label}`
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => handleChoice(q.id, c.score)}
                          className={`w-full text-left rounded border px-4 py-3 text-sm transition-colors ${
                            isSelected
                              ? 'border-brand-primary bg-brand-primary-pale text-brand-text-dark font-medium'
                              : 'border-brand-border bg-brand-white text-brand-text-mid hover:border-brand-primary/60'
                          }`}
                          aria-pressed={isSelected}
                        >
                          {c.label}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-8">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!allAnswered}
              className={`rounded px-6 py-3 font-semibold text-sm transition-colors ${
                allAnswered
                  ? 'bg-brand-primary text-white hover:bg-brand-primary/90'
                  : 'bg-brand-border text-brand-text-light cursor-not-allowed'
              }`}
            >
              {allAnswered ? 'See my result' : `Answer all ${totalQuestions - answeredCount} remaining question${totalQuestions - answeredCount !== 1 ? 's' : ''}`}
            </button>
          </div>
        </>
      ) : (
        tier && (
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-eyebrow text-brand-primary">Your result</p>
            <div className={`inline-block rounded border px-4 py-2 mb-4 text-lg font-display font-semibold ${tier.labelClass}`}>
              {tier.label}
            </div>
            <p className="mb-6 text-base text-brand-text-mid leading-relaxed">{tier.summary}</p>

            <h3 className="mb-3 font-display text-base font-semibold text-brand-text-dark">What to do next</h3>
            <ul className="mb-6 space-y-2">
              {tier.guidance.map((g) => (
                <li key={g} className="flex gap-2 text-sm text-brand-text-mid leading-relaxed">
                  <span className="mt-1 w-1 h-1 rounded-full bg-brand-primary flex-shrink-0" aria-hidden="true" />
                  {g}
                </li>
              ))}
            </ul>

            {tier.links.length > 0 && (
              <>
                <h3 className="mb-3 font-display text-base font-semibold text-brand-text-dark">Relevant resources</h3>
                <ul className="mb-6 space-y-1">
                  {tier.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-brand-primary underline-offset-2 hover:underline"
                      >
                        {l.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div className="mt-4 flex items-center gap-4">
              <button
                type="button"
                onClick={handleReset}
                className="text-sm text-brand-text-mid underline-offset-2 hover:underline hover:text-brand-text-dark"
              >
                Retake the quiz
              </button>
              <span className="text-brand-border">|</span>
              <span className="text-xs text-brand-text-light">Score: {score} / 30</span>
            </div>

            <p className="mt-6 text-xs text-brand-text-light leading-relaxed">
              This quiz is a self-assessment tool, not a purchase recommendation or veterinary advice.
              Results reflect your answers; circumstances change. Verify legality, housing rules, and
              vet availability before acquiring any animal.
            </p>
          </div>
        )
      )}
    </div>
  )
}
