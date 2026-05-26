import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'
import { createServerClient } from '@carloOS/db'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Aquarium Fish Species Guide — 200+ Fish Profiles | Fish.com',
  description: 'Complete care guides for 200+ aquarium fish species. Freshwater, saltwater, beginner to advanced — tank size, water parameters, diet, compatibility, and health.',
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
      <div className="bg-brand-dark px-container sm:px-container-sm py-16">
        <div className="flex items-center gap-2.5 mb-5">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Species Library</span>
        </div>
        <h1 className="font-display font-bold text-white tracking-tight leading-tight mb-4"
          style={{ fontSize: 'clamp(30px, 5vw, 54px)' }}>
          Aquarium Fish Species Guide
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          Complete care guides for 200+ freshwater and saltwater species — tank size, water parameters, diet, compatibility, and health for every fish in your aquarium.
        </p>
      </div>

      {/* Category filters */}
      <div className="bg-brand-surface border-b border-brand-border px-container sm:px-container-sm py-4">
        <div className="flex gap-3 overflow-x-auto pb-1 -mb-1">
          {CATEGORIES.map(cat => (
            <Link key={cat.href} href={cat.href}
              className="flex-shrink-0 text-xs font-semibold px-4 py-2 bg-brand-white border border-brand-border rounded-pill no-underline text-brand-text-mid hover:border-brand-primary hover:text-brand-primary transition-colors">
              {cat.name} <span className="text-brand-text-light ml-1">{cat.count}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="px-container sm:px-container-sm py-12">
        <div className="flex items-center justify-between mb-7">
          <h2 className="font-display font-bold text-brand-dark text-2xl">
            {dbSpecies.length > 0 ? `${dbSpecies.length} Species` : 'Featured Species'}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {FEATURED.map((species) => (
            <Link key={species.slug} href={`/species/${species.slug}`}
              className="block bg-brand-white border border-brand-border rounded-xl overflow-hidden no-underline hover:border-brand-primary hover:-translate-y-1 hover:shadow-card-hover transition-all duration-200">
              <div className="relative h-44 overflow-hidden">
                <Image src={species.img} alt={species.name} fill className="object-cover" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-2 left-2">
                  <span className={`text-2xs font-bold px-2 py-0.5 rounded-pill border ${DIFF_COLORS[species.diff as keyof typeof DIFF_COLORS] ?? ''}`}>
                    {species.diff}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="font-display font-bold text-brand-dark text-base mb-0.5 leading-tight">{species.name}</div>
                <div className="text-xs italic text-brand-text-light mb-1">{species.sci}</div>
                <div className="text-xs font-semibold text-brand-primary">{species.type}</div>
              </div>
            </Link>
          ))}

          {/* More coming CTA */}
          <div className="border-2 border-dashed border-brand-border rounded-xl flex items-center justify-center text-center p-6">
            <div>
              <div className="text-3xl mb-2">🐠</div>
              <div className="text-sm font-bold text-brand-text-mid mb-1">200+ species</div>
              <div className="text-xs text-brand-text-light">Added weekly</div>
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {[
            { title: 'Aquarium Setup Guide', href: '/setup', desc: 'First tank, step by step' },
            { title: 'Water Chemistry', href: '/water', desc: 'pH, ammonia, nitrate explained' },
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

      <div className="bg-brand-primary-pale border-t border-brand-border px-container sm:px-container-sm py-12">
        <EmailCapture variant="section" siteId="fish-com"
          title="The Weekly Tank"
          subtitle="Species spotlights, water chemistry tips, and equipment picks every Thursday."
          source="species-index" ctaText="Subscribe Free"
          perks={['🐠 Species spotlights', '🧪 Water chemistry', '⚙️ Equipment picks']} />
      </div>
    </>
  )
}
