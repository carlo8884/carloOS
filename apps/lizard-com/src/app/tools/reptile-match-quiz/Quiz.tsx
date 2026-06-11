'use client'

import { useState, useMemo } from 'react'

// ──────────────────────────────────────────────────────────────
// Beginner-reptile matcher
// Scores the site's covered, genuinely beginner-appropriate species
// against the keeper's answers. Conservative by design: advanced
// species are never recommended to self-described beginners.
// ──────────────────────────────────────────────────────────────

type SpeciesId =
  | 'leopard-gecko'
  | 'crested-gecko'
  | 'corn-snake'
  | 'bearded-dragon'
  | 'ball-python'
  | 'blue-tongued-skink'
  | 'western-hognose-snake'
  | 'kenyan-sand-boa'

interface Species {
  id: SpeciesId
  name: string
  slug: string
  group: 'lizard' | 'snake' | 'skink'
  // husbandry attributes used for matching
  beginnerFriendly: boolean // top-tier forgiving starter
  spaceNeed: 'small' | 'medium' | 'large' // adult footprint demand
  handleable: 'high' | 'medium' | 'low' // tolerance of routine handling
  uvbComplexity: 'low' | 'medium' | 'high' // lighting setup burden
  dietType: 'insects' | 'rodents' | 'omnivore' | 'mixed'
  activity: 'diurnal' | 'crepuscular' | 'nocturnal'
  blurb: string
}

const SPECIES: Species[] = [
  {
    id: 'leopard-gecko',
    name: 'Leopard gecko',
    slug: '/species/leopard-gecko',
    group: 'lizard',
    beginnerFriendly: true,
    spaceNeed: 'small',
    handleable: 'medium',
    uvbComplexity: 'low',
    dietType: 'insects',
    activity: 'crepuscular',
    blurb:
      'The most widely recommended first reptile: small, hardy, ground-dwelling, with simple low-UVB-complexity lighting and a modest enclosure footprint. Tolerates gentle, regular handling once settled. Eats live insects.',
  },
  {
    id: 'crested-gecko',
    name: 'Crested gecko',
    slug: '/species/crested-gecko',
    group: 'lizard',
    beginnerFriendly: true,
    spaceNeed: 'small',
    handleable: 'medium',
    uvbComplexity: 'low',
    dietType: 'mixed',
    activity: 'nocturnal',
    blurb:
      'A top beginner gecko for keepers short on space or squeamish about feeding insects daily: a complete powdered diet (mixed with water) covers most nutrition, with insects optional. Arboreal, active at night, and forgiving of simple room-temperature setups in many homes.',
  },
  {
    id: 'corn-snake',
    name: 'Corn snake',
    slug: '/species/corn-snake',
    group: 'snake',
    beginnerFriendly: true,
    spaceNeed: 'medium',
    handleable: 'high',
    uvbComplexity: 'low',
    dietType: 'rodents',
    activity: 'crepuscular',
    blurb:
      'The most widely recommended beginner snake: docile, reliably feeding, hardy, and very handleable. A straightforward heat setup and frozen-thawed rodent diet. The standard pick if you want a snake rather than a lizard.',
  },
  {
    id: 'bearded-dragon',
    name: 'Bearded dragon',
    slug: '/species/bearded-dragon',
    group: 'lizard',
    beginnerFriendly: true,
    spaceNeed: 'large',
    handleable: 'high',
    uvbComplexity: 'high',
    dietType: 'omnivore',
    activity: 'diurnal',
    blurb:
      'The classic "interactive" beginner lizard: diurnal, calm, and genuinely handleable. The trade-off is a larger, more demanding setup — a big enclosure, high-output UVB, and a strong basking gradient — plus a mixed insect-and-greens diet. Best when you have the space and budget to do the lighting properly.',
  },
  {
    id: 'ball-python',
    name: 'Ball python',
    slug: '/species/ball-python',
    group: 'snake',
    beginnerFriendly: true,
    spaceNeed: 'medium',
    handleable: 'high',
    uvbComplexity: 'low',
    dietType: 'rodents',
    activity: 'nocturnal',
    blurb:
      'A calm, handleable beginner snake that stays a manageable size. The main caveat is feeding: ball pythons are famous for going off food for stretches, which can unsettle a first-time keeper. Needs warm, humid, well-regulated housing and a frozen-thawed rodent diet.',
  },
  {
    id: 'blue-tongued-skink',
    name: 'Blue-tongued skink',
    slug: '/species/blue-tongued-skink',
    group: 'skink',
    beginnerFriendly: true,
    spaceNeed: 'large',
    handleable: 'high',
    uvbComplexity: 'high',
    dietType: 'omnivore',
    activity: 'diurnal',
    blurb:
      'A docile, dog-tame ground lizard that many keepers find the most interactive option on this list. Like a bearded dragon it needs a large floor footprint, proper UVB, and a varied omnivorous diet, so it suits a beginner who wants a handleable lizard and has the room for a big enclosure.',
  },
  {
    id: 'western-hognose-snake',
    name: 'Western hognose snake',
    slug: '/species/western-hognose-snake',
    group: 'snake',
    beginnerFriendly: false,
    spaceNeed: 'small',
    handleable: 'high',
    uvbComplexity: 'low',
    dietType: 'rodents',
    activity: 'diurnal',
    blurb:
      'A small, charismatic, very space-efficient snake — a good fit for limited space — but rated a notch below the top beginner snakes because some individuals are fussy feeders and the species is mildly rear-fanged (medically insignificant to most people, but worth knowing). A reasonable second snake or a researched first one.',
  },
  {
    id: 'kenyan-sand-boa',
    name: 'Kenyan sand boa',
    slug: '/species/kenyan-sand-boa',
    group: 'snake',
    beginnerFriendly: false,
    spaceNeed: 'small',
    handleable: 'medium',
    uvbComplexity: 'low',
    dietType: 'rodents',
    activity: 'nocturnal',
    blurb:
      'A tiny, hardy, very low-footprint burrowing snake that is easy to house and feed — excellent for keepers with almost no space. It spends most of its time buried, so it is more of a low-interaction display animal than a handling pet.',
  },
]

