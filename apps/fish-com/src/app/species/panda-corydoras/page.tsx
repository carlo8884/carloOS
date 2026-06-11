import type { Metadata } from 'next'
import { StockImage, buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard , AffiliateDisclosure, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema, FAQAccordion, SchemaScript, buildFAQSchema, combineSchemas } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'

const SOURCES = [
  { label: "Corydoras panda — Seriously Fish species profile", url: "https://www.seriouslyfish.com/species/corydoras-panda/", publisher: "Seriously Fish" },
  { label: "Corydoras panda — FishBase species record", url: "https://www.fishbase.se/summary/Corydoras-panda.html", publisher: "FishBase" },
  { label: "Reis, R.E. Systematics of the Neotropical Catfish Family Corydoradinae. Ichthyological Explorations of Freshwaters, 1997.", publisher: "Ichthyological Explorations of Freshwaters" },
  { label: "Axenrot, T. & Kullander, S.O. Corydoras diphyes (Siluriformes: Callichthyidae), a new species from Paraguay. Ichthyological Explorations of Freshwaters, 2003.", publisher: "Ichthyological Explorations of Freshwaters" },
]
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Panda Corydoras Care Guide — The Cool-Water Cory | Fish.com', description: "Panda corydoras are a small, panda-marked cory catfish that prefers cooler water and pristine conditions. Keep a group of 6+ over soft sand.", path: '/species/panda-corydoras', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Panda Corydoras Care Guide', description: 'Temperature, group needs, water quality, and breeding for Corydoras panda.', url: 'https://fish.com/species/panda-corydoras', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' })

const FAQS = [
  {
    question: 'What temperature do panda corydoras need?',
    answer:
      'Cooler than most tropical fish: 68–77°F. Panda corydoras come from cooler, faster-flowing foothill streams of the Peruvian Amazon and struggle in the high-70s-to-low-80s temperatures kept for discus or many gouramis, which shortens their lifespan. Keepers who lose pandas quickly have very often kept them too warm.',
    answerText:
      'Cooler than most tropicals: 68-77F. Pandas come from cool foothill streams and struggle above the high 70s. Most quick losses come from keeping them too warm.',
  },
  {
    question: 'How many panda corydoras should I keep together?',
    answer:
      'At least six, with eight or more producing the most natural behavior. Like all corydoras, pandas are obligately social: in a proper group they forage together in daylight and burst into bouts of darting activity, while a lone or paired panda hides, eats poorly, and slowly declines. Because they are small, even a 20-gallon tank can house a sizeable shoal.',
    answerText:
      'At least six, ideally eight or more. Pandas are obligately social; a lone fish hides and declines while a group forages confidently in daylight.',
  },
  {
    question: 'What substrate do panda corydoras need?',
    answer:
      'Soft sand is strongly preferred. Their fine barbels are easily eroded by sharp gravel, and sand lets them perform their natural sifting feeding behavior. Pair the sand with gentle-to-moderate flow, plant cover, and shaded retreats so these somewhat shy fish feel secure.',
    answerText:
      'Soft sand is strongly preferred — sharp gravel erodes their fine barbels, and sand allows natural sifting feeding. Add gentle flow and plant cover for security.',
  },
  {
    question: 'Are panda corydoras hard to keep?',
    answer:
      'They are slightly more demanding than the bronze cory. Pandas need a fully cycled, mature tank with stable parameters, zero ammonia and nitrite, and low nitrate — they are not a good fish for a brand-new aquarium. In clean, cool, stable water they are hardy and long-lived (5–10 years).',
    answerText:
      'Slightly more demanding than bronze corys. Pandas need a mature, fully cycled tank with stable parameters and low nitrate; in good conditions they live 5-10 years.',
  },
  {
    question: 'What do panda corydoras eat?',
    answer:
      'They are not scavengers and need dedicated sinking foods: quality sinking pellets and wafers, plus frequent frozen or live offerings such as bloodworms, daphnia, and baby brine shrimp.',
    answerText:
      'Pandas are not scavengers and need their own sinking foods: pellets and wafers plus frozen or live bloodworms, daphnia, and baby brine shrimp.',
  },
]

const faqSchema = buildFAQSchema({ questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })) })
const combinedSchema = combineSchemas(schema, faqSchema)

