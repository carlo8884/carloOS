import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard , AffiliateDisclosure, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

const SOURCES = [
  { label: "Neocaridina davidi — Seriously Fish species profile", url: "https://www.seriouslyfish.com/species/neocaridina-davidi/", publisher: "Seriously Fish" },
  { label: "Neocaridina davidi — FishBase species record", url: "https://www.fishbase.se/summary/Neocaridina-davidi.html", publisher: "FishBase" },
  { label: "Klotz, W. et al. Neocaridina davidi (Bouvier, 1904) in Germany: the ornamental cherry shrimp as a potential invasive species. BioInvasions Records, 2013.", publisher: "BioInvasions Records" },
  { label: "Freshwater Shrimp Care — UF/IFAS Extension", url: "https://edis.ifas.ufl.edu/publication/FA177", publisher: "UF/IFAS Extension" },
]
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Cherry Shrimp Care Guide — Grades, Breeding | Fish.com', description: 'Cherry shrimp are the best beginner shrimp. Sakura, Fire Red, and Painted Fire Red grades compared. They breed readily in established tanks', path: '/species/cherry-shrimp', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Cherry Shrimp Care Guide', description: 'Grades, breeding, colony setup, and care for Neocaridina davidi cherry shrimp.', url: 'https://fish.com/species/cherry-shrimp', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function CherryShrimpPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Cherry Shrimp Care Guide', subtitle: 'Neocaridina davidi — the cherry shrimp is the gateway invertebrate for most aquarists. Hardy, colorful, endlessly interesting to watch, and prolific breeders that establish self-sustaining colonies in established tanks. They clean glass, graze on biofilm, and add movement and color to any community setup.', category: 'Species Guide — Invertebrate', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Cherry Shrimp', href: '/species/cherry-shrimp' }]}
      schema={schema}
      relatedLinks={[{ title: "Species Hub", href: "/species", category: "Species" }, { title: "Amano Shrimp", href: "/species/amano-shrimp", category: "Species Guide" }, { title: "Mystery Snail", href: "/species/mystery-snail", category: "Species Guide" }, { title: "Low-Tech Planted Tank", href: "/setup/low-tech-planted-tank", category: "Tank Setup" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Color Grades</div>
          {[['Cherry (low grade)', 'Pale red, clear patches — most affordable'], ['Sakura', 'Solid medium red coverage'], ['Fire Red', 'Deep solid red, minimal clearness'], ['Painted Fire Red', 'Most intense solid red — premium price'], ['Bloody Mary', 'Translucent body, deep red organs visible']].map(([g, d]) => (
            <div key={g} className="py-2 border-b border-brand-border last:border-0">
              <div className="text-xs font-bold text-brand-dark">{g}</div>
              <div className="text-2xs text-brand-text-light">{d}</div>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Amano Shrimp', href: '/species/amano-shrimp' }, { label: 'Mystery Snail', href: '/species/mystery-snail' }, { label: 'Otocinclus Care', href: '/species/otocinclus' }]} />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-cherry-shrimp" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
        <h2>Grades — What You're Paying For</h2>
        <p>Cherry shrimp are sold in grades based on color intensity and coverage. All grades are the same species (Neocaridina davidi) and have identical care requirements — grade is purely aesthetic and affects price, not ease of care. Low-grade "cherry" shrimp have pale, patchy red coloration with transparent areas. Higher grades have progressively more intense and solid red coloration, culminating in "Painted Fire Red" with solid, opaque red coloration throughout. Breeding higher-grade shrimp together tends to produce higher-grade offspring — but population grades drift toward lower grades without selective culling of pale individuals.</p>
        <p>Important note: do not mix different Neocaridina color morphs (cherry, blue dream, yellow, orange rili) in the same tank. They interbreed freely and within a few generations produce drab, genetically mixed offspring in place of the pure-color varieties. Keep each Neocaridina color morph in its own tank or with other compatible species.</p>

        <h2>Water Parameters — The Reason They're "Easy"</h2>
        <p>Cherry shrimp tolerate a wide range of water parameters — this is what makes them the beginner shrimp. pH 6.5–8.0, GH 4–18, KH 2–10, temperature 65–80°F. Standard community tank water works for cherry shrimp in most cases. This is dramatically different from the precision required for crystal shrimp (Caridina species), which need soft, acidic, specifically parameterized water and crash in standard tap water. The key requirements for cherry shrimp are an established, cycled tank (0 ammonia, 0 nitrite), nitrate under 20 ppm, and absence of copper.</p>
        <p>GH affects molting success — cherry shrimp at GH under 4 may have difficulty molting and experience "failed molt" deaths. If cherry shrimp are dying after what appears to be a failed molt attempt (shrimp found curled or white after molting), raise GH to 6-8 with Seachem Equilibrium. Cuttlebone as a free-choice calcium supplement (placed in the tank, allows shrimp to graze) also supports molting.</p>

        <h2>Breeding — Effortless in Established Tanks</h2>
        <p>Cherry shrimp breed readily without any special intervention in a well-established tank. The sequence: a female "berries" — developing eggs visible under her tail abdomen, fanning them for oxygenation for 25–30 days. Eggs hatch as fully-formed miniature shrimp (no larval stage in freshwater). Baby shrimp (called shrimplets) are 1–2mm and immediately begin grazing on biofilm. Starting colony: 10–15 shrimp in a 10-gallon tank typically reaches 50–100 in 3–4 months.</p>
        <p>Key factors for breeding success: no fish that eat shrimp (see below), no copper, established biofilm for shrimplets to eat, and stable parameters without sudden changes. Shrimplets are tiny and vulnerable — they need cover (Java moss, fine-leaved plants, or shrimp-specific hides) for the first 2–3 weeks until they're large enough to escape notice.</p>

        <h2>Compatible Fish — The Short List</h2>
        <p>Most fish will eat cherry shrimp, especially shrimplets. The list of fish genuinely compatible with a breeding cherry shrimp colony is short: otocinclus (algae eaters with zero predatory interest in shrimp), small peaceful corydoras (sometimes eat shrimplets, rarely adults), very small rasboras (Boraras species at 0.75" — truly nano), and endlers livebearers in species-appropriate ratios.</p>
        <p>Fish marketed as "shrimp safe" that frequently eat cherry shrimp: most tetras (especially larger species), guppies (eat shrimplets), mystery snails (fine with adults, occasionally eat very small shrimplets), dwarf gourami (frequently eat adult shrimp), bettas (individual variation — many eat shrimp, some don't). If breeding a colony is the goal, a species-only tank or one limited to the verified-safe list is the reliable approach.</p>

        <h2>Feeding</h2>
        <p>Cherry shrimp are primarily biofilm grazers — in an established planted tank with adequate biofilm, supplemental feeding may not be necessary. For regular feeding: sinking algae wafers (Hikari Crab Cuisine, Repashy Soilent Green), blanched vegetables (zucchini, spinach, cucumber weighted down), commercial shrimp food (Bacter AE promotes biofilm growth on substrate). Feed small amounts every 2-3 days — overfeeding fouls the water, which is more damaging to shrimp than underfeeding. Remove uneaten food within 24 hours.</p>
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
        <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Cherry Shrimp — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for cherry shrimp care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/cherry%20shrimp%20tank%20setup?s=species-cherry-shrimp" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Cherry Shrimp Setup on Amazon →</a>
            <a href="/go/chewy-brand/cherry%20shrimp%20tank%20setup?s=species-cherry-shrimp" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

        <ArticleSourcesList sources={SOURCES} />
      </div>
      </ArticleLayout>
  )
}
