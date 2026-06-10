import type { Metadata } from 'next'
import { StockImage, buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard , AffiliateDisclosure, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

const SOURCES = [
  { label: "Sewellia lineolata — Seriously Fish species profile", url: "https://www.seriouslyfish.com/species/sewellia-lineolata/", publisher: "Seriously Fish" },
  { label: "Gastromyzon spp. — FishBase genus page", url: "https://www.fishbase.se/identification/SpeciesList.php?genus=gastromyzon", publisher: "FishBase" },
  { label: "Kottelat, M. et al. Freshwater Fishes of Western Indonesia and Sulawesi. Periplus, 1993.", publisher: "Periplus" },
  { label: "Lujan, N.K. & Conway, K.W. Life in the Fast Lane: A Review of Rheophily in Freshwater Fishes. American Fisheries Society Symposium, 2015.", publisher: "American Fisheries Society" },
]

export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Hillstream Loach Care Guide — Fast Flow, High O2 | Fish.com', description: 'Hillstream loaches need very high water flow and oxygenation — they come from fast-moving streams.', path: '/species/hillstream-loach', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Hillstream Loach Care Guide', description: 'Fast-flowing water requirements, algae diet, and care for hillstream loaches (Sewellia, Beaufortia, Gastromyzon).', url: 'https://fish.com/species/hillstream-loach', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function HillstreamLoachPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Hillstream Loach Care Guide', subtitle: 'Hillstream loaches — genera including Sewellia, Beaufortia, Gastromyzon, and Pseudogastromyzon — are among the most visually striking small fish available for the hobby. Flattened bodies, intricate spotted patterns, and the unique ability to cling to glass and rocks in high-flow environments make them fascinating. They also have strict requirements that match their natural habitat: fast-moving, highly oxygenated, cool streams.', category: 'Species Guide — Intermediate', authorName: 'Fish.com Editorial', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Hillstream Loach', href: '/species/hillstream-loach' }]}
      schema={schema}
      relatedLinks={[{ title: "Species Hub", href: "/species", category: "Species" }, { title: "Otocinclus", href: "/species/otocinclus", category: "Species Guide" }, { title: "Kuhli Loach", href: "/species/kuhli-loach", category: "Species Guide" }, { title: "Water Chemistry Guide", href: "/setup/water-chemistry-guide", category: "Tank Setup" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Common genera', 'Sewellia, Beaufortia, Gastromyzon'], ['Adult size', '1.5–3 inches depending on species'], ['Temperature', '65–75°F — cool water essential'], ['Flow', 'Very high — powerhead or wavemaker'], ['O2', 'Maximum — surface agitation + airstone'], ['Diet', 'Biofilm, algae, aufwuchs — supplemented'], ['Difficulty', 'Intermediate — strict requirements']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Otocinclus Care', href: '/species/otocinclus' }, { label: 'Amano Shrimp', href: '/species/amano-shrimp' }, { label: 'Best Aquarium Filters', href: '/reviews/best-aquarium-filters' }]} />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-hillstream" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
        <StockImage manifestKey="fish-com:species-hillstream-loach" fallbackKey="fish-com:category-species" aspect="16:9" variant="inline" caption="A hillstream loach in a home aquarium." priority />
        <h2>Water Flow — The Non-Negotiable</h2>
        <p>Hillstream loaches come from fast-flowing streams and rivers in Southeast and East Asia where water rushes over rocky substrates. Their body shape is evolutionary adaptation to high-flow environments — the flattened profile, enlarged paired fins, and mouth structure all allow them to cling to smooth rocks in strong current while grazing biofilm. In a standard low-to-moderate flow community tank, hillstream loaches stress, refuse food, and die within weeks. The flow requirement is not an enrichment preference — it is a physiological necessity.</p>
        <p>Adequate flow for hillstream loaches: turnover rate of 10-15× tank volume per hour, distributed across multiple flow sources to create turbulent, randomized current rather than a single directional flow. A powerhead or circulation pump aimed across the tank length, combined with the return flow from the filter, creates more appropriate conditions than a single filter outlet. Adding a wavemaker provides the intermittent, surge-like flow that most closely mimics natural stream conditions. The fish should be visibly using the flow — clinging to the glass and rocks in the current zone.</p>

        <h2>Oxygenation — Equally Critical</h2>
        <p>Fast-flowing streams are heavily oxygenated — water in turbulent contact with the air continuously. Hillstream loaches require near-saturation dissolved oxygen levels. The high flow requirement addresses this partly — surface agitation from pumps and powerheads exchanges gas at the water surface. Add a large airstone or surface skimmer to maximize gas exchange. Maintain room temperature below 75°F — warm water holds less oxygen, and hillstream loaches in warm, low-flow tanks develop fatal hypoxia. These fish should be among the first to show distress if dissolved oxygen drops — they will be gasping at the surface or severely lethargic.</p>

        <h2>Diet — The Biofilm Grazer</h2>
        <p>Hillstream loaches are biofilm and algae grazers — they methodically scrape the microscopic layer of bacteria, algae, and detritus from rocks, glass, and substrate. Like otocinclus, they require a mature, algae-established tank with significant biofilm growth. A new or recently cleaned tank does not provide sufficient food. Supplement their grazing with: algae wafers, blanched zucchini and cucumber (press against the glass or weigh down), spirulina-based sinking foods, and Repashy gel food pressed onto rocks and glass. The key is surface-attached food — hillstream loaches cannot efficiently eat from the substrate floor.</p>

        <h2>Tank Setup</h2>
        <p>Smooth river rocks, slate, and glass surfaces provide the best grazing and clinging surfaces. A substrate of fine sand or small smooth gravel with rockwork arranged to create flow channels and hiding spots. Dense planting is not essential (their natural streams often have limited aquatic plants) but Java fern and Anubias attached to rocks complement their natural environment and provide additional grazing surface for biofilm colonization. Water chemistry: soft to moderately hard (GH 4-12), pH 6.5-7.5, nitrate under 20 ppm. Pristine water quality is important — these fish are sensitive to nitrogen compounds.</p>

        <h2>Compatible Tankmates</h2>
        <p>Tankmates must be able to tolerate the high flow and cooler temperatures that hillstream loaches require. This limits options significantly: white cloud mountain minnows (ideal — same temperature range, active schoolers), celestial pearl danios (tolerate cooler water, beautiful contrast), small rasboras that prefer moderate-cool temperatures, and other hillstream loaches (they coexist peacefully with conspecifics in most cases). Avoid tropical community fish that require 78-82°F — the temperature compromise will harm one group or the other. Avoid fin-nippers and aggressive species that target the hillstream's flowing fins.</p>
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
          <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Hillstream Loach — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for hillstream loach care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/hillstream%20loach%20tank%20setup?s=species-hillstream-loach" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Hillstream Loach Setup on Amazon →</a>
            <a href="/go/chewy-brand/hillstream%20loach%20tank%20setup?s=species-hillstream-loach" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

        <ArticleSourcesList sources={SOURCES} />
      </div>
      </ArticleLayout>
  )
}
