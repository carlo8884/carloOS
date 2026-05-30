/**
 * Jockey directory — /jockeys
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata, Breadcrumb } from '@carloOS/ui';
import { jockeyDirectory } from '../../data/racing/profiles';

export const metadata: Metadata = buildMetadata({
  siteId: 'horse-racing',
  title: 'Jockey Profiles — Form & Strike-Rates',
  description:
    'Browse jockey profiles with form, win and place strike-rates, and AI Intelligence Ratings for their booked rides.',
  path: '/jockeys',
});

export default function JockeysDirectoryPage() {
  const jockeys = jockeyDirectory();
  return (
    <>
      <Breadcrumb siteId="horse-racing" items={[{ name: 'Race Center', href: '/' }, { name: 'Jockeys' }]} />
      <div className="mx-auto max-w-4xl px-4 py-10">
        <header className="mb-8">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">Database</p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            Jockey Profiles
          </h1>
          <p className="mt-3 text-lg text-brand-text-mid">
            Strike-rates and booked rides for every jockey in our coverage.
          </p>
        </header>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {jockeys.map((j) => (
            <Link
              key={j.slug}
              href={`/jockeys/${j.slug}`}
              className="block rounded-lg border border-brand-border bg-white p-4 font-semibold text-brand-text-dark no-underline transition hover:border-brand-primary"
            >
              {j.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
