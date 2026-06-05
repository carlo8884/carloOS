import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
  ArticleSourcesList
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Pet Treats and the 10 Percent Rule | PetFood.com',
  description:
    'Why treats should stay under 10 percent of daily calories, how treat calories sabotage diets, training-treat strategies, and safe and unsafe human foods.',
  path: '/feeding/treats-and-the-ten-percent-rule',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Pet Treats and the 10 Percent Rule | PetFood.com',
  description:
    'Why treats should stay under 10 percent of daily calories, how treat calories sabotage diets, training-treat strategies, and safe and unsafe human foods.',
  url: 'https://petfood.com/feeding/treats-and-the-ten-percent-rule',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
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

export default function TreatsAndTheTenPercentRulePage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Treats and the 10 Percent Rule',
        subtitle:
          'Treats are where good feeding plans quietly fall apart. They are calorie-dense, easy to give without counting, and capable of unbalancing an otherwise complete diet. The widely used guideline is that treats should not exceed 10 percent of daily calories. This page explains the rule, the math, and how to treat without overfeeding.',
        category: 'Feeding Guide',
        publishedAt: 'May 2026',
        readTime: '8 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Feeding', href: '/feeding' },
        { name: 'Treats and the 10 Percent Rule', href: '/feeding/treats-and-the-ten-percent-rule' },
      ]}
      relatedLinks={[
        { title: 'Feeding Hub', href: '/feeding' },
        { title: 'How Much to Feed a Dog', href: '/feeding/how-much-to-feed-a-dog' },
        { title: 'How Much to Feed a Cat', href: '/feeding/how-much-to-feed-a-cat' },
        { title: 'Body Condition Scoring', href: '/feeding/body-condition-scoring' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The 10 Percent Rule', href: '#rule' },
              { label: 'Why Treats Sabotage Diets', href: '#sabotage' },
              { label: 'Treat Calorie Math', href: '#math' },
              { label: 'Training-Treat Strategies', href: '#training' },
              { label: 'Human Foods — Safe and Unsafe', href: '#human' },
              { label: 'Dental and Functional Treats', href: '#functional' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Pet Food Calories and Energy Density', href: '/nutrition/calories-and-energy-density' },
              { label: 'Weight-Management Diets', href: '/diets/weight-management-diets' },
              { label: 'Feeding Frequency and Schedules', href: '/feeding/feeding-frequency-and-schedules' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="treats-and-the-ten-percent-rule"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>Treats serve real purposes — training, bonding, enrichment, medication delivery — but they are not nutritionally complete and they add calories. The standard veterinary guideline is that treats and table foods should make up no more than 10 percent of an animal&apos;s daily calorie intake, with the remaining 90 percent coming from a complete and balanced diet. This keeps the complete diet doing its job and prevents treat calories from driving weight gain.</p>
        <h2 id="rule">The 10 Percent Rule</h2>
        <p>The 10 percent guideline exists for two reasons. First, treats are usually not complete and balanced, so a large share of treats dilutes the balanced nutrition of the main diet. Second, treats are calorie-dense, and even a few can represent a substantial fraction of a small animal&apos;s daily allowance. Keeping treats under 10 percent protects both the nutritional balance and the calorie budget.</p>
        <h2 id="sabotage">Why Treats Sabotage Diets</h2>
        <p>Treat calories are the most commonly overlooked input in a weight problem. A single large dog biscuit can carry 100 or more calories — a meaningful fraction of a small dog&apos;s daily need — and households often give treats from multiple people without coordination. When a weight-loss plan stalls, untracked treats are the usual culprit. Counting treat calories against the daily budget is essential. See <a href="/diets/weight-management-diets">Weight-Management Diets</a>.</p>
        <h2 id="math">Treat Calorie Math</h2>
        <p>To apply the rule, calculate 10 percent of the daily energy requirement and keep treats within it, subtracting treat calories from the main-meal portion so total intake stays constant. For a dog needing 1000 kcal per day, treats should stay under about 100 kcal, and the meals should be reduced to make room. Many treat packages now list calories; for those that do not, the manufacturer can provide the figure. See <a href="/nutrition/calories-and-energy-density">Pet Food Calories and Energy Density</a>.</p>
        <h2 id="training">Training-Treat Strategies</h2>
        <p>Training requires many repetitions, which can blow the calorie budget if each reward is a full treat. Use very small pieces (a treat broken into ten), low-calorie options (a piece of the animal&apos;s own kibble counted from the daily ration, or small bits of approved vegetables), and reserve high-value treats for the hardest tasks. The reward value comes from frequency and timing, not size.</p>
        <h2 id="human">Human Foods — Safe and Unsafe</h2>
        <p>Some human foods make reasonable low-calorie treats in moderation — plain cooked lean meat, certain vegetables like green beans and carrots, plain pumpkin. Others are toxic and must never be given: chocolate, xylitol (a sweetener in gum and some peanut butters), grapes and raisins, onions and garlic, macadamia nuts, and alcohol, among others. When in doubt, do not give it, and consult the veterinarian or a poison-control resource. See <a href="/myths">Pet Food Myths</a>.</p>
        <h2 id="functional">Dental and Functional Treats</h2>
        <p>Dental chews and functional treats carry calories like any other treat and must be counted within the 10 percent. Some dental products carry the Veterinary Oral Health Council (VOHC) seal, indicating they meet a standard for reducing plaque or tartar. Functional claims (joint, calming) on treats are generally less substantiated than on therapeutic diets; evaluate the active ingredient and dose rather than the marketing. See <a href="/supplements/glucosamine-and-joint-support">Glucosamine and Joint Supplements</a>.</p>

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
