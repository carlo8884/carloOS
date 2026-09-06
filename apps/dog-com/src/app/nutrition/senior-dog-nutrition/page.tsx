import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard, ArticleByline, AffiliateDisclosure } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Senior Dog Nutrition — When to Switch | Dog.com', description: 'Senior dog nutrition guide. When to switch to senior food, what "senior" formulas actually do, protein requirements in old age.', path: '/nutrition/senior-dog-nutrition', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Senior Dog Nutrition Guide', description: 'When to switch, what senior formulas do, protein needs, and supplements for aging dogs.', url: 'https://dog.com/nutrition/senior-dog-nutrition', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Senior Dog Nutrition', description: 'Nutrition guidance for aging dogs.', url: 'https://dog.com/nutrition/senior-dog-nutrition', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)

export default function SeniorDogNutritionPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Senior Dog Nutrition', subtitle: 'Dogs age faster than humans and their nutritional needs change with age — but "senior dog food" as a category is less well-defined than many owners realize. Here\'s what the research says about feeding aging dogs well.', category: 'Dog Nutrition', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Nutrition', href: '/nutrition' }, { name: 'Senior Dog Nutrition', href: '/nutrition/senior-dog-nutrition' }]}
        relatedLinks={[{ title: 'Dog Nutrition Hub', href: '/nutrition', category: 'Hub' }, { title: 'Weight Management', href: '/nutrition/weight-management', category: 'Nutrition' }, { title: 'Dog Supplements', href: '/nutrition/dog-supplements', category: 'Nutrition' }, { title: 'Best Dog Food Senior', href: '/reviews/best-dog-food-senior', category: 'Reviews' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">When Is "Senior"?</div>
            {[['Small breeds', 'Senior at 10-12 years'], ['Medium breeds', 'Senior at 8-10 years'], ['Large breeds', 'Senior at 7-8 years'], ['Giant breeds', 'Senior at 5-6 years']].map(([k,v]) => (
              <div key={k} className="py-2 border-b border-brand-border last:border-0 text-xs">
                <div className="text-brand-text-light">{k}</div>
                <div className="font-bold text-brand-dark">{v}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Best Dry Dog Food', href: '/reviews/best-dry-dog-food' }, { label: 'Dog Supplements', href: '/nutrition/dog-supplements' }, { label: 'Senior Dog Care', href: '/health/senior-dog-care' }]} />
          <CrossPortfolioCard currentSite="dog-com" contentType="nutrition" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="nutrition-senior" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
            {/* Under-hero capture — source must end in under-hero so it always renders. */}
            <div className="mb-8">
              <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                Keep the senior-dog-nutrition checklist
              </p>
              <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                Senior-dog-nutrition checklist
              </h2>
              <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                Email the aging-dog feeding notes that
                match the care copy on this page —
                AAFCO has no separate senior standard,
                protein at or above adult maintenance
                (25% dry-matter minimum, ideally
                28–35%) unless kidney disease is
                diagnosed, switch on activity drop /
                weight gain / renal or joint or
                cognitive change rather than calendar
                age, and EPA/DHA plus a 4–6 week
                glucosamine trial when joints stiffen.
                Educational senior-dog-nutrition
                checklist, not a new product hop, not
                a prescription renal diet, and not a
                substitute for a veterinarian. The
                existing WSAVA senior Amazon and
                Purina Pro Plan Chewy searches stay
                below. No spam.
              </p>
              <EmailCapture
                variant="inline"
                siteId="dog-com"
                title="Senior-dog-nutrition checklist"
                subtitle="Email the protein, switch-trigger, and supplement notes. No spam."
                ctaText="Email my senior-dog-nutrition checklist"
                source="nutrition-senior-under-hero"
              />
            </div>
          <h2>What "Senior Dog Food" Actually Means</h2>
          <p><a href="https://aafco.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">AAFCO</a> does not have a separate nutritional standard for "senior" dog food — the category is a marketing designation, not a regulated nutritional specification. Senior formulas from different manufacturers vary enormously in their actual nutritional profile. Some reduce calories (appropriate for overweight seniors), some add joint supplements (useful), some simply add the label "senior" to an adult formula with minimal changes. Always look at the actual nutrient profile, not just the label.</p>
          <p>The most important factors for senior dogs: caloric density appropriate to activity level and weight, high-quality protein, reduced phosphorus if kidney disease is present, and omega-3 fatty acids for cognitive and joint support.</p>

          <h2>Protein in Aging Dogs — The Common Misconception</h2>
          <p>Older advice recommended reducing protein in senior dogs to "protect the kidneys." Current veterinary nutrition consensus is the opposite: aging dogs have <em>higher</em> protein requirements per unit of body weight than young adults to maintain muscle mass. Age-related muscle loss (sarcopenia) is a significant health issue in senior dogs, and adequate dietary protein is the primary nutritional countermeasure.</p>
          <p>Protein restriction is only appropriate when kidney disease is diagnosed and documented — and even then, the most current nephrology guidance recommends moderate (not extreme) protein restriction. Reducing protein in a healthy senior dog without kidney disease is counterproductive. Look for senior foods with protein levels at or above the adult maintenance levels — minimum 25% protein on a dry matter basis, ideally 28–35%.</p>

          <h2>When to Switch</h2>
          <p>There is no single correct age to switch to a senior formula — the transition should be driven by the individual dog's health status. A 9-year-old Labrador that is lean, active, and healthy may not need a senior food change. A 7-year-old Great Dane with arthritis, reduced activity, and a few extra pounds does. The relevant trigger points:</p>
          <ul>
            <li><strong>Significant reduction in activity level</strong> — reduce caloric density to prevent weight gain</li>
            <li><strong>Weight gain on the current food</strong> — switch to a lower-calorie formula</li>
            <li><strong>Kidney disease diagnosis</strong> — switch to a renal diet (prescription only)</li>
            <li><strong>Cognitive decline signs</strong> — add EPA/DHA supplementation or switch to a formula with high omega-3s</li>
            <li><strong>Joint disease</strong> — add joint supplements; consider prescription joint diet if severe</li>
          </ul>

          <h2>Key Supplements for Senior Dogs</h2>
          <p><strong>Omega-3 fatty acids (EPA/DHA):</strong> Marine omega-3s have the strongest published evidence (Roush et al., JAVMA 2010) for joint inflammation and growing evidence for cognitive and cardiovascular support in senior dogs. Nordic Naturals Omega-3 Pet dosed at 20–55mg/kg combined EPA+DHA daily. This dose is higher than most fish oil products recommend — calculate from the EPA+DHA content on the label, not total fish oil volume.</p>
          <p><strong>Glucosamine + chondroitin (Dasuquin with MSM):</strong> For dogs showing any joint stiffness or reluctance to exercise. Most effective when started before symptoms are severe. Allow 4–6 weeks for full effect.</p>
          <p><strong>Antioxidants — vitamin E, vitamin C, beta-carotene:</strong> Some senior dog foods add antioxidant complexes. Evidence for supplemental antioxidants in otherwise well-nourished dogs is modest but safe. Hill's Science Diet and Purina Pro Plan senior formulas both incorporate antioxidant blends.</p>

          <h2>Recommended Senior Foods (WSAVA-Compliant)</h2>
          <p>The same manufacturer standards apply in the senior category as adult and puppy — board-certified veterinary nutritionists, AAFCO feeding trials, published research. Royal Canin, Purina Pro Plan, and Hill's Science Diet all have senior-specific formulas meeting these criteria. Purina Pro Plan Bright Mind (with enhanced botanical oils targeting cognitive support) has clinical trial data supporting cognitive benefits in senior dogs — a differentiator worth noting for dogs showing cognitive changes.</p>

          <AffiliateDisclosure variant="inline" siteId="dog-com" />

          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">Buyer&apos;s Guide — Senior Dog Nutrition</div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">Senior-specific formulas from Purina Pro Plan, Royal Canin, and Hill&apos;s Science Diet all use AAFCO feeding trials and veterinary nutritionist oversight. Glucosamine and omega-3 supplements are the two most commonly recommended additions for older dogs with joint or cognitive concerns.</p>
            <div className="flex flex-wrap gap-3">
              <a href="/go/chewy-brand/purina+pro+plan+senior+dry+dog+food?s=nutrition-senior" rel="sponsored nofollow noopener noreferrer" target="_blank" className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-primary text-white text-sm font-semibold rounded-lg hover:bg-brand-primary-dark transition-colors no-underline">
                Shop Senior Dog Food on Chewy →
              </a>
              <a href="/go/amazon-brand/senior+dog+dry+food+wsava+recommended?s=nutrition-senior" rel="sponsored nofollow noopener noreferrer" target="_blank" className="inline-flex items-center gap-2 px-4 py-2.5 border border-brand-primary text-brand-primary text-sm font-semibold rounded-lg hover:bg-brand-primary-pale transition-colors no-underline">
                Shop on Amazon →
              </a>
            </div>
            <p className="text-2xs text-brand-text-light mt-3">See also: <a href="/reviews/best-dog-food-senior" className="text-brand-primary hover:underline no-underline">Best Senior Dog Food 2026</a> · <a href="/reviews/best-joint-supplements" className="text-brand-primary hover:underline no-underline">Best Joint Supplements</a></p>
          </div>
        </div>
      </ArticleLayout>
    </>
  )
}
