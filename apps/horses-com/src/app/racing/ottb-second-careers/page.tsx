/**
 * Horses.com -- OTTB Second Careers Hub -- /racing/ottb-second-careers
 *
 * Cluster hub framing the off-track Thoroughbred (OTTB) second-career
 * transition by DISCIPLINE. It complements -- and does not duplicate -- the
 * existing welfare-and-ecosystem overview at
 * /racing/off-track-thoroughbred-aftercare. Where the aftercare page covers
 * the rehoming ecosystem (the Thoroughbred Aftercare Alliance, accreditation,
 * the welfare lifecycle), this hub and its spokes cover the per-discipline
 * RETRAINING angle: TB aptitude, the letdown -> restart arc, the retraining
 * timeline, and realistic expectations for a specific second career.
 *
 * The four spokes cover the OFF-TRACK THOROUGHBRED transitioning INTO a
 * named discipline; the general discipline references live under
 * /disciplines/* and are cross-linked, not restated.
 *
 * NON-WAGERING (QC §1): this is aftercare + retraining education. No betting,
 * odds, picks, EV, or handicapping guidance anywhere in this cluster.
 *
 * Byline: Horses.com Editorial (no fabricated credentials).
 * Source basis: Retired Racehorse Project / Thoroughbred Makeover; widely
 * established OTTB retraining principles (letdown/decompression, restarting
 * under saddle, discipline aptitude).
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, EmailCapture, CrossPortfolioCard } from '@carloOS/ui'
import { PremiumMasthead } from '@/components/PremiumMasthead'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'OTTB Second Careers -- Retraining by Discipline | Horses.com',
  description:
    'How off-track Thoroughbreds transition into eventing, show jumping, dressage, and trail/pleasure: aptitude, the letdown-to-restart arc, and realistic timelines.',
  path: '/racing/ottb-second-careers',
})

interface OttbSpoke {
  slug: string
  title: string
  eyebrow: string
  cardSummary: string
  disciplineHref: string
}

const OTTB_SPOKES: OttbSpoke[] = [
  {
    slug: 'ottb-in-eventing',
    title: 'The OTTB in Eventing',
    eyebrow: 'Discipline Transition',
    cardSummary:
      'Why the Thoroughbred is often considered the natural eventer, what the cross-country phase rewards, and how the restart maps onto the three phases.',
    disciplineHref: '/disciplines/eventing',
  },
  {
    slug: 'ottb-in-show-jumping',
    title: 'The OTTB in Show Jumping',
    eyebrow: 'Discipline Transition',
    cardSummary:
      'Scope, athleticism, and the patience the jumper ring asks of a horse used to galloping forward -- aptitude, retraining timeline, and realistic expectations.',
    disciplineHref: '/disciplines/show-jumping',
  },
  {
    slug: 'ottb-in-dressage',
    title: 'The OTTB in Dressage',
    eyebrow: 'Discipline Transition',
    cardSummary:
      'An unlikely-seeming fit that rewards the Thoroughbred’s sensitivity and elastic movement: the slow rebuild of balance, contact, and topline.',
    disciplineHref: '/disciplines/dressage',
  },
  {
    slug: 'ottb-in-trail-and-pleasure',
    title: 'The OTTB in Trail & Pleasure',
    eyebrow: 'Discipline Transition',
    cardSummary:
      'Not every OTTB is a competition horse. What it takes to bring a sensitive ex-racehorse to a calm, confident life on the trail and as a pleasure mount.',
    disciplineHref: '/disciplines/trail-riding',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com' },
    { name: 'Racing', url: 'https://horses.com/racing' },
    { name: 'OTTB Second Careers', url: 'https://horses.com/racing/ottb-second-careers' },
  ],
})

const listSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'OTTB Second Careers by Discipline -- Horses.com',
  description:
    'Educational reference on how off-track Thoroughbreds transition into specific second-career disciplines.',
  numberOfItems: OTTB_SPOKES.length,
  itemListElement: OTTB_SPOKES.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.title,
    url: `https://horses.com/racing/ottb-second-careers/${s.slug}`,
  })),
}

const schema = combineSchemas(breadcrumbSchema, listSchema)

export default function OttbSecondCareersHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* ── PREMIUM MASTHEAD (image-first) ─────────────────────────── */}
      <PremiumMasthead
        manifestKey="horses-com:racing"
        fallbackKey="horses-com:hero"
        eyebrow="Racing Intelligence · OTTB Second Careers"
        title="OTTB Second Careers"
        subtitle="When a Thoroughbred leaves the track, a second career begins. This hub covers the discipline-specific side of the off-track Thoroughbred transition: why TBs retrain well, the letdown-to-restart arc, and what a realistic move into eventing, jumping, dressage, or pleasure riding actually involves. Educational retraining reference only — not a betting or handicapping guide."
        alt="A Thoroughbred being ridden in a flatwork session after racing"
      />

      {/* ── BREADCRUMB ─────────────────────────────────────────────── */}
      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>&#8250;</span>
        <Link href="/racing" className="hover:text-brand-primary no-underline">Racing</Link>
        <span>&#8250;</span>
        <span className="text-brand-text-mid font-medium">OTTB Second Careers</span>
      </nav>

      {/* ── INTRO ──────────────────────────────────────────────────── */}
      <div className="px-container-sm sm:px-container py-12">
        <p className="text-sm text-brand-text-light mb-6 max-w-2xl">
          The off-track Thoroughbred — the OTTB — is one of the most versatile
          horses in the modern sport. The same athleticism that defined a racing
          career (cardiovascular capacity, elastic gaits, quick responsiveness)
          redirects, with patient retraining, into a wide range of second careers.
          This hub gathers Horses.com&apos;s discipline-by-discipline transition
          references: each one looks at how a Thoroughbred specifically moves from
          the track into one named discipline.
        </p>
        <p className="text-sm text-brand-text-light mb-6 max-w-2xl">
          These pages are deliberately narrow. For the welfare ecosystem — the
          rehoming network, the Thoroughbred Aftercare Alliance, accreditation,
          and what to know before adopting — see the broader{' '}
          <Link href="/racing/off-track-thoroughbred-aftercare" className="text-brand-primary font-semibold no-underline hover:underline">
            Off-Track Thoroughbred Aftercare
          </Link>{' '}
          reference. For each sport in general — its rules, levels, and history —
          see the matching page in the{' '}
          <Link href="/disciplines" className="text-brand-primary font-semibold no-underline hover:underline">
            disciplines
          </Link>{' '}
          library. The spokes below add only the Thoroughbred-specific layer:
          aptitude, the retraining timeline, conformation and temperament notes,
          and realistic expectations.
        </p>
        <p className="text-sm text-brand-text-light mb-10 max-w-2xl">
          Across every discipline the same arc applies. A horse comes off the
          track confirmed in racehorse habits — trained to accelerate when asked
          and to carry itself at speed in a straight line. The transition begins
          with a <strong>letdown and decompression</strong> period, moves through{' '}
          <strong>foundation flatwork</strong> that builds a new vocabulary of leg,
          seat, and rein, and only then introduces{' '}
          <strong>discipline-specific work</strong>. The Retired Racehorse Project&apos;s
          annual Thoroughbred Makeover — in which recently retired racehorses are
          prepared for competition across multiple disciplines within a defined
          window — has become the category&apos;s public showcase for what that
          structured restart can accomplish.
        </p>

        {/* ── SPOKE GRID ─────────────────────────────────────────── */}
        <section>
          <h2 className="font-display font-bold text-brand-dark text-xl mb-2 border-b border-brand-border pb-2">
            Second Careers by Discipline
            <span className="text-sm font-normal text-brand-text-light ml-3">
              {OTTB_SPOKES.length} references
            </span>
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 mt-5">
            {OTTB_SPOKES.map((spoke) => (
              <li key={spoke.slug}>
                <Link
                  href={`/racing/ottb-second-careers/${spoke.slug}`}
                  className="block py-3 px-4 rounded-md border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition h-full"
                >
                  <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1">
                    {spoke.eyebrow}
                  </div>
                  <div className="font-display font-bold text-brand-dark text-base leading-tight mb-1">
                    {spoke.title}
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
            These references describe OTTB retraining as an educational and
            welfare subject. They are not wagering resources. No betting tips,
            odds commentary, or handicapping guidance is provided or implied.
            Retraining timelines are general principles; every horse is an
            individual, and a qualified trainer and veterinarian should guide any
            specific program.
          </p>
        </div>

        {/* ── CROSS-LINKS ─────────────────────────────────────────── */}
        <div className="mt-10">
          <h2 className="font-display font-bold text-brand-dark text-lg mb-4">
            Related Reference
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'OTTB Aftercare', href: '/racing/off-track-thoroughbred-aftercare' },
              { label: 'Great Racehorses', href: '/racing/great-racehorses' },
              { label: 'Thoroughbred Profile', href: '/breeds/thoroughbred' },
              { label: 'Disciplines', href: '/disciplines' },
              { label: 'Racehorse Training & Conditioning', href: '/racing/racehorse-training-and-conditioning' },
              { label: 'Equine Health', href: '/health' },
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
          ctaText="Send the weekly notes"
          source="ottb-second-careers-hub"
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
