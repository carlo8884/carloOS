import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
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
        { name: 'Compare' },
        { name: 'Fresh vs Kibble', href: '/compare/fresh-vs-kibble' },
      ]}
      schema={schema}
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
        <p>Fresh pet food refers to gently cooked, minimally processed, usually refrigerated or frozen complete diets, often sold by subscription. The category positions itself against extruded kibble on the basis of lower-temperature cooking, recognizable whole ingredients, and higher moisture. The honest comparison separates the parts of that pitch supported by evidence from the parts that are marketing. See <a href="/nutrition/calories-and-energy-density">Pet Food Calories and Energy Density</a>.</p>
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

        <h2 id="sources">Sources</h2>
        <ul>
          <li>Association of American Feed Control Officials. <em>2025 AAFCO Official Publication</em> — Dog and Cat Food Nutrient Profiles (Chapter 4); ingredient definitions and Model Regulations for Pet Food (Chapter 6).</li>
          <li>National Research Council. <em>Nutrient Requirements of Dogs and Cats.</em> National Academies Press, 2006 — the authoritative species-specific nutrient-requirement reference underlying the AAFCO profiles.</li>
          <li>World Small Animal Veterinary Association (WSAVA) Global Nutrition Committee. <em>Global Nutrition Guidelines</em> and <em>Recommendations on Selecting Pet Foods</em> owner handout.</li>
        </ul>
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. We do not provide individualized veterinary advice.
          Therapeutic diets, diagnosed disease, and breed-specific nutritional concerns require a
          licensed veterinarian and, where indicated, a board-certified veterinary nutritionist.
        </p>
      </div>
    </ArticleLayout>
  )
}
