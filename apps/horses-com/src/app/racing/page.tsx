/**
 * Racing index — /racing
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata, Breadcrumb } from '@carloOS/ui';
import { racingTopics } from '../../data/racing';

export function generateMetadata(): Metadata {
  return buildMetadata({
    siteId: 'horses-com',
    title: 'Horse Racing — Heritage, Ownership & How the Sport Works',
    description:
      'Enthusiast guides to Thoroughbred racing: the Triple Crown, how the sport works, bloodstock and breeding, and racehorse ownership. Educational, not betting advice.',
    path: '/racing',
  });
}

export default function RacingPage() {
  return (
    <>
      <Breadcrumb
        siteId="horses-com"
        items={[{ name: 'Home', href: '/' }, { name: 'Racing' }]}
      />
      <div className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="font-display text-4xl font-bold tracking-tight text-brand-dark">
          Horse Racing
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-brand-text-mid">
          Enthusiast guides to the heritage, sport, and ownership of Thoroughbred racing — from
          the Triple Crown to bloodstock and how to follow a race day. Educational and
          fan-focused, not betting or handicapping advice.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {racingTopics.map((t) => (
            <Link
              key={t.slug}
              href={`/racing/${t.slug}`}
              className="rounded-lg border border-brand-border p-5 no-underline transition hover:border-brand-primary hover:shadow-md"
            >
              <h2 className="font-display text-xl font-bold text-brand-dark">{t.name}</h2>
              <p className="mt-2 text-sm text-brand-text-mid">{t.tagline}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
