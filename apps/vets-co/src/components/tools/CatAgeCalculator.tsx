'use client'

/**
 * Cat Age & Life-Stage Calculator -- vets-co /tools/cat-age-calculator
 *
 * Converts a cat's age to human-equivalent years using the standard veterinary
 * chart (year 1 = 15, year 2 = +9, each year after = +4) and reports the AAFP/
 * AAHA feline life stage with the care that stage calls for. Informational, not
 * a diagnosis; defers to a veterinarian (QC §1). No fabricated precision.
 */

import { useMemo, useState } from 'react'

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
    label: cat >= 15 ? 'Senior (geriatric)' : 'Senior',
    tone: 'warn',
    care:
      'Senior cats benefit from twice-yearly vet visits and routine senior bloodwork and blood-pressure checks, because kidney disease, hyperthyroidism, diabetes, and arthritis are common and very treatable when caught early. Watch closely for weight loss, increased thirst or urination, and changes in appetite or activity.',
  }
}

export default function CatAgeCalculator() {
  const [age, setAge] = useState('3')

  const result = useMemo(() => {
    const cat = parseFloat(age)
    if (!isFinite(cat) || cat <= 0) return null
    return { human: humanYears(cat), stage: lifeStage(cat) }
  }, [age])

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
          step={0.5}
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full max-w-[220px] rounded border border-brand-border bg-brand-white px-3 py-2.5 text-base text-brand-text-dark outline-none focus:border-brand-primary"
        />
        <span className="mt-1 block text-2xs text-brand-text-light">
          Use a decimal for kittens (e.g. 0.5 for six months).
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
        <p className="text-sm text-brand-text-light">Enter your cat&apos;s age to see its human-equivalent age and life stage.</p>
      )}

      <p className="mt-4 text-2xs leading-snug text-brand-text-light">
        Human-equivalent ages use the standard veterinary chart (first year ≈ 15, second ≈ 24, then ≈ 4 per
        year) and are an approximation — indoor cats often live well into their late teens. Life-stage care is
        general guidance; your veterinarian tailors screening to your individual cat.
      </p>
    </div>
  )
}
