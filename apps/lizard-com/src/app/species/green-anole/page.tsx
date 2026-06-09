import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, AffiliateDisclosure, CrossPortfolioCard, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "Green Anole Care Guide — Bioactive Arboreal Lizard | Lizard.com", description: "Green anoles are tiny diurnal arboreal lizards needing UVB, daily misting, and a planted vertical enclosure. Why they are not a throwaway beginner pet.", path: "/species/green-anole", type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "Green Anole Care Guide", description: "UVB, misting, planted vertical enclosure, feeding, and complete care for Anolis carolinensis, the green anole.", url: "https://lizard.com/species/green-anole", imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })

export default function SpeciesGreenAnolePage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "Green Anole Care Guide", subtitle: "Anolis carolinensis is a small (5 to 8 inch) diurnal, arboreal lizard native to the southeastern United States, able to shift color from bright green to brown. Often sold cheaply as a beginner or class pet, it actually needs UVB, high humidity, live insect prey, and a tall planted enclosure to thrive, and is best kept as a display animal rather than a handling pet.", category: "Species Guide — Intermediate", authorName: 'Lizard.com Editorial', publishedAt: 'June 2026', readTime: "10 min" }}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Species", href: "/species" }, { name: "Green Anole", href: "/species/green-anole" }]}
      schema={schema}
      relatedLinks={[
        { title: 'Species Library', href: '/species', category: 'Hub' },
        { title: 'Day Gecko Care', href: '/species/day-gecko', category: 'Species' },
        { title: 'Mourning Gecko Care', href: '/species/mourning-gecko', category: 'Species' },
        { title: 'Bioactive Setup', href: '/setup/bioactive-setup', category: 'Setup' },
        { title: 'Humidity Guide', href: '/setup/humidity-guide', category: 'Setup' },
        { title: 'Feeder Insects Compared', href: '/health/feeder-insects-compared', category: 'Health' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>{"Quick Stats"}</div>
          {[["Scientific name", "Anolis carolinensis"], ["Difficulty", "Intermediate"], ["Adult size", "5-8 in including tail"], ["Enclosure", "18x18x24 in tall, planted"], ["Basking spot", "85-90 F"], ["Ambient", "75-82 F"], ["Humidity", "60-70 percent, daily misting"], ["UVB", "Required (Ferguson Zone 2-3)"], ["Diet", "Small live insects"], ["Lifespan", "4-7 years"]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title={"Related Guides"} links={[{ label: "Crested Gecko Care", href: "/species/crested-gecko" }, { label: "UVB Lighting Guide", href: "/setup/uvb-lighting-guide" }, { label: "Humidity Guide", href: "/setup/humidity-guide" }, { label: "Gut-Loading Feeders", href: "/health/gut-loading-guide" }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={"lizard-species-green-anole"} ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="species" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
          <p>{"The green anole is North America’s only native anole and a familiar sight on fences and shrubs across the Gulf states. Its low purchase price and wide availability create a persistent myth that it is an easy, disposable beginner reptile. In reality, the anoles sold in chain stores are usually wild-caught, stressed, and dehydrated, and they require attentive husbandry, especially UVB and humidity, to live out their natural 4 to 7 year span. They are fast, delicate, and prone to stress, so they reward keepers who treat them as a planted-vivarium display species."}</p>
          <h2>{"Enclosure"}</h2>
          <p>{"Anoles are arboreal and need vertical space and dense cover. A single anole needs an 18 by 18 by 24 inch (or larger) front-opening terrarium oriented for height. A pair or trio (one male, never two males, with one or two females) needs proportionally more. Furnish heavily with branches, cork bark, and live or artificial broad-leaf plants (pothos, philodendron, ficus) to provide climbing structure, sight breaks, and surfaces that hold misting droplets the anoles drink from."}</p>
          <h2>{"Lighting, Heat, and Humidity"}</h2>

          <ul>
            <li>{"Basking surface: 85-90 F"}</li>
            <li>{"Ambient: 75-82 F, dropping a few degrees at night"}</li>
            <li>{"Humidity: 60-70 percent, achieved by misting heavily once or twice daily"}</li>
            <li>{"Anoles rarely drink from standing water; they lap droplets from leaves after misting, so misting is non-negotiable hydration, not just humidity"}</li>
          </ul>
          <h2>{"Feeding"}</h2>
          <p>{"Green anoles are insectivores that hunt small, moving prey. Offer appropriately small crickets, fruit flies, small dubia nymphs, and occasional waxworms as a treat. Prey should be no longer than the width of the anole’s head. Feed adults every other day, juveniles daily. Gut-load all feeders for at least 24 hours before offering, and dust with calcium (and a multivitamin per schedule) to support bone health alongside UVB. See our gut-loading guide for feeder nutrition detail."}</p>
          <h2>{"Behavior and Handling"}</h2>
          <p>{"Males are territorial and perform push-up displays and dewlap (throat-fan) extensions to claim space and court females; never house two males together, as fighting and chronic stress result. Anoles are not a handling species: they are quick, easily stressed, and may drop their tail (autotomy) if grabbed. Observe them in a well-planted vivarium rather than handling them. A stressed anole stays brown, hides, and stops eating; a content one basks openly and shows green coloration."}</p>
          <h2>{"Common Health Concerns"}</h2>
          <ul>
            <li>{"Metabolic bone disease from missing or expired UVB and inadequate calcium; the most common preventable killer"}</li>
            <li>{"Dehydration from inadequate misting, signaled by sunken eyes and wrinkled skin"}</li>
            <li>{"Chronic stress and anorexia in wild-caught animals; captive-bred stock acclimates far better"}</li>
            <li>{"Internal parasites, common in wild-caught individuals; a fecal exam by a reptile vet is worthwhile for new anoles"}</li>
          </ul>
          <p>{"Because so many anoles are wild-caught and parasitized, a baseline fecal screen with an ARAV-member veterinarian is a sensible first step for a new animal."}</p>
          <h2>{"Sources & Further Reading"}</h2>
          <ul>
            <li>{"Mader, D. R. Reptile Medicine and Surgery (Elsevier)."}</li>
            <li>{"Baines, F. M., et al., Ferguson Zone UV-index guidance for reptile lighting."}</li>
            <li>{"Reptiles Magazine, Anolis carolinensis husbandry references."}</li>
          </ul>
        <AffiliateDisclosure variant="inline" siteId="lizard-com" />
        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>Green Anole — Setup Equipment</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>Browse tall planted enclosures, UVB, basking bulbs, thermostats, foggers, and substrate sized for green anole care. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/green%20anole%20enclosure%20setup?s=species-green-anole" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Green Anole Setup on Amazon →</a>
            <a href="/go/chewy-brand/green%20anole%20enclosure%20setup?s=species-green-anole" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #7bc25c)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>
      </div>
    </ArticleLayout>
  )
}
