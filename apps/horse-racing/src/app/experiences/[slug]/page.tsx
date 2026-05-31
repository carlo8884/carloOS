/**
 * Experience topic — /experiences/[slug]
 * Long-form editorial with FAQ structured data. Disclosed affiliate framing;
 * no fabricated first-person attendance, no trademark misuse.
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
import {
  allExperienceSlugs,
  getExperienceTopic,
} from '../../../data/racing/experiences';

export function generateStaticParams() {
  return allExperienceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const t = getExperienceTopic(params.slug);
  if (!t) {
    return buildMetadata({
      siteId: 'horse-racing',
      title: 'Guide not found',
      description: 'This experiences guide could not be found.',
      path: `/experiences/${params.slug}`,
    });
  }
  return buildMetadata({
    siteId: 'horse-racing',
    title: t.metaTitle,
    description: t.description,
    path: `/experiences/${t.slug}`,
    type: 'article',
  });
}

export default function ExperienceTopicPage({ params }: { params: { slug: string } }) {
  const t = getExperienceTopic(params.slug);
  if (!t) notFound();

  const related = (t.related ?? [])
    .map((slug) => getExperienceTopic(slug))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <>
      <SchemaScript schema={buildFAQSchema({ questions: t.faq })} />
      <Breadcrumb
        siteId="horse-racing"
        items={[
          { name: 'Race Center', href: '/' },
          { name: 'Experiences', href: '/experiences' },
          { name: t.title },
        ]}
      />

      <div className="mx-auto max-w-2xl px-4 py-10">
        <article>
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            {t.kicker}
          </p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            {t.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-brand-text-mid">{t.intro}</p>

          <AffiliateDisclosure variant="inline" siteId="horse-racing" />

          {t.sections.map((s) => (
            <section key={s.heading} className="mt-8">
              <h2 className="font-display text-xl font-bold text-brand-text-dark">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="mt-2 leading-relaxed text-brand-text-mid">
                  {p}
                </p>
              ))}
            </section>
          ))}

          <section className="mt-10 border-t border-brand-border pt-6">
            <h2 className="font-display text-xl font-bold text-brand-text-dark">
              Frequently asked
            </h2>
            <div className="mt-3 space-y-4">
              {t.faq.map((item) => (
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
                    href={`/experiences/${r.slug}`}
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
            source={`experiences-${t.slug}`}
            title="Get the Race-Day Planner"
            subtitle="Where to go and how to plan a great day at the races."
            ctaText="Send me the planner"
          />
        </div>
      </div>
    </>
  );
}
