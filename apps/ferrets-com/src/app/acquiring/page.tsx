/**
 * /acquiring — hub for the logistics of legally and responsibly getting a
 * ferret. Links the checklist, permits/licensing, vaccination/records,
 * selection, transport, supplies, due-diligence questions, and the
 * one-or-two decision. Informational only; no affiliate CTAs; server
 * component.
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
import { PageMasthead } from '@/components/PageMasthead'
import { ACQUIRING_GUIDES, ACQUIRING_SLUGS } from '@/data/guides/acquiring'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferrets-com',
  title: 'Acquiring a Ferret — Permits, Vaccination, Transport & Setup',
  description:
    'Getting a ferret the right way: pre-acquisition checklist, permits and licensing, vaccination and records, choosing a healthy ferret, transport, and supplies.',
  path: '/acquiring',
  type: 'website',
  category: 'Acquiring',
})

const ORDER = [
  'pre-purchase-checklist',
  'permits-and-licensing',
  'vaccination-records',
  'choosing-a-healthy-ferret',
  'questions-to-ask-source',
  'one-ferret-or-two',
  'first-supplies',
  'interstate-transport',
]

const FAQS: FAQItem[] = [
  {
    question: 'What is the right order to get a ferret?',
    answer:
      'Confirm legality where you live, line up an exotic-mammal vet, set up housing and a ferret-proofed space, budget for setup plus a veterinary reserve, and assess the daily time commitment — then choose your source and acquire the animal.',
  },
  {
    question: 'Do I need a permit to get a ferret?',
    answer:
      'In Florida (a no-cost Class III wildlife permit) and Pennsylvania (an Exotic Wildlife Possession Permit), yes. Most other states require only rabies vaccination, and some cities add a pet license. Verify with the state agency before acquiring.',
  },
  {
    question: 'Can I transport a ferret across state lines?',
    answer:
      'Generally yes, except into California or Hawaii, where ferrets are illegal, and into Florida or Pennsylvania without arranging a permit first. Carry rabies documentation and check airline and destination-state rules.',
  },
]

const ACQUIRING_ORDER_FILTERED = ORDER.filter((slug) => ACQUIRING_SLUGS.includes(slug))

const itemListSchema = {
  '@context': 'https://schema.org', '@type': 'ItemList',
  name: 'Acquiring a Ferret — Step-by-Step Guides',
  numberOfItems: ACQUIRING_ORDER_FILTERED.length,
  itemListElement: ACQUIRING_ORDER_FILTERED.map((slug, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: (ACQUIRING_GUIDES[slug].heading ?? ACQUIRING_GUIDES[slug].title),
    url: `https://ferrets.com/acquiring/${slug}`,
  })),
}

const schema = combineSchemas(
  buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://ferrets.com' },
      { name: 'Acquiring', url: 'https://ferrets.com/acquiring' },
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

export default function AcquiringHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      <Breadcrumb
        items={[
          { name: 'Home', href: '/' },
          { name: 'Acquiring', href: '/acquiring' },
        ]}
      />

      <div className="px-container-sm sm:px-container py-14 max-w-4xl mx-auto">
        <PageMasthead
          eyebrow="Acquiring a Ferret"
          heading="Acquiring a ferret, the right way"
          dek="The legal and logistical steps between deciding you want a ferret and actually bringing one home — permits, vaccination, choosing a healthy animal, transport, and setup. Work through them in order."
          manifestKey="ferrets-com:acquiring-masthead"
          fallbackKey="ferrets-com:hero"
          alt="A young ferret being held by its new owner"
        />
        <p className="text-xs text-brand-text-light mb-8 -mt-4 m-0">
          By Ferrets.com Editorial &mdash; sourced from cited references.
        </p>

        <CalloutBox variant="info" title="Start with legality">
          <p>
            Every other step assumes ferrets are legal where you live.
            Ownership is prohibited in California, Hawaii, and New York City,
            and Florida and Pennsylvania require a permit. This hub is
            informational, not legal advice. Begin with the{' '}
            <Link href="/states" className="text-brand-primary hover:underline">
              state legality directory
            </Link>
            .
          </p>
        </CalloutBox>

        <section aria-labelledby="steps" className="mb-12 mt-10">
          <h2
            id="steps"
            className="font-display font-bold text-brand-text-dark mb-5"
            style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}
          >
            The acquiring sequence
          </h2>
          <ol className="list-none p-0 m-0 flex flex-col gap-4">
            {ORDER.filter((slug) => ACQUIRING_SLUGS.includes(slug)).map(
              (slug, i) => {
                const g = ACQUIRING_GUIDES[slug]
                return (
                  <li
                    key={slug}
                    className="p-5 rounded-xl border border-brand-border bg-brand-surface flex gap-4"
                  >
                    <span className="w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-brand-text-dark mb-1 text-lg">
                        <Link
                          href={`/acquiring/${slug}`}
                          className="text-brand-text-dark hover:text-brand-primary no-underline"
                        >
                          {g.heading ?? g.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                        {g.dek}
                      </p>
                    </div>
                  </li>
                )
              },
            )}
          </ol>
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
            Get legality &amp; acquiring updates
          </h2>
          <EmailCapture
            siteId="ferrets-com"
            variant="section"
            title="Acquiring updates"
            subtitle="One email when our acquiring or state legality guidance changes."
            source="acquiring-hub"
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
              <Link href="/adopt" className="text-brand-primary font-medium hover:underline">
                Adopting a ferret (regional guides) &rarr;
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
          hub is general, informational content and is not legal or veterinary
          advice. Laws change. Verify legality and permit requirements with
          your state and municipality before acquiring a ferret.
        </footer>
      </div>
    </>
  )
}
