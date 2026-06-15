import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, buildFAQSchema, combineSchemas, SchemaScript, EmailCapture, StockImage, CrossPortfolioCard, FAQAccordion } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'lizard-com',
  title: 'Reptile Species Guide — 50+ Care Profiles | Lizard.com',
  description: 'Complete care guides for 50+ reptile and amphibian species. Enclosure setup, temperatures, UVB, feeding, and health — science-based for every species.',
  path: '/species',
})

const SPECIES = [
  { name: 'Bearded Dragon', sci: 'Pogona vitticeps', level: 'Beginner', zone: 'Zone 4', slug: 'bearded-dragon', img: 'lizard-com:species-bearded-dragon' },
  { name: 'Leopard Gecko', sci: 'Eublepharis macularius', level: 'Beginner', zone: 'Zone 1–2', slug: 'leopard-gecko', img: 'lizard-com:species-leopard-gecko' },
  { name: 'Crested Gecko', sci: 'Correlophus ciliatus', level: 'Beginner', zone: 'Zone 2', slug: 'crested-gecko', img: 'lizard-com:species-crested-gecko' },
  { name: 'Gargoyle Gecko', sci: 'Rhacodactylus auriculatus', level: 'Beginner', zone: 'Zone 1', slug: 'gargoyle-gecko', img: 'lizard-com:species-thumb-gargoyle-gecko' },
  { name: 'Ball Python', sci: 'Python regius', level: 'Beginner', zone: 'Zone 2–3', slug: 'ball-python', img: 'lizard-com:species-thumb-ball-python' },
  { name: 'Corn Snake', sci: 'Pantherophis guttatus', level: 'Beginner', zone: 'Zone 2', slug: 'corn-snake', img: 'lizard-com:species-thumb-corn-snake' },
  { name: 'Blue-Tongued Skink', sci: 'Tiliqua spp.', level: 'Intermediate', zone: 'Zone 3–4', slug: 'blue-tongued-skink', img: 'lizard-com:species-thumb-blue-tongue-skink' },
  { name: 'African Fat-Tailed Gecko', sci: 'Hemitheconyx caudicinctus', level: 'Beginner', zone: 'Zone 1', slug: 'african-fat-tailed-gecko', img: 'lizard-com:species-thumb-african-fat-tailed-gecko' },
  { name: 'Western Hognose', sci: 'Heterodon nasicus', level: 'Beginner', zone: 'Zone 1–2', slug: 'western-hognose-snake', img: 'lizard-com:species-thumb-western-hognose' },
  { name: 'Kenyan Sand Boa', sci: 'Gongylophis colubrinus', level: 'Beginner', zone: 'Zone 1', slug: 'kenyan-sand-boa', img: 'lizard-com:species-thumb-kenyan-sand-boa' },
  { name: 'Green Anole', sci: 'Anolis carolinensis', level: 'Intermediate', zone: 'Zone 2–3', slug: 'green-anole', img: 'lizard-com:species-thumb-green-anole' },
  { name: 'Chinese Water Dragon', sci: 'Physignathus cocincinus', level: 'Intermediate', zone: 'Zone 2–3', slug: 'chinese-water-dragon', img: 'lizard-com:species-thumb-chinese-water-dragon' },
  { name: 'Fire Skink', sci: 'Lepidothyris fernandi', level: 'Intermediate', zone: 'Zone 2', slug: 'fire-skink', img: 'lizard-com:species-thumb-fire-skink' },
  { name: 'Leachianus Gecko', sci: 'Rhacodactylus leachianus', level: 'Intermediate', zone: 'Zone 1–2', slug: 'leachianus-gecko', img: 'lizard-com:species-thumb-leachianus-gecko' },
  { name: 'Mourning Gecko', sci: 'Lepidodactylus lugubris', level: 'Beginner', zone: 'Zone 1–2', slug: 'mourning-gecko', img: 'lizard-com:species-thumb-mourning-gecko' },
  { name: 'Mossy Leaf-Tail Gecko', sci: 'Uroplatus sikorae', level: 'Advanced', zone: 'Zone 1', slug: 'mossy-leaf-tail-gecko', img: 'lizard-com:species-thumb-mossy-leaf-tail-gecko' },
  { name: 'Argentine Tegu', sci: 'Salvator merianae', level: 'Advanced', zone: 'Zone 3–4', slug: 'argentine-black-and-white-tegu', img: 'lizard-com:species-thumb-argentine-tegu' },
  { name: 'Savannah Monitor', sci: 'Varanus exanthematicus', level: 'Advanced', zone: 'Zone 3–4', slug: 'savannah-monitor', img: 'lizard-com:species-thumb-savannah-monitor' },
  { name: 'Nile Monitor', sci: 'Varanus niloticus', level: 'Advanced', zone: 'Zone 3–4', slug: 'nile-monitor', img: 'lizard-com:species-thumb-nile-monitor' },
  { name: 'California Kingsnake', sci: 'Lampropeltis californiae', level: 'Beginner', zone: 'Zone 1–2', slug: 'california-kingsnake', img: 'lizard-com:category-species' },
  { name: 'Rosy Boa', sci: 'Lichanura trivirgata', level: 'Beginner', zone: 'Zone 1', slug: 'rosy-boa', img: 'lizard-com:category-species' },
  { name: 'Pacman Frog', sci: 'Ceratophrys spp.', level: 'Beginner', zone: 'Zone 1', slug: 'pacman-frog', img: 'lizard-com:category-species' },
  { name: "White's Tree Frog", sci: 'Litoria caerulea', level: 'Beginner', zone: 'Zone 1–2', slug: 'whites-tree-frog', img: 'lizard-com:category-species' },
  { name: 'Green Iguana', sci: 'Iguana iguana', level: 'Advanced', zone: 'Zone 3–4', slug: 'green-iguana', img: 'lizard-com:category-species' },
  { name: "Jackson's Chameleon", sci: 'Trioceros jacksonii', level: 'Advanced', zone: 'Zone 2–3', slug: 'jacksons-chameleon', img: 'lizard-com:category-species' },
]

