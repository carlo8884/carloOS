/**
 * Glossary term — /glossary/[slug]
 *
 * One durable, indexable, AI-citable definition per term, with DefinedTerm +
 * FAQ structured data so LLMs and rich results can cite it directly.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildMetadata, Breadcrumb, SchemaScript, buildFAQSchema } from '@carloOS/ui';
import { getSiteConfig } from '@carloOS/config';
import { allTermSlugs, getTerm } from '../../../data/racing/glossary';

export function generateStaticParams() {
  return allTermSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const term = getTerm(params.slug);
  if (!term) {
    return buildMetadata({
      siteId: 'horse-racing',
      title: 'Term not found',
      description: 'This glossary term could not be found.',
      path: `/glossary/${params.slug}`,
    });
  }
  return buildMetadata({
    siteId: 'horse-racing',
    title: `${term.term} — Horse Racing Term Explained`,
    description: term.short,
    path: `/glossary/${term.slug}`,
  });
}

export default function GlossaryTermPage({ params }: { params: { slug: string } }) {
  const term = getTerm(params.slug);
  if (!term) notFound();

  const base = getSiteConfig('horse-racing').theme.siteUrl;
  const definedTermSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: term.term,
    description: term.short,
    inDefinedTermSet: `${base}/glossary`,
    url: `${base}/glossary/${term.slug}`,
  };

  const related = (term.related ?? [])
    .map((slug) => getTerm(slug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
    <>
      <SchemaScript schema={definedTermSchema} />
      <SchemaScript
        schema={buildFAQSchema({
          items: [{ question: `What is ${term.term.toLowerCase()} in horse racing?`, answer: term.short }],
        })}
      />
      <Breadcrumb
        siteId="horse-racing"
        items={[
          { name: 'Race Center', href: '/' },
          { name: 'Glossary', href: '/glossary' },
          { name: term.term },
        ]}
      />

      <div className="mx-auto max-w-2xl px-4 py-10">
        <article>
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            {term.category}
          </p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            {term.term}
          </h1>
          <p className="mt-4 border-l-4 border-emerald-400 bg-emerald-50 p-4 text-lg font-medium text-brand-text-dark">
            {term.short}
          </p>
          <div className="mt-6 space-y-4">
            {term.body.map((p, i) => (
              <p key={i} className="leading-relaxed text-brand-text-mid">
                {p}
              </p>
            ))}
          </div>
        </article>

        {related.length > 0 && (
          <section className="mt-10 border-t border-brand-border pt-6">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-brand-text-light">
              Related terms
            </h2>
            <div className="flex flex-wrap gap-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/glossary/${r.slug}`}
                  className="rounded-full border border-brand-border bg-white px-3 py-1 text-sm font-medium text-brand-primary no-underline hover:border-brand-primary"
                >
                  {r.term}
                </Link>
              ))}
            </div>
          </section>
        )}

        <p className="mt-10 text-sm text-brand-text-light">
          See these concepts applied on today’s{' '}
          <Link href="/" className="underline">
            AI-graded racecards
          </Link>
          , or read how they feed the{' '}
          <Link href="/methodology" className="underline">
            Intelligence Rating
          </Link>
          .
        </p>
      </div>
    </>
  );
}
