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
  title: 'Pet Food Calories and Energy Density Explained | PetFood.com',
  description:
    'How metabolizable energy is calculated, what kcal/cup and kcal/kg mean, how to read the calorie statement, and why energy density drives portion size.',
  path: '/nutrition/calories-and-energy-density',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Pet Food Calories and Energy Density Explained | PetFood.com',
  description:
    'How metabolizable energy is calculated, what kcal/cup and kcal/kg mean, how to read the calorie statement, and why energy density drives portion size.',
  url: 'https://petfood.com/nutrition/calories-and-energy-density',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-05-31T00:00:00Z',
  modifiedAt: '2026-05-31T00:00:00Z',
})

export default function CaloriesAndEnergyDensityPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Pet Food Calories and Energy Density',
        subtitle:
          'Every weight problem and every feeding-guide error traces back to one number most owners never check: the caloric density of the food. Since 2017, AAFCO has required a calorie statement on pet food labels, but it is buried, expressed in unfamiliar units, and rarely used. This page explains metabolizable energy, the kcal/cup and kcal/kg figures, and how to turn them into a correct portion.',
        category: 'Nutrition Fundamentals',
        publishedAt: 'May 2026',
        readTime: '10 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Nutrition' },
        { name: 'Pet Food Calories and Energy Density', href: '/nutrition/calories-and-energy-density' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Metabolizable Energy', href: '#me' },
              { label: 'The Calorie Statement', href: '#statement' },
              { label: 'kcal/cup vs kcal/kg', href: '#units' },
              { label: 'Energy Density and Portion Size', href: '#portion' },
              { label: 'Wet vs Dry Energy Density', href: '#wetdry' },
              { label: 'Using the Number', href: '#using' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'How Much to Feed Your Dog', href: '/feeding/how-much-to-feed-a-dog' },
              { label: 'Wet vs Dry Food', href: '/compare/wet-vs-dry-food' },
              { label: 'Dietary Fat and Essential Fatty Acids', href: '/nutrition/dietary-fat-and-fatty-acids' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="calories-and-energy-density"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>A calorie in nutrition is actually a kilocalorie (kcal) — the energy to raise one kilogram of water one degree Celsius. The number that matters for feeding is metabolizable energy: the energy the animal can actually extract from the food after losses to feces and urine. AAFCO and the NRC define how metabolizable energy is calculated and how it must be disclosed.</p>
        <h2 id="me">Metabolizable Energy</h2>
        <p>Metabolizable energy (ME) is gross energy minus the energy lost in feces, urine, and (for ruminants, not relevant here) gas. For dogs and cats, ME is estimated from the protein, fat, and carbohydrate content using modified Atwater factors — approximately 3.5 kcal/g for protein, 8.5 kcal/g for fat, and 3.5 kcal/g for carbohydrate (lower than the human Atwater factors because pet diets are less digestible on average). Manufacturers may also determine ME directly by feeding trial, which is more accurate than calculation.</p>
        <h2 id="statement">The Calorie Statement</h2>
        <p>Since the 2017 model regulation update, every complete-and-balanced pet food sold in adopting states must carry a calorie content statement expressed as kilocalories of metabolizable energy per kilogram, and per a common household unit (per cup, per can, or per treat). The statement appears in a defined format near the guaranteed analysis. Whether the ME was calculated or measured may be indicated; measured values are generally more reliable.</p>
        <h2 id="units">kcal/cup vs kcal/kg</h2>
        <p>Two foods can differ by 30 percent or more in kcal/cup. A dense, high-fat performance kibble might run 480 kcal/cup while a weight-management kibble runs 290 kcal/cup. Feeding the same volume of each delivers very different energy. The kcal/kg figure standardizes across products by weight, which is the fairer comparison; the kcal/cup figure is the practical one for daily feeding, because owners measure by volume. Always read the calorie statement on the specific bag — calorie density varies by formula even within one brand.</p>
        <h2 id="portion">Energy Density and Portion Size</h2>
        <p>The single most common feeding error is using the same cup count when switching foods of different density. If a dog was eating 2 cups of a 350 kcal/cup food (700 kcal/day) and switches to a 480 kcal/cup food at the same 2 cups, intake jumps to 960 kcal/day — a 37 percent increase that produces steady weight gain. To switch foods correctly, calculate the dog&apos;s daily energy requirement, then divide by the new food&apos;s kcal/cup. See <a href="/feeding/how-much-to-feed-a-dog">How Much to Feed Your Dog</a> and the <a href="/tools/food-cost-calculator">Food Cost Calculator</a>.</p>
        <h2 id="wetdry">Wet vs Dry Energy Density</h2>
        <p>Canned food is roughly 75 to 80 percent water, so its energy density per gram is far lower than kibble — but its energy density per dry gram can be high, because canned diets are often fat- and protein-rich. This is why a small can may carry more calories than its size suggests, and why mixed feeding (kibble plus canned) requires summing the calories from both, not eyeballing volumes. See <a href="/compare/wet-vs-dry-food">Wet vs Dry Food</a>.</p>
        <h2 id="using">Using the Calorie Number</h2>
        <ol>
          <li>Find the calorie statement on the bag (kcal/kg and kcal/cup or kcal/can).</li>
          <li>Estimate the animal&apos;s daily energy requirement from body weight, body condition, and life stage.</li>
          <li>Divide daily energy requirement by kcal/cup to get the daily volume; split across meals.</li>
          <li>Re-measure with a kitchen scale rather than a scoop — volumetric measuring overfeeds by 20 percent or more on average.</li>
          <li>Recalculate any time you change foods, because density changes.</li>
        </ol>

        <h2 id="sources">Sources</h2>
        <ul>
          <li>Association of American Feed Control Officials. <em>2025 AAFCO Official Publication</em> — Dog and Cat Food Nutrient Profiles (Chapter 4); ingredient definitions and Model Regulations for Pet Food (Chapter 6).</li>
          <li>National Research Council. <em>Nutrient Requirements of Dogs and Cats.</em> National Academies Press, 2006 — the authoritative species-specific nutrient-requirement reference underlying the AAFCO profiles.</li>
          <li>World Small Animal Veterinary Association (WSAVA) Global Nutrition Committee. <em>Global Nutrition Guidelines</em> and <em>Recommendations on Selecting Pet Foods</em> owner handout.</li>
          <li>U.S. Food and Drug Administration, Center for Veterinary Medicine. <em>Pet Food Labels — General</em>; <em>Animal Food Ingredients: Regulatory Framework</em>; FDA CVM Recalls &amp; Withdrawals database.</li>
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
