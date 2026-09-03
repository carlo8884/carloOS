'use client'

/**
 * ER vs clinic vs telehealth — interactive setting chooser.
 * Conservative: mixed selections resolve upward. Not a diagnosis.
 */

import { useMemo, useState } from 'react'
import Link from 'next/link'
import {
  ASPCA_POISON,
  SIGNS,
  deriveSetting,
  signsFor,
  type Setting,
  type Sign,
  type Species,
} from './triage'

const SETTING_COPY: Record<
  Setting,
  { eyebrow: string; headline: string; lead: string; accent: string; bg: string; border: string }
> = {
  er: {
    eyebrow: 'ER now',
    headline: 'Go to an emergency hospital now.',
    lead: 'At least one sign you selected can be life-threatening. Do not wait for a morning clinic slot or a telehealth callback. Call ahead if you safely can.',
    accent: '#C84A2A',
    bg: 'rgba(200,74,42,0.07)',
    border: 'rgba(200,74,42,0.40)',
  },
  clinic: {
    eyebrow: 'Clinic tomorrow — or today if open',
    headline: 'See a clinic, not the ER — sooner if it worsens.',
    lead: 'These signs warrant a same-day or next-open general-practice or urgent-care visit. If anything on the ER list appears, go now. A telehealth vet can help you decide if your regular clinic is closed.',
    accent: '#C8952A',
    bg: 'rgba(200,149,42,0.07)',
    border: 'rgba(200,149,42,0.40)',
  },
  telehealth: {
    eyebrow: 'Telehealth is a reasonable first step',
    headline: 'Talk to a licensed vet remotely — then go in if they say so.',
    lead: 'The signs you selected fit triage, medication, nutrition, or a stable follow-up. Telehealth cannot replace a physical exam, imaging, or emergency care.',
    accent: '#0A6B5E',
    bg: 'rgba(10,107,94,0.07)',
    border: 'rgba(10,107,94,0.35)',
  },
}

const LEVEL_STYLE: Record<Setting, { badge: string; badgeBg: string; border: string }> = {
  er: { badge: 'ER now', badgeBg: 'rgba(200,74,42,0.12)', border: 'rgba(200,74,42,0.35)' },
  clinic: { badge: 'Clinic', badgeBg: 'rgba(200,149,42,0.14)', border: 'rgba(200,149,42,0.35)' },
  telehealth: { badge: 'Telehealth', badgeBg: 'rgba(10,107,94,0.12)', border: 'rgba(10,107,94,0.30)' },
}

