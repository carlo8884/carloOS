'use client'

/**
 * Dog Body Condition Score (BCS) Assessor -- /tools/dog-body-condition-score
 *
 * A guided self-assessment, not a diagnosis. The owner answers three
 * hands-on/visual questions drawn from the WSAVA 9-point Body Condition Score
 * system (rib palpation, top-down waist, side-view abdominal tuck); the tool
 * averages them to an estimated BCS (1-9) and explains what it means and what
 * to do next. Every result defers to a veterinarian (QC §1). No diagnosis,
 * no fabricated precision.
 */

import { useMemo, useState } from 'react'
import { AffiliateDisclosure, ShopCtas } from '@carloOS/ui'

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

// Options map to points on the WSAVA 1-9 scale (5 = ideal midpoint).
const QUESTIONS: Question[] = [
  {
    id: 'ribs',
    prompt: 'Feel your dog’s ribs',
    help: 'Run both hands flat along the rib cage, with light pressure — the way you’d feel the back of your own hand.',
    options: [
      { label: 'Ribs, spine and hip bones stand out; no fat, with obvious muscle loss', score: 1 },
      { label: 'Ribs easily seen and felt with no fat covering; tops of the spine visible', score: 3 },
      { label: 'Ribs easily felt with only a thin layer of fat over them', score: 5 },
      { label: 'Ribs hard to feel under a moderate layer of fat', score: 7 },
      { label: 'Ribs very hard or impossible to feel under thick fat', score: 9 },
    ],
  },
  {
    id: 'waist',
    prompt: 'Look down at your dog from above',
    help: 'Stand over your standing dog and look straight down at the area behind the ribs.',
    options: [
      { label: 'Extreme hourglass; spine and hip bones obvious', score: 1 },
      { label: 'Clear waist behind the ribs — a visible hourglass shape', score: 5 },
      { label: 'Waist is hard to see; the back looks slightly broadened', score: 7 },
      { label: 'No waist at all; the back is broad and flat', score: 9 },
    ],
  },
  {
    id: 'tuck',
    prompt: 'Look at your dog from the side',
    help: 'View your standing dog at eye level and follow the belly line from the chest to the back legs.',
    options: [
      { label: 'Belly is severely tucked up; very lean and bony', score: 2 },
      { label: 'Belly clearly rises from the chest toward the back legs (a clear tuck)', score: 5 },
      { label: 'Belly is nearly level with little tuck', score: 7 },
      { label: 'Belly hangs down or is rounded; no tuck', score: 9 },
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
        'Below ideal. Ribs, spine, and hips are easy to see with little or no fat. This can mean underfeeding, parasites, dental pain, or an underlying illness — especially if the weight loss is recent or unexplained. Increase toward ideal gradually and ask your vet to rule out a medical cause.',
    }
  }
  if (bcs <= 5) {
    return {
      tone: 'good',
      label: 'Ideal',
      blurb:
        'Ideal body condition. Ribs are easily felt under a thin layer of fat, the waist is visible from above, and there is a clear abdominal tuck from the side. Keep your current feeding amount and exercise, and re-check every month or two.',
    }
  }
  if (bcs <= 7) {
    return {
      tone: 'warn',
      label: 'Overweight',
      blurb:
        'Above ideal. As a rule of thumb, each point above 5 is roughly 10% over ideal body weight — so a BCS of 7 is about 20% overweight. Trim treats, measure meals, add gentle activity, and have your vet confirm a target weight and a safe rate of loss.',
    }
  }
  return {
    tone: 'danger',
    label: 'Obese',
    blurb:
      'Well above ideal — roughly 30% or more over ideal body weight. Obesity shortens lifespan and worsens arthritis, diabetes, and breathing problems. This is worth a real plan: work with your vet on a structured, monitored weight-loss program rather than crash dieting.',
  }
}

const SHOP_SOURCE = 'tools-dog-bcs'

function resultShop(tone: Band['tone']): {
  heading: string
  blurb: string
  href: string
  label: string
} {
  switch (tone) {
    case 'low':
      return {
        heading: 'Weigh meals while you book the vet',
        blurb:
          'An underweight score is a reason to call your veterinarian before changing the diet — unexplained thinness can mean parasites, dental pain, or illness. A kitchen / pet scale lets you record what you are already feeding so the vet can review it. This tool does not set a target weight or diagnose a cause.',
        href: `/go/amazon-brand/digital+gram+scale+kitchen+pet?s=${SHOP_SOURCE}`,
        label: 'Browse portion-control food scales on Amazon →',
      }
    case 'good':
      return {
        heading: 'Keep the routine with a measured feeder',
        blurb:
          'Ideal condition is a feeding-and-exercise routine that is already working. An elevated slow-feeder bowl helps you keep portions consistent without speeding through the meal. Re-check BCS every month or two, and let your veterinarian set any weight target if the score drifts.',
        href: `/go/amazon-brand/elevated+slow+feeder+bowl+dog?s=${SHOP_SOURCE}`,
        label: 'Browse elevated slow-feeder bowls on Amazon →',
      }
    case 'warn':
      return {
        heading: 'Measure, portion, and slow the bowl',
        blurb:
          'An overweight score is a starting observation, not a diet plan. A dog measuring tape or body-condition chart makes the next score repeatable; a portion scale and a slow feeder help you measure meals instead of guessing. Ask your veterinarian for a target weight and a safe rate of loss before cutting calories.',
        href: `/go/amazon-brand/dog+measuring+tape+body+condition+chart?s=${SHOP_SOURCE}`,
        label: 'Browse dog measuring tapes and BCS charts on Amazon →',
      }
    case 'danger':
      return {
        heading: 'Portion with a scale — then follow a vet plan',
        blurb:
          'An obese score needs a veterinarian-directed weight-loss plan, not a crash diet. A portion-control food scale is how you record what is actually in the bowl so the clinic can set calories. This tool does not diagnose obesity-related disease or set a target weight.',
        href: `/go/amazon-brand/portion+control+food+scale+dog?s=${SHOP_SOURCE}`,
        label: 'Browse portion-control food scales on Amazon →',
      }
  }
}

export default function DogBCSCalculator() {
  const [answers, setAnswers] = useState<Record<string, number | null>>({
    ribs: null,
    waist: null,
    tuck: null,
  })

  const result = useMemo(() => {
    const scores = QUESTIONS.map((q) => answers[q.id]).filter((s): s is number => s != null)
    if (scores.length < QUESTIONS.length) return null
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length
    const bcs = Math.min(9, Math.max(1, Math.round(avg)))
    const next = band(bcs)
    return { bcs, ...next, shop: resultShop(next.tone) }
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
        </div>
      ) : null}

      {result ? (
        <div className="mt-6 rounded-lg border border-brand-border bg-brand-white p-5">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Next step
          </p>
          <p className="font-display text-base font-semibold leading-snug text-brand-text-dark">
            {result.shop.heading}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-brand-text-mid">{result.shop.blurb}</p>
          <AffiliateDisclosure variant="inline" siteId="dog-com" className="my-3" />
          <ShopCtas amazonHref={result.shop.href} amazonLabel={result.shop.label} />
        </div>
      ) : (
        <p className="mt-2 text-sm text-brand-text-light">
          Answer all three to see your dog&apos;s estimated body condition score.
        </p>
      )}

      <p className="mt-4 text-2xs leading-snug text-brand-text-light">
        A guided estimate, not a diagnosis. Body condition scoring is a hands-on skill — your veterinarian&apos;s
        assessment is the reference, and any unexplained weight change should be checked by a vet.
      </p>
    </div>
  )
}
