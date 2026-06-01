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
  title: 'How to Use a Pet Calorie Calculator | PetFood.com',
  description:
    'How calorie calculators estimate daily energy needs, the inputs that matter, the limits of any formula, and how to translate the result into a real portion.',
  path: '/feeding/calorie-calculator-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'How to Use a Pet Calorie Calculator | PetFood.com',
  description:
    'How calorie calculators estimate daily energy needs, the inputs that matter, the limits of any formula, and how to translate the result into a real portion.',
  url: 'https://petfood.com/feeding/calorie-calculator-guide',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function CalorieCalculatorGuidePage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Using a Pet Calorie Calculator',
        subtitle:
          'A calorie calculator turns a few inputs — weight, body condition, life stage, activity — into an estimated daily energy requirement, and it is a useful starting point for portioning. But it is only an estimate, and the real correction comes from watching the animal. This page explains how the calculation works, its limits, and how to use the result well. It companions our food-cost tool.',
        category: 'Feeding Guide',
        publishedAt: 'May 2026',
        readTime: '8 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Feeding' },
        { name: 'Using a Pet Calorie Calculator', href: '/feeding/calorie-calculator-guide' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'What a Calculator Computes', href: '#computes' },
              { label: 'The Inputs That Matter', href: '#inputs' },
              { label: 'The Underlying Formula', href: '#formula' },
              { label: 'Why It Is Only an Estimate', href: '#estimate' },
              { label: 'Turning Calories into a Portion', href: '#portion' },
              { label: 'Verifying with the Animal', href: '#verifying' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'How Much to Feed a Dog', href: '/feeding/how-much-to-feed-a-dog' },
              { label: 'Pet Food Calories and Energy Density', href: '/nutrition/calories-and-energy-density' },
              { label: 'Body Condition Scoring', href: '/feeding/body-condition-scoring' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="calorie-calculator-guide"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>A pet calorie calculator estimates how many kilocalories an animal needs per day, from which a feeding amount can be derived. It applies the same resting-energy and activity-factor math a veterinarian uses, packaged into a few inputs. The result is a starting estimate, not a precise prescription, and it should be combined with the food&apos;s calorie statement and ongoing body-condition monitoring. It pairs with the <a href="/tools/food-cost-calculator">Food Cost Calculator</a>.</p>
        <h2 id="computes">What a Calculator Computes</h2>
        <p>The calculator estimates the daily energy requirement (also called maintenance energy requirement) — the calories needed to maintain current weight given the animal&apos;s size, life stage, and activity. From that figure, and the calorie density of the chosen food, the daily portion follows. The calculator does the energy math; the portion still requires the food&apos;s kcal-per-cup. See <a href="/nutrition/calories-and-energy-density">Pet Food Calories and Energy Density</a>.</p>
        <h2 id="inputs">The Inputs That Matter</h2>
        <p>Key inputs are current body weight, body condition score (so a calculation for an overweight animal can target the ideal weight, not the current one), life stage (puppy, kitten, adult, senior), neuter status, and activity level. Some calculators also account for weight-loss versus maintenance goals. The body-condition input matters most: feeding to maintain an overweight animal&apos;s current weight just keeps it overweight. See <a href="/feeding/body-condition-scoring">Body Condition Scoring</a>.</p>
        <h2 id="formula">The Underlying Formula</h2>
        <p>Under the hood, the calculator computes resting energy requirement (RER), commonly 70 times body weight in kilograms to the 0.75 power, then multiplies by an activity factor for life stage, neuter status, and activity. For example, a neutered adult dog uses a factor around 1.6, an indoor neutered cat around 1.2, a puppy up to about 3.0. The result is the estimated daily calories. See <a href="/feeding/how-much-to-feed-a-dog">How Much to Feed a Dog</a> and <a href="/feeding/how-much-to-feed-a-cat">How Much to Feed a Cat</a>.</p>
        <h2 id="estimate">Why It Is Only an Estimate</h2>
        <p>Individual metabolism varies by 20 percent or more around the average for reasons the formula cannot capture — breed, genetics, health, and individual variation. The activity factors are population averages, not personal measurements. So the calculator gives a reasonable opening number that will need adjustment for the specific animal. Treating its output as exact, rather than as a starting point, is the common mistake.</p>
        <h2 id="portion">Turning Calories into a Portion</h2>
        <p>Once you have the estimated daily calories, divide by the food&apos;s kilocalories per cup (from the calorie statement on the bag) to get the daily volume, then split across meals and subtract treat calories (kept within the 10 percent rule). Because calorie density differs by food, recompute the portion when you change foods. Weigh the portion on a kitchen scale rather than scooping. See <a href="/feeding/treats-and-the-ten-percent-rule">Treats and the 10 Percent Rule</a>.</p>
        <h2 id="verifying">Verifying with the Animal</h2>
        <p>The calculator&apos;s estimate is confirmed or corrected by the animal: reassess body condition every few weeks and adjust the amount up or down. If a dog gains on the calculated portion, its true energy needs are lower than the average factor assumed, and the amount comes down. The formula starts the process; the body-condition feedback loop finishes it. See <a href="/feeding/body-condition-scoring">Body Condition Scoring</a>.</p>

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
