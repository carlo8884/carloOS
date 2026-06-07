/**
 * Racing History hub — /racing-history (Pillar B, non-wagering racing vertical)
 * Heritage cluster on the history of Thoroughbred racing: the breed's origins,
 * the formation of the Triple Crown, celebrated horses, and milestones. Trust-
 * safe: pure heritage/educational content, no odds/picks/handicapping. Grouped
 * by era so the hub→spoke topical-authority signal is clear.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata, Breadcrumb, EmailCapture } from '@carloOS/ui';
import {
  racingHistoryTopics,
  eraLabels,
  type RacingHistoryTopic,
} from '../../data/racing/racing-history';

export const metadata: Metadata = buildMetadata({
  siteId: 'horse-racing',
  title: 'The History of Thoroughbred Racing — Heritage & Legends',
  description:
    'A heritage guide to the history of Thoroughbred racing: the breed’s British origins and three foundation sires, the formation of the Triple Crown, celebrated horses like Secretariat and Man o’ War, and the milestones that shaped American racing.',
  path: '/racing-history',
});

const ERAS: RacingHistoryTopic['era'][] = ['origins', 'series', 'profiles', 'milestones'];

export default function RacingHistoryHubPage() {
  return (
    <>
      <Breadcrumb
        siteId="horse-racing"
        items={[{ name: 'Race Center', href: '/' }, { name: 'Racing History' }]}
      />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <header className="mb-8">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            The heritage of the sport
          </p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            The History of Thoroughbred Racing
          </h1>
          <p className="mt-3 text-lg text-brand-text-mid">
            Thoroughbred racing carries more than three centuries of heritage — from the three
            foundation sires that created the breed in Britain to the legends who made the sport an
            American institution. Here is the story, from the breed’s origins to the great horses and
            the milestones that shaped the modern game.
          </p>
        </header>

        {ERAS.map((era) => {
          const inEra = racingHistoryTopics.filter((t) => t.era === era);
          if (inEra.length === 0) return null;
          return (
            <section key={era} className="mb-8">
              <h2 className="mb-3 font-display text-sm font-bold uppercase tracking-eyebrow text-brand-text-light">
                {eraLabels[era]}
              </h2>
              <div className="space-y-3">
                {inEra.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/racing-history/${t.slug}`}
                    className="block rounded-xl border border-brand-border bg-white p-5 no-underline transition hover:border-brand-primary"
                  >
                    <h3 className="font-display text-lg font-bold text-brand-text-dark">{t.title}</h3>
                    <p className="mt-1 text-sm text-brand-text-mid">{t.short}</p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        <div className="mt-10">
          <EmailCapture
            variant="section"
            siteId="horse-racing"
            source="racing-history-hub"
            title="Get The Form, free"
            subtitle="The sport explained clearly, one read a week. No tips, no hype."
            ctaText="Subscribe free"
          />
        </div>
      </div>
    </>
  );
}
