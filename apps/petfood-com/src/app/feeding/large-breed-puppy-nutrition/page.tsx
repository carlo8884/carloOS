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
  title: 'Large-Breed Puppy Nutrition and the Calcium Ceiling | PetFood.com',
  description:
    'Why large-breed puppies need a specific diet, the calcium ceiling and developmental orthopedic disease, controlled growth rate, and reading the AAFCO statement.',
  path: '/feeding/large-breed-puppy-nutrition',
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
  title: 'Large-Breed Puppy Nutrition and the Calcium Ceiling | PetFood.com',
  description:
    'Why large-breed puppies need a specific diet, the calcium ceiling and developmental orthopedic disease, controlled growth rate, and reading the AAFCO statement.',
  url: 'https://petfood.com/feeding/large-breed-puppy-nutrition',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',

  citation: SOURCES,
})


export default function LargeBreedPuppyNutritionPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Large-Breed Puppy Nutrition',
        subtitle:
          'Large- and giant-breed puppies are the one group where the wrong puppy food can cause lifelong skeletal disease. The culprit is excess calcium and over-rapid growth during the critical developmental window. This page explains the calcium ceiling, the case for controlled (not maximized) growth, and exactly what to check on the label.',
        category: 'Feeding Guide',
        publishedAt: 'May 2026',
        readTime: '10 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Feeding', href: '/feeding' },
        { name: 'Large-Breed Puppy Nutrition', href: '/feeding/large-breed-puppy-nutrition' },
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
              { label: 'The Unique Risk', href: '#risk' },
              { label: 'Developmental Orthopedic Disease', href: '#dod' },
              { label: 'The Calcium Ceiling', href: '#calcium' },
              { label: 'Controlled Growth Rate', href: '#growth' },
              { label: 'Reading the Label', href: '#label' },
              { label: 'When to Switch to Adult', href: '#switch' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Puppy and Kitten Growth Diets', href: '/diets/puppy-and-kitten-growth-diets' },
              { label: 'Minerals in Pet Food', href: '/nutrition/minerals-in-pet-food' },
              { label: 'AAFCO Completeness Explained', href: '/guides/aafco-completeness-explained' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="large-breed-puppy-nutrition"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
        <p>Puppies expected to reach 70 pounds or more as adults grow over a longer window and are uniquely sensitive to dietary calcium and to over-rapid growth. Feeding them a standard puppy or all-life-stages food not validated for large-size growth, or over-supplementing calcium, raises the risk of developmental orthopedic disease — joint and bone abnormalities that can cause lifelong lameness. This is the clearest case in which the specific diet, and the feeding amount, materially affect long-term health.</p>
        <h2 id="risk">The Unique Risk</h2>
        <p>Unlike small breeds, large-breed puppies cannot fully regulate calcium absorption when dietary calcium is high — excess calcium is absorbed and interferes with normal skeletal development. Combined with the long growth period of large breeds and the temptation to feed for maximum size, this creates a window of vulnerability that the right diet manages and the wrong diet aggravates. See <a href="/diets/puppy-and-kitten-growth-diets">Puppy and Kitten Growth Diets</a>.</p>
        <h2 id="dod">Developmental Orthopedic Disease</h2>
        <p>Developmental orthopedic diseases include osteochondrosis, hip and elbow dysplasia, and angular limb deformities. Excess calcium, excess energy (driving rapid growth and weight), and excess weight on developing joints all contribute. Genetics set the predisposition, but nutrition is a modifiable factor — which is why dietary management during growth is a genuine intervention, not just feeding preference.</p>
        <h2 id="calcium">The Calcium Ceiling</h2>
        <p>AAFCO established a separate growth profile for large-size dogs with a tighter calcium maximum (the safe upper limit is lower than for small-breed growth). A diet labeled for growth including large-size growth has been formulated to stay under this ceiling. A standard growth or all-life-stages food not so validated can legally contain more calcium than is safe for a giant-breed puppy. See <a href="/nutrition/minerals-in-pet-food">Minerals in Pet Food</a>.</p>
        <h2 id="growth">Controlled Growth Rate</h2>
        <p>The goal for large-breed puppies is steady, moderate growth to a lean body condition — not the fastest or largest growth. Overfeeding to push size raises orthopedic-disease risk; a lean body condition during growth is protective. The adult size is determined by genetics regardless of how fast the puppy is grown, so feeding for maximum growth gains nothing and adds risk. Keep the puppy lean (body condition score 4 to 5) throughout growth. See <a href="/feeding/body-condition-scoring">Body Condition Scoring</a>.</p>
        <h2 id="label">Reading the Label</h2>
        <p>Check the AAFCO nutritional adequacy statement specifically for large-size growth wording: it should read, in substance, formulated for (or feeding tests substantiate) growth including growth of large size dogs (70 pounds or more as an adult), or all life stages including large-size growth. An all-life-stages food that omits the large-size growth wording has not been validated against the tighter calcium ceiling. See <a href="/guides/aafco-completeness-explained">AAFCO Completeness Explained</a>.</p>
        <h2 id="switch">When to Switch to Adult</h2>
        <p>Large-breed puppies grow for longer than small breeds and are typically kept on an appropriate large-breed growth (or validated all-life-stages) diet until they approach skeletal maturity, often 12 to 24 months depending on breed. The timing is individualized and best confirmed with the veterinarian, who can assess growth and body condition. Switching too early can shortchange growth nutrition; switching appropriately avoids prolonged excess energy intake.</p>

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
