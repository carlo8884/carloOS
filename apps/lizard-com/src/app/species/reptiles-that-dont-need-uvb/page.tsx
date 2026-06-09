import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, AffiliateDisclosure, CrossPortfolioCard, ArticleByline, StockImage } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "Reptiles That Do Not Strictly Need UVB | Lizard.com", description: "Which reptiles can be kept without UVB lighting, why nocturnal species differ, the case for low-level UVB anyway, and which species absolutely need it.", path: "/species/reptiles-that-dont-need-uvb", type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "Reptiles That Do Not Strictly Need UVB", description: "Which reptile species can be kept without UVB, the role of dietary D3, and why providing low-level UVB is still beneficial.", url: "https://lizard.com/species/reptiles-that-dont-need-uvb", imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })

export default function SpeciesReptilesThatDontNeedUvbPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "Reptiles That Do Not Strictly Need UVB", subtitle: "UVB lighting is essential for most diurnal basking reptiles, but a subset of species, mainly nocturnal and crepuscular ones, can be maintained without it when dietary vitamin D3 is provided. This guide explains which reptiles fall into that category, why, the growing case for offering low-level UVB even to them, and which species absolutely must have UVB.", category: "Choosing a Reptile", authorName: 'Lizard.com Editorial', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Species", href: "/species" }, { name: "Reptiles That Do Not Need UVB", href: "/species/reptiles-that-dont-need-uvb" }]}
      schema={schema}
      relatedLinks={[
        { title: 'Species Library', href: '/species', category: 'Hub' },
        { title: 'UVB Lighting Guide', href: '/setup/uvb-lighting-guide', category: 'Setup' },
        { title: 'Leopard Gecko Care', href: '/species/leopard-gecko', category: 'Species' },
        { title: 'Ball Python Care', href: '/species/ball-python', category: 'Species' },
        { title: 'Calcium D3 Supplementation', href: '/health/calcium-d3-supplementation', category: 'Health' },
        { title: 'Metabolic Bone Disease', href: '/health/metabolic-bone-disease', category: 'Health' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>{"Quick Guide"}</div>
          {[["Can skip UVB", "Some nocturnal species"], ["Always need UVB", "Diurnal baskers"], ["Why nocturnal differ", "Low natural UV exposure"], ["If no UVB", "Provide dietary D3"], ["Better practice", "Low-level UVB anyway"], ["Risk if wrong", "Metabolic bone disease"]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title={"Related Guides"} links={[{ label: "UVB Lighting Guide", href: "/setup/uvb-lighting-guide" }, { label: "Calcium & D3 Supplementation", href: "/health/calcium-d3-supplementation" }, { label: "Leopard Gecko Care", href: "/species/leopard-gecko" }, { label: "Crested Gecko Care", href: "/species/crested-gecko" }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={"lizard-species-reptiles-that-dont-need-uvb"} ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="species" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <StockImage manifestKey="lizard-com:category-setup" fallbackKey="lizard-com:hero" aspect="16:9" variant="inline" caption="Crepuscular and nocturnal species rely less on UVB — but still need correct heat and diet." priority />
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
          <p>{"UVB radiation lets reptiles synthesize vitamin D3 in the skin, which they need to absorb and use calcium. For most diurnal, sun-basking reptiles, UVB is non-negotiable, without it they develop metabolic bone disease. But a subset of species evolved in low-light niches and receive little natural UV in the wild; these nocturnal and crepuscular reptiles can be maintained without UVB provided their diet supplies vitamin D3. Understanding this distinction prevents two errors: depriving a basker of essential UVB, and assuming UVB is universally optional."}</p>
          <h2>{"Why Nocturnal Species Are Different"}</h2>

          <h2>{"Species Commonly Kept Without UVB"}</h2>
          <ul>
            <li>{"Leopard gecko and African fat-tailed gecko: nocturnal/crepuscular ground geckos traditionally kept without UVB, with calcium-plus-D3 supplementation"}</li>
            <li>{"Crested gecko, gargoyle gecko, and leachianus gecko: nocturnal arboreal geckos kept on complete powdered diets that supply D3"}</li>
            <li>{"Many nocturnal snakes (ball pythons, corn snakes, sand boas, hognose): snakes obtain D3 largely from whole-prey diets and are routinely kept without UVB"}</li>
            <li>{"Mourning geckos and other nocturnal gecko colonies on complete diets"}</li>
          </ul>
          <h2>{"The Growing Case for Low-Level UVB Anyway"}</h2>
          <p>{"Even for species that can be kept without UVB, current keeper and veterinary thinking increasingly favors providing low-level UVB as enrichment. Research and field observation suggest benefits to immune function, natural behavior, coloration, and overall welfare, and low-output UVB (appropriate to a low Ferguson Zone) poses little risk when set up correctly. Many experienced keepers now offer a low-level UVB source to nocturnal species that historically went without, treating it as beneficial rather than strictly required. See our UVB lighting guide for setup specifics."}</p>
          <h2>{"Species That Absolutely Require UVB"}</h2>
          <ul>
            <li>{"Bearded dragons and other diurnal desert baskers"}</li>
            <li>{"Uromastyx and herbivorous baskers"}</li>
            <li>{"Chameleons (veiled, panther, and others)"}</li>
            <li>{"Chinese water dragons and other diurnal arboreal lizards"}</li>
            <li>{"Most diurnal lizards, tortoises, and day-active species; for these, UVB is essential and dietary D3 alone is not a reliable substitute"}</li>
          </ul>
          <h2>{"If You Keep a Species Without UVB"}</h2>
          <p>{"Provide vitamin D3 through the diet, calcium with D3 on a measured schedule for insectivores, or a complete diet that already contains D3 for species like crested geckos, and never rely on calcium alone, which the body cannot use without D3. Watch for any signs of metabolic bone disease (soft jaw, deformity, tremors) as a warning that the calcium-and-D3 balance is off. And consider adding low-level UVB for the welfare benefits. When unsure whether a species needs UVB, default to providing it at an appropriate level; the risk of inadequate UVB far outweighs the modest cost of a correct setup."}</p>
          <AffiliateDisclosure variant="inline" siteId="lizard-com" />
        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
            <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>Adding Low-Level UVB</div>
            <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>If you decide to add low-level UVB for the welfare benefits described above, a low-percentage T5 HO bulb is the standard choice. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission never influences the husbandry guidance above.</p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a href="/go/amazon-brand/low%20percent%20reptile%20UVB%20bulb?s=species-reptiles-that-dont-need-uvb" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop UVB Bulbs on Amazon →</a>
              <a href="/reviews/best-uvb-bulbs" style={{ display: 'inline-block', padding: '9px 16px', border: '1px solid var(--brand-border-strong, #3a4358)', color: 'var(--brand-white)', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Our UVB bulb reviews →</a>
              <a href="/tools/uvb-distance-calculator" style={{ display: 'inline-block', padding: '9px 16px', border: '1px solid var(--brand-border-strong, #3a4358)', color: 'var(--brand-white)', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>UVB distance calculator →</a>
            </div>
          </div>

          <h2>{"Sources & Further Reading"}</h2>
          <ul>
            <li>{"Baines, F. M., et al., Ferguson Zones and UV requirements of reptiles."}</li>
            <li>{"Mader, D. R. Reptile Medicine and Surgery (Elsevier), metabolic-bone-disease chapters."}</li>
            <li>{"Reptiles Magazine and ARAV husbandry references on UVB."}</li>
          </ul>
      </div>
    </ArticleLayout>
  )
}
