import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology, Breadcrumb } from '@carloOS/ui'
import { buildArticleSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Best Dressage Saddles 2025 — Training to FEI Level Ranked | Saddle.com',
  description: 'The best dressage saddles in 2025, ranked by level: Training through FEI. Stubben Roxane, Custom Saddlery Wolfgang, Bates Innova, Albion Platinum compared.',
  path: '/reviews/best-dressage-saddles',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: 'Best Dressage Saddles 2025',
  description: 'Dedicated dressage saddle buyer\'s guide. Training-Level through FEI ranked using CSF reviewer notes and published rider reports.',
  url: 'https://saddle.com/reviews/best-dressage-saddles',
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2025-05-15T00:00:00Z',
  modifiedAt: '2025-05-15T00:00:00Z',
})

const PICKS = [
  { label: 'Best Overall', emoji: '🏆', name: 'Stubben Roxane', subtitle: '9.5 · German benchmark · Quick-Change tree', href: '#roxane' },
  { label: 'Best FEI-Level', emoji: '🎖️', name: 'Custom Saddlery Wolfgang', subtitle: '9.4 · Bespoke fit · FEI-favored', href: '#wolfgang' },
  { label: 'Best Value', emoji: '💎', name: 'Bates Innova', subtitle: '8.8 · Mono-flap · Under $2,400', href: '#innova' },
  { label: 'Best Budget', emoji: '💰', name: 'Wintec Pro Dressage', subtitle: '8.6 · Synthetic · Under $1,400', href: '#wintec' },
]

const productSchemas = [
  buildProductSchema({ name: 'Stubben Roxane Dressage Saddle', description: 'German-made dressage saddle with Quick-Change tree adjustment.', url: 'https://www.stubben.com', imageUrl: '', ratingValue: 9.5, reviewCount: 1 }),
  buildProductSchema({ name: 'Custom Saddlery Wolfgang Dressage Saddle', description: 'Bespoke dressage saddle favored by FEI competitors.', url: 'https://www.customsaddlery.com', imageUrl: '', ratingValue: 9.4, reviewCount: 1 }),
  buildProductSchema({ name: 'Bates Innova Dressage Saddle', description: 'Australian mono-flap dressage saddle with CAIR panels and adjustable gullet.', url: 'https://www.batessaddles.com', imageUrl: '', ratingValue: 8.8, reviewCount: 1 }),
]
const allSchemas = combineSchemas(schema, ...productSchemas)

