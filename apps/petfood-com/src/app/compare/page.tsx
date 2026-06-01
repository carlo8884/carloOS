import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Pet Food Type Comparisons — Reference Library | PetFood.com',
  description:
    'Even-handed comparisons of pet food formats and philosophies — wet vs dry, raw vs cooked, fresh vs kibble, grain-free vs grain-inclusive, and more.',
  path: '/compare',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://petfood.com/' },
    { name: 'Compare', url: 'https://petfood.com/compare' },
  ],
})


const COMPARE = [
  {
    slug: 'wet-vs-dry-food',
    title: 'Wet vs Dry Food',
    description:
      'Wet versus dry is the most common format question owners ask, and the honest answer is that it depends on the species and the individual.',
  },
  {
    slug: 'raw-vs-cooked-diets',
    title: 'Raw vs Cooked Diets',
    description:
      'Raw versus cooked is the most polarized comparison in pet nutrition, and the evidence is more one-sided than the debate suggests: the major veterinary bodies caution against raw...',
  },
  {
    slug: 'fresh-vs-kibble',
    title: 'Fresh vs Kibble',
    description:
      'Fresh, gently cooked, refrigerated pet food has grown into a major category positioned against kibble on the strength of minimal processing.',
  },
  {
    slug: 'grain-free-vs-grain-inclusive',
    title: 'Grain-Free vs Grain-Inclusive',
    description:
      'Grain-free became one of the best-selling positions in pet food on the strength of a claim — that grain is a common allergen and an inferior filler — that the evidence does not ...',
  },
  {
    slug: 'home-cooked-vs-commercial',
    title: 'Home-Cooked vs Commercial Diets',
    description:
      'Home-cooking for a pet is appealing and, done correctly, legitimate — but the evidence is unambiguous that most home-prepared recipes, including those from books and websites, a...',
  },
  {
    slug: 'kibble-vs-canned-for-cats',
    title: 'Kibble vs Canned for Cats',
    description:
      'For cats specifically, the wet-versus-dry question carries more weight than it does for dogs, because feline physiology amplifies the differences.',
  },
  {
    slug: 'freeze-dried-and-dehydrated',
    title: 'Freeze-Dried and Dehydrated Diets',
    description:
      'Freeze-dried and dehydrated diets occupy a middle ground between kibble and fresh or raw food — shelf-stable like kibble, but often minimally cooked or raw.',
  },
  {
    slug: 'prescription-vs-otc-diets',
    title: 'Prescription vs Over-the-Counter Diets',
    description:
      'Prescription (therapeutic) diets occupy a distinct regulatory and clinical space from over-the-counter foods, and the difference is more than marketing.',
  },
  {
    slug: 'breed-specific-diets',
    title: 'Breed-Specific Diets — Useful or Marketing?',
    description:
      'Breed-specific diets — a formula for the Labrador, another for the Persian — are a prominent premium category, and the honest answer to whether they are worth it is: sometimes.',
  },
]

export default function CompareHubPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Food-Type Comparisons
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
        >
          Food-Type Comparisons
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          Format-versus-format and philosophy-versus-philosophy comparisons, scored on the same evidence rubric rather than on marketing claims.
        </p>
      </div>

      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Compare</span>
      </nav>

      <div className="px-container-sm sm:px-container py-12">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 list-none p-0 max-w-content-wide">
          {COMPARE.map((i) => (
            <li key={i.slug}>
              <Link
                href={`/compare/${i.slug}`}
                className="block py-5 px-6 rounded-lg border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition"
              >
                <div className="font-display font-bold text-brand-dark text-lg mb-2 leading-tight">
                  {i.title}
                </div>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                  {i.description}
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
          source="compare-hub"
        />
      </section>
    </>
  </>
  )
}
