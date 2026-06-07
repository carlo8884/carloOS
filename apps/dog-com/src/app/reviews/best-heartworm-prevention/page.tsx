import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology} from '@carloOS/ui'
import { buildArticleSchema, buildBreadcrumbSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Best Heartworm Prevention for Dogs 2026 — Heartgard | Dog.com', description: 'Heartgard Plus, Interceptor Plus, and Simparica Trio compared for heartworm prevention. Monthly vs injectable options, parasite spectrum coverage.', path: '/reviews/best-heartworm-prevention', category: 'Preventive Care', type: 'article' })

const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Best Heartworm Prevention for Dogs 2026', description: 'Heartgard, Interceptor, Simparica Trio compared for heartworm prevention.', url: 'https://dog.com/reviews/best-heartworm-prevention', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-07T00:00:00Z' })
const hgSchema = buildProductSchema({ name: 'Heartgard Plus', description: 'Monthly heartworm, roundworm, and hookworm prevention chew for dogs.', url: 'https://heartgard.com', imageUrl: '', ratingValue: 9.3, reviewCount: 1 })
const intSchema = buildProductSchema({ name: 'Interceptor Plus', description: 'Monthly heartworm, roundworm, hookworm, whipworm, and tapeworm prevention for dogs.', url: 'https://interceptorplus.com', imageUrl: '', ratingValue: 9.2, reviewCount: 1 })
const allSchemas = combineSchemas(schema, hgSchema, intSchema)

const PICKS = [
  { label: 'Best Standalone HW', name: 'Heartgard Plus', subtitle: 'Ivermectin + pyrantel · Most prescribed', href: '#heartgard' },
  { label: 'Broadest Coverage', name: 'Interceptor Plus', subtitle: 'Adds whipworm + tapeworm to spectrum', href: '#interceptor' },
  { label: 'All-in-One', name: 'Simparica Trio', subtitle: 'HW + fleas + ticks + intestinal parasites', href: '#simparica' },
  { label: 'Best Injectable', name: 'ProHeart 12', subtitle: '12-month protection · No monthly compliance needed', href: '#proheart' },
]

export default function BestHeartwormPreventionPage() {
  return (
    <>
      <SchemaScript schema={combineSchemas(...allSchemas, buildBreadcrumbSchema({ items: [ { name: 'Home', url: 'https://dog.com/' }, { name: 'Reviews', url: 'https://dog.com/reviews' }, { name: 'Best Heartworm Prevention for Dogs 2026', url: 'https://dog.com/reviews/best-heartworm-prevention' } ] }))} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">⚕️ Evidence-Based · Updated 2026</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Heartworm Prevention for Dogs 2026</h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">Heartworm prevention costs $8–15/month. Treatment costs $1,000–2,000+ and requires months of strict rest. All options listed here require a prescription — your vet will recommend one based on your dog's risk profile and region.</p>
      </div>
      <QuickPicks items={PICKS} />
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid">Best Heartworm Prevention</span>
      </nav>
      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-14">
          <div>
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">How Monthly Prevention Works</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">Monthly preventives do not block infection in real time — they eliminate larvae exposed to during the previous month before they mature into adult worms. Missing one month creates a gap. Annual heartworm testing detects any breakthrough infection even in dogs on prevention.</p>
            </div>
            <ScoreMethodology />
            <ReviewCard id="heartgard" badge="Best Standalone" name="Heartgard Plus" subtitle="Ivermectin + pyrantel pamoate · Monthly beef chew · Most prescribed HW preventive" score={9.3} winner
              description={<p>Heartgard Plus is the most commonly prescribed standalone heartworm preventive in the US — ivermectin kills Dirofilaria immitis larvae while pyrantel pamoate covers roundworm and hookworm. Monthly beef-flavored chew with very high palatability. Suitable for all dogs except those with MDR1 gene mutation at higher doses — standard Heartgard dosing (6 mcg/kg ivermectin) is safe in MDR1-positive herding breeds. Not for flea/tick protection — pair with a separate isoxazoline for complete parasite coverage, or switch to Simparica Trio for combined coverage.</p>}
              specs={[{ label: 'Active Ingredients', value: 'Ivermectin + pyrantel', highlight: 'good' }, { label: 'Spectrum', value: 'HW + roundworm + hookworm' }, { label: 'Dosing', value: 'Monthly' }, { label: 'Rx required', value: 'Yes' }]}
              pros={['Most prescribed — largest safety dataset', 'Safe for MDR1-positive herding breeds at standard dose', 'High palatability', 'Affordable']}
              cons={['No flea/tick coverage', 'Monthly compliance required', 'Separate product needed for complete parasite coverage']}
              price="$35–55 / 6-month supply"
              ctaText="Ask Your Vet →"
              ctaHref="/find-a-vet"
              editorial
            />
            <ReviewCard id="interceptor" badge="Broadest GI Spectrum" name="Interceptor Plus" subtitle="Milbemycin oxime + praziquantel · Adds whipworm and tapeworm to Heartgard's spectrum" score={9.2}
              description={<p>Interceptor Plus covers five parasite types in one monthly chew: heartworm, roundworm, hookworm, whipworm, and tapeworm (Taenia species). For dogs with outdoor access, hunting exposure, or known GI parasite issues, the broader spectrum is meaningful. Milbemycin oxime is the heartworm component — also safe for MDR1-positive herding breeds at standard preventive dosing. Chicken-flavored chew. The best choice where GI parasite burden is a concern in addition to heartworm.</p>}
              specs={[{ label: 'Spectrum', value: 'HW + 4 GI parasites', highlight: 'good' }, { label: 'Tapeworm', value: 'Yes (Taenia species)', highlight: 'good' }, { label: 'Whipworm', value: 'Yes', highlight: 'good' }, { label: 'MDR1 safe', value: 'Yes at standard dose' }]}
              pros={['Broadest intestinal parasite coverage', 'MDR1-safe at standard dose', 'Good for outdoor/hunting dogs', 'One product covers GI parasite prevention']}
              cons={['No flea/tick coverage', 'Does not cover Dipylidium tapeworm (flea tapeworm — cover fleas separately)', 'Monthly compliance']}
              price="$40–60 / 6-month supply"
              ctaText="Ask Your Vet →"
              ctaHref="/find-a-vet"
              editorial
            />
            <ReviewCard id="simparica" badge="Best All-in-One" name="Simparica Trio" subtitle="Sarolaner + moxidectin + pyrantel · HW + fleas + ticks + intestinal parasites" score={9.5}
              description={<p>Simparica Trio is the most complete single monthly chew available — covering heartworm, 5 tick species, fleas (98% kill within 3 hours), roundworm, and hookworm. For most dogs in tick-endemic areas that would otherwise need both a heartworm preventive and a flea/tick product, Simparica Trio replaces two separate monthly products with one. The moxidectin heartworm component is among the strongest available. Note: moxidectin requires caution in MDR1-positive herding breeds at high doses — discuss with your vet for collies, shelties, and Australian Shepherds.</p>}
              specs={[{ label: 'Spectrum', value: 'HW + fleas + 5 tick species + GI', highlight: 'good' }, { label: 'Flea kill speed', value: '98% within 3 hours', highlight: 'good' }, { label: 'Replaces', value: 'Flea/tick + HW preventive both' }, { label: 'MDR1 note', value: 'Discuss with vet for herding breeds' }]}
              pros={['Replaces two separate monthly products', 'Fastest flea kill tested', 'Broadest tick species coverage', 'One chew covers everything']}
              cons={['MDR1 caution for herding breeds', 'Most expensive per dose', 'Not necessary if flea/tick prevention not needed']}
              price="$50–80 / 3-month supply"
              ctaText="Ask Your Vet →"
              ctaHref="/find-a-vet"
              editorial
            />
            <ReviewCard id="proheart" badge="Best for Compliance" name="ProHeart 12 (Injectable)" subtitle="12-month heartworm prevention · One vet visit · No monthly compliance" score={9.0}
              description={<p>ProHeart 12 is an injectable heartworm preventive administered by a veterinarian that provides 12 months of protection from a single injection. For owners who consistently forget monthly doses — which creates gaps in protection — ProHeart 12 eliminates the compliance problem entirely. Given at the annual wellness visit, it ensures continuous coverage without any owner follow-through required. Moxidectin-based. Does not cover flea/tick or GI parasites — pair with a separate flea/tick preventive. ProHeart 6 (6-month version) is also available for dogs where the 12-month formulation is not preferred.</p>}
              specs={[{ label: 'Duration', value: '12 months per injection', highlight: 'good' }, { label: 'Compliance required', value: 'None — one vet visit', highlight: 'good' }, { label: 'Administration', value: 'Veterinarian only' }, { label: 'Spectrum', value: 'HW only — no flea/tick' }]}
              pros={['No monthly compliance required', 'Annual protection from one injection', 'Perfect for owners who miss monthly doses', 'Given at wellness visit']}
              cons={['Does not cover flea/tick or intestinal parasites', 'More expensive upfront', 'Administered by vet only — requires appointment']}
              price="$70–120 per injection"
              ctaText="Ask Your Vet →"
              ctaHref="/find-a-vet"
              editorial
            />
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Situation</div>
              {[['Need flea/tick too', 'Simparica Trio'], ['Standalone HW only', 'Heartgard Plus'], ['Outdoor/hunting dog', 'Interceptor Plus'], ['Forget monthly doses', 'ProHeart 12'], ['Herding breed (MDR1)', 'Discuss with vet'], ['Collie/Sheltie/AusShep', 'Heartgard or Interceptor (safe at standard dose)']].map(([need, pick]) => (
                <div key={need} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light">{need}</div>
                  <div className="text-xs font-bold text-brand-dark">→ {pick}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[{ label: 'All Dog Reviews', href: '/reviews' }, { label: 'Heartworm Prevention Guide', href: '/health/heartworm-prevention' }, { label: 'Best Flea & Tick Prevention', href: '/reviews/best-flea-tick-prevention' }, { label: 'Dog Vaccination Guide', href: '/health/dog-vaccinations' }]} />
            <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance every Tuesday." source="review-heartworm" />
          </aside>
        </div>
      </div>
    </>
  )
}