export default function BestDressageSaddlesPage() {
  return (
    <>
      <SchemaScript schema={allSchemas} />

      {/* HERO */}
      <div className="bg-brand-dark px-container sm:px-container-sm py-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)' }} aria-hidden="true" />
        <div className="relative z-10">
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">Buyer&apos;s Guide · Discipline-Specific · 2025</span>
          <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(24px, 4vw, 46px)' }}>
            Best Dressage Saddles 2025
          </h1>
          <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
            A dressage saddle is a precision instrument. Deep seat, straight-cut flap, and a tree geometry that puts the rider directly over the horse&apos;s center of motion — none of which translates to other disciplines. Here are the best dressage saddles at every level, from Training through FEI, with the budget at each stage and the rider each suits.
          </p>
        </div>
      </div>

      <QuickPicks items={PICKS} />
      <Breadcrumb siteId="saddle-com" items={[{ name: 'Home', href: '/' }, { name: 'Reviews', href: '/reviews' }, { name: 'Best Dressage Saddles' }]} />

      <div className="px-container sm:px-container-sm py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-14">
          <div>

            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-lg p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">What Makes a Dressage Saddle Different</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
                Three things separate a dressage saddle from any other English saddle. First, the <strong>deep seat</strong> places the rider in a specific vertical alignment over the horse&apos;s motion — ear, shoulder, hip, heel — the position required for collected work. Second, the <strong>straight-cut flap</strong> accommodates the dressage leg length and direct contact. Third, the <strong>tree geometry</strong> is designed for collection: the saddle sits where the horse can lift the back and engage the hindquarters without restriction. Using a jumping or AP saddle for serious dressage work compromises all three.
              </p>
            </div>

            <ScoreMethodology />

            {/* Roxane */}
            <ReviewCard
              id="roxane"
              badge="Best Overall · Top Pick"
              badgeEmoji="🏆"
              name="Stubben Roxane"
              subtitle="The benchmark German dressage saddle · Quick-Change tree (5 widths) · Deep seat geometry"
              score={9.5}
              winner
              description={<div>
                <p>The Roxane is the saddle other dressage saddles are measured against. Over a century of German saddlery distilled into one model — Quick-Change tree adjustment, hand-finished German leather, and a deep-seat geometry developed alongside FEI-level dressage riders. The panel construction is notably supple and conforms to a wider range of back types than most competitors at any price.</p>
                <p>The Roxane is the right choice for any serious dressage rider from First Level through Grand Prix. It is not the cheapest option, but the combination of Quick-Change adjustability and exceptional resale value means the lifetime cost is often lower than a Bates Innova replaced twice. See the <Link href="/reviews/stubben-saddle-review" className="text-brand-primary">full Stubben review →</Link></p>
              </div>}
              specs={[
                { label: 'Tree', value: 'Quick-Change (5 widths)', highlight: 'good' },
                { label: 'Leather', value: 'Hand-finished German', highlight: 'good' },
                { label: 'Best Level', value: 'First through Grand Prix' },
                { label: 'Made In', value: 'Germany', highlight: 'good' },
                { label: 'Resale', value: 'Excellent (40–60% retained at 10y)', highlight: 'good' },
              ]}
              pros={['Quick-Change tree — fits multiple horses', 'Best-in-class German leather and construction', 'Strong resale value — lowest lifetime cost in the category', 'Suits riders Training through Grand Prix']}
              cons={['$3,200–$4,500 new — significant entry investment', 'Deep seat — confirm fit before committing']}
              price="$3,200–$4,500 new"
              priceNote="Used: $1,200–$2,400"
              ctaText="Find a Stubben Dealer →"
              ctaHref="https://www.stubben.com"
              ctaAffiliateProgram="sharesale"
              ctaAffiliateProduct="stubben-roxane"
            />

            {/* Wolfgang */}
            <ReviewCard
              id="wolfgang"
              badge="Best FEI-Level"
              badgeEmoji="🎖️"
              name="Custom Saddlery Wolfgang"
              subtitle="Bespoke fit · Widely favored at FEI level · Built to spec per horse"
              score={9.4}
              description={<p>Custom Saddlery&apos;s Wolfgang is one of the most-ridden saddles at the upper levels of US and European dressage. Custom Saddlery&apos;s approach is bespoke: each saddle is built or modified to a specific horse and rider, often with the fitter present at delivery. The Wolfgang&apos;s seat geometry is widely praised for the freedom of motion it allows the upper-level rider during piaffe, passage, and the most technical movements of Grand Prix. The tradeoff is the price, the lead time (typically 8–14 weeks), and the requirement for a Custom Saddlery fitter in your region. For Prix St. Georges and above riders investing in their next 8–10 years of equipment, the Wolfgang is genuinely worth the investment and the wait.</p>}
              specs={[
                { label: 'Construction', value: 'Bespoke per horse & rider', highlight: 'good' },
                { label: 'Best Level', value: 'Prix St. Georges through Grand Prix', highlight: 'good' },
                { label: 'Lead Time', value: '8–14 weeks', highlight: 'warn' },
                { label: 'Dealer Required', value: 'Custom Saddlery fitter', highlight: 'warn' },
                { label: 'Made In', value: 'USA' },
              ]}
              pros={['Bespoke fit — built for the specific horse', 'Widely favored at FEI level', 'Excellent freedom-of-motion seat geometry', 'Strong used-market demand among advanced dressage riders']}
              cons={['$4,500–$6,500 new — premium investment', 'Requires Custom Saddlery fitter access', 'Long lead time for bespoke build']}
              price="$4,500–$6,500 new"
              priceNote="Used: $2,000–$3,500"
              ctaText="Find a Custom Saddlery Fitter →"
              ctaHref="https://www.customsaddlery.com"
              ctaAffiliateProgram="sharesale"
              ctaAffiliateProduct="custom-saddlery-wolfgang"
            />

            {/* Innova */}
            <ReviewCard
              id="innova"
              badge="Best Value"
              badgeEmoji="💎"
              name="Bates Innova"
              subtitle="Mono-flap dressage · CAIR air panels · EASY-CHANGE gullet · Under $2,400"
              score={8.8}
              description={<p>The Innova is the best-value dressage saddle on the market — a genuine mono-flap dressage saddle with adjustable gullet and air-panel pressure equalization for under $2,400. The mono-flap construction puts the rider&apos;s leg directly against the horse&apos;s side, a feature normally reserved for $4K+ German and French saddles. For developing dressage riders at Training, First, and Second Level — or for serious amateur riders whose budget cannot stretch to a Stubben — the Innova delivers genuine dressage geometry at a price that doesn&apos;t require financing. At Third Level and above, riders typically move to Stubben Roxane, Custom Saddlery, or French bespoke for the additional refinement. See the <Link href="/brands/bates" className="text-brand-primary">full Bates review →</Link></p>}
              specs={[
                { label: 'Tree', value: 'EASY-CHANGE (5 widths)', highlight: 'good' },
                { label: 'Panels', value: 'CAIR air panels', highlight: 'good' },
                { label: 'Construction', value: 'Mono-flap', highlight: 'good' },
                { label: 'Best Level', value: 'Training through Second Level' },
                { label: 'Made In', value: 'Australia' },
              ]}
              pros={['Mono-flap construction at unmatched price', 'Adjustable gullet — works as horse changes shape', 'CAIR self-equalizing panels', 'Strong resale value for the price tier']}
              cons={['Not the equal of Stubben at FEI levels', 'CAIR cannot be field-repaired — factory work only']}
              price="$1,800–$2,400 new"
              priceNote="Used: $700–$1,400"
              ctaText="Find a Bates Dealer →"
              ctaHref="https://www.batessaddles.com"
              ctaAffiliateProgram="sharesale"
              ctaAffiliateProduct="bates-innova"
            />

            {/* Wintec */}
            <ReviewCard
              id="wintec"
              badge="Best Budget"
              badgeEmoji="💰"
              name="Wintec Pro Dressage"
              subtitle="Synthetic mono-flap dressage · EASY-CHANGE gullet · Under $1,400"
              score={8.6}
              description={<p>For working students, teenage dressage riders, beginning adult dressage riders, and anyone whose total saddle budget is sub-$1,400 — the Wintec Pro Dressage is the rational choice. It is a mono-flap dressage saddle with adjustable gullet and CAIR air panels at a price no leather alternative approaches. Synthetic feel under the leg is meaningfully different from leather; this is the main tradeoff. As a developing-rider saddle, a schooling backup, or a starter dressage saddle for riders not yet certain they will stay in the discipline, the Pro Dressage delivers genuine value. See the <Link href="/brands/wintec" className="text-brand-primary">full Wintec review →</Link></p>}
              specs={[
                { label: 'Tree', value: 'EASY-CHANGE', highlight: 'good' },
                { label: 'Panels', value: 'CAIR', highlight: 'good' },
                { label: 'Construction', value: 'Mono-flap synthetic', highlight: 'good' },
                { label: 'Best Level', value: 'Training through First Level' },
                { label: 'Weight', value: '~10 lb (vs 16 lb leather)', highlight: 'good' },
              ]}
              pros={['Cheapest serious dressage saddle on the market', 'Mono-flap geometry at sub-$1,400', 'Washable and weatherproof', 'Lightweight for smaller riders']}
              cons={['Synthetic feel — meaningfully different from leather', 'Above Second Level, leather is preferred']}
              price="$1,100–$1,400 new"
              priceNote="Used: $500–$800"
              ctaText="Find a Wintec Dealer →"
              ctaHref="https://www.wintec.net.au"
              ctaAffiliateProgram="sharesale"
              ctaAffiliateProduct="wintec-pro-dressage"
            />

            {/* Buyer framework */}
            <div className="bg-brand-surface border border-brand-border rounded-xl p-6 mb-8">
              <h2 className="font-display font-bold text-brand-dark text-xl mb-4">Which Dressage Saddle Is Right for You?</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-brand-dark text-white">
                      <th className="text-left px-4 py-3 font-bold text-2xs tracking-wider uppercase">Your Situation</th>
                      <th className="text-left px-4 py-3 font-bold text-2xs tracking-wider uppercase">Right Saddle</th>
                      <th className="text-left px-4 py-3 font-bold text-2xs tracking-wider uppercase">Budget</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Adult amateur, First–Third Level, one horse for the long term', 'Stubben Roxane (new or used)', '$3,200–$4,500 new'],
                      ['Adult amateur, multiple horses or shared barn', 'Stubben Roxane (Quick-Change) or Bates Innova', '$1,800–$4,500'],
                      ['Serious dressage rider, Prix St. Georges and above', 'Custom Saddlery Wolfgang (bespoke)', '$4,500–$6,500'],
                      ['Developing dressage rider, sub-$2,400 budget', 'Bates Innova', '$1,800–$2,400'],
                      ['Working student or starter rider, sub-$1,400 budget', 'Wintec Pro Dressage', '$1,100–$1,400'],
                      ['Hard-to-fit horse (wide back, asymmetry)', 'County Innovation or Black Country (bespoke fit)', '$2,500–$4,500'],
                      ['Budget-constrained but prefer leather', 'Used Stubben or used Bates Innova', '$700–$1,400 used'],
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-brand-white' : 'bg-brand-surface'}>
                        {row.map((cell, j) => (
                          <td key={j} className={`px-4 py-3 border-b border-brand-border ${j === 1 ? 'font-bold text-brand-dark' : j === 2 ? 'text-brand-primary font-semibold' : 'text-brand-text-mid'}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Important context */}
            <div className="bg-brand-dark text-white rounded-xl p-6 mb-8">
              <h2 className="font-display font-bold text-white text-xl mb-3">Before You Buy — The Fit Test</h2>
              <p className="text-sm text-white/70 leading-relaxed mb-3">
                No dressage saddle, regardless of brand or price, is correct for every horse. Before purchasing, the saddle must be evaluated on your horse by a qualified fitter — ideally a Society of Master Saddlers Certified Saddle Fitter (CSF). A premium saddle that does not fit your horse is worse than a budget saddle that does.
              </p>
              <p className="text-sm text-white/70 leading-relaxed m-0">
                Most reputable dealers offer trial periods (typically 7–14 days). Use them. See our <Link href="/guides/saddle-fit-guide" className="text-brand-primary">saddle fit guide</Link> for the 4-point check, and the <Link href="/guides/used-saddle-buying-guide" className="text-brand-primary">used saddle buying guide</Link> for the inspection protocol if buying secondhand.
              </p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Level</div>
              {[
                ['Training–First', 'Bates Innova / Wintec Pro'],
                ['Second–Third', 'Stubben Roxane / Bates Innova'],
                ['Fourth–PSG', 'Stubben Roxane'],
                ['FEI / Grand Prix', 'Custom Saddlery Wolfgang'],
              ].map(([level, pick]) => (
                <div key={level} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light uppercase tracking-eyebrow">{level}</div>
                  <div className="text-xs font-bold text-brand-dark">→ {pick}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Full Brand Reviews" links={[
              { label: 'Stubben — Roxane deep dive', href: '/reviews/stubben-saddle-review' },
              { label: 'Bates — Caprilli, Innova, Elevation', href: '/brands/bates' },
              { label: 'Wintec — full lineup', href: '/brands/wintec' },
              { label: 'All saddle brands', href: '/brands' },
            ]} />
            <RelatedLinks title="Related Guides" links={[
              { label: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide' },
              { label: 'Seat Size Guide', href: '/guides/seat-size-guide' },
              { label: 'Dressage Basics', href: '/guides/dressage-basics-guide' },
              { label: 'Used Saddle Buying Guide', href: '/guides/used-saddle-buying-guide' },
            ]} />
            <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Dressage Buyer's Guide" subtitle="Brand reviews and used-market pricing." source="best-dressage-saddles" />
          </aside>
        </div>
      </div>
    </>
  )
}
