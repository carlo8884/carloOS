import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "Argentine Black and White Tegu Care — Intelligence | Lizard.com", description: "Argentine tegus are large, intelligent, dog-tame lizards needing huge enclosures, intense heat, UVB, and seasonal brumation. An advanced commitment.", path: "/species/argentine-black-and-white-tegu", type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "Argentine Black and White Tegu Care Guide", description: "Enclosure size, heat, UVB, omnivore diet, brumation, and complete care for Salvator merianae, the Argentine tegu.", url: "https://lizard.com/species/argentine-black-and-white-tegu", imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })

export default function SpeciesArgentineBlackAndWhiteTeguPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "Argentine Black and White Tegu Care Guide", subtitle: "Salvator merianae is a large, intelligent South American lizard reaching 3.5 to 4.5 feet and 10 to 15 pounds. Known for becoming remarkably tame and responsive, the Argentine black and white tegu is one of the few reptiles widely described as interactive, but it demands a room-sized enclosure, powerful heat and UVB, and an owner prepared for a 15 to 20 year commitment.", category: "Species Guide — Advanced", authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'June 2026', readTime: "12 min" }}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Species", href: "/species" }, { name: "Argentine Tegu", href: "/species/argentine-black-and-white-tegu" }]}
      schema={schema}
      relatedLinks={[
        { title: 'Species Library', href: '/species', category: 'Hub' },
        { title: 'Savannah Monitor Care', href: '/species/savannah-monitor', category: 'Species' },
        { title: 'Nile Monitor Care', href: '/species/nile-monitor', category: 'Species' },
        { title: 'Brumation Guide', href: '/husbandry/brumation-guide', category: 'Husbandry' },
        { title: 'Enclosure Size Guide', href: '/setup/terrarium-size-guide', category: 'Setup' },
        { title: 'UVB Lighting Guide', href: '/setup/uvb-lighting-guide', category: 'Setup' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>{"Quick Stats"}</div>
          {[["Scientific name", "Salvator merianae"], ["Difficulty", "Advanced"], ["Adult size", "3.5-4.5 ft, 10-15 lb"], ["Enclosure (adult)", "8x4x4 ft minimum"], ["Basking surface", "110-130 F"], ["Cool side", "75-85 F"], ["UVB", "Required, high output (Zone 3-4)"], ["Diet", "Omnivore"], ["Brumation", "Yes, seasonal"], ["Lifespan", "15-20 years"]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title={"Related Guides"} links={[{ label: "Savannah Monitor", href: "/species/savannah-monitor" }, { label: "Tegu (overview)", href: "/species/tegu" }, { label: "Brumation Guide", href: "/husbandry/brumation-guide" }, { label: "Beginner vs Advanced Species", href: "/species/beginner-vs-advanced-reptiles" }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={"lizard-species-argentine-black-and-white-tegu"} ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="species" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
          <p>{"The Argentine black and white tegu is the closest a reptile comes to a dog-like companion. Captive-bred, well-socialized tegus recognize their keepers, tolerate extensive handling, and show problem-solving behavior unusual among lizards. That intelligence and size, however, make this an advanced animal: a full-grown tegu needs an enclosure larger than most furniture, eats a varied omnivorous diet, produces substantial waste, generates intense basking heat, and brumates for months each year. It is a serious, long-term commitment, not a starter reptile."}</p>
          <h2>{"Enclosure"}</h2>


          <h2>{"Heat and UVB"}</h2>
          <p>{"Tegus are heliothermic baskers from open habitats and require an intense basking surface of 110 to 130 F generated by a cluster of halogen flood bulbs over a sturdy platform, with a cool side of 75 to 85 F. Ambient humidity should sit around 60 to 80 percent. High-output linear T5 UVB across a large portion of the basking zone (Ferguson Zone 3 to 4) is required to prevent metabolic bone disease in an animal this large and fast-growing; an under-powered UVB tube is a common cause of deformity in young tegus."}</p>
          <ul>
            <li>{"Basking surface: 110-130 F"}</li>
            <li>{"Cool side: 75-85 F"}</li>
            <li>{"Humidity: 60-80 percent"}</li>
            <li>{"UVB: high-output T5, replaced on schedule and verified with a UV meter where possible"}</li>
          </ul>
          <h2>{"Diet"}</h2>
          <p>{"Tegus are true omnivores, and their diet shifts with age. Hatchlings and juveniles are heavily insectivorous and carnivorous (insects, whole prey such as appropriately sized rodents, eggs); adults take a broader mix including whole prey, lean meats, eggs, insects, and a smaller proportion of fruits and some vegetables. Whole prey and gut-loaded insects supply the calcium and trace nutrients muscle meat alone lacks; supplement with calcium and a balanced reptile multivitamin. Avoid a diet dominated by lean ground meat, which drives nutritional deficiency."}</p>
          <h2>{"Brumation"}</h2>
          <p>{"Argentine tegus brumate, entering a months-long dormancy (often roughly the cooler half of the year) during which they burrow, stop eating, and drastically reduce activity. This is a natural, healthy cycle, not illness, but keepers must distinguish seasonal brumation from disease: a brumating tegu maintains body condition and is simply quiet and buried, whereas a sick tegu loses weight, shows discharge, or appears distressed. See our brumation guide for safe cool-down and warm-up protocols, and consult a reptile vet before brumating any animal that is underweight or young."}</p>
          <h2>{"Handling and Temperament"}</h2>
          <p>{"Tame tegus are calm and curious, but trust is earned through consistent, gentle, daily interaction from a young age. Even a docile tegu has a powerful bite and tail whip and strong claws; respect its size. Wild-caught or under-socialized adults can be defensive and are not appropriate for inexperienced keepers. Always support the body fully when lifting an adult."}</p>
          <h2>{"Common Health Concerns"}</h2>
          <ul>
            <li>{"Metabolic bone disease in fast-growing juveniles from inadequate UVB or calcium"}</li>
            <li>{"Obesity from overfeeding fatty foods to a captive animal that exercises less than a wild one"}</li>
            <li>{"Respiratory infection from temperatures that are too low"}</li>
            <li>{"Mouth and skin infections; husbandry-driven and treatable when caught early"}</li>
          </ul>
          <p>{"Given their size and value, establishing care with an ARAV-member exotics veterinarian before problems arise is strongly advised."}</p>
          <h2>{"Sources & Further Reading"}</h2>
          <ul>
            <li>{"Mader, D. R. Reptile Medicine and Surgery (Elsevier)."}</li>
            <li>{"Reptiles Magazine, Salvator merianae husbandry references."}</li>
            <li>{"Association of Reptilian and Amphibian Veterinarians (ARAV), arav.org."}</li>
          </ul>
        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>Argentine Tegu — Setup Equipment</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>Browse large enclosures, high-output UVB, halogen flood basking bulbs, thermostats, and deep substrate sized for Argentine tegu care. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/argentine%20tegu%20enclosure%20setup?s=species-argentine-black-and-white-tegu" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Tegu Setup on Amazon →</a>
            <a href="/go/chewy-brand/argentine%20tegu%20enclosure%20setup?s=species-argentine-black-and-white-tegu" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #7bc25c)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>
      </div>
    </ArticleLayout>
  )
}
