/**
 * Jockey profile — /jockeys/[slug]
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildMetadata, Breadcrumb } from '@carloOS/ui';
import { allJockeySlugs, getJockey } from '../../../data/racing/profiles';

export function generateStaticParams() {
  return allJockeySlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const j = getJockey(params.slug);
  if (!j) {
    return buildMetadata({
      siteId: 'horse-racing',
      title: 'Jockey not found',
      description: 'This jockey profile could not be found.',
      path: `/jockeys/${params.slug}`,
    });
  }
  return buildMetadata({
    siteId: 'horse-racing',
    title: `${j.name} — Jockey Form & Strike-Rate`,
    description: `${j.name}: win and place strike-rates and booked rides, each graded by the AI Intelligence Rating.`,
    path: `/jockeys/${j.slug}`,
  });
}

export default function JockeyProfilePage({ params }: { params: { slug: string } }) {
  const j = getJockey(params.slug);
  if (!j) notFound();

  return (
    <>
      <Breadcrumb
        siteId="horse-racing"
        items={[
          { name: 'Race Center', href: '/' },
          { name: 'Jockeys', href: '/jockeys' },
          { name: j.name },
        ]}
      />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <header className="mb-6">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Jockey Profile
          </p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            {j.name}
          </h1>
        </header>

        <section className="mb-8 grid grid-cols-3 gap-3">
          {[
            { label: 'Form rides', value: `${j.stats.runs}` },
            { label: 'Win %', value: `${j.stats.winPct}%` },
            { label: 'Place %', value: `${j.stats.placePct}%` },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-brand-border bg-white p-4 text-center">
              <p className="font-display text-2xl font-bold text-brand-text-dark">{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-brand-text-light">{s.label}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="mb-3 font-display text-xl font-bold text-brand-text-dark">Booked rides</h2>
          <div className="space-y-3">
            {j.entries.map(({ runner, race }) => (
              <div
                key={runner.id}
                className="flex items-center justify-between rounded-lg border border-brand-border bg-white p-4"
              >
                <div>
                  <Link
                    href={`/horses/${runner.slug}`}
                    className="font-semibold text-brand-text-dark hover:text-brand-primary"
                  >
                    {runner.name}
                  </Link>
                  <p className="text-sm text-brand-text-light">
                    {race.name} &middot; {race.course} &middot; T: {runner.trainer}
                  </p>
                </div>
                <Link
                  href={`/racecards/${race.id}`}
                  className="shrink-0 text-sm font-semibold text-emerald-700 hover:underline"
                >
                  Card &rarr;
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
