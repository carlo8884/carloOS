'use client'

/**
 * Dog Exercise Needs Estimator -- /tools/dog-exercise-calculator
 *
 * Estimates a daily exercise target from life stage and (for adults/seniors)
 * energy level, or — for puppies — the widely-cited "5 minutes per month of age,
 * once or twice a day" guideline that protects developing joints. Outputs are
 * ranges framed as guidelines, not prescriptions; health conditions and hot
 * weather change the answer, and the tool defers to a vet. No fabricated
 * precision.
 */

import { useMemo, useState } from 'react'
import { AffiliateDisclosure, ShopCtas } from '@carloOS/ui'

type Stage = 'puppy' | 'adult' | 'senior'
type Energy = 'low' | 'moderate' | 'high' | 'veryhigh'

const ENERGY_OPTIONS: { value: Energy; label: string; example: string; min: number; max: number }[] = [
  { value: 'low', label: 'Low energy', example: 'e.g. Bulldog, Basset Hound, many toy breeds', min: 20, max: 40 },
  { value: 'moderate', label: 'Moderate', example: 'e.g. most companion and mixed breeds', min: 45, max: 60 },
  { value: 'high', label: 'High energy', example: 'e.g. Labrador, German Shepherd, sporting breeds', min: 60, max: 90 },
  { value: 'veryhigh', label: 'Very high / working', example: 'e.g. Border Collie, Husky, Malinois', min: 90, max: 120 },
]

const SHOP_SOURCE = 'tools-dog-exercise'

function resultShop(stage: Stage, energy: Energy): {
  heading: string
  blurb: string
  href: string
  label: string
} {
  if (stage === 'puppy') {
    return {
      heading: 'Puppy-stage kit: Kong / stuffable toys',
      blurb:
        'A puppy exercise estimate is a joint-safe cap, not a fetch plan. Short structured walks plus free play beat long runs. A stuffable toy is indoor mental work while growth plates are still open. Ask your veterinarian before adding impact play — this tool does not prescribe a workout.',
      href: `/go/amazon-brand/kong+classic+dog+toy+stuffable?s=${SHOP_SOURCE}`,
      label: 'Browse Kong fetch / stuffable toys on Amazon →',
    }
  }
  if (stage === 'senior') {
    return {
      heading: 'Senior-stage kit: a well-fitted harness',
      blurb:
        'A senior estimate is a low-impact range, not a diagnosis of arthritis or other age-related disease. A well-fitted harness is easier on the neck for shorter, more frequent walks. Ask your veterinarian how much walking this dog should do — this tool does not prescribe a product or a plan.',
      href: `/go/amazon-brand/julius+k9+idc+powerharness?s=${SHOP_SOURCE}`,
      label: 'Browse Julius-K9 harnesses on Amazon →',
    }
  }
  if (energy === 'high' || energy === 'veryhigh') {
    return {
      heading: 'High-energy kit: fetch toys',
      blurb:
        'A high-energy estimate is a daily minutes range, not a sport prescription. Fetch toys and a well-fitted harness help burn that budget without inventing a training plan. Build fitness gradually and cut back in heat. Ask your veterinarian before ramping up work for an unfit dog.',
      href: `/go/amazon-brand/dog+fetch+toys?s=${SHOP_SOURCE}`,
      label: 'Browse dog fetch toys on Amazon →',
    }
  }
  return {
    heading: 'Adult-stage kit: a daily-walk leash',
    blurb:
      'A moderate or low-energy estimate is a daily minutes range, not a diagnosis. A sturdy leash is the starting husbandry item for that walk. Pair it with a fitted harness from the shop list below if your dog pulls. This tool does not recommend a brand.',
    href: `/go/amazon-brand/dog+leash?s=${SHOP_SOURCE}`,
    label: 'Browse dog leashes on Amazon →',
  }
}

