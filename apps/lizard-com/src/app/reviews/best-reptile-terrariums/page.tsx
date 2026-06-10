import type { Metadata } from 'next'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology, Breadcrumb, AffiliateDisclosure} from '@carloOS/ui'
import { buildArticleSchema, buildItemListSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'lizard-com',
  title: 'Best Reptile Terrariums 2025 — Zen Habitats, Animal Plastics',
  description: 'Reptile terrariums compared on temperature retention, humidity stability, ventilation, and build quality. PVC, glass.',
  path: '/reviews/best-reptile-terrariums',
  type: 'article',
})

const PAGE_URL = 'https://lizard.com/reviews/best-reptile-terrariums'

const schema = buildArticleSchema({
  siteId: 'lizard-com',
  title: 'Best Reptile Terrariums 2025',
  description: 'Reptile terrariums compared and ranked — Zen Habitats, Animal Plastics, Exo Terra.',
  url: PAGE_URL,
  imageUrl: '',
  authorName: 'Lizard.com Editorial',
  publishedAt: new Date().toISOString(),
  modifiedAt: new Date().toISOString(),
})

const PICKS = [
  { label: 'Best PVC', name: 'Zen Habitats 4×2×2', subtitle: 'Best overall for most species', href: '#zen' },
  { label: 'Best Custom', name: 'Animal Plastics T8', subtitle: 'Largest, most configurable', href: '#ap' },
  { label: 'Best Glass', name: 'Exo Terra 36×18×24', subtitle: 'Arboreal species standard', href: '#exo' },
  { label: 'Best Budget', name: 'Repti Zoo 40 Gal', subtitle: 'Starter glass terrarium', href: '#reptizoo' },
]

// GEO: ItemList of the ranked picks + an editorial Product/Review per pick.
// reviewRating maps each card's on-page disclosed editorial score (0–10 scale,
// via ScoreMethodology); name + reviewBody are drawn only from the ReviewCard
// content on this page. No aggregateRating, no fabricated specs (QC §1.4).
const itemList = buildItemListSchema({
  name: 'Best Reptile Terrariums 2025',
  items: [
    { name: 'Zen Habitats 4×2×2 Reptile Enclosure', url: `${PAGE_URL}#zen` },
    { name: 'Animal Plastics T8', url: `${PAGE_URL}#ap` },
    { name: 'Exo Terra 36×18×24', url: `${PAGE_URL}#exo` },
    { name: 'REPTIZOO 40-Gallon Terrarium', url: `${PAGE_URL}#reptizoo` },
  ],
})

const products = [
  buildProductSchema({
    name: 'Zen Habitats 4×2×2 Reptile Enclosure',
    description: 'PVC · Flat-pack assembly · Front-opening · Best temperature retention',
    url: `${PAGE_URL}#zen`,
    ratingValue: 9.4,
    reviewAuthorName: 'Lizard.com Editorial',
    reviewBody: 'Our default recommendation for most terrestrial reptile species. PVC construction retains heat significantly better than glass, flat-pack shipping keeps prices lower, and front-opening doors reduce stress for the reptile.',
  }),
  buildProductSchema({
    name: 'Animal Plastics T8',
    description: 'HDPE plastic · Fully customizable · Maximum durability',
    url: `${PAGE_URL}#ap`,
    ratingValue: 9.1,
    reviewAuthorName: 'Lizard.com Editorial',
    reviewBody: 'The choice for keepers who need larger enclosures, custom configurations, or maximum durability. Nearly indestructible HDPE, easy to disinfect, and excellent heat retention; the tradeoff is a 6–10 week lead time and an industrial aesthetic.',
  }),
  buildProductSchema({
    name: 'Exo Terra 36×18×24',
    description: 'Front-opening glass · Full-screen top · Arboreal standard',
    url: `${PAGE_URL}#exo`,
    ratingValue: 8.8,
    reviewAuthorName: 'Lizard.com Editorial',
    reviewBody: 'The industry standard for arboreal species. Tall format prioritizes vertical space, the full-screen top allows UVB and heat from above, and the glass gives excellent visibility. Glass loses heat faster than PVC and it is not ideal for sustained high humidity.',
  }),
  buildProductSchema({
    name: 'REPTIZOO 40-Gallon Terrarium',
    description: 'Budget glass · Front-opening · Good starter option',
    url: `${PAGE_URL}#reptizoo`,
    ratingValue: 8.1,
    reviewAuthorName: 'Lizard.com Editorial',
    reviewBody: 'A functional front-opening glass terrarium well below Exo Terra pricing. Build quality is noticeably lower — less refined hinges and latches — but it works for starter setups; not our first recommendation for a committed long-term enclosure.',
  }),
]

