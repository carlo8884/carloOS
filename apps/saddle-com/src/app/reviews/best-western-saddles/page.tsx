import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology} from '@carloOS/ui'
import { buildArticleSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Best Western Saddles 2025 — Reining, Cutting | Saddle.com',
  description: 'Best western saddles by discipline. Circle Y, Billy Cook, and Martin Saddlery ranked for reining, cutting, barrel racing.',
  path: '/reviews/best-western-saddles',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: 'Best Western Saddles 2025',
  description: 'Circle Y, Billy Cook, and Martin ranked for reining, cutting, barrel, and trail.',
  url: 'https://saddle.com/reviews/best-western-saddles',
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2025-05-01T00:00:00Z',
})

const circleYSchema = buildProductSchema({ name: 'Circle Y Park and Trail Saddle', description: 'American-made western saddle with flex tree for trail and recreational riding.', url: 'https://circley.com', imageUrl: '', ratingValue: 9.2, reviewCount: 1 })
const martinSchema = buildProductSchema({ name: 'Martin Saddlery Reiner', description: 'Handmade reining saddle from Weatherford TX — deep seat, low cantle, close contact.', url: 'https://martinsaddlery.com', imageUrl: '', ratingValue: 9.4, reviewCount: 1 })
const allSchemas = combineSchemas(schema, circleYSchema, martinSchema)

const PICKS = [
  { label: 'Best Reining', emoji: '🏆', name: 'Martin Saddlery Reiner', subtitle: 'Handmade TX · Deep seat · NRHA proven', href: '#martin' },
  { label: 'Best Trail', emoji: '🏔️', name: 'Circle Y Park & Trail', subtitle: 'Flex tree · Comfortable · American made', href: '#circle-y' },
  { label: 'Best Barrel Racing', emoji: '🏁', name: 'Circle Y Barrel Saddle', subtitle: 'Lightweight · Secure seat · Close contact', href: '#barrel' },
  { label: 'Best Budget', emoji: '💰', name: 'Billy Cook Trail Saddle', subtitle: 'Oklahoma made · Affordable · Quality leather', href: '#billy-cook' },
]

