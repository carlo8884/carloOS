import type { Metadata } from 'next'
import { StockImage, buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard , AffiliateDisclosure, ArticleSourcesList } from '@carloOS/ui'
import { FAQAccordion, SchemaScript, buildArticleSchema, buildFAQSchema, combineSchemas } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

const SOURCES = [
  { label: "Pangio kuhlii — Seriously Fish species profile", url: "https://www.seriouslyfish.com/species/pangio-kuhlii/", publisher: "Seriously Fish" },
  { label: "Pangio kuhlii — FishBase species record", url: "https://www.fishbase.se/summary/Pangio-kuhlii.html", publisher: "FishBase" },
  { label: "Kottelat, M. et al. Freshwater Fishes of Western Indonesia and Sulawesi. Periplus, 1993.", publisher: "Periplus" },
  { label: "Ng, H.H. & Kottelat, M. The Pangio kuhlii species complex. Ichthyological Exploration of Freshwaters, 1998.", publisher: "Ichthyological Exploration of Freshwaters" },
]
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Kuhli Loach Care Guide — Sand Substrate, Groups | Fish.com', description: 'Kuhli loaches are eel-shaped bottom fish that require sand, groups of 6+, and dense hiding spots. Nocturnal scavengers that vanish during the day — care guide.', path: '/species/kuhli-loach', type: 'article' })
const articleSchema = buildArticleSchema({ siteId: 'fish-com', title: 'Kuhli Loach Care Guide', description: 'Sand substrate, group size, and hiding requirements for kuhli loaches.', url: 'https://fish.com/species/kuhli-loach', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' ,
  citation: SOURCES,
})

const FAQS = [
  {
    question: 'Do kuhli loaches need sand substrate?',
    answer:
      'Yes — sand is a welfare requirement, not a preference. Kuhli loaches burrow, and their soft, scaleless skin is easily damaged by coarse gravel or sharp substrates. On gravel they injure themselves attempting to burrow and develop skin abrasions that lead to infection. Use fine sand at a minimum depth of 2 inches so they can bury themselves properly.',
    answerText:
      'Yes. Their soft, scaleless skin is damaged by gravel. Fine sand at a minimum 2-inch depth is required so they can burrow safely.',
  },
  {
    question: 'How many kuhli loaches should be kept together?',
    answer:
      'Six or more. Kept singly or in pairs they are stressed, reclusive, and spend virtually all their time hiding. In groups of 6+, they pile together in hides, emerge more frequently, and show real social behavior — a group of 10+ in a planted tank with adequate hiding spots is genuinely entertaining, especially around feeding time.',
    answerText:
      'Six or more is required; singly or in pairs they stay hidden and stressed. Groups of 10+ produce the most active, visible behavior.',
  },
  {
    question: 'Why can I never see my kuhli loaches?',
    answer:
      'They are crepuscular to nocturnal and bury themselves completely in sand when stressed or during the day — finding nothing but sand after adding kuhli loaches is normal. Counterintuitively, more hiding spots mean more visible loaches: in a densely planted tank with hollow driftwood, caves, and PVC sections, they feel secure enough to venture out, especially at dusk.',
    answerText:
      'They are nocturnal and bury themselves in sand by day. More hiding spots make them feel secure enough to come out, especially at dusk.',
  },
  {
    question: 'What do kuhli loaches eat?',
    answer:
      'Sinking foods: sinking micro pellets, sinking algae wafers, and frozen foods that reach the bottom — bloodworms, daphnia, and brine shrimp. Feed at lights-out so they can find food without competition from surface and mid-water feeders. They are scavengers, not algae-grazers — they do not eat hair algae or soft algae the way plecos and otocinclus do.',
    answerText:
      'Sinking micro pellets, algae wafers, and frozen bloodworms, daphnia, and brine shrimp, fed at lights-out. They scavenge — they do not graze algae.',
  },
  {
    question: 'How long do kuhli loaches live?',
    answer:
      'Ten or more years with proper care. They prefer soft, slightly acidic water (pH 6.0–7.0) at 75–82°F but adapt to neutral community conditions. Check filter inlets and lid gaps before adding them — kuhli loaches can squeeze through extremely small openings, so use a pre-filter sponge on intakes.',
    answerText:
      '10+ years with proper care, in soft slightly acidic water at 75-82F. Cover filter inlets and lid gaps — they squeeze through tiny openings.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })),
})

