'use client'

import { useMemo, useState } from 'react'

// Henneke 1983 scale: 1 (poor) through 9 (extremely fat).
// Each of six body areas scored 1-9 from observed + palpated condition;
// the overall BCS is the average. This component models that workflow.

type BodyArea = 'neck' | 'withers' | 'shoulder' | 'ribs' | 'loin' | 'tailhead'

interface AreaOption {
  label: string
  /** Henneke 1-9 score for this descriptor. */
  score: number
}

const AREAS: Record<BodyArea, { name: string; description: string; options: AreaOption[] }> = {
  neck: {
    name: 'Neck',
    description: 'Look and palpate along the crest and side of the neck.',
    options: [
      { label: 'Bony structure easily noticeable; no fatty tissue', score: 1 },
      { label: 'Faintly discernible bone structure; thin', score: 2 },
      { label: 'Neck accentuated; lean', score: 3 },
      { label: 'Neck blends smoothly into body', score: 4 },
      { label: 'Neck blends smoothly; slight rounding', score: 5 },
      { label: 'Fat beginning to be deposited along crest', score: 6 },
      { label: 'Fat deposited along crest', score: 7 },
      { label: 'Noticeable thickening of crest; fat deposited along inner buttocks', score: 8 },
      { label: 'Bulging fat along crest; fat along inner buttocks may rub together', score: 9 },
    ],
  },
  withers: {
    name: 'Withers',
    description: 'Run a hand over the withers; observe profile from side.',
    options: [
      { label: 'Bone structure easily noticeable', score: 1 },
      { label: 'Faintly discernible; bony', score: 2 },
      { label: 'Withers accentuated', score: 3 },
      { label: 'Withers not obviously thin', score: 4 },
      { label: 'Withers rounded over spinous processes', score: 5 },
      { label: 'Fat beginning to be deposited along withers', score: 6 },
      { label: 'Fat deposited along withers', score: 7 },
      { label: 'Area along withers filled with fat', score: 8 },
      { label: 'Bulging fat over withers; folds of fat', score: 9 },
    ],
  },
  shoulder: {
    name: 'Shoulder',
    description: 'Observe and palpate where the shoulder meets the body.',
    options: [
      { label: 'Shoulder bone structure easily noticeable', score: 1 },
      { label: 'Shoulder accentuated', score: 2 },
      { label: 'Shoulder accentuated', score: 3 },
      { label: 'Shoulder not obviously thin', score: 4 },
      { label: 'Shoulder blends smoothly into body', score: 5 },
      { label: 'Fat beginning to be deposited behind shoulder', score: 6 },
      { label: 'Fat deposited behind shoulder', score: 7 },
      { label: 'Area behind shoulder filled in flush with body', score: 8 },
      { label: 'Bulging fat behind shoulder', score: 9 },
    ],
  },
  ribs: {
    name: 'Ribs',
    description: 'Palpate firmly along the side of the rib cage.',
    options: [
      { label: 'Ribs projecting prominently', score: 1 },
      { label: 'Slight fat covering ribs; ribs easily discernible', score: 2 },
      { label: 'Slight fat over ribs; ribs easily discernible', score: 3 },
      { label: 'Faint outline of ribs discernible', score: 4 },
      { label: 'Ribs cannot be visually distinguished but easily palpable', score: 5 },
      { label: 'Fat over ribs feels spongy', score: 6 },
      { label: 'Individual ribs can be felt; noticeable filling between ribs with fat', score: 7 },
      { label: 'Difficult to feel ribs', score: 8 },
      { label: 'Patchy fat appearing over ribs', score: 9 },
    ],
  },
  loin: {
    name: 'Loin (back)',
    description: 'Look at the topline from behind; palpate spinous processes.',
    options: [
      { label: 'Spinous processes project prominently', score: 1 },
      { label: 'Slight fat covering over base of spinous processes', score: 2 },
      { label: 'Fat buildup halfway up spinous processes; transverse processes cannot be felt', score: 3 },
      { label: 'Negative crease along back', score: 4 },
      { label: 'Back is level (no crease and no positive crease)', score: 5 },
      { label: 'May have slight positive crease down back', score: 6 },
      { label: 'May have crease down back', score: 7 },
      { label: 'Crease down back', score: 8 },
      { label: 'Obvious deep crease down back', score: 9 },
    ],
  },
  tailhead: {
    name: 'Tailhead',
    description: 'Observe and palpate the tailhead area.',
    options: [
      { label: 'Tailhead and hip bones projecting prominently', score: 1 },
      { label: 'Tailhead prominent; hip bones easily discernible', score: 2 },
      { label: 'Tailhead prominent; individual vertebrae cannot be visually identified', score: 3 },
      { label: 'Prominence depends on conformation; fat can be felt', score: 4 },
      { label: 'Fat around tailhead beginning to feel spongy', score: 5 },
      { label: 'Fat around tailhead feels soft', score: 6 },
      { label: 'Fat around tailhead is soft', score: 7 },
      { label: 'Tailhead fat very soft', score: 8 },
      { label: 'Bulging fat around tailhead', score: 9 },
    ],
  },
}

interface Verdict {
  label: string
  range: string
  detail: string
  feedingGuidance: string
  tone: 'good' | 'underweight' | 'overweight' | 'critical'
}

