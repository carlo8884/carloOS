import type { Metadata } from 'next'
import { StockImage, buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard , AffiliateDisclosure, ArticleSourcesList } from '@carloOS/ui'
import { FAQAccordion, SchemaScript, buildArticleSchema, buildFAQSchema, combineSchemas } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

const SOURCES = [
  { label: "Trigonostigma heteromorpha — Seriously Fish species profile", url: "https://www.seriouslyfish.com/species/trigonostigma-heteromorpha/", publisher: "Seriously Fish" },
  { label: "Trigonostigma heteromorpha — FishBase species record", url: "https://www.fishbase.se/summary/Trigonostigma-heteromorpha.html", publisher: "FishBase" },
  { label: "Kottelat, M. et al. Freshwater Fishes of Western Indonesia and Sulawesi. Periplus, 1993.", publisher: "Periplus" },
  { label: "Kottelat, M. Nomenclatural status of the fish names created by Bleeker in Poissons de Borno. Electronic Journal of Ichthyology, 2013.", publisher: "Electronic Journal of Ichthyology" },
]
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Harlequin Rasbora Care Guide — Best Community Schooler | Fish.com', description: 'Harlequin rasboras are the benchmark community schooling fish — copper-orange with a black triangular patch, peaceful, hardy, and spectacular in groups of 15+.', path: '/species/harlequin-rasbora', type: 'article' })
const articleSchema = buildArticleSchema({ siteId: 'fish-com', title: 'Harlequin Rasbora Care Guide', description: 'School size, planted tank setup, and community compatibility for Trigonostigma heteromorpha.', url: 'https://fish.com/species/harlequin-rasbora', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' ,
  citation: SOURCES,
})

const FAQS = [
  {
    question: 'How many harlequin rasboras should be kept together?',
    answer:
      'Ten is the working minimum; 15 or more produces the best display. A single harlequin is unremarkable and eight are merely pleasant — twenty moving as a cohesive school through a planted midground is one of the most satisfying sights in the freshwater hobby, with the school rotating and banking together.',
    answerText:
      'Ten minimum; 15+ for the best display. The schooling behavior that makes them worth keeping only emerges in larger groups.',
  },
  {
    question: 'Are harlequin rasboras fin-nippers?',
    answer:
      'No. Harlequins are genuinely peaceful — no fin-nipping and no aggression toward any other species, unlike tiger barbs or some serpae tetras. They are also fast and peaceful enough to be one of the more betta-compatible schooling fish.',
    answerText:
      'No — they show no fin-nipping or aggression toward any species, and they are one of the more betta-compatible schoolers.',
  },
  {
    question: 'What water conditions do harlequin rasboras need?',
    answer:
      'They come from soft, acidic blackwater habitats (pH 5.5–6.5, GH under 5) in Malaysia, Thailand, Singapore, and Sumatra, but adapt to a much wider range in captivity — pH up to 7.5 and GH up to 15 — and thrive in standard community parameters at 73–82°F. Color intensifies in slightly soft, slightly acidic water with tannins from almond leaves, botanicals, or driftwood.',
    answerText:
      'Adaptable: pH up to 7.5, GH up to 15, 73-82F. Color intensifies in soft, slightly acidic water with tannins.',
  },
  {
    question: 'How do harlequin rasboras breed?',
    answer:
      'Unusually for an egg-scatterer, they deposit adhesive eggs on the underside of broad leaves such as Echinodorus or Anubias, with the pair performing a looping, upside-down embrace beneath the leaf. Breeding requires soft, very acidic water (pH 5.5–6.0, GH under 4) and is difficult to trigger in harder water. Eggs hatch in 24–48 hours; fry need infusoria before baby brine shrimp.',
    answerText:
      'They attach eggs to the underside of broad leaves, spawning upside-down. Breeding needs pH 5.5-6.0 and GH under 4; eggs hatch in 24-48 hours.',
  },
  {
    question: 'How long do harlequin rasboras live?',
    answer:
      'Five to eight years — a substantial lifespan compared with the 2–3 years of many nano species. Hardiness across a range of water conditions is part of why they rank among the most recommended community schooling fish.',
    answerText:
      '5-8 years, notably longer than the 2-3 years typical of many nano species.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })),
})

