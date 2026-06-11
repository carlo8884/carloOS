import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'

const SOURCES = [
  { label: "Overview of Fish Health — Merck Veterinary Manual", url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/aquarium-fish/overview-of-fish-health", publisher: "Merck Vet Manual" },
  { label: "Noga, E.J. Fish Disease: Diagnosis and Treatment, 2nd ed. Wiley-Blackwell, 2010.", publisher: "Wiley-Blackwell" },
  { label: "Francis-Floyd, R. Stress — Its Role in Fish Disease — UF/IFAS Extension FA-43.", url: "https://edis.ifas.ufl.edu/publication/FA043", publisher: "UF/IFAS Extension" },
  { label: "Yanong, R.P.E. Disease Management in Recirculating Aquaculture Systems — UF/IFAS Extension FA-107.", url: "https://edis.ifas.ufl.edu/publication/FA107", publisher: "UF/IFAS Extension" },
]

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Fish Disease Guide — Symptoms, Diagnosis & Treatment | Fish.com',
  description: 'Identify and treat the most common aquarium fish diseases. Ich, fin rot, velvet, dropsy, swim bladder disease — symptoms, causes, and treatment protocols.',
  path: '/health/fish-disease-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'fish-com',
  title: 'Fish Disease Guide',
  description: 'Common aquarium fish diseases — symptoms, causes, and treatment.',
  url: 'https://fish.com/health/fish-disease-guide',
  imageUrl: '',
  authorName: 'Fish.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2025-05-01T00:00:00Z',
})

const DISEASES = [
  {
    name: 'Ich (White Spot Disease)',
    pathogen: 'Ichthyophthirius multifiliis (parasite)',
    urgency: 'treat-immediately' as const,
    symptoms: 'White spots resembling grains of salt or sugar on fins and body. Fish may flash (rub against surfaces), clamp fins, or appear lethargic. Heavily infected fish show labored breathing as gills are affected.',
    causes: 'Stress (temperature swings, poor water quality), introduction of infected fish or plants, weakened immune system. Ich is present in most aquariums in small numbers; disease develops when fish are stressed.',
    treatment: [
      'Raise temperature to 86°F (30°C) for 10 days if species can tolerate it — accelerates ich lifecycle making it more vulnerable to treatment',
      'Aquarium salt (1 tablespoon per 5 gallons) for freshwater tanks — reduces osmotic stress and directly impacts parasite',
      'Commercial ich medication (API Super Ick Cure, Seachem ParaGuard) for confirmed ich',
      'Continue treatment for 7–10 days after last visible spot — the visible white spots are in a stage that cannot be killed; treatment targets the free-swimming stage',
      'Remove carbon from filter during treatment (carbon removes medication)',
    ],
    prevention: 'Quarantine all new fish for 4 weeks before adding to display tank. Maintain stable temperatures. Do not share equipment between tanks without sterilization.',
  },
  {
    name: 'Fin Rot',
    pathogen: 'Bacterial (Aeromonas, Pseudomonas)',
    urgency: 'treat-soon' as const,
    symptoms: 'Fraying, discoloration, or progressive deterioration of fins. Edges may appear milky, ragged, or with darker coloration. In advanced cases, fins may erode to the body.',
    causes: 'Almost always a consequence of poor water quality — ammonia, nitrite, or elevated nitrate stresses fish and compromises immune function, allowing opportunistic bacteria. Can also follow fin nipping from tankmates.',
    treatment: [
      'Improve water quality first — this is the root cause. Test water, do water changes as needed to achieve 0 ammonia, 0 nitrite, <20 nitrate',
      'For mild cases: water quality improvement alone may reverse fin rot',
      'For moderate-severe: aquarium salt (1 tablespoon per 5 gallons freshwater) has antibacterial and healing properties',
      'Antibiotics (Kanaplex, Furan-2, API Fin & Body Cure) for persistent or severe cases',
      'Separate known fin nippers',
    ],
    prevention: 'Maintain excellent water quality — the most effective prevention. Regular water changes. Avoid fin-nipping species combinations.',
  },
  {
    name: 'Velvet (Gold Dust Disease)',
    pathogen: 'Oodinium pilularis (parasite)',
    urgency: 'treat-immediately' as const,
    symptoms: 'Gold or rust-colored dust visible on body — finer than ich white spots. Fish may flash, clamp fins, and show rapid gill movement. Often missed until advanced because color blends with fish coloration — use a flashlight at an angle to see it clearly.',
    causes: 'Highly contagious parasite. Can be introduced with new fish, plants, or water from infected sources. Stress makes fish more susceptible.',
    treatment: [
      'Turn off lights — Oodinium is photosynthetic and light supports its lifecycle. Maintain darkness for duration of treatment.',
      'Raise temperature to 82–86°F to accelerate lifecycle',
      'Copper-based medication (Cupramine) is the most effective treatment — follow dosing instructions carefully, copper is toxic at elevated doses',
      'Treat entire tank — velvet spreads rapidly',
      'Continue treatment 14 days after last visible symptom',
    ],
    prevention: 'Strict quarantine of all new fish and plants. Do not share water between tanks.',
  },
  {
    name: 'Dropsy',
    pathogen: 'Multifactorial (usually bacterial, often Aeromonas)',
    urgency: 'prognosis-poor' as const,
    symptoms: 'Swollen abdomen. Scales protrude outward (pinecone appearance when viewed from above). Lethargy, loss of appetite, color fading. The pinecone scale appearance is classic and indicates significant internal organ damage.',
    causes: 'Dropsy is a symptom — fluid accumulation in the body cavity — rather than a single disease. Usually indicates kidney or organ failure, often due to bacterial infection. Often a consequence of chronic stress or poor water quality.',
    treatment: [
      'Isolate affected fish immediately in a hospital tank',
      'Add aquarium salt (1 teaspoon per gallon) to hospital tank',
      'Antibacterial medication (Kanaplex is commonly used — effective against gram-negative bacteria systemically)',
      'Prognosis is poor once visible pineconing is present — internal organ damage is typically advanced. Euthanasia may be the most humane option for severely affected fish.',
      'Improve water quality in the main tank — dropsy often indicates a population-level water quality problem',
    ],
    prevention: 'Excellent water quality. Stress reduction. Quarantine new fish.',
  },
  {
    name: 'Swim Bladder Disease',
    pathogen: 'Various — dietary, bacterial, parasitic, or physical',
    urgency: 'monitor' as const,
    symptoms: 'Fish unable to maintain normal buoyancy. May float sideways, swim upside down, sink to the bottom, or struggle to swim normally. More common in goldfish and bettas.',
    causes: 'Constipation or overfeeding (most common in goldfish) — impacted digestive tract compresses swim bladder. Bacterial infection. Physical injury. In fancy goldfish, body shape predisposes to swim bladder issues.',
    treatment: [
      'Fast the fish 2–3 days — often resolves constipation-related swim bladder issues',
      'Feed a blanched, peeled frozen pea (the vegetable) — acts as a laxative and often resolves impaction-related cases',
      'Maintain excellent water quality',
      'For bacterial causes: antibiotic treatment',
      'Chronic swim bladder in fancy goldfish may be permanent — provide shallow water to reduce swimming effort',
    ],
    prevention: 'Do not overfeed. Include variety in diet (frozen foods, not just flakes). Maintain water quality.',
  },
]