export default function DogExerciseCalculator() {
  const [stage, setStage] = useState<Stage>('adult')
  const [months, setMonths] = useState('4')
  const [energy, setEnergy] = useState<Energy>('moderate')

  const result = useMemo(() => {
    if (stage === 'puppy') {
      const m = Math.max(2, Math.min(18, parseFloat(months) || 0))
      const perSession = Math.round(m * 5)
      return {
        headline: `${perSession} min per session, once or twice a day`,
        body: `The widely used guideline is about five minutes of structured exercise (a lead walk) per month of age, once or twice daily — so roughly ${perSession} minutes a session at ${m} months. Keep it gentle and let free play and sniffing make up the rest. Forced, repetitive, or high-impact exercise (long runs, stairs, jumping) before the growth plates close can damage developing joints.`,
        tone: 'good' as const,
      }
    }
    const e = ENERGY_OPTIONS.find((o) => o.value === energy)!
    if (stage === 'senior') {
      const min = Math.round(e.min * 0.6)
      const max = Math.round(e.max * 0.6)
      return {
        headline: `${min}–${max} min a day, low-impact, in shorter sessions`,
        body: `Senior dogs still need regular movement to keep joints and muscle healthy, but at lower intensity and split into shorter, more frequent outings. Favour flat, soft surfaces and swimming over jumping and long runs, and let your dog set the pace. If your dog is stiff, slowing down, or has a diagnosed condition, your vet should shape the plan.`,
        tone: 'warn' as const,
      }
    }
    return {
      headline: `${e.min}–${e.max} min a day`,
      body: `For an adult ${e.label.toLowerCase()} dog, aim for ${e.min}–${e.max} minutes of real activity daily — and mental work counts too. Mix walks with sniff-walks, fetch, training games, and off-lead running where safe. Under-exercised dogs are a common source of "behaviour problems" that are really unmet needs. Build up gradually if your dog is currently unfit, and cut back in heat.`,
      tone: 'good' as const,
    }
  }, [stage, months, energy])

  const shop = resultShop(stage, energy)

  const Toggle = ({ value, current, onClick, children }: { value: string; current: string; onClick: () => void; children: React.ReactNode }) => (
    <button
      type="button"
      onClick={onClick}
      className={[
        'px-4 py-2 rounded-lg border text-sm font-semibold transition-colors',
        value === current ? 'border-brand-primary bg-brand-primary text-white' : 'border-brand-border bg-brand-white text-brand-text-dark hover:border-brand-primary',
      ].join(' ')}
    >
      {children}
    </button>
  )

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <div className="mb-5">
        <span className="mb-2 block text-xs font-bold uppercase tracking-eyebrow text-brand-text-light">Life stage</span>
        <div className="flex flex-wrap gap-2">
          <Toggle value="puppy" current={stage} onClick={() => setStage('puppy')}>Puppy</Toggle>
          <Toggle value="adult" current={stage} onClick={() => setStage('adult')}>Adult</Toggle>
          <Toggle value="senior" current={stage} onClick={() => setStage('senior')}>Senior</Toggle>
        </div>
      </div>

      {stage === 'puppy' ? (
        <label className="block mb-6">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-eyebrow text-brand-text-light">Puppy age (months)</span>
          <input
            type="number"
            inputMode="numeric"
            min={2}
            max={18}
            step={1}
            value={months}
            onChange={(e) => setMonths(e.target.value)}
            className="w-full max-w-[180px] rounded border border-brand-border bg-brand-white px-3 py-2.5 text-base text-brand-text-dark outline-none focus:border-brand-primary"
          />
        </label>
      ) : (
        <div className="mb-6">
          <span className="mb-2 block text-xs font-bold uppercase tracking-eyebrow text-brand-text-light">Energy level</span>
          <div className="grid sm:grid-cols-2 gap-2">
            {ENERGY_OPTIONS.map((o) => {
              const checked = energy === o.value
              return (
                <button
                  key={o.value}
                  type="button"
                  onClick={() => setEnergy(o.value)}
                  className={[
                    'text-left rounded-lg border p-3 transition-colors',
                    checked ? 'border-brand-primary bg-brand-white' : 'border-brand-border bg-brand-white hover:border-brand-primary',
                  ].join(' ')}
                >
                  <div className="text-sm font-semibold text-brand-text-dark">{o.label}</div>
                  <div className="text-2xs text-brand-text-light">{o.example}</div>
                </button>
              )
            })}
          </div>
        </div>
      )}

      <div className="rounded-lg border border-brand-border bg-brand-white p-5 sm:p-6">
        <p className="text-2xs uppercase tracking-eyebrow text-brand-text-light">Suggested daily exercise</p>
        <p className="mt-1 font-display text-2xl font-bold" style={{ color: result.tone === 'warn' ? '#b45309' : '#15803d' }}>
          {result.headline}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-brand-text-mid">{result.body}</p>
      </div>

      <div className="mt-6 rounded-lg border border-brand-border bg-brand-white p-5">
        <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
          Next step
        </p>
        <p className="font-display text-base font-semibold leading-snug text-brand-text-dark">
          {shop.heading}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-brand-text-mid">{shop.blurb}</p>
        <AffiliateDisclosure variant="inline" siteId="dog-com" className="my-3" />
        <ShopCtas amazonHref={shop.href} amazonLabel={shop.label} />
      </div>

      <p className="mt-4 text-2xs leading-snug text-brand-text-light">
        A guideline, not a prescription. Individual fitness, breed, weather (cut back in heat), and any heart, joint,
        or breathing condition change the right amount — check with your vet before increasing a dog&apos;s exercise,
        especially flat-faced breeds and dogs with a diagnosed condition.
      </p>
    </div>
  )
}
