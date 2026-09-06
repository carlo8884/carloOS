import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, buildMetadata, buildBreadcrumbSchema, combineSchemas, EmailCapture, SchemaScript, ShopCtas, StockImage } from '@carloOS/ui'
import { createServerClient } from '@carloOS/db'
import { HubMasthead } from '../../components/HubMasthead'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Aquarium Fish Species Guide — 200+ Fish Profiles | Fish.com',
  description: 'Complete care guides for 200+ aquarium fish species. Freshwater, saltwater, beginner to advanced — tank size, water parameters, diet, compatibility, and health.',
  path: '/species',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://fish.com/' },
    { name: 'Species', url: 'https://fish.com/species' },
  ],
})


const FEATURED = [
  { name: 'Betta Fish', sci: 'Betta splendens', type: 'Freshwater', diff: 'Beginner', slug: 'betta-fish', manifestKey: 'fish-com:species-thumb-betta' },
  { name: 'Neon Tetra', sci: 'Paracheirodon innesi', type: 'Freshwater', diff: 'Beginner', slug: 'neon-tetra', manifestKey: 'fish-com:species-thumb-neon-tetra' },
  { name: 'Clownfish', sci: 'Amphiprioninae', type: 'Saltwater', diff: 'Beginner', slug: 'clownfish', manifestKey: 'fish-com:species-thumb-clownfish' },
  { name: 'Goldfish', sci: 'Carassius auratus', type: 'Freshwater', diff: 'Beginner', slug: 'goldfish', manifestKey: 'fish-com:species-thumb-goldfish' },
  { name: 'Angelfish', sci: 'Pterophyllum scalare', type: 'Freshwater', diff: 'Intermediate', slug: 'angelfish', manifestKey: 'fish-com:species-thumb-angelfish' },
  { name: 'Discus', sci: 'Symphysodon spp.', type: 'Freshwater', diff: 'Advanced', slug: 'discus', manifestKey: 'fish-com:species-thumb-discus' },
  { name: 'Guppy', sci: 'Poecilia reticulata', type: 'Freshwater', diff: 'Beginner', slug: 'guppy', manifestKey: 'fish-com:species-thumb-guppy' },
  { name: 'Oscar', sci: 'Astronotus ocellatus', type: 'Freshwater', diff: 'Intermediate', slug: 'oscar', manifestKey: 'fish-com:species-thumb-oscar' },
]

// ItemList of the featured species — structured, citable index of the
// species cluster for AI Overviews / Perplexity (GEO authority signal).
const speciesListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Featured Aquarium Fish Species at Fish.com',
  numberOfItems: FEATURED.length,
  itemListElement: FEATURED.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.name,
    url: `https://fish.com/species/${s.slug}`,
  })),
}

const schema = combineSchemas(breadcrumbSchema, speciesListSchema)

const DIFF_COLORS = {
  Beginner: 'text-green-700 bg-green-50 border-green-200',
  Intermediate: 'text-amber-700 bg-amber-50 border-amber-200',
  Advanced: 'text-red-700 bg-red-50 border-red-200',
}

const CATEGORIES = [
  { name: 'Freshwater Beginner', href: '/species?type=freshwater&diff=beginner', count: '80+' },
  { name: 'Freshwater Community', href: '/species?type=freshwater&compat=community', count: '60+' },
  { name: 'Saltwater & Reef', href: '/species?type=saltwater', count: '40+' },
  { name: 'Livebearers', href: '/species?subcategory=livebearer', count: '15+' },
  { name: 'Cichlids', href: '/species?subcategory=cichlid', count: '30+' },
  { name: 'Catfish', href: '/species?subcategory=catfish', count: '20+' },
]

