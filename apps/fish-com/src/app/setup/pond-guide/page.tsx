import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks , AffiliateDisclosure} from '@carloOS/ui'
import { buildArticleSchema, buildHowToSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Backyard Pond Setup Guide — Size, Filtration & Liner | Fish.com', description: 'How to build a backyard koi or goldfish pond. Minimum size for fish, liner selection, filtration sizing.', path: '/setup/pond-guide', type: 'article' })
const SOURCES = [
  {
    label: "Koi (Cyprinus rubrofuscus) — Species Profile",
    url: "https://www.fishbase.se/summary/Cyprinus-rubrofuscus.html",
    publisher: "FishBase",
  },
  {
    label: "Water Quality Management for Pond Fish Culture",
    url: "https://srac.tamu.edu/serveFactSheet/360",
    publisher: "Southern Regional Aquaculture Center (SRAC)",
  },
  {
    label: "EPDM Liner Safety and Pond Construction Best Practices",
    url: "https://extension.psu.edu/ponds-and-water-gardens",
    publisher: "Penn State Extension",
  },
  {
    label: "Aquatic Plant Management in Ponds",
    url: "https://extension.tennessee.edu/publications/Documents/SP341-I.pdf",
    publisher: "University of Tennessee Extension",
  },
  {
    label: "Predation on Pond Fish: Herons and Wildlife Management",
    url: "https://www.extension.purdue.edu/extmedia/fnr/fnr-faq-11.pdf",
    publisher: "Purdue University Extension",
  },
]
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Backyard Pond Setup Guide', description: 'Size, liner, filtration, and setup for backyard koi and goldfish ponds.', url: 'https://fish.com/setup/pond-guide', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' ,
  citation: SOURCES,
})
const howTo = buildHowToSchema({ name: 'How to Set Up a Backyard Fish Pond', description: 'Step-by-step guide to building a backyard koi or goldfish pond.', url: 'https://fish.com/setup/pond-guide', totalTime: 'P14D', steps: [
  { name: 'Determine size based on planned fish', text: 'Before digging: decide how many and what size fish you want at maturity. Koi need 250+ gallons per fish. Goldfish need 100+ gallons per fish. A 4-koi pond needs 1,000+ gallons minimum. Build larger than you think you need — you will want more fish.' },
  { name: 'Choose location', text: 'Partial shade (3-5 hours daily) reduces algae growth while allowing enough light for plants. Avoid full sun in hot climates — water temperature above 85°F stresses fish. Avoid areas under trees — falling leaves decompose and cause ammonia spikes.' },
  { name: 'Excavate with varying depth zones', text: 'Dig with a shelf zone (12-18 inches for plants) and a deeper central zone (3+ feet for fish safety and temperature stability). Deeper ponds stay cooler in summer and freeze less in winter. Include a gravity-fed drain at the deepest point if possible.' },
  { name: 'Install EPDM rubber liner', text: '45 mil EPDM rubber liner is the industry standard — flexible, durable (20+ year lifespan), and fish-safe. Calculate liner size: pond length + 2× depth + 2 feet overlap, by width + 2× depth + 2 feet overlap. Lay underlayment first to protect liner from rocks.' },
  { name: 'Install filtration system', text: 'Install a bottom drain (if included) plumbed to a settlement chamber or vortex, then to a biofilter, then pump back to pond. Size the pump for 1× pond volume per hour through filtration minimum. Install UV sterilizer after the biofilter for clear water.' },
  { name: 'Cycle before adding fish', text: 'Fill pond and run filtration for 4-6 weeks before adding fish. Add beneficial bacteria (Fritz Fishless Cure, Microbe-Lift Nite-Out) and dose ammonia to cycle the biofilter. Test daily — when ammonia and nitrite both reach 0 after dosing, the cycle is complete.' },
]})
const combined = combineSchemas(schema, howTo)


