import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, AffiliateDisclosure, CrossPortfolioCard, ArticleByline, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "Kenyan Sand Boa Care Guide — Burrowing Snake | Lizard.com", description: "Kenyan sand boas are a beginner-friendly burrowing snake. Belly heat, deep aspen substrate, frozen/thawed mice, and why they spend most of their life buried.", path: "/species/kenyan-sand-boa", type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "Kenyan Sand Boa Care Guide", description: "Substrate depth, belly heat, feeding, and complete care for Gongylophis colubrinus, the Kenyan sand boa.", url: "https://lizard.com/species/kenyan-sand-boa", imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' })

const FAQS = [
  { question: 'How big do Kenyan sand boas get?', answer: 'They are one of the smallest commonly kept boas: females reach 24–32 inches, while males stay under 18. A single adult female is comfortable in a 20-gallon long (30×12 inches of floor space) and males do well in 10–15 gallons — floor area matters far more than height for a terrestrial burrower with no climbing instinct.' },
  { question: 'Why is my sand boa always buried?', answer: 'That is normal and healthy. Kenyan sand boas are fossorial ambush predators that spend up to 90 percent of their life buried in 3–4 inches of aspen or sand-soil substrate, ambushing prey from below with only the eyes exposed. They surface mainly to feed and occasionally to thermoregulate at night, which is why they are best thought of as a low-maintenance pet rather than a display animal.' },
  { question: 'What do Kenyan sand boas eat and how often?', answer: 'Frozen/thawed mice exclusively — live rodents can injure or kill a snake by biting and offer no welfare benefit. Prey roughly the width of the snake at its widest point is correct: pinkie mice for hatchlings every 5–7 days, adult mice for adult females every 10–14 days. Many sand boas prefer to strike prey wiggled with tongs at the substrate surface at dusk. Obesity from overfeeding a sedentary animal is the most common diet problem; reduce feeding frequency rather than prey size.' },
  { question: 'What heating does a Kenyan sand boa need?', answer: 'They thermoregulate primarily through belly contact with warm substrate, similar to leopard geckos. Provide a 90–95°F warm zone at the substrate surface over one third of the floor and a 75–80°F cool side, with a night drop into the low 70s being fine. A thermostat-controlled heat mat under one end is the traditional method; an overhead deep heat projector on a thermostat is an excellent alternative. Never run any heat source without a thermostat. UVB is optional for this nocturnal burrower.' },
  { question: 'Are Kenyan sand boas good beginner snakes?', answer: 'Yes — they combine small adult size, a docile disposition that rarely bites defensively, a 15–20 year lifespan, and an undemanding husbandry profile that tolerates the small errors beginners make. Keep handling sessions short (this is a secure-when-buried species), watch for feeding-response strikes if your hands smell of rodent, and wash hands before and after every interaction as a Salmonella precaution.' },
]

const faqSchema = buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) })
const combinedSchema = combineSchemas(schema, faqSchema)

