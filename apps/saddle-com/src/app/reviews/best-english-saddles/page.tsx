import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology} from '@carloOS/ui'
import { buildArticleSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'saddle-com', title: 'Best English Saddles 2025 — Dressage, Jumping | Saddle.com', description: 'We ranked the best English saddles by discipline — dressage, show jumping, all-purpose, and eventing. Stubben, Pessoa, Bates.', path: '/reviews/best-english-saddles', type: 'article' })
const schema = buildArticleSchema({ siteId: 'saddle-com', title: 'Best English Saddles 2025', description: 'Stubben, Pessoa, Bates, Collegiate, Wintec, Custom Saddlery, County — compared across disciplines using published specs and aggregated rider reports.', url: 'https://saddle.com/reviews/best-english-saddles', imageUrl: '', authorName: 'Saddle.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

const PICKS = [
  { label: 'Best Dressage', emoji: '🏆', name: 'Stubben Roxane', subtitle: '9.5 · Quick-Change · German leather', href: '#roxane' },
  { label: 'Best Jumping', emoji: '⭐', name: 'Pessoa Gen X Pro', subtitle: '9.2 · Close contact · Ridden at the top of the sport', href: '#gen-x' },
  { label: 'Best All-Purpose', emoji: '🐴', name: 'Bates Caprilli', subtitle: '9.0 · CAIR panels · Adjustable gullet', href: '#bates' },
  { label: 'Best Budget', emoji: '💰', name: 'Collegiate Convertible AP', subtitle: '8.4 · Adjustable · Under $800', href: '#collegiate' },
]

const productSchema0 = buildProductSchema({ name: 'Stubben Roxane', description: 'German-made dressage saddle with Quick-Change tree width adjustment.', url: 'https://stubben.com', imageUrl: '', ratingValue: 9.5, reviewCount: 1 })
const productSchema1 = buildProductSchema({ name: 'Pessoa Gen X Pro', description: 'Close-contact show jumping saddle with top-level showjumping pedigree.', url: 'https://pessoaequestrian.com', imageUrl: '', ratingValue: 9.2, reviewCount: 1 })
const allSchemas = combineSchemas(schema, productSchema0, productSchema1)

export default function BestEnglishSaddlesPage() {
  return (
    <>
      <SchemaScript schema={allSchemas} />
      <div className="bg-brand-dark px-container sm:px-container-sm py-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)' }} aria-hidden="true" />
        <div className="relative z-10">
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">Buyer's Guide</span>
          <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best English Saddles 2025</h1>
          <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">The right English saddle depends entirely on your discipline — a dressage saddle on a jumping horse is the wrong tool. Here&apos;s the top pick for each discipline, compared using published manufacturer specifications and aggregated rider reports.</p>
        </div>
      </div>
      <QuickPicks items={PICKS} />
      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2"><Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span><Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span><span className="text-brand-text-mid">Best English Saddles</span></nav>
      <div className="px-container sm:px-container-sm py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-14">
          <div>
            <ArticleByline siteName="Saddle.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

            <CalloutBox variant="tip" title="Buy fit, not brand">
              Saddle fit by a qualified Society of Master Saddlers (SMS) fitter matters more than which brand you choose — a perfectly fitted Collegiate will out-ride a poorly fitted Stubben every time. Try the saddle on your horse before purchase, and have the fit re-checked annually as horses change shape with conditioning and age.
            </CalloutBox>

            <ScoreMethodology />
            <ReviewCard id="roxane" badge="Best Dressage" badgeEmoji="🏆" name="Stubben Roxane" subtitle="Deep seat · Quick-Change tree (5 widths) · Hand-finished German leather" score={9.5} winner
              description={<p>The Roxane is the benchmark dressage saddle — Quick-Change tree width adjustment, 130 years of German craftsmanship, and a deep seat geometry developed alongside FEI-level dressage riders. Panel construction is supple and fits a wider range of horses than most competitors. Resale value is excellent. See the <Link href="/reviews/stubben-saddle-review" className="text-brand-primary">full Stubben review →</Link></p>}
              specs={[{ label: 'Tree', value: 'Quick-Change (5 widths)', highlight: 'good' }, { label: 'Made In', value: 'Germany', highlight: 'good' }, { label: 'Discipline', value: 'Dressage' }, { label: 'Resale', value: 'Excellent', highlight: 'good' }]}
              pros={['Quick-Change tree', 'Best-in-class German leather', 'Strong resale value']} cons={['$3,200–4,500 new — premium investment']}
              price="$3,200–$4,500" ctaText="Find a Stubben Dealer →" ctaHref="https://stubben.com" ctaAffiliateProgram="sharesale" ctaAffiliateProduct="stubben-roxane" />
            <ReviewCard id="gen-x" badge="Best Show Jumping" badgeEmoji="⭐" name="Pessoa Gen X Pro" subtitle="Close contact · Forward flap · Top-level showjumping geometry · Minimal bulk" score={9.2}
              description={<p>The Gen X Pro is widely ridden at the top of show jumping, including by multiple Olympic medalists. Close-contact geometry — one of the most aggressive forward flaps in production close-contact saddles — puts the rider as close to the horse as possible at speed. Transformative feel for serious jumpers. See the <Link href="/reviews/pessoa-saddle-review" className="text-brand-primary">full Pessoa review →</Link></p>}
              specs={[{ label: 'Contact', value: 'Close contact', highlight: 'good' }, { label: 'Top-tier competition use', value: 'Documented Olympic riders', highlight: 'good' }, { label: 'Flatwork', value: 'Not optimized', highlight: 'warn' }]}
              pros={['Among the closest-contact geometry in the close-contact category', 'Top-level showjumping pedigree', 'Exceptional feel at speed']} cons={['Less suitable for extended flatwork', 'Premium price']}
              price="$2,400–$3,200" ctaText="Find a Pessoa Dealer →" ctaHref="https://pessoaequestrian.com" ctaAffiliateProgram="sharesale" ctaAffiliateProduct="pessoa-gen-x-pro" />
            <ReviewCard id="bates" badge="Best All-Purpose" badgeEmoji="🐴" name="Bates Caprilli All-Purpose" subtitle="CAIR panel system · Adjustable gullet · Eventing and AP riding" score={9.0}
              description={<p>The Bates Caprilli is the most practical all-purpose English saddle — the CAIR (Computer Aided Intelligent Ride) panel system uses air panels that conform to the horse&apos;s back and maintain consistent pressure. Adjustable gullet allows width changes without a saddler. Good for eventing, hunter, and recreational riding where one saddle must do multiple jobs.</p>}
              specs={[{ label: 'Panels', value: 'CAIR air-panel system', highlight: 'good' }, { label: 'Gullet', value: 'Adjustable', highlight: 'good' }, { label: 'Discipline', value: 'All-purpose / Eventing' }]}
              pros={['CAIR panels conform to horse\'s back', 'Adjustable gullet', 'Good versatility', 'Australian engineering quality']} cons={['CAIR panels can fail (require professional repair)', 'Less specialized than discipline-specific saddles']}
              price="$800–$2,000" ctaText="Find a Bates Dealer →" ctaHref="https://batessaddles.com" ctaAffiliateProgram="sharesale" ctaAffiliateProduct="bates-caprilli" />
            <ReviewCard id="collegiate" badge="Best Budget" badgeEmoji="💰" name="Collegiate Convertible AP" subtitle="Adjustable gullet · Under $800 · Best budget English option" score={8.4}
              description={<p>For recreational riders, growing horses, or those new to the sport — Collegiate&apos;s Convertible AP offers an adjustable gullet at an accessible price. Build quality is entry-level compared to Stubben or Pessoa, but functional. Used Stubben or Bates in this price range often offer better long-term value — see our buying guide. Full review: <Link href="/reviews/collegiate-saddle-review" className="text-brand-primary">Collegiate Saddle Review →</Link></p>}
              specs={[{ label: 'Gullet', value: 'Adjustable (5 widths)', highlight: 'good' }, { label: 'Price', value: 'Best in class', highlight: 'good' }, { label: 'Vs Used Premium', value: 'Check used market first', highlight: 'warn' }]}
              pros={['Adjustable gullet at low price', 'Good for growing horses', 'Widely available']} cons={['Entry-level build quality', 'Low resale value', 'Check used premium market before buying new']}
              price="$400–$800" ctaText="Find a Collegiate Dealer →" ctaHref="https://collegiate.com" ctaAffiliateProgram="sharesale" ctaAffiliateProduct="collegiate-convertible-ap" />

            <h2 className="font-display font-bold text-brand-dark text-2xl mt-12 mb-4">Brand-by-Brand Reference</h2>
            <p className="text-base text-brand-text-mid leading-relaxed mb-6">The picks above represent our top selection per discipline, but the English saddle market spans several decades of inherited brand reputation and varied build philosophies. The reference below summarizes the seven brands worth knowing — what each is best at, their tree philosophy, published weight and price ranges, and the rider profile each typically suits.</p>

            <div id="stubben-brand" className="bg-brand-surface border border-brand-border rounded-xl p-6 mb-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Stubben · Switzerland / Germany · Est. 1894</div>
              <h3 className="font-display font-bold text-brand-dark text-xl m-0 mb-3">Stubben — The German Dressage Standard</h3>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-3">Stubben&apos;s reputation is built on hand-finished German bridle leather, a steel-sprung tree (heavier and longer-lived than synthetic alternatives), and the Quick-Change tree-width system that lets a saddler swap between 5 widths without rebuilding the saddle. Published weight ranges typically run 15–18 lbs depending on model — heavier than mass-produced alternatives, but the build longevity is the trade-off most owners are looking for.</p>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-3"><strong>Best for:</strong> Dressage, eventing dressage phase, classical seat riders, owners planning to keep one saddle for a decade or more. <strong>Tree options:</strong> Quick-Change steel-sprung (5 widths from narrow to extra-wide). <strong>Published price tiers:</strong> Mid-range models (Genesis, Edelweiss) $2,400–3,200; flagship dressage and jumping (Roxane, Wotan, Romanus) $3,200–4,800; custom orders $5,000+.</p>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-0"><strong>Watch out for:</strong> Stubbens are heavy by modern standards; weight matters for jumper riders and smaller adults. The leather requires a longer break-in period than CAIR-paneled saddles. Used market is deep — a 10-year-old Stubben in good condition is often the best-value premium English saddle on the market.</p>
            </div>

            <div id="pessoa-brand" className="bg-brand-surface border border-brand-border rounded-xl p-6 mb-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Pessoa · Brazil / France · Nelson Pessoa heritage</div>
              <h3 className="font-display font-bold text-brand-dark text-xl m-0 mb-3">Pessoa — The Showjumper&apos;s Saddle</h3>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-3">Pessoa is the rare brand designed by a top-of-the-sport competitor — Nelson Pessoa, and later Rodrigo Pessoa, are documented Olympic-level showjumpers. The Gen X line is engineered around the demands of grand-prix jumping: forward flap, close-contact panel design, minimal bulk under the leg. Most production Pessoas weigh in around 12–14 lbs — light by premium-saddle standards, intentionally so.</p>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-3"><strong>Best for:</strong> Show jumping, hunters, equitation riders who want a close-contact feel. <strong>Tree options:</strong> Fixed-width wood/synthetic tree across most models — width is selected at order time, not adjusted later. <strong>Published price tiers:</strong> Entry close-contact $1,800–2,400; Gen X Pro and equivalents $2,400–3,200; custom or A/O eventing options $3,000+.</p>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-0"><strong>Watch out for:</strong> Not a dressage saddle — flatwork on a forward-flap Pessoa is comfortable for short periods but not what the geometry is built for. Resale is strong in the jumper community.</p>
            </div>

            <div id="bates-brand" className="bg-brand-surface border border-brand-border rounded-xl p-6 mb-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Bates · Australia · CAIR / EASY-CHANGE technology</div>
              <h3 className="font-display font-bold text-brand-dark text-xl m-0 mb-3">Bates — The Adjustable-System Specialist</h3>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-3">Bates pioneered two of the most-copied features in production English saddles: the CAIR (air-filled) panel system that distributes pressure across the horse&apos;s back without flocked-wool hot spots, and the EASY-CHANGE gullet system that lets owners swap tree widths at home with a screwdriver. Most Bates models weigh 12–14 lbs and run the full range from all-purpose to specialist dressage and jumping geometries.</p>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-3"><strong>Best for:</strong> Riders whose horses change shape (growing youngsters, horses coming back into work), eventers who want one frame across phases, anyone who values the ability to adjust tree width without a saddler appointment. <strong>Tree options:</strong> EASY-CHANGE (interchangeable gullet plates, typically 6 widths). <strong>Published price tiers:</strong> Caprilli AP and Innova $800–1,400; Artiste and Isabell dressage $1,600–2,400; Elevation and Advanta jumping $1,800–2,800.</p>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-0"><strong>Watch out for:</strong> CAIR panels can lose air or leak over time and require professional service to repair. Some owners and saddlers prefer to convert Bates saddles to traditional wool flocking — this is supported by Bates dealers and is not a defect.</p>
            </div>

            <div id="collegiate-brand" className="bg-brand-surface border border-brand-border rounded-xl p-6 mb-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Collegiate · India (Weatherbeeta group)</div>
              <h3 className="font-display font-bold text-brand-dark text-xl m-0 mb-3">Collegiate — The Practical Entry Saddle</h3>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-3">Collegiate, owned by the Weatherbeeta group and manufactured in India, occupies the entry-level slot in the English-saddle market. Most models are real leather (not synthetic) and most include an adjustable gullet — a meaningful feature at the $400–800 price tier. Weight ranges run 13–16 lbs depending on model. The build is serviceable, not premium; expect the saddle to last 5–10 years of regular use rather than the 20–30 years a Stubben or County can deliver with care.</p>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-0"><strong>Best for:</strong> First saddles, lesson programs, growing horses or rider/horse pairs where commitment to one saddle isn&apos;t yet warranted. <strong>Tree options:</strong> Adjustable gullet across most models (5 widths). <strong>Published price tiers:</strong> $400–800 new; well under $400 used.</p>
            </div>

            <div id="wintec-brand" className="bg-brand-surface border border-brand-border rounded-xl p-6 mb-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Wintec · Australia · Synthetic specialists</div>
              <h3 className="font-display font-bold text-brand-dark text-xl m-0 mb-3">Wintec — The All-Weather Synthetic</h3>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-3">Wintec is the synthetic-saddle sister brand to Bates and shares the CAIR panel and EASY-CHANGE gullet technologies. The synthetic outer means the saddle is lighter (typically 9–12 lbs), washable, and effectively unaffected by rain, sweat, or rough barn handling. Aesthetic conservative owners often dismiss synthetics out of hand; that&apos;s a brand preference, not a functional defect. Wintecs are commonly seen at endurance, trail, eventing cross-country phases, and lesson programs.</p>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-0"><strong>Best for:</strong> Endurance, trail, foul-weather riders, lesson programs, owners who want adjustable-tree technology at half the price of the leather Bates equivalent. <strong>Tree options:</strong> EASY-CHANGE gullet (same system as Bates). <strong>Published price tiers:</strong> $500–1,200; flagship models with extra padding and HART panels $1,200–1,800. <strong>Watch out for:</strong> Synthetics do not develop the patina or resale value of leather. The saddle that&apos;s perfect for cross-country isn&apos;t the saddle most riders show in.</p>
            </div>

            <div id="custom-saddlery-brand" className="bg-brand-surface border border-brand-border rounded-xl p-6 mb-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Custom Saddlery · USA · Made-to-measure dressage</div>
              <h3 className="font-display font-bold text-brand-dark text-xl m-0 mb-3">Custom Saddlery — The Made-To-Measure Option</h3>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-3">Custom Saddlery, based in Virginia, builds saddles measured to the individual horse and rider. Their fitting process — a representative comes to the barn, takes wither tracings, evaluates the horse&apos;s back, and discusses rider seat preferences — produces a saddle whose tree, panel shape, flap length, and twist are specified for that pair rather than chosen from a stock catalog. Production weight depends on the build but is typically 14–17 lbs for dressage models. The Wolfgang Solo, Icon Star, and Advantage are well-known dressage models with strong followings at small-tour and grand-prix levels.</p>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-0"><strong>Best for:</strong> Hard-to-fit horses (very high or very low withers, asymmetric backs, very wide or very narrow horses), riders with seat-fit issues that production trees don&apos;t resolve, serious dressage competitors at small-tour and above. <strong>Tree options:</strong> Custom-built to the wither tracing and rider measurements. <strong>Published price tiers:</strong> $4,500–7,500 new depending on model and leather selection. <strong>Watch out for:</strong> The fitting process takes 8–16 weeks; the saddle is built to a specific horse and resale is therefore narrower than for adjustable production saddles.</p>
            </div>

            <div id="county-brand" className="bg-brand-surface border border-brand-border rounded-xl p-6 mb-10">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">County Saddlery · England → USA · Wool-flocked specialists</div>
              <h3 className="font-display font-bold text-brand-dark text-xl m-0 mb-3">County Saddlery — The Wool-Flocked Standard</h3>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-3">County Saddlery, originally English and now US-headquartered, is one of the brands most associated with traditional wool-flocked panels (rather than CAIR air or foam) and a serious in-house fitting program. The wool-flocked panel is rebuildable: as a horse&apos;s back changes shape over years of work, a saddler can reflock and shape the panel, extending the saddle&apos;s useful life dramatically. Models commonly seen at hunter and dressage levels include the Innovation, the Perfection, and the Conquest. Published weight ranges run 14–18 lbs.</p>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-0"><strong>Best for:</strong> Hunters, dressage riders who prefer the connected feel of wool over air, owners committed to long-term ownership with regular saddler service. <strong>Tree options:</strong> Several proprietary trees (Calibre, etc.); some models offer adjustable widths through panel/flocking work rather than gullet plates. <strong>Published price tiers:</strong> $4,000–6,500 new; used market is strong because the saddles are designed to be rebuilt rather than replaced. <strong>Watch out for:</strong> Wool flocking requires periodic maintenance (typically a reflock every 1–3 years). Without that maintenance, the panel hardens and stops conforming to the horse.</p>
            </div>

            <h2 className="font-display font-bold text-brand-dark text-2xl mt-10 mb-4">Choosing Between Them</h2>
            <p className="text-base text-brand-text-mid leading-relaxed mb-3">The right choice falls out of three honest questions, in this order: (1) What discipline are you actually riding 80% of the time? Pick the brand that&apos;s built for that, not the one that handles your occasional fun-show. (2) Does your horse&apos;s back change with seasonal weight, age, or work level? If yes, an adjustable system (Bates, Wintec) or a wool-flocked rebuildable saddle (County) is worth more than its sticker price implies. (3) What&apos;s your time horizon? A first horse and a tight budget often justifies a Collegiate or used Bates; a horse you plan to keep for a decade often justifies the Stubben, Custom, or County investment.</p>
            <p className="text-base text-brand-text-mid leading-relaxed mb-0">Whatever the brand, the single most important step before purchase is a fitting on the horse the saddle will live on. Manufacturer specs and rider reviews narrow the field; a saddler with the horse standing in front of them closes the deal. See our <Link href="/guides/saddle-fit-guide" className="text-brand-primary no-underline hover:underline">saddle fit guide</Link> and <Link href="/guides/used-saddle-buying-guide" className="text-brand-primary no-underline hover:underline">used-saddle buying guide</Link> for the next steps.</p>
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Discipline</div>
              {[['Dressage', 'Stubben Roxane'], ['Show Jumping', 'Pessoa Gen X Pro'], ['Eventing / All-Purpose', 'Bates Caprilli'], ['Budget / Recreational', 'Collegiate Convertible'], ['Budget (better option)', 'Used Stubben or Bates']].map(([d, p]) => (
                <div key={d} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light">{d}</div>
                  <div className="text-xs font-bold text-brand-dark">→ {p}</div>
                </div>
              ))}
            </div>
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Brand Jump-To</div>
              {[['Stubben', '#stubben-brand'], ['Pessoa', '#pessoa-brand'], ['Bates', '#bates-brand'], ['Collegiate', '#collegiate-brand'], ['Wintec', '#wintec-brand'], ['Custom Saddlery', '#custom-saddlery-brand'], ['County', '#county-brand']].map(([b, h]) => (
                <div key={b} className="py-1.5 border-b border-brand-border last:border-0">
                  <a href={h} className="text-xs font-bold text-brand-dark no-underline hover:text-brand-primary">→ {b}</a>
                </div>
              ))}
            </div>
            <RelatedLinks title="Full Reviews" links={[{ label: 'Stubben Deep Dive', href: '/reviews/stubben-saddle-review' }, { label: 'Pessoa Deep Dive', href: '/reviews/pessoa-saddle-review' }, { label: 'Collegiate Review', href: '/reviews/collegiate-saddle-review' }]} />
            <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Reviews and market intelligence." source="review-best-english" />
          </aside>
        </div>
      </div>
    </>
  )
}
