import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AffiliateDisclosure, buildMetadata, EmailCapture } from '@carloOS/ui'
import { createServerClient } from '@carloOS/db'
import { SPECIES_V2, type SpeciesProfile } from '../../data/species-v2'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Aquarium Fish Species Guide — Care Guides for 40+ Species | Fish.com',
  description:
    'Complete care guides for freshwater fish, saltwater fish, and aquarium invertebrates. Tank size, water parameters, diet, compatibility, common diseases, and gear recommendations for every species.',
  path: '/species',
})

const FEATURED = [
  { name: 'Betta Fish', sci: 'Betta splendens', type: 'Freshwater', diff: 'Beginner', slug: 'betta-fish', img: 'https://images.unsplash.com/photo-1583377993497-f2f1b2b13c54?w=400&q=80&auto=format&fit=crop' },
  { name: 'Neon Tetra', sci: 'Paracheirodon innesi', type: 'Freshwater', diff: 'Beginner', slug: 'neon-tetra', img: 'https://images.unsplash.com/photo-1520302630591-fd1cb63aa58e?w=400&q=80&auto=format&fit=crop' },
  { name: 'Clownfish', sci: 'Amphiprioninae', type: 'Saltwater', diff: 'Beginner', slug: 'clownfish', img: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&q=80&auto=format&fit=crop' },
  { name: 'Goldfish', sci: 'Carassius auratus', type: 'Freshwater', diff: 'Beginner', slug: 'goldfish', img: 'https://images.unsplash.com/photo-1524704654690-b56af7d6b9f1?w=400&q=80&auto=format&fit=crop' },
  { name: 'Angelfish', sci: 'Pterophyllum scalare', type: 'Freshwater', diff: 'Intermediate', slug: 'angelfish', img: 'https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=400&q=80&auto=format&fit=crop' },
  { name: 'Discus', sci: 'Symphysodon spp.', type: 'Freshwater', diff: 'Advanced', slug: 'discus', img: 'https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=400&q=80&auto=format&fit=crop' },
  { name: 'Guppy', sci: 'Poecilia reticulata', type: 'Freshwater', diff: 'Beginner', slug: 'guppy', img: 'https://images.unsplash.com/photo-1520302630591-fd1cb63aa58e?w=400&q=80&auto=format&fit=crop' },
  { name: 'Oscar', sci: 'Astronotus ocellatus', type: 'Freshwater', diff: 'Intermediate', slug: 'oscar', img: 'https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=400&q=80&auto=format&fit=crop' },
]

const DIFF_COLORS: Record<string, string> = {
  Beginner: 'text-green-700 bg-green-50 border-green-200',
  Intermediate: 'text-amber-700 bg-amber-50 border-amber-200',
  Advanced: 'text-red-700 bg-red-50 border-red-200',
  beginner: 'text-green-700 bg-green-50 border-green-200',
  intermediate: 'text-amber-700 bg-amber-50 border-amber-200',
  advanced: 'text-red-700 bg-red-50 border-red-200',
}

const CARE_LEVEL_LABEL: Record<SpeciesProfile['care_level'], string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
}

const CATEGORY_GROUPS: Array<{
  category: SpeciesProfile['category']
  title: string
  intro: string
}> = [
  {
    category: 'freshwater-fish',
    title: 'Freshwater Fish',
    intro:
      'Tropical and temperate freshwater fish — livebearers, tetras, cichlids, loaches, and catfish. Most home aquariums start here; these species cover the spectrum from beginner-proof livebearers to soft-water blackwater specialists.',
  },
  {
    category: 'saltwater-fish',
    title: 'Saltwater Fish',
    intro:
      'Reef-safe and FOWLR-compatible marine fish. Saltwater systems demand stable salinity, calibrated test kits, and rigorous quarantine — but yield some of the most striking fish in the hobby. Tank-bred specimens are dramatically hardier than wild-caught.',
  },
  {
    category: 'freshwater-invert',
    title: 'Freshwater Invertebrates',
    intro:
      'Shrimp and snails for cleanup crews, algae control, and dedicated invertebrate tanks. All are sensitive to copper-based medications and most need hard water for healthy molting and shell formation.',
  },
  {
    category: 'saltwater-invert',
    title: 'Saltwater Invertebrates',
    intro:
      'Cleanup-crew snails, hermit crabs, and reef-safe shrimp for marine systems. Coming soon to the species library.',
  },
]

