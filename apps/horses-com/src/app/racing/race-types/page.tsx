/**
 * Horses.com -- Race Types Hub -- /racing/race-types
 *
 * Cluster hub organizing the seven race-class depth spokes (maiden, claiming,
 * allowance, optional claiming, stakes, graded stakes, handicap). The narrative
 * overview lives at /racing/understanding-race-types-and-classes; THIS page is
 * the canonical index for the /racing/race-types/<slug> cluster, giving each
 * spoke a parent and a clean Home -> Racing -> Race Types breadcrumb level.
 *
 * NON-WAGERING (QC §1): race classes are explained as STRUCTURAL categories.
 * No betting, odds, or handicapping-to-bet anywhere in this vertical.
 *
 * Byline: Horses.com Editorial (no fabricated credentials).
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, EmailCapture } from '@carloOS/ui'
import { PremiumMasthead } from '@/components/PremiumMasthead'
import { raceTypeSpokes } from '@/data/race-types'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Race Types & Classes -- The Full Hub | Horses.com',
  description:
    'The complete index of horse race classes: maiden, claiming, allowance, optional claiming, stakes, graded stakes, and handicap races, each explained in depth.',
  path: '/racing/race-types',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com' },
    { name: 'Racing', url: 'https://horses.com/racing' },
    { name: 'Race Types', url: 'https://horses.com/racing/race-types' },
  ],
})

const raceTypeListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Horse Race Types & Classes at Horses.com',
  description:
    'Educational reference index of the race classes that organize horse racing, from maiden to graded stakes.',
  numberOfItems: raceTypeSpokes.length,
  itemListElement: raceTypeSpokes.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.title,
    url: `https://horses.com/racing/race-types/${s.slug}`,
  })),
}

const schema = combineSchemas(breadcrumbSchema, raceTypeListSchema)

export default function RaceTypesHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* ── PREMIUM MASTHEAD (image-first) ─────────────────────────── */}
      <PremiumMasthead
        manifestKey="horses-com:race-types"
        fallbackKey="horses-com:racing"
        eyebrow="Racing Intelligence · Race Classes"
        title="Race Types & Classes"
        subtitle="The class ladder that organizes the entire sport: maiden, claiming, allowance, optional claiming, stakes, graded stakes, and handicap races. Each class has its own in-depth reference here. Educational structure only — not a handicapping or wagering guide."
        alt="Thoroughbreds competing in a race on a dirt track"
      />

      {/* ── BREADCRUMB ─────────────────────────────────────────────── */}
      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>&#8250;</span>
        <Link href="/racing" className="hover:text-brand-primary no-underline">Racing</Link>
        <span>&#8250;</span>
        <span className="text-brand-text-mid font-medium">Race Types</span>
      </nav>

      {/* ── INTRO ──────────────────────────────────────────────────── */}
      <div className="px-container-sm sm:px-container py-12">
        <p className="text-sm text-brand-text-light mb-6 max-w-2xl">
          Every horse race is written to a set of conditions that decide which
          horses may enter, what weight they carry, and the kind of competition
          they will face. Those conditions sort the sport into a hierarchy of
          classes — and understanding that ladder is the single most useful key
          to reading a race program. This hub is the index to the Horses.com
          reference on each class.
        </p>
        <p className="text-sm text-brand-text-light mb-10 max-w-2xl">
          The ladder runs from the entry level, where unproven and everyday
          horses begin, up to the championship tier. <strong>Maiden races</strong>{' '}
          are for horses that have never won; <strong>claiming races</strong> put
          every runner up for sale at a set price and form the everyday backbone
          of the calendar. <strong>Allowance</strong> and{' '}
          <strong>optional claiming</strong> races sit in the middle, where horses
          prove themselves between breaking a maiden and reaching the top.{' '}
          <strong>Stakes</strong> and <strong>graded stakes</strong> are the elite
          tier, while <strong>handicap</strong> conditions cut across the ladder by
          assigning weight to level the field. Each class below has its own
          in-depth reference. For the narrative overview of how the whole system
          fits together, see{' '}
          <Link href="/racing/understanding-race-types-and-classes" className="text-brand-primary font-semibold no-underline hover:underline">
            Race Types &amp; Classes Explained
          </Link>
          . None of these pages offers betting, odds, or handicapping guidance.
        </p>

        {/* ── SPOKE GRID ─────────────────────────────────────────── */}
        <section>
          <h2 className="font-display font-bold text-brand-dark text-xl mb-2 border-b border-brand-border pb-2">
            The Race Classes In Depth
            <span className="text-sm font-normal text-brand-text-light ml-3">
              {raceTypeSpokes.length} classes
            </span>
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 mt-5">
            {raceTypeSpokes.map((spoke) => (
              <li key={spoke.slug}>
                <Link
                  href={`/racing/race-types/${spoke.slug}`}
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

        {/* ── EDITORIAL SCOPE NOTE ───────────────────────────────── */}
        <div className="mt-16 p-6 bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            Editorial Scope
          </div>
          <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
            These articles explain race classes as structural, educational
            categories — what each class means and how horses move through the
            claiming, allowance, and stakes ladder. They are not wagering
            resources. No betting tips, odds commentary, or handicapping guidance
            is provided or implied.
          </p>
        </div>

        {/* ── CROSS-LINKS ─────────────────────────────────────────── */}
        <div className="mt-10">
          <h2 className="font-display font-bold text-brand-dark text-lg mb-4">
            Related Racing Reference
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Race Types & Classes Explained', href: '/racing/understanding-race-types-and-classes' },
              { label: 'Racing Roles', href: '/racing/racing-roles' },
              { label: 'The Triple Crown', href: '/racing/triple-crown' },
              { label: "The Breeders' Cup", href: '/racing/breeders-cup' },
              { label: 'Horse Racing Glossary', href: '/racing/glossary' },
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
          source="race-types-hub"
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
