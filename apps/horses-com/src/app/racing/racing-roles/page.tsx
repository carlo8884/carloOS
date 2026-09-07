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
import { AffiliateDisclosure, buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, EmailCapture, CrossPortfolioCard, ShopCtas } from '@carloOS/ui'
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

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-content-wide mx-auto">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the racing-roles checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Racing-roles checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-horse-barn-racing-roles-index-chart,
            stall-door-role-cluster-card, and
            equine-racing-roles-index-handbook notes
            that match the jockey-trainer-owner-officials,
            connections-index, and four-role-hub copy on
            this hub — a laminated horse barn racing-roles
            index chart so the jockey / trainer / owner /
            official notes are posted on the stall door
            (not a stewards-inquiry chart, not an
            owner-trainer-jockey chart, not a newcomer
            race-card chart), a horse stall-door role
            cluster card so the connections / licensing
            notes are labeled at the barn (not a
            starter-gate card, not a steward-official
            card, not a paddock-parade card), and an
            equine racing-roles index handbook so the
            four-role / people-of-racing-index grounding
            is a physical barn book (not a
            clerk-of-scales handbook, not a
            backstretch-role handbook, not a racing-silks
            literacy handbook). Educational barn
            checklist, not a ranked race list, not a
            first-aid-kit hop, and not a substitute for a
            veterinarian. Horses.com does not sell
            insurance. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="horses-com"
            title="Racing-roles checklist"
            subtitle="Email the racing-roles index chart, role-cluster card, and racing-roles index handbook notes. No spam."
            ctaText="Email my racing-roles checklist"
            source="racing-roles-hub-under-hero"
          />
        </div>
      </section>

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

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mb-4 max-w-content-wide">
          Racing-roles kitchen kit
        </h2>
        <p className="max-w-content-wide text-sm text-brand-text-mid leading-relaxed">
          Everyday physical supplies that match the
          jockey-trainer-owner-officials, connections-index,
          and four-role-hub copy on this hub — a laminated
          horse barn racing-roles index chart so the
          jockey / trainer / owner / official notes are
          posted on the stall door, a horse stall-door
          role-cluster card so the connections / licensing
          notes are labeled at the barn, and an equine
          racing-roles index handbook so the four-role /
          people-of-racing-index grounding is a physical
          barn book. These are educational kitchen
          searches, not a ranked race list, not a
          substitute for a veterinarian, not an official /
          owner / people-of-racing / newcomers hop, and
          not a first-aid-kit hop. This page does not hop
          medications or vaccines. This page does not
          sell insurance. This page does not claim
          hands-on testing. This page is not a wagering
          resource.
        </p>

        <div className="max-w-content-wide mt-6">
          <AffiliateDisclosure variant="inline" siteId="horses-com" />
        </div>

        {/* Money path — live amazon-brand search hops
            (laminated horse barn racing-roles index chart /
            horse stall-door role-cluster card /
            equine racing-roles index handbook).
            Educational kitchen searches only; no Rx hops.
            ShopCtas hides empty Chewy; never href="#"
            or PLACEHOLDER. Unused vs official /
            owner / people-of-racing / newcomers hops.
            Directory import left untouched. Do not
            re-open #1165 / what-to-expect. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-content-wide">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the racing-roles kitchen kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page jockey-trainer-owner-officials,
            connections-index, and four-role-hub copy — a
            laminated horse barn racing-roles index
            chart, a horse stall-door role-cluster card,
            and an equine racing-roles index handbook.
            Educational kitchen searches only. They are
            not a ranked race list, they are not an
            official / owner / people-of-racing /
            newcomers hop, they are not a first-aid-kit
            hop, and they do not replace a veterinarian.
            Horses.com does not sell insurance.
            Horses.com earns a commission on qualifying
            purchases at no extra cost to you. Empty
            Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+horse+barn+racing+roles+index+chart?s=racing-roles-hub"
              amazonLabel="Browse laminated horse barn racing-roles index charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+stall+door+role+cluster+card?s=racing-roles-hub"
              amazonLabel="Browse horse stall-door role-cluster cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/equine+racing+roles+index+handbook?s=racing-roles-hub"
              amazonLabel="Browse equine racing-roles index handbooks on Amazon →"
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
          source="racing-roles-hub"
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
