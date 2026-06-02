import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'
import { Diagnostics, type Diagnostic, type DiagnosticCategory } from '../../data/diagnostics'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Pet Diagnostic Tests — Cost & Results | Vets.co',
  description:
    'Plain-language deep dives on 8 common veterinary diagnostic tests: what they measure, why vets order them, what results mean, and typical US cost ranges.',
  path: '/diagnostics',
  type: 'website',
})

// Grouping by diagnostic category for the hub layout.
interface CategoryGroup {
  id: string
  label: string
  blurb: string
  categories: DiagnosticCategory[]
}

const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    id: 'blood-and-urine',
    label: 'Blood and urine tests',
    blurb:
      'The first-line laboratory screen for any sick or senior pet — bloodwork and urinalysis screen organ function, hydration, infection, and metabolic disease.',
    categories: ['blood', 'urine'],
  },
  {
    id: 'imaging',
    label: 'Imaging studies',
    blurb:
      'Structural and functional imaging — radiographs for bone, gas, and gross anatomy; ultrasound for soft-tissue detail and real-time motion; echocardiography for the heart.',
    categories: ['imaging', 'cardiac'],
  },
  {
    id: 'biopsy',
    label: 'Tissue sampling and biopsy',
    blurb:
      'Cytology and histopathology — the gold standard for identifying masses, grading tumors, and confirming infection or inflammation.',
    categories: ['biopsy'],
  },
]

function categoryLabel(c: DiagnosticCategory): string {
  switch (c) {
    case 'blood':
      return 'Blood'
    case 'urine':
      return 'Urine'
    case 'imaging':
      return 'Imaging'
    case 'cardiac':
      return 'Cardiac'
    case 'biopsy':
      return 'Biopsy'
  }
}

export default function DiagnosticsHubPage() {
  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://vets.co' },
      { name: 'Diagnostics', url: 'https://vets.co/diagnostics' },
    ],
  })
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Veterinary Diagnostic Tests',
    numberOfItems: Diagnostics.length,
    itemListElement: Diagnostics.map((d, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: d.name,
      url: `https://vets.co/diagnostics/${d.slug}`,
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
        <span className="text-brand-text-mid">Diagnostics</span>
      </nav>

      {/* Hero */}
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-3">
          Pet Diagnostic Tests
        </span>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4 max-w-3xl"
          style={{ fontSize: 'clamp(28px, 5vw, 50px)' }}
        >
          Pet Diagnostic Tests
        </h1>
        <p className="text-lg font-light text-white/60 max-w-2xl leading-relaxed">
          What {Diagnostics.length} common veterinary diagnostic tests measure, why a vet orders
          them, what results mean in plain language, and typical US cost ranges — sourced from{' '}
          <a
            href="https://www.acvim.org/Animal-Owners"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary hover:underline"
          >
            ACVIM
          </a>
          ,{' '}
          <a
            href="https://www.aaha.org/your-pet/pet-owner-education/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary hover:underline"
          >
            AAHA
          </a>
          , and the{' '}
          <a
            href="https://www.merckvetmanual.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary hover:underline"
          >
            Merck Veterinary Manual
          </a>
          .
        </p>
      </div>

      <div className="px-container-sm sm:px-container py-12 max-w-6xl">
        {/* Why we built this library */}
        <section className="bg-brand-primary/5 border-2 border-brand-primary/30 rounded-xl p-6 mb-10">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            How to read these pages
          </div>
          <p className="text-brand-text-mid leading-relaxed m-0 text-sm">
            Each diagnostic test page is organized the same way: what the test measures, when a
            veterinarian orders it, how it is performed, what preparation it requires, how long it
            takes, typical US cost ranges, what results mean in plain language, what comes next,
            and how pet insurance typically covers the workup. Cost ranges are{' '}
            <strong>typical US figures</strong> and are not guaranteed. Result interpretation
            always depends on your pet&apos;s clinical picture — your veterinarian&apos;s
            interpretation supersedes any general guidance here.
          </p>
        </section>

        {/* Diagnostic workup costs callout */}
        <section className="bg-brand-surface border border-brand-border rounded-xl p-6 mb-10">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-2">
            Why diagnostic costs matter
          </div>
          <p className="text-brand-text-mid leading-relaxed m-0 text-sm">
            A complete diagnostic workup — bloodwork plus urinalysis plus imaging plus
            cytology — commonly runs $300-2,000 in the United States, and complex referral
            workups can exceed that. Most accident-and-illness pet insurance plans cover
            diagnostic costs once your policy is active and waiting periods are cleared.
            Pre-existing conditions are excluded, which is why enrollment timing matters.
          </p>
        </section>

        {/* Grouped by category */}
        {CATEGORY_GROUPS.map((group) => {
          const items = Diagnostics.filter((d) => group.categories.includes(d.category))
          if (items.length === 0) return null
          return (
            <section key={group.id} className="mb-12">
              <div className="border-2 border-brand-border bg-brand-surface rounded-xl p-6 mb-5">
                <h2
                  className="font-display font-black text-brand-dark m-0 mb-2"
                  style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}
                >
                  {group.label} ({items.length})
                </h2>
                <p className="text-sm text-brand-text-mid m-0 leading-relaxed">{group.blurb}</p>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {items.map((d: Diagnostic) => (
                  <Link
                    key={d.slug}
                    href={`/diagnostics/${d.slug}`}
                    className="bg-brand-surface border border-brand-border rounded-xl p-4 no-underline hover:border-brand-primary transition-colors block"
                  >
                    <div className="text-2xs font-bold tracking-eyebrow uppercase mb-1 text-brand-primary">
                      {categoryLabel(d.category)} · {d.alsoKnownAs[0]}
                    </div>
                    <div className="font-display font-bold text-brand-dark text-sm mb-1">
                      {d.testName}
                    </div>
                    <div className="text-xs text-brand-text-light leading-relaxed">
                      {d.whenVetsOrder[0]}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}

        {/* Result interpretation always defers to the vet */}
        <section className="bg-brand-primary/5 border-2 border-brand-primary/40 rounded-xl p-6 mt-10 mb-10">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            Always discuss results with your veterinarian
          </div>
          <p className="text-sm text-brand-text-mid leading-relaxed m-0">
            Reference ranges, urgency tiers, and general interpretations on these pages are
            educational. Your veterinarian interprets results in the context of your pet&apos;s
            history, physical exam, and any concurrent diagnostics — and that interpretation
            supersedes any general guidance here.
          </p>
        </section>

        {/* Cross-portfolio callouts */}
        <section className="mt-12 grid sm:grid-cols-2 gap-4">
          <Link
            href="/reviews/best-pet-insurance"
            className="bg-brand-primary/5 border border-brand-primary/30 rounded-xl p-6 no-underline hover:border-brand-primary block"
          >
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Pet Insurance & Diagnostic Costs
            </div>
            <div className="font-display font-bold text-brand-dark text-base mb-2">
              Compare Pet Insurance 2026
            </div>
            <p className="text-xs text-brand-text-mid m-0 leading-relaxed">
              Diagnostic workups commonly run $300-2,000. Most accident-and-illness plans cover
              diagnostics after waiting periods clear — pre-existing conditions are excluded, so
              the time to enroll is before a chronic illness is diagnosed.
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
