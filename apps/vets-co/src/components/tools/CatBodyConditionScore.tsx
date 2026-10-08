'use client'

/**
 * Cat Body Condition Score (BCS) Assessor -- vets-co /tools/cat-body-condition-score
 *
 * Guided self-assessment, not a diagnosis. The owner answers three checks from
 * the WSAVA 9-point feline Body Condition Score chart (rib palpation, waist,
 * abdominal fat pad). Ideal for most cats is 4 to 5 of 9. Chart PDF:
 * https://wsava.org/wp-content/uploads/2025/06/WSAVA_BCSCat_BCSCat_Nutrition_250612.pdf
 * Averaging three checks into one integer is a planning figure simplification
 * of that chart, not a published scoring equation. The chart does not state a
 * percent of body weight per point. A BCS of 6/9 may be acceptable in some
 * cats, especially older cats.
 */

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ResultMeaning } from '@carloOS/ui'

interface Option {
  label: string
  score: number
}
interface Question {
  id: string
  prompt: string
  help: string
  options: Option[]
}

const QUESTIONS: Question[] = [
  {
    id: 'ribs',
    prompt: 'Feel your cat’s ribs',
    help: 'Run both hands gently along the chest with light pressure — most cats let you feel the ribs through a thin layer of fat.',
    options: [
      { label: 'Ribs, spine and hip bones are obvious; no fat, with muscle wasting', score: 1 },
      { label: 'Ribs easily seen and felt with no fat covering', score: 3 },
      { label: 'Ribs easily felt with only a slight covering of fat', score: 5 },
      { label: 'Ribs hard to feel under a moderate layer of fat', score: 7 },
      { label: 'Ribs very hard or impossible to feel under thick fat', score: 9 },
    ],
  },
  {
    id: 'waist',
    prompt: 'Look down at your cat from above',
    help: 'With your cat standing, look straight down at the area behind the ribs.',
    options: [
      { label: 'Severe hourglass; spine and hip bones stand out', score: 1 },
      { label: 'A visible waist behind the ribs', score: 5 },
      { label: 'Waist barely visible; the back looks rounded', score: 7 },
      { label: 'No waist; the back is broad and oval', score: 9 },
    ],
  },
  {
    id: 'belly',
    prompt: 'Look at your cat’s belly from the side',
    help: 'Judge the firm abdominal fat pad — NOT the primordial pouch, a normal loose flap of skin that hangs and swings as a cat walks (common after neutering). The pouch is skin; the fat pad is firm.',
    options: [
      { label: 'Belly very tucked up; very lean and bony', score: 2 },
      { label: 'Minimal abdominal fat pad; a slight tuck', score: 5 },
      { label: 'A noticeable, firm abdominal fat pad; little tuck', score: 7 },
      { label: 'Distended, rounded belly with a heavy firm fat pad; no tuck', score: 9 },
    ],
  },
]

interface Band {
  tone: 'low' | 'good' | 'warn' | 'danger'
  label: string
  blurb: string
}
function band(bcs: number): Band {
  if (bcs <= 3) {
    return {
      tone: 'low',
      label: 'Underweight',
      blurb:
        'Below ideal. Ribs, spine, and hips are easy to see with little or no fat. In cats this warrants attention — unexplained weight loss can signal hyperthyroidism, kidney disease, diabetes, dental pain, or other illness. Have your veterinarian examine your cat rather than simply feeding more.',
    }
  }
  if (bcs <= 5) {
    return {
      tone: 'good',
      label: 'Ideal',
      blurb:
        'Ideal body condition. Ribs are easily felt under a thin layer of fat, there is a visible waist from above, and only a minimal abdominal fat pad. Keep your current feeding and activity, and re-check monthly.',
    }
  }
  if (bcs <= 7) {
    return {
      tone: 'warn',
      label: 'Overweight',
      blurb:
        'Above ideal on the WSAVA 9-point chart. The chart does not state a percent of body weight per point. Cats lose weight slowly and safely — never crash-diet a cat (rapid loss risks hepatic lipidosis). Ask your vet for a target weight and a measured feeding plan.',
    }
  }
  return {
    tone: 'danger',
    label: 'Obese',
    blurb:
      'Well above ideal — roughly 30% or more over ideal body weight. Feline obesity strongly raises the risk of diabetes, arthritis, and urinary disease. Weight loss must be slow and vet-supervised, because fasting an overweight cat can trigger life-threatening hepatic lipidosis. This is a conversation to have with your veterinarian.',
  }
}

