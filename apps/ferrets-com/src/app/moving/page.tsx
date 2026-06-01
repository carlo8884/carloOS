/**
 * /moving — hub for relocating with a ferret. Links the ban-state, permit-
 * state, cross-country, international, and find-a-vet-after-moving guides.
 * Informational only; server component.
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
} from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'
import { MOVING_GUIDES } from '@/data/guides/moving'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferrets-com',
  title: 'Moving With a Ferret — Ban States, Permits, Cross-Country & Abroad',
  description:
    'How to relocate with a ferret: what to do when moving to a ban state, permit steps for Florida and Pennsylvania, the cross-country move checklist, international relocation, and finding a vet after moving.',
  path: '/moving',
  type: 'website',
  category: 'Moving',
})

const TOPICS = [
  'to-a-ban-state',
  'to-a-permit-state',
  'cross-country-move',
  'international-relocation',
  'finding-a-vet-after-moving',
]

const FAQS: FAQItem[] = [
  {
    question: 'Can I move anywhere with my ferret?',
    answer:
      'No. You cannot bring a ferret into California or Hawaii, and not into New York City. Florida and Pennsylvania require a permit. For all other US destinations, confirm the state and local rules and carry rabies documentation.',
  },
  {
    question: 'What is the first step when moving with a ferret?',
    answer:
      'Confirm the destination allows ferrets and arrange any required permit before you move. Then prepare documentation, plan heat-safe transport, and set up the new home before arrival.',
  },
  {
    question: 'What if I am moving somewhere ferrets are banned?',
    answer:
      'You cannot bring the ferret. The responsible options are rehoming to a vetted owner or rescue in a permissive area, or arranging a caretaker in a legal location. Never smuggle or abandon a ferret.',
  },
]

const schema = combineSchemas(
  buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://ferrets.com' },
      { name: 'Moving', url: 'https://ferrets.com/moving' },
    ],
  }),
  buildFAQSchema({
    questions: FAQS.map((f) => ({
      question: f.question,
      answer: typeof f.answer === 'string' ? f.answer : (f.answerText ?? ''),
    })),
  }),
)

export default function MovingHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      <Breadcrumb
        items={[
          { name: 'Home', href: '/' },
          { name: 'Moving', href: '/moving' },
        ]}
      />

      <div className="px-container-sm sm:px-container py-14 max-w-4xl mx-auto">
        <header className="mb-10">
          <p className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
            Moving With a Ferret
          </p>
          <h1
            className="font-display font-black text-brand-text-dark leading-tight tracking-tighter mb-5"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          >
            Moving with a ferret
          </h1>
          <p className="text-lg text-brand-text-mid leading-relaxed m-0">
            Relocation raises legality questions a regular move does not.
            Whether you are crossing state lines, heading to a permit state, or
            facing a move to a place that bans ferrets entirely, here is how to
            handle it responsibly.
          </p>
          <p className="text-xs text-brand-text-light mt-4 m-0">
            By Ferrets.com Editorial &mdash; sourced from cited references.
          </p>
        </header>

        <CalloutBox variant="warning" title="Check the destination first">
          <p>
            Before any ferret move, confirm the destination allows ferrets.
            You cannot bring one into California, Hawaii, or New York City, and
            Florida and Pennsylvania require a permit. This hub is
            informational, not legal advice &mdash; verify with the destination
            state and municipality. Start with the{' '}
            <Link href="/states" className="text-brand-primary hover:underline">
              state legality directory
            </Link>
            .
          </p>
        </CalloutBox>

        <section aria-labelledby="topics" className="mb-12 mt-10">
          <h2
            id="topics"
            className="font-display font-bold text-brand-text-dark mb-5"
            style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}
          >
            Moving scenarios
          </h2>
          <ul className="list-none p-0 m-0 grid gap-4">
            {TOPICS.map((slug) => {
              const g = MOVING_GUIDES[slug]
              return (
                <li
                  key={slug}
                  className="p-5 rounded-xl border border-brand-border bg-brand-surface"
                >
                  <h3 className="font-display font-bold text-brand-text-dark mb-2 text-lg">
                    <Link
                      href={`/moving/${slug}`}
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
            Get legality &amp; moving updates
          </h2>
          <EmailCapture
            siteId="ferrets-com"
            variant="section"
            title="Moving updates"
            subtitle="One email when our moving or state legality guidance changes."
            source="moving-hub"
          />
        </section>

        <footer className="text-sm text-brand-text-light leading-relaxed border-t border-brand-border pt-6">
          By Ferrets.com Editorial &mdash; sourced from cited references. This
          hub is general, informational content and is not legal advice. Laws
          change. Verify legality and permit requirements with the destination
          state and municipality before moving a ferret.
        </footer>
      </div>
    </>
  )
}
