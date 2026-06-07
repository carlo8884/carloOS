/**
 * /adopt — ferret adoption + rescue hub.
 *
 * Organizes the adoption cluster: regional adoption guides (Northeast,
 * Midwest, South, West) and topic guides (rescue vs. breeder, application
 * process, costs, first 30 days, surrender/rehome). Links to the rescue
 * directory and the state legality directory. Informational only; no
 * affiliate CTAs; server component.
 */

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
  CalloutBox,
  CrossPortfolioCard,
} from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'
import { ADOPT_GUIDES } from '@/data/guides/adopt'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferrets-com',
  title: 'Ferret Adoption & Rescue Hub — Regional Guides, Costs, How-To',
  description:
    'How to adopt a ferret responsibly: regional guides for all four US regions, rescue-vs-breeder, the application process, real costs, and rehoming guidance.',
  path: '/adopt',
  type: 'website',
  category: 'Adoption',
})

const REGIONAL = ['northeast', 'midwest', 'south', 'west'] as const
const TOPICS = [
  'rescue-vs-breeder',
  'application-process',
  'adopting-vs-buying-costs',
  'first-30-days',
  'surrender-rehome',
] as const

const FAQS: FAQItem[] = [
  {
    question: 'What is the best way to adopt a ferret?',
    answer:
      'Most ferret organizations recommend starting with a reputable rescue: lower cost, known temperament, and a ferret that needs a home. Use the American Ferret Association accredited-shelter directory and Petfinder filtered to your state, and read your state legality page first.',
  },
  {
    question: 'Where are ferrets illegal, so I cannot adopt?',
    answer:
      'Ferrets are illegal to own in California and Hawaii, and prohibited within New York City. Florida and Pennsylvania require a permit. A reputable rescue will not place a ferret where it is illegal. Check your state page before applying.',
  },
  {
    question: 'How much does adopting a ferret cost?',
    answer:
      'The adoption fee is usually modest, but the real cost is cage and setup, the intake vet exam and vaccinations, and a veterinary reserve for the high baseline rate of endocrine and neoplastic disease ferrets develop with age.',
  },
  {
    question: 'What do ferret rescues ask for in an application?',
    answer:
      'Expect questions about your housing, household, schedule, and veterinary plan, plus confirmation that ferrets are legal where you live. Many rescues conduct an interview and some require a home check to verify a suitable, ferret-proofed setup.',
  },
]

const ADOPT_ALL_SLUGS = [...REGIONAL, ...TOPICS]

const itemListSchema = {
  '@context': 'https://schema.org', '@type': 'ItemList',
  name: 'Ferret Adoption Guides',
  numberOfItems: ADOPT_ALL_SLUGS.length,
  itemListElement: ADOPT_ALL_SLUGS.map((slug, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: (ADOPT_GUIDES[slug].heading ?? ADOPT_GUIDES[slug].title),
    url: `https://ferrets.com/adopt/${slug}`,
  })),
}

const schema = combineSchemas(
  buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://ferrets.com' },
      { name: 'Adopt', url: 'https://ferrets.com/adopt' },
    ],
  }),
  buildFAQSchema({
    questions: FAQS.map((f) => ({
      question: f.question,
      answer: typeof f.answer === 'string' ? f.answer : (f.answerText ?? ''),
    })),
  }),
  itemListSchema,
)

