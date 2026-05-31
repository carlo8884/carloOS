'use client'

import { useMemo, useState } from 'react'

type Species = 'dog' | 'cat'
type RedFlagId =
  | 'breathing-difficulty'
  | 'repeated-vomiting'
  | 'blood-vomit-stool'
  | 'inability-to-urinate'
  | 'severe-lethargy'
  | 'pale-gums'
  | 'distended-abdomen'
  | 'suspected-toxin'
  | 'severe-trauma'
  | 'sustained-seizure'
  | 'eye-injury'
  | 'heatstroke-signs'

interface RedFlag {
  id: RedFlagId
  label: string
  description: string
  /** If true, presence of this single sign warrants ER regardless of count. */
  immediateEr: boolean
}

const RED_FLAGS: RedFlag[] = [
  { id: 'breathing-difficulty', label: 'Difficulty breathing or open-mouth breathing', description: 'Labored breathing, panting at rest, gasping, or open-mouth breathing in a cat. Distinct from normal panting after exercise.', immediateEr: true },
  { id: 'suspected-toxin', label: 'Suspected toxin ingestion', description: 'Known or suspected ingestion of chocolate, xylitol, grapes, raisins, lilies (cats), antifreeze, medication, or any unknown substance.', immediateEr: true },
  { id: 'sustained-seizure', label: 'Seizure lasting >1 minute or cluster seizures', description: 'A single seizure under a minute can be monitored if the pet recovers fully; a longer seizure or multiple seizures in 24 hours is an ER situation.', immediateEr: true },
  { id: 'severe-trauma', label: 'Recent severe trauma (hit by car, fall, attack)', description: 'Even if the pet seems okay externally, internal injuries can develop over hours.', immediateEr: true },
  { id: 'heatstroke-signs', label: 'Heatstroke signs in a hot environment', description: 'Heavy panting + collapse, vomiting, weakness after time in a hot car or yard. A core temperature emergency.', immediateEr: true },
  { id: 'inability-to-urinate', label: 'Cannot urinate (especially male cats)', description: 'Repeated attempts to urinate with little or no output. A blocked male cat is a same-hour emergency.', immediateEr: true },
  { id: 'distended-abdomen', label: 'Distended, hard, painful abdomen', description: 'In large-breed dogs especially, suggests possible bloat (gastric dilatation-volvulus, GDV). Time-critical.', immediateEr: true },
  { id: 'pale-gums', label: 'Pale, white, blue, or yellow gums', description: 'Normal gums are pink. Pale = anemia / shock. Blue = oxygen. Yellow = liver. All warrant urgent assessment.', immediateEr: true },
  { id: 'blood-vomit-stool', label: 'Blood in vomit, stool, or urine', description: 'Small amounts of red blood in stool with normal energy can be monitored short-term; black tarry stool, repeated bloody vomit, or red urine are urgent.', immediateEr: false },
  { id: 'repeated-vomiting', label: 'Vomiting 3+ times in 24 hours', description: 'Or vomiting + diarrhea together, or vomiting + lethargy. Dehydration risk and possible underlying cause.', immediateEr: false },
  { id: 'severe-lethargy', label: 'Severe lethargy, weakness, or collapse', description: 'Pet won\'t stand, won\'t respond to favorite stimuli, or collapses. Distinct from a quiet day after exercise.', immediateEr: false },
  { id: 'eye-injury', label: 'Eye injury, sudden cloudiness, or visible pain', description: 'Eye emergencies can permanently affect vision within hours. Squinting + pawing at eye + cloudiness all warrant same-day care.', immediateEr: false },
]

interface Verdict {
  tone: 'er' | 'urgent' | 'today' | 'monitor'
  label: string
  detail: string
  callToAction: string
}

