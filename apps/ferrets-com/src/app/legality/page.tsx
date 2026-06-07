/**
 * /legality — hub for cross-cutting ferret-legality topics that complement
 * the per-state directory. Links the "where illegal" overview, the bans
 * explainer, city-vs-state, rabies law, travel, renting, how laws change,
 * and service/ESA status. Informational only; server component.
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
import { LEGALITY_GUIDES } from '@/data/guides/legality'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferrets-com',
  title: 'Ferret Legality Topics — Bans, Permits, Travel, Renting & More',
  description:
    'Cross-cutting ferret-legality topics: where ferrets are illegal, why bans exist, city-vs-state law, rabies law, travel, renting, and service/ESA status.',
  path: '/legality',
  type: 'website',
  category: 'Legality',
})

const TOPICS = [
  'where-are-ferrets-illegal',
  'why-ferrets-are-banned',
  'city-vs-state-law',
  'rabies-vaccination-laws',
  'traveling-with-a-ferret',
  'renting-with-a-ferret',
  'how-laws-change',
  'service-and-emotional-support',
]

const FAQS: FAQItem[] = [
  {
    question: 'Where are ferrets illegal in the US?',
    answer:
      'Ferrets are illegal to own in California and Hawaii and prohibited within New York City. Florida and Pennsylvania require a permit. Everywhere else they are legal with standard rabies vaccination, subject to local ordinances.',
  },
  {
    question: 'Can a city ban ferrets if my state allows them?',
    answer:
      'Yes. Municipal ordinances can ban ferrets even where the state permits them, and the local rule controls at your address. Always check both your state and your municipality.',
  },
  {
    question: 'Is this site legal advice?',
    answer:
      'No. Ferrets.com legality content is informational reference material citing public-record law. The authoritative sources are your state agency and your municipality; verify with them before acting.',
  },
]

const itemListSchema = {
  '@context': 'https://schema.org', '@type': 'ItemList',
  name: 'Ferret Legality Topics',
  numberOfItems: TOPICS.length,
  itemListElement: TOPICS.map((slug, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: (LEGALITY_GUIDES[slug].heading ?? LEGALITY_GUIDES[slug].title),
    url: `https://ferrets.com/legality/${slug}`,
  })),
}

const schema = combineSchemas(
  buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://ferrets.com' },
      { name: 'Legality', url: 'https://ferrets.com/legality' },
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

export default function LegalityHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      <Breadcrumb
        items={[
          { name: 'Home', href: '/' },
          { name: 'Legality', href: '/legality' },
        ]}
      />

      <div className="px-container-sm sm:px-container py-14 max-w-4xl mx-auto">
        <header className="mb-10">
          <p className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
            Legality Topics
          </p>
          <h1
            className="font-display font-black text-brand-text-dark leading-tight tracking-tighter mb-5"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          >
            Ferret legality topics
          </h1>
          <p className="text-lg text-brand-text-mid leading-relaxed m-0">
            The questions that cut across states: where ferrets are banned and
            why, how city rules can override state legality, rabies and travel
            law, renting with a ferret, and how the rules change. For your
            specific state, use the{' '}
            <Link href="/states" className="text-brand-primary hover:underline">
              state legality directory
            </Link>
            .
          </p>
          <p className="text-xs text-brand-text-light mt-4 m-0">
            By Ferrets.com Editorial &mdash; sourced from cited references.
          </p>
        </header>

        <CalloutBox variant="warning" title="Informational, not legal advice">
          <p>
            These topic pages are general, informational content about ferret
            law. Laws change and local ordinances vary. Verify the current
            rules with your state Fish &amp; Wildlife department, your state
            Department of Agriculture, and your municipality before acquiring,
            moving, or traveling with a ferret.
          </p>
        </CalloutBox>

        <section aria-labelledby="topics" className="mb-12 mt-10">
          <h2
            id="topics"
            className="font-display font-bold text-brand-text-dark mb-5"
            style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}
          >
            Browse the topics
          </h2>
          <ul className="list-none p-0 m-0 grid gap-4">
            {TOPICS.map((slug) => {
              const g = LEGALITY_GUIDES[slug]
              return (
                <li
                  key={slug}
                  className="p-5 rounded-xl border border-brand-border bg-brand-surface"
                >
                  <h3 className="font-display font-bold text-brand-text-dark mb-2 text-lg">
                    <Link
                      href={`/legality/${slug}`}
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
            Get legality updates
          </h2>
          <EmailCapture
            siteId="ferrets-com"
            variant="section"
            title="Legality watch"
            subtitle="One email when our ferret-legality guidance changes."
            source="legality-hub"
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
              <Link href="/adopt" className="text-brand-primary font-medium hover:underline">
                Adopting a ferret (regional guides) &rarr;
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
          hub is general, informational content and is not legal advice. Laws
          change. Verify with your state and municipality before acting.
        </footer>
      </div>
    </>
  )
}
