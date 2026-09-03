'use client'

/**
 * Horse Grimace Scale assessor -- /tools/horse-grimace-scale
 *
 * An owner-facing planning / observation checklist adapted from published
 * equine facial pain-face features — the Horse Grimace Scale (HGS; Dalla
 * Costa et al., PLOS ONE, 2014) and the equine pain face (Gleerup et al.,
 * 2015). The clinical HGS scores six facial action units 0–2; this owner
 * page keeps a five-unit 0–10 twin of the dog/cat grimace tools by grouping
 * chewing-muscle strain with the strained mouth / pronounced chin as one
 * observation. Descriptors: ear position (stiffly backwards), orbital
 * tightening, tension above the eye, chewing muscles / mouth / chin, and
 * strained nostrils / flattened profile.
 *
 * Five action units, each 0–2, total 0–10. Bands are a planning heuristic
 * (≤1 minimal, ≤3 watch, ≥4 more signs) so the twin stays structurally
 * comparable to the dog and cat tools. This is NOT a claim that an owner
 * checklist has the same validated analgesia cut-off as the published HGS.
 * A high total is a reason to call an equine veterinarian or use the horse
 * emergency triage tool — never a reason to shop first, and never a dose
 * or a named drug.
 *
 * QC §1: planning reference, not a diagnosis. No credential claim. No
 * first-person hands-on testing. Never recommend dosing or specific drugs.
 */

import { useMemo, useState } from 'react'
import Link from 'next/link'

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

// Five owner-facing facial action units, each 0-2. Twin of the dog/cat
// grimace pattern, with HGS / equine-pain-face descriptors (not a new scale).
const ACTION_UNITS: ActionUnit[] = [
  {
    id: 'ears',
    prompt: 'Ear position',
    help: 'Watch at rest, not while the horse is listening to the barn. Pain-face ears stiffen and rotate backwards; relaxed ears drift, swivel, or rest in this horse’s usual set.',
    options: [
      { label: 'Ears in the usual relaxed or curious position (forward, swiveling, or softly to the side)', score: 0 },
      { label: 'Ears held a little stiffer or starting to rotate backwards', score: 1 },
      { label: 'Ears stiffly backwards, tight at the base, little movement', score: 2 },
    ],
  },
  {
    id: 'orbital',
    prompt: 'Eye opening (orbital tightening)',
    help: 'Look at an unprovoked horse at rest. Squinting and a tightly closed lid are core pain-face signals; a wide, staring “white eye” is more often fear or alarm than pain.',
    options: [
      { label: 'Eyes fully open, soft expression', score: 0 },
      { label: 'Eyes partially closed or a tense, narrowed look', score: 1 },
      { label: 'Eyes squinted or tightly closed', score: 2 },
    ],
  },
  {
    id: 'supraorbital',
    prompt: 'Tension above the eye (orbital / brow)',
    help: 'The published horse grimace and equine pain-face descriptions both call out tension above the orbit — a crease or “worried” brow over the eye, not just the ear set.',
    options: [
      { label: 'Skin above the eye soft, no crease', score: 0 },
      { label: 'Mild crease or tension above the eye', score: 1 },
      { label: 'Deep crease, tight brow, a drawn “worried” look over the orbit', score: 2 },
    ],
  },
  {
    id: 'chewing',
    prompt: 'Chewing muscles / mouth / chin',
    help: 'Prominent, strained masseter (chewing) muscles, a tight mouth, and a pronounced chin are grouped here as one owner observation. Do not score a horse that is actively chewing hay.',
    options: [
      { label: 'Chewing muscles flat, lips and chin relaxed', score: 0 },
      { label: 'Mild tightness in the cheek, lips, or chin', score: 1 },
      { label: 'Chewing muscles stand out; mouth strained; chin prominent and tight', score: 2 },
    ],
  },
  {
    id: 'nostrils',
    prompt: 'Nostrils and profile',
    help: 'A painful muzzle often shows strained, more square nostrils and a flattened or drawn facial profile. Score at rest — flared nostrils after work or in heat are not the same signal.',
    options: [
      { label: 'Nostrils oval and relaxed, usual profile', score: 0 },
      { label: 'Nostrils a little more open or square than usual', score: 1 },
      { label: 'Nostrils strained and square; profile looks flattened or drawn', score: 2 },
    ],
  },
]

