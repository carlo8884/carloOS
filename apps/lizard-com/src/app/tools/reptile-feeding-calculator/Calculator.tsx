'use client'

import { useState, useMemo } from 'react'

type Stage = 'hatchling' | 'juvenile' | 'adult'

interface FeedPlan {
  /** Prey type / portion description */
  prey: string
  /** Count or portion, expressed as a range string */
  amount: string
  /** Feeding frequency */
  frequency: string
  /** Plant matter / greens guidance */
  greens: string
  /** One-line note specific to this species + stage */
  note: string
}

interface SpeciesFeed {
  label: string
  /** Diet archetype shown in the summary line */
  diet: string
  /** Feeder-size rule reminder, species-tuned */
  feederSize: string
  slug: string | null
  plans: Record<Stage, FeedPlan>
}

// Curated from published reptile husbandry guidance (see page Sources).
// Ranges, not false precision. Husbandry only — no clinical claims.
const SPECIES: Record<string, SpeciesFeed> = {
  'bearded-dragon': {
    label: 'Bearded dragon',
    diet: 'Omnivore — insect-heavy as a juvenile, greens-heavy as an adult',
    feederSize: 'No feeder larger than the space between the eyes (head-width rule).',
    slug: 'bearded-dragon',
    plans: {
      hatchling: {
        prey: 'Appropriately sized crickets / dubia / black soldier fly larvae',
        amount: '20–40 insects per day',
        frequency: '3–5 feedings per day, ~10–15 minutes each',
        greens: 'Finely chopped greens offered daily and left available',
        note: 'Hatchlings are insect-driven and grow fast — offer as much as they eat in each short session, then remove leftovers.',
      },
      juvenile: {
        prey: 'Crickets / dubia roaches / BSFL',
        amount: '20–40 insects per day',
        frequency: '1–2 feedings per day',
        greens: 'Salad available daily; aim for roughly 50/50 by this stage',
        note: 'Insect appetite stays high through ~12 months; taper toward the adult ratio as growth slows.',
      },
      adult: {
        prey: 'Crickets / dubia roaches / occasional worms',
        amount: '10–20 insects per feeding',
        frequency: 'Insects every other day (2–3x/week)',
        greens: 'Greens daily — roughly 70–80% of the adult diet',
        note: 'Adults shift to a greens-dominant diet; over-feeding insects is a leading cause of obesity.',
      },
    },
  },
  'leopard-gecko': {
    label: 'Leopard gecko',
    diet: 'Insectivore — strictly live feeder insects, no plant matter',
    feederSize: 'No feeder longer than the width of the gecko’s head.',
    slug: 'leopard-gecko',
    plans: {
      hatchling: {
        prey: 'Small crickets / small dubia / BSFL',
        amount: '4–6 small insects per feeding',
        frequency: 'Daily',
        greens: 'None — leopard geckos are obligate insectivores',
        note: 'Offer a few appropriately small feeders daily; dust with calcium most feedings.',
      },
      juvenile: {
        prey: 'Crickets / dubia roaches / BSFL',
        amount: '5–8 insects per feeding',
        frequency: 'Daily to every other day',
        greens: 'None',
        note: 'A loose rule of thumb: roughly two appropriately sized insects per inch of length.',
      },
      adult: {
        prey: 'Crickets / dubia / mealworms; occasional waxworms as treats',
        amount: '6–10 insects per feeding',
        frequency: '2–3x per week (every 2–3 days)',
        greens: 'None',
        note: 'Adults do not need daily feeding; monitor tail thickness as a body-condition cue.',
      },
    },
  },
  'crested-gecko': {
    label: 'Crested gecko',
    diet: 'Omnivore/frugivore — commercial crested-gecko diet (CGD) is the staple',
    feederSize: 'Feeder insects no wider than the space between the eyes.',
    slug: 'crested-gecko',
    plans: {
      hatchling: {
        prey: 'Prepared crested-gecko diet (CGD) as the staple',
        amount: 'Fresh CGD in a shallow dish; replace every 24–48 h',
        frequency: 'CGD available 3–4 nights per week',
        greens: 'CGD covers plant/fruit needs; no separate greens required',
        note: 'CGD alone is nutritionally complete; insects are optional enrichment at this stage.',
      },
      juvenile: {
        prey: 'CGD staple + occasional small insects',
        amount: 'CGD dish + 2–4 dusted insects on insect nights',
        frequency: 'CGD 3–4 nights/week; insects 1x/week optional',
        greens: 'Provided by CGD',
        note: 'Feed in the evening — crested geckos are nocturnal.',
      },
      adult: {
        prey: 'CGD staple + occasional dusted insects',
        amount: 'CGD dish + 3–6 insects on insect nights',
        frequency: 'CGD 2–3 nights/week; insects every 1–2 weeks',
        greens: 'Provided by CGD',
        note: 'Over-feeding insects can unbalance the diet; keep CGD as the foundation.',
      },
    },
  },
  'blue-tongued-skink': {
    label: 'Blue-tongued skink',
    diet: 'Omnivore — broad mix of protein, vegetables, and some fruit',
    feederSize: 'Chop protein and veg to bite-sized pieces; whole prey only if clearly manageable.',
    slug: 'blue-tongued-skink',
    plans: {
      hatchling: {
        prey: 'High-protein mix: insects, lean cooked/raw meat, snails',
        amount: 'A portion roughly the size of the skink’s head per feeding',
        frequency: 'Daily to every other day',
        greens: 'Vegetables mixed in; aim ~50% animal / 50% plant',
        note: 'Young skinks lean more protein-heavy than adults while growing.',
      },
      juvenile: {
        prey: 'Insects, lean meats, snails + chopped vegetables',
        amount: 'Head-sized portion per feeding',
        frequency: '2–3x per week',
        greens: 'Vegetables roughly half the bowl',
        note: 'Variety matters — rotate protein and veg sources.',
      },
      adult: {
        prey: 'Mixed omnivore bowl: protein + vegetables + a little fruit',
        amount: 'Head-sized portion per feeding',
        frequency: '1–2x per week',
        greens: 'Vegetables ~50% of the diet; protein ~40–50%; fruit <10%',
        note: 'Adults are prone to obesity — keep portions controlled and fatty feeders occasional.',
      },
    },
  },
  'gargoyle-gecko': {
    label: 'Gargoyle gecko',
    diet: 'Omnivore/frugivore — commercial gecko diet (CGD) staple, like crested',
    feederSize: 'Feeder insects no wider than the space between the eyes.',
    slug: 'gargoyle-gecko',
    plans: {
      hatchling: {
        prey: 'Prepared gecko diet (CGD) as the staple',
        amount: 'Fresh CGD in a shallow dish; replace every 24–48 h',
        frequency: 'CGD available 3–4 nights per week',
        greens: 'Provided by CGD',
        note: 'Gargoyles accept the same CGD staple as crested geckos.',
      },
      juvenile: {
        prey: 'CGD staple + occasional small insects',
        amount: 'CGD dish + 2–4 dusted insects on insect nights',
        frequency: 'CGD 3–4 nights/week; insects 1x/week optional',
        greens: 'Provided by CGD',
        note: 'Feed in the evening — gargoyles are nocturnal.',
      },
      adult: {
        prey: 'CGD staple + occasional dusted insects',
        amount: 'CGD dish + 3–6 insects on insect nights',
        frequency: 'CGD 2–3 nights/week; insects every 1–2 weeks',
        greens: 'Provided by CGD',
        note: 'Gargoyles tolerate slightly more insect protein than crested geckos.',
      },
    },
  },
  'veiled-chameleon': {
    label: 'Veiled chameleon',
    diet: 'Insectivore (with some plant nibbling) — gut-loaded, dusted insects',
    feederSize: 'No feeder wider than the space between the eyes.',
    slug: 'veiled-chameleon',
    plans: {
      hatchling: {
        prey: 'Small crickets / fruit flies / BSFL',
        amount: '12–20 small insects per day',
        frequency: 'Daily (often split across the day)',
        greens: 'Some leafy plants nibbled; insects are the core',
        note: 'Young chameleons eat frequently and grow quickly — keep feeders small and dusted.',
      },
      juvenile: {
        prey: 'Crickets / dubia / BSFL / silkworms',
        amount: '8–12 insects per day',
        frequency: 'Daily',
        greens: 'Occasional plant matter; mostly insectivorous',
        note: 'Dust with calcium most feedings; rotate feeder types for variety.',
      },
      adult: {
        prey: 'Crickets / dubia / hornworms / silkworms',
        amount: '5–8 insects per feeding',
        frequency: 'Every other day (3–4x/week)',
        greens: 'May nibble greens; insects remain the staple',
        note: 'Adult females need careful calcium support; consult a reptile vet on egg-laying husbandry.',
      },
    },
  },
  'corn-snake': {
    label: 'Corn snake',
    diet: 'Carnivore — appropriately sized frozen/thawed rodents',
    feederSize: 'Prey no wider than ~1–1.5x the widest part of the snake’s body.',
    slug: 'corn-snake',
    plans: {
      hatchling: {
        prey: 'Pinky mouse (frozen/thawed)',
        amount: '1 appropriately sized pinky per feeding',
        frequency: 'Every 5–7 days',
        greens: 'None — snakes are strict carnivores',
        note: 'Size the prey to the snake, not the snake’s age; a small lump after feeding is normal.',
      },
      juvenile: {
        prey: 'Fuzzy to hopper mouse (frozen/thawed)',
        amount: '1 prey item per feeding',
        frequency: 'Every 7 days',
        greens: 'None',
        note: 'Step prey size up as the snake grows; avoid power-feeding.',
      },
      adult: {
        prey: 'Adult mouse (frozen/thawed)',
        amount: '1 (occasionally 2 small) prey item per feeding',
        frequency: 'Every 7–14 days',
        greens: 'None',
        note: 'Adults eat less often; obesity from over-feeding is common in captivity.',
      },
    },
  },
  'ball-python': {
    label: 'Ball python',
    diet: 'Carnivore — appropriately sized frozen/thawed rodents',
    feederSize: 'Prey roughly the width of the snake at its widest point.',
    slug: 'ball-python',
    plans: {
      hatchling: {
        prey: 'Hopper mouse or small rat pup (frozen/thawed)',
        amount: '1 appropriately sized prey item',
        frequency: 'Every 5–7 days',
        greens: 'None',
        note: 'Ball pythons can be picky; consistent low-disturbance feeding helps establish a routine.',
      },
      juvenile: {
        prey: 'Weaned mouse / small-to-medium rat (frozen/thawed)',
        amount: '1 prey item per feeding',
        frequency: 'Every 7–10 days',
        greens: 'None',
        note: 'Prey weight roughly 10–15% of the snake’s body weight is a common guideline.',
      },
      adult: {
        prey: 'Adult / medium rat (frozen/thawed)',
        amount: '1 prey item per feeding',
        frequency: 'Every 10–14 days',
        greens: 'None',
        note: 'Seasonal fasts are common and usually normal in healthy adults; monitor weight, not just appetite.',
      },
    },
  },
}

