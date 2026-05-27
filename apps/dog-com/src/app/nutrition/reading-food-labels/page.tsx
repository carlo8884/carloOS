import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'How to Read a Dog Food Label — Ingredients, AAFCO & Guaranteed Analysis | Dog.com', description: 'Decode dog food labels. What the ingredient list actually tells you (and doesn\'t), how to read the guaranteed analysis, what AAFCO statements mean, and what to ignore.', path: '/nutrition/reading-food-labels', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'How to Read a Dog Food Label', description: 'Ingredient list, AAFCO statements, and guaranteed analysis decoded.', url: 'https://dog.com/nutrition/reading-food-labels', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function ReadingFoodLabelsPage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      hero={{ title: 'How to Read a Dog Food Label', subtitle: 'The ingredient list is the least useful part of a dog food label. The AAFCO statement is the most important. Here\'s how to read what actually matters.', category: 'Nutrition Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Nutrition', href: '/nutrition' }, { name: 'Reading Food Labels', href: '/nutrition/reading-food-labels' }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[{ label: 'AAFCO Statement — Most Important', href: '#aafco' }, { label: 'Ingredient List — What It Tells You', href: '#ingredients' }, { label: 'Ingredient List — What It Doesn\'t', href: '#what-it-doesnt' }, { label: 'Guaranteed Analysis', href: '#guaranteed-analysis' }, { label: 'Caloric Content', href: '#calories' }, { label: 'Marketing Claims to Ignore', href: '#marketing' }]} />
        <RelatedLinks title="Related" links={[{ label: 'WSAVA Guidelines', href: '/nutrition/wsava-explained' }, { label: 'Best Dry Dog Food 2025', href: '/reviews/best-dry-dog-food' }, { label: 'Grain-Free & DCM Risk', href: '/nutrition/grain-free-dcm-risk' }]} />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance every Tuesday." source="nutrition-labels" />
      </>}
    >
      <div className="carloOS-article">
        <h2 id="aafco">The AAFCO Statement — The Most Important Thing on the Bag</h2>
        <p>The Association of American Feed Control Officials (AAFCO) establishes nutrient profiles for dog food. Every complete and balanced dog food must include one of two AAFCO statements:</p>
        <p><strong>Feeding trial statement:</strong> &quot;Animal feeding tests using AAFCO procedures substantiate that [product] provides complete and balanced nutrition for [life stage].&quot; This means dogs actually ate this food during a feeding trial and were monitored for health outcomes. This is the more rigorous and meaningful claim.</p>
        <p><strong>Formulation statement:</strong> &quot;[Product] is formulated to meet the nutritional levels established by the AAFCO Dog Food Nutrient Profiles for [life stage].&quot; This means the formula was calculated to meet nutrient profiles — no dogs were fed the food in a trial. Weaker claim.</p>
        <p>Look for feeding trial language. Royal Canin, Purina Pro Plan, and Hill&apos;s conduct AAFCO feeding trials. Many premium-marketing brands do not — they rely on formulation statements.</p>

        <h2 id="ingredients">What the Ingredient List Tells You</h2>
        <p>Ingredients are listed by pre-cooking weight, highest first. A few useful things the list does tell you:</p>
        <ul>
          <li><strong>Primary protein source:</strong> If chicken, beef, or fish is listed first, it&apos;s the primary protein by pre-cooking weight. Note: meats contain significant water weight. &quot;Chicken&quot; might fall to 4th place after cooking; &quot;chicken meal&quot; (pre-dried) reflects post-cooking protein content more accurately.</li>
          <li><strong>Legume content:</strong> Peas, lentils, chickpeas, potatoes in the first 5 ingredients are the high-legume profile associated with DCM risk in the FDA investigation. Avoid foods where legumes are primary ingredients.</li>
          <li><strong>Preservatives:</strong> Mixed tocopherols (vitamin E) and rosemary extract are natural preservatives. Ethoxyquin, BHA, and BHT are synthetic preservatives — not definitively harmful at permitted levels, but many owners prefer to avoid them.</li>
        </ul>

        <h2 id="what-it-doesnt">What the Ingredient List Doesn&apos;t Tell You</h2>
        <p>The ingredient list does not tell you the actual percentages of each ingredient, ingredient quality or sourcing, bioavailability of nutrients, whether the food was properly tested, or whether the manufacturer employs qualified nutritionists. Two foods with identical ingredient lists can have radically different nutritional quality depending on sourcing, processing, and quality control. This is why the manufacturer matters more than the label.</p>
        <p><strong>Ingredient splitting:</strong> A manufacturer can make corn appear lower on the list by splitting it into &quot;corn,&quot; &quot;corn flour,&quot; and &quot;corn gluten meal&quot; — three separate ingredients that together outweigh the primary protein source. Look for patterns of the same base ingredient listed multiple ways.</p>
        <p><strong>&quot;By-products&quot; are not inferior:</strong> Chicken by-product meal includes organs, which are nutritionally dense. Marketing has stigmatized by-products without scientific basis. AAFCO feeding trial results matter far more than whether &quot;by-product&quot; appears on the label.</p>

        <h2 id="guaranteed-analysis">Guaranteed Analysis — How to Use It</h2>
        <p>The guaranteed analysis panel shows minimum protein, minimum fat, maximum fiber, and maximum moisture. Minimums and maximums are guaranteed — the actual values may differ. To meaningfully compare two foods:</p>
        <ol>
          <li>Convert to dry matter basis by removing moisture: Dry matter % = (Guaranteed % ÷ (100 − moisture %)) × 100</li>
          <li>Example: 26% protein with 10% moisture = 26 ÷ 90 × 100 = 28.9% protein on dry matter basis</li>
          <li>Now compare two foods on the same basis</li>
        </ol>

        <h2 id="calories">Caloric Content — Where to Find It</h2>
        <p>Caloric density is listed as kcal per cup or kcal per kilogram on the bag — usually in small print near the feeding guidelines. This is essential for calculating actual feeding amounts. Two foods with identical feeding guidelines but different caloric densities will result in different caloric intakes. Always calculate based on kcal/cup, not volume.</p>

        <h2 id="marketing">Marketing Claims to Ignore</h2>
        <ul>
          <li><strong>&quot;Grain-free&quot;</strong> — associated with DCM risk; no proven benefit for most dogs. See our <a href="/nutrition/grain-free-dcm-risk">grain-free guide →</a></li>
          <li><strong>&quot;Natural&quot;</strong> — no meaningful regulatory definition in dog food</li>
          <li><strong>&quot;Human-grade&quot;</strong> — not a regulated term; does not indicate superior nutrition</li>
          <li><strong>&quot;Holistic&quot;</strong> — no regulatory definition</li>
          <li><strong>&quot;Ancestral&quot; / &quot;biologically appropriate&quot;</strong> — marketing language, not a nutritional standard</li>
          <li><strong>&quot;No fillers&quot;</strong> — all carbohydrate sources are called &quot;fillers&quot; by some marketers; rice and oats are not fillers</li>
          <li><strong>Veterinarian-recommended on packaging without context</strong> — verify who recommended it and whether it was a paid endorsement</li>
        </ul>
      </div>
    </ArticleLayout>
  )
}