export default function BestWesternSaddlesPage() {
  return (
    <>
      <SchemaScript schema={allSchemas} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)' }} aria-hidden="true" />
        <div className="relative z-10">
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">Buyer's Guide</span>
          <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl"
            style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>
            Best Western Saddles 2025
          </h1>
          <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
            Western saddle design is highly discipline-specific — a reining saddle on a barrel horse or a trail saddle in a cutting pen is the wrong tool. We ranked the best options per discipline, compared using <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">CSF</a> reviewer notes and published rider reports.
          </p>
        </div>
      </div>

      <QuickPicks items={PICKS} />

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/western" className="hover:text-brand-primary no-underline">Western</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid">Best Western Saddles</span>
      </nav>

      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-14">
          <div>
            <ArticleByline siteName="Saddle.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

            <CalloutBox variant="tip" title="Match the saddle to the discipline">
              A reining saddle on a barrel horse, or a roping saddle on a trail horse, is the wrong tool — each tree geometry is optimized for a specific job. Buy used from a discipline-specific source (reiner, cutter, roper) rather than a general tack store when possible: the gear has already been validated for the job.
            </CalloutBox>

            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Western Saddle Sizing</div>
              <p className="text-sm text-brand-text-mid leading-relaxed m-0">Western saddle seat size is measured differently from English — the measurement runs from the base of the horn to the front of the cantle. Most adult riders fall between 14.5" and 17" depending on hip width and riding discipline. Disciplines that require deep-seat security (reining, cutting) typically use smaller seats; trail and pleasure riding can go slightly larger for comfort. See our <Link href="/guides/seat-size-guide" className="text-brand-primary no-underline hover:underline">seat size guide</Link> for measurements.</p>
            </div>

            <ScoreMethodology />
            <ReviewCard
              id="martin"
              badge="Best Reining"
              badgeEmoji="🏆"
              name="Martin Saddlery Reiner"
              subtitle="Handmade in Weatherford, TX · Deep seat · Low cantle · NRHA competition proven"
              score={9.4}
              winner
              description={<div>
                <p>Martin Saddlery operates out of Weatherford, Texas — the heart of American reining country — and produces the saddle most associated with NRHA competition success. The reiner design features a deep, secure seat that plants the rider through the stop, a low cantle that does not interfere with the horse during the slide, and swells that provide security without restricting leg position.</p>
                <p>The tree is built for the typical reining horse back conformation (Quarter Horse with well-developed wither and a wider, flatter back than many breeds). Close-contact stirrup position puts the leg close to the horse — essential for nuanced spur placement in reining work. Handmade in the US with premium Hermann Oak leather that breaks in to the rider over time.</p>
              </div>}
              specs={[
                { label: 'Made In', value: 'Weatherford, TX (USA)', highlight: 'good' },
                { label: 'Construction', value: 'Handmade', highlight: 'good' },
                { label: 'Seat style', value: 'Deep reining seat' },
                { label: 'Leather', value: 'Hermann Oak premium' },
                { label: 'Best For', value: 'Reining competition and training' },
              ]}
              pros={['Handmade in Texas', 'NRHA competition-proven geometry', 'Deep seat for sliding stop security', 'Premium Hermann Oak leather', 'Long-term resale value']}
              cons={['Premium price ($1,800–3,500+)', 'Break-in period required', 'Fit depends on horse conformation — have fitted by CSF']}
              price="$1,800–$3,500+"
              priceNote="Custom options available"
              ctaText="Find a Martin Dealer →"
              ctaHref="/go/amazon-brand/martin+saddlery+reiner+western+saddle?s=reviews-best-western-saddles"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="martin-reiner"
            />

            <ReviewCard
              id="circle-y"
              badge="Best Trail"
              badgeEmoji="🏔️"
              name="Circle Y Park and Trail Saddle"
              subtitle="Flex tree technology · 12-hour comfort tested · American made"
              score={9.2}
              description={<p>Circle Y&apos;s flex tree technology flexes laterally with the horse&apos;s movement — particularly valuable for trail horses that work over varied terrain with frequent directional changes. The Park and Trail line is designed specifically for comfort over long hours in the saddle: padded seat, comfortable rise, and balanced stirrup position that does not fatigue the leg. Circle Y is made in Yoakum, Texas, with American leather. The saddle fits a wide range of Quarter Horse, Paint, and Appaloosa back conformations out of the box — making it accessible without the custom fitting process of a reiner or cutter.</p>}
              specs={[
                { label: 'Tree', value: 'Flex tree — moves with horse', highlight: 'good' },
                { label: 'Made In', value: 'Yoakum, TX (USA)', highlight: 'good' },
                { label: 'Best For', value: 'Trail, pleasure, recreational' },
                { label: 'Comfort', value: 'Long-hour use design', highlight: 'good' },
              ]}
              pros={['Flex tree lateral movement', 'Excellent trail comfort', 'Fits wide range of horse conformation', 'American made', 'Good resale value']}
              cons={['Not for performance disciplines (reining, cutting)', 'Heavier than some competitors']}
              price="$900–$1,600"
              ctaText="Find a Circle Y Dealer →"
              ctaHref="/go/amazon-brand/circle+y+park+and+trail+saddle?s=reviews-best-western-saddles"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="circle-y-trail"
            />

            <ReviewCard
              id="barrel"
              badge="Best Barrel Racing"
              badgeEmoji="🏁"
              name="Circle Y Barrel Saddle"
              subtitle="Lightweight · Secure seat · Close stirrup for speed work"
              score={9.1}
              description={<p>Barrel racing saddles prioritize two things: light weight and seat security. The Circle Y barrel saddle delivers on both — it is significantly lighter than a trail or reining saddle, and the deeper seat with higher swells provides grip through the barrel turn. The stirrup is hung forward and close to the horse for a secure leg position at speed. Barrel saddles have pronounced seat security features that trail and pleasure riders might find constraining — they are purpose-built for the demands of the event.</p>}
              specs={[
                { label: 'Weight', value: 'Lightweight for speed', highlight: 'good' },
                { label: 'Seat', value: 'Secure with pronounced swells' },
                { label: 'Stirrup position', value: 'Forward for speed work' },
                { label: 'Best For', value: 'Barrel racing, speed events' },
              ]}
              pros={['Lightweight', 'Secure through barrel turns', 'Purpose-built geometry', 'Good value for competition barrel saddles']}
              cons={['Not comfortable for trail or long leisure rides', 'Purpose-specific — one discipline']}
              price="$700–$1,400"
              ctaText="Find a Circle Y Dealer →"
              ctaHref="/go/amazon-brand/circle+y+barrel+racing+saddle?s=reviews-best-western-saddles"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="circle-y-barrel"
            />

            <ReviewCard
              id="billy-cook"
              badge="Best Budget"
              badgeEmoji="💰"
              name="Billy Cook Trail Saddle"
              subtitle="Claremore, OK · Affordable · Quality leather · Traditional styling"
              score={8.8}
              description={<p>Billy Cook saddles are made in Claremore, Oklahoma, with genuine leather at a price point well below the premium Texas makers. Quality control is consistent, the leather is real (not synthetic), and the saddles represent good value for recreational trail riders and beginner western riders who do not yet know which discipline they will specialize in. For performance disciplines, move up to a Martin or Circle Y — but for recreational riding, Billy Cook delivers honest quality without the premium pricing.</p>}
              specs={[
                { label: 'Made In', value: 'Claremore, OK (USA)', highlight: 'good' },
                { label: 'Leather', value: 'Genuine leather', highlight: 'good' },
                { label: 'Price', value: 'Most affordable US-made option', highlight: 'good' },
                { label: 'Best For', value: 'Recreational, trail, beginner western' },
              ]}
              pros={['Most affordable American-made western saddle', 'Genuine leather', 'Good for beginners and recreational riders', 'Wide availability']}
              cons={['Not for performance disciplines', 'Less refined than premium makers', 'Lower resale value than Circle Y or Martin']}
              price="$500–$900"
              ctaText="Find a Billy Cook Dealer →"
              ctaHref="/go/amazon-brand/billy+cook+trail+saddle?s=reviews-best-western-saddles"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="billy-cook-trail"
            />
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Discipline</div>
              {[
                { disc: 'Reining', pick: 'Martin Saddlery Reiner' },
                { disc: 'Cutting', pick: 'Martin or custom CSF fitting' },
                { disc: 'Barrel Racing', pick: 'Circle Y Barrel' },
                { disc: 'Trail / Pleasure', pick: 'Circle Y Park & Trail' },
                { disc: 'Budget / Beginner', pick: 'Billy Cook Trail' },
                { disc: 'Team roping', pick: 'Martin or Dale Chavez' },
              ].map(item => (
                <div key={item.disc} className="py-2.5 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light mb-0.5">{item.disc}</div>
                  <div className="text-xs font-bold text-brand-dark">→ {item.pick}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[
              { label: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide' },
              { label: 'Seat Size Guide', href: '/guides/seat-size-guide' },
              { label: 'Best English Saddles', href: '/reviews/best-english-saddles' },
            ]} />
            <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer\'s Guide" subtitle="Reviews and market intelligence." source="review-western-saddles" />
          </aside>
        </div>
      </div>
    </>
  )
}
