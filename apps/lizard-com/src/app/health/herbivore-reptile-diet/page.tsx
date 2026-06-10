import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "Herbivorous Reptile Diet — Tortoises, Uromastyx | Lizard.com", description: "How to feed herbivorous reptiles like tortoises and uromastyx. Greens, calcium-to-phosphorus balance, why protein and fruit are limited, and toxic foods.", path: "/health/herbivore-reptile-diet", type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "Feeding Herbivorous Reptiles", description: "Building a healthy herbivorous reptile diet of greens and plants, with calcium balance, protein limits, and foods to avoid.", url: "https://lizard.com/health/herbivore-reptile-diet", imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })

export default function HealthHerbivoreReptileDietPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "Feeding Herbivorous Reptiles", subtitle: "Herbivorous reptiles, including most tortoises, uromastyx, and largely plant-eating lizards, have digestive systems built for high-fiber, low-protein plant matter. Feeding them like omnivores, with too much protein, fruit, or the wrong greens, causes serious long-term disease. This guide covers building a correct herbivore diet around the right greens and plants, with attention to calcium balance and the foods to avoid.", category: "Feeding", authorName: 'Lizard.com Editorial', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Health", href: "/health" }, { name: "Herbivore Reptile Diet", href: "/health/herbivore-reptile-diet" }]}
      schema={schema}
      relatedLinks={[
        { title: 'Reptile Health Hub', href: '/health', category: 'Hub' },
        { title: 'Reptile Feeding Guide', href: '/health/reptile-feeding-guide', category: 'Health' },
        { title: 'Metabolic Bone Disease', href: '/health/metabolic-bone-disease', category: 'Health' },
        { title: 'Russian Tortoise Care', href: '/species/russian-tortoise', category: 'Species' },
        { title: 'Uromastyx Care', href: '/species/uromastyx', category: 'Species' },
        { title: 'Bearded Dragon Care', href: '/species/bearded-dragon', category: 'Species' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>{"Key Points"}</div>
          {[["Base", "Leafy greens + weeds + fiber"], ["Protein", "Low — excess causes disease"], ["Fruit", "Minimal for most"], ["Calcium:phosphorus", "Favor calcium-rich greens"], ["Avoid", "High-oxalate, high-goitrogen excess"], ["Hydration", "Soaks + moisture-rich greens"]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title={"Related Guides"} links={[{ label: "Uromastyx Care", href: "/species/uromastyx" }, { label: "Russian Tortoise Care", href: "/species/russian-tortoise" }, { label: "Reptile Gout", href: "/health/gout-prevention" }, { label: "Calcium & D3 Supplementation", href: "/health/calcium-d3-supplementation" }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={"lizard-health-herbivore-reptile-diet"} ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="health" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
          <p>{"Herbivorous reptiles evolved to extract nutrition from large volumes of fibrous, relatively low-protein plant matter, fermenting it in a specialized gut. Their bodies are not built to process the protein loads or sugar-rich fruit that omnivores tolerate. Feeding a tortoise or uromastyx an inappropriate high-protein or fruit-heavy diet causes a cascade of problems over time, from shell deformity and rapid unhealthy growth to kidney disease and gout. A correct herbivore diet is built around the right leafy greens and plants, fed generously, with everything else kept to a minimum."}</p>
          <h2>{"The Foundation: Leafy Greens and Weeds"}</h2>
          <ul>
            <li>{"Build the diet around fibrous, calcium-favorable leafy greens and edible weeds: dandelion greens, collard greens, mustard greens, turnip greens, and a variety of safe broadleaf weeds and flowers (such as dandelion, hibiscus, and others appropriate to the species)"}</li>
            <li>{"For grazing species like uromastyx and many tortoises, a high proportion of grasses, hay, and weeds suits their high-fiber needs"}</li>
            <li>{"Offer a wide variety rather than a single green, which both balances nutrients and avoids over-concentrating any one compound"}</li>
            <li>{"Wash produce to remove pesticide residue, and prefer organically grown or safely foraged plants where possible"}</li>
          </ul>
          <h2>{"Limit Protein and Fruit"}</h2>

          <h2>{"Calcium-to-Phosphorus Balance"}</h2>
          <p>{"As with insectivores, the calcium-to-phosphorus ratio matters: favor greens that are calcium-rich rather than phosphorus-heavy, and supplement with calcium per the species schedule to support shell and bone health. Adequate vitamin D3, from UVB for diurnal baskers or from diet as appropriate, is needed for that calcium to be used; see our calcium and D3 supplementation guide. A herbivore on poor greens and no calcium support is a candidate for metabolic bone disease and shell deformity."}</p>
          <h2>{"Foods to Limit or Avoid"}</h2>
          <ul>
            <li>{"High-oxalate greens (such as spinach and beet greens) in large amounts, because oxalates bind calcium; use sparingly or avoid as staples"}</li>
            <li>{"Goitrogenic vegetables (such as large amounts of brassicas like kale beyond variety levels) in excess"}</li>
            <li>{"Sugary fruit as a staple for most herbivorous species"}</li>
            <li>{"Animal protein and excessive legumes for strict herbivores"}</li>
            <li>{"Iceberg lettuce and similar low-nutrient greens as a base; they are mostly water with little nutrition"}</li>
            <li>{"Any plant known to be toxic to the species; always verify a plant is safe before feeding"}</li>
          </ul>
          <h2>{"Hydration and Feeding Routine"}</h2>
          <p>{"Many herbivores get much of their water from moisture-rich greens, but most also benefit from a water source and, for species like tortoises, regular soaks to support hydration and help prevent the dehydration that contributes to gout and kidney disease. Feed appropriate volumes for the species and life stage, prioritizing fiber and variety over richness, and resist the urge to offer treats that the animal eagerly eats but that undermine its long-term health. A correct, somewhat austere herbivore diet is one of the best things you can do for these animals’ longevity."}</p>
          <h2>{"Sources & Further Reading"}</h2>
          <ul>
            <li>{"Mader, D. R. Reptile Medicine and Surgery (Elsevier), nutrition and chelonian chapters."}</li>
            <li>{"Journal of Herpetological Medicine and Surgery, herbivore nutrition and gout references."}</li>
            <li>{"Reptiles Magazine, tortoise and uromastyx diet references."}</li>
          </ul>
      </div>
    </ArticleLayout>
  )
}
