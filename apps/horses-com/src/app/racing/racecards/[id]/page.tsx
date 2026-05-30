import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getSiteConfig } from '@carloOS/config';
import { Nav, Footer, Breadcrumb, EmailCapture, buildMetadata } from '@carloOS/ui';
import { allRaces, getRace } from '../../../../data/racing/meetings';
import { analyzeRace } from '../../../../data/racing/analysis';

const site = getSiteConfig('horses-com');

const NAV_LINKS = [
  { href: '/racing', label: 'Race Center' },
  { href: '/breeds', label: 'Breeds' },
  { href: '/disciplines', label: 'Disciplines' },
  { href: '/guides', label: 'Guides' },
  { href: '/reviews/best-equine-supplements', label: 'Reviews' },
];

export function generateStaticParams() {
  return allRaces().map(({ race }) => ({ id: race.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const found = getRace(params.id);
  if (!found) return buildMetadata({ title: 'Racecard not found', path: `/racing/racecards/${params.id}`, siteId: 'horses-com' });
  const { race } = found;
  return buildMetadata({
    title: `${race.name} — AI Racecard, Form & Verdict | ${race.course}`,
    description: `AI-graded racecard for the ${race.name} at ${race.course}: every runner scored by the Horses.com Intelligence Rating with form, value picks, and a full verdict.`,
    path: `/racing/racecards/${race.id}`,
    siteId: 'horses-com',
  });
}

function formatOff(iso: string) {
  return new Date(iso).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' }) + ' UTC';
}

export default function RacecardPage({ params }: { params: { id: string } }) {
  const found = getRace(params.id);
  if (!found) notFound();
  const { meeting, race } = found;
  const analysis = analyzeRace(race);

  // Order runners by Intelligence Rating, highest first.
  const ranked = [...race.runners]
    .map((runner) => ({
      runner,
      rating: analysis.ratings.find((r) => r.runnerId === runner.id)!,
    }))
    .sort((a, b) => b.rating.score - a.rating.score);

  const valueRunnerId = analysis.valuePick?.runnerId;

  return (
    <>
      <Nav siteName={site.name} links={NAV_LINKS} />
      <main className="mx-auto max-w-5xl px-4 py-10">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Race Center', href: '/racing' },
            { label: race.course },
          ]}
        />

        <header className="mt-6 mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">
            {meeting.country} &middot; {formatOff(race.offTime)} &middot; {race.raceClass}
          </p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            {race.name}
          </h1>
          <p className="mt-2 text-stone-600">
            {race.course} &middot; {race.distanceFurlongs}f &middot; {race.surface} &middot;{' '}
            going: {race.going.replace(/-/g, ' ')} &middot; ${race.prizeMoney.toLocaleString()}{' '}
            {race.ageRestriction ? `· ${race.ageRestriction}` : ''}
          </p>
        </header>

        {/* AI Verdict */}
        <section className="mb-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
          <h2 className="text-sm font-bold uppercase tracking-wide text-emerald-700">
            Horses.com AI Verdict
          </h2>
          <p className="mt-2 text-lg leading-relaxed text-stone-800">{analysis.verdict}</p>
        </section>

        {/* Ranked runners */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-stone-900">Runners by Intelligence Rating</h2>
          <div className="space-y-4">
            {ranked.map(({ runner, rating }, idx) => (
              <article
                key={runner.id}
                className={`rounded-xl border bg-white p-5 ${
                  idx === 0 ? 'border-emerald-400 ring-1 ring-emerald-200' : 'border-stone-200'
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg text-white ${
                        idx === 0 ? 'bg-emerald-600' : 'bg-stone-700'
                      }`}
                    >
                      <span className="text-xl font-bold leading-none">{rating.score}</span>
                      <span className="text-[10px] uppercase tracking-wide opacity-80">rating</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-stone-900">
                        {runner.number}. {runner.name}
                        {idx === 0 && (
                          <span className="ml-2 rounded-full bg-emerald-600 px-2 py-0.5 text-xs font-semibold text-white">
                            Top Pick
                          </span>
                        )}
                        {runner.id === valueRunnerId && (
                          <span className="ml-2 rounded-full bg-amber-500 px-2 py-0.5 text-xs font-semibold text-white">
                            Value
                          </span>
                        )}
                      </h3>
                      <p className="text-sm text-stone-500">
                        {runner.age}yo &middot; {runner.weightLbs}lbs &middot; J: {runner.jockey} &middot;
                        T: {runner.trainer} &middot; Form: {runner.formString}
                        {runner.officialRating ? ` · OR ${runner.officialRating}` : ''}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-stone-900">{runner.oddsDecimal.toFixed(1)}</p>
                    <p className="text-xs text-stone-500">market</p>
                    <p className="mt-1 text-sm font-medium text-emerald-700">
                      {(rating.winProbability * 100).toFixed(0)}% model
                    </p>
                  </div>
                </div>

                {/* Factor breakdown — the "show your work" trust layer */}
                <details className="mt-4 group">
                  <summary className="cursor-pointer select-none text-sm font-semibold text-amber-700">
                    Why this rating? &rarr;
                  </summary>
                  <ul className="mt-3 space-y-2 border-t border-stone-100 pt-3">
                    {rating.factors
                      .slice()
                      .sort((a, b) => b.points - a.points)
                      .map((f) => (
                        <li key={f.label} className="flex items-start justify-between gap-4 text-sm">
                          <span className="text-stone-600">
                            <strong className="text-stone-800">{f.label}:</strong> {f.detail}
                          </span>
                          <span className="shrink-0 font-mono font-semibold text-stone-900">
                            +{f.points}
                          </span>
                        </li>
                      ))}
                  </ul>
                  <p className="mt-3 text-xs text-stone-500">
                    Model fair odds {rating.fairOdds.toFixed(1)} vs market {runner.oddsDecimal.toFixed(1)} &mdash;{' '}
                    {rating.valueEdge > 0
                      ? `${(rating.valueEdge * 100).toFixed(0)}-pt value edge (overlay).`
                      : 'no positive edge at this price.'}
                  </p>
                </details>
              </article>
            ))}
          </div>
        </section>

        <p className="mb-8 rounded-lg bg-stone-50 p-4 text-xs text-stone-500">
          Ratings are model-generated for informational and educational purposes. Racing involves
          risk; nothing here is a guarantee of outcome or financial advice. Please gamble
          responsibly. See our{' '}
          <Link href="/disclosure" className="underline">disclosure</Link>.
        </p>

        <EmailCapture
          siteId="horses-com"
          variant="section"
          title="Never miss a value play"
          description="The Daily Racing Intelligence brief delivers tomorrow's top-rated runners and overlays before first race."
        />
      </main>
      <Footer siteName={site.name} siteUrl={site.url} />
    </>
  );
}
