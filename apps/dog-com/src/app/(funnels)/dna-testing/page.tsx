import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildArticleSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
  AffiliateDisclosure,
  EmailCapture
} from '@carloOS/ui'
import { DNA_TESTS, BREED_DNA_RECOMMENDATIONS } from '../../data/dna-tests'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Best Pet DNA Tests 2026 — Embark vs Wisdom vs Basepaws',
  description:
    'Independent comparison of pet DNA tests. Markers, breed library, health screening, pricing.',
  path: '/dna-testing',
  type: 'article',
})

const schema = combineSchemas(
  buildArticleSchema({
    siteId: 'dog-com',
    title: 'Best Pet DNA Tests 2026',
    description:
      'Embark, Wisdom Panel, and Basepaws compared on marker count, breed library, and health screening.',
    url: 'https://dog.com/dna-testing',
    imageUrl: '',
    authorName: 'Dog.com Editorial',
    publishedAt: '2026-05-29T00:00:00Z',
    modifiedAt: '2026-05-29T00:00:00Z',
  }),
  buildBreadcrumbSchema([
    { name: 'Home', url: 'https://dog.com/' },
    { name: 'DNA Testing', url: 'https://dog.com/dna-testing' },
  ]),
)

export default function DnaTestingHub() {
  const ranked = [...DNA_TESTS].sort((a, b) => b.editorialScore - a.editorialScore)

  return (
    <>
      <AffiliateDisclosure variant="inline" siteId="dog-com" />
      <SchemaScript schema={schema} />

      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">
          🧬 Independent · Updated May 2026
        </span>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl"
          style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}
        >
          Best Pet DNA Tests 2026
        </h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
          Three credible options dominate the category — Embark, Wisdom Panel,
          and Basepaws. Each has trade-offs on marker depth, breed library,
          and screening scope. Pick by which question you want answered.
        </p>
      </div>

      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">
          Home
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid">DNA Testing</span>
      </nav>

      <div className="px-container sm:px-container-sm py-14 max-w-6xl mx-auto">
        <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5 mb-10">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            Picking the right test in 30 seconds
          </div>
          <ul className="text-sm text-brand-text-mid m-0 leading-relaxed space-y-1">
            <li>
              <strong>You want the deepest genetic analysis available:</strong>{' '}
              Embark (230,000+ markers, Cornell partnership)
            </li>
            <li>
              <strong>You want the broadest breed library or are on budget:</strong>{' '}
              Wisdom Panel (365+ breeds, 5M+ dog database)
            </li>
            <li>
              <strong>You're testing a cat:</strong> Basepaws (the only
              credible cat option, owned by Zoetis)
            </li>
          </ul>
        </div>

        {/* Cards */}
        <h2 className="font-display text-3xl font-bold tracking-tight mb-6">
          Top 3 pet DNA tests
        </h2>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {ranked.map((t) => (
            <div
              key={t.slug}
              className="border border-brand-border rounded-xl p-6 bg-white flex flex-col"
            >
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                {t.species.includes('dog') ? '🐕 ' : ''}{t.species.includes('cat') ? '🐈 ' : ''}
                Score: {t.editorialScore}/10
              </div>
              <h3 className="font-display text-xl font-bold mb-1">{t.name}</h3>
              <p className="text-sm text-brand-text-mid mb-4 flex-grow">{t.tagline}</p>

              <div className="border-t border-brand-border/40 pt-3 mb-4 text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-brand-text-light">Genetic markers</span>
                  <span className="font-semibold">{t.geneticMarkers.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-text-light">Breeds covered</span>
                  <span className="font-semibold">{t.breedsCovered}+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-text-light">Health conditions</span>
                  <span className="font-semibold">{t.healthConditionsScreened}+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-text-light">Database size</span>
                  <span className="font-semibold">{t.databaseSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-text-light">Price range</span>
                  <span className="font-semibold">
                    ${Math.min(...t.pricesUsd.map((p) => p.range[0]))}–${Math.max(...t.pricesUsd.map((p) => p.range[1]))}
                  </span>
                </div>
              </div>

              <a
              href={`/go/${t.vendor}/home?s=dna-testing-hub-${t.slug}
              rel="sponsored nofollow noopener" target="_blank" className="inline-block bg-brand-primary text-white px-4 py-2 rounded-lg font-semibold text-sm text-center no-underline hover:opacity-90 mb-2"
            >
              Shop {t.brand} →
            </a>
              <Link
                href={`/dna-testing/${t.slug}`}
                className="text-center text-brand-primary text-sm font-semibold no-underline hover:underline"
              >
                Read full review
              </Link>
            </div>
          ))}
        </div>

        <EmailCapture
          variant="section"
          siteId="dog-com"
          tag="dog-com:dna-test-comparison"
          title="Get our pet DNA test buyer's guide"
          subtitle="Side-by-side spreadsheet · which tests are best for which breeds · downloadable PDF."
          buttonText="Send the buyer's guide"
        />

        {/* Breed-specific landing */}
        <h2 className="font-display text-3xl font-bold tracking-tight mb-6 mt-12">
          DNA testing by breed
        </h2>
        <p className="text-sm text-brand-text-mid mb-6">
          Some breeds carry specific hereditary risks that DNA testing flags
          earlier than symptom onset. The right test for your dog depends on
          their breed's known genetic predispositions.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {Object.entries(BREED_DNA_RECOMMENDATIONS).map(([slug, b]) => (
            <Link
              key={slug}
              href={`/dna-testing/breeds/${slug}`}
              className="border border-brand-border rounded-xl p-5 hover:border-brand-primary transition no-underline"
            >
              <div className="font-display text-lg font-bold mb-1">{b.breedName}</div>
              <div className="text-xs text-brand-text-mid mb-2">
                {b.keyConditions.length} key hereditary conditions
              </div>
              <div className="text-xs text-brand-primary font-semibold">
                DNA test recommendations →
              </div>
            </Link>
          ))}
        </div>

        {/* Educational */}
        <h2 className="font-display text-2xl font-bold tracking-tight mb-6">
          What pet DNA testing actually tells you
        </h2>

        <div className="space-y-5 text-brand-text-dark mb-12">
          <div>
            <h3 className="font-display text-lg font-bold mb-2">
              Breed identification
            </h3>
            <p className="text-sm leading-relaxed">
              For mixed-breed dogs (the majority of dogs in U.S. households),
              DNA tests estimate the percentage breakdown across hundreds of
              breeds. Estimates are statistical — confidence is highest when
              the dog's ancestors are from breeds in the test's reference
              database, lower for rare or unrepresented breeds.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold mb-2">
              Hereditary health screening
            </h3>
            <p className="text-sm leading-relaxed">
              Tests screen for hundreds of known genetic mutations linked to
              breed-specific diseases — degenerative myelopathy in German
              Shepherds, PRA in poodles, hyperuricosuria in dalmatians,
              MDR1 in herding breeds. A "clear" result is a strong signal;
              an "at risk" or "carrier" result is informational, not
              diagnostic. Share results with your vet — don't act on them
              alone.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold mb-2">
              Drug sensitivity (MDR1)
            </h3>
            <p className="text-sm leading-relaxed">
              Multiple herding breeds (Aussies, Collies, Shelties, Old
              English Sheepdogs) carry a high frequency of the MDR1 mutation
              that affects how the dog metabolizes certain drugs including
              ivermectin, loperamide, and some chemotherapy agents. Knowing
              your dog's MDR1 status before a vet prescribes affected drugs
              is potentially lifesaving — this is one of the highest-impact
              outcomes from pet DNA testing.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold mb-2">
              What DNA testing does NOT tell you
            </h3>
            <p className="text-sm leading-relaxed">
              DNA tests cannot diagnose current illness, predict behavior
              with certainty, predict age of disease onset, or replace
              veterinary care. They are statistical genetic information that
              informs conversations — not a substitute for one. Pair
              hereditary findings with insurance enrollment <em>before</em>{' '}
              any symptoms manifest (pre-existing conditions are universally
              excluded by pet insurance carriers).
            </p>
            <p className="text-sm leading-relaxed mt-2">
              See our{' '}
              <Link href="/pet-insurance" className="text-brand-primary underline">
                pet insurance comparison
              </Link>{' '}
              for the insurance side of this question.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-6 mb-12">
          <h3 className="font-display text-xl font-bold mb-3">
            Ready to order?
          </h3>
          <div className="flex flex-wrap gap-3">
            <a
              href="/go/embark-vet/home?s=dna-testing-hub-bottom-embark"
              rel="sponsored nofollow noopener" target="_blank" className="inline-block bg-brand-primary text-white px-5 py-2 rounded-lg font-semibold no-underline hover:opacity-90"
            >
              Order Embark (dogs)
            </a>
            <a
              href="/go/wisdom-panel/home?s=dna-testing-hub-bottom-wisdom"
              rel="sponsored nofollow noopener" target="_blank" className="inline-block bg-brand-primary text-white px-5 py-2 rounded-lg font-semibold no-underline hover:opacity-90"
            >
              Order Wisdom Panel (dogs)
            </a>
            <a
              href="/go/basepaws/home?s=dna-testing-hub-bottom-basepaws"
              rel="sponsored nofollow noopener" target="_blank" className="inline-block bg-brand-primary text-white px-5 py-2 rounded-lg font-semibold no-underline hover:opacity-90"
            >
              Order Basepaws (cats)
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
