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
  title: 'How Much to Feed a Cat — Calorie Math | PetFood.com',
  description:
    'How to calculate cat feeding amounts from energy requirements, the indoor-cat obesity problem, meal feeding vs grazing, and adjusting to body condition.',
  path: '/feeding/how-much-to-feed-a-cat',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'How Much to Feed a Cat — Calorie Math | PetFood.com',
  description:
    'How to calculate cat feeding amounts from energy requirements, the indoor-cat obesity problem, meal feeding vs grazing, and adjusting to body condition.',
  url: 'https://petfood.com/feeding/how-much-to-feed-a-cat',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function HowMuchToFeedACatPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'How Much to Feed a Cat',
        subtitle:
          'Cats are easy to overfeed: they are small, the calorie differences between foods are large in relative terms, and free-choice grazing on energy-dense kibble drives the high rate of feline obesity. This page shows the feeding-amount calculation for cats, the indoor-cat adjustment, and why meal feeding beats the perpetually full bowl.',
        category: 'Feeding Guide',
        publishedAt: 'May 2026',
        readTime: '10 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Feeding', href: '/feeding' },
        { name: 'How Much to Feed a Cat', href: '/feeding/how-much-to-feed-a-cat' },
      ]}
      relatedLinks={[
        { title: 'Feeding Hub', href: '/feeding' },
        { title: 'How Much to Feed a Dog', href: '/feeding/how-much-to-feed-a-dog' },
        { title: 'Body Condition Scoring', href: '/feeding/body-condition-scoring' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Cat Energy Requirements', href: '#energy' },
              { label: 'The Indoor-Cat Problem', href: '#indoor' },
              { label: 'Meal Feeding vs Grazing', href: '#mealfeeding' },
              { label: 'Wet, Dry, and Mixed', href: '#format' },
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
              { label: 'Wet vs Dry Food', href: '/compare/wet-vs-dry-food' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="how-much-to-feed-a-cat"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>A cat&apos;s feeding amount, like a dog&apos;s, is best derived from its energy requirement and the food&apos;s calorie density rather than from the bag&apos;s range. Cats are obligate carnivores with relatively high protein needs and, when kept indoors and neutered, comparatively low energy needs — a combination that makes portion control essential. See <a href="/nutrition/calories-and-energy-density">Pet Food Calories and Energy Density</a> and <a href="/species/dog-vs-cat-nutrition-overview">Dog vs Cat Nutrition</a>.</p>
        <h2 id="energy">Cat Energy Requirements</h2>
        <p>Resting energy requirement uses the same formula as for dogs: RER = 70 x (kg)^0.75, or approximately 30 x kg + 70 for typical cats. The daily energy requirement is RER times an activity factor. For cats the factors are lower than for dogs: neutered adult roughly 1.2; intact adult roughly 1.4; weight loss roughly 0.8; inactive or obese-prone roughly 1.0; kitten roughly 2.5. A typical lean 4-kilogram neutered indoor cat needs only on the order of 200 to 250 kcal per day.</p>
        <h2 id="indoor">The Indoor-Cat Problem</h2>
        <p>Indoor neutered cats have low energy expenditure and ready access to food, and high-carbohydrate energy-dense kibble left out all day makes overconsumption easy. Feline obesity is widespread and drives diabetes, arthritis, and urinary disease. The low activity factor for indoor cats means their daily calorie allowance is small, and small overages add up quickly on a small animal. See <a href="/diets/weight-management-diets">Weight-Management Diets</a>.</p>
        <h2 id="mealfeeding">Meal Feeding vs Grazing</h2>
        <p>Free-choice grazing makes intake invisible and overfeeding likely; measured meals (or a measured daily allowance in a puzzle feeder) make calories countable and support a healthy weight. Multiple small measured meals suit feline physiology — cats naturally eat many small meals — while still controlling total intake. Puzzle and foraging feeders add activity and slow consumption.</p>
        <h2 id="format">Wet, Dry, and Mixed</h2>
        <p>Many cats do well on canned food or a wet-plus-dry combination, which raises water intake and lowers calorie density per gram, supporting both hydration and weight control. When feeding a mix, the calories from each component must be summed against the daily allowance, not eyeballed by volume. See <a href="/compare/wet-vs-dry-food">Wet vs Dry Food</a> and <a href="/nutrition/water-and-hydration">Water and Hydration</a>.</p>
        <h2 id="adjust">Adjusting by Body Condition</h2>
        <p>As with dogs, the calculation is a starting point and body condition is the correction. Reassess every few weeks. Because cats are small, weight changes of even half a kilogram are significant. Never crash-diet an overweight cat — rapid loss risks hepatic lipidosis — so reductions are gradual and monitored. See <a href="/feeding/body-condition-scoring">Body Condition Scoring</a>.</p>
        <h2 id="example">Worked Example</h2>
        <p>A neutered 4.5-kilogram indoor cat: RER = 30 x 4.5 + 70 = 205 kcal. Daily energy requirement = 205 x 1.2 = roughly 246 kcal. If a canned food provides 90 kcal per 85-gram can, that is about 2.7 cans per day; if dry food provides 350 kcal per cup, the full allowance would be about 0.7 cup. Most owners are surprised how little that is — which is precisely why measuring matters for cats.</p>

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
