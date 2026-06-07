'use client'

/**
 * Dog Breed Match wizard — client-side stepper UI.
 *
 * Pure client logic, no email gate, no analytics POST. Renders the question
 * stack one-at-a-time and surfaces the top-3 breed recommendations from
 * wizard-logic.ts when complete. Premium styling mirrors the /which-pet
 * wizard: SVG icons (no emoji), the orange #1-match card, a relative match %,
 * and a "View breed profile" CTA linking to /breeds/[slug].
 */

import { useMemo, useState } from 'react'
import Link from 'next/link'
import {
  QUESTIONS,
  type Answers,
  type QuestionKey,
  type BreedRecommendation,
  getBreedRecommendations,
  isComplete,
  progressPercent,
} from './wizard-logic'

// ─── Inline SVG icons (no emoji per QC trust-bar styling) ───────────────────

function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconAlert({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 2.5l8 14H2l8-14z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M10 8v3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="10" cy="14" r="0.9" fill="currentColor" />
    </svg>
  )
}

function IconArrow({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function BreedMatchWizard() {
  const [answers, setAnswers] = useState<Answers>({})
  const [stepIdx, setStepIdx] = useState(0)
  const [showResults, setShowResults] = useState(false)

  const progress = progressPercent(answers)
  const currentQuestion = QUESTIONS[stepIdx]
  const isLast = stepIdx === QUESTIONS.length - 1

  const recommendations: BreedRecommendation[] = useMemo(() => {
    if (!showResults) return []
    return getBreedRecommendations(answers, 3)
  }, [answers, showResults])

  function selectAnswer(key: QuestionKey, value: string) {
    const next: Answers = { ...answers, [key]: value }
    setAnswers(next)
    if (isLast) {
      if (isComplete(next)) setShowResults(true)
    } else {
      setStepIdx((i) => Math.min(i + 1, QUESTIONS.length - 1))
    }
  }

  function goBack() {
    if (showResults) {
      setShowResults(false)
      return
    }
    setStepIdx((i) => Math.max(i - 1, 0))
  }

  function restart() {
    setAnswers({})
    setStepIdx(0)
    setShowResults(false)
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (showResults) {
    return (
      <ResultsView
        recommendations={recommendations}
        onBack={goBack}
        onRestart={restart}
      />
    )
  }

  return (
    <div className="bg-brand-white border border-brand-border rounded-xl shadow-card p-5 sm:p-8">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Step {stepIdx + 1} of {QUESTIONS.length}
          </span>
          <span className="text-xs text-brand-text-light">{progress}% complete</span>
        </div>
        <div
          className="h-1.5 bg-brand-border rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full bg-brand-primary transition-all duration-300"
            style={{ width: `${Math.max(progress, 6)}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-dark leading-tight mb-2">
        {currentQuestion.prompt}
      </h2>
      {currentQuestion.helper && (
        <p className="text-sm text-brand-text-mid leading-relaxed mb-6">
          {currentQuestion.helper}
        </p>
      )}

      {/* Options */}
      <div className="grid gap-3 mb-6">
        {currentQuestion.options.map((opt) => {
          const selected = answers[currentQuestion.key] === opt.value
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => selectAnswer(currentQuestion.key, opt.value)}
              className={[
                'text-left px-5 py-4 rounded-lg border-2 transition-all duration-150 min-h-[60px] w-full',
                selected
                  ? 'border-brand-primary bg-brand-primary-pale text-brand-dark'
                  : 'border-brand-border bg-brand-white hover:border-brand-primary hover:bg-brand-primary-pale/30 text-brand-dark',
              ].join(' ')}
              aria-pressed={selected}
            >
              <span className="font-semibold text-base block">{opt.label}</span>
              {opt.sub && (
                <span className="text-xs text-brand-text-light mt-1 block leading-snug">
                  {opt.sub}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4 border-t border-brand-border">
        <button
          type="button"
          onClick={goBack}
          disabled={stepIdx === 0}
          className="text-sm font-medium text-brand-text-mid hover:text-brand-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-150 py-2"
        >
          Back
        </button>
        <span className="text-xs text-brand-text-light">
          Tap an answer to continue · No email required
        </span>
      </div>
    </div>
  )
}

function ResultsView({
  recommendations,
  onBack,
  onRestart,
}: {
  recommendations: BreedRecommendation[]
  onBack: () => void
  onRestart: () => void
}) {
  return (
    <div>
      {/* Results header */}
      <div className="bg-brand-dark text-white rounded-xl p-6 sm:p-8 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Your Top 3 Breed Matches
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight mb-3">
          Based on your answers, here&apos;s what fits.
        </h2>
        <p className="text-white/70 text-sm leading-relaxed max-w-2xl">
          Scores compare each breed against your lifestyle inputs using documented breed attributes and AKC + ASPCA owner-suitability guidance. Match percentage is relative to the best-fit breed for your answers — not an absolute score. Always meet a specific dog before committing.
        </p>
      </div>

      {/* Recommendation cards */}
      <div className="grid gap-5 mb-8">
        {recommendations.map((rec, idx) => (
          <BreedCard key={rec.slug} rec={rec} rank={idx + 1} />
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between pt-6 border-t border-brand-border">
        <button
          type="button"
          onClick={onBack}
          className="text-sm font-medium text-brand-text-mid hover:text-brand-primary transition-colors duration-150 py-2"
        >
          Change my last answer
        </button>
        <button
          type="button"
          onClick={onRestart}
          className="text-sm font-semibold text-brand-primary hover:text-brand-primary-dark transition-colors duration-150 py-2"
        >
          Restart the quiz
        </button>
      </div>
    </div>
  )
}

function BreedCard({ rec, rank }: { rec: BreedRecommendation; rank: number }) {
  return (
    <article
      className={[
        'bg-brand-white border-2 rounded-xl p-5 sm:p-6',
        rank === 1 ? 'border-brand-primary shadow-card-hover' : 'border-brand-border shadow-card',
      ].join(' ')}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1">
            #{rank} match
          </div>
          <h3 className="font-display text-2xl font-bold text-brand-dark leading-tight">
            {rec.name}
          </h3>
          <div className="text-xs text-brand-text-light mt-1">AKC {rec.group} group</div>
        </div>
        <div className="text-right shrink-0">
          <div className="font-display text-3xl font-black text-brand-primary leading-none">
            {rec.matchPercent}%
          </div>
          <div className="text-2xs text-brand-text-light uppercase tracking-wider mt-1">match</div>
        </div>
      </div>

      {/* Why this fits */}
      <div className="mb-4">
        <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-mid mb-2">
          Why this fits
        </div>
        <ul className="space-y-2 list-none m-0 p-0">
          {rec.fitBullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-brand-text-mid leading-relaxed">
              <IconCheck className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* What to consider */}
      <div className="mb-5">
        <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-mid mb-2">
          What to consider
        </div>
        <p className="text-sm text-brand-text-mid leading-relaxed flex items-start gap-2.5">
          <IconAlert className="w-4 h-4 text-brand-warning shrink-0 mt-0.5" />
          <span>{rec.caveat}</span>
        </p>
      </div>

      {/* CTA */}
      <Link
        href={rec.href}
        className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white font-semibold text-sm px-5 py-3 rounded-lg no-underline hover:bg-brand-primary-dark transition-colors duration-150 min-h-[44px]"
      >
        View breed profile
        <IconArrow className="w-4 h-4" />
      </Link>
    </article>
  )
}

export { BreedMatchWizard as default }
