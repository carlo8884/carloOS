import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology, AffiliateDisclosure } from '@carloOS/ui'
import { buildArticleSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Best Dental Chews for Dogs 2025 — VOHC Accepted Picks | Dog.com', description: 'Best dog dental chews with the VOHC seal — Greenies, Virbac CET, and Whimzees ranked for plaque reduction, ingredient quality, and calorie count.', path: '/reviews/best-dental-chews', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Best Dental Chews for Dogs 2025', description: 'VOHC-accepted dental chews ranked for dogs.', url: 'https://dog.com/reviews/best-dental-chews', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const greeniesSchema = buildProductSchema({ name: 'Greenies Original Dental Chews', description: 'VOHC-accepted dental chew — most widely recommended by veterinarians.', url: 'https://greenies.com', imageUrl: '', ratingValue: 9.2, reviewCount: 1 })
const allSchemas = combineSchemas(schema, greeniesSchema)
const PICKS = [
  { label: 'Best Overall', emoji: '🏆', name: 'Greenies Original', subtitle: 'VOHC seal · Vet recommended · All sizes', href: '#greenies' },
  { label: 'Best Natural', emoji: '🌿', name: 'Whimzees', subtitle: 'Plant-based · VOHC accepted · Longer chew time', href: '#whimzees' },
  { label: 'Best Enzymatic', emoji: '🔬', name: 'Virbac CET Enzymatic', subtitle: 'Dual enzyme system · Vet brand · Rawhide-based', href: '#virbac' },
]
export default function BestDentalChewsPage() {
  return (
    <>
      <SchemaScript schema={allSchemas} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">🦷 Evidence-Based · May 2025</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Dental Chews for Dogs 2025</h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">Only chews with the VOHC (Veterinary Oral Health Council) seal have clinical evidence for plaque and tartar reduction. Look for the VOHC seal — not just "dental" marketing claims.</p>
      </div>
      <QuickPicks items={PICKS} />
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid">Best Dental Chews</span>
      </nav>
      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_260px] gap-14">
          <div>
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">The VOHC Standard</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">The Veterinary Oral Health Council awards its seal to products that demonstrate plaque or tartar reduction in controlled clinical studies. This is the correct filter for dental products — not ingredient claims, not packaging promises. The full VOHC-accepted product list is at vohc.org. Dental chews supplement toothbrushing — they do not replace it, and they do not substitute for professional cleaning.</p>
            </div>
            <ScoreMethodology />
            <AffiliateDisclosure variant="inline" siteId="dog-com" />
            <ReviewCard id="greenies" badge="Best Overall" badgeEmoji="🏆" name="Greenies Original Dental Chews" subtitle="VOHC accepted · Most widely recommended · All sizes from teenie to large" score={9.2} winner
              description={<p>Greenies are the most widely recommended dog dental chew in veterinary practice and have earned VOHC acceptance for plaque and tartar reduction. The texture is designed to be abrasive enough to mechanically scrub the tooth surface while being soft enough to bend rather than shatter — which is important for dental safety (very hard chews like antlers, bones, and nylon chews cause tooth fractures). Give one chew daily for best effect. Available in sizes from teenie (5–15 lb dogs) through large (50–100 lb dogs). Count the calories — each Greenie is 25–90 calories depending on size, which must be accounted for in daily intake for weight management.</p>}
              specs={[{ label: 'VOHC accepted', value: 'Yes — plaque AND tartar', highlight: 'good' }, { label: 'Sizes', value: 'Teenie through Large', highlight: 'good' }, { label: 'Texture', value: 'Pliable — tooth fracture safe', highlight: 'good' }, { label: 'Calories', value: '25–90 per chew (size dependent)' }]}
              pros={['VOHC accepted (plaque + tartar)', 'Most prescribed by vets', 'Pliable — tooth-safe', 'Full size range', 'Dogs love the taste']}
              cons={['Must count calories', 'Some dogs wolf them down too fast for dental benefit', 'Not ideal for dogs with wheat sensitivity (contains wheat)']}
              price="$25–35 / 27-count"
              ctaText="Shop Greenies →"
              ctaHref="/go/chewy-brand/greenies+dental+chews+dogs?s=reviews-best-dental-chews"
              ctaAffiliateProgram="chewy-brand"
              ctaAffiliateProduct="greenies+dental+chews+dogs"
            />
            <ReviewCard id="whimzees" badge="Best Natural / Plant-Based" badgeEmoji="🌿" name="Whimzees Natural Dental Chews" subtitle="Plant-based · VOHC accepted · Longer chew time than Greenies" score={9.0}
              description={<p>Whimzees are made from plant-based ingredients — potato starch, glycerin, and cellulose — with no artificial colors, preservatives, or animal products. VOHC accepted for plaque reduction. The texture is slightly firmer than Greenies but still pliable and tooth-safe. Many owners report their dogs spend longer chewing Whimzees than Greenies — more time chewing means more tooth surface contact and more mechanical plaque removal. Good choice for dogs with animal protein sensitivities or owners preferring plant-based options. Available in several fun shapes (toothbrush, hedgehog, crocodile) that all achieve similar dental effect.</p>}
              specs={[{ label: 'VOHC accepted', value: 'Yes — plaque reduction', highlight: 'good' }, { label: 'Ingredients', value: 'Plant-based — no artificial additives', highlight: 'good' }, { label: 'Chew time', value: 'Longer than Greenies', highlight: 'good' }, { label: 'Best for', value: 'Dogs with protein sensitivities' }]}
              pros={['Plant-based — no animal protein', 'VOHC accepted', 'Longer chew duration', 'No artificial additives']}
              cons={['VOHC for plaque only (not tartar)', 'Higher calorie density than Greenies per chew']}
              price="$20–30 / 14-count"
              ctaText="Shop Whimzees →"
              ctaHref="/go/chewy-brand/whimzees+dental+chews+dogs?s=reviews-best-dental-chews"
              ctaAffiliateProgram="chewy-brand"
              ctaAffiliateProduct="whimzees+dental+chews+dogs"
            />
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Dental Health Hierarchy</div>
              {[['Most effective', 'Daily toothbrushing with CET paste'], ['2nd — professional cleaning', 'Annual under anesthesia'], ['3rd — VOHC dental chews', 'Daily (Greenies, Whimzees)'], ['4th — VOHC water additives', 'Moderate evidence'], ['Not effective', 'Bones, antlers, non-VOHC chews']].map(([rank, detail]) => (
                <div key={rank} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light mb-0.5">{rank}</div>
                  <div className="text-xs font-bold text-brand-dark">{detail}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[{ label: 'Dog Dental Care', href: '/health/dog-dental-care' }, { label: 'Dental Cleaning Guide', href: '/health/dog-dental-care' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
            <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="review-dental-chews" />
          </aside>
        </div>
      </div>
    </>
  )
}
