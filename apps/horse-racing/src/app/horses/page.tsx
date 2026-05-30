/**
 * Horse directory — /horses
 * Programmatic-SEO hub linking to every horse profile.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata, Breadcrumb } from '@carloOS/ui';
import { horseDirectory } from '../../data/racing/profiles';

export const metadata: Metadata = buildMetadata({
  siteId: 'horse-racing',
  title: 'Horse Profiles — Form, Ratings & Analysis',
  description:
    'Browse horse profiles with recent form, win and place strike-rates, and AI Intelligence Ratings for upcoming races.',
  path: '/horses',
});

export default function HorsesDirectoryPage() {
  const horses = horseDirectory();
  return (
    <>
      <Breadcrumb siteId="horse-racing" items={[{ name: 'Race Center', href: '/' }, { name: 'Horses' }]} />
      <div className="mx-auto max-w-4xl px-4 py-10">
        <header className="mb-8">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">Database</p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            Horse Profiles
          </h1>
          <p className="mt-3 text-lg text-brand-text-mid">
            Form, strike-rates and AI ratings for every horse in our coverage.
          </p>
        </header>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {horses.map((h) => (
            <Link
              key={h.slug}
              href={`/horses/${h.slug}`}
              className="block rounded-lg border border-brand-border bg-white p-4 font-semibold text-brand-text-dark no-underline transition hover:border-brand-primary"
            >
              {h.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
