/**
 * Training & Safety hub — /training-safety (Pillar B, non-wagering racing vertical)
 * Educational cluster on how racehorses are trained and kept safe. Trust-safe:
 * pure educational explanation, no odds/picks/handicapping-as-advice, no medical
 * advice. Simple list of all topics as cards (no tier grouping).
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata, Breadcrumb, EmailCapture } from '@carloOS/ui';
import { trainingSafetyTopics } from '../../data/racing/training-safety';

export const metadata: Metadata = buildMetadata({
  siteId: 'horse-racing',
  title: 'How Racehorses Are Trained & Kept Safe — Training & Safety',
  description:
    'A clear, educational guide to how racehorses are trained and kept safe: daily gallops and breezing, the backstretch workforce, track surfaces, injury prevention, fitness and conditioning, and race-day safety protocols.',
  path: '/training-safety',
});

export default function TrainingSafetyHubPage() {
  return (
    <>
      <Breadcrumb
        siteId="horse-racing"
        items={[{ name: 'Race Center', href: '/' }, { name: 'Training & Safety' }]}
      />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <header className="mb-8">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Understanding the sport
          </p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            How Racehorses Are Trained &amp; Kept Safe
          </h1>
          <p className="mt-3 text-lg text-brand-text-mid">
            Most of what makes a racehorse happens far from the grandstand — in the early-morning
            work on the training track and in the daily care of the backstretch. This guide explains
            how horses are conditioned, who looks after them, and the safety systems that surround
            training and race day.
          </p>
        </header>

        <div className="space-y-3">
          {trainingSafetyTopics.map((t) => (
            <Link
              key={t.slug}
              href={`/training-safety/${t.slug}`}
              className="block rounded-xl border border-brand-border bg-white p-5 no-underline transition hover:border-brand-primary"
            >
              <h3 className="font-display text-lg font-bold text-brand-text-dark">{t.name}</h3>
              <p className="mt-1 text-sm text-brand-text-mid">{t.short}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <EmailCapture
            variant="section"
            siteId="horse-racing"
            source="training-safety-hub"
            title="Get The Form, free"
            subtitle="The sport explained clearly, one read a week. No tips, no hype."
            ctaText="Subscribe free"
          />
        </div>
      </div>
    </>
  );
}
