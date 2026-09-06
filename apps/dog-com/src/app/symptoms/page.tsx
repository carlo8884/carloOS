/**
 * Dog.com — /symptoms hub index.
 *
 * Canonical authority entry surface for the dog-symptoms cluster.
 *
 * What this page does:
 *   - Groups every symptom in src/data/symptoms.ts by urgency tier
 *     (Emergency / Urgent / Monitor at home)
 *   - Links each row to the canonical /health/<slug> reference page that
 *     covers the underlying condition (or the master /health/dog-symptoms-guide
 *     where the symptom is covered there)
 *   - Renders JSON-LD CollectionPage + ItemList + FAQPage schema for AI
 *     surfaces (Google AI Overviews, ChatGPT, Perplexity, Claude) to discover
 *     the cluster's canonical entry point
 *   - Cross-links the breed-risk hub (/breeds) and the master symptoms guide
 *     so internal-link equity flows back into the broader graph
 *
 * Trust-bar (QC-STANDARDS.md §1):
 *   - Byline is "Dog.com Editorial" — no fabricated DVM credentials
 *   - No first-person hands-on claims
 *   - Affiliate disclosure sits above kitchen-kit hops; Chewy stays omitted
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AffiliateDisclosure,
  buildMetadata,
  buildBreadcrumbSchema,
  buildFAQSchema,
  combineSchemas,
  EmailCapture,
  SchemaScript,
  ShopCtas,
  StockImage,
  CrossPortfolioCard,
} from '@carloOS/ui'
import { getSiteConfig } from '@carloOS/config'
import {
  SYMPTOMS,
  EMERGENCY_SYMPTOMS,
  URGENT_SYMPTOMS,
  MONITOR_SYMPTOMS,
  type Symptom,
  type SymptomUrgency,
} from '../../data/symptoms'

const PAGE_PATH = '/symptoms'
// NOTE: title + description are inline string literals (not extracted to
// constants) because scripts/ci/metadata-policy.mjs uses a regex to verify the
// raw quoted values for length + uniqueness in CI.
const PAGE_TITLE_FOR_SCHEMA = 'Dog Symptoms A–Z — Triage by Urgency'
const PAGE_DESCRIPTION_FOR_SCHEMA =
  'Dog symptoms organized by urgency: which signs need the ER, which need a same-day vet, and which can be monitored at home. Canonical reference index.'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Symptoms A–Z — Triage by Urgency',
  description:
    'Dog symptoms organized by urgency: which signs need the ER, which need a same-day vet, and which can be monitored at home. Canonical reference index.',
  path: PAGE_PATH,
  category: 'Symptom Reference',
})

// ─────────────────────────────────────────────
// Schema
// ─────────────────────────────────────────────

const siteConfig = getSiteConfig('dog-com')
const pageUrl = `${siteConfig.theme.siteUrl}${PAGE_PATH}`

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: siteConfig.theme.siteUrl },
    { name: 'Symptoms', url: pageUrl },
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
    name: 'Dog symptoms and triage',
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
  name: 'Dog symptoms by urgency',
  numberOfItems: SYMPTOMS.length,
  itemListOrder: 'https://schema.org/ItemListOrderDescending',
  itemListElement: SYMPTOMS.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.title,
    description: s.briefDescription,
    url: `${siteConfig.theme.siteUrl}${s.learnMoreHref}`,
  })),
}

const FAQ_ITEMS: Array<{ question: string; answer: string }> = [
  {
    question: 'How do I know if a dog symptom is an emergency?',
    answer:
      'Symptoms tagged Emergency on this page warrant immediate emergency veterinary care: labored breathing, pale or blue gums, sudden collapse, a distended abdomen with retching, a seizure lasting more than two minutes, suspected poisoning, uncontrolled bleeding, or an eye injury. When in doubt, call your nearest emergency clinic before driving in — most will triage by phone at no cost.',
  },
  {
    question: 'What is the difference between Urgent and Emergency?',
    answer:
      'Emergency symptoms require care within minutes to hours; waiting risks death or permanent injury. Urgent symptoms require care within the same day or next morning — they are not safe to wait a week on, but they typically allow time to reach your regular vet during business hours rather than driving to the ER overnight.',
  },
  {
    question: 'Can I treat dog vomiting or diarrhea at home?',
    answer:
      'A single isolated episode of vomiting or diarrhea in an otherwise normal adult dog can be monitored at home with a brief food rest. Any blood, more than three episodes in 24 hours, vomiting or diarrhea in a puppy or senior dog, or any GI sign accompanied by lethargy warrants a vet visit. Dehydration is the primary risk and develops faster than most owners expect.',
  },
  {
    question: 'How fast does dog bloat (GDV) become fatal?',
    answer:
      'Gastric dilatation-volvulus is fatal within hours without surgical intervention. The classic triad is a visibly bloated or hard abdomen, non-productive retching, and restlessness or pacing, typically in a deep-chested large or giant breed. If you see this pattern, drive to the ER immediately — do not wait to see whether it resolves.',
  },
  {
    question: 'What number should I call for suspected poisoning?',
    answer:
      'ASPCA Animal Poison Control: 888-426-4435. The line is staffed by veterinary toxicologists 24 hours a day, 7 days a week (a per-incident consultation fee applies). Call this number and your emergency vet simultaneously. For many toxins — xylitol, anticoagulant rodenticide, certain mushrooms — treatment is most effective before symptoms appear.',
  },
  {
    question: 'Why does this page link to /health/ pages instead of a separate symptom write-up?',
    answer:
      'Each symptom on this list links to the canonical Dog.com reference page for the underlying condition: dog-vomiting, dog-seizures, dog-bloat-gvd, dog-allergies, and so on. Centralizing the long-form content there avoids duplicate references and lets us keep one source of truth per condition.',
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
// Visual treatment per tier (re-uses brand tokens)
// ─────────────────────────────────────────────

const TIER_STYLES: Record<
  SymptomUrgency,
  {
    eyebrow: string
    heading: string
    intro: string
    badge: string
    badgeColor: string
    badgeBg: string
    border: string
    bg: string
  }
> = {
  emergency: {
    eyebrow: 'Tier 1',
    heading: 'Emergency — go to the ER now',
    intro:
      'These signs require immediate emergency veterinary care. Tissue damage or death can occur within minutes to hours. Do not wait for morning, and do not try to drive home first.',
    badge: 'ER now',
    badgeColor: '#C84A2A',
    badgeBg: 'rgba(200,74,42,0.1)',
    border: 'rgba(200,74,42,0.18)',
    bg: 'rgba(200,74,42,0.05)',
  },
  urgent: {
    eyebrow: 'Tier 2',
    heading: 'Urgent — see a vet today or tomorrow',
    intro:
      'These signs are not safe to wait a week on, but typically allow time to reach your regular vet within 24 hours during business hours. Worsening at any point means escalate to the ER.',
    badge: 'Same-day',
    badgeColor: '#C8952A',
    badgeBg: 'rgba(200,149,42,0.1)',
    border: 'rgba(200,149,42,0.15)',
    bg: 'rgba(200,149,42,0.05)',
  },
  monitor: {
    eyebrow: 'Tier 3',
    heading: 'Monitor at home — book a routine vet visit',
    intro:
      'These signs can be observed for a few days and then evaluated at a routine appointment. Document onset, frequency, and any pattern — your notes are the most useful diagnostic input the vet has.',
    badge: 'Monitor',
    badgeColor: '#2A7A3F',
    badgeBg: 'rgba(42,122,63,0.1)',
    border: 'rgba(42,122,63,0.15)',
    bg: 'rgba(42,122,63,0.04)',
  },
}

function SymptomCard({ symptom }: { symptom: Symptom }) {
  const style = TIER_STYLES[symptom.urgency]
  return (
    <Link
      key={symptom.slug}
      href={symptom.learnMoreHref}
      id={symptom.slug}
      className="block no-underline rounded-xl p-5 mb-3 hover:shadow-sm transition-shadow"
      style={{ background: style.bg, border: `1px solid ${style.border}` }}
    >
      <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
        <h3 className="font-display font-bold text-brand-dark text-base m-0 leading-snug">
          {symptom.title}
        </h3>
        <span
          className="text-2xs font-bold tracking-eyebrow uppercase px-2.5 py-0.5 rounded-pill flex-shrink-0"
          style={{ background: style.badgeBg, color: style.badgeColor }}
        >
          {style.badge}
        </span>
      </div>
      <p className="text-sm text-brand-text-mid leading-relaxed m-0">
        {symptom.briefDescription}
      </p>
      <div className="mt-3 text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
        Read full reference →
      </div>
    </Link>
  )
}

function TierSection({
  urgency,
  symptoms,
}: {
  urgency: SymptomUrgency
  symptoms: Symptom[]
}) {
  if (symptoms.length === 0) return null
  const style = TIER_STYLES[urgency]
  return (
    <section id={`tier-${urgency}`} className="mb-12">
      <div className="flex items-center gap-2.5 mb-2">
        <span
          className="w-6 h-0.5"
          style={{ background: style.badgeColor }}
          aria-hidden="true"
        />
        <span
          className="text-2xs font-bold tracking-eyebrow uppercase"
          style={{ color: style.badgeColor }}
        >
          {style.eyebrow} · {symptoms.length} sign{symptoms.length === 1 ? '' : 's'}
        </span>
      </div>
      <h2 className="font-display font-bold text-brand-dark text-2xl mb-2">
        {style.heading}
      </h2>
      <p className="text-sm text-brand-text-mid mb-5 max-w-2xl">{style.intro}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {symptoms.map((s) => (
          <SymptomCard key={s.slug} symptom={s} />
        ))}
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────

export default function SymptomsHubPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />

      {/* Hero */}
      <div className="bg-brand-dark px-container-sm sm:px-container py-14 relative overflow-hidden">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Symptom Reference
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4"
          style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
        >
          Dog Symptoms A–Z
        </h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed mb-2">
          Every symptom listed here is tagged with the action it warrants: emergency, same-day vet, or monitor at home. Click any sign to read the full reference page for that condition.
        </p>
        <p className="text-xs text-white/40">
          By Dog.com Editorial · Sourced from ACVIM consensus statements, AAHA guidelines, Merck Veterinary Manual, VCA Animal Hospitals, and ASPCA Animal Poison Control.
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
        <span className="text-brand-text-mid font-medium">Symptoms</span>
      </nav>

      <div className="px-container-sm sm:px-container pt-8">
        <StockImage manifestKey="dog-com:symptoms-hero" aspect="16:9" variant="wide" priority />
      </div>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-content-wide mx-auto">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the dog symptoms-hub checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Dog symptoms-hub checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-dog-symptoms-triage-chart,
            fridge-symptoms-library-card, and
            canine-symptoms-reference-handbook notes that
            match the urgency-tier-map, presenting-sign-log,
            and owner-action-triage-grounding copy on this
            hub — a laminated dog symptoms triage chart so
            the emergency / urgent / monitor map is posted
            on the fridge (not a tools-hub calculator chart,
            not a reviews buyer-guide chart, not a nutrition
            feeding chart, not a training session chart,
            not a guides section-map chart, not a breeds
            profile chart, not a conditions body-system
            chart), a dog fridge symptoms library card so
            each presenting-sign spoke is labeled on the
            fridge (not a measurement card, not a reviews
            comparison card, not a WSAVA label card, not a
            training cue card, not a guides prep card, not
            a breeds library card, not a conditions library
            card), and a canine symptoms reference handbook
            so the owner-action-triage grounding is a
            physical kitchen book (not a calculator
            handbook, not a reviews handbook, not a
            nutrition handbook, not a training handbook,
            not a guides handbook, not a breeds handbook,
            not a conditions handbook). Educational kitchen
            checklist, not a ranked medication list, not a
            child gauze / thermometer hop, and not a
            substitute for a veterinarian. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="dog-com"
            title="Dog symptoms-hub checklist"
            subtitle="Email the symptoms-triage-chart, fridge library-card, and symptoms-handbook notes. No spam."
            ctaText="Email my dog symptoms-hub checklist"
            source="symptoms-hub-under-hero"
          />
        </div>
      </section>

      {/* Body */}
      <div className="px-container-sm sm:px-container py-12">
        {/* Rule #1 callout — mirrors the master guide voice */}
        <div
          className="rounded-xl p-5 mb-10 max-w-3xl"
          style={{
            background: 'rgba(200,74,42,0.05)',
            border: '1px solid rgba(200,74,42,0.2)',
          }}
        >
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">
            Rule #1
          </div>
          <p className="text-sm text-brand-dark leading-relaxed m-0">
            When in doubt, call your emergency veterinary clinic before driving anywhere. Most will triage your situation over the phone at no cost and tell you whether to come in immediately. This single call is often the most important decision you make.
          </p>
          <div className="mt-3 pt-3 border-t border-brand-border text-xs text-brand-text-mid">
            ASPCA Animal Poison Control · <span className="font-bold text-brand-dark">888-426-4435</span> · 24/7 (consultation fee applies)
          </div>
        </div>

        {/* Tier sections */}
        <TierSection urgency="emergency" symptoms={EMERGENCY_SYMPTOMS} />
        <TierSection urgency="urgent" symptoms={URGENT_SYMPTOMS} />
        <TierSection urgency="monitor" symptoms={MONITOR_SYMPTOMS} />

        {/* Cross-links into the broader graph */}
        <section className="mt-4 border-t border-brand-border pt-10">
          <h2 className="font-display font-bold text-brand-dark text-xl mb-4">
            Related references
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
            <Link
              href="/health/dog-symptoms-guide"
              className="block bg-brand-white border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors"
            >
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-1.5">
                Master guide
              </div>
              <div className="font-display font-semibold text-brand-dark text-sm">
                15 Dog Symptoms You Should Never Ignore
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

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mb-4 max-w-content-wide">
          Symptoms-hub kitchen kit
        </h2>
        <p className="max-w-content-wide text-sm text-brand-text-mid leading-relaxed">
          Everyday physical supplies that match the
          urgency-tier-map, presenting-sign-log, and
          owner-action-triage-grounding copy on this hub — a
          laminated dog symptoms triage chart so the
          emergency / urgent / monitor map is posted on the
          fridge, a dog fridge symptoms library card so each
          presenting-sign spoke is labeled on the fridge,
          and a canine symptoms reference handbook so the
          owner-action-triage grounding is a physical
          kitchen book. These are educational kitchen
          searches, not a ranked medication list, not a
          substitute for a veterinarian, not a tools-hub /
          reviews-hub / nutrition-hub / training-hub /
          guides-hub / breeds-hub / conditions-hub hop, and
          not a child gauze / thermometer hop (those live on
          guides children). This page does not hop
          medications or vaccines. This page does not claim
          hands-on testing.
        </p>

        <div className="max-w-content-wide mt-6">
          <AffiliateDisclosure variant="inline" siteId="dog-com" />
        </div>

        {/* Money path — live amazon-brand search hops
            (laminated dog symptoms triage chart /
            dog fridge symptoms library card /
            canine symptoms reference handbook).
            Educational kitchen searches only; no Rx /
            vaccine / flea hops.
            ShopCtas hides empty Chewy; never href="#"
            or PLACEHOLDER. Unused vs tools / reviews /
            nutrition / training / guides / breeds /
            conditions kitchen kits and child
            wound+care+gauze / digital+pet+thermometer
            hops. Directory import left untouched.
            Do not re-open #1165 / what-to-expect. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-content-wide">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the symptoms-hub kitchen kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page urgency-tier-map, presenting-sign-log,
            and owner-action-triage-grounding copy — a
            laminated dog symptoms triage chart, a dog
            fridge symptoms library card, and a canine
            symptoms reference handbook. Educational
            kitchen searches only. They are not a ranked
            medication list, they are not a tools-hub /
            reviews-hub / nutrition-hub / training-hub /
            guides-hub / breeds-hub / conditions-hub hop,
            they are not a child gauze hop, and they do
            not replace a veterinarian. Dog.com earns a
            commission on qualifying purchases at no extra
            cost to you. Empty Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+dog+symptoms+triage+chart?s=symptoms-hub"
              amazonLabel="Browse laminated dog symptoms triage charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/dog+fridge+symptoms+library+card?s=symptoms-hub"
              amazonLabel="Browse dog fridge symptoms library cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/canine+symptoms+reference+handbook?s=symptoms-hub"
              amazonLabel="Browse canine symptoms reference handbooks on Amazon →"
            />
          </div>
        </div>
      </section>

      <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="footer" />
    </>
  )
}