const CATEGORIES = [
  { name: 'Freshwater Beginner', href: '/species?type=freshwater&diff=beginner', count: '80+' },
  { name: 'Freshwater Community', href: '/species?type=freshwater&compat=community', count: '60+' },
  { name: 'Saltwater & Reef', href: '/species?type=saltwater', count: '40+' },
  { name: 'Livebearers', href: '/species?subcategory=livebearer', count: '15+' },
  { name: 'Cichlids', href: '/species?subcategory=cichlid', count: '30+' },
  { name: 'Catfish', href: '/species?subcategory=catfish', count: '20+' },
]

interface SpeciesCard {
  slug: string
  commonName: string
  scientificName: string
  category: SpeciesProfile['category']
  care_level: SpeciesProfile['care_level']
}

function SpeciesCardLink({ sp }: { sp: SpeciesCard }) {
  const badge = DIFF_COLORS[sp.care_level] ?? ''
  return (
    <Link
      key={sp.slug}
      href={`/species/${sp.slug}`}
      className="block bg-brand-white border border-brand-border rounded-xl p-4 no-underline hover:border-brand-primary hover:-translate-y-0.5 hover:shadow-card-hover transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="font-display font-bold text-brand-dark text-sm leading-tight">
          {sp.commonName}
        </div>
        <span
          className={`text-2xs font-bold px-2 py-0.5 rounded-pill border whitespace-nowrap ${badge}`}
        >
          {CARE_LEVEL_LABEL[sp.care_level]}
        </span>
      </div>
      <div className="text-xs italic text-brand-text-light leading-tight">
        {sp.scientificName}
      </div>
    </Link>
  )
}

