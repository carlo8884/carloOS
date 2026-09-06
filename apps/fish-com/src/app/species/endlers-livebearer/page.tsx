import type { Metadata } from 'next'
import { StockImage, buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard , AffiliateDisclosure, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema, FAQAccordion, SchemaScript, buildFAQSchema, combineSchemas } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'

const SOURCES = [
  { label: "Poecilia wingei — Seriously Fish species profile", url: "https://www.seriouslyfish.com/species/poecilia-wingei/", publisher: "Seriously Fish" },
  { label: "Poecilia wingei — FishBase species record", url: "https://www.fishbase.se/summary/Poecilia-wingei.html", publisher: "FishBase" },
  { label: "Poeser, F.N. et al. Description of Poecilia (Acanthophacelus) wingei n. sp. Contributions to Zoology, 2005.", publisher: "Contributions to Zoology" },
  { label: "Endler, J.A. Natural Selection on Color Patterns in Poecilia reticulata. Evolution, 34(1), 76–91, 1980.", publisher: "Evolution" },
]
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: "Endler's Livebearer Care Guide — The Nano Guppy | Fish.com", description: "Endler's livebearers are tiny, dazzling, prolific guppy relatives ideal for nano tanks. Easy to keep, easy to breed, and they hybridize freely with guppies.", path: '/species/endlers-livebearer', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: "Endler's Livebearer Care Guide", description: "Care, hybridization, and breeding for Poecilia wingei, the Endler's livebearer.", url: 'https://fish.com/species/endlers-livebearer', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' ,
  citation: SOURCES,
})

const FAQS = [
  {
    question: 'Can Endlers livebearers live with guppies?',
    answer:
      'Only if you do not care about keeping a pure line. Endlers interbreed freely with common guppies (Poecilia reticulata), to which they are very closely related, producing fertile hybrids. Over a few generations a pure Endler line is permanently lost. To maintain pure-strain "N-class" Endlers, keep them entirely separate from guppies — even a single accidental cross contaminates the strain.',
    answerText:
      'Not if you want a pure line. Endlers and guppies hybridize readily and irreversibly, producing fertile hybrids. Keep pure N-class Endlers entirely separate from guppies.',
  },
  {
    question: 'What water parameters do Endlers livebearers need?',
    answer:
      'Endlers thrive in the same harder, slightly alkaline water that suits guppies and other livebearers: pH 7.0–8.0 with moderate hardness, at a temperature of 72–80°F. Soft, acidic blackwater conditions are not ideal. They are otherwise undemanding as long as the tank is cycled and nitrate is kept in check.',
    answerText:
      'Endlers prefer harder, slightly alkaline water: pH 7.0-8.0, moderate hardness, and 72-80F. Soft acidic water is not ideal. Keep the tank cycled with low nitrate.',
  },
  {
    question: 'What size tank do Endlers livebearers need?',
    answer:
      'A 10-gallon tank can support a lively colony. Endlers are small (about an inch, males smaller) and active, so even a nano tank houses a sizeable group, ideally heavily planted with fine-leaved and floating plants for fry cover.',
    answerText:
      'A 10-gallon tank supports a lively colony. At about an inch, Endlers fit a nano tank; heavy planting provides fry cover.',
  },
  {
    question: 'How fast do Endlers livebearers breed?',
    answer:
      'Very fast. Like all livebearers they bear free-swimming fry rather than laying eggs, and a single female can produce a brood every three to four weeks. In a densely planted tank with floating cover, enough fry survive to sustain a self-replenishing colony with no intervention — so plan for the surplus or keep a males-only tank.',
    answerText:
      'Very fast — a female can produce a brood every three to four weeks. In a planted tank a colony self-sustains, so plan for surplus or keep males only.',
  },
  {
    question: 'What are good tankmates for Endlers livebearers?',
    answer:
      'Other small, calm species: pygmy corydoras, otocinclus, small rasboras, and dwarf shrimp such as cherry shrimp. Avoid anything large enough to view a one-inch fish as a snack.',
    answerText:
      'Pair Endlers with small, calm species: pygmy corydoras, otocinclus, small rasboras, and cherry shrimp. Avoid fish large enough to eat a one-inch fish.',
  },
]

const faqSchema = buildFAQSchema({ questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })) })
const combinedSchema = combineSchemas(schema, faqSchema)

