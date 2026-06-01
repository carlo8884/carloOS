import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "Gut-Loading Feeder Insects — How & Why | Lizard.com", description: "Gut-loading feeder insects before offering them transfers nutrition to your reptile. What to feed feeders, how long before use, and why it beats dusting alone.", path: "/health/gut-loading-guide", type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "Gut-Loading Feeder Insects", description: "How and why to gut-load feeder insects, what to feed them, timing, and how gut-loading complements supplement dusting.", url: "https://lizard.com/health/gut-loading-guide", imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })

export default function HealthGutLoadingGuidePage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "Gut-Loading Feeder Insects", subtitle: "Gut-loading is the practice of feeding nutritious food to feeder insects before offering them to your reptile, so the insect becomes a vehicle delivering that nutrition. A cricket fed garbage is mostly empty calories; a cricket gut-loaded for a day or two becomes a far better meal. Done alongside calcium dusting, gut-loading is one of the simplest, cheapest upgrades to a reptile’s diet.", category: "Feeding", authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'June 2026', readTime: "8 min" }}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Health", href: "/health" }, { name: "Gut-Loading Guide", href: "/health/gut-loading-guide" }]}
      schema={schema}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>{"Key Points"}</div>
          {[["What it is", "Feeding the feeders before use"], ["Timing", "24-48 hours before offering"], ["Goal", "Nutrient-rich gut contents"], ["Best foods", "Leafy greens, veg, commercial loads"], ["Plus", "Calcium/vitamin dusting at feeding"], ["Avoid", "Empty, dehydrated feeders"]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title={"Related Guides"} links={[{ label: "Feeder Insects Compared", href: "/health/feeder-insects-compared" }, { label: "Calcium & D3 Supplementation", href: "/health/calcium-d3-supplementation" }, { label: "Reptile Feeding Guide", href: "/health/reptile-feeding-guide" }, { label: "Dubia Roach Care", href: "/health/dubia-roach-care" }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={"lizard-health-gut-loading-guide"} ctaText="Download Free" />
      </>}
    >
      <div className="carloOS-article">
          <p>{"Feeder insects bought from a shop are often shipped and stored without proper food, arriving dehydrated and nutritionally hollow. An insect in that state passes little of value to the reptile eating it. Gut-loading fixes this: by feeding the insects a nutritious diet for a day or two before they become a meal, you fill their digestive tract and bodies with nutrients that transfer to your reptile. It is the difference between feeding your animal a vitamin-packed insect and feeding it an empty shell."}</p>
          <h2>{"Gut-Loading Versus Dusting"}</h2>
          <p>{"Gut-loading and supplement dusting are complementary, not interchangeable."}</p>
          <ul>
            <li>{"Gut-loading improves the whole nutritional profile of the feeder over a day or two, including moisture and a range of nutrients"}</li>
            <li>{"Dusting coats the feeder in calcium (and periodically a multivitamin) immediately before offering, targeting the calcium and vitamin D pathway specifically"}</li>
            <li>{"Use both: gut-load your feeders continuously, then dust at feeding time per the supplement schedule for your species"}</li>
            <li>{"Neither replaces correct UVB for species that need it to make vitamin D3"}</li>
          </ul>
          <h2>{"What to Feed Your Feeders"}</h2>
          <ul>
            <li>{"Fresh leafy greens and vegetables: collard greens, mustard greens, dandelion greens, squash, carrot, and similar produce"}</li>
            <li>{"A small amount of fruit for moisture and palatability"}</li>
            <li>{"Commercial gut-load products formulated to balance calcium and phosphorus"}</li>
            <li>{"A clean water source or water-holding gel so the feeders are hydrated, which also hydrates the reptile"}</li>
            <li>{"Avoid feeding the insects junk such as fish flakes alone or starchy filler if better options are available"}</li>
          </ul>
          <h2>{"Timing and Method"}</h2>
          <ol>
            <li>{"Provide the gut-load diet to the feeder insects for at least 24, ideally 48, hours before they will be offered"}</li>
            <li>{"Keep the feeders in clean, ventilated housing at appropriate conditions so they eat well and do not die off"}</li>
            <li>{"Remove uneaten produce before it molds, and keep the colony or holding container clean"}</li>
            <li>{"Just before feeding, dust the gut-loaded insects with calcium (and a multivitamin per schedule), then offer them promptly so the dust does not all rub off"}</li>
          </ol>
          <h2>{"Calcium-to-Phosphorus Ratio"}</h2>
          <p>{"A recurring goal in feeder nutrition is a favorable calcium-to-phosphorus ratio, because many insects are naturally phosphorus-heavy and calcium-poor. Gut-loading with calcium-rich greens (and using calcium dusting) helps shift the overall meal toward the calcium-positive balance reptiles need for healthy bones. This is part of why a gut-loaded, dusted feeder supports bone health while an un-gut-loaded, undusted one contributes to metabolic bone disease over time."}</p>
          <h2>{"Common Mistakes"}</h2>
          <ul>
            <li>{"Buying feeders and offering them immediately with no gut-load period"}</li>
            <li>{"Letting feeders go hungry or dehydrated in storage"}</li>
            <li>{"Relying on dusting alone and skipping gut-loading, or vice versa"}</li>
            <li>{"Gut-loading with nutritionally poor filler foods"}</li>
            <li>{"Forgetting that gut-load and dusting still do not substitute for UVB where the species requires it"}</li>
          </ul>
          <p>{"A simple routine, keep feeders well-fed and hydrated on good produce, then dust at feeding, delivers most of the nutritional benefit for minimal effort."}</p>
          <h2>{"Sources & Further Reading"}</h2>
          <ul>
            <li>{"Mader, D. R. Reptile Medicine and Surgery (Elsevier), nutrition chapters."}</li>
            <li>{"Finke, M. D., nutrient-composition studies of feeder insects."}</li>
            <li>{"Reptiles Magazine, feeder-nutrition references."}</li>
          </ul>
      </div>
    </ArticleLayout>
  )
}
