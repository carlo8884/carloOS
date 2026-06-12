import type { Metadata } from 'next'
import { StockImage, buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard , AffiliateDisclosure, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema, FAQAccordion, SchemaScript, buildFAQSchema, combineSchemas } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

const SOURCES = [
  { label: "Melanotaenia spp. — Seriously Fish species profiles", url: "https://www.seriouslyfish.com/taxonomy/melanotaenia/", publisher: "Seriously Fish" },
  { label: "Melanotaenia lacustris — FishBase species record", url: "https://www.fishbase.se/summary/Melanotaenia-lacustris.html", publisher: "FishBase" },
  { label: "Allen, G.R. & Cross, N.J. Rainbowfishes of Australia and Papua New Guinea. TFH Publications, 1982.", publisher: "TFH Publications" },
  { label: "Boseto, D. & Morrison, C. Freshwater Fishes of the Pacific Islands. Secretariat of the Pacific Regional Environment Programme, 2011.", publisher: "SPREP" },
]
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Rainbowfish Care Guide — Australian Species | Fish.com', description: 'Rainbowfish are underrated community gems. Boesemani, Turquoise, and Dwarf Neon rainbows need groups of 6+, quality food to develop color.', path: '/species/rainbow-fish', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Rainbowfish Care Guide', description: 'School size, water requirements, and color development for Melanotaeniidae rainbowfish.', url: 'https://fish.com/species/rainbow-fish', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' ,
  citation: SOURCES,
})

const FAQS = [
  {
    question: 'Why do rainbowfish look dull in the store?',
    answer:
      'Rainbowfish reach full color only under specific conditions, and store fish are usually pale juveniles. Full color develops at 9–18 months and requires maturity, clean water (nitrate under 20 ppm), a varied high-quality diet (spirulina-based flakes plus frozen daphnia and brine shrimp to develop the carotenoid pigments behind red and orange), and social stimulation from a mixed-sex group. The same fish that looks plain in a bare store tank colors up markedly in a planted tank with clean water and good food.',
    answerText:
      'Store rainbowfish are usually pale juveniles. Full color develops at 9-18 months with maturity, clean water (nitrate under 20 ppm), a varied diet, and a mixed-sex group.',
  },
  {
    question: 'How many rainbowfish should I keep together?',
    answer:
      'Rainbowfish school by species and are more comfortable and colorful in groups of 6 or more. Mixed-species groups (for example 3 Boesemani, 3 Turquoise, 4 Praecox) coexist peacefully and all benefit from the security of conspecifics. A 2:1 or 3:1 female-to-male ratio spreads out male display behavior without excessive harassment of individual females.',
    answerText:
      'Keep groups of 6 or more. Mixed-species groups coexist peacefully, and a 2:1 or 3:1 female-to-male ratio spreads out male display behavior.',
  },
  {
    question: 'What water parameters do rainbowfish need?',
    answer:
      'Most rainbowfish come from hard, slightly alkaline water in Australian lakes and New Guinea river systems — the opposite of soft acidic South American conditions. pH 7.0–8.0 and GH 8–15 suits most species, making them ideal for hard-water areas. Do not keep Boesemani in the low-pH soft water used for discus; the requirements are incompatible.',
    answerText:
      'Rainbowfish prefer hard, slightly alkaline water: pH 7.0-8.0 and GH 8-15. They are ideal for hard-water areas and should not share a soft, low-pH discus tank.',
  },
  {
    question: 'Are rainbowfish good community fish?',
    answer:
      'Yes, with the right companions. They are peaceful, active mid-water swimmers compatible with corydoras, bristlenose plecos, livebearers, and blue-eyes (Pseudomugil), and are fast enough to coexist with moderately boisterous species. Avoid very small, delicate fish that could fit in their mouths, and avoid soft-water species needing very different parameters.',
    answerText:
      'Yes — they are peaceful, active mid-water swimmers compatible with corydoras, plecos, livebearers, and blue-eyes. Avoid tiny fish they could eat and soft-water species.',
  },
]

const faqSchema = buildFAQSchema({ questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })) })
const combinedSchema = combineSchemas(schema, faqSchema)

