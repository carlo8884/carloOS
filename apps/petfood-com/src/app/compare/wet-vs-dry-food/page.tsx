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
  title: 'Wet vs Dry Pet Food — An Even-Handed Comparison | PetFood.com',
  description:
    'How canned and dry food compare on moisture, calorie density, dental claims, cost, and palatability, and why the species and the individual animal decide.',
  path: '/compare/wet-vs-dry-food',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Wet vs Dry Pet Food — An Even-Handed Comparison | PetFood.com',
  description:
    'How canned and dry food compare on moisture, calorie density, dental claims, cost, and palatability, and why the species and the individual animal decide.',
  url: 'https://petfood.com/compare/wet-vs-dry-food',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

// Content-aware FAQ derived from the sections below — calibrated, sourced-tone
// answers only (QC §1: no clinical claims, no superlatives).
const FAQ = [
  {
    question: 'Is wet or dry food better for pets?',
    answer:
      'Neither is universally better. Dry food wins on cost per calorie, storage, and convenience; wet food wins on moisture, palatability, and satiety. The right choice depends on the species, the individual animal, and the household — and a combination of the two is a common, workable approach when total calories are counted across both.',
  },
  {
    question: 'Does dry food clean pets’ teeth?',
    answer:
      'The claim is largely overstated. Most kibble shatters on contact and provides little mechanical cleaning, and dental disease is common in dry-fed animals. Specially designed dental kibbles with a larger, fibrous matrix — some carrying the Veterinary Oral Health Council (VOHC) seal — do have some plaque- and tartar-reducing effect, but ordinary kibble is not a substitute for dental care.',
  },
  {
    question: 'Why is wet food often recommended for cats?',
    answer:
      'Cats have a weak thirst drive and tend to under-hydrate on dry food, and the roughly 75 to 82 percent water content of canned food supports urinary and kidney health. For cats with a history of urinary or kidney disease, the moisture of canned food is a genuine clinical benefit.',
  },
  {
    question: 'Can I mix wet and dry food?',
    answer:
      'Yes. Many owners combine kibble for cost and convenience with canned food for hydration, palatability, and satiety. The key is to count total calories across both formats, reading the calorie statement on each product, since per-gram calorie density differs sharply between them.',
  },
]

const pageSchema = combineSchemas(schema, buildFAQSchema({ questions: FAQ }))

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

