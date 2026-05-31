/**
 * Bloodstock hub — /bloodstock (queue #4)
 * Affluent, non-gambling, citation-magnet explainer cluster on the breeding and
 * sales side of racing. No data feed, no gambling license. Supports the brand's
 * intelligence positioning and feeds the ownership funnel.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata, Breadcrumb, EmailCapture } from '@carloOS/ui';
import { bloodstockTopics } from '../../data/racing/bloodstock';

export const metadata: Metadata = buildMetadata({
  siteId: 'horse-racing',
  title: 'Bloodstock & Breeding — How the Sales Ring & Pedigrees Work',
  description:
    'Plain-English guides to the business of racing: how Thoroughbred sales work, how to read a pedigree, and what bloodstock really means.',
  path: '/bloodstock',
});

export default function BloodstockHubPage() {
  return (
    <>
      <Breadcrumb
        siteId="horse-racing"
        items={[{ name: 'Race Center', href: '/' }, { name: 'Bloodstock' }]}
      />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <header className="mb-8">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            The business of racing
          </p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            Bloodstock & Breeding
          </h1>
          <p className="mt-3 text-lg text-brand-text-mid">
            Behind every racehorse is a market most fans never see: the breeding and sales world
            where pedigrees are read, foals are bred, and horses change hands for anything from a
            few thousand to several million. These guides explain how it all works.
          </p>
        </header>

        <div className="space-y-3">
          {bloodstockTopics.map((t) => (
            <Link
              key={t.slug}
              href={`/bloodstock/${t.slug}`}
              className="block rounded-xl border border-brand-border bg-white p-5 no-underline transition hover:border-brand-primary"
            >
              <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                {t.kicker}
              </p>
              <h2 className="mt-1 font-display text-lg font-bold text-brand-text-dark">
                {t.title}
              </h2>
              <p className="mt-1 text-sm text-brand-text-mid">{t.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <EmailCapture
            variant="section"
            siteId="horse-racing"
            source="bloodstock-hub"
            title="Get The Form, free"
            subtitle="The breeding and sales world, the racing, and the business — explained weekly. No tips, no hype."
            ctaText="Subscribe free"
          />
        </div>
      </div>
    </>
  );
}
