/**
 * Major Races hub — /major-races (Pillar B, non-wagering racing vertical)
 * Heritage/educational explainers for the marquee races. Trust-safe: factual
 * description of public events; no wagering framing, no trademark misuse.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata, Breadcrumb, EmailCapture } from '@carloOS/ui';
import { majorRaces, type MajorRace } from '../../data/racing/major-races';

export const metadata: Metadata = buildMetadata({
  siteId: 'horse-racing',
  title: 'The Major Horse Races, Explained — Triple Crown & Breeders’ Cup',
  description:
    'A beginner-friendly guide to racing’s biggest events: the Triple Crown (Kentucky Derby, Preakness, Belmont) and the Breeders’ Cup — what they are, how they work, and why they matter.',
  path: '/major-races',
});

const GROUPS: MajorRace['group'][] = ['Triple Crown', 'Championship'];

export default function MajorRacesHubPage() {
  return (
    <>
      <Breadcrumb
        siteId="horse-racing"
        items={[{ name: 'Race Center', href: '/' }, { name: 'Major Races' }]}
      />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <header className="mb-8">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            The big days
          </p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            The Major Races, Explained
          </h1>
          <p className="mt-3 text-lg text-brand-text-mid">
            A handful of races define the racing year and draw in millions who watch nothing else.
            Here’s what each one is, how it works, and why it matters — no jargon, no betting, just
            the sport.
          </p>
        </header>

        {GROUPS.map((group) => {
          const inGroup = majorRaces.filter((r) => r.group === group);
          if (inGroup.length === 0) return null;
          return (
            <section key={group} className="mb-8">
              <h2 className="mb-3 font-display text-sm font-bold uppercase tracking-eyebrow text-brand-text-light">
                {group}
              </h2>
              <div className="space-y-3">
                {inGroup.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/major-races/${r.slug}`}
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

        <section className="mt-6 rounded-2xl border border-brand-border bg-brand-surface p-6">
          <h2 className="font-display text-lg font-bold text-brand-text-dark">New to the sport?</h2>
          <p className="mt-1 text-sm text-brand-text-mid">
            If a big race weekend is your first, start with{' '}
            <Link href="/first-derby" className="font-semibold text-brand-primary no-underline hover:underline">
              Your First Derby
            </Link>{' '}
            for a friendly walk-through of the whole day.
          </p>
        </section>

        <div className="mt-10">
          <EmailCapture
            variant="section"
            siteId="horse-racing"
            source="major-races-hub"
            title="Get The Form, free"
            subtitle="The sport explained clearly, one read a week. No tips, no hype."
            ctaText="Subscribe free"
          />
        </div>
      </div>
    </>
  );
}