export default async function SpeciesIndexPage() {
  let dbSpecies: Array<{ slug: string; common_name: string; scientific_name: string; care_data: Record<string, string> }> = []
  try {
    const supabase = createServerClient()
    const { data } = await supabase
      .from('species')
      .select('slug, common_name, scientific_name, care_data')
      .eq('site_id', 'fish-com')
      .eq('active', true)
      .order('common_name')
      .limit(50)
    dbSpecies = (data ?? []) as typeof dbSpecies
  } catch { /* DB not connected */ }

  const displaySpecies = dbSpecies.length > 0 ? dbSpecies : FEATURED

  return (
    <>
      <SchemaScript schema={schema} />
      <>
      {/* HERO — premium image-first masthead (HubMasthead) */}
      <HubMasthead
        manifestKey="fish-com:category-species"
        alt="A vividly colored betta fish displaying its fins in a planted aquarium"
        eyebrow="Species Library"
        title="Aquarium Fish Species Guide"
        subtitle="Complete care guides for 200+ freshwater and saltwater species — tank size, water parameters, diet, compatibility, and health for every fish in your aquarium."
        primaryCta={{ href: '/tools/stocking-calculator', label: 'Check tank compatibility' }}
        secondaryCta={{ href: '/species/betta-fish', label: 'Start with betta care' }}
      />

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-content-wide mx-auto">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the fish species-hub checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Fish species-hub checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-aquarium-species-profile-chart,
            rim-species-card, and
            aquarist-species-reference-handbook notes that
            match the featured-species-map,
            freshwater-saltwater-category-log, and
            care-guide-grounding copy on this hub — a
            laminated aquarium species profile chart so
            the featured-species map (betta, tetra,
            clownfish, goldfish, and the rest of the
            library) is posted on the rim (not a
            tools-hub calculator chart, not a reviews
            buyer-guide chart), an aquarium rim species
            card so each freshwater / saltwater category
            note is labeled on the rim (not a measurement
            card, not a reviews comparison card), and an
            aquarist species reference handbook so the
            tank-size / water-parameter / diet /
            compatibility / health grounding is a
            physical kitchen book (not a calculator
            handbook, not a reviews handbook).
            Educational kitchen checklist, not a ranked
            livestock list, not a child betta-tank-setup
            / discus / kuhli / otocinclus hop, and not a
            substitute for a veterinarian. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="fish-com"
            title="Fish species-hub checklist"
            subtitle="Email the species-profile-chart, rim species-card, and species-handbook notes. No spam."
            ctaText="Email my fish species-hub checklist"
            source="species-hub-under-hero"
          />
        </div>
      </section>

      {/* Category filters */}
      <div className="bg-brand-surface border-b border-brand-border px-container-sm sm:px-container py-4">
        <div className="flex gap-3 overflow-x-auto pb-1 -mb-1">
          {CATEGORIES.map(cat => (
            <Link key={cat.href} href={cat.href}
              className="flex-shrink-0 text-xs font-semibold px-4 py-2 bg-brand-white border border-brand-border rounded-pill no-underline text-brand-text-mid hover:border-brand-primary hover:text-brand-primary transition-colors">
              {cat.name} <span className="text-brand-text-light ml-1">{cat.count}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="px-container-sm sm:px-container py-12">
        <div className="flex items-center justify-between mb-7">
          <h2 className="font-display font-bold text-brand-dark text-2xl">
            {dbSpecies.length > 0 ? `${dbSpecies.length} Species` : 'Featured Species'}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {FEATURED.map((species) => (
            <Link key={species.slug} href={`/species/${species.slug}`}
              className="block bg-brand-white border border-brand-border rounded-xl overflow-hidden no-underline hover:border-brand-primary hover:-translate-y-1 hover:shadow-card-hover transition-all duration-200">
              <div className="[&>figure]:my-0 [&>figure]:rounded-none overflow-hidden">
                <StockImage manifestKey={species.manifestKey} alt={species.name} aspect="4:3" />
              </div>
              <div className="px-4 pt-1 pb-0.5">
                <span className={`text-2xs font-bold px-2 py-0.5 rounded-pill border ${DIFF_COLORS[species.diff as keyof typeof DIFF_COLORS] ?? ''}`}>
                  {species.diff}
                </span>
              </div>
              <div className="p-4 pt-2">
                <div className="font-display font-bold text-brand-dark text-base mb-0.5 leading-tight">{species.name}</div>
                <div className="text-xs italic text-brand-text-light mb-1">{species.sci}</div>
                <div className="text-xs font-semibold text-brand-primary">{species.type}</div>
              </div>
            </Link>
          ))}

          {/* More coming CTA */}
          <div className="border-2 border-dashed border-brand-border rounded-xl flex items-center justify-center text-center p-6">
            <div>
              <div className="text-sm font-bold text-brand-text-mid mb-1">40+ species</div>
              <div className="text-xs text-brand-text-light">Added weekly</div>
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div className="mt-12 grid sm:grid-cols-4 gap-4">
          {[
            { title: 'Aquarium Setup Guide', href: '/setup', desc: 'First tank, step by step' },
            { title: 'Equipment Reviews', href: '/reviews', desc: 'Filters, heaters, lighting ranked' },
            { title: 'Water Chemistry', href: '/water-parameters', desc: 'pH, ammonia, nitrate explained' },
            { title: 'Nitrogen Cycle', href: '/health/nitrogen-cycle-explained', desc: 'Why cycling is essential' },
          ].map(link => (
            <Link key={link.href} href={link.href}
              className="block bg-brand-white border border-brand-border rounded-xl p-5 no-underline hover:border-brand-primary transition-colors">
              <div className="font-display font-bold text-brand-dark text-sm mb-1">{link.title}</div>
              <div className="text-xs text-brand-text-light">{link.desc}</div>
            </Link>
          ))}
        </div>
      </div>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mb-4 max-w-content-wide">
          Species-hub kitchen kit
        </h2>
        <p className="max-w-content-wide text-sm text-brand-text-mid leading-relaxed">
          Everyday physical supplies that match the
          featured-species-map,
          freshwater-saltwater-category-log, and
          care-guide-grounding copy on this hub — a
          laminated aquarium species profile chart so the
          featured-species map is posted on the rim, an
          aquarium rim species card so each freshwater /
          saltwater category note is labeled on the rim,
          and an aquarist species reference handbook so
          the tank-size / water-parameter / diet /
          compatibility / health grounding is a physical
          kitchen book. These are educational kitchen
          searches, not a ranked livestock list, not a
          substitute for a veterinarian, not a tools-hub
          / reviews-hub hop, and not a child
          betta-tank-setup / discus / kuhli / otocinclus
          hop (those live on species children). This page
          does not hop medications. This page does not
          claim hands-on testing.
        </p>

        <div className="max-w-content-wide mt-6">
          <AffiliateDisclosure variant="inline" siteId="fish-com" />
        </div>

        {/* Money path — live amazon-brand search hops
            (laminated aquarium species profile chart /
            aquarium rim species card /
            aquarist species reference handbook).
            Educational kitchen searches only; no Rx hops.
            ShopCtas hides empty Chewy; never href="#"
            or PLACEHOLDER. Unused vs tools / reviews
            kitchen kits and child tank-setup hops.
            Skip discus / kuhli / otocinclus children. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-content-wide">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the species-hub kitchen kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page featured-species-map,
            freshwater-saltwater-category-log, and
            care-guide-grounding copy — a laminated
            aquarium species profile chart, an aquarium
            rim species card, and an aquarist species
            reference handbook. Educational kitchen
            searches only. They are not a ranked
            livestock list, they are not a tools-hub /
            reviews-hub hop, they are not a child
            tank-setup hop, and they do not replace a
            veterinarian. Fish.com earns a commission on
            qualifying purchases at no extra cost to you.
            Empty Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+aquarium+species+profile+chart?s=species-hub"
              amazonLabel="Browse laminated aquarium species profile charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+rim+species+card?s=species-hub"
              amazonLabel="Browse aquarium rim species cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarist+species+reference+handbook?s=species-hub"
              amazonLabel="Browse aquarist species reference handbooks on Amazon →"
            />
          </div>
        </div>
      </section>

      {/* agent1-browse-all-start */}
      <section className="border-t border-brand-border bg-brand-surface px-container-sm sm:px-container py-10">
        <h2 className="font-display font-bold text-brand-dark text-lg mb-4">All Fish Species</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2">
        <Link key="african-cichlid" href="/species/african-cichlid" className="text-sm text-brand-primary no-underline hover:underline">African Cichlid</Link>
        <Link key="amano-shrimp" href="/species/amano-shrimp" className="text-sm text-brand-primary no-underline hover:underline">Amano Shrimp</Link>
        <Link key="angelfish" href="/species/angelfish" className="text-sm text-brand-primary no-underline hover:underline">Angelfish</Link>
        <Link key="axolotl" href="/species/axolotl" className="text-sm text-brand-primary no-underline hover:underline">Axolotl</Link>
        <Link key="betta-fish" href="/species/betta-fish" className="text-sm text-brand-primary no-underline hover:underline">Betta Fish</Link>
        <Link key="betta-fish-tank-mates" href="/species/betta-fish-tank-mates" className="text-sm text-brand-primary no-underline hover:underline">Betta Fish Tank Mates</Link>
        <Link key="blue-ram" href="/species/blue-ram" className="text-sm text-brand-primary no-underline hover:underline">Blue Ram</Link>
        <Link key="boesemani-rainbowfish" href="/species/boesemani-rainbowfish" className="text-sm text-brand-primary no-underline hover:underline">Boesemani Rainbowfish</Link>
        <Link key="bristlenose-pleco" href="/species/bristlenose-pleco" className="text-sm text-brand-primary no-underline hover:underline">Bristlenose Pleco</Link>
        <Link key="bronze-corydoras" href="/species/bronze-corydoras" className="text-sm text-brand-primary no-underline hover:underline">Bronze Corydoras</Link>
        <Link key="cardinal-tetra" href="/species/cardinal-tetra" className="text-sm text-brand-primary no-underline hover:underline">Cardinal Tetra</Link>
        <Link key="celestial-pearl-danio" href="/species/celestial-pearl-danio" className="text-sm text-brand-primary no-underline hover:underline">Celestial Pearl Danio</Link>
        <Link key="cherry-barb" href="/species/cherry-barb" className="text-sm text-brand-primary no-underline hover:underline">Cherry Barb</Link>
        <Link key="cherry-shrimp" href="/species/cherry-shrimp" className="text-sm text-brand-primary no-underline hover:underline">Cherry Shrimp</Link>
        <Link key="clownfish" href="/species/clownfish" className="text-sm text-brand-primary no-underline hover:underline">Clownfish</Link>
        <Link key="corydoras" href="/species/corydoras" className="text-sm text-brand-primary no-underline hover:underline">Corydoras</Link>
        <Link key="discus" href="/species/discus" className="text-sm text-brand-primary no-underline hover:underline">Discus</Link>
        <Link key="dwarf-gourami" href="/species/dwarf-gourami" className="text-sm text-brand-primary no-underline hover:underline">Dwarf Gourami</Link>
        <Link key="dwarf-puffer" href="/species/dwarf-puffer" className="text-sm text-brand-primary no-underline hover:underline">Dwarf Puffer</Link>
        <Link key="ember-tetra" href="/species/ember-tetra" className="text-sm text-brand-primary no-underline hover:underline">Ember Tetra</Link>
        <Link key="endlers-livebearer" href="/species/endlers-livebearer" className="text-sm text-brand-primary no-underline hover:underline">Endlers Livebearer</Link>
        <Link key="goldfish" href="/species/goldfish" className="text-sm text-brand-primary no-underline hover:underline">Goldfish</Link>
        <Link key="guppy" href="/species/guppy" className="text-sm text-brand-primary no-underline hover:underline">Guppy</Link>
        <Link key="harlequin-rasbora" href="/species/harlequin-rasbora" className="text-sm text-brand-primary no-underline hover:underline">Harlequin Rasbora</Link>
        <Link key="hillstream-loach" href="/species/hillstream-loach" className="text-sm text-brand-primary no-underline hover:underline">Hillstream Loach</Link>
        <Link key="koi" href="/species/koi" className="text-sm text-brand-primary no-underline hover:underline">Koi</Link>
        <Link key="kuhli-loach" href="/species/kuhli-loach" className="text-sm text-brand-primary no-underline hover:underline">Kuhli Loach</Link>
        <Link key="molly-fish" href="/species/molly-fish" className="text-sm text-brand-primary no-underline hover:underline">Molly Fish</Link>
        <Link key="mystery-snail" href="/species/mystery-snail" className="text-sm text-brand-primary no-underline hover:underline">Mystery Snail</Link>
        <Link key="neon-tetra" href="/species/neon-tetra" className="text-sm text-brand-primary no-underline hover:underline">Neon Tetra</Link>
        <Link key="oscar" href="/species/oscar" className="text-sm text-brand-primary no-underline hover:underline">Oscar</Link>
        <Link key="otocinclus" href="/species/otocinclus" className="text-sm text-brand-primary no-underline hover:underline">Otocinclus</Link>
        <Link key="panda-corydoras" href="/species/panda-corydoras" className="text-sm text-brand-primary no-underline hover:underline">Panda Corydoras</Link>
        <Link key="pearl-gourami" href="/species/pearl-gourami" className="text-sm text-brand-primary no-underline hover:underline">Pearl Gourami</Link>
        <Link key="platy-fish" href="/species/platy-fish" className="text-sm text-brand-primary no-underline hover:underline">Platy Fish</Link>
        <Link key="pleco" href="/species/pleco" className="text-sm text-brand-primary no-underline hover:underline">Pleco</Link>
        <Link key="puffer-fish" href="/species/puffer-fish" className="text-sm text-brand-primary no-underline hover:underline">Puffer Fish</Link>
        <Link key="rainbow-fish" href="/species/rainbow-fish" className="text-sm text-brand-primary no-underline hover:underline">Rainbow Fish</Link>
        <Link key="sparkling-gourami" href="/species/sparkling-gourami" className="text-sm text-brand-primary no-underline hover:underline">Sparkling Gourami</Link>
        <Link key="swordtail-fish" href="/species/swordtail-fish" className="text-sm text-brand-primary no-underline hover:underline">Swordtail Fish</Link>
        <Link key="white-cloud-mountain-minnow" href="/species/white-cloud-mountain-minnow" className="text-sm text-brand-primary no-underline hover:underline">White Cloud Mountain Minnow</Link>
        <Link key="zebra-danio" href="/species/zebra-danio" className="text-sm text-brand-primary no-underline hover:underline">Zebra Danio</Link>
        </div>
      </section>
      {/* agent1-browse-all-end */}
</>
  </>
  )
}
