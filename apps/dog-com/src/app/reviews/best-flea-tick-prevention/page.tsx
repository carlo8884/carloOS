import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology} from '@carloOS/ui'
import { buildArticleSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Best Flea & Tick Prevention 2025 — Bravecto, NexGard | Dog.com', description: 'Best flea and tick prevention for dogs — Bravecto, NexGard, and Simparica compared by coverage, duration, and safety profile. research-based.', path: '/reviews/best-flea-tick-prevention', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Best Flea & Tick Prevention for Dogs 2025', description: 'Bravecto, NexGard, and Simparica ranked by coverage and safety.', url: 'https://dog.com/reviews/best-flea-tick-prevention', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const bravecto = buildProductSchema({ name: 'Bravecto Chew for Dogs', description: '12-week oral flea and tick prevention — fluralaner isoxazoline class.', url: 'https://bravecto.com', imageUrl: '', ratingValue: 9.3, reviewCount: 1 })
const nexgard = buildProductSchema({ name: 'NexGard Chew for Dogs', description: 'Monthly oral flea and tick prevention — afoxolaner isoxazoline class.', url: 'https://nexgard.com', imageUrl: '', ratingValue: 9.2, reviewCount: 1 })
const allSchemas = combineSchemas(schema, bravecto, nexgard)
const PICKS = [
  { label: 'Best Overall', emoji: '🏆', name: 'Bravecto', subtitle: '12-week duration · Fewest doses · Broad tick coverage', href: '#bravecto' },
  { label: 'Best Monthly', emoji: '⭐', name: 'NexGard', subtitle: 'Monthly · Established track record · Widely available', href: '#nexgard' },
  { label: 'Best Combo', emoji: '🛡️', name: 'Simparica Trio', subtitle: 'Fleas, ticks, heartworm, intestinal parasites', href: '#simparica' },
]
export default function FleaTickPreventionPage() {
  return (
    <>
      <SchemaScript schema={allSchemas} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">💊 Evidence-Based · May 2025</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Flea & Tick Prevention 2025</h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">Oral isoxazoline class preventives (Bravecto, NexGard, Simparica) are the most effective flea and tick prevention available — they work systemically and kill parasites on contact with the dog's blood. Prescription required.</p>
      </div>
      <QuickPicks items={PICKS} />
      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid">Best Flea & Tick Prevention</span>
      </nav>
      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-14">
          <div>
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Isoxazolines and Seizure Risk</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">The <a href="https://www.fda.gov/animal-veterinary/animal-health-literacy/fact-sheet-isoxazoline-class-products" rel="noopener" target="_blank" className="text-brand-primary hover:underline">FDA</a> has issued a warning that isoxazoline-class products (Bravecto, NexGard, Simparica, Credelio) may cause neurological adverse events including muscle tremors, ataxia, and seizures in some dogs. This is rare — but dogs with a history of seizures or neurological conditions should use these products only under close veterinary supervision. Discuss with your vet before starting any isoxazoline product.</p>
            </div>
            <ScoreMethodology />
            <ReviewCard id="bravecto" badge="Best Overall" badgeEmoji="🏆" name="Bravecto Chew (Fluralaner)" subtitle="12-week duration · Covers 7 tick species · Single dose convenience" score={9.3} winner
              description={<p>Bravecto's 12-week duration is its defining advantage — 4 doses per year versus 12 for monthly products. Fewer doses means fewer opportunities for compliance lapses (the most common reason prevention fails). A single chew provides 3 months of protection against fleas and 7 tick species including Deer tick (Lyme disease vector), American dog tick, Brown dog tick, Black-legged tick, Gulf Coast tick, Lone Star tick, and Serrano tick. Blood levels remain therapeutic throughout the 12-week window — unlike some monthly products that have efficacy gaps in the final week. Prescription required.</p>}
              specs={[{ label: 'Duration', value: '12 weeks per dose', highlight: 'good' }, { label: 'Tick species', value: '7 — broadest coverage', highlight: 'good' }, { label: 'Class', value: 'Isoxazoline (fluralaner)' }, { label: 'Requires Rx', value: 'Yes' }]}
              pros={['12-week duration — fewest doses', 'Broadest tick species coverage', 'Consistent efficacy throughout window', 'Beef-flavored — most dogs take readily']}
              cons={['Prescription required', 'More expensive per dose (but similar annual cost)', 'Isoxazoline seizure risk in predisposed dogs']}
              price="$50–60 per 12-week dose"
              ctaText="Ask Your Vet About Bravecto →"
              ctaHref="https://www.chewy.com/s?query=bravecto+chew+dogs"
              ctaAffiliateProgram="chewy"
              ctaAffiliateProduct="bravecto-chew"
            />
            <ReviewCard id="nexgard" badge="Best Monthly" badgeEmoji="⭐" name="NexGard Chew (Afoxolaner)" subtitle="Monthly · 5 tick species · Most prescribed oral prevention" score={9.2}
              description={<p>NexGard is the most widely prescribed oral flea and tick prevention and has the longest post-market safety record of the isoxazoline class — first approved in 2013. Monthly dosing maintains high compliance when dogs are on a consistent schedule. Covers 5 tick species including Deer tick, American dog tick, Brown dog tick, Gulf Coast tick, and Lone Star tick. Kills fleas before they lay eggs — important for breaking the flea lifecycle in the environment. Beef-flavored chew most dogs eat readily. Prescription required; your veterinarian likely has it in stock.</p>}
              specs={[{ label: 'Duration', value: 'Monthly' }, { label: 'Tick species', value: '5' }, { label: 'Class', value: 'Isoxazoline (afoxolaner)' }, { label: 'Track record', value: 'Longest of isoxazoline class', highlight: 'good' }]}
              pros={['Longest safety track record in class', 'Most widely available', 'Kills fleas before egg laying', 'Monthly predictability']}
              cons={['Monthly dosing — 12 doses/year', '5 tick species vs Bravecto\'s 7', 'Prescription required']}
              price="$20–25 per monthly dose"
              ctaText="Ask Your Vet About NexGard →"
              ctaHref="https://www.chewy.com/s?query=nexgard+chew+dogs"
              ctaAffiliateProgram="chewy"
              ctaAffiliateProduct="nexgard-chew"
            />
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Situation</div>
              {[['Best compliance (fewest doses)', 'Bravecto (12-week)'], ['History of seizures', 'Discuss alternatives with vet'], ['Heartworm + flea/tick combined', 'Simparica Trio or Revolution Plus'], ['Budget-conscious', 'Generic fluralaner (Bravecto generic)'], ['Cats in household', 'Check — dog isoxazolines toxic to cats']].map(([s, r]) => (
                <div key={s} className="py-2.5 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light mb-0.5">{s}</div>
                  <div className="text-xs font-bold text-brand-dark">→ {r}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[{ label: 'Heartworm Prevention', href: '/health/heartworm-prevention' }, { label: 'Dog Vaccinations', href: '/health/dog-vaccinations' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
            <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="review-flea-tick" />
          </aside>
        </div>
      </div>
    </>
  )
}
