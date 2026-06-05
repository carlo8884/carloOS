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
  title: 'Feeding Frequency and Schedules for Dogs and Cats | PetFood.com',
  description:
    'How often to feed dogs and cats by life stage, meal feeding vs free choice, the bloat consideration in dogs, and timing around medication and activity.',
  path: '/feeding/feeding-frequency-and-schedules',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Feeding Frequency and Schedules for Dogs and Cats | PetFood.com',
  description:
    'How often to feed dogs and cats by life stage, meal feeding vs free choice, the bloat consideration in dogs, and timing around medication and activity.',
  url: 'https://petfood.com/feeding/feeding-frequency-and-schedules',
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

export default function FeedingFrequencyAndSchedulesPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Feeding Frequency and Schedules',
        subtitle:
          'How often to feed is a real nutritional decision, not just routine. Frequency interacts with life stage, body weight management, the canine bloat risk, and medical conditions like diabetes. This page covers feeding frequency by life stage, the case for meal feeding over free choice, and the timing considerations that matter.',
        category: 'Feeding Guide',
        publishedAt: 'May 2026',
        readTime: '8 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Feeding', href: '/feeding' },
        { name: 'Feeding Frequency and Schedules', href: '/feeding/feeding-frequency-and-schedules' },
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
              { label: 'Frequency by Life Stage', href: '#lifestage' },
              { label: 'Meal Feeding vs Free Choice', href: '#mealfeeding' },
              { label: 'The Bloat Consideration', href: '#bloat' },
              { label: 'Cats and Small Meals', href: '#cats' },
              { label: 'Timing and Medication', href: '#timing' },
              { label: 'Building a Schedule', href: '#schedule' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'How Much to Feed a Cat', href: '/feeding/how-much-to-feed-a-cat' },
              { label: 'Treats and the 10 Percent Rule', href: '/feeding/treats-and-the-ten-percent-rule' },
              { label: 'Diabetic Diets for Dogs and Cats', href: '/diets/diabetic-diets' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="feeding-frequency-and-schedules"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>Feeding frequency affects body weight control, digestive comfort, and the management of several conditions. While there is flexibility, some patterns are better supported than others: puppies and kittens need frequent meals, most adults do well on two meals a day, and free-choice feeding works against weight control in most pets. The right schedule balances physiology, the household routine, and any medical needs.</p>
        <h2 id="lifestage">Frequency by Life Stage</h2>
        <p>Young puppies and kittens have small stomachs and high energy needs and should be fed three to four times daily, reducing to twice daily as they mature. Most adult dogs and cats do well on two meals a day. Some toy-breed puppies are prone to hypoglycemia and need frequent feeding. Pregnant and lactating animals need increased frequency and amount. See <a href="/diets/puppy-and-kitten-growth-diets">Puppy and Kitten Growth Diets</a>.</p>
        <h2 id="mealfeeding">Meal Feeding vs Free Choice</h2>
        <p>Free-choice (food left out continuously) makes intake invisible and overfeeding likely, and it prevents the appetite monitoring that often gives the first sign of illness. Measured meals let you count calories, notice when an animal goes off its food, and control weight. For multi-pet households, meal feeding also prevents one animal monopolizing the bowl. Meal feeding is preferred for most pets. See <a href="/feeding/body-condition-scoring">Body Condition Scoring</a>.</p>
        <h2 id="bloat">The Bloat Consideration</h2>
        <p>Gastric dilatation-volvulus (bloat) is a life-threatening emergency in large and giant deep-chested breeds. While the causes are multifactorial, risk-reduction recommendations include feeding two or more smaller meals rather than one large meal, avoiding vigorous exercise immediately around meals, and slowing fast eaters with a slow-feeder bowl. Elevated feeders were once recommended but evidence is mixed. These measures reduce but do not eliminate risk.</p>
        <h2 id="cats">Cats and Small Meals</h2>
        <p>Cats are natural grazers that, in the wild, eat many small prey-sized meals across the day. Several measured small meals, or a measured daily portion delivered through puzzle feeders, suit feline physiology while still controlling total calories. Timed automatic feeders can deliver small measured meals for cats whose owners are away. See <a href="/feeding/how-much-to-feed-a-cat">How Much to Feed a Cat</a>.</p>
        <h2 id="timing">Timing and Medication</h2>
        <p>For diabetic animals, meals are timed to insulin injections so glucose load and insulin peak align — a fixed schedule is essential. Some medications must be given with food; others on an empty stomach. Animals prone to bilious vomiting (an empty-stomach nausea, often early morning) may benefit from a late-evening snack. Medical timing needs are set with the veterinarian. See <a href="/diets/diabetic-diets">Diabetic Diets</a>.</p>
        <h2 id="schedule">Building a Schedule</h2>
        <p>A practical default for a healthy adult is two measured meals roughly 10 to 12 hours apart, with treats counted within the daily calorie budget. Keep the schedule consistent day to day, which supports digestion and makes house-training and litter-box routines predictable. Adjust for life stage, medical needs, and the household, but keep meals measured and intake monitored. See <a href="/feeding/treats-and-the-ten-percent-rule">Treats and the 10 Percent Rule</a>.</p>

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