function getVerdict(species: Species, checked: Set<RedFlagId>): Verdict {
  const hasImmediateEr = Array.from(checked).some((id) => RED_FLAGS.find((f) => f.id === id)?.immediateEr)
  if (hasImmediateEr) {
    return {
      tone: 'er',
      label: 'Emergency — go to the vet ER now',
      detail: 'One or more signs you selected warrant immediate emergency care. Do not wait to see if it resolves.',
      callToAction: 'Call your regular vet on the way if you can, or go directly to the nearest 24-hour veterinary emergency hospital. Bring any suspected ingested substance, packaging, or plant material with you.',
    }
  }
  if (checked.size >= 2) {
    return {
      tone: 'urgent',
      label: 'Urgent — same-day appointment',
      detail: 'Multiple non-critical warning signs together warrant same-day veterinary assessment.',
      callToAction: 'Call your regular vet now to request a same-day or urgent-care appointment. If they cannot fit you in, call the nearest 24-hour ER for guidance.',
    }
  }
  if (checked.size === 1) {
    return {
      tone: 'today',
      label: 'Call your vet today',
      detail: 'A single non-critical warning sign warrants a phone call to your regular vet for guidance — even if you decide to monitor at home.',
      callToAction: 'Call your regular vet today. Describe what you\'re seeing, when it started, and whether it\'s getting better or worse. Your vet will advise whether to bring the pet in or continue monitoring.',
    }
  }
  return {
    tone: 'monitor',
    label: 'No emergency signs flagged — continue monitoring',
    detail: 'None of the listed emergency or urgent warning signs are present. Routine monitoring at home is reasonable.',
    callToAction: 'Continue to monitor over the next 24 hours. If new signs appear, re-run this checklist or call your vet for guidance. Pet owner intuition matters — if something feels wrong, call your vet regardless.',
  }
}

const TONE: Record<Verdict['tone'], { class: string; emoji: string }> = {
  er: { class: 'border-red-700/50 bg-red-950/40 text-red-100', emoji: '🚨' },
  urgent: { class: 'border-amber-700/50 bg-amber-950/40 text-amber-100', emoji: '⚠️' },
  today: { class: 'border-amber-700/40 bg-amber-950/30 text-amber-200', emoji: '📞' },
  monitor: { class: 'border-emerald-700/40 bg-emerald-950/30 text-emerald-200', emoji: '👀' },
}

export function SymptomTriageChecklist() {
  const [species, setSpecies] = useState<Species>('dog')
  const [checked, setChecked] = useState<Set<RedFlagId>>(new Set())

  function toggle(id: RedFlagId) {
    const next = new Set(checked)
    if (next.has(id)) next.delete(id); else next.add(id)
    setChecked(next)
  }

  const verdict = useMemo(() => getVerdict(species, checked), [species, checked])

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
            {s === 'dog' ? 'Dog' : 'Cat'}
          </button>
        ))}
      </div>

      <p className="mb-4 text-sm text-brand-text-mid">
        Check every sign you can answer &quot;yes&quot; to in the last 24 hours. The checklist is a triage aid sourced from published veterinary emergency guidance — not a diagnosis.
      </p>

      <ul className="space-y-3">
        {RED_FLAGS.map((flag) => {
          const isChecked = checked.has(flag.id)
          return (
            <li key={flag.id}>
              <label className={`flex cursor-pointer items-start gap-3 rounded border p-3 transition ${isChecked ? 'border-brand-primary bg-brand-surface' : 'border-brand-border bg-brand-surface/50 hover:border-brand-text-muted'}`}>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggle(flag.id)}
                  className="mt-1 h-4 w-4 flex-shrink-0"
                />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-brand-text-dark">
                    {flag.label}
                    {flag.immediateEr && <span className="ml-2 rounded bg-red-900/60 px-1.5 py-0.5 text-2xs font-bold uppercase tracking-wide text-red-200">ER sign</span>}
                  </p>
                  <p className="mt-1 text-xs text-brand-text-mid">{flag.description}</p>
                </div>
              </label>
            </li>
          )
        })}
      </ul>

      <div className={`mt-6 rounded border-2 p-4 ${TONE[verdict.tone].class}`}>
        <p className="text-sm font-semibold uppercase tracking-wide opacity-90">{TONE[verdict.tone].emoji} Triage verdict</p>
        <p className="mt-1 font-display text-xl">{verdict.label}</p>
        <p className="mt-2 text-sm">{verdict.detail}</p>
        <p className="mt-2 text-sm font-semibold">{verdict.callToAction}</p>
      </div>

      <p className="mt-4 text-xs text-brand-text-mid">
        This is an owner triage aid sourced from published veterinary emergency guidance. It is not a diagnosis and does not replace a veterinary examination. When in doubt, call your vet — they will not be annoyed by a phone call about a sick pet.
      </p>
    </div>
  )
}
