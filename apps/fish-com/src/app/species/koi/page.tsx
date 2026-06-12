import type { Metadata } from 'next'
import { StockImage, buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard , AffiliateDisclosure, ArticleSourcesList } from '@carloOS/ui'
import { FAQAccordion, SchemaScript, buildArticleSchema, buildFAQSchema, combineSchemas } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

const SOURCES = [
  { label: "Cyprinus rubrofuscus (Koi) — FishBase species record", url: "https://www.fishbase.se/summary/Cyprinus-rubrofuscus.html", publisher: "FishBase" },
  { label: "Smartt, J. Goldfish Varieties and Genetics: A Handbook for Breeders. Blackwell Science, 2001.", publisher: "Blackwell Science" },
  { label: "Koi Herpesvirus (KHV) Disease — USDA APHIS", url: "https://www.aphis.usda.gov/animal_health/aquaculture/downloads/khv_disease.pdf", publisher: "USDA APHIS" },
  { label: "Pond Fish Management — UF/IFAS Extension FA-9", url: "https://edis.ifas.ufl.edu/publication/FA009", publisher: "UF/IFAS Extension" },
]
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Koi Fish Care Guide — Pond Size, Filtration | Fish.com', description: 'Koi need 250+ gallons per fish, heavy pond filtration, and regular water changes. Kohaku, Taisho Sanke, Showa, and other varieties.', path: '/species/koi', type: 'article' })
const articleSchema = buildArticleSchema({ siteId: 'fish-com', title: 'Koi Fish Care Guide', description: 'Pond size requirements, filtration, water quality, and variety overview for koi fish.', url: 'https://fish.com/species/koi', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

const FAQS = [
  {
    question: 'Can koi live in an aquarium?',
    answer:
      'No — koi are pond fish, not aquarium fish. They can reach 24–36 inches and live 25–35+ years, and their size, waste production, and behavioral needs require a purpose-built pond environment rather than a large aquarium.',
    answerText:
      'No. Koi reach 24-36 inches and live 25-35+ years; their size and waste production require a purpose-built pond.',
  },
  {
    question: 'How big a pond do koi need?',
    answer:
      'The guideline of 250 gallons per koi is a conservative minimum; experienced keepers recommend 500–1,000 gallons per fish for high-quality water and optimal growth. A 1,000-gallon pond supports 4–5 small-to-medium koi sustainably; 2,500 gallons is the realistic minimum for a collection of 6–8. Depth of 3+ feet buffers temperature and deters predators.',
    answerText:
      '250 gallons per koi minimum (500-1,000 preferred). A 1,000-gallon pond supports 4-5 koi; 2,500 gallons for 6-8. Depth 3+ feet.',
  },
  {
    question: 'How fast do koi grow?',
    answer:
      'A koi purchased at 6 inches will reach 18–24 inches within 3–5 years under good conditions. Overstocking degrades water quality, stunts growth, stresses fish, and leads to disease — adding more fish to an existing pond is the most common route to a koi health disaster.',
    answerText:
      'A 6-inch koi reaches 18-24 inches within 3-5 years under good conditions. Overstocking stunts growth and causes disease.',
  },
  {
    question: 'When should I stop feeding koi?',
    answer:
      'Stop feeding below 50°F. Koi metabolize food slowly in cold water and undigested food causes health problems. Match the food to the season: high-protein pellets in summer (water above 65°F), wheat germ-based food in spring and fall, and nothing once the water drops below 50°F as they enter winter semi-dormancy.',
    answerText:
      'Stop feeding below 50F water temperature. Use high-protein food above 65F and wheat germ-based food in spring and fall.',
  },
  {
    question: 'What are the main koi varieties?',
    answer:
      'The "Big 3" of traditional Japanese judging: Kohaku (white body with red pattern), Taisho Sanke (white base with red and black, no black on the head), and Showa (black base with red and white, black wrapping the body and head). Other popular varieties include Ogon (solid metallic), Asagi, Butterfly koi (long fins), and Doitsu (reduced scales).',
    answerText:
      'The Big 3: Kohaku (white with red), Taisho Sanke (white with red and black), Showa (black base with red and white). Also Ogon, Asagi, Butterfly, Doitsu.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })),
})

const combinedSchema = combineSchemas(articleSchema, faqSchema)

export default function KoiPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Koi Fish Care Guide', subtitle: 'Cyprinus rubrofuscus — koi are among the most striking and long-lived ornamental fish available, capable of reaching 24–36 inches and living 25–35+ years with proper care. They are pond fish, not aquarium fish. Their size, waste production, and behavioral needs require a purpose-built pond environment, not a large aquarium.', category: 'Species Guide — Pond', authorName: 'Fish.com Editorial', publishedAt: 'May 2025', readTime: '10 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Koi', href: '/species/koi' }]}
      relatedLinks={[{ title: "Species Hub", href: "/species", category: "Species" }, { title: "Goldfish", href: "/species/goldfish", category: "Species Guide" }, { title: "Pond Guide", href: "/setup/pond-guide", category: "Tank Setup" }, { title: "Water Chemistry Guide", href: "/setup/water-chemistry-guide", category: "Tank Setup" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Pond Requirements</div>
          {[['Min pond volume', '1,000 gallons for 4-5 koi'], ['Per koi rule', '250 gallons per fish (minimum)'], ['Depth', '3+ feet (temperature buffer, predator deterrence)'], ['Filtration', 'Mechanical + biological — size for 2× fish load'], ['Water changes', '10-25% weekly minimum'], ['Temperature', '59–77°F optimal — cold tolerant in winter']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Pond Setup Guide', href: '/setup/pond-guide' }, { label: 'Goldfish Care', href: '/species/goldfish' }, { label: 'Water Chemistry', href: '/setup/water-chemistry-guide' }]} />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Pond and fishkeeping tips." source="species-koi" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
        <StockImage manifestKey="fish-com:species-koi" fallbackKey="fish-com:category-species" aspect="16:9" variant="inline" caption="A koi in a home aquarium." priority />
        <h2>Pond Size — The Non-Negotiable</h2>
        <p>The most common koi husbandry mistake: underestimating pond size requirements. A single koi purchased at 6 inches will reach 18–24 inches within 3–5 years under good conditions. Koi produce substantial waste — ammonia load per fish is significantly higher than smaller pond fish. The guideline of 250 gallons per koi is a conservative minimum; experienced koi keepers recommend 500–1,000 gallons per fish for high-quality water conditions and optimal growth.</p>
        <p>A 1,000-gallon pond supports 4–5 small-to-medium koi sustainably. A 2,500-gallon pond is the realistic minimum for a serious koi collection of 6–8 fish. Overstocking degrades water quality, stunts growth, stresses fish, and leads to disease. The temptation to add more fish to an existing pond is the most common route to a koi health disaster.</p>

        <h2>Filtration — Two Stages Required</h2>
        <p>Koi ponds require both mechanical and biological filtration running continuously. <strong>Mechanical filtration</strong> removes solid waste (fish feces, uneaten food, decomposing plant material) — drum filters, vortex chambers, or settlement tanks separate solids before they decompose into ammonia. <strong>Biological filtration</strong> houses the beneficial bacteria (Nitrosomonas and Nitrospira) that convert ammonia to nitrite and nitrate — large surface area media (biological brushes, K1 media, filter mats) in a biofilter or moving bed filter (MBBR/K1 reactor).</p>
        <p>Size filtration for approximately 2× the actual fish load — the pond will grow into it, and overfiltered ponds are far more stable than underfiltered ones. UV sterilizers (separate from filtration) kill single-celled algae (green water algae) and some pathogens — highly recommended for clear-water koi display ponds. A pond pump must circulate the entire pond volume through the filter system at least once every 1–2 hours.</p>

        <h2>Water Quality and Testing</h2>
        <p>Test weekly: ammonia (0 ppm always), nitrite (0 ppm always), nitrate (under 40 ppm for koi — they tolerate slightly higher than aquarium fish), pH (7.0–8.5 — koi prefer moderate alkalinity), KH (carbonate hardness — should be 4–8 dKH to buffer pH). Weekly 10–25% water changes maintain water quality between filter maintenance sessions. In summer (faster metabolism, more feeding, warmer water = faster bacterial growth), more frequent changes may be required.</p>
        <p>Koi in heavily planted ponds benefit from the nitrogen uptake of pond plants (water hyacinth, water lettuce, lotus, water lilies), which consume nitrate and reduce water change frequency. A heavily planted section (often called a "veggie filter") is a natural, effective supplement to mechanical and biological filtration.</p>

        <h2>Koi Varieties</h2>
        <p>Koi are classified into recognized varieties based on pattern, color, and scale type. The "Big 3" most prestigious varieties in traditional Japanese koi judging:</p>
        <p><strong>Kohaku:</strong> White body with red (hi) pattern. The most classic koi variety — "it begins with Kohaku and ends with Kohaku" in the koi world. Quality Kohaku have pure snow-white skin, vibrant red of consistent depth, and well-defined hi pattern edges.</p>
        <p><strong>Taisho Sanke (Sanke):</strong> White base with red and black (sumi) pattern. The red and black markings appear on the white base without black appearing on the head. Sumi pattern quality and distribution is key in judging.</p>
        <p><strong>Showa Sanshoku (Showa):</strong> Black base fish with red and white pattern — the black is the dominant color, in contrast to Sanke's white base. Sumi (black) wraps around the body and appears on the head. Difficult to distinguish from Sanke at juvenile stage.</p>
        <p>Other popular varieties: Ogon (solid metallic silver or gold), Asagi (blue-grey with red hi on the lower body), Butterfly koi (long flowing fins — controversial in traditional koi circles but popular in Western ponds), and Doitsu (reduced or absent scales in specific patterns).</p>

        <h2>Feeding and Seasonal Management</h2>
        <p>Feed a quality koi pellet appropriate to water temperature: high-protein in summer (water above 65°F — fast metabolism), wheat germ-based in spring and fall (cooler temperatures — more digestible lower protein), stop feeding below 50°F. Koi metabolize food slowly in cold water and undigested food causes health problems. Feed only what koi consume in 5 minutes, twice daily in summer.</p>
        <p>In winter in cold climates: stop feeding below 50°F. Do not break ice aggressively in a pond with koi — the shock can be fatal. A pond deicer or aerator prevents ice formation while allowing beneficial gas exchange. Koi remain at the pond bottom in a semi-dormant state — do not disturb them.</p>

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
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Koi — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for koi care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/koi%20tank%20setup?s=species-koi" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Koi Setup on Amazon →</a>
            <a href="/go/chewy-brand/koi%20tank%20setup?s=species-koi" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

        <ArticleSourcesList sources={SOURCES} />
      </div>
      </ArticleLayout>
    </>
  )
}
