/**
 * Ownership hub — /ownership
 *
 * The racing brand's highest-value, license-free, data-free income surface.
 * Educational hub for an affluent, growing, NON-gambling audience (fractional
 * ownership). Monetizes via ownership/syndicate referral + (later) equine
 * insurance affiliate + the paid Owner's Playbook. No live race data, no
 * gambling license. Trust-safe: education + referral framing only.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata, Breadcrumb, EmailCapture } from '@carloOS/ui';
import { ownershipTopics, playbook } from '../../data/racing/ownership';

export const metadata: Metadata = buildMetadata({
  siteId: 'horse-racing',
  title: 'Racehorse Ownership — An Honest Guide to Getting Involved',
  description:
    'Thinking about owning a racehorse? Plain-English, no-hype guides to fractional shares, syndicates, costs, and how to get into ownership the smart way.',
  path: '/ownership',
});

export default function OwnershipHubPage() {
  return (
    <>
      <Breadcrumb
        siteId="horse-racing"
        items={[{ name: 'Race Center', href: '/' }, { name: 'Ownership' }]}
      />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <header className="mb-8">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Get involved
          </p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            Racehorse Ownership, Honestly
          </h1>
          <p className="mt-3 text-lg text-brand-text-mid">
            Owning a piece of a racehorse is more accessible than it has ever been — a
            fractional share can cost less than a night out. These guides explain how the
            different ownership models work, what they really cost, and how to get involved
            without the hype. No black boxes, no promises of profit.
          </p>
        </header>

        <div className="space-y-3">
          {ownershipTopics.map((t) => (
            <Link
              key={t.slug}
              href={`/ownership/${t.slug}`}
              className="block rounded-xl border border-brand-border bg-white p-5 no-underline transition hover:border-brand-primary"
            >
              <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                {t.kicker}
              </p>
              <h2 className="mt-1 font-display text-lg font-bold text-brand-text-dark">
                {t.title}
              </h2>
              <p className="mt-1 text-sm text-brand-text-mid">{t.description}</p>
            </Link>
          ))}
        </div>

        {/* Paid digital product — the willingness-to-pay validator */}
        <section className="mt-12 rounded-2xl border-2 border-brand-primary bg-brand-primary-pale/40 p-6">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary-dark">
            Going deeper
          </p>
          <h2 className="mt-1 font-display text-2xl font-bold text-brand-text-dark">
            {playbook.title}
          </h2>
          <p className="mt-2 text-brand-text-mid">{playbook.subtitle}</p>
          <Link
            href="/ownership/playbook"
            className="mt-4 inline-block rounded-lg bg-brand-primary px-5 py-2.5 font-semibold text-white no-underline transition hover:bg-brand-primary-dark"
          >
            See what’s inside &rarr;
          </Link>
        </section>

        <div className="mt-12">
          <EmailCapture
            variant="section"
            siteId="horse-racing"
            source="ownership-hub"
            title="Get the Ownership Briefing"
            subtitle="Occasional, no-hype notes on getting into racehorse ownership the smart way — new guides, syndicate questions to ask, and reality checks."
            ctaText="Send me the briefing"
          />
        </div>
      </div>
    </>
  );
}
