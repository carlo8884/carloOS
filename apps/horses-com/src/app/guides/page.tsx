import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, CrossPortfolioCard, DirectoryPlacesCta, ShopCtas } from '@carloOS/ui'
import listings from '../../data/directory-listings.json'
import { PremiumMasthead } from '../../components/PremiumMasthead'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Equine Guides — Saddle Fit, Dental Care & Vaccinations | Horses.com',
  description:
    'Three equine owner guides: saddle fit basics, dental care, and AAEP core and risk-based vaccination schedules — cited from primary veterinary sources.',
  path: '/guides',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com/' },
    { name: 'Guides', url: 'https://horses.com/guides' },
  ],
})

const GUIDES = [
  {
    slug: 'saddle-fit-basics',
    eyebrow: 'Equipment',
    title: 'Saddle Fit Basics',
    description:
      'A 12-point framework for assessing saddle fit on the horse — tree width, panel contact, channel clearance, balance, and the ridden check.',
  },
  {
    slug: 'equine-dental-care',
    eyebrow: 'Preventive care',
    title: 'Equine Dental Care',
    description:
      'Floating, wolf teeth, EOTRH, annual exam timing, and what to expect from a dental exam under sedation.',
  },
  {
    slug: 'equine-vaccination-schedule',
    eyebrow: 'Preventive care',
    title: 'Vaccination Schedule',
    description:
      'AAEP core vaccines (EWT, rabies, WNV, EEV/WEV) and risk-based vaccines (flu, rhino, strangles, Potomac fever) — timing, boosters, and geographic considerations.',
  },
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Equine Owner Guides',
  numberOfItems: GUIDES.length,
  itemListElement: GUIDES.map((g, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: g.title,
    url: `https://horses.com/guides/${g.slug}`,
  })),
}

const schema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function GuidesHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* Hero — image-first masthead (photo behind the title band) */}
      <PremiumMasthead
        manifestKey="horses-com:category-guides"
        eyebrow="Owner Guides"
        title="Equine Guides"
        subtitle="Practical owner guides on saddle fitting, preventive dental care, and vaccination schedules — each citing AAEP guidelines, veterinary clinical literature, and Society of Master Saddlers criteria."
      />

      {/* Breadcrumb */}
      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Guides</span>
      </nav>

      {/* Content */}
      <div className="px-container-sm sm:px-container py-12">
        <p className="text-sm text-brand-text-light mb-10 max-w-2xl">Three owner guides citing AAEP guidelines, veterinary clinical literature, and Society of Master Saddlers criteria. None of these replace a veterinarian, a qualified saddle fitter, or a dental practitioner</p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 list-none p-0">
          {GUIDES.map((g) => (
            <li key={g.slug}>
              <Link
                href={`/guides/${g.slug}`}
                className="block py-5 px-6 rounded-lg border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition"
              >
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                  {g.eyebrow}
                </div>
                <div className="font-display font-bold text-brand-dark text-lg mb-2 leading-tight">
                  {g.title}
                </div>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                  {g.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mt-12 mb-4 max-w-content-wide">
          Guides-hub barn kit
        </h2>

        <div className="max-w-content-wide mt-6">
          <AffiliateDisclosure variant="inline" siteId="horses-com" />
        </div>

        {/* Money path — live amazon-brand search hops
            (laminated horse barn owner-guides chart /
            horse stall-door owner-guides card /
            equine owner-guides reference handbook).
            Educational barn searches only; no Rx /
            vaccine ASIN hops. ShopCtas hides empty
            Chewy; never href="#" or PLACEHOLDER.
            Unused vs #1126
            laminated+horse+barn+daily+care+chart /
            horse+stall+door+care+card /
            equine+husbandry+reference+handbook, #1125
            laminated+horse+barn+emergency+triage+chart /
            horse+stall+door+vital+signs+card /
            equine+health+reference+handbook, #1124
            laminated+horse+barn+forage+first+chart /
            horse+stall+door+ration+card /
            equine+nutrition+reference+handbook, #1123
            laminated+horse+barn+treat+safety+chart /
            lidded+horse+barn+treat+tote /
            horse+barn+treat+prep+shears, guide children
            horse+saddle+pad / horse+sheepskin+half+pad /
            horse+saddle+shims / horse+girth+cinch /
            horse+hay+cubes / horse+mash /
            horse+stall+fan / horse+stall+screen. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-content-wide">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop related supplies
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">Amazon search links go to general supplies. They are not a ranked product list and they do not replace veterinary care.</p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+supplies?s=guides-hub"
              amazonLabel="Shop on Amazon"
            />
          </div>
        </div>
      </div>

      <DirectoryPlacesCta listings={listings} noun="licensed equine professionals" />
      <CrossPortfolioCard currentSite="horses-com" contentType="guide" variant="footer" />
    </>
  )
}
