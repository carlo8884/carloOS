import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, CrossPortfolioCard, DirectoryPlacesCta } from '@carloOS/ui'
import listings from '../../data/directory-listings.json'
import { PremiumMasthead } from '../../components/PremiumMasthead'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Tack & Gear Guides — Bits, Bridles, Girths, Boots & Helmets",
  description:
    "Equine tack and gear references: bits and bridles, girths and cinches, saddle pads, stirrups and safety, blanket weights, halters, leg boots, and helmets.",
  path: '/tack',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com/' },
    { name: "Tack", url: 'https://horses.com/tack' },
  ],
})

const ENTRIES = [
  {
    slug: "bits-guide",
    eyebrow: "Bitting",
    title: "Bits Explained",
    description:
      "How a bit works, snaffle vs curb action, mouthpieces, fit, and choosing humanely.",
  },
  {
    slug: "bridle-types",
    eyebrow: "Bitting",
    title: "Bridle Types",
    description:
      "Parts of a bridle, English and western and bitless options, nosebands, and fit.",
  },
  {
    slug: "martingales-and-breastplates",
    eyebrow: "Bitting",
    title: "Martingales and Breastplates",
    description:
      "Standing and running martingales, breastplates, fit, and use versus misuse.",
  },
  {
    slug: "girths-and-cinches",
    eyebrow: "Saddlery",
    title: "Girths and Cinches",
    description:
      "Types, materials, fit and tightening, and preventing girth galls and girthiness.",
  },
  {
    slug: "saddle-pads",
    eyebrow: "Saddlery",
    title: "Saddle Pads",
    description:
      "What pads do, English and western types, materials, and what a pad cannot fix.",
  },
  {
    slug: "stirrups-and-safety",
    eyebrow: "Rider safety",
    title: "Stirrups and Safety",
    description:
      "Sizing to the foot, safety stirrup designs, footwear, and avoiding being dragged.",
  },
  {
    slug: "helmet-guide",
    eyebrow: "Rider safety",
    title: "Helmet Guide",
    description:
      "Why helmets matter, safety standards, correct fit, when to replace, and helmet care.",
  },
  {
    slug: "boots-and-wraps",
    eyebrow: "Leg protection",
    title: "Boots and Wraps",
    description:
      "Brushing and tendon boots, bell boots, wraps and bandages, and the dangers of wrapping wrong.",
  },
  {
    slug: "blanket-weights",
    eyebrow: "Rugs",
    title: "Blanket Weights",
    description:
      "Turnout vs stable rugs, denier and fill explained, weight categories, coolers, and sheets.",
  },
  {
    slug: "halters-and-lead-ropes",
    eyebrow: "Handling",
    title: "Halters and Lead Ropes",
    description:
      "Halter types, rope vs flat, turnout halter dangers, lead ropes, and tying safely.",
  },
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Equine Tack and Gear Guides',
  numberOfItems: ENTRIES.length,
  itemListElement: ENTRIES.map((e, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: e.title,
    url: `https://horses.com/tack/${e.slug}`,
  })),
}

const schema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function TackHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      <PremiumMasthead
        manifestKey="horses-com:category-tack"
        eyebrow="Tack & Gear"
        title="Tack & Gear Guides"
        subtitle="Reference guides to the tack and gear horses wear and work in, focused on how each piece functions, how to fit it, and how to choose humanely and safely."
      />

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>&rsaquo;</span>
        <span className="text-brand-text-mid font-medium">Tack</span>
      </nav>

      <div className="px-container-sm sm:px-container py-12">
        <p className="text-sm text-brand-text-light mb-10 max-w-2xl">
          Tack references citing the Society of Master Saddlers, governing-body rulebooks, equestrian safety standards, and the equitation-science literature. They inform choices alongside a qualified instructor and saddle fitter.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 list-none p-0">
          {ENTRIES.map((entry) => (
            <li key={entry.slug}>
              <Link
                href={`/tack/${entry.slug}`}
                className="block py-5 px-6 rounded-lg border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition"
              >
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                  {entry.eyebrow}
                </div>
                <div className="font-display font-bold text-brand-dark text-lg mb-2 leading-tight">
                  {entry.title}
                </div>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                  {entry.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <DirectoryPlacesCta listings={listings} noun="licensed equine professionals" />
      <CrossPortfolioCard currentSite="horses-com" contentType="equipment" variant="footer" />
    </>
  )
}
