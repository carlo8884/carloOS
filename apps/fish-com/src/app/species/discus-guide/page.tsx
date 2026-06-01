import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Discus Fish Care Guide — Daily Water Changes, 86°F | Fish.com', description: 'Discus are the most demanding freshwater fish. Require 82-86°F, daily water changes, and pristine water quality. Not for beginners.', path: '/species/discus', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Discus Fish Care Guide', description: 'Water change frequency, temperature, disease management, and care for Symphysodon discus.', url: 'https://fish.com/species/discus', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function DiscusGuidePage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Discus Fish Care Guide', subtitle: 'Symphysodon discus — the "King of the Aquarium." Discus are the most demanding freshwater fish regularly kept in the hobby: specific temperature requirements, high water change frequency, sensitivity to water chemistry and quality, and susceptibility to a range of diseases make them a challenge that filters out casual keepers. For experienced aquarists who meet their requirements, discus deliver visual impact no other freshwater fish matches.', category: 'Species Guide — Expert', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '10 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Discus', href: '/species/discus' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Requirements Summary</div>
          {[['Temperature', '82–86°F — non-negotiable'], ['Water changes', '25-50% daily for juvenile growth'], ['pH', '5.5–7.0 — soft acidic'], ['GH', 'Under 8 — soft water'], ['Group', 'Minimum 6 — school for security'], ['Tank size', '75 gallons minimum for 6'], ['Difficulty', 'Expert — not for beginners']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Angelfish', href: '/species/angelfish' }, { label: 'Cardinal Tetra', href: '/species/cardinal-tetra' }, { label: 'Water Chemistry Guide', href: '/setup/water-chemistry-guide' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-discus" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Temperature — The First Barrier</h2>
        <p>Discus require water temperature of 82-86°F — 6-10°F warmer than most tropical fish. This temperature range does several things simultaneously: it keeps discus comfortable (they originate from the warm blackwater rivers of the Amazon basin), it suppresses many parasites and bacteria that cause disease, and it makes them incompatible with most community fish that cannot tolerate sustained temperatures above 80°F. The discus tank is effectively a species-specific or carefully researched community tank.</p>
        <p>At these temperatures, biological filtration accelerates, dissolved oxygen decreases, and bacterial populations that are pathogenic at lower temperatures can still establish. This is one reason discus are more disease-prone than cold-water tropical fish — the warm water is not inherently problematic for discus but it creates conditions where pathogens thrive. High oxygenation (surface agitation, airstone), pristine water quality, and a stable temperature without fluctuation are essential.</p>

        <h2>Water Changes — Daily for Juveniles</h2>
        <p>The discus community has settled on a clear standard for juvenile discus (under 6 months): 25-50% water changes daily. This frequency maintains the pristine water quality discus require for maximum growth rates and health. Adult discus in mature planted tanks can sometimes be maintained with less frequent changes (50% twice weekly is a common adult regimen), but juveniles benefit enormously from daily water change discipline. The growth rate difference between discus in daily-change setups versus weekly-change setups is dramatic and visible.</p>
        <p>The practicality: a daily water change routine is 5-10 minutes when properly set up — a Python water changer or similar siphon-to-drain system with RO/DI water ready reduces the daily commitment significantly. Discus keepers who maintain this discipline describe it as habit after a few weeks.</p>

        <h2>Planted vs. Bare Bottom Tanks</h2>
        <p>Two main discus keeping approaches: bare bottom tanks and planted tanks. Bare bottom provides maximum hygiene — waste is visible and removed completely at each water change, and parasites cannot harbor in substrate. The standard choice for breeders and for discus that are being grown out. Planted tanks with sand substrate are aesthetically more natural and can work well for adult discus in mature systems where the biological balance is established. The planted discus tank with cardinal tetras and blackwater conditions is one of the most spectacular aquarium setups achievable — but it requires the substrate and plant selection to be disease-management compatible.</p>

        <h2>Disease — The Reality</h2>
        <p>Discus disease management is a significant component of discus keeping. Common conditions: hole-in-the-head disease (HITH — mineral deficiency linked to activated carbon use and/or flagellate infections), internal parasites (Hexamita — flagellate protozoans causing HITH and internal damage), external parasites (gill flukes — Dactylogyrus — common in wild-caught fish and import chains), bacterial infections (black disease — darkening coloration with lethargy, often septicemia), and viral conditions. Quarantine of all new discus (4 weeks minimum) with prophylactic treatment for flukes (praziquantel) is standard among experienced discus keepers. A well-stocked discus medicine cabinet — metronidazole, praziquantel, quality antibiotics — is part of serious discus keeping.</p>

        <h2>Starting With Discus — Practical Advice</h2>
        <p>Source matters enormously. Wild-caught discus from reputable importers carry disease risk but can be magnificent in coloration and size. Farm-raised discus from quality breeders (particularly Southeast Asian farms — Thailand, Malaysia — known for consistency) offer more predictable health profiles. Avoid bulk-lot discount discus — the savings are illusory when disease management costs are factored in. Purchase from a vendor you can communicate with about the fish's history, what they have been fed, and what treatments have been given. A discus that arrives with a detailed care history is a discus you can continue caring for correctly.</p>
        <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Discus Guide — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for discus guide care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/discus%20guide%20tank%20setup?s=species-discus-guide" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Discus Guide Setup on Amazon →</a>
            <a href="/go/chewy-brand/discus%20guide%20tank%20setup?s=species-discus-guide" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

      </div>
      </ArticleLayout>
  )
}
