import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { getSpecies, getPost } from '@carloOS/db'

interface SpeciesPageProps { params: { slug: string } }

const KNOWN_SPECIES = [
  'betta-fish', 'neon-tetra', 'clownfish', 'goldfish', 'guppy',
  'oscar', 'angelfish', 'discus', 'corydoras', 'pleco',
]

const SPECIES_IMAGES: Record<string, string> = {
  'betta-fish': 'https://images.unsplash.com/photo-1583377993497-f2f1b2b13c54?w=1200&q=80&auto=format&fit=crop',
  'neon-tetra': 'https://images.unsplash.com/photo-1520302630591-fd1cb63aa58e?w=1200&q=80&auto=format&fit=crop',
  'clownfish': 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=1200&q=80&auto=format&fit=crop',
  'goldfish': 'https://images.unsplash.com/photo-1524704654690-b56af7d6b9f1?w=1200&q=80&auto=format&fit=crop',
}

// Static species data for pre-DB content
const SPECIES_DATA: Record<string, {
  commonName: string; scientificName: string; type: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  tankMin: string; temp: string; ph: string; lifespan: string
  diet: string; compatibility: string
  intro: string
  care: string
  feeding: string
  tankSetup: string
  health: string
  faqs: Array<{ question: string; answer: string }>
}> = {
  'betta-fish': {
    commonName: 'Betta Fish', scientificName: 'Betta splendens',
    type: 'Freshwater · Labyrinth Fish', difficulty: 'Beginner',
    tankMin: '5 gallons', temp: '76–82°F', ph: '6.5–7.5', lifespan: '2–5 years',
    diet: 'Carnivore', compatibility: 'Solo only',
    intro: 'Betta fish are the most commonly kept freshwater fish in the world — and among the most mistreated. The image of the betta languishing in a cup at the pet store has created the misconception that they require minimal space and care. They do not. Bettas are intelligent, territorial fish with complex behaviors and specific husbandry requirements.',
    care: 'Bettas require a minimum 5-gallon heated, filtered aquarium — not a vase, bowl, or desktop cube. The labyrinth organ that allows them to breathe atmospheric air does not substitute for water quality; it supplements it. Ammonia and nitrite spikes kill bettas as surely as any other fish. Filtration and cycling are non-negotiable.',
    feeding: 'Bettas are obligate carnivores — their digestive system is designed for protein, not the plant matter in many generic fish foods. Feed a high-quality betta pellet as the staple (Northfin Betta Bits, Fluval Bug Bites Betta Formula). Supplement with frozen or freeze-dried bloodworms, daphnia, or brine shrimp 2–3 times weekly. Feed once daily, only what the fish consumes in 2 minutes. Remove uneaten food. Overfeeding is the most common cause of water quality problems in small tanks.',
    tankSetup: 'A 5-gallon tank is the minimum; 10 gallons is significantly better for water quality stability and behavioral enrichment. Bettas prefer calm water — strong filtration current stresses them. Use a sponge filter or baffle the intake of a hang-on-back filter. Silk or live plants (avoid plastic that tears fins), hiding spots (caves, coconut shells), and a secure lid (bettas jump). Temperature: 76–82°F with a heater. Bettas are tropical fish; room temperature water is too cold.',
    health: 'Common health issues: fin rot (caused by poor water quality — fix the water, not just the fish), ich (white spots — raise temperature to 86°F and use appropriate medication), velvet (gold dust appearance — requires copper-based treatment), bloat/dropsy (raised scales like a pinecone — often fatal, caused by internal infection). Most betta health problems trace directly to inadequate water quality. A cycled tank with regular water changes prevents the majority of disease.',
    faqs: [
      { question: 'Can bettas live with other fish?', answer: 'Male bettas cannot coexist with other male bettas. They can sometimes share a tank with peaceful, non-fin-nipping tankmates in a larger tank (10+ gallons): corydoras catfish, small tetras that don\'t nip fins, snails, or ghost shrimp. Always have a backup plan — some bettas are highly aggressive to any tankmate.' },
      { question: 'How often should I change my betta\'s water?', answer: 'In a cycled 5-gallon tank: 25–30% water change weekly. In an uncycled tank or very small container: 50–100% changes every 2–3 days. The goal is keeping ammonia and nitrite at zero and nitrate below 20ppm. Test your water, not a schedule.' },
      { question: 'Do bettas need a filter?', answer: 'Yes. The labyrinth organ that allows bettas to breathe air does not process ammonia. Ammonia builds up in any tank without biological filtration and is lethal. A properly cycled sponge filter is ideal — low flow, effective biological filtration.' },
    ],
  },
  'neon-tetra': {
    commonName: 'Neon Tetra', scientificName: 'Paracheirodon innesi',
    type: 'Freshwater · Characin', difficulty: 'Beginner',
    tankMin: '10 gallons', temp: '72–80°F', ph: '6.0–7.0', lifespan: '5–10 years',
    diet: 'Omnivore', compatibility: 'Community — schooling fish',
    intro: 'Neon tetras are one of the most popular freshwater fish in the hobby — their iridescent blue-red coloration is striking in groups, and their peaceful, schooling nature makes them ideal community fish. They are best kept in schools of 10 or more, where their natural shoaling behavior and full color expression emerge.',
    care: 'Neon tetras are sensitive to water quality, particularly ammonia and nitrite — they should never be added to an uncycled tank. They prefer soft, slightly acidic water (pH 6.0–7.0) though they adapt to a wider range when properly acclimated. They are a temperature-sensitive species; temperature swings stress them and suppress their immune system.',
    feeding: 'Neon tetras are micro-predators in nature, feeding on small invertebrates and organic particles. In captivity: high-quality micro pellets or flakes, supplemented with frozen foods (baby brine shrimp, micro bloodworms). Feed twice daily, only what is consumed in 2–3 minutes.',
    tankSetup: 'A 10-gallon tank is the minimum for a proper school. Prefer densely planted tanks that mimic their Amazon basin habitat — live plants improve water quality and provide behavioral enrichment. Subdued lighting. Dark substrate enhances coloration. Compatible with other peaceful community fish at similar size.',
    health: 'Neon tetra disease (microsporidian infection, Pleistophora hyphessobryconis) has no effective treatment and is fatal — the only prevention is quarantining all new fish for 4 weeks before adding to a display tank. Ich is the most common treatable disease. Both are largely prevented by stable water conditions and proper quarantine practices.',
    faqs: [
      { question: 'How many neon tetras should I keep together?', answer: 'Minimum 6, ideally 10 or more. Neon tetras are schooling fish — in groups below 6 they are stressed, hide, and lose their characteristic synchronized schooling behavior. More is genuinely better with neons.' },
      { question: 'Why are my neon tetras losing color?', answer: 'The most common causes: stress (including being in too small a group), poor water quality, temperature stress, or early neon tetra disease. Check water parameters first. Ensure the school is large enough. If specific fish are losing color asymmetrically, quarantine and watch for disease progression.' },
    ],
  },
}

