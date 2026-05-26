import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'saddle-com', title: 'Best Saddle Pads 2025 — Dressage, Jump & Therapeutic | Saddle.com', description: 'Best saddle pads by discipline: Mattes half-pad for fit correction, Roma all-purpose for everyday use, and Toklat Coolback for sweat management. CSF-tested.', path: '/reviews/best-saddle-pads', type: 'article' })
const schema = buildArticleSchema({ siteId: 'saddle-com', title: 'Best Saddle Pads 2025', description: 'Dressage, jump, and therapeutic saddle pads ranked by a certified saddle fitter.', url: 'https://saddle.com/reviews/best-saddle-pads', imageUrl: '', authorName: 'Victoria Marsh, CSF', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const mattesSchema = buildProductSchema({ name: 'Mattes Correction Half-Pad', description: 'Sheepskin half-pad with shim pockets for saddle fit correction.', url: 'https://mattes.eu', imageUrl: '', ratingValue: 9.4, reviewCount: 1 })
const romaSchema = buildProductSchema({ name: 'Roma All-Purpose Saddle Pad', description: 'Everyday all-purpose saddle pad with wicking material and secure fit.', url: 'https://romaequestrian.com', imageUrl: '', ratingValue: 8.8, reviewCount: 1 })
const allSchemas = combineSchemas(schema, mattesSchema, romaSchema)
const PICKS = [
  { label: 'Best Fit Correction', emoji: '🏆', name: 'Mattes Sheepskin Half-Pad', subtitle: 'Shim pockets · Saddle fit correction · Professional use', href: '#mattes' },
  { label: 'Best Dressage', emoji: '🎯', name: 'Roma Square Dressage Pad', subtitle: 'Clean lines · Competition white · Secure fit', href: '#roma-dressage' },
  { label: 'Best Jump', emoji: '⭐', name: 'Roma Close Contact Pad', subtitle: 'Compact · Stays in place · Breathable', href: '#roma-cc' },
  { label: 'Best Therapeutic', emoji: '💆', name: 'Toklat Coolback Classic', subtitle: 'Pressure distribution · Wool fleece · Hot backs', href: '#toklat' },
]
export default function BestSaddlePadsPage() {
  return (
    <>
      <SchemaScript schema={allSchemas} />
      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-4">CSF Tested · May 2025</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-4 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Saddle Pads 2025</h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">The right saddle pad protects the horse's back, manages sweat, and can help fine-tune fit. The wrong one creates pressure points regardless of how well the saddle fits.</p>
      </div>
      <QuickPicks items={PICKS} />
      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid">Best Saddle Pads</span>
      </nav>
      <div className="px-container sm:px-container-sm py-14">
        <div className="grid lg:grid-cols-[1fr_260px] gap-14">
          <div>
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">A Pad Cannot Fix a Badly Fitting Saddle</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">Saddle pads cushion and wick sweat — they are not tools for correcting a saddle that does not fit. Using a thick pad to compensate for a narrow tree bridges the horse's back, creating pressure at the pommel and cantle. Have the saddle fit assessed by a CSF before investing in therapeutic pads.</p>
            </div>
            <ReviewCard id="mattes" badge="Best Fit Correction" badgeEmoji="🏆" name="Mattes Eurofit Correction Half-Pad" subtitle="Sheepskin · Shim pockets front and rear · Professional fit tool" score={9.4} winner
              description={<p>The Mattes half-pad is the standard fit-correction tool used by certified saddle fitters worldwide. The shim pockets allow insertion of foam or wool shims at the front and/or rear to level a saddle that is sitting unevenly due to asymmetry in the horse's musculature or minor tree issues. Not a substitute for proper saddle fitting, but an adjunct that extends the usable fit between reflocking appointments. The sheepskin conforms to the horse's back and distributes pressure well. Expensive, but used correctly under professional guidance it is the most effective pad available for fit refinement.</p>}
              specs={[{ label: 'Material', value: 'Australian sheepskin', highlight: 'good' }, { label: 'Shim pockets', value: 'Front and rear, both sides', highlight: 'good' }, { label: 'Use case', value: 'Fit correction, asymmetric muscles' }, { label: 'Professional use', value: 'Standard CSF tool' }]}
              pros={['Shim system allows fine-tuned fit adjustment', 'Genuine sheepskin pressure distribution', 'Professional-grade tool', 'Long lifespan with proper care']}
              cons={['Expensive ($150-250)', 'Only useful when used with professional guidance', 'Requires cleaning (sheepskin care)']}
              price="$150–250"
              ctaText="Shop Mattes Half-Pad →"
              ctaHref="https://www.amazon.com/s?k=mattes+correction+half+pad"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="mattes-half-pad"
            />
            <ReviewCard id="toklat" badge="Best Therapeutic" badgeEmoji="💆" name="Toklat Coolback Classic Pad" subtitle="Wool fleece · Pressure distribution · Thermal regulation" score={9.1}
              description={<p>Toklat Coolback pads use a wool fleece top layer and a specially designed channel that runs the length of the spine, reducing pressure on the spinal ligaments and creating airflow along the topline. For horses with back sensitivity, post-rehabilitation use, or horses that develop sweat marks directly under the saddle indicating pressure, the Coolback reduces these issues. Wool naturally wicks moisture and regulates temperature — keeping the back cooler in summer than synthetic alternatives.</p>}
              specs={[{ label: 'Material', value: 'Wool fleece top, specialty foam' }, { label: 'Spine channel', value: 'Full-length pressure relief', highlight: 'good' }, { label: 'Temperature', value: 'Wool thermal regulation', highlight: 'good' }, { label: 'Best for', value: 'Sensitive backs, hot-weather riding' }]}
              pros={['Spine channel reduces pressure', 'Wool wicks and cools', 'Distributes pressure effectively', 'Available in multiple shapes']}
              cons={['Wool requires hand washing or delicate cycle', 'More expensive than synthetic alternatives']}
              price="$80–130"
              ctaText="Shop Toklat Coolback →"
              ctaHref="https://www.amazon.com/s?k=toklat+coolback+saddle+pad"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="toklat-coolback"
            />
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Use Case</div>
              {[['Fit correction needed', 'Mattes Half-Pad + CSF'], ['Hot-backed horse', 'Toklat Coolback'], ['Everyday dressage', 'Roma Square Dressage'], ['Jump everyday', 'Roma Close Contact'], ['Show ring (white)', 'Roma or Equine Couture'], ['Budget everyday', 'Intrepid or Ovation']].map(([u,r]) => (
                <div key={u} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light">{u}</div>
                  <div className="text-xs font-bold text-brand-dark">{r}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[{ label: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide' }, { label: 'Leather Care Guide', href: '/guides/leather-care-guide' }, { label: 'Best English Saddles', href: '/reviews/best-english-saddles' }]} />
            <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Equipment Guides" subtitle="Reviews and fitting guides." source="review-saddle-pads" />
          </aside>
        </div>
      </div>
    </>
  )
}
