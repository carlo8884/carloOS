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
  title: 'Body Condition Score for Dogs and Cats Explained | PetFood.com',
  description:
    'How to use the 9-point body condition score, the rib-waist-tuck assessment, muscle condition scoring, and why BCS beats the scale for feeding decisions.',
  path: '/feeding/body-condition-scoring',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Body Condition Score for Dogs and Cats Explained | PetFood.com',
  description:
    'How to use the 9-point body condition score, the rib-waist-tuck assessment, muscle condition scoring, and why BCS beats the scale for feeding decisions.',
  url: 'https://petfood.com/feeding/body-condition-scoring',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function BodyConditionScoringPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Body Condition Scoring',
        subtitle:
          'Body condition score is the single most useful tool an owner has for feeding decisions, and it requires no equipment beyond your hands and eyes. It tells you whether the current feeding amount is right far better than the scale does, because it measures fat cover directly. This page explains the 9-point scale, how to assess it, and how to act on it.',
        category: 'Feeding Guide',
        publishedAt: 'May 2026',
        readTime: '9 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Feeding' },
        { name: 'Body Condition Scoring', href: '/feeding/body-condition-scoring' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Why BCS Beats the Scale', href: '#whybcs' },
              { label: 'The 9-Point Scale', href: '#scale' },
              { label: 'How to Assess', href: '#assess' },
              { label: 'Muscle Condition Score', href: '#muscle' },
              { label: 'Acting on the Score', href: '#acting' },
              { label: 'Tracking Over Time', href: '#tracking' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'How Much to Feed a Dog', href: '/feeding/how-much-to-feed-a-dog' },
              { label: 'Weight-Management Diets', href: '/diets/weight-management-diets' },
              { label: 'Senior Pet Diets', href: '/diets/senior-pet-diets' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="body-condition-scoring"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>Body condition score (BCS) is a standardized hands-on assessment of an animal&apos;s fat cover, used by veterinarians worldwide. Unlike body weight, which means nothing without context (is 30 kilograms heavy or light? it depends on the dog), BCS directly answers whether the animal carries too much, too little, or the right amount of fat. It is the practical readout of whether feeding is on target.</p>
        <h2 id="whybcs">Why BCS Beats the Scale</h2>
        <p>A number on the scale has no meaning without a frame of reference, and breed-average weight tables hide enormous individual variation. BCS normalizes for frame: a correctly-conditioned animal scores the same whether it is large or small. This is why feeding decisions should be anchored to BCS, with body weight used to track change once an ideal weight is established. See <a href="/feeding/how-much-to-feed-a-dog">How Much to Feed a Dog</a>.</p>
        <h2 id="scale">The 9-Point Scale</h2>
        <p>The widely used 9-point scale runs from 1 (emaciated) to 9 (grossly obese), with 4 to 5 as ideal. Each point above 5 corresponds to roughly 10 to 15 percent above ideal body weight. A 5/9 animal has easily felt ribs without excess fat, a visible waist from above, and an abdominal tuck from the side. A 4/9 is slightly leaner, also acceptable for many animals, especially athletic dogs.</p>
        <h2 id="assess">How to Assess</h2>
        <p>Assess three things by hand and eye. Ribs: run your hands along the chest — at ideal condition the ribs are easily felt under a thin fat layer, like the back of your hand; if you must press to find them, the animal is overweight. Waist: viewed from above, there should be a visible inward curve behind the ribs. Tuck: viewed from the side, the belly should rise from the chest toward the hind legs rather than hang level or sag. Long or thick coats hide all three, so hands matter more than eyes.</p>
        <h2 id="muscle">Muscle Condition Score</h2>
        <p>Body condition measures fat; muscle condition score (MCS) separately assesses muscle mass over the skull, shoulders, spine, and pelvis. The two are independent — an animal can be overweight (high BCS) yet muscle-wasted (low MCS), common in older animals and in disease. Muscle loss is an important sign and a reason adequate protein matters in older animals. See <a href="/diets/senior-pet-diets">Senior Pet Diets</a>.</p>
        <h2 id="acting">Acting on the Score</h2>
        <p>If BCS is above 5, reduce calories (ideally with a weight-management approach rather than simply less of a maintenance food) and increase activity, targeting gradual loss. If BCS is below 4, increase calories and rule out underlying disease with the veterinarian. If BCS is 4 to 5, the current feeding is on target — maintain and keep monitoring. See <a href="/diets/weight-management-diets">Weight-Management Diets</a>.</p>
        <h2 id="tracking">Tracking Over Time</h2>
        <p>Reassess BCS every two to four weeks during a weight program and at least every few months otherwise. Because owners see their animal daily, gradual change is easy to miss; periodic scoring and a recorded weight catch drift early. Photos from above and from the side, taken on a schedule, are a useful supplement. Establish the ideal weight once, then track the scale against it.</p>

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
