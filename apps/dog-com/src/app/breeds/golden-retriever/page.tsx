/**
 * Golden Retriever breed profile — static page at /breeds/golden-retriever
 * Full content baked in. Uses BreedHealthCard for health conditions.
 */

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'
import { BreedHealthCard } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Golden Retriever — Breed Guide, Temperament & Health | Dog.com',
  description: 'Complete Golden Retriever breed profile. Temperament scores, size, lifespan, health conditions, exercise needs, grooming, training.',
  path: '/breeds/golden-retriever',
  type: 'article',
  ogImage: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=1200&q=80&auto=format&fit=crop',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Golden Retriever Breed Guide',
  description: 'Complete Golden Retriever breed profile.',
  url: 'https://dog.com/breeds/golden-retriever',
  imageUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=1200&q=80&auto=format&fit=crop',
  authorName: 'Dog.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const SCORES = [
  { name: 'With Children', score: 5, label: 'Exceptional' },
  { name: 'With Other Dogs', score: 4.5, label: 'Very Good' },
  { name: 'Trainability', score: 5, label: 'Exceptional' },
  { name: 'With Strangers', score: 5, label: 'Very Friendly' },
  { name: 'Energy Level', score: 4, label: 'High' },
  { name: 'As Guard Dog', score: 1, label: 'Not suited' },
]

export default function GoldenRetrieverBreedPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* Hero */}
      <div className="grid lg:grid-cols-2 bg-brand-dark min-h-[440px] overflow-hidden">
        <div className="relative h-64 lg:h-auto order-first">
          <Image src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&q=80&auto=format&fit=crop"
            alt="Golden Retriever" fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="flex flex-col justify-center px-container sm:px-container-sm py-12 relative">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(ellipse at 80% 50%, rgba(232,98,42,0.3) 0%, transparent 60%)' }}
            aria-hidden="true" />
          <div className="relative z-10">
            <div className="flex gap-3 mb-4">
              <span className="text-2xs font-bold tracking-eyebrow uppercase px-3 py-1 rounded-pill bg-brand-primary/15 text-brand-primary">Sporting Group</span>
              <span className="text-2xs font-bold tracking-eyebrow uppercase px-3 py-1 rounded-pill" style={{ background: 'rgba(200,149,42,0.15)', color: '#E8C860' }}> </span>
            </div>
            <h1 className="font-display font-black text-white tracking-tighter leading-none mb-2" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>Golden Retriever</h1>
            <div className="font-display italic text-white/35 text-lg mb-4">Canis lupus familiaris</div>
            <p className="text-base font-light text-white/60 leading-relaxed max-w-lg">
              The Golden Retriever is a 55–75 lb sporting breed bred for retrieving game,
              known for an exceptional temperament with children, high trainability, and a
              10–12 year lifespan. They are America&apos;s most popular family dog. The
              defining health concern is cancer: roughly 60% of Goldens die of cancer
              (Morris Animal Foundation Golden Retriever Lifetime Study), with
              hemangiosarcoma and lymphoma most common. Hip dysplasia and aortic stenosis
              also warrant OFA-screened breeders.
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-brand-primary-pale border-b border-brand-border px-container sm:px-container-sm py-5">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {[
            { label: 'Size', value: 'Large' },
            { label: 'Weight', value: '55–75 lbs' },
            { label: 'Lifespan', value: '10–12 years', warn: true },
            { label: 'Cancer Risk', value: 'Very High (60%+)', bad: true },
            { label: 'Exercise', value: 'High' },
            { label: 'With Kids', value: 'Excellent', good: true },
          ].map(s => (
            <div key={s.label} className="text-center bg-white border border-brand-border rounded-lg py-3 px-2">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1.5">{s.label}</div>
              <div className={`text-xs font-bold ${s.bad ? 'text-brand-danger' : s.warn ? 'text-brand-warning' : s.good ? 'text-brand-success' : 'text-brand-dark'}`}>{s.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Breadcrumb */}
      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <Link href="/breeds" className="hover:text-brand-primary no-underline">Breeds</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Golden Retriever</span>
      </nav>

      {/* Content */}
      <div className="px-container sm:px-container-sm py-14">
        <div className="grid lg:grid-cols-[1fr_290px] gap-14">
          <article className="carloOS-article min-w-0">
            <h2>Overview</h2>
            <p>The Golden Retriever has ranked among America&apos;s most popular dog breeds for decades — a position earned through an unmatched combination of temperament, trainability, and adaptability. Goldens are gentle with children, tolerant with strangers, responsive to training, and genuinely enthusiastic about life in a way that is infectious. They are also a breed that requires informed ownership — particularly around health monitoring as they age.</p>

            <h2>Temperament Scores</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-5">
              {SCORES.map(s => (
                <div key={s.name} className="bg-brand-surface rounded-lg p-4">
                  <div className="text-xs font-semibold text-brand-dark mb-2">{s.name}</div>
                  <div className="h-1.5 bg-brand-border rounded-full overflow-hidden mb-1.5">
                    <div className="h-full bg-brand-primary rounded-full" style={{ width: `${(s.score / 5) * 100}%` }} />
                  </div>
                  <div className="text-2xs text-brand-text-light font-semibold">{s.score}/5 — {s.label}</div>
                </div>
              ))}
            </div>

            <h2>Exercise &amp; Activity</h2>
            <p>Adult Goldens require 1–2 hours of moderate-to-vigorous exercise daily. They are working dogs by heritage — a Golden without adequate physical activity redirects energy into destructive behavior and excessive barking. Favorite activities: fetch, swimming, hiking, trail running. Excellent jogging companions from 18 months onward (avoid high-impact running before growth plates close).</p>
            <p>Mental exercise matters as much as physical. Goldens are intelligent and need cognitive engagement — training sessions, puzzle toys, scent work, agility. This prevents boredom-related behavior problems.</p>

            <h2>Grooming</h2>
            <p>The Golden&apos;s dense double coat sheds substantially year-round with heavier shedding in spring and fall. Weekly brushing is the minimum; twice weekly significantly reduces household shedding. Key maintenance:</p>
            <ul>
              <li><strong>Brushing</strong> — 2–3x weekly minimum; daily during shedding seasons</li>
              <li><strong>Bathing</strong> — every 4–6 weeks; Golden coats trap odor</li>
              <li><strong>Ears</strong> — check and clean weekly; floppy ears trap moisture and predispose to infections</li>
              <li><strong>Nails</strong> — trim every 3–4 weeks</li>
              <li><strong>Teeth</strong> — brush daily or minimum 3x weekly</li>
            </ul>

            <h2>Health Conditions</h2>
            <BreedHealthCard
              name="Cancer (Multiple Types)"
              riskLevel="very-high"
              description="Hemangiosarcoma, lymphoma, and osteosarcoma are the most common cancers in Goldens. Annual abdominal ultrasound from age 6–7 is the best current screening for hemangiosarcoma. Lymphoma often presents as swollen lymph nodes — know where to feel for them. Early detection dramatically improves outcomes."
              guideHref="/health/golden-retriever-health"
              guideLabel="Full cancer guide →"
            />
            <BreedHealthCard
              name="Hip & Elbow Dysplasia"
              riskLevel="high"
              description="Developmental joint disorders with strong genetic component. Buy from OFA-certified breeders only. Signs: lameness, difficulty rising, reluctance to exercise. Management: weight control, joint supplements, anti-inflammatories, surgery for severe cases."
              guideHref="/health/golden-retriever-health"
              guideLabel="Full health guide →"
            />
            <BreedHealthCard
              name="Subvalvular Aortic Stenosis (SAS)"
              riskLevel="high"
              description="Congenital heart defect causing blood flow obstruction. Ranges from mild (no symptoms) to severe (fainting, sudden death). Annual cardiac auscultation at wellness exam. Suspected murmurs warrant cardiologist echocardiogram."
            />
            <BreedHealthCard
              name="Skin Allergies (Atopic Dermatitis)"
              riskLevel="very-high"
              description="Chronic skin disease from environmental allergies — paw licking, recurrent ear infections, skin redness. Managed (not cured) with Apoquel or Cytopoint, allergy testing, trigger avoidance. Very common in the breed."
            />

            <h2>Is a Golden Retriever Right for You?</h2>
            <ul>
              <li><strong>Ideal for:</strong> Active families, first-time dog owners, homes with children, people who want a highly social companion</li>
              <li><strong>Requires:</strong> 1–2 hours daily exercise, regular grooming, early training and socialization, commitment to health monitoring as they age</li>
              <li><strong>Not ideal for:</strong> Owners away 10+ hours daily, those who cannot commit to exercise</li>
              <li><strong>Financial reality:</strong> Between food, routine vet care, and the real possibility of cancer treatment, Golden ownership has significant long-term financial implications. Enroll pet insurance before any conditions develop.</li>
            </ul>
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <RelatedLinks title="Health Resources" links={[
              { label: 'Golden Retriever Health Guide', href: '/health/golden-retriever-health' },
              { label: 'Best Pet Insurance 2025', href: '/reviews/best-pet-insurance' },
              { label: 'Find a Specialist', href: '/find-a-vet' },
            ]} />
            <RelatedLinks title="Related Breeds" links={[
              { label: 'Labrador Retriever', href: '/breeds/labrador-retriever' },
              { label: 'German Shepherd', href: '/breeds/german-shepherd' },
            ]} />
            <EmailCapture variant="sidebar" siteId="dog-com"
              title="Free Dog Health Tips"
              subtitle="Practical guidance every Tuesday."
              source="breed-golden-retriever" />
          </aside>
        </div>
      </div>
    </>
  )
}
