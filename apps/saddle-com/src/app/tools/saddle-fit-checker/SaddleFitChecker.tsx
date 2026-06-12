'use client'

import { useMemo, useState } from 'react'

/**
 * Saddle Fit Checker — guided self-assessment.
 *
 * Educational only. Not a substitute for a qualified saddle fitter or a
 * veterinary exam. Every "poor fit" path defers to a qualified Society of
 * Master Saddlers / Master Saddlers Association fitter and, where the horse
 * shows pain/behavioural signs, to a veterinary exam. No clinical claims.
 */

type Answer = 'good' | 'borderline' | 'poor'

interface Question {
  id: string
  label: string
  help: string
  options: { value: Answer; label: string }[]
}

const QUESTIONS: Question[] = [
  {
    id: 'wither',
    label: 'Wither clearance (saddle on, girthed, rider mounted)',
    help: 'Slide your fingers between the pommel and the withers with a rider in the saddle. The rule of thumb is 2–3 fingers of vertical clearance, and clearance side-to-side as well.',
    options: [
      { value: 'good', label: '2–3 fingers clear, no contact under a rider' },
      { value: 'borderline', label: 'Tight — about 1 finger, or only clear unmounted' },
      { value: 'poor', label: 'Pommel sits on the withers / touches under a rider' },
    ],
  },
  {
    id: 'panel',
    label: 'Panel contact along the back',
    help: 'Run a flat hand under the panel from front to back. Even, full-length contact spreads load. Gaps (bridging) or a rocking pivot point concentrate pressure.',
    options: [
      { value: 'good', label: 'Even, full-length contact both sides' },
      { value: 'borderline', label: 'Slightly uneven, or light in one spot' },
      { value: 'poor', label: 'Bridges (gap in the middle) or rocks on a pivot' },
    ],
  },
  {
    id: 'gullet',
    label: 'Gullet width over the spine',
    help: 'Look down the gullet channel from front and back. It should clear the spinous processes the whole length, with daylight either side of the spine.',
    options: [
      { value: 'good', label: 'Channel clears the spine its full length' },
      { value: 'borderline', label: 'Narrow in places / panels close to the spine' },
      { value: 'poor', label: 'Panels press on the spine (no daylight)' },
    ],
  },
  {
    id: 'billet',
    label: 'Billet / girth-line position',
    help: 'Girthed up, the billets should hang roughly perpendicular to the ground, settling into the horse\'s natural girth groove (about a hand\'s width behind the elbow) without dragging the saddle forward or back.',
    options: [
      { value: 'good', label: 'Billets hang straight; saddle stays put' },
      { value: 'borderline', label: 'Billets angle slightly; minor drift' },
      { value: 'poor', label: 'Billets pull hard forward/back; saddle shifts' },
    ],
  },
  {
    id: 'balance',
    label: 'Balance / level seat',
    help: 'Look at the saddle from the side, unmounted on a level surface. The deepest point of the seat should sit level and central, not tipped to the cantle (pommel high) or to the pommel (cantle high).',
    options: [
      { value: 'good', label: 'Seat is level; deepest point central' },
      { value: 'borderline', label: 'Slightly off level (pommel or cantle high)' },
      { value: 'poor', label: 'Clearly tipped; rider thrown back or forward' },
    ],
  },
  {
    id: 'behaviour',
    label: 'Movement / behaviour signs',
    help: 'Consider the horse\'s response to tacking up and work: cold-backed (dipping or tensing as the saddle goes on), girthy (pinning ears, nipping at girthing), bucking, hollowing, reluctance to go forward, or dry/ruffled patches in the sweat pattern after work.',
    options: [
      { value: 'good', label: 'Relaxed to tack up; works freely; even sweat pattern' },
      { value: 'borderline', label: 'Occasionally girthy or fussy; mild resistance' },
      { value: 'poor', label: 'Cold-backed, bucking, or clear pain/behaviour signs' },
    ],
  },
]

interface Outcome {
  band: 'likely-fits' | 'check-signs' | 'poor-fit'
  heading: string
  summary: string
  nextSteps: string[]
}

const POOR_LABELS: Record<string, string> = {
  wither: 'wither clearance',
  panel: 'panel contact',
  gullet: 'gullet width over the spine',
  billet: 'billet / girth-line position',
  balance: 'balance / level seat',
  behaviour: 'movement / behaviour signs',
}

