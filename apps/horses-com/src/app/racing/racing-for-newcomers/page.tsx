/**
 * Horses.com -- Racing for Newcomers Hub -- /racing/racing-for-newcomers
 *
 * Spectator-education cluster hub. It welcomes someone new to horse racing as a
 * SPORT TO WATCH and organizes the three literacy spokes: reading a race card,
 * a day at the races, and understanding racing silks. It up-links to /racing and
 * cross-links the existing race-types, glossary, racing-roles, and triple-crown
 * references.
 *
 * NON-WAGERING (QC §1 / racing quality bar §2): permanently non-wagering. This
 * cluster teaches racing literacy and the spectator experience -- never betting,
 * odds, or handicapping. The scope note below makes that explicit.
 *
 * Byline: Horses.com Editorial (no fabricated credentials).
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, EmailCapture, CrossPortfolioCard } from '@carloOS/ui'
import { PremiumMasthead } from '@/components/PremiumMasthead'
import { racingForNewcomersSpokes } from '@/data/racing-for-newcomers'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Racing for Newcomers — A Spectator’s Guide | Horses.com',
  description:
    'New to horse racing? A spectator’s start: reading a race card, what a day at the races is like, and how racing silks help you follow a horse. Non-wagering.',
  path: '/racing/racing-for-newcomers',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com' },
    { name: 'Racing', url: 'https://horses.com/racing' },
    { name: 'Racing for Newcomers', url: 'https://horses.com/racing/racing-for-newcomers' },
  ],
})

const listSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Racing for Newcomers — A Spectator’s Guide at Horses.com',
  description:
    'Educational spectator guides for people new to horse racing: reading a race card, a day at the races, and understanding racing silks.',
  numberOfItems: racingForNewcomersSpokes.length,
  itemListElement: racingForNewcomersSpokes.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.name,
    url: `https://horses.com/racing/racing-for-newcomers/${s.slug}`,
  })),
}

const schema = combineSchemas(breadcrumbSchema, listSchema)

export default function RacingForNewcomersHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* ── PREMIUM MASTHEAD (image-first) ─────────────────────────── */}
      <PremiumMasthead
        manifestKey="horses-com:racing"
        fallbackKey="horses-com:hero"
        eyebrow="Racing Intelligence · For Newcomers"
        title="Racing for Newcomers"
        subtitle="New to the sport? Start here. How to read a race card, what a day at the races is actually like, and how the colours a jockey wears help you follow a horse. A spectator’s guide — educational only, not a handicapping or wagering resource."
        alt="Spectators watching Thoroughbreds parade before a race"
      />

      {/* ── BREADCRUMB ─────────────────────────────────────────────── */}
      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>&#8250;</span>
        <Link href="/racing" className="hover:text-brand-primary no-underline">Racing</Link>
        <span>&#8250;</span>
        <span className="text-brand-text-mid font-medium">Racing for Newcomers</span>
      </nav>

      {/* ── INTRO ──────────────────────────────────────────────────── */}
      <div className="px-container-sm sm:px-container py-12">
        <p className="text-sm text-brand-text-light mb-6 max-w-2xl">
          Horse racing rewards a little knowledge enormously. Once you can tell a
          paddock from a parade ring, read the program in your hand, and pick your
          horse out of the field by its colours, an afternoon at the track turns
          from a confusing blur into one of the most absorbing days out in sport.
          This is the Horses.com starting point for anyone new to racing as a{' '}
          <em>spectator</em> — the person in the stands, not at the betting window.
        </p>
        <p className="text-sm text-brand-text-light mb-10 max-w-2xl">
          The three guides below build that spectator literacy step by step.{' '}
          <strong>How to Read a Race Card</strong> decodes the program field by
          field — what each line tells you about the horse, its connections, the
          distance, the class, the weights, and the form — the way you might learn
          to read a baseball box score. <strong>A Day at the Races</strong> walks
          through how raceday unfolds, from the paddock to the call to post to the
          finish line, with notes on etiquette and what to wear.{' '}
          <strong>Understanding Racing Silks</strong> explains the bright colours a
          jockey wears and how they help you follow a horse. For the language of
          the track, keep the{' '}
          <Link href="/racing/glossary" className="text-brand-primary font-semibold no-underline hover:underline">
            racing glossary
          </Link>{' '}
          handy. None of these pages offers betting, odds, or handicapping guidance.
        </p>

        {/* ── SPOKE GRID ─────────────────────────────────────────── */}
        <section>
          <h2 className="font-display font-bold text-brand-dark text-xl mb-2 border-b border-brand-border pb-2">
            Start Here
            <span className="text-sm font-normal text-brand-text-light ml-3">
              {racingForNewcomersSpokes.length} guides
            </span>
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 mt-5">
            {racingForNewcomersSpokes.map((spoke) => (
              <li key={spoke.slug}>
                <Link
                  href={`/racing/racing-for-newcomers/${spoke.slug}`}
                  className="block py-3 px-4 rounded-md border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition h-full"
                >
                  <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1">
                    {spoke.eyebrow}
                  </div>
                  <div className="font-display font-bold text-brand-dark text-base leading-tight mb-1">
                    {spoke.name}
                  </div>
                  <div className="text-xs text-brand-text-mid">
                    {spoke.cardSummary}
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
            These guides teach racing as a sport to watch and understand — racing
            literacy and the spectator experience. They are educational references,
            not wagering resources. No betting tips, odds commentary, handicapping
            guidance, or selections are provided or implied anywhere in this
            cluster. The race-card guide in particular explains program information
            only as information — what it tells you about the horses — never as a
            way to wager.
          </p>
        </div>

        {/* ── CROSS-LINKS ─────────────────────────────────────────── */}
        <div className="mt-10">
          <h2 className="font-display font-bold text-brand-dark text-lg mb-4">
            Related Racing Reference
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Race Types & Classes', href: '/racing/race-types' },
              { label: 'Race Types & Classes Explained', href: '/racing/understanding-race-types-and-classes' },
              { label: 'Horse Racing Glossary', href: '/racing/glossary' },
              { label: 'Racing Roles', href: '/racing/racing-roles' },
              { label: 'The Triple Crown', href: '/racing/triple-crown' },
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
          ctaText="Subscribe"
          source="racing-for-newcomers-hub"
          perks={[
            'One email weekly',
            'Citation-anchored',
            'No paid placements',
            'Unsubscribe anytime',
          ]}
        />
      </section>
      <CrossPortfolioCard currentSite="horses-com" contentType="discipline" variant="footer" />
    </>
  )
}
