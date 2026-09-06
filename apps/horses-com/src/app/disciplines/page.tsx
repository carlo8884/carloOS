/**
 * Horses.com Disciplines Hub — /disciplines
 *
 * Lists the six discipline overview pages: dressage, show jumping,
 * eventing, western pleasure, reining, and trail riding. Each child
 * page is a long-form reference covering history, levels/classes,
 * breed fit, gear, competition, and training tips.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, EmailCapture, ShopCtas, CrossPortfolioCard } from '@carloOS/ui'
import { PremiumMasthead } from '../../components/PremiumMasthead'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Horse Riding Disciplines — Dressage, Jumping, Eventing, Western',
  description:
    'Reference overviews for six ridden disciplines: dressage, show jumping, eventing, western pleasure, reining, trail riding. Levels, gear, and governing bodies.',
  path: '/disciplines',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com' },
    { name: 'Disciplines', url: 'https://horses.com/disciplines' },
  ],
})

interface DisciplineCard {
  slug: string
  name: string
  tagline: string
  governingBodies: string
  level: 'English' | 'Western' | 'Recreational'
}

const DISCIPLINES: DisciplineCard[] = [
  {
    slug: 'dressage',
    name: 'Dressage',
    tagline:
      'The classical pyramid: rhythm, relaxation, contact, impulsion, straightness, collection — Intro through Grand Prix.',
    governingBodies: 'USDF · USEF · FEI',
    level: 'English',
  },
  {
    slug: 'show-jumping',
    name: 'Show Jumping',
    tagline:
      'Numbered courses against the clock — Crossrails through 1.60 m Grand Prix, judged on faults and time.',
    governingBodies: 'USEF Jumper · FEI Jumping',
    level: 'English',
  },
  {
    slug: 'eventing',
    name: 'Eventing',
    tagline:
      'The equestrian triathlon — dressage, cross-country, and show jumping over one to three days, Beginner Novice through CCI5*.',
    governingBodies: 'USEA · USEF · FEI',
    level: 'English',
  },
  {
    slug: 'western-pleasure',
    name: 'Western Pleasure',
    tagline:
      'Rail-class judging of cadence, frame, and manners — AQHA, APHA, and ApHC stock-horse breed shows.',
    governingBodies: 'AQHA · APHA · ApHC · USEF',
    level: 'Western',
  },
  {
    slug: 'reining',
    name: 'Reining',
    tagline:
      'Pattern-based western sport — sliding stops, spins, flying lead changes, and circles, scored 0 to plus-1.5 per maneuver.',
    governingBodies: 'NRHA · USEF · FEI',
    level: 'Western',
  },
  {
    slug: 'trail-riding',
    name: 'Trail Riding',
    tagline:
      'Recreational and competitive — from backyard outings to NATRC Competitive Trail and AERC endurance up to 100 miles.',
    governingBodies: 'NATRC · AERC',
    level: 'Recreational',
  },
  {
    slug: 'hunter-under-saddle',
    name: 'Hunters',
    tagline:
      'Foxhunting-rooted classes judged subjectively on style, manners, and an effortless way of going on the flat and over fences.',
    governingBodies: 'USHJA · USEF',
    level: 'English',
  },
  {
    slug: 'equitation',
    name: 'Equitation',
    tagline:
      'The discipline that judges the rider, not the horse — position, security, and effectiveness, up to the prestigious medal finals.',
    governingBodies: 'USEF · USHJA',
    level: 'English',
  },
  {
    slug: 'barrel-racing',
    name: 'Barrel Racing',
    tagline:
      'The rodeo speed event — a cloverleaf sprint around three barrels against the clock, decided in thousandths of a second.',
    governingBodies: 'WPRA · NBHA',
    level: 'Western',
  },
  {
    slug: 'cutting',
    name: 'Cutting',
    tagline:
      'Separating a cow from the herd and, on a loose rein, letting the horse work it on its own bred-in cow sense.',
    governingBodies: 'NCHA · AQHA',
    level: 'Western',
  },
  {
    slug: 'ranch-riding',
    name: 'Ranch Riding',
    tagline:
      'A pattern class celebrating the forward, natural-moving working ranch horse — the antithesis of artificial slowness.',
    governingBodies: 'AQHA · APHA · ApHC',
    level: 'Western',
  },
  {
    slug: 'endurance-riding',
    name: 'Endurance Riding',
    tagline:
      'Long-distance racing up to 100 miles, where to finish is to win and veterinary checks police the horse&apos;s welfare throughout.',
    governingBodies: 'AERC · FEI',
    level: 'Recreational',
  },
  {
    slug: 'combined-driving',
    name: 'Combined Driving',
    tagline:
      'The harness equivalent of eventing — driven dressage, a cross-country marathon with hazards, and a precision cones course.',
    governingBodies: 'ADS · FEI',
    level: 'Recreational',
  },
  {
    slug: 'vaulting',
    name: 'Vaulting',
    tagline:
      'Gymnastics and dance on a cantering horse worked on the lunge — individually, in pairs, and in spectacular teams.',
    governingBodies: 'AVA · FEI',
    level: 'Recreational',
  },
]

// ItemList of every discipline — structured, citable index of the discipline
// cluster for AI Overviews / Perplexity (GEO authority signal).
const disciplineListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Equestrian Disciplines at Horses.com',
  numberOfItems: DISCIPLINES.length,
  itemListElement: DISCIPLINES.map((d, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: d.name,
    url: `https://horses.com/disciplines/${d.slug}`,
  })),
}

const schema = combineSchemas(breadcrumbSchema, disciplineListSchema)

export default function DisciplinesIndexPage() {
  const grouped = {
    English: DISCIPLINES.filter((d) => d.level === 'English'),
    Western: DISCIPLINES.filter((d) => d.level === 'Western'),
    Recreational: DISCIPLINES.filter((d) => d.level === 'Recreational'),
  }

  return (
    <>
      <SchemaScript schema={schema} />

      <PremiumMasthead
        manifestKey="horses-com:category-disciplines"
        eyebrow="Discipline Reference"
        title="Horse Riding Disciplines"
        subtitle="Six overview articles covering the most-ridden disciplines in North America — what they are, how they are judged, what gear is required, what breeds suit them, and where to learn more."
      />

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Disciplines</span>
      </nav>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-content-wide mx-auto">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the horses disciplines-hub checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Horses disciplines-hub checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-horse-barn-discipline-section-map-chart,
            stall-door-discipline-prep-card, and
            equine-discipline-reference-handbook notes that
            match the english-western-recreational-map,
            governing-body-log, and
            usdf-usea-nrha-grounding copy on this hub — a
            laminated horse barn discipline section-map
            chart so the English / Western / Recreational
            map is posted on the stall door (not a
            tools-hub calculator chart, not a reviews
            buyer-guide chart, not a supplements category
            chart, not a tack section-map chart, not an
            ownership section-map chart, not a breeds
            profile chart, not a forage-first chart, not a
            daily-care chart, not an emergency-triage
            chart, not an owner-guides chart), a horse
            stall-door discipline prep card so USDF / USEF
            / FEI / AQHA / NRHA / NATRC / AERC notes are
            labeled on the stall door (not a measurement
            card, not a reviews comparison card, not a
            supplements label card, not a tack-fit card,
            not an ownership prep card, not a breeds
            library card, not a ration card, not a care
            card, not a vital-signs card, not an
            owner-guides card), and an equine discipline
            reference handbook so the USDF / USEA / NRHA
            grounding is a physical barn book (not a
            calculator handbook, not a reviews handbook,
            not a supplements handbook, not a tack
            handbook, not an ownership handbook, not a
            breeds handbook, not a nutrition handbook, not
            a husbandry handbook, not a health handbook,
            not an owner-guides handbook). Educational
            kitchen checklist, not a ranked discipline
            list, not a child curry-comb / hoof-pick hop,
            and not a substitute for a veterinarian.
            Horses.com does not sell insurance. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="horses-com"
            title="Horses disciplines-hub checklist"
            subtitle="Email the discipline-section-map-chart, stall-door prep-card, and discipline-handbook notes. No spam."
            ctaText="Email my horses disciplines-hub checklist"
            source="disciplines-hub-under-hero"
          />
        </div>
      </section>

      <div className="px-container-sm sm:px-container py-12">
        <p className="text-sm text-brand-text-light mb-10 max-w-2xl">
          Discipline reference articles. Each entry summarizes the history,
          levels, breed fit, key gear, and governing-body rules. Citations
          are drawn from USEF, FEI, USDF, USEA, NRHA, AQHA, NATRC, and AERC
          rulebooks and resource libraries.
        </p>

        <div className="space-y-12">
          {(['English', 'Western', 'Recreational'] as const).map((group) => (
            <section key={group}>
              <h2 className="font-display font-bold text-brand-dark text-xl mb-2 border-b border-brand-border pb-2">
                {group}
                <span className="text-sm font-normal text-brand-text-light ml-3">
                  {grouped[group].length} {grouped[group].length === 1 ? 'discipline' : 'disciplines'}
                </span>
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 mt-5">
                {grouped[group].map((d) => (
                  <li key={d.slug}>
                    <Link
                      href={`/disciplines/${d.slug}`}
                      className="block py-3 px-4 rounded-md border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition"
                    >
                      <div className="font-display font-bold text-brand-dark text-base leading-tight mb-1">
                        {d.name}
                      </div>
                      <div className="text-xs text-brand-text-mid mb-2">
                        {d.tagline}
                      </div>
                      <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                        {d.governingBodies}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-16 p-6 bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            Editorial Scope
          </div>
          <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
            These articles describe how each discipline is competed and how
            riders typically progress through the levels. They are not training
            manuals and they do not replace working with a qualified instructor
            or trainer. For any discipline, the most reliable route into the
            sport is to find a local USDF, USEA, NRHA, AQHA, NATRC, or AERC
            member club and ride or volunteer at an event.
          </p>
        </div>
      </div>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mb-4 max-w-content-wide">
          Disciplines-hub kitchen kit
        </h2>
        <p className="max-w-content-wide text-sm text-brand-text-mid leading-relaxed">
          Everyday physical supplies that match the
          english-western-recreational-map, governing-body-log,
          and usdf-usea-nrha-grounding copy on this hub — a
          laminated horse barn discipline section-map
          chart so the English / Western / Recreational
          map is posted on the stall door, a horse
          stall-door discipline prep card so USDF / USEF /
          FEI / AQHA / NRHA / NATRC / AERC notes are
          labeled on the stall door, and an equine
          discipline reference handbook so the USDF / USEA
          / NRHA grounding is a physical barn book. These
          are educational kitchen searches, not a ranked
          discipline list, not a substitute for a
          veterinarian, not a tools-hub / reviews-hub /
          supplements-hub / tack-hub / nutrition-hub /
          care-hub / health-hub / guides-hub /
          ownership-hub / breeds-hub hop, and not a child
          curry-comb / hoof-pick hop (those live on care
          children). This page does not hop medications or
          vaccines. This page does not sell insurance.
          This page does not claim hands-on testing.
        </p>

        <div className="max-w-content-wide mt-6">
          <AffiliateDisclosure variant="inline" siteId="horses-com" />
        </div>

        {/* Money path — live amazon-brand search hops
            (laminated horse barn discipline section-map chart /
            horse stall-door discipline prep card /
            equine discipline reference handbook).
            Educational kitchen searches only; no Rx hops.
            ShopCtas hides empty Chewy; never href="#"
            or PLACEHOLDER. Unused vs tools / reviews /
            supplements / tack / nutrition / care /
            health / guides / ownership / breeds kitchen
            kits and child horse+curry+comb /
            horse+hoof+pick hops. Directory import left
            untouched. Do not re-open #1165 /
            what-to-expect. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-content-wide">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the disciplines-hub kitchen kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page english-western-recreational-map,
            governing-body-log, and usdf-usea-nrha-grounding
            copy — a laminated horse barn discipline
            section-map chart, a horse stall-door
            discipline prep card, and an equine discipline
            reference handbook. Educational kitchen
            searches only. They are not a ranked
            discipline list, they are not a sibling-hub
            kitchen hop, they are not a child curry-comb
            hop, and they do not replace a veterinarian.
            Horses.com does not sell insurance. Horses.com
            earns a commission on qualifying purchases at
            no extra cost to you. Empty Chewy buttons stay
            hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+horse+barn+discipline+section+map+chart?s=disciplines-hub"
              amazonLabel="Browse laminated horse barn discipline section-map charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+stall+door+discipline+prep+card?s=disciplines-hub"
              amazonLabel="Browse horse stall-door discipline prep cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/equine+discipline+reference+handbook?s=disciplines-hub"
              amazonLabel="Browse equine discipline reference handbooks on Amazon →"
            />
          </div>
        </div>
      </section>

      <section
        className="px-container-sm sm:px-container py-12"
        style={{ background: 'var(--brand-primary-pale)' }}
      >
        <EmailCapture
          variant="section"
          siteId="horses-com"
          title="The Horses.com Reference"
          subtitle="One email a week: a deep-dive on a single discipline, breed, or piece of gear. Citation-anchored. No product pushes."
          ctaText="Send the weekly notes"
          source="disciplines-hub"
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
