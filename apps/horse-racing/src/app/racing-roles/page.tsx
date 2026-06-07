/**
 * Racing Roles hub — /racing-roles (Pillar B, non-wagering racing vertical)
 * D12 Tier A: "jockey/trainer/owner role guides." Educational who's-who of the
 * sport. Trust-safe: factual role descriptions, no wagering framing.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata, Breadcrumb, EmailCapture } from '@carloOS/ui';
import { racingRoles } from '../../data/racing/racing-roles';

export const metadata: Metadata = buildMetadata({
  siteId: 'horse-racing',
  title: 'Who’s Who in Horse Racing — Jockey, Trainer, Owner & Officials',
  description:
    'A clear guide to the people behind every race: what jockeys, trainers, owners, and racing officials actually do, how they’re paid, and how they work together.',
  path: '/racing-roles',
});

export default function RacingRolesHubPage() {
  return (
    <>
      <Breadcrumb
        siteId="horse-racing"
        items={[{ name: 'Race Center', href: '/' }, { name: 'Racing Roles' }]}
      />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <header className="mb-8">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Who’s who
          </p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            The People Behind Every Race
          </h1>
          <p className="mt-3 text-lg text-brand-text-mid">
            Every race is the work of a whole team — the rider, the trainer who prepared the horse,
            the owner who funds it, and the officials who keep it fair. Here’s what each one
            actually does.
          </p>
        </header>

        <div className="space-y-3">
          {racingRoles.map((r) => (
            <Link
              key={r.slug}
              href={`/racing-roles/${r.slug}`}
              className="block rounded-xl border border-brand-border bg-white p-5 no-underline transition hover:border-brand-primary"
            >
              <h2 className="font-display text-lg font-bold text-brand-text-dark">{r.name}</h2>
              <p className="mt-1 text-sm text-brand-text-mid">{r.short}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <EmailCapture
            variant="section"
            siteId="horse-racing"
            source="racing-roles-hub"
            title="Get The Form, free"
            subtitle="The sport explained clearly, one read a week. No tips, no hype."
            ctaText="Subscribe free"
          />
        </div>
      </div>
    </>
  );
}