export default function PondGuidePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="fish-com"
        hero={{ title: 'Backyard Pond Setup Guide', subtitle: 'A well-designed backyard pond with koi or goldfish is one of the most rewarding features you can add to a garden — dynamic, living, low-maintenance once established. The key word: once established. The setup decisions made before the first fish enters determine whether the pond succeeds or fails.', category: 'Pond Setup', authorName: 'Fish.com Editorial', publishedAt: 'May 2025', readTime: '11 min' }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Setup', href: '/setup' }, { name: 'Pond Guide', href: '/setup/pond-guide' }]}
        relatedLinks={[{ title: 'Tank Setup Hub', href: '/setup', category: 'Tank Setup' }, { title: 'Koi', href: '/species/koi', category: 'Species Guide' }, { title: 'Water Chemistry Guide', href: '/setup/water-chemistry-guide', category: 'Tank Setup' }, { title: 'Aquarium Algae Control', href: '/setup/aquarium-algae-control', category: 'Tank Setup' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Size Reference</div>
            {[['4 koi pond', '1,000 gallons minimum'], ['6-8 koi pond', '2,500+ gallons'], ['10 goldfish', '1,000 gallons'], ['5 goldfish + 2 koi', '1,500+ gallons'], ['Show koi pond', '5,000+ gallons']].map(([s, v]) => (
              <div key={s} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
                <span className="text-brand-text-light">{s}</span><span className="font-bold text-brand-dark">{v}</span>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Koi Care Guide', href: '/species/koi' }, { label: 'Goldfish Care', href: '/species/goldfish' }, { label: 'Best Aquarium Filters', href: '/reviews/best-aquarium-filters' }, { label: 'Best Water Test Kits', href: '/reviews/best-water-test-kits' }]} />
          <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Pond and fishkeeping guides." source="setup-pond" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
          <h2>The Most Common Pond Failure — Undersizing</h2>
          <p>The overwhelming majority of failed backyard ponds fail for the same reason: the pond was built too small for the number of fish eventually added. The cognitive sequence that leads to failure: a 500-gallon pond is built "for just a few koi." The koi are purchased at 6 inches — they fit easily. They grow. They produce more waste. Water quality degrades. Fish get sick. More fish are added. The pond spirals into chronic water quality problems and fish illness. The pond is eventually either drained or the fish given away.</p>
          <p>The corrective thinking: plan for the fish at adult size, not juvenile size. A koi purchased at 6 inches will be 18–24 inches in 4–5 years. Plan for that fish, not this fish. Build the largest pond that budget and space allow — you will fill it, and you will be glad of the capacity.</p>

          <h2>Liner Selection</h2>
          <p><strong>45 mil EPDM rubber liner:</strong> The recommended standard. Flexible enough to conform to irregular excavation, durable (20+ year lifespan under normal conditions), UV-resistant, and importantly — fish-safe. Purchase from pond specialty suppliers, not roofing suppliers (roofing EPDM may contain fungicides). Firestone Pondgard and Carlisle EPDM are reliable brands.</p>
          <p><strong>Preformed rigid ponds:</strong> Available in limited sizes and shapes. Easy to install but difficult to customize. Most are too small for serious koi keeping — typically available to 300 gallons. Appropriate for small goldfish ponds.</p>
          <p><strong>Concrete ponds:</strong> The traditional koi pond construction. Durable and permanent. Requires professional construction or significant DIY skill — improper concrete ponds leach lime and kill fish. Concrete ponds are typically sealed with pond-safe epoxy coating. Not recommended for DIY beginners.</p>

          <h2>Predator Protection</h2>
          <p>Pond fish are exposed to predators that aquarium fish never face: herons (the most significant predator in most US regions — can empty a pond of fish overnight), raccoons, mink, and in some regions, otters and osprey. Protection options: pond netting (effective but aesthetically limiting), motion-activated water jets (Scarecrow sprinklers — effective and non-lethal), decoy herons (effective for a short time — herons eventually learn the decoy is not real), and sloped pond edges with deeper central areas (herons prefer to wade and cannot fish in deeper areas easily).</p>
          <p>Pond depth is the most reliable predator deterrent — a pond 3+ feet deep at the center gives fish a refuge zone beyond the reach of wading herons. Underwater fish caves (ceramic or natural stone structures creating enclosed hiding spots) provide additional refuge from aerial predators.</p>

          <h2>Pond Plants — Function and Aesthetics</h2>
          <p>Pond plants serve three functional purposes: oxygenation, nutrient uptake (natural filtration), and shade. Water hyacinth and water lettuce are the most effective surface-floating nutrient absorbers — they take up nitrogen (nitrate) directly from pond water, reducing water change requirements significantly. Water lilies provide shade (reducing algae growth in full-sun ponds) and spawning habitat. Marginal plants (iris, cattail, papyrus) around pond edges naturalize the appearance and provide additional biological filtration.</p>
          <p>In koi ponds: koi eat most plants. Keep plants in separate baskets or caged areas, or choose plants that koi avoid (typically those with bitter or firm tissue). A "veggie filter" — a separate, shallower planting area connected to the main pond via pump — allows heavy planting without koi access.</p>
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
          <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Backyard Pond Setup — Where to Shop</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse the gear referenced in this guide on Amazon or Chewy. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/pond%20pump%20filter%20liner%20kit?s=setup-pond-guide" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Amazon →</a>
            <a href="/go/chewy-brand/pond%20pump%20filter%20liner%20kit?s=setup-pond-guide" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
          <ArticleSourcesList sources={SOURCES} />
        </div>

        </div>
      </ArticleLayout>
    </>
  )
}
