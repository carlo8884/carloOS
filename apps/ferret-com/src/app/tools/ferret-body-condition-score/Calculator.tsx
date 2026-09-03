'use client'

/**
 * Ferret Body Condition Score (BCS) Assessor -- /tools/ferret-body-condition-score
 *
 * Guided self-assessment, not a diagnosis. The owner answers three
 * hands-on/visual checks (rib/spine feel, top-down waist, side-view belly)
 * drawn from the same 1–9 planning scale used on Dog.com and Vets.co, with
 * descriptors grounded in Ferret.com /diet/weight-management copy (lean and
 * muscular with a light covering over ribs and spine; defined waist; no
 * pendulous belly; coat hides a lot; seasonal weight swing). The tool
 * averages the three checks to an estimated BCS (1–9). Every result defers
 * to an exotic-mammal veterinarian (QC §1). No diagnosis, no fabricated
 * typical-weight grams, no published "ferret WSAVA chart" claim.
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

// Options map to points on the same 1–9 planning scale as the dog/cat BCS
// tools (5 = ideal midpoint). Descriptors are ferret-specific.
const QUESTIONS: Question[] = [
  {
    id: 'ribs',
    prompt: 'Feel your ferret’s ribs and spine',
    help: 'Run both hands along the rib cage and the back with light pressure. Coat thickness hides a lot — especially during a coat change — so use your hands, not just your eyes.',
    options: [
      { label: 'Ribs, spine and hip bones feel sharp and prominent, with little muscle', score: 1 },
      { label: 'Ribs and spine easily felt with almost no covering of flesh', score: 3 },
      { label: 'Ribs and spine easily felt under a light covering of flesh — lean and muscular', score: 5 },
      { label: 'Ribs hard to feel under a moderate layer of fat', score: 7 },
      { label: 'Ribs very hard or impossible to feel under thick fat', score: 9 },
    ],
  },
  {
    id: 'waist',
    prompt: 'Look down at your ferret from above',
    help: 'With the ferret standing, look straight down at the area behind the ribs. A ferret in good condition tapers to a defined waist.',
    options: [
      { label: 'Extreme taper; spine and hip bones obvious from above', score: 1 },
      { label: 'A defined waist behind the ribs — the body tapers', score: 5 },
      { label: 'Waist is hard to see; the back looks slightly broadened', score: 7 },
      { label: 'No waist at all; the back is broad and rounded', score: 9 },
    ],
  },
  {
    id: 'belly',
    prompt: 'Look at your ferret from the side',
    help: 'View the standing ferret at eye level and follow the belly line. Do not confuse a normal seasonal fat layer (autumn/winter) with a year-round pendulous belly.',
    options: [
      { label: 'Belly severely tucked; very lean and bony', score: 2 },
      { label: 'No pendulous belly; a lean, muscular outline from the side', score: 5 },
      { label: 'Belly is soft and fuller, with little tuck', score: 7 },
      { label: 'Belly hangs — a pendulous, rounded underside; no tuck', score: 9 },
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
        'Below ideal. Ribs, spine, and hips feel sharp with little muscle. A spring slim-down can be a normal seasonal weight swing; rapid, ongoing, or out-of-season loss — or loss with lethargy, mouth-pawing, or hind weakness — belongs with an exotic-mammal veterinarian, not a bigger bowl. This is a planning reference, not a diagnosis.',
    }
  }
  if (bcs <= 5) {
    return {
      tone: 'good',
      label: 'Ideal',
      blurb:
        'Ideal planning range. Ribs and spine are easily felt under a light covering, the waist is defined from above, and there is no pendulous belly. Keep the current food, treat discipline, and out-of-cage play, and re-check every month or two — weekly weights on a gram scale help separate a seasonal curve from a sudden drop.',
    }
  }
  if (bcs <= 7) {
    return {
      tone: 'warn',
      label: 'Overweight',
      blurb:
        'Above ideal — distinct from a normal autumn fat layer that comes back off in spring. True year-round softness usually traces to sugary or fatty treats, too little play, or a diet mismatched to a sedentary ferret. The lever is treat discipline and activity, not starvation: ferrets are prone to hypoglycemia, so do not crash-diet. Ask your exotic-mammal vet for a target and a safe plan.',
    }
  }
  return {
    tone: 'danger',
    label: 'Obese',
    blurb:
      'Well above ideal: ribs hard to feel, waist gone, pendulous belly. This is a reason for a veterinarian-directed plan, not a crash diet — dramatic restriction is risky in a species prone to hypoglycemia and insulinoma. Book an exotic-mammal exam, then measure meals and play from that plan. This tool does not diagnose a disease or set a calorie target.',
  }
}

const SHOP_SOURCE = 'tools-ferret-body-condition-score'

function resultShop(tone: Band['tone']): {
  heading: string
  blurb: string
  href: string
  label: string
} {
  switch (tone) {
    case 'low':
      return {
        heading: 'Weigh in grams while you book the vet',
        blurb:
          'An underweight score is a reason to call an exotic-mammal veterinarian before changing the diet — unexplained thinness can mean dental pain or systemic disease, not just a light bowl. A digital pet scale lets you record grams so the clinic can see the trend. This tool does not set a target weight or diagnose a cause.',
        href: `/go/amazon-brand/digital+pet+scale?s=${SHOP_SOURCE}`,
        label: 'Browse digital pet scales on Amazon →',
      }
    case 'good':
      return {
        heading: 'Keep play and rest in the weekly routine',
        blurb:
          'Ideal condition is a feeding-and-play routine that is already working. A ferret hammock is husbandry, not a weight plan — it keeps the cage restful so out-of-cage time stays the activity lever. Re-check BCS every month or two, and let your veterinarian set any target if the score drifts.',
        href: `/go/amazon-brand/ferret+hammock?s=${SHOP_SOURCE}`,
        label: 'Browse ferret hammocks on Amazon →',
      }
    case 'warn':
      return {
        heading: 'Keep the base diet; cut the extras',
        blurb:
          'An overweight score is a starting observation, not a diet plan. Ferret food (high-protein, meat-first) stays the base; the usual fix is fewer sugary or fatty treats and more play, not a crash cut. Ask your exotic-mammal veterinarian for a target before changing portions. This tool does not set calories.',
        href: `/go/amazon-brand/ferret+food?s=${SHOP_SOURCE}`,
        label: 'Browse ferret food on Amazon →',
      }
    case 'danger':
      return {
        heading: 'Carrier first — then a vet-directed plan',
        blurb:
          'An obese score needs an exotic-mammal veterinarian, not a crash diet. A ferret carrier is how you get to that exam; a scale and a measured bowl come after the clinic sets the plan. This tool does not diagnose obesity-related disease or set a target weight.',
        href: `/go/amazon-brand/ferret+carrier?s=${SHOP_SOURCE}`,
        label: 'Browse ferret carriers on Amazon →',
      }
  }
}

export default function FerretBCSCalculator() {
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
          <AffiliateDisclosure variant="inline" siteId="ferret-com" className="my-3" />
          <ShopCtas amazonHref={result.shop.href} amazonLabel={result.shop.label} />
        </div>
      ) : (
        <p className="mt-2 text-sm text-brand-text-light">
          Answer all three to see your ferret&apos;s estimated body condition score.
        </p>
      )}

      <p className="mt-4 text-2xs leading-snug text-brand-text-light">
        Planning reference only — not a diagnosis. Body condition scoring is a hands-on
        skill. Your exotic-mammal veterinarian&apos;s assessment is the reference, and any
        unexplained weight change should be checked rather than treated as a seasonal
        weight swing.
      </p>
    </div>
  )
}
