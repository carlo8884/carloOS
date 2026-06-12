import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildArticleSchema,
  buildFAQSchema,
  combineSchemas,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
  ArticleSourcesList,
  ArticleByline,
  AffiliateDisclosure,
  StockImage
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Kibble vs Canned Food for Cats — The Feline Case | PetFood.com',
  description:
    'Why wet vs dry is sharper for cats — obligate-carnivore physiology, hydration, carbohydrate, weight, and urinary health often favor wet food.',
  path: '/compare/kibble-vs-canned-for-cats',
  type: 'article',
})

const SOURCES = [
    {
      label: "AAFCO Official Publication — Dog and Cat Food Nutrient Profiles (Ch. 4); Model Regulations for Pet Food (Ch. 6)",
      url: "https://www.aafco.org/resources/publications/",
      publisher: "Association of American Feed Control Officials, 2025",
    },
    {
      label: "Nutrient Requirements of Dogs and Cats",
      url: "https://nap.nationalacademies.org/catalog/10668/nutrient-requirements-of-dogs-and-cats",
      publisher: "National Research Council, National Academies Press, 2006",
    },
    {
      label: "WSAVA Global Nutrition Guidelines and Recommendations on Selecting Pet Foods",
      url: "https://wsava.org/committees/global-nutrition-committee/",
      publisher: "World Small Animal Veterinary Association Global Nutrition Committee",
    },
]
const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Kibble vs Canned Food for Cats — The Feline Case | PetFood.com',
  description:
    'Why the wet-vs-dry question is sharper for cats — obligate-carnivore physiology, hydration, carbohydrate, weight, and urinary health all favor wet for many cats.',
  url: 'https://petfood.com/compare/kibble-vs-canned-for-cats',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',

  citation: SOURCES,
})

// Content-aware FAQ derived from the sections below — calibrated, sourced-tone
// answers only (QC §1: no clinical claims, no superlatives).
const FAQ = [
  {
    question: 'Is canned food better than kibble for cats?',
    answer:
      'For many cats, canned food offers real advantages in hydration, carbohydrate, weight control, and urinary health, and is often the better default — especially for cats prone to obesity, diabetes, or urinary disease. Dry food remains acceptable for healthy cats when used with measured feeding and good water access, and a wet-and-dry combination is a reasonable middle ground.',
  },
  {
    question: 'Why does moisture matter so much for cats?',
    answer:
      'Cats evolved to obtain most of their water from food and have a weak thirst drive, so cats on dry food often run chronically under-hydrated and produce concentrated urine. The increased water in canned food supports kidney and urinary health — both common problem areas in cats — and is the single strongest feline argument for wet food.',
  },
  {
    question: 'Can canned food help a diabetic cat?',
    answer:
      'Low-carbohydrate diets — typically canned — improve glycemic control and can support diabetic remission in cats, and high-carbohydrate dry diets are implicated in feline obesity and diabetes. A cat with diagnosed diabetes needs its diet set and monitored by a veterinarian rather than self-selected.',
  },
  {
    question: 'Is dry food bad for cats?',
    answer:
      'Not categorically. Dry food is acceptable for healthy cats with measured feeding and good water access, and it is cheaper and more convenient. The caution is population-level: modern indoor cats fed dry food face higher rates of obesity, diabetes, and urinary disease — problems to which diet format contributes — so the choice should weigh the individual cat’s health risks.',
  },
]

const pageSchema = combineSchemas(schema, buildFAQSchema({ questions: FAQ }))


export default function KibbleVsCannedForCatsPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Kibble vs Canned for Cats',
        subtitle:
          'For cats specifically, the wet-versus-dry question carries more weight than it does for dogs, because feline physiology amplifies the differences. Obligate-carnivore metabolism, a weak thirst drive, and a tendency toward obesity, diabetes, and urinary disease all tilt the balance toward canned food for many cats. This page makes the feline-specific case.',
        category: 'Food-Type Comparison',
        publishedAt: 'May 2026',
        readTime: '10 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Compare', href: '/compare' },
        { name: 'Kibble vs Canned for Cats', href: '/compare/kibble-vs-canned-for-cats' },
      ]}
      relatedLinks={[
        { title: 'Compare Hub', href: '/compare' },
        { title: 'Wet vs Dry Food', href: '/compare/wet-vs-dry-food' },
        { title: 'Grain-Free vs Grain-Inclusive', href: '/compare/grain-free-vs-grain-inclusive' },
        { title: 'Fresh vs Kibble', href: '/compare/fresh-vs-kibble' },
      ]}
      schema={pageSchema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Why Cats Are Different', href: '#different' },
              { label: 'Hydration', href: '#hydration' },
              { label: 'Carbohydrate and Diabetes', href: '#carbdiabetes' },
              { label: 'Weight Control', href: '#weight' },
              { label: 'Urinary Health', href: '#urinary' },
              { label: 'The Practical Verdict', href: '#verdict' },
              { label: 'Common Questions', href: '#faq' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Wet vs Dry Food', href: '/compare/wet-vs-dry-food' },
              { label: 'Dog vs Cat Nutrition', href: '/species/dog-vs-cat-nutrition-overview' },
              { label: 'Urinary and Bladder Stone Diets', href: '/diets/urinary-tract-diets' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="kibble-vs-canned-for-cats"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
        <StockImage manifestKey="petfood-com:compare-kibble-vs-canned-for-cats" fallbackKey="petfood-com:compare-hero" priority aspect="16:9" variant="wide" caption="Kibble versus canned for cats — how feline physiology sharpens the wet-versus-dry question." />
        <p>The general wet-versus-dry comparison applies to cats, but several feline traits sharpen it. Cats are obligate carnivores adapted to a high-moisture, high-protein, low-carbohydrate prey diet, and they have a weak thirst drive. Modern indoor cats fed dry food face higher rates of obesity, diabetes, and urinary disease — problems to which diet format contributes. For many cats, canned food addresses several of these at once. See <a href="/species/dog-vs-cat-nutrition-overview">Dog vs Cat Nutrition</a>.</p>

        <div style={{ margin: '24px 0', padding: '18px 20px', borderRadius: '12px', border: '1px solid var(--brand-border)', borderLeft: '4px solid var(--brand-primary)', background: 'var(--brand-surface)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--brand-primary-dark)', marginBottom: '8px' }}>Bottom Line</div>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: 'var(--brand-text-mid)' }}>
            For many cats, canned food (alone or combined with kibble) offers real advantages in hydration, carbohydrate, weight, and urinary health, and is often the better default — especially for cats prone to obesity, diabetes, or urinary disease. Dry food remains acceptable for healthy cats with measured feeding and good water access, and is cheaper and more convenient. A wet-and-dry combination is a reasonable middle ground; weigh the individual cat&apos;s health risks.
          </p>
        </div>

        <h2 id="different">Why Cats Are Different</h2>
        <p>A cat&apos;s ancestral diet was small prey — high in water, high in animal protein and fat, very low in carbohydrate. Cats evolved to obtain most of their water from food and to run their metabolism on protein and fat. Dry kibble, by necessity high in starch and low in moisture, departs from this template more than canned food does. The mismatch is the root of the feline-specific concerns.</p>
        <h2 id="hydration">Hydration</h2>
        <p>Because cats have a weak thirst drive, those on dry food often run chronically under-hydrated and produce concentrated urine, while cats on canned food obtain much of their water from the diet. Better hydration supports kidney and urinary health — both common problem areas in cats. This is the single strongest feline argument for canned food. See <a href="/nutrition/water-and-hydration">Water and Hydration</a>.</p>
        <h2 id="carbdiabetes">Carbohydrate and Diabetes</h2>
        <p>Cats handle dietary carbohydrate less efficiently than dogs and have limited carbohydrate-digesting enzyme activity. High-carbohydrate dry diets are implicated in feline obesity and diabetes, and low-carbohydrate (typically canned) diets improve glycemic control and can support diabetic remission in cats. For a diabetic or diabetes-prone cat, the lower carbohydrate of canned food is a meaningful advantage. See <a href="/diets/diabetic-diets">Diabetic Diets</a> and <a href="/nutrition/carbohydrates-in-pet-food">Carbohydrates in Pet Food</a>.</p>
        <h2 id="weight">Weight Control</h2>
        <p>Canned food&apos;s lower calorie density per gram and higher water content help with satiety and weight control, and measured wet meals are easier to portion than free-fed kibble. Given the high rate of feline obesity, this matters. That said, weight control ultimately depends on total calories and measured feeding regardless of format. See <a href="/feeding/how-much-to-feed-a-cat">How Much to Feed a Cat</a>.</p>
        <h2 id="urinary">Urinary Health</h2>
        <p>Increased water intake dilutes the urine, reducing the supersaturation that forms crystals and stones and helping flush the lower urinary tract. For cats with a history of feline lower urinary tract disease, urinary stones, or idiopathic cystitis, the moisture of canned food is part of standard management. See <a href="/diets/urinary-tract-diets">Urinary and Bladder Stone Diets</a>.</p>
        <h2 id="verdict">The Practical Verdict</h2>
        <p>For many cats, canned food (alone or combined with kibble) offers real advantages in hydration, carbohydrate, weight, and urinary health, and is often the better default — especially for cats prone to obesity, diabetes, or urinary disease. Dry food remains acceptable for healthy cats when used with measured feeding and good water access, and is cheaper and more convenient. A wet-and-dry combination is a reasonable middle ground. The choice should weigh the individual cat&apos;s health risks.</p>

        <div className="not-prose my-8 rounded-lg border border-brand-border bg-brand-surface p-6">
          <p className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            Shopping for your cat
          </p>
          <h2 className="font-display text-xl font-bold text-brand-dark mb-2">
            Shop complete cat diets
          </h2>
          <p className="text-sm text-brand-text-mid mb-4">
            For a healthy cat, a complete-and-balanced canned or dry diet, or a combination, is a
            sound choice. Compare options with our independent{' '}
            <Link href="/brands">brand evaluations</Link>, then search the category below and confirm
            the AAFCO complete-and-balanced statement for the life stage. A cat with diagnosed
            diabetes, urinary, or kidney disease needs a diet set by a veterinarian — see{' '}
            <Link href="/diets/urinary-tract-diets">urinary diets</Link> and{' '}
            <Link href="/diets/diabetic-diets">diabetic diets</Link>, not a self-selected food.
          </p>
          <AffiliateDisclosure variant="inline" siteId="petfood-com" />
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href="/go/chewy-brand/complete%20balanced%20cat%20food%20wet%20dry?s=compare-kibble-vs-canned-for-cats"
              rel="nofollow sponsored"
              target="_blank"
              className="inline-flex items-center rounded-md bg-brand-primary px-4 py-2 text-sm font-semibold text-white no-underline hover:opacity-90"
            >
              Search cat foods on Chewy →
            </a>
            <a
              href="/go/amazon-brand/complete%20balanced%20cat%20food?s=compare-kibble-vs-canned-for-cats"
              rel="nofollow sponsored"
              target="_blank"
              className="inline-flex items-center rounded-md border border-brand-border px-4 py-2 text-sm font-semibold text-brand-dark no-underline hover:bg-brand-white"
            >
              Search on Amazon →
            </a>
          </div>
          <p className="mt-3 text-xs text-brand-text-light">
            We earn a commission if you purchase through these links — no extra cost to you, and we never rank by commission.
          </p>
        </div>

        <h2 id="faq">Common Questions</h2>
        {FAQ.map((f) => (
          <div key={f.question}>
            <p><strong>{f.question}</strong></p>
            <p>{f.answer}</p>
          </div>
        ))}

        <ArticleSourcesList sources={SOURCES} />
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. We do not provide individualized veterinary advice.
          Therapeutic diets, diagnosed disease, and breed-specific nutritional concerns require a
          licensed veterinarian and, where indicated, a board-certified veterinary nutritionist.
        </p>
      </div>
    </ArticleLayout>
  )
}
