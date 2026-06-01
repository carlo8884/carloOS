import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, SchemaScript, StockImage } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Pet Food Brand Evaluations | PetFood.com',
  description:
    'Independent evaluations of major pet food brands — corporate context, manufacturing, recall history, AAFCO posture, and WSAVA-aligned criteria.',
  path: '/brands',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://petfood.com/' },
    { name: 'Brands', url: 'https://petfood.com/brands' },
  ],
})


const BRANDS = [
  {
    slug: 'hills-vs-royal-canin',
    title: "Hill's vs Royal Canin",
    description:
      'Side-by-side reference comparison of the two largest veterinary therapeutic diet brands — Hill\'s Pet Nutrition (Colgate-Palmolive) and Royal Canin (Mars Petcare).',
  },
  {
    slug: 'blue-buffalo-evaluation',
    title: 'Blue Buffalo — An Independent Evaluation',
    description:
      'Five-dimension evaluation of Blue Buffalo: corporate history (General Mills 2018 acquisition), product lines, manufacturing, recall history, and the 2018 grain-free DCM listing.',
  },
  {
    slug: 'orijen-vs-acana-comparison',
    title: 'Orijen vs Acana',
    description:
      'Both Champion Petfoods (Mars 2022 acquisition) — comparing the premium and mid-tier lines on ingredients, sourcing, recall history, and price.',
  },
  {
    slug: 'purina-pro-plan-evaluation',
    title: 'Purina Pro Plan',
    description:
      'Five-dimension evaluation of the Nestle Purina premium line — research and nutritionist depth, feeding-trial substantiation, manufacturing, and recalls.',
  },
  {
    slug: 'taste-of-the-wild-evaluation',
    title: 'Taste of the Wild',
    description:
      'Grain-free, novel-protein line made by Diamond Pet Foods — the DCM question, manufacturing, and the 2012 Salmonella recall context.',
  },
  {
    slug: 'wellness-vs-merrick',
    title: 'Wellness vs Merrick',
    description:
      'Two natural-positioned premium brands now under large corporate ownership — formulation, AAFCO posture, manufacturing, and recall history.',
  },
  {
    slug: 'kirkland-signature-evaluation',
    title: 'Kirkland Signature',
    description:
      "Costco's store brand — a strong value proposition, the who-makes-it question, AAFCO posture, transparency limits, and recall exposure.",
  },
]

export default function BrandsHubPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Brand Evaluations
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
        >
          Pet Food Brands
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          Independent brand evaluations against the PetFood.com five-dimension rubric — corporate
          context, product lines, manufacturing footprint, AAFCO posture, and recall history.
          Never paid placement.
        </p>
      </div>

      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Brands</span>
      </nav>

      <div className="px-container-sm sm:px-container pt-12">
        <StockImage manifestKey="petfood-com:brands-hero" priority aspect="16:9" variant="wide" />
      </div>

      <div className="px-container-sm sm:px-container py-12">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 list-none p-0 max-w-content-wide">
          {BRANDS.map((b) => (
            <li key={b.slug}>
              <Link
                href={`/brands/${b.slug}`}
                className="block py-5 px-6 rounded-lg border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition"
              >
                <div className="font-display font-bold text-brand-dark text-lg mb-2 leading-tight">
                  {b.title}
                </div>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                  {b.description}
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
          source="brands-hub"
        />
      </section>
    </>
  </>
  )
}
