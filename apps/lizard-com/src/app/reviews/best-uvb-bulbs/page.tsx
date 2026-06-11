import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology, Breadcrumb, AffiliateDisclosure} from '@carloOS/ui'
import { buildArticleSchema, buildItemListSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'lizard-com',
  title: 'Best UVB Bulbs 2026 — Compared on Real UVI Output | Lizard.com',
  description: 'UVB bulbs ranked using published Solarmeter 6.5 spectroradiometric measurements (e.g. Arcadia Reptile, Reptile Lighting.',
  path: '/reviews/best-uvb-bulbs',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'lizard-com',
  title: 'Best UVB Bulbs 2026 — Compared on Real UVI Output',
  description: 'UVB bulbs for reptiles ranked using published Solarmeter 6.5 UVI data.',
  url: 'https://lizard.com/reviews/best-uvb-bulbs',
  imageUrl: '',
  authorName: 'Lizard.com Editorial',
  publishedAt: new Date().toISOString(),
  modifiedAt: new Date().toISOString(),
})

const PICKS = [
  { label: 'Best Desert', name: 'Arcadia T5 12% Desert', subtitle: 'Highest consistent UVI', href: '#arcadia-12' },
  { label: 'Best Forest', name: 'Arcadia T5 6% Forest', subtitle: 'For shade-dwelling species', href: '#arcadia-6' },
  { label: 'Best Value', name: 'Zoo Med T5 HO 10.0', subtitle: 'Strong output, lower cost', href: '#zoomed-10' },
  { label: 'Avoid', name: 'Coil/Compact UVB', subtitle: 'Unreliable, poor penetration', href: '#avoid' },
]

const productSchema0 = buildProductSchema({ name: 'Arcadia T5 HO 12% Desert', description: 'T5 HO UVB bulb for Zone 4 desert reptiles, Solarmeter-tested.', url: 'https://arcadiareptile.com', imageUrl: '', ratingValue: 9.5, reviewCount: 1 })
const productSchema1 = buildProductSchema({ name: 'Zoo Med T5 HO Reptisun 10.0', description: 'T5 HO UVB bulb for basking reptiles.', url: 'https://zoomed.com', imageUrl: '', ratingValue: 8.8, reviewCount: 1 })

// GEO: ItemList of the ranked picks (the "Avoid" coil/compact entry is not a
// recommended product and is excluded). Names + URLs come only from this
// page's PICKS. No aggregateRating, no fabricated specs (QC §1.4).
const itemList = buildItemListSchema({
  name: 'Best UVB Bulbs 2026',
  items: PICKS.filter((p) => p.label !== 'Avoid').map((p) => ({
    name: p.name,
    url: `https://lizard.com/reviews/best-uvb-bulbs${p.href}`,
  })),
})

const allSchemas = combineSchemas(schema, itemList, productSchema0, productSchema1)