export default function SpeciesKenyanSandBoaPage() {
  return (
    <>
    <SchemaScript schema={combinedSchema} />
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "Kenyan Sand Boa Care Guide", subtitle: "Gongylophis colubrinus is one of the smallest commonly kept boas and an excellent first snake. Females reach 24 to 32 inches; males stay under 18. They spend up to 90 percent of their life buried in substrate, ambushing prey from below with only the eyes exposed.", category: "Species Guide — Beginner Friendly", authorName: 'Lizard.com Editorial', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Species", href: "/species" }, { name: "Kenyan Sand Boa", href: "/species/kenyan-sand-boa" }]}
      relatedLinks={[
        { title: 'Species Library', href: '/species', category: 'Hub' },
        { title: 'Corn Snake Care', href: '/species/corn-snake', category: 'Species' },
        { title: 'Ball Python Care', href: '/species/ball-python', category: 'Species' },
        { title: 'Western Hognose Snake', href: '/species/western-hognose-snake', category: 'Species' },
        { title: 'Feeding Frozen/Thawed Rodents', href: '/health/feeding-frozen-thawed-rodents', category: 'Health' },
        { title: 'Substrate Guide', href: '/setup/substrate-guide', category: 'Setup' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>{"Quick Stats"}</div>
          {[["Scientific name", "Gongylophis colubrinus"], ["Difficulty", "Beginner"], ["Adult size", "Females 24-32 in, males under 18"], ["Enclosure", "20 gal long for an adult female"], ["Warm side surface", "90-95 F"], ["Cool side", "75-80 F"], ["Substrate depth", "3-4 in aspen or sand-soil"], ["Diet", "Frozen/thawed mice"], ["Lifespan", "15-20 years"]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title={"Related Guides"} links={[{ label: "Corn Snake Care", href: "/species/corn-snake" }, { label: "Ball Python Care", href: "/species/ball-python" }, { label: "Substrate Guide", href: "/setup/substrate-guide" }, { label: "Frozen/Thawed Feeding", href: "/health/feeding-frozen-thawed-rodents" }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={"lizard-species-kenyan-sand-boa"} ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="species" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
          <p>{"The Kenyan sand boa is a fossorial (burrowing) ambush predator native to the dry scrub and semi-desert of East Africa. In captivity it is prized for a small adult size, a docile disposition, decades-long lifespan, and an undemanding husbandry profile that tolerates the small errors beginners make. The trade-off is that it is not a display animal: a healthy sand boa is buried almost all the time, surfacing mainly to feed and occasionally to thermoregulate at night."}</p>
          <h2>{"Enclosure and Substrate"}</h2>
          <p>{"A single adult female is comfortable in a 20-gallon long (30 by 12 inches of floor space); males do well in 10 to 15 gallons. Floor area matters far more than height because this is a terrestrial burrower with no climbing instinct. A secure, low-profile enclosure with a tight lid prevents escape, though sand boas are far less determined escape artists than colubrids."}</p>

          <h2>{"Heating"}</h2>
          <p>{"Sand boas thermoregulate primarily through belly contact with warm substrate, similar to leopard geckos. Provide a warm zone of 90 to 95 F at the substrate surface on one third of the floor, with a cool side of 75 to 80 F. A heat mat controlled by a thermostat, placed under one end, is the traditional method and works well because the snake seeks belly heat from below; an overhead deep heat projector on a thermostat is an excellent alternative that warms the surface the snake burrows just beneath. Never run any heat source without a thermostat."}</p>
          <ul>
            <li>{"Warm surface (one third of floor): 90-95 F"}</li>
            <li>{"Cool side surface: 75-80 F"}</li>
            <li>{"Night drop to the low 70s is fine and natural"}</li>
            <li>{"UVB is optional; low-level UVB (Ferguson Zone 1) is a reasonable enrichment addition but not required for a nocturnal burrower"}</li>
          </ul>
          <h2>{"Feeding"}</h2>
          <p>{"Kenyan sand boas eat rodents and should be fed frozen/thawed prey exclusively. Live rodents can injure or kill a snake by biting, and offer no welfare benefit. A prey item roughly the width of the snake at its widest point is correct. Hatchlings take pinkie mice; adult females take adult mice. Feed hatchlings every 5 to 7 days, adults every 10 to 14 days. Because they are ambush feeders, many sand boas prefer to strike prey wiggled with tongs at the substrate surface at dusk, then drag it under to constrict and swallow."}</p>
          <p>{"Obesity is the most common diet-related problem in captivity because keepers overfeed an animal that barely moves. A sand boa with visible skin folds when stretched out, or that looks loaf-shaped rather than round in cross section, is overweight. Reduce frequency rather than prey size."}</p>
          <h2>{"Handling and Temperament"}</h2>
          <p>{"Sand boas are generally calm and rarely bite defensively, though a feeding-response strike can occur if you reach in smelling of rodent. Support the body and allow the snake to move through your hands. Keep handling sessions short; this is a secure-when-buried species and prolonged surface exposure is mildly stressful. Wash hands before and after every interaction as a Salmonella precaution."}</p>
          <h2>{"Common Health Concerns"}</h2>
          <ul>
            <li>{"Respiratory infection: open-mouth breathing, mucus, or wheezing usually traces to substrate that is too damp or temperatures that are too low. Correct husbandry and see a reptile vet."}</li>
            <li>{"Retained shed: less common in burrowers but check for retained eye caps after each shed; a brief humid hide fixes most cases."}</li>
            <li>{"Mites: small moving dots around the eyes and in the substrate; quarantine and treat per veterinary guidance."}</li>
            <li>{"Obesity: the most prevalent issue; manage by feeding frequency."}</li>
          </ul>
          <p>{"For any sign of illness, locate an Association of Reptilian and Amphibian Veterinarians (ARAV) member clinic; general small-animal vets often lack reptile diagnostic experience."}</p>
          <h2>{"Sources & Further Reading"}</h2>
          <ul>
            <li>{"Mader, D. R. Reptile Medicine and Surgery (Elsevier), husbandry and clinical chapters."}</li>
            <li>{"Association of Reptilian and Amphibian Veterinarians (ARAV) member directory, arav.org."}</li>
            <li>{"Reptiles Magazine species husbandry references for Gongylophis colubrinus."}</li>
          </ul>

        <h2>Frequently Asked Questions</h2>
        <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
        <AffiliateDisclosure variant="inline" siteId="lizard-com" />
        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>Kenyan Sand Boa — Setup Equipment</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>Browse enclosures, under-tank heating, thermostats, deep aspen or sand substrate, and hides sized for Kenyan sand boa care. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/kenyan%20sand%20boa%20enclosure%20setup?s=species-kenyan-sand-boa" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Sand Boa Setup on Amazon →</a>
            <a href="/go/chewy-brand/kenyan%20sand%20boa%20enclosure%20setup?s=species-kenyan-sand-boa" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #7bc25c)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>
      </div>
    </ArticleLayout>
    </>
  )
}
