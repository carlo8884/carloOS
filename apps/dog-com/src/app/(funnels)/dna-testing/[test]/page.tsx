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
  EmailCapture,
  FAQAccordion
} from '@carloOS/ui'
import {
  DNA_TESTS,
  dnaTestSlugs,
  getDnaTestBySlug,
  type DnaTestProfile,
} from '../../../data/dna-tests'

export async function generateStaticParams() {
  return dnaTestSlugs().map((test) => ({ test }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ test: string }>
}): Promise<Metadata> {
  const { test } = await params
  const t = getDnaTestBySlug(test)
  if (!t) return {}
  return buildMetadata({
    siteId: 'dog-com',
    title: `${t.name} Review 2026 — Pros, Cons, and Who It's For | Dog.com`,
    description: `${t.tagline} See genetic marker count, breed coverage, health screening, pricing, and how ${t.brand} stacks up against alternatives.`,
    path: `/dna-testing/${t.slug}`,
    type: 'article',
  })
}

function FeatureRow({ ok, label }: { ok: boolean; label: string }) {
  return (
    <div className="flex items-center gap-3 py-2 border-b border-brand-border/30">
      <span
        className={`font-bold w-8 text-center ${ok ? 'text-emerald-600' : 'text-stone-400'}`}
      >
        {ok ? '✓' : '—'}
      </span>
      <span className="text-sm">{label}</span>
    </div>
  )
}