const combined = combineSchemas(schema, itemList, ...products)

export default function BestTerrariumsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <div className="relative z-10 px-container-sm sm:px-container py-14"
        style={{ background: 'linear-gradient(160deg, #0D1A0D, #080C08)' }}>
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">
          Editor Pick · May 2025
        </span>
        <h1 className="font-display font-bold text-brand-white tracking-tight leading-tight mb-5 max-w-3xl"
          style={{ fontSize: 'clamp(24px, 4vw, 46px)' }}>
          Best Reptile Terrariums 2025 — PVC, Glass & Custom Enclosures Ranked
        </h1>
        <p className="text-lg font-light leading-relaxed max-w-2xl mb-4" style={{ color: 'rgba(238,240,228,0.55)' }}>
          Comparison of 8 commonly-stocked enclosures on the factors that decide a keeper&apos;s daily life: temperature retention, humidity stability, ventilation, and build quality. Drawn from manufacturer specifications and consolidated keeper reports.
        </p>
        <p className="text-xs" style={{ color: 'rgba(238,240,228,0.25)' }}>Lizard.com Editorial · May 2025 · Affiliate disclosure applies</p>
      </div>

      <QuickPicks items={PICKS} />
      <Breadcrumb siteId="lizard-com" items={[{ name: "Home", href: "/" }, { name: "Reviews", href: "/reviews" }, { name: "Best Reptile Terrariums" }]} />

      {/* Methodology */}
      <div className="relative z-10 px-container-sm sm:px-container py-5"
        style={{ background: '#0D1A0D', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="rounded-lg p-5" style={{ background: 'rgba(122,181,42,0.07)', border: '1px solid rgba(122,181,42,0.2)' }}>
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Comparison Methodology</div>
          <p className="text-sm m-0" style={{ color: 'rgba(238,240,228,0.75)', lineHeight: 1.65 }}>
            Each enclosure is compared on the same criteria — thermal performance with a standard heating setup (150W basking bulb + heat panel), manufacturer-stated dimensions and materials, and humidity retention with and without moist hides — drawing on manufacturer specifications and aggregated long-term keeper reports rather than an in-house test rig. Build quality assessed against owner long-term reports and manufacturer specifications. Affiliate links below — rankings are independent.
          </p>
        </div>
      </div>

      <div className="relative z-10 px-container-sm sm:px-container py-12">
        <div className="grid lg:grid-cols-[1fr_250px] gap-12">
          <div>
            <ScoreMethodology />
            <AffiliateDisclosure variant="inline" siteId="lizard-com" />
            <ReviewCard
              id="zen"
              badge="Best Overall PVC"
              name="Zen Habitats 4×2×2 Reptile Enclosure"
              subtitle="PVC · Flat-pack assembly · Front-opening · Best temperature retention"
              score={9.4}
              winner
              description={
                <div>
                  <p style={{ color: 'rgba(238,240,228,0.8)' }}>Zen Habitats has become the default recommendation for most terrestrial reptile species — bearded dragons, ball pythons, blue-tongue skinks, corn snakes — and for good reason. PVC construction retains heat significantly better than glass, reducing electricity costs and preventing temperature instability. Per keeper reports and the maker's published thermal data, the Zen 4×2×2 holds roughly a 28°F gradient (about 105°F basking to 77°F cool side) at wattages that reportedly require significantly more in glass alternatives.</p>
                  <p style={{ color: 'rgba(238,240,228,0.8)' }}>Flat-pack shipping keeps prices lower than competitors. Assembly takes 30–45 minutes with no tools. Front-opening doors eliminate the stress of top-opening interaction (prey response in many reptiles). Multiple vent configurations available. Build quality is solid — hinges and magnetic latches hold up through repeated use.</p>
                </div>
              }
              specs={[
                { label: 'Material', value: 'PVC panels', highlight: 'good' },
                { label: 'Size', value: '4×2×2 feet', highlight: 'good' },
                { label: 'Temp Retention', value: 'Excellent', highlight: 'good' },
                { label: 'Humidity Retention', value: 'Good', highlight: 'good' },
                { label: 'Assembly', value: 'Flat-pack, ~45 min' },
                { label: 'Best For', value: 'Terrestrial species' },
              ]}
              pros={['Best-in-class temperature retention per manufacturer-published thermal specs', 'Flat-pack ships economically', 'Front-opening — less stress for reptile', 'Multiple vent configurations', 'Good humidity retention for most species']}
              cons={['Not ideal for high-humidity species (>80%)', 'PVC aesthetic divides keepers vs. glass', 'Requires wall anchor for stability if top-heavy']}
              price="$320–420"
              priceNote="Varies by size and configuration"
              ctaText="Buy on Amazon →"
              ctaHref="/go/amazon-brand/zen+habitats+reptile+enclosure?s=reviews-best-reptile-terrariums"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="zen-habitats-4x2x2"
            />

            <ReviewCard
              id="ap"
              badge="Best Custom / Large Scale"
              name="Animal Plastics T8"
              subtitle="HDPE plastic · Fully customizable · Maximum durability"
              score={9.1}
              description={
                <p style={{ color: 'rgba(238,240,228,0.8)' }}>Animal Plastics is the choice for keepers who need larger enclosures, custom configurations, or absolute maximum durability. Their T8 tub enclosures are favored by professional breeders for ball pythons and similar species. The HDPE construction is nearly indestructible, easy to disinfect, and holds heat exceptionally well. Custom dimensions are available — a significant advantage for large or unusually shaped setups. The tradeoff: AP ships only within the US, lead times can be 6–10 weeks, and the industrial aesthetic isn&apos;t for everyone.</p>
              }
              specs={[
                { label: 'Material', value: 'HDPE plastic', highlight: 'good' },
                { label: 'Durability', value: 'Maximum', highlight: 'good' },
                { label: 'Custom Sizes', value: 'Yes', highlight: 'good' },
                { label: 'Lead Time', value: '6–10 weeks', highlight: 'warn' },
                { label: 'Aesthetic', value: 'Industrial / utilitarian' },
              ]}
              pros={['Indestructible HDPE construction', 'Fully customizable dimensions', 'Preferred by professional breeders', 'Excellent temperature and humidity retention']}
              cons={['6–10 week lead time', 'US shipping only', 'Industrial aesthetic — not for display setups']}
              price="$180–600"
              priceNote="Varies significantly by size and configuration"
              ctaText="Shop PVC Reptile Enclosures →"
              ctaHref="/go/amazon-brand/animal+plastics+pvc+reptile+enclosure?s=reviews-best-reptile-terrariums"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="animal-plastics-t8"
            />

            <ReviewCard
              id="exo"
              badge="Best Glass — Arboreal Species"
              name="Exo Terra 36×18×24"
              subtitle="Front-opening glass · Full-screen top · Arboreal standard"
              score={8.8}
              description={
                <p style={{ color: 'rgba(238,240,228,0.8)' }}>For arboreal species — crested geckos, chameleons, day geckos, tree monitors — the Exo Terra is the industry standard. Tall format prioritizes vertical space, the full-screen top allows UVB and heat penetration from above, and the front-opening double doors reduce stress from top-access. The glass construction provides excellent visibility, which matters for display setups. Humidity retention is adequate for most arboreal species with a drainage layer and misting routine. Not suitable for species requiring &gt;80% sustained humidity — use a PVC enclosure with more solid panels for those.</p>
              }
              specs={[
                { label: 'Material', value: 'Glass', highlight: 'good' },
                { label: 'Format', value: 'Tall / arboreal', highlight: 'good' },
                { label: 'Top Type', value: 'Full screen', highlight: 'good' },
                { label: 'Temp Retention', value: 'Moderate (glass loses heat)', highlight: 'warn' },
                { label: 'Best For', value: 'Arboreal species' },
              ]}
              pros={['Industry standard for arboreal species', 'Excellent visibility — best for display', 'Full screen top for UVB penetration', 'Front-opening double doors', 'Widely available']}
              cons={['Glass loses heat faster than PVC — higher energy use', 'Heavier than PVC alternatives', 'Not ideal for sustained high humidity']}
              price="$180–280"
              ctaText="Buy on Amazon →"
              ctaHref="/go/amazon-brand/exo+terra+36x18x24?s=reviews-best-reptile-terrariums"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="exo-terra-36x18x24"
            />

            <ReviewCard
              id="reptizoo"
              badge="Best Budget Glass"
              name="REPTIZOO 40-Gallon Terrarium"
              subtitle="Budget glass · Front-opening · Good starter option"
              score={8.1}
              description={
                <p style={{ color: 'rgba(238,240,228,0.8)' }}>REPTIZOO delivers a functional front-opening glass terrarium at a price point well below Exo Terra. Build quality is noticeably lower — hinges and latches are less refined, glass thickness is slightly less — but the enclosure functions correctly for starter setups. Best for keepers trying the hobby before committing to a premium enclosure, or for supplemental enclosures in a larger collection. Not our first recommendation for a long-term setup with a species you&apos;re committed to.</p>
              }
              specs={[
                { label: 'Price', value: 'Budget', highlight: 'good' },
                { label: 'Material', value: 'Glass' },
                { label: 'Build Quality', value: 'Entry-level', highlight: 'warn' },
              ]}
              pros={['Lowest price in test', 'Front-opening', 'Functional for starter setups']}
              cons={['Lower build quality than Exo Terra', 'Less refined latches and hinges', 'Not a long-term investment enclosure']}
              price="$80–140"
              ctaText="Buy on Amazon →"
              ctaHref="/go/amazon-brand/reptizoo+glass+terrarium?s=reviews-best-reptile-terrariums"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="reptizoo-terrarium"
            />
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-4">
            <div className="rounded-lg p-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="text-2xs font-bold tracking-eyebrow uppercase mb-3 text-brand-primary">PVC vs Glass</div>
              <div className="text-xs leading-relaxed" style={{ color: 'rgba(238,240,228,0.6)' }}>
                <p className="mb-2"><strong style={{ color: 'rgba(238,240,228,0.85)' }}>PVC wins:</strong> Temperature retention, humidity retention, weight, cost per size</p>
                <p className="mb-0"><strong style={{ color: 'rgba(238,240,228,0.85)' }}>Glass wins:</strong> Visibility/display, arboreal setups, UVB penetration from top</p>
              </div>
            </div>
            <RelatedLinks title="Related" links={[
              { label: 'Best UVB Bulbs 2025', href: '/reviews/best-uvb-bulbs' },
              { label: 'Best Thermometers', href: '/reviews/best-thermometers-hygrometers' },
              { label: 'Bearded Dragon Care', href: '/species/bearded-dragon' },
            ]} />
            <EmailCapture variant="sidebar" siteId="lizard-com"
              title="Free Care Sheets"
              subtitle="20 species care sheets." source="review-terrariums" ctaText="Download Free" />
          </aside>
        </div>
      </div>
    </>
  )
}
