/**
 * Horses.com Racing History Hub -- /racing/history
 *
 * Net-new heritage cluster on the history of Thoroughbred racing: the breed's
 * origins, the formation of the Triple Crown, profiles of celebrated horses,
 * and the milestones that shaped the modern sport. NON-WAGERING: no odds,
 * picks, EV, or handicapping anywhere in this cluster.
 *
 * Byline: Horses.com Editorial (no fabricated credentials).
 * Authorities cited: National Museum of Racing & Hall of Fame, The Jockey Club,
 * and the organizations that conduct the classic races.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, EmailCapture } from '@carloOS/ui'
import { PremiumMasthead } from '@/components/PremiumMasthead'
import { racingHistorySpokes, racingHistoryGroupedByEra } from '@/data/racing-history'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'The History of Thoroughbred Racing -- Heritage & Legends | Horses.com',
  description:
    'A heritage guide to the history of Thoroughbred racing: the breed’s British origins and foundation sires, how the Triple Crown formed, celebrated horses, and the milestones that shaped the sport.',
  path: '/racing/history',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com' },
    { name: 'Racing', url: 'https://horses.com/racing' },
    { name: 'History', url: 'https://horses.com/racing/history' },
  ],
})

const historyListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Racing History Reference Articles at Horses.com',
  description:
    'Heritage and educational coverage of the history of Thoroughbred racing: origins, the Triple Crown, celebrated horses, and milestones.',
  numberOfItems: racingHistorySpokes.length,
  itemListElement: racingHistorySpokes.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.title,
    url: `https://horses.com/racing/history/${s.slug}`,
  })),
}

const schema = combineSchemas(breadcrumbSchema, historyListSchema)

const eraGroups = racingHistoryGroupedByEra()

export default function RacingHistoryHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* ── PREMIUM MASTHEAD (image-first) ─────────────────────────── */}
      <PremiumMasthead
        manifestKey="horses-com:history-hero"
        fallbackKey="horses-com:hero"
        eyebrow="The Heritage of the Sport"
        title="The History of Thoroughbred Racing"
        subtitle="More than three centuries of heritage, from the foundation sires that created the breed in Britain to the legends who made racing an American institution. A heritage reference, era by era. Not a betting resource. Not a handicapping guide."
        alt="A Thoroughbred field at a historic American racecourse"
      />

      {/* ── BREADCRUMB ─────────────────────────────────────────────── */}
      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>&#8250;</span>
        <Link href="/racing" className="hover:text-brand-primary no-underline">Racing</Link>
        <span>&#8250;</span>
        <span className="text-brand-text-mid font-medium">History</span>
      </nav>

      {/* ── INTRO ──────────────────────────────────────────────────── */}
      <div className="px-container-sm sm:px-container py-12">
        <p className="text-sm text-brand-text-light mb-10 max-w-2xl">
          Thoroughbred racing carries more than three centuries of heritage &mdash;
          from the three foundation sires that created the breed in Britain to the
          legends who made the sport an American institution. These reference
          articles tell that story by era: the breed&apos;s origins, how the Triple
          Crown formed, the celebrated horses remembered through generations, and
          the milestones that shaped the modern game. They are heritage guides: no
          betting, odds, or handicapping appears anywhere in this cluster.
        </p>

        {/* ── SPOKE GROUPS BY ERA ──────────────────────────────────── */}
        {eraGroups.map((group) => (
          <section key={group.era} className="mb-10">
            <h2 className="font-display font-bold text-brand-dark text-xl mb-2 border-b border-brand-border pb-2">
              {group.era}
              <span className="text-sm font-normal text-brand-text-light ml-3">
                {group.spokes.length} {group.spokes.length === 1 ? 'article' : 'articles'}
              </span>
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 mt-5">
              {group.spokes.map((spoke) => (
                <li key={spoke.slug}>
                  <Link
                    href={`/racing/history/${spoke.slug}`}
                    className="block py-3 px-4 rounded-md border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition"
                  >
                    <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1">
                      {spoke.kicker}
                    </div>
                    <div className="font-display font-bold text-brand-dark text-base leading-tight mb-1">
                      {spoke.title}
                    </div>
                    <div className="text-xs text-brand-text-mid">
                      {spoke.description}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {/* ── EDITORIAL SCOPE NOTE ───────────────────────────────── */}
        <div className="mt-6 p-6 bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            Editorial Scope
          </div>
          <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
            These articles describe the history of Thoroughbred racing as a
            heritage and educational subject. They are not wagering resources. No
            betting tips, odds commentary, or handicapping guidance is provided or
            implied. Superlatives about individual horses are presented as
            widely-held opinion, not bare fact. Where a precise figure could not be
            confidently verified, it is described in general terms rather than
            asserted.
          </p>
        </div>

        {/* ── CROSS-LINKS TO SITE HUBS ────────────────────────────── */}
        <div className="mt-10">
          <h2 className="font-display font-bold text-brand-dark text-lg mb-4">
            Related Horses.com Reference
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Racing Hub', href: '/racing' },
              { label: 'The Triple Crown', href: '/racing/triple-crown' },
              { label: 'Thoroughbred Flat Racing', href: '/racing/thoroughbred-flat-racing' },
              { label: 'Bloodstock & Breeding', href: '/bloodstock' },
              { label: 'Breeds', href: '/breeds' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center text-xs font-semibold no-underline transition rounded-pill px-3 py-1.5 border border-brand-border text-brand-text-mid hover:border-brand-primary hover:bg-brand-primary-pale"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── EMAIL CAPTURE ──────────────────────────────────────────── */}
      <section
        className="px-container-sm sm:px-container py-12"
        style={{ background: 'var(--brand-primary-pale)' }}
      >
        <EmailCapture
          variant="section"
          siteId="horses-com"
          title="The Horses.com Reference"
          subtitle="One email a week: a deep-dive on a discipline, breed, or the history of the sport. Citation-anchored. No product pushes."
          ctaText="Subscribe"
          source="racing-history-hub"
          perks={[
            'One email weekly',
            'Citation-anchored',
            'No paid placements',
            'Unsubscribe anytime',
          ]}
        />
      </section>
    </>
  )
}