const URGENCY_STYLES = {
  'treat-immediately': { label: 'Treat Immediately', bg: 'rgba(200,74,42,0.05)', border: 'rgba(200,74,42,0.18)', color: '#C84A2A' },
  'treat-soon': { label: 'Treat Soon', bg: 'rgba(200,149,42,0.05)', border: 'rgba(200,149,42,0.15)', color: '#C8952A' },
  'prognosis-poor': { label: 'Poor Prognosis — Act Immediately', bg: 'rgba(200,74,42,0.07)', border: 'rgba(200,74,42,0.22)', color: '#C84A2A' },
  'monitor': { label: 'Monitor Closely', bg: 'rgba(14,107,138,0.05)', border: 'rgba(14,107,138,0.15)', color: '#0E6B8A' },
}

export default function FishDiseaseGuidePage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      hero={{
        title: 'Aquarium Fish Disease Guide',
        subtitle: 'Most fish disease is preventable — excellent water quality, proper quarantine, and stress reduction prevent the vast majority of common conditions. When disease does occur, early identification makes treatment faster and more effective.',
        category: 'Fish Health Guide',
        authorName: 'Fish.com Editorial',
          publishedAt: 'May 2025',
        readTime: '12 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Aquarium Health', href: '/health' },
        { name: 'Disease Guide', href: '/health/fish-disease-guide' },
      ]}
      schema={schema}
      relatedLinks={[{ title: "Fish Health Hub", href: "/health", category: "Fish Health" }, { title: "Ich Treatment Guide", href: "/health/ich-treatment", category: "Fish Health" }, { title: "Velvet Disease", href: "/health/velvet-disease", category: "Fish Health" }, { title: "New Tank Syndrome", href: "/health/new-tank-syndrome", category: "Fish Health" }]}
      sidebar={<>
        <div className="bg-brand-primary-pale border border-brand-border rounded-xl p-4">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">The #1 Prevention</div>
          <p className="text-xs text-brand-text-mid leading-relaxed m-0">4-week quarantine of all new fish. Most disease enters tanks via new arrivals. A hospital/quarantine tank is the best investment in fish health you can make.</p>
        </div>
        <TableOfContents items={DISEASES.map(d => ({ label: d.name, href: `#${d.name.toLowerCase().replace(/[\s()\/]/g, '-').replace(/-+/g, '-')}` }))} />
        <RelatedLinks title="Related Guides" links={[
          { label: 'Nitrogen Cycle Guide', href: '/health/nitrogen-cycle-explained' },
          { label: 'Water Chemistry', href: '/water-parameters' },
          { label: 'Tank Setup Guide', href: '/setup' },
        ]} />
        <CrossPortfolioCard currentSite="fish-com" contentType="health" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="health-disease-guide" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>The most important thing to understand about fish disease: 90% of aquarium disease is caused by stress, and the most common stressor is poor water quality. Before reaching for medication, test your water. Before adding fish to a display tank, quarantine for 4 weeks. Before treating disease, fix the environment that allowed disease to develop.</DropCap>

        <CalloutBox variant="warning" title="Before you medicate">
          Adding medication to an uncycled or poorly maintained tank will not save fish in failing water. Test ammonia, nitrite, and nitrate first. Many antibiotics also kill nitrifying bacteria — treat in a separate hospital tank whenever possible to protect your display tank&apos;s biofilter.
        </CalloutBox>

        {DISEASES.map(disease => {
          const style = URGENCY_STYLES[disease.urgency]
          return (
            <div key={disease.name}
              id={disease.name.toLowerCase().replace(/[\s()\/]/g, '-').replace(/-+/g, '-')}
              className="rounded-xl p-6 mb-6"
              style={{ background: style.bg, border: `1px solid ${style.border}` }}>
              <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                <h2 className="font-display font-bold text-brand-dark text-xl m-0">{disease.name}</h2>
                <span className="text-2xs font-bold px-3 py-1 rounded-pill flex-shrink-0"
                  style={{ background: `${style.color}15`, color: style.color, border: `1px solid ${style.color}30` }}>
                  {style.label}
                </span>
              </div>
              <div className="text-2xs font-bold tracking-eyebrow uppercase mb-2" style={{ color: style.color }}>Pathogen: {disease.pathogen}</div>

              <div className="grid sm:grid-cols-2 gap-5 mb-4">
                <div>
                  <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1.5">Symptoms</div>
                  <p className="text-sm text-brand-text-mid leading-relaxed m-0">{disease.symptoms}</p>
                </div>
                <div>
                  <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1.5">Causes</div>
                  <p className="text-sm text-brand-text-mid leading-relaxed m-0">{disease.causes}</p>
                </div>
              </div>

              <div>
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-2">Treatment Steps</div>
                <ol style={{ margin: 0, paddingLeft: '20px' }}>
                  {disease.treatment.map((step, i) => (
                    <li key={i} style={{ fontSize: '13px', color: 'var(--brand-text-mid)', lineHeight: 1.7, marginBottom: '6px' }}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className="mt-4 pt-4" style={{ borderTop: `1px solid ${style.border}` }}>
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1">Prevention</div>
                <p className="text-xs text-brand-text-mid m-0 leading-relaxed">{disease.prevention}</p>
              </div>
            </div>
          )
        })}

        <div className="bg-brand-surface border border-brand-border rounded-xl p-6 mt-4">
          <h2 className="font-display text-xl font-bold text-brand-dark mb-3 mt-0">The Hospital Tank — Essential Equipment</h2>
          <p className="text-sm text-brand-text-mid leading-relaxed m-0">A dedicated hospital/quarantine tank is the single best investment for fish health. It serves as a 4-week quarantine for new arrivals (preventing disease introduction to your display tank) and as a treatment space for sick fish (allowing targeted medication without medicating your entire display tank or disturbing beneficial bacteria). Minimum: a spare 10-gallon tank with a cycled sponge filter (seed the sponge in your main tank), a heater, and a lid. Keep it ready. You will need it.</p>
        </div>
        <ArticleSourcesList sources={SOURCES} />
      </div>
    </ArticleLayout>
  )
}
