/**
 * Dog.com — /conditions hub index.
 *
 * Canonical authority entry surface for diagnosed canine conditions.
 *
 * Companion to:
 *   - /symptoms  → presenting signs, owner-action triage
 *   - /health/<slug>  → long-form per-condition reference pages
 *
 * What this page does:
 *   - Groups every diagnosed condition in src/data/conditions.ts by body
 *     system (Orthopedic / Endocrine / Cardiac / GI / Neurologic / Oncologic /
 *     Dermatologic / Ophthalmic / Renal / Urinary / Infectious / Respiratory /
 *     Dental / Reproductive / Behavioral / Hematologic / Hepatic)
 *   - Surfaces the "most common" diagnosed conditions in a highlighted strip
 *   - Surfaces conditions that require emergency care in a Tier 1 callout
 *     and cross-links to /symptoms for presenting-sign triage
 *   - Links each row to the canonical /health/<slug> reference page
 *   - Renders CollectionPage + ItemList + BreadcrumbList + FAQPage schema for
 *     AI surfaces (Google AI Overviews, ChatGPT, Perplexity, Claude) to
 *     discover the cluster's canonical entry point
 *   - Cross-links /symptoms, /breeds, and /health to keep internal-link
 *     equity flowing across the cluster graph
 *
 * Trust-bar (QC-STANDARDS.md §1):
 *   - Byline is "Dog.com Editorial — sourced from cited references"
 *   - No fabricated DVM credentials, no first-person hands-on claims
 *   - No AI-generated humans
 *   - Affiliate disclosure remains in the shared footer (this page itself has
 *     no affiliate links — Monetization Bot's lane is untouched)
 *   - Every condition resolves to a real reference page; link-check.mjs
 *     verifies this in CI
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildBreadcrumbSchema,
  buildFAQSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'
import { getSiteConfig } from '@carloOS/config'
import {
  CONDITIONS,
  ALL_BODY_SYSTEMS,
  EMERGENCY_CONDITIONS,
  HIGHLIGHTED_CONDITIONS,
  conditionsByBodySystem,
  type Condition,
  type BodySystem,
  type ConditionSeverity,
} from '../../data/conditions'

const PAGE_PATH = '/conditions'
// NOTE: title + description are inline string literals (not extracted to
// constants) because scripts/ci/metadata-policy.mjs uses a regex to verify the
// raw quoted values for length + uniqueness in CI.
const PAGE_TITLE_FOR_SCHEMA = 'Dog Conditions — A Reference Guide for Owners'
const PAGE_DESCRIPTION_FOR_SCHEMA =
  'Diagnosed canine conditions organized by body system and severity. Canonical reference index linking to every Dog.com clinical reference page.'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Conditions — A Reference Guide for Owners',
  description:
    'Diagnosed canine conditions organized by body system and severity. Canonical reference index linking to every Dog.com clinical reference page.',
  path: PAGE_PATH,
  category: 'Condition Reference',
})

// ─────────────────────────────────────────────
// Schema
// ─────────────────────────────────────────────

const siteConfig = getSiteConfig('dog-com')
const pageUrl = `${siteConfig.theme.siteUrl}${PAGE_PATH}`

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: siteConfig.theme.siteUrl },
    { name: 'Conditions', url: pageUrl },
  ],
})

const collectionPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: PAGE_TITLE_FOR_SCHEMA,
  description: PAGE_DESCRIPTION_FOR_SCHEMA,
  url: pageUrl,
  inLanguage: 'en-US',
  isPartOf: {
    '@type': 'WebSite',
    name: siteConfig.theme.siteName,
    url: siteConfig.theme.siteUrl,
  },
  about: {
    '@type': 'Thing',
    name: 'Diagnosed canine conditions',
  },
  publisher: {
    '@type': 'Organization',
    name: siteConfig.theme.siteName,
    url: siteConfig.theme.siteUrl,
  },
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Dog conditions by body system',
  numberOfItems: CONDITIONS.length,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: CONDITIONS.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    description: c.briefDescription,
    url: `${siteConfig.theme.siteUrl}${c.learnMoreHref}`,
  })),
}

const FAQ_ITEMS: Array<{ question: string; answer: string }> = [
  {
    question: 'How is this conditions hub different from the symptoms hub?',
    answer:
      'The symptoms hub (/symptoms) organizes presenting signs — what you actually observe in your dog (vomiting, limping, labored breathing) — and triages each one by urgency. The conditions hub (this page) organizes diagnosed conditions — what the vet ultimately names the problem (osteoarthritis, diabetes, lymphoma) — and groups them by body system and severity. Use symptoms when you are deciding whether to go to the vet; use conditions after a diagnosis to understand what is being treated and what to expect.',
  },
  {
    question: 'Which dog conditions are most commonly diagnosed?',
    answer:
      'The most common diagnoses in general veterinary practice are osteoarthritis (about 1 in 5 adult dogs), periodontal disease (the most prevalent disease in adult dogs), atopic dermatitis, allergic otitis externa, obesity, and benign mass lesions. Senior dogs add chronic kidney disease, mitral valve disease, hypothyroidism, and Cushing\'s disease to the top of the list. Each condition above is highlighted at the top of this page.',
  },
  {
    question: 'What dog conditions are immediate emergencies?',
    answer:
      'Conditions tagged Emergency on this page require veterinary care within minutes to hours: gastric dilatation-volvulus (bloat), acute glaucoma, Addisonian crisis, parvovirus in puppies, pyometra, leptospirosis, status epilepticus, acute kidney injury from toxin exposure, severe IVDD with sudden paralysis, gastrointestinal foreign-body obstruction, and laryngeal paralysis with respiratory distress. If you suspect any of these, do not wait — drive to the nearest emergency veterinary clinic and call ahead.',
  },
  {
    question: 'Is this conditions guide a substitute for veterinary care?',
    answer:
      'No. This guide is a reference index to help owners learn what each condition is, what it looks like, and what the standard-of-care approach involves. Diagnosis requires physical examination and diagnostic testing — bloodwork, imaging, biopsy — that no website can substitute for. Use these references to ask better questions of your veterinarian, not to bypass them.',
  },
  {
    question: 'How is severity determined on this page?',
    answer:
      'Severity is grouped into four tiers based on standard-of-care references. Emergency means life-threatening within hours without veterinary intervention. Acute-treatable means serious and time-sensitive but typically resolves with prompt treatment. Chronic-manageable means lifelong management with generally good quality of life when treatment is adhered to. Terminal-progressive means incurable and progressive, with treatment focused on quality of life and slowing decline. These categories reflect ACVIM consensus statements, AAHA guidelines, and the Merck Veterinary Manual.',
  },
  {
    question: 'Where do the condition references come from?',
    answer:
      'Each condition links to a long-form Dog.com reference page sourced from ACVIM consensus statements, AAHA guidelines, the Merck Veterinary Manual, OFA hereditary disease registry data, ACVD/WAVD dermatology consensus, ISCAID antimicrobial stewardship guidelines, the American Heartworm Society, and peer-reviewed veterinary literature. Citations are listed at the bottom of every reference page.',
  },
  {
    question: 'Why aren\'t breed-specific risks listed here?',
    answer:
      'Breed predispositions are organized separately under /breeds, where you can look up a breed and see the conditions it is at elevated risk for, with links back to these same condition references. That structure keeps breed risk profiles and condition references each in their canonical place rather than duplicating one inside the other.',
  },
  {
    question: 'What if my dog\'s condition isn\'t listed?',
    answer:
      'This hub indexes the conditions for which Dog.com has a long-form reference page. The library expands over time as new conditions are written up. If you are looking for a condition that is not yet here, the Dog.com health library is a good starting point, and your veterinarian remains the authoritative source for an individual dog.',
  },
]

const faqSchema = buildFAQSchema({ questions: FAQ_ITEMS })

const combinedSchema = combineSchemas(
  collectionPageSchema,
  itemListSchema,
  breadcrumbSchema,
  faqSchema,
)

// ─────────────────────────────────────────────
// Severity tier styling — mirrors /symptoms voice
// ─────────────────────────────────────────────

const SEVERITY_STYLES: Record<
  ConditionSeverity,
  { label: string; color: string; bg: string }
> = {
  emergency: {
    label: 'Emergency',
    color: '#C84A2A',
    bg: 'rgba(200,74,42,0.1)',
  },
  'acute-treatable': {
    label: 'Acute',
    color: '#C8952A',
    bg: 'rgba(200,149,42,0.1)',
  },
  'chronic-manageable': {
    label: 'Chronic',
    color: '#2A6FB5',
    bg: 'rgba(42,111,181,0.1)',
  },
  'terminal-progressive': {
    label: 'Progressive',
    color: '#7A2A7A',
    bg: 'rgba(122,42,122,0.1)',
  },
}

// ─────────────────────────────────────────────
// Pieces
// ─────────────────────────────────────────────

function ConditionCard({ condition }: { condition: Condition }) {
  const sev = SEVERITY_STYLES[condition.severity]
  return (
    <Link
      key={condition.slug}
      href={condition.learnMoreHref}
      id={condition.slug}
      className="block no-underline rounded-xl p-5 mb-3 hover:shadow-sm transition-shadow bg-brand-white border border-brand-border"
    >
      <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
        <h3 className="font-display font-bold text-brand-dark text-base m-0 leading-snug">
          {condition.name}
        </h3>
        <span
          className="text-2xs font-bold tracking-eyebrow uppercase px-2.5 py-0.5 rounded-pill flex-shrink-0"
          style={{ background: sev.bg, color: sev.color }}
        >
          {sev.label}
        </span>
      </div>
      <p className="text-sm text-brand-text-mid leading-relaxed m-0">
        {condition.briefDescription}
      </p>
      <div className="mt-3 text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
        Read full reference →
      </div>
    </Link>
  )
}

function BodySystemSection({ system }: { system: BodySystem }) {
  const items = conditionsByBodySystem(system)
  if (items.length === 0) return null
  return (
    <section id={`system-${system.toLowerCase()}`} className="mb-12">
      <div className="flex items-center gap-2.5 mb-2">
        <span
          className="w-6 h-0.5 bg-brand-primary"
          aria-hidden="true"
        />
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
          {system} · {items.length} condition{items.length === 1 ? '' : 's'}
        </span>
      </div>
      <h2 className="font-display font-bold text-brand-dark text-2xl mb-4">
        {system}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {items.map((c) => (
          <ConditionCard key={c.slug} condition={c} />
        ))}
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────

export default function ConditionsHubPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />

      {/* Hero */}
      <div className="bg-brand-dark px-container-sm sm:px-container py-14 relative overflow-hidden">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Condition Reference
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4"
          style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
        >
          Dog Conditions — A Reference Guide for Owners
        </h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed mb-2">
          {CONDITIONS.length} diagnosed canine conditions organized by body system and severity. Each entry links to a long-form clinical reference page. Use this index after a diagnosis to understand what is being treated and what to expect.
        </p>
        <p className="text-xs text-white/40">
          By Dog.com Editorial — sourced from cited references. Standard-of-care guidance from ACVIM consensus statements, AAHA guidelines, the Merck Veterinary Manual, OFA hereditary disease registry, ACVD/WAVD dermatology consensus, and peer-reviewed veterinary literature.
        </p>
      </div>

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2"
      >
        <Link href="/" className="hover:text-brand-primary no-underline">
          Home
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Conditions</span>
      </nav>

      {/* Body */}
      <div className="px-container-sm sm:px-container py-12">
        {/* How to use this guide */}
        <div className="rounded-xl p-5 mb-10 max-w-3xl bg-brand-surface border border-brand-border">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            How to use this guide
          </div>
          <p className="text-sm text-brand-dark leading-relaxed m-0 mb-3">
            If you are still trying to decide whether to go to the vet, start at the <Link href="/symptoms" className="text-brand-primary font-semibold no-underline hover:underline">symptoms hub</Link> — it organizes presenting signs (vomiting, limping, labored breathing) by urgency. If you already have a diagnosis from your veterinarian, this page is your index of canonical references. Conditions are grouped by the affected body system. Click any condition to read the full reference page.
          </p>
          <p className="text-sm text-brand-dark leading-relaxed m-0">
            This guide is not a substitute for veterinary care. Diagnosis requires physical examination and diagnostic testing — bloodwork, imaging, biopsy — that no website can replace.
          </p>
        </div>

        {/* Most common diagnosed conditions */}
        <section id="most-common" className="mb-12">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
              Highlighted · {HIGHLIGHTED_CONDITIONS.length} most common
            </span>
          </div>
          <h2 className="font-display font-bold text-brand-dark text-2xl mb-2">
            Most commonly diagnosed conditions in dogs
          </h2>
          <p className="text-sm text-brand-text-mid mb-5 max-w-2xl">
            The conditions a general practice diagnoses most often, across all life stages. Each links to its canonical reference page.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {HIGHLIGHTED_CONDITIONS.map((c) => (
              <ConditionCard key={c.slug} condition={c} />
            ))}
          </div>
        </section>

        {/* Emergency tier callout */}
        <section
          id="emergencies"
          className="mb-12 rounded-xl p-6"
          style={{
            background: 'rgba(200,74,42,0.05)',
            border: '1px solid rgba(200,74,42,0.2)',
          }}
        >
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">
            Tier 1 · {EMERGENCY_CONDITIONS.length} emergency conditions
          </div>
          <h2 className="font-display font-bold text-brand-dark text-2xl mb-2">
            Conditions that require emergency care
          </h2>
          <p className="text-sm text-brand-text-mid mb-5 max-w-2xl">
            These diagnoses are life-threatening within hours without veterinary intervention. If you suspect any of these in your dog, drive to the nearest emergency clinic and call ahead so they can prepare. For presenting-sign triage, see the{' '}
            <Link
              href="/symptoms#tier-emergency"
              className="text-brand-danger font-semibold no-underline hover:underline"
            >
              emergency symptoms tier
            </Link>{' '}
            on the symptoms hub.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {EMERGENCY_CONDITIONS.map((c) => (
              <ConditionCard key={c.slug} condition={c} />
            ))}
          </div>
          <div className="mt-5 pt-4 border-t border-brand-border text-xs text-brand-text-mid">
            ASPCA Animal Poison Control · <span className="font-bold text-brand-dark">888-426-4435</span> · 24/7 (consultation fee applies)
          </div>
        </section>

        {/* Body system sections */}
        <div className="mb-4">
          <h2 className="font-display font-bold text-brand-dark text-2xl mb-2">
            All conditions by body system
          </h2>
          <p className="text-sm text-brand-text-mid mb-8 max-w-2xl">
            Every Dog.com clinical reference page indexed by the body system primarily affected. Conditions that span systems are listed under the system of primary clinical presentation.
          </p>
        </div>

        {ALL_BODY_SYSTEMS.map((system) => (
          <BodySystemSection key={system} system={system} />
        ))}

        {/* Cross-links into the broader graph */}
        <section className="mt-4 border-t border-brand-border pt-10">
          <h2 className="font-display font-bold text-brand-dark text-xl mb-4">
            Related references
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
            <Link
              href="/symptoms"
              className="block bg-brand-white border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors"
            >
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-1.5">
                Symptom triage
              </div>
              <div className="font-display font-semibold text-brand-dark text-sm">
                Dog Symptoms A–Z — Triage by Urgency
              </div>
            </Link>
            <Link
              href="/health"
              className="block bg-brand-white border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors"
            >
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1.5">
                Health library
              </div>
              <div className="font-display font-semibold text-brand-dark text-sm">
                Dog Health Library — 100+ guides
              </div>
            </Link>
            <Link
              href="/breeds"
              className="block bg-brand-white border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors"
            >
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1.5">
                Breed risk
              </div>
              <div className="font-display font-semibold text-brand-dark text-sm">
                Breed encyclopedia — condition predispositions
              </div>
            </Link>
            <Link
              href="/find-a-vet"
              className="block bg-brand-white border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors"
            >
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-1.5">
                Emergency
              </div>
              <div className="font-display font-semibold text-brand-dark text-sm">
                Find an emergency vet near you
              </div>
            </Link>
          </div>
        </section>

        {/* FAQ — static, server-rendered for crawler visibility. Matches faqSchema above. */}
        <section className="mt-12 border-t border-brand-border pt-10">
          <h2 className="font-display font-bold text-brand-dark text-xl mb-5">
            Frequently asked questions
          </h2>
          <div className="flex flex-col gap-4 max-w-3xl">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className="border border-brand-border rounded-lg bg-brand-white p-5"
              >
                <h3 className="font-display font-semibold text-brand-dark text-base m-0 mb-2">
                  {item.question}
                </h3>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
