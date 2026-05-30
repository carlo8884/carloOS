/**
 * Trainer profile — /trainers/[slug]
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildMetadata, Breadcrumb } from '@carloOS/ui';
import { allTrainerSlugs, getTrainer } from '../../../data/racing/profiles';

export function generateStaticParams() {
  return allTrainerSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const t = getTrainer(params.slug);
  if (!t) {
    return buildMetadata({
      siteId: 'horse-racing',
      title: 'Trainer not found',
      description: 'This trainer profile could not be found.',
      path: `/trainers/${params.slug}`,
    });
  }
  return buildMetadata({
    siteId: 'horse-racing',
    title: `${t.name} — Trainer Form & Strike-Rate`,
    description: `${t.name}: win and place strike-rates and current runners, each graded by the AI Intelligence Rating.`,
    path: `/trainers/${t.slug}`,
  });
}

export default function TrainerProfilePage({ params }: { params: { slug: string } }) {
  const t = getTrainer(params.slug);
  if (!t) notFound();

  return (
    <>
      <Breadcrumb
        siteId="horse-racing"
        items={[
          { name: 'Race Center', href: '/' },
          { name: 'Trainers', href: '/trainers' },
          { name: t.name },
        ]}
      />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <header className="mb-6">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Trainer Profile
          </p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            {t.name}
          </h1>
        </header>

        <section className="mb-8 grid grid-cols-3 gap-3">
          {[
            { label: 'Form runs', value: `${t.stats.runs}` },
            { label: 'Win %', value: `${t.stats.winPct}%` },
            { label: 'Place %', value: `${t.stats.placePct}%` },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-brand-border bg-white p-4 text-center">
              <p className="font-display text-2xl font-bold text-brand-text-dark">{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-brand-text-light">{s.label}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="mb-3 font-display text-xl font-bold text-brand-text-dark">Current runners</h2>
          <div className="space-y-3">
            {t.entries.map(({ runner, race }) => (
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
                    {race.name} &middot; {race.course} &middot; J: {runner.jockey}
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