function SignRow({
  sign,
  checked,
  onToggle,
}: {
  sign: Sign
  checked: boolean
  onToggle: (id: string) => void
}) {
  const style = LEVEL_STYLE[sign.setting]
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      aria-pressed={checked}
      onClick={() => onToggle(sign.id)}
      className="text-left rounded-xl p-4 sm:p-5 flex gap-3 sm:gap-4 transition-shadow focus:outline-none focus:ring-2 focus:ring-brand-primary"
      style={{
        background: '#fff',
        border: `2px solid ${checked ? style.border : 'var(--brand-border, #DDE8EE)'}`,
      }}
    >
      <span
        aria-hidden="true"
        className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center rounded-md font-bold text-sm"
        style={{
          width: 24,
          height: 24,
          border: `2px solid ${style.border}`,
          background: checked ? style.border : 'transparent',
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
            style={{ background: style.badgeBg, color: 'var(--brand-text-dark, #0D2535)' }}
          >
            {style.badge}
          </span>
        </span>
        <span className="block text-xs sm:text-sm text-brand-text-mid leading-relaxed">{sign.body}</span>
      </span>
    </button>
  )
}

export default function Calculator() {
  const [species, setSpecies] = useState<Species>('dog')
  const [selected, setSelected] = useState<Set<string>>(new Set())

  const visible = useMemo(() => signsFor(species), [species])
  const setting = useMemo(() => deriveSetting([...selected], species), [selected, species])
  const poisonSelected = selected.has('poison')

  const toggle = (id: string) =>
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  const setSpeciesAndPrune = (next: Species) => {
    setSpecies(next)
    const allowed = new Set(signsFor(next).map((s) => s.id))
    setSelected((prev) => new Set([...prev].filter((id) => allowed.has(id))))
  }

  const groups: { setting: Setting; label: string }[] = [
    { setting: 'er', label: 'Possible emergency' },
    { setting: 'clinic', label: 'Clinic or urgent care' },
    { setting: 'telehealth', label: 'Often telehealth-first' },
  ]

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-start">
      <div>
        <fieldset className="border-0 p-0 m-0 mb-6">
          <legend className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Species</legend>
          <div className="flex flex-wrap gap-2">
            {(
              [
                ['dog', 'Dog'],
                ['cat', 'Cat'],
              ] as const
            ).map(([id, label]) => {
              const on = species === id
              return (
                <button
                  key={id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setSpeciesAndPrune(id)}
                  className="px-4 py-2 rounded-md text-sm font-semibold border"
                  style={{
                    background: on ? 'var(--brand-primary, #0A6B5E)' : '#fff',
                    color: on ? '#fff' : 'var(--brand-text-dark, #0D2535)',
                    borderColor: on ? 'var(--brand-primary, #0A6B5E)' : 'var(--brand-border, #DDE8EE)',
                  }}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </fieldset>

        <fieldset className="border-0 p-0 m-0">
          <legend className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
            Select every sign you are seeing
          </legend>
          <div className="flex flex-col gap-6">
            {groups.map((g) => {
              const items = visible.filter((s) => s.setting === g.setting)
              return (
                <div key={g.setting}>
                  <h3 className="font-display text-base font-bold text-brand-dark mb-3">{g.label}</h3>
                  <div className="flex flex-col gap-3">
                    {items.map((sign) => (
                      <SignRow
                        key={sign.id}
                        sign={sign}
                        checked={selected.has(sign.id)}
                        onToggle={toggle}
                      />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </fieldset>
        <p className="mt-4 text-xs text-brand-text-light leading-relaxed">
          {SIGNS.length} signs, filtered by species. Mixed selections always resolve to the more
          urgent setting. Absence from this list is never a reason to wait.
        </p>
      </div>

      <aside className="lg:sticky lg:top-24">
        {setting ? (
          <div
            role="status"
            className="rounded-xl p-5 sm:p-6"
            style={{
              background: SETTING_COPY[setting].bg,
              border: `2px solid ${SETTING_COPY[setting].border}`,
            }}
          >
            <div
              className="text-2xs font-bold tracking-eyebrow uppercase mb-2"
              style={{ color: SETTING_COPY[setting].accent }}
            >
              {SETTING_COPY[setting].eyebrow}
            </div>
            <h3 className="font-display text-xl font-bold text-brand-dark mb-2 leading-snug">
              {SETTING_COPY[setting].headline}
            </h3>
            <p className="text-sm text-brand-text-mid leading-relaxed m-0">
              {SETTING_COPY[setting].lead}
            </p>

            {setting === 'er' ? (
              <div className="mt-4 flex flex-col gap-2">
                <Link
                  href="/find-a-vet"
                  className="inline-flex items-center justify-center bg-brand-primary text-white font-semibold text-sm px-4 py-2.5 rounded-md no-underline hover:bg-brand-primary-dark"
                >
                  Find an emergency vet →
                </Link>
                {poisonSelected ? (
                  <p className="text-sm text-brand-text-mid m-0">
                    ASPCA Poison Control:{' '}
                    <a href={`tel:${ASPCA_POISON.replace(/-/g, '')}`} className="font-bold text-brand-dark">
                      {ASPCA_POISON}
                    </a>{' '}
                    (24/7; a consultation fee may apply)
                  </p>
                ) : null}
              </div>
            ) : (
              <div className="mt-4 flex flex-col gap-2">
                <Link
                  href="/telehealth"
                  className="inline-flex items-center justify-center bg-brand-primary text-white font-semibold text-sm px-4 py-2.5 rounded-md no-underline hover:bg-brand-primary-dark"
                >
                  Talk to a vet — telehealth →
                </Link>
                <Link
                  href="/find-a-vet"
                  className="inline-flex items-center justify-center text-sm font-semibold text-brand-primary no-underline hover:underline"
                >
                  Or find an in-person clinic →
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Setting
            </div>
            <p className="text-sm text-brand-text-mid leading-relaxed m-0">
              Select at least one sign. The tool returns the most urgent setting among your
              selections — ER now, clinic tomorrow, or telehealth. It does not name a disease.
            </p>
          </div>
        )}
      </aside>
    </div>
  )
}
