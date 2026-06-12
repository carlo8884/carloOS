import type { Metadata } from 'next'
import { StockImage, buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard , AffiliateDisclosure, ArticleSourcesList } from '@carloOS/ui'
import { FAQAccordion, SchemaScript, buildArticleSchema, buildFAQSchema, combineSchemas } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

const SOURCES = [
  { label: "Poecilia reticulata — Seriously Fish species profile", url: "https://www.seriouslyfish.com/species/poecilia-reticulata/", publisher: "Seriously Fish" },
  { label: "Poecilia reticulata — FishBase species record", url: "https://www.fishbase.se/summary/Poecilia-reticulata.html", publisher: "FishBase" },
  { label: "Scrimshaw, N.S. & Bresan, E.M. Poeciliid Fishes. TFH Publications, 1990.", publisher: "TFH Publications" },
  { label: "Endler, J.A. Natural Selection on Color Patterns in Poecilia reticulata. Evolution, 34(1), 76–91, 1980.", publisher: "Evolution" },
]
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Guppy Care Guide — Strains, Breeding & "Guppy Disease" | Fish.com', description: 'Guppies breed constantly and are remarkably hardy — but cheap store guppies often carry disease. Fancy guppy strains, selective breeding basics.', path: '/species/guppy', type: 'article' })
const articleSchema = buildArticleSchema({ siteId: 'fish-com', title: 'Guppy Care Guide', description: 'Strains, breeding, disease prevention, and care for fancy guppies.', url: 'https://fish.com/species/guppy', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

const FAQS = [
  {
    question: 'Why do pet store guppies keep dying?',
    answer:
      'Mass-produced farm guppies frequently carry the disease complex called "guppy disease" — Columnaris (bacterial), Epistylis (protozoan), and other pathogens that circulate in crowded farm conditions. These fish often appear healthy in the store and crash within days to weeks at home. Purchasing from dedicated hobbyist breeders rather than big-box stores avoids most of the problem; breeder-quality guppies are significantly more vigorous and longer-lived.',
    answerText:
      'Mass-farmed store guppies often carry Columnaris, Epistylis, and other pathogens from crowded farm conditions and crash within weeks. Buy from dedicated breeders instead.',
  },
  {
    question: 'How often do guppies have babies?',
    answer:
      'Gestation is approximately 28 days at 76°F. A female near term shows a large, square belly and a darkened gravid spot near the vent. Newborn fry are immediately free-swimming and reach adult size at about 3 months.',
    answerText:
      'Gestation is about 28 days at 76F. Fry are born free-swimming and reach adult size at about 3 months.',
  },
  {
    question: 'Can a female guppy have fry without a male?',
    answer:
      'Yes. A female guppy can store sperm from a single mating and produce multiple broods over several months — a single female introduced to a tank can produce fry without a male present.',
    answerText:
      'Yes. Females store sperm from a single mating and can produce multiple broods over several months without a male present.',
  },
  {
    question: 'What is the best male-to-female guppy ratio?',
    answer:
      'Two to three females per male, which distributes the males’ constant pursuit and reduces stress on individual females. A male-only tank produces the most visual display with no female stress; a female-only tank is calm if breeding is not desired, though females from a mixed tank may keep producing fry from stored sperm for several months.',
    answerText:
      '2-3 females per male. Male-only tanks give the most display with no female stress; female-only tanks may still produce fry from stored sperm for months.',
  },
  {
    question: 'How long do guppies live?',
    answer:
      'Typically 2–3 years. Sourcing matters: breeder-quality guppies from established hobbyist lines kept in good conditions are noticeably more vigorous and longer-lived than mass-farmed store stock.',
    answerText:
      'Typically 2-3 years. Breeder-quality stock kept in good conditions lives longer than mass-farmed store guppies.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })),
})

const combinedSchema = combineSchemas(articleSchema, faqSchema)

export default function GuppyPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Guppy Care Guide', subtitle: 'Poecilia reticulata — the most common aquarium fish in the world, and one of the most misunderstood. Guppies have an undeserved reputation as simple, expendable beginner fish. Quality fancy guppies from reputable breeders are genuinely beautiful, complex, and engaging to keep and breed. Pet store guppies are a different situation.', category: 'Species Guide', authorName: 'Fish.com Editorial', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Guppy', href: '/species/guppy' }]}
      relatedLinks={[{ title: "Species Hub", href: "/species", category: "Species" }, { title: "Endlers Livebearer", href: "/species/endlers-livebearer", category: "Species Guide" }, { title: "Molly Fish", href: "/species/molly-fish", category: "Species Guide" }, { title: "Platy Fish", href: "/species/platy-fish", category: "Species Guide" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Scientific name', 'Poecilia reticulata'], ['Male adult size', '1.5 inches'], ['Female adult size', '2.5 inches'], ['Temperature', '72–82°F — adaptable'], ['Breeding', 'Livebearer — fry born free-swimming'], ['Gestation', '28 days at 76°F'], ['Lifespan', '2–3 years']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Platy Fish', href: '/species/guppy' }, { label: 'Endler\'s Livebearer', href: '/species/guppy' }, { label: 'Best Nano Tanks', href: '/reviews/best-nano-tanks' }]} />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-guppy" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
        <StockImage manifestKey="fish-com:species-guppy" fallbackKey="fish-com:category-species" aspect="16:9" variant="inline" caption="A guppy in a home aquarium." priority />
        <h2>The Pet Store Guppy Problem</h2>
        <p>Pet store guppies — mass-produced in fish farms with high stocking densities, variable water quality, and mixed strains — frequently carry disease, particularly the complex of conditions called "guppy disease": Columnaris (bacterial), Epistylis (protozoan), and various other pathogens that circulate in crowded farm conditions. These fish often appear healthy in the store and crash within days to weeks of entering a home aquarium. This is the source of guppies' undeserved reputation as "fragile."</p>
        <p>The solution: purchase guppies from dedicated breeders rather than big-box pet stores. Breeder-quality guppies from established hobbyist breeders are significantly more vigorous, healthier, and longer-lived — they come from line-bred strains maintained in better conditions with selective pressure for health and quality. The Guppy Breeders Guild and IFGA (International Fancy Guppy Association) maintain breeder directories.</p>

        <h2>Fancy Guppy Strains</h2>
        <p>Selective breeding over decades has produced guppy strains with dramatically different tail forms, fin shapes, and color patterns recognized by the IFGA. Major tail types: delta (large, triangular — the most common fancy type), fan tail, veil tail (long flowing), sword tail (single extension — upper, lower, or double), and lyre tail (matching extensions top and bottom). Pattern categories: solid color (moscow blue, moscow green), multi-color, snakeskin (cobweb-like scale pattern), grass (tiny spots throughout tail), half-black (rear half dark), and metal/neon (iridescent).</p>
        <p>Breeding a fancy strain requires understanding basic genetics — the X-linked color genes, the autosomal pattern genes, and how they interact. The IFGA show standard scores fish on tail form, color consistency, body shape, and dorsal development — working toward the standard within a strain is the hobby within the hobby for guppy breeders.</p>

        <h2>Breeding — Managing the Inevitable</h2>
        <p>Guppies breed constantly in appropriate conditions. A female guppy can store sperm from a single mating and produce multiple broods over several months — a single female introduced to a tank can produce fry without a male present. Gestation is approximately 28 days at 76°F; a female near term shows a large, square belly and a darkened gravid spot (the embryos visible through the abdominal wall) near the vent.</p>
        <p>Fry management: newborn guppies are immediately free-swimming and capable of eating fine foods. Adults and other fish will eat fry given the opportunity. In a heavily planted tank, enough fry survive in vegetation to maintain a colony without intervention. For breeding projects: a separate breeding tank or breeding box allows fry isolation. Feed fry micro worms, baby brine shrimp, and crushed flake from day 1. Fry reach adult size at 3 months.</p>

        <h2>Sex Ratio and Tank Dynamics</h2>
        <p>Male guppies harass females relentlessly — constant pursuit for mating is their natural behavior and stresses females significantly in confined environments. Recommended ratio: 2–3 females per male, which distributes the males' attention. A male-only tank produces the most visual display with no female stress. Females-only tanks are calm and can be kept if breeding is not desired (females from a mixed tank may continue producing fry from stored sperm for several months). A single male with multiple females in a planted tank with ample cover produces the most natural behavior pattern.</p>

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
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Guppy — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for guppy care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/guppy%20tank%20setup?s=species-guppy" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Guppy Setup on Amazon →</a>
            <a href="/go/chewy-brand/guppy%20tank%20setup?s=species-guppy" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

        <ArticleSourcesList sources={SOURCES} />
      </div>
      </ArticleLayout>
    </>
  )
}