interface Band {
  tone: 'good' | 'warn' | 'danger'
  label: string
  blurb: string
  pushTriage: boolean
}

// Planning heuristic bands (same 0–10 structure as the dog/cat twins).
// ≥4 is “more facial pain signs,” not a validated owner analgesia cut-off.
function band(total: number): Band {
  if (total <= 1) {
    return {
      tone: 'good',
      label: 'Minimal facial pain signs',
      pushTriage: false,
      blurb:
        'The face shows few of the pain-face features this checklist looks for. That is reassuring, but it does not rule pain out — horses hide discomfort, and some pain (early colic, hoof abscess, or slow chronic arthritis) does not always show clearly in the face. If this horse is also off feed, looking at the flank, standing camped out, or you simply feel something is wrong, contact your equine veterinarian regardless of this score.',
    }
  }
  if (total <= 3) {
    return {
      tone: 'warn',
      label: 'Some signs — watch closely',
      pushTriage: false,
      blurb:
        'A few facial pain-face features are present. Re-check in a calm, unprovoked moment, note any other changes (appetite, manure, gut sounds, stance, digital pulse), and call your equine veterinarian if the signs persist or the horse seems unwell. For a stable, non-emergency question, start with telehealth. This is a planning reference, not a diagnosis — and not a reason to give any pain medicine.',
    }
  }
  return {
    tone: 'danger',
    label: 'Facial signs consistent with pain',
    pushTriage: true,
    blurb:
      'The total reaches the higher band on this planning checklist (about 4 out of 10 or more). That is a reason to contact an equine veterinarian now — describe the face plus appetite, manure, stance, and breathing — not a reason to wait it out, and not a reason to shop a comfort kit first. If the onset is sudden, the horse is rolling, choking, non-weight-bearing, foundered, or down and cannot rise, skip shopping and use the horse emergency triage tool, then call your equine veterinarian. Never give leftover prescriptions or human painkillers: dosing and specific drugs are a veterinarian’s decision, not this page’s.',
  }
}

export default function HorseGrimaceScale() {
  const [answers, setAnswers] = useState<Record<string, number | null>>({
    ears: null,
    orbital: null,
    supraorbital: null,
    chewing: null,
    nostrils: null,
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
    <div className="rounded-lg border border-brand-border bg-brand-white p-6 sm:p-8">
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
                      ? 'border-brand-primary bg-brand-surface'
                      : 'border-brand-border bg-brand-surface hover:border-brand-primary',
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
        <div className="mt-2 rounded-lg border border-brand-border bg-brand-surface p-5 sm:p-6">
          <div className="flex flex-wrap items-baseline gap-3">
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
          {result.pushTriage ? (
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <Link
                href="/tools/is-this-a-horse-emergency"
                className="inline-block bg-brand-primary text-white font-semibold text-sm px-4 py-2 rounded-md no-underline hover:bg-brand-primary-dark"
              >
                Check horse emergency triage →
              </Link>
              <Link
                href="/ownership/choosing-a-vet"
                className="inline-block border border-brand-border bg-brand-white text-brand-dark font-semibold text-sm px-4 py-2 rounded-md no-underline hover:border-brand-primary"
              >
                Line up equine emergency cover →
              </Link>
            </div>
          ) : null}
        </div>
      ) : (
        <p className="mt-2 text-sm text-brand-text-light">
          Score all five facial action units to see your horse&apos;s grimace total.
        </p>
      )}

      <p className="mt-4 text-2xs leading-snug text-brand-text-light">
        A guided owner estimate adapted from published equine pain-face features, not a
        diagnosis and not a licensed clinical instrument. A low total does not rule out
        pain. Never give leftover prescriptions or human painkillers. High-pain faces
        belong with emergency triage, not a shopping list.
      </p>
    </div>
  )
}
