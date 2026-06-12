import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
  ArticleSourcesList,
  ArticleByline
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'How to Transition Your Pet to a New Food | PetFood.com',
  description:
    'The 7-to-10-day food transition schedule, why gradual change prevents GI upset, handling picky eaters, and when a faster or slower transition is appropriate.',
  path: '/feeding/how-to-transition-pet-food',
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
  title: 'How to Transition Your Pet to a New Food | PetFood.com',
  description:
    'The 7-to-10-day food transition schedule, why gradual change prevents GI upset, handling picky eaters, and when a faster or slower transition is appropriate.',
  url: 'https://petfood.com/feeding/how-to-transition-pet-food',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',

  citation: SOURCES,
})


export default function HowToTransitionPetFoodPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'How to Transition Pet Food',
        subtitle:
          'Switching foods abruptly is one of the most common causes of avoidable vomiting and diarrhea, because the gut and its microbiome need time to adapt to a new ingredient and nutrient profile. A gradual transition over a week or more prevents most upset. This page gives the schedule, the reasoning, and the exceptions.',
        category: 'Feeding Guide',
        publishedAt: 'May 2026',
        readTime: '8 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Feeding', href: '/feeding' },
        { name: 'How to Transition Pet Food', href: '/feeding/how-to-transition-pet-food' },
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
              { label: 'Why Transition Gradually', href: '#why' },
              { label: 'The Standard Schedule', href: '#schedule' },
              { label: 'Slower Transitions', href: '#slower' },
              { label: 'Picky Eaters', href: '#picky' },
              { label: 'When to Slow Down', href: '#slowdown' },
              { label: 'After the Switch', href: '#after' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'How Much to Feed a Dog', href: '/feeding/how-much-to-feed-a-dog' },
              { label: 'Fiber and Digestive Health Diets', href: '/diets/fiber-and-digestive-health' },
              { label: 'Feeding Frequency and Schedules', href: '/feeding/feeding-frequency-and-schedules' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="how-to-transition-pet-food"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
        <p>A new food differs from the old one in ingredients, fiber, fat, and nutrient profile, and the digestive system — including the gut microbiome that helps process food — adapts to those differences over days. An abrupt switch can outpace that adaptation, producing soft stool, gas, vomiting, or refusal. A gradual transition gives the gut time to adjust and is the standard recommendation for any food change in a healthy animal.</p>
        <h2 id="why">Why Transition Gradually</h2>
        <p>The gut microbiome shifts its composition in response to diet, and abrupt dietary change disrupts it transiently, which is a common cause of diet-change diarrhea. Mixing increasing proportions of the new food with the old lets the microbiome and digestive enzymes adapt incrementally. The same logic applies whether switching brands, formulas, or formats. See <a href="/diets/fiber-and-digestive-health">Fiber and Digestive Health Diets</a>.</p>
        <h2 id="schedule">The Standard Schedule</h2>
        <ol>
          <li>Days 1 to 3: about 75 percent old food, 25 percent new food.</li>
          <li>Days 4 to 6: about 50 percent old, 50 percent new.</li>
          <li>Days 7 to 9: about 25 percent old, 75 percent new.</li>
          <li>Day 10 onward: 100 percent new food.</li>
          <li>Watch stool quality and appetite at each step; if signs of upset appear, hold at the current ratio until they resolve.</li>
        </ol>
        <h2 id="slower">Slower Transitions</h2>
        <p>Animals with sensitive stomachs, a history of GI disease, or those switching to a markedly different diet (for example, kibble to raw or fresh, or to a high-fat performance food) benefit from a slower transition over two to three weeks. Cats, who can be more diet-conservative than dogs, also often do better with a slower change. The schedule is a default, not a rule — extend it as needed.</p>
        <h2 id="picky">Picky Eaters</h2>
        <p>For animals reluctant to accept a new food, a slower transition with smaller initial increments helps, as does warming wet food slightly to release aroma, ensuring the old and new are mixed rather than offered separately, and avoiding the trap of constantly switching foods to chase preference (which trains pickiness). Cats in particular can develop fixed texture and flavor preferences, so persistence and gradual change matter.</p>
        <h2 id="slowdown">When to Slow Down or Stop</h2>
        <p>If the animal develops more than mild, transient soft stool, or vomits, or refuses to eat, pause the transition and hold at the last tolerated ratio. Persistent vomiting, diarrhea lasting more than a day or two, blood in the stool, or lethargy warrants veterinary attention rather than pushing the transition. A food change should never override signs of genuine illness.</p>
        <h2 id="after">After the Switch</h2>
        <p>Once fully transitioned, recalculate the feeding amount for the new food&apos;s calorie density — a step owners frequently skip, leading to over- or underfeeding when the new food differs in calories per cup. Monitor body condition over the following weeks and adjust. See <a href="/feeding/how-much-to-feed-a-dog">How Much to Feed a Dog</a> and <a href="/nutrition/calories-and-energy-density">Pet Food Calories and Energy Density</a>.</p>

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
