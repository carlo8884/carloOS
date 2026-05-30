import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildFAQSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
  Breadcrumb,
  FAQAccordion,
  EmailCapture,
} from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  siteId: 'ferrets-com',
  title: 'Ferret Care Library — Diet, Housing, Health, Enrichment | Ferrets.com',
  description:
    'The ferret care library: diet, housing, hygiene, enrichment, travel, multi-ferret households, and senior-ferret care. Evidence-based references for owners.',
  path: '/care',
  type: 'website',
})

// ─── Schema ──────────────────────────────────────────────────────────────────

const FAQS: FAQItem[] = [
  {
    question: 'How is the Ferrets.com care library organized?',
    answer:
      'By owner workflow — what to feed, how to house, how to keep clean, how to enrich, how to travel, how to manage multiple ferrets, and how to care for a senior ferret. Each category contains long-form references that cite the exotic-mammal veterinary literature (Quesenberry & Carpenter; the Journal of Exotic Pet Medicine; the Veterinary Clinics of North America: Exotic Animal Practice) and the American Ferret Association.',
  },
  {
    question: 'Is this site written by veterinarians?',
    answer:
      'No. Ferrets.com is editorial reference content prepared by the Ferrets.com editorial team and grounded in the published exotic-mammal veterinary literature. It is general information about ferret husbandry — not a substitute for individualized care from a veterinarian who has examined your ferret.',
  },
  {
    question: 'What is the difference between Ferret.com and Ferrets.com?',
    answer:
      'Ferret.com is the commercial sister site: buyer guides, product reviews, and an AI shopping assistant. Ferrets.com is the directory and long-form library: care references, the state-by-state exotic-pet vet directory, and the rescue directory. The two sites share an editorial standard but serve different parts of the owner journey.',
  },
  {
    question: 'When will the full care library be live?',
    answer:
      'The first cornerstone pages on Ferret.com are live now (diet basics, insulinoma, cage setup) and are linked from the categories below. The remaining Ferrets.com long-form pages are scheduled across Q3 and Q4 2026 — the categories on this index reflect the planned scope.',
  },
  {
    question: 'Where do these citations come from?',
    answer:
      'Primary sources are Quesenberry KE and Carpenter JW (eds.), Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery (Saunders/Elsevier), the Journal of Exotic Pet Medicine, the Veterinary Clinics of North America: Exotic Animal Practice, the Association of Exotic Mammal Veterinarians (AEMV), and the American Ferret Association (AFA). Where a specific paper or position statement is cited, the citation appears inline on the referenced page.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({
    question: f.question,
    answer: typeof f.answer === 'string' ? f.answer : (f.answerText ?? ''),
  })),
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferrets.com' },
    { name: 'Care Library', url: 'https://ferrets.com/care' },
  ],
})

const schema = combineSchemas(faqSchema, breadcrumbSchema)

// ─── Category data ───────────────────────────────────────────────────────────

interface CategoryCard {
  slug: string
  title: string
  blurb: string
  articles: Array<{ label: string; href?: string; status: 'live' | 'planned' }>
}