export default async function SpeciesIndexPage() {
  let dbSpecies: Array<{
    slug: string
    common_name: string
    scientific_name: string
    care_data: Record<string, string>
  }> = []
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
  } catch {
    /* DB not connected */
  }

  // Group v2 species by category for the new sections
  const grouped: Record<SpeciesProfile['category'], SpeciesProfile[]> = {
    'freshwater-fish': [],
    'saltwater-fish': [],
    'freshwater-invert': [],
    'saltwater-invert': [],
  }
  for (const sp of SPECIES_V2) grouped[sp.category].push(sp)
  for (const key of Object.keys(grouped) as Array<SpeciesProfile['category']>) {
    grouped[key].sort((a, b) => a.commonName.localeCompare(b.commonName))
  }

  return (
    <>
      <AffiliateDisclosure variant="banner" />
      <div className="bg-brand-dark px-container sm:px-container-sm py-16">
        <div className="flex items-center gap-2.5 mb-5">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Species Library
          </span>
        </div>
        <h1
          className="font-display font-bold text-white tracking-tight leading-tight mb-4"
          style={{ fontSize: 'clamp(30px, 5vw, 54px)' }}
        >
          Aquarium Fish Species Guide
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          Complete care guides for {SPECIES_V2.length}+ freshwater and saltwater species —
          tank size, water parameters, diet, compatibility, and disease prevention for
          every fish in your aquarium.
        </p>
      </div>

      {/* Care-level filter chips (client-side via #anchor jumps for SSR friendliness) */}
      <div className="bg-brand-surface border-b border-brand-border px-container sm:px-container-sm py-4">
        <div className="flex gap-3 overflow-x-auto pb-1 -mb-1 flex-wrap">
          {(['beginner', 'intermediate', 'advanced'] as const).map((lvl) => (
            <Link
              key={lvl}
              href={`#care-${lvl}`}
              className={`flex-shrink-0 text-xs font-semibold px-4 py-2 bg-brand-white border rounded-pill no-underline transition-colors ${DIFF_COLORS[lvl]} hover:opacity-80`}
            >
              {CARE_LEVEL_LABEL[lvl]} ({SPECIES_V2.filter((s) => s.care_level === lvl).length})
            </Link>
          ))}
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="flex-shrink-0 text-xs font-semibold px-4 py-2 bg-brand-white border border-brand-border rounded-pill no-underline text-brand-text-mid hover:border-brand-primary hover:text-brand-primary transition-colors"
            >
              {cat.name} <span className="text-brand-text-light ml-1">{cat.count}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured cards (kept for backward compatibility / DB fallback) */}
      <div className="px-container sm:px-container-sm py-12">
        <div className="flex items-center justify-between mb-7">
          <h2 className="font-display font-bold text-brand-dark text-2xl">
            {dbSpecies.length > 0 ? `${dbSpecies.length} Species` : 'Featured Species'}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {FEATURED.map((species) => (
            <Link
              key={species.slug}
              href={`/species/${species.slug}`}
              className="block bg-brand-white border border-brand-border rounded-xl overflow-hidden no-underline hover:border-brand-primary hover:-translate-y-1 hover:shadow-card-hover transition-all duration-200"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={species.img}
                  alt={species.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-2 left-2">
                  <span
                    className={`text-2xs font-bold px-2 py-0.5 rounded-pill border ${DIFF_COLORS[species.diff] ?? ''}`}
                  >
                    {species.diff}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="font-display font-bold text-brand-dark text-base mb-0.5 leading-tight">
                  {species.name}
                </div>
                <div className="text-xs italic text-brand-text-light mb-1">
                  {species.sci}
                </div>
                <div className="text-xs font-semibold text-brand-primary">{species.type}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* New: v2 species grouped by category */}
      {CATEGORY_GROUPS.map((group) => {
        const list = grouped[group.category]
        if (list.length === 0) return null
        return (
          <section
            key={group.category}
            className="border-t border-brand-border px-container sm:px-container-sm py-10"
          >
            <h2 className="font-display font-bold text-brand-dark text-xl mb-2">
              {group.title}{' '}
              <span className="text-brand-text-light text-sm font-normal">({list.length})</span>
            </h2>
            <p className="text-sm text-brand-text-mid max-w-3xl mb-6 leading-relaxed">
              {group.intro}
            </p>
            {(['beginner', 'intermediate', 'advanced'] as const).map((lvl) => {
              const levelList = list.filter((s) => s.care_level === lvl)
              if (levelList.length === 0) return null
              return (
                <div key={lvl} id={`care-${lvl}`} className="mb-6">
                  <h3 className="font-display font-bold text-brand-text-mid text-sm uppercase tracking-eyebrow mb-3">
                    {CARE_LEVEL_LABEL[lvl]}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {levelList.map((sp) => (
                      <SpeciesCardLink
                        key={sp.slug}
                        sp={{
                          slug: sp.slug,
                          commonName: sp.commonName,
                          scientificName: sp.scientificName,
                          category: sp.category,
                          care_level: sp.care_level,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )
            })}
          </section>
        )
      })}

      <div className="bg-brand-primary-pale border-t border-brand-border px-container sm:px-container-sm py-12">
        <EmailCapture
          variant="section"
          siteId="fish-com"
          title="The Weekly Tank"
          subtitle="Species spotlights, water chemistry tips, and equipment picks every Thursday."
          source="species-index"
          ctaText="Subscribe Free"
          perks={['🐠 Species spotlights', '🧪 Water chemistry', '⚙️ Equipment picks']}
        />
      </div>

      {/* agent1-browse-all-start */}
      <section className="border-t border-brand-border bg-brand-surface px-container sm:px-container-sm py-10">
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
          <Link key="cardinal-tetra" href="/species/cardinal-tetra" className="text-sm text-brand-primary no-underline hover:underline">Cardinal Tetra</Link>
          <Link key="celestial-pearl-danio" href="/species/celestial-pearl-danio" className="text-sm text-brand-primary no-underline hover:underline">Celestial Pearl Danio</Link>
          <Link key="cherry-barb" href="/species/cherry-barb" className="text-sm text-brand-primary no-underline hover:underline">Cherry Barb</Link>
          <Link key="cherry-shrimp" href="/species/cherry-shrimp" className="text-sm text-brand-primary no-underline hover:underline">Cherry Shrimp</Link>
          <Link key="clownfish" href="/species/clownfish" className="text-sm text-brand-primary no-underline hover:underline">Clownfish</Link>
          <Link key="corydoras" href="/species/corydoras" className="text-sm text-brand-primary no-underline hover:underline">Corydoras</Link>
          <Link key="discus" href="/species/discus" className="text-sm text-brand-primary no-underline hover:underline">Discus</Link>
          <Link key="discus-guide" href="/species/discus-guide" className="text-sm text-brand-primary no-underline hover:underline">Discus Guide</Link>
          <Link key="dwarf-gourami" href="/species/dwarf-gourami" className="text-sm text-brand-primary no-underline hover:underline">Dwarf Gourami</Link>
          <Link key="ember-tetra" href="/species/ember-tetra" className="text-sm text-brand-primary no-underline hover:underline">Ember Tetra</Link>
          <Link key="goldfish" href="/species/goldfish" className="text-sm text-brand-primary no-underline hover:underline">Goldfish</Link>
          <Link key="guppy" href="/species/guppy" className="text-sm text-brand-primary no-underline hover:underline">Guppy</Link>
          <Link key="harlequin-rasbora" href="/species/harlequin-rasbora" className="text-sm text-brand-primary no-underline hover:underline">Harlequin Rasbora</Link>
          <Link key="hillstream-loach" href="/species/hillstream-loach" className="text-sm text-brand-primary no-underline hover:underline">Hillstream Loach</Link>
          <Link key="koi" href="/species/koi" className="text-sm text-brand-primary no-underline hover:underline">Koi</Link>
          <Link key="kuhli-loach" href="/species/kuhli-loach" className="text-sm text-brand-primary no-underline hover:underline">Kuhli Loach</Link>
          <Link key="kuhli-loach-guide" href="/species/kuhli-loach-guide" className="text-sm text-brand-primary no-underline hover:underline">Kuhli Loach Guide</Link>
          <Link key="molly-fish" href="/species/molly-fish" className="text-sm text-brand-primary no-underline hover:underline">Molly Fish</Link>
          <Link key="mystery-snail" href="/species/mystery-snail" className="text-sm text-brand-primary no-underline hover:underline">Mystery Snail</Link>
          <Link key="neon-tetra" href="/species/neon-tetra" className="text-sm text-brand-primary no-underline hover:underline">Neon Tetra</Link>
          <Link key="oscar" href="/species/oscar" className="text-sm text-brand-primary no-underline hover:underline">Oscar</Link>
          <Link key="otocinclus" href="/species/otocinclus" className="text-sm text-brand-primary no-underline hover:underline">Otocinclus</Link>
          <Link key="otocinclus-guide" href="/species/otocinclus-guide" className="text-sm text-brand-primary no-underline hover:underline">Otocinclus Guide</Link>
          <Link key="platy-fish" href="/species/platy-fish" className="text-sm text-brand-primary no-underline hover:underline">Platy Fish</Link>
          <Link key="pleco" href="/species/pleco" className="text-sm text-brand-primary no-underline hover:underline">Pleco</Link>
          <Link key="puffer-fish" href="/species/puffer-fish" className="text-sm text-brand-primary no-underline hover:underline">Puffer Fish</Link>
          <Link key="rainbow-fish" href="/species/rainbow-fish" className="text-sm text-brand-primary no-underline hover:underline">Rainbow Fish</Link>
          <Link key="swordtail-fish" href="/species/swordtail-fish" className="text-sm text-brand-primary no-underline hover:underline">Swordtail Fish</Link>
          <Link key="white-cloud-mountain-minnow" href="/species/white-cloud-mountain-minnow" className="text-sm text-brand-primary no-underline hover:underline">White Cloud Mountain Minnow</Link>
        </div>
      </section>
      {/* agent1-browse-all-end */}
    </>
  )
}
