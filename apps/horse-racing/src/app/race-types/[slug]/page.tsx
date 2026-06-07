/**
 * Race type — /race-types/[slug]
 * Long-form educational explainer with key-facts table + FAQ structured data.
 * Trust-safe: structural explanation of the sport, no wagering advice.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  buildMetadata,
  Breadcrumb,
  SchemaScript,
  buildFAQSchema,
  EmailCapture,
} from '@carloOS/ui';
import { allRaceTypeSlugs, getRaceType, tierLabels } from '../../../data/racing/race-types';

export function generateStaticParams() {
  return allRaceTypeSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const r = getRaceType(params.slug);
  if (!r) {
    return buildMetadata({
      siteId: 'horse-racing',
      title: 'Race type not found',
      description: 'This race type could not be found.',
      path: `/race-types/${params.slug}`,
    });
  }
  return buildMetadata({
    siteId: 'horse-racing',
    title: `${r.name} — What They Are & How They Work`,
    description: r.short,
    path: `/race-types/${r.slug}`,
    type: 'article',
  });
}

export default function RaceTypePage({ params }: { params: { slug: string } }) {
  const r = getRaceType(params.slug);
  if (!r) notFound();

  const related = (r.related ?? [])
    .map((slug) => getRaceType(slug))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <>
      <SchemaScript schema={buildFAQSchema({ questions: r.faq })} />
      <Breadcrumb
        siteId="horse-racing"
        items={[
          { name: 'Race Center', href: '/' },
          { name: 'Race Types', href: '/race-types' },
          { name: r.name },
        ]}
      />

      <div className="mx-auto max-w-2xl px-4 py-10">
        <article>
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            {tierLabels[r.tier]}
          </p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            {r.name}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-brand-text-mid">{r.intro}</p>

          {/* Key facts quick-reference */}
          <div className="mt-6 rounded-xl border border-brand-border bg-brand-surface p-5">
            <dl className="space-y-2">
              {r.keyFacts.map((f) => (
                <div key={f.label} className="flex flex-col sm:flex-row sm:gap-2">
                  <dt className="font-semibold text-brand-text-dark sm:w-40 sm:shrink-0">{f.label}</dt>
                  <dd className="text-brand-text-mid">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {r.sections.map((s) => (
            <section key={s.heading} className="mt-8">
              <h2 className="font-display text-xl font-bold text-brand-text-dark">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="mt-2 leading-relaxed text-brand-text-mid">
                  {p}
                </p>
              ))}
            </section>
          ))}

          <section className="mt-10 border-t border-brand-border pt-6">
            <h2 className="font-display text-xl font-bold text-brand-text-dark">Frequently asked</h2>
            <div className="mt-3 space-y-4">
              {r.faq.map((item) => (
                <div key={item.question}>
                  <h3 className="font-semibold text-brand-text-dark">{item.question}</h3>
                  <p className="mt-1 leading-relaxed text-brand-text-mid">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {related.length > 0 && (
            <section className="mt-10 border-t border-brand-border pt-6">
              <h2 className="font-display text-lg font-bold text-brand-text-dark">Related race types</h2>
              <div className="mt-3 space-y-2">
                {related.map((x) => (
                  <Link
                    key={x.slug}
                    href={`/race-types/${x.slug}`}
                    className="block font-semibold text-brand-primary no-underline hover:underline"
                  >
                    {x.name} &rarr;
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>

        <div className="mt-12">
          <EmailCapture
            variant="section"
            siteId="horse-racing"
            source={`race-types-${r.slug}`}
            title="Get The Form, free"
            subtitle="The sport explained clearly, one read a week."
            ctaText="Subscribe free"
          />
        </div>
      </div>
    </>
  );
}
