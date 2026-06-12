import type { Metadata } from 'next'
import { StockImage, buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard , AffiliateDisclosure, ArticleSourcesList } from '@carloOS/ui'
import { FAQAccordion, SchemaScript, buildArticleSchema, buildFAQSchema, combineSchemas } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'

const SOURCES = [
  { label: "Symphysodon spp. — Seriously Fish species profile", url: "https://www.seriouslyfish.com/species/symphysodon-aequifasciatus/", publisher: "Seriously Fish" },
  { label: "Symphysodon aequifasciatus — FishBase species record", url: "https://www.fishbase.se/summary/Symphysodon-aequifasciatus.html", publisher: "FishBase" },
  { label: "Bleher, H. Bleher's Discus. Aquapress, 2006.", publisher: "Aquapress" },
  { label: "Kullander, S.O. & Ferreira, E.J.G. A Review of the South American Cichlid Genus Cichla. Ichthyological Exploration of Freshwaters, 2006.", publisher: "Ichthyological Exploration of Freshwaters" },
]
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Discus Care Guide — Soft Warm Water, Daily Changes | Fish.com', description: 'Discus are the most demanding freshwater fish. 82-86°F, pH 5.5-6.8, daily or large water changes, and high protein diet.', path: '/species/discus', type: 'article' })
const articleSchema = buildArticleSchema({ siteId: 'fish-com', title: 'Discus Care Guide', description: 'Water requirements, daily water changes, and disease prevention for Symphysodon discus.', url: 'https://fish.com/species/discus', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' ,
  citation: SOURCES,
})

const FAQS = [
  {
    question: 'Why are discus considered hard to keep?',
    answer:
      'They show stress responses at nitrate levels most community fish handle easily, are susceptible to pathogens hardy fish resist, and need soft, warm, acidic water that requires active management in most US households with hard tap. The daily or every-other-day large water changes are a real time commitment — a discus keeper does them consistently, on schedule, without exception.',
    answerText:
      'They are unusually sensitive to nitrate and pathogens and need soft, warm, acidic water plus daily or every-other-day large water changes — a significant time commitment.',
  },
  {
    question: 'What temperature do discus need?',
    answer:
      '82–86°F, with the warmer end preferred. This limits tankmates to species that share warm-water preferences: cardinal tetras, rummy nose tetras, Corydoras sterbai, and some other Amazonian species. Standard community fish such as neons, platies, and most cories are incompatible with discus temperatures.',
    answerText:
      '82-86F, warmer end preferred. Compatible tankmates are limited to warm-water species like cardinal tetras, rummy nose tetras, and Corydoras sterbai.',
  },
  {
    question: 'How often do discus need water changes?',
    answer:
      'The standard discus keeper protocol is 30–50% water changes daily or every other day, which maintains pristine water and simulates the natural dilution of the soft, rain-fed rivers discus inhabit. The replacement water must be pre-heated to tank temperature — cold additions cause temperature shock that stresses discus and triggers disease.',
    answerText:
      '30-50% daily or every other day, with replacement water pre-heated to tank temperature to avoid temperature shock.',
  },
  {
    question: 'How many discus should be kept together?',
    answer:
      'A minimum of 6, which distributes cichlid hierarchy aggression so no single fish bears the full burden; 8–10 in a 75+ gallon tank allows stable hierarchies. Fewer than 6 often results in 1–2 dominant fish relentlessly harassing submissive fish until they stop eating. A 55-gallon tank is the working minimum for a group of 6.',
    answerText:
      'Minimum 6 (55 gallons); 8-10 in a 75+ gallon tank is better. Smaller groups concentrate aggression on individual fish.',
  },
  {
    question: 'Why is my discus turning dark?',
    answer:
      '"Darkening" is the most common disease presentation in discus — a stress response that accompanies disease, poor water quality, or aggression. A dark discus is a discus under stress; investigate disease and water quality first, and check whether the fish is being singled out for persistent aggression by the group.',
    answerText:
      'Darkening is a stress response. Investigate disease and water quality first, then check for aggression from the group.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })),
})

const combinedSchema = combineSchemas(articleSchema, faqSchema)

