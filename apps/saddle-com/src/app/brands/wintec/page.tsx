import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology, Breadcrumb } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Wintec Saddle Review 2025 — Pro Endurance, 500, Wide AP | Saddle.com',
  description: 'Complete Wintec saddle review. Synthetic-tree, washable English saddles compared. Wintec 500, Pro Endurance, Pro Dressage, Wide All-Purpose — and where synthetic beats leather.',
  path: '/brands/wintec',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: 'Wintec Saddle Review 2025',
  description: 'Wintec synthetic English saddles compared. The case for synthetic, CAIR/EASY-CHANGE technology, and the right rider for each model.',
  url: 'https://saddle.com/brands/wintec',
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2025-05-15T00:00:00Z',
  modifiedAt: '2025-05-15T00:00:00Z',
})

const PICKS = [
  { label: 'Best All-Purpose', emoji: '🐴', name: 'Wintec 500 AP', subtitle: '8.9 · The flagship · Adjustable · Under $1,000', href: '#500' },
  { label: 'Best Endurance/Trail', emoji: '🛤️', name: 'Wintec Pro Endurance', subtitle: '9.0 · Designed for distance · Lightweight', href: '#pro-endurance' },
  { label: 'Best Wide-Backed Horse', emoji: '🐎', name: 'Wintec Wide All-Purpose', subtitle: '8.7 · Hoop-tree · For cobs and warmbloods', href: '#wide' },
  { label: 'Best Synthetic Dressage', emoji: '🎖️', name: 'Wintec Pro Dressage', subtitle: '8.6 · Mono-flap · Under $1,400', href: '#pro-dressage' },
]

