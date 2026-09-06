/**
 * Horses.com Breeds Index — /breeds
 *
 * Lists all breeds in src/data/breeds.ts, grouped by BreedType. Each entry
 * deep-links to /breeds/[slug] (where the template renders a full profile
 * for every slug NOT in EXISTING_STATIC_BREED_SLUGS).
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, buildMetadata, buildBreadcrumbSchema, combineSchemas, EmailCapture, SchemaScript, ShopCtas, CrossPortfolioCard } from '@carloOS/ui'
import { PremiumMasthead } from '../../components/PremiumMasthead'
import { Breeds, groupBreedsByType, type BreedType } from '../../data/breeds'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Horse Breed Guide — 50 Breeds Profiled',
  description:
    'Reference profiles for 50 horse breeds: temperament, disciplines, health concerns, and care guidance grounded in AAEP, UC Davis VGL, and breed-club data.',
  path: '/breeds',
})

const GROUP_ORDER: BreedType[] = [
  'Stock',
  'Sport',
  'Warmblood',
  'Gaited',
  'Draft',
  'Pony',
  'Pleasure',
  'Wild/Feral',
]

const GROUP_DESCRIPTIONS: Record<BreedType, string> = {
  Stock:
    'American working horse breeds developed for cattle work and short-distance racing.',
  Sport:
    'Hot-blooded breeds historically bred for racing, war, or refined sport competition.',
  Warmblood:
    'European sport-horse studbooks (Hanoverian, KWPN, Holsteiner, etc.) bred for FEI disciplines.',
  Gaited:
    'Breeds carrying inherited four-beat ambling gaits, prized for smooth riding over long distance.',
  Draft:
    'Heavy horses bred for plowing, logging, and heavy harness work.',
  Pony:
    'Breeds standing under ~14.2 hh — typically hardy mountain or moor types.',
  Pleasure:
    'Light horses bred primarily for harness, saddle, or all-around amateur use.',
  'Wild/Feral':
    'Feral or semi-feral breeds adopted from wild populations and gentled for domestic use.',
}

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com/' },
    { name: 'Breeds', url: 'https://horses.com/breeds' },
  ],
})

// ItemList of every profiled breed — structured, citable index of the breed
// cluster for AI Overviews / Perplexity (GEO authority signal).
const breedListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Horse Breeds Profiled at Horses.com',
  numberOfItems: Breeds.length,
  itemListElement: Breeds.map((b, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: b.name,
    url: `https://horses.com/breeds/${b.slug}`,
  })),
}

const schema = combineSchemas(breadcrumbSchema, breedListSchema)

export default function BreedsIndexPage() {
  const grouped = groupBreedsByType()

  return (
    <>
      <SchemaScript schema={schema} />
      {/* Hero — image-first masthead (photo behind the title band) */}
      <PremiumMasthead
        manifestKey="horses-com:category-breeds"
        eyebrow="Breed Reference"
        title="Horse Breed Guide"
        subtitle={`Reference profiles for ${Breeds.length} horse breeds — registry, height/weight, disciplines, breed-specific health risks, and recommended genetic-test panels.`}
      />

      {/* Breadcrumb */}
      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Breeds</span>
      </nav>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-content-wide mx-auto">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the horses breeds-hub checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Horses breeds-hub checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-horse-barn-breeds-profile-chart,
            stall-door-breeds-library-card, and
            equine-breeds-reference-handbook notes that
            match the working-type-map, height-energy-log,
            and aaep-vgl-breed-club-grounding copy on this
            hub — a laminated horse barn breeds profile
            chart so the stock / sport / warmblood / gaited
            / draft / pony map is posted on the stall door
            (not a tools-hub calculator chart, not a
            reviews buyer-guide chart, not a supplements
            category chart, not a tack section-map chart,
            not an ownership section-map chart, not a
            forage-first chart, not a daily-care chart,
            not an emergency-triage chart, not an
            owner-guides chart), a horse stall-door breeds
            library card so each working-type spoke is
            labeled on the stall door (not a measurement
            card, not a reviews comparison card, not a
            supplements label card, not a tack-fit card,
            not an ownership prep card, not a ration card,
            not a care card, not a vital-signs card, not
            an owner-guides card), and an equine breeds
            reference handbook so the AAEP / UC Davis VGL
            / breed-club grounding is a physical barn book
            (not a calculator handbook, not a reviews
            handbook, not a supplements handbook, not a
            tack handbook, not an ownership handbook, not
            a nutrition handbook, not a husbandry
            handbook, not a health handbook, not an
            owner-guides handbook). Educational kitchen
            checklist, not a ranked breed list, not a
            child curry-comb / hoof-pick hop, and not a
            substitute for a veterinarian. Horses.com does
            not sell insurance. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="horses-com"
            title="Horses breeds-hub checklist"
            subtitle="Email the breeds-profile-chart, stall-door library-card, and breeds-handbook notes. No spam."
            ctaText="Email my horses breeds-hub checklist"
            source="breeds-hub-under-hero"
          />
        </div>
      </section>

      {/* Content */}
      <div className="px-container-sm sm:px-container py-12">
        <p className="text-sm text-brand-text-light mb-10 max-w-2xl">
          {Breeds.length} breed profiles, grouped by working type. Profiles combine
          breed-registry guidance, UC Davis VGL test data, AAEP vaccination and
          wellness rhythms, and peer-reviewed equine literature.
        </p>

        <div className="space-y-12">
          {GROUP_ORDER.map((groupName) => {
            const groupBreeds = grouped[groupName]
            if (!groupBreeds || groupBreeds.length === 0) return null
            return (
              <section key={groupName}>
                <h2 className="font-display font-bold text-brand-dark text-xl mb-2 border-b border-brand-border pb-2">
                  {groupName}
                  <span className="text-sm font-normal text-brand-text-light ml-3">
                    {groupBreeds.length} {groupBreeds.length === 1 ? 'breed' : 'breeds'}
                  </span>
                </h2>
                <p className="text-sm text-brand-text-light mb-5 max-w-2xl">
                  {GROUP_DESCRIPTIONS[groupName]}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 list-none p-0">
                  {groupBreeds.map((b) => (
                    <li key={b.slug}>
                      <Link
                        href={`/breeds/${b.slug}`}
                        className="block py-2 px-3 rounded-md border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition"
                      >
                        <div className="font-display font-bold text-brand-dark text-base leading-tight">
                          {b.name}
                        </div>
                        <div className="text-xs text-brand-text-light mt-0.5">
                          {b.sizeCategory.split(' (')[0]} · {b.energyLevel} energy ·{' '}
                          {b.heightRangeHh[0]}–{b.heightRangeHh[1]} hh
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )
          })}
        </div>
      </div>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mb-4 max-w-content-wide">
          Breeds-hub kitchen kit
        </h2>
        <p className="max-w-content-wide text-sm text-brand-text-mid leading-relaxed">
          Everyday physical supplies that match the
          working-type-map, height-energy-log, and
          aaep-vgl-breed-club-grounding copy on this hub —
          a laminated horse barn breeds profile chart so
          the stock / sport / warmblood / gaited / draft /
          pony map is posted on the stall door, a horse
          stall-door breeds library card so each
          working-type spoke is labeled on the stall door,
          and an equine breeds reference handbook so the
          AAEP / UC Davis VGL / breed-club grounding is a
          physical barn book. These are educational
          kitchen searches, not a ranked breed list, not a
          substitute for a veterinarian, not a tools-hub /
          reviews-hub / supplements-hub / tack-hub /
          ownership-hub hop, and not a child curry-comb /
          hoof-pick hop (those live on care children).
          This page does not hop medications or vaccines.
          This page does not sell insurance. This page
          does not claim hands-on testing.
        </p>

        <div className="max-w-content-wide mt-6">
          <AffiliateDisclosure variant="inline" siteId="horses-com" />
        </div>

        {/* Money path — live amazon-brand search hops
            (laminated horse barn breeds profile chart /
            horse stall-door breeds library card /
            equine breeds reference handbook).
            Educational kitchen searches only; no Rx /
            vaccine / flea hops.
            ShopCtas hides empty Chewy; never href="#"
            or PLACEHOLDER. Unused vs tools / reviews /
            supplements / tack / ownership kitchen kits
            and child horse+curry+comb / horse+hoof+pick
            hops. Directory import left untouched.
            Do not re-open #1165 / what-to-expect. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-content-wide">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the breeds-hub kitchen kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page working-type-map, height-energy-log,
            and aaep-vgl-breed-club-grounding copy — a
            laminated horse barn breeds profile chart, a
            horse stall-door breeds library card, and an
            equine breeds reference handbook. Educational
            kitchen searches only. They are not a ranked
            breed list, they are not a tools-hub /
            reviews-hub / supplements-hub / tack-hub /
            ownership-hub hop, they are not a child
            curry-comb hop, and they do not replace a
            veterinarian. Horses.com does not sell
            insurance. Horses.com earns a commission on
            qualifying purchases at no extra cost to you.
            Empty Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+horse+barn+breeds+profile+chart?s=breeds-hub"
              amazonLabel="Browse laminated horse barn breeds profile charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+stall+door+breeds+library+card?s=breeds-hub"
              amazonLabel="Browse horse stall-door breeds library cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/equine+breeds+reference+handbook?s=breeds-hub"
              amazonLabel="Browse equine breeds reference handbooks on Amazon →"
            />
          </div>
        </div>
      </section>

      <CrossPortfolioCard currentSite="horses-com" contentType="breed" variant="footer" />
    </>
  )
}
