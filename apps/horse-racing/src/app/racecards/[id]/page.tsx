/**
 * AI Racecard — /racecards/[id]
 *
 * Content-only page (Nav/Footer/main come from layout.tsx). Renders a ranked
 * field with the explainable Intelligence Rating and per-runner factor
 * breakdowns ("show your work" trust + GEO citability layer).
 */

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildMetadata, Breadcrumb, EmailCapture, SchemaScript } from '@carloOS/ui';
import { getSiteConfig } from '@carloOS/config';
import { allRaces, getRace } from '../../../data/racing/meetings';
import { analyzeRace } from '../../../data/racing/analysis';

export function generateStaticParams() {
  return allRaces().map(({ race }) => ({ id: race.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const found = getRace(params.id);
  if (!found) {
    return buildMetadata({
      siteId: 'horse-racing',
      title: 'Racecard not found',
      description: 'This racecard could not be found.',
      path: `/racecards/${params.id}`,
    });
  }
  const { race } = found;
  return buildMetadata({
    siteId: 'horse-racing',
    title: `${race.name} — AI Racecard, Form & Verdict | ${race.course}`,
    description: `AI-graded racecard for the ${race.name} at ${race.course}: every runner scored by the Intelligence Rating with form, value picks, and a full verdict.`,
    path: `/racecards/${race.id}`,
  });
}

function formatOff(iso: string) {
  return (
    new Date(iso).toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'UTC',
    }) + ' UTC'
  );
}

export default function RacecardPage({ params }: { params: { id: string } }) {
  const found = getRace(params.id);
  if (!found) notFound();
  const { meeting, race } = found;
  const analysis = analyzeRace(race);

  const ranked = [...race.runners]
    .map((runner) => ({
      runner,
      rating: analysis.ratings.find((r) => r.runnerId === runner.id)!,
    }))
    .sort((a, b) => b.rating.score - a.rating.score);

  const valueRunnerId = analysis.valuePick?.runnerId;

  // SportsEvent structured data — makes the card citable in AI search / rich
  // results. Competitors hide this behind paywalls; we surface it.
  const base = getSiteConfig('horse-racing').theme.siteUrl;
  const sportsEventSchema = {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: race.name,
    sport: 'Horse racing',
    startDate: race.offTime,
    eventStatus: 'https://schema.org/EventScheduled',
    url: `${base}/racecards/${race.id}`,
    location: {
      '@type': 'Place',
      name: race.course,
      address: { '@type': 'PostalAddress', addressCountry: meeting.country },
    },
    competitor: race.runners.map((r) => ({
      '@type': 'SportsTeam',
      name: r.name,
    })),
  };

  return (
    <>
      <SchemaScript schema={sportsEventSchema} />
      <Breadcrumb
        siteId="horse-racing"
        items={[{ name: 'Race Center', href: '/' }, { name: race.course }]}
      />

      <div className="mx-auto max-w-5xl px-4 py-10">
        <header className="mb-8">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            {meeting.country} &middot; {formatOff(race.offTime)} &middot; {race.raceClass}
          </p>
          <h1 className="mt-1 font-display text-3xl font-bold tracking-tight text-brand-text-dark sm:text-4xl">
            {race.name}
          </h1>
          <p className="mt-2 text-brand-text-mid">
            {race.course} &middot; {race.distanceFurlongs}f &middot; {race.surface} &middot; going:{' '}
            {race.going.replace(/-/g, ' ')} &middot; ${race.prizeMoney.toLocaleString()}
            {race.ageRestriction ? ` · ${race.ageRestriction}` : ''}
          </p>
        </header>

        {/* AI Verdict */}
        <section className="mb-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
          <h2 className="text-2xs font-bold uppercase tracking-eyebrow text-emerald-700">
            AI Verdict
          </h2>
          <p className="mt-2 text-lg leading-relaxed text-brand-text-dark">{analysis.verdict}</p>
        </section>

        {/* Ranked runners */}
        <section className="mb-10">
          <h2 className="mb-4 font-display text-2xl font-bold text-brand-text-dark">
            Runners by Intelligence Rating
          </h2>
          <div className="space-y-4">
            {ranked.map(({ runner, rating }, idx) => (
              <article
                key={runner.id}
                className={`rounded-xl border bg-white p-5 ${
                  idx === 0 ? 'border-emerald-400 ring-1 ring-emerald-200' : 'border-brand-border'
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg text-white ${
                        idx === 0 ? 'bg-emerald-700' : 'bg-brand-dark'
                      }`}
                    >
                      <span className="text-xl font-bold leading-none">{rating.score}</span>
                      <span className="text-[10px] uppercase tracking-wide opacity-80">rating</span>
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-brand-text-dark">
                        {runner.number}. {runner.name}
                        {idx === 0 && (
                          <span className="ml-2 rounded-full bg-emerald-700 px-2 py-0.5 text-xs font-semibold text-white">
                            Top Pick
                          </span>
                        )}
                        {runner.id === valueRunnerId && (
                          <span className="ml-2 rounded-full bg-amber-500 px-2 py-0.5 text-xs font-semibold text-white">
                            Value
                          </span>
                        )}
                      </h3>
                      <p className="text-sm text-brand-text-light">
                        {runner.age}yo &middot; {runner.weightLbs}lbs &middot; J: {runner.jockey}{' '}
                        &middot; T: {runner.trainer} &middot; Form: {runner.formString}
                        {runner.officialRating ? ` · OR ${runner.officialRating}` : ''}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-brand-text-dark">
                      {runner.oddsDecimal.toFixed(1)}
                    </p>
                    <p className="text-xs text-brand-text-light">market</p>
                    <p className="mt-1 text-sm font-medium text-emerald-700">
                      {(rating.winProbability * 100).toFixed(0)}% model
                    </p>
                  </div>
                </div>

                {/* Factor breakdown — the "show your work" trust layer */}
                <details className="mt-4">
                  <summary className="cursor-pointer select-none text-sm font-semibold text-brand-primary">
                    Why this rating? &rarr;
                  </summary>
                  <ul className="mt-3 space-y-2 border-t border-brand-border pt-3 list-none p-0">
                    {rating.factors
                      .slice()
                      .sort((a, b) => b.points - a.points)
                      .map((f) => (
                        <li key={f.label} className="flex items-start justify-between gap-4 text-sm">
                          <span className="text-brand-text-mid">
                            <strong className="text-brand-text-dark">{f.label}:</strong> {f.detail}
                          </span>
                          <span className="shrink-0 font-mono font-semibold text-brand-text-dark">
                            +{f.points}
                          </span>
                        </li>
                      ))}
                  </ul>
                  <p className="mt-3 text-xs text-brand-text-light">
                    Model fair odds {rating.fairOdds.toFixed(1)} vs market{' '}
                    {runner.oddsDecimal.toFixed(1)} &mdash;{' '}
                    {rating.valueEdge > 0
                      ? `${(rating.valueEdge * 100).toFixed(0)}-pt value edge (overlay).`
                      : 'no positive edge at this price.'}
                  </p>
                </details>
              </article>
            ))}
          </div>
        </section>

        <p className="mb-8 rounded-lg bg-brand-surface p-4 text-xs text-brand-text-light">
          Ratings are model-generated for informational and educational purposes. Racing involves
          risk; nothing here is a guarantee of outcome or financial advice. Please gamble
          responsibly (18+; in the US, call 1-800-GAMBLER).
        </p>

        <EmailCapture
          siteId="horse-racing"
          variant="section"
          source="racecard"
          title="Never miss a value play"
          subtitle="The Daily Racing Intelligence brief delivers tomorrow's top-rated runners and overlays before first race."
        />
      </div>
    </>
  );
}
