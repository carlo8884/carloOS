import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  buildProductSchema,
  buildItemListSchema,
  combineSchemas,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
  ReviewCard,
  AffiliateDisclosure,
  ArticleSourcesList,
  ArticleByline,
  StockImage
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Fresh Pet Food vs Kibble — Comparison | PetFood.com',
  description:
    'How fresh and gently cooked diets compare to kibble on processing, digestibility, cost, and evidence, and what the fresh-food category does and does not prove.',
  path: '/compare/fresh-vs-kibble',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Fresh Pet Food vs Kibble — Comparison | PetFood.com',
  description:
    'How fresh and gently cooked diets compare to kibble on processing, digestibility, cost, and evidence, and what the fresh-food category does and does not prove.',
  url: 'https://petfood.com/compare/fresh-vs-kibble',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

// Editorial Product/Review schema for the two scored fresh-food picks rendered
// on this page (QC §1.4 — editorial Review only, never AggregateRating; ratings
// reflect the disclosed on-page editorial scores). ItemList captures the ranking.
const farmersDogSchema = buildProductSchema({
  name: "The Farmer's Dog",
  description:
    "Gently cooked, vet-formulated fresh dog food portioned to your dog's calorie needs; formulated to AAFCO profiles. Trade-offs: substantially higher cost per calorie than kibble and freezer space required.",
  reviewBody:
    "Direct-to-consumer fresh dog food, gently cooked from human-grade ingredients and portioned to calorie needs. Formulated to AAFCO profiles by a veterinary nutrition team. Premium cost per calorie and freezer space are the trade-offs.",
  reviewAuthorName: 'PetFood.com Editorial',
  ratingValue: 8.8,
})
const ollieSchema = buildProductSchema({
  name: 'Ollie',
  description:
    'Direct-to-consumer fresh dog food with fresh-cooked and gently baked recipes, portioned by questionnaire and formulated to AAFCO profiles. Same fresh-category trade-offs: higher cost than kibble and storage logistics.',
  reviewBody:
    'Fresh and gently baked recipes, pre-portioned by profile questionnaire and formulated to AAFCO profiles. Confirm the AAFCO statement and life-stage match for the recipe chosen. Premium cost per calorie and storage logistics apply.',
  reviewAuthorName: 'PetFood.com Editorial',
  ratingValue: 8.3,
})
const itemListSchema = buildItemListSchema({
  name: 'Fresh Food Options',
  items: [
    { name: "The Farmer's Dog", url: 'https://petfood.com/compare/fresh-vs-kibble#the-farmers-dog' },
    { name: 'Ollie', url: 'https://petfood.com/compare/fresh-vs-kibble#ollie-fresh' },
  ],
})
const pageSchema = combineSchemas(schema, itemListSchema, farmersDogSchema, ollieSchema)

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

