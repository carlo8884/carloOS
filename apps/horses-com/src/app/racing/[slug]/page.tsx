/**
 * Racing topic detail page — /racing/[slug]
 *
 * Enthusiast/heritage content. Article + FAQ schema, breadcrumbs, and a
 * source-anchored references section (QC §1.5 / §1.7). No fabricated authority;
 * no betting promotion.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildMetadata, Breadcrumb, SchemaScript, buildFAQSchema } from '@carloOS/ui';
import { allRacingSlugs, getRacingTopic } from '../../../data/racing';
import { getBreedBySlug } from '../../../data/breeds';

export function generateStaticParams() {
  return allRacingSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const t = getRacingTopic(params.slug);
  if (!t) {
    return buildMetadata({
      siteId: 'horses-com',
      title: 'Racing topic not found',
      description: 'This racing topic could not be found.',
      path: `/racing/${params.slug}`,
    });
  }
  return buildMetadata({
    siteId: 'horses-com',
    title: t.metaTitle,
    description: t.summary.slice(0, 155),
    path: `/racing/${t.slug}`,
    type: 'article',
  });
}

export default function RacingTopicPage({ params }: { params: { slug: string } }) {
  const t = getRacingTopic(params.slug);
  if (!t) notFound();

  const relatedBreeds = (t.relatedBreeds ?? [])
    .map((slug) => getBreedBySlug(slug))
    .filter((b): b is NonNullable<typeof b> => Boolean(b));

  const relatedTopics = (t.relatedTopics ?? [])
    .map((slug) => getRacingTopic(slug))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  return (
    <>
      {/* Breadcrumb emits BreadcrumbList JSON-LD (QC §2.9). FAQ schema below.
          No Article schema: buildArticleSchema forces a Person author, and we
          will not fabricate authorship (QC §1.1/§1.3). */}
      <SchemaScript schema={buildFAQSchema({ questions: t.faq })} />
      <Breadcrumb
        siteId="horses-com"
        items={[
          { name: 'Home', href: '/' },
          { name: 'Racing', href: '/racing' },
          { name: t.name },
        ]}
      />
      <article className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-primary">Racing</p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-brand-dark">
          {t.name}
        </h1>
        <p className="mt-3 text-lg text-brand-text-mid">{t.tagline}</p>

        <div className="mt-8 space-y-8">
          {t.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-display text-2xl font-bold text-brand-dark">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="mt-3 leading-relaxed text-brand-text-mid">{p}</p>
              ))}
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-lg border border-brand-border bg-brand-surface p-6">
          <h2 className="font-display text-xl font-bold text-brand-dark">Essentials</h2>
          <ul className="mt-3 space-y-2">
            {t.essentials.map((e) => (
              <li key={e} className="flex gap-2 text-brand-text-mid">
                <span className="text-brand-primary">•</span>
                {e}
              </li>
            ))}
          </ul>
        </section>

        {t.faq.length > 0 && (
          <section className="mt-10">
            <h2 className="font-display text-2xl font-bold text-brand-dark">
              Frequently asked questions
            </h2>
            <div className="mt-4 space-y-6">
              {t.faq.map((item) => (
                <div key={item.question}>
                  <h3 className="font-semibold text-brand-dark">{item.question}</h3>
                  <p className="mt-2 text-brand-text-mid">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mt-10 border-t border-brand-border pt-6">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-text-light">
            References
          </h2>
          <ul className="space-y-2">
            {t.references.map((r) => (
              <li key={r.url}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-sm text-brand-primary hover:underline"
                >
                  {r.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {relatedBreeds.length > 0 && (
          <section className="mt-8 border-t border-brand-border pt-6">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-text-light">
              Related breeds
            </h2>
            <div className="flex flex-wrap gap-2">
              {relatedBreeds.map((b) => (
                <Link
                  key={b.slug}
                  href={`/breeds/${b.slug}`}
                  className="rounded-full border border-brand-border bg-white px-3 py-1 text-sm font-medium text-brand-primary no-underline hover:border-brand-primary"
                >
                  {b.name}
                </Link>
              ))}
            </div>
          </section>
        )}

        {relatedTopics.length > 0 && (
          <section className="mt-8 border-t border-brand-border pt-6">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-text-light">
              More racing guides
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {relatedTopics.map((r) => (
                <Link
                  key={r.slug}
                  href={`/racing/${r.slug}`}
                  className="rounded-lg border border-brand-border p-4 no-underline transition hover:border-brand-primary"
                >
                  <div className="font-semibold text-brand-dark">{r.name}</div>
                  <p className="mt-1 text-sm text-brand-text-mid">{r.tagline}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
