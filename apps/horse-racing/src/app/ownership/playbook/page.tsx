/**
 * Playbook landing — /ownership/playbook
 *
 * Landing page for the paid digital product (The First-Time Racehorse Owner's
 * Playbook). Validates willingness-to-pay with NO license and NO data feed.
 * Until a checkout vendor is approved by Carlo, the CTA is a waitlist (email
 * capture) so the page builds an audience pre-launch. No purchase flow is
 * claimed that does not exist.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata, Breadcrumb, EmailCapture } from '@carloOS/ui';
import { playbook } from '../../../data/racing/ownership';

export const metadata: Metadata = buildMetadata({
  siteId: 'horse-racing',
  title: 'The First-Time Racehorse Owner’s Playbook',
  description:
    'A plain-English, no-hype guide to getting into racehorse ownership the smart way: what it costs, how to choose a model, and how to avoid the expensive beginner mistakes.',
  path: '/ownership/playbook',
});

export default function PlaybookPage() {
  return (
    <>
      <Breadcrumb
        siteId="horse-racing"
        items={[
          { name: 'Race Center', href: '/' },
          { name: 'Ownership', href: '/ownership' },
          { name: 'Playbook' },
        ]}
      />
      <div className="mx-auto max-w-2xl px-4 py-10">
        <header className="mb-8">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            The Playbook
          </p>
          <h1 className="mt-1 font-display text-4xl font-bold tracking-tight text-brand-text-dark">
            {playbook.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-brand-text-mid">{playbook.subtitle}</p>
          <p className="mt-2 text-sm font-medium text-brand-text-light">{playbook.priceNote}</p>
        </header>

        <section className="rounded-2xl border border-brand-border bg-white p-6">
          <h2 className="font-display text-xl font-bold text-brand-text-dark">What’s inside</h2>
          <ol className="mt-4 space-y-4">
            {playbook.chapters.map((c) => (
              <li key={c.title}>
                <h3 className="font-semibold text-brand-text-dark">{c.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-brand-text-mid">{c.blurb}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Pre-launch: waitlist via email capture. Checkout wires in when Carlo
            approves a digital-download vendor (Gumroad/Shopify). */}
        <section className="mt-10">
          <EmailCapture
            variant="section"
            siteId="horse-racing"
            source="playbook-waitlist"
            title="Join the Playbook waitlist"
            subtitle="The Playbook is in final edit. Join the waitlist and you’ll get launch pricing and a free sample chapter the day it’s ready."
            ctaText="Join the waitlist"
          />
          <p className="mt-3 text-center text-xs text-brand-text-light">
            No spam. The Playbook is an educational guide — it does not offer investment advice
            or guarantee any financial return.
          </p>
        </section>

        <div className="mt-10 text-center">
          <Link
            href="/ownership"
            className="font-semibold text-brand-primary no-underline hover:underline"
          >
            &larr; Back to ownership guides
          </Link>
        </div>
      </div>
    </>
  );
}