const CATEGORIES: CategoryCard[] = [
  {
    slug: 'diet',
    title: 'Diet',
    blurb:
      'Ferrets are obligate carnivores with a 3–4 hour gut transit and no functional cecum. Diet is the single largest controllable input on lifespan and the leading correlate of insulinoma risk.',
    articles: [
      {
        label: 'Diet Basics — obligate-carnivore feeding (Ferret.com)',
        href: 'https://ferret.com/care/diet-basics',
        status: 'live',
      },
      { label: 'Reading a Ferret-Food Ingredient Panel', status: 'planned' },
      { label: 'Raw and Whole-Prey Harm-Reduction Guide', status: 'planned' },
      { label: 'Treats: What Counts as Safe', status: 'planned' },
    ],
  },
  {
    slug: 'housing',
    title: 'Housing',
    blurb:
      'A ferret cage is a bedroom, not a house. Sizing, bar spacing, multi-level layouts, hammocks vs loose bedding, corner litter boxes, and the out-of-cage time minimum.',
    articles: [
      {
        label: 'Cage Setup — sizing, hammocks, litter, ferret-proofing (Ferret.com)',
        href: 'https://ferret.com/care/cage-setup',
        status: 'live',
      },
      { label: 'Ferret-Proofing a Room: the Checklist', status: 'planned' },
      { label: 'Free-Roam vs Caged-with-Playtime', status: 'planned' },
      { label: 'Climate and Heat-Stroke Risk (above 80 F)', status: 'planned' },
    ],
  },
  {
    slug: 'hygiene',
    title: 'Hygiene',
    blurb:
      'Ferrets self-groom but their cage does not. Bedding rotation, ear cleaning, nail trims, dental care, and the truth about bathing frequency — over-bathing is the most common ferret-odor mistake.',
    articles: [
      { label: 'How Often to Bathe a Ferret (Almost Never)', status: 'planned' },
      { label: 'Nail-Trim Without Drama: a Step-by-Step', status: 'planned' },
      { label: 'Ear Cleaning and Ear-Mite Watch', status: 'planned' },
      { label: 'Dental Care and Tartar Prevention', status: 'planned' },
    ],
  },
  {
    slug: 'enrichment',
    title: 'Enrichment',
    blurb:
      'Ferrets are tunnel-dwelling predators. Their behavioral budget is roughly four hours of active exploration, hunting-pattern play, and social interaction per day — meet it or expect destruction.',
    articles: [
      { label: 'Tunnel and Dig-Box Setups', status: 'planned' },
      { label: 'Toy-Rotation Schedules', status: 'planned' },
      { label: 'Training Ferrets — Yes, It Works', status: 'planned' },
      { label: 'Bonding With a Bite-y Ferret', status: 'planned' },
    ],
  },
  {
    slug: 'travel-boarding',
    title: 'Travel & Boarding',
    blurb:
      'Most boarding facilities do not accept ferrets. Travel carriers, climate management, vaccination paperwork (rabies + canine distemper), and how to find a sitter who actually knows ferrets.',
    articles: [
      { label: 'Travel Carriers and In-Car Climate Control', status: 'planned' },
      { label: 'Boarding Options for Ferret Owners', status: 'planned' },
      { label: 'Flying With a Ferret: State and Airline Rules', status: 'planned' },
      { label: 'Vaccination Records for Travel', status: 'planned' },
    ],
  },
  {
    slug: 'multi-ferret-households',
    title: 'Multi-Ferret Households',
    blurb:
      'Ferrets are social and most do better in pairs or small groups — but introductions matter. Quarantine protocols, scent-swapping, the difference between play and fight, and resource-guarding watch.',
    articles: [
      { label: 'Introducing a New Ferret: 14-Day Quarantine', status: 'planned' },
      { label: 'Reading Play vs. Aggression', status: 'planned' },
      { label: 'Litter, Food, and Bedding Counts for Groups', status: 'planned' },
      { label: 'Mixed-Age Households and the Hierarchy Shift', status: 'planned' },
    ],
  },
  {
    slug: 'senior-care',
    title: 'Senior-Ferret Care',
    blurb:
      'The average pet-store ferret lifespan is 5–8 years. After age 4, screening cadence for insulinoma, adrenal disease, and lymphoma changes. End-of-life decisions deserve advance planning.',
    articles: [
      { label: 'The 4-Year Wellness Pivot', status: 'planned' },
      { label: 'Adrenal Disease — Signs Owners Miss', status: 'planned' },
      { label: 'Comfort Care for a Ferret With Cancer', status: 'planned' },
      { label: 'Quality-of-Life Scoring for Older Ferrets', status: 'planned' },
    ],
  },
]

// ─── Page ────────────────────────────────────────────────────────────────────

