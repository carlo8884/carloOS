import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology} from '@carloOS/ui'
import { buildArticleSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Best Dog Food for Sensitive Stomach 2025 — Ranked | Dog.com', description: 'Best dog foods for sensitive stomachs — Purina Pro Plan Sensitive Skin & Stomach, Hill\'s Science Diet Sensitive Stomach, and Royal Canin Digestive Care ranked.', path: '/reviews/best-dog-food-sensitive-stomach', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Best Dog Food for Sensitive Stomach 2025', description: 'Sensitive stomach dog foods — digestibility, WSAVA compliance, and ingredient quality ranked.', url: 'https://dog.com/reviews/best-dog-food-sensitive-stomach', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const ppSchema = buildProductSchema({ name: 'Purina Pro Plan Sensitive Skin & Stomach', description: 'Single salmon protein, no corn/wheat/soy, live probiotics — the standard vet recommendation for sensitive stomachs.', url: 'https://purina.com', imageUrl: '', ratingValue: 9.4, reviewCount: 1 })
const allSchemas = combineSchemas(schema, ppSchema)
const PICKS = [
  { label: 'Best Overall', emoji: '🏆', name: 'Purina Pro Plan Sensitive Skin & Stomach', subtitle: 'Salmon protein · No corn/wheat/soy · Live probiotics', href: '#purina' },
  { label: "Best Hill's", emoji: '⭐', name: "Hill's Science Diet Sensitive Stomach & Skin", subtitle: 'Chicken & barley · Prebiotic fiber · WSAVA', href: '#hills' },
  { label: 'Best Royal Canin', emoji: '🔬', name: 'Royal Canin Digestive Care', subtitle: 'Highly digestible proteins · Fiber blend · Research-backed', href: '#rc' },
]
export default function SensitiveStomachFoodPage() {
  return (
    <>
      <SchemaScript schema={allSchemas} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">🥩 Evidence-Based · May 2025</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Dog Food for Sensitive Stomach 2025</h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">A "sensitive stomach" is not a diagnosis — it is a description. Chronic vomiting, diarrhea, and GI upset require veterinary workup to identify the actual cause. That said, switching to a highly digestible, limited-ingredient, or novel-protein food helps many dogs with GI sensitivity. All picks below meet <a href="https://wsava.org/committees/global-nutrition-committee/" rel="noopener" target="_blank" className="text-brand-primary hover:underline">WSAVA</a> guidelines.</p>
      </div>
      <QuickPicks items={PICKS} />
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid">Best Sensitive Stomach Dog Food</span>
      </nav>
      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-14">
          <div>
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">When to See a Vet First</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">Recurring vomiting, chronic diarrhea, blood in stool, significant weight loss, or GI symptoms that have not improved after a proper 8-12 week dietary trial require veterinary workup — not just food switching. A dietary change without diagnosis is guessing. Your vet can determine if the issue is diet, IBD, food allergy, parasites, or another condition requiring specific treatment.</p>
            </div>
            <ScoreMethodology />
            <ReviewCard id="purina" badge="Best Overall" badgeEmoji="🏆" name="Purina Pro Plan Sensitive Skin & Stomach" subtitle="Salmon & rice · No corn/wheat/soy · Live probiotics · WSAVA top tier" score={9.4} winner
              description={<p>Purina Pro Plan Sensitive Skin & Stomach (salmon and rice formula) is the standard veterinary recommendation for dogs with GI sensitivity and the most consistently recommended sensitive stomach food in general practice. The formula uses salmon as the single animal protein, rice as the primary carbohydrate, and contains no corn, wheat, or soy — common dietary components that some dogs with GI sensitivity react to. The inclusion of live probiotics (Bacillus coagulans) supports digestive health. High digestibility coefficients across all nutrients. WSAVA top-tier compliance with full veterinary nutritionist oversight and feeding trial data. Available in multiple sizes and a cat version for multi-pet households.</p>}
              specs={[{ label: 'WSAVA', value: 'Top tier', highlight: 'good' }, { label: 'Protein', value: 'Salmon — single animal protein', highlight: 'good' }, { label: 'Probiotic', value: 'Live B. coagulans', highlight: 'good' }, { label: 'Excludes', value: 'Corn, wheat, soy' }]}
              pros={['WSAVA top-tier', 'Single novel protein (salmon)', 'Live probiotics', 'No corn/wheat/soy', 'Most vet-recommended sensitive stomach formula']}
              cons={['Not appropriate for fish/salmon allergies', 'Not a hydrolyzed diet for true food allergy diagnosis']}
              price="$55–75 / 30 lb"
              ctaText="Shop Purina Pro Plan Sensitive →"
              ctaHref="https://www.chewy.com/s?query=purina+pro+plan+sensitive+skin+stomach"
              ctaAffiliateProgram="chewy"
              ctaAffiliateProduct="pp-sensitive"
            />
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Situation</div>
              {[['GI sensitivity (mild)', 'Pro Plan Sensitive or Hill\'s SS&S'], ['Confirmed food allergy', 'Prescription hydrolyzed diet (requires vet Rx)'], ['IBD diagnosis', 'Discuss with vet — may need Royal Canin GI'], ['Frequent vomiting', 'See vet before trying food change'], ['Loose stool only', 'Pro Plan Sensitive + plain pumpkin puree'], ['Post-GI illness', 'Hill\'s i/d (prescription) then transition to SS']].map(([t, r]) => (
                <div key={t} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light mb-0.5">{t}</div>
                  <div className="text-xs font-bold text-brand-dark">→ {r}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[{ label: 'Elimination Diet', href: '/nutrition/elimination-diet' }, { label: 'Dog Diarrhea', href: '/health/dog-diarrhea' }, { label: 'Dog Vomiting', href: '/health/dog-vomiting' }]} />
            <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="review-sensitive-food" />
          </aside>
        </div>
      </div>
    </>
  )
}