const STAGE_LABELS: Record<Stage, string> = {
  hatchling: 'Hatchling (0–3 months)',
  juvenile: 'Juvenile (3–12 months)',
  adult: 'Adult (12+ months)',
}

const toneNeutral = 'border-brand-border bg-brand-surface text-brand-text-mid'

export function ReptileFeedingCalculator() {
  const speciesKeys = Object.keys(SPECIES)
  const [speciesKey, setSpeciesKey] = useState<string>('bearded-dragon')
  const [stage, setStage] = useState<Stage>('juvenile')

  const species = SPECIES[speciesKey]
  const plan = useMemo<FeedPlan>(() => species.plans[stage], [species, stage])

  const inputClass = 'w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark text-sm'
  const labelClass = 'mb-1 block text-sm font-medium text-brand-text-mid'

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="feed-species" className={labelClass}>Species</label>
          <select
            id="feed-species"
            value={speciesKey}
            onChange={(e) => setSpeciesKey(e.target.value)}
            className={inputClass}
          >
            {speciesKeys.map((k) => (
              <option key={k} value={k}>{SPECIES[k].label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="feed-stage" className={labelClass}>Life stage</label>
          <select
            id="feed-stage"
            value={stage}
            onChange={(e) => setStage(e.target.value as Stage)}
            className={inputClass}
          >
            {(Object.keys(STAGE_LABELS) as Stage[]).map((s) => (
              <option key={s} value={s}>{STAGE_LABELS[s]}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4 rounded border border-brand-border/50 bg-brand-surface p-3 text-sm text-brand-text-mid">
        <strong className="text-brand-text-dark">{species.label} diet:</strong> {species.diet}
      </div>

      <div className="mt-6 space-y-3">
        <div className="rounded border border-brand-border bg-brand-surface p-4">
          <div className="text-xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            {STAGE_LABELS[stage]} feeding plan
          </div>
          <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded border border-brand-border/50 p-3">
              <dt className="text-xs text-brand-text-mid mb-1">Prey type</dt>
              <dd className="text-sm font-semibold text-brand-text-dark">{plan.prey}</dd>
            </div>
            <div className="rounded border border-brand-border/50 p-3">
              <dt className="text-xs text-brand-text-mid mb-1">Amount / portion</dt>
              <dd className="text-sm font-semibold text-brand-text-dark">{plan.amount}</dd>
            </div>
            <div className="rounded border border-brand-border/50 p-3">
              <dt className="text-xs text-brand-text-mid mb-1">Frequency</dt>
              <dd className="text-sm font-semibold text-brand-text-dark">{plan.frequency}</dd>
            </div>
            <div className="rounded border border-brand-border/50 p-3">
              <dt className="text-xs text-brand-text-mid mb-1">Greens / plant matter</dt>
              <dd className="text-sm font-semibold text-brand-text-dark">{plan.greens}</dd>
            </div>
          </dl>
          <p className="mt-3 text-sm text-brand-text-mid">{plan.note}</p>
        </div>

        <div className={`rounded border p-3 text-sm ${toneNeutral}`}>
          <strong className="text-brand-text-dark">Feeder-size rule:</strong> {species.feederSize} Insects too large
          relative to the head are a known impaction and choking risk.
        </div>
      </div>

      <div className="mt-6 rounded border border-brand-border/40 bg-brand-surface/50 p-4 text-sm text-brand-text-mid">
        <p>
          <strong className="text-brand-text-dark">These are husbandry guidelines, not a clinical diet plan.</strong>{' '}
          Appetite varies with temperature, season, and individual animal. Dust feeders with calcium/vitamin D3 per your
          species&apos; care sheet, and gut-load insects 24–48 h before offering. For an underweight, ill, or
          non-feeding animal, consult a reptile veterinarian.
        </p>
      </div>
    </div>
  )
}