export default function CatBodyConditionScore() {
  const [answers, setAnswers] = useState<Record<string, number | null>>({
    ribs: null,
    waist: null,
    belly: null,
  })

  const result = useMemo(() => {
    const scores = QUESTIONS.map((q) => answers[q.id]).filter((s): s is number => s != null)
    if (scores.length < QUESTIONS.length) return null
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length
    const bcs = Math.min(9, Math.max(1, Math.round(avg)))
    return { bcs, ...band(bcs) }
  }, [answers])

  const toneColor: Record<Band['tone'], string> = {
    low: '#b45309',
    good: '#15803d',
    warn: '#b45309',
    danger: '#b91c1c',
  }

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      {QUESTIONS.map((q, qi) => (
        <fieldset key={q.id} className="mb-6">
          <legend className="mb-1 text-sm font-bold text-brand-text-dark">
            {qi + 1}. {q.prompt}
          </legend>
          <p className="mb-3 text-xs text-brand-text-light leading-snug">{q.help}</p>
          <div className="flex flex-col gap-2">
            {q.options.map((opt) => {
              const checked = answers[q.id] === opt.score
              return (
                <label
                  key={opt.label}
                  className={[
                    'flex cursor-pointer items-start gap-3 rounded-lg border p-3 text-sm transition-colors',
                    checked
                      ? 'border-brand-primary bg-brand-white'
                      : 'border-brand-border bg-brand-white hover:border-brand-primary',
                  ].join(' ')}
                >
                  <input
                    type="radio"
                    name={q.id}
                    checked={checked}
                    onChange={() => setAnswers((p) => ({ ...p, [q.id]: opt.score }))}
                    className="mt-0.5 shrink-0"
                  />
                  <span className="text-brand-text-dark leading-snug">{opt.label}</span>
                </label>
              )
            })}
          </div>
        </fieldset>
      ))}

      {result ? (
        <div className="mt-2 rounded-lg border border-brand-border bg-brand-white p-5 sm:p-6">
          <div className="flex items-baseline gap-3">
            <span className="text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light">
              Estimated BCS
            </span>
            <span className="font-display text-3xl font-black" style={{ color: toneColor[result.tone] }}>
              {result.bcs}/9
            </span>
            <span className="text-sm font-bold" style={{ color: toneColor[result.tone] }}>
              {result.label}
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-brand-text-mid">{result.blurb}</p>
          <ResultMeaning>
            How we calculate: rib, waist, and abdominal-fat-pad wording follows the WSAVA 9-point cat chart, where 4 to 5 of 9 is the goal for most cats. Rounding the average of the three checks is a planning figure, not a published equation. The chart does not state a percent of body weight per point.
          </ResultMeaning>
          <p className="mt-3 text-sm">
            <Link href="/tools/cat-calorie-calculator" className="font-semibold text-brand-primary underline">
              Estimate daily calories next
            </Link>
          </p>
        </div>
      ) : (
        <p className="mt-2 text-sm text-brand-text-light">
          Answer all three to see your cat&apos;s estimated body condition score.
        </p>
      )}

      <p className="mt-4 text-2xs leading-snug text-brand-text-light">
        Planning / wellness reference only — not a diagnosis. Body condition scoring is a hands-on
        skill — your veterinarian&apos;s assessment is the reference, and any unexplained weight
        change in a cat should be checked promptly.
      </p>
    </div>
  )
}
