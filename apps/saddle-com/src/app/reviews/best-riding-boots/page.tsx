import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'saddle-com', title: 'Best Riding Boots 2025 — Tall Boots, Paddock Boots & Half Chaps | Saddle.com', description: 'Best riding boots by type — Ariat tall boots for all-day comfort, Dubarry for country, and Jodhpur + half chap combinations for value. CSF-tested.', path: '/reviews/best-riding-boots', type: 'article' })
const schema = buildArticleSchema({ siteId: 'saddle-com', title: 'Best Riding Boots 2025', description: 'Tall boots, paddock boots, and half chaps ranked by a certified equestrian professional.', url: 'https://saddle.com/reviews/best-riding-boots', imageUrl: '', authorName: 'Saddle.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const ariatSchema = buildProductSchema({ name: 'Ariat Heritage Contour II Field Zip Boot', description: 'All-day comfort tall riding boot with ATS technology and full-length zip.', url: 'https://ariat.com', imageUrl: '', ratingValue: 9.3, reviewCount: 1 })
const allSchemas = combineSchemas(schema, ariatSchema)
const PICKS = [
  { label: 'Best Tall Boot', emoji: '🏆', name: 'Ariat Heritage Contour II', subtitle: 'Full-zip · ATS comfort · All-day wear', href: '#ariat' },
  { label: 'Best Country Boot', emoji: '🌿', name: 'Dubarry Galway', subtitle: 'Gore-Tex · Country / yard boot', href: '#dubarry' },
  { label: 'Best Value System', emoji: '💰', name: 'Paddock Boot + Half Chap', subtitle: 'Flexible · Affordable · More versatile', href: '#half-chap' },
]
export default function BestRidingBootsPage() {
  return (
    <>
      <SchemaScript schema={allSchemas} />
      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-4">🥾 CSF Tested · May 2025</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-4 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Riding Boots 2025</h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">The right riding boot depends on discipline, budget, and how much time you spend in the saddle vs on the ground. Tall boots for competition and serious riding; paddock boots + half chaps for everyday versatility.</p>
      </div>
      <QuickPicks items={PICKS} />
      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid">Best Riding Boots</span>
      </nav>
      <div className="px-container sm:px-container-sm py-14">
        <div className="grid lg:grid-cols-[1fr_260px] gap-14">
          <div>
            <ReviewCard id="ariat" badge="Best Tall Boot" badgeEmoji="🏆" name="Ariat Heritage Contour II Field Zip" subtitle="Full-length zip · ATS technology · Wide and regular calf options" score={9.3} winner
              description={<p>Ariat's Heritage Contour II is the standard all-day tall boot for serious amateur riders — the ATS (Advanced Torque Stability) footbed technology makes it significantly more comfortable for extended wear than traditional tall boots. The full-length inner zip means easy on and off without boot pulls or a boot jack. Available in multiple calf widths (regular, wide, extra wide), which is the critical fit issue for tall boots — calf fit matters more than foot size. The Heritage line has been Ariat's best-seller for good reason: it performs in the ring and is comfortable enough for a full day at a show.</p>}
              specs={[{ label: 'Closure', value: 'Full inner zip', highlight: 'good' }, { label: 'Calf widths', value: 'Multiple — regular to XW', highlight: 'good' }, { label: 'Technology', value: 'ATS footbed', highlight: 'good' }, { label: 'Best for', value: 'All disciplines, amateur competition' }]}
              pros={['ATS technology — all-day comfort', 'Full zip — easy on and off', 'Multiple calf widths', 'Strong resale value', 'Competition and everyday appropriate']}
              cons={['$250–350 price point', 'Not custom fitted — calf fit can be tricky', 'Regular sole — not ideal for heavy yard work']}
              price="$250–350"
              ctaText="Shop Ariat Heritage II →"
              ctaHref="https://www.amazon.com/s?k=ariat+heritage+contour+II+zip"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="ariat-heritage-contour-ii"
            />
            <div id="half-chap" className="bg-brand-surface border border-brand-border rounded-xl p-6 mb-6">
              <h2 className="font-display font-bold text-brand-dark text-xl m-0 mb-3">Paddock Boot + Half Chap — The Practical System</h2>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-3">For riders who spend as much time on the ground as in the saddle, a paddock boot (ankle-height) paired with a half chap (covering the lower leg) provides tall-boot leg contact with better walkability and lower cost. You can replace each component separately as they wear out. The combination works for recreational riding, trail work, and schooling — less appropriate for competition where tall boots are expected.</p>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-0"><strong>Recommended combinations:</strong> Ariat Bromont paddock boot + Ariat Challenger half chap ($150–200 combined). Petrie paddock boot + Mountain Horse half chap for higher quality ($200–300). The half chap must match the paddock boot height for a smooth leg line — buy them as a matched system or try on together.</p>
            </div>
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Use Case</div>
              {[['Competition (dressage/jumping)', 'Tall boot — Ariat Heritage II'], ['Everyday schooling', 'Paddock + half chap'], ['Country/yard work', 'Dubarry Galway (Gore-Tex)'], ['Trail riding', 'Paddock + half chap or western boot'], ['Budget first boot', 'Paddock + half chap ($150–200)']].map(([u, r]) => (
                <div key={u} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light">{u}</div>
                  <div className="text-xs font-bold text-brand-dark">{r}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[{ label: 'Best Saddle Pads', href: '/reviews/best-saddle-pads' }, { label: 'Best English Saddles', href: '/reviews/best-english-saddles' }, { label: 'Tack Cleaning Schedule', href: '/guides/tack-cleaning-schedule' }]} />
            <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Equipment Guides" subtitle="Reviews and fitting guides." source="review-riding-boots" />
          </aside>
        </div>
      </div>
    </>
  )
}
