'use client'

/**
 * "Is This a Cat Emergency?" triage helper -- /tools/is-this-a-cat-emergency
 *
 * Client component. The owner selects the sign(s) they are seeing; the tool
 * returns a CONSERVATIVE urgency verdict built entirely from
 * data/cat-symptom-signs. It is a triage AID, NOT a diagnosis tool.
 *
 * Verdict = highest-severity tier among selected signs:
 *   - any `emergency` sign        -> GO NOW (red)
 *   - all `urgent`, none emergency -> SAME-DAY VET (amber)
 *   - ONLY monitor-eligible signs (10/14) -> MONITOR CLOSELY (neutral) +
 *     hard escalation line
 *   - nothing selected            -> pre-input (no fabricated verdict)
 * Mixed selections ALWAYS resolve UPWARD. There is no "all clear" verdict.
 */

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { SIGNS, STYLES, MONITOR_ELIGIBLE, type Sign } from '../../../data/cat-symptom-signs'

type Tier = 'go-now' | 'same-day' | 'monitor'

interface Verdict {
  tier: Tier
  eyebrow: string
  headline: string
  lead: string
}

const ASPCA = '888-426-4435'

function deriveVerdict(selected: Set<string>): Verdict | null {
  if (selected.size === 0) return null

  const picked = SIGNS.filter((s) => selected.has(s.num))
  const hasEmergency = picked.some((s) => s.level === 'emergency')

  if (hasEmergency) {
    return {
      tier: 'go-now',
      eyebrow: 'Go now',
      headline: 'These signs can be a life-threatening emergency. Go to an emergency vet now.',
      lead: `Do not wait for another symptom. If you cannot reach a clinic, or you suspect poisoning, call ASPCA Animal Poison Control at ${ASPCA} on the way. When in doubt, seek care now.`,
    }
  }

  // No emergency signs selected -> everything is urgent.
  // MONITOR only if EVERY selected sign is monitor-eligible (10/14).
  const allMonitorEligible = picked.every((s) => MONITOR_ELIGIBLE.has(s.num))

  if (allMonitorEligible) {
    return {
      tier: 'monitor',
      eyebrow: 'Monitor closely',
      headline: 'It may be reasonable to monitor for a short window — but stay close.',
      lead: 'For a single mild episode in an otherwise bright cat that is still drinking and using the box, watching closely for a short window can be reasonable. Call your vet — or your nearest emergency clinic — if it persists, worsens, repeats, or you are unsure. Cats escalate faster than dogs. When in doubt, seek care now.',
    }
  }

  return {
    tier: 'same-day',
    eyebrow: 'Same-day vet',
    headline: 'See a vet today — sooner if it worsens.',
    lead: `These signs warrant veterinary attention within 24 hours, or sooner if anything worsens. If you are unsure, call your vet or your nearest emergency clinic now — when in doubt, seek care now.`,
  }
}

const TIER_STYLE: Record<Tier, { bg: string; border: string; accent: string; text: string }> = {
  'go-now':   { bg: 'rgba(200,74,42,0.07)',  border: 'rgba(200,74,42,0.40)',  accent: '#C84A2A', text: '#1A0E08' },
  'same-day': { bg: 'rgba(200,149,42,0.07)', border: 'rgba(200,149,42,0.40)', accent: '#C8952A', text: '#1A0E08' },
  'monitor':  { bg: 'rgba(120,120,120,0.06)', border: 'rgba(120,120,120,0.30)', accent: '#5A5A5A', text: '#1A0E08' },
}

function SignCheckbox({
  sign,
  checked,
  onToggle,
}: {
  sign: Sign
  checked: boolean
  onToggle: (num: string) => void
}) {
  const style = STYLES[sign.level]
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      aria-pressed={checked}
      onClick={() => onToggle(sign.num)}
      className="text-left rounded-xl p-4 sm:p-5 flex gap-3 sm:gap-4 transition-shadow focus:outline-none focus:ring-2 focus:ring-brand-primary"
      style={{
        background: style.bg,
        border: `2px solid ${checked ? style.numColor : style.border}`,
      }}
    >
      <span
        aria-hidden="true"
        className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center rounded-md font-bold text-sm"
        style={{
          width: 24,
          height: 24,
          border: `2px solid ${style.numColor}`,
          background: checked ? style.numColor : 'transparent',
          color: checked ? '#fff' : 'transparent',
        }}
      >
        ✓
      </span>
      <span className="min-w-0">
        <span className="flex items-center gap-2 mb-1 flex-wrap">
          <span className="font-display font-bold text-brand-dark text-sm sm:text-base">{sign.title}</span>
          <span
            className="text-2xs font-bold px-2 py-0.5 rounded-pill flex-shrink-0"
            style={{ background: style.badgeBg, color: style.badgeColor }}
          >
            {style.badge}
          </span>
        </span>
        <span className="block text-xs sm:text-sm text-brand-text-mid leading-relaxed">{sign.body}</span>
      </span>
    </button>
  )
}

