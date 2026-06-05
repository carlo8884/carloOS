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
  title: 'Puppy and Kitten Growth Diet Requirements | PetFood.com',
  description:
    'Why growth diets differ from adult food — higher protein, fat, calcium, and DHA, the large-breed calcium ceiling, and the risks of adult food.',
  path: '/diets/puppy-and-kitten-growth-diets',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Puppy and Kitten Growth Diet Requirements | PetFood.com',
  description:
    'Why growth diets differ from adult food — higher protein, fat, calcium, and DHA, the large-breed calcium ceiling, and the risks of feeding adult food to young animals.',
  url: 'https://petfood.com/diets/puppy-and-kitten-growth-diets',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function PuppyAndKittenGrowthDietsPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Puppy and Kitten Growth Diets',
        subtitle:
          'Growth is the most nutritionally demanding life stage, and the consequences of getting it wrong — skeletal disease in large-breed puppies, developmental deficits in kittens — can be permanent. Growth diets carry higher minimums for several nutrients and, for large-breed puppies, a critical calcium ceiling. This page covers the growth requirements and the common feeding errors.',
        category: 'Condition-Specific Diet',
        publishedAt: 'May 2026',
        readTime: '11 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Diets', href: '/diets' },
        { name: 'Puppy and Kitten Growth Diets', href: '/diets/puppy-and-kitten-growth-diets' },
      ]}
      relatedLinks={[
        { title: 'Diets Hub', href: '/diets' },
        { title: 'Kidney Disease Diets', href: '/diets/kidney-disease-diets' },
        { title: 'Weight-Management Diets', href: '/diets/weight-management-diets' },
        { title: 'Food Allergy and Elimination Diets', href: '/diets/food-allergy-and-elimination-diets' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Why Growth Is Demanding', href: '#demanding' },
              { label: 'Higher Nutrient Minimums', href: '#minimums' },
              { label: 'DHA for Development', href: '#dha' },
              { label: 'The Large-Breed Calcium Ceiling', href: '#calcium' },
              { label: 'Kitten Specifics', href: '#kitten' },
              { label: 'Common Feeding Errors', href: '#errors' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Large-Breed Puppy Nutrition', href: '/feeding/large-breed-puppy-nutrition' },
              { label: 'Minerals in Pet Food', href: '/nutrition/minerals-in-pet-food' },
              { label: 'Pet Food by Life Stage', href: '/life-stage' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="puppy-and-kitten-growth-diets"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>During growth, an animal builds bone, muscle, organs, and nervous tissue at a rapid rate, requiring more energy and more of nearly every nutrient per unit of body weight than at any other life stage except lactation. AAFCO sets a distinct growth-and-reproduction nutrient profile with higher minimums, and feeding a growing animal a diet formulated only for adult maintenance can produce deficiencies with lasting consequences. See <a href="/life-stage">Pet Food by Life Stage</a>.</p>
        <h2 id="demanding">Why Growth Is Demanding</h2>
        <p>A growing puppy or kitten may need roughly twice the energy per kilogram of an adult, and proportionally more protein to lay down lean tissue, more calcium and phosphorus to mineralize the skeleton, and more of several micronutrients. This is why growth diets and all-life-stages diets carry higher minimums than adult-maintenance foods, and why a food labeled for adult maintenance only is inappropriate for a youngster.</p>
        <h2 id="minimums">Higher Nutrient Minimums</h2>
        <p>The AAFCO growth profile sets higher minimums than adult maintenance for crude protein (22.5 percent versus 18 percent dry-matter for dogs; 30 percent for cats), crude fat, calcium, phosphorus, and several other nutrients. A complete growth diet is formulated to these elevated targets. See <a href="/nutrition/dietary-protein-requirements">Dietary Protein Requirements</a> and <a href="/nutrition/minerals-in-pet-food">Minerals in Pet Food</a>.</p>
        <h2 id="dha">DHA for Development</h2>
        <p>Docosahexaenoic acid (DHA), a long-chain omega-3, supports neural and retinal development in puppies and kittens, and growth diets are commonly DHA-supplemented for this reason. Adequate DHA during early development is associated with better trainability and visual function. This is one of the evidence-supported reasons to feed a genuine growth diet rather than an adult food. See <a href="/nutrition/dietary-fat-and-fatty-acids">Dietary Fat and Essential Fatty Acids</a>.</p>
        <h2 id="calcium">The Large-Breed Calcium Ceiling</h2>
        <p>Large- and giant-breed puppies are uniquely vulnerable to excess calcium during growth, which can cause developmental orthopedic disease including osteochondrosis. AAFCO created a separate large-size growth profile (for dogs reaching 70 pounds or more as adults) with a tighter calcium maximum. Owners of large-breed puppies must confirm the food is validated for growth including large-size growth, because an all-life-stages food not so validated can legally exceed the safe ceiling. See <a href="/feeding/large-breed-puppy-nutrition">Large-Breed Puppy Nutrition</a>.</p>
        <h2 id="kitten">Kitten Specifics</h2>
        <p>Kittens, as obligate carnivores in their most demanding life stage, require high protein, taurine, arachidonic acid, and pre-formed vitamin A, plus high energy density. They generally do well on a kitten or all-life-stages diet fed to appetite during early growth. Unlike large-breed puppies, kittens do not have the same calcium-ceiling concern, but they share the need for a properly formulated growth diet. See <a href="/species/dog-vs-cat-nutrition-overview">Dog vs Cat Nutrition</a>.</p>
        <h2 id="errors">Common Feeding Errors</h2>
        <ol>
          <li>Feeding an adult-maintenance diet to a growing animal — it does not meet growth minimums.</li>
          <li>Feeding a large-breed puppy an all-life-stages food not validated for large-size growth, risking excess calcium.</li>
          <li>Over-supplementing calcium (with bone meal or calcium tablets) on top of a complete growth diet, which is a classic cause of orthopedic disease.</li>
          <li>Overfeeding to maximize growth rate — rapid growth raises orthopedic-disease risk; lean, steady growth is the goal.</li>
          <li>Switching to adult food too early or too late — timing depends on breed size and should follow veterinary guidance.</li>
        </ol>

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
