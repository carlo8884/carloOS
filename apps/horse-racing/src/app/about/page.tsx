/**
 * About — /about
 * Brand story + trust positioning. Content-only (chrome from layout.tsx).
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata, Breadcrumb } from '@carloOS/ui';

export const metadata: Metadata = buildMetadata({
  siteId: 'horse-racing',
  title: 'About — AI Racing Intelligence You Can Audit',
  description:
    'We grade every runner with a transparent, explainable Intelligence Rating and log every prediction in public. No black boxes, no deleted losers.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <Breadcrumb siteId="horse-racing" items={[{ name: 'Race Center', href: '/' }, { name: 'About' }]} />
      <div className="mx-auto max-w-2xl px-4 py-10">
        <header className="mb-6">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">About</p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            Racing intelligence you can audit
          </h1>
        </header>

        <div className="space-y-4 leading-relaxed text-brand-text-mid">
          <p>
            Racing has more data than almost any sport — and most of it is locked behind paywalls or
            buried in figures that never explain themselves. We are building the opposite: a clean,
            fast intelligence layer that grades every runner and{' '}
            <strong className="text-brand-text-dark">shows its work</strong>.
          </p>
          <p>
            Every horse gets an{' '}
            <Link href="/methodology" className="text-emerald-700 underline">
              Intelligence Rating
            </Link>{' '}
            built from five inspectable factors — recent form, class, going suitability, fitness and
            draw. We turn those scores into model win probabilities, derive fair odds, and flag where
            the market is offering value. Nothing is a black box.
          </p>
          <p>
            We also keep ourselves honest. Every top pick and value play is logged, with a timestamp,
            on a public{' '}
            <Link href="/track-record" className="text-emerald-700 underline">
              track record
            </Link>
            . No quietly deleted losers, no rewritten history — just a verifiable record that
            compounds over time.
          </p>
          <p>
            The goal is simple: to be the first thing serious racing fans open every day. Today that
            means AI-graded cards on curated races; next it means live daily coverage, full
            horse/trainer/jockey/track databases, alerts, and a daily intelligence briefing.
          </p>
        </div>

        <div className="mt-8 rounded-lg bg-brand-surface p-4 text-xs text-brand-text-light">
          Our ratings are model-generated for informational and educational purposes only. Racing
          involves risk and nothing here is financial advice or a guarantee of outcome. Please gamble
          responsibly (18+; in the US, call 1-800-GAMBLER).
        </div>
      </div>
    </>
  );
}
