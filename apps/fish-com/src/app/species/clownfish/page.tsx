import type { Metadata } from 'next'
import { StockImage, buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard , AffiliateDisclosure, ArticleSourcesList } from '@carloOS/ui'
import { FAQAccordion, SchemaScript, buildArticleSchema, buildFAQSchema, combineSchemas } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

const SOURCES = [
  { label: "Amphiprion ocellaris — Seriously Fish species profile", url: "https://www.seriouslyfish.com/species/amphiprion-ocellaris/", publisher: "Seriously Fish" },
  { label: "Amphiprion ocellaris — FishBase species record", url: "https://www.fishbase.se/summary/Amphiprion-ocellaris.html", publisher: "FishBase" },
  { label: "Fautin, D.G. & Allen, G.R. Field Guide to Anemonefishes and Their Host Sea Anemones. Western Australian Museum, 1992.", publisher: "Western Australian Museum" },
  { label: "Godwin, J. Behavioral Aspects of Protandrous Sex Change in the Anemonefish, Amphiprion melanopus. Environmental Biology of Fishes, 52(4), 365–374, 1998.", publisher: "Environmental Biology of Fishes" },
]

export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Clownfish Care Guide — Saltwater Tank Requirements | Fish.com', description: 'Complete clownfish care guide. Saltwater tank requirements, FOWLR vs reef setup, whether they need anemones (no), tankmates, and feeding for Amphiprioninae.', path: '/species/clownfish', type: 'article' })
const articleSchema = buildArticleSchema({ siteId: 'fish-com', title: 'Clownfish Care Guide', description: 'Saltwater setup, anemone question, tankmates, and feeding for clownfish.', url: 'https://fish.com/species/clownfish', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' ,
  citation: SOURCES,
})

const FAQS = [
  {
    question: 'Do clownfish need an anemone?',
    answer:
      'No. In the wild the symbiotic relationship provides protection from predators; in a tank without predators it is unnecessary. Anemones are among the most difficult marine invertebrates to keep — they require pristine, stable water, intense lighting, and specific feeding, and they move around stinging corals. Captive-bred clownfish readily adopt host substitutes such as Hammer, Torch, and Frogspawn corals, or even powerheads and tank corners.',
    answerText:
      'No. Anemones are protection from predators in the wild and unnecessary in a tank. They are also difficult to keep. Clownfish readily host in corals or other substitutes.',
  },
  {
    question: 'What tank size do clownfish need?',
    answer:
      'A minimum of 20 gallons for a pair, and 30+ gallons if adding additional fish. Saltwater tanks need more stable parameters than freshwater, and more water volume means more stability.',
    answerText:
      '20 gallons minimum for a pair, 30+ gallons with additional fish. More volume means more parameter stability.',
  },
  {
    question: 'Are clownfish good beginner saltwater fish?',
    answer:
      'They are among the better choices for a first marine fish — hardy, colorful, and adaptable, tolerating imperfect parameters better than most marines. Choose captive-bred fish: they are significantly hardier than wild-caught and the better choice for both ecological and practical reasons.',
    answerText:
      'Yes, among the better first marine fish: hardy, adaptable, tolerant of imperfect parameters. Always choose captive-bred over wild-caught.',
  },
  {
    question: 'Do clownfish really change sex?',
    answer:
      'Yes. Clownfish form mated pairs in which the larger individual becomes female. An established pair in the right conditions will spawn regularly — eggs are laid on a flat surface and fanned by the male. Rearing the larvae is challenging but achievable for dedicated hobbyists.',
    answerText:
      'Yes. In a mated pair the larger individual becomes female. Established pairs spawn regularly; the male fans the eggs.',
  },
  {
    question: 'What salinity and temperature do clownfish need?',
    answer:
      'Salinity of 1.023–1.026 specific gravity (34–36 ppt), measured with a refractometer, and a stable 74–82°F. Top off evaporation with fresh RODI water — only water evaporates, not salt, so salinity rises as the level drops. Keep ammonia and nitrite at 0 ppm, nitrate under 20 ppm, and pH at 8.1–8.4.',
    answerText:
      '1.023-1.026 SG and 74-82F stable. Top off evaporation with fresh RODI water. Ammonia/nitrite 0, nitrate under 20 ppm, pH 8.1-8.4.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })),
})

