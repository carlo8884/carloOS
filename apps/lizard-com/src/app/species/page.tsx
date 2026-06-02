import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, EmailCapture, StockImage } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'lizard-com',
  title: 'Reptile Species Guide — 50+ Care Profiles | Lizard.com',
  description: 'Complete care guides for 50+ reptile and amphibian species. Enclosure setup, temperatures, UVB, feeding, and health — science-based for every species.',
  path: '/species',
})

const SPECIES = [
  { name: 'Bearded Dragon', sci: 'Pogona vitticeps', level: 'Beginner', zone: 'Zone 4', slug: 'bearded-dragon', img: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&q=80&auto=format&fit=crop' },
  { name: 'Leopard Gecko', sci: 'Eublepharis macularius', level: 'Beginner', zone: 'Zone 1–2', slug: 'leopard-gecko', img: 'https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?w=400&q=80&auto=format&fit=crop' },
  { name: 'Crested Gecko', sci: 'Correlophus ciliatus', level: 'Beginner', zone: 'Zone 2', slug: 'crested-gecko', img: 'https://images.unsplash.com/photo-1548155810-af5c30a49059?w=400&q=80&auto=format&fit=crop' },
  { name: 'Gargoyle Gecko', sci: 'Rhacodactylus auriculatus', level: 'Beginner', zone: 'Zone 1', slug: 'gargoyle-gecko', img: 'https://images.unsplash.com/photo-1548155810-af5c30a49059?w=400&q=80&auto=format&fit=crop' },
  { name: 'Ball Python', sci: 'Python regius', level: 'Beginner', zone: 'Zone 2–3', slug: 'ball-python', img: 'https://images.unsplash.com/photo-1531386151447-fd76ad50012f?w=400&q=80&auto=format&fit=crop' },
  { name: 'Corn Snake', sci: 'Pantherophis guttatus', level: 'Beginner', zone: 'Zone 2', slug: 'corn-snake', img: 'https://images.unsplash.com/photo-1567612529009-afe25813a308?w=400&q=80&auto=format&fit=crop' },
  { name: 'Blue-Tongue Skink', sci: 'Tiliqua spp.', level: 'Intermediate', zone: 'Zone 3–4', slug: 'blue-tongue-skink', img: 'https://images.unsplash.com/photo-1583795484071-3c453e3a7c71?w=400&q=80&auto=format&fit=crop' },
  { name: 'African Fat-Tailed Gecko', sci: 'Hemitheconyx caudicinctus', level: 'Beginner', zone: 'Zone 1', slug: 'african-fat-tailed-gecko', img: 'https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?w=400&q=80&auto=format&fit=crop' },
  { name: 'Western Hognose', sci: 'Heterodon nasicus', level: 'Beginner', zone: 'Zone 1–2', slug: 'western-hognose-snake', img: 'https://images.unsplash.com/photo-1531386151447-fd76ad50012f?w=400&q=80&auto=format&fit=crop' },
  { name: 'Kenyan Sand Boa', sci: 'Gongylophis colubrinus', level: 'Beginner', zone: 'Zone 1', slug: 'kenyan-sand-boa', img: 'https://images.unsplash.com/photo-1567612529009-afe25813a308?w=400&q=80&auto=format&fit=crop' },
  { name: 'Green Anole', sci: 'Anolis carolinensis', level: 'Intermediate', zone: 'Zone 2–3', slug: 'green-anole', img: 'https://images.unsplash.com/photo-1548155810-af5c30a49059?w=400&q=80&auto=format&fit=crop' },
  { name: 'Chinese Water Dragon', sci: 'Physignathus cocincinus', level: 'Intermediate', zone: 'Zone 2–3', slug: 'chinese-water-dragon', img: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&q=80&auto=format&fit=crop' },
  { name: 'Fire Skink', sci: 'Lepidothyris fernandi', level: 'Intermediate', zone: 'Zone 2', slug: 'fire-skink', img: 'https://images.unsplash.com/photo-1583795484071-3c453e3a7c71?w=400&q=80&auto=format&fit=crop' },
  { name: 'Leachianus Gecko', sci: 'Rhacodactylus leachianus', level: 'Intermediate', zone: 'Zone 1–2', slug: 'leachianus-gecko', img: 'https://images.unsplash.com/photo-1548155810-af5c30a49059?w=400&q=80&auto=format&fit=crop' },
  { name: 'Mourning Gecko', sci: 'Lepidodactylus lugubris', level: 'Beginner', zone: 'Zone 1–2', slug: 'mourning-gecko', img: 'https://images.unsplash.com/photo-1548155810-af5c30a49059?w=400&q=80&auto=format&fit=crop' },
  { name: 'Mossy Leaf-Tail Gecko', sci: 'Uroplatus sikorae', level: 'Advanced', zone: 'Zone 1', slug: 'mossy-leaf-tail-gecko', img: 'https://images.unsplash.com/photo-1548155810-af5c30a49059?w=400&q=80&auto=format&fit=crop' },
  { name: 'Argentine Tegu', sci: 'Salvator merianae', level: 'Advanced', zone: 'Zone 3–4', slug: 'argentine-black-and-white-tegu', img: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&q=80&auto=format&fit=crop' },
  { name: 'Savannah Monitor', sci: 'Varanus exanthematicus', level: 'Advanced', zone: 'Zone 3–4', slug: 'savannah-monitor', img: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&q=80&auto=format&fit=crop' },
  { name: 'Nile Monitor', sci: 'Varanus niloticus', level: 'Advanced', zone: 'Zone 3–4', slug: 'nile-monitor', img: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&q=80&auto=format&fit=crop' },
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

  const schema = combineSchemas(breadcrumbSchema, speciesListSchema)

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

      <div className="relative z-10 px-container-sm sm:px-container py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {SPECIES.map(s => (
            <Link key={s.slug} href={`/species/${s.slug}`}
              className="block rounded-xl overflow-hidden no-underline group"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="relative h-36 overflow-hidden">
                <Image src={s.img} alt={s.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, 16vw" />
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
            { title: 'Best UVB Bulbs 2025', href: '/reviews/best-uvb-bulbs', desc: 'Published Solarmeter 6.5 rankings' },
            { title: 'Best Terrariums 2025', href: '/reviews/best-reptile-terrariums', desc: 'PVC vs glass, compared from keeper reports' },
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
        <Link key="corn-snake" href="/species/corn-snake" className="text-sm text-brand-primary no-underline hover:underline">Corn Snake</Link>
        <Link key="crested-gecko" href="/species/crested-gecko" className="text-sm text-brand-primary no-underline hover:underline">Crested Gecko</Link>
        <Link key="day-gecko" href="/species/day-gecko" className="text-sm text-brand-primary no-underline hover:underline">Day Gecko</Link>
        <Link key="frilled-dragon" href="/species/frilled-dragon" className="text-sm text-brand-primary no-underline hover:underline">Frilled Dragon</Link>
        <Link key="leopard-gecko" href="/species/leopard-gecko" className="text-sm text-brand-primary no-underline hover:underline">Leopard Gecko</Link>
        <Link key="panther-chameleon" href="/species/panther-chameleon" className="text-sm text-brand-primary no-underline hover:underline">Panther Chameleon</Link>
        <Link key="russian-tortoise" href="/species/russian-tortoise" className="text-sm text-brand-primary no-underline hover:underline">Russian Tortoise</Link>
        <Link key="sulcata-tortoise" href="/species/sulcata-tortoise" className="text-sm text-brand-primary no-underline hover:underline">Sulcata Tortoise</Link>
        <Link key="tokay-gecko" href="/species/tokay-gecko" className="text-sm text-brand-primary no-underline hover:underline">Tokay Gecko</Link>
        <Link key="uromastyx" href="/species/uromastyx" className="text-sm text-brand-primary no-underline hover:underline">Uromastyx</Link>
        <Link key="veiled-chameleon" href="/species/veiled-chameleon" className="text-sm text-brand-primary no-underline hover:underline">Veiled Chameleon</Link>
        <Link key="african-fat-tailed-gecko" href="/species/african-fat-tailed-gecko" className="text-sm text-brand-primary no-underline hover:underline">African Fat-Tailed Gecko</Link>
        <Link key="argentine-black-and-white-tegu" href="/species/argentine-black-and-white-tegu" className="text-sm text-brand-primary no-underline hover:underline">Argentine Black and White Tegu</Link>
        <Link key="chinese-water-dragon" href="/species/chinese-water-dragon" className="text-sm text-brand-primary no-underline hover:underline">Chinese Water Dragon</Link>
        <Link key="fire-skink" href="/species/fire-skink" className="text-sm text-brand-primary no-underline hover:underline">Fire Skink</Link>
        <Link key="green-anole" href="/species/green-anole" className="text-sm text-brand-primary no-underline hover:underline">Green Anole</Link>
        <Link key="kenyan-sand-boa" href="/species/kenyan-sand-boa" className="text-sm text-brand-primary no-underline hover:underline">Kenyan Sand Boa</Link>
        <Link key="leachianus-gecko" href="/species/leachianus-gecko" className="text-sm text-brand-primary no-underline hover:underline">Leachianus Gecko</Link>
        <Link key="mourning-gecko" href="/species/mourning-gecko" className="text-sm text-brand-primary no-underline hover:underline">Mourning Gecko</Link>
        <Link key="nile-monitor" href="/species/nile-monitor" className="text-sm text-brand-primary no-underline hover:underline">Nile Monitor</Link>
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
</>
  )
}