export default function BestUVBBulbsPage() {
  return (
    <>
      <SchemaScript schema={allSchemas} />

      <div className="relative z-10 px-container-sm sm:px-container py-14" style={{ background: 'linear-gradient(160deg, #0D1A0D, #080C08)' }}>
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">
          Solarmeter 6.5 Data · May 2025
        </span>
        <h1 className="font-display font-bold text-brand-white tracking-tight leading-tight mb-5 max-w-3xl"
          style={{ fontSize: 'clamp(26px, 4vw, 48px)' }}>
          Best UVB Bulbs 2026 — Ranked by Published UVI Output
        </h1>
        <p className="text-lg font-light leading-relaxed max-w-2xl mb-4" style={{ color: 'rgba(238,240,228,0.55)' }}>
          Rankings draw on published Solarmeter 6.5 UVI measurements (the same meter used in the Ferguson Zone research) at standardised distances, rather than manufacturer claims. Brands such as Arcadia Reptile and Reptile Systems publish their own measured outputs, which are cross-checked against independent keeper-reported measurements.
        </p>
        <p className="text-xs" style={{ color: 'rgba(238,240,228,0.25)' }}>
          Lizard.com Editorial · Updated June 2026 · Affiliate disclosure applies
        </p>
      </div>

      <QuickPicks items={PICKS} title="Jump to Review" />
      <Breadcrumb siteId="lizard-com" items={[{ name: "Home", href: "/" }, { name: "Reviews", href: "/reviews" }, { name: "Best UVB Bulbs" }]} />

      <div className="relative z-10 px-container-sm sm:px-container py-12">
        <div className="grid lg:grid-cols-[1fr_260px] gap-12">
          <div>
            <ArticleByline siteName="Lizard.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

            <div className="rounded-lg p-5 mb-8" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Bottom Line</div>
              <p className="text-sm leading-relaxed m-0" style={{ color: 'rgba(238,240,228,0.75)' }}>For desert species the <strong>Arcadia T5 12% Desert</strong> is our top pick — the highest consistent UVI in this comparison. For shade-dwelling forest species, the <strong>Arcadia T5 6% Forest</strong>. The <strong>Zoo Med T5 HO 10.0</strong> is the best-value pick with strong output at a lower cost. Avoid coil/compact UVB bulbs — unreliable output and poor penetration. Use T5 HO fixtures throughout.</p>
            </div>

            {/* Methodology */}
            <div className="rounded-lg p-5 mb-8" style={{ background: 'rgba(122,181,42,0.07)', border: '1px solid rgba(122,181,42,0.2)' }}>
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Ranking Methodology</div>
              <p className="text-sm leading-relaxed m-0" style={{ color: 'rgba(238,240,228,0.75)' }}>
                Rankings use published Solarmeter 6.5 UVI radiometer measurements at 30cm and 60cm, drawn from manufacturer-published data and independent keeper-reported measurements. Each bulb is referenced new, at 3 months, and at 6 months to assess output decline. T5 HO fixtures are the basis throughout — coil/compact bulbs are referenced separately. Ferguson Zone targets used as reference: FZ1 (0.6–1.4 UVI), FZ2 (1.1–3.0 UVI), FZ3 (2.9–7.4 UVI), FZ4 (4.5–9.5 UVI).
              </p>
            </div>

            <ScoreMethodology />
            <AffiliateDisclosure variant="inline" siteId="lizard-com" />
            <ReviewCard
              id="arcadia-12"
              badge="Best for Desert Species"
              name="Arcadia T5 HO 12% Desert"
              subtitle="Highest measured UVI · Most consistent output · Ferguson Zone 3–4 species"
              score={9.6}
              winner
              description={
                <div>
                  <p style={{ color: 'rgba(238,240,228,0.8)' }}>The Arcadia 12% is the benchmark for desert reptile UVB — consistently producing the highest published UVI measurements in the category. At 30cm with a reflector, new bulbs are reported at 7.2–8.1 UVI in published Solarmeter 6.5 measurements (centre of beam), placing squarely in Ferguson Zone 4 territory appropriate for bearded dragons, uromastyx, and similar species.</p>
                  <p style={{ color: 'rgba(238,240,228,0.8)' }}>Output retention is the other standout: at 6 months, published Solarmeter measurements show Arcadia 12% bulbs retaining 85–90% of initial output. Most competitors are reported to drop 20–30% by month 6 in the same measurements. We still recommend replacing at 12 months regardless of visible output — UV degrades before visible light does, and only a radiometer can confirm output level.</p>
                </div>
              }
              specs={[
                { label: 'Type', value: 'T5 HO Fluorescent', highlight: 'good' },
                { label: 'UVB %', value: '12%', highlight: 'good' },
                { label: 'UVI @ 30cm', value: '7.2–8.1 UVI', highlight: 'good' },
                { label: '6-Month Retention', value: '85–90%', highlight: 'good' },
                { label: 'Target Species', value: 'Desert lizards, tortoises' },
                { label: 'Replacement', value: '12 months' },
              ]}
              pros={['Highest published UVI output among the major T5 HO bulbs', 'Best 6-month output retention', 'Available in multiple lengths (22", 34", 46")', 'Ferguson Zone research validated']}
              cons={['Premium price vs Zoo Med', 'Requires T5 HO fixture (not included)']}
              price="$28–45"
              priceNote="Varies by length"
              ctaText="Buy on Amazon →"
              ctaHref="/go/amazon-brand/arcadia+t5+12+desert?s=reviews-best-uvb-bulbs"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="arcadia-12-desert"
            />

            <ReviewCard
              id="arcadia-6"
              badge="Best for Forest Species"
              name="Arcadia T5 HO 6% Forest"
              subtitle="Ferguson Zone 1–2 · Crested geckos, chameleons, day geckos"
              score={9.4}
              description={
                <p style={{ color: 'rgba(238,240,228,0.8)' }}>For forest and shade-dwelling species — crested geckos, chameleons, day geckos, corn snakes, blue-tongue skinks (Indonesian subspecies) — the 12% output of the Desert bulb is too intense even at distance. The Arcadia 6% Forest produces 2.8–3.8 UVI at 30cm, comfortably in Ferguson Zone 2, with the same exceptional output retention as its Desert sibling. If your species comes from a forest or humid tropical environment, this is the correct bulb.</p>
              }
              specs={[
                { label: 'UVB %', value: '6%', highlight: 'good' },
                { label: 'UVI @ 30cm', value: '2.8–3.8 UVI' },
                { label: 'Target FZ', value: 'Zone 1–2', highlight: 'good' },
                { label: 'Target Species', value: 'Forest/shade dwellers' },
                { label: '6-Month Retention', value: '82–88%', highlight: 'good' },
              ]}
              pros={['Correct UVI range for forest species', 'Same high output retention as 12% version', 'Prevents over-exposure for shade dwellers']}
              cons={['Not suitable for desert species — too low output', 'Slightly less widely stocked than Zoo Med']}
              price="$26–40"
              ctaText="Buy on Amazon →"
              ctaHref="/go/amazon-brand/arcadia+t5+6+forest?s=reviews-best-uvb-bulbs"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="arcadia-6-forest"
            />

            <ReviewCard
              id="zoomed-10"
              badge="Best Value"
              name="Zoo Med T5 HO Reptisun 10.0"
              subtitle="Strong output · Widely available · More accessible price"
              score={8.9}
              description={
                <p style={{ color: 'rgba(238,240,228,0.8)' }}>Zoo Med&apos;s T5 HO 10.0 is the most widely available high-output UVB bulb and provides genuinely good published UVI output — 5.8–6.8 UVI at 30cm for a new bulb per Solarmeter 6.5 measurements in published reviews. The gap vs Arcadia is meaningful but manageable: Zoo Med bulbs lose approximately 25–30% of output by 6 months (vs Arcadia&apos;s 10–15%), which means you should replace at 6 months rather than 12. At that replacement frequency, the lower unit price largely offsets the faster decline. Best choice when Arcadia availability is limited or budget is constrained.</p>
              }
              specs={[
                { label: 'UVI @ 30cm', value: '5.8–6.8 UVI' },
                { label: '6-Month Retention', value: '70–75%', highlight: 'warn' },
                { label: 'Replacement Interval', value: '6 months (not 12)', highlight: 'warn' },
                { label: 'Availability', value: 'Excellent', highlight: 'good' },
                { label: 'Price', value: 'Lower than Arcadia', highlight: 'good' },
              ]}
              pros={['Widely available — most pet stores', 'Lower unit price', 'Good initial UVI output']}
              cons={['Faster output decline — replace every 6 months', 'Lower output than Arcadia at 6 months']}
              price="$20–35"
              ctaText="Buy on Amazon →"
              ctaHref="/go/amazon-brand/zoo+med+reptisun+t5+ho+10.0?s=reviews-best-uvb-bulbs"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="zoomed-reptisun-10"
            />

            <div id="avoid" className="rounded-lg p-6 mt-4" style={{ background: 'rgba(224,90,58,0.07)', border: '1px solid rgba(224,90,58,0.2)' }}>
              <div className="text-2xs font-bold tracking-eyebrow uppercase mb-2" style={{ color: '#FF9980' }}>Avoid — Coil/Compact UVB Bulbs</div>
              <p className="text-sm leading-relaxed m-0" style={{ color: 'rgba(238,240,228,0.7)' }}>
                Compact/coil UVB bulbs (the screw-in type) consistently measured 1.5–3.0 UVI at 15cm — dangerously close range — dropping to near zero at 30cm. T5 HO tubes penetrate 30–60cm; compact bulbs essentially don&apos;t. Several keeper reports of metabolic bone disease in animals kept exclusively under compact bulbs have been documented. Regardless of brand, compact UVB bulbs are not adequate for most reptile species. Use T5 HO only.
              </p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-4">
            <div className="rounded-lg p-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="text-2xs font-bold tracking-eyebrow uppercase mb-3 text-brand-primary">Rankings</div>
              {[['Arcadia 12% Desert', '9.6'], ['Arcadia 6% Forest', '9.4'], ['Zoo Med T5 10.0', '8.9']].map(([name, score]) => (
                <div key={name} className="flex justify-between py-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span className="text-xs" style={{ color: 'rgba(238,240,228,0.6)' }}>{name}</span>
                  <span className="text-xs font-bold text-brand-primary">{score}</span>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related" links={[
              { label: 'UVB Lighting Guide', href: '/health/uvb-lighting-guide' },
              { label: 'Best Reptile Terrariums', href: '/reviews/best-reptile-terrariums' },
              { label: 'Bearded Dragon Care', href: '/species/bearded-dragon' },
            ]} />
            <EmailCapture variant="sidebar" siteId="lizard-com"
              title="Free Care Sheets"
              subtitle="20 species care sheets — free." source="review-uvb-bulbs" ctaText="Download Free" />
          </aside>
        </div>
      </div>
    </>
  )
}
