/**
 * Glossary hub — /glossary
 *
 * Index of every racing term. Programmatic-SEO + GEO surface: durable,
 * indexable, AI-citable definitions. Content-only (chrome from layout.tsx).
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata, Breadcrumb } from '@carloOS/ui';
import { glossaryByCategory, glossary } from '../../data/racing/glossary';

export const metadata: Metadata = buildMetadata({
  siteId: 'horse-racing',
  title: 'Horse Racing Glossary — Terms & Definitions Explained',
  description:
    'Plain-English definitions of horse racing terms: going, form, official rating, handicaps, value, the draw and more. A clear, sourced reference for new and serious racing fans.',
  path: '/glossary',
});

export default function GlossaryHubPage() {
  const byCategory = glossaryByCategory();
  const categories = Object.keys(byCategory).sort();

  return (
    <>
      <Breadcrumb
        siteId="horse-racing"
        items={[{ name: 'Race Center', href: '/' }, { name: 'Glossary' }]}
      />

      <div className="mx-auto max-w-4xl px-4 py-10">
        <header className="mb-8">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Reference
          </p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            Horse Racing Glossary
          </h1>
          <p className="mt-3 text-lg text-brand-text-mid">
            Clear, plain-English definitions of the terms you’ll meet on a racecard — from{' '}
            <em>going</em> and <em>form</em> to <em>official ratings</em> and <em>value</em>. {glossary.length}{' '}
            terms and growing.
          </p>
        </header>

        {categories.map((cat) => (
          <section key={cat} className="mb-8">
            <h2 className="mb-3 font-display text-xl font-bold text-brand-text-dark">{cat}</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {byCategory[cat].map((t) => (
                <Link
                  key={t.slug}
                  href={`/glossary/${t.slug}`}
                  className="block rounded-lg border border-brand-border bg-white p-4 no-underline transition hover:border-brand-primary"
                >
                  <h3 className="font-semibold text-brand-text-dark">{t.term}</h3>
                  <p className="mt-1 text-sm text-brand-text-mid">{t.short}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
