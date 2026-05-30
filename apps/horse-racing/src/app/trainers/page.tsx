/**
 * Trainer directory — /trainers
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata, Breadcrumb } from '@carloOS/ui';
import { trainerDirectory } from '../../data/racing/profiles';

export const metadata: Metadata = buildMetadata({
  siteId: 'horse-racing',
  title: 'Trainer Profiles — Form & Strike-Rates',
  description:
    'Browse trainer profiles with runner form, win and place strike-rates, and AI Intelligence Ratings for their entries.',
  path: '/trainers',
});

export default function TrainersDirectoryPage() {
  const trainers = trainerDirectory();
  return (
    <>
      <Breadcrumb siteId="horse-racing" items={[{ name: 'Race Center', href: '/' }, { name: 'Trainers' }]} />
      <div className="mx-auto max-w-4xl px-4 py-10">
        <header className="mb-8">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">Database</p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            Trainer Profiles
          </h1>
          <p className="mt-3 text-lg text-brand-text-mid">
            Strike-rates and current runners for every trainer in our coverage.
          </p>
        </header>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {trainers.map((t) => (
            <Link
              key={t.slug}
              href={`/trainers/${t.slug}`}
              className="block rounded-lg border border-brand-border bg-white p-4 font-semibold text-brand-text-dark no-underline transition hover:border-brand-primary"
            >
              {t.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
