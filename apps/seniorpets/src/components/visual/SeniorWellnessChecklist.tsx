'use client'

import { useMemo, useState } from 'react'

type Species = 'dog' | 'cat'
type SignId =
  | 'weight-loss'
  | 'excessive-thirst'
  | 'urination-changes'
  | 'appetite-decline'
  | 'mobility-decline'
  | 'cough-breathing'
  | 'lumps-masses'
  | 'dental-odor'
  | 'cognitive-changes'
  | 'vision-changes'
  | 'coat-changes'
  | 'behavior-changes'

interface SeniorSign {
  id: SignId
  label: string
  description: string
}

const SIGNS: SeniorSign[] = [
  { id: 'weight-loss', label: 'Unintended weight loss', description: 'Visible loss of muscle over the spine or rump, or a measured drop of >5% in a month or >10% in six months. Often the earliest senior change.' },
  { id: 'excessive-thirst', label: 'Increased water intake', description: 'Drinking noticeably more than usual; emptying the water bowl faster; seeking water from new sources. Common early sign of kidney disease, diabetes, or Cushing\'s.' },
  { id: 'urination-changes', label: 'Increased urination or new indoor accidents', description: 'Larger or more frequent urination, new accidents indoors in a previously trained pet, or straining to urinate. Often pairs with increased water intake.' },
  { id: 'appetite-decline', label: 'Eating less than usual', description: 'Less interest in food, slower eating, or skipping meals. Distinct from being picky — this is a sustained decrease.' },
  { id: 'mobility-decline', label: 'Difficulty rising, climbing stairs, or jumping', description: 'Slowing down, hesitating at stairs, struggling to rise after rest, stiff after exercise. Osteoarthritis is common and well-managed when diagnosed.' },
  { id: 'cough-breathing', label: 'New cough or labored breathing', description: 'Any new persistent cough, exercise-intolerance, or breathing changes warrants vet assessment. Heart disease and laryngeal issues commonly emerge in senior pets.' },
  { id: 'lumps-masses', label: 'New or changing lumps under the skin', description: 'Any new lump or growing lump should be examined by a vet. Most are benign; the ones that aren\'t are best caught early.' },
  { id: 'dental-odor', label: 'Bad breath, pawing at mouth, or drooling', description: 'Periodontal disease is one of the most common senior-pet conditions and one of the most under-treated. Dental odor is the early signal.' },
  { id: 'cognitive-changes', label: 'Disorientation, sundowning, or nighttime vocalizing', description: 'Getting lost in familiar rooms, staring at walls, restlessness or vocalizing at night, accidents in previously trained pets. Cognitive dysfunction syndrome (CDS) is treatable.' },
  { id: 'vision-changes', label: 'Cloudy eyes or bumping into things', description: 'Mild lens cloudiness (nuclear sclerosis) is age-normal; rapidly progressing cloudiness (cataracts) is not. Sudden vision loss or eye redness is urgent.' },
  { id: 'coat-changes', label: 'Coat changes — matted, oily, dull, or excessive shedding', description: 'A senior pet\'s coat reflects whole-body health. Endocrine disorders (hypothyroidism, Cushing\'s) and nutritional issues both show here.' },
  { id: 'behavior-changes', label: 'Behavior changes — withdrawal, irritability, restlessness', description: 'Pain often shows as behavior change before it shows as obvious limping. A previously sociable senior who is withdrawing deserves a vet check.' },
]

interface Verdict {
  tone: 'this-week' | 'next-visit' | 'monitor' | 'routine'
  label: string
  detail: string
  callToAction: string
}

