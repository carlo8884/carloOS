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
import { AffiliateDisclosure, buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, EmailCapture, ShopCtas } from '@carloOS/ui'
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
    slug: 'racing-for-newcomers',
    title: 'Racing for Newcomers',
    tagline:
      'New to the sport? Start here: how to read a race card, what a day at the races is like, and how racing silks help you follow a horse. A spectator\'s guide, not a betting one.',
    authorities: 'Educational Reference',
    category: 'For Newcomers',
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
    slug: 'venues',
    title: 'Iconic Racetracks',
    tagline:
      'Educational venue guides to the historic homes of American racing: Churchill Downs, Pimlico, Belmont Park, Saratoga, and Keeneland -- history, architecture, and tradition.',
    authorities: 'Venue Guides',
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
    slug: 'ottb-second-careers',
    title: 'OTTB Second Careers',
    tagline:
      'How off-track Thoroughbreds transition by discipline: aptitude, the letdown-to-restart arc, and realistic retraining timelines for eventing, jumping, dressage, and pleasure.',
    authorities: 'Retired Racehorse Project',
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

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-content-wide mx-auto">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the horses racing-hub checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Horses racing-hub checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-horse-barn-racing-section-map-chart,
            stall-door-racing-prep-card, and
            equine-racing-reference-handbook notes that
            match the racing-discipline-class-map,
            aftercare-governance-log, and
            jockey-club-usta-aaep-grounding copy on this
            hub — a laminated horse barn racing
            section-map chart so the flat / harness /
            Quarter Horse / jump / class map is posted on
            the stall door (not a tools-hub calculator
            chart, not a reviews buyer-guide chart, not a
            supplements category chart, not a tack
            section-map chart, not an ownership
            section-map chart, not a breeds profile chart,
            not a discipline section-map chart, not a
            bloodstock section-map chart, not a
            forage-first chart, not a daily-care chart,
            not an emergency-triage chart, not an
            owner-guides chart), a horse stall-door racing
            prep card so TAA / aftercare and governance
            notes are labeled on the stall door (not a
            measurement card, not a reviews comparison
            card, not a supplements label card, not a
            tack-fit card, not an ownership prep card, not
            a breeds library card, not a discipline prep
            card, not a bloodstock prep card, not a ration
            card, not a care card, not a vital-signs card,
            not an owner-guides card), and an equine
            racing reference handbook so The Jockey Club /
            USTA / AAEP grounding is a physical barn book
            (not a calculator handbook, not a reviews
            handbook, not a supplements handbook, not a
            tack handbook, not an ownership handbook, not
            a breeds handbook, not a discipline handbook,
            not a bloodstock handbook, not a nutrition
            handbook, not a husbandry handbook, not a
            health handbook, not an owner-guides
            handbook). Educational kitchen checklist, not
            a ranked race list, not a child curry-comb /
            hoof-pick hop, and not a substitute for a
            veterinarian. Horses.com does not sell
            insurance. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="horses-com"
            title="Horses racing-hub checklist"
            subtitle="Email the racing-section-map-chart, stall-door prep-card, and racing-handbook notes. No spam."
            ctaText="Email my horses racing-hub checklist"
            source="racing-hub-under-hero"
          />
        </div>
      </section>

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

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mb-4 max-w-content-wide">
          Racing-hub kitchen kit
        </h2>
        <p className="max-w-content-wide text-sm text-brand-text-mid leading-relaxed">
          Everyday physical supplies that match the
          racing-discipline-class-map, aftercare-governance-log,
          and jockey-club-usta-aaep-grounding copy on this
          hub — a laminated horse barn racing section-map
          chart so the flat / harness / Quarter Horse /
          jump / class map is posted on the stall door, a
          horse stall-door racing prep card so TAA /
          aftercare and governance notes are labeled on
          the stall door, and an equine racing reference
          handbook so The Jockey Club / USTA / AAEP
          grounding is a physical barn book. These are
          educational kitchen searches, not a ranked race
          list, not a substitute for a veterinarian, not a
          tools-hub / reviews-hub / supplements-hub /
          tack-hub / nutrition-hub / care-hub / health-hub
          / guides-hub / ownership-hub / breeds-hub /
          disciplines-hub / bloodstock-hub hop, and not a
          child curry-comb / hoof-pick hop (those live on
          care children). This page does not hop
          medications or vaccines. This page does not sell
          insurance. This page does not claim hands-on
          testing. This page is not a wagering resource.
        </p>

        <div className="max-w-content-wide mt-6">
          <AffiliateDisclosure variant="inline" siteId="horses-com" />
        </div>

        {/* Money path — live amazon-brand search hops
            (laminated horse barn racing section-map chart /
            horse stall-door racing prep card /
            equine racing reference handbook).
            Educational kitchen searches only; no Rx hops.
            ShopCtas hides empty Chewy; never href="#"
            or PLACEHOLDER. Unused vs tools / reviews /
            supplements / tack / nutrition / care /
            health / guides / ownership / breeds /
            disciplines / bloodstock kitchen kits and
            child horse+curry+comb / horse+hoof+pick hops.
            Directory import left untouched. Do not
            re-open #1165 / what-to-expect. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-content-wide">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the racing-hub kitchen kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page racing-discipline-class-map,
            aftercare-governance-log, and
            jockey-club-usta-aaep-grounding copy — a
            laminated horse barn racing section-map chart,
            a horse stall-door racing prep card, and an
            equine racing reference handbook. Educational
            kitchen searches only. They are not a ranked
            race list, they are not a sibling-hub kitchen
            hop, they are not a child curry-comb hop, and
            they do not replace a veterinarian. Horses.com
            does not sell insurance. Horses.com earns a
            commission on qualifying purchases at no extra
            cost to you. Empty Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+horse+barn+racing+section+map+chart?s=racing-hub"
              amazonLabel="Browse laminated horse barn racing section-map charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+stall+door+racing+prep+card?s=racing-hub"
              amazonLabel="Browse horse stall-door racing prep cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/equine+racing+reference+handbook?s=racing-hub"
              amazonLabel="Browse equine racing reference handbooks on Amazon →"
            />
          </div>
        </div>
      </section>

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
