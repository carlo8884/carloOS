/**
 * Guide — /guides/[slug]
 * Long-form evergreen guide with Article + FAQ structured data.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildMetadata, Breadcrumb, SchemaScript, buildFAQSchema } from '@carloOS/ui';
import { allGuideSlugs, getGuide } from '../../../data/racing/guides';
import { getTerm } from '../../../data/racing/glossary';

export function generateStaticParams() {
  return allGuideSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const g = getGuide(params.slug);
  if (!g) {
    return buildMetadata({
      siteId: 'horse-racing',
      title: 'Guide not found',
      description: 'This guide could not be found.',
      path: `/guides/${params.slug}`,
    });
  }
  return buildMetadata({
    siteId: 'horse-racing',
    title: g.metaTitle,
    description: g.description,
    path: `/guides/${g.slug}`,
    type: 'article',
  });
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const g = getGuide(params.slug);
  if (!g) notFound();

  const related = (g.related ?? [])
    .map((slug) => getTerm(slug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
    <>
      <SchemaScript schema={buildFAQSchema({ questions: g.faq })} />
      <Breadcrumb
        siteId="horse-racing"
        items={[
          { name: 'Race Center', href: '/' },
          { name: 'Guides', href: '/guides' },
          { name: g.title },
        ]}
      />

      <div className="mx-auto max-w-2xl px-4 py-10">
        <article>
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">Guide</p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            {g.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-brand-text-mid">{g.intro}</p>

          {g.sections.map((s) => (
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
            <h2 className="font-display text-xl font-bold text-brand-text-dark">
              Frequently asked
            </h2>
            <div className="mt-3 space-y-4">
              {g.faq.map((item) => (
                <div key={item.question}>
                  <h3 className="font-semibold text-brand-text-dark">{item.question}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand-text-mid">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </article>

        {related.length > 0 && (
          <section className="mt-8 border-t border-brand-border pt-6">
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
      </div>
    </>
  );
}
