'use client'

import { useMemo, useState } from 'react'

type FirstIngredient = 'whole-meat' | 'meat-meal' | 'by-product-meal' | 'grain-first' | 'corn-first'

const FIRST_INGREDIENT: Record<FirstIngredient, { label: string; note: string; score: number }> = {
  'whole-meat': { label: 'Whole meat (e.g. "chicken," "turkey")', note: 'Strong starting point; whole meat is ~70% water so meal-based foods can still be denser in protein per cup.', score: 4 },
  'meat-meal': { label: 'Named meat meal (e.g. "chicken meal," "turkey meal")', note: 'Highest protein density; meal is rendered, water-removed meat. Acceptable when source is named.', score: 5 },
  'by-product-meal': { label: 'Named by-product meal (e.g. "chicken by-product meal")', note: 'Acceptable as long as source is named; by-products include organ meat (high biological value).', score: 3 },
  'grain-first': { label: 'Grain (rice, oats, barley)', note: 'Inappropriate for an obligate carnivore. Ferrets cannot efficiently digest plant carbohydrates.', score: 1 },
  'corn-first': { label: 'Corn', note: 'Inappropriate for an obligate carnivore. Strongly associated with poor body condition and insulinoma risk in ferrets.', score: 0 },
}

interface Inputs {
  proteinPct: number
  fatPct: number
  fiberPct: number
  ashPct: number
  moisturePct: number
  firstIngredient: FirstIngredient
}

interface Verdict {
  overallScore: number
  label: string
  tone: 'good' | 'caution' | 'avoid'
  proteinNote: string
  fatNote: string
  fiberNote: string
  ashNote: string
  ingredientNote: string
}

function evaluate(inputs: Inputs): Verdict {
  // Targets per Lewington (Ferret Husbandry, Medicine and Surgery, 3rd ed.)
  // + Marshall Pet Products published guidance + AAFCO Cat Food Nutrient
  // Profiles (used as proxy — no AAFCO ferret profile exists).
  let score = FIRST_INGREDIENT[inputs.firstIngredient].score // 0-5

  const proteinNote = inputs.proteinPct >= 38
    ? 'Excellent — meets the 38-45% target for obligate carnivores.'
    : inputs.proteinPct >= 35
      ? 'Acceptable — meets the 35% AAFCO cat minimum (used as proxy) but lower end of the ferret target.'
      : 'Insufficient — below the 35% minimum for an obligate carnivore.'
  if (inputs.proteinPct >= 38) score += 5
  else if (inputs.proteinPct >= 35) score += 3
  else score += 0

  const fatNote = inputs.fatPct >= 18 && inputs.fatPct <= 25
    ? 'In target range (18-25%) for ferret kibble.'
    : inputs.fatPct >= 15 && inputs.fatPct < 18
      ? 'Slightly low — most ferret keepers target 18%+.'
      : inputs.fatPct > 25
        ? 'High — may contribute to weight gain in less-active ferrets.'
        : 'Insufficient — below recommended fat for ferret kibble.'
  if (inputs.fatPct >= 18 && inputs.fatPct <= 25) score += 4
  else if (inputs.fatPct >= 15) score += 2
  else score += 0

  const fiberNote = inputs.fiberPct <= 3
    ? 'Low fiber, appropriate for ferret short GI tract.'
    : inputs.fiberPct <= 5
      ? 'Slightly high — most ferret keepers target ≤3% fiber.'
      : 'High fiber — inappropriate for an obligate carnivore.'
  if (inputs.fiberPct <= 3) score += 3
  else if (inputs.fiberPct <= 5) score += 1
  else score += 0

  const ashNote = inputs.ashPct <= 7
    ? 'Acceptable ash content.'
    : 'Elevated ash — associated with urinary issues in some ferrets.'
  if (inputs.ashPct <= 7) score += 1

  const ingredientNote = FIRST_INGREDIENT[inputs.firstIngredient].note

  // Score band: max ~18 (5 ingredient + 5 protein + 4 fat + 3 fiber + 1 ash).
  let tone: Verdict['tone']
  let label: string
  if (score >= 14) {
    tone = 'good'
    label = 'Appropriate for ferrets'
  } else if (score >= 9) {
    tone = 'caution'
    label = 'Marginal — acceptable as part of a varied diet'
  } else {
    tone = 'avoid'
    label = 'Not appropriate for ferrets'
  }

  return { overallScore: score, label, tone, proteinNote, fatNote, fiberNote, ashNote, ingredientNote }
}

const TONE_CLASSES: Record<Verdict['tone'], string> = {
  good: 'border-emerald-700/40 bg-emerald-950/30 text-emerald-200',
  caution: 'border-amber-700/40 bg-amber-950/30 text-amber-200',
  avoid: 'border-red-700/40 bg-red-950/30 text-red-200',
}