type Experience = 'first' | 'some'
type Space = 'small' | 'medium' | 'large'
type Handling = 'lots' | 'some' | 'little'
type Effort = 'low' | 'medium' | 'high'
type ActivityPref = 'day' | 'night' | 'noPref'
type Diet = 'fine' | 'insectsOnly' | 'noLive'

interface Answers {
  experience: Experience
  space: Space
  handling: Handling
  effort: Effort
  activity: ActivityPref
  diet: Diet
}

const DEFAULT_ANSWERS: Answers = {
  experience: 'first',
  space: 'medium',
  handling: 'some',
  effort: 'medium',
  activity: 'noPref',
  diet: 'fine',
}

interface QuestionOption<T extends string> {
  value: T
  label: string
}

interface Question<K extends keyof Answers> {
  key: K
  prompt: string
  options: QuestionOption<Answers[K]>[]
}

const QUESTIONS: Question<keyof Answers>[] = [
  {
    key: 'experience',
    prompt: 'How much reptile-keeping experience do you have?',
    options: [
      { value: 'first', label: 'This would be my first reptile' },
      { value: 'some', label: 'I have kept a reptile before' },
    ],
  },
  {
    key: 'space',
    prompt: 'How much space can you give the enclosure?',
    options: [
      { value: 'small', label: 'Limited — a small tabletop enclosure' },
      { value: 'medium', label: 'Moderate — a 3–4 ft enclosure is fine' },
      { value: 'large', label: 'Plenty — I can house a large 4 ft+ enclosure' },
    ],
  },
  {
    key: 'handling',
    prompt: 'How important is handling the animal to you?',
    options: [
      { value: 'lots', label: 'Very — I want a pet I can hold regularly' },
      { value: 'some', label: 'Somewhat — occasional handling is nice' },
      { value: 'little', label: 'Not important — I mainly want to observe it' },
    ],
  },
  {
    key: 'effort',
    prompt: 'How much setup and maintenance effort suits you?',
    options: [
      { value: 'low', label: 'Keep it simple — minimal lighting and gear' },
      { value: 'medium', label: 'I can manage a moderate setup' },
      { value: 'high', label: 'I am happy to run full UVB, basking, and a varied diet' },
    ],
  },
  {
    key: 'activity',
    prompt: 'When would you like the animal to be active?',
    options: [
      { value: 'day', label: 'During the day, when I can watch it' },
      { value: 'night', label: 'Evening / night is fine' },
      { value: 'noPref', label: 'No preference' },
    ],
  },
  {
    key: 'diet',
    prompt: 'How do you feel about the diet?',
    options: [
      { value: 'fine', label: 'I am fine with live insects or frozen-thawed rodents' },
      { value: 'insectsOnly', label: 'Insects are fine, but no rodents' },
      { value: 'noLive', label: "I'd rather avoid feeding live prey if possible" },
    ],
  },
]

interface Scored {
  species: Species
  score: number
  reasons: string[]
}

