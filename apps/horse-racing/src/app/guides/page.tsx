/**
 * Guides hub — /guides
 * Evergreen how-to library for long-tail SEO capture.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata, Breadcrumb } from '@carloOS/ui';
import { guides } from '../../data/racing/guides';

export const metadata: Metadata = buildMetadata({
  siteId: 'horse-racing',
  title: 'Horse Racing Guides — How to Read Cards, Odds & Form',
  description:
    'Clear, beginner-friendly guides to horse racing: how to read a racecard, how odds work, how to spot value, and more.',
  path: '/guides',
});

export default function GuidesHubPage() {
  return (
    <>
      <Breadcrumb siteId="horse-racing" items={[{ name: 'Race Center', href: '/' }, { name: 'Guides' }]} />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <header className="mb-8">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">Learn</p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            Horse Racing Guides
          </h1>
          <p className="mt-3 text-lg text-brand-text-mid">
            Plain-English guides to reading the form, understanding odds, and thinking about value
            the way the model does.
          </p>
        </header>
        <div className="space-y-3">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="block rounded-xl border border-brand-border bg-white p-5 no-underline transition hover:border-brand-primary"
            >
              <h2 className="font-display text-lg font-bold text-brand-text-dark">{g.title}</h2>
              <p className="mt-1 text-sm text-brand-text-mid">{g.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
