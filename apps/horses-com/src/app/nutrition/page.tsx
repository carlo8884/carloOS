import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, CrossPortfolioCard, ShopCtas } from '@carloOS/ui'
import { PremiumMasthead } from '../../components/PremiumMasthead'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Equine Nutrition — Forage, Feeds, Water, and Feeding for the Job",
  description:
    "Equine nutrition references: forage-first feeding, hay types, feeding easy and hard keepers, grain, water, ration balancers, seniors, and performance.",
  path: '/nutrition',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com/' },
    { name: "Nutrition", url: 'https://horses.com/nutrition' },
  ],
})

const ENTRIES = [
  {
    slug: "forage-basics",
    eyebrow: "Foundations",
    title: "Forage Basics",
    description:
      "Why fiber comes first, how the hindgut works, how much forage a horse needs, and trickle feeding.",
  },
  {
    slug: "hay-types",
    eyebrow: "Foundations",
    title: "Hay Types Compared",
    description:
      "Grass, legume, and mixed hays, judging quality, and matching hay to the horse.",
  },
  {
    slug: "grain-and-concentrates",
    eyebrow: "Concentrates",
    title: "Grain and Concentrates",
    description:
      "When concentrates are needed, why big grain meals are risky, and safe feeding rules.",
  },
  {
    slug: "ration-balancers",
    eyebrow: "Concentrates",
    title: "Ration Balancers",
    description:
      "Filling nutritional gaps without calories, who benefits most, and balancer vs regular feed.",
  },
  {
    slug: "beet-pulp",
    eyebrow: "Feeds",
    title: "Beet Pulp Explained",
    description:
      "The super-fiber benefits, why and how to soak it, who it suits, and common myths.",
  },
  {
    slug: "feeding-the-easy-keeper",
    eyebrow: "By type",
    title: "Feeding the Easy Keeper",
    description:
      "Weight control without starvation, controlling sugar, slow feeding, and avoiding laminitis.",
  },
  {
    slug: "feeding-the-hard-keeper",
    eyebrow: "By type",
    title: "Feeding the Hard Keeper",
    description:
      "Ruling out causes, maximizing forage, and adding calories safely with fat and fiber.",
  },
  {
    slug: "feeding-senior-horses",
    eyebrow: "By type",
    title: "Feeding Senior Horses",
    description:
      "Dental decline, senior feeds and hay replacers, protein, and dealing with PPID.",
  },
  {
    slug: "feeding-the-performance-horse",
    eyebrow: "By type",
    title: "Feeding the Performance Horse",
    description:
      "Matching energy to work, energy sources, feeding around work, and avoiding problems.",
  },
  {
    slug: "water-requirements",
    eyebrow: "Water",
    title: "Water Requirements",
    description:
      "How much horses drink, what drives intake up, the link to colic, and encouraging drinking.",
  },
  {
    slug: "salt-and-electrolytes",
    eyebrow: "Water",
    title: "Salt and Electrolytes",
    description:
      "Why every horse needs daily salt, replacing salty sweat, and using electrolytes safely.",
  },
  {
    slug: "toxic-plants",
    eyebrow: "Safety",
    title: "Toxic Plants for Horses",
    description:
      "The most dangerous plants and trees, how poisoning happens, signs, and prevention.",
  },
  {
    slug: "can-horses-eat",
    eyebrow: "Safety",
    title: "Can Horses Eat…? (A–Z)",
    description:
      "Safe, caution, and toxic verdicts for common treats and hazards — apples, carrots, chocolate, avocado, grass clippings, and more.",
  },
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Equine Nutrition Reference Guides',
  numberOfItems: ENTRIES.length,
  itemListElement: ENTRIES.map((e, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: e.title,
    url: `https://horses.com/nutrition/${e.slug}`,
  })),
}

const schema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function NutritionHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      <PremiumMasthead
        manifestKey="horses-com:category-nutrition"
        eyebrow="Equine Nutrition"
        title="Equine Nutrition"
        subtitle="Evidence-led references on feeding horses well, built on the forage-first principle and tuned to the individual horse and its job."
      />

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>&rsaquo;</span>
        <span className="text-brand-text-mid font-medium">Nutrition</span>
      </nav>

      <div className="px-container-sm sm:px-container py-12">
        <p className="text-sm text-brand-text-light mb-10 max-w-2xl">Nutrition references grounded in the NRC Nutrient Requirements of Horses, the Equine Endocrinology Group, and the equine clinical-nutrition literature. None of these replace a veterinarian or qualified equine nutritionist</p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 list-none p-0">
          {ENTRIES.map((entry) => (
            <li key={entry.slug}>
              <Link
                href={`/nutrition/${entry.slug}`}
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

        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mt-12 mb-4 max-w-content-wide">
          Nutrition-hub barn kit
        </h2>

        <div className="max-w-content-wide mt-6">
          <AffiliateDisclosure variant="inline" siteId="horses-com" />
        </div>

        {/* Money path — live amazon-brand search hops
            (laminated horse barn forage-first chart /
            horse stall-door ration card /
            equine nutrition reference handbook).
            Educational barn searches only; no Rx /
            vaccine ASIN hops. ShopCtas hides empty
            Chewy; never href="#" or PLACEHOLDER.
            Unused vs #1123
            laminated+horse+barn+treat+safety+chart /
            lidded+horse+barn+treat+tote /
            horse+barn+treat+prep+shears, #1122
            airtight+labeled+horse+treat+canister /
            nonslip+horse+barn+cutting+board /
            nylon+horse+waist+treat+pouch, #1121
            fine+mesh+horse+feed+colander /
            long+handled+horse+feed+mixing+paddle /
            silicone+horse+feed+tub+scraper, #1120
            compact+digital+gram+scale+horse+feed /
            molasses+free+chaff+horse /
            small+rubber+horse+mixing+pan, #1119
            horse+alfalfa+cubes /
            soy+hull+pellets+horse+feed /
            over+door+horse+feed+bucket, #1118
            portable+horse+hay+flake+scale /
            horse+hay+soaking+tub /
            low+sugar+horse+treats, #1117
            nylon+horse+hay+bag /
            horse+feed+grade+vegetable+oil /
            marked+horse+grain+scoop, #1116
            horse+chopped+forage /
            horse+feed+soaking+tub /
            horse+corner+feeder, #1115
            equine+toxic+plant+identification+field+guide /
            horse+pasture+walk+weed+identification+handbook /
            horse+paddock+tree+guard+fencing, #1114
            flat+back+horse+water+bucket /
            heated+horse+water+bucket /
            electrolyte+for+horses, #1113
            orchard+grass+hay+horse /
            alfalfa+hay+bales+horse /
            timothy+alfalfa+mixed+hay+horse, #1112
            tabletop+digital+horse+grain+scale /
            stackable+rubber+horse+feed+tubs /
            rodent+proof+metal+horse+feed+bin, #1111
            horse+hay+probe+moisture+tester /
            equine+hay+core+sampler /
            wall+mounted+horse+hay+rack, #1110
            plain+white+horse+salt+block /
            salt+first+horse+electrolyte+powder /
            wide+mouth+horse+water+bucket. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-content-wide">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop related supplies
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">Amazon search links go to general supplies. They are not a ranked product list and they do not replace veterinary care.</p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+supplies?s=nutrition-hub"
              amazonLabel="Shop on Amazon"
            />
          </div>
        </div>
      </div>

      <CrossPortfolioCard currentSite="horses-com" contentType="nutrition" variant="footer" />
    </>
  )
}
