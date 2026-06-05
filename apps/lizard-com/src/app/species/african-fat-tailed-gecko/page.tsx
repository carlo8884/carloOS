import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "African Fat-Tailed Gecko Care — Leopard Gecko Cousin | Lizard.com", description: "African fat-tailed geckos are a docile, humidity-loving alternative to leopard geckos. Belly heat, a humid hide, insect diet, and tail-as-fat-store basics.", path: "/species/african-fat-tailed-gecko", type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "African Fat-Tailed Gecko Care Guide", description: "Belly heat, humid hide, feeding, tail fat store, and complete care for Hemitheconyx caudicinctus.", url: "https://lizard.com/species/african-fat-tailed-gecko", imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })

export default function SpeciesAfricanFatTailedGeckoPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "African Fat-Tailed Gecko Care Guide", subtitle: "Hemitheconyx caudicinctus is a ground-dwelling West African gecko closely related to the leopard gecko, with similar care but a need for higher humidity. Calm, slow-moving, and reaching 7 to 9 inches, the African fat-tailed gecko is an excellent docile beginner species whose thick tail, like the leopard gecko’s, is a vital fat reserve.", category: "Species Guide — Beginner", authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Species", href: "/species" }, { name: "African Fat-Tailed Gecko", href: "/species/african-fat-tailed-gecko" }]}
      schema={schema}
      relatedLinks={[
        { title: 'Species Library', href: '/species', category: 'Hub' },
        { title: 'Leopard Gecko Care', href: '/species/leopard-gecko', category: 'Species' },
        { title: 'Crested Gecko Care', href: '/species/crested-gecko', category: 'Species' },
        { title: 'Temperature Guide', href: '/setup/temperature-guide', category: 'Setup' },
        { title: 'Dysecdysis (Stuck Shed)', href: '/health/dysecdysis', category: 'Health' },
        { title: 'Humidity Guide', href: '/setup/humidity-guide', category: 'Setup' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>{"Quick Stats"}</div>
          {[["Scientific name", "Hemitheconyx caudicinctus"], ["Difficulty", "Beginner"], ["Adult size", "7-9 in"], ["Enclosure", "20 gal long minimum"], ["Warm hide floor", "88-92 F belly heat"], ["Cool side", "72-78 F"], ["Humidity", "50-60 percent, higher in humid hide"], ["Diet", "Insectivore"], ["Lifespan", "15-20 years"]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title={"Related Guides"} links={[{ label: "Leopard Gecko Care", href: "/species/leopard-gecko" }, { label: "Humidity Guide", href: "/setup/humidity-guide" }, { label: "Shedding Guide", href: "/husbandry/shedding-guide" }, { label: "Metabolic Bone Disease", href: "/health/metabolic-bone-disease" }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={"lizard-species-african-fat-tailed-gecko"} ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="species" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
          <p>{"The African fat-tailed gecko is the leopard gecko’s humidity-loving cousin: a nocturnal, terrestrial, insectivorous gecko with the same forgiving temperament and similar husbandry, but adapted to the more humid scrub and riverbanks of West Africa. Slow, deliberate, and famously docile, fat-tails are one of the calmest geckos to handle and an ideal first reptile, with the single key difference from leopard geckos being their greater need for ambient and microclimate humidity."}</p>
          <h2>{"Enclosure"}</h2>
          <p>{"A single adult is comfortable in a 20-gallon long (or 30 by 12 inch footprint), with larger always welcome. As a terrestrial species, floor space matters more than height. Provide three hides at minimum: a warm hide, a cool hide, and a humid hide, plus a shallow water dish. A bioactive or naturalistic setup with solid or appropriately moisture-stable substrate works well and helps hold humidity."}</p>
          <h2>{"Belly Heat, Not Basking"}</h2>
          <p>{"Like leopard geckos, fat-tailed geckos are nocturnal and thermoregulate via belly contact with warm substrate inside hides rather than basking under a lamp. Set the warm hide floor to 88 to 92 F using a thermostat-controlled heat mat or a deep heat projector, with a cool side around 72 to 78 F. Never run a heat mat without a thermostat. UVB is optional but low-level UVB is increasingly recommended as beneficial enrichment."}</p>
          <ul>
            <li>{"Warm hide floor: 88-92 F (the critical measurement)"}</li>
            <li>{"Cool side: 72-78 F"}</li>
            <li>{"Ambient humidity: 50-60 percent, with a higher-humidity humid hide"}</li>
            <li>{"UVB: optional, low-level beneficial"}</li>
          </ul>
          <h2>{"The Humid Hide"}</h2>

          <h2>{"Feeding and the Tail"}</h2>
          <p>{"Fat-tailed geckos are strict insectivores. Offer gut-loaded dubia roaches, crickets, and the occasional treat feeder, with prey no wider than the space between the eyes. Dust with calcium at every feeding and a multivitamin per schedule. Feed juveniles daily and adults every two to three days to prevent obesity. The thick tail is the fat reserve and an index of health: a plump tail signals good condition, while a thin, shrinking tail indicates the animal is mobilizing reserves and may be ill or underfed."}</p>
          <h2>{"Handling and Temperament"}</h2>
          <p>{"Fat-tailed geckos are among the most placid geckos and generally tolerate gentle, supported handling well once settled. They can drop their tail (autotomy) under stress, which regrows in an altered form, so handle calmly and never grab the tail. Keep sessions short and let the gecko move at its own pace."}</p>
          <h2>{"Common Health Concerns"}</h2>
          <ul>
            <li>{"Retained shed and digital constriction from inadequate humidity; the most common problem"}</li>
            <li>{"Metabolic bone disease from poor calcium or D3 status"}</li>
            <li>{"Impaction from loose particulate substrate in animals with marginal husbandry"}</li>
            <li>{"Cryptosporidiosis (chronic wasting despite eating); contagious and serious, isolate suspect animals"}</li>
            <li>{"Tail loss from rough handling or stress"}</li>
          </ul>
          <p>{"Chronic shedding problems, wasting, or tremors warrant a reptile-experienced veterinarian."}</p>
          <h2>{"Sources & Further Reading"}</h2>
          <ul>
            <li>{"Mader, D. R. Reptile Medicine and Surgery (Elsevier)."}</li>
            <li>{"Reptiles Magazine, Hemitheconyx caudicinctus husbandry references."}</li>
            <li>{"Association of Reptilian and Amphibian Veterinarians (ARAV), arav.org."}</li>
          </ul>
        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>African Fat-Tailed Gecko — Setup Equipment</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>Browse enclosures, under-tank heating, thermostats, hides, and substrate sized for African fat-tailed gecko care. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/african%20fat-tailed%20gecko%20setup?s=species-african-fat-tailed-gecko" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Fat-Tailed Gecko Setup on Amazon →</a>
            <a href="/go/chewy-brand/african%20fat-tailed%20gecko%20setup?s=species-african-fat-tailed-gecko" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #7bc25c)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>
      </div>
    </ArticleLayout>
  )
}
