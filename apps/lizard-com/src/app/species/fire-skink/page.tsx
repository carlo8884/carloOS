import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, AffiliateDisclosure, CrossPortfolioCard, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "Fire Skink Care Guide — Colorful Burrowing Skink | Lizard.com", description: "Fire skinks are vivid, hardy, burrowing West African lizards. Deep substrate, a humid warm enclosure, UVB, and an insect-based diet make them rewarding.", path: "/species/fire-skink", type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "Fire Skink Care Guide", description: "Deep substrate, humidity, heat, UVB, feeding, and complete care for Lepidothyris fernandi, the fire skink.", url: "https://lizard.com/species/fire-skink", imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })

export default function SpeciesFireSkinkPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "Fire Skink Care Guide", subtitle: "Lepidothyris fernandi, the fire skink, is a stocky, brilliantly colored West African lizard with red, black, white, and gold flanks. Reaching 12 to 15 inches, it is hardy and long-lived but spends much of its time burrowed, so success depends on deep moist substrate, gentle warmth and humidity, and patience while it acclimates.", category: "Species Guide — Intermediate", authorName: 'Lizard.com Editorial', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Species", href: "/species" }, { name: "Fire Skink", href: "/species/fire-skink" }]}
      schema={schema}
      relatedLinks={[
        { title: 'Species Library', href: '/species', category: 'Hub' },
        { title: 'Blue-Tongued Skink Care', href: '/species/blue-tongued-skink', category: 'Species' },
        { title: 'Green Anole Care', href: '/species/green-anole', category: 'Species' },
        { title: 'Substrate Guide', href: '/setup/substrate-guide', category: 'Setup' },
        { title: 'Humidity Guide', href: '/setup/humidity-guide', category: 'Setup' },
        { title: 'Gut-Loading Guide', href: '/health/gut-loading-guide', category: 'Health' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>{"Quick Stats"}</div>
          {[["Scientific name", "Lepidothyris fernandi"], ["Difficulty", "Beginner-Intermediate"], ["Adult size", "12-15 in"], ["Enclosure (adult)", "36x18x18 in floor-focused"], ["Basking surface", "95-100 F"], ["Cool side", "72-78 F"], ["Humidity", "60-75 percent"], ["Substrate depth", "4-6 in burrowable"], ["Diet", "Insectivore"], ["Lifespan", "15-20 years"]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title={"Related Guides"} links={[{ label: "Blue-Tongued Skink Care", href: "/species/blue-tongued-skink" }, { label: "Bioactive Setup", href: "/setup/bioactive-setup" }, { label: "Humidity Guide", href: "/setup/humidity-guide" }, { label: "Gut-Loading Feeders", href: "/health/gut-loading-guide" }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={"lizard-species-fire-skink"} ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="species" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
          <p>{"Fire skinks are terrestrial, semi-fossorial forest-floor lizards from West and Central Africa, named for the fiery red and black coloration along their sides. They are hardy and undemanding once established, but their burrowing habit means a shallow, sparse enclosure leaves them stressed and hidden. Provide deep, slightly moist substrate and dense cover and a fire skink will become a confident, visible animal that surfaces to bask and hunt. Many in the trade are wild-caught, so captive-bred stock is worth seeking for hardiness."}</p>
          <h2>{"Enclosure and Substrate"}</h2>
          <p>{"An adult fire skink needs a floor-focused enclosure of at least 36 by 18 inches; height matters less than ground space for a terrestrial burrower. Furnish with cork bark, leaf litter, hides at both temperature ends, and a water dish. A bioactive setup with live plants suits the species and helps hold humidity."}</p>

          <h2>{"Heat, UVB, and Humidity"}</h2>
          <ul>
            <li>{"Basking surface: 95-100 F over a stable platform or flat rock"}</li>
            <li>{"Cool side: 72-78 F"}</li>
            <li>{"Humidity: 60-75 percent"}</li>
            <li>{"UVB: a low-to-moderate linear T5 (Ferguson Zone 2) is recommended for this partly diurnal basker"}</li>
            <li>{"Mist as needed to maintain humidity, and keep deeper substrate layers lightly damp"}</li>
          </ul>
          <h2>{"Feeding"}</h2>
          <p>{"Fire skinks are insectivores with a strong appetite. Offer a varied rotation of gut-loaded crickets, dubia roaches, and worms, with occasional treats. Adults can take the occasional pinkie mouse for variety. Dust feeders with calcium and a multivitamin per schedule to support bone health alongside UVB. Feed juveniles daily and adults every other day, adjusting for body condition since well-fed captives are prone to obesity."}</p>
          <h2>{"Handling and Temperament"}</h2>
          <p>{"Fire skinks are fast and can be skittish, especially when newly acquired or wild-caught, and may drop their tail if grabbed. With consistent, calm, low-pressure interaction many become tolerant of brief handling, but they are primarily a display species. Allow new animals weeks to settle and feed reliably before attempting handling."}</p>
          <h2>{"Common Health Concerns"}</h2>
          <ul>
            <li>{"Internal parasites in wild-caught animals; a fecal screen is worthwhile for new skinks"}</li>
            <li>{"Metabolic bone disease from inadequate calcium or UVB"}</li>
            <li>{"Respiratory infection if kept too cool or too wet with poor ventilation"}</li>
            <li>{"Stress and hiding from substrate that is too shallow or cover that is too sparse"}</li>
            <li>{"Retained shed in low humidity"}</li>
          </ul>
          <p>{"New wild-caught fire skinks especially benefit from a baseline veterinary fecal exam with an ARAV-member clinic."}</p>
          <h2>{"Sources & Further Reading"}</h2>
          <ul>
            <li>{"Mader, D. R. Reptile Medicine and Surgery (Elsevier)."}</li>
            <li>{"Reptiles Magazine, Lepidothyris fernandi husbandry references."}</li>
            <li>{"Association of Reptilian and Amphibian Veterinarians (ARAV), arav.org."}</li>
          </ul>
        <AffiliateDisclosure variant="inline" siteId="lizard-com" />
        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>Fire Skink — Setup Equipment</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>Browse enclosures, UVB, basking bulbs, thermostats, deep burrowing substrate, and hides sized for fire skink care. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/fire%20skink%20enclosure%20setup?s=species-fire-skink" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Fire Skink Setup on Amazon →</a>
            <a href="/go/chewy-brand/fire%20skink%20enclosure%20setup?s=species-fire-skink" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #7bc25c)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>
      </div>
    </ArticleLayout>
  )
}