export default function AdoptHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      <Breadcrumb
        items={[
          { name: 'Home', href: '/' },
          { name: 'Adopt', href: '/adopt' },
        ]}
      />

      <div className="px-container-sm sm:px-container py-14 max-w-4xl mx-auto">
        <header className="mb-10">
          <p className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
            Adoption &amp; Rescue
          </p>
          <h1
            className="font-display font-black text-brand-text-dark leading-tight tracking-tighter mb-5"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          >
            Adopting a ferret
          </h1>
          <p className="text-lg text-brand-text-mid leading-relaxed m-0">
            How to bring home a ferret the responsible way — where to look,
            what rescues ask, what it really costs, and how to settle a new
            ferret in. Regional guides cover the legal and logistical
            differences across the country.
          </p>
          <p className="text-xs text-brand-text-light mt-4 m-0">
            By Ferrets.com Editorial &mdash; sourced from cited references.
          </p>
        </header>

        <CalloutBox variant="warning" title="Check legality first">
          <p>
            Before you apply to adopt, confirm ferrets are legal where you
            live. Ownership is prohibited in California, Hawaii, and New York
            City, and Florida and Pennsylvania require a permit. This hub is
            informational, not legal advice &mdash; verify with your state and
            municipality. Start with the{' '}
            <Link href="/states" className="text-brand-primary hover:underline">
              state legality directory
            </Link>
            .
          </p>
        </CalloutBox>

        <section aria-labelledby="regional" className="mb-12 mt-10">
          <h2
            id="regional"
            className="font-display font-bold text-brand-text-dark mb-3"
            style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}
          >
            Adoption by region
          </h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-5">
            The legal landscape, heat risk, rescue density, and veterinary
            access differ by region. Start with the guide for where you live.
          </p>
          <ul className="list-none p-0 m-0 grid gap-4 sm:grid-cols-2">
            {REGIONAL.map((slug) => {
              const g = ADOPT_GUIDES[slug]
              return (
                <li
                  key={slug}
                  className="p-5 rounded-xl border border-brand-border bg-brand-surface"
                >
                  <h3 className="font-display font-bold text-brand-text-dark mb-2 text-lg">
                    <Link
                      href={`/adopt/${slug}`}
                      className="text-brand-text-dark hover:text-brand-primary no-underline"
                    >
                      {g.heading ?? g.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                    {g.dek}
                  </p>
                </li>
              )
            })}
          </ul>
        </section>

        <section aria-labelledby="topics" className="mb-12">
          <h2
            id="topics"
            className="font-display font-bold text-brand-text-dark mb-5"
            style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}
          >
            Adoption how-to &amp; decisions
          </h2>
          <ul className="list-none p-0 m-0 grid gap-4">
            {TOPICS.map((slug) => {
              const g = ADOPT_GUIDES[slug]
              return (
                <li
                  key={slug}
                  className="p-5 rounded-xl border border-brand-border bg-brand-surface"
                >
                  <h3 className="font-display font-bold text-brand-text-dark mb-2 text-lg">
                    <Link
                      href={`/adopt/${slug}`}
                      className="text-brand-text-dark hover:text-brand-primary no-underline"
                    >
                      {g.heading ?? g.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                    {g.dek}
                  </p>
                </li>
              )
            })}
          </ul>
        </section>

        <section
          aria-labelledby="directories"
          className="mb-12 p-6 rounded-xl border border-brand-border bg-brand-surface"
        >
          <h2
            id="directories"
            className="font-display font-bold text-brand-text-dark mb-3"
            style={{ fontSize: '1.25rem' }}
          >
            Where to search
          </h2>
          <ul className="list-disc pl-5 space-y-2 m-0 text-base text-brand-text-mid leading-relaxed">
            <li>
              <Link
                href="/directory/rescues"
                className="text-brand-primary font-medium hover:underline"
              >
                Ferrets.com rescue directory &amp; vetting guide
              </Link>{' '}
              — red and green flags before you commit.
            </li>
            <li>
              <a
                href="https://www.ferret.org/links/shelters.html"
                rel="noopener"
                className="text-brand-primary font-medium hover:underline"
              >
                American Ferret Association shelter directory
              </a>{' '}
              — accredited rescues nationwide.
            </li>
            <li>
              <a
                href="https://www.petfinder.com/search/ferrets-for-adoption/"
                rel="noopener"
                className="text-brand-primary font-medium hover:underline"
              >
                Petfinder ferret search
              </a>{' '}
              — adoptable ferrets from partner shelters, filterable by state.
            </li>
          </ul>
        </section>

        <section aria-labelledby="faq" className="mb-12">
          <h2
            id="faq"
            className="font-display font-bold text-brand-text-dark mb-5"
            style={{ fontSize: '1.5rem' }}
          >
            Frequently asked questions
          </h2>
          <FAQAccordion items={FAQS} includeSchema={false} />
        </section>

        <section aria-labelledby="newsletter" className="mb-12">
          <h2
            id="newsletter"
            className="font-display font-bold text-brand-text-dark mb-3"
            style={{ fontSize: '1.5rem' }}
          >
            Get adoption &amp; legality updates
          </h2>
          <EmailCapture
            siteId="ferrets-com"
            variant="section"
            title="Adoption updates"
            subtitle="One email when our adoption or state legality guidance changes."
            source="adopt-hub"
          />
        </section>

        {/* ─── Cross-portfolio funnel to Ferret.com ──────────────────────── */}
        <div className="mb-12">
          <CrossPortfolioCard
            currentSite="ferrets-com"
            contentType="directory"
            variant="sidebar"
          />
        </div>

        {/* ─── Related Ferrets.com hubs ──────────────────────────────────── */}
        <section
          aria-labelledby="related-hubs"
          className="mb-12 p-6 rounded-xl border border-brand-border bg-brand-surface"
        >
          <h2
            id="related-hubs"
            className="font-display font-bold text-brand-text-dark mb-3"
            style={{ fontSize: '1.25rem' }}
          >
            Other Ferrets.com directories
          </h2>
          <ul className="list-none p-0 m-0 flex flex-col gap-2 text-sm text-brand-text-mid">
            <li>
              <Link href="/states" className="text-brand-primary font-medium hover:underline">
                State-by-state ferret legality directory &rarr;
              </Link>
            </li>
            <li>
              <Link href="/legality" className="text-brand-primary font-medium hover:underline">
                Ferret legality topics (bans, travel, renting) &rarr;
              </Link>
            </li>
            <li>
              <Link href="/acquiring" className="text-brand-primary font-medium hover:underline">
                Acquiring a ferret (checklist + permits) &rarr;
              </Link>
            </li>
            <li>
              <Link href="/moving" className="text-brand-primary font-medium hover:underline">
                Moving with a ferret &rarr;
              </Link>
            </li>
            <li>
              <Link href="/find-a-vet" className="text-brand-primary font-medium hover:underline">
                Find an exotic-pet vet by state &rarr;
              </Link>
            </li>
          </ul>
        </section>

        <footer className="text-sm text-brand-text-light leading-relaxed border-t border-brand-border pt-6">
          By Ferrets.com Editorial &mdash; sourced from cited references. This
          hub is general, informational content about ferret adoption and is
          not legal advice. Laws change. Verify legality with your state and
          municipality before acquiring a ferret.
        </footer>
      </div>
    </>
  )
}
