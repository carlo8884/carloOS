/**
 * Methodology — /methodology
 *
 * The single most citable page on the site: a plain-English, itemised
 * explanation of exactly how the Intelligence Rating is computed. Transparency
 * is the wedge vs black-box incumbents (Timeform/speed figs) and the strongest
 * GEO/AI-citation asset we own. Content-only (chrome from layout.tsx).
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata, Breadcrumb, SchemaScript, buildFAQSchema } from '@carloOS/ui';

export const metadata: Metadata = buildMetadata({
  siteId: 'horse-racing',
  title: 'How the Intelligence Rating Works — Methodology',
  description:
    'A transparent, itemised explanation of the Intelligence Rating: the five weighted factors (form, class, going, fitness, draw), how win probabilities and fair odds are derived, and how value is measured against the market.',
  path: '/methodology',
});

const FACTORS = [
  {
    name: 'Recent form',
    weight: 'up to 32 pts',
    detail:
      'The last four runs, weighted so the most recent counts most. Each finish is scored relative to field size (a win in a 16-runner handicap beats a win in a 5-runner maiden), then blended into a recency-weighted placing index. Non-completions score zero.',
  },
  {
    name: 'Class / official rating',
    weight: 'up to 22 pts',
    detail:
      'The horse’s official handicap rating, mapped onto the points band. Higher-rated horses carry more proven ability; unrated runners get a neutral baseline rather than a penalty.',
  },
  {
    name: 'Going suitability',
    weight: 'up to 10 pts',
    detail:
      'Whether today’s ground (firm → heavy, or all-weather) matches the surfaces the horse has previously handled. Proven on the going scores full marks; an unproven surface is flagged, not guessed.',
  },
  {
    name: 'Fitness / freshness',
    weight: 'up to 9 pts',
    detail:
      'Days since last run. Race-fit horses (≤21 days) score highest; long layoffs (120+ days) are marked down because fitness is a genuine question, not assumed.',
  },
  {
    name: 'Draw',
    weight: 'up to 6 pts',
    detail:
      'On turf sprints, a transparent low-draw bias is applied based on stall and field size. On dirt and over longer trips, the draw is treated as broadly neutral.',
  },
];

const FAQ = [
  {
    question: 'How is the Intelligence Rating calculated?',
    answer:
      'Each runner is scored 0–100 across five weighted factors — recent form (up to 32 points), class/official rating (up to 22), going suitability (up to 10), fitness/freshness (up to 9) and draw (up to 6). The points are summed and capped at 100. Every factor’s contribution is shown on the racecard, so the rating always shows its work.',
  },
  {
    question: 'How are model win probabilities and fair odds derived?',
    answer:
      'The field’s composite scores are converted into a probability distribution using exponential (softmax-style) weighting, so the ratings across all runners sum to 100%. Fair odds are simply the reciprocal of each runner’s win probability.',
  },
  {
    question: 'What does “value” or a “value pick” mean?',
    answer:
      'Value is the gap between the model’s win probability and the probability implied by the market price. When the model thinks a horse’s true chance is bigger than its odds suggest (an overlay), that positive edge is flagged as a value pick. It is a measure of price efficiency, not a prediction that the horse will win.',
  },
  {
    question: 'Is the Intelligence Rating betting advice?',
    answer:
      'No. The ratings are model-generated for informational and educational purposes only. Racing involves risk and nothing here is a guarantee of outcome or financial advice. Please gamble responsibly (18+; in the US, call 1-800-GAMBLER).',
  },
];

export default function MethodologyPage() {
  return (
    <>
      <SchemaScript schema={buildFAQSchema({ questions: FAQ })} />
      <Breadcrumb
        siteId="horse-racing"
        items={[{ name: 'Race Center', href: '/' }, { name: 'Methodology' }]}
      />

      <div className="mx-auto max-w-3xl px-4 py-10">
        <header className="mb-8">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Methodology
          </p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            How the Intelligence Rating works
          </h1>
          <p className="mt-3 text-lg text-brand-text-mid">
            Most ratings are black boxes — a single number with no explanation. Ours is the
            opposite. Every runner’s score is built from five weighted, inspectable factors, and the
            full breakdown is shown on every racecard. Here is exactly how it is computed.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="mb-4 font-display text-2xl font-bold text-brand-text-dark">
            The five factors
          </h2>
          <div className="space-y-4">
            {FACTORS.map((f) => (
              <div key={f.name} className="rounded-xl border border-brand-border bg-white p-5">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-lg font-bold text-brand-text-dark">{f.name}</h3>
                  <span className="shrink-0 rounded-full bg-brand-surface px-2 py-0.5 text-xs font-semibold text-brand-text-mid">
                    {f.weight}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-brand-text-mid">{f.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
          <h2 className="font-display text-xl font-bold text-brand-text-dark">
            From scores to probabilities to value
          </h2>
          <ol className="mt-3 space-y-3 text-sm leading-relaxed text-brand-text-mid">
            <li>
              <strong className="text-brand-text-dark">1. Score the field.</strong> Every runner
              gets a 0–100 composite from the five factors above.
            </li>
            <li>
              <strong className="text-brand-text-dark">2. Convert to probabilities.</strong> Scores
              are turned into win probabilities via exponential weighting, so the whole field sums to
              100%.
            </li>
            <li>
              <strong className="text-brand-text-dark">3. Derive fair odds.</strong> Fair odds are
              the reciprocal of each probability — what the price “should” be on the model’s view.
            </li>
            <li>
              <strong className="text-brand-text-dark">4. Measure value.</strong> We compare the
              model’s probability to the market’s implied probability. A positive gap is an overlay,
              flagged as a value pick.
            </li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 font-display text-2xl font-bold text-brand-text-dark">
            Frequently asked
          </h2>
          <div className="space-y-4">
            {FAQ.map((item) => (
              <div key={item.question}>
                <h3 className="font-semibold text-brand-text-dark">{item.question}</h3>
                <p className="mt-1 text-sm leading-relaxed text-brand-text-mid">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="rounded-lg bg-brand-surface p-4 text-xs text-brand-text-light">
          The model currently runs on curated Phase-1 cards while we validate it. As a live data
          feed is wired in, the same transparent engine runs unchanged on richer inputs — and every
          published pick is logged to the{' '}
          <Link href="/track-record" className="underline">
            public track record
          </Link>
          .
        </p>
      </div>
    </>
  );
}