function scoreSpecies(a: Answers): Scored[] {
  return SPECIES.map((s) => {
    let score = 0
    const reasons: string[] = []

    // Experience gate: for first-timers, only top-tier beginner species
    // get the baseline boost; non-top-tier species are penalised so they
    // never out-rank a forgiving starter for a complete novice.
    if (a.experience === 'first') {
      if (s.beginnerFriendly) {
        score += 3
      } else {
        score -= 4
        reasons.push('Listed a step below the top starter species, so it is a better second reptile than a first one')
      }
    } else {
      // some experience: everything on this list is in range
      score += 1
      if (!s.beginnerFriendly) {
        reasons.push('A good next step once you have kept a starter species')
      }
    }

    // Space
    const spaceRank = { small: 0, medium: 1, large: 2 }
    if (spaceRank[s.spaceNeed] <= spaceRank[a.space]) {
      score += 2
      if (s.spaceNeed === 'small' && a.space === 'small') {
        reasons.push('Fits a small footprint, matching the limited space you have')
      }
    } else {
      score -= 3
      reasons.push(`Needs more room than you indicated (adult footprint is ${s.spaceNeed})`)
    }

    // Handling
    const handleRank = { low: 0, medium: 1, high: 2 }
    if (a.handling === 'lots') {
      if (s.handleable === 'high') {
        score += 3
        reasons.push('One of the more handleable, tolerant species — a good fit for a hands-on keeper')
      } else if (s.handleable === 'medium') {
        score += 1
        reasons.push('Tolerates gentle, regular handling once settled, though it is less of a "lap pet"')
      } else {
        score -= 2
        reasons.push('Prefers to be observed rather than handled, which does not match your wish to hold it often')
      }
    } else if (a.handling === 'some') {
      score += handleRank[s.handleable]
    } else {
      // little handling desired — display species score fine
      score += 1
      if (s.handleable === 'low') {
        reasons.push('A display-first animal, matching your preference to mainly observe')
      }
    }

    // Effort vs UVB / setup complexity
    if (a.effort === 'low') {
      if (s.uvbComplexity === 'low') {
        score += 3
        reasons.push('Simple, low-complexity lighting and setup, matching your preference to keep it easy')
      } else if (s.uvbComplexity === 'medium') {
        score += 0
      } else {
        score -= 3
        reasons.push('Needs full high-output UVB and a strong basking gradient, which is more than a minimal setup')
      }
    } else if (a.effort === 'medium') {
      if (s.uvbComplexity === 'high') {
        score -= 1
      } else {
        score += 1
      }
    } else {
      // high effort welcome
      score += 1
      if (s.uvbComplexity === 'high') {
        reasons.push('Rewards the full UVB-and-basking setup you are willing to run')
      }
    }

    // Activity preference
    if (a.activity === 'day') {
      if (s.activity === 'diurnal') {
        score += 2
        reasons.push('Active during the day, when you will actually see it')
      } else if (s.activity === 'crepuscular') {
        score += 1
        reasons.push('Most active at dawn and dusk, so you will see some daytime activity')
      } else {
        score -= 1
        reasons.push('Mainly active at night, so it shows less daytime behaviour')
      }
    } else if (a.activity === 'night') {
      if (s.activity === 'nocturnal') {
        score += 2
        reasons.push('Active in the evening, matching when you want to watch it')
      } else if (s.activity === 'crepuscular') {
        score += 1
      }
    }

    // Diet comfort
    if (a.diet === 'insectsOnly') {
      if (s.dietType === 'rodents') {
        score -= 4
        reasons.push('Eats rodents, which you said you would rather avoid')
      } else if (s.dietType === 'insects' || s.dietType === 'mixed' || s.dietType === 'omnivore') {
        score += 1
      }
    } else if (a.diet === 'noLive') {
      if (s.dietType === 'mixed') {
        score += 3
        reasons.push('Can be kept largely on a prepared powdered diet, with live prey optional')
      } else if (s.dietType === 'rodents') {
        score += 1
        reasons.push('Usually fed frozen-thawed (not live) rodents, which sidesteps live feeding')
      } else if (s.dietType === 'insects') {
        score -= 1
        reasons.push('Relies on live insects, so some live feeding is hard to avoid')
      } else {
        score += 0
      }
    } else {
      // diet fine
      score += 1
    }

    return { species: s, score, reasons }
  })
    .sort((a, b) => b.score - a.score)
}

function topMatches(scored: Scored[]): Scored[] {
  // Recommend 2–3: always the top, plus any within a small band of it,
  // capped at 3. Guarantees at least 2 so the user gets a comparison.
  const top = scored[0]
  const band = scored.filter((s) => top.score - s.score <= 2 && s.score > 0)
  const result = band.length >= 2 ? band.slice(0, 3) : scored.slice(0, 2)
  return result
}

