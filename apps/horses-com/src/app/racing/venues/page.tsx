/**
 * Horses.com -- Racing Venues Hub -- /racing/venues
 *
 * Cluster hub organizing educational guides to iconic American Thoroughbred
 * racetracks (Churchill Downs, Pimlico, Belmont Park, Saratoga, Keeneland).
 * Each spoke is a venue guide: founding/history, the track itself, the
 * signature race(s) held there, notable moments, and the spectator experience.
 *
 * This hub is the canonical index for the /racing/venues/<slug> cluster, giving
 * each venue a parent and a clean Home -> Racing -> Venues breadcrumb level. It
 * complements the race-focused pages under /racing/triple-crown and
 * /racing/breeders-cup; the guides here take a place-and-tradition angle.
 *
 * HARD WAGERING BAN (CSRO / QC §1): these are educational venue guides. NO
 * odds, picks, EV/fair-odds, sportsbook/ADW links, betting strategy,
 * racecards/results systems, or ratings engines anywhere in this cluster.
 *
 * Byline: Horses.com Editorial (no fabricated credentials).
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, EmailCapture, CrossPortfolioCard } from '@carloOS/ui'
import { PremiumMasthead } from '@/components/PremiumMasthead'
import { racingVenues } from '@/data/racing-venues'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Iconic Racetracks: Racing Venue Guides | Horses.com',
  description:
    'Educational guides to America\'s iconic racetracks: Churchill Downs, Pimlico, Belmont Park, Saratoga, and Keeneland. History and tradition, not wagering.',
  path: '/racing/venues',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com' },
    { name: 'Racing', url: 'https://horses.com/racing' },
    { name: 'Venues', url: 'https://horses.com/racing/venues' },
  ],
})

const listSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Racing Venue Guides at Horses.com',
  description:
    'Educational guides to the most iconic Thoroughbred racetracks in the United States.',
  numberOfItems: racingVenues.length,
  itemListElement: racingVenues.map((v, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: v.name,
    url: `https://horses.com/racing/venues/${v.slug}`,
  })),
}

const schema = combineSchemas(breadcrumbSchema, listSchema)

export default function RacingVenuesHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* ── PREMIUM MASTHEAD (image-first) ─────────────────────────── */}
      <PremiumMasthead
        manifestKey="horses-com:racing"
        fallbackKey="horses-com:hero"
        eyebrow="Racing Intelligence · Venue Guides"
        title="Iconic Racetracks"
        subtitle="Educational guides to the historic homes of American Thoroughbred racing — Churchill Downs, Pimlico, Belmont Park, Saratoga, and Keeneland. History, architecture, traditions, and the spectator experience. Not a betting or handicapping guide."
        alt="A historic Thoroughbred racetrack grandstand on a race day"
      />

      {/* ── BREADCRUMB ─────────────────────────────────────────────── */}
      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>&#8250;</span>
        <Link href="/racing" className="hover:text-brand-primary no-underline">Racing</Link>
        <span>&#8250;</span>
        <span className="text-brand-text-mid font-medium">Venues</span>
      </nav>

      {/* ── INTRO ──────────────────────────────────────────────────── */}
      <div className="px-container-sm sm:px-container py-12">
        <p className="text-sm text-brand-text-light mb-6 max-w-2xl">
          The great American racetracks are more than places where races are run.
          They are institutions with their own history, architecture, and
          traditions — landmarks woven into the story of the sport. This hub
          gathers Horses.com&apos;s educational guides to the most iconic of them:
          the tracks whose names are inseparable from the races they hold and the
          champions that have run there.
        </p>
        <p className="text-sm text-brand-text-light mb-10 max-w-2xl">
          Each guide covers a venue&apos;s founding and history, the track
          itself — its surface, configuration, and traditions — the signature
          race or races held there, a few of its notable moments, and what a day
          at the track is like for a spectator. The collection spans the home of
          the Kentucky Derby at{' '}
          <strong>Churchill Downs</strong>, the Preakness at{' '}
          <strong>Pimlico</strong>, the Belmont Stakes at{' '}
          <strong>Belmont Park</strong>, the historic summer meet at{' '}
          <strong>Saratoga</strong>, and the racing-and-sales institution of{' '}
          <strong>Keeneland</strong>. For the races themselves, see{' '}
          <Link href="/racing/triple-crown" className="text-brand-primary font-semibold no-underline hover:underline">
            The Triple Crown
          </Link>{' '}
          and{' '}
          <Link href="/racing/breeders-cup" className="text-brand-primary font-semibold no-underline hover:underline">
            The Breeders&apos; Cup
          </Link>
          . None of these pages offers betting, odds, or handicapping guidance.
        </p>

        {/* ── SPOKE GRID ─────────────────────────────────────────── */}
        <section>
          <h2 className="font-display font-bold text-brand-dark text-xl mb-2 border-b border-brand-border pb-2">
            The Venues
            <span className="text-sm font-normal text-brand-text-light ml-3">
              {racingVenues.length} racetracks
            </span>
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 mt-5">
            {racingVenues.map((venue) => (
              <li key={venue.slug}>
                <Link
                  href={`/racing/venues/${venue.slug}`}
                  className="block py-3 px-4 rounded-md border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition h-full"
                >
                  <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1">
                    {venue.eyebrow}
                  </div>
                  <div className="font-display font-bold text-brand-dark text-base leading-tight mb-1">
                    {venue.name}
                  </div>
                  <div className="text-xs text-brand-text-mid">
                    {venue.cardSummary}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ── EDITORIAL SCOPE NOTE ───────────────────────────────── */}
        <div className="mt-16 p-6 bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            Editorial Scope
          </div>
          <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
            These guides describe racetracks as places of history, architecture,
            tradition, and spectacle. They are educational references, not
            wagering resources. No betting tips, odds commentary, or handicapping
            guidance is provided or implied. Historical and architectural details
            reflect well-established public record.
          </p>
        </div>

        {/* ── CROSS-LINKS ─────────────────────────────────────────── */}
        <div className="mt-10">
          <h2 className="font-display font-bold text-brand-dark text-lg mb-4">
            Related Racing Reference
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'The Triple Crown', href: '/racing/triple-crown' },
              { label: "The Breeders' Cup", href: '/racing/breeders-cup' },
              { label: 'Great Racehorses', href: '/racing/great-racehorses' },
              { label: 'Racing History', href: '/racing/history' },
              { label: 'Racing Hub', href: '/racing' },
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

        {/* ── CROSS-PORTFOLIO (safe, non-wagering bridge to Saddle) ─── */}
        <div className="mt-10 max-w-md">
          <CrossPortfolioCard currentSite="horses-com" contentType="discipline" variant="sidebar" />
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
          subtitle="One email a week: a deep-dive on a discipline, breed, or welfare topic. Citation-anchored. No product pushes."
          ctaText="Send the weekly notes"
          source="racing-venues-hub"
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