export default async function DnaTestPage({
  params,
}: {
  params: Promise<{ test: string }>
}) {
  const { test } = await params
  const t = getDnaTestBySlug(test)
  if (!t) notFound()

  const alternates = DNA_TESTS.filter((x) => x.slug !== t.slug).slice(0, 2)

  const schema = combineSchemas(
    buildArticleSchema({
      siteId: 'dog-com',
      title: `${t.name} Review 2026`,
      description: t.tagline,
      url: `https://dog.com/dna-testing/${t.slug}`,
      imageUrl: '',
      authorName: 'Dog.com Editorial',
      publishedAt: '2026-05-29T00:00:00Z',
      modifiedAt: '2026-05-29T00:00:00Z',
    }),
    buildBreadcrumbSchema([
      { name: 'Home', url: 'https://dog.com/' },
      { name: 'DNA Testing', url: 'https://dog.com/dna-testing' },
      { name: t.brand, url: `https://dog.com/dna-testing/${t.slug}` },
    ]),
  )

  const faqItems = [
    {
      question: `How accurate is ${t.brand}?`,
      answer: `${t.brand} analyzes ${t.geneticMarkers.toLocaleString()} genetic markers across ${t.breedsCovered}+ breeds. Breed estimates are statistical — confidence is highest when the dog's ancestors are well-represented in the reference database (${t.databaseSize}). Health condition screening is binary (clear / carrier / at risk) for specific known mutations, not predictive of disease onset.`,
    },
    {
      question: `How long do ${t.brand} results take?`,
      answer: `${t.resultsTime} from when the sample is received at the lab. Sample collection is ${t.saliva === 'cheek-swab' ? 'a cheek swab' : 'saliva'}; the kit ships with prepaid return postage.`,
    },
    {
      question: `Can I share ${t.brand} results with my vet?`,
      answer: t.vetSharing
        ? `Yes — ${t.brand} provides veterinary-formatted health condition reports that can be shared directly with your veterinarian or uploaded to most veterinary practice management systems.`
        : `${t.brand}'s results are designed for owner consumption; share by emailing the PDF to your vet.`,
    },
    {
      question: `Who owns ${t.brand}?`,
      answer: `${t.brand} is owned by ${t.ownedBy}${t.researchPartner ? ` and developed with research partnerships at ${t.researchPartner}` : ''}.`,
    },
  ]

  return (
    <>
      <AffiliateDisclosure variant="inline" siteId="dog-com" />
      <SchemaScript schema={schema} />

      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">
          🧬 Pet DNA Test Review · May 2026
        </span>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl"
          style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}
        >
          {t.name} Review 2026
        </h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
          {t.tagline}
        </p>
        <div className="mt-7">
          <a
              href={`/go/${t.vendor}/home?s=dna-test-${t.slug}
              rel="sponsored nofollow noopener" target="_blank" className="inline-block bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold no-underline hover:opacity-90"
            >
              Shop {t.brand} →
            </a>
        </div>
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
        <span className="text-brand-text-mid">{t.brand}</span>
      </nav>

      <div className="px-container sm:px-container-sm py-14 max-w-5xl mx-auto">
        <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5 mb-10">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            Editorial Score: {t.editorialScore}/10
          </div>
          <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
            <strong>{t.editorialNote}</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-brand-surface border border-brand-border rounded-xl p-6">
            <h2 className="font-display text-lg font-bold mb-3">Quick facts</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between border-b border-brand-border/30 pb-2">
                <span className="text-brand-text-mid">Species</span>
                <span className="font-semibold">
                  {t.species.map((s) => (s === 'dog' ? 'Dogs' : 'Cats')).join(', ')}
                </span>
              </div>
              <div className="flex justify-between border-b border-brand-border/30 pb-2">
                <span className="text-brand-text-mid">Genetic markers</span>
                <span className="font-semibold">{t.geneticMarkers.toLocaleString()}</span>
              </div>
              <div className="flex justify-between border-b border-brand-border/30 pb-2">
                <span className="text-brand-text-mid">Breeds covered</span>
                <span className="font-semibold">{t.breedsCovered}+</span>
              </div>
              <div className="flex justify-between border-b border-brand-border/30 pb-2">
                <span className="text-brand-text-mid">Health conditions</span>
                <span className="font-semibold">{t.healthConditionsScreened}+</span>
              </div>
              <div className="flex justify-between border-b border-brand-border/30 pb-2">
                <span className="text-brand-text-mid">Traits</span>
                <span className="font-semibold">{t.traits}</span>
              </div>
              <div className="flex justify-between border-b border-brand-border/30 pb-2">
                <span className="text-brand-text-mid">Database size</span>
                <span className="font-semibold">{t.databaseSize}</span>
              </div>
              <div className="flex justify-between border-b border-brand-border/30 pb-2">
                <span className="text-brand-text-mid">Results time</span>
                <span className="font-semibold">{t.resultsTime}</span>
              </div>
              <div className="flex justify-between border-b border-brand-border/30 pb-2">
                <span className="text-brand-text-mid">Sample type</span>
                <span className="font-semibold">{t.saliva === 'cheek-swab' ? 'Cheek swab' : 'Saliva'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-text-mid">Owned by</span>
                <span className="font-semibold text-right text-xs">{t.ownedBy}</span>
              </div>
            </div>
          </div>

          <div className="bg-brand-surface border border-brand-border rounded-xl p-6">
            <h2 className="font-display text-lg font-bold mb-3">Capabilities</h2>
            <div>
              <FeatureRow ok={t.ancestryBreakdown} label="Breed ancestry breakdown" />
              <FeatureRow ok={t.relativeFinder} label="Relative finder" />
              <FeatureRow ok={t.inbreedingCoefficient} label="Inbreeding coefficient" />
              <FeatureRow ok={t.predictedAdultWeight} label="Predicted adult weight" />
              <FeatureRow ok={t.lifeExpectancyEstimate} label="Life expectancy estimate" />
              <FeatureRow ok={t.drugSensitivity} label="Drug sensitivity (MDR1)" />
              <FeatureRow ok={t.vetSharing} label="Vet-shareable reports" />
              <FeatureRow ok={t.agingTest} label="Biological aging test" />
            </div>
          </div>
        </div>

        {/* Pricing */}
        <h2 className="font-display text-2xl font-bold tracking-tight mb-4">Pricing tiers</h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {t.pricesUsd.map((p) => (
            <div key={p.test} className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1">
                {p.test}
              </div>
              <div className="font-display text-2xl font-bold">
                ${p.range[0]}–${p.range[1]}
              </div>
            </div>
          ))}
        </div>

        {/* Pros / Cons */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div>
            <h3 className="font-display text-xl font-bold mb-3 text-emerald-700">Pros</h3>
            <ul className="space-y-2">
              {t.pros.map((p, i) => (
                <li key={i} className="flex gap-2 text-sm">
                  <span className="text-emerald-600 font-bold">+</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold mb-3 text-stone-700">Cons</h3>
            <ul className="space-y-2">
              {t.cons.map((p, i) => (
                <li key={i} className="flex gap-2 text-sm">
                  <span className="text-stone-500 font-bold">−</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Best for / Not ideal for */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
            <h3 className="font-display text-lg font-bold mb-3 text-emerald-900">Best for</h3>
            <ul className="space-y-2 text-sm">
              {t.bestFor.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-emerald-700 font-bold">✓</span>
                  <span className="text-emerald-900">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h3 className="font-display text-lg font-bold mb-3 text-amber-900">Not ideal for</h3>
            <ul className="space-y-2 text-sm">
              {t.notIdealFor.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-amber-700 font-bold">!</span>
                  <span className="text-amber-900">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-6 mb-12">
          <h3 className="font-display text-xl font-bold mb-3">Ready to order?</h3>
          <a
              href={`/go/${t.vendor}/home?s=dna-test-${t.slug}
              rel="sponsored nofollow noopener" target="_blank" className="inline-block bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold no-underline hover:opacity-90"
            >
              Shop {t.brand} →
            </a>
        </div>

        {/* FAQ */}
        <h2 className="font-display text-2xl font-bold mb-6">Frequently asked</h2>
        <FAQAccordion items={faqItems} />

        {/* Alternates */}
        <h2 className="font-display text-2xl font-bold mb-6 mt-12">
          Compare with other DNA tests
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {alternates.map((a: DnaTestProfile) => (
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
          title="Get the full DNA test buyer's guide"
          subtitle="All 3 tests compared. Which test for which breed. Free PDF."
          buttonText="Send the guide"
        />
      </div>
    </>
  )
}