export default function PandaCorydorasPage() {
  return (
    <>
    <SchemaScript schema={combinedSchema} />
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Panda Corydoras Care Guide', subtitle: "Corydoras panda — named for the black patches over its eyes, dorsal fin, and tail base on a creamy body, the panda cory is among the most charming and sought-after small catfish. It is slightly more demanding than the bronze cory: it prefers cooler water and is less tolerant of poor conditions, but in a clean, well-planted tank a group of pandas is endlessly entertaining.", category: 'Species Guide', authorName: 'Fish.com Editorial', publishedAt: 'June 2026', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Panda Corydoras', href: '/species/panda-corydoras' }]}
      relatedLinks={[{ title: "Species Hub", href: "/species", category: "Species" }, { title: "Corydoras", href: "/species/corydoras", category: "Species Guide" }, { title: "Bronze Corydoras", href: "/species/bronze-corydoras", category: "Species Guide" }, { title: "Low-Tech Planted Tank", href: "/setup/low-tech-planted-tank", category: "Tank Setup" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Scientific name', 'Corydoras panda'], ['Adult size', '1.5–2 inches'], ['Temperature', '68–77°F (cooler preferred)'], ['pH', '6.0–7.4'], ['Group size', '6 minimum, 8+ better'], ['Substrate', 'Soft sand'], ['Lifespan', '5–10 years']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Bronze Corydoras', href: '/species/bronze-corydoras' }, { label: 'Corydoras Overview', href: '/species/corydoras' }, { label: 'Aquarium Cycling Guide', href: '/setup/aquarium-cycling-guide' }]} />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-panda-corydoras" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-11T00:00:00Z" reviewedBy="Editorial team" />
        <StockImage manifestKey="fish-com:species-panda-corydoras" fallbackKey="fish-com:category-species" aspect="16:9" variant="inline" caption="A panda corydoras in a home aquarium." priority />

        <h2>The Cooler-Water Cory</h2>
        <DropCap>The panda corydoras differs from most aquarium catfish in one important respect: it comes from cooler, faster-flowing foothill streams of the Peruvian Amazon rather than the warm lowland waters most tropical fish inhabit. As a result it does best at the lower end of the tropical range, between 68 and 77°F, and tends to struggle and shorten its lifespan in the high-70s-to-low-80s temperatures kept for discus or many gouramis. This makes the panda a poor tankmate for warm-water specialists but an excellent companion for other cool-tolerant species such as white cloud mountain minnows, neon tetras, and many rasboras. Keepers who lose pandas quickly have very often kept them too warm.</DropCap>
        <p>Pandas are also more sensitive to water quality than the bronze cory. They need a fully cycled, mature tank with stable parameters, zero ammonia and nitrite, and low nitrate. They are not a good fish for a brand-new aquarium.</p>

        <h2>A Group Animal — Always</h2>
        <p>Like all corydoras, pandas are obligately social and must be kept in groups of at least six, with eight or more producing the most natural behavior. In a proper group they forage together across the substrate in daylight, occasionally bursting into bouts of playful, darting activity. A lone or paired panda will hide, eat poorly, and slowly decline. Because they are so small, even a 20-gallon tank can comfortably house a sizeable, active shoal.</p>

        <CalloutBox variant="info" title="Keep them cool">
          Panda corydoras originate from cooler highland streams and do best at 68–77°F. Avoid pairing them with warm-water species kept above 78°F, which shortens their lifespan.
        </CalloutBox>

        <h2>Substrate and Tank Setup</h2>
        <p>Soft sand is strongly preferred for pandas. Their fine barbels are easily eroded by sharp gravel, and sand lets them perform their natural sifting feeding behavior. Provide gentle-to-moderate water movement to echo their stream origins, along with plenty of plant cover and shaded retreats — driftwood, broad-leaved plants, and caves all help these somewhat shy fish feel secure and stay visible. Good oxygenation is appreciated, reflecting their well-aerated native waters.</p>

        <h2>Feeding and Breeding</h2>
        <p>Pandas are not scavengers and need dedicated sinking foods: quality sinking pellets and wafers, plus frequent frozen or live offerings such as bloodworms, daphnia, and baby brine shrimp. To trigger spawning, condition the group heavily, then perform a large water change with slightly cooler water to simulate the rainy-season trigger. Females deposit sticky eggs on glass, plants, and decor. Eggs hatch in three to five days; the fry are sensitive and require scrupulous water quality and fine foods. Panda breeding is a satisfying intermediate-level project once a stable, mature group is established.</p>
        <h2>Frequently Asked Questions</h2>
        <FAQAccordion items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answerText }))} includeSchema={false} allowMultiple />
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
          <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Panda Corydoras — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, soft sand substrate, and sinking food sized for panda corydoras care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/panda%20corydoras%20tank%20setup?s=species-panda-corydoras" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Panda Corydoras Setup on Amazon →</a>
            <a href="/go/chewy-brand/panda%20corydoras%20tank%20setup?s=species-panda-corydoras" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>
        <ArticleSourcesList sources={SOURCES} />
      </div>
    </ArticleLayout>
    </>
  )
}
