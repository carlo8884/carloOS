import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology} from '@carloOS/ui'
import { buildArticleSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Best Dog Beds 2025 — Orthopedic, Washable | Dog.com', description: 'Best dog beds ranked. Big Barker for large breed orthopedic support, Casper for medium breeds, and Furhaven for budget value. Machine washable options included.', path: '/reviews/best-dog-beds', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Best Dog Beds 2025', description: 'Orthopedic, washable, and crate dog beds ranked.', url: 'https://dog.com/reviews/best-dog-beds', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const bigBarkerSchema = buildProductSchema({ name: 'Big Barker 7" Orthopedic Dog Bed', description: 'Therapeutic memory foam bed for large and giant breeds — clinically shown to reduce joint pain.', url: 'https://bigbarker.com', imageUrl: '', ratingValue: 9.5, reviewCount: 1 })
const casperSchema = buildProductSchema({ name: 'Casper Dog Bed', description: 'Premium foam dog bed with removable washable cover for medium to large breeds.', url: 'https://casper.com', imageUrl: '', ratingValue: 9.1, reviewCount: 1 })
const allSchemas = combineSchemas(schema, bigBarkerSchema, casperSchema)
const PICKS = [
  { label: 'Best Orthopedic', emoji: '🏆', name: 'Big Barker 7" Orthopedic', subtitle: 'Clinical data · Large/giant breeds · 10-year warranty', href: '#big-barker' },
  { label: 'Best Premium', emoji: '⭐', name: 'Casper Dog Bed', subtitle: 'Washable cover · Durable foam · All sizes', href: '#casper' },
  { label: 'Best Budget', emoji: '💰', name: 'Furhaven Orthopedic', subtitle: 'Multiple sizes · Affordable · Decent foam', href: '#furhaven' },
  { label: 'Best Bolster', emoji: '🛋️', name: 'Best Friends by Sheri OrthoComfort', subtitle: 'Donut shape · Anxiety reduction · Washable', href: '#bolster' },
]
export default function BestDogBedsPage() {
  return (
    <>
      <SchemaScript schema={allSchemas} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">🛏️ Buyer's Guide</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Dog Beds 2025</h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">Dogs sleep 12–14 hours a day. For large breeds and seniors with joint disease, the bed quality directly affects pain levels and mobility. Orthopedic foam is not a luxury for these dogs — it is a health investment.</p>
      </div>
      <QuickPicks items={PICKS} />
      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid">Best Dog Beds</span>
      </nav>
      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_260px] gap-14">
          <div>
            <ScoreMethodology />
            <ReviewCard id="big-barker" badge="Best Orthopedic" badgeEmoji="🏆" name='Big Barker 7" Orthopedic Dog Bed' subtitle="Clinical trial data · 7-inch American foam · 10-year no-flatten warranty" score={9.5} winner
              description={<p>Big Barker is the only dog bed with clinical research data behind it. A 2018 study in the American Journal of Veterinary Research found that large dogs with arthritis sleeping on Big Barker beds showed significant reductions in pain, stiffness, and lameness compared to dogs sleeping on standard beds. The 7-inch foam is American-manufactured and comes with a 10-year warranty against flattening — a meaningful commitment given most dog beds flatten within months. Built specifically for large and giant breeds (65 lbs+). The price ($279–399 depending on size) is substantial, but the clinical evidence and durability justify it for arthritic large breed dogs.</p>}
              specs={[{ label: 'Foam depth', value: '7 inches — therapeutic grade', highlight: 'good' }, { label: 'Clinical evidence', value: 'Published AJVR study', highlight: 'good' }, { label: 'Warranty', value: '10 years no-flatten', highlight: 'good' }, { label: 'Best for', value: 'Large/giant breeds, arthritis' }]}
              pros={['Only bed with clinical arthritis trial data', '10-year no-flatten warranty', 'American-made foam', 'Significant pain/stiffness reduction in arthritic dogs']}
              cons={['Expensive ($279–399)', 'Cover is not machine washable (spot clean only)', 'Heavy — difficult to move']}
              price="$279–399"
              ctaText="Shop Big Barker →"
              ctaHref="https://www.chewy.com/s?query=big+barker+orthopedic+dog+bed"
              ctaAffiliateProgram="chewy"
              ctaAffiliateProduct="big-barker-orthopedic"
            />
            <ReviewCard id="casper" badge="Best Premium" badgeEmoji="⭐" name="Casper Dog Bed" subtitle="Removable machine-washable cover · Durable foam · Memory foam top layer" score={9.1}
              description={<p>Casper translated their human mattress expertise into a well-engineered dog bed. The removable zippered cover is fully machine-washable — a practical necessity for most dogs. The foam construction layers memory foam over a supportive base, providing pressure relief and joint support without the premium cost of Big Barker. Available in multiple sizes from small (for dogs up to 20 lbs) through large (up to 90 lbs). The foam quality is notably better than most beds in this price range — it does not flatten within the first few months of use. Good choice for medium to large breeds without severe arthritis who need a quality bed at a more accessible price.</p>}
              specs={[{ label: 'Cover', value: 'Removable, machine washable', highlight: 'good' }, { label: 'Foam', value: 'Memory foam over support base' }, { label: 'Sizes', value: 'Small through large' }, { label: 'Best for', value: 'Medium/large breeds, everyday use' }]}
              pros={['Machine washable cover', 'Good foam quality for price', 'Multiple size options', 'Reputable brand with warranty']}
              cons={['Less therapeutic than Big Barker for severe arthritis', 'Cover zippers can be chewed by destructive dogs']}
              price="$125–175"
              ctaText="Shop Casper Dog Bed →"
              ctaHref="https://www.chewy.com/s?query=casper+dog+bed"
              ctaAffiliateProgram="chewy"
              ctaAffiliateProduct="casper-dog-bed"
            />
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Dog Type</div>
              {[['Arthritic large breed', 'Big Barker — clinical evidence'], ['Large breed everyday', 'Casper or Big Barker'], ['Small/medium everyday', 'Casper or Furhaven'], ['Anxious dog', 'Bolster/donut style (Best Friends Sheri)'], ['Destructive chewer', 'Molly Mutt cover + insert (replaceable)'], ['Budget', 'Furhaven Orthopedic ($40–80)']].map(([t, r]) => (
                <div key={t} className="py-2.5 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light mb-0.5">{t}</div>
                  <div className="text-xs font-bold text-brand-dark">→ {r}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[{ label: 'Best Joint Supplements', href: '/reviews/best-joint-supplements' }, { label: 'Senior Dog Care', href: '/health/senior-dog-care' }, { label: 'Dog Obesity', href: '/health/dog-obesity' }]} />
            <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Tips" subtitle="Practical guidance weekly." source="review-dog-beds" />
          </aside>
        </div>
      </div>
    </>
  )
}