export default function WintecReviewPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* HERO */}
      <div className="bg-brand-dark px-container sm:px-container-sm py-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)' }} aria-hidden="true" />
        <div className="relative z-10">
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">CSF Reviewer Notes · Brand Profile · May 2025</span>
          <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(24px, 4vw, 46px)' }}>
            Wintec Saddle Review 2025 — The Complete Lineup
          </h1>
          <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
            Wintec is the synthetic saddle that proved synthetic isn&apos;t a compromise. Built on the same CAIR and EASY-CHANGE platform as Bates, they&apos;re lighter, washable, weatherproof, and a third of the price of comparable leather. Here&apos;s where Wintec wins — and where leather still has the edge.
          </p>
          <div className="mt-4 text-xs text-white/30">Saddle.com Editorial · Updated May 2025</div>
        </div>
      </div>

      <QuickPicks items={PICKS} />
      <Breadcrumb siteId="saddle-com" items={[{ name: 'Home', href: '/' }, { name: 'Brands', href: '/brands' }, { name: 'Wintec' }]} />

      <div className="px-container sm:px-container-sm py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-14">
          <div>

            {/* The case for synthetic */}
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-lg p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">The Case for Synthetic</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
                Wintec saddles use a synthetic outer and a glass-fiber-reinforced synthetic tree. The result is meaningfully lighter than leather (typically 9–11 lb vs 14–18 lb), <strong>fully washable with a hose</strong>, completely weatherproof, and immune to mold and rodent damage. Combined with the same CAIR air panels and EASY-CHANGE gullet plate technology used in Bates leather saddles, you get genuine fit adjustability at half the price of the leather equivalent. The real question isn&apos;t whether Wintec works — it&apos;s whether the rider values weight, washability, and price more than leather&apos;s feel and long-term patina.
              </p>
            </div>

            <ScoreMethodology />

            {/* 500 AP */}
            <ReviewCard
              id="500"
              badge="Best All-Purpose — Flagship"
              badgeEmoji="🐴"
              name="Wintec 500 All-Purpose"
              subtitle="The flagship synthetic AP · EASY-CHANGE gullet · CAIR panels · Under $1,000"
              score={8.9}
              winner
              description={<div>
                <p>The Wintec 500 AP is the most-sold synthetic English saddle in the world. The reasons are not mysterious: adjustable gullet (5 widths), CAIR air panels, semi-forward all-purpose flap, washable construction, and a price most riders can fund without financing.</p>
                <p>For a first serious saddle, a teenage rider, a beginner adult coming back to the sport, or any rider whose horse&apos;s back shape is still settling — the 500 is the rational choice. It does not have the patina of leather and it will not develop the character of a Stubben over 20 years. But it fits well, performs well, washes off, and costs less than $1,000 new.</p>
              </div>}
              specs={[
                { label: 'Tree', value: 'EASY-CHANGE (5 widths)', highlight: 'good' },
                { label: 'Panels', value: 'CAIR air panels', highlight: 'good' },
                { label: 'Outer', value: 'Equi-Suede / Equi-Leather synthetic' },
                { label: 'Weight', value: '~10 lb (vs 16 lb leather)', highlight: 'good' },
                { label: 'Care', value: 'Hose-washable', highlight: 'good' },
                { label: 'Discipline', value: 'All-Purpose / Schooling / Trail' },
              ]}
              pros={['Adjustable gullet at this price point is unmatched', 'Washable and weatherproof', 'Lightweight — easier on smaller riders and on horses', 'Strong used market — high resale velocity', 'CAIR equalizes pressure']}
              cons={['Synthetic feel — different grip and conform than leather', 'Patina and aging character of leather absent', 'Lower resale value than Bates leather over the long term']}
              price="$700–$1,000 new"
              priceNote="Used: $300–$600"
              ctaText="Find a Wintec Dealer →"
              ctaHref="https://www.wintec.net.au"
              ctaAffiliateProgram="sharesale"
              ctaAffiliateProduct="wintec-500-ap"
            />

            {/* Pro Endurance */}
            <ReviewCard
              id="pro-endurance"
              badge="Best Endurance / Trail"
              badgeEmoji="🛤️"
              name="Wintec Pro Endurance"
              subtitle="Built for distance · Multiple D-rings · Deep seat for security on uneven terrain"
              score={9.0}
              description={<p>The Pro Endurance is purpose-built for endurance and serious trail use — a category where synthetic is not a compromise but an advantage. Multiple D-rings allow saddlebag and water-bottle attachment. Deep seat geometry holds the rider stable through hours of varied terrain. The fact that the saddle can be hosed off after a muddy 50-mile ride and dried in an hour is genuinely valuable — leather endurance saddles require careful conditioning after wet rides, and synthetic eliminates that maintenance cycle. For endurance and competitive trail riders, the Pro Endurance is widely considered the category leader at its price point.</p>}
              specs={[
                { label: 'Tree', value: 'EASY-CHANGE (5 widths)', highlight: 'good' },
                { label: 'Panels', value: 'CAIR air panels', highlight: 'good' },
                { label: 'Seat', value: 'Deep, secure', highlight: 'good' },
                { label: 'D-Rings', value: 'Multiple (saddlebag-ready)', highlight: 'good' },
                { label: 'Weight', value: '~10 lb', highlight: 'good' },
                { label: 'Best For', value: 'Endurance / 50–100 mile competitive trail' },
              ]}
              pros={['Best-in-class for endurance and competitive trail', 'Washable after muddy or wet rides', 'D-rings for trail gear', 'Deep seat — secure on long rides']}
              cons={['Less close-contact feel than dedicated trail leather saddles', 'Synthetic outer can heat up in direct sun more than leather']}
              price="$900–$1,300 new"
              priceNote="Used: $400–$700"
              ctaText="Find a Wintec Dealer →"
              ctaHref="https://www.wintec.net.au"
              ctaAffiliateProgram="sharesale"
              ctaAffiliateProduct="wintec-pro-endurance"
            />

            {/* Wide */}
            <ReviewCard
              id="wide"
              badge="Best for Wide-Backed Horses"
              badgeEmoji="🐎"
              name="Wintec Wide All-Purpose"
              subtitle="Hoop-tree geometry for round-backed horses · Wide gullet system · CAIR panels"
              score={8.7}
              description={<p>Cobs, draft crosses, Iberian breeds, and round-barreled warmbloods are notoriously difficult to fit in conventional saddles — most English trees are simply too narrow at the gullet and too A-shaped under the panels. The Wintec Wide uses a hoop-tree configuration that sits across the broad back instead of perching on top of it. For owners of hard-to-fit wide horses (Highlands, Fjords, Welsh Cobs, Friesians, Andalusians, draft crosses), the Wintec Wide is often the only off-the-rack saddle that actually fits without extensive custom work. Pairing it with the wide-gullet HART panel system gives genuine adjustability across the wide-tree spectrum.</p>}
              specs={[
                { label: 'Tree', value: 'Hoop-tree (wide horses)', highlight: 'good' },
                { label: 'Panels', value: 'CAIR (HART panel option)', highlight: 'good' },
                { label: 'Best For', value: 'Cobs, Fjords, draft crosses, Iberians', highlight: 'good' },
                { label: 'Flap', value: 'All-Purpose' },
                { label: 'Weight', value: '~11 lb' },
              ]}
              pros={['Solves the wide-horse fit problem at off-the-rack price', 'Adjustable system within the wide range', 'Washable', 'Strong demand on used market — wide riders desperate for fit']}
              cons={['Not the right shape for narrow-backed thoroughbreds or Arabians', 'Specialized — limited resale outside the wide-horse community']}
              price="$800–$1,200 new"
              priceNote="Used: $400–$700"
              ctaText="Find a Wintec Dealer →"
              ctaHref="https://www.wintec.net.au"
              ctaAffiliateProgram="sharesale"
              ctaAffiliateProduct="wintec-wide-ap"
            />

            {/* Pro Dressage */}
            <ReviewCard
              id="pro-dressage"
              badge="Best Synthetic Dressage"
              badgeEmoji="🎖️"
              name="Wintec Pro Dressage"
              subtitle="Mono-flap synthetic dressage · CAIR · Adjustable · Under $1,400"
              score={8.6}
              description={<p>Mono-flap dressage saddles under $1,400 are nearly impossible to find in leather — and that&apos;s where the Wintec Pro Dressage finds its niche. For developing dressage riders at Training and First Level, for working students who need a serviceable schooling saddle, and for riders whose budget cannot stretch to a Bates Innova or Stubben Roxane, the Pro Dressage delivers genuine dressage geometry, mono-flap close contact, and adjustable fit at a price point no leather competitor approaches. At Third Level and above, most serious competitors move to leather — but as a developing-rider saddle or a backup schooling saddle, the Pro Dressage is excellent value.</p>}
              specs={[
                { label: 'Tree', value: 'EASY-CHANGE (5 widths)', highlight: 'good' },
                { label: 'Panels', value: 'CAIR air panels', highlight: 'good' },
                { label: 'Construction', value: 'Mono-flap', highlight: 'good' },
                { label: 'Flap', value: 'Straight-cut dressage' },
                { label: 'Discipline', value: 'Dressage (Training through Second Level)' },
              ]}
              pros={['Mono-flap construction at sub-$1,400 price is unique', 'Adjustable gullet', 'Washable', 'Lightweight']}
              cons={['Synthetic feel under the leg differs from leather', 'Above Second Level dressage, leather is preferred', 'Resale slower than the 500 AP']}
              price="$1,100–$1,400 new"
              priceNote="Used: $500–$800"
              ctaText="Find a Wintec Dealer →"
              ctaHref="https://www.wintec.net.au"
              ctaAffiliateProgram="sharesale"
              ctaAffiliateProduct="wintec-pro-dressage"
            />

            {/* When synthetic wins */}
            <div className="bg-brand-surface border border-brand-border rounded-xl p-6 mb-8">
              <h2 className="font-display font-bold text-brand-dark text-xl mb-3">When Synthetic Wins — A Decision Framework</h2>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-3">Synthetic is the right answer in five specific situations:</p>
              <ol className="text-sm text-brand-text-mid leading-relaxed space-y-2 m-0 pl-5 list-decimal">
                <li><strong>Endurance and distance trail.</strong> Washability and weight matter more than patina. Wintec Pro Endurance is the category leader.</li>
                <li><strong>Wet climates.</strong> Pacific Northwest, UK, Ireland, Australia — leather requires constant care here. Synthetic doesn&apos;t.</li>
                <li><strong>Children and teenagers.</strong> Saddle weight matters more for small riders; cost matters more for parents; the rider will outgrow the saddle before the synthetic ages out.</li>
                <li><strong>First serious saddle.</strong> Rider commitment uncertain. Lower entry cost protects against a stalled riding career.</li>
                <li><strong>Multi-horse barns.</strong> A washable saddle that goes between five lesson horses is more practical than five separately fitted leather saddles.</li>
              </ol>
            </div>

            <div className="bg-brand-dark text-white rounded-xl p-6 mb-8">
              <h2 className="font-display font-bold text-white text-xl mb-3">When Leather Still Wins</h2>
              <ul className="text-sm text-white/70 leading-relaxed space-y-2 m-0 pl-5 list-disc">
                <li>Competitive dressage above Second Level — leather feel under the leg is part of the communication</li>
                <li>Show jumping above 1.10m — riders at this level overwhelmingly choose leather, and judges expect it</li>
                <li>Showing and hunter classes where appearance is judged</li>
                <li>Riders who plan to keep one saddle for 15+ years — leather amortized over a long life is often cheaper than replacing synthetic every 8 years</li>
                <li>Anyone who specifically values the feel and patina of well-cared-for leather (a legitimate aesthetic and tactile preference, not a snobbery)</li>
              </ul>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Wintec Quick Reference</div>
              {[['500 AP', 'The flagship', '8.9'], ['Pro Endurance', 'Distance trail', '9.0'], ['Wide AP', 'Hoop tree', '8.7'], ['Pro Dressage', 'Mono-flap synthetic', '8.6']].map(([m, d, s]) => (
                <div key={m} className="py-2 border-b border-brand-border last:border-0 flex justify-between">
                  <div>
                    <div className="text-xs font-bold text-brand-dark">{m}</div>
                    <div className="text-2xs text-brand-text-light">{d}</div>
                  </div>
                  <div className="text-sm font-bold text-brand-primary">{s}</div>
                </div>
              ))}
            </div>
            <div className="bg-brand-primary-pale border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Wintec vs Bates</div>
              <p className="text-sm text-brand-text-mid m-0">Same parent company, same CAIR/EASY-CHANGE tech, same Australian engineering. The only meaningful difference is the outer — Bates is leather, Wintec is synthetic. Choose Wintec for washability, weight, and lower price; Bates for leather feel, patina, and resale.</p>
            </div>
            <RelatedLinks title="Related Reviews" links={[
              { label: 'Bates Saddle Review', href: '/brands/bates' },
              { label: 'Best English Saddles', href: '/reviews/best-english-saddles' },
              { label: 'All Saddle Brands', href: '/brands' },
              { label: 'Used Saddle Buying Guide', href: '/guides/used-saddle-buying-guide' },
              { label: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide' },
            ]} />
            <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Brand reviews and market intelligence." source="review-wintec" />
          </aside>
        </div>
      </div>
    </>
  )
}
