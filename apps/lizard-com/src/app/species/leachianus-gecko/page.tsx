import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, AffiliateDisclosure, CrossPortfolioCard, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "Leachianus Gecko Care Guide — Largest Gecko | Lizard.com", description: "The New Caledonian giant gecko is the largest living gecko. Tall enclosures, moderate temps, a CGD-based diet, and why they must be housed alone.", path: "/species/leachianus-gecko", type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "Leachianus Gecko Care Guide", description: "Enclosure, temperature, crested-gecko-diet feeding, solitary housing, and care for Rhacodactylus leachianus.", url: "https://lizard.com/species/leachianus-gecko", imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })

export default function SpeciesLeachianusGeckoPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "Leachianus Gecko Care Guide", subtitle: "Rhacodactylus leachianus, the New Caledonian giant gecko, is the largest gecko species alive today, reaching 12 to 14 inches and a heavy build. Long-lived, vocal, and intelligent, leachies are a rewarding arboreal species for keepers who can provide a tall enclosure, avoid overheating, and respect their need to be housed alone.", category: "Species Guide — Intermediate", authorName: 'Lizard.com Editorial', publishedAt: 'June 2026', readTime: "10 min" }}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Species", href: "/species" }, { name: "Leachianus Gecko", href: "/species/leachianus-gecko" }]}
      schema={schema}
      relatedLinks={[
        { title: 'Species Library', href: '/species', category: 'Hub' },
        { title: 'Gargoyle Gecko Care', href: '/species/gargoyle-gecko', category: 'Species' },
        { title: 'Crested Gecko Care', href: '/species/crested-gecko', category: 'Species' },
        { title: 'Mossy Leaf-Tail Gecko', href: '/species/mossy-leaf-tail-gecko', category: 'Species' },
        { title: 'Humidity Guide', href: '/setup/humidity-guide', category: 'Setup' },
        { title: 'Feeder Insects Compared', href: '/health/feeder-insects-compared', category: 'Health' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>{"Quick Stats"}</div>
          {[["Scientific name", "Rhacodactylus leachianus"], ["Difficulty", "Intermediate"], ["Adult size", "12-14 in, heavy-bodied"], ["Enclosure (adult)", "18x18x36 in tall minimum"], ["Ambient", "72-78 F"], ["Max temp", "Keep below 82 F"], ["Humidity", "60-75 percent"], ["Diet", "Powdered gecko diet + insects"], ["Housing", "Solitary only"], ["Lifespan", "20+ years"]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title={"Related Guides"} links={[{ label: "Crested Gecko Care", href: "/species/crested-gecko" }, { label: "Gargoyle Gecko Care", href: "/species/gargoyle-gecko" }, { label: "Humidity Guide", href: "/setup/humidity-guide" }, { label: "Bioactive Setup", href: "/setup/bioactive-setup" }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={"lizard-species-leachianus-gecko"} ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="species" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
          <p>{"Leachianus geckos are arboreal New Caledonian giants prized for their size, longevity (often well over 20 years), and the distinctive growling and barking vocalizations they use to defend territory. Like their crested and gargoyle gecko relatives, they thrive at room-ish temperatures, eat a convenient commercial powdered diet, and do not require UVB to survive, making them comparatively low-fuss for an animal of their impressive size. The one firm rule that beginners overlook is that adult leachies are highly territorial and must be housed individually outside supervised breeding."}</p>
          <h2>{"Why Leachies Must Be Housed Alone"}</h2>

          <h2>{"Enclosure"}</h2>
          <p>{"As large arboreal geckos, leachies need vertical space. A single adult needs a minimum of 18 by 18 by 36 inches, with larger front-opening enclosures preferred. Furnish with thick cork rounds, sturdy branches, and cover; leachies wedge into vertical hollows and hides during the day. A bioactive planted setup suits them well and helps buffer humidity. Provide a water dish and mist to maintain humidity and provide drinking droplets."}</p>
          <h2>{"Temperature — Avoid Overheating"}</h2>
          <p>{"Leachianus geckos come from a mild island climate and are sensitive to heat. Keep ambient temperatures around 72 to 78 F and never let the enclosure exceed roughly 82 F; sustained high temperatures are stressful and can be fatal. In most homes they need no supplemental heat, and many keepers find cooling (room air conditioning) a bigger concern than heating. A mild night drop is natural. UVB is not required, though low-level UVB can be offered as enrichment."}</p>
          <ul>
            <li>{"Ambient: 72-78 F"}</li>
            <li>{"Hard ceiling: keep below 82 F"}</li>
            <li>{"Humidity: 60-75 percent with misting and good substrate"}</li>
            <li>{"UVB: optional, low-level only"}</li>
          </ul>
          <h2>{"Feeding"}</h2>
          <p>{"Leachianus geckos thrive on a complete powdered gecko diet (the same Pangea/Repashy-style products used for crested geckos) mixed with water to a paste and offered in a dish a few times per week. This balanced diet covers their needs without supplementation. Offer appropriately sized gut-loaded insects (dubia, crickets) dusted with calcium as an enrichment supplement one to two times weekly, especially for growing or breeding animals. Adults eat readily and can become obese, so monitor body condition."}</p>
          <h2>{"Handling and Temperament"}</h2>
          <p>{"Leachies range from docile to defensive and may bite hard when stressed (their jaws are powerful). They are best regarded as a display and occasional-handling species; let the animal walk onto your hand rather than grabbing it, and keep sessions calm and brief. Many leachies tolerate gentle handling well once they trust a keeper, but individual temperament varies widely."}</p>
          <h2>{"Common Health Concerns"}</h2>
          <ul>
            <li>{"Heat stress from temperatures above the species range; the leading husbandry error"}</li>
            <li>{"Bite injuries from inappropriate cohabitation"}</li>
            <li>{"Metabolic bone disease if fed an unbalanced diet without a complete gecko food"}</li>
            <li>{"Impaction from loose particulate substrate ingested while feeding; feed from a dish"}</li>
            <li>{"Retained shed; provide adequate humidity and a humid retreat"}</li>
          </ul>
          <p>{"Bite wounds, weight loss, or signs of heat stress warrant an ARAV-member reptile veterinarian."}</p>
          <h2>{"Sources & Further Reading"}</h2>
          <ul>
            <li>{"de Vosjoli, P., et al., Rhacodactylus husbandry references."}</li>
            <li>{"Mader, D. R. Reptile Medicine and Surgery (Elsevier)."}</li>
            <li>{"Pangea / Repashy complete gecko-diet formulation notes."}</li>
          </ul>
        <AffiliateDisclosure variant="inline" siteId="lizard-com" />
        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>Leachianus Gecko — Setup Equipment</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>Browse tall arboreal enclosures, low-level UVB, thermostats, foggers, substrate, and complete gecko diet sized for leachianus gecko care. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/leachianus%20gecko%20enclosure%20setup?s=species-leachianus-gecko" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Leachianus Setup on Amazon →</a>
            <a href="/go/chewy-brand/leachianus%20gecko%20enclosure%20setup?s=species-leachianus-gecko" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #7bc25c)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>
      </div>
    </ArticleLayout>
  )
}
