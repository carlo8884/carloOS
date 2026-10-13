import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, StockImage, FAQAccordion, ArticleSourcesList, LastUpdated } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Breed-Specific Health Guides | Vets.co',
  description: 'Health concerns, screening recommendations, and care guidance by breed. Sourced from cited veterinary references.',
  path: '/breeds',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://vets.co/' },
    { name: 'Breeds', url: 'https://vets.co/breeds' },
  ],
})

const FAQS = [
  { question: 'Why do breeds have different health concerns?', answer: 'Each breed has its own inherited health issues. The OFA\'s Canine Health Information Center (CHIC) works with breed parent clubs to identify the inherited diseases of greatest concern in each breed and the screening tests available for them.' },
  { question: 'What health tests should I ask a breeder about?', answer: 'Ask whether the parents were screened for every test their breed\'s parent club recommends. A dog earns a CHIC number when all of those tests were done and the results made public; the number does not mean every result was normal, so ask to see the results too.' },
  { question: 'Does health testing guarantee a healthy puppy?', answer: 'No. The OFA says there are no guarantees for diseases screened by physical evaluation, but the chance that a dog develops an inherited disease is reduced when its ancestry has tested normal.' },
  { question: 'Does breed affect pet insurance?', answer: 'Yes. Breed is one of the factors that set the price of a policy, and most insurers exclude hereditary or congenital conditions, so read how a policy treats your breed\'s common conditions (NAIC).' },
]

const BREEDS = [
  { name: 'Labrador Retriever', slug: 'labrador-health', desc: 'Hip dysplasia, exercise-induced collapse, obesity risk.' },
  { name: 'Golden Retriever', slug: 'golden-retriever-health', desc: 'Cancer risk, hip & elbow dysplasia, hypothyroidism.' },
  { name: 'German Shepherd', slug: 'german-shepherd-health', desc: 'Hip dysplasia, degenerative myelopathy, bloat risk.' },
  { name: 'French Bulldog', slug: 'french-bulldog-health', desc: 'Brachycephalic syndrome, IVDD, heat sensitivity.' },
  { name: 'Beagle', slug: 'beagle-health', desc: 'Epilepsy, hypothyroidism, intervertebral disc disease.' },
  { name: 'Yorkshire Terrier', slug: 'yorkshire-terrier-health', desc: 'Tracheal collapse, dental disease, portosystemic shunts.' },
  { name: 'Chihuahua', slug: 'chihuahua-health', desc: 'Patellar luxation, hydrocephalus, dental disease.' },
  { name: 'Siberian Husky', slug: 'husky-health', desc: 'Hereditary eye conditions, hip dysplasia, zinc-responsive dermatosis.' },
  { name: 'Pomeranian', slug: 'pomeranian-health', desc: 'Tracheal collapse, alopecia X, patellar luxation.' },
]

// ItemList of the breed health guides — structured, citable index of the
// breed-health cluster for AI Overviews / Perplexity (GEO authority signal).
const breedListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Breed-Specific Health Guides at Vets.co',
  numberOfItems: BREEDS.length,
  itemListElement: BREEDS.map((b, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: b.name,
    url: `https://vets.co/breeds/${b.slug}`,
  })),
}

const schema = combineSchemas(breadcrumbSchema, breedListSchema)

export default function BreedsHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-5">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Breed Health</span>
        </div>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-4" style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
          Breed-Specific Health Guides
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          The health concerns, screening tests, and preventive care that matter most for each breed — anchored in veterinary references and breed-club standards.
        </p>
      </div>

      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="inline-flex min-h-6 items-center hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Breeds</span>
      </nav>

      <div className="px-container-sm sm:px-container pt-12">
        <StockImage manifestKey="vets-co:category-breeds" aspect="16:9" variant="wide" priority />
      </div>

      <div className="px-container-sm sm:px-container pt-12 max-w-container-wide mx-auto">
        <LastUpdated date="2026-10-13" />
        <div className="rounded-lg border-l-4 border-brand-primary bg-brand-surface p-5 mt-4 max-w-3xl" data-testid="short-answer">
          <h2 className="font-display text-lg font-bold mb-2">The short answer</h2>
          <p className="text-base leading-relaxed text-brand-text-mid m-0">
            Each breed has its own inherited health concerns, and breed parent clubs recommend screening tests for them through the OFA&apos;s CHIC program (<a href="https://ofa.org/chic-programs/">OFA</a>). Before you buy, ask whether the parents completed their breed&apos;s recommended screenings and see the results. Breed also affects insurance: most insurers exclude hereditary or congenital conditions (<a href="https://content.naic.org/insurance-topics/pet-insurance">NAIC</a>). Each guide below covers one breed&apos;s common conditions and preventive care.
          </p>
        </div>
      </div>

      <div className="px-container-sm sm:px-container py-14 max-w-container-wide mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {BREEDS.map((breed) => (
            <Link
              key={breed.slug}
              href={`/breeds/${breed.slug}`}
              className="block bg-brand-white border border-brand-border rounded-lg p-5 no-underline hover:border-brand-primary hover:shadow-card transition-all duration-200"
            >
              <div className="font-display font-bold text-brand-dark text-base mb-1.5 leading-tight">{breed.name}</div>
              <div className="text-xs text-brand-text-light leading-relaxed">{breed.desc}</div>
            </Link>
          ))}
        </div>
      </div>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-content-wide pt-8">
          <h2 id="faq" className="font-display text-xl font-bold text-brand-dark mb-4">Breed health FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />
          <ArticleSourcesList title="Sources" sources={[
            { label: 'CHIC Program (Canine Health Information Center)', url: 'https://ofa.org/chic-programs/', publisher: 'Orthopedic Foundation for Animals' },
            { label: 'Pet Insurance (consumer topic page)', url: 'https://content.naic.org/insurance-topics/pet-insurance', publisher: 'NAIC' },
          ]} />
        </div>
      </section>

    </>
  </>
  )
}
