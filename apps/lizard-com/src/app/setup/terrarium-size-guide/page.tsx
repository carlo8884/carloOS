import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "Reptile Enclosure Size Guide — Minimums by Species | Lizard.com", description: "How big a reptile enclosure should be, why bigger is better, the myth that snakes prefer cramped tanks, and minimum footprints for popular species.", path: "/setup/terrarium-size-guide", type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "Reptile Enclosure Size Guide", description: "Minimum enclosure sizes by species, floor space versus height, and why undersized housing causes stress and disease.", url: "https://lizard.com/setup/terrarium-size-guide", imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })

export default function SetupTerrariumSizeGuidePage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "Reptile Enclosure Size Guide", subtitle: "Enclosure size is one of the most consequential and most misunderstood husbandry decisions. The old advice that snakes feel safest in tiny tubs and lizards do fine in small tanks has given way to a clear consensus: appropriately large, well-furnished enclosures support natural behavior, thermoregulation, and welfare. This guide covers how to size an enclosure and minimum footprints for popular species.", category: "Enclosure Setup", authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'June 2026', readTime: "10 min" }}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Setup", href: "/setup" }, { name: "Enclosure Size Guide", href: "/setup/terrarium-size-guide" }]}
      schema={schema}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>{"Sizing Rules"}</div>
          {[["Terrestrial species", "Prioritize floor space"], ["Arboreal species", "Prioritize height"], ["Snake length rule", "Perimeter >= snake length"], ["Bigger", "Almost always better"], ["Cramped tank myth", "Discredited"], ["Key need", "Room for a thermal gradient"]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title={"Related Guides"} links={[{ label: "Temperature Guide", href: "/setup/temperature-guide" }, { label: "Screen vs PVC Enclosures", href: "/setup/screen-vs-pvc-enclosure" }, { label: "Bioactive Setup", href: "/setup/bioactive-setup" }, { label: "Best Reptile Terrariums", href: "/reviews/best-reptile-terrariums" }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={"lizard-setup-terrarium-size-guide"} ctaText="Download Free" />
      </>}
    >
      <div className="carloOS-article">
          <p>{"A reptile enclosure has to do more than contain the animal; it has to hold a working thermal gradient, provide cover and enrichment, and give the animal enough room to express natural behaviors like climbing, burrowing, foraging, and exploring. Undersized enclosures make all of this difficult: a short tank cannot maintain a basking-to-cool gradient, a cramped cage offers no exercise, and a barren small box leaves the animal chronically stressed. Modern husbandry favors generous, heavily furnished enclosures over the minimal tanks of decades past."}</p>
          <h2>{"The \"Snakes Like It Small\" Myth"}</h2>

          <h2>{"How to Size an Enclosure"}</h2>
          <ul>
            <li>{"Match the layout to the animal: terrestrial species (most skinks, terrestrial geckos, ground snakes, tortoises) need floor area; arboreal species (chameleons, arboreal geckos, water dragons, arboreal snakes) need height and vertical structure"}</li>
            <li>{"A common snake guideline: the enclosure perimeter (or at least length plus width) should equal or exceed the snake’s total length, so it can fully stretch out; many keepers exceed this substantially"}</li>
            <li>{"Ensure the longest dimension is long enough to establish a real warm-to-cool gradient with distinct zones"}</li>
            <li>{"Bigger is almost always better as long as the animal still has adequate hides and cover so the space does not feel exposed"}</li>
          </ul>
          <p>{"To get a calculated number from your animal's adult body length and locomotor habit, use the "}<Link href="/tools/enclosure-size-calculator" className="text-brand-primary hover:underline">{"Enclosure Size Calculator"}</Link>{" — it outputs recommended minimum L x W x H, floor footprint in sq ft, and volume in gallons and liters."}</p>
          <h2>{"Minimum Footprints for Popular Species"}</h2>
          <p>{"These are widely cited practical minimums for a single adult; larger is encouraged. Always confirm against a current species-specific care sheet."}</p>
          <ul>
            <li>{"Leopard gecko / African fat-tailed gecko: 20-gallon long (about 36x18 in) floor-focused"}</li>
            <li>{"Crested gecko (arboreal): 18x18x24 in tall"}</li>
            <li>{"Bearded dragon: 4x2x2 ft, larger preferred"}</li>
            <li>{"Ball python: 4x2x2 ft for an adult"}</li>
            <li>{"Corn snake: 4x2x2 ft for an adult"}</li>
            <li>{"Blue-tongue skink: 4x2x2 ft floor-focused"}</li>
            <li>{"Chinese water dragon (arboreal): 4x2x4 ft, taller better"}</li>
            <li>{"Large monitors and tegus: room-scale custom enclosures of 8x4x4 ft or larger"}</li>
          </ul>
          <h2>{"Signs an Enclosure Is Too Small"}</h2>
          <ul>
            <li>{"Glass-surfing or pacing the walls (common in undersized water dragons and bearded dragons)"}</li>
            <li>{"Inability to maintain distinct warm and cool zones; the whole enclosure trends to one temperature"}</li>
            <li>{"No room for the animal to fully stretch, climb, or burrow"}</li>
            <li>{"Chronic stress signs: hiding constantly, poor appetite, dull coloration, or aggression"}</li>
          </ul>
          <h2>{"Substrate Depth Counts as Space Too"}</h2>
          <p>{"For burrowing species, vertical substrate depth is part of usable habitat. A fire skink, sand boa, or hognose with only an inch of substrate has effectively lost a dimension of its enclosure. Factor in several inches of diggable substrate for fossorial species when planning the build, and remember that arboreal species need their vertical space filled with branches and plants rather than left empty."}</p>
          <h2>{"Sources & Further Reading"}</h2>
          <ul>
            <li>{"Mader, D. R. Reptile Medicine and Surgery (Elsevier), husbandry and welfare chapters."}</li>
            <li>{"Warwick, C., et al., reptile welfare and enclosure-size literature."}</li>
            <li>{"Reptiles Magazine and ARAV husbandry references."}</li>
          </ul>
      </div>
    </ArticleLayout>
  )
}
