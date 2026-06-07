import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard , AffiliateDisclosure, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'

const SOURCES = [
  { label: "Corydoras aeneus — Seriously Fish species profile", url: "https://www.seriouslyfish.com/species/corydoras-aeneus/", publisher: "Seriously Fish" },
  { label: "Corydoras aeneus — FishBase species record", url: "https://www.fishbase.se/summary/Corydoras-aeneus.html", publisher: "FishBase" },
  { label: "Reis, R.E. Systematics of the Neotropical Catfish Family Corydoradinae. Ichthyological Explorations of Freshwaters, 1997.", publisher: "Ichthyological Explorations of Freshwaters" },
  { label: "Burgess, W.E. Atlas of Freshwater and Marine Catfishes. TFH Publications, 1989.", publisher: "TFH Publications" },
]
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Bronze Corydoras Care Guide — The Hardy Cory Catfish | Fish.com', description: "Bronze corydoras are the hardiest, most available cory catfish — peaceful bottom-dwelling schoolers that need a group of 6+, sand substrate, and sinking food.", path: '/species/bronze-corydoras', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Bronze Corydoras Care Guide', description: 'School size, substrate, barbel care, and breeding for Corydoras aeneus.', url: 'https://fish.com/species/bronze-corydoras', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })
export default function BronzeCorydorasPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Bronze Corydoras Care Guide', subtitle: "Corydoras aeneus — the bronze cory is the most widely kept and forgiving member of the beloved Corydoras genus. A peaceful, armored bottom-dweller with an endearing habit of darting to the surface for a gulp of air, it works the substrate of community tanks in cheerful, social groups. Bronze and albino forms are the two most common varieties in the trade.", category: 'Species Guide', authorName: 'Fish.com Editorial', publishedAt: 'June 2026', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Bronze Corydoras', href: '/species/bronze-corydoras' }]}
      schema={schema}
      relatedLinks={[{ title: "Species Hub", href: "/species", category: "Species" }, { title: "Corydoras", href: "/species/corydoras", category: "Species Guide" }, { title: "Panda Corydoras", href: "/species/panda-corydoras", category: "Species Guide" }, { title: "Kuhli Loach", href: "/species/kuhli-loach", category: "Species Guide" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Scientific name', 'Corydoras aeneus'], ['Adult size', '2.5–3 inches'], ['Temperature', '72–79°F'], ['pH', '6.0–7.8'], ['Group size', '6 minimum, more is better'], ['Substrate', 'Sand or smooth fine gravel'], ['Lifespan', '5–10 years']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Corydoras Overview', href: '/species/corydoras' }, { label: 'Panda Corydoras', href: '/species/panda-corydoras' }, { label: 'Otocinclus', href: '/species/otocinclus' }]} />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-bronze-corydoras" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <h2>The Beginner Cory</h2>
        <DropCap>If a new aquarist wants a bottom-dwelling catfish, the bronze corydoras is almost always the right first choice. It tolerates a wider range of water chemistry and temperature than its more delicate relatives such as the panda or pygmy cory, accepts virtually any sinking food, and reproduces so readily that surprise spawns in community tanks are common. The albino corydoras sold everywhere is simply a color morph of this same species. Both forms share the genus-wide need for company: corydoras are intensely social and must be kept in groups of at least six. A single cory is a stressed, withdrawn animal that hides constantly; a school of eight forages confidently across the open substrate in broad daylight.</DropCap>
        <p>Bronze corys are hardy but not indestructible. They are sensitive to nitrate accumulation and to the salt and copper-based medications sometimes used for scaled fish, so dose treatments conservatively in tanks containing corydoras.</p>

        <h2>Substrate and Barbels</h2>
        <p>Corydoras feed by sifting substrate through their mouths and out their gills, using sensitive barbels to locate food. Sharp gravel is the single most common cause of cory problems: it abrades and erodes the barbels, which can become infected and disappear, crippling the fish's ability to feed. Smooth sand is the ideal substrate — it allows natural sifting behavior and keeps barbels intact. If gravel is used, it must be rounded and fine. Eroded barbels are nearly always a sign of either sharp substrate or chronically poor bottom hygiene.</p>

        <CalloutBox variant="warning" title="Sand over sharp gravel">
          Bronze corydoras sift substrate to feed and need smooth sand or rounded fine gravel. Sharp-edged gravel erodes their barbels over time, leading to infection and loss of feeding ability.
        </CalloutBox>

        <h2>The Surface Dash — Normal Behavior</h2>
        <p>Corydoras are facultative air-breathers: they periodically dart to the surface, gulp a bubble of air, and absorb oxygen through their highly vascularized intestine. This is completely normal and even charming behavior. However, if every cory in the tank is racing to the surface constantly and gasping, it can signal poor water quality or low dissolved oxygen — interpret frequency in context. Provide some open swimming space between the substrate and the surface so the trip is unobstructed.</p>

        <h2>Feeding and Breeding</h2>
        <p>Despite their reputation as "cleaner fish," corydoras are not scavengers that survive on leftovers — they require their own food. Offer sinking pellets, wafers, frozen bloodworms, and live or frozen foods after the lights dim. To trigger breeding, condition a group well and perform a large, cooler water change to simulate the rainy season. Females deposit adhesive eggs onto glass and plants in the classic "T-position" embrace. Eggs hatch in three to five days, and fry are easy to raise on powdered foods and microworms.</p>
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
          <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Bronze Corydoras — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, sand substrate, and sinking food sized for corydoras care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/corydoras%20tank%20setup?s=species-bronze-corydoras" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Corydoras Setup on Amazon →</a>
            <a href="/go/chewy-brand/corydoras%20tank%20setup?s=species-bronze-corydoras" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>
        <ArticleSourcesList sources={SOURCES} />
      </div>
    </ArticleLayout>
  )
}