export default function TriageHelper() {
  const [selected, setSelected] = useState<Set<string>>(new Set())

  const toggle = (num: string) =>
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(num)) next.delete(num)
      else next.add(num)
      return next
    })

  const verdict = useMemo(() => deriveVerdict(selected), [selected])
  const pickedSigns = useMemo(() => SIGNS.filter((s) => selected.has(s.num)), [selected])

  const emergency = SIGNS.filter((s) => s.level === 'emergency')
  const urgent = SIGNS.filter((s) => s.level === 'urgent')

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-start">
      {/* ---- Checklist ---- */}
      <div>
        <fieldset className="border-0 p-0 m-0">
          <legend className="font-display text-lg font-bold text-brand-dark mb-1">
            Check every sign you are seeing right now
          </legend>
          <p className="text-sm text-brand-text-light mb-4">
            Select all that apply. The result reflects the most urgent sign you check.
          </p>

          <div className="mb-2 text-2xs font-bold tracking-eyebrow uppercase" style={{ color: '#C84A2A' }}>
            🚨 Emergency signs
          </div>
          <div className="grid gap-3 mb-6">
            {emergency.map((sign) => (
              <SignCheckbox key={sign.num} sign={sign} checked={selected.has(sign.num)} onToggle={toggle} />
            ))}
          </div>

          <div className="mb-2 text-2xs font-bold tracking-eyebrow uppercase" style={{ color: '#C8952A' }}>
            ⚠️ Urgent signs
          </div>
          <div className="grid gap-3">
            {urgent.map((sign) => (
              <SignCheckbox key={sign.num} sign={sign} checked={selected.has(sign.num)} onToggle={toggle} />
            ))}
          </div>
        </fieldset>

        {selected.size > 0 && (
          <button
            type="button"
            onClick={() => setSelected(new Set())}
            className="mt-5 text-xs font-medium text-brand-text-light underline underline-offset-2 hover:text-brand-primary"
          >
            Clear selections
          </button>
        )}
      </div>

      {/* ---- Verdict ---- */}
      <div className="lg:sticky lg:top-6" aria-live="polite" aria-atomic="true">
        {!verdict && (
          <div className="rounded-xl border border-brand-border bg-brand-white p-6">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-2">
              Your result will appear here
            </div>
            <p className="text-sm text-brand-text-mid leading-relaxed m-0">
              Check the signs you are seeing and an urgency read will appear here. When in doubt, call your
              vet or your nearest emergency clinic — this tool helps you decide how urgently to seek care, it
              does not diagnose your cat.
            </p>
          </div>
        )}

        {verdict && (
          <div
            className="rounded-xl p-6"
            style={{ background: TIER_STYLE[verdict.tier].bg, border: `2px solid ${TIER_STYLE[verdict.tier].border}` }}
          >
            <div
              className="text-2xs font-bold tracking-eyebrow uppercase mb-2"
              style={{ color: TIER_STYLE[verdict.tier].accent }}
            >
              {verdict.eyebrow}
            </div>
            <p
              className="font-display font-bold text-lg leading-snug m-0 mb-2"
              style={{ color: TIER_STYLE[verdict.tier].text }}
            >
              {verdict.headline}
            </p>
            <p className="text-sm text-brand-text-mid leading-relaxed m-0">{verdict.lead}</p>

            {/* Primary action on EVERY verdict */}
            <Link
              href="/find-a-vet"
              className="mt-4 inline-flex items-center font-semibold text-sm px-4 py-2 rounded-md no-underline text-white"
              style={{ background: TIER_STYLE[verdict.tier].accent }}
            >
              Find your nearest emergency vet →
            </Link>

            <p className="mt-3 text-xs text-brand-text-light m-0">
              Suspect poisoning? Call ASPCA Animal Poison Control:{' '}
              <span className="font-bold text-brand-dark">{ASPCA}</span> (24/7).
            </p>

            {/* Selected-sign detail — verbatim guide copy */}
            <div className="mt-5 pt-5 border-t" style={{ borderColor: TIER_STYLE[verdict.tier].border }}>
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
                What you selected
              </div>
              <ul className="list-none p-0 m-0 grid gap-3">
                {pickedSigns.map((sign) => {
                  const style = STYLES[sign.level]
                  return (
                    <li key={sign.num}>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="font-display font-bold text-brand-dark text-sm">{sign.title}</span>
                        <span
                          className="text-2xs font-bold px-2 py-0.5 rounded-pill flex-shrink-0"
                          style={{ background: style.badgeBg, color: style.badgeColor }}
                        >
                          {style.badge}
                        </span>
                      </div>
                      <p className="text-xs text-brand-text-mid leading-relaxed m-0">{sign.body}</p>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        )}

        {/* Persistent not-a-diagnosis note under the result column */}
        <div className="mt-4 rounded-lg border border-brand-border bg-brand-surface p-4">
          <p className="text-xs text-brand-text-light leading-relaxed m-0">
            <span className="font-semibold text-brand-text-mid">Not a diagnosis.</span> This tool helps you
            decide how urgently to seek care. It does not diagnose your cat — only a veterinarian can. If you
            are ever unsure, treat it as urgent and call your vet or emergency clinic.
          </p>
        </div>
      </div>
    </div>
  )
}
