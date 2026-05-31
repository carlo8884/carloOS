/**
 * Gear hub — /gear
 * License-free, data-free income surface #4: equestrian gear buyer's guides.
 * The biggest adjacent money pool (US horse industry ~$122B; ~$11k/owner/yr).
 * Editorial buying guidance + (Carlo-gated) equestrian retail affiliate. No race
 * data, no gambling license. Trust-safe: no fabricated hands-on testing.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata, Breadcrumb, EmailCapture } from '@carloOS/ui';
import { gearGuides } from '../../data/racing/gear';

export const metadata: Metadata = buildMetadata({
  siteId: 'horse-racing',
  title: 'Equestrian Gear Guides — What to Buy and Why',
  description:
    'Plain-English buyer’s guides to horse gear: the new-owner starter kit, choosing tack and saddles, and grooming essentials — what to look for and what to skip.',
  path: '/gear',
});

export default function GearHubPage() {
  return (
    <>
      <Breadcrumb
        siteId="horse-racing"
        items={[{ name: 'Race Center', href: '/' }, { name: 'Gear' }]}
      />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <header className="mb-8">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Buyer’s guides
          </p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            Equestrian Gear, Explained
          </h1>
          <p className="mt-3 text-lg text-brand-text-mid">
            Owning and caring for horses means a lot of gear — and a lot of ways to overspend.
            These guides explain what you actually need, what to look for in each category, and
            where it’s worth investing, so your money goes on the right things.
          </p>
        </header>

        <div className="space-y-3">
          {gearGuides.map((g) => (
            <Link
              key={g.slug}
              href={`/gear/${g.slug}`}
              className="block rounded-xl border border-brand-border bg-white p-5 no-underline transition hover:border-brand-primary"
            >
              <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                {g.kicker}
              </p>
              <h2 className="mt-1 font-display text-lg font-bold text-brand-text-dark">
                {g.title}
              </h2>
              <p className="mt-1 text-sm text-brand-text-mid">{g.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <EmailCapture
            variant="section"
            siteId="horse-racing"
            source="gear-hub"
            title="Get the Gear Briefing"
            subtitle="Honest buyer’s guides and what to skip — for owners who’d rather not waste money on kit they don’t need."
            ctaText="Send me the briefing"
          />
        </div>
      </div>
    </>
  );
}
