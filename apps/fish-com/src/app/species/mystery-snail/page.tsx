import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard , AffiliateDisclosure} from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Mystery Snail Care Guide — Colors, Copper Toxicity | Fish.com', description: 'Mystery snails (Pomacea bridgesii) are peaceful, stunning, and available in gold, blue, ivory, and purple. They die instantly from copper', path: '/species/mystery-snail', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Mystery Snail Care Guide', description: 'Color varieties, copper toxicity, breeding, and care for Pomacea bridgesii mystery snails.', url: 'https://fish.com/species/mystery-snail', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function MysterySnailPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Mystery Snail Care Guide', subtitle: 'Pomacea bridgesii — the mystery snail, named for appearing to give birth to live young (actually they lay eggs above the waterline, and the hatchlings mysteriously appear in the tank). Available in stunning color varieties — gold, blue, ivory, purple, magenta — and completely peaceful with all community fish.', category: 'Species Guide — Invertebrate', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '7 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Mystery Snail', href: '/species/mystery-snail' }]}
      schema={schema}
      relatedLinks={[{ title: "Species Hub", href: "/species", category: "Species" }, { title: "Cherry Shrimp", href: "/species/cherry-shrimp", category: "Species Guide" }, { title: "Amano Shrimp", href: "/species/amano-shrimp", category: "Species Guide" }, { title: "Planted Tank Setup", href: "/setup/planted-tank-setup", category: "Tank Setup" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Scientific name', 'Pomacea bridgesii'], ['Shell size', '1.5–2 inches (adult)'], ['Temperature', '68–82°F'], ['pH', '7.0–8.0 — prefers harder water'], ['GH', 'Higher GH — stronger shells'], ['Copper', 'LETHAL — avoid all copper'], ['Lifespan', '1–3 years'], ['Breeding', 'Lays egg clutches above waterline']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Cherry Shrimp', href: '/species/cherry-shrimp' }, { label: 'Amano Shrimp', href: '/species/amano-shrimp' }, { label: 'Betta Tank Mates', href: '/species/betta-fish-tank-mates' }]} />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-mystery-snail" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Copper — The Single Most Important Care Fact</h2>
        <p>Mystery snails, like all freshwater snails, are killed by copper at concentrations that are safe for fish. This is the most critical care fact — more important than any other husbandry consideration. Sources of copper that kill snails: copper-based algae treatments (API AlgaeFix contains copper), copper-based disease treatments, tap water from old copper pipes, some plant fertilizers, and some fish foods. Before adding mystery snails to any established tank, verify that no copper-containing products have ever been used. Test with a copper test kit if uncertain. Even trace copper remaining from a previous treatment can kill snails.</p>

        <h2>Shell Health and Water Hardness</h2>
        <p>Mystery snails require calcium for shell growth and maintenance. In soft water (low GH), snail shells develop pitting, cracking, and erosion — a condition called "pitting" that exposes the mantle and leads to eventual death. GH of 8+ is recommended; GH of 12–15 is excellent for shell health. To raise GH without affecting pH significantly: Seachem Equilibrium. Crushed coral or cuttlebone placed in the tank provides a continuous calcium source — many keepers place a small piece of cuttlebone (sold in the bird section of pet stores) directly in the tank as a free-choice calcium supplement.</p>

        <h2>Color Varieties</h2>
        <p>The appeal of mystery snails is substantially their color diversity. Unlike nerite snails (which have more limited color variety), mystery snails are available in: gold (the most common), ivory (pure white body with white or light shell), blue (gray-blue body with iridescent blue-black shell), purple (lavender shell with darker body), magenta/pink, and various combinations. The color is genetic and maintained through selective breeding. Shell color is separate from body color — a gold body can have a dark shell, a blue body can have a lighter shell. Full color may take several months to develop as the snail grows into its adult shell.</p>

        <h2>Behavior and Feeding</h2>
        <p>Mystery snails are peaceful grazers that move slowly around the tank eating algae, biofilm, and decaying plant matter. They do not eat healthy plants — only dying or dead plant tissue. If a mystery snail is eating a live plant, the plant was already dying in that spot. They coexist with all peaceful community fish and all shrimp species. Fish that nip snail antenna (some bettas, pufferfish) should be avoided — antenna harassment stresses the snail and prevents normal feeding.</p>
        <p>Supplement their diet with: blanched vegetables (zucchini, spinach, cucumber — weighted to the bottom), commercial snail food (Hikari Crab Cuisine, Repashy Soilent Green), and algae wafers. Remove uneaten food within 24 hours to maintain water quality.</p>

        <h2>Breeding — The Egg Clutch</h2>
        <p>Mystery snails are the only commonly kept freshwater snail species that lays eggs above the waterline — a distinctive pink-to-cream colored clutch stuck to the glass above the water surface or on the tank lid. The eggs require air humidity to develop (they dry out and fail if fully submerged, and they drown if pushed into the water). Clutches hatch in 2–4 weeks depending on temperature — hatchlings drop into the water and begin grazing immediately. Unlike nerite snails, mystery snails breed readily in freshwater and populations can grow if both male and female are present — manage population by refrigerating unwanted egg clutches for several days before discarding.</p>
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
          <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Mystery Snail — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for mystery snail care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/mystery%20snail%20tank%20setup?s=species-mystery-snail" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Mystery Snail Setup on Amazon →</a>
            <a href="/go/chewy-brand/mystery%20snail%20tank%20setup?s=species-mystery-snail" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

      </div>
      </ArticleLayout>
  )
}