export default function CareHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      <Breadcrumb
        items={[
          { name: 'Home', href: '/' },
          { name: 'Care Library', href: '/care' },
        ]}
      />

      <div className="px-container-sm sm:px-container py-12 max-w-4xl mx-auto">
        {/* ─── Header ─────────────────────────────────────────────────── */}
        <header className="mb-10">
          <p className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
            Ferrets.com Library
          </p>
          <h1 className="font-display font-black text-brand-text-dark leading-tight tracking-tighter mb-5"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
            Ferret Care Library
          </h1>
          <p className="text-lg text-brand-text-mid leading-relaxed">
            A long-form reference for ferret owners. Diet, housing, hygiene,
            enrichment, travel, multi-ferret households, and senior-ferret care
            — grounded in the exotic-mammal veterinary literature and the
            American Ferret Association&rsquo;s owner-facing guidance.
          </p>
        </header>

        {/* ─── TL;DR ──────────────────────────────────────────────────── */}
        <aside
          className="mb-12 p-6 rounded-xl border border-brand-border bg-brand-surface"
          aria-label="TL;DR"
        >
          <p className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-2">
            TL;DR
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed m-0">
            Ferret husbandry is unusual: obligate-carnivore physiology, a short
            lifespan, a high baseline rate of endocrine and neoplastic disease,
            and a tendency for general-practice vets to see fewer than ten cases
            a year. The seven categories below are how the library is
            organized. Cornerstones that already exist on the sister site
            (Ferret.com) are linked inline; the remaining long-form pages are
            scheduled for Q3 and Q4 2026.
          </p>
        </aside>

        {/* ─── Category index ────────────────────────────────────────── */}
        <section aria-labelledby="categories" className="mb-12">
          <h2 id="categories" className="font-display font-bold text-brand-text-dark mb-6"
              style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}>
            Browse by Category
          </h2>

          <ul className="list-none p-0 m-0 grid gap-5">
            {CATEGORIES.map((cat) => (
              <li
                key={cat.slug}
                className="p-6 rounded-xl border border-brand-border bg-brand-surface"
              >
                <h3 className="font-display font-bold text-brand-text-dark mb-2"
                    style={{ fontSize: '1.375rem' }}>
                  {cat.title}
                </h3>
                <p className="text-base text-brand-text-mid leading-relaxed mb-4">
                  {cat.blurb}
                </p>
                <ul className="list-none p-0 m-0 space-y-2">
                  {cat.articles.map((a) => (
                    <li key={a.label} className="text-sm text-brand-text-mid">
                      {a.status === 'live' && a.href ? (
                        <a
                          href={a.href}
                          className="text-brand-primary font-medium hover:underline"
                          rel="noopener"
                        >
                          {a.label} →
                        </a>
                      ) : (
                        <span className="text-brand-text-light">
                          {a.label} <em>— planned Q3 2026</em>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        {/* ─── Two-domain callout ─────────────────────────────────────── */}
        <section
          aria-labelledby="two-domain"
          className="mb-12 p-7 rounded-xl border-2 border-brand-primary/20 bg-brand-primary/5"
        >
          <h2
            id="two-domain"
            className="font-display font-bold text-brand-text-dark mb-3"
            style={{ fontSize: '1.5rem' }}
          >
            What&rsquo;s the difference between Ferret.com and Ferrets.com?
          </h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-3">
            Two sister sites, one editorial standard, different jobs.
          </p>
          <ul className="text-base text-brand-text-mid leading-relaxed space-y-2 mb-3">
            <li>
              <strong>
                <a
                  href="https://ferret.com"
                  rel="noopener"
                  className="text-brand-primary hover:underline"
                >
                  Ferret.com
                </a>
              </strong>{' '}
              is the commercial reference. Buyer guides for cages, food, and
              health supplies; product reviews; the AI shopping assistant for
              new owners. If you are about to spend money on gear or pick a
              kibble at the pet store, start there.
            </li>
            <li>
              <strong>Ferrets.com</strong> is the directory and long-form
              library. The state-by-state exotic-pet vet directory, the rescue
              directory, and the full care reference. If you are trying to find
              a vet, find a rescue, or read the long version of why ferrets
              cannot eat fruit, you are in the right place.
            </li>
          </ul>
          <p className="text-sm text-brand-text-light leading-relaxed m-0">
            Both sites are produced by the same editorial team and adhere to
            the same QC standards. The split is workflow, not authority.
          </p>
        </section>

        {/* ─── Email capture ──────────────────────────────────────────── */}
        <section aria-labelledby="newsletter" className="mb-12">
          <h2
            id="newsletter"
            className="font-display font-bold text-brand-text-dark mb-3"
            style={{ fontSize: '1.5rem' }}
          >
            Get notified when the next reference lands
          </h2>
          <EmailCapture
            siteId="ferrets-com"
            variant="section"
            title="Ferret Library Updates"
            subtitle="One email per new long-form page. No product pitches."
            source="care-hub"
          />
        </section>

        {/* ─── FAQ ────────────────────────────────────────────────────── */}
        <section aria-labelledby="faq" className="mb-12">
          <h2
            id="faq"
            className="font-display font-bold text-brand-text-dark mb-5"
            style={{ fontSize: '1.5rem' }}
          >
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={FAQS} includeSchema={false} />
        </section>

        {/* ─── Closing note ───────────────────────────────────────────── */}
        <footer className="text-sm text-brand-text-light leading-relaxed border-t border-brand-border pt-6">
          This index is general information about ferret husbandry. It is not
          a substitute for individualized veterinary advice. For clinical
          questions about a specific ferret, work with a veterinarian who
          actively treats ferrets — see{' '}
          <Link href="/find-a-vet" className="text-brand-primary hover:underline">
            Find an Exotic-Pet Vet
          </Link>
          .
        </footer>
      </div>
    </>
  )
}
