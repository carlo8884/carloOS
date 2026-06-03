import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, combineSchemas, SchemaScript, StockImage } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Pet Food Foundational Guides | PetFood.com',
  description:
    'Foundational pet food guides — AAFCO completeness, reading labels, our scoring methodology, raw-diet evaluation, recalls, and choosing a food.',
  path: '/guides',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://petfood.com/' },
    { name: 'Guides', url: 'https://petfood.com/guides' },
  ],
})


const GUIDES = [
  {
    slug: 'methodology',
    title: 'Our Scoring Methodology',
    description:
      'The five-dimension rubric every brand and formula on this site runs through — published, versioned, and binding.',
  },
  {
    slug: 'aafco-completeness-explained',
    title: 'AAFCO Completeness Explained',
    description:
      'How nutritional adequacy statements work — formulation vs feeding trial, life-stage categories, and what AAFCO does not verify.',
  },
  {
    slug: 'reading-pet-food-labels',
    title: 'Reading a Pet Food Label',
    description:
      'The five label panels — product-name rules, guaranteed analysis, ingredient list, AAFCO statement, and feeding directions.',
  },
  {
    slug: 'raw-pet-food-evaluation',
    title: 'Evaluating Raw Pet Food',
    description:
      'Commercial vs home-prepared raw, HPP, pathogen risk, the veterinary consensus, and a harm-reduction framework.',
  },
  {
    slug: 'how-to-choose-a-pet-food',
    title: 'How to Choose a Pet Food',
    description:
      'A practical framework — AAFCO substantiation, the WSAVA questions, manufacturer transparency, life-stage match, and ignoring marketing.',
  },
  {
    slug: 'pet-food-recalls-and-fda',
    title: 'Pet Food Recalls and the FDA',
    description:
      'How recalls work, the FDA CVM role, common causes (pathogens, vitamin D, aflatoxin), and how to check the database.',
  },
  {
    slug: 'dental-health-and-nutrition',
    title: 'Dental Health and Nutrition',
    description:
      'Whether food cleans teeth, what dental diets and the VOHC seal do, and how nutrition fits into real dental care.',
  },
  {
    slug: 'pet-obesity-epidemic',
    title: 'The Pet Obesity Epidemic',
    description:
      'How widespread pet obesity is, why it shortens lifespan, the causes, and the evidence that lean pets live longer.',
  },
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Pet Food Foundational Guides',
  numberOfItems: GUIDES.length,
  itemListElement: GUIDES.map((g, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: g.title,
    url: `https://petfood.com/guides/${g.slug}`,
  })),
}

const petfoodGuidesSchema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function GuidesHubPage() {
  return (
    <>
      <SchemaScript schema={petfoodGuidesSchema} />
      <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Foundational Guides
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
        >
          Pet Food Guides
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          The foundational references that anchor everything else on this site — how to read a
          label, how AAFCO completeness works, how we score, and how to choose and feed well.
        </p>
      </div>

      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Guides</span>
      </nav>

      <div className="px-container-sm sm:px-container pt-8">
        <StockImage manifestKey="petfood-com:guides-hero" aspect="16:9" variant="wide" priority />
      </div>

      <div className="px-container-sm sm:px-container py-12">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 list-none p-0 max-w-content-wide">
          {GUIDES.map((g) => (
            <li key={g.slug}>
              <Link
                href={`/guides/${g.slug}`}
                className="block py-5 px-6 rounded-lg border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition"
              >
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
      </div>

      <section
        className="px-container-sm sm:px-container py-12"
        style={{ background: 'var(--brand-primary-pale)' }}
      >
        <EmailCapture
          variant="section"
          siteId="petfood-com"
          title="Free Label Decoder"
          subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
          source="guides-hub"
        />
      </section>
    </>
  </>
  )
}
