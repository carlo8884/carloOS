import Link from 'next/link';
import type { Metadata } from 'next';
import { getSiteConfig } from '@carloOS/config';
import { Nav, Footer, Breadcrumb, EmailCapture, buildMetadata } from '@carloOS/ui';
import { meetings, SEED_DATE, allRaces } from '../../data/racing/meetings';
import { analyzeRace } from '../../data/racing/analysis';

const site = getSiteConfig('horses-com');

export const metadata: Metadata = buildMetadata({
  title: 'Race Center — AI Racing Intelligence, Cards, Form & Analysis',
  description:
    'The Horses.com Race Center: today’s racecards, AI-graded runners, value picks, and the explainable Horses.com Intelligence Rating for every horse in the field.',
  path: '/racing',
  siteId: 'horses-com',
});

const NAV_LINKS = [
  { href: '/racing', label: 'Race Center' },
  { href: '/breeds', label: 'Breeds' },
  { href: '/disciplines', label: 'Disciplines' },
  { href: '/guides', label: 'Guides' },
  { href: '/reviews/best-equine-supplements', label: 'Reviews' },
];

function formatOff(iso: string) {
  return new Date(iso).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' }) + ' UTC';
}

export default function RaceCenterPage() {
  const races = allRaces().sort((a, b) => a.race.offTime.localeCompare(b.race.offTime));
  const dateLabel = new Date(SEED_DATE).toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric',
  });

  return (
    <>
      <Nav siteName={site.name} links={NAV_LINKS} />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Race Center' }]} />

        <header className="mt-6 mb-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">
            Racing Intelligence
          </p>
          <h1 className="mt-1 text-4xl font-bold tracking-tight text-stone-900">Race Center</h1>
          <p className="mt-3 max-w-3xl text-lg text-stone-600">
            Every runner graded by the <strong>Horses.com Intelligence Rating</strong> — a
            transparent 0&ndash;100 model built on recent form, class, going suitability, fitness,
            and draw. Each verdict shows its work, so you always know <em>why</em>.
          </p>
          <p className="mt-2 text-sm text-stone-500">Racing for {dateLabel}</p>
        </header>

        {/* Top picks across the day */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-stone-900">Today&rsquo;s AI Verdicts</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {races.map(({ race }) => {
              const analysis = analyzeRace(race);
              const top = race.runners.find((r) => r.id === analysis.topPick.runnerId)!;
              return (
                <Link
                  key={race.id}
                  href={`/racing/racecards/${race.id}`}
                  className="block rounded-xl border border-stone-200 bg-white p-5 transition hover:border-amber-400 hover:shadow-md"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-semibold text-stone-500">
                      {race.course} &middot; {formatOff(race.offTime)}
                    </span>
                    <span className="rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-600">
                      {race.raceClass}
                    </span>
                  </div>
                  <h3 className="mt-1 text-lg font-bold text-stone-900">{race.name}</h3>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-lg font-bold text-white">
                      {analysis.topPick.score}
                    </div>
                    <div>
                      <p className="font-semibold text-stone-900">{top.name}</p>
                      <p className="text-sm text-stone-500">
                        Top pick &middot; {(analysis.topPick.winProbability * 100).toFixed(0)}% model win prob.
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 line-clamp-2 text-sm text-stone-600">{analysis.verdict}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-amber-700">
                    View full card &amp; ratings &rarr;
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Meetings */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-stone-900">Today&rsquo;s Meetings</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {meetings.map((m) => (
              <div key={m.id} className="rounded-xl border border-stone-200 bg-white p-5">
                <h3 className="text-lg font-bold text-stone-900">{m.course}</h3>
                <p className="text-sm text-stone-500">
                  {m.country} &middot; {m.surface} &middot; going: {m.going.replace(/-/g, ' ')}
                </p>
                <ul className="mt-3 space-y-1">
                  {m.races.map((r) => (
                    <li key={r.id}>
                      <Link
                        href={`/racing/racecards/${r.id}`}
                        className="text-sm font-medium text-emerald-700 hover:underline"
                      >
                        {formatOff(r.offTime)} &mdash; {r.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-2xl border border-stone-200 bg-stone-50 p-6">
          <h2 className="text-xl font-bold text-stone-900">How the Intelligence Rating works</h2>
          <p className="mt-2 max-w-3xl text-stone-600">
            Unlike a black-box tipster, every Horses.com rating is fully itemised. We score each
            runner across five weighted factors &mdash; recent form, class/official rating, going
            suitability, fitness/freshness, and draw &mdash; then normalise the field into model win
            probabilities and compare them against the live market to surface genuine value (where
            the price is bigger than the runner&rsquo;s true chance).
          </p>
          <p className="mt-2 text-sm text-stone-500">
            Phase 1 runs on curated cards while we validate the model. Live multi-track feeds,
            results, and full horse / trainer / jockey / track databases follow in Phase 2.
          </p>
        </section>

        <EmailCapture
          siteId="horses-com"
          variant="section"
          title="Get the Daily Racing Intelligence brief"
          description="Tomorrow's top-rated runners and value plays, in your inbox before first race."
        />
      </main>
      <Footer siteName={site.name} siteUrl={site.url} />
    </>
  );
}
