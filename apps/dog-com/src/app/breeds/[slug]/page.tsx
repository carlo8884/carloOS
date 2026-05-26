/**
 * Dog.com Breed Page — /breeds/[slug]
 * Server component. Fetches from Supabase species + posts tables.
 * Renders breed profile with care scores, health conditions, full article body.
 */

import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { getSpecies, getPost } from '@carloOS/db'

interface BreedPageProps {
  params: { slug: string }
}

// Breed images (will move to Supabase storage)
const BREED_IMAGES: Record<string, string> = {
  'golden-retriever': 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=1200&q=80&auto=format&fit=crop',
  'labrador-retriever': 'https://images.unsplash.com/photo-1579213838058-2aeeda8d6e2d?w=1200&q=80&auto=format&fit=crop',
  'french-bulldog': 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1200&q=80&auto=format&fit=crop',
  'german-shepherd': 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=1200&q=80&auto=format&fit=crop',
  'beagle': 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=1200&q=80&auto=format&fit=crop',
  'poodle': 'https://images.unsplash.com/photo-1616149955247-48c60b1d4413?w=1200&q=80&auto=format&fit=crop',
}

export async function generateStaticParams() {
  // Will populate from DB once seeded
  return [
    { slug: 'golden-retriever' },
    { slug: 'labrador-retriever' },
    { slug: 'french-bulldog' },
    { slug: 'german-shepherd' },
    { slug: 'beagle' },
    { slug: 'poodle' },
  ]
}

export async function generateMetadata({ params }: BreedPageProps): Promise<Metadata> {
  try {
    const species = await getSpecies('dog-com', params.slug)
    if (!species) return {}

    return buildMetadata({
      siteId: 'dog-com',
      title: `${species.common_name} — Breed Guide, Temperament & Health`,
      description: `Complete ${species.common_name} breed guide. Temperament, health conditions, exercise needs, grooming, and what to know before you get one. DVM-reviewed.`,
      path: `/breeds/${params.slug}`,
      ogImage: BREED_IMAGES[params.slug],
      type: 'article',
    })
  } catch {
    return {}
  }
}