const LEVEL_COLORS = {
  Beginner: 'text-brand-success bg-green-500/10 border-green-500/20',
  Intermediate: 'text-brand-warning bg-amber-500/10 border-amber-500/20',
  Advanced: 'text-brand-danger bg-red-500/10 border-red-500/20',
}

export default function SpeciesIndexPage() {
  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://lizard.com/' },
      { name: 'Species', url: 'https://lizard.com/species' },
    ],
  })

  // ItemList of the featured species — structured, citable index of the
  // species cluster for AI Overviews / Perplexity (GEO authority signal).
  const speciesListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Reptile & Amphibian Species at Lizard.com',
    numberOfItems: SPECIES.length,
    itemListElement: SPECIES.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.name,
      url: `https://lizard.com/species/${s.slug}`,
    })),
  }

  // Beginner-tier subset, drawn ONLY from the on-page SPECIES data above. Used by
  // both the "at a glance" reference table and the FAQ — single source of truth so
  // nothing in the extractable surfaces can drift from the cards.
  const beginnerSpecies = SPECIES.filter((s) => s.level === 'Beginner')

  // Broad group derived only from the species' on-page common name, so the table
  // gain a second axis (lizard vs snake) without introducing any new facts.
  const groupFor = (name: string) =>
    /python|snake|boa|hognose/i.test(name)
      ? 'Snake'
      : /gecko|skink|dragon|anole|tegu|monitor|lizard/i.test(name)
      ? 'Lizard'
      : 'Reptile'

  // FAQ entries grounded only in on-page facts (the SPECIES table + Ferguson Zone
  // labels already shown on each card). Citable Q&A for AI Overviews / Perplexity.
  const faqItems = [
    {
      question: 'Which reptile species are best for beginners?',
      answer:
        'Lizard.com tags each species by care demand. The Beginner-tier species in this library include the Bearded Dragon, Leopard Gecko, Crested Gecko, Gargoyle Gecko, Ball Python, Corn Snake, African Fat-Tailed Gecko, Western Hognose, Kenyan Sand Boa, and Mourning Gecko. These are the profiles a first-time keeper can start from before moving up to Intermediate or Advanced species.',
    },
    {
      question: 'What is a Ferguson Zone and how do I use it to pick a species?',
      answer:
        'The Ferguson Zone (1–4) is a UVB-exposure classification for reptiles, where Zone 1 is the lowest UVB requirement and Zone 4 the highest. On Lizard.com each species card lists its Ferguson Zone so you can match a species to UVB you can realistically provide: low-UVB species such as the Leopard Gecko (Zone 1–2) and Crested Gecko (Zone 2) differ from a Zone 4 basker like the Bearded Dragon. See the UVB Lighting Guide to translate a zone into a specific bulb and basking distance.',
    },
    {
      question: 'Do all of these reptiles need the same UVB?',
      answer:
        'No. UVB demand varies by species and is shown as a Ferguson Zone on each card. Higher-zone species (for example the Bearded Dragon at Zone 4) need stronger UVB output than lower-zone species. Always confirm a species’ lighting needs on its individual care guide and the UVB Lighting Guide before setting up an enclosure.',
    },
    {
      question: 'Which beginner-friendly snakes are covered here?',
      answer:
        'Within the Beginner tier, this library covers several snakes: the Ball Python (Zone 2–3), Corn Snake (Zone 2), Western Hognose (Zone 1–2), and Kenyan Sand Boa (Zone 1). All four sit at the lower end of the Ferguson Zone scale, so their lighting requirements are simpler than those of high-UVB basking lizards. Confirm the exact setup on each species’ own care guide.',
    },
    {
      question: 'What do the Beginner, Intermediate, and Advanced labels mean?',
      answer:
        'Each species card carries a care-level tag that reflects the overall demand of keeping it well — the complexity of its enclosure, lighting, temperature, and feeding routine. Beginner-tagged species are the most forgiving starting points; Intermediate and Advanced species ask for more specialised husbandry or experience. Read the label alongside the Ferguson Zone, and review the full care guide before committing to a species.',
    },
    {
      question: 'Are the care recommendations a substitute for a veterinarian?',
      answer:
        'No. These guides cover husbandry — enclosure, temperature, UVB, and feeding fundamentals. For any health concern, signs of illness, or species-specific medical questions, consult a qualified reptile (exotic) veterinarian.',
    },
  ]

  const faqSchema = buildFAQSchema({
    questions: faqItems.map((f) => ({ question: f.question, answer: f.answer })),
  })

  const schema = combineSchemas(breadcrumbSchema, speciesListSchema, faqSchema)

  return (
    <>
      <SchemaScript schema={schema} />
      <div className="relative z-10 px-container-sm sm:px-container py-16"
        style={{ background: 'linear-gradient(135deg, #0D1A0D, #080C08)' }}>
        <div className="flex items-center gap-2.5 mb-5">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Species Library</span>
        </div>
        <h1 className="font-display font-bold text-brand-white tracking-tight leading-tight mb-4"
          style={{ fontSize: 'clamp(28px, 5vw, 52px)' }}>
          Reptile Species Care Guides
        </h1>
        <p className="text-lg font-light leading-relaxed max-w-xl" style={{ color: 'rgba(238,240,228,0.55)' }}>
          Science-based care guides for 50+ reptile and amphibian species. Every guide covers enclosure, temperatures, UVB requirements, feeding, and health.
        </p>
      </div>

      <div className="relative z-10 px-container-sm sm:px-container pt-8">
        <StockImage manifestKey="lizard-com:category-species" aspect="16:9" variant="wide" priority />
      </div>

      {/* Quick Answer — extractable TL;DR for AI Overviews / Perplexity. Grounded
          in the on-page SPECIES tags (care level + Ferguson Zone) only. */}
      <div className="relative z-10 px-container-sm sm:px-container pt-10">
        <div className="rounded-xl p-6 max-w-3xl"
          style={{ background: 'rgba(122,181,42,0.06)', border: '1px solid rgba(122,181,42,0.2)' }}>
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Quick Answer</div>
          <h2 className="font-display font-bold text-brand-white text-lg mb-3">How to pick a reptile species</h2>
          <p className="text-sm leading-relaxed mb-3" style={{ color: 'rgba(238,240,228,0.7)' }}>
            Choose a species by two on-page signals: its <strong className="text-brand-white">care level</strong> (Beginner,
            Intermediate, or Advanced) and its <strong className="text-brand-white">Ferguson Zone</strong> (UVB demand, 1–4,
            where 1 is lowest and 4 highest). First-time keepers should start with a Beginner-tier species whose Ferguson Zone
            matches the lighting they can realistically provide.
          </p>
          <ul className="text-sm leading-relaxed list-disc pl-5 space-y-1" style={{ color: 'rgba(238,240,228,0.7)' }}>
            <li><strong className="text-brand-white">Lowest UVB / simplest lighting:</strong> low-Ferguson-Zone Beginner species such as the{' '}
              <Link href="/species/leopard-gecko" className="text-brand-primary no-underline hover:underline">Leopard Gecko</Link> (Zone 1–2) or{' '}
              <Link href="/species/crested-gecko" className="text-brand-primary no-underline hover:underline">Crested Gecko</Link> (Zone 2).</li>
            <li><strong className="text-brand-white">Higher UVB / dedicated basking:</strong> Zone 4 baskers such as the{' '}
              <Link href="/species/bearded-dragon" className="text-brand-primary no-underline hover:underline">Bearded Dragon</Link>.</li>
            <li><strong className="text-brand-white">Translate a zone into hardware:</strong> see the{' '}
              <Link href="/setup/uvb-lighting-guide" className="text-brand-primary no-underline hover:underline">UVB Lighting Guide</Link> for bulb choice and basking distance.</li>
            <li><strong className="text-brand-white">Still deciding?</strong> Start from the{' '}
              <Link href="/species/best-beginner-reptiles" className="text-brand-primary no-underline hover:underline">Best Beginner Reptiles</Link> shortlist, or compare demands in{' '}
              <Link href="/species/beginner-vs-advanced-reptiles" className="text-brand-primary no-underline hover:underline">Beginner vs Advanced Reptiles</Link>.</li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 px-container-sm sm:px-container py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {SPECIES.map(s => (
            <Link key={s.slug} href={`/species/${s.slug}`}
              className="block rounded-xl overflow-hidden no-underline group"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="relative h-36 overflow-hidden">
                <StockImage manifestKey={s.img} fallbackKey="lizard-com:category-species" alt={s.name} aspect="1:1" variant="inline" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="p-3">
                <div className="font-display font-bold text-brand-white text-sm mb-0.5 leading-tight">{s.name}</div>
                <div className="text-2xs italic mb-2" style={{ color: 'rgba(238,240,228,0.4)' }}>{s.sci}</div>
                <div className="flex flex-col gap-1">
                  <span className={`text-2xs font-bold px-2 py-0.5 rounded-pill border w-fit ${LEVEL_COLORS[s.level as keyof typeof LEVEL_COLORS]}`}>{s.level}</span>
                  <span className="text-2xs" style={{ color: 'rgba(238,240,228,0.4)' }}>UVB: {s.zone}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Key guides */}
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { title: 'UVB Lighting Guide', href: '/setup/uvb-lighting-guide', desc: 'Ferguson Zones, bulb selection, distances' },
            { title: 'Best UVB Bulbs 2026', href: '/reviews/best-uvb-bulbs', desc: 'Published Solarmeter 6.5 rankings' },
            { title: 'Best Terrariums 2026', href: '/reviews/best-reptile-terrariums', desc: 'PVC vs glass, compared from keeper reports' },
          ].map(link => (
            <Link key={link.href} href={link.href}
              className="block rounded-xl p-5 no-underline hover:-translate-y-1 transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="font-display font-bold text-brand-white text-sm mb-1">{link.title}</div>
              <div className="text-xs" style={{ color: 'rgba(238,240,228,0.45)' }}>{link.desc}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Beginner Reptiles at a Glance — extractable reference table built ONLY from
          the on-page SPECIES data. Each row deep-links to that species' care guide. */}
      <div className="relative z-10 px-container-sm sm:px-container py-12"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <h2 className="font-display font-bold text-brand-white text-xl mb-2">Beginner Reptiles at a Glance</h2>
        <p className="text-sm mb-5 max-w-2xl" style={{ color: 'rgba(238,240,228,0.5)' }}>
          The Beginner-tier species in this library, with their broad group (lizard or snake), Ferguson Zone (UVB demand),
          and the husbandry trait that most defines each one. Figures reflect the care-level and Ferguson-Zone tags shown on the cards above.
        </p>
        <div className="overflow-x-auto rounded-xl" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.04)' }}>
                <th className="text-left font-display font-bold text-brand-white px-4 py-3">Species</th>
                <th className="text-left font-display font-bold text-brand-white px-4 py-3">Group</th>
                <th className="text-left font-display font-bold text-brand-white px-4 py-3">Ferguson Zone (UVB)</th>
                <th className="text-left font-display font-bold text-brand-white px-4 py-3">Defining husbandry note</th>
              </tr>
            </thead>
            <tbody>
              {beginnerSpecies.map((s) => (
                <tr key={s.slug} style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <td className="px-4 py-3 align-top">
                    <Link href={`/species/${s.slug}`} className="text-brand-primary no-underline hover:underline font-semibold">{s.name}</Link>
                    <div className="text-2xs italic" style={{ color: 'rgba(238,240,228,0.4)' }}>{s.sci}</div>
                  </td>
                  <td className="px-4 py-3 align-top" style={{ color: 'rgba(238,240,228,0.7)' }}>{groupFor(s.name)}</td>
                  <td className="px-4 py-3 align-top" style={{ color: 'rgba(238,240,228,0.7)' }}>{s.zone}</td>
                  <td className="px-4 py-3 align-top" style={{ color: 'rgba(238,240,228,0.6)' }}>
                    {s.zone.includes('4')
                      ? 'Higher-output UVB and a dedicated basking zone are central to its setup.'
                      : s.zone.includes('3')
                      ? 'Moderate UVB; confirm bulb and basking distance on its care guide.'
                      : 'Lower UVB demand — among the simpler lighting setups in this list.'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-2xs mt-3" style={{ color: 'rgba(238,240,228,0.4)' }}>
          Care levels and Ferguson Zones are husbandry guidance only. Confirm species-specific health and lighting needs on each care guide and with a reptile (exotic) veterinarian.
        </p>
      </div>

      {/* Frequently Asked Questions — rendered FAQAccordion. Schema is emitted once
          via the combined SchemaScript at the top, so includeSchema={false} here. */}
      <div className="relative z-10 px-container-sm sm:px-container py-12"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <h2 className="font-display font-bold text-brand-white text-xl mb-5">Frequently Asked Questions</h2>
        <div className="max-w-3xl">
          <FAQAccordion items={faqItems} includeSchema={false} />
        </div>
      </div>

      <div className="relative z-10 px-container-sm sm:px-container py-12"
        style={{ background: '#0D1A0D', borderTop: '1px solid rgba(122,181,42,0.1)' }}>
        <EmailCapture variant="inline" siteId="lizard-com" ctaText="Subscribe Free" source="species-index" />
      </div>
      {/* agent1-browse-all-start */}
      <section className="border-t border-brand-border bg-brand-surface px-container-sm sm:px-container py-10">
        <h2 className="font-display font-bold text-brand-dark text-lg mb-4">All Reptile Species</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2">
        <Link key="ball-python" href="/species/ball-python" className="text-sm text-brand-primary no-underline hover:underline">Ball Python</Link>
        <Link key="ball-python-morphs" href="/species/ball-python-morphs" className="text-sm text-brand-primary no-underline hover:underline">Ball Python Morphs</Link>
        <Link key="bearded-dragon" href="/species/bearded-dragon" className="text-sm text-brand-primary no-underline hover:underline">Bearded Dragon</Link>
        <Link key="blue-tongued-skink" href="/species/blue-tongued-skink" className="text-sm text-brand-primary no-underline hover:underline">Blue Tongued Skink</Link>
        <Link key="boa-constrictor" href="/species/boa-constrictor" className="text-sm text-brand-primary no-underline hover:underline">Boa Constrictor</Link>
        <Link key="california-kingsnake" href="/species/california-kingsnake" className="text-sm text-brand-primary no-underline hover:underline">California Kingsnake</Link>
        <Link key="corn-snake" href="/species/corn-snake" className="text-sm text-brand-primary no-underline hover:underline">Corn Snake</Link>
        <Link key="crested-gecko" href="/species/crested-gecko" className="text-sm text-brand-primary no-underline hover:underline">Crested Gecko</Link>
        <Link key="day-gecko" href="/species/day-gecko" className="text-sm text-brand-primary no-underline hover:underline">Day Gecko</Link>
        <Link key="frilled-dragon" href="/species/frilled-dragon" className="text-sm text-brand-primary no-underline hover:underline">Frilled Dragon</Link>
        <Link key="green-iguana" href="/species/green-iguana" className="text-sm text-brand-primary no-underline hover:underline">Green Iguana</Link>
        <Link key="jacksons-chameleon" href="/species/jacksons-chameleon" className="text-sm text-brand-primary no-underline hover:underline">Jackson's Chameleon</Link>
        <Link key="leopard-gecko" href="/species/leopard-gecko" className="text-sm text-brand-primary no-underline hover:underline">Leopard Gecko</Link>
        <Link key="pacman-frog" href="/species/pacman-frog" className="text-sm text-brand-primary no-underline hover:underline">Pacman Frog</Link>
        <Link key="panther-chameleon" href="/species/panther-chameleon" className="text-sm text-brand-primary no-underline hover:underline">Panther Chameleon</Link>
        <Link key="rosy-boa" href="/species/rosy-boa" className="text-sm text-brand-primary no-underline hover:underline">Rosy Boa</Link>
        <Link key="russian-tortoise" href="/species/russian-tortoise" className="text-sm text-brand-primary no-underline hover:underline">Russian Tortoise</Link>
        <Link key="sulcata-tortoise" href="/species/sulcata-tortoise" className="text-sm text-brand-primary no-underline hover:underline">Sulcata Tortoise</Link>
        <Link key="tokay-gecko" href="/species/tokay-gecko" className="text-sm text-brand-primary no-underline hover:underline">Tokay Gecko</Link>
        <Link key="uromastyx" href="/species/uromastyx" className="text-sm text-brand-primary no-underline hover:underline">Uromastyx</Link>
        <Link key="veiled-chameleon" href="/species/veiled-chameleon" className="text-sm text-brand-primary no-underline hover:underline">Veiled Chameleon</Link>
        <Link key="whites-tree-frog" href="/species/whites-tree-frog" className="text-sm text-brand-primary no-underline hover:underline">White's Tree Frog</Link>
        <Link key="african-fat-tailed-gecko" href="/species/african-fat-tailed-gecko" className="text-sm text-brand-primary no-underline hover:underline">African Fat-Tailed Gecko</Link>
        <Link key="argentine-black-and-white-tegu" href="/species/argentine-black-and-white-tegu" className="text-sm text-brand-primary no-underline hover:underline">Argentine Black and White Tegu</Link>
        <Link key="chinese-water-dragon" href="/species/chinese-water-dragon" className="text-sm text-brand-primary no-underline hover:underline">Chinese Water Dragon</Link>
        <Link key="fire-skink" href="/species/fire-skink" className="text-sm text-brand-primary no-underline hover:underline">Fire Skink</Link>
        <Link key="gargoyle-gecko" href="/species/gargoyle-gecko" className="text-sm text-brand-primary no-underline hover:underline">Gargoyle Gecko</Link>
        <Link key="green-anole" href="/species/green-anole" className="text-sm text-brand-primary no-underline hover:underline">Green Anole</Link>
        <Link key="kenyan-sand-boa" href="/species/kenyan-sand-boa" className="text-sm text-brand-primary no-underline hover:underline">Kenyan Sand Boa</Link>
        <Link key="leachianus-gecko" href="/species/leachianus-gecko" className="text-sm text-brand-primary no-underline hover:underline">Leachianus Gecko</Link>
        <Link key="mossy-leaf-tail-gecko" href="/species/mossy-leaf-tail-gecko" className="text-sm text-brand-primary no-underline hover:underline">Mossy Leaf-Tail Gecko</Link>
        <Link key="mourning-gecko" href="/species/mourning-gecko" className="text-sm text-brand-primary no-underline hover:underline">Mourning Gecko</Link>
        <Link key="nile-monitor" href="/species/nile-monitor" className="text-sm text-brand-primary no-underline hover:underline">Nile Monitor</Link>
        <Link key="savannah-monitor" href="/species/savannah-monitor" className="text-sm text-brand-primary no-underline hover:underline">Savannah Monitor</Link>
        <Link key="western-hognose-snake" href="/species/western-hognose-snake" className="text-sm text-brand-primary no-underline hover:underline">Western Hognose Snake</Link>
        </div>
        <h2 className="font-display font-bold text-brand-dark text-lg mb-4 mt-8">Choosing a Reptile</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2">
        <Link key="best-beginner-reptiles" href="/species/best-beginner-reptiles" className="text-sm text-brand-primary no-underline hover:underline">Best Beginner Reptiles</Link>
        <Link key="beginner-vs-advanced-reptiles" href="/species/beginner-vs-advanced-reptiles" className="text-sm text-brand-primary no-underline hover:underline">Beginner vs Advanced Reptiles</Link>
        <Link key="reptiles-that-dont-need-uvb" href="/species/reptiles-that-dont-need-uvb" className="text-sm text-brand-primary no-underline hover:underline">Reptiles That Do Not Need UVB</Link>
        <Link key="low-maintenance-reptiles" href="/species/low-maintenance-reptiles" className="text-sm text-brand-primary no-underline hover:underline">Low-Maintenance Reptiles</Link>
        <Link key="reptile-buying-checklist" href="/species/reptile-buying-checklist" className="text-sm text-brand-primary no-underline hover:underline">Reptile Buying Checklist</Link>
        </div>
      </section>
      {/* agent1-browse-all-end */}

      <CrossPortfolioCard currentSite="lizard-com" contentType="species" variant="footer" />
</>
  )
}
