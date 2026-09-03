'use client'

/**
 * Ferret Age & Life-Stage Calculator -- ferret-com /tools/ferret-age-calculator
 *
 * Converts a ferret's age to a human-equivalent estimate and a qualitative
 * life-stage label grounded in existing Ferret.com lifespan / aging-care copy:
 *   kit < 1, young adult 1–3, mature 3–5, senior 5+
 * (aging-care notes that many exotic-mammal vets begin senior protocols
 * around 4–5; this tool uses the lifespan-page 5+ senior band and treats
 * 4–5 as the start of senior planning, not a diagnosis.)
 *
 * Human-year bands (planning approximation — NOT multiply-by-seven):
 *   age < 1  : human = age * 15          (kits mature to young-adult size/sexual
 *                                         maturity in months, same first-year
 *                                         convention as the cat chart)
 *   age <= 2 : human = 15 + (age-1) * 10 (age 2 = 25)
 *   age >  2 : human = 25 + (age-2) * 8  (an 8-year-old ≈ 73; maps the typical
 *                                         6–10 year / commonly 5–8 year life
 *                                         onto a conversational human span)
 *
 * Informational planning aid, not a diagnosis. Defers to an exotic-mammal
 * veterinarian (QC §1). No fabricated precision, no published "ferret clock."
 */

import { useMemo, useState } from 'react'

function humanYears(ferret: number): number {
  if (ferret <= 0) return 0
  if (ferret < 1) return Math.round(ferret * 15)
  if (ferret <= 2) return Math.round(15 + (ferret - 1) * 10)
  return Math.round(25 + (ferret - 2) * 8)
}

interface Stage {
  label: string
  tone: 'good' | 'warn'
  care: string
}

function lifeStage(ferret: number): Stage {
  if (ferret < 1) {
    return {
      label: 'Kit',
      tone: 'good',
      care:
        'Rapid growth, teething, and socialization. The first six months also set food preferences — variety now is the best defense against later fixation. Priorities are a complete high-protein ferret diet, gentle handling, and an exotic-mammal vet for the first-year vaccine and wellness visits.',
    }
  }
  if (ferret < 3) {
    return {
      label: 'Young adult',
      tone: 'good',
      care:
        'Peak energy and health. The ferret is fully grown and generally robust. Daily out-of-cage play, a species-appropriate diet, ferret-proofing against swallowable objects, and an annual exotic-mammal exam are the useful habits at this stage.',
    }
  }
  if (ferret < 5) {
    return {
      label: 'Mature',
      tone: 'warn',
      care:
        'The window where insulinoma and adrenal disease especially start to appear. Regular exotic-mammal checks earn their keep here — many vets begin senior-style screening around 4–5. Watch weight, appetite, thirst, and activity, and keep a dedicated emergency fund (or an exotic-pet insurance conversation) on the table.',
    }
  }
  return {
    label: 'Senior',
    tone: 'warn',
    care:
      'Ferret.com treats 5+ as senior (typical captive life is commonly 5–8 years, some 9–10). Closer monitoring, easier-to-chew food if teeth have worn, and more frequent vet visits are the planning response — not a diagnosis. Unexplained weight loss, increased thirst, or a drop in activity is worth an exotic-mammal visit.',
  }
}

export default function FerretAgeCalculator() {
  const [age, setAge] = useState('3')

  const result = useMemo(() => {
    const ferret = parseFloat(age)
    if (!isFinite(ferret) || ferret <= 0) return null
    return { human: humanYears(ferret), stage: lifeStage(ferret) }
  }, [age])

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <label className="block mb-5" htmlFor="fa-age">
        <span className="block text-xs font-bold uppercase tracking-eyebrow text-brand-text-light mb-1.5">
          Your ferret&apos;s age (years)
        </span>
        <input
          id="fa-age"
          type="number"
          inputMode="decimal"
          min={0}
          max={14}
          step={0.5}
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full max-w-[220px] rounded border border-brand-border bg-brand-white px-3 py-2.5 text-base text-brand-text-dark outline-none focus:border-brand-primary"
        />
        <span className="mt-1 block text-2xs text-brand-text-light">
          Use a decimal for kits (e.g. 0.5 for six months). Max 14.
        </span>
      </label>

      {result ? (
        <div className="rounded-lg border border-brand-border bg-brand-white p-5 sm:p-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <p className="text-2xs uppercase tracking-eyebrow text-brand-text-light">Human-equivalent age</p>
              <p className="mt-1 font-display text-3xl font-black text-brand-dark">≈ {result.human} years</p>
            </div>
            <div>
              <p className="text-2xs uppercase tracking-eyebrow text-brand-text-light">Life stage</p>
              <p
                className="mt-1 font-display text-2xl font-bold"
                style={{ color: result.stage.tone === 'warn' ? '#b45309' : '#15803d' }}
              >
                {result.stage.label}
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-brand-text-mid">{result.stage.care}</p>
        </div>
      ) : (
        <p className="text-sm text-brand-text-light">
          Enter your ferret&apos;s age to see a human-equivalent estimate and life stage.
        </p>
      )}

      <p className="mt-4 text-2xs leading-snug text-brand-text-light">
        Planning / life-stage reference only — not a diagnosis. Human-equivalent ages are a
        conversational approximation (first year ≈ 15, second ≈ 25, then ≈ 8 per year) so an
        8-year-old maps near a typical human span. They are not a biological clock and they
        do not use the multiply-by-seven shortcut. Your exotic-mammal veterinarian tailors
        screening to the individual ferret.
      </p>
    </div>
  )
}
