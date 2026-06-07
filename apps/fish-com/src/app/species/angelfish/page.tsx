import type { Metadata } from 'next'
import { StockImage, buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard , AffiliateDisclosure, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

const SOURCES = [
  { label: "Pterophyllum scalare — Seriously Fish species profile", url: "https://www.seriouslyfish.com/species/pterophyllum-scalare/", publisher: "Seriously Fish" },
  { label: "Pterophyllum scalare — FishBase species record", url: "https://www.fishbase.se/summary/Pterophyllum-scalare.html", publisher: "FishBase" },
  { label: "Kullander, S.O. Cichlidae. In: Checklist of the Freshwater Fishes of South and Central America. EDIPUCRS, 2003.", publisher: "EDIPUCRS" },
  { label: "Loiselle, P.V. The Cichlid Aquarium. Tetra Press, 1985.", publisher: "Tetra Press" },
]
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Angelfish Care Guide — Cichlid Behavior, Tank Height | Fish.com', description: 'Angelfish are cichlids with cichlid behavior — pairs bond for life, defend territory, and may attack tankmates during breeding. Tall tanks required.', path: '/species/angelfish', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Angelfish Care Guide', description: 'Cichlid behavior, bonding, territory, and tall tank requirements for freshwater angelfish.', url: 'https://fish.com/species/angelfish', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function AngelfishPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Angelfish Care Guide', subtitle: 'Pterophyllum scalare — freshwater angelfish are cichlids, and understanding them as cichlids rather than as large decorative tetras unlocks their behavior. They bond in pairs, defend breeding territory aggressively, develop individual personalities, and form the strongest social hierarchies in a community tank. They are not passive community fish despite their graceful appearance.', category: 'Species Guide — Intermediate', authorName: 'Fish.com Editorial', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Angelfish', href: '/species/angelfish' }]}
      schema={schema}
      relatedLinks={[{ title: "Species Hub", href: "/species", category: "Species" }, { title: "Discus", href: "/species/discus", category: "Species Guide" }, { title: "Cardinal Tetra", href: "/species/cardinal-tetra", category: "Species Guide" }, { title: "Planted Tank Setup", href: "/setup/planted-tank-setup", category: "Tank Setup" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Scientific name', 'Pterophyllum scalare'], ['Adult size', '6" tall · 4" body length'], ['Tank height', '18" minimum — 24" preferred'], ['Temperature', '76–82°F (warm end)'], ['pH', '6.0–7.5 — slightly acidic'], ['Behavior', 'Cichlid — territorial when breeding'], ['Lifespan', '10–15 years']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Discus Care', href: '/species/discus' }, { label: 'German Blue Ram', href: '/species/blue-ram' }, { label: 'Cardinal Tetra', href: '/species/cardinal-tetra' }]} />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-angelfish" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
        <StockImage manifestKey="fish-com:species-angelfish" aspect="16:9" variant="inline" caption="A freshwater angelfish in a home aquarium." priority />
        <h2>Tank Height — The Non-Negotiable</h2>
        <p>Angelfish grow vertically — their body is laterally compressed and their dorsal and ventral fins extend dramatically above and below. An adult angelfish may reach 6 inches in height (fin tip to fin tip) while being only 4 inches long. A standard 20-gallon "high" tank at 16 inches depth is barely adequate; a 55-gallon with 21 inches of depth works; a 75-gallon with 20+ inches and longer footprint is ideal for a small group or a pair. Shallow tanks stunt their growth, restrict their natural fin expression, and cause chronic stress. When buying angelfish, buy for the adult, not the juvenile.</p>

        <h2>Cichlid Pair Bonding and Territory</h2>
        <p>Angelfish form pair bonds that can last for years. A bonded pair will select a spawning site — typically a broad leaf, a piece of slate, or a vertical surface — and defend it against all other tank inhabitants when breeding. "Defending" means genuine cichlid aggression: chasing, fin-nipping, and potentially injuring any fish that enters the defended zone. This behavior is normal and cannot be trained away — it is the cichlid imperative to protect a spawning site.</p>
        <p>Management options: provide a large enough tank that other fish can retreat beyond the defended perimeter (a 75-gallon gives non-territorial species room to avoid the pair's zone), remove the pair to a dedicated breeding tank when spawning behavior begins, or accept that incompatible tankmates will need to be moved. A single pair of breeding angelfish in a 55-gallon tank can make life difficult for every other fish in the tank during spawning periods.</p>
        <p>Sexing angelfish is unreliable without observing spawning — there are no reliable visual differences. Purchase a group of 6 juveniles and allow them to pair naturally — they will form pairs as they mature. Remove unpaired individuals once pairing is established to reduce aggression.</p>

        <h2>Compatibility — What Works, What Doesn't</h2>
        <p>Angelfish are predatory toward fish small enough to fit in their mouth — at adult size, anything under 1 inch is prey. Small tetras, nano fish, and shrimp are at risk. Neon tetras specifically are a bad match despite their frequent recommendation — angelfish predate neons in the wild and will eat them in the aquarium once large enough to catch them.</p>
        <p>Compatible: larger tetras (black skirt, Buenos Aires, silver dollars), corydoras catfish (peaceful and ignored by angels), bristlenose plecos, other similar-sized cichlids that can hold their own (German Blue Rams, keyhole cichlids), and Cardinal tetras (slightly larger and faster than neons — better odds, but not guaranteed safe). Avoid: any fin-nipping species (tiger barbs reliably destroy angelfish fins), very small fish, and aggressive cichlids that will harass angels off food.</p>

        <h2>Water and Diet</h2>
        <p>Angelfish come from the slow-moving Amazon tributaries where water is warm (78–82°F), soft (GH 2–8), and slightly acidic (pH 6.0–7.0). They adapt to a wider range in captivity but are healthiest and breed most reliably in conditions close to this. Tall tank + warm, slightly soft, acidic water + live or frozen foods = ideal conditions. Diet: high-quality flake or pellet as a staple, supplemented with frozen or live foods enthusiastically — frozen bloodworms, mysis shrimp, brine shrimp, and live white worms for conditioning pairs toward breeding. Feed twice daily.</p>

        <h2>Strains and Varieties</h2>
        <p>Decades of selective breeding have produced many angelfish varieties beyond the wild-type silver with black bars: veil angels (extended fins), marble (random black and white pattern), koi (orange, white, and black), gold (solid yellow), black lace (black), platinum (solid white), zebra (extra bars), smoky (brown-gray tones), and others. Veil-tail varieties have the most dramatic fin extensions but are slower and more vulnerable to fin-nipping — avoid keeping them with even mildly nippy species. Wild-type angelfish are hardier and more vigorous spawners than many heavily selectively-bred strains.</p>
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
          <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Angelfish — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for angelfish care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/angelfish%20tank%20setup?s=species-angelfish" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Angelfish Setup on Amazon →</a>
            <a href="/go/chewy-brand/angelfish%20tank%20setup?s=species-angelfish" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

        <ArticleSourcesList sources={SOURCES} />
      </div>
      </ArticleLayout>
  )
}
