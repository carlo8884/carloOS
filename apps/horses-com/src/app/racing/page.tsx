/**
 * Horses.com Racing Intelligence Hub -- /racing
 *
 * Flagship vertical hub covering horse racing as an educational and
 * reference subject: the disciplines, the horses, the governance, and
 * the aftercare ecosystem. NOT a betting or handicapping resource.
 *
 * Byline: Horses.com Editorial (no fabricated credentials).
 * Authorities cited: The Jockey Club, USTA, AQHA, Thoroughbred Aftercare Alliance, AAEP.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, EmailCapture } from '@carloOS/ui'
import { PremiumMasthead } from '@/components/PremiumMasthead'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Horse Racing -- Disciplines, Types & Aftercare | Horses.com',
  description:
    'Racing Intelligence: educational reference on Thoroughbred, harness, and Quarter Horse racing, race class structure, OTTB aftercare, and conditioning.',
  path: '/racing',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com' },
    { name: 'Racing', url: 'https://horses.com/racing' },
  ],
})

interface RacingCard {
  slug: string
  title: string
  tagline: string
  authorities: string
  category: string
}

const RACING_SPOKES: RacingCard[] = [
  {
    slug: 'thoroughbred-flat-racing',
    title: 'Thoroughbred Flat Racing',
    tagline:
      'The Thoroughbred on dirt, turf, and synthetic surfaces: what flat racing is, how it is governed, and the role of The Jockey Club.',
    authorities: 'The Jockey Club',
    category: 'Breed & Discipline',
  },
  {
    slug: 'harness-racing',
    title: 'Harness Racing',
    tagline:
      'Trotting and pacing Standardbreds pulling a sulky: how gait defines the discipline and how the USTA structures the sport.',
    authorities: 'USTA',
    category: 'Discipline',
  },
  {
    slug: 'quarter-horse-racing',
    title: 'Quarter Horse Racing',
    tagline:
      'Sprint racing over short distances with the American Quarter Horse -- explosive, flat-out, and governed by AQHA.',
    authorities: 'AQHA',
    category: 'Breed & Discipline',
  },
  {
    slug: 'jump-racing',
    title: 'Jump Racing',
    tagline:
      'Steeplechase, hurdles, and American timber racing: racing over obstacles, the horses that contest it, and the National Steeplechase Association.',
    authorities: 'National Steeplechase Association',
    category: 'Discipline',
  },
  {
    slug: 'understanding-race-types-and-classes',
    title: 'Race Types & Classes Explained',
    tagline:
      'What maiden, claiming, allowance, stakes, and graded stakes categories actually mean -- an educational reference, not a handicapping guide.',
    authorities: 'Educational Reference',
    category: 'Structure & Governance',
  },
  {
    slug: 'triple-crown',
    title: 'The Triple Crown',
    tagline:
      'The Kentucky Derby, Preakness, and Belmont Stakes: distances, venues, why the sweep is one of sport\'s hardest feats, and the thirteen winners.',
    authorities: 'Churchill Downs, Pimlico, NYRA',
    category: 'History & Reference',
  },
  {
    slug: 'breeders-cup',
    title: "The Breeders' Cup",
    tagline:
      'The year-end World Championships: the two-day format, the Classic, the principal divisions, the rotating host tracks, and "Win and You\'re In."',
    authorities: "Breeders' Cup Limited",
    category: 'History & Reference',
  },
  {
    slug: 'great-racehorses',
    title: 'Great Racehorses',
    tagline:
      'Heritage career profiles of the legends: Secretariat, Man o\' War, Seabiscuit, Citation, American Pharoah, and Justify -- their records, connections, and legacy.',
    authorities: 'National Museum of Racing',
    category: 'History & Reference',
  },
  {
    slug: 'glossary',
    title: 'Horse Racing Glossary',
    tagline:
      'Plain-language definitions of the language of the racetrack: furlong, maiden, claiming, allowance, stakes, going, sire, dam, and more.',
    authorities: 'Educational Reference',
    category: 'Structure & Governance',
  },
  {
    slug: 'off-track-thoroughbred-aftercare',
    title: 'Off-Track Thoroughbred Aftercare',
    tagline:
      'OTTB retraining and rehoming: the welfare ecosystem, the Thoroughbred Aftercare Alliance, and what second careers look like.',
    authorities: 'Thoroughbred Aftercare Alliance',
    category: 'Welfare & Aftercare',
  },
  {
    slug: 'racehorse-training-and-conditioning',
    title: 'Racehorse Training & Conditioning',
    tagline:
      'How racehorses are prepared for competition: general conditioning principles, the role of the trainer, and the AAEP welfare framework.',
    authorities: 'AAEP',
    category: 'Training & Welfare',
  },
  {
    slug: 'the-people-of-racing',
    title: 'The People of Racing',
    tagline:
      'Who does what: owners, breeders, trainers, jockeys, the backstretch team, and the raceday officials who keep the sport running.',
    authorities: 'The Jockey Club, ARCI',
    category: 'Structure & Governance',
  },
]

const racingListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Horse Racing Reference Articles at Horses.com',
  description: 'Educational reference coverage of horse racing disciplines, governance, and aftercare.',
  numberOfItems: RACING_SPOKES.length,
  itemListElement: RACING_SPOKES.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.title,
    url: `https://horses.com/racing/${s.slug}`,
  })),
}

const schema = combineSchemas(breadcrumbSchema, racingListSchema)

export default function RacingHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* ── PREMIUM MASTHEAD (image-first) ─────────────────────────── */}
      <PremiumMasthead
        manifestKey="horses-com:racing"
        fallbackKey="horses-com:category-disciplines"
        eyebrow="Racing Intelligence"
        title="Horse Racing"
        subtitle="Educational reference for the sport: the disciplines (flat, harness, Quarter Horse, and jump racing), the marquee events (the Triple Crown and the Breeders' Cup), how race classes work, the people behind a runner, OTTB aftercare, and a plain-language glossary. Not a betting resource. Not a handicapping guide."
        alt="Thoroughbred racehorses on a turf track"
      />

      {/* ── BREADCRUMB ─────────────────────────────────────────────── */}
      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>&#8250;</span>
        <span className="text-brand-text-mid font-medium">Racing</span>
      </nav>

      {/* ── INTRO ──────────────────────────────────────────────────── */}
      <div className="px-container-sm sm:px-container py-12">
        <p className="text-sm text-brand-text-light mb-10 max-w-2xl">
          Racing Intelligence is the Horses.com vertical dedicated to horse racing
          as an educational subject. Each article is a reference: governance bodies
          are named, breed characteristics are described, and welfare topics are
          covered with appropriate context. Cited authorities include The Jockey
          Club, the United States Trotting Association (USTA), the American Quarter
          Horse Association (AQHA), the Thoroughbred Aftercare Alliance, and the
          American Association of Equine Practitioners (AAEP). No betting, odds,
          or handicapping advice appears anywhere in this vertical.
        </p>

        {/* ── SPOKE GRID ─────────────────────────────────────────── */}
        <section>
          <h2 className="font-display font-bold text-brand-dark text-xl mb-2 border-b border-brand-border pb-2">
            Racing Reference Articles
            <span className="text-sm font-normal text-brand-text-light ml-3">
              {RACING_SPOKES.length} articles
            </span>
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 mt-5">
            {RACING_SPOKES.map((spoke) => (
              <li key={spoke.slug}>
                <Link
                  href={`/racing/${spoke.slug}`}
                  className="block py-3 px-4 rounded-md border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition"
                >
                  <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1">
                    {spoke.category}
                  </div>
                  <div className="font-display font-bold text-brand-dark text-base leading-tight mb-1">
                    {spoke.title}
                  </div>
                  <div className="text-xs text-brand-text-mid mb-2">
                    {spoke.tagline}
                  </div>
                  <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                    {spoke.authorities}
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
            These articles describe racing disciplines, governance structures,
            breed characteristics, and aftercare pathways. They are educational
            references, not wagering resources. No betting tips, odds commentary,
            or handicapping guidance is provided or implied anywhere in this
            vertical. For regulatory and wagering information, consult your
            jurisdiction&apos;s racing commission directly.
          </p>
        </div>

        {/* ── CROSS-LINKS TO SITE HUBS ────────────────────────────── */}
        <div className="mt-10">
          <h2 className="font-display font-bold text-brand-dark text-lg mb-4">
            Related Horses.com Reference
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Racing History', href: '/racing/history' },
              { label: 'Your First Day at the Races', href: '/first-derby' },
              { label: 'Race Types & Classes', href: '/racing/race-types' },
              { label: 'Racing Roles', href: '/racing/racing-roles' },
              { label: 'Bloodstock & Breeding', href: '/bloodstock' },
              { label: 'Disciplines', href: '/disciplines' },
              { label: 'Breeds', href: '/breeds' },
              { label: 'Health', href: '/health' },
              { label: 'Nutrition', href: '/nutrition' },
              { label: 'Care', href: '/care' },
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
          source="racing-hub"
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