export default function EndlersLivebearerPage() {
  return (
    <>
    <SchemaScript schema={combinedSchema} />
    <ArticleLayout siteId="fish-com"
      hero={{ title: "Endler's Livebearer Care Guide", subtitle: "Poecilia wingei — the Endler's livebearer is a diminutive cousin of the guppy, prized for the neon-bright metallic patches of orange, green, and black that males display in a body barely an inch long. Hardy, peaceful, and astonishingly prolific, Endlers are one of the best fish for a planted nano aquarium and a favorite of livebearer enthusiasts worldwide.", category: 'Species Guide', authorName: 'Fish.com Editorial', publishedAt: 'June 2026', readTime: '7 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: "Endler's Livebearer", href: '/species/endlers-livebearer' }]}
      relatedLinks={[{ title: "Species Hub", href: "/species", category: "Species" }, { title: "Guppy", href: "/species/guppy", category: "Species Guide" }, { title: "Molly Fish", href: "/species/molly-fish", category: "Species Guide" }, { title: "Platy Fish", href: "/species/platy-fish", category: "Species Guide" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Scientific name', 'Poecilia wingei'], ['Adult size', '1 inch (males smaller)'], ['Temperature', '72–80°F'], ['pH', '7.0–8.0 (harder water)'], ['Tank size', '10 gallons'], ['Reproduction', 'Livebearer — very prolific'], ['Lifespan', '2–3 years']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Guppy', href: '/species/guppy' }, { label: 'Cherry Shrimp', href: '/species/cherry-shrimp' }, { label: 'Nano Tank Setup', href: '/setup/nano-tank-setup' }]} />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-endlers-livebearer" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-11T00:00:00Z" reviewedBy="Editorial team" />
            {/* Under-hero capture — source must end in under-hero so it always renders. */}
            <div className="mb-8">
              <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                Keep the endlers-livebearer-setup checklist
              </p>
              <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                Endlers-livebearer-setup checklist
              </h2>
              <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                Email the Poecilia wingei
                notes that match the care copy on this
                page — a planted 10-gallon colony,
                72–80°F and pH 7.0–8.0 harder water,
                floating cover for fry, and no guppies
                if the N-class line must stay pure.
                Educational endlers-livebearer-setup
                checklist, not a new product hop, not
                livestock, and not a substitute for a
                fish veterinarian. The existing
                endlers-livebearer nano tank-setup
                Amazon search stays below. Empty Chewy
                buttons stay hidden. No spam.
              </p>
              <EmailCapture
                variant="inline"
                siteId="fish-com"
                title="Endlers-livebearer-setup checklist"
                subtitle="Email the 10-gallon, harder-water, and no-guppy notes. No spam."
                ctaText="Email my endlers-livebearer-setup checklist"
                source="species-endlers-livebearer-under-hero"
              />
            </div>
        <StockImage manifestKey="fish-com:species-endlers-livebearer" fallbackKey="fish-com:category-species" aspect="16:9" variant="inline" caption="An Endler’s livebearer in a home aquarium." priority />

        <h2>A Nano Powerhouse</h2>
        <DropCap>The Endler's livebearer packs more color into a one-inch body than almost any other freshwater fish. Originally found in the Laguna de Patos region of Venezuela, the species was nearly lost in the wild and survives largely through aquarium populations and dedicated hobbyist breeders. Its small size, peaceful nature, and hardiness make it ideal for nano and planted tanks where a full-sized guppy would feel cramped. Males are the showpieces, flashing metallic patches and performing constant courtship displays; females are larger, plainer, and silvery. Because they are so small and active, even a 10-gallon tank can support a lively colony.</DropCap>
        <p>Endlers thrive in the same harder, slightly alkaline water that suits guppies and other livebearers — a pH of 7.0 to 8.0 with moderate hardness. Soft, acidic blackwater conditions are not ideal for them. They are otherwise undemanding as long as the tank is cycled and nitrate is kept in check.</p>

        <h2>The Hybridization Question</h2>
        <p>The most important thing to understand about Endlers is that they interbreed freely with common guppies (Poecilia reticulata), to which they are very closely related. Housed together, the two will produce fertile hybrids, and over a few generations a pure Endler line is permanently lost. Keepers who want to maintain pure-strain Endlers — designated "N-class" for wild-type lineages — must keep them entirely separate from guppies. Many fish sold as Endlers in chain stores are in fact guppy hybrids ("K-class"). This is a matter of preserving a conservation-sensitive species, not merely aesthetics.</p>

        <CalloutBox variant="warning" title="Do not mix with guppies">
          Endlers and guppies hybridize readily and irreversibly. To keep a pure Endler line, never house them with common guppies — even a single accidental cross contaminates the strain.
        </CalloutBox>

        <h2>Prolific Breeding</h2>
        <p>Like all livebearers, Endlers give birth to free-swimming fry rather than laying eggs, and they breed relentlessly. A single female can produce a brood every three to four weeks. In a densely planted tank with floating cover, enough fry survive predation to sustain a self-replenishing colony with no intervention at all. This abundance is a feature for hobbyists who enjoy watching a population thrive, but it does require either a plan for the surplus or a males-only tank to prevent runaway numbers.</p>

        <h2>Tankmates and Setup</h2>
        <p>Endlers are perfectly peaceful and pair well with other small, calm species: pygmy corydoras, otocinclus, small rasboras, and dwarf shrimp such as cherry shrimp. Avoid anything large enough to view a one-inch fish as a snack. A heavily planted tank with fine-leaved and floating plants offers fry cover and shows off the males' colors against a green backdrop. Feed small, frequent meals of quality flake, micro-pellets, and frozen baby brine shrimp.</p>
        <h2>Frequently Asked Questions</h2>
        <FAQAccordion items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answerText }))} includeSchema={false} allowMultiple />
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
          <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Endler&apos;s Livebearer — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse nano tanks, sponge filters, heaters, live plants, and food sized for Endler&apos;s livebearer care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/endlers%20livebearer%20nano%20tank%20setup?s=species-endlers-livebearer" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Endler&apos;s Setup on Amazon →</a>
          </div>
        </div>
        <ArticleSourcesList sources={SOURCES} />
      </div>
    </ArticleLayout>
    </>
  )
}
