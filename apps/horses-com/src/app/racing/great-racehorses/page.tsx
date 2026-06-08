/**
 * Horses.com -- Great Racehorses Hub -- /racing/great-racehorses
 *
 * Cluster hub organizing the historical career-profile spokes for the most
 * celebrated Thoroughbreds in American racing history (Secretariat, Man o' War,
 * Seabiscuit, Citation, American Pharoah, Justify). Each spoke is a heritage
 * career profile: career overview, signature races, connections, and legacy.
 *
 * This hub is the canonical index for the /racing/great-racehorses/<slug>
 * cluster, giving each profile a parent and a clean Home -> Racing -> Great
 * Racehorses breadcrumb level. It complements -- and links to -- the shorter
 * heritage essays under /racing/history; the profiles here take a deeper
 * career-record angle.
 *
 * NON-WAGERING (QC §1): these are sporting/historical achievements. No betting,
 * odds, or handicapping guidance anywhere in this cluster.
 *
 * Byline: Horses.com Editorial (no fabricated credentials).
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, EmailCapture } from '@carloOS/ui'
import { PremiumMasthead } from '@/components/PremiumMasthead'
import { greatRacehorses } from '@/data/great-racehorses'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Great Racehorses -- Profiles of the Legends | Horses.com',
  description:
    'Heritage career profiles of the greatest American Thoroughbreds: Secretariat, Man o’ War, Seabiscuit, Citation, American Pharoah, and Justify. Non-wagering.',
  path: '/racing/great-racehorses',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com' },
    { name: 'Racing', url: 'https://horses.com/racing' },
    { name: 'Great Racehorses', url: 'https://horses.com/racing/great-racehorses' },
  ],
})

const listSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Great Racehorses -- Heritage Profiles at Horses.com',
  description:
    'Educational reference profiles of the most celebrated Thoroughbreds in American racing history.',
  numberOfItems: greatRacehorses.length,
  itemListElement: greatRacehorses.map((h, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: h.name,
    url: `https://horses.com/racing/great-racehorses/${h.slug}`,
  })),
}

const schema = combineSchemas(breadcrumbSchema, listSchema)

export default function GreatRacehorsesHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* ── PREMIUM MASTHEAD (image-first) ─────────────────────────── */}
      <PremiumMasthead
        manifestKey="horses-com:racing"
        fallbackKey="horses-com:hero"
        eyebrow="Racing Intelligence · Heritage Profiles"
        title="Great Racehorses"
        subtitle="Career profiles of the Thoroughbreds whose names outlived their racing days: Triple Crown champions, a Depression-era hero, and the first millionaire of the turf. Educational heritage reference only — not a handicapping or wagering guide."
        alt="A Thoroughbred racehorse at full stride on a dirt track"
      />

      {/* ── BREADCRUMB ─────────────────────────────────────────────── */}
      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>&#8250;</span>
        <Link href="/racing" className="hover:text-brand-primary no-underline">Racing</Link>
        <span>&#8250;</span>
        <span className="text-brand-text-mid font-medium">Great Racehorses</span>
      </nav>

      {/* ── INTRO ──────────────────────────────────────────────────── */}
      <div className="px-container-sm sm:px-container py-12">
        <p className="text-sm text-brand-text-light mb-6 max-w-2xl">
          A handful of racehorses transcend their own era. Their record on the
          track, the connections who guided them, and the moment in history they
          arrived in combine into something the sport keeps returning to. This
          hub gathers Horses.com&apos;s career profiles of those horses — the
          champions and folk heroes whose names are still spoken decades, and in
          some cases a century, after their last race.
        </p>
        <p className="text-sm text-brand-text-light mb-10 max-w-2xl">
          Each profile is a heritage career study: the campaign that made the
          horse, the signature races and achievements, the owner, trainer, and
          jockey behind the runner, and the legacy and pedigree note that
          followed. The collection spans the early-century turf giant{' '}
          <strong>Man o&apos; War</strong>, the Depression-era hero{' '}
          <strong>Seabiscuit</strong>, the first equine millionaire{' '}
          <strong>Citation</strong>, the record-setting{' '}
          <strong>Secretariat</strong>, and the modern Triple Crown winners{' '}
          <strong>American Pharoah</strong> and <strong>Justify</strong>. For the
          spring three-race series several of these horses won, see{' '}
          <Link href="/racing/triple-crown" className="text-brand-primary font-semibold no-underline hover:underline">
            The Triple Crown
          </Link>
          . None of these pages offers betting, odds, or handicapping guidance.
        </p>

        {/* ── SPOKE GRID ─────────────────────────────────────────── */}
        <section>
          <h2 className="font-display font-bold text-brand-dark text-xl mb-2 border-b border-brand-border pb-2">
            The Profiles
            <span className="text-sm font-normal text-brand-text-light ml-3">
              {greatRacehorses.length} horses
            </span>
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 mt-5">
            {greatRacehorses.map((horse) => (
              <li key={horse.slug}>
                <Link
                  href={`/racing/great-racehorses/${horse.slug}`}
                  className="block py-3 px-4 rounded-md border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition h-full"
                >
                  <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1">
                    {horse.eyebrow}
                  </div>
                  <div className="font-display font-bold text-brand-dark text-base leading-tight mb-1">
                    {horse.name}
                  </div>
                  <div className="text-xs text-brand-text-mid">
                    {horse.cardSummary}
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
            These profiles describe racing careers as sporting and historical
            achievement. They are educational heritage references, not wagering
            resources. No betting tips, odds commentary, or handicapping guidance
            is provided or implied. Superlatives reflect widely-held opinion among
            fans and historians.
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
              { label: 'Racing History', href: '/racing/history' },
              { label: 'Racing Roles', href: '/racing/racing-roles' },
              { label: "The Breeders' Cup", href: '/racing/breeders-cup' },
              { label: 'Thoroughbred Profile', href: '/breeds/thoroughbred' },
              { label: 'Bloodstock & Breeding', href: '/bloodstock' },
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
          source="great-racehorses-hub"
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
