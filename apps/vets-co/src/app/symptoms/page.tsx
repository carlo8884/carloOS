import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'
import { Symptoms, type Symptom, type UrgencyTier } from '../../data/symptoms'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Pet Symptom Triage — Dogs & Cats | Vets.co',
  description:
    'When a pet symptom is ER, same-day vet, or monitor at home. 30 symptoms in dogs and cats, sourced from AVMA, AAHA, and ACVIM guidance.',
  path: '/symptoms',
  type: 'website',
})

const TIER_ORDER: UrgencyTier[] = [
  'ER NOW',
  'Same-day vet',
  'Schedule vet visit',
  'Monitor at home',
]

interface TierMeta {
  bg: string
  border: string
  text: string
  badgeBg: string
  badgeText: string
  blurb: string
}
const TIER_META: Record<UrgencyTier, TierMeta> = {
  'ER NOW': {
    bg: 'bg-brand-danger/8',
    border: 'border-brand-danger/40',
    text: 'text-brand-danger',
    badgeBg: 'bg-brand-danger',
    badgeText: 'text-white',
    blurb:
      'Drive to the nearest 24-hour ER. Call ahead if you can. Do not wait for a primary-vet callback.',
  },
  'Same-day vet': {
    bg: 'bg-[#FFF8EC]',
    border: 'border-[#C8952A]/40',
    text: 'text-[#7A5A18]',
    badgeBg: 'bg-[#C8952A]',
    badgeText: 'text-white',
    blurb:
      'Call your primary vet today. Urgent-care or telehealth is reasonable if they cannot fit you in.',
  },
  'Schedule vet visit': {
    bg: 'bg-brand-primary/5',
    border: 'border-brand-primary/30',
    text: 'text-brand-primary',
    badgeBg: 'bg-brand-primary',
    badgeText: 'text-white',
    blurb: 'Book a routine vet appointment within the next few days.',
  },
  'Monitor at home': {
    bg: 'bg-[#E9F4EC]',
    border: 'border-[#2A6A3A]/40',
    text: 'text-[#1E4A28]',
    badgeBg: 'bg-[#2A6A3A]',
    badgeText: 'text-white',
    blurb:
      'Note time, symptom, and trigger. Re-check at 4-6 h and at 12 h. Escalate if it worsens.',
  },
}

function groupByTierAndSpecies(items: Symptom[]) {
  const byTier: Record<UrgencyTier, Symptom[]> = {
    'ER NOW': [],
    'Same-day vet': [],
    'Schedule vet visit': [],
    'Monitor at home': [],
  }
  for (const s of items) byTier[s.urgencyTriage].push(s)
  return byTier
}

function speciesLabel(s: Symptom): string {
  return s.species
}

