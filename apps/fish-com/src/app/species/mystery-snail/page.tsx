import type { Metadata } from 'next'
import { StockImage, buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard , AffiliateDisclosure, ArticleSourcesList } from '@carloOS/ui'
import { FAQAccordion, SchemaScript, buildArticleSchema, buildFAQSchema, combineSchemas } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

const SOURCES = [
  { label: "Pomacea bridgesii — Seriously Fish species profile", url: "https://www.seriouslyfish.com/species/pomacea-bridgesii/", publisher: "Seriously Fish" },
  { label: "Pomacea bridgesii — FishBase species record", url: "https://www.fishbase.se/summary/Pomacea-bridgesii.html", publisher: "FishBase" },
  { label: "Rawlings, T.A. et al. Molecular phylogenetics of Pomacea apple snails. Molecular Phylogenetics and Evolution, 2007.", publisher: "Molecular Phylogenetics and Evolution" },
  { label: "Invasive Apple Snails in Florida — UF/IFAS Extension", url: "https://edis.ifas.ufl.edu/publication/IN920", publisher: "UF/IFAS Extension" },
]
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Mystery Snail Care Guide — Colors, Copper Toxicity | Fish.com', description: 'Mystery snails (Pomacea bridgesii) are peaceful, stunning, and available in gold, blue, ivory, and purple. They die instantly from copper', path: '/species/mystery-snail', type: 'article' })
const articleSchema = buildArticleSchema({ siteId: 'fish-com', title: 'Mystery Snail Care Guide', description: 'Color varieties, copper toxicity, breeding, and care for Pomacea bridgesii mystery snails.', url: 'https://fish.com/species/mystery-snail', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' ,
  citation: SOURCES,
})

const FAQS = [
  {
    question: 'Why is copper dangerous to mystery snails?',
    answer:
      'Copper kills freshwater snails at concentrations that are safe for fish — it is the single most important care fact for this species. Sources include copper-based algae and disease treatments, tap water from old copper pipes, some plant fertilizers, and some fish foods. Before adding mystery snails to an established tank, verify no copper-containing products have ever been used; even trace copper from a previous treatment can kill them.',
    answerText:
      'Copper is lethal to snails at levels safe for fish. Check for copper-based treatments, old copper pipes, and some fertilizers before adding snails.',
  },
  {
    question: 'Why is my mystery snail laying eggs above the water?',
    answer:
      'That is normal — mystery snails are the only commonly kept freshwater snail that lays eggs above the waterline, as a pink-to-cream clutch on the glass or lid. The eggs need air humidity to develop: they fail if dried out and drown if pushed underwater. Clutches hatch in 2–4 weeks depending on temperature, and hatchlings drop into the water and graze immediately.',
    answerText:
      'Normal behavior — they lay pink-to-cream egg clutches above the waterline. Eggs need air humidity and hatch in 2-4 weeks.',
  },
  {
    question: 'Do mystery snails eat live plants?',
    answer:
      'No — they graze algae, biofilm, and decaying plant matter, not healthy tissue. If a mystery snail appears to be eating a live plant, the plant was already dying in that spot. Supplement their diet with blanched vegetables, algae wafers, or commercial snail food, removing uneaten food within 24 hours.',
    answerText:
      'No — they eat algae, biofilm, and dead or dying plant tissue only. Supplement with blanched vegetables and algae wafers.',
  },
  {
    question: 'Why is my mystery snail’s shell pitting or cracking?',
    answer:
      'Soft water. Mystery snails need calcium for shell growth, and in low-GH water shells develop pitting and erosion that exposes the mantle and eventually kills the snail. A GH of 8+ is recommended (12–15 is excellent). Raise GH with Seachem Equilibrium, or place crushed coral or a piece of cuttlebone in the tank as a continuous calcium source.',
    answerText:
      'Low GH. Target GH 8+ (12-15 is excellent) and provide calcium via a remineralizer, crushed coral, or cuttlebone in the tank.',
  },
  {
    question: 'How long do mystery snails live?',
    answer:
      'One to three years, with an adult shell size of 1.5–2 inches. They do best at 68–82°F in harder water at pH 7.0–8.0, alongside peaceful community fish and shrimp. Avoid tankmates that nip snail antennae, such as some bettas and pufferfish — harassment stresses the snail and prevents normal feeding.',
    answerText:
      '1-3 years at 68-82F in harder water (pH 7.0-8.0). Avoid antenna-nipping tankmates like some bettas and puffers.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })),
})