export default async function BreedPage({ params }: BreedPageProps) {
  let species, post

  try {
    species = await getSpecies('dog-com', params.slug)
    // Get the associated article if it exists
    if (species?.post_id) {
      post = await getPost('dog-com', params.slug)
    }
  } catch {
    // DB not connected
  }

  // If no DB data, show placeholder for known breeds
  const knownBreeds = ['golden-retriever', 'labrador-retriever', 'french-bulldog', 'german-shepherd', 'beagle', 'poodle']
  if (!species && !knownBreeds.includes(params.slug)) {
    notFound()
  }

  const breedName = species?.common_name ?? params.slug.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
  const careData = species?.care_data as Record<string, unknown> ?? {}
  const healthConditions = species?.health_conditions ?? []
  const heroImage = BREED_IMAGES[params.slug]

  const schema = species ? buildArticleSchema({
    siteId: 'dog-com',
    title: `${breedName} Breed Guide`,
    description: `Complete ${breedName} breed profile covering temperament, health, training, and care.`,
    url: `https://dog.com/breeds/${params.slug}`,
    imageUrl: heroImage ?? '',
    authorName: 'Dog.com Expert Team',
    publishedAt: new Date().toISOString(),
    modifiedAt: new Date().toISOString(),
  }) : null

  return (
    <>
      {/* Breed Hero — split layout */}
      <div className="grid lg:grid-cols-2 bg-brand-dark min-h-[440px] overflow-hidden">
        {/* Image */}
        {heroImage && (
          <div className="relative h-64 lg:h-auto order-first lg:order-last">
            <Image
              src={heroImage}
              alt={breedName}
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0 lg:hidden"
              style={{ background: 'linear-gradient(to top, #1A0E08 0%, transparent 60%)' }}
              aria-hidden="true"
            />
          </div>
        )}

        {/* Info */}
        <div className="flex flex-col justify-center px-container sm:px-container-sm py-14 relative">
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(ellipse at 20% 50%, rgba(232,98,42,0.2) 0%, transparent 60%)' }}
            aria-hidden="true"
          />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                {String(careData.subcategory ?? 'Dog Breed').split('-').map((w: string) => w[0].toUpperCase() + w.slice(1)).join(' ')}
              </span>
              <span className="text-2xs bg-amber-500/15 text-amber-300 font-bold px-2.5 py-1 rounded-pill">
                ✓ DVM Reviewed
              </span>
            </div>

            <h1 className="font-display font-black text-white tracking-tighter leading-none mb-3"
              style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}>
              {breedName}
            </h1>

            {species?.scientific_name && (
              <div className="font-display italic text-white/35 text-lg mb-5">
                {species.scientific_name}
              </div>
            )}

            {/* Quick stats */}
            {Object.keys(careData).length > 0 && (
              <div className="grid grid-cols-3 gap-3 mt-6">
                {[
                  { label: 'Size', value: String(careData.size ?? '—') },
                  { label: 'Lifespan', value: String(careData.lifespan ?? '—') },
                  { label: 'Exercise', value: String(careData.exercise_level ?? '—') },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
                    <div className="text-2xs font-bold tracking-eyebrow uppercase text-white/40 mb-1">{stat.label}</div>
                    <div className="text-sm font-bold text-white capitalize">{stat.value}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stat bar */}
      <div className="bg-brand-primary-pale border-b border-brand-border px-container sm:px-container-sm py-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { label: 'Weight', value: String(careData.weight_range ?? '—') },
            { label: 'Lifespan', value: String(careData.lifespan ?? '—') },
            { label: 'Coat Shedding', value: String(careData.shedding ?? '—') },
            { label: 'Trainability', value: careData.trainability ? `${careData.trainability}/5` : '—' },
            { label: 'With Families', value: careData.family_friendly ? `${careData.family_friendly}/5` : '—' },
            { label: 'Exercise', value: String(careData.exercise_level ?? '—') },
          ].map((stat) => (
            <div key={stat.label} className="text-center bg-white border border-brand-border rounded-lg py-3 px-2">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1.5">{stat.label}</div>
              <div className="text-sm font-bold text-brand-dark capitalize">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Breadcrumb */}
      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <Link href="/breeds" className="hover:text-brand-primary no-underline">Breeds</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">{breedName}</span>
      </nav>

      {/* Main content */}
      <div className="px-container sm:px-container-sm py-14">
        <div className="grid lg:grid-cols-[1fr_300px] gap-14">

          {/* Article */}
          <article className="min-w-0">
            {/* Health conditions */}
            {healthConditions.length > 0 && (
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">
                  Health Conditions to Know
                </h2>
                <div className="flex flex-wrap gap-2">
                  {healthConditions.map((condition: string) => (
                    <span
                      key={condition}
                      className="text-xs font-semibold px-3 py-1.5 bg-brand-surface border border-brand-border rounded-pill text-brand-text-mid capitalize"
                    >
                      {condition.split('-').join(' ')}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-brand-text-light mt-3">
                  See the full{' '}
                  <Link href={`/health/${params.slug}-health`} className="text-brand-primary hover:underline">
                    {breedName} health guide →
                  </Link>
                </p>
              </div>
            )}

            {/* Article body from Supabase */}
            {post?.body_html ? (
              <div
                className="carloOS-article"
                dangerouslySetInnerHTML={{ __html: post.body_html }}
              />
            ) : (
              <div className="carloOS-article">
                <p className="text-brand-text-light italic">
                  Full breed guide coming soon. In the meantime, view the{' '}
                  <Link href={`/health/${params.slug}-health`} className="text-brand-primary">
                    {breedName} health guide
                  </Link>.
                </p>
              </div>
            )}

            {/* Links to deeper content */}
            <div className="mt-12 pt-8 border-t border-brand-border grid sm:grid-cols-2 gap-4">
              <Link
                href={`/health/${params.slug}-health`}
                className="block p-5 border border-brand-border rounded-lg no-underline hover:border-brand-primary transition-colors"
              >
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Deep Dive</div>
                <div className="font-display font-bold text-brand-dark">{breedName} Health Guide</div>
                <div className="text-xs text-brand-text-light mt-1">Common conditions, lifespan, preventive care</div>
              </Link>
              <Link
                href="/reviews/best-pet-insurance"
                className="block p-5 border border-brand-border rounded-lg no-underline hover:border-brand-primary transition-colors"
              >
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Protect Your Dog</div>
                <div className="font-display font-bold text-brand-dark">Best Pet Insurance 2025</div>
                <div className="text-xs text-brand-text-light mt-1">Compare Trupanion, Healthy Paws & more</div>
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <TableOfContents items={[
              { label: 'Health Conditions', href: '#health' },
              { label: 'Temperament', href: '#temperament' },
              { label: 'Exercise Needs', href: '#exercise' },
              { label: 'Grooming', href: '#grooming' },
              { label: 'Is It Right for You?', href: '#right-for-you' },
            ]} />
            <RelatedLinks
              title="Health Resources"
              links={[
                { label: `${breedName} Health Guide`, href: `/health/${params.slug}-health` },
                { label: 'Best Pet Insurance 2025', href: '/reviews/best-pet-insurance' },
                { label: 'Dog Symptom Guide', href: '/health/dog-symptoms-guide' },
                { label: 'Find a Specialist', href: '/find-a-vet' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="dog-com"
              title="Free Dog Health Tips"
              subtitle="DVM-written breed spotlights and health alerts every Tuesday."
              source={`breed-${params.slug}`}
            />
          </aside>
        </div>
      </div>
    </>
  )
}
