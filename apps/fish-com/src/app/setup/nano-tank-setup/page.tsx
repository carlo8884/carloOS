import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Nano Aquarium Setup Guide — Small Tanks Done Right | Fish.com', description: "How to set up a nano aquarium under 10 gallons. Stocking, stability, filtration, and the small-tank fish that actually thrive in compact setups.", path: '/setup/nano-tank-setup', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Nano Aquarium Setup Guide', description: 'Stocking, stability, filtration, and species selection for nano tanks under 10 gallons.', url: 'https://fish.com/setup/nano-tank-setup', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })
export default function NanoTankSetupPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Nano Aquarium Setup Guide', subtitle: "A nano aquarium — generally any tank under 10 gallons — can be every bit as compelling as a large display, but it rewards discipline. Small volumes of water swing in temperature and chemistry faster than large ones, so the margin for error is smaller. This guide covers how to build a stable, beautiful nano tank and which fish and invertebrates genuinely belong in one.", category: 'Tank Setup', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'June 2026', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Tank Setup', href: '/setup' }, { name: 'Nano Tank Setup', href: '/setup/nano-tank-setup' }]}
      schema={schema}
      relatedLinks={[{ title: "Tank Setup Hub", href: "/setup", category: "Tank Setup" }, { title: "Aquascaping Guide", href: "/setup/aquascaping-guide", category: "Tank Setup" }, { title: "Planted Tank Setup", href: "/setup/planted-tank-setup", category: "Tank Setup" }, { title: "Best Nano Tanks", href: "/reviews/best-nano-tanks", category: "Reviews" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Good Nano Stock</div>
          {[['Chili rasbora', '5 gal+ · Tiny schooler'], ['Endlers livebearer', '10 gal · Colorful, prolific'], ['Sparkling gourami', '10 gal · Croaks, peaceful'], ['Dwarf puffer', '5 gal single · Personality'], ['Cherry shrimp', '5 gal+ · Algae cleanup'], ['Pygmy corydoras', '10 gal · Bottom shoaler']].map(([s, d]) => (
            <div key={s} className="py-2 border-b border-brand-border last:border-0">
              <div className="text-xs font-bold text-brand-dark">{s}</div>
              <div className="text-2xs text-brand-text-light">{d}</div>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Aquarium Cycling Guide', href: '/setup/aquarium-cycling-guide' }, { label: 'Planted Tank Setup', href: '/setup/planted-tank-setup' }, { label: 'Endlers Livebearer', href: '/species/endlers-livebearer' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="setup-nano-tank" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <h2>Why Small Tanks Are Harder, Not Easier</h2>
        <DropCap>The biggest misconception in the hobby is that a smaller tank is a beginner tank. In reality, the opposite is closer to the truth. A five-gallon nano holds a fraction of the water of a standard tank, which means any change — a dead fish, an overfeeding, a heater failure, a missed water change — produces a far more dramatic and rapid swing in temperature, pH, ammonia, and nitrate than the same event would in a buffered fifty-gallon tank. Large volumes of water are forgiving precisely because they dilute mistakes. Nano tanks demand consistency: small, frequent water changes, light stocking, careful feeding, and reliable equipment. Once those habits are in place, a nano is no harder to keep than anything else, and its compact footprint and detail make it deeply rewarding.</DropCap>

        <h2>Cycle It — No Shortcuts</h2>
        <p>A nano tank must be fully cycled before fish go in, exactly like any aquarium. Because the water volume is small, an uncycled nano can spike to lethal ammonia within a day or two of adding livestock. Run a fishless cycle with an ammonia source until ammonia and nitrite both read zero and nitrate is present, then stock slowly. Read our <a href="/setup/aquarium-cycling-guide">aquarium cycling guide</a> for the full process. A small sponge filter or a gentle internal filter is ideal — large hang-on-back filters often create too much current for a nano and its small inhabitants.</p>

        <CalloutBox variant="warning" title="Stability beats size">
          The small water volume of a nano tank swings fast. Frequent small water changes, light stocking, and a reliable heater matter more here than in any large aquarium.
        </CalloutBox>

        <h2>Stock for the Volume, Not the Glass</h2>
        <p>The single most common nano mistake is overstocking, often because the tank looks empty when first set up. Resist it. A five-gallon tank suits a single betta, a small colony of dwarf shrimp, or a tight school of the very smallest fish such as chili rasboras. A ten-gallon tank opens up options: a school of <a href="/species/endlers-livebearer">Endlers</a>, a group of <a href="/species/sparkling-gourami">sparkling gouramis</a>, pygmy corydoras, or a single <a href="/species/dwarf-puffer">dwarf puffer</a> in a planted setup. Goldfish, common plecos, and most cichlids are categorically wrong for nano tanks regardless of how small they appear in the store.</p>

        <h2>Plants and Scaping the Small Tank</h2>
        <p>Live plants are especially valuable in a nano because they consume nitrate and add stability to the small water column. Slow-growing, low-light species — Anubias, Java fern, Bucephalandra, and mosses attached to driftwood and rock — keep maintenance low and look proportional in a small space. A single well-chosen piece of hardscape reads as a focal point at nano scale, where a large display would need several. Floating plants add shade and absorb excess nutrients. Pair plants with a modest light on a timer to control algae.</p>

        <h2>Maintenance Routine</h2>
        <p>The nano maintenance rhythm is little and often: a 15 to 25 percent water change weekly, glass wiped as needed, and feeding kept light enough that nothing settles uneaten. Always replace evaporated water with dechlorinated fresh water rather than letting the tank concentrate minerals as it evaporates down. A small, accurate heater and a thermometer are essential, since room-temperature swings reach a nano faster than a larger tank. Keep a jug of dechlorinated water on hand so a quick change is never a chore.</p>
      </div>
    </ArticleLayout>
  )
}
