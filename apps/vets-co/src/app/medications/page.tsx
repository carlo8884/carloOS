import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
  StockImage,
} from '@carloOS/ui'
import { Medications, type Medication } from '../../data/medications'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Pet Medication Library — Dogs & Cats | Vets.co',
  description:
    "Overviews of 12 common dog and cat prescription medications: uses, side effects, monitoring, and when to call the vet. Sourced from FDA CVM and Plumb's.",
  path: '/medications',
  type: 'website',
})

// Grouping by therapeutic category for the hub layout.
interface CategoryGroup {
  id: string
  label: string
  blurb: string
  slugs: string[]
}

const CATEGORIES: CategoryGroup[] = [
  {
    id: 'dermatology',
    label: 'Dermatology (allergy and itch)',
    blurb:
      'Targeted therapies for atopic dermatitis and chronic itch in dogs and cats — alternatives to long-course steroids.',
    slugs: ['apoquel', 'cytopoint', 'atopica'],
  },
  {
    id: 'pain',
    label: 'Pain management',
    blurb:
      'NSAIDs and adjunctive analgesics for osteoarthritis, postoperative pain, and chronic musculoskeletal pain.',
    slugs: ['carprofen', 'meloxicam', 'gabapentin'],
  },
  {
    id: 'cardiac',
    label: 'Cardiac',
    blurb:
      'First-line agents for canine heart failure and pulmonary edema — typically prescribed together under cardiology guidance.',
    slugs: ['vetmedin', 'furosemide'],
  },
  {
    id: 'antibiotics',
    label: 'Antibiotics',
    blurb:
      'Beta-lactam and tetracycline antibiotics commonly prescribed for skin, urinary, tick-borne, and respiratory infections.',
    slugs: ['clavamox', 'doxycycline'],
  },
  {
    id: 'endocrine',
    label: 'Endocrine',
    blurb:
      "Hormone-modulating therapies — Vetoryl for canine Cushing's disease requires close monitoring.",
    slugs: ['vetoryl'],
  },
  {
    id: 'behavior',
    label: 'Anti-anxiety and behavior',
    blurb:
      'SSRIs and other behavioral medications used alongside (never instead of) a behavior modification plan.',
    slugs: ['fluoxetine'],
  },
]

function speciesLabel(m: Medication): string {
  return m.species
}