export default function WetVsDryFoodPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Wet vs Dry Food',
        subtitle:
          'Wet versus dry is the most common format question owners ask, and the honest answer is that it depends on the species and the individual. Each format has real advantages — dry food on cost and convenience, wet food on hydration and palatability — and the popular claims (notably that dry food cleans teeth) are weaker than commonly believed. This page compares them dimension by dimension.',
        category: 'Food-Type Comparison',
        publishedAt: 'May 2026',
        readTime: '10 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Compare', href: '/compare' },
        { name: 'Wet vs Dry Food', href: '/compare/wet-vs-dry-food' },
      ]}
      relatedLinks={[
        { title: 'Compare Hub', href: '/compare' },
        { title: 'Grain-Free vs Grain-Inclusive', href: '/compare/grain-free-vs-grain-inclusive' },
        { title: 'Fresh vs Kibble', href: '/compare/fresh-vs-kibble' },
      ]}
      schema={pageSchema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The Core Difference — Moisture', href: '#moisture' },
              { label: 'Calorie Density', href: '#calories' },
              { label: 'The Dental Claim', href: '#dental' },
              { label: 'Cost and Convenience', href: '#cost' },
              { label: 'Palatability and Hydration', href: '#palatability' },
              { label: 'Choosing or Combining', href: '#choosing' },
              { label: 'Common Questions', href: '#faq' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Dry-Matter Basis Explained', href: '/nutrition/dry-matter-basis-explained' },
              { label: 'Water and Hydration', href: '/nutrition/water-and-hydration' },
              { label: 'Pet Food Calories and Energy Density', href: '/nutrition/calories-and-energy-density' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="wet-vs-dry-food"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
        <StockImage manifestKey="petfood-com:compare-wet-vs-dry-food" fallbackKey="petfood-com:compare-hero" priority aspect="16:9" variant="wide" caption="Wet versus dry food — comparing water content, cost, dental claims, and palatability." />
        <p>The defining difference between wet and dry food is water content: canned food is roughly 75 to 82 percent water, dry kibble about 6 to 12 percent. Almost every other practical difference flows from that, plus the manufacturing difference (extrusion requires starch; canning does not). Neither format is universally better; the right choice depends on the species, the individual animal, and the household. Nutrient comparisons between them must be done on a dry-matter basis. See <a href="/nutrition/dry-matter-basis-explained">Dry-Matter Basis Explained</a>.</p>

        <div style={{ margin: '24px 0', padding: '18px 20px', borderRadius: '12px', border: '1px solid var(--brand-border)', borderLeft: '4px solid var(--brand-primary)', background: 'var(--brand-surface)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--brand-primary-dark)', marginBottom: '8px' }}>Bottom Line</div>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: 'var(--brand-text-mid)' }}>
            Neither format is universally better; for most healthy animals either one, if complete and balanced, supports good health. Wet food&apos;s main advantage is moisture — a genuine clinical benefit for cats and animals prone to urinary or kidney disease — while dry food is cheaper per calorie and more convenient. The dental-cleaning benefit of ordinary kibble is largely overstated, so don&apos;t choose dry food for that reason. Many owners successfully combine the two, counting total calories across both.
          </p>
        </div>

        <h2 id="moisture">The Core Difference — Moisture</h2>
        <p>The high moisture of canned food is its biggest functional advantage, especially for cats. Cats have a weak thirst drive and tend to under-hydrate on dry food, and increased dietary water supports urinary and kidney health. For cats with a history of urinary disease or kidney disease, the moisture of canned food is a genuine clinical benefit. See <a href="/nutrition/water-and-hydration">Water and Hydration</a> and <a href="/diets/urinary-tract-diets">Urinary and Bladder Stone Diets</a>.</p>
        <h2 id="calories">Calorie Density</h2>
        <p>Per gram as-fed, canned food is far lower in calories than kibble because so much of it is water — which can help with satiety and weight control, since the animal eats a larger, more filling volume for the same calories. Per dry gram, however, canned diets are often quite energy-dense. The practical point is that wet and dry calories must be summed correctly when mixing, and the calorie statement read for each. See <a href="/nutrition/calories-and-energy-density">Pet Food Calories and Energy Density</a>.</p>
        <h2 id="dental">The Dental Claim</h2>
        <p>The belief that dry food cleans teeth is largely overstated. Most kibble shatters on contact and provides little mechanical cleaning, and dental disease is common in dry-fed animals. Specially designed dental kibbles with a larger, fibrous matrix do have some plaque- and tartar-reducing effect, and certain ones carry the Veterinary Oral Health Council (VOHC) seal — but ordinary kibble is not a substitute for dental care. Do not choose dry food primarily for dental benefit.</p>
        <h2 id="cost">Cost and Convenience</h2>
        <p>Dry food is generally cheaper per calorie, stores easily once sealed, can be left out longer (though meal feeding is still preferred), and works in puzzle and automatic feeders. Canned food costs more per calorie, must be refrigerated after opening and used within days, and spoils if left in the bowl. For large dogs especially, the cost difference is significant. See the <a href="/tools/food-cost-calculator">Food Cost Calculator</a> and <a href="/feeding/food-storage-and-safety">Pet Food Storage and Safety</a>.</p>
        <h2 id="palatability">Palatability and Hydration</h2>
        <p>Canned food is typically more palatable due to its aroma, texture, and higher fat and protein, which makes it valuable for sick, inappetent, or senior animals that need encouragement to eat, and for cats recovering from illness. Its hydration benefit reinforces this in animals that need more water. For a picky or convalescing animal, the palatability of wet food can be the deciding factor.</p>
        <h2 id="choosing">Choosing or Combining</h2>
        <p>Many owners successfully combine the two: kibble for cost and convenience, with canned food added for hydration, palatability, and satiety. A combination captures several of each format&apos;s advantages, provided total calories are counted across both. For most healthy animals either format, if complete and balanced, supports good health; the choice can be made on the individual&apos;s needs and the household&apos;s practicality. See <a href="/feeding/how-much-to-feed-a-cat">How Much to Feed a Cat</a>.</p>

        <div className="not-prose my-8 rounded-lg border border-brand-border bg-brand-surface p-6">
          <p className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            Shopping for either format
          </p>
          <h2 className="font-display text-xl font-bold text-brand-dark mb-2">
            Shop wet and dry complete diets
          </h2>
          <p className="text-sm text-brand-text-mid mb-4">
            Both formats work when the food is complete and balanced for the life stage. Compare
            picks with our independent <Link href="/brands">brand evaluations</Link>, then search the
            category at a major retailer. The search links below surface complete wet and dry diets;
            confirm the AAFCO statement and life-stage match on the specific product.
          </p>
          <AffiliateDisclosure variant="inline" siteId="petfood-com" />
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href="/go/chewy-brand/complete%20wet%20and%20dry%20cat%20and%20dog%20food?s=compare-wet-vs-dry-food"
              rel="nofollow sponsored"
              target="_blank"
              className="inline-flex items-center rounded-md bg-brand-primary px-4 py-2 text-sm font-semibold text-white no-underline hover:opacity-90"
            >
              Search complete diets on Chewy →
            </a>
            <a
              href="/go/amazon-brand/complete%20balanced%20wet%20dry%20pet%20food?s=compare-wet-vs-dry-food"
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