export default function RainbowFishPage() {
  return (
    <>
    <SchemaScript schema={combinedSchema} />
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Rainbowfish Care Guide', subtitle: 'The Melanotaeniidae family — native to Australia, New Guinea, and nearby islands — produces some of the most spectacularly colored fish in the freshwater hobby when kept correctly. The problem: rainbowfish in fish store tanks rarely show their full color potential. A mature male Boesemani rainbowfish in a well-maintained planted tank with good food is a dramatically different animal from the pale juvenile in a stock tank.', category: 'Species Guide', authorName: 'Fish.com Editorial', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Rainbowfish', href: '/species/rainbow-fish' }]}
      relatedLinks={[{ title: "Species Hub", href: "/species", category: "Species" }, { title: "Boesemani Rainbowfish", href: "/species/boesemani-rainbowfish", category: "Species Guide" }, { title: "Harlequin Rasbora", href: "/species/harlequin-rasbora", category: "Species Guide" }, { title: "Planted Tank Setup", href: "/setup/planted-tank-setup", category: "Tank Setup" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Popular Species</div>
          {[['Boesemani (M. boesemani)', '4" · Blue/orange split · Hardy'], ['Turquoise (M. lacustris)', '4" · Blue-green · Active'], ['Praecox/Dwarf Neon', '2" · Neon blue · Nano safe'], ['Threadfin (I. werneri)', '1.5" · Delicate · Nano species'], ['Banded (M. trifasciata)', '4.5" · Rainbow shimmer']].map(([n, d]) => (
            <div key={n} className="py-2 border-b border-brand-border last:border-0">
              <div className="text-xs font-bold text-brand-dark">{n}</div>
              <div className="text-2xs text-brand-text-light">{d}</div>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Harlequin Rasbora', href: '/species/harlequin-rasbora' }, { label: 'Neon Tetra', href: '/species/neon-tetra' }, { label: 'Planted Tank Setup', href: '/setup/planted-tank-setup' }]} />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-rainbowfish" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-06-11T00:00:00Z" reviewedBy="Editorial team" />
        <StockImage manifestKey="fish-com:species-rainbow-fish" fallbackKey="fish-com:category-species" aspect="16:9" variant="inline" caption="A rainbowfish in a home aquarium." priority />
        <h2>Color Development — Why Your Rainbowfish Looks Different</h2>
        <p>Rainbowfish are notoriously dull-looking in fish stores and reach their full color potential only under specific conditions: maturity (full color at 9–18 months — juveniles are pale), clean water (nitrate under 20 ppm — consistent water changes), varied high-quality diet (spirulina-based flakes plus frozen daphnia and brine shrimp develop the carotenoid pigments responsible for red and orange coloration), and social stimulation (males display to each other and to females — a mixed-sex group in the correct ratio produces the best coloration). A Boesemani rainbowfish in a bare tank with poor water and flake food is unimpressive. The same fish in a planted tank with clean water, good food, and other rainbowfish is stunning.</p>

        <h2>Groups and Social Requirements</h2>
        <p>Rainbowfish school by species and are more comfortable and display better in groups of 6+. Mixed-species rainbowfish groups (3 Boesemani + 3 Turquoise + 4 Praecox) work well — different species do not school as tightly together but coexist peacefully and all benefit from the security of conspecifics. Males display more intensely when competing for female attention — a 2:1 or 3:1 female:male ratio spreads the display behavior without excessive male harassment of individual females.</p>

        <h2>Water Requirements</h2>
        <p>Most rainbowfish species come from hard, slightly alkaline water in Australian lakes and New Guinea river systems — the opposite of the soft acidic water that South American species prefer. pH 7.0–8.0 and GH 8–15 suits most species. This makes rainbowfish ideal for areas with hard tap water where softer-water species struggle. They are adaptable to a wider range than their native conditions, but the alkaline hard water preference is consistent. Do not try to keep Boesemani in the same low-pH soft water tank as discus — the requirements are incompatible.</p>

        <h2>Compatibility</h2>
        <p>Rainbowfish are peaceful, active mid-water swimmers compatible with most community fish that share similar water preferences — corydoras catfish, bristlenose plecos, livebearers, Australian rainbowfish companions like blue-eyes (Pseudomugil species). They are fast enough to coexist with moderately aggressive species. Avoid keeping with very small, delicate fish (they may eat fish small enough to fit in their mouth) or with soft-water species requiring dramatically different parameters. They are excellent companions for hard-water tetras like Buenos Aires tetras.</p>
        <h2>Frequently Asked Questions</h2>
        <FAQAccordion items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answerText }))} includeSchema={false} allowMultiple />
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
          <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Rainbow Fish — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for rainbow fish care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/rainbow%20fish%20tank%20setup?s=species-rainbow-fish" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Rainbow Fish Setup on Amazon →</a>
            <a href="/go/chewy-brand/rainbow%20fish%20tank%20setup?s=species-rainbow-fish" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

        <ArticleSourcesList sources={SOURCES} />
      </div>
      </ArticleLayout>
    </>
  )
}
