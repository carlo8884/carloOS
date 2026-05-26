import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'saddle-com', title: 'Best Stirrup Irons 2025 — Safety, INOX & Offset for Knee Pain | Saddle.com', description: 'Best stirrup irons ranked — Sprenger Bow Balance, MDC International, and safety stirrups compared. Offset irons for knee pain, safety stirrups for trail and cross-country.', path: '/reviews/best-stirrup-irons', type: 'article' })
const schema = buildArticleSchema({ siteId: 'saddle-com', title: 'Best Stirrup Irons 2025', description: 'Safety, offset, and standard stirrup irons ranked for English riding disciplines.', url: 'https://saddle.com/reviews/best-stirrup-irons', imageUrl: '', authorName: 'Victoria Marsh, CSF', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const sprSchema = buildProductSchema({ name: 'Sprenger Bow Balance Stirrup', description: 'Offset eye design reduces knee and hip stress in the two-point and jumping position.', url: 'https://sprenger.de', imageUrl: '', ratingValue: 9.4, reviewCount: 1 })
const allSchemas = combineSchemas(schema, sprSchema)
const PICKS = [
  { label: 'Best Ergonomic', emoji: '🏆', name: 'Sprenger Bow Balance', subtitle: 'Offset eye · Reduces knee/hip stress · Show-legal', href: '#sprenger' },
  { label: 'Best Safety', emoji: '⭐', name: 'Ophena S Magnetic Safety Stirrup', subtitle: 'Magnetic release · Open side · XC/trail use', href: '#ophena' },
  { label: 'Best Value INOX', emoji: '💰', name: 'Fillis-Style INOX Stirrup', subtitle: 'Classic shape · INOX steel · Arena standard', href: '#fillis' },
]

export default function BestStirrupIronsPage() {
  return (
    <>
      <SchemaScript schema={allSchemas} />
      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">⛑️ Expert Reviewed · May 2025</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Stirrup Irons 2025</h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">Stirrup irons are a safety-critical piece of equipment — correct width (1 inch clearance on each side of the boot), appropriate material, and optional safety release mechanisms all affect rider safety in the event of a fall.</p>
      </div>
      <QuickPicks items={PICKS} />
      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid">Best Stirrup Irons</span>
      </nav>
      <div className="px-container sm:px-container-sm py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-14">
          <div>
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Sizing First</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">Correct stirrup width is a safety issue: 1 inch of clearance on each side of the boot's widest point. Too narrow and a boot can jam if a rider falls (drag risk); too wide and the foot slides too far through. Measure your boot at its widest point and add 2 inches for correct stirrup tread width.</p>
            </div>
            <ReviewCard id="sprenger" badge="Best Ergonomic" badgeEmoji="🏆" name="Sprenger Bow Balance" subtitle="Offset eye · Angled tread · INOX stainless · Show-legal" score={9.4} winner
              description={<p>The Sprenger Bow Balance is the ergonomic stirrup standard — the offset eye (angled upward from the conventional perpendicular position) shifts the rider's leg slightly forward, reducing the internal rotation at the hip and knee that flat-eye stirrups can produce. This alignment change is particularly beneficial for riders with knee pain, hip impingement, or those who spend significant time in two-point or jumping position. INOX stainless steel construction. Multiple tread options. Show-legal for all English disciplines. The design difference compared to conventional stirrups is subtle but the knee and hip relief many riders feel is significant — particularly after long schooling sessions. One of the most recommended stirrup upgrades in hunter/jumper barns.</p>}
              specs={[{ label: 'Eye design', value: 'Offset 45° — ergonomic', highlight: 'good' }, { label: 'Material', value: 'INOX stainless steel' }, { label: 'Tread', value: 'Rubber insert — multiple options' }, { label: 'Show legal', value: 'Yes — all English disciplines', highlight: 'good' }]}
              pros={['Reduces knee and hip rotation strain', 'INOX stainless — corrosion resistant', 'Show legal', 'Available in multiple widths']}
              cons={['Premium price ($120–160/pair)', 'Adjustment period as body adapts to new alignment']}
              price="$120–160/pair"
              ctaText="Shop Sprenger Bow Balance →"
              ctaHref="https://www.smartpakequine.com/pt/sprenger-stirrups"
              ctaAffiliateProgram="smartpak"
              ctaAffiliateProduct="sprenger-bow-balance"
            />
            <ReviewCard id="ophena" badge="Best Safety" badgeEmoji="⭐" name="Ophena S Magnetic Safety Stirrup" subtitle="Magnetic foot release · Open outer side · XC and trail" score={9.1}
              description={<p>Safety stirrups are designed to release the foot in the event of a fall, eliminating the drag risk when a foot goes through a standard stirrup. The Ophena S uses a magnetic connection between the tread and a magnetic band worn on the boot to hold the foot in position during normal riding — releasing cleanly when sideways force (from a fall) is applied. The open outer side means there is no rigid frame to trap the foot. The Ophena system has gained significant adoption in cross-country and trail riding where falls over varied terrain make drag risk more significant. The magnetic connection is strong enough for normal riding including jumping but releases reliably under fall conditions. Requires the Ophena magnetic band (included) worn on the boot.</p>}
              specs={[{ label: 'Release mechanism', value: 'Magnetic + open outer side', highlight: 'good' }, { label: 'Material', value: 'Stainless steel + composite' }, { label: 'Best use', value: 'XC, trail, jumping, hacking' }, { label: 'Show legal', value: 'Check with your organization' }]}
              pros={['Effective safety release — drag prevention', 'Solid connection during normal riding', 'Lightweight', 'Magnetic band comfortable in boot']}
              cons={['Requires Ophena magnetic band — additional item to manage', 'Not show-legal in all organizations', 'Higher cost']}
              price="$180–220/pair"
              ctaText="Shop Ophena S Safety Stirrups →"
              ctaHref="https://www.amazon.com/s?k=ophena+s+magnetic+stirrup"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="ophena-s"
            />
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Rider Need</div>
              {[['Knee or hip pain', 'Sprenger Bow Balance or offset eye'], ['Trail / XC safety', 'Ophena S or bent-leg safety stirrup'], ['Show hunter/equitation', 'Fillis INOX — classic legal look'], ['Dressage', 'Heavier iron preferred — Fillis or Neue Schule'], ['Budget upgrade', 'MDC International offset — good value']].map(([t, r]) => (
                <div key={t} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light mb-0.5">{t}</div>
                  <div className="text-xs font-bold text-brand-dark">→ {r}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[{ label: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide' }, { label: 'Best Riding Boots', href: '/reviews/best-riding-boots' }, { label: 'English Riding Guide', href: '/guides/english-riding-guide' }]} />
            <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Equipment Guides" subtitle="Expert reviews and fitting guides." source="review-stirrups" />
          </aside>
        </div>
      </div>
    </>
  )
}