const combinedSchema = combineSchemas(articleSchema, faqSchema)
export default function KuhliLoachPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Kuhli Loach Care Guide', subtitle: 'Pangio kuhlii — the eel-shaped, tiger-banded loach that spends most of its life invisible under substrate, inside decorations, or tangled in a pile with other kuhli loaches. They are real fish, they are alive, and they are wonderful — you just rarely see them until the lights go out.', category: 'Species Guide', authorName: 'Fish.com Editorial', publishedAt: 'May 2025', readTime: '7 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Kuhli Loach', href: '/species/kuhli-loach' }]}
      relatedLinks={[{ title: "Species Hub", href: "/species", category: "Species" }, { title: "Corydoras", href: "/species/corydoras", category: "Species Guide" }, { title: "Otocinclus", href: "/species/otocinclus", category: "Species Guide" }, { title: "Low-Tech Planted Tank", href: "/setup/low-tech-planted-tank", category: "Tank Setup" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Size', '3–4 inches'], ['Group', '6+ required'], ['Substrate', 'Fine sand — essential'], ['Activity', 'Nocturnal — rarely visible daytime'], ['Temperature', '75–86°F'], ['pH', '5.5–7.0 (soft acidic preferred)'], ['Lifespan', '10+ years']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Corydoras Care', href: '/species/corydoras' }, { label: 'Otocinclus Care', href: '/species/otocinclus' }, { label: 'Cherry Shrimp', href: '/species/cherry-shrimp' }]} />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-kuhli-loach" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-06-11T00:00:00Z" reviewedBy="Editorial team" />
        <StockImage manifestKey="fish-com:species-kuhli-loach" fallbackKey="fish-com:category-species" aspect="16:9" variant="inline" caption="A kuhli loach in a home aquarium." priority />
        <h2>Sand Substrate — Non-Negotiable</h2>
        <p>Kuhli loaches burrow into substrate. Their soft, scaleless skin is easily damaged by coarse gravel or sharp substrates. Fine sand (pool filter sand, Caribsea Super Naturals, or play sand) is required. In gravel substrates, kuhli loaches attempt to burrow and injure themselves, become stressed, and develop skin abrasions that lead to infection. This is not optional — sand is a welfare requirement for kuhli loaches, not a preference.</p>
        <p>Depth matters: a minimum of 2 inches of fine sand allows them to burrow properly. They will bury themselves completely when stressed or during the day. Finding nothing but sand in the tank after adding kuhli loaches is normal — they are simply hiding.</p>

        <h2>Groups — Why 6+ Changes Everything</h2>
        <p>Kuhli loaches kept singly or in pairs are stressed, reclusive, and spend virtually all their time hiding. In groups of 6+, they become significantly more active — they pile together in hides, emerge more frequently, and exhibit the social behavior that makes them interesting. A group of 10+ kuhli loaches in a planted tank with appropriate hiding spots produces genuinely entertaining behavior, particularly around feeding time when they actively hunt through the substrate.</p>

        <h2>Hiding Spots — More Is More</h2>
        <p>Kuhli loaches are crepuscular to nocturnal and need dense hiding options: hollow driftwood, PVC pipe sections, caves, dense Java moss, and floating plants that reduce light intensity. The more hiding spots, the more secure they feel and the more they venture out. A sparsely decorated tank with kuhli loaches will have invisible kuhli loaches. A densely planted tank with multiple hides will have active, visible (especially at dusk) kuhli loaches.</p>

        <h2>Feeding</h2>
        <p>Bottom scavengers that eat sinking foods. Primary: sinking micro pellets (Hikari Micro Wafers), sinking algae wafers, and frozen foods that reach the bottom — frozen bloodworms (they go wild for these), frozen daphnia, frozen brine shrimp. Feed at lights-out so they can find food without competition from surface and mid-water feeders. They will also scavenge any uneaten food that reaches the bottom — a useful cleanup function. They do not eat hair algae or soft algae the way plecos and otocinclus do — their feeding is scavenging-based, not algae-grazing.</p>

        <h2>Water Parameters and Compatibility</h2>
        <p>Prefer soft, slightly acidic water (pH 6.0–7.0) with good warmth (75–82°F). Adaptable to neutral community tank conditions. Compatible with virtually all peaceful community fish — they occupy bottom territory that does not overlap with mid-water or surface fish. Compatible with peaceful shrimp (they may eat very small shrimp but ignore adult cherry shrimp and larger). Avoid aggressive cichlids and any fish large enough to eat a 4-inch loach.</p>
        <p>Warning: kuhli loaches can squeeze through extremely small gaps in tank lids and equipment — check for any openings in filter inlets (use a pre-filter sponge) and lid gaps before adding them. They will find any gap and explore it.</p>
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
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Kuhli Loach — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for kuhli loach care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/kuhli%20loach%20tank%20setup?s=species-kuhli-loach" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Kuhli Loach Setup on Amazon →</a>
            <a href="/go/chewy-brand/kuhli%20loach%20tank%20setup?s=species-kuhli-loach" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

        <ArticleSourcesList sources={SOURCES} />
      </div>
      </ArticleLayout>
    </>
  )
}
