/**
 * Track directory — /tracks
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata, Breadcrumb } from '@carloOS/ui';
import { trackDirectory } from '../../data/racing/profiles';

export const metadata: Metadata = buildMetadata({
  siteId: 'horse-racing',
  title: 'Racecourse Profiles — Going, Cards & Analysis',
  description:
    'Browse racecourse profiles with surface, going, and today’s AI-graded cards for each track in our coverage.',
  path: '/tracks',
});

export default function TracksDirectoryPage() {
  const tracks = trackDirectory();
  return (
    <>
      <Breadcrumb siteId="horse-racing" items={[{ name: 'Race Center', href: '/' }, { name: 'Tracks' }]} />
      <div className="mx-auto max-w-4xl px-4 py-10">
        <header className="mb-8">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">Database</p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            Racecourse Profiles
          </h1>
          <p className="mt-3 text-lg text-brand-text-mid">
            Surface, going and today’s cards for every track in our coverage.
          </p>
        </header>
        <div className="grid gap-3 sm:grid-cols-2">
          {tracks.map((t) => (
            <Link
              key={t.slug}
              href={`/tracks/${t.slug}`}
              className="block rounded-lg border border-brand-border bg-white p-4 no-underline transition hover:border-brand-primary"
            >
              <span className="font-semibold text-brand-text-dark">{t.name}</span>
              <span className="ml-2 text-sm text-brand-text-light">{t.country}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
