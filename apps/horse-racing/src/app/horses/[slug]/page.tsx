/**
 * Horse profile — /horses/[slug]
 * Career form snapshot + today's AI rating context.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildMetadata, Breadcrumb } from '@carloOS/ui';
import { allHorseSlugs, getHorse, formStats } from '../../../data/racing/profiles';
import { analyzeRace } from '../../../data/racing/analysis';

export function generateStaticParams() {
  return allHorseSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const ctx = getHorse(params.slug);
  if (!ctx) {
    return buildMetadata({
      siteId: 'horse-racing',
      title: 'Horse not found',
      description: 'This horse profile could not be found.',
      path: `/horses/${params.slug}`,
    });
  }
  return buildMetadata({
    siteId: 'horse-racing',
    title: `${ctx.runner.name} — Form, Rating & Profile`,
    description: `${ctx.runner.name}: recent form, win and place strike-rates, and the AI Intelligence Rating for the ${ctx.race.name} at ${ctx.race.course}.`,
    path: `/horses/${ctx.runner.slug}`,
  });
}

export default function HorseProfilePage({ params }: { params: { slug: string } }) {
  const ctx = getHorse(params.slug);
  if (!ctx) notFound();
  const { runner, race, meeting } = ctx;
  const stats = formStats(runner.recentRuns);
  const analysis = analyzeRace(race);
  const rating = analysis.ratings.find((r) => r.runnerId === runner.id)!;

  return (
    <>
      <Breadcrumb
        siteId="horse-racing"
        items={[
          { name: 'Race Center', href: '/' },
          { name: 'Horses', href: '/horses' },
          { name: runner.name },
        ]}
      />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <header className="mb-6">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Horse Profile
          </p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            {runner.name}
          </h1>
          <p className="mt-2 text-brand-text-mid">
            {runner.age}yo &middot; Trainer{' '}
            <Link href={`/trainers/${runner.trainerSlug}`} className="text-emerald-700 hover:underline">
              {runner.trainer}
            </Link>{' '}
            &middot; Jockey{' '}
            <Link href={`/jockeys/${runner.jockeySlug}`} className="text-emerald-700 hover:underline">
              {runner.jockey}
            </Link>
            {runner.officialRating ? ` · OR ${runner.officialRating}` : ''}
          </p>
        </header>

        {/* Stat tiles */}
        <section className="mb-8 grid grid-cols-3 gap-3">
          {[
            { label: 'Runs', value: `${stats.runs}` },
            { label: 'Win %', value: `${stats.winPct}%` },
            { label: 'Place %', value: `${stats.placePct}%` },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-brand-border bg-white p-4 text-center">
              <p className="font-display text-2xl font-bold text-brand-text-dark">{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-brand-text-light">{s.label}</p>
            </div>
          ))}
        </section>

        {/* Today's AI rating */}
        <section className="mb-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
          <h2 className="text-2xs font-bold uppercase tracking-eyebrow text-emerald-700">
            Next run — AI Intelligence Rating
          </h2>
          <div className="mt-3 flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-emerald-700 text-2xl font-bold text-white">
              {rating.score}
            </div>
            <div>
              <p className="font-semibold text-brand-text-dark">
                {race.name} &middot; {meeting.course}
              </p>
              <p className="text-sm text-brand-text-mid">
                {(rating.winProbability * 100).toFixed(0)}% model win probability &middot; market{' '}
                {runner.oddsDecimal.toFixed(1)}
              </p>
            </div>
          </div>
          <Link
            href={`/racecards/${race.id}`}
            className="mt-4 inline-block text-sm font-semibold text-emerald-700 hover:underline"
          >
            View the full racecard &amp; verdict &rarr;
          </Link>
        </section>

        {/* Form history */}
        <section>
          <h2 className="mb-3 font-display text-xl font-bold text-brand-text-dark">Recent form</h2>
          <div className="overflow-hidden rounded-xl border border-brand-border bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-brand-surface text-xs uppercase tracking-wide text-brand-text-light">
                <tr>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Course</th>
                  <th className="px-4 py-2">Class</th>
                  <th className="px-4 py-2">Going</th>
                  <th className="px-4 py-2 text-right">Finish</th>
                </tr>
              </thead>
              <tbody>
                {runner.recentRuns.map((run, i) => (
                  <tr key={i} className="border-t border-brand-border">
                    <td className="px-4 py-2 text-brand-text-mid">{run.date}</td>
                    <td className="px-4 py-2 text-brand-text-mid">{run.course}</td>
                    <td className="px-4 py-2 text-brand-text-mid">{run.raceClass}</td>
                    <td className="px-4 py-2 text-brand-text-mid">{run.going.replace(/-/g, ' ')}</td>
                    <td className="px-4 py-2 text-right font-semibold text-brand-text-dark">
                      {run.position === 0 ? 'NC' : `${run.position}/${run.runners}`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}