export default function MedicationsHubPage() {
  const bySlug: Record<string, Medication> = Object.fromEntries(
    Medications.map((m) => [m.slug, m]),
  )

  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://vets.co' },
      { name: 'Medications', url: 'https://vets.co/medications' },
    ],
  })
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Pet Medication Library',
    numberOfItems: Medications.length,
    itemListElement: Medications.map((m, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: m.name,
      url: `https://vets.co/medications/${m.slug}`,
    })),
  }
  const schema = combineSchemas(breadcrumbSchema, itemListSchema)

  return (
    <>
      <SchemaScript schema={schema} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">
          Home
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid">Medications</span>
      </nav>

      {/* Hero */}
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-3">
          Pet Medication Library
        </span>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4 max-w-3xl"
          style={{ fontSize: 'clamp(28px, 5vw, 50px)' }}
        >
          Pet Medications
        </h1>
        <p className="text-lg font-light text-white/60 max-w-2xl leading-relaxed">
          What {Medications.length} common dog and cat prescription medications treat, what side
          effects to watch for, what monitoring is required, and when to call the vet — sourced from{' '}
          <a
            href="https://animaldrugsatfda.fda.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary hover:underline"
          >
            FDA CVM labels
          </a>{' '}
          and{' '}
          <a
            href="https://www.plumbsveterinarydrugs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary hover:underline"
          >
            Plumb's Veterinary Drug Handbook
          </a>
          .
        </p>
      </div>

      <div className="px-container-sm sm:px-container pt-8">
        <StockImage manifestKey="vets-co:medications-hero" aspect="16:9" variant="wide" priority />
      </div>

      <div className="px-container-sm sm:px-container pt-8 max-w-6xl">
        <a href="/medications/can-i-give-my-dog" className="block rounded-xl border-2 border-brand-primary/40 bg-brand-primary/5 p-5 no-underline hover:border-brand-primary transition">
          <span className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">Human &amp; OTC medicine safety</span>
          <div className="font-display font-bold text-brand-dark text-lg mt-1">Can I give my dog Benadryl, Tylenol, aspirin…?</div>
          <p className="text-sm text-brand-text-mid mt-1 mb-0">A safety check for human and over-the-counter medicines — which are toxic, which are vet-dose-only, and why we never publish a dose. →</p>
        </a>
      </div>

      <div className="px-container-sm sm:px-container py-12 max-w-6xl">
        {/* Why we don't publish dosing */}
        <section className="bg-brand-primary/5 border-2 border-brand-primary/30 rounded-xl p-6 mb-10">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            Why we do not publish doses
          </div>
          <p className="text-brand-text-mid leading-relaxed m-0 text-sm">
            The correct dose of a veterinary medication depends on body weight, the indication,
            kidney and liver function, and every other medication your pet is on. Generic numbers
            from a website cannot account for any of that. Each page below explains what the
            medication is, what it treats, what to watch for, and what monitoring it requires — and
            then sends you back to the prescribing veterinarian for the dose, schedule, and
            duration. That is intentional, and it is the only safe way to publish drug content for
            owners.
          </p>
        </section>

        {/* Intro */}
        <section className="bg-brand-surface border border-brand-border rounded-xl p-6 mb-10">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-2">
            How to use this library
          </div>
          <p className="text-brand-text-mid leading-relaxed m-0 text-sm">
            Each medication page is organized the same way: what the drug is, how it works, what
            it is prescribed for, common side effects, serious side effects that warrant a call to
            the vet, monitoring required (bloodwork and rechecks), drug interactions, and special
            precautions for pregnancy, breed sensitivities, and concurrent diseases. Always bring a
            complete written list of every medication and supplement your pet takes — including
            flea, tick, and heartworm preventives — to every veterinary visit.
          </p>
        </section>

        {/* Grouped by category */}
        {CATEGORIES.map((cat) => {
          const items = cat.slugs.map((s) => bySlug[s]).filter(Boolean)
          if (items.length === 0) return null
          return (
            <section key={cat.id} className="mb-12">
              <div className="border-2 border-brand-border bg-brand-surface rounded-xl p-6 mb-5">
                <h2
                  className="font-display font-black text-brand-dark m-0 mb-2"
                  style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}
                >
                  {cat.label} ({items.length})
                </h2>
                <p className="text-sm text-brand-text-mid m-0 leading-relaxed">{cat.blurb}</p>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {items.map((m) => (
                  <Link
                    key={m.slug}
                    href={`/medications/${m.slug}`}
                    className="bg-brand-surface border border-brand-border rounded-xl p-4 no-underline hover:border-brand-primary transition-colors block"
                  >
                    <div className="text-2xs font-bold tracking-eyebrow uppercase mb-1 text-brand-primary">
                      {speciesLabel(m)} · {m.drugClass}
                    </div>
                    <div className="font-display font-bold text-brand-dark text-sm mb-1">
                      {m.name}
                    </div>
                    <div className="text-xs text-brand-text-light leading-relaxed">
                      {m.primaryUses[0]}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}

        {/* Always discuss with vet — required callout */}
        <section className="bg-brand-primary/5 border-2 border-brand-primary/40 rounded-xl p-6 mt-10 mb-10">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            Always discuss with your veterinarian
          </div>
          <p className="text-sm text-brand-text-mid leading-relaxed m-0">
            These overviews are educational. The decision to start, stop, refill, or change a dose
            of any veterinary medication belongs to the licensed veterinarian who has examined your
            pet. Never share medications between pets, and never use a leftover prescription for a
            new problem without a vet exam.
          </p>
        </section>

        {/* Cross-portfolio callouts */}
        <section className="mt-12 grid sm:grid-cols-2 gap-4">
          <Link
            href="/reviews/best-pet-insurance"
            className="bg-brand-primary/5 border border-brand-primary/30 rounded-xl p-6 no-underline hover:border-brand-primary block"
          >
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Pet Insurance & Medication Costs
            </div>
            <div className="font-display font-bold text-brand-dark text-base mb-2">
              Compare Pet Insurance 2026
            </div>
            <p className="text-xs text-brand-text-mid m-0 leading-relaxed">
              Chronic medications can run hundreds to thousands a year. Most plans reimburse
              veterinarian-prescribed drugs after waiting periods clear — pre-existing conditions
              are excluded, so the time to enroll is before a chronic prescription.
            </p>
          </Link>
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
        </section>
      </div>
    </>
  )
}
