import type { Metadata } from 'next'
import { StockImage, buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard , AffiliateDisclosure, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

const SOURCES = [
  { label: "Mikrogeophagus ramirezi — Seriously Fish species profile", url: "https://www.seriouslyfish.com/species/mikrogeophagus-ramirezi/", publisher: "Seriously Fish" },
  { label: "Mikrogeophagus ramirezi — FishBase species record", url: "https://www.fishbase.se/summary/Mikrogeophagus-ramirezi.html", publisher: "FishBase" },
  { label: "Kullander, S.O. Cichlidae. In: Checklist of the Freshwater Fishes of South and Central America. EDIPUCRS, 2003.", publisher: "EDIPUCRS" },
  { label: "Keenleyside, M.H.A. Diversity and Adaptation in Fish Behaviour. Springer-Verlag, 1979.", publisher: "Springer-Verlag" },
]
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'German Blue Ram Care Guide — Soft Acidic Water, Pairs | Fish.com', description: 'German Blue Rams need soft, warm, acidic water (pH 5.5-7.0, 80-86°F). One of the most beautiful dwarf cichlids — also one of the most demanding.', path: '/species/blue-ram', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'German Blue Ram Care Guide', description: 'Soft acidic water requirements, pair bonding, and breeding for Mikrogeophagus ramirezi.', url: 'https://fish.com/species/blue-ram', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function BlueRamPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'German Blue Ram Care Guide', subtitle: 'Mikrogeophagus ramirezi — one of the most spectacularly colored dwarf cichlids available. Electric blue body, brilliant yellow head, red eye, and flowing fins make blue rams stunning in a planted tank. They also require specific water conditions that most beginners cannot provide — and they die quickly when those conditions are wrong.', category: 'Species Guide — Intermediate', authorName: 'Fish.com Editorial', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'German Blue Ram', href: '/species/blue-ram' }]}
      schema={schema}
      relatedLinks={[{ title: "Species Hub", href: "/species", category: "Species" }, { title: "Discus", href: "/species/discus", category: "Species Guide" }, { title: "Cardinal Tetra", href: "/species/cardinal-tetra", category: "Species Guide" }, { title: "Water Chemistry Guide", href: "/setup/water-chemistry-guide", category: "Tank Setup" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Scientific name', 'Mikrogeophagus ramirezi'], ['Difficulty', 'Intermediate — water chemistry critical'], ['Adult size', '3 inches'], ['pH', '5.5–7.0 — soft acidic required'], ['Temperature', '80–86°F (warmer than most)'], ['Min tank', '20 gallons (pair)'], ['Lifespan', '2–4 years'], ['GH', 'Under 8 dGH — soft water']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Discus Care', href: '/species/discus' }, { label: 'Cardinal Tetra', href: '/species/cardinal-tetra' }, { label: 'Angelfish Care', href: '/species/angelfish' }]} />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-blue-ram" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
        <StockImage manifestKey="fish-com:species-blue-ram" aspect="16:9" variant="inline" caption="A blue ram cichlid in a home aquarium." priority />
        <h2>Water Chemistry — Why Most Blue Rams Die</h2>
        <p>The German Blue Ram's native habitat is the Llanos of Venezuela and Colombia — warm, blackwater rivers and pools with extremely soft, acidic water. The parameters they require reflect this origin: pH 5.5–7.0 (ideally 6.0–6.8), GH under 8 (preferably 3–6), and temperature 80–86°F. These are not adjustable preferences — they are physiological requirements. Blue rams kept in hard alkaline tap water (pH 7.5–8.0, GH 15+) that characterizes much of the US will show chronic stress, compromised immune function, and shortened lifespans. Most "blue rams die easily" experiences are water chemistry mismatches.</p>
        <p><strong>Water preparation for blue rams:</strong> If your tap water is hard, mix with RO/DI water to achieve the target GH and pH. A 50/50 RO/tap mix is a starting point — test the result and adjust. Alternatively, use full RO water remineralized with Seachem Equilibrium (adds GH without raising KH) to achieve GH 5–8 with minimal KH, which allows CO2 or driftwood tannins to set a low, stable pH. Peat filtration and Indian almond leaves add tannins that lower pH and provide antibacterial properties beneficial to rams.</p>

        <h2>Temperature — Warmer Than Most Community Fish</h2>
        <p>80–86°F is the optimal range for German Blue Rams. This is significantly warmer than the 72–78°F that most community fish prefer. The conflict: tankmates must also tolerate 80–82°F. Cardinal tetras (native to the same warm blackwater rivers) are the classic tankmate — they thrive at 80°F and share the soft acidic water requirement. Corydoras sterbai is the one Corydoras species that tolerates 80°F+ comfortably. Standard tropical fish (neon tetras, platies, mollies) at 80°F will be under thermal stress over the long term.</p>

        <h2>Tank-Bred vs Wild-Caught</h2>
        <p>Most blue rams sold in fish stores are tank-bred in Southeast Asia under conditions quite different from their native habitat — often harder, warmer, and with antibiotics added to maintain health during shipping. These tank-bred rams have some tolerance for conditions outside the ideal range, but they have a shorter lifespan (often 1–2 years in suboptimal conditions) than rams kept in appropriate parameters (3–4 years). Wild-caught rams and rams from specialized breeders (who maintain soft acidic water) are more sensitive initially but produce better, longer-lived adults when the correct environment is maintained.</p>

        <h2>Pairing and Behavior</h2>
        <p>Blue rams are best kept as mated pairs — a male and female that have bonded. Buying an established bonded pair from a breeder is ideal. If buying individually, get one male (larger, longer ventral fins, more colorful) and one female (smaller, pink belly, shorter fins) and allow them to pair in the tank. Not all individuals will pair — some incompatibilities exist between individuals that do not resolve. If one ram is consistently being harassed, they are not compatible and separation is necessary.</p>
        <p>Outside the breeding period, pairs coexist peacefully and explore the tank together. During breeding, pairs become territorial around their spawning site and will chase tankmates away — the degree of aggression varies by individual pair but is typically manageable in a well-planted 20+ gallon tank with multiple visual barriers.</p>

        <h2>Feeding</h2>
        <p>Omnivores that prefer a varied diet with significant protein content. Primary foods: small cichlid pellets (Hikari Micro Pellets, New Life Spectrum Small Fish Formula), frozen bloodworms (enthusiastically accepted and excellent for conditioning), frozen brine shrimp, frozen daphnia. Feed small amounts 2–3 times daily — rams have small stomachs and do not eat large volumes. They compete well with community fish at feeding time despite their small size.</p>

        <h2>Breeding</h2>
        <p>A compatible pair in good condition in appropriate water conditions will spawn regularly — depositing eggs on a flat surface (broad leaf, flat stone, or directly on the substrate) in a cleared spawning site. Both parents guard the eggs and fry. Fry are tiny — fed infusoria or baby brine shrimp. Many first spawns fail as the pair learns parenting; experienced pairs are reliable parents. The challenge is fry survival in a community tank — other fish eat fry readily, and even the parents may eat fry if stressed.</p>
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
          <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Blue Ram — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for blue ram care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/blue%20ram%20tank%20setup?s=species-blue-ram" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Blue Ram Setup on Amazon →</a>
            <a href="/go/chewy-brand/blue%20ram%20tank%20setup?s=species-blue-ram" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

        <ArticleSourcesList sources={SOURCES} />
      </div>
      </ArticleLayout>
  )
}