function assess(answers: Record<string, Answer>): Outcome {
  const values = QUESTIONS.map((q) => answers[q.id])
  const poor = QUESTIONS.filter((q) => answers[q.id] === 'poor')
  const borderline = values.filter((v) => v === 'borderline').length
  const behaviourPoor = answers.behaviour === 'poor'

  // Any "poor" answer, or a behaviour pain signal, routes to the poor-fit path.
  if (poor.length > 0) {
    const flagged = poor.map((q) => POOR_LABELS[q.id]).join(', ')
    const steps = [
      'Stop riding in this saddle until it is reassessed — riding through a poor fit can worsen back soreness.',
      'Book a qualified saddle fitter (Society of Master Saddlers / Master Saddlers Association) to assess fit statically and under saddle on the horse.',
      `Show the fitter the specific signs you flagged: ${flagged}.`,
    ]
    if (behaviourPoor) {
      steps.unshift(
        'Persistent back soreness, cold-backed behaviour, bucking, or pain on tacking up warrants a veterinary exam to rule out underlying causes — book the vet alongside the fitter.'
      )
    }
    return {
      band: 'poor-fit',
      heading: 'Signs of poor fit — consult a professional',
      summary:
        'One or more answers point to a fit problem that an off-the-rack adjustment is unlikely to solve on its own. This is educational guidance only, not a diagnosis.',
      nextSteps: steps,
    }
  }

  if (borderline >= 2) {
    return {
      band: 'check-signs',
      heading: 'Borderline — check these signs',
      summary:
        'Nothing here reads as clearly poor, but several answers are borderline. Borderline fit often drifts into a real problem as the horse changes shape with work, season, or age.',
      nextSteps: [
        'Re-check the borderline items with the horse warmed up and a rider mounted — fit can look fine unmounted and change under load.',
        'Photograph the saddle from the side (for balance) and down the gullet (for spinal clearance) to compare over time.',
        'Schedule a fit review with a qualified saddle fitter (SMS / MSA) before buying a new saddle or pad to "fix" a borderline fit.',
        'If the horse becomes girthy, cold-backed, or sore, escalate to a fitter and, for persistent soreness, a veterinary exam.',
      ],
    }
  }

  return {
    band: 'likely-fits',
    heading: 'Likely fits — keep checking routinely',
    summary:
      'Your answers are consistent with a saddle that fits at the moment. Fit is not permanent: horses change shape with fitness, season, and age, so this is a snapshot, not a guarantee.',
    nextSteps: [
      'Re-run this check, and the printable 12-point checklist, at every season change and whenever the topline visibly changes.',
      'Keep an eye on the sweat pattern after work — dry or ruffled patches are an early warning even when the static fit looks good.',
      'Have a qualified saddle fitter (SMS / MSA) review fit roughly once or twice a year, or sooner after weight or muscle change.',
    ],
  }
}

const BAND_TONE: Record<Outcome['band'], string> = {
  'likely-fits': 'border-emerald-700/50 bg-emerald-950/30 text-emerald-100',
  'check-signs': 'border-amber-700/50 bg-amber-950/30 text-amber-100',
  'poor-fit': 'border-red-700/50 bg-red-950/30 text-red-100',
}

export function SaddleFitChecker() {
  const [answers, setAnswers] = useState<Record<string, Answer>>({})
  const [submitted, setSubmitted] = useState(false)

  const allAnswered = QUESTIONS.every((q) => answers[q.id])
  const outcome = useMemo(
    () => (allAnswered ? assess(answers) : null),
    [answers, allAnswered]
  )

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <div className="space-y-6">
        {QUESTIONS.map((q, i) => (
          <fieldset key={q.id} className="border-0 m-0 p-0">
            <legend className="mb-1 text-sm font-semibold text-brand-text-dark">
              {i + 1}. {q.label}
            </legend>
            <p className="mb-3 text-xs text-brand-text-mid">{q.help}</p>
            <div className="space-y-2">
              {q.options.map((opt) => {
                const checked = answers[q.id] === opt.value
                return (
                  <label
                    key={opt.value}
                    className={`flex cursor-pointer items-start gap-3 rounded border p-3 text-sm transition ${
                      checked
                        ? 'border-brand-primary bg-brand-primary/10 text-brand-text-dark'
                        : 'border-brand-border text-brand-text-mid hover:border-brand-primary/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name={q.id}
                      value={opt.value}
                      checked={checked}
                      onChange={() =>
                        setAnswers((prev) => ({ ...prev, [q.id]: opt.value }))
                      }
                      className="mt-0.5 accent-brand-primary"
                    />
                    <span>{opt.label}</span>
                  </label>
                )
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setSubmitted(true)}
        disabled={!allAnswered}
        className="mt-6 w-full rounded bg-brand-primary px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white transition disabled:cursor-not-allowed disabled:opacity-40"
      >
        {allAnswered ? 'Read my fit assessment' : 'Answer every question to continue'}
      </button>

      {submitted && outcome && (
        <div className={`mt-6 rounded border p-4 ${BAND_TONE[outcome.band]}`}>
          <p className="text-base font-semibold">{outcome.heading}</p>
          <p className="mt-2 text-sm">{outcome.summary}</p>
          <p className="mt-3 text-sm font-semibold">What to do next:</p>
          <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
            {outcome.nextSteps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ul>
        </div>
      )}

      <p className="mt-4 text-xs text-brand-text-mid">
        This self-assessment is educational and does not replace a qualified saddle
        fitter or a veterinary exam. Persistent back soreness or pain behaviour
        warrants a veterinary exam. Saddle.com Editorial does not perform fittings
        or diagnose horses.
      </p>
    </div>
  )
}
