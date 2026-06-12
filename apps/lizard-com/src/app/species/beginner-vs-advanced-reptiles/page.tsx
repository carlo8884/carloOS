import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard, ArticleByline, StockImage } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "Beginner vs Advanced Reptiles — Difficulty Tiers | Lizard.com", description: "What makes a reptile beginner, intermediate, or advanced, the husbandry factors that raise difficulty, and why some popular reptiles are not for newcomers.", path: "/species/beginner-vs-advanced-reptiles", type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "Beginner vs Advanced Reptiles", description: "The factors that determine reptile care difficulty, and how popular species sort into beginner, intermediate, and advanced tiers.", url: "https://lizard.com/species/beginner-vs-advanced-reptiles", imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })

export default function SpeciesBeginnerVsAdvancedReptilesPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "Beginner vs Advanced Reptiles", subtitle: "Reptile care difficulty is not arbitrary; it comes from specific, identifiable factors. Size, husbandry precision, temperament, diet complexity, and how forgiving a species is of mistakes all add up to a difficulty tier. Understanding these factors lets you judge any species honestly, and explains why some cheap, widely sold reptiles are emphatically not beginner animals.", category: "Choosing a Reptile", authorName: 'Lizard.com Editorial', publishedAt: 'June 2026', readTime: "10 min" }}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Species", href: "/species" }, { name: "Beginner vs Advanced", href: "/species/beginner-vs-advanced-reptiles" }]}
      schema={schema}
      relatedLinks={[
        { title: 'Which Reptile Is Right For You? (Quiz)', href: '/tools/reptile-match-quiz', category: 'Tools' },
        { title: 'Species Library', href: '/species', category: 'Hub' },
        { title: 'Best Beginner Reptiles', href: '/species/best-beginner-reptiles', category: 'Species' },
        { title: 'Low-Maintenance Reptiles', href: '/species/low-maintenance-reptiles', category: 'Species' },
        { title: 'Leopard Gecko Care', href: '/species/leopard-gecko', category: 'Species' },
        { title: 'Reptile Buying Checklist', href: '/species/reptile-buying-checklist', category: 'Species' },
        { title: 'First Year Care Schedule', href: '/first-year-care-schedule', category: 'Guide' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>{"Difficulty Drivers"}</div>
          {[["Size", "Bigger = harder"], ["Husbandry precision", "Tight ranges = harder"], ["Temperament", "Defensive/fast = harder"], ["Diet", "Specialized = harder"], ["Forgiveness", "Low margin = harder"], ["Availability", "Wild-caught = harder"]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title={"Related Guides"} links={[{ label: "Which Reptile Is Right For You? Quiz", href: "/tools/reptile-match-quiz" }, { label: "Best Beginner Reptiles", href: "/species/best-beginner-reptiles" }, { label: "Low-Maintenance Reptiles", href: "/species/low-maintenance-reptiles" }, { label: "Reptile Buying Checklist", href: "/species/reptile-buying-checklist" }, { label: "Argentine Tegu Care", href: "/species/argentine-black-and-white-tegu" }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={"lizard-species-beginner-vs-advanced-reptiles"} ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="species" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <StockImage manifestKey="lizard-com:species-bearded-dragon" fallbackKey="lizard-com:category-species" aspect="16:9" variant="inline" caption="The bearded dragon — beginner-friendly in temperament, intermediate in setup." priority />
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
          <p>{"The labels beginner, intermediate, and advanced get applied loosely in the reptile hobby, but they map onto real, measurable husbandry factors. A species is harder to keep when it is large, needs precise environmental control, has a difficult temperament, eats a specialized diet, or punishes mistakes with rapid decline. Conversely, the easiest species are small, forgiving, calm, and simple to feed. Learning to read these factors lets you assess any reptile, including ones not covered by a care sheet, and avoid the classic trap of an inexpensive lizard that turns out to be an expert-level animal."}</p>
          <h2>{"The Factors That Raise Difficulty"}</h2>
          <ul>
            <li>{"Adult size: large species need room-scale enclosures, intense heat, big meals, and pose handling and safety challenges"}</li>
            <li>{"Husbandry precision: species with narrow temperature and humidity tolerances (such as some chameleons) leave little room for error"}</li>
            <li>{"Temperament and speed: fast, flighty, or defensive animals are stressful to maintain and risky to handle"}</li>
            <li>{"Diet complexity: specialized feeders (live insects only, specific plants, hard-to-source prey) are harder than animals on simple staple diets"}</li>
            <li>{"Forgiveness margin: how quickly the species declines when conditions slip; forgiving species buy you time to learn"}</li>
            <li>{"Captive-bred availability: wild-caught animals arrive stressed and parasitized and are far harder than hardy captive-bred stock"}</li>
          </ul>
          <h2>{"Beginner Tier"}</h2>
          <p>{"Beginner species are small to moderate, forgiving, calm, and simple to feed and house. Examples include the leopard gecko, crested gecko, corn snake, African fat-tailed gecko, Kenyan sand boa, and (in temperament) the bearded dragon, with the bearded dragon sitting at the demanding end because of its equipment needs. These animals tolerate a learning curve, which is exactly what a first-time keeper needs."}</p>
          <h2>{"Intermediate Tier"}</h2>
          <p>{"Intermediate species add complexity in one or more factors: more demanding humidity or temperature control, a flightier temperament, a more specialized diet, or a larger size. Examples include blue-tongue skinks, Chinese water dragons (height, humidity, and snout-rub risk), green anoles (UVB and humidity precision, often wild-caught), fire skinks (burrowing, often wild-caught), leachianus geckos (size and strict solitary housing), and uromastyx (specialized herbivorous diet and intense heat). They reward a keeper who has mastered the basics on an easier species first."}</p>
          <h2>{"Advanced Tier"}</h2>
          <p>{"Advanced species combine multiple difficulty factors at high intensity: large size, intense environmental demands, challenging temperament, and low tolerance for error. Examples include large monitors (savannah and especially Nile monitors), Argentine tegus (intelligent and tame but room-scale and seasonally complex with brumation), and the more delicate chameleons, where precise husbandry is unforgiving. Many of these are sold cheaply as hatchlings, which is precisely how inexperienced keepers end up overwhelmed. They belong with keepers who already have a track record."}</p>
          <h2>{"Why Cheap Does Not Mean Easy"}</h2>

          <h2>{"Matching Yourself to a Tier"}</h2>
          <p>{"Be honest about your experience, time, space, and budget. A first-time keeper should start in the beginner tier and build skills before moving up; the worst outcomes happen when newcomers buy advanced animals on impulse. There is no shame in starting easy, and a well-kept beginner species is a far better experience, for you and the animal, than a struggling advanced one. Use our buying checklist before any purchase."}</p>
          <h2>{"Sources & Further Reading"}</h2>
          <ul>
            <li>{"Mader, D. R. Reptile Medicine and Surgery (Elsevier), husbandry and welfare chapters."}</li>
            <li>{"Warwick, C., et al., reptile welfare literature."}</li>
            <li>{"Reptiles Magazine, species-difficulty references."}</li>
          </ul>
      </div>
    </ArticleLayout>
  )
}
