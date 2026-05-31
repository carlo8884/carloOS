import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology} from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'saddle-com', title: 'Best Horse Blankets 2025 — Turnout, Stable | Saddle.com', description: 'Horse blankets ranked by denier rating, fill weight, and waterproofing.', path: '/reviews/best-horse-blankets', type: 'article' })
const schema = buildArticleSchema({ siteId: 'saddle-com', title: 'Best Horse Blankets 2025', description: 'Turnout and stable blankets ranked for denier, waterproofing, and value.', url: 'https://saddle.com/reviews/best-horse-blankets', imageUrl: '', authorName: 'Saddle.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const PICKS = [
  { label: 'Best Overall Turnout', emoji: '🏆', name: 'Rambo Wug Turnout', subtitle: '1200D · Waterproof · Ergonomic neck cut', href: '#rambo' },
  { label: 'Best Value', emoji: '💰', name: 'Horseware Amigo Hero', subtitle: '600D · Reliable waterproofing · Budget friendly', href: '#amigo' },
  { label: 'Best Stable', emoji: '⭐', name: 'SmartPak SmartBlanket', subtitle: 'Multiple fill weights · Machine washable', href: '#smartpak' },
]
export default function HorseBlanketPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">🐴 Buyer's Guide</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Horse Blankets 2025</h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">Most horses in temperate climates do not need blankets — they grow a winter coat that regulates temperature effectively. Horses that benefit from blanketing: clipped horses (coat removed for work or showing), very thin horses, horses over 20 years old, and horses in unusually harsh conditions (below 0°F with wind).</p>
      </div>
      <QuickPicks items={PICKS} />
      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid">Best Horse Blankets</span>
      </nav>
      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-14">
          <div>
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Denier Explained</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">Denier measures outer shell thread thickness — higher denier is more tear-resistant. <strong>600D:</strong> light use, horses that don't tear blankets. <strong>1200D:</strong> standard for most horses. <strong>1680D+:</strong> horses that destroy blankets, turned out with other horses, rough use. Higher denier ≠ warmer — warmth is determined by fill weight (grams).</p>
            </div>
            <ScoreMethodology />
            <ReviewCard id="rambo" badge="Best Overall Turnout" badgeEmoji="🏆" name="Rambo Wug Turnout" subtitle="1200D poly/ripstop · Ergonomic Wug neck · Multiple fill weights · Horseware snap system" score={9.4} winner
              description={<p>The Rambo Wug is the most recognizable ergonomic turnout blanket in the market — the "Wug" refers to the extended neck piece that eliminates the need for a separate neck cover, covering the neck and wither area in one piece and preventing the shoulder rubs that traditional straight-neck blankets can cause. 1200D outer shell with reinforced critical areas (shoulders, haunches). Triple overlapping front closure using Horseware's proprietary snap system — secure and quick. Available in multiple fill weights (0g, 100g, 200g, 300g) to cover the full range from cool weather to hard freeze. The Horseware closure system is consistent across the brand — if you already use Horseware blankets, the hardware is interchangeable.</p>}
              specs={[{ label: 'Denier', value: '1200D ripstop polyester', highlight: 'good' }, { label: 'Neck design', value: 'Wug (neck attached)', highlight: 'good' }, { label: 'Closure', value: 'Horseware snap — triple front' }, { label: 'Fill options', value: '0g, 100g, 200g, 300g' }]}
              pros={['Eliminates shoulder rubs with Wug neck design', '1200D durable for most horses', 'Multiple fill options in same pattern', 'Proven Horseware closure system']}
              cons={['Higher price point', 'Neck attachment limits options for horses needing separate neck coverage']}
              price="$140–200 depending on fill"
              ctaText="Shop Rambo Wug Turnout →"
              ctaHref="/go/smartpak/rambo-wug?s=reviews-best-horse-blankets"
              ctaAffiliateProgram="smartpak"
              ctaAffiliateProduct="rambo-wug"
            />
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Fill Weight Guide</div>
              {[['0g (Sheet)', '50°F+ — wind and rain protection only'], ['100g (Light)', '40–50°F — lightly chilly'], ['200g (Medium)', '30–40°F — standard winter'], ['300g (Heavy)', '20–30°F — cold winters'], ['400g+ (Extra Heavy)', 'Below 20°F — very cold climates']].map(([w, t]) => (
                <div key={w} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-xs font-bold text-brand-dark">{w}</div>
                  <div className="text-2xs text-brand-text-light">{t}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[{ label: 'Horse Grooming Guide', href: '/guides/horse-grooming-guide' }, { label: 'Horse Body Condition', href: '/guides/horse-body-condition-scoring' }, { label: 'Buying First Horse', href: '/guides/buying-first-horse' }]} />
            <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Equipment Guides" subtitle="Expert reviews and fitting guides." source="review-blankets" />
          </aside>
        </div>
      </div>
    </>
  )
}