const combinedSchema = combineSchemas(articleSchema, faqSchema)
export default function MysterySnailPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Mystery Snail Care Guide', subtitle: 'Pomacea bridgesii — the mystery snail, named for appearing to give birth to live young (actually they lay eggs above the waterline, and the hatchlings mysteriously appear in the tank). Available in stunning color varieties — gold, blue, ivory, purple, magenta — and completely peaceful with all community fish.', category: 'Species Guide — Invertebrate', authorName: 'Fish.com Editorial', publishedAt: 'May 2025', readTime: '7 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Mystery Snail', href: '/species/mystery-snail' }]}
      relatedLinks={[{ title: "Species Hub", href: "/species", category: "Species" }, { title: "Cherry Shrimp", href: "/species/cherry-shrimp", category: "Species Guide" }, { title: "Amano Shrimp", href: "/species/amano-shrimp", category: "Species Guide" }, { title: "Planted Tank Setup", href: "/setup/planted-tank-setup", category: "Tank Setup" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Scientific name', 'Pomacea bridgesii'], ['Shell size', '1.5–2 inches (adult)'], ['Temperature', '68–82°F'], ['pH', '7.0–8.0 — prefers harder water'], ['GH', 'Higher GH — stronger shells'], ['Copper', 'LETHAL — avoid all copper'], ['Lifespan', '1–3 years'], ['Breeding', 'Lays egg clutches above waterline']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Cherry Shrimp', href: '/species/cherry-shrimp' }, { label: 'Amano Shrimp', href: '/species/amano-shrimp' }, { label: 'Betta Tank Mates', href: '/species/betta-fish-tank-mates' }]} />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-mystery-snail" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-06-11T00:00:00Z" reviewedBy="Editorial team" />
            {/* Under-hero capture — source must end in under-hero so it always renders. */}
            <div className="mb-8">
              <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                Keep the mystery-snail-setup checklist
              </p>
              <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                Mystery-snail-setup checklist
              </h2>
              <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                Email the Pomacea bridgesii
                notes that match the care copy on this
                page — 68–82°F and pH 7.0–8.0, GH 8+
                for shell health, copper-free water, and
                air-humid egg clutches above the
                waterline. Educational
                mystery-snail-setup checklist, not a new
                product hop, not livestock, and not a
                substitute for a fish veterinarian. The
                existing mystery-snail tank-setup
                Amazon search stays below. Empty Chewy
                buttons stay hidden. No spam.
              </p>
              <EmailCapture
                variant="inline"
                siteId="fish-com"
                title="Mystery-snail-setup checklist"
                subtitle="Email the copper-free, GH 8+, and above-water clutch notes. No spam."
                ctaText="Email my mystery-snail-setup checklist"
                source="species-mystery-snail-under-hero"
              />
            </div>
        <StockImage manifestKey="fish-com:species-mystery-snail" fallbackKey="fish-com:category-species" aspect="16:9" variant="inline" caption="A mystery snail in a home aquarium." priority />
        <h2>Copper — The Single Most Important Care Fact</h2>
        <p>Mystery snails, like all freshwater snails, are killed by copper at concentrations that are safe for fish. This is the most critical care fact — more important than any other husbandry consideration. Sources of copper that kill snails: copper-based algae treatments (API AlgaeFix contains copper), copper-based disease treatments, tap water from old copper pipes, some plant fertilizers, and some fish foods. Before adding mystery snails to any established tank, verify that no copper-containing products have ever been used. Test with a copper test kit if uncertain. Even trace copper remaining from a previous treatment can kill snails.</p>

        <h2>Shell Health and Water Hardness</h2>
        <p>Mystery snails require calcium for shell growth and maintenance. In soft water (low GH), snail shells develop pitting, cracking, and erosion — a condition called "pitting" that exposes the mantle and leads to eventual death. GH of 8+ is recommended; GH of 12–15 is excellent for shell health. To raise GH without affecting pH significantly: Seachem Equilibrium. Crushed coral or cuttlebone placed in the tank provides a continuous calcium source — many keepers place a small piece of cuttlebone (sold in the bird section of pet stores) directly in the tank as a free-choice calcium supplement.</p>

        <h2>Color Varieties</h2>
        <p>The appeal of mystery snails is substantially their color diversity. Unlike nerite snails (which have more limited color variety), mystery snails are available in: gold (the most common), ivory (pure white body with white or light shell), blue (gray-blue body with iridescent blue-black shell), purple (lavender shell with darker body), magenta/pink, and various combinations. The color is genetic and maintained through selective breeding. Shell color is separate from body color — a gold body can have a dark shell, a blue body can have a lighter shell. Full color may take several months to develop as the snail grows into its adult shell.</p>

        <h2>Behavior and Feeding</h2>
        <p>Mystery snails are peaceful grazers that move slowly around the tank eating algae, biofilm, and decaying plant matter. They do not eat healthy plants — only dying or dead plant tissue. If a mystery snail is eating a live plant, the plant was already dying in that spot. They coexist with all peaceful community fish and all shrimp species. Fish that nip snail antenna (some bettas, pufferfish) should be avoided — antenna harassment stresses the snail and prevents normal feeding.</p>
        <p>Supplement their diet with: blanched vegetables (zucchini, spinach, cucumber — weighted to the bottom), commercial snail food (Hikari Crab Cuisine, Repashy Soilent Green), and algae wafers. Remove uneaten food within 24 hours to maintain water quality.</p>

        <h2>Breeding — The Egg Clutch</h2>
        <p>Mystery snails are the only commonly kept freshwater snail species that lays eggs above the waterline — a distinctive pink-to-cream colored clutch stuck to the glass above the water surface or on the tank lid. The eggs require air humidity to develop (they dry out and fail if fully submerged, and they drown if pushed into the water). Clutches hatch in 2–4 weeks depending on temperature — hatchlings drop into the water and begin grazing immediately. Unlike nerite snails, mystery snails breed readily in freshwater and populations can grow if both male and female are present — manage population by refrigerating unwanted egg clutches for several days before discarding.</p>
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
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
          <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Mystery Snail — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for mystery snail care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/mystery%20snail%20tank%20setup?s=species-mystery-snail" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Mystery Snail Setup on Amazon →</a>
          </div>
        </div>

        <ArticleSourcesList sources={SOURCES} />
      </div>
      </ArticleLayout>
    </>
  )
}
