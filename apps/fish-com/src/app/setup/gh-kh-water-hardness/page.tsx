import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'

const SOURCES = [
  { label: "Water Quality in Aquaculture — UF/IFAS Extension FA-120", url: "https://edis.ifas.ufl.edu/publication/FA120", publisher: "UF/IFAS Extension" },
  { label: "Boyd, C.E. & Tucker, C.S. Pond Aquaculture Water Quality Management. Kluwer Academic, 1998.", publisher: "Kluwer Academic" },
  { label: "Harker, R. Water Chemistry for the Freshwater Aquarium. Practical Fishkeeping, 2002.", publisher: "Practical Fishkeeping" },
  { label: "Alkalinity and Hardness in Fish Culture Ponds — Southern Regional Aquaculture Center, SRAC-462", url: "https://www.srac.tamu.edu/index.cfm/event/getFactSheet/whichfactsheet/137/", publisher: "SRAC" },
]
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'GH and KH Explained — Aquarium Water Hardness Guide | Fish.com', description: "What GH and KH mean, why they differ, and how they affect pH stability and fish health. How to raise, lower, and match hardness to your species.", path: '/setup/gh-kh-water-hardness', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'GH and KH Water Hardness Guide', description: 'General hardness, carbonate hardness, pH buffering, and matching hardness to fish.', url: 'https://fish.com/setup/gh-kh-water-hardness', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })
export default function GhKhPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'GH and KH — Water Hardness Explained', subtitle: "Water hardness is one of the most misunderstood parameters in fishkeeping, partly because two different measurements — GH and KH — both wear the word hardness. They are not the same thing, they are not interchangeable, and confusing them is behind a great many mysterious pH crashes and stalled fish. This guide explains what each measures, why both matter, and how to adjust them safely.", category: 'Water Chemistry', authorName: 'Fish.com Editorial', authorAvatar: '🧪', publishedAt: 'June 2026', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Tank Setup', href: '/setup' }, { name: 'GH and KH', href: '/setup/gh-kh-water-hardness' }]}
      schema={schema}
      relatedLinks={[{ title: "Tank Setup Hub", href: "/setup", category: "Tank Setup" }, { title: "Water Chemistry Guide", href: "/setup/water-chemistry-guide", category: "Tank Setup" }, { title: "Best Water Test Kits", href: "/reviews/best-water-test-kits", category: "Reviews" }, { title: "Aquarium Cycling Guide", href: "/setup/aquarium-cycling-guide", category: "Tank Setup" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Reference</div>
          {[['GH', 'General hardness — Ca and Mg'], ['KH', 'Carbonate hardness — buffering'], ['Soft water', '0–6 dGH'], ['Hard water', '12+ dGH'], ['1 dKH', '17.9 ppm CaCO3'], ['Low KH risk', 'pH crashes — unstable']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Water Chemistry Guide', href: '/setup/water-chemistry-guide' }, { label: 'Best Water Test Kits', href: '/reviews/best-water-test-kits' }, { label: 'Aquarium Cycling Guide', href: '/setup/aquarium-cycling-guide' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="setup-gh-kh" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <h2>Two Different Measurements</h2>
        <DropCap>The single most useful thing to learn about hardness is that GH and KH measure two unrelated things. General hardness (GH) is the concentration of dissolved calcium and magnesium ions — the minerals fish need for osmoregulation, bone and scale formation, and the minerals that define a water as "soft" or "hard" in the everyday sense. Carbonate hardness (KH), sometimes called alkalinity or buffering capacity, is the concentration of carbonate and bicarbonate ions, which has nothing to do with calcium and everything to do with stabilizing pH. A tank can be high in one and low in the other. Treating them as the same parameter — or assuming a hardness test strip's single number tells the whole story — is the root of a surprising number of fishkeeping problems.</DropCap>

        <h2>Why KH Controls pH Stability</h2>
        <p>KH is arguably the more critical of the two for day-to-day stability because it buffers the tank against pH swings. The carbonates that KH measures neutralize the acids that continuously accumulate in an aquarium from fish waste, nitrification, and CO2. When KH is adequate, those acids are absorbed and pH holds steady. When KH is depleted — which happens gradually as the buffer is consumed and between water changes — there is nothing left to absorb the acid, and pH can crash suddenly and severely, stressing or killing fish overnight. A low or zero KH reading is the classic cause of the dreaded "old tank syndrome" pH crash. Maintaining a measurable KH is therefore central to a stable aquarium.</p>

        <CalloutBox variant="warning" title="Low KH means an unstable pH">
          KH is the buffer that keeps pH steady. As it is consumed over time, a tank with little or no KH can suffer a sudden, dangerous pH crash. Test KH periodically and refresh it through water changes or buffering.
        </CalloutBox>

        <h2>Matching Hardness to Your Fish</h2>
        <p>Different fish evolved in different waters, and matching hardness to species matters as much as temperature. Soft, acidic water (low GH and KH) suits Amazonian and Southeast Asian blackwater fish such as cardinal tetras, discus, and many wild bettas. Hard, alkaline water (high GH and KH) suits livebearers like guppies and mollies, African Rift Lake cichlids, and most snails and shrimp that need calcium for their shells. Most hardy community fish tolerate a moderate middle range. The most reliable approach is to learn what comes out of your own tap, then choose fish that thrive in it, rather than constantly fighting your source water with chemicals.</p>

        <h2>Raising and Lowering Hardness</h2>
        <p>To <strong>raise</strong> GH and KH, the simplest tools are crushed coral or aragonite in the filter (which dissolves slowly to add both), commercial remineralizing products, or for GH specifically, products containing calcium and magnesium salts. To <strong>lower</strong> hardness, the cleanest method is to dilute hard tap water with reverse-osmosis (RO) water, then remineralize to the exact target. Peat, driftwood, and Indian almond leaves lower KH and pH gradually through tannic and humic acids, useful for soft-water biotopes. Always change hardness slowly — large, rapid swings are more stressful to fish than the original parameter, so adjust over days, not minutes. For the wider picture of pH, ammonia, and nitrate, see the <a href="/setup/water-chemistry-guide">water chemistry guide</a>.</p>
        <ArticleSourcesList sources={SOURCES} />
      </div>
    </ArticleLayout>
  )
}