const combinedSchema = combineSchemas(articleSchema, faqSchema)
export default function HarlequinPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Harlequin Rasbora', subtitle: 'Trigonostigma heteromorpha — the harlequin rasbora is the gold standard for community tank schooling fish. Peaceful, hardy, adaptable, and visually striking when kept in groups of 15+: the copper-orange body with the distinctive black triangular patch catches light from every angle as the school moves together.', category: 'Species Guide', authorName: 'Fish.com Editorial', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Harlequin Rasbora', href: '/species/harlequin-rasbora' }]}
      relatedLinks={[{ title: "Species Hub", href: "/species", category: "Species" }, { title: "Ember Tetra", href: "/species/ember-tetra", category: "Species Guide" }, { title: "Cherry Barb", href: "/species/cherry-barb", category: "Species Guide" }, { title: "Planted Tank Setup", href: "/setup/planted-tank-setup", category: "Tank Setup" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Scientific name', 'Trigonostigma heteromorpha'], ['Adult size', '1.75 inches'], ['Temperature', '73–82°F'], ['pH', '5.5–7.5 (prefers soft acidic)'], ['Group', '10 min — 15+ for best display'], ['Compatibility', 'Peaceful with all community fish'], ['Lifespan', '5–8 years']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Ember Tetra', href: '/species/ember-tetra' }, { label: 'Betta Tank Mates', href: '/species/betta-fish-tank-mates' }, { label: 'Cherry Shrimp', href: '/species/cherry-shrimp' }]} />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-harlequin" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-06-11T00:00:00Z" reviewedBy="Editorial team" />
            {/* Under-hero capture — source must end in under-hero so it always renders. */}
            <div className="mb-8">
              <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                Keep the harlequin-rasbora-setup checklist
              </p>
              <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                Harlequin-rasbora-setup checklist
              </h2>
              <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                Email the Trigonostigma heteromorpha
                notes that match the care copy on this
                page — a school of 10 (15+ for the
                midground display), 73–82°F and pH
                5.5–7.5, and a planted community tank
                with tannins if color should deepen.
                Educational harlequin-rasbora-setup
                checklist, not a new product hop, not
                livestock, and not a substitute for a
                fish veterinarian. The existing
                harlequin-rasbora tank-setup
                Amazon search stays below. Empty Chewy
                buttons stay hidden. No spam.
              </p>
              <EmailCapture
                variant="inline"
                siteId="fish-com"
                title="Harlequin-rasbora-setup checklist"
                subtitle="Email the school-size, planted-midground, and tannin notes. No spam."
                ctaText="Email my harlequin-rasbora-setup checklist"
                source="species-harlequin-rasbora-under-hero"
              />
            </div>
        <StockImage manifestKey="fish-com:species-harlequin-rasbora" fallbackKey="fish-com:category-species" aspect="16:9" variant="inline" caption="A harlequin rasbora in a home aquarium." priority />
        <h2>Why Harlequins Are the Benchmark Community Schooler</h2>
        <p>Among the dozens of small schooling fish available to aquarists, harlequin rasboras consistently rank as one of the most recommended because they combine everything a community tank needs: genuine peacefulness (no fin-nipping, no aggression toward any other species), hardiness across a range of water conditions (adaptable from soft acidic Southeast Asian parameters to standard community tap water), a substantial lifespan (5–8 years versus the 2–3 years of many nano species), and the visual impact of their distinctive black triangle against a warm copper-orange body that becomes more vivid as the school grows.</p>
        <p>A single harlequin rasbora is unremarkable. Eight harlequin rasboras are pleasant. Twenty harlequin rasboras moving as a cohesive school through a planted midground is one of the most satisfying things in the freshwater hobby — the school rotates and banks together, each fish's patch catching the light differently as they turn.</p>

        <h2>Water and Care</h2>
        <p>Harlequins come from the slow, tea-colored, soft, acidic waters of Malaysia, Thailand, Singapore, and Sumatra — blackwater environments with pH 5.5–6.5, GH under 5, heavy tannin staining. In captivity they adapt to a much wider range (pH up to 7.5, GH up to 15) and thrive in standard community parameters. Color intensifies in slightly soft, slightly acidic water with tannins (Indian almond leaves, botanicals, or driftwood) — the orange deepens and the black triangle becomes more distinct. Temperature 73–82°F — they tolerate the same range as most tropical community fish.</p>

        <h2>Tankmates</h2>
        <p>Universally compatible. They do not fin-nip (unlike tiger barbs or some serpae tetras), they do not bother corydoras, shrimp, or snails, and they are fast enough to avoid being eaten by larger fish in the typical community tank. Ideal companions: Corydoras of any species (same soft-water preferences), cherry and neocardinia shrimp (harlequins ignore adult shrimp and most shrimplets), otocinclus, any peaceful dwarf cichlid (apistogramma, German blue ram), betta fish (harlequins are fast and peaceful — one of the more betta-compatible schoolers), and other rasbora species.</p>

        <h2>Breeding</h2>
        <p>Harlequin rasboras are egg-scatterers with a distinctive behavior: eggs are deposited on the underside of broad leaves (Echinodorus, Anubias) rather than scattered randomly. The male and female perform a looping, upside-down spawning embrace beneath a selected leaf, depositing adhesive eggs that stick to the leaf's underside. Breeding requires soft, very acidic water (pH 5.5–6.0, GH under 4) and is difficult to trigger in harder water. Eggs hatch in 24-48 hours; parents may eat eggs if left in the breeding tank. Fry are very small and require infusoria before graduating to baby brine shrimp.</p>
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
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Harlequin Rasbora — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for harlequin rasbora care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/harlequin%20rasbora%20tank%20setup?s=species-harlequin-rasbora" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Harlequin Rasbora Setup on Amazon →</a>
          </div>
        </div>

        <ArticleSourcesList sources={SOURCES} />
      </div>
      </ArticleLayout>
    </>
  )
}
