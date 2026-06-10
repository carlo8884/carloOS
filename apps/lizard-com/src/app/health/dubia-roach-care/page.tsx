import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "Dubia Roach Care — Keeping a Feeder Colony | Lizard.com", description: "How to keep and breed Dubia roaches as feeder insects. Colony setup, heat, gut-loading, why they cannot infest your home, and harvesting safely.", path: "/health/dubia-roach-care", type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "Dubia Roach Care and Colony Keeping", description: "Setting up and maintaining a Dubia roach (Blaptica dubia) feeder colony, including heat, diet, breeding, and harvesting.", url: "https://lizard.com/health/dubia-roach-care", imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })

export default function HealthDubiaRoachCarePage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "Dubia Roach Care and Colony Keeping", subtitle: "Dubia roaches (Blaptica dubia) are the premier feeder insect for many reptile keepers: nutritious, quiet, odorless compared to crickets, unable to climb smooth surfaces or infest a typical home, and easy to breed into a self-sustaining colony. Keeping your own colony cuts costs and guarantees well-gut-loaded feeders on demand. This guide covers setup, care, and harvesting.", category: "Feeding", authorName: 'Lizard.com Editorial', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Health", href: "/health" }, { name: "Dubia Roach Care", href: "/health/dubia-roach-care" }]}
      schema={schema}
      relatedLinks={[
        { title: 'Reptile Health Hub', href: '/health', category: 'Hub' },
        { title: 'Feeder Insects Compared', href: '/health/feeder-insects-compared', category: 'Health' },
        { title: 'Gut-Loading Guide', href: '/health/gut-loading-guide', category: 'Health' },
        { title: 'Reptile Feeding Guide', href: '/health/reptile-feeding-guide', category: 'Health' },
        { title: 'Calcium & D3 Supplementation', href: '/health/calcium-d3-supplementation', category: 'Health' },
        { title: 'Bearded Dragon Care', href: '/species/bearded-dragon', category: 'Species' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>{"Colony Basics"}</div>
          {[["Species", "Blaptica dubia"], ["Can they infest?", "No — cannot climb smooth/cold US homes"], ["Breeding temp", "Warm (mid-80s to ~90 F)"], ["Reproduction", "Live-bearing"], ["Diet", "Greens, veg, dry grain-based chow"], ["Smell", "Low if maintained"], ["Best for", "Most insectivorous reptiles"]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title={"Related Guides"} links={[{ label: "Feeder Insects Compared", href: "/health/feeder-insects-compared" }, { label: "Gut-Loading Feeders", href: "/health/gut-loading-guide" }, { label: "Bearded Dragon Care", href: "/species/bearded-dragon" }, { label: "Leopard Gecko Care", href: "/species/leopard-gecko" }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={"lizard-health-dubia-roach-care"} ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="health" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
          <p>{"Dubia roaches have become the feeder of choice for a large share of reptile keepers, and for good reason. They offer an excellent protein-to-fat ratio with a soft body and high meat-to-shell ratio, they are quiet and far less smelly than crickets, they live a long time without the rapid die-off crickets suffer, and, critically, they cannot climb smooth vertical surfaces and cannot establish in typical temperate homes, so an escapee will not start an infestation. A modest colony quickly becomes self-sustaining, giving you a steady supply of pre-gut-loaded feeders."}</p>
          <h2>{"Why Dubia Cannot Infest Your Home"}</h2>

          <h2>{"Colony Setup"}</h2>
          <ul>
            <li>{"A smooth-walled, well-ventilated plastic bin with a secure lid; Dubia cannot climb the smooth sides, so a tall bin needs no escape-proofing beyond that"}</li>
            <li>{"Stacked egg-crate (cardboard flats) standing vertically to maximize surface area and hiding space"}</li>
            <li>{"Heat to keep the colony in the warm breeding range (roughly the mid-80s to around 90 F); a heat source on a thermostat, applied to one side, works well"}</li>
            <li>{"No substrate is needed; frass (waste) is sifted out periodically"}</li>
            <li>{"Low light, since they prefer dark, sheltered conditions"}</li>
          </ul>
          <h2>{"Feeding and Gut-Loading the Colony"}</h2>
          <p>{"Feed the colony the same nutritious foods you would use to gut-load: fresh leafy greens, vegetables, some fruit for moisture, and a dry grain-based chow or commercial roach/gut-load diet. Provide water via water crystals or a moisture-rich produce rather than an open dish that can drown them and mold. A well-fed colony is, in effect, continuously gut-loaded, so feeders harvested at any time carry good nutrition; still dust with calcium and a multivitamin per schedule before offering."}</p>
          <h2>{"Breeding"}</h2>
          <p>{"Dubia are live-bearing: females carry an egg case internally and give birth to live nymphs, which is part of why colonies build steadily once warm. Maintain warmth, good food, and a sex ratio with enough males, and the colony reproduces on its own. Start with a mix of adults and nymphs and allow several months for a new colony to reach productive size before harvesting heavily; harvesting too fast from a young colony can crash it."}</p>
          <h2>{"Harvesting and Use"}</h2>
          <ul>
            <li>{"Harvest appropriately sized nymphs for your reptile, leaving enough breeding adults and growing nymphs to sustain the colony"}</li>
            <li>{"Match feeder size to the species (for many lizards, no wider than the space between the eyes)"}</li>
            <li>{"Dust harvested feeders with calcium (and a multivitamin per schedule) just before feeding"}</li>
            <li>{"Keep the bin clean, sift frass periodically, and remove uneaten produce before it molds"}</li>
            <li>{"A maintained colony is low-odor; a neglected, overcrowded, or damp bin is the usual cause of smell"}</li>
          </ul>
          <p>{"For a modest setup cost and minimal ongoing effort, a Dubia colony pays for itself and ensures you always have nutritious feeders, a worthwhile upgrade for anyone keeping insectivorous reptiles long term."}</p>
          <h2>{"Sources & Further Reading"}</h2>
          <ul>
            <li>{"Finke, M. D., feeder-insect nutrition studies."}</li>
            <li>{"Reptiles Magazine, Dubia roach colony husbandry references."}</li>
            <li>{"Entomological references on Blaptica dubia biology."}</li>
          </ul>
      </div>
    </ArticleLayout>
  )
}
