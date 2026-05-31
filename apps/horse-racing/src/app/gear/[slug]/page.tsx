/**
 * Gear guide — /gear/[slug]
 * Long-form editorial buyer's guide with a "what to look for" checklist and FAQ
 * structured data. Disclosed affiliate framing; NO fabricated hands-on testing
 * claims (QC §1). Product ReviewCards/route wiring is Monetization Bot's lane.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  buildMetadata,
  Breadcrumb,
  SchemaScript,
  buildFAQSchema,
  AffiliateDisclosure,
  EmailCapture,
} from '@carloOS/ui';
import { allGearSlugs, getGearGuide } from '../../../data/racing/gear';

export function generateStaticParams() {
  return allGearSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const g = getGearGuide(params.slug);
  if (!g) {
    return buildMetadata({
      siteId: 'horse-racing',
      title: 'Guide not found',
      description: 'This gear guide could not be found.',
      path: `/gear/${params.slug}`,
    });
  }
  return buildMetadata({
    siteId: 'horse-racing',
    title: g.metaTitle,
    description: g.description,
    path: `/gear/${g.slug}`,
    type: 'article',
  });
}

export default function GearGuidePage({ params }: { params: { slug: string } }) {
  const g = getGearGuide(params.slug);
  if (!g) notFound();

  const related = (g.related ?? [])
    .map((slug) => getGearGuide(slug))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <>
      <SchemaScript schema={buildFAQSchema({ questions: g.faq })} />
      <Breadcrumb
        siteId="horse-racing"
        items={[
          { name: 'Race Center', href: '/' },
          { name: 'Gear', href: '/gear' },
          { name: g.title },
        ]}
      />

      <div className="mx-auto max-w-2xl px-4 py-10">
        <article>
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            {g.kicker}
          </p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            {g.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-brand-text-mid">{g.intro}</p>

          <AffiliateDisclosure variant="inline" siteId="horse-racing" />

          {g.sections.map((s) => (
            <section key={s.heading} className="mt-8">
              <h2 className="font-display text-xl font-bold text-brand-text-dark">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="mt-2 leading-relaxed text-brand-text-mid">
                  {p}
                </p>
              ))}
            </section>
          ))}

          {/* What to look for — buying checklist */}
          <section className="mt-10 rounded-xl border border-brand-border bg-brand-surface p-5">
            <h2 className="font-display text-xl font-bold text-brand-text-dark">What to look for</h2>
            <ul className="mt-3 space-y-3 list-none p-0">
              {g.checklist.map((c) => (
                <li key={c.point}>
                  <span className="font-semibold text-brand-text-dark">{c.point}</span>
                  <span className="text-brand-text-mid"> — {c.detail}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10 border-t border-brand-border pt-6">
            <h2 className="font-display text-xl font-bold text-brand-text-dark">
              Frequently asked
            </h2>
            <div className="mt-3 space-y-4">
              {g.faq.map((item) => (
                <div key={item.question}>
                  <h3 className="font-semibold text-brand-text-dark">{item.question}</h3>
                  <p className="mt-1 leading-relaxed text-brand-text-mid">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {related.length > 0 && (
            <section className="mt-10 border-t border-brand-border pt-6">
              <h2 className="font-display text-lg font-bold text-brand-text-dark">Keep reading</h2>
              <div className="mt-3 space-y-2">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/gear/${r.slug}`}
                    className="block font-semibold text-brand-primary no-underline hover:underline"
                  >
                    {r.title} &rarr;
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>

        <div className="mt-12">
          <EmailCapture
            variant="section"
            siteId="horse-racing"
            source={`gear-${g.slug}`}
            title="Get the Gear Briefing"
            subtitle="Honest buyer’s guides and what to skip."
            ctaText="Send me the briefing"
          />
        </div>
      </div>
    </>
  );
}
