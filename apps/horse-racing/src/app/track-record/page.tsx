/**
 * Track Record — /track-record
 *
 * The trust asset and marketing engine: a public, timestamped ledger of model
 * predictions vs outcomes. In Phase 1 we show the framework and the live cards
 * the model has graded; once a data feed + results are wired (Phase 2), this
 * page auto-populates with strike-rate and ROI — the uniquely citable stat no
 * competitor can copy. Content-only (chrome from layout.tsx).
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata, Breadcrumb } from '@carloOS/ui';
import { allRaces } from '../../data/racing/meetings';
import { analyzeRace } from '../../data/racing/analysis';

export const metadata: Metadata = buildMetadata({
  siteId: 'horse-racing',
  title: 'Model Track Record — Predictions vs Results',
  description:
    'A public, timestamped ledger of every Intelligence Rating top pick and value play. Transparency over hype: results are logged as they settle, building a verifiable strike-rate and ROI.',
  path: '/track-record',
});

export default function TrackRecordPage() {
  const graded = allRaces()
    .map(({ race }) => ({ race, analysis: analyzeRace(race) }))
    .sort((a, b) => a.race.offTime.localeCompare(b.race.offTime));

  return (
    <>
      <Breadcrumb
        siteId="horse-racing"
        items={[{ name: 'Race Center', href: '/' }, { name: 'Track Record' }]}
      />

      <div className="mx-auto max-w-4xl px-4 py-10">
        <header className="mb-8">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Accountability
          </p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            Model Track Record
          </h1>
          <p className="mt-3 text-lg text-brand-text-mid">
            Tipsters quietly delete their losers. We do the opposite. Every top pick and value play
            the model makes is logged here with a timestamp, then settled against the result. The
            running strike-rate and ROI become a verifiable record — the one stat no competitor can
            fake.
          </p>
        </header>

        {/* Headline metrics — placeholders until results settle in Phase 2 */}
        <section className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: 'Picks logged', value: `${graded.length}` },
            { label: 'Win strike-rate', value: '—' },
            { label: 'Place strike-rate', value: '—' },
            { label: 'ROI to 1pt level', value: '—' },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-brand-border bg-white p-4 text-center"
            >
              <p className="font-display text-2xl font-bold text-brand-text-dark">{m.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-brand-text-light">{m.label}</p>
            </div>
          ))}
        </section>

        <div className="mb-8 rounded-lg border-l-4 border-amber-400 bg-amber-50 p-4 text-sm text-brand-text-mid">
          <strong className="text-brand-text-dark">Phase 1.</strong> The model is running on curated
          validation cards. Strike-rate and ROI go live the moment a results feed is connected —
          every entry below will then be settled and scored automatically. No pick will ever be
          edited or removed after publication.
        </div>

        {/* The ledger */}
        <section>
          <h2 className="mb-4 font-display text-2xl font-bold text-brand-text-dark">
            The ledger
          </h2>
          <div className="overflow-hidden rounded-xl border border-brand-border bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-brand-surface text-xs uppercase tracking-wide text-brand-text-light">
                <tr>
                  <th className="px-4 py-3">Race</th>
                  <th className="px-4 py-3">Top pick</th>
                  <th className="px-4 py-3">Value play</th>
                  <th className="px-4 py-3 text-right">Result</th>
                </tr>
              </thead>
              <tbody>
                {graded.map(({ race, analysis }) => {
                  const top = race.runners.find((r) => r.id === analysis.topPick.runnerId)!;
                  const value = analysis.valuePick
                    ? race.runners.find((r) => r.id === analysis.valuePick!.runnerId)
                    : null;
                  return (
                    <tr key={race.id} className="border-t border-brand-border">
                      <td className="px-4 py-3">
                        <Link
                          href={`/racecards/${race.id}`}
                          className="font-medium text-emerald-700 hover:underline"
                        >
                          {race.course}
                        </Link>
                        <div className="text-xs text-brand-text-light">{race.name}</div>
                      </td>
                      <td className="px-4 py-3">
                        {top.name}{' '}
                        <span className="text-xs text-brand-text-light">
                          ({analysis.topPick.score})
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        {value ? (
                          <>
                            {value.name}{' '}
                            <span className="text-xs text-amber-600">
                              @ {value.oddsDecimal.toFixed(1)}
                            </span>
                          </>
                        ) : (
                          <span className="text-brand-text-light">—</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <span className="rounded-full bg-brand-surface px-2 py-0.5 text-xs font-medium text-brand-text-light">
                          pending
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <p className="mt-8 rounded-lg bg-brand-surface p-4 text-xs text-brand-text-light">
          See exactly how each pick is generated on the{' '}
          <Link href="/methodology" className="underline">
            methodology page
          </Link>
          . Ratings are model-generated for informational purposes only — please gamble responsibly
          (18+; in the US, call 1-800-GAMBLER).
        </p>
      </div>
    </>
  );
}
