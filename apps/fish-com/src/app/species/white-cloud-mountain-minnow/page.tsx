import type { Metadata } from 'next'
import { StockImage, buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard , AffiliateDisclosure, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema, FAQAccordion, SchemaScript, buildFAQSchema, combineSchemas } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

const SOURCES = [
  { label: "Tanichthys albonubes — Seriously Fish species profile", url: "https://www.seriouslyfish.com/species/tanichthys-albonubes/", publisher: "Seriously Fish" },
  { label: "Tanichthys albonubes — FishBase species record", url: "https://www.fishbase.se/summary/Tanichthys-albonubes.html", publisher: "FishBase" },
  { label: "Tanichthys albonubes — IUCN Red List assessment", url: "https://www.iucnredlist.org/species/21449/9286097", publisher: "IUCN Red List" },
  { label: "Kottelat, M. & Whitten, A.J. Freshwater Biodiversity in Asia. World Bank Technical Paper, 1996.", publisher: "World Bank" },
]
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'White Cloud Mountain Minnow Care Guide — Cold Water | Fish.com', description: 'White cloud mountain minnows are cold water nano fish — perfect for unheated tanks. Hardy, peaceful, and stunning in schools of 10+. Complete care guide.', path: '/species/white-cloud-mountain-minnow', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'White Cloud Mountain Minnow Care Guide', description: 'Cold water requirements, school size, and breeding for Tanichthys albonubes white clouds.', url: 'https://fish.com/species/white-cloud-mountain-minnow', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' ,
  citation: SOURCES,
})

const FAQS = [
  {
    question: 'Can white cloud mountain minnows live without a heater?',
    answer:
      'Yes. White clouds thrive at 60–72°F, a range that covers most unheated homes for much of the year in temperate climates, making them a correct choice for unheated indoor tanks, cooler rooms, and summer outdoor tubs. At tropical temperatures (78°F and up) they decline — shorter lifespan, weaker immune function, less color and activity — so they are not suitable tankmates for a heated tropical tank.',
    answerText:
      'Yes. White clouds thrive at 60-72F and suit unheated tanks. Above 78F they decline, so they are not suitable for heated tropical tanks.',
  },
  {
    question: 'How many white cloud mountain minnows should I keep?',
    answer:
      'Keep a group of at least 8. They are schooling fish that are more active and colorful in numbers, and males in breeding condition display to each other with fins flared, intensifying their colors. Same-species colonies are especially active.',
    answerText:
      'Keep at least 8. They are schooling fish that are more active and colorful in groups, with males displaying to each other in breeding condition.',
  },
  {
    question: 'What water parameters do white cloud mountain minnows need?',
    answer:
      'They are very adaptable to hardness and tolerate pH 6.0–8.0. Temperature is the key parameter: 60–72°F is preferred and 75°F should be treated as a maximum, since warmer water stresses them. In their preferred cool range they live 5–7 years.',
    answerText:
      'They tolerate pH 6.0-8.0 and are very adaptable. Temperature matters most: 60-72F preferred, 75F maximum. In cool water they live 5-7 years.',
  },
  {
    question: 'Do white cloud mountain minnows breed easily?',
    answer:
      'Yes. They breed readily at cool temperatures without special intervention — eggs are scattered among plants and hatch in 2–3 days. Unlike many egg-scatterers, white clouds show little interest in eating their own eggs or fry in a densely planted tank, so a school in a well-planted, unheated tank often establishes a self-sustaining colony. Java moss and hornwort provide ideal spawning and fry refuge.',
    answerText:
      'Yes — they scatter eggs among plants that hatch in 2-3 days and rarely eat their own fry in dense planting, so a planted unheated tank often self-sustains a colony.',
  },
  {
    question: 'What fish are compatible with white cloud mountain minnows?',
    answer:
      'Peaceful species of similar size that tolerate the same cool range: other white clouds, Corydoras aeneus and paleatus (not sterbai, which needs warmer water), hillstream loaches, and danio species that tolerate cooler temperatures. Avoid tropical fish requiring 78°F and up, since the temperature mismatch harms one or both groups.',
    answerText:
      'Peaceful cool-water species: other white clouds, Corydoras aeneus and paleatus, hillstream loaches, and cool-tolerant danios. Avoid tropical fish needing 78F+.',
  },
]

const faqSchema = buildFAQSchema({ questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })) })
const combinedSchema = combineSchemas(schema, faqSchema)