function getVerdict(count: number): Verdict {
  if (count >= 4) {
    return {
      tone: 'this-week',
      label: 'Schedule a senior wellness exam this week',
      detail: 'Four or more senior change signs at once warrant a prompt vet visit rather than waiting for the annual exam.',
      callToAction: 'Call your vet now and request a senior wellness exam with bloodwork (CBC + chemistry + urinalysis at minimum, T4 for older cats, blood pressure for dogs and cats). Bring this checklist with you — concrete signs help the vet build the workup.',
    }
  }
  if (count >= 2) {
    return {
      tone: 'next-visit',
      label: 'Bring up at the next regular visit + ask about bloodwork',
      detail: 'Two or three senior change signs is the right time to schedule a senior wellness panel even before the annual exam.',
      callToAction: 'Call your vet to schedule a senior wellness exam at your next reasonable opportunity (within 2-4 weeks). Ask specifically about senior bloodwork — many practices have a discounted senior panel that catches kidney, liver, thyroid, and diabetes signals before they become obvious clinically.',
    }
  }
  if (count === 1) {
    return {
      tone: 'monitor',
      label: 'Mention to your vet + monitor for 30 days',
      detail: 'A single senior change sign isn\'t urgent but is worth raising. Track it over 30 days.',
      callToAction: 'Call your vet next time you\'re scheduling anyway; describe what you\'ve noticed. If the sign worsens or new signs appear in the next 30 days, re-run this checklist and respond to the higher count.',
    }
  }
  return {
    tone: 'routine',
    label: 'Routine annual senior exam is appropriate',
    detail: 'None of the listed senior change signs are present. Routine senior care is fine.',
    callToAction: 'Continue with annual or twice-yearly senior wellness exams (twice yearly is recommended for pets over 7 years old in dogs and over 10 in cats). Re-run this checklist any time you notice a change.',
  }
}

const TONE: Record<Verdict['tone'], { class: string; emoji: string }> = {
  'this-week': { class: 'border-red-700/50 bg-red-950/40 text-red-100', emoji: '📅' },
  'next-visit': { class: 'border-amber-700/50 bg-amber-950/40 text-amber-100', emoji: '🩺' },
  monitor: { class: 'border-amber-700/40 bg-amber-950/30 text-amber-200', emoji: '👀' },
  routine: { class: 'border-emerald-700/40 bg-emerald-950/30 text-emerald-200', emoji: '✅' },
}

export function SeniorWellnessChecklist() {
  const [species, setSpecies] = useState<Species>('dog')
  const [checked, setChecked] = useState<Set<SignId>>(new Set())

  function toggle(id: SignId) {
    const next = new Set(checked)
    if (next.has(id)) next.delete(id); else next.add(id)
    setChecked(next)
  }

  const verdict = useMemo(() => getVerdict(checked.size), [checked.size])

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <div className="mb-6 flex gap-2 rounded bg-brand-surface p-1" role="tablist" aria-label="Species">
        {(['dog', 'cat'] as Species[]).map((s) => (
          <button
            key={s}
            role="tab"
            aria-selected={species === s}
            onClick={() => setSpecies(s)}
            className={`flex-1 rounded px-4 py-2 text-sm font-semibold uppercase tracking-wide transition ${species === s ? 'bg-brand-primary text-white' : 'text-brand-text-mid hover:text-brand-text-dark'}`}
          >
            {s === 'dog' ? 'Senior dog (7+ years)' : 'Senior cat (10+ years)'}
          </button>
        ))}
      </div>

      <p className="mb-4 text-sm text-brand-text-mid">
        Check every sign you can answer &quot;yes&quot; to in the last 1-3 months. The count routes to one of four wellness-visit timings sourced from published senior-pet veterinary references.
      </p>

      <ul className="space-y-3">
        {SIGNS.map((sign) => {
          const isChecked = checked.has(sign.id)
          return (
            <li key={sign.id}>
              <label className={`flex cursor-pointer items-start gap-3 rounded border p-3 transition ${isChecked ? 'border-brand-primary bg-brand-surface' : 'border-brand-border bg-brand-surface/50 hover:border-brand-text-muted'}`}>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggle(sign.id)}
                  className="mt-1 h-4 w-4 flex-shrink-0"
                />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-brand-text-dark">{sign.label}</p>
                  <p className="mt-1 text-xs text-brand-text-mid">{sign.description}</p>
                </div>
              </label>
            </li>
          )
        })}
      </ul>

      <div className={`mt-6 rounded border-2 p-4 ${TONE[verdict.tone].class}`}>
        <p className="text-sm font-semibold uppercase tracking-wide opacity-90">{TONE[verdict.tone].emoji} {checked.size} of {SIGNS.length} signs</p>
        <p className="mt-1 font-display text-xl">{verdict.label}</p>
        <p className="mt-2 text-sm">{verdict.detail}</p>
        <p className="mt-2 text-sm font-semibold">{verdict.callToAction}</p>
      </div>

      <p className="mt-4 text-xs text-brand-text-mid">
        Owner reference only. Senior pets can decline rapidly, and a single observable sign sometimes reflects an underlying condition that warrants more urgency than the count suggests. When in doubt, call your vet.
      </p>
    </div>
  )
}