export async function generateStaticParams() {
  return KNOWN_SPECIES.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: SpeciesPageProps): Promise<Metadata> {
  const species = SPECIES_DATA[params.slug]
  const name = species?.commonName ?? params.slug.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
  return buildMetadata({
    siteId: 'fish-com',
    title: `${name} Care Guide — Tank Size, Diet & Health`,
    description: `Complete ${name} care guide. Tank requirements, water parameters, diet, compatibility, and health — everything you need to keep ${name} correctly.`,
    path: `/species/${params.slug}`,
    type: 'article',
    ogImage: SPECIES_IMAGES[params.slug],
  })
}

export default async function FishSpeciesPage({ params }: SpeciesPageProps) {
  const speciesData = SPECIES_DATA[params.slug]
  let dbPost
  try { dbPost = await getPost('fish-com', params.slug) } catch { /* */ }

  if (!speciesData && !dbPost && !KNOWN_SPECIES.includes(params.slug)) notFound()

  const name = speciesData?.commonName ?? params.slug.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
  const heroImage = SPECIES_IMAGES[params.slug]

  const schema = buildArticleSchema({
    siteId: 'fish-com', title: `${name} Care Guide`,
    description: `Complete ${name} care guide.`,
    url: `https://fish.com/species/${params.slug}`, imageUrl: heroImage ?? '',
    authorName: 'Fish.com Expert Team',
    publishedAt: new Date().toISOString(), modifiedAt: new Date().toISOString(),
  })

  return (
    <ArticleLayout
      siteId="fish-com"
      hero={{
        title: `${name} Care Guide`,
        subtitle: speciesData ? `${speciesData.scientificName} · ${speciesData.type}` : undefined,
        category: 'Species Guide',
        authorName: 'Fish.com Expert Team',
        authorAvatar: '🐠',
        publishedAt: 'May 2025',
        readTime: '9 min',
        image: heroImage,
        imageAlt: name,
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Species', href: '/species' },
        { name: name, href: `/species/${params.slug}` },
      ]}
      schema={schema}
      sidebar={<>
        {speciesData && (
          <div className="bg-brand-surface border border-brand-border rounded-lg p-4">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">At a Glance</div>
            {[
              ['Difficulty', speciesData.difficulty],
              ['Min Tank', speciesData.tankMin],
              ['Temperature', speciesData.temp],
              ['pH Range', speciesData.ph],
              ['Lifespan', speciesData.lifespan],
              ['Diet', speciesData.diet],
              ['Compatibility', speciesData.compatibility],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between py-1.5" style={{ borderBottom: '1px solid var(--brand-border)' }}>
                <span className="text-xs text-brand-text-light">{label}</span>
                <span className="text-xs font-semibold text-brand-dark">{value}</span>
              </div>
            ))}
          </div>
        )}
        <TableOfContents items={[
          { label: 'Introduction', href: '#intro' },
          { label: 'Tank Setup', href: '#tank' },
          { label: 'Feeding', href: '#feeding' },
          { label: 'Health Issues', href: '#health' },
          { label: 'FAQ', href: '#faq' },
        ]} />
        <RelatedLinks title="Related Species" links={
          KNOWN_SPECIES.filter(s => s !== params.slug).slice(0, 4).map(s => ({
            label: s.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' '),
            href: `/species/${s}`,
          }))
        } />
        <EmailCapture variant="sidebar" siteId="fish-com"
          title="The Weekly Tank"
          subtitle="Species spotlights and fishkeeping tips every Thursday."
          source={`species-${params.slug}`} ctaText="Subscribe Free" />
      </>}
    >
      {dbPost?.body_html ? (
        <div className="carloOS-article" dangerouslySetInnerHTML={{ __html: dbPost.body_html }} />
      ) : speciesData ? (
        <div className="carloOS-article">
          <h2 id="intro">Overview</h2>
          <p>{speciesData.intro}</p>
          <p>{speciesData.care}</p>
          <h2 id="tank">Tank Setup</h2>
          <p>{speciesData.tankSetup}</p>
          <h2 id="feeding">Feeding</h2>
          <p>{speciesData.feeding}</p>
          <h2 id="health">Health Issues</h2>
          <p>{speciesData.health}</p>
          {speciesData.faqs.length > 0 && (
            <>
              <h2 id="faq">Frequently Asked Questions</h2>
              <FAQAccordion
                items={speciesData.faqs.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
                includeSchema={false}
                allowMultiple
              />
            </>
          )}
        </div>
      ) : (
        <div className="carloOS-article">
          <p className="text-brand-text-light italic">Full {name} care guide coming soon.</p>
        </div>
      )}
    </ArticleLayout>
  )
}
