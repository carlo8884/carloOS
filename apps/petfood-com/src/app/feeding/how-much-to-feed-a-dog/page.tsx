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
  title: 'How Much to Feed a Dog — Calorie Math | PetFood.com',
  description:
    'How to calculate a dog feeding amount from resting energy requirement and activity factors, why bag guidelines overfeed, and how to adjust to body condition.',
  path: '/feeding/how-much-to-feed-a-dog',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'How Much to Feed a Dog — Calorie Math | PetFood.com',
  description:
    'How to calculate a dog feeding amount from resting energy requirement and activity factors, why bag guidelines overfeed, and how to adjust to body condition.',
  url: 'https://petfood.com/feeding/how-much-to-feed-a-dog',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function HowMuchToFeedADogPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'How Much to Feed a Dog',
        subtitle:
          "The feeding chart on the bag is a starting point that overfeeds most dogs, because it is built around ranges and around the manufacturer's interest in selling food. The accurate approach is a short calculation from the dog's energy requirement and the food's calorie density. This page shows the math, the activity factors, and how to adjust by body condition.",
        category: 'Feeding Guide',
        publishedAt: 'May 2026',
        readTime: '10 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Feeding' },
        { name: 'How Much to Feed a Dog', href: '/feeding/how-much-to-feed-a-dog' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Why Bag Guidelines Overfeed', href: '#bagguides' },
              { label: 'Resting Energy Requirement', href: '#rer' },
              { label: 'Activity Factors', href: '#activity' },
              { label: 'Converting to Cups', href: '#cups' },
              { label: 'Adjusting by Body Condition', href: '#adjust' },
              { label: 'Worked Example', href: '#example' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Pet Food Calories and Energy Density', href: '/nutrition/calories-and-energy-density' },
              { label: 'Body Condition Scoring', href: '/feeding/body-condition-scoring' },
              { label: 'How Much to Feed a Cat', href: '/feeding/how-much-to-feed-a-cat' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="how-much-to-feed-a-dog"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>How much to feed depends on the dog&apos;s energy requirement and the calorie density of the food — not on a one-size range printed on the bag. Energy needs vary widely with size, age, activity, neuter status, and metabolism, so two dogs of the same weight can have feeding amounts that differ by 50 percent. The reliable method is to estimate daily calories, then divide by the food&apos;s calories per cup. See <a href="/nutrition/calories-and-energy-density">Pet Food Calories and Energy Density</a>.</p>
        <h2 id="bagguides">Why Bag Guidelines Overfeed</h2>
        <p>Manufacturer feeding charts give a broad weight-based range and tend to target the high end, partly because they assume an active, intact, average-metabolism dog. Most pet dogs are neutered, moderately active, and prone to weight gain. Following the chart without adjusting is one of the most common causes of creeping weight gain. Treat the chart as an upper bound and refine from there.</p>
        <h2 id="rer">Resting Energy Requirement</h2>
        <p>The foundation is the resting energy requirement (RER) — the calories needed at rest. A widely used formula is RER = 70 x (body weight in kilograms)^0.75. For a quick linear estimate in the 2 to 45 kilogram range, RER is approximately 30 x (weight in kilograms) + 70. RER is then multiplied by an activity factor to get the daily energy requirement (also called maintenance energy requirement).</p>
        <h2 id="activity">Activity Factors</h2>
        <p>Typical multipliers applied to RER: neutered adult dog roughly 1.6; intact adult roughly 1.8; weight loss roughly 1.0; weight gain or underweight roughly 1.2 to 1.4; light work roughly 2.0; heavy work 2.5 to 5.0; puppies up to four months roughly 3.0, four months to adult roughly 2.0. These are starting estimates from published guidelines; individual metabolism varies, so the number is adjusted based on how the dog&apos;s weight and body condition respond over time.</p>
        <h2 id="cups">Converting to Cups</h2>
        <p>Once you have the daily energy requirement in kilocalories, divide it by the food&apos;s kilocalories per cup (from the calorie statement on the bag) to get cups per day, then split across meals. Because calorie density varies by food, the cups figure must be recalculated whenever the food changes. Weighing the portion on a kitchen scale is far more accurate than a measuring cup, which over-portions by roughly 20 percent on average. See the <a href="/tools/food-cost-calculator">Food Cost Calculator</a>.</p>
        <h2 id="adjust">Adjusting by Body Condition</h2>
        <p>The calculation gives a starting amount; the dog&apos;s body condition gives the correction. Assess body condition every few weeks. If the dog is gaining toward overweight, reduce the amount; if losing or too lean, increase it. Body condition score, not the scale alone, is the target. See <a href="/feeding/body-condition-scoring">Body Condition Scoring</a>.</p>
        <h2 id="example">Worked Example</h2>
        <p>A neutered 20-kilogram adult dog: RER = 30 x 20 + 70 = 670 kcal. Daily energy requirement = 670 x 1.6 = roughly 1072 kcal. If the food is 350 kcal per cup, that is about 3.06 cups per day, split into two meals of about 1.5 cups. Then watch body condition over a month and adjust. If the dog gains weight, the true maintenance factor is lower than 1.6, and the amount comes down.</p>

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
