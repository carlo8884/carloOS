/**
 * Newsletter landing — /newsletter (queue #5)
 * Audience-capture glue: the editorial newsletter "The Form". Free weekly read,
 * no betting tips. Email capture is the conversion. Sample issues show the
 * recurring shape so readers know what they're subscribing to.
 *
 * Trust-safe (QC §1): "Editorial team" voice, no fabricated bylines, no tips,
 * no betting promises. Drip-sequence wiring stays in Monetization's lane.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata, Breadcrumb, EmailCapture } from '@carloOS/ui';
import { newsletterMeta, sampleEditions } from '../../data/racing/newsletter';

export const metadata: Metadata = buildMetadata({
  siteId: 'horse-racing',
  title: `${newsletterMeta.name} — ${newsletterMeta.tagline}`,
  description: newsletterMeta.pitch,
  path: '/newsletter',
});

export default function NewsletterPage() {
  return (
    <>
      <Breadcrumb
        siteId="horse-racing"
        items={[{ name: 'Race Center', href: '/' }, { name: 'Newsletter' }]}
      />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <header className="mb-8">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            {newsletterMeta.cadence}
          </p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            {newsletterMeta.name}
          </h1>
          <p className="mt-2 font-display text-lg italic text-brand-text-mid">
            {newsletterMeta.tagline}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-brand-text-mid">{newsletterMeta.pitch}</p>
        </header>

        {/* Primary conversion */}
        <EmailCapture
          variant="section"
          siteId="horse-racing"
          source="newsletter-landing"
          title={`Get ${newsletterMeta.name}, free`}
          subtitle="One thoughtful read a week. No tips, no hype — just the sport explained well. Unsubscribe anytime."
          ctaText="Subscribe free"
        />

        {/* What every issue contains */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-brand-text-dark">
            What’s in every issue
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {newsletterMeta.recurringSections.map((s) => (
              <div key={s.heading} className="rounded-xl border border-brand-border bg-white p-5">
                <h3 className="font-display text-lg font-bold text-brand-text-dark">{s.heading}</h3>
                <p className="mt-1 text-sm text-brand-text-mid">{s.teaser}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sample issues */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-brand-text-dark">Sample issues</h2>
          <p className="mt-1 text-sm text-brand-text-light">
            A taste of the kind of thing you’ll get.
          </p>
          <div className="mt-4 space-y-3">
            {sampleEditions.map((e) => (
              <Link
                key={e.slug}
                href={`/newsletter/${e.slug}`}
                className="block rounded-xl border border-brand-border bg-white p-5 no-underline transition hover:border-brand-primary"
              >
                <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  {e.dateLabel}
                </p>
                <h3 className="mt-1 font-display text-lg font-bold text-brand-text-dark">
                  {e.title}
                </h3>
                <p className="mt-1 text-sm text-brand-text-mid">{e.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
