import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "Screen vs PVC vs Glass Reptile Enclosures | Lizard.com", description: "Screen, glass, and PVC reptile enclosures compared on humidity retention, heat efficiency, cost, and which species each suits best.", path: "/setup/screen-vs-pvc-enclosure", type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "Screen vs PVC vs Glass Reptile Enclosures", description: "Comparison of screen, glass, and PVC reptile enclosures by humidity, heat retention, durability, and species fit.", url: "https://lizard.com/setup/screen-vs-pvc-enclosure", imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })

export default function SetupScreenVsPvcEnclosurePage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "Screen vs PVC vs Glass Reptile Enclosures", subtitle: "The material your enclosure is built from determines how well it holds humidity and heat, how it ventilates, and how easy it is to maintain. The three dominant options, all-screen, glass, and PVC (or sealed wood), each suit different species and climates. Choosing wrong forces you to fight your enclosure to maintain the conditions your animal needs.", category: "Enclosure Setup", authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Setup", href: "/setup" }, { name: "Screen vs PVC Enclosures", href: "/setup/screen-vs-pvc-enclosure" }]}
      schema={schema}
      relatedLinks={[
        { title: 'Setup Hub', href: '/setup', category: 'Hub' },
        { title: 'Enclosure Size Calculator', href: '/tools/enclosure-size-calculator', category: 'Tools' },
        { title: 'Best Reptile Terrariums', href: '/reviews/best-reptile-terrariums', category: 'Reviews' },
        { title: 'Terrarium Size Guide', href: '/setup/terrarium-size-guide', category: 'Setup' },
        { title: 'Humidity Guide', href: '/setup/humidity-guide', category: 'Setup' },
        { title: 'Temperature Guide', href: '/setup/temperature-guide', category: 'Setup' },
        { title: 'Bioactive Setup Guide', href: '/setup/bioactive-setup', category: 'Setup' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>{"Quick Comparison"}</div>
          {[["Screen", "Max ventilation, dries out fast"], ["Glass", "Mid ventilation, moderate humidity"], ["PVC/sealed wood", "Holds humidity + heat best"], ["Arid species", "Glass or PVC fine"], ["Humid species", "PVC favored"], ["Chameleons", "Screen (or hybrid) often used"]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title={"Related Guides"} links={[{ label: "Enclosure Size Guide", href: "/setup/terrarium-size-guide" }, { label: "Humidity Guide", href: "/setup/humidity-guide" }, { label: "Temperature Guide", href: "/setup/temperature-guide" }, { label: "Best Reptile Terrariums", href: "/reviews/best-reptile-terrariums" }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={"lizard-setup-screen-vs-pvc-enclosure"} ctaText="Download Free" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
          <p>{"Enclosure material is a humidity and heat decision before it is an aesthetic one. A high-humidity rainforest species fights a losing battle in an all-screen cage, while a desert species can develop respiratory problems in a poorly ventilated solid box kept too damp. Matching the material to the species’ climate makes maintaining correct conditions effortless; mismatching it means constant misting, constant adjustment, and chronic husbandry stress. Here is how the three main options compare."}</p>
          <h2>{"All-Screen Enclosures"}</h2>
          <ul>
            <li>{"Maximum ventilation and airflow, which prevents stagnant, overly humid air"}</li>
            <li>{"Loses humidity and heat very quickly, requiring frequent misting and careful heat placement"}</li>
            <li>{"Lightweight and inexpensive, often used for chameleons and other species that need constant fresh air"}</li>
            <li>{"Poor choice for high-humidity species in dry homes, where it dries out far too fast"}</li>
            <li>{"Heat lamps sit above the mesh top; basking surface temperatures need careful measurement"}</li>
          </ul>
          <h2>{"Glass Terrariums"}</h2>
          <ul>
            <li>{"Front-opening glass terrariums (Exo Terra style) offer good visibility and moderate humidity retention with a screen top for ventilation"}</li>
            <li>{"Hold humidity better than all-screen but worse than solid PVC; a screen top still vents moisture"}</li>
            <li>{"Heavy, and glass conducts heat, so the cool side can run cooler in a cold room"}</li>
            <li>{"A versatile middle ground suitable for many beginner species and bioactive setups"}</li>
            <li>{"Glare and reflection can stress some animals; backgrounds help"}</li>
          </ul>
          <h2>{"PVC and Sealed Wood Enclosures"}</h2>
          <ul>
            <li>{"Excellent humidity and heat retention thanks to insulating solid walls, making them ideal for high-humidity tropical species"}</li>
            <li>{"Energy-efficient: they hold heat, so heat sources work less and the gradient is stable"}</li>
            <li>{"Lightweight (PVC) or sturdy (sealed/melamine wood), durable, and easy to clean; controllable vents tune airflow"}</li>
            <li>{"Higher cost, especially for large custom builds, and less of the panoramic visibility glass offers"}</li>
            <li>{"The default professional choice for snakes, large lizards, and humidity-dependent species"}</li>
          </ul>
          <h2>{"Matching Material to Species"}</h2>
          <p>{"Use the species’ native humidity needs as the deciding factor:"}</p>
          <ul>
            <li>{"High-humidity species (Chinese water dragons, many tropical geckos and snakes): PVC or sealed wood, with adjustable ventilation"}</li>
            <li>{"Arid species (leopard geckos, uromastyx, bearded dragons): glass or PVC both work; ventilation prevents excess humidity"}</li>
            <li>{"High-airflow species (most chameleons): all-screen or a hybrid (screen front and top with solid sides) to keep air moving while slowing humidity loss"}</li>
            <li>{"Bioactive builds: PVC or glass with a sealed, waterproofed base to protect against constant substrate moisture"}</li>
          </ul>
          <h2>{"Ventilation and the Humidity Balance"}</h2>
          <p>{"Whatever the material, the goal is the right humidity with enough air exchange to prevent stagnant, mold-prone conditions. Solid enclosures with too little ventilation can become breeding grounds for respiratory pathogens, while screen enclosures with too much can never hold tropical humidity. Adjustable vents, partial top coverage, and substrate choice let you fine-tune the balance for the species you keep."}</p>
          <h2>{"Sources & Further Reading"}</h2>
          <ul>
            <li>{"Reptiles Magazine, enclosure-material and husbandry references."}</li>
            <li>{"Mader, D. R. Reptile Medicine and Surgery (Elsevier), environmental husbandry chapters."}</li>
            <li>{"Manufacturer specifications for common PVC and glass terrarium lines."}</li>
          </ul>
      </div>
    </ArticleLayout>
  )
}
