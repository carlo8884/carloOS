/**
 * Track profile — /tracks/[slug]
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildMetadata, Breadcrumb } from '@carloOS/ui';
import { allTrackSlugs, getTrack } from '../../../data/racing/profiles';
import { analyzeRace } from '../../../data/racing/analysis';

export function generateStaticParams() {
  return allTrackSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const m = getTrack(params.slug);
  if (!m) {
    return buildMetadata({
      siteId: 'horse-racing',
      title: 'Racecourse not found',
      description: 'This racecourse profile could not be found.',
      path: `/tracks/${params.slug}`,
    });
  }
  return buildMetadata({
    siteId: 'horse-racing',
    title: `${m.course} Racecourse — Going, Cards & AI Analysis`,
    description: `${m.course} (${m.country}): ${m.surface} surface, today’s going and AI-graded racecards with the Intelligence Rating.`,
    path: `/tracks/${m.courseSlug}`,
  });
}

export default function TrackProfilePage({ params }: { params: { slug: string } }) {
  const m = getTrack(params.slug);
  if (!m) notFound();

  return (
    <>
      <Breadcrumb
        siteId="horse-racing"
        items={[
          { name: 'Race Center', href: '/' },
          { name: 'Tracks', href: '/tracks' },
          { name: m.course },
        ]}
      />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <header className="mb-6">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Racecourse Profile
          </p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            {m.course}
          </h1>
          <p className="mt-2 text-brand-text-mid">
            {m.country} &middot; {m.surface} &middot; going: {m.going.replace(/-/g, ' ')}
          </p>
        </header>

        <section>
          <h2 className="mb-3 font-display text-xl font-bold text-brand-text-dark">Today’s cards</h2>
          <div className="space-y-3">
            {m.races.map((race) => {
              const analysis = analyzeRace(race);
              const top = race.runners.find((r) => r.id === analysis.topPick.runnerId)!;
              return (
                <Link
                  key={race.id}
                  href={`/racecards/${race.id}`}
                  className="block rounded-lg border border-brand-border bg-white p-4 no-underline transition hover:border-brand-primary"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="font-semibold text-brand-text-dark">{race.name}</span>
                    <span className="text-xs text-brand-text-light">{race.raceClass}</span>
                  </div>
                  <p className="mt-1 text-sm text-brand-text-mid">
                    AI top pick: <strong>{top.name}</strong> ({analysis.topPick.score}/100)
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
