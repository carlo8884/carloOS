import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "Western Hognose Snake Care Guide — Upturned Snout | Lizard.com", description: "Western hognose snakes are small, charismatic beginner snakes known for bluffing and playing dead. Care, feeding, the mild rear-fang concern, and morphs.", path: "/species/western-hognose-snake", type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "Western Hognose Snake Care Guide", description: "Enclosure, belly heat, feeding, the mild rear-fanged venom question, and complete care for Heterodon nasicus.", url: "https://lizard.com/species/western-hognose-snake", imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })

export default function SpeciesWesternHognoseSnakePage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "Western Hognose Snake Care Guide", subtitle: "Heterodon nasicus is a small, stout, upturned-snout colubrid famous for its theatrical defensive bluff: hissing, flattening the neck like a cobra, and ultimately rolling over to play dead. Females reach 24 to 36 inches, males 14 to 24. Their personality and manageable size have made them one of the most popular pet snakes of the last decade.", category: "Species Guide — Beginner Friendly", authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'June 2026', readTime: "10 min" }}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Species", href: "/species" }, { name: "Western Hognose", href: "/species/western-hognose-snake" }]}
      schema={schema}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>{"Quick Stats"}</div>
          {[["Scientific name", "Heterodon nasicus"], ["Difficulty", "Beginner"], ["Adult size", "Females 24-36 in, males 14-24"], ["Enclosure", "20 gal long minimum for adult female"], ["Warm side", "88-92 F"], ["Cool side", "72-78 F"], ["Substrate", "Aspen or sand-soil, burrowable"], ["Diet", "Frozen/thawed mice"], ["Lifespan", "15-20 years"]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title={"Related Guides"} links={[{ label: "Corn Snake Care", href: "/species/corn-snake" }, { label: "Kenyan Sand Boa", href: "/species/kenyan-sand-boa" }, { label: "Frozen/Thawed Feeding", href: "/health/feeding-frozen-thawed-rodents" }, { label: "Substrate Guide", href: "/setup/substrate-guide" }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={"lizard-species-western-hognose-snake"} ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="species" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
          <p>{"The western hognose is a diurnal, semi-fossorial colubrid from the central plains of North America, where it uses its keeled, upturned rostral scale to dig for toads and reptile eggs. In captivity it is hardy, long-lived, and endlessly entertaining. The defensive display is pure bluff: hognose snakes almost never bite in defense, instead hissing, hooding, false-striking with a closed mouth, and finally feigning death by going limp, gaping, and even emitting a musk."}</p>
          <h2>{"Is a Hognose Venomous?"}</h2>
          <p>{"Western hognose snakes are technically rear-fanged and produce a mild salivary toxin (a Duvernoy gland secretion) used to subdue amphibian prey. They are not considered medically dangerous to humans and are widely kept as pets. Defensive bites are extremely rare because the species bluffs rather than bites. The rare reported reactions to a prolonged feeding-response bite are localized swelling and itching, comparable to an insect sting, and resolve on their own. Anyone with known allergies should exercise extra care, and feeding should always be done with tongs to avoid hand-strikes."}</p>
          <h2>{"Enclosure"}</h2>
          <p>{"An adult female is comfortable in a 20-gallon long (or a 24 by 18 inch footprint); males can live in slightly less. As a burrowing species, hognose snakes value floor area and a few inches of diggable substrate over height. A secure lid is essential because they are surprisingly strong nose-diggers at seams. Provide two hides (warm and cool) and a water bowl large enough to drink from."}</p>

          <h2>{"Heating and Lighting"}</h2>
          <ul>
            <li>{"Warm side surface: 88-92 F"}</li>
            <li>{"Cool side: 72-78 F"}</li>
            <li>{"Night: a drop into the low 70s is healthy"}</li>
            <li>{"A heat mat on a thermostat under one third of the floor, or a low-watt overhead source on a thermostat, both work"}</li>
            <li>{"Low-level UVB (Ferguson Zone 1-2) benefits this diurnal species and is recommended, though not strictly required"}</li>
          </ul>
          <h2>{"Feeding — the Main Challenge"}</h2>
          <p>{"Hognose snakes eat frozen/thawed rodents in captivity, but because their wild diet centers on amphibians, some individuals are reluctant to take rodents at first. Hatchlings in particular may need scenting: rubbing a thawed pinkie with a (frozen/thawed, never live) toad or a canned tuna/anchovy juice to trigger a feeding response, then gradually weaning onto unscented mice. A healthy adult takes an appropriately sized mouse every 5 to 7 days; reduce to every 7 to 10 days for an adult to prevent obesity, which this species is prone to."}</p>
          <p>{"Always feed frozen/thawed, never live; a live mouse can bite and injure the snake. Feed with tongs, not by hand, both to avoid an accidental rear-fang bite and to keep the snake from associating your hand with food."}</p>
          <h2>{"Handling and Health"}</h2>
          <p>{"Hognose snakes tolerate gentle, supported handling well once acclimated. Expect bluffing from new or stressed animals; do not interpret hissing and hooding as aggression. Keep sessions short and wash hands afterward (Salmonella precaution)."}</p>
          <ul>
            <li>{"Respiratory infection from cold or damp conditions"}</li>
            <li>{"Retained shed and stuck eye caps; provide a humid hide during shed cycles"}</li>
            <li>{"Obesity from overfeeding a sedentary animal"}</li>
            <li>{"Refusal to feed, especially in young animals or during seasonal slow-downs in mature males"}</li>
          </ul>
          <p>{"Persistent food refusal with weight loss, open-mouth breathing, or any swelling warrants an ARAV-member reptile veterinarian."}</p>
          <h2>{"Sources & Further Reading"}</h2>
          <ul>
            <li>{"Mader, D. R. Reptile Medicine and Surgery (Elsevier)."}</li>
            <li>{"Weinstein, S. A., et al., reviews of mildly venomous colubrid (Duvernoy gland) secretions."}</li>
            <li>{"Association of Reptilian and Amphibian Veterinarians (ARAV), arav.org."}</li>
          </ul>
        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>Western Hognose — Setup Equipment</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>Browse enclosures, under-tank heating, thermostats, aspen or sand substrate, and hides sized for western hognose snake care. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/western%20hognose%20snake%20enclosure%20setup?s=species-western-hognose-snake" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Hognose Setup on Amazon →</a>
            <a href="/go/chewy-brand/western%20hognose%20snake%20enclosure%20setup?s=species-western-hognose-snake" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #7bc25c)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>
      </div>
    </ArticleLayout>
  )
}