export default function WhiteCloudPage() {
  return (
    <>
    <SchemaScript schema={combinedSchema} />
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'White Cloud Mountain Minnow', subtitle: 'Tanichthys albonubes — the "poor man\'s neon tetra," though the nickname sells them short. These 1.5-inch fish from the mountain streams of southern China are hardier than neons, tolerant of cold water that most tropical fish cannot handle, and in peak condition display iridescent red tails and a brilliant lateral stripe. They are the ideal fish for unheated indoor tanks.', category: 'Species Guide — Cold Water', authorName: 'Fish.com Editorial', publishedAt: 'May 2025', readTime: '7 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'White Cloud Mountain Minnow', href: '/species/white-cloud-mountain-minnow' }]}
      relatedLinks={[{ title: "Species Hub", href: "/species", category: "Species" }, { title: "Zebra Danio", href: "/species/zebra-danio", category: "Species Guide" }, { title: "Celestial Pearl Danio", href: "/species/celestial-pearl-danio", category: "Species Guide" }, { title: "Nano Tank Setup", href: "/setup/nano-tank-setup", category: "Tank Setup" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Scientific name', 'Tanichthys albonubes'], ['Adult size', '1.5 inches'], ['Temperature', '60–72°F — cold water preferred'], ['Max temp', '75°F — above this stresses them'], ['pH', '6.0–8.0 — very adaptable'], ['Group', '8+ recommended'], ['Lifespan', '5–7 years in cool water']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Goldfish Care', href: '/species/goldfish' }, { label: 'Axolotl Care', href: '/species/axolotl' }, { label: 'Corydoras Care', href: '/species/corydoras' }]} />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-white-cloud" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-06-11T00:00:00Z" reviewedBy="Editorial team" />
            {/* Under-hero capture — source must end in under-hero so it always renders. */}
            <div className="mb-8">
              <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                Keep the white-cloud-mountain-minnow-setup checklist
              </p>
              <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                White-cloud-mountain-minnow-setup checklist
              </h2>
              <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                Email the Tanichthys albonubes notes
                that match the care copy on this page
                — 60–72°F unheated tanks, a school of
                8+, pH 6.0–8.0, and 75°F as a maximum
                for these 1.5-inch cool-water
                minnows. Educational
                white-cloud-mountain-minnow-setup
                checklist, not a new product hop, not
                livestock, and not a substitute for a
                fish veterinarian. The existing
                white-cloud-mountain-minnow tank-setup
                Amazon search stays below. Empty
                Chewy buttons stay hidden. No spam.
              </p>
              <EmailCapture
                variant="inline"
                siteId="fish-com"
                title="White-cloud-mountain-minnow-setup checklist"
                subtitle="Email the 60–72°F unheated and 8+ school notes. No spam."
                ctaText="Email my white-cloud-mountain-minnow-setup checklist"
                source="species-white-cloud-mountain-minnow-under-hero"
              />
            </div>
        <StockImage manifestKey="fish-com:species-white-cloud-mountain-minnow" fallbackKey="fish-com:category-species" aspect="16:9" variant="inline" caption="A white cloud mountain minnow in a home aquarium." priority />
        <h2>The Cold Water Advantage</h2>
        <p>White clouds thrive at 60–72°F — a temperature range that encompasses most unheated homes during most of the year in temperate climates. This is their defining advantage: a quality cold-tolerant fish that handles room temperature without a heater. They are the correct choice for unheated fish tanks, outdoor tub setups in summer, and indoor rooms that run cooler than typical tropical fish setups tolerate.</p>
        <p>At tropical temperatures (78°F+), white clouds decline: their lifespan shortens significantly, their immune function is compromised, and they are less active and less colorful than at their preferred range. If you are running a heated tropical tank at 78°F, white clouds are not appropriate tankmates — keep them in their preferred temperature range where they thrive.</p>

        <h2>Color and Conditioning</h2>
        <p>White clouds in fish stores often appear pale and unimpressive — they have been kept in conditions that suppress their coloration. In a well-maintained tank at appropriate temperature with high-quality varied diet, the lateral line brightens to a vivid gold or silver iridescence, the tail develops rich crimson coloration, and the body shows a clear metallic sheen. Males in breeding condition display to each other with fins flared, intensifying all their colors.</p>
        <p>Diet makes a significant difference: frozen daphnia (their natural prey in mountain streams) intensifies red coloration dramatically. Supplement their staple diet (quality small flake or micro pellet) with frozen daphnia 3-4 times weekly for the best color. Bloodworms and baby brine shrimp also work well.</p>

        <h2>Breeding — Self-Sustaining Colonies</h2>
        <p>White clouds breed readily at cool temperatures without special intervention — eggs are scattered among plants and hatch in 2–3 days. Unlike many egg-scattering fish, white clouds show little interest in eating their own eggs or fry in a densely planted tank. A school of white clouds in a well-planted unheated tank often establishes a self-sustaining colony — fry are periodically noticed swimming with the adults, growing to full size over 6–8 weeks. Java moss and hornwort provide ideal spawning and fry refuge habitat.</p>

        <h2>Varieties</h2>
        <p>The standard wild-type white cloud has green-gold body coloration with the distinctive lateral stripe and red tail. Several cultivated varieties are available: the golden white cloud (warm yellow-gold body replacing the typical green), the long-fin white cloud (extended, flowing fins on both male and female — particularly striking at feeding time when fins are flared), and occasionally albino variants. All have identical care requirements.</p>

        <h2>Compatibility</h2>
        <p>Peaceful with all species of similar size that tolerate the same temperature range. Natural tankmates in the cold-water aquarium: other white clouds (same species colonies are especially active), Corydoras aeneus and paleatus (not sterbai, which needs warmer water), hillstream loaches (love the same cool, oxygenated conditions), and danio species that tolerate cooler temperatures. Avoid tropical fish requiring 78°F+ — the temperature mismatch creates a chronic welfare problem for one or both species.</p>
        <h2>Frequently Asked Questions</h2>
        <FAQAccordion items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answerText }))} includeSchema={false} allowMultiple />
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
          <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>White Cloud Mountain Minnow — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for white cloud mountain minnow care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/white%20cloud%20mountain%20minnow%20tank%20setup?s=species-white-cloud-mountain-minnow" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop White Cloud Mountain Minnow Setup on Amazon →</a>
          </div>
        </div>

        <ArticleSourcesList sources={SOURCES} />
      </div>
      </ArticleLayout>
    </>
  )
}
