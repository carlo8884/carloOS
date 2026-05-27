/**
 * Dog.com Breeds Index — /breeds
 * Server component. Lists all breeds from Supabase species table.
 */

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'
import { createServerClient } from '@carloOS/db'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Breed Guide — 200+ Breeds Profiled',
  description: 'Complete breed profiles for 200+ dog breeds.',
  path: '/breeds',
})

const BREED_IMAGES: Record<string, string> = {
  'golden-retriever': 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&q=80&auto=format&fit=crop',
  'labrador-retriever': 'https://images.unsplash.com/photo-1579213838058-2aeeda8d6e2d?w=400&q=80&auto=format&fit=crop',
  'french-bulldog': 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&q=80&auto=format&fit=crop',
  'german-shepherd': 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400&q=80&auto=format&fit=crop',
  'beagle': 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=400&q=80&auto=format&fit=crop',
  'poodle': 'https://images.unsplash.com/photo-1616149955247-48c60b1d4413?w=400&q=80&auto=format&fit=crop',
}

// Size filters for UI
const SIZE_FILTERS = ['All', 'Small', 'Medium', 'Large', 'Giant']
const GROUP_FILTERS = ['All Groups', 'Sporting', 'Hound', 'Working', 'Terrier', 'Toy', 'Non-Sporting', 'Herding']

