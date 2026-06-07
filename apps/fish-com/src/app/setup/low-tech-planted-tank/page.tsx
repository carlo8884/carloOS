import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'

const SOURCES = [
  { label: "Walstad, D.L. Ecology of the Planted Aquarium, 3rd ed. Echinodorus Publishing, 2013.", publisher: "Echinodorus Publishing" },
  { label: "Kasselmann, C. Aquarium Plants. Krieger Publishing, 2003.", publisher: "Krieger Publishing" },
  { label: "Barr, T. & Roger, E. The Estimative Index of Dosing. Barr Report, 2004.", publisher: "Barr Report" },
  { label: "Aquatic Plants for the Aquarium — UF/IFAS Extension FA-16", url: "https://edis.ifas.ufl.edu/publication/FA016", publisher: "UF/IFAS Extension" },
]
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Low-Tech Planted Tank — No CO2, Low Light, Low Effort | Fish.com', description: "How to run a thriving low-tech planted tank without pressurized CO2. Easy plants, modest light, light fertilization, and a slow, stable, beautiful balance.", path: '/setup/low-tech-planted-tank', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Low-Tech Planted Tank Guide', description: 'Running a planted aquarium without CO2 injection: easy plants, light, and fertilization.', url: 'https://fish.com/setup/low-tech-planted-tank', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })
export default function LowTechPlantedTankPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Low-Tech Planted Tank Guide', subtitle: "A low-tech planted tank runs without pressurized CO2 injection, on modest lighting and minimal fertilization. It grows more slowly than a high-tech setup, which is precisely its advantage: slower growth means less trimming, fewer nutrient swings, and far less algae. For most aquarists, a well-chosen low-tech tank is the most beautiful, most sustainable, and least demanding planted aquarium they can keep.", category: 'Tank Setup', authorName: 'Fish.com Editorial', authorAvatar: '🌿', publishedAt: 'June 2026', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Tank Setup', href: '/setup' }, { name: 'Low-Tech Planted Tank', href: '/setup/low-tech-planted-tank' }]}
      schema={schema}
      relatedLinks={[{ title: "Tank Setup Hub", href: "/setup", category: "Tank Setup" }, { title: "Planted Tank Setup", href: "/setup/planted-tank-setup", category: "Tank Setup" }, { title: "Best Aquarium Lighting", href: "/reviews/best-aquarium-lighting", category: "Reviews" }, { title: "Best Planted-Tank Fertilizers", href: "/reviews/best-planted-tank-fertilizers", category: "Reviews" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Bulletproof Plants</div>
          {[['Anubias', 'Attaches to wood/rock · Very slow'], ['Java fern', 'Low light · Indestructible'], ['Cryptocoryne', 'Root feeder · Midground'], ['Vallisneria', 'Tall background · Spreads'], ['Java moss', 'Carpet/cover · Any light'], ['Amazon sword', 'Big background · Root tabs']].map(([p, d]) => (
            <div key={p} className="py-2 border-b border-brand-border last:border-0">
              <div className="text-xs font-bold text-brand-dark">{p}</div>
              <div className="text-2xs text-brand-text-light">{d}</div>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Planted Tank Setup', href: '/setup/planted-tank-setup' }, { label: 'Best Aquarium Lighting', href: '/reviews/best-aquarium-lighting' }, { label: 'Best Fertilizers', href: '/reviews/best-planted-tank-fertilizers' }, { label: 'Algae Control', href: '/setup/aquarium-algae-control' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="setup-low-tech-planted" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <h2>Why Slower Is Better</h2>
        <DropCap>High-tech planted tanks — pressurized CO2, intense light, heavy fertilization — produce spectacular, fast carpeting growth, but they also demand frequent trimming, precise dosing, and constant vigilance against the algae that any imbalance invites. A low-tech tank deliberately trades that pace for stability. Without injected CO2, plants grow at the speed permitted by the small amount of carbon dissolved naturally from fish respiration and the atmosphere. That slow pace keeps nutrient demand low, makes the whole system forgiving of irregular maintenance, and dramatically reduces algae pressure because there is no surplus light or CO2 to fuel a bloom. The result is a planted tank that looks after itself for weeks at a time.</DropCap>

        <h2>The Light Trap</h2>
        <p>The most common reason a low-tech tank fails is too much light. Without CO2 to support the photosynthesis that bright light drives, excess light simply feeds algae instead of plants. Keep lighting modest — a low-to-medium output fixture is ideal — and run a photoperiod of six to eight hours on a timer. If algae appears, reducing light intensity or duration is almost always the first and most effective response. In a low-tech tank, the goal is to give plants just enough light to grow steadily and no more, so that they, rather than algae, claim the available nutrients.</p>

        <CalloutBox variant="info" title="Match light to CO2">
          In a no-CO2 tank, more light does not mean more plant growth — it means more algae. Modest lighting on a 6 to 8 hour timer is the single most important low-tech setting.
        </CalloutBox>

        <h2>Choosing Forgiving Plants</h2>
        <p>Low-tech success depends on selecting plants that thrive in low CO2 and modest light. Anubias and Java fern are nearly indestructible epiphytes that attach to wood and rock and tolerate almost any conditions. Cryptocoryne species make excellent root-feeding midground plants once they settle. Vallisneria and Amazon swords provide background height, hornwort and water sprite grow fast enough to soak up excess nutrients, and Java moss and other mosses fill in cover and carpeting roles at any light level. Avoid demanding carpeting plants and red stem species that genuinely require CO2 — they will melt or stall in a low-tech tank and become an algae magnet.</p>

        <h2>Substrate and Fertilization</h2>
        <p>An active aquasoil works well but is not required for low-tech: many successful low-tech tanks use inert gravel or sand with root tabs placed near heavy root-feeders such as swords and crypts. Because growth is slow, fertilization is light. A modest dose of an all-in-one liquid fertilizer once or twice a week, or root tabs replenished every few months, covers the needs of most easy plants. Watch the plants for deficiency signs — yellowing or holed leaves — and dose to correct rather than dosing heavily by default, which only feeds algae in the absence of CO2.</p>

        <h2>Maintenance Rhythm</h2>
        <p>The low-tech tank is defined by its easy upkeep: a weekly or biweekly water change, occasional trimming of the faster growers, glass cleaning as needed, and light feeding of any fish. The slow growth means the scape holds its shape for long stretches without intervention. This forgiving rhythm is what makes the low-tech approach ideal for beginners and busy keepers alike, and it pairs naturally with the gentle conditions favored by nano fish and shrimp. For the broader setup mechanics shared with high-tech tanks, see the <a href="/setup/planted-tank-setup">planted tank setup guide</a>.</p>
        <ArticleSourcesList sources={SOURCES} />
      </div>
    </ArticleLayout>
  )
}
