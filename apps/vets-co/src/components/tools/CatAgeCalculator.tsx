'use client'

/**
 * Cat Age & Life-Stage Calculator -- vets-co /tools/cat-age-calculator
 *
 * Life stage follows the 2021 AAHA/AAFP feline life stage definitions:
 * kitten birth to 1 year, young adult 1–6, mature adult 7–10, senior over 10.
 * End-of-life is a stage at any age, not an age band.
 * https://www.aaha.org/resources/2021-aaha-aafp-feline-life-stage-guidelines/feline-life-stage-definitions/
 * The human-year multipliers (year 1 = 15, year 2 = 24, then +4) and the
 * age-15 “geriatric” label are a planning figure, not an AAFP stage.
 */

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ResultMeaning, ToolError, numberFieldError } from '@carloOS/ui'

// Planning figure: year 1 = 15, year 2 reaches 24, then +4. Not an AAFP chart.
function humanYears(cat: number): number {
  if (cat <= 0) return 0
  if (cat < 1) return Math.round(cat * 15)
  if (cat <= 2) return Math.round(15 + (cat - 1) * 9)
  return Math.round(24 + (cat - 2) * 4)
}

interface Stage {
  label: string
  tone: 'good' | 'warn'
  care: string
}
function lifeStage(cat: number): Stage {
  if (cat < 1) {
    return {
      label: 'Kitten',
      tone: 'good',
      care:
        'Rapid growth. Priorities are the vaccination and deworming series, spay/neuter, a complete kitten diet, and early, gentle socialisation and handling (including the carrier and nail trims).',
    }
  }
  if (cat < 7) {
    return {
      label: 'Young adult',
      tone: 'good',
      care:
        'Prime of life. An annual wellness exam, dental care, parasite prevention, and keeping the cat at an ideal body condition now prevent the most common middle-age problems later.',
    }
  }
  if (cat <= 10) {
    return {
      label: 'Mature adult',
      tone: 'warn',
      care:
        'The human equivalent of midlife. This is when weight gain, dental disease, and early kidney or thyroid changes tend to begin — a baseline set of bloodwork and a closer eye on weight and water intake pay off.',
    }
  }
  return {
    label: cat >= 15 ? 'Senior (geriatric planning label)' : 'Senior',
    tone: 'warn',
    care:
      'Senior cats benefit from twice-yearly vet visits and routine senior bloodwork and blood-pressure checks, because kidney disease, hyperthyroidism, diabetes, and arthritis are common and very treatable when caught early. Watch closely for weight loss, increased thirst or urination, and changes in appetite or activity.',
  }
}

export default function CatAgeCalculator() {
  const [age, setAge] = useState('3')
  const ageError = numberFieldError(age, 'cat age', 0, 30, 'years')

  const result = useMemo(() => {
    if (ageError) return null
    const cat = parseFloat(age)
    if (!isFinite(cat)) return null
    return { human: humanYears(cat), stage: lifeStage(cat) }
  }, [age, ageError])

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <label className="block mb-5">
        <span className="block text-xs font-bold uppercase tracking-eyebrow text-brand-text-light mb-1.5">
          Your cat&apos;s age (years)
        </span>
        <input
          type="number"
          inputMode="decimal"
          min={0}
          max={30}
          step={0.5}
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full max-w-[220px] rounded border border-brand-border bg-brand-white px-3 py-2.5 text-base text-brand-text-dark outline-none focus:border-brand-primary"
        />
        <span className="mt-1 block text-2xs text-brand-text-light">
          Use a decimal for kittens (e.g. 0.5 for six months).
        </span>
      </label>

      {ageError && <ToolError>{ageError}</ToolError>}

      {result && (
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
          <ResultMeaning>
            Human-equivalent age is a planning chart for this life stage. It is an approximation, not a diagnosis.
          </ResultMeaning>
          <p className="mt-3 text-sm">
            <Link href="/tools/cat-body-condition-score" className="font-semibold text-brand-primary underline">
              Score body condition next
            </Link>
          </p>
        </div>
      )}

      <p className="mt-4 text-2xs leading-snug text-brand-text-light">
        How we calculate: life stage uses the 2021 AAHA/AAFP definitions (kitten to 1 year, young adult
        1–6, mature adult 7–10, senior over 10). End-of-life is any age, not a band. The 15 / 24 / +4
        human-year chart and the age-15 geriatric label are a planning figure, not an AAFP stage.
      </p>
    </div>
  )
}
