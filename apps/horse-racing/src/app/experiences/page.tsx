/**
 * Experiences hub — /experiences
 * License-free, data-free income surface #3: racing experiences & travel.
 * Editorial guidance + (Carlo-gated) experience/travel affiliate. No race data,
 * no gambling license. Trust-safe: no fabricated first-person attendance.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata, Breadcrumb, EmailCapture } from '@carloOS/ui';
import { experienceTopics } from '../../data/racing/experiences';

export const metadata: Metadata = buildMetadata({
  siteId: 'horse-racing',
  title: 'Racing Experiences & Travel — Plan a Day at the Races',
  description:
    'How to plan a great day at the races and build trips around the sport: ticket tiers, hospitality, the bucket-list meetings, and where to stay.',
  path: '/experiences',
});

export default function ExperiencesHubPage() {
  return (
    <>
      <Breadcrumb
        siteId="horse-racing"
        items={[{ name: 'Race Center', href: '/' }, { name: 'Experiences' }]}
      />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <header className="mb-8">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Experience the sport
          </p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            Racing Experiences & Travel
          </h1>
          <p className="mt-3 text-lg text-brand-text-mid">
            Racing is one of the great days out in sport — and a reason to travel. These guides
            cover how to plan a flagship race day, the meetings worth building a trip around, and
            how to find the right experience for your budget.
          </p>
        </header>

        <div className="space-y-3">
          {experienceTopics.map((t) => (
            <Link
              key={t.slug}
              href={`/experiences/${t.slug}`}
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

        <div className="mt-12">
          <EmailCapture
            variant="section"
            siteId="horse-racing"
            source="experiences-hub"
            title="Get the Race-Day Planner"
            subtitle="Where to go, when tickets drop, and how to plan a great day at the races — a few times a year, no spam."
            ctaText="Send me the planner"
          />
        </div>
      </div>
    </>
  );
}
