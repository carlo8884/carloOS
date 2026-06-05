import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

const SOURCES = [
  { label: "Mader's Reptile and Amphibian Medicine and Surgery, 3rd ed. — Nutrition and Hepatic Lipidosis", publisher: "Divers & Stahl, Elsevier", url: "https://www.elsevier.com/books/maders-reptile-and-amphibian-medicine-and-surgery/divers/978-0-7216-9327-9" },
  { label: "Merck Veterinary Manual — Nutritional Diseases of Reptiles", publisher: "Merck/MSD", url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/reptiles/nutritional-diseases-of-reptiles" },
  { label: "ARAV — Association of Reptilian and Amphibian Veterinarians: Clinical Resources", publisher: "ARAV", url: "https://arav.org" },
  { label: "Journal of Herpetological Medicine and Surgery — Reptile nutrition and obesity references", publisher: "ARAV / Allen Press", url: "https://meridian.allenpress.com/jhms" },
]

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "Reptile Obesity — Causes, Signs, Management | Lizard.com", description: "Obesity is one of the most common health problems in captive reptiles. How to recognize it, why it shortens lifespan, and how to safely manage weight.", path: "/health/reptile-obesity", type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "Obesity in Reptiles", description: "Recognizing, preventing, and managing obesity in captive reptiles through diet, feeding frequency, and enclosure design.", url: "https://lizard.com/health/reptile-obesity", imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })

export default function HealthReptileObesityPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "Obesity in Reptiles", subtitle: "Obesity is among the most common and most overlooked health problems in captive reptiles. Well-meaning keepers overfeed sedentary animals, and the resulting fat accumulation strains the liver, heart, and reproductive system and shortens lifespan. Recognizing the signs and adjusting feeding frequency, diet composition, and enclosure enrichment reverses most cases.", category: "Health — Husbandry-Driven", authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Health", href: "/health" }, { name: "Reptile Obesity", href: "/health/reptile-obesity" }]}
      schema={schema}
      relatedLinks={[
        { title: 'Reptile Health Hub', href: '/health', category: 'Hub' },
        { title: 'Reptile Feeding Guide', href: '/health/reptile-feeding-guide', category: 'Health' },
        { title: 'Gout Prevention', href: '/health/gout-prevention', category: 'Health' },
        { title: 'Feeder Insects Compared', href: '/health/feeder-insects-compared', category: 'Health' },
        { title: 'Savannah Monitor Care', href: '/species/savannah-monitor', category: 'Species' },
        { title: 'Ball Python Care', href: '/species/ball-python', category: 'Species' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>{"At a Glance"}</div>
          {[["Cause", "Overfeeding + low activity"], ["Most affected", "Sedentary captive species"], ["Key organ risk", "Hepatic lipidosis (fatty liver)"], ["Fix lever", "Feeding frequency, not starvation"], ["Watch", "Fat pads, distended body"], ["Prevention", "Portion control + enrichment"]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title={"Related Guides"} links={[{ label: "Reptile Feeding Guide", href: "/health/reptile-feeding-guide" }, { label: "Feeder Insects Compared", href: "/health/feeder-insects-compared" }, { label: "Bearded Dragon Care", href: "/species/bearded-dragon" }, { label: "Enclosure Size Guide", href: "/setup/terrarium-size-guide" }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={"lizard-health-reptile-obesity"} ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="health" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
          <p>{"Wild reptiles work for food, travel, hunt, and experience seasons of scarcity. Captive reptiles get abundant, calorie-dense food delivered to a small enclosure where they barely move. The predictable result is obesity, which is now recognized as one of the leading husbandry-driven health problems across kept species. Excess fat is not benign: it accumulates in and around organs, drives fatty liver disease, impairs reproduction, and reduces lifespan. Unlike many reptile diseases, obesity is almost entirely preventable and largely reversible with patient management."}</p>
          <h2>{"Why Captive Reptiles Get Fat"}</h2>
          <ul>
            <li>{"Feeding too frequently, especially feeding adults on a juvenile schedule"}</li>
            <li>{"Calorie-dense or fatty feeders offered too often (waxworms, superworms, fatty rodents, pinkies for insectivores)"}</li>
            <li>{"Free-feeding or leaving food available constantly"}</li>
            <li>{"Small or barren enclosures that prevent the exercise of foraging, climbing, and exploring"}</li>
            <li>{"Overestimating an animal’s needs; a sedentary captive needs far fewer calories than a wild one"}</li>
          </ul>
          <h2>{"Recognizing Obesity"}</h2>
          <p>{"Body condition assessment is species-specific, but general signs include:"}</p>
          <ul>
            <li>{"Visible fat pads (for example, bulging fat pads behind the eyes or at the base of the tail in some lizards)"}</li>
            <li>{"A body that looks rounded or bloated rather than showing normal contours; skin that folds or bulges when the animal stretches out"}</li>
            <li>{"In leopard geckos and fat-tailed geckos, a tail wider than the body or so heavy it drags (a moderately plump tail is healthy; an enormous one is not)"}</li>
            <li>{"Difficulty moving, reduced activity, and trouble retracting limbs or fitting into hides"}</li>
            <li>{"Lethargy and, in severe cases, signs of organ disease"}</li>
          </ul>
          <h2>{"Health Consequences"}</h2>
          <p>{"The most serious complication is hepatic lipidosis (fatty liver disease), in which fat infiltrates the liver and impairs its function; it can become life-threatening, particularly if an obese animal then stops eating and the body mobilizes fat too fast. Obesity also contributes to reproductive problems including dystocia (egg binding), cardiovascular strain, joint and mobility problems, and a generally shortened life. These risks are why weight management is a health priority, not a cosmetic one."}</p>
          <h2>{"Safe Weight Management"}</h2>
          <ol>
            <li>{"Do not crash-diet or starve a reptile; rapid weight loss in an obese reptile can trigger or worsen fatty liver disease"}</li>
            <li>{"Reduce feeding frequency rather than drastically cutting portion size; feed adults on an appropriate adult schedule"}</li>
            <li>{"Shift the diet toward leaner, lower-fat feeders and species-appropriate items; cut treat feeders"}</li>
            <li>{"Increase activity with a larger, more enriched enclosure, climbing structure, foraging opportunities, and supervised exploration"}</li>
            <li>{"Track weight over weeks with a gram scale and aim for gradual, steady reduction"}</li>
            <li>{"For a markedly obese animal, work with a reptile veterinarian to design a safe weight-loss plan and screen for existing organ damage"}</li>
          </ol>
          <h2>{"Prevention"}</h2>
          <p>{"Feed each species on a schedule matched to its age and metabolism, choose lean staple feeders, reserve fatty items as occasional treats, and provide an enclosure large and enriched enough to encourage movement. Regular weighing catches creeping weight gain before it becomes a clinical problem. When in doubt about portions for a specific species, a current care sheet and your reptile veterinarian are better guides than the appetite of an animal that will happily overeat."}</p>
          <ArticleSourcesList sources={SOURCES} />
      </div>
    </ArticleLayout>
  )
}