export default async function BreedsPage() {
  let breeds: Array<{
    slug: string
    common_name: string
    care_data: Record<string, unknown>
    health_conditions: string[]
  }> = []

  try {
    const supabase = createServerClient()
    const { data } = await supabase
      .from('species')
      .select('slug, common_name, care_data, health_conditions')
      .eq('site_id', 'dog-com')
      .eq('category', 'dog-breed')
      .eq('active', true)
      .order('common_name')
    breeds = (data ?? []) as typeof breeds
  } catch {
    // DB not connected — show static breeds
    breeds = [
      { slug: 'golden-retriever', common_name: 'Golden Retriever', care_data: { size: 'large', exercise_level: 'high' }, health_conditions: ['cancer', 'hip-dysplasia'] },
      { slug: 'labrador-retriever', common_name: 'Labrador Retriever', care_data: { size: 'large', exercise_level: 'high' }, health_conditions: ['obesity', 'hip-dysplasia'] },
      { slug: 'french-bulldog', common_name: 'French Bulldog', care_data: { size: 'small', exercise_level: 'low' }, health_conditions: ['boas', 'ivdd'] },
      { slug: 'german-shepherd', common_name: 'German Shepherd', care_data: { size: 'large', exercise_level: 'very-high' }, health_conditions: ['degenerative-myelopathy', 'hip-dysplasia'] },
      { slug: 'beagle', common_name: 'Beagle', care_data: { size: 'medium', exercise_level: 'moderate' }, health_conditions: ['obesity', 'ear-infections'] },
      { slug: 'poodle', common_name: 'Poodle', care_data: { size: 'varies', exercise_level: 'high' }, health_conditions: ['hip-dysplasia', 'epilepsy'] },
    ]
  }

  return (
    <>
      {/* Hero */}
      <div className="bg-brand-dark px-container sm:px-container-sm py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Breed Encyclopedia</span>
        </div>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-4"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
          Dog Breed Guide
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          research-based profiles for 200+ breeds — temperament, health conditions, exercise needs, and everything you need before choosing a dog.
        </p>
      </div>

      {/* Breadcrumb */}
      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Breed Guide</span>
      </nav>

      {/* Content */}
      <div className="px-container sm:px-container-sm py-12">
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm text-brand-text-light">
            {breeds.length} breeds profiled
          </p>
        </div>

        {/* Breed grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {breeds.map((breed) => {
            const careData = breed.care_data
            const image = BREED_IMAGES[breed.slug]

            return (
              <Link
                key={breed.slug}
                href={`/breeds/${breed.slug}`}
                className="block bg-brand-white border border-brand-border rounded-lg overflow-hidden no-underline hover:border-brand-primary hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200"
              >
                <div className="relative h-44 bg-brand-surface overflow-hidden">
                  {image ? (
                    <Image
                      src={image}
                      alt={breed.common_name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-5xl">🐕</div>
                  )}
                </div>
                <div className="p-4">
                  <div className="font-display font-bold text-brand-dark text-base mb-1 leading-tight">
                    {breed.common_name}
                  </div>
                  <div className="text-xs text-brand-text-light capitalize mb-2.5">
                    {String(careData.size ?? '')} · {String(careData.exercise_level ?? '')} exercise
                  </div>
                  {breed.health_conditions?.length > 0 && (
                    <div className="text-2xs text-brand-danger font-medium">
                      ⚠ {breed.health_conditions.length} known conditions
                    </div>
                  )}
                </div>
              </Link>
            )
          })}

          {/* More breeds coming */}
          <div className="border-2 border-dashed border-brand-border rounded-lg flex items-center justify-center text-center p-6 text-brand-text-light">
            <div>
              <div className="text-3xl mb-2">🐾</div>
              <div className="text-sm font-semibold text-brand-text-mid mb-1">200+ breeds</div>
              <div className="text-xs">More profiles added weekly</div>
            </div>
          </div>
        </div>
      </div>
      {/* agent1-browse-all-start */}
      <section className="border-t border-brand-border bg-brand-surface px-container sm:px-container-sm py-10">
        <h2 className="font-display font-bold text-brand-dark text-lg mb-4">All Dog Breeds</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2">
        <Link key="akita" href="/breeds/akita" className="text-sm text-brand-primary no-underline hover:underline">Akita</Link>
        <Link key="australian-shepherd" href="/breeds/australian-shepherd" className="text-sm text-brand-primary no-underline hover:underline">Australian Shepherd</Link>
        <Link key="beagle" href="/breeds/beagle" className="text-sm text-brand-primary no-underline hover:underline">Beagle</Link>
        <Link key="bernese-mountain-dog" href="/breeds/bernese-mountain-dog" className="text-sm text-brand-primary no-underline hover:underline">Bernese Mountain Dog</Link>
        <Link key="border-collie" href="/breeds/border-collie" className="text-sm text-brand-primary no-underline hover:underline">Border Collie</Link>
        <Link key="boxer" href="/breeds/boxer" className="text-sm text-brand-primary no-underline hover:underline">Boxer</Link>
        <Link key="bulldog" href="/breeds/bulldog" className="text-sm text-brand-primary no-underline hover:underline">Bulldog</Link>
        <Link key="bullmastiff" href="/breeds/bullmastiff" className="text-sm text-brand-primary no-underline hover:underline">Bullmastiff</Link>
        <Link key="cavalier-king-charles" href="/breeds/cavalier-king-charles" className="text-sm text-brand-primary no-underline hover:underline">Cavalier King Charles</Link>
        <Link key="cocker-spaniel" href="/breeds/cocker-spaniel" className="text-sm text-brand-primary no-underline hover:underline">Cocker Spaniel</Link>
        <Link key="dachshund" href="/breeds/dachshund" className="text-sm text-brand-primary no-underline hover:underline">Dachshund</Link>
        <Link key="doberman-pinscher" href="/breeds/doberman-pinscher" className="text-sm text-brand-primary no-underline hover:underline">Doberman Pinscher</Link>
        <Link key="french-bulldog" href="/breeds/french-bulldog" className="text-sm text-brand-primary no-underline hover:underline">French Bulldog</Link>
        <Link key="german-shepherd" href="/breeds/german-shepherd" className="text-sm text-brand-primary no-underline hover:underline">German Shepherd</Link>
        <Link key="golden-doodle" href="/breeds/golden-doodle" className="text-sm text-brand-primary no-underline hover:underline">Golden Doodle</Link>
        <Link key="golden-retriever" href="/breeds/golden-retriever" className="text-sm text-brand-primary no-underline hover:underline">Golden Retriever</Link>
        <Link key="great-dane" href="/breeds/great-dane" className="text-sm text-brand-primary no-underline hover:underline">Great Dane</Link>
        <Link key="great-pyrenees" href="/breeds/great-pyrenees" className="text-sm text-brand-primary no-underline hover:underline">Great Pyrenees</Link>
        <Link key="irish-setter" href="/breeds/irish-setter" className="text-sm text-brand-primary no-underline hover:underline">Irish Setter</Link>
        <Link key="irish-wolfhound" href="/breeds/irish-wolfhound" className="text-sm text-brand-primary no-underline hover:underline">Irish Wolfhound</Link>
        <Link key="labrador-retriever" href="/breeds/labrador-retriever" className="text-sm text-brand-primary no-underline hover:underline">Labrador Retriever</Link>
        <Link key="poodle" href="/breeds/poodle" className="text-sm text-brand-primary no-underline hover:underline">Poodle</Link>
        <Link key="rottweiler" href="/breeds/rottweiler" className="text-sm text-brand-primary no-underline hover:underline">Rottweiler</Link>
        <Link key="saint-bernard" href="/breeds/saint-bernard" className="text-sm text-brand-primary no-underline hover:underline">Saint Bernard</Link>
        <Link key="shiba-inu" href="/breeds/shiba-inu" className="text-sm text-brand-primary no-underline hover:underline">Shiba Inu</Link>
        <Link key="shih-tzu" href="/breeds/shih-tzu" className="text-sm text-brand-primary no-underline hover:underline">Shih Tzu</Link>
        <Link key="siberian-husky" href="/breeds/siberian-husky" className="text-sm text-brand-primary no-underline hover:underline">Siberian Husky</Link>
        <Link key="vizsla" href="/breeds/vizsla" className="text-sm text-brand-primary no-underline hover:underline">Vizsla</Link>
        <Link key="weimaraner" href="/breeds/weimaraner" className="text-sm text-brand-primary no-underline hover:underline">Weimaraner</Link>
        <Link key="yorkshire-terrier" href="/breeds/yorkshire-terrier" className="text-sm text-brand-primary no-underline hover:underline">Yorkshire Terrier</Link>
        </div>
      </section>
      {/* agent1-browse-all-end */}
</>
  )
}
