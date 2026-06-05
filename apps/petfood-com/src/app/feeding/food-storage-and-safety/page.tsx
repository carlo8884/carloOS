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
  title: 'Pet Food Storage and Safety — Spoilage and Handling | PetFood.com',
  description:
    'How to store kibble and canned food to prevent rancidity and contamination, the case against decanting, handling raw and fresh food, and recall awareness.',
  path: '/feeding/food-storage-and-safety',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Pet Food Storage and Safety — Spoilage and Handling | PetFood.com',
  description:
    'How to store kibble and canned food to prevent rancidity and contamination, the case against decanting, handling raw and fresh food, and recall awareness.',
  url: 'https://petfood.com/feeding/food-storage-and-safety',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function FoodStorageAndSafetyPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Pet Food Storage and Safety',
        subtitle:
          'Good food can be spoiled by poor storage. Fat oxidation, moisture, pantry pests, and cross-contamination all degrade pet food after it leaves the bag, and improper handling of raw and fresh diets introduces pathogen risk to the household. This page covers storage best practice, the surprising case against decanting kibble, and recall awareness.',
        category: 'Feeding Guide',
        publishedAt: 'May 2026',
        readTime: '8 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Feeding', href: '/feeding' },
        { name: 'Pet Food Storage and Safety', href: '/feeding/food-storage-and-safety' },
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
              { label: 'How Pet Food Spoils', href: '#spoils' },
              { label: 'Storing Dry Food', href: '#dry' },
              { label: 'The Case Against Decanting', href: '#decanting' },
              { label: 'Storing Canned and Fresh', href: '#wet' },
              { label: 'Handling Raw Diets', href: '#raw' },
              { label: 'Recall Awareness', href: '#recall' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Preservatives in Pet Food', href: '/ingredients/preservatives-pet-food' },
              { label: 'Raw vs Cooked Diets', href: '/compare/raw-vs-cooked-diets' },
              { label: 'Pet Food Recalls and the FDA', href: '/guides/pet-food-recalls-and-fda' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="food-storage-and-safety"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>Once a bag is opened, pet food begins to degrade through fat oxidation (rancidity), moisture uptake, and exposure to air, light, heat, and pests. Spoiled food loses palatability and nutritional value — oxidation destroys fat-soluble vitamins and essential fatty acids — and contaminated food poses a safety risk. Proper storage preserves quality through the best-by window, and proper handling prevents foodborne illness in pets and people. See <a href="/ingredients/preservatives-pet-food">Preservatives in Pet Food</a>.</p>
        <h2 id="spoils">How Pet Food Spoils</h2>
        <p>The main spoilage pathway for dry food is oxidation of the fats, which produces rancid off-flavors and destroys nutrients, accelerated by air, heat, and light. Foods preserved with natural antioxidants (mixed tocopherols, rosemary) oxidize faster than those with synthetic preservatives, so natural-preserved foods have shorter shelf lives once opened. Moisture uptake also promotes mold, and warmth invites pantry-moth and beetle infestation.</p>
        <h2 id="dry">Storing Dry Food</h2>
        <p>Keep dry food in its original bag, sealed, in a cool, dry, dark place, and use it within the best-by date and ideally within a few weeks of opening. The original bag is engineered with a fat- and oxygen-barrier liner that an ordinary container lacks. Buy a bag size the household will finish before it goes stale rather than the largest bag for cost savings if that means months of open storage.</p>
        <h2 id="decanting">The Case Against Decanting</h2>
        <p>A common practice is to dump kibble into a plastic storage bin and discard the bag. This is suboptimal for two reasons: the bin lacks the bag&apos;s oxygen barrier, accelerating oxidation, and residual fat and crumbs build up on the bin walls, going rancid and contaminating fresh food. If a container is used, keep the food inside its original bag within the container, and wash and fully dry the container between bags. Retaining the bag also preserves the lot number and best-by date needed for any recall.</p>
        <h2 id="wet">Storing Canned and Fresh</h2>
        <p>Unopened cans are shelf-stable until their best-by date. Once opened, canned food must be refrigerated, covered, and used within a few days (commonly cited as up to about five to seven days, per manufacturer guidance). Do not leave wet food in the bowl for more than an hour or two at room temperature, as it spoils and grows bacteria. Fresh and gently cooked commercial diets follow refrigeration and use-by rules similar to human perishable food.</p>
        <h2 id="raw">Handling Raw Diets</h2>
        <p>Raw diets carry the highest handling-safety burden because of pathogen risk (Salmonella, Listeria, Campylobacter) to both pets and the household. Handle raw pet food like raw meat for humans: keep it frozen until use, thaw in the refrigerator, prevent cross-contamination with human-food surfaces, wash hands and all contact surfaces and bowls thoroughly, and pick up uneaten food promptly. The major veterinary bodies caution against raw diets partly because of these risks. See <a href="/compare/raw-vs-cooked-diets">Raw vs Cooked Diets</a> and the <a href="/guides/raw-pet-food-evaluation">Raw Pet Food Evaluation</a>.</p>
        <h2 id="recall">Recall Awareness</h2>
        <p>Pet food recalls happen — for pathogen contamination, formulation errors (such as toxic vitamin D levels), or foreign material. Keep the original bag or can with its lot number and best-by date so a recalled product can be identified, and check the FDA CVM Recalls and Withdrawals database periodically or sign up for alerts. If a food is recalled, stop feeding it and follow the manufacturer and FDA instructions. See <a href="/guides/pet-food-recalls-and-fda">Pet Food Recalls and the FDA</a>.</p>

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
