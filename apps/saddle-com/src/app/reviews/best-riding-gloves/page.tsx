import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology} from '@carloOS/ui'
import { buildArticleSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'saddle-com', title: 'Best Riding Gloves 2025 — Summer, Winter | Saddle.com', description: 'Best equestrian riding gloves by season. Roeckl, SSG, and Shires ranked for grip, feel, and durability in summer, winter, and competition use.', path: '/reviews/best-riding-gloves', type: 'article' })
const schema = buildArticleSchema({ siteId: 'saddle-com', title: 'Best Riding Gloves 2025', description: 'Roeckl, SSG, and Shires riding gloves ranked for summer, winter, and competition.', url: 'https://saddle.com/reviews/best-riding-gloves', imageUrl: '', authorName: 'Saddle.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const roecklSchema = buildProductSchema({ name: 'Roeckl Chester Riding Glove', description: 'Premium European leather and mesh summer riding glove — superior rein feel.', url: 'https://roeckl.com', imageUrl: '', ratingValue: 9.4, reviewCount: 1 })
const allSchemas = combineSchemas(schema, roecklSchema)
const PICKS = [
  { label: 'Best Summer', emoji: '🏆', name: 'Roeckl Chester', subtitle: 'Leather palm · Mesh back · Best rein feel', href: '#roeckl' },
  { label: 'Best Budget', emoji: '💰', name: 'SSG All Weather', subtitle: 'Grip in wet conditions · Year-round · Affordable', href: '#ssg' },
  { label: 'Best Winter', emoji: '❄️', name: 'Roeckl Laila Winter', subtitle: 'Fleece lined · Waterproof shell · Warm to 20°F', href: '#winter' },
]
export default function BestRidingGlovesPage() {
  return (
    <>
      <SchemaScript schema={allSchemas} />
      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-4">🧤 Buyer's Guide</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-4 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Riding Gloves 2025</h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">Riding gloves protect your hands, improve rein grip, and in many disciplines are required for competition. The right glove gives rein feel without sacrificing grip or comfort over hours of riding.</p>
      </div>
      <QuickPicks items={PICKS} />
      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid">Best Riding Gloves</span>
      </nav>
      <div className="px-container sm:px-container-sm py-14">
        <div className="grid lg:grid-cols-[1fr_260px] gap-14">
          <div>
            <ScoreMethodology />
            <ReviewCard id="roeckl" badge="Best Summer" badgeEmoji="🏆" name="Roeckl Chester Riding Glove" subtitle="Leather palm · Breathable mesh back · Traditional feel · Competition approved" score={9.4} winner
              description={<p>Roeckl has been making equestrian gloves since 1839 — the Chester is their most popular model and the benchmark against which other summer riding gloves are measured. The Cabretta leather palm provides outstanding rein feel — you feel the subtle communications through the rein in a way that synthetic palms cannot replicate. The stretch mesh back keeps hands cool during warm weather work. The fit is precise — size according to the Roeckl size chart (different from standard glove sizing). These gloves are competition-appropriate in dressage and jumping at all levels. They last 1–3 seasons depending on use frequency. Worth the price for riders who spend significant time in the saddle.</p>}
              specs={[{ label: 'Palm', value: 'Cabretta leather', highlight: 'good' }, { label: 'Back', value: 'Stretch mesh — breathable', highlight: 'good' }, { label: 'Competition', value: 'Approved all disciplines', highlight: 'good' }, { label: 'Season', value: 'Spring through fall' }]}
              pros={['Best rein feel of any glove tested', 'Breathable mesh back', 'Competition appropriate', 'Long-established quality']}
              cons={['More expensive ($45–60)', 'Sizing chart required — not standard sizing', 'Not waterproof']}
              price="$45–60"
              ctaText="Shop Roeckl Chester →"
              ctaHref="https://www.amazon.com/s?k=roeckl+chester+riding+gloves"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="roeckl-chester"
            />
            <ReviewCard id="ssg" badge="Best Budget / All-Weather" badgeEmoji="💰" name="SSG All Weather Riding Glove" subtitle="Year-round grip · Wet weather performance · Most affordable option" score={8.9}
              description={<p>SSG All Weather gloves are the standard budget recommendation — full synthetic construction that performs better than leather in wet conditions. The grip pattern maintains rein contact even with wet reins in rain, which leather gloves cannot match. At $15–25 per pair, they are the entry point for riders who want the safety and comfort of gloves without significant investment. The rein feel is noticeably less refined than Roeckl Chester, but the wet-weather performance and price point make them a practical choice for everyday schooling, trail riding, and riders building their tack collection.</p>}
              specs={[{ label: 'Material', value: 'Full synthetic' }, { label: 'Wet performance', value: 'Excellent — maintains grip wet', highlight: 'good' }, { label: 'Price', value: 'Best value in category', highlight: 'good' }, { label: 'Season', value: 'Year-round (not insulated)' }]}
              pros={['Excellent wet-weather grip', 'Affordable — replace frequently', 'Good for everyday schooling', 'Machine washable']}
              cons={['Less rein feel than leather', 'Less breathable than Roeckl in summer heat']}
              price="$15–25"
              ctaText="Shop SSG All Weather →"
              ctaHref="https://www.amazon.com/s?k=ssg+all+weather+riding+gloves"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="ssg-all-weather"
            />
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Situation</div>
              {[['Competition (dressage/jumping)', 'Roeckl Chester or Dublin'], ['Summer schooling', 'Roeckl Chester'], ['Wet weather / rain', 'SSG All Weather'], ['Winter below 40°F', 'Roeckl Laila or Dublin winter'], ['Trail / yard work', 'SSG Digital or Back on Track'], ['Budget starter glove', 'SSG All Weather']].map(([s, r]) => (
                <div key={s} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light">{s}</div>
                  <div className="text-xs font-bold text-brand-dark">→ {r}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[{ label: 'Best Riding Boots', href: '/reviews/best-riding-boots' }, { label: 'Best Saddle Pads', href: '/reviews/best-saddle-pads' }, { label: 'Leather Care Guide', href: '/guides/leather-care-guide' }]} />
            <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Equipment Guides" subtitle="Reviews and fitting guides." source="review-riding-gloves" />
          </aside>
        </div>
      </div>
    </>
  )
}