const combinedSchema = combineSchemas(articleSchema, faqSchema)

export default function ClownfishPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
    <ArticleLayout
      siteId="fish-com"
      hero={{ title: 'Clownfish Care Guide', subtitle: 'Clownfish are one of the best beginner saltwater fish — hardy, colorful, and adaptable. They do not require anemones, they tolerate imperfect parameters better than most marines, and they breed readily in captivity.', category: 'Species Guide — Saltwater', authorName: 'Fish.com Editorial', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Clownfish', href: '/species/clownfish' }]}
      relatedLinks={[{ title: "Species Hub", href: "/species", category: "Species" }, { title: "Saltwater Tank Setup", href: "/setup/saltwater-tank-setup", category: "Tank Setup" }, { title: "Quarantine Tank Guide", href: "/setup/quarantine-tank-guide", category: "Tank Setup" }, { title: "Best Aquarium Filters", href: "/reviews/best-aquarium-filters", category: "Reviews" }]}
      sidebar={<>
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
          <div style={{ background: 'var(--brand-surface)', border: '1px solid var(--brand-border)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand-text-light)', marginBottom: '12px' }}>Quick Stats</div>
          {[['Scientific name', 'Amphiprioninae (many species)'], ['Type', 'Saltwater (marine)'], ['Difficulty', 'Beginner (for saltwater)'], ['Min tank', '20 gallons'], ['Temperature', '74–82°F'], ['Salinity', '1.023–1.026 SG'], ['Anemone', 'Not required'], ['Lifespan', '6–10+ years'], ['Diet', 'Omnivore']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid var(--brand-border)', fontSize: '13px' }}>
              <span style={{ color: 'var(--brand-text-light)' }}>{k}</span>
              <span style={{ color: 'var(--brand-dark)', fontWeight: 600, textAlign: 'right', maxWidth: '58%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Tank Setup Guide', href: '/setup' }, { label: 'Water Chemistry', href: '/water-parameters' }, { label: 'Betta Fish Care', href: '/species/betta-fish' }]} />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-clownfish" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
            {/* Under-hero capture — source must end in under-hero so it always renders. */}
            <div className="mb-8">
              <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                Keep the clownfish-setup checklist
              </p>
              <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                Clownfish-setup checklist
              </h2>
              <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                Email the clownfish notes that match the
                care copy on this page — a 20-gallon
                marine pair tank so salinity stays at
                1.023–1.026 SG, captive-bred ocellaris
                so a beginner saltwater tank keeps a
                hardy pair, and no anemone requirement
                so a reef-free setup still hosts a
                pair. Educational clownfish-setup
                checklist, not a new product hop, not
                livestock, and not a substitute for a
                fish veterinarian. The existing
                clownfish tank-setup Amazon search
                stays below. Empty Chewy buttons stay
                hidden. No spam.
              </p>
              <EmailCapture
                variant="inline"
                siteId="fish-com"
                title="Clownfish-setup checklist"
                subtitle="Email the 20-gallon, salinity, and captive-bred notes. No spam."
                ctaText="Email my clownfish-setup checklist"
                source="species-clownfish-under-hero"
              />
            </div>
        <StockImage manifestKey="fish-com:species-clownfish" fallbackKey="fish-com:category-species" aspect="16:9" variant="inline" caption="A clownfish in a home aquarium." priority />
        <h2>Saltwater Tank Basics</h2>
        <p>Clownfish are marine fish — they require saltwater maintained at 1.023–1.026 specific gravity (SG). This is measured with a refractometer (more accurate) or hydrometer. Mix Instant Ocean or Red Sea Salt with RODI (reverse osmosis/deionized) water — never tap water in a marine tank. Marine tanks also require protein skimmers and higher-quality filtration than freshwater setups.</p>
        <p>The good news: captive-bred clownfish (available from most reputable marine fish retailers) are significantly hardier than wild-caught fish and tolerate the parameter fluctuations that are inevitable in any tank. Always choose captive-bred over wild-caught for both ecological and practical reasons.</p>
        <p><strong>Minimum tank:</strong> 20 gallons for a pair. 30+ gallons if adding additional fish. Saltwater tanks require more stable parameters than freshwater — more water volume means more stability.</p>

        <h2>Do Clownfish Need Anemones?</h2>
        <p>No. Clownfish do not require anemones in captivity. In the wild, the symbiotic relationship with anemones provides protection; in a tank without predators, it is unnecessary. Anemones are actually among the most difficult marine invertebrates to keep — they require stable, pristine water quality, intense lighting, and specific feeding, and they move around the tank stinging corals they contact. Many reef keepers deliberately exclude anemones.</p>
        <p>Captive-bred clownfish readily adopt host substitutes: Hammer corals, Torch corals, Frogspawn corals, and even certain anemone-shaped decorations. Many will also host in power heads, filter intakes, or corners of the tank if no host is present. This is normal behavior.</p>

        <h2>Water Parameters</h2>
        <ul>
          <li><strong>Salinity:</strong> 1.023–1.026 SG (34–36 ppt). Top off with fresh RODI water as evaporation occurs — only water evaporates, not salt, so salinity rises as water level drops.</li>
          <li><strong>Temperature:</strong> 74–82°F. Stable temperature critical — use quality heater verified with thermometer.</li>
          <li><strong>Ammonia/Nitrite:</strong> 0 ppm always — nitrogen cycle applies equally to marine tanks.</li>
          <li><strong>Nitrate:</strong> Under 20 ppm. Marine fish are more sensitive than freshwater equivalents.</li>
          <li><strong>pH:</strong> 8.1–8.4 (marine-specific range — different from freshwater).</li>
        </ul>

        <h2>Diet</h2>
        <p>Clownfish are omnivores and easy to feed. They accept a wide variety of foods:</p>
        <ul>
          <li>Marine flakes or pellets as a base (Ocean Nutrition, New Life Spectrum Marine)</li>
          <li>Frozen foods: mysis shrimp, brine shrimp, emerald entree (mixed marine foods)</li>
          <li>Feed twice daily, small amounts</li>
        </ul>

        <h2>Tankmates</h2>
        <p>Clownfish are generally peaceful but can be territorial, particularly an established female defending an anemone or hosting spot. Good tankmates: gobies (firefish, watchman goby), small basslets, small wrasses (six-line wrasse — watch for aggression), chromis damselfish, cardinalfish.</p>
        <p>Clownfish form mated pairs — the larger individual becomes female. A pair of clownfish in the right conditions will spawn regularly. Eggs are laid on a flat surface and fanned by the male. Rearing the larvae is challenging but achievable for dedicated hobbyists.</p>

        <h2>Common Species</h2>
        <ul>
          <li><strong>Ocellaris (common clownfish):</strong> The "Nemo" species. Most widely available captive-bred. Most tolerant of imperfect conditions.</li>
          <li><strong>Percula:</strong> Similar to ocellaris, slightly more vivid orange. Also widely captive-bred.</li>
          <li><strong>Maroon:</strong> Largest clownfish (6 inches). Most aggressive. One per tank.</li>
          <li><strong>Tomato:</strong> Hardy, active, brighter red. Single specimen or mated pair only.</li>
        </ul>

        <h2>Frequently Asked Questions</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({
            question: f.question,
            answer: f.answer,
            answerText: f.answerText,
          }))}
          includeSchema={false}
          allowMultiple
        />
        <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Clownfish — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for clownfish care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/clownfish%20tank%20setup?s=species-clownfish" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Clownfish Setup on Amazon →</a>
          </div>
        </div>

        <ArticleSourcesList sources={SOURCES} />
      </div>
      </ArticleLayout>
    </>
  )
}
