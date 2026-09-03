'use client'

/**
 * Ferret Grimace Scale assessor -- /tools/ferret-grimace-scale
 *
 * An owner-facing planning / observation checklist adapted from published
 * ferret facial pain-face features — the Ferret Grimace Scale (FGS;
 * Reijgwart et al., PLoS ONE, 2017). The published FGS identified five
 * facial action units scored 0–2: orbital tightening, nose bulging, cheek
 * bulging, ear changes, and whisker retraction. Orbital tightening was the
 * most reliable unit in that study; whisker retraction was weaker and the
 * authors recommended leaving it out of a clinical FGS in its then-current
 * form. This owner page keeps all five identified units so the 0–10 twin
 * stays structurally comparable to the dog / cat / horse grimace tools, and
 * it does not claim a validated owner analgesia cut-off.
 *
 * Five action units, each 0–2, total 0–10. Bands are a planning heuristic
 * (≤1 minimal, ≤3 watch, ≥4 more signs). A high total is a reason to call
 * an exotic-mammal veterinarian or use the ferret emergency triage tool —
 * never a reason to shop first, and never a dose or a named drug.
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

// Five owner-facing facial action units, each 0-2. Twin of the dog/cat/horse
// grimace pattern, with FGS / mustelid pain-face descriptors (not a new scale).
const ACTION_UNITS: ActionUnit[] = [
  {
    id: 'ears',
    prompt: 'Ear position',
    help: 'Ferret ears are small and set close to the skull. Pain-face ears flatten or pull back; relaxed ears sit in this ferret’s usual alert or rest set. Watch at rest, not while the ferret is listening to a noise.',
    options: [
      { label: 'Ears in the usual relaxed or alert position (up, slightly out, or softly to the side)', score: 0 },
      { label: 'Ears held a little flatter or starting to pull back', score: 1 },
      { label: 'Ears flattened against the head, tight at the base, little movement', score: 2 },
    ],
  },
  {
    id: 'orbital',
    prompt: 'Eye opening (orbital tightening)',
    help: 'The published Ferret Grimace Scale found orbital tightening the most reliable facial sign. Look at an unprovoked ferret at rest. Squinting is a core pain-face signal; a wide, staring eye is more often fear or alarm than pain.',
    options: [
      { label: 'Eyes fully open, soft expression', score: 0 },
      { label: 'Eyes partially closed or a tense, narrowed look', score: 1 },
      { label: 'Eyes squinted or tightly closed', score: 2 },
    ],
  },
  {
    id: 'nose',
    prompt: 'Nose shape (nose bulging)',
    help: 'A painful ferret muzzle can look more bulbous — the nose “bulges” relative to this ferret’s usual slim profile. Score at rest, not while the ferret is sniffing hard or just woke from a dead sleep.',
    options: [
      { label: 'Nose slim and usual, no extra bulge', score: 0 },
      { label: 'Nose a little fuller or more rounded than usual', score: 1 },
      { label: 'Nose obviously bulbous / bulging compared with this ferret’s usual face', score: 2 },
    ],
  },
  {
    id: 'cheek',
    prompt: 'Cheek shape (cheek bulging)',
    help: 'Mustelid cheeks can look fuller or “puffed” when the face is drawn in pain. Do not score a ferret that is stuffing food in its cheeks or mid-yawn.',
    options: [
      { label: 'Cheeks flat and usual, following the skull', score: 0 },
      { label: 'Mild fullness or tightness in the cheek', score: 1 },
      { label: 'Cheeks obviously bulging or drawn tight against a strained muzzle', score: 2 },
    ],
  },
  {
    id: 'whiskers',
    prompt: 'Whisker position',
    help: 'Whiskers pulled back against the face were identified as a ferret pain-face unit, though the original study found this sign weaker than orbital tightening. Score the change from this ferret’s usual forward fan, not a momentary twitch.',
    options: [
      { label: 'Whiskers fanned forward or in the usual rest position', score: 0 },
      { label: 'Whiskers starting to flatten or pull back', score: 1 },
      { label: 'Whiskers tightly retracted against the muzzle', score: 2 },
    ],
  },
]

interface Band {
  tone: 'good' | 'warn' | 'danger'
  label: string
  blurb: string
  pushTriage: boolean
}

// Planning heuristic bands (same 0–10 structure as the dog/cat/horse twins).
// ≥4 is “more facial pain signs,” not a validated owner analgesia cut-off.
function band(total: number): Band {
  if (total <= 1) {
    return {
      tone: 'good',
      label: 'Minimal facial pain signs',
      pushTriage: false,
      blurb:
        'The face shows few of the pain-face features this checklist looks for. That is reassuring, but it does not rule pain out — ferrets hide discomfort, and some pain (early gastrointestinal blockage, insulinoma, dental disease, or slow chronic arthritis) does not always show clearly in the face. If this ferret is also hunched, grinding its teeth, off food, straining to pass stool, collapsing, or you simply feel something is wrong, contact an exotic-mammal veterinarian regardless of this score.',
    }
  }
  if (total <= 3) {
    return {
      tone: 'warn',
      label: 'Some signs — watch closely',
      pushTriage: false,
      blurb:
        'A few facial pain-face features are present. Re-check in a calm, unprovoked moment, note any other changes (appetite, stool, posture, energy, teeth-grinding), and call an exotic-mammal veterinarian if the signs persist or the ferret seems unwell. For a stable, non-emergency question, start with telehealth. This is a planning reference, not a diagnosis — and not a reason to give any pain medicine.',
    }
  }
  return {
    tone: 'danger',
    label: 'Facial signs consistent with pain',
    pushTriage: true,
    blurb:
      'The total reaches the higher band on this planning checklist (about 4 out of 10 or more). That is a reason to contact an exotic-mammal veterinarian now — describe the face plus appetite, stool, posture, and breathing — not a reason to wait it out, and not a reason to shop a comfort kit first. If the onset is sudden, the ferret is collapsing, struggling to breathe, has a hard belly, cannot urinate, or is in obvious distress, skip shopping and use the ferret emergency triage tool, then go to ferret-capable emergency care. Never give leftover prescriptions or human painkillers: ibuprofen and acetaminophen are toxic to ferrets, and dosing and specific drugs are a veterinarian’s decision, not this page’s.',
  }
}

export default function FerretGrimaceScale() {
  const [answers, setAnswers] = useState<Record<string, number | null>>({
    ears: null,
    orbital: null,
    nose: null,
    cheek: null,
    whiskers: null,
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
                href="/tools/is-this-a-ferret-emergency"
                className="inline-block bg-brand-primary text-white font-semibold text-sm px-4 py-2 rounded-md no-underline hover:bg-brand-primary-dark"
              >
                Check ferret emergency triage →
              </Link>
              <Link
                href="/find-an-exotic-vet"
                className="inline-block border border-brand-border bg-brand-white text-brand-dark font-semibold text-sm px-4 py-2 rounded-md no-underline hover:border-brand-primary"
              >
                Find an exotic vet →
              </Link>
            </div>
          ) : null}
        </div>
      ) : (
        <p className="mt-2 text-sm text-brand-text-light">
          Score all five facial action units to see your ferret&apos;s grimace total.
        </p>
      )}

      <p className="mt-4 text-2xs leading-snug text-brand-text-light">
        A guided owner estimate adapted from published ferret pain-face features, not a
        diagnosis and not a licensed clinical instrument. A low total does not rule out
        pain. Never give leftover prescriptions or human painkillers. High-pain faces
        belong with emergency triage, not a shopping list.
      </p>
    </div>
  )
}