export default function DiscusPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Discus Fish Care Guide', subtitle: 'Symphysodon — the "king of the aquarium." Discus are breathtakingly beautiful, highly intelligent, and the most demanding freshwater fish commonly kept. Their water requirements are strict, their sensitivity to pathogens is high, and their cost is significant. Experienced aquarists only.', category: 'Species Guide — Advanced', authorName: 'Fish.com Editorial', publishedAt: 'May 2025', readTime: '11 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Discus', href: '/species/discus' }]}
      relatedLinks={[{ title: "Species Hub", href: "/species", category: "Species" }, { title: "Best Aquarium Heaters", href: "/reviews/best-aquarium-heaters", category: "Reviews" }, { title: "Best Aquarium Filters", href: "/reviews/best-aquarium-filters", category: "Reviews" }, { title: "Water Chemistry Guide", href: "/setup/water-chemistry-guide", category: "Tank Setup" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Discus Requirements</div>
          {[['Temperature', '82–86°F — warm end critical'], ['pH', '5.5–6.8 — soft acidic'], ['GH', 'Under 8 — soft water'], ['Water changes', '30-50% daily or EOD'], ['Min tank', '55 gallons for 6 discus'], ['Group size', 'Minimum 6 — reduces aggression'], ['Diet', 'Beef heart, bloodworms, high protein'], ['Experience', 'Advanced — not a first cichlid']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Best Aquarium Heaters', href: '/reviews/best-aquarium-heaters' }, { label: 'Best Aquarium Filters', href: '/reviews/best-aquarium-filters' }, { label: 'German Blue Ram', href: '/species/blue-ram' }, { label: 'Cardinal Tetra', href: '/species/cardinal-tetra' }]} />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Advanced fishkeeping guides." source="species-discus" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />
        <StockImage manifestKey="fish-com:species-discus" fallbackKey="fish-com:category-species" aspect="16:9" variant="inline" caption="A discus in a home aquarium." priority />

        <h2>Why Discus Are Advanced</h2>
        <DropCap>Discus are sensitive to water quality in a way that most fish are not — they show stress responses at nitrate levels that most community fish handle easily, they are susceptible to pathogens that hardy fish resist, and they require water parameters (soft, warm, acidic) that require active management in most US households with hard tap water. The daily or every-other-day water changes required to maintain discus — large volume, temperature-matched — represent a significant time commitment. A discus keeper does water changes the way a planted tank keeper doses fertilizers: consistently, on schedule, without exception.</DropCap>
        <p>The cost: quality wild-caught discus run $60–150+ per fish. Tank-bred discus from quality breeders run $30–80+. A group of 6 discus in an appropriate tank represents $200–600+ in fish alone before any equipment is purchased. If they die from inadequate water quality, that loss is significant. Research thoroughly before purchasing.</p>

        <h2>Water — The Critical Foundation</h2>
        <p>Target: pH 5.5–6.8, GH under 8, temperature 82–86°F. Most US tap water is too hard and too alkaline. RO/DI water remineralized with Seachem Equilibrium (to achieve GH 4–6 with minimal KH, allowing peat or CO2 to set a stable low pH) is the most reliable approach. Indian almond leaves and peat filtration add tannins that lower pH naturally and provide beneficial compounds. A discus-specific water conditioner (Seachem Discus Trace, Aquavitro Synthesis) replenishes trace minerals removed by RO.</p>
        <p><strong>Water change protocol:</strong> The standard discus keeper approach is 30–50% water changes daily or every other day. This maintains pristine water quality and simulates the natural dilution of the soft, rain-fed rivers discus inhabit. The water added must be pre-heated to tank temperature — cold water additions cause temperature shock that immediately stresses discus and triggers disease. Pre-heated RO water stored in large containers (30–50 gallon trash cans with a heater) simplifies daily changes.</p>

        <h2>Temperature — Warmer Than Most</h2>
        <p>82–86°F is the correct range — the warmer end is preferred by most discus keepers and is appropriate for the wild fish's native habitat in the Amazon basin. At this temperature, the metabolism of beneficial bacteria is also higher, processing waste faster. The challenge: most community fish do not thrive at 84°F. Discus-compatible tankmates are limited to species that share warm water preferences: cardinal tetras, rummy nose tetras, Corydoras sterbai (the one cory species that tolerates warm water), and some other Amazonian species. Standard community fish (neons, platies, most cories) are incompatible with discus temperatures.</p>

        <h2>Diet — High Protein Required</h2>
        <p>Discus are omnivorous but protein-forward. The traditional discus staple: beef heart mix — ground beef heart (fat removed) combined with frozen seafood, spinach, and vitamins, formed into thin sheets and frozen. Commercial alternatives: Hikari Discus Bio-Gold, NLS Discus Formula, Sera Discus Granules. Frozen bloodworms are eagerly accepted and valuable for conditioning. Feed 3–4 times daily — discus need frequent feeding due to their high metabolism. Remove uneaten food within 10 minutes to maintain water quality.</p>

        <CalloutBox variant="tip" title="Pre-heat your change water">
          Cold water additions cause temperature shock that immediately stresses discus and triggers disease. Store the daily change volume in heated containers (30–50 gallon drums with a heater set to tank temperature) so every refill is already at 84°F when it arrives.
        </CalloutBox>

        <h2>Disease — The Primary Challenge</h2>
        <p>Discus are disproportionately susceptible to internal parasites (particularly Capillaria, Hexamita, and Spironucleus) and external parasites (flukes). New fish should be quarantined for 4–6 weeks and prophylactically treated for parasites before introduction to an established discus tank. The most common disease presentation in discus: "darkening" — the fish turns very dark in color, a stress response that accompanies disease, poor water quality, or aggression. A dark discus is a discus under stress, with disease and water quality being the two primary causes to investigate first.</p>
        <p><strong>Hexamita/Spironucleus (hole-in-the-head):</strong> Causes pitting lesions on the head and lateral line. Common in discus stressed by poor water quality. Treated with metronidazole (Seachem MetroPlex in food and water). Prevention: pristine water quality and stress reduction.</p>

        <h2>Group Dynamics</h2>
        <p>Discus are cichlids — they establish social hierarchies. A group of 6+ distributes aggression across the group so no single fish bears the full burden. Fewer than 6 often results in 1–2 dominant fish relentlessly harassing the submissive fish until they stop eating and die. 6 minimum; 8–10 in a 75+ gallon tank allows stable hierarchies to form. Remove any fish that is being singled out for persistent aggression — isolated from the group, dark in color, and refusing food.</p>

        <h2>Frequently Asked Questions</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({
            question: f.question,
            answer: f.answer,
            answerText: f.answerText,
          }))}
          includeSchema={false}
          allowMultiple
        />
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
          <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Discus — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for discus care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/discus%20tank%20setup?s=species-discus" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Discus Setup on Amazon →</a>
            <a href="/go/chewy-brand/discus%20tank%20setup?s=species-discus" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

        <ArticleSourcesList sources={SOURCES} />
      </div>
      </ArticleLayout>
    </>
  )
}
