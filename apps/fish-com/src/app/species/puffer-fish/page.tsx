import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard , AffiliateDisclosure, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

const SOURCES = [
  { label: "Tetraodon nigroviridis — Seriously Fish species profile", url: "https://www.seriouslyfish.com/species/tetraodon-nigroviridis/", publisher: "Seriously Fish" },
  { label: "Tetraodon nigroviridis — FishBase species record", url: "https://www.fishbase.se/summary/Tetraodon-nigroviridis.html", publisher: "FishBase" },
  { label: "Froese, R. & Pauly, D. Tetraodontidae — Pufferfishes. FishBase, 2023.", url: "https://www.fishbase.se/identification/SpeciesList.php?family=Tetraodontidae", publisher: "FishBase" },
  { label: "Wager, R. & Unmack, P. Fishes of the Lake Eyre Catchment. Queensland Department of Primary Industries, 2000.", publisher: "QDPI" },
]
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Puffer Fish Care Guide — Beak Trimming, Aggression | Fish.com', description: 'Puffers bite everything including tankmates and need hard foods to wear their beaks. Dwarf puffer vs fahaka vs figure 8 compared.', path: '/species/puffer-fish', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Puffer Fish Care Guide', description: 'Beak care, aggression management, and species comparison for freshwater puffer fish.', url: 'https://fish.com/species/puffer-fish', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function PufferFishPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Puffer Fish Care Guide', subtitle: 'Freshwater puffers are among the most intelligent, interactive, and personality-rich fish in the hobby. They are also among the most aggressive, the most difficult to keep with other fish, and the most demanding in terms of feeding requirements. Every puffer keeper will tell you the same thing: the work is worth it.', category: 'Species Guide — Experienced', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Puffer Fish', href: '/species/puffer-fish' }]}
      schema={schema}
      relatedLinks={[{ title: "Species Hub", href: "/species", category: "Species" }, { title: "Dwarf Puffer", href: "/species/dwarf-puffer", category: "Species Guide" }, { title: "Saltwater Tank Setup", href: "/setup/saltwater-tank-setup", category: "Tank Setup" }, { title: "Water Chemistry Guide", href: "/setup/water-chemistry-guide", category: "Tank Setup" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Species Comparison</div>
          {[['Dwarf puffer (C. travancoricus)', '1" · 5-10 gal · Freshwater · Some community possible'], ['Figure 8 puffer (T. biocellatus)', '3" · 30+ gal · Brackish · Mostly species-only'], ['South American puffer (C. asellus)', '3.5" · 30+ gal · Freshwater · Semi-community'], ['Fahaka puffer (T. fahaka)', '18" · 200+ gal · Freshwater · Strict species-only']].map(([s, d]) => (
            <div key={s} className="py-2 border-b border-brand-border last:border-0">
              <div className="text-xs font-bold text-brand-dark">{s}</div>
              <div className="text-2xs text-brand-text-light">{d}</div>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Oscar Fish', href: '/species/oscar' }, { label: 'Water Chemistry Guide', href: '/setup/water-chemistry-guide' }, { label: 'Quarantine Tank', href: '/setup/quarantine-tank-guide' }]} />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-puffer" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
        <h2>The Beak — Why It Matters</h2>
        <p>Puffer fish have fused beak-like teeth (technically a beak of dental plates) that grow continuously throughout their lives. In the wild, they grind snails, crustaceans, and other hard-shelled prey that naturally wear the beak to an appropriate length. In captivity, a puffer fed only soft foods (bloodworms, soft pellets) develops an overgrown beak — the upper and lower plates grow to the point where the fish cannot close its mouth or eat normally. This is painful and eventually fatal without intervention.</p>
        <p>Prevention: feed hard-shelled foods regularly — snails are the gold standard (trumpet snails, mystery snails, pond snails — puffers demolish them enthusiastically). Unshelled shrimp, clam on the half shell, and frozen krill with shells also help. The crunch is necessary. Every puffer diet should include hard foods at multiple feedings weekly. Overgrown beaks can be trimmed by a fish veterinarian under anesthesia (MS-222) — an uncomfortable but necessary procedure when diet management has failed.</p>

        <h2>Personality — The Reason People Keep Them</h2>
        <p>Puffers are remarkably personable fish. They recognize their owners — their binocular vision gives them a face-forward focus unlike most fish — and approach the glass when their keeper is present, follow fingers across the glass, and actively beg for food. Their eyes move independently and their expressions are more legible than typical fish. Fahaka puffers (the largest freshwater species, reaching 18 inches) are particularly famous for their personality — long-term keepers describe bonds with these fish that approach those with dogs in terms of individual recognition and interaction. The investment in their specific care requirements pays back in interaction quality.</p>

        <h2>Aggression — The Management Reality</h2>
        <p>Puffers bite. They bite other fish (fins, scales, sometimes fatally), they bite snails (intentionally — it is their food), they bite decorations, they bite the glass, and they occasionally bite their keeper's fingers during tank maintenance. This biting behavior is not trainable away — it is predatory instinct in an animal that hunts by biting through shells. The bite of a dwarf puffer (1 inch) is a pinch; the bite of a fahaka puffer (18 inches) breaks skin and can cause injury requiring medical attention.</p>
        <p>Community compatibility: dwarf puffers can sometimes be kept with fast-moving fish that are difficult to catch (danios, fast tetras) in heavily planted tanks — not guaranteed, but possible with appropriate species selection. All other puffers are essentially incompatible with community fish — the bite damage and stress they cause to tankmates makes species-only or carefully researched companion species the appropriate approach.</p>

        <h2>The Dwarf Puffer — The Entry Point</h2>
        <p>Carinotetraodon travancoricus (dwarf puffer / pea puffer) at 1 inch is the most accessible puffer for aquarists who want the personality in a more manageable package. They are true freshwater (no brackish needed unlike figure 8), manageable in a 10-gallon species tank for a small group (1 male to 2-3 females in a heavily planted setup), and some hobbyists successfully keep them with fast, robust community fish. They are carnivores requiring live or frozen foods (bloodworms, daphnia, small snails) and will not accept dry foods. Their beak care requirements are the same as larger species — snails regularly.</p>
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
          <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Puffer Fish — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for puffer fish care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/puffer%20fish%20tank%20setup?s=species-puffer-fish" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Puffer Fish Setup on Amazon →</a>
            <a href="/go/chewy-brand/puffer%20fish%20tank%20setup?s=species-puffer-fish" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

        <ArticleSourcesList sources={SOURCES} />
      </div>
      </ArticleLayout>
  )
}
