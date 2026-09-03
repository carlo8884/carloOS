'use client'

/**
 * Dog Grimace Scale assessor -- /tools/dog-grimace-scale
 *
 * An owner-facing planning / observation checklist adapted from the five
 * facial-action-unit pattern used on Vets.co's Cat Grimace Scale (the
 * validated Feline Grimace Scale: Evangelista et al., Scientific Reports,
 * 2019) with dog-specific descriptors drawn from published canine "pain
 * face" features (ear position, orbital tightening, muzzle/lip tension,
 * tension above the eye, head carriage — language that also appears in
 * Glasgow CMPS-SF facial items; Reid et al.).
 *
 * Five action units, each 0–2, total 0–10. Bands are a planning heuristic
 * (≤1 minimal, ≤3 watch, ≥4 more signs) so the twin stays structurally
 * comparable to the cat tool. This is NOT a claim that a canine grimace
 * scale has the same validated ≈4/10 analgesia cut-off as the Feline
 * Grimace Scale. A high total is a reason to call a veterinarian or use
 * the dog emergency triage tool — never a reason to shop first, and never
 * a dose or a named drug.
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

// Five dog facial action units, each 0-2. Twin of the cat grimace pattern
// (ears / orbital / muzzle / + dog-specific brow + head) — not a new scale.
const ACTION_UNITS: ActionUnit[] = [
  {
    id: 'ears',
    prompt: 'Ear position',
    help: 'Compare to this dog’s usual ear set. Floppy, cropped, and prick ears all have a different “relaxed” look — score the change, not the breed shape.',
    options: [
      { label: 'Ears in the usual relaxed position (forward or naturally dropped, not pinned)', score: 0 },
      { label: 'Ears slightly pulled back or held lower than usual', score: 1 },
      { label: 'Ears flattened, pinned, or rotated tightly back against the head', score: 2 },
    ],
  },
  {
    id: 'orbital',
    prompt: 'Eye opening (orbital tightening)',
    help: 'Watch at rest, not while being handled. Squinting is a core pain-face signal; a wide “whale eye” is more often fear than pain.',
    options: [
      { label: 'Eyes fully open, soft expression', score: 0 },
      { label: 'Eyes partially closed or a tense, narrowed look', score: 1 },
      { label: 'Eyes squinted or tightly closed', score: 2 },
    ],
  },
  {
    id: 'muzzle',
    prompt: 'Muzzle / lip tension',
    help: 'A relaxed muzzle looks loose at the commissures. A painful muzzle looks taut, with lips drawn back — the dog “pain face.”',
    options: [
      { label: 'Muzzle and lips relaxed, loose commissures', score: 0 },
      { label: 'Mild tightness at the lips or a drawn look', score: 1 },
      { label: 'Muzzle taut, lips pulled back, tight commissures', score: 2 },
    ],
  },
  {
    id: 'brow',
    prompt: 'Tension above the eye (brow)',
    help: 'Dogs show a furrowed brow more clearly than cats. Look for tension in the skin above the orbit, not just the ear set.',
    options: [
      { label: 'Forehead and brow soft, no furrow', score: 0 },
      { label: 'Mild furrow or tension above the eye', score: 1 },
      { label: 'Deep furrow, tight brow, a “worried” forehead', score: 2 },
    ],
  },
  {
    id: 'head',
    prompt: 'Head position',
    help: 'Where is the head held relative to this dog’s usual rest or alert posture? Withdrawal and a tucked chin are common pain-face companions.',
    options: [
      { label: 'Head held in the usual alert or rest position', score: 0 },
      { label: 'Head held lower than usual or slightly withdrawn', score: 1 },
      { label: 'Head hung, tucked toward the chest, or the dog is withdrawn and still', score: 2 },
    ],
  },
]

interface Band {
  tone: 'good' | 'warn' | 'danger'
  label: string
  blurb: string
  pushTriage: boolean
}

// Planning heuristic bands (same 0–10 structure as the cat twin).
// ≥4 is “more facial pain signs,” not a validated canine analgesia cut-off.
function band(total: number): Band {
  if (total <= 1) {
    return {
      tone: 'good',
      label: 'Minimal facial pain signs',
      pushTriage: false,
      blurb:
        'The face shows few of the pain-face features this checklist looks for. That is reassuring, but it does not rule pain out — dogs hide discomfort, and some pain (abdominal, dental, or slow chronic arthritis) does not always show clearly in the face. If your dog is also limping, panting at rest, hiding, off food, or you simply feel something is wrong, contact your veterinarian regardless of this score.',
    }
  }
  if (total <= 3) {
    return {
      tone: 'warn',
      label: 'Some signs — watch closely',
      pushTriage: false,
      blurb:
        'A few facial pain-face features are present. Re-check in a calm, unprovoked moment, note any other changes (appetite, mobility, panting, restlessness), and call your veterinarian if the signs persist or your dog seems unwell. For a stable, non-emergency question, start with telehealth. This is a planning reference, not a diagnosis — and not a reason to give any pain medicine.',
    }
  }
  return {
    tone: 'danger',
    label: 'Facial signs consistent with pain',
    pushTriage: true,
    blurb:
      'The total reaches the higher band on this planning checklist (about 4 out of 10 or more). That is a reason to contact a veterinarian now — describe the face plus appetite, mobility, and breathing — not a reason to wait it out, and not a reason to shop a comfort kit first. If the onset is sudden, the dog is collapsing, struggling to breathe, bloated, or in obvious distress, skip shopping and use the dog emergency triage tool, then go to an emergency hospital. Never give human painkillers (ibuprofen, acetaminophen, naproxen) or any leftover prescription: dosing and specific drugs are a veterinarian’s decision, not this page’s.',
  }
}

export default function DogGrimaceScale() {
  const [answers, setAnswers] = useState<Record<string, number | null>>({
    ears: null,
    orbital: null,
    muzzle: null,
    brow: null,
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
                href="/tools/is-this-a-dog-emergency"
                className="inline-block bg-brand-primary text-white font-semibold text-sm px-4 py-2 rounded-md no-underline hover:bg-brand-primary-dark"
              >
                Check dog emergency triage →
              </Link>
              <Link
                href="/find-a-vet"
                className="inline-block border border-brand-border bg-brand-white text-brand-dark font-semibold text-sm px-4 py-2 rounded-md no-underline hover:border-brand-primary"
              >
                Find emergency care →
              </Link>
            </div>
          ) : null}
        </div>
      ) : (
        <p className="mt-2 text-sm text-brand-text-light">
          Score all five facial action units to see your dog&apos;s grimace total.
        </p>
      )}

      <p className="mt-4 text-2xs leading-snug text-brand-text-light">
        A guided owner estimate adapted from published canine pain-face features, not a
        diagnosis and not a licensed clinical instrument. A low total does not rule out
        pain. Never give human painkillers or leftover prescriptions. High-pain faces
        belong with emergency triage, not a shopping list.
      </p>
    </div>
  )
}
