/**
 * Horses.com -- Racing Roles Hub -- /racing/racing-roles
 *
 * Cluster hub organizing the four racing-role depth spokes (jockey, trainer,
 * owner, racing official). The who's-who narrative overview lives at
 * /racing/the-people-of-racing; THIS page is the canonical index for the
 * /racing/racing-roles/<slug> cluster, giving each spoke a parent and a clean
 * Home -> Racing -> Racing Roles breadcrumb level.
 *
 * NON-WAGERING (QC §1): these are people/role explainers. No betting on
 * jockeys or trainers, no odds, no handicapping. Pay is kept general.
 *
 * Byline: Horses.com Editorial (no fabricated credentials, no AI humans).
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, EmailCapture } from '@carloOS/ui'
import { PremiumMasthead } from '@/components/PremiumMasthead'
import { racingRoleSpokes } from '@/data/racing-roles'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Racing Roles -- Jockey, Trainer, Owner & Officials | Horses.com',
  description:
    'Who does what in horse racing: the jockey, the trainer, the owner, and the officials who keep the sport fair. An educational role guide, not a betting guide.',
  path: '/racing/racing-roles',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com' },
    { name: 'Racing', url: 'https://horses.com/racing' },
    { name: 'Racing Roles', url: 'https://horses.com/racing/racing-roles' },
  ],
})

const rolesListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'The People of Horse Racing at Horses.com',
  description:
    'Educational reference index of the human roles in a racing operation: jockey, trainer, owner, and racing officials.',
  numberOfItems: racingRoleSpokes.length,
  itemListElement: racingRoleSpokes.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.title,
    url: `https://horses.com/racing/racing-roles/${s.slug}`,
  })),
}

const schema = combineSchemas(breadcrumbSchema, rolesListSchema)

export default function RacingRolesHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* ── PREMIUM MASTHEAD (image-first) ─────────────────────────── */}
      <PremiumMasthead
        manifestKey="horses-com:racing"
        fallbackKey="horses-com:hero"
        eyebrow="Racing Intelligence · The People"
        title="Racing Roles"
        subtitle="Behind every runner is a team. This hub gathers the in-depth references on the people of racing — the jockey in the saddle, the trainer who prepares the horse, the owner who funds it, and the officials who keep each race fair. Educational role guides, not a betting resource."
        alt="A trainer leading a Thoroughbred at a training track at dawn"
      />

      {/* ── BREADCRUMB ─────────────────────────────────────────────── */}
      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>&#8250;</span>
        <Link href="/racing" className="hover:text-brand-primary no-underline">Racing</Link>
        <span>&#8250;</span>
        <span className="text-brand-text-mid font-medium">Racing Roles</span>
      </nav>

      {/* ── INTRO ──────────────────────────────────────────────────── */}
      <div className="px-container-sm sm:px-container py-12">
        <p className="text-sm text-brand-text-light mb-6 max-w-2xl">
          A racehorse only reaches the starting gate because a chain of people
          has done their jobs — funding, conditioning, riding, and policing the
          sport. Each role is a distinct profession with its own training,
          licensing, and daily reality. This hub is the index to the Horses.com
          reference on each of them.
        </p>
        <p className="text-sm text-brand-text-light mb-10 max-w-2xl">
          The <strong>jockey</strong> is the licensed athlete who partners the
          horse in the race, judging pace and timing a run in seconds. The{' '}
          <strong>trainer</strong> conditions the horse, plans its campaign, and
          runs the stable. The <strong>owner</strong> — a sole owner, a
          partnership, or a fractional syndicate — funds the operation and earns
          its purses. And the <strong>racing officials</strong>, from the
          stewards to the starter and the clerk of scales, enforce the rules and
          protect the integrity of every race. Each role below has its own
          in-depth reference. For the who&apos;s-who narrative overview, see{' '}
          <Link href="/racing/the-people-of-racing" className="text-brand-primary font-semibold no-underline hover:underline">
            The People of Racing
          </Link>
          . These are educational role guides; pace and tactics are described as
          the participants&apos; craft, never as betting signals.
        </p>

        {/* ── SPOKE GRID ─────────────────────────────────────────── */}
        <section>
          <h2 className="font-display font-bold text-brand-dark text-xl mb-2 border-b border-brand-border pb-2">
            The Roles In Depth
            <span className="text-sm font-normal text-brand-text-light ml-3">
              {racingRoleSpokes.length} roles
            </span>
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 mt-5">
            {racingRoleSpokes.map((spoke) => (
              <li key={spoke.slug}>
                <Link
                  href={`/racing/racing-roles/${spoke.slug}`}
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
            These articles explain racing roles as educational subjects — what
            each person does, the path into the job, and the daily reality.
            Earnings are kept general. No betting on jockeys or trainers, no odds
            commentary, and no handicapping guidance is provided or implied.
          </p>
        </div>

        {/* ── CROSS-LINKS ─────────────────────────────────────────── */}
        <div className="mt-10">
          <h2 className="font-display font-bold text-brand-dark text-lg mb-4">
            Related Racing Reference
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'The People of Racing', href: '/racing/the-people-of-racing' },
              { label: 'Race Types & Classes', href: '/racing/race-types' },
              { label: 'Racehorse Training & Conditioning', href: '/racing/racehorse-training-and-conditioning' },
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
          source="racing-roles-hub"
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
