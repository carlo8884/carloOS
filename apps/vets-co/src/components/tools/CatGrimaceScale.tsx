'use client'

/**
 * Cat Grimace Scale assessor -- vets-co /tools/cat-grimace-scale
 *
 * An owner-facing guided self-assessment adapted from the Feline Grimace Scale
 * (FGS), a peer-reviewed, validated clinical pain instrument (Evangelista et
 * al., Scientific Reports, 2019; Université de Montréal). The clinician tool
 * scores five facial action units 0-2 each (total 0-10); a validated cut-off of
 * >0.39 of maximum (≈4/10) suggests pain warranting analgesia.
 *
 * This is an education aid, NOT a diagnosis. A low score does not rule out pain
 * (cats mask pain, and some pain is not facial). Every result defers to a
 * veterinarian, and the tool warns never to give human painkillers to cats
 * (acetaminophen/ibuprofen are toxic). QC §1: no diagnosis, no credential claim.
 */

import { useMemo, useState } from 'react'

interface Option {
  label: string
  score: 0 | 1 | 2
}
interface ActionUnit {
  id: string
  prompt: string
  help: string
  options: Option[]
}

// Five facial action units of the validated Feline Grimace Scale, each 0-2.
const ACTION_UNITS: ActionUnit[] = [
  {
    id: 'ears',
    prompt: 'Ear position',
    help: 'Look at how the ears are held when the cat is resting and unprovoked.',
    options: [
      { label: 'Ears facing forward, upright', score: 0 },
      { label: 'Ears slightly pulled apart or rotating outward', score: 1 },
      { label: 'Ears flattened and rotated outward', score: 2 },
    ],
  },
  {
    id: 'orbital',
    prompt: 'Eye opening (orbital tightening)',
    help: 'How wide are the eyes? Squinting is a core pain signal.',
    options: [
      { label: 'Eyes fully open', score: 0 },
      { label: 'Eyes partially open', score: 1 },
      { label: 'Eyes squinted or closed', score: 2 },
    ],
  },
  {
    id: 'muzzle',
    prompt: 'Muzzle tension',
    help: 'A relaxed muzzle looks round; a painful muzzle looks tense and oval/elliptical.',
    options: [
      { label: 'Muzzle relaxed and rounded', score: 0 },
      { label: 'Muzzle mildly tense', score: 1 },
      { label: 'Muzzle tense, elliptical-shaped', score: 2 },
    ],
  },
  {
    id: 'whiskers',
    prompt: 'Whisker position',
    help: 'Relaxed whiskers hang loose and curved; painful whiskers stiffen and point forward.',
    options: [
      { label: 'Whiskers loose and curved', score: 0 },
      { label: 'Whiskers slightly curved or straight', score: 1 },
      { label: 'Whiskers straight and moving forward', score: 2 },
    ],
  },
  {
    id: 'head',
    prompt: 'Head position',
    help: 'Where is the head held relative to the shoulder line?',
    options: [
      { label: 'Head held above the shoulder line', score: 0 },
      { label: 'Head aligned with the shoulder line', score: 1 },
      { label: 'Head held below the shoulder line, or tucked toward the chest', score: 2 },
    ],
  },
]

interface Band {
  tone: 'good' | 'warn' | 'danger'
  label: string
  blurb: string
}
// Validated FGS analgesia cut-off is ≈4/10 (>0.39 of maximum).
function band(total: number): Band {
  if (total <= 1) {
    return {
      tone: 'good',
      label: 'Minimal facial pain signs',
      blurb:
        'The face shows few of the pain features the scale looks for. That is reassuring, but it does not rule pain out — cats are skilled at masking discomfort, and some pain (nausea, internal, or chronic) does not show clearly in the face. If your cat is also hiding, eating less, off its routine, or you simply feel something is wrong, contact your veterinarian regardless of this score.',
    }
  }
  if (total <= 3) {
    return {
      tone: 'warn',
      label: 'Some signs — watch closely',
      blurb:
        'A few facial pain features are present but below the threshold the clinical scale uses to recommend pain relief. Re-check in a calm moment, note any other changes (appetite, hiding, litter-box habits, mobility), and call your veterinarian if the signs persist or your cat seems unwell. Trust your read of your own cat.',
    }
  }
  return {
    tone: 'danger',
    label: 'Facial signs consistent with pain',
    blurb:
      'The total reaches the threshold (about 4 out of 10) at which the validated clinical scale suggests an animal likely needs pain relief. This warrants a call to your veterinarian — describe what you see and ask whether your cat should be examined. Do not wait it out, and never give human or over-the-counter painkillers: many (including acetaminophen/Tylenol and ibuprofen) are toxic and can be fatal to cats.',
  }
}

export default function CatGrimaceScale() {
  const [answers, setAnswers] = useState<Record<string, number | null>>({
    ears: null,
    orbital: null,
    muzzle: null,
    whiskers: null,
    head: null,
  })

  const result = useMemo(() => {
    const scores = ACTION_UNITS.map((u) => answers[u.id]).filter((s): s is number => s != null)
    if (scores.length < ACTION_UNITS.length) return null
    const total = scores.reduce((a, b) => a + b, 0)
    return { total, ...band(total) }
  }, [answers])

  const toneColor: Record<Band['tone'], string> = {
    good: '#15803d',
    warn: '#b45309',
    danger: '#b91c1c',
  }

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      {ACTION_UNITS.map((u, ui) => (
        <fieldset key={u.id} className="mb-6">
          <legend className="mb-1 text-sm font-bold text-brand-text-dark">
            {ui + 1}. {u.prompt}
          </legend>
          <p className="mb-3 text-xs text-brand-text-light leading-snug">{u.help}</p>
          <div className="flex flex-col gap-2">
            {u.options.map((opt) => {
              const checked = answers[u.id] === opt.score
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
                    name={u.id}
                    checked={checked}
                    onChange={() => setAnswers((p) => ({ ...p, [u.id]: opt.score }))}
                    className="mt-0.5 shrink-0"
                  />
                  <span className="text-brand-text-dark leading-snug">
                    <span className="font-semibold">{opt.score}</span> — {opt.label}
                  </span>
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
              Grimace total
            </span>
            <span className="font-display text-3xl font-black" style={{ color: toneColor[result.tone] }}>
              {result.total}/10
            </span>
            <span className="text-sm font-bold" style={{ color: toneColor[result.tone] }}>
              {result.label}
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-brand-text-mid">{result.blurb}</p>
        </div>
      ) : (
        <p className="mt-2 text-sm text-brand-text-light">
          Score all five facial action units to see your cat&apos;s grimace total.
        </p>
      )}

      <p className="mt-4 text-2xs leading-snug text-brand-text-light">
        A guided estimate adapted from a clinical scale, not a diagnosis. The Feline Grimace Scale is
        validated for trained observers; a low total does not rule out pain, and any concern about a
        cat&apos;s comfort should go to your veterinarian. Never give human painkillers to a cat.
      </p>
    </div>
  )
}
