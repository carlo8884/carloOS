import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology} from '@carloOS/ui'
import { buildArticleSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Best Large Breed Dog Food 2025 — WSAVA Picks for 50+ lb Dogs | Dog.com', description: 'Best dog foods for large breeds.', path: '/reviews/best-large-breed-dog-food', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Best Large Breed Dog Food 2025', description: 'WSAVA-compliant large breed dog foods ranked for joint health and appropriate growth.', url: 'https://dog.com/reviews/best-large-breed-dog-food', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const rcSchema = buildProductSchema({ name: 'Royal Canin Large Adult', description: 'Glucosamine and chondroitin joint support formula for large breed adult dogs.', url: 'https://royalcanin.com', imageUrl: '', ratingValue: 9.3, reviewCount: 1 })
const ppSchema = buildProductSchema({ name: 'Purina Pro Plan Large Breed Adult', description: 'Real chicken and rice with EPA and glucosamine for large breed joint health.', url: 'https://purina.com', imageUrl: '', ratingValue: 9.2, reviewCount: 1 })
const allSchemas = combineSchemas(schema, rcSchema, ppSchema)
const PICKS = [
  { label: 'Best Overall', emoji: '🏆', name: 'Royal Canin Large Adult', subtitle: 'Glucosamine + chondroitin · Joint focus · WSAVA', href: '#royal-canin' },
  { label: 'Best High-Protein', emoji: '⭐', name: 'Purina Pro Plan Large Breed', subtitle: 'EPA + glucosamine · Live probiotics · Widely recommended', href: '#purina' },
  { label: "Best Hill's", emoji: '🔬', name: "Hill's Science Diet Large Breed", subtitle: 'Glucosamine · Natural ingredients · Antioxidant blend', href: '#hills' },
]
export default function BestLargeBreedFoodPage() {
  return (
    <>
      <SchemaScript schema={allSchemas} />
      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">🥩 Evidence-Based · May 2025</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Large Breed Dog Food 2025</h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">Large breed dogs (50+ lbs) have specific nutritional needs — controlled calorie density during growth to prevent orthopedic issues, joint support ingredients in adulthood, and appropriate protein-to-fat ratios for their slower metabolism compared to small breeds.</p>
      </div>
      <QuickPicks items={PICKS} />
      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid">Best Large Breed Dog Food</span>
      </nav>
      <div className="px-container sm:px-container-sm py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-14">
          <div>
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Puppy vs Adult — Feed the Right Formula</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">Large breed puppies need large breed puppy food — not all-life-stages or small breed formulas. Large breed puppy formulas have controlled calcium and phosphorus and lower caloric density to slow growth rate, preventing the rapid growth that contributes to hip dysplasia and other developmental orthopedic diseases. Switch to adult large breed formula at 12–18 months depending on breed size.</p>
            </div>
            <ScoreMethodology />
            <ReviewCard id="royal-canin" badge="Best Overall" badgeEmoji="🏆" name="Royal Canin Large Adult" subtitle="Glucosamine + chondroitin · Tailored kibble texture · WSAVA top tier" score={9.3} winner
              description={<p>Royal Canin Large Adult is formulated with joint health as a central priority — glucosamine (200mg/kg) and chondroitin sulfate (160mg/kg) are included at levels shown to support cartilage health in dogs predisposed to joint disease. The kibble texture is tailored for large breed biting patterns — encouraging thorough chewing rather than bolting food, which reduces bloat risk in deep-chested large breeds. EPA from fish oil provides anti-inflammatory support for joints. Royal Canin is one of three WSAVA-recommended manufacturers with full veterinary nutritionist oversight. Available in multiple size variations — Large Adult (for dogs 55–100 lbs) and Giant Adult (for dogs over 100 lbs).</p>}
              specs={[{ label: 'WSAVA', value: 'Top tier', highlight: 'good' }, { label: 'Glucosamine', value: '200mg/kg + chondroitin', highlight: 'good' }, { label: 'EPA', value: 'Fish oil — anti-inflammatory' }, { label: 'Kibble', value: 'Tailored for large jaw mechanics' }]}
              pros={['WSAVA top-tier compliance', 'Meaningful glucosamine and chondroitin levels', 'EPA from fish oil', 'Kibble size tailored for large breeds']}
              cons={['More expensive', 'Chicken-based — not for chicken-sensitive dogs']}
              price="$60–80 / 30 lb"
              ctaText="Shop Royal Canin Large Adult →"
              ctaHref="https://www.chewy.com/s?query=royal+canin+large+adult"
              ctaAffiliateProgram="chewy"
              ctaAffiliateProduct="rc-large-adult"
            />
            <ReviewCard id="purina" badge="Best High-Protein" badgeEmoji="⭐" name="Purina Pro Plan Large Breed Adult" subtitle="Chicken & rice · EPA + glucosamine · Live probiotics" score={9.2}
              description={<p>Purina Pro Plan Large Breed Adult provides 26% protein (real chicken as first ingredient) and incorporates EPA from fish oil plus glucosamine for joint support. The inclusion of live probiotics (Bacillus coagulans) for digestive health is a meaningful differentiator at this price point. Purina's research investment — including BREATHE trials on respiratory health, joint studies, and cognitive research — backs a formula that balances joint support, digestive health, and overall nutrition for large breed adults. The most widely recommended formula by general practice veterinarians for large breed adults. Also available in salmon and trout variety for dogs with chicken sensitivity.</p>}
              specs={[{ label: 'WSAVA', value: 'Top tier', highlight: 'good' }, { label: 'Protein', value: '26% — real chicken first ingredient' }, { label: 'Probiotic', value: 'Live B. coagulans — clinically studied', highlight: 'good' }, { label: 'Joint support', value: 'EPA + glucosamine' }]}
              pros={['WSAVA compliant', 'Real chicken first ingredient', 'Live probiotics', 'EPA and glucosamine joint support', 'Multiple protein options']}
              cons={['Glucosamine levels not as high as Royal Canin']}
              price="$50–70 / 34 lb"
              ctaText="Shop Purina Pro Plan Large Breed →"
              ctaHref="https://www.chewy.com/s?query=purina+pro+plan+large+breed+adult"
              ctaAffiliateProgram="chewy"
              ctaAffiliateProduct="pp-large-breed"
            />
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Large Breed Need</div>
              {[['Joint disease present', 'Royal Canin Joint Care or Hill\'s j/d Rx'], ['Overweight large breed', 'Royal Canin Satiety or Hill\'s Metabolic'], ['Hip dysplasia history', 'Royal Canin Large Adult + fish oil supplement'], ['Grain-free concern', 'Avoid — WSAVA and FDA concern for DCM'], ['Senior 7+', 'Switch to large breed senior formula'], ['Giant breed (100+ lbs)', 'Royal Canin Giant Adult']].map(([t, r]) => (
                <div key={t} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light mb-0.5">{t}</div>
                  <div className="text-xs font-bold text-brand-dark">→ {r}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[{ label: 'Dog Arthritis', href: '/health/dog-arthritis' }, { label: 'Best Joint Supplements', href: '/reviews/best-joint-supplements' }, { label: 'Labrador Retriever', href: '/breeds/labrador-retriever' }]} />
            <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="review-large-breed-food" />
          </aside>
        </div>
      </div>
    </>
  )
}
