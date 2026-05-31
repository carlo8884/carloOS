/**
 * Sample issue — /newsletter/[slug]
 * Illustrative editorial sample of a newsletter issue. Not betting tips; shows
 * the recurring section shape and the brand voice. Converts to subscribe.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildMetadata, Breadcrumb, EmailCapture } from '@carloOS/ui';
import { newsletterMeta, allEditionSlugs, getEdition } from '../../../data/racing/newsletter';

export function generateStaticParams() {
  return allEditionSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const e = getEdition(params.slug);
  if (!e) {
    return buildMetadata({
      siteId: 'horse-racing',
      title: 'Issue not found',
      description: 'This newsletter issue could not be found.',
      path: `/newsletter/${params.slug}`,
    });
  }
  return buildMetadata({
    siteId: 'horse-racing',
    title: `${e.title} — ${newsletterMeta.name}`,
    description: e.summary,
    path: `/newsletter/${e.slug}`,
    type: 'article',
  });
}

export default function NewsletterEditionPage({ params }: { params: { slug: string } }) {
  const e = getEdition(params.slug);
  if (!e) notFound();

  return (
    <>
      <Breadcrumb
        siteId="horse-racing"
        items={[
          { name: 'Race Center', href: '/' },
          { name: newsletterMeta.name, href: '/newsletter' },
          { name: e.title },
        ]}
      />
      <div className="mx-auto max-w-2xl px-4 py-10">
        <article>
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            {e.dateLabel} &middot; {newsletterMeta.name}
          </p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            {e.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-brand-text-mid">{e.summary}</p>

          {e.sections.map((s) => (
            <section key={s.heading} className="mt-8">
              <h2 className="font-display text-xl font-bold text-brand-text-dark">{s.heading}</h2>
              <p className="mt-2 leading-relaxed text-brand-text-mid">{s.teaser}</p>
            </section>
          ))}
        </article>

        <div className="mt-12">
          <EmailCapture
            variant="section"
            siteId="horse-racing"
            source={`newsletter-sample-${e.slug}`}
            title={`Get ${newsletterMeta.name}, free`}
            subtitle="Like this? Get one in your inbox every week. No tips, no hype — just the sport explained well."
            ctaText="Subscribe free"
          />
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/newsletter"
            className="font-semibold text-brand-primary no-underline hover:underline"
          >
            &larr; All issues
          </Link>
        </div>
      </div>
    </>
  );
}
