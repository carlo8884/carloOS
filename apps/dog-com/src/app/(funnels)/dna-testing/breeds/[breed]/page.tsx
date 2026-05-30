import type { Metadata } from 'next'
import Link from 'next/link'
import {
  notFound } from 'next/navigation'
import {
  buildMetadata,
  buildArticleSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
  AffiliateDisclosure,
  EmailCapture
} from '@carloOS/ui'
import {
  BREED_DNA_RECOMMENDATIONS,
  getDnaTestBySlug,
  DNA_TESTS,
} from '../../../../data/dna-tests'

export async function generateStaticParams() {
  return Object.keys(BREED_DNA_RECOMMENDATIONS).map((breed) => ({ breed }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ breed: string }>
}): Promise<Metadata> {
  const { breed } = await params
  const b = BREED_DNA_RECOMMENDATIONS[breed]
  if (!b) return {}
  return buildMetadata({
    siteId: 'dog-com',
    title: `${b.breedName} DNA Testing — Tests & Conditions to Screen | Dog.com`,
    description: `${b.breedName}s carry ${b.keyConditions.length} hereditary conditions worth screening. See which DNA test fits best.`,
    path: `/dna-testing/breeds/${breed}`,
    type: 'article',
  })
}

export default async function BreedDnaPage({
  params,
}: {
  params: Promise<{ breed: string }>
}) {
  const { breed } = await params
  const b = BREED_DNA_RECOMMENDATIONS[breed]
  if (!b) notFound()

  const recommendedTest = getDnaTestBySlug(b.bestTest)
  if (!recommendedTest) notFound()

  const alternates = DNA_TESTS.filter(
    (t) => t.slug !== recommendedTest.slug && t.species.includes('dog'),
  )

  const schema = combineSchemas(
    buildArticleSchema({
      siteId: 'dog-com',
      title: `${b.breedName} DNA Testing`,
      description: `Hereditary condition screening for ${b.breedName}s.`,
      url: `https://dog.com/dna-testing/breeds/${breed}`,
      imageUrl: '',
      authorName: 'Dog.com Editorial',
      publishedAt: '2026-05-29T00:00:00Z',
      modifiedAt: '2026-05-29T00:00:00Z',
    }),
    buildBreadcrumbSchema({ items: [
      { name: 'Home', url: 'https://dog.com/' },
      { name: 'DNA Testing', url: 'https://dog.com/dna-testing' },
      { name: `${b.breedName}`, url: `https://dog.com/dna-testing/breeds/${breed}` },
    ] }),
  )

  return (
    <>
      <AffiliateDisclosure variant="inline" siteId="dog-com" />
      <SchemaScript schema={schema} />

      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">
          🧬 Breed-specific guidance
        </span>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl"
          style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}
        >
          {b.breedName} DNA Testing
        </h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
          {b.note}
        </p>
      </div>

      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">
          Home
        </Link>
        <span>›</span>
        <Link href="/dna-testing" className="hover:text-brand-primary no-underline">
          DNA Testing
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid">{b.breedName}</span>
      </nav>

      <div className="px-container sm:px-container-sm py-14 max-w-4xl mx-auto">
        {/* Key hereditary conditions */}
        <h2 className="font-display text-2xl font-bold tracking-tight mb-6">
          Key hereditary conditions to screen
        </h2>
        <div className="border border-brand-border rounded-xl overflow-hidden mb-12">
          {b.keyConditions.map((c, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-5 py-3 border-b border-brand-border/30 last:border-b-0"
            >
              <span className="text-sm font-medium">{c.name}</span>
              <span
                className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  c.risk === 'high'
                    ? 'bg-red-50 text-red-700'
                    : 'bg-amber-50 text-amber-700'
                }`}
              >
                {c.risk === 'high' ? 'High risk' : 'Moderate risk'}
              </span>
            </div>
          ))}
        </div>

        {/* Recommended test */}
        <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            Our recommendation for {b.breedName}s
          </div>
          <h2 className="font-display text-2xl font-bold mb-2">
            {recommendedTest.name}
          </h2>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            {recommendedTest.tagline} Screens for{' '}
            {recommendedTest.healthConditionsScreened}+ hereditary conditions
            including the ones most relevant to {b.breedName}s.
          </p>
          <a
              href={`/go/${recommendedTest.vendor}/home?s=dna-testing-breed-${breed}`}
              rel="sponsored nofollow noopener" target="_blank" className="inline-block bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold no-underline hover:opacity-90"
            >
              Shop {recommendedTest.brand} →
            </a>
          <Link
            href={`/dna-testing/${recommendedTest.slug}`}
            className="inline-block ml-4 text-brand-primary font-semibold no-underline hover:underline"
          >
            Full review →
          </Link>
        </div>

        {/* Insurance pairing */}
        <h2 className="font-display text-2xl font-bold tracking-tight mb-4">
          Pair DNA testing with insurance — before symptoms appear
        </h2>
        <p className="text-sm text-brand-text-mid leading-relaxed mb-4">
          Hereditary conditions found by DNA testing are not yet
          "pre-existing" if the dog has no symptoms. Once symptoms manifest,
          every pet insurance carrier will exclude them. Enrolling{' '}
          <strong>before</strong> any symptoms is the only way to insure
          against hereditary conditions you know your dog is at risk for.
        </p>
        <Link
          href="/pet-insurance"
          className="inline-block bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold no-underline hover:opacity-90 mb-12"
        >
          See pet insurance options →
        </Link>

        {/* Alternates */}
        <h2 className="font-display text-2xl font-bold tracking-tight mb-6">
          Other DNA tests we considered
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {alternates.map((a) => (
            <Link
              key={a.slug}
              href={`/dna-testing/${a.slug}`}
              className="border border-brand-border rounded-xl p-5 hover:border-brand-primary transition no-underline"
            >
              <div className="font-display text-lg font-bold mb-1">{a.name}</div>
              <div className="text-sm text-brand-text-mid mb-2">{a.tagline}</div>
              <div className="text-xs text-brand-primary font-semibold">
                Score: {a.editorialScore}/10 →
              </div>
            </Link>
          ))}
        </div>

        <EmailCapture
          variant="section"
          siteId="dog-com"
          tag="dog-com:dna-test-comparison"
          title={`Get our ${b.breedName} hereditary conditions guide`}
          subtitle="What every owner should screen for, what each result means, and which tests catch what."
          buttonText="Send the guide"
        />
      </div>
    </>
  )
}