export function ReptileMatchQuiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>(DEFAULT_ANSWERS)
  const [submitted, setSubmitted] = useState(false)

  const total = QUESTIONS.length
  const isLast = step === total - 1

  const results = useMemo(() => {
    if (!submitted) return null
    return topMatches(scoreSpecies(answers))
  }, [submitted, answers])

  function setAnswer<K extends keyof Answers>(key: K, value: Answers[K]) {
    setAnswers((prev) => ({ ...prev, [key]: value }))
  }

  function next() {
    if (isLast) {
      setSubmitted(true)
    } else {
      setStep((s) => Math.min(s + 1, total - 1))
    }
  }

  function back() {
    if (submitted) {
      setSubmitted(false)
      return
    }
    setStep((s) => Math.max(s - 1, 0))
  }

  function restart() {
    setAnswers(DEFAULT_ANSWERS)
    setStep(0)
    setSubmitted(false)
  }

  const inputClass =
    'w-full rounded border border-brand-border bg-brand-surface px-3 py-3 text-left text-sm text-brand-text-dark transition'
  const q = QUESTIONS[step]

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      {!submitted && (
        <>
          {/* Progress */}
          <div className="mb-5 flex items-center justify-between">
            <span className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Question {step + 1} of {total}
            </span>
            <div className="h-1.5 w-32 overflow-hidden rounded-full bg-brand-border/50">
              <div
                className="h-full rounded-full bg-brand-primary transition-all"
                style={{ width: `${((step + 1) / total) * 100}%` }}
              />
            </div>
          </div>

          <fieldset>
            <legend className="mb-4 text-lg font-semibold text-brand-text-dark">
              {q.prompt}
            </legend>
            <div className="space-y-2.5">
              {q.options.map((opt) => {
                const selected = answers[q.key] === opt.value
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setAnswer(q.key, opt.value as Answers[typeof q.key])}
                    aria-pressed={selected}
                    className={`${inputClass} ${
                      selected
                        ? 'border-brand-primary ring-1 ring-brand-primary'
                        : 'hover:border-brand-primary'
                    }`}
                  >
                    {opt.label}
                  </button>
                )
              })}
            </div>
          </fieldset>

          <div className="mt-6 flex items-center justify-between">
            <button
              type="button"
              onClick={back}
              disabled={step === 0}
              className="rounded-md px-4 py-2 text-sm font-semibold text-brand-text-mid transition enabled:hover:text-brand-text-dark disabled:opacity-40"
            >
              ← Back
            </button>
            <button
              type="button"
              onClick={next}
              className="rounded-md bg-brand-primary px-5 py-2 text-sm font-semibold text-brand-dark transition hover:opacity-90"
            >
              {isLast ? 'See my matches' : 'Next →'}
            </button>
          </div>
        </>
      )}

      {submitted && results && (
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-brand-text-dark">
              Your beginner-reptile matches
            </h3>
            <button
              type="button"
              onClick={restart}
              className="text-sm font-semibold text-brand-primary hover:underline"
            >
              Start over
            </button>
          </div>

          <p className="text-sm text-brand-text-mid">
            Based on your answers, these species fit best. They are suggestions, not
            verdicts — every individual animal varies, so read the full care guide and
            research the specific animal before committing.
          </p>

          {results.map((r, i) => (
            <div
              key={r.species.id}
              className="rounded-lg border border-brand-border p-5 ring-1 ring-white/5"
            >
              <div className="mb-2 flex items-baseline justify-between gap-3">
                <h4 className="text-base font-bold text-brand-text-dark">
                  {i === 0 ? 'Top match: ' : ''}
                  {r.species.name}
                </h4>
                <span className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  {r.species.group}
                </span>
              </div>
              <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                {r.species.blurb}
              </p>
              {r.reasons.length > 0 && (
                <ul className="mb-3 space-y-1.5">
                  {r.reasons.slice(0, 4).map((reason, ri) => (
                    <li
                      key={ri}
                      className="flex gap-2 text-sm text-brand-text-mid"
                    >
                      <span className="text-brand-primary" aria-hidden="true">
                        •
                      </span>
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap gap-2">
                <a
                  href={r.species.slug}
                  className="rounded-md bg-brand-primary px-3.5 py-2 text-sm font-semibold text-brand-dark transition hover:opacity-90"
                >
                  {r.species.name} care guide →
                </a>
                <a
                  href="/tools/enclosure-size-calculator"
                  className="rounded-md border border-brand-border px-3.5 py-2 text-sm font-semibold text-brand-text-dark transition hover:border-brand-primary"
                >
                  Size its enclosure
                </a>
                <a
                  href="/tools/reptile-feeding-calculator"
                  className="rounded-md border border-brand-border px-3.5 py-2 text-sm font-semibold text-brand-text-dark transition hover:border-brand-primary"
                >
                  Feeding calculator
                </a>
              </div>
            </div>
          ))}

          <div className="rounded border border-brand-border/40 bg-brand-surface/50 p-4 text-sm text-brand-text-mid">
            <p>
              <strong className="text-brand-text-dark">
                A match is a starting point, not a guarantee.
              </strong>{' '}
              Temperament varies between individuals, and a calm species can still
              produce a shy or food-fussy animal. Read the full care guide, budget for
              the complete setup before buying, and consult a reptile veterinarian for
              health questions.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
