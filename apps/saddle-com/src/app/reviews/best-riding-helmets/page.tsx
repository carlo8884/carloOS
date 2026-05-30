import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology} from '@carloOS/ui'
import { buildArticleSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'saddle-com', title: 'Best Riding Helmets 2025 — MIPS, Safety Ratings | Saddle.com', description: 'Best equestrian helmets ranked by safety certifications, MIPS technology, and discipline requirements. Tipperary, Charles Owen, and Troxel compared.', path: '/reviews/best-riding-helmets', type: 'article' })
const schema = buildArticleSchema({ siteId: 'saddle-com', title: 'Best Riding Helmets 2025', description: 'Equestrian helmets ranked by safety certifications, MIPS technology, and discipline.', url: 'https://saddle.com/reviews/best-riding-helmets', imageUrl: '', authorName: 'Saddle.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const charlesSchema = buildProductSchema({ name: 'Charles Owen AYR8 Plus', description: 'Premium MIPS equestrian helmet with ASTM/SEI certification and ventilation.', url: 'https://charlesowen.com', imageUrl: '', ratingValue: 9.5, reviewCount: 1 })
const allSchemas = combineSchemas(schema, charlesSchema)
const PICKS = [
  { label: 'Best Overall', emoji: '🏆', name: 'Charles Owen AYR8 Plus', subtitle: 'MIPS · ASTM/SEI · Premium ventilation · Hunt seat', href: '#charles-owen' },
  { label: 'Best Budget', emoji: '💰', name: 'Troxel Spirit', subtitle: 'ASTM/SEI · Lightweight · Trail & casual', href: '#troxel' },
  { label: 'Best Cross-Country', emoji: '🏇', name: 'Tipperary Sportage', subtitle: 'ASTM/SEI · Skull cap style · XC legal', href: '#tipperary' },
]
export default function BestRidingHelmetsPage() {
  return (
    <>
      <SchemaScript schema={allSchemas} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">⛑️ Safety Critical · May 2025</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Riding Helmets 2025</h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">A helmet is the most safety-critical piece of equestrian equipment. An ASTM/SEI certification is the minimum standard — helmets without it should not be ridden in. Replace after any fall that involves head contact, regardless of visible damage.</p>
      </div>
      <QuickPicks items={PICKS} />
      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid">Best Riding Helmets</span>
      </nav>
      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-14">
          <div>
            <div className="bg-brand-danger/5 border border-brand-danger/20 rounded-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">Safety Standards Explained</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed mb-2"><strong>ASTM/SEI:</strong> The US standard — ASTM International testing protocol plus Safety Equipment Institute certification. Minimum for any riding in the US. Test for impact at the crown and sides, penetration resistance, and retention system strength.</p>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed mb-2"><strong>VG1 / PAS 015:</strong> European standards — generally equivalent to or exceeding ASTM/SEI in some test parameters.</p>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed"><strong>MIPS (Multi-directional Impact Protection System):</strong> Technology that reduces rotational forces on the brain during oblique impacts — the most common type in equestrian falls. Not a certification, but a meaningful additional protection feature worth seeking.</p>
            </div>
            <ScoreMethodology />
            <ReviewCard id="charles-owen" badge="Best Overall" badgeEmoji="🏆" name="Charles Owen AYR8 Plus" subtitle="MIPS technology · ASTM/SEI · Low-profile hunt seat style · Ventilated" score={9.5} winner
              description={<p>Charles Owen is one of the most respected names in equestrian helmet safety — their helmets are tested to standards that exceed minimum requirements. The AYR8 Plus adds MIPS technology (reduces rotational force transmission to the brain in oblique impacts, which accounts for the majority of equestrian falls) while maintaining the traditional hunt seat profile acceptable for most show ring disciplines. The ventilation system (multiple inlet and exhaust vents) makes it suitable for warm-weather riding. Outer cover available in multiple colors. ASTM/SEI certified. This is a significant investment ($200+) but for a piece of equipment responsible for protecting your brain, quality matters more than any other gear purchase.</p>}
              specs={[{ label: 'MIPS', value: 'Yes — rotational impact protection', highlight: 'good' }, { label: 'Certification', value: 'ASTM/SEI + VG1', highlight: 'good' }, { label: 'Style', value: 'Hunt seat — show legal most venues' }, { label: 'Ventilation', value: 'Active ventilation system' }]}
              pros={['MIPS technology — best impact protection', 'Premium certification standards', 'Show-legal profile', 'Excellent ventilation']}
              cons={['Expensive ($200–280)', 'Requires professional fitting for best protection']}
              price="$200–280"
              ctaText="Shop Charles Owen AYR8 Plus →"
              ctaHref="https://www.amazon.com/s?k=charles+owen+ayr8+helmet"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="charles-owen-ayr8"
            />
            <ReviewCard id="troxel" badge="Best Budget" badgeEmoji="💰" name="Troxel Spirit Low Profile" subtitle="ASTM/SEI · Comfortable fit · Trail and arena riding" score={8.7}
              description={<p>Troxel helmets offer ASTM/SEI certification at the most accessible price points in the equestrian market ($50–90). The Spirit Low Profile is a versatile riding helmet appropriate for trail riding, arena lessons, and casual competition. Not show-legal in most English disciplines (Western shows typically accept any ASTM/SEI helmet). Adequate for the safety requirements of recreational and amateur riding. The fit system uses a dial adjuster at the back — the fit is adequate but not as precise as the premium fitting systems of Charles Owen or Tipperary. For anyone who needs a certified helmet immediately without the budget for a premium option, Troxel is the responsible choice over riding without certification.</p>}
              specs={[{ label: 'Certification', value: 'ASTM/SEI', highlight: 'good' }, { label: 'MIPS', value: 'Not available at this price point' }, { label: 'Style', value: 'Western/trail acceptable' }, { label: 'Fit', value: 'Dial adjuster — moderate precision' }]}
              pros={['ASTM/SEI certified — meets minimum standard', 'Most affordable certified option', 'Lightweight', 'Good for trail and recreational riding']}
              cons={['No MIPS', 'Not show-legal for most English disciplines', 'Less precise fit than premium helmets']}
              price="$50–90"
              ctaText="Shop Troxel Spirit →"
              ctaHref="https://www.amazon.com/s?k=troxel+spirit+riding+helmet"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="troxel-spirit"
            />
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Replace Your Helmet If...</div>
              {['After any impact involving head contact — even if no damage is visible', 'After 5 years (foam degrades over time)', 'If the foam shows visible compression', 'If the harness or shell is cracked', 'If it no longer fits securely'].map(s => (
                <div key={s} className="py-2 border-b border-brand-border last:border-0 text-xs text-brand-text-mid flex gap-2"><span className="text-brand-danger font-bold">→</span>{s}</div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[{ label: 'Best Riding Boots', href: '/reviews/best-riding-boots' }, { label: 'Best Riding Gloves', href: '/reviews/best-riding-gloves' }, { label: 'English Riding Guide', href: '/guides/english-riding-guide' }]} />
            <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Equipment Guides" subtitle="Expert reviews and fitting guides." source="review-helmets" />
          </aside>
        </div>
      </div>
    </>
  )
}
