import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CrossPortfolioCard , ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Puppy Nutrition Guide — Large Breed Formulas | Dog.com', description: 'Complete puppy nutrition guide. Large breed puppy formula explained, how much to feed by age, feeding schedule, and when to switch to adult food.', path: '/nutrition/puppy-nutrition', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Puppy Nutrition Guide', description: 'Large breed formulas, feeding schedule, and when to switch to adult food.', url: 'https://dog.com/nutrition/puppy-nutrition', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function PuppyNutritionPage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      contentType="nutrition"
      hero={{ title: 'Puppy Nutrition Guide', subtitle: 'Puppies have fundamentally different nutritional needs than adults — especially large breed puppies, where overfeeding calcium drives orthopedic disease. What every new puppy owner needs to know.', category: 'Puppy Nutrition', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Nutrition', href: '/nutrition' }, { name: 'Puppy Nutrition', href: '/nutrition/puppy-nutrition' }]}
      relatedLinks={[{ title: 'Dog Nutrition Hub', href: '/nutrition', category: 'Hub' }, { title: 'How Much to Feed', href: '/nutrition/how-much-to-feed', category: 'Nutrition' }, { title: 'Best Dog Food for Puppies', href: '/reviews/best-dog-food-for-puppies', category: 'Reviews' }, { title: 'Feeding Frequency', href: '/nutrition/feeding-frequency', category: 'Nutrition' }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[{ label: 'Puppy vs Adult Formula', href: '#formulas' }, { label: 'Large Breed Puppies — Critical Difference', href: '#large-breed' }, { label: 'Feeding Schedule by Age', href: '#schedule' }, { label: 'How Much to Feed', href: '#amount' }, { label: 'When to Switch to Adult', href: '#switch' }, { label: 'What Not to Feed', href: '#avoid' }]} />
        <RelatedLinks title="Related" links={[{ label: 'How Much to Feed Your Dog', href: '/nutrition/how-much-to-feed' }, { label: 'Best Dry Dog Food 2025', href: '/reviews/best-dry-dog-food' }, { label: 'Dog Vaccination Guide', href: '/health/dog-vaccinations' }]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="nutrition" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance every Tuesday." source="nutrition-puppy" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
        <h2 id="formulas">Puppy Formula vs Adult Food</h2>
        <p>Puppy formulas are nutritionally distinct from adult formulas in ways that matter. Puppies require more protein, more fat, more calories per pound of body weight, and a different calcium-to-phosphorus ratio than adults. Feeding adult food to a growing puppy is not ideal and can result in nutrient deficiencies that affect development. Conversely, feeding adult food with appropriate supplementation is not a substitute — the ratio adjustments in puppy-specific formulas are designed for the requirements of growth.</p>
        <p>Choose a puppy food with an <a href="https://aafco.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">AAFCO</a> statement that includes &quot;growth&quot; or &quot;all life stages&quot; in the life stage claim. &quot;Maintenance&quot; formulas are not appropriate for puppies.</p>

        <h2 id="large-breed">Large Breed Puppies — A Critical Difference</h2>
        <p>The most important nutritional distinction in puppy feeding: <strong>large and giant breed puppies (expected adult weight over 50 lbs) must eat a large breed puppy formula.</strong> This is not a marketing preference — it is a clinically meaningful distinction.</p>
        <p>Large breed puppies that eat standard puppy formulas (higher calcium content) grow their skeletons faster than their joint structures can accommodate, contributing to developmental orthopedic diseases including hip dysplasia, osteochondrosis dissecans (OCD), and elbow dysplasia. Large breed puppy formulas are formulated with controlled calcium levels that allow appropriate skeletal development.</p>
        <p><strong>Rule:</strong> Any dog expected to weigh more than 50 lbs as an adult should eat a formula explicitly labeled &quot;large breed puppy&quot; or have a guaranteed analysis that meets large breed puppy calcium specifications (1.0–1.8% DM calcium). When in doubt, ask your veterinarian.</p>

        <h2 id="schedule">Feeding Schedule by Age</h2>
        <ul>
          <li><strong>8–12 weeks:</strong> 4 meals per day. Puppies at this age have small stomachs and need frequent feeding to maintain blood sugar. Never skip meals in very young puppies.</li>
          <li><strong>3–6 months:</strong> 3 meals per day</li>
          <li><strong>6–12 months:</strong> 2 meals per day (move to adult schedule)</li>
          <li><strong>12+ months:</strong> 2 meals per day — maintain 2 meals daily through adult life for better digestion and lower bloat risk than once-daily feeding</li>
        </ul>
        <p>Always feed at consistent times. Consistent meal times regulate digestion and make housetraining significantly easier — puppies typically need to eliminate within 15–30 minutes of eating.</p>

        <h2 id="amount">How Much to Feed</h2>
        <p>Use the puppy-specific feeding guidelines on your food bag as the starting point, calibrated to your puppy&apos;s current weight. Adjust based on body condition scoring (BCS) monthly. Growing puppies should maintain a BCS of 4–5 — you should be able to feel ribs easily but not see them, with a visible waist.</p>
        <p>Growing puppies should not be overweight. The traditional belief that &quot;puppy fat&quot; is normal and healthy is incorrect — overweight puppies put excess stress on developing joints and growth plates. Lean puppies are healthier puppies, particularly in large breeds.</p>

        <h2 id="switch">When to Switch to Adult Food</h2>
        <p>The switch from puppy to adult food is based on when the dog reaches skeletal maturity — not a fixed age:</p>
        <ul>
          <li><strong>Small breeds (under 20 lbs adult):</strong> 9–12 months</li>
          <li><strong>Medium breeds (20–50 lbs):</strong> 12 months</li>
          <li><strong>Large breeds (50–90 lbs):</strong> 12–18 months</li>
          <li><strong>Giant breeds (90+ lbs):</strong> 18–24 months</li>
        </ul>
        <p>Transition gradually over 7–10 days: start 75% old food / 25% new food, then 50/50, then 25/75, then 100% new food. This prevents digestive upset from rapid diet change.</p>

        <h2 id="avoid">What Not to Feed Puppies</h2>
        <ul>
          <li><strong>Adult dog food</strong> — nutritionally inadequate for growth, and may have excess calcium for large breed puppies</li>
          <li><strong>Human food &apos;supplements&apos;</strong> — cottage cheese, eggs, and meat added to puppy food disrupt the calcium-to-phosphorus ratio in puppy food. If you are feeding a complete and balanced puppy food, do not supplement proteins.</li>
          <li><strong>Calcium supplements</strong> — unless specifically prescribed by a vet. Large breed puppies on large breed formula do not need calcium supplementation. Excess calcium in large breed puppies causes the exact orthopedic problems you are trying to prevent.</li>
          <li><strong>Raw bones</strong> — fracture risk, bacterial contamination, and uncontrolled calcium and phosphorus</li>
          <li><strong>Toxic foods</strong> — all the same toxic food rules apply to puppies, who are more sensitive to toxins due to their smaller size. See our <a href="/nutrition/toxic-foods">toxic foods guide →</a></li>
        </ul>
      </div>
    </ArticleLayout>
  )
}
