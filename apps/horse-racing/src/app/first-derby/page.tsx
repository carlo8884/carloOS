/**
 * Your First Derby — /first-derby (queue #5)
 *
 * The casual->committed on-ramp centerpiece: a genuinely useful beginner hub
 * that captures the ~16M-viewer Derby spike (52% female) and converts curiosity
 * into newsletter subscribers + links into the ownership/experiences/predict
 * surfaces. Seasonal SEO + GEO citation magnet. FAQ structured data.
 *
 * Trust-safe (QC §1): factual/nominative reference to a public event, no
 * protected marks, no implied official affiliation, wagering framed as optional
 * entertainment with no betting promotion.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  buildMetadata,
  Breadcrumb,
  SchemaScript,
  buildFAQSchema,
  EmailCapture,
} from '@carloOS/ui';
import { firstDerby } from '../../data/racing/first-derby';

export const metadata: Metadata = buildMetadata({
  siteId: 'horse-racing',
  title: 'Your First Derby — A Friendly Beginner’s Guide to the Big Day',
  description: firstDerby.intro,
  path: '/first-derby',
});

export default function FirstDerbyPage() {
  return (
    <>
      <SchemaScript schema={buildFAQSchema({ questions: firstDerby.faq })} />
      <Breadcrumb
        siteId="horse-racing"
        items={[{ name: 'Race Center', href: '/' }, { name: 'Your First Derby' }]}
      />
      <div className="mx-auto max-w-2xl px-4 py-10">
        <header className="mb-8">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            New to the sport? Start here
          </p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            {firstDerby.title}
          </h1>
          <p className="mt-2 font-display text-lg italic text-brand-text-mid">
            {firstDerby.tagline}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-brand-text-mid">{firstDerby.intro}</p>
        </header>

        {firstDerby.blocks.map((b) => (
          <section key={b.heading} className="mt-8">
            <h2 className="font-display text-xl font-bold text-brand-text-dark">{b.heading}</h2>
            {b.body.map((p, i) => (
              <p key={i} className="mt-2 leading-relaxed text-brand-text-mid">
                {p}
              </p>
            ))}
            {b.bullets && (
              <ul className="mt-3 space-y-1.5 list-disc pl-5 text-brand-text-mid">
                {b.bullets.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {/* Convert curiosity -> deeper engagement */}
        <section className="mt-10 rounded-2xl border border-brand-border bg-brand-surface p-6">
          <h2 className="font-display text-lg font-bold text-brand-text-dark">
            Caught the bug? Here’s where to go next
          </h2>
          <ul className="mt-3 space-y-2 list-none p-0">
            <li>
              <Link href="/predict" className="font-semibold text-brand-primary no-underline hover:underline">
                Test your eye on the prediction game &rarr;
              </Link>{' '}
              <span className="text-sm text-brand-text-mid">— just for fun, no stakes.</span>
            </li>
            <li>
              <Link href="/guides/how-to-read-a-racecard" className="font-semibold text-brand-primary no-underline hover:underline">
                Learn to read a racecard &rarr;
              </Link>
            </li>
            <li>
              <Link href="/ownership" className="font-semibold text-brand-primary no-underline hover:underline">
                Ever thought about owning a piece of a racehorse? &rarr;
              </Link>
            </li>
            <li>
              <Link href="/experiences" className="font-semibold text-brand-primary no-underline hover:underline">
                Plan a day at the races &rarr;
              </Link>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-brand-text-dark">Frequently asked</h2>
          <div className="mt-3 space-y-4">
            {firstDerby.faq.map((item) => (
              <div key={item.question}>
                <h3 className="font-semibold text-brand-text-dark">{item.question}</h3>
                <p className="mt-1 leading-relaxed text-brand-text-mid">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12">
          <EmailCapture
            variant="section"
            siteId="horse-racing"
            source="first-derby"
            title="Enjoyed the day? Keep the thread going"
            subtitle="The Form is a free weekly read that turns one day a year into a sport you actually follow. No tips, no hype — just the sport explained well."
            ctaText="Subscribe free"
          />
        </div>
      </div>
    </>
  );
}
