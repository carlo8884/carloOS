/**
 * Racehorse ownership cost calculator — /ownership/cost-calculator (queue #3)
 *
 * A category-defining interactive tool (calculators are citation magnets per the
 * SEO/GEO charter) inside the ownership cluster. Trust-safe: plain arithmetic on
 * user-controlled assumptions; no advice, no return projection. HowTo + FAQ
 * schema for AI-answer surfaces. Converts to the ownership guides + newsletter.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  buildMetadata,
  Breadcrumb,
  SchemaScript,
  buildFAQSchema,
  EmailCapture,
} from '@carloOS/ui';
import { CostCalculator } from './CostCalculator';

const faq = [
  {
    question: 'How much does it cost to own a racehorse per year?',
    answer:
      'Whole-horse ownership commonly runs tens of thousands of dollars a year once training (often $50–120/day), vet, farrier, and insurance are combined. Partnerships divide that by your share, and fractional micro-shares cap your cost at a one-time share price. Use the calculator to estimate your own figure.',
  },
  {
    question: 'What is the cheapest way to own a racehorse?',
    answer:
      'A fractional micro-share is usually the lowest-cost entry: a one-time price (sometimes a few hundred dollars) with ongoing costs typically bundled in for the term. Partnerships sit in the middle; whole-horse ownership is the most expensive.',
  },
  {
    question: 'Is owning a racehorse a good investment?',
    answer:
      'Treat it as a passion expense, not an investment. Most racehorses do not return a profit, and this calculator estimates cost only — it does not project returns. The reliable return is the experience.',
  },
];

export const metadata: Metadata = buildMetadata({
  siteId: 'horse-racing',
  title: 'Racehorse Ownership Cost Calculator — Estimate Your Annual Cost',
  description:
    'A free calculator to estimate what owning a racehorse would cost you per year, by model — whole horse, partnership, or fractional micro-share. You control every assumption.',
  path: '/ownership/cost-calculator',
});

export default function CostCalculatorPage() {
  return (
    <>
      <SchemaScript schema={buildFAQSchema({ questions: faq })} />
      <Breadcrumb
        siteId="horse-racing"
        items={[
          { name: 'Race Center', href: '/' },
          { name: 'Ownership', href: '/ownership' },
          { name: 'Cost Calculator' },
        ]}
      />
      <div className="mx-auto max-w-2xl px-4 py-10">
        <header className="mb-8">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Ownership tools
          </p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            Racehorse Ownership Cost Calculator
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-brand-text-mid">
            Wondering what it would actually cost to get involved? Choose an ownership model and
            adjust the assumptions to your situation — the calculator estimates your annual outlay.
            Every figure is yours to change.
          </p>
        </header>

        <CostCalculator />

        <section className="mt-10 rounded-2xl border border-brand-border bg-brand-surface p-6">
          <h2 className="font-display text-lg font-bold text-brand-text-dark">
            Make sense of the number
          </h2>
          <ul className="mt-3 space-y-2 list-none p-0">
            <li>
              <Link href="/ownership/should-you-own-a-racehorse" className="font-semibold text-brand-primary no-underline hover:underline">
                Should you own a racehorse? &rarr;
              </Link>
            </li>
            <li>
              <Link href="/ownership/fractional-ownership-explained" className="font-semibold text-brand-primary no-underline hover:underline">
                Fractional ownership, explained &rarr;
              </Link>
            </li>
            <li>
              <Link href="/ownership/racehorse-syndicates-explained" className="font-semibold text-brand-primary no-underline hover:underline">
                Syndicates & partnerships &rarr;
              </Link>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-brand-text-dark">Frequently asked</h2>
          <div className="mt-3 space-y-4">
            {faq.map((item) => (
              <div key={item.question}>
                <h3 className="font-semibold text-brand-text-dark">{item.question}</h3>
                <p className="mt-1 leading-relaxed text-brand-text-mid">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12">
          <EmailCapture
            variant="section"
            siteId="horse-racing"
            source="cost-calculator"
            title="Get the Ownership Briefing"
            subtitle="No-hype notes on getting into racehorse ownership the smart way."
            ctaText="Send me the briefing"
          />
        </div>
      </div>
    </>
  );
}