export function FerretFoodEvaluator() {
  const [inputs, setInputs] = useState<Inputs>({
    proteinPct: 38,
    fatPct: 20,
    fiberPct: 2.5,
    ashPct: 7,
    moisturePct: 10,
    firstIngredient: 'meat-meal',
  })

  const verdict = useMemo(() => evaluate(inputs), [inputs])

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <p className="mb-4 text-sm text-brand-text-muted">
        Enter the guaranteed analysis panel from the back of the bag, plus the first ingredient from the ingredient list. The evaluator scores the food against published ferret-husbandry targets.
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="ff-ingredient" className="mb-1 block text-sm font-medium text-brand-text-muted">First ingredient</label>
          <select
            id="ff-ingredient"
            value={inputs.firstIngredient}
            onChange={(e) => setInputs({ ...inputs, firstIngredient: e.target.value as FirstIngredient })}
            className="w-full rounded border border-brand-border bg-brand-bg px-3 py-2 text-brand-text"
          >
            {(Object.entries(FIRST_INGREDIENT) as Array<[FirstIngredient, (typeof FIRST_INGREDIENT)[FirstIngredient]]>).map(([k, v]) => (
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>
          <p className="mt-1 text-xs text-brand-text-muted">{FIRST_INGREDIENT[inputs.firstIngredient].note}</p>
        </div>

        <div>
          <label htmlFor="ff-protein" className="mb-1 block text-sm font-medium text-brand-text-muted">Crude protein (%)</label>
          <input id="ff-protein" type="number" min={10} max={70} step={0.5} value={inputs.proteinPct}
            onChange={(e) => setInputs({ ...inputs, proteinPct: Math.max(0, Number(e.target.value) || 0) })}
            className="w-full rounded border border-brand-border bg-brand-bg px-3 py-2 text-brand-text" />
          <p className="mt-1 text-xs text-brand-text-muted">Target: 38-45%. Minimum: 35%.</p>
        </div>

        <div>
          <label htmlFor="ff-fat" className="mb-1 block text-sm font-medium text-brand-text-muted">Crude fat (%)</label>
          <input id="ff-fat" type="number" min={5} max={50} step={0.5} value={inputs.fatPct}
            onChange={(e) => setInputs({ ...inputs, fatPct: Math.max(0, Number(e.target.value) || 0) })}
            className="w-full rounded border border-brand-border bg-brand-bg px-3 py-2 text-brand-text" />
          <p className="mt-1 text-xs text-brand-text-muted">Target: 18-25%.</p>
        </div>

        <div>
          <label htmlFor="ff-fiber" className="mb-1 block text-sm font-medium text-brand-text-muted">Crude fiber (%)</label>
          <input id="ff-fiber" type="number" min={0} max={20} step={0.5} value={inputs.fiberPct}
            onChange={(e) => setInputs({ ...inputs, fiberPct: Math.max(0, Number(e.target.value) || 0) })}
            className="w-full rounded border border-brand-border bg-brand-bg px-3 py-2 text-brand-text" />
          <p className="mt-1 text-xs text-brand-text-muted">Target: ≤3%. Ferrets are obligate carnivores with a short GI tract.</p>
        </div>

        <div>
          <label htmlFor="ff-ash" className="mb-1 block text-sm font-medium text-brand-text-muted">Ash (%)</label>
          <input id="ff-ash" type="number" min={0} max={15} step={0.5} value={inputs.ashPct}
            onChange={(e) => setInputs({ ...inputs, ashPct: Math.max(0, Number(e.target.value) || 0) })}
            className="w-full rounded border border-brand-border bg-brand-bg px-3 py-2 text-brand-text" />
          <p className="mt-1 text-xs text-brand-text-muted">Target: ≤7%.</p>
        </div>

        <div>
          <label htmlFor="ff-moisture" className="mb-1 block text-sm font-medium text-brand-text-muted">Moisture (%)</label>
          <input id="ff-moisture" type="number" min={0} max={90} step={0.5} value={inputs.moisturePct}
            onChange={(e) => setInputs({ ...inputs, moisturePct: Math.max(0, Number(e.target.value) || 0) })}
            className="w-full rounded border border-brand-border bg-brand-bg px-3 py-2 text-brand-text" />
          <p className="mt-1 text-xs text-brand-text-muted">Typical kibble: 8-12%. Wet food: 70-80%. Reference only.</p>
        </div>
      </div>

      <div className={`mt-6 rounded border p-4 ${TONE_CLASSES[verdict.tone]}`}>
        <p className="text-sm font-semibold uppercase tracking-wide">Verdict</p>
        <p className="mt-1 font-display text-2xl">{verdict.label}</p>
        <p className="mt-1 text-xs opacity-80">Score: {verdict.overallScore} / 18</p>
      </div>

      <div className="mt-6 rounded border border-brand-border bg-brand-bg p-4 text-sm text-brand-text-muted">
        <p className="font-semibold text-brand-text">Per-nutrient notes</p>
        <ul className="mt-2 space-y-1">
          <li><strong>First ingredient:</strong> {verdict.ingredientNote}</li>
          <li><strong>Protein:</strong> {verdict.proteinNote}</li>
          <li><strong>Fat:</strong> {verdict.fatNote}</li>
          <li><strong>Fiber:</strong> {verdict.fiberNote}</li>
          <li><strong>Ash:</strong> {verdict.ashNote}</li>
        </ul>
      </div>

      <p className="mt-4 text-xs text-brand-text-muted">
        Targets are drawn from Lewington&apos;s <em>Ferret Husbandry, Medicine and Surgery</em>, Marshall Pet Products published guidance, and the AAFCO Cat Food Nutrient Profiles (used as proxy — no AAFCO ferret profile exists). For an actual feeding plan, work with an exotics-experienced veterinarian.
      </p>
    </div>
  )
}
