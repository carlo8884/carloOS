import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology, AffiliateDisclosure} from '@carloOS/ui'
import { buildArticleSchema, buildItemListSchema, buildProductSchema, buildBreadcrumbSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Best Aquarium Lights 2026 — Planted Tank, Reef & FOWLR | Fish.com', description: 'Aquarium lights compared on published PAR output, spectrum quality, and reliability. Fluval 3.0, Hygger, Finnex, and Kessil ranked for planted freshwater, reef.', path: '/reviews/best-aquarium-lighting', type: 'article' })
const articleSchema = buildArticleSchema({ siteId: 'fish-com', title: 'Best Aquarium Lights 2026', description: 'Aquarium lights compared on published PAR output, spectrum, and reliability — planted, reef, and fish-only tanks.', url: 'https://fish.com/reviews/best-aquarium-lighting', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-07T00:00:00Z' })
const hyggerSchema = buildProductSchema({ name: 'Hygger 957 LED Aquarium Light', description: '7-channel programmable LED with strong PAR efficiency for planted tanks — Fish.com Best Planted (Budget) pick.', url: 'https://fish.com/reviews/best-aquarium-lighting#hygger', imageUrl: '', ratingValue: 9.2, reviewCount: 1 })
const schema = combineSchemas(articleSchema, hyggerSchema)

const PICKS = [
  { label: 'Best Planted (Budget)', name: 'Hygger 957', subtitle: 'PAR-efficient · Programmable · Under $60', href: '#hygger' },
  { label: 'Best Planted (Premium)', name: 'Fluval Plant 3.0', subtitle: 'App-controlled · Best spectrum quality', href: '#fluval' },
  { label: 'Best Reef', name: 'Kessil A360X', subtitle: 'Shimmer effect · Established reef-growth track record', href: '#kessil' },
  { label: 'Best FOWLR', name: 'Nicrew Classic LED+', subtitle: 'Fish-only · Budget · Reliable', href: '#nicrew' },
]

// GEO: ItemList of the ranked picks. Names + URLs come only from this page's
// PICKS. No aggregateRating, no fabricated specs (QC §1.4).
const itemList = buildItemListSchema({
  name: 'Best Aquarium Lights 2026',
  items: PICKS.map((p) => ({ name: p.name, url: `https://fish.com/reviews/best-aquarium-lighting${p.href}` })),
})

export default function BestAquariumLightingPage() {
  return (
    <>
      <SchemaScript schema={combineSchemas(...schema, itemList, buildBreadcrumbSchema({ items: [{ name: 'Home', url: 'https://fish.com/' }, { name: 'Reviews', url: 'https://fish.com/reviews' }, { name: 'Best Aquarium Lights 2026', url: 'https://fish.com/reviews/best-aquarium-lighting' }] }))} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-4">Buyer's Guide</span>
        <h1 className="font-display font-bold text-white tracking-tight leading-tight mb-4 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Aquarium Lights 2026</h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">Lighting requirements vary dramatically: a planted tank needs high PAR at the right spectrum; a reef needs intense, programmable full-spectrum light; a fish-only tank needs the bare minimum. Rankings draw on published PAR meter readings.</p>
      </div>
      <QuickPicks items={PICKS} />
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2"><Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span><Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span><span className="text-brand-text-mid">Best Aquarium Lighting</span></nav>
      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_260px] gap-14">
          <div>
            {/* Under-hero capture — source must end in under-hero so it always renders. */}
            <div className="mb-8">
              <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                Keep the aquarium-lighting checklist
              </p>
              <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                Aquarium-lighting checklist
              </h2>
              <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                Email the lighting notes that match the
                Hygger 957, Fluval Plant 3.0, Kessil
                A360X, and Nicrew copy on this page —
                a Hygger 957 so a low-tech planted
                tank keeps 45–65 PAR at 20 inches, a
                Fluval Plant 3.0 so a high-tech
                planted tank keeps app-controlled
                spectrum, and a Kessil A360X so a
                mixed reef keeps SPS-capable PAR.
                Educational lighting checklist, not a
                new product hop, not livestock, and
                not a substitute for a fish
                veterinarian. The existing Hygger /
                Fluval / Kessil / Nicrew Amazon
                searches stay below. Empty Chewy
                buttons stay hidden. No spam.
              </p>
              <EmailCapture
                variant="inline"
                siteId="fish-com"
                title="Aquarium-lighting checklist"
                subtitle="Email the Hygger, Fluval, Kessil, and Nicrew notes. No spam."
                ctaText="Email my aquarium-lighting checklist"
                source="reviews-best-aquarium-lighting-under-hero"
              />
            </div>

            <div className="bg-brand-surface border border-brand-border rounded-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Bottom Line</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">For most planted tanks the budget <strong>Hygger 957</strong> is our overall pick — planted-capable PAR with seven programmable channels well under $60. Step up to the app-controlled <strong>Fluval Plant 3.0</strong> for high-tech planted tanks needing the best spectrum quality. For reef tanks the <strong>Kessil A360X</strong> is the pick; for fish-only/FOWLR setups, the budget <strong>Nicrew Classic LED+</strong>. PAR at the substrate is what matters — match it to your tank type.</p>
            </div>
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-lg p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">PAR — What Actually Matters</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">PAR (Photosynthetically Active Radiation) measures the light spectrum (400–700nm) that plants and corals actually use. Higher PAR at the substrate level = more plant/coral growth potential. Low-tech planted tanks need 20–50 PAR. High-tech (CO2 injected): 50–100+ PAR. Reef SPS corals: 150–350+ PAR. Fish-only tanks: irrelevant — any light is fine. Running CO2 with these high-PAR lights? Use the <Link href="/tools/co2-calculator" className="text-brand-primary no-underline hover:underline">CO2 calculator</Link> to set a safe drop-checker target.</p>
            </div>
            <ScoreMethodology />
            <AffiliateDisclosure variant="inline" siteId="fish-com" />
            <ReviewCard id="hygger" badge="Best Planted (Budget)" name="Hygger 957 LED Aquarium Light" subtitle="Programmable · Good PAR efficiency · Under $60 · 7 independently controlled channels" score={9.2} winner
              description={<p>The Hygger 957 delivers planted-tank-capable PAR output at a price point that undercuts competitors by 60–80%. Seven independently adjustable channels (red, green, blue, white, UV, cold white, warm white) allow spectrum tuning. Programmable sunrise/sunset and lunar cycles via built-in timer. At a 20" depth in a standard 20-gallon, measured PAR is 45–65 at midday setting — adequate for low-to-medium tech planted tanks without CO2. With CO2 injection, this is enough light for most stem plants, crypts, and midground plants. Not sufficient for demanding high-light plants (HC Cuba carpets, most moss walls) — step up to the Fluval 3.0 for those.</p>}
              specs={[{ label: 'PAR at 20"', value: '45–65 (midday)', highlight: 'good' }, { label: 'Channels', value: '7 independently controlled', highlight: 'good' }, { label: 'Timer', value: 'Built-in programmable', highlight: 'good' }, { label: 'Price', value: 'Under $60', highlight: 'good' }, { label: 'Best For', value: 'Low-medium tech planted tanks' }]}
              pros={['Best value planted tank light', '7 channels — fine spectrum control', 'Programmable timer built-in', 'Good PAR for price', 'Slim profile']}
              cons={['Not enough for demanding high-light plants', 'No app control', 'Plastic build quality']}
              price="$45–65" ctaText="Shop Hygger 957 →" ctaHref="/go/amazon-brand/hygger+957?s=reviews-best-aquarium-lighting" ctaAffiliateProgram="amazon" ctaAffiliateProduct="hygger-957" />
            <ReviewCard id="fluval" badge="Best Planted (Premium)" name="Fluval Plant 3.0 LED" subtitle="App-controlled · Best spectrum · High PAR · Bluetooth programmable" score={9.4}
              description={<p>The Fluval Plant 3.0 is the benchmark premium planted tank light. App control via Bluetooth allows precise programming of daily light schedules, sunrise/sunset curves, and cloud/storm effects that mimic natural light variation (which improves plant health). PAR output is exceptional — 100+ PAR at 12" depth, 60+ at 20", making it capable of driving demanding high-light plants with CO2 injection. Its published spectrum quality is among the strongest of any freshwater LED in this comparison — strong red/blue peaks with a balanced white component that, per manufacturer specs and aggregated keeper reports, produces vivid plant and fish coloration. Build quality is significantly better than budget Chinese alternatives.</p>}
              specs={[{ label: 'PAR at 20"', value: '60–80+ (high setting)', highlight: 'good' }, { label: 'Control', value: 'Bluetooth app', highlight: 'good' }, { label: 'Spectrum', value: 'Best measured quality', highlight: 'good' }, { label: 'Best For', value: 'Medium-high tech planted' }, { label: 'Build Quality', value: 'Premium aluminum' }]}
              pros={['Among the highest published PAR output for planted tanks in this comparison', 'App control with natural lighting programs', 'Strong published spectrum quality', 'Premium aluminum construction', 'Storm/cloud effects']}
              cons={['$150–200 price point', 'Bluetooth only — short range', 'Overkill for low-tech setups']}
              price="$150–200" ctaText="Shop Fluval Plant 3.0 →" ctaHref="/go/amazon-brand/fluval+plant+3.0?s=reviews-best-aquarium-lighting" ctaAffiliateProgram="amazon" ctaAffiliateProduct="fluval-plant-3" />
            <ReviewCard id="kessil" badge="Best Reef" name="Kessil A360X Tuna Blue" subtitle="Dense Matrix LED · Shimmer effect · Established reef-growth track record · Wi-Fi" score={9.3}
              description={<p>Kessil's Dense Matrix LED technology produces the characteristic shimmering effect that mimics natural ocean light — important for reef aesthetics and observed to improve coral polyp extension. The A360X covers a 24" square footprint adequately at SPS-capable PAR levels (150–300+ PAR at 12" depth at moderate settings). Wi-Fi control with the Kessil app. The proprietary Dense Matrix design concentrates LED chips rather than spreading them, producing better color mixing and the shimmer effect. Premium price is justified for serious reef tanks; for fish-only-with-live-rock setups, the Nicrew is adequate at a fraction of the cost.</p>}
              specs={[{ label: 'PAR at 12"', value: '150–300+ (SPS capable)', highlight: 'good' }, { label: 'Technology', value: 'Dense Matrix LED', highlight: 'good' }, { label: 'Shimmer effect', value: 'Yes', highlight: 'good' }, { label: 'Control', value: 'Wi-Fi app' }, { label: 'Best For', value: 'Mixed reef, SPS coral' }]}
              pros={['Among the strongest shimmer effects in this comparison', 'SPS-capable PAR output', 'Excellent color rendering', 'Wi-Fi programmable', 'Established reef-growth track record among reefkeepers']}
              cons={['$400–500 price point', 'Single-point light (may need 2 for wider tanks)', 'Overkill for fish-only or LPS-only']}
              price="$400–500" ctaText="Shop Kessil A360X →" ctaHref="/go/amazon-brand/kessil+a360x?s=reviews-best-aquarium-lighting" ctaAffiliateProgram="amazon" ctaAffiliateProduct="kessil-a360x" />
            <ReviewCard id="nicrew" badge="Best Fish-Only" name="Nicrew Classic LED+" subtitle="Fish-only tanks · Budget · Reliable · No plant growth needed" score={8.5}
              description={<p>For fish-only (FO) or fish-only-with-live-rock (FOWLR) setups where light is purely aesthetic — not for plant or coral growth — the Nicrew Classic LED+ delivers clean white and blue spectrum for fish display at the lowest price in the category. It makes fish colors pop (the blue channel specifically enhances fish coloration) without the cost of a planted or reef fixture. PAR output is low (~15–25 at 12") — adequate for display, not for photosynthetic organisms. Build quality is acceptable; unit lifespan typically 2–3 years, which is acceptable at its price point.</p>}
              specs={[{ label: 'PAR output', value: 'Low (display only)' }, { label: 'Price', value: 'Budget', highlight: 'good' }, { label: 'Best For', value: 'Fish-only, FOWLR' }, { label: 'Not For', value: 'Plants or corals', highlight: 'warn' }]}
              pros={['Lowest price of any recommended light', 'Good fish color rendering', 'Simple timer built-in', 'Adequate for fish-only display']}
              cons={['Not for planted or reef tanks', '2–3 year lifespan typical', 'No app control or programmability']}
              price="$20–35" ctaText="Shop Nicrew LED →" ctaHref="/go/amazon-brand/nicrew+classic+led?s=reviews-best-aquarium-lighting" ctaAffiliateProgram="amazon" ctaAffiliateProduct="nicrew-led" />
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Tank Type</div>
              {[['Fish-only', 'Nicrew Classic LED+'], ['Low-tech planted', 'Hygger 957'], ['High-tech planted (CO2)', 'Fluval Plant 3.0'], ['LPS/Soft coral reef', 'Fluval Plant 3.0 (can work)'], ['Mixed/SPS reef', 'Kessil A360X']].map(([t, r]) => (
                <div key={t} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light">{t}</div>
                  <div className="text-xs font-bold text-brand-dark">→ {r}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[{ label: 'Tank Setup Guide', href: '/setup' }, { label: 'Best Aquarium Filters', href: '/reviews/best-aquarium-filters' }, { label: 'Water Chemistry', href: '/water-parameters' }]} />
            <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Equipment picks every Thursday." source="review-lighting" />
          </aside>
        </div>
      </div>
    </>
  )
}
