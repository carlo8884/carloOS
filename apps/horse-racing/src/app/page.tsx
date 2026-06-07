/**
 * Race Center — homepage of the Horse Racing Intelligence app.
 *
 * Content-only (Nav/Footer/main come from layout.tsx). Surfaces today's AI
 * verdicts and meetings using the explainable Intelligence Rating engine.
 * Phase-1 curated data; live feed swaps in via RacingDataSource.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata, EmailCapture } from '@carloOS/ui';
import { meetings, SEED_DATE, allRaces } from '../data/racing/meetings';
import { analyzeRace } from '../data/racing/analysis';

export const metadata: Metadata = buildMetadata({
  siteId: 'horse-racing',
  title: 'AI Racecards, Form & Ratings',
  description:
    'Today’s racecards, AI-graded runners, value picks, and the explainable Intelligence Rating for every horse in the field.',
  path: '/',
});

function formatOff(iso: string) {
  return (
    new Date(iso).toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'UTC',
    }) + ' UTC'
  );
}

export default function RaceCenterPage() {
  const races = allRaces().sort((a, b) => a.race.offTime.localeCompare(b.race.offTime));
  const dateLabel = new Date(SEED_DATE).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-10">
        <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
          Racing Intelligence
        </p>
        <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
          Race Center
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-brand-text-mid">
          Every runner graded by the <strong>Intelligence Rating</strong> — a transparent
          0&ndash;100 model built on recent form, class, going suitability, fitness, and draw. Each
          verdict shows its work, so you always know <em>why</em>.
        </p>
        <p className="mt-2 text-sm text-brand-text-light">Racing for {dateLabel}</p>
      </header>

      {/* Top picks across the day */}
      <section className="mb-12">
        <h2 className="mb-4 font-display text-2xl font-bold text-brand-text-dark">
          Today&rsquo;s AI Verdicts
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {races.map(({ race }) => {
            const analysis = analyzeRace(race);
            const top = race.runners.find((r) => r.id === analysis.topPick.runnerId)!;
            return (
              <Link
                key={race.id}
                href={`/racecards/${race.id}`}
                className="block rounded-xl border border-brand-border bg-white p-5 no-underline transition hover:border-brand-primary hover:shadow-md"
              >
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-semibold text-brand-text-light">
                    {race.course} &middot; {formatOff(race.offTime)}
                  </span>
                  <span className="rounded-full bg-brand-surface px-2 py-0.5 text-xs font-medium text-brand-text-mid">
                    {race.raceClass}
                  </span>
                </div>
                <h3 className="mt-1 font-display text-lg font-bold text-brand-text-dark">
                  {race.name}
                </h3>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-700 text-lg font-bold text-white">
                    {analysis.topPick.score}
                  </div>
                  <div>
                    <p className="font-semibold text-brand-text-dark">{top.name}</p>
                    <p className="text-sm text-brand-text-light">
                      Top pick &middot; {(analysis.topPick.winProbability * 100).toFixed(0)}% model
                      win prob.
                    </p>
                  </div>
                </div>
                <p className="mt-3 line-clamp-2 text-sm text-brand-text-mid">{analysis.verdict}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-brand-primary">
                  View full card &amp; ratings &rarr;
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Meetings */}
      <section className="mb-12">
        <h2 className="mb-4 font-display text-2xl font-bold text-brand-text-dark">
          Today&rsquo;s Meetings
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {meetings.map((m) => (
            <div key={m.id} className="rounded-xl border border-brand-border bg-white p-5">
              <h3 className="font-display text-lg font-bold text-brand-text-dark">{m.course}</h3>
              <p className="text-sm text-brand-text-light">
                {m.country} &middot; {m.surface} &middot; going: {m.going.replace(/-/g, ' ')}
              </p>
              <ul className="mt-3 space-y-1 list-none p-0">
                {m.races.map((r) => (
                  <li key={r.id}>
                    <Link
                      href={`/racecards/${r.id}`}
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

      <section className="mb-12 rounded-2xl border border-brand-border bg-brand-surface p-6">
        <h2 className="font-display text-xl font-bold text-brand-text-dark">
          How the Intelligence Rating works
        </h2>
        <p className="mt-2 max-w-3xl text-brand-text-mid">
          Unlike a black-box tipster, every rating is fully itemised. We score each runner across
          five weighted factors &mdash; recent form, class/official rating, going suitability,
          fitness/freshness, and draw &mdash; then normalise the field into model win probabilities
          and compare them against the live market to surface genuine value (where the price is
          bigger than the runner&rsquo;s true chance).
        </p>
        <p className="mt-2 text-sm text-brand-text-light">
          Phase 1 runs on curated cards while we validate the model. Live multi-track feeds, results,
          and full horse / trainer / jockey / track databases follow in Phase 2.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/methodology"
            className="rounded-lg bg-brand-primary px-4 py-2 text-sm font-semibold text-white no-underline hover:opacity-90"
          >
            Read the methodology &rarr;
          </Link>
          <Link
            href="/track-record"
            className="rounded-lg border border-brand-border bg-white px-4 py-2 text-sm font-semibold text-brand-primary no-underline hover:border-brand-primary"
          >
            See the track record &rarr;
          </Link>
        </div>
      </section>

      {/* Explore / learn — internal-linking + discovery surface */}
      <section className="mb-12">
        <h2 className="mb-4 font-display text-2xl font-bold text-brand-text-dark">Explore</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { href: '/horses', label: 'Horse profiles', desc: 'Form, strike-rates & ratings' },
            { href: '/trainers', label: 'Trainer profiles', desc: 'Strike-rates & runners' },
            { href: '/jockeys', label: 'Jockey profiles', desc: 'Strike-rates & booked rides' },
            { href: '/tracks', label: 'Racecourses', desc: 'Going, surface & cards' },
            { href: '/guides', label: 'Guides', desc: 'How to read cards, odds & form' },
            { href: '/glossary', label: 'Glossary', desc: 'Every racing term explained' },
            { href: '/ownership', label: 'Ownership', desc: 'Get into racehorse ownership, honestly' },
            { href: '/experiences', label: 'Experiences', desc: 'Plan a day at the races & racing travel' },
            { href: '/gear', label: 'Gear', desc: 'Honest equestrian buyer’s guides' },
            { href: '/newsletter', label: 'Newsletter', desc: 'The Form — the sport explained weekly' },
            { href: '/predict', label: 'Predict the Finish', desc: 'Test your eye against the model — just for fun' },
            { href: '/first-derby', label: 'Your First Derby', desc: 'New to the sport? Start here' },
            { href: '/bloodstock', label: 'Bloodstock', desc: 'How sales & pedigrees actually work' },
            { href: '/race-types', label: 'Race Types', desc: 'Maiden to Grade 1, explained' },
            { href: '/major-races', label: 'Major Races', desc: 'Triple Crown & Breeders’ Cup' },
          ].map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="block rounded-xl border border-brand-border bg-white p-5 no-underline transition hover:border-brand-primary"
            >
              <p className="font-display text-lg font-bold text-brand-text-dark">{c.label}</p>
              <p className="mt-1 text-sm text-brand-text-mid">{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <EmailCapture
        siteId="horse-racing"
        variant="section"
        source="race-center"
        title="Get the Daily Racing Intelligence brief"
        subtitle="Tomorrow's top-rated runners and value plays, in your inbox before first race."
      />
    </div>
  );
}