function verdictForScore(score: number): Verdict {
  if (score < 3) {
    return {
      label: 'Very thin / poor',
      range: 'BCS 1-2',
      detail: 'Significant calorie deficit. Possible underlying cause: dental disease, parasite load, illness, insufficient forage access, social competition at the feeder.',
      feedingGuidance: 'Veterinary exam to rule out underlying cause before increasing feed. Increases should be gradual to avoid refeeding syndrome — a vet-supervised refeeding protocol is appropriate at BCS 1-2.',
      tone: 'critical',
    }
  }
  if (score < 4.5) {
    return {
      label: 'Thin',
      range: 'BCS 3-4',
      detail: 'Below optimal condition for most horses. Common in seniors, hard-keepers, lactating mares, and horses in heavy work without adequate calorie intake.',
      feedingGuidance: 'Increase forage first (more or higher-quality hay). Add a high-fat concentrate or beet pulp if forage alone is insufficient. Re-score in 4-6 weeks.',
      tone: 'underweight',
    }
  }
  if (score < 6.5) {
    return {
      label: 'Optimal / moderate',
      range: 'BCS 5-6',
      detail: 'The recommended range for most adult horses, including performance horses. BCS 5 is ideal for hard work; BCS 6 is fine for light or moderate work.',
      feedingGuidance: 'Maintain current ration. Recheck monthly during season changes when forage availability shifts.',
      tone: 'good',
    }
  }
  if (score < 8) {
    return {
      label: 'Overweight',
      range: 'BCS 7',
      detail: 'Increased risk for equine metabolic syndrome (EMS), insulin dysregulation, and laminitis — especially in ponies, easy-keeper breeds, and horses with limited turnout.',
      feedingGuidance: 'Reduce concentrate; use a slow-feeder hay net to extend forage time without overfeeding calories. Increase exercise. Test for insulin and ACTH if BCS persists at 7+. Consider muzzle for pasture grazing.',
      tone: 'overweight',
    }
  }
  return {
    label: 'Obese',
    range: 'BCS 8-9',
    detail: 'High laminitis risk. Significant equine metabolic syndrome / Cushing\'s (PPID) risk. Cresty neck score (CNS) should be assessed separately.',
    feedingGuidance: 'Veterinary consultation strongly recommended. Slow weight reduction (1% of body weight per month) using soaked hay, eliminated concentrates, and structured exercise. Test for insulin / ACTH / leptin.',
    tone: 'critical',
  }
}

const TONE_CLASSES: Record<Verdict['tone'], string> = {
  good: 'border-emerald-700/40 bg-emerald-950/30 text-emerald-200',
  underweight: 'border-amber-700/40 bg-amber-950/30 text-amber-200',
  overweight: 'border-amber-700/40 bg-amber-950/30 text-amber-200',
  critical: 'border-red-700/40 bg-red-950/30 text-red-200',
}

export function BodyConditionScoreCalculator() {
  const initial: Record<BodyArea, number> = { neck: 5, withers: 5, shoulder: 5, ribs: 5, loin: 5, tailhead: 5 }
  const [scores, setScores] = useState<Record<BodyArea, number>>(initial)

  const overall = useMemo(() => {
    const total = Object.values(scores).reduce((a, b) => a + b, 0)
    return Math.round((total / 6) * 10) / 10
  }, [scores])

  const verdict = verdictForScore(overall)

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-6">
        {(Object.entries(AREAS) as Array<[BodyArea, (typeof AREAS)[BodyArea]]>).map(([area, def]) => (
          <div key={area}>
            <label htmlFor={`bcs-${area}`} className="mb-1 block text-sm font-medium text-brand-text">
              {def.name}
            </label>
            <p className="mb-2 text-xs text-brand-text-muted">{def.description}</p>
            <select
              id={`bcs-${area}`}
              value={String(scores[area])}
              onChange={(e) => setScores({ ...scores, [area]: Number(e.target.value) })}
              className="w-full rounded border border-brand-border bg-brand-bg px-3 py-2 text-brand-text"
            >
              {def.options.map((opt) => (
                <option key={opt.label} value={opt.score}>
                  {opt.score} — {opt.label}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="rounded border border-brand-border bg-brand-bg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-muted">Overall BCS</p>
          <p className="mt-1 font-display text-4xl text-brand-text">{overall.toFixed(1)}</p>
          <p className="mt-1 text-xs text-brand-text-muted">Average of 6 body areas (Henneke 1983).</p>
        </div>
        <div className="rounded border border-brand-border bg-brand-bg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-muted">Condition</p>
          <p className="mt-1 font-display text-2xl text-brand-text">{verdict.label}</p>
          <p className="mt-1 text-xs text-brand-text-muted">{verdict.range}</p>
        </div>
      </div>

      <div className={`mt-6 rounded border p-4 ${TONE_CLASSES[verdict.tone]}`}>
        <p className="text-sm font-semibold">{verdict.detail}</p>
        <p className="mt-2 text-sm">
          <span className="font-semibold">Feeding guidance:</span> {verdict.feedingGuidance}
        </p>
      </div>

      <p className="mt-4 text-xs text-brand-text-muted">
        BCS is a husbandry tool, not a clinical diagnosis. For any score outside the 4-6 range — especially BCS 1-2 or 8-9 — work with a veterinarian on a feeding plan, and rule out underlying disease before changing the ration significantly.
      </p>
    </div>
  )
}
