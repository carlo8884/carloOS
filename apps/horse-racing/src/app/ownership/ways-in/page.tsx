/**
 * Ways into ownership — /ownership/ways-in
 *
 * The conversion point of the ownership cluster: a filterable directory of the
 * routes into racehorse ownership (fractional / syndicate / partnership). This
 * is where referral revenue lands once Carlo approves vendors and Monetization
 * wires the routes. Trust-safe: neutral, editorial-merit listing, no paid
 * ranking, no investment advice. FAQ schema.
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
import { WaysInDirectory } from './WaysInDirectory';

const faq = [
  {
    question: 'What are the different ways to get into racehorse ownership?',
    answer:
      'The main routes are fractional micro-shares (a low-cost one-time stake bought from a platform), managed syndicates (an upfront share plus ongoing monthly costs, run by a manager), and private partnerships (a small group jointly owning and paying for a horse). Sole ownership sits beyond these as the most expensive option.',
  },
  {
    question: 'Which ownership route is cheapest?',
    answer:
      'Fractional micro-shares are usually the lowest-cost entry, often starting in the low hundreds of dollars with ongoing costs bundled in for the term. Syndicates are mid-range; partnerships and sole ownership are the most expensive.',
  },
];

export const metadata: Metadata = buildMetadata({
  siteId: 'horse-racing',
  title: 'Ways Into Racehorse Ownership — Compare Your Options',
  description:
    'Compare the routes into racehorse ownership — fractional micro-shares, managed syndicates, and partnerships — by cost and involvement, and find the right fit.',
  path: '/ownership/ways-in',
});

export default function WaysInPage() {
  return (
    <>
      <SchemaScript schema={buildFAQSchema({ questions: faq })} />
      <Breadcrumb
        siteId="horse-racing"
        items={[
          { name: 'Race Center', href: '/' },
          { name: 'Ownership', href: '/ownership' },
          { name: 'Ways In' },
        ]}
      />
      <div className="mx-auto max-w-2xl px-4 py-10">
        <header className="mb-8">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Find your route
          </p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            Ways Into Racehorse Ownership
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-brand-text-mid">
            There’s no single way to own a racehorse — there’s a ladder, from a tiny fractional
            share to owning outright. Filter the routes by how you’d like to get involved, and
            follow through to the explainer for each.
          </p>
        </header>

        <WaysInDirectory />

        <section className="mt-10 rounded-2xl border border-brand-border bg-brand-surface p-6">
          <h2 className="font-display text-lg font-bold text-brand-text-dark">Before you commit</h2>
          <ul className="mt-3 space-y-2 list-none p-0">
            <li>
              <Link href="/ownership/cost-calculator" className="font-semibold text-brand-primary no-underline hover:underline">
                Estimate the annual cost &rarr;
              </Link>
            </li>
            <li>
              <Link href="/ownership/should-you-own-a-racehorse" className="font-semibold text-brand-primary no-underline hover:underline">
                Should you own a racehorse? &rarr;
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
            source="ways-in"
            title="Get the Ownership Briefing"
            subtitle="No-hype notes on getting into racehorse ownership the smart way."
            ctaText="Send me the briefing"
          />
        </div>
      </div>
    </>
  );
}
