/**
 * Predict the Finish — /predict (queue #2)
 *
 * A no-prize, pure-skill engagement toy: the player predicts a race's top 3 and
 * scores against the Intelligence Rating model. NO prize, NO entry, NO wager —
 * deliberately outside the 2025 sweepstakes/prize-game legal surface. Server
 * component computes the model ranking from curated data and hands a minimal
 * shape to the client game. Converts engaged players to the newsletter.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata, Breadcrumb, EmailCapture } from '@carloOS/ui';
import { allRaces } from '../../data/racing/meetings';
import { analyzeRace } from '../../data/racing/analysis';
import { PredictGame } from './PredictGame';

export const metadata: Metadata = buildMetadata({
  siteId: 'horse-racing',
  title: 'Predict the Finish — Test Your Eye Against the Model',
  description:
    'A free, just-for-fun skill game: predict a race’s top three and see how your read stacks up against the Intelligence Rating model. No stakes, no prizes — just sharpen your eye.',
  path: '/predict',
});

export default function PredictPage() {
  // Use the first curated race with a full field as the featured game.
  const races = allRaces().sort((a, b) => a.race.offTime.localeCompare(b.race.offTime));
  const featured = races.find(({ race }) => race.runners.length >= 4) ?? races[0];
  const analysis = analyzeRace(featured.race);

  // Map model ratings -> rank (1 = top-rated) and hand the game a minimal shape.
  const rankById = new Map(
    [...analysis.ratings]
      .sort((a, b) => b.score - a.score)
      .map((r, i) => [r.runnerId, i + 1]),
  );
  const gameRunners = featured.race.runners.map((r) => ({
    id: r.id,
    name: r.name,
    number: r.number,
    modelRank: rankById.get(r.id) ?? 99,
  }));

  return (
    <>
      <Breadcrumb
        siteId="horse-racing"
        items={[{ name: 'Race Center', href: '/' }, { name: 'Predict the Finish' }]}
      />
      <div className="mx-auto max-w-2xl px-4 py-10">
        <header className="mb-8">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Just for fun
          </p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            Predict the Finish
          </h1>
          <p className="mt-3 text-lg text-brand-text-mid">
            Think you can read a race? Pick the top three and see how your eye compares to the
            Intelligence Rating model — then learn <em>why</em> it saw things the way it did. No
            stakes, no prizes, no betting. Just a fun way to get sharper.
          </p>
        </header>

        <PredictGame
          raceName={featured.race.name}
          course={featured.race.course}
          runners={gameRunners}
        />

        <div className="mt-10">
          <EmailCapture
            variant="section"
            siteId="horse-racing"
            source="predict-game"
            title="Get a new race to call every week"
            subtitle="Enjoyed that? The Form newsletter includes a race to test your eye on, plus the sport explained — free, weekly."
            ctaText="Subscribe free"
          />
        </div>

        <div className="mt-8 rounded-xl border border-brand-border bg-brand-surface p-5 text-sm text-brand-text-mid">
          <p>
            <strong className="text-brand-text-dark">New to reading a race?</strong> Start with{' '}
            <Link href="/guides/how-to-read-a-racecard" className="font-semibold text-brand-primary no-underline hover:underline">
              how to read a racecard
            </Link>{' '}
            and{' '}
            <Link href="/methodology" className="font-semibold text-brand-primary no-underline hover:underline">
              how the Intelligence Rating works
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