export default function FreshVsKibblePage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Fresh vs Kibble',
        subtitle:
          'Fresh, gently cooked, refrigerated pet food has grown into a major category positioned against kibble on the strength of minimal processing. Some of its advantages are real, some claims outrun the evidence, and the cost difference is substantial. This page compares fresh and kibble on processing, digestibility, evidence, and practicality.',
        category: 'Food-Type Comparison',
        publishedAt: 'May 2026',
        readTime: '10 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Compare', href: '/compare' },
        { name: 'Fresh vs Kibble', href: '/compare/fresh-vs-kibble' },
      ]}
      relatedLinks={[
        { title: 'Compare Hub', href: '/compare' },
        { title: 'Wet vs Dry Food', href: '/compare/wet-vs-dry-food' },
        { title: 'Grain-Free vs Grain-Inclusive', href: '/compare/grain-free-vs-grain-inclusive' },
      ]}
      schema={pageSchema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'What Fresh Food Is', href: '#whatis' },
              { label: 'Processing Differences', href: '#processing' },
              { label: 'Digestibility Evidence', href: '#digestibility' },
              { label: 'Completeness and AAFCO', href: '#aafco' },
              { label: 'Cost and Practicality', href: '#cost' },
              { label: 'Evaluating a Fresh Diet', href: '#evaluating' },
              { label: 'Fresh Food Options', href: '#options' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'AAFCO Completeness Explained', href: '/guides/aafco-completeness-explained' },
              { label: 'Vitamins in Pet Food', href: '/nutrition/vitamins-in-pet-food' },
              { label: 'Home-Cooked vs Commercial Diets', href: '/compare/home-cooked-vs-commercial' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="fresh-vs-kibble"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
        <StockImage manifestKey="petfood-com:compare-fresh-vs-kibble" fallbackKey="petfood-com:compare-hero" priority aspect="16:9" variant="wide" caption="Fresh versus kibble — comparing processing, cost, and the evidence behind the claims." />
        <p>Fresh pet food refers to gently cooked, minimally processed, usually refrigerated or frozen complete diets, often sold by subscription. The category positions itself against extruded kibble on the basis of lower-temperature cooking, recognizable whole ingredients, and higher moisture. The honest comparison separates the parts of that pitch supported by evidence from the parts that are marketing. See <a href="/nutrition/calories-and-energy-density">Pet Food Calories and Energy Density</a>.</p>

        <div style={{ margin: '24px 0', padding: '18px 20px', borderRadius: '12px', border: '1px solid var(--brand-border)', borderLeft: '4px solid var(--brand-primary)', background: 'var(--brand-surface)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--brand-primary-dark)', marginBottom: '8px' }}>Bottom Line</div>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: 'var(--brand-text-mid)' }}>
            Fresh, gently cooked diets are promising — higher digestibility is plausible — but the strongest long-term health claims outrun the current independent evidence, and much of the supporting research is industry-funded. Fresh also costs several times more per calorie than kibble and needs refrigeration. Judge a fresh diet the way you would any other: AAFCO statement and life-stage match, feeding-trial substantiation, and manufacturing transparency. A well-formulated kibble or canned diet remains a sound choice.
          </p>
        </div>

        <h2 id="whatis">What Fresh Food Is</h2>
        <p>Fresh diets are cooked at lower temperatures than the high-heat extrusion used for kibble, then refrigerated or frozen, with moisture content far higher than dry food (closer to canned). They use whole, identifiable ingredients and avoid the shelf-stable preservatives kibble requires. Like all complete diets, they should be formulated to meet AAFCO nutrient profiles for the life stage.</p>
        <h2 id="processing">Processing Differences</h2>
        <p>Extrusion subjects kibble to high heat and pressure, which gelatinizes starch (necessary for the kibble structure), kills pathogens, and degrades some heat-sensitive nutrients that are then replaced by the vitamin premix. Gentle cooking uses lower temperatures, which preserves more heat-sensitive nutrients in their natural form and avoids the high-starch requirement of extrusion. The processing difference is real; whether it translates to a meaningful health difference is less established. See <a href="/nutrition/vitamins-in-pet-food">Vitamins in Pet Food</a>.</p>
        <h2 id="digestibility">Digestibility Evidence</h2>
        <p>Some studies, several of them industry-funded, report higher digestibility and favorable stool quality for fresh diets compared with kibble. Higher digestibility is plausible given the ingredients and processing, but the independent, long-term outcome evidence (longevity, disease incidence) is limited, and many comparative studies have funding or design limitations. The category is promising but the strongest health claims outrun the current independent evidence.</p>
        <h2 id="aafco">Completeness and AAFCO</h2>
        <p>A fresh diet is only as good as its formulation. The key question is the same as for any food: does it carry an AAFCO complete-and-balanced statement for the appropriate life stage, by formulation or feeding trial, and is it made under sound manufacturing controls? Fresh diets that meet AAFCO profiles via feeding trial and disclose their manufacturing are stronger than those relying on formulation alone with thin disclosure. See <a href="/guides/aafco-completeness-explained">AAFCO Completeness Explained</a>.</p>
        <h2 id="cost">Cost and Practicality</h2>
        <p>Fresh food costs substantially more per calorie than kibble — often several times more, especially for large dogs — and requires refrigerator or freezer space, thawing, and use within a few days of opening. Subscription models add convenience but lock in the higher cost. For many households the cost is the deciding factor, and a high-quality kibble or canned diet remains a sound choice. See the <a href="/tools/food-cost-calculator">Food Cost Calculator</a>.</p>
        <h2 id="evaluating">Evaluating a Fresh Diet</h2>
        <p>Judge a fresh diet the way you would any other: confirm the AAFCO statement and life-stage match, prefer feeding-trial substantiation, look for manufacturing and sourcing transparency and a board-certified veterinary nutritionist on staff, and check the calorie density so you feed the right amount. Do not assume fresh equals better without checking the formulation; a poorly formulated fresh diet is inferior to a well-formulated kibble. See <a href="/feeding/food-storage-and-safety">Pet Food Storage and Safety</a>.</p>

        <h2 id="options">Fresh Food Options</h2>
        <p>If you have decided a fresh diet fits your budget and household, the picks below are direct-to-consumer fresh-food brands that publish their formulation and ship complete, AAFCO-substantiated diets on a subscription model. Apply the same evaluation as any food: confirm the AAFCO complete-and-balanced statement and life stage, prefer feeding-trial substantiation, and check the calorie density. We earn an affiliate commission on purchases through these links at no extra cost to you, and we never rank by commission.</p>
        <AffiliateDisclosure variant="inline" siteId="petfood-com" />
        <ReviewCard
          id="the-farmers-dog"
          badge="Fresh Subscription"
          badgeEmoji="🥘"
          name="The Farmer's Dog"
          subtitle="Gently cooked, vet-formulated fresh dog food, portioned to your dog"
          score={8.8}
          winner
          description={
            <p>A direct-to-consumer fresh dog food that gently cooks human-grade ingredients and portions meals to your dog&apos;s calorie needs from an intake questionnaire. Formulated to AAFCO profiles with a veterinary nutrition team. The fresh-category trade-offs apply: substantially higher cost per calorie than kibble and freezer space required.</p>
          }
          specs={[
            { label: 'Type', value: 'Gently cooked fresh', highlight: 'good' },
            { label: 'AAFCO', value: 'Complete and balanced', highlight: 'good' },
            { label: 'Model', value: 'Subscription, pre-portioned' },
            { label: 'Cost', value: 'Premium per calorie', highlight: 'warn' },
          ]}
          pros={['Vet-formulated to AAFCO profiles', 'Pre-portioned to calorie needs', 'Human-grade ingredients']}
          cons={['Higher cost per calorie than kibble', 'Requires freezer/fridge space', 'Subscription lock-in']}
          price="Subscription pricing"
          ctaText="See The Farmer's Dog Plans"
          ctaHref="/go/farmers-dog/fresh-vs-kibble?s=compare-fresh-vs-kibble"
          ctaAffiliateProgram="farmers-dog"
          ctaAffiliateProduct="fresh-vs-kibble"
        />
        <ReviewCard
          id="ollie-fresh"
          badge="Fresh Subscription"
          badgeEmoji="🍲"
          name="Ollie"
          subtitle="Fresh and gently baked recipes with a published formulation"
          score={8.3}
          description={
            <p>A direct-to-consumer fresh dog food offering both fresh-cooked and gently baked recipes, portioned by a profile questionnaire and formulated to AAFCO profiles. Same category trade-offs as any fresh diet: higher cost than kibble and storage logistics. Confirm the AAFCO statement and life-stage match for the recipe you choose.</p>
          }
          specs={[
            { label: 'Type', value: 'Fresh + gently baked' },
            { label: 'AAFCO', value: 'Complete and balanced', highlight: 'good' },
            { label: 'Model', value: 'Subscription, pre-portioned' },
          ]}
          pros={['Fresh and baked options', 'Pre-portioned plans', 'Published formulation']}
          cons={['Premium cost per calorie', 'Storage logistics', 'Subscription model']}
          price="Subscription pricing"
          ctaText="See Ollie Plans"
          ctaHref="/go/ollie/fresh-vs-kibble?s=compare-fresh-vs-kibble"
          ctaAffiliateProgram="ollie"
          ctaAffiliateProduct="fresh-vs-kibble"
        />

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
