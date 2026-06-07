/**
 * Race Types hub — /race-types (Pillar B, non-wagering racing vertical)
 * Educational cluster explaining how races are classified. Trust-safe: pure
 * structural explanation, no odds/picks/handicapping-as-advice. Grouped by class
 * tier so the hub→spoke topical-authority signal is clear.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata, Breadcrumb, EmailCapture } from '@carloOS/ui';
import { raceTypes, tierLabels, type RaceType } from '../../data/racing/race-types';

export const metadata: Metadata = buildMetadata({
  siteId: 'horse-racing',
  title: 'Types of Horse Races, Explained — Maiden to Grade 1',
  description:
    'A clear guide to how horse races are classified: maiden, claiming, allowance, optional claiming, stakes, graded stakes, and handicaps — what each means and how they fit together.',
  path: '/race-types',
});

const TIERS: RaceType['tier'][] = ['entry', 'mid', 'top'];

export default function RaceTypesHubPage() {
  return (
    <>
      <Breadcrumb
        siteId="horse-racing"
        items={[{ name: 'Race Center', href: '/' }, { name: 'Race Types' }]}
      />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <header className="mb-8">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Understanding the sport
          </p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            Types of Horse Races, Explained
          </h1>
          <p className="mt-3 text-lg text-brand-text-mid">
            Every race card is built from a handful of race “types” — and once you know how they
            rank, the whole sport makes more sense. Here’s the class ladder, from the maiden races
            where careers begin to the Grade 1 stakes where champions are made.
          </p>
        </header>

        {TIERS.map((tier) => {
          const inTier = raceTypes.filter((r) => r.tier === tier);
          if (inTier.length === 0) return null;
          return (
            <section key={tier} className="mb-8">
              <h2 className="mb-3 font-display text-sm font-bold uppercase tracking-eyebrow text-brand-text-light">
                {tierLabels[tier]}
              </h2>
              <div className="space-y-3">
                {inTier.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/race-types/${r.slug}`}
                    className="block rounded-xl border border-brand-border bg-white p-5 no-underline transition hover:border-brand-primary"
                  >
                    <h3 className="font-display text-lg font-bold text-brand-text-dark">{r.name}</h3>
                    <p className="mt-1 text-sm text-brand-text-mid">{r.short}</p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        <div className="mt-10">
          <EmailCapture
            variant="section"
            siteId="horse-racing"
            source="race-types-hub"
            title="Get The Form, free"
            subtitle="The sport explained clearly, one read a week. No tips, no hype."
            ctaText="Subscribe free"
          />
        </div>
      </div>
    </>
  );
}