export default function SymptomsHubPage() {
  const byTier = groupByTierAndSpecies(Symptoms)
  const dogCount = Symptoms.filter((s) => s.species === 'Dog').length
  const catCount = Symptoms.filter((s) => s.species === 'Cat').length

  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://vets.co' },
      { name: 'Symptoms', url: 'https://vets.co/symptoms' },
    ],
  })
  const schema = combineSchemas(breadcrumbSchema)

  return (
    <>
      <SchemaScript schema={schema} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">
          Home
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid">Symptoms</span>
      </nav>

      {/* Hero */}
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-3">
          Symptom Triage Library
        </span>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4 max-w-3xl"
          style={{ fontSize: 'clamp(28px, 5vw, 50px)' }}
        >
          Pet Symptom Triage
        </h1>
        <p className="text-lg font-light text-white/60 max-w-2xl leading-relaxed">
          When a pet symptom is ER NOW, when it is same-day vet, and when it is safe to monitor at
          home. {dogCount} dog symptoms and {catCount} cat symptoms — sourced from{' '}
          <a
            href="https://avma.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary hover:underline"
          >
            AVMA
          </a>
          ,{' '}
          <a
            href="https://aaha.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary hover:underline"
          >
            AAHA
          </a>
          , and{' '}
          <a
            href="https://acvim.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary hover:underline"
          >
            ACVIM
          </a>{' '}
          guidance.
        </p>
      </div>

      <div className="px-container-sm sm:px-container py-12 max-w-6xl">
        {/* Intro */}
        <section className="bg-brand-surface border border-brand-border rounded-xl p-6 mb-10">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-2">
            How to use this library
          </div>
          <p className="text-brand-text-mid leading-relaxed m-0 text-sm">
            Each symptom page lists the red flags that flip it into an ER visit, the most common
            causes, the diagnostic ladder a vet will follow, and when home care is safe. Use the
            urgency badges below to skim — and call the vet whenever you are unsure.
          </p>
        </section>

        {/* Grouped by urgency tier */}
        {TIER_ORDER.map((tier) => {
          const items = byTier[tier]
          if (items.length === 0) return null
          const meta = TIER_META[tier]
          const dogs = items.filter((s) => s.species === 'Dog')
          const cats = items.filter((s) => s.species === 'Cat')
          const others = items.filter((s) => s.species !== 'Dog' && s.species !== 'Cat')

          return (
            <section key={tier} className="mb-12">
              <div className={`border-2 ${meta.border} ${meta.bg} rounded-xl p-6 mb-5`}>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span
                    className={`${meta.badgeBg} ${meta.badgeText} font-display font-black text-sm px-3 py-1.5 rounded-md tracking-tight`}
                  >
                    {tier.toUpperCase()}
                  </span>
                  <h2
                    className={`font-display font-black m-0 ${meta.text}`}
                    style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}
                  >
                    {tier} symptoms ({items.length})
                  </h2>
                </div>
                <p className="text-sm text-brand-text-mid m-0 leading-relaxed">{meta.blurb}</p>
              </div>

              {dogs.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-display font-bold text-brand-dark text-base mb-3 pb-2 border-b border-brand-border">
                    Dogs ({dogs.length})
                  </h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {dogs.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/symptoms/${s.slug}`}
                        className="bg-brand-surface border border-brand-border rounded-xl p-4 no-underline hover:border-brand-primary transition-colors block"
                      >
                        <div
                          className={`text-2xs font-bold tracking-eyebrow uppercase mb-1 ${meta.text}`}
                        >
                          {speciesLabel(s)}
                        </div>
                        <div className="font-display font-bold text-brand-dark text-sm">
                          {s.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {cats.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-display font-bold text-brand-dark text-base mb-3 pb-2 border-b border-brand-border">
                    Cats ({cats.length})
                  </h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {cats.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/symptoms/${s.slug}`}
                        className="bg-brand-surface border border-brand-border rounded-xl p-4 no-underline hover:border-brand-primary transition-colors block"
                      >
                        <div
                          className={`text-2xs font-bold tracking-eyebrow uppercase mb-1 ${meta.text}`}
                        >
                          {speciesLabel(s)}
                        </div>
                        <div className="font-display font-bold text-brand-dark text-sm">
                          {s.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {others.length > 0 && (
                <div>
                  <h3 className="font-display font-bold text-brand-dark text-base mb-3 pb-2 border-b border-brand-border">
                    Other species ({others.length})
                  </h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {others.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/symptoms/${s.slug}`}
                        className="bg-brand-surface border border-brand-border rounded-xl p-4 no-underline hover:border-brand-primary transition-colors block"
                      >
                        <div
                          className={`text-2xs font-bold tracking-eyebrow uppercase mb-1 ${meta.text}`}
                        >
                          {speciesLabel(s)}
                        </div>
                        <div className="font-display font-bold text-brand-dark text-sm">
                          {s.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )
        })}

        {/* Cross-portfolio callouts */}
        <section className="mt-12 grid sm:grid-cols-2 gap-4">
          <Link
            href="/find-a-vet"
            className="bg-brand-surface border border-brand-border rounded-xl p-6 no-underline hover:border-brand-primary block"
          >
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Find Care
            </div>
            <div className="font-display font-bold text-brand-dark text-base mb-2">
              Find a Vet in Your State
            </div>
            <p className="text-xs text-brand-text-mid m-0 leading-relaxed">
              General practice, 24-hour emergency hospitals, and board-certified specialists by
              state.
            </p>
          </Link>
          <Link
            href="/reviews/best-pet-insurance"
            className="bg-brand-primary/5 border border-brand-primary/30 rounded-xl p-6 no-underline hover:border-brand-primary block"
          >
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Plan Ahead
            </div>
            <div className="font-display font-bold text-brand-dark text-base mb-2">
              Compare Pet Insurance 2026
            </div>
            <p className="text-xs text-brand-text-mid m-0 leading-relaxed">
              Enroll before symptoms appear — pre-existing conditions are not covered. Side-by-side
              accident-and-illness comparisons.
            </p>
          </Link>
        </section>
      </div>
    </>
  )
}
