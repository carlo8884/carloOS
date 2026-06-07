/**
 * Racehorse Care hub — /racehorse-care (non-wagering welfare/education cluster)
 * Educational cluster on the daily care and welfare of racehorses: feeding,
 * grooming, hoof care, cooling out, turnout, and transport. Trust-safe: general
 * husbandry education only, no wagering surface, defers specific health/nutrition
 * decisions to a vet, farrier, or qualified equine professional.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata, Breadcrumb, EmailCapture } from '@carloOS/ui';
import { racehorseCareTopics } from '../../data/racing/racehorse-care';

export const metadata: Metadata = buildMetadata({
  siteId: 'horse-racing',
  title: 'Racehorse Care — Daily Care, Feeding, Hoof Care & Welfare',
  description:
    'How racehorses are cared for day to day: feeding and nutrition basics, grooming and mucking out, hoof care and farriery, cooling down and recovery, turnout, and safe transport to the races.',
  path: '/racehorse-care',
});

export default function RacehorseCareHubPage() {
  return (
    <>
      <Breadcrumb
        siteId="horse-racing"
        items={[{ name: 'Race Center', href: '/' }, { name: 'Racehorse Care' }]}
      />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <header className="mb-8">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Welfare and the working horse
          </p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            Racehorse Care
          </h1>
          <p className="mt-3 text-lg text-brand-text-mid">
            Behind every horse on the track is a daily routine of feeding, grooming, hoof care, and
            rest. This guide explains how racehorses are looked after as equine athletes — from the
            shape of a yard’s day to how horses ship safely to the races. It’s general education;
            specific health, nutrition, and hoof decisions belong with a vet, farrier, or qualified
            equine professional.
          </p>
        </header>

        <section className="mb-8">
          <div className="space-y-3">
            {racehorseCareTopics.map((t) => (
              <Link
                key={t.slug}
                href={`/racehorse-care/${t.slug}`}
                className="block rounded-xl border border-brand-border bg-white p-5 no-underline transition hover:border-brand-primary"
              >
                <h2 className="font-display text-lg font-bold text-brand-text-dark">{t.title}</h2>
                <p className="mt-1 text-sm text-brand-text-mid">{t.short}</p>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-10">
          <EmailCapture
            variant="section"
            siteId="horse-racing"
            source="racehorse-care-hub"
            title="Get The Form, free"
            subtitle="The sport explained clearly, one read a week. No tips, no hype."
            ctaText="Subscribe free"
          />
        </div>
      </div>
    </>
  );
}
