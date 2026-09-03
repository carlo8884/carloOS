'use client'

/**
 * Horse Age & Life-Stage Calculator -- horses-com /tools/horse-age-calculator
 *
 * Converts a horse's age to a human-equivalent estimate and a qualitative
 * life-stage label grounded in existing Horses.com senior-care / lifespan copy:
 *   foal < 1, young 1–5, adult 5–15, senior 15+
 * (senior-horse-care notes there is no fixed birthday — some horses age at
 * fifteen, many are treated as geriatric from the late teens into the
 * twenties, and well-kept horses may work soundly at twenty-five. This tool
 * uses 15+ as the start of senior *planning*, not a diagnosis.)
 *
 * Human-year bands (planning approximation — NOT multiply-by-seven):
 *   age < 1  : human = age * 12          (foals wean and grow very fast in
 *                                         year one; first year ≈ 12, not 7)
 *   age <= 5 : human = 12 + (age-1) * 5  (age 5 = 32; skeletal maturity
 *                                         around 4–5, a young adult)
 *   age >  5 : human = 32 + (age-5) * 2.5
 *                                         (15 ≈ 57, 20 ≈ 70, 25 ≈ 82, 30 ≈ 95;
 *                                         maps Horses.com's "late twenties
 *                                         and thirties" life onto a
 *                                         conversational human span)
 *
 * Informational planning aid, not a diagnosis. Defers to an equine
 * veterinarian (QC §1). No fabricated precision, no published "horse clock."
 */

import { useMemo, useState } from 'react'

function humanYears(horse: number): number {
  if (horse <= 0) return 0
  if (horse < 1) return Math.round(horse * 12)
  if (horse <= 5) return Math.round(12 + (horse - 1) * 5)
  return Math.round(32 + (horse - 5) * 2.5)
}

interface Stage {
  label: string
  tone: 'good' | 'warn'
  care: string
}

function lifeStage(horse: number): Stage {
  if (horse < 1) {
    return {
      label: 'Foal',
      tone: 'good',
      care:
        'Rapid growth, weaning, and first-year vaccines. Priorities are a veterinarian-directed foal/weanling diet, parasite control that accounts for ascarids, and handling that sets later manners. This is a planning label, not a growth diagnosis.',
    }
  }
  if (horse < 5) {
    return {
      label: 'Young',
      tone: 'good',
      care:
        'Still growing toward skeletal maturity around four to five. Work and feeding should match the individual — not a finished adult template. Regular dental checks, a forage-first ration, and an equine veterinarian for the young-horse wellness cadence are the useful habits at this stage.',
    }
  }
  if (horse < 15) {
    return {
      label: 'Adult',
      tone: 'good',
      care:
        'The working and keeping years. Horses.com senior-feeding copy notes that the diet that kept a horse well at ten may leave it thin at twenty-five — so this is the window to lock in weight-tape and body-condition habits, a forage-first ration, and routine dental/farrier/vet care before age-related change arrives.',
    }
  }
  return {
    label: 'Senior',
    tone: 'warn',
    care:
      'Horses.com treats senior care as a change in teeth, weight, joints, and health — not a birthday. Many horses are considered geriatric from the late teens into the twenties; some show age at fifteen, and well-kept horses may work soundly at twenty-five. Closer dental and condition checks, and a conversation about senior feed if chewing or weight slip, are the planning response — not a diagnosis.',
  }
}

export default function HorseAgeCalculator() {
  const [age, setAge] = useState('8')

  const result = useMemo(() => {
    const horse = parseFloat(age)
    if (!isFinite(horse) || horse <= 0) return null
    return { human: humanYears(horse), stage: lifeStage(horse) }
  }, [age])

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <label className="block mb-5" htmlFor="ha-age">
        <span className="block text-xs font-bold uppercase tracking-eyebrow text-brand-text-light mb-1.5">
          Your horse&apos;s age (years)
        </span>
        <input
          id="ha-age"
          type="number"
          inputMode="decimal"
          min={0}
          max={45}
          step={0.5}
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full max-w-[220px] rounded border border-brand-border bg-brand-white px-3 py-2.5 text-base text-brand-text-dark outline-none focus:border-brand-primary"
        />
        <span className="mt-1 block text-2xs text-brand-text-light">
          Use a decimal for foals (e.g. 0.5 for six months). Max 45.
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
          Enter your horse&apos;s age to see a human-equivalent estimate and life stage.
        </p>
      )}

      <p className="mt-4 text-2xs leading-snug text-brand-text-light">
        Planning / life-stage reference only — not a diagnosis. Human-equivalent ages are a
        conversational approximation (first year ≈ 12, age 5 ≈ 32, then ≈ 2.5 per year) so a
        25-year-old maps near a typical human span. They are not a biological clock and they
        do not use the multiply-by-seven shortcut. Your equine veterinarian tailors screening
        to the individual horse.
      </p>
    </div>
  )
}
