'use client'

/**
 * Dog Breed Match wizard — client-side stepper UI.
 *
 * Pure client logic, no email gate, no analytics POST. Renders the question
 * stack one-at-a-time and groups breeds into honest fit tiers from
 * wizard-logic.ts when complete — NO ranked list, NO percentage. Premium
 * styling mirrors the /which-pet wizard: SVG icons (no emoji), data-derived
 * "why this may fit" bullets, a prominent caveat, and a per-card internal-link
 * row (breed profile · health · pet insurance).
 */

import { useMemo, useState } from 'react'
import Link from 'next/link'
import {
  QUESTIONS,
  type Answers,
  type QuestionKey,
  type BreedFit,
  type BreedFitResults,
  getBreedFits,
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

function IconHeart({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M10 16.5l-6-5.4A3.6 3.6 0 1 1 10 6a3.6 3.6 0 1 1 6 5.1l-6 5.4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconShield({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 2.5l6 2v4.5c0 4-2.7 6.4-6 7.5-3.3-1.1-6-3.5-6-7.5V4.5l6-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M7.5 10l1.8 1.8L13 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
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

  const fitResults: BreedFitResults | null = useMemo(() => {
    if (!showResults) return null
    return getBreedFits(answers)
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

  if (showResults && fitResults) {
    return (
      <ResultsView
        results={fitResults}
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
  results,
  onBack,
  onRestart,
}: {
  results: BreedFitResults
  onBack: () => void
  onRestart: () => void
}) {
  const { mayFit, closerLook, noStrongFit } = results

  return (
    <div>
      {/* Results header */}
      <div className="bg-brand-dark text-white rounded-xl p-6 sm:p-8 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Breeds That May Fit Your Lifestyle
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight mb-3">
          Based on your answers, here are breeds worth a look.
        </h2>
        <p className="text-white/70 text-sm leading-relaxed max-w-2xl">
          These breeds are grouped — not ranked or scored — by how their documented attributes line up with your lifestyle inputs, using AKC and ASPCA owner-suitability guidance. There is no single &quot;best&quot; breed; temperament varies within every breed, so always meet a specific dog before committing.
        </p>
      </div>

      {/* No-strong-fit note */}
      {noStrongFit && (
        <div className="rounded-xl border border-brand-border bg-brand-surface p-5 mb-6">
          <p className="text-sm text-brand-text-mid leading-relaxed flex items-start gap-2.5">
            <IconAlert className="w-4 h-4 text-brand-warning shrink-0 mt-0.5" />
            <span>
              No breed lined up cleanly with every answer. The breeds below are the closest fits — read each trade-off carefully, or change an answer to broaden the results.
            </span>
          </p>
        </div>
      )}

      {/* May fit your lifestyle */}
      {mayFit.length > 0 && (
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <IconCheck className="w-4 h-4 text-brand-primary shrink-0" />
            <h3 className="font-display text-xl font-bold text-brand-dark leading-tight">
              May fit your lifestyle
            </h3>
          </div>
          <p className="text-xs text-brand-text-light mb-4 leading-relaxed">
            Breeds whose documented attributes line up clearly with your answers.
          </p>
          <div className="grid gap-5">
            {mayFit.map((fit) => (
              <BreedCard key={fit.slug} fit={fit} />
            ))}
          </div>
        </section>
      )}

      {/* Worth a closer look */}
      {closerLook.length > 0 && (
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <IconAlert className="w-4 h-4 text-brand-warning shrink-0" />
            <h3 className="font-display text-xl font-bold text-brand-dark leading-tight">
              Worth a closer look
            </h3>
          </div>
          <p className="text-xs text-brand-text-light mb-4 leading-relaxed">
            Partial fits — some attributes line up, but read the trade-off on each card before deciding.
          </p>
          <div className="grid gap-5">
            {closerLook.map((fit) => (
              <BreedCard key={fit.slug} fit={fit} />
            ))}
          </div>
        </section>
      )}

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

function BreedCard({ fit }: { fit: BreedFit }) {
  const isMayFit = fit.tier === 'may-fit'
  return (
    <article
      className={[
        'bg-brand-white border-2 rounded-xl p-5 sm:p-6',
        isMayFit ? 'border-brand-primary shadow-card-hover' : 'border-brand-border shadow-card',
      ].join(' ')}
    >
      {/* Header */}
      <div className="mb-4">
        <div
          className={[
            'text-2xs font-bold tracking-eyebrow uppercase mb-1',
            isMayFit ? 'text-brand-primary' : 'text-brand-text-mid',
          ].join(' ')}
        >
          {isMayFit ? 'May fit your lifestyle' : 'Worth a closer look'}
        </div>
        <h4 className="font-display text-2xl font-bold text-brand-dark leading-tight">
          {fit.name}
        </h4>
        <div className="text-xs text-brand-text-light mt-1">AKC {fit.group} group</div>
      </div>

      {/* Why this may fit */}
      <div className="mb-4">
        <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-mid mb-2">
          Why this may fit
        </div>
        <ul className="space-y-2 list-none m-0 p-0">
          {fit.fitBullets.map((b, i) => (
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
          <span>{fit.caveat}</span>
        </p>
      </div>

      {/* Primary CTA — breed profile */}
      <Link
        href={fit.href}
        className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white font-semibold text-sm px-5 py-3 rounded-lg no-underline hover:bg-brand-primary-dark transition-colors duration-150 min-h-[44px]"
      >
        View breed profile
        <IconArrow className="w-4 h-4" />
      </Link>

      {/* Internal-link row — health + insurance research paths */}
      <div className="mt-4 pt-4 border-t border-brand-border">
        <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-mid mb-2">
          Research further
        </div>
        <div className="flex flex-wrap gap-2">
          {fit.healthLinks.map((h) => (
            <Link
              key={h.href}
              href={h.href}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-dark bg-brand-surface border border-brand-border rounded-md px-3 py-1.5 no-underline hover:border-brand-primary hover:text-brand-primary transition-colors duration-150"
            >
              <IconHeart className="w-3.5 h-3.5 text-brand-warning shrink-0" />
              {h.label}
            </Link>
          ))}
          <Link
            href={fit.insuranceHref}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-dark bg-brand-surface border border-brand-border rounded-md px-3 py-1.5 no-underline hover:border-brand-primary hover:text-brand-primary transition-colors duration-150"
          >
            <IconShield className="w-3.5 h-3.5 text-brand-primary shrink-0" />
            Pet insurance
          </Link>
        </div>
      </div>
    </article>
  )
}

export { BreedMatchWizard as default }
