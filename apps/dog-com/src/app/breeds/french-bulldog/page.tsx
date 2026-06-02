import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildBreadcrumbSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { BreedHealthCard } from '@carloOS/ui'
import { ArticleByline, CalloutBox } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'French Bulldog — Breed Guide, Temperament & Health | Dog.com', description: 'Complete French Bulldog profile. BOAS breathing issues, IVDD spine disease, heat danger, skin folds, financial reality.', path: '/breeds/french-bulldog', type: 'article', ogImage: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1200&q=80&auto=format&fit=crop' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'French Bulldog Breed Guide', description: 'Complete French Bulldog breed profile.', url: 'https://dog.com/breeds/french-bulldog', imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1200&q=80&auto=format&fit=crop', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function FrenchBulldogBreedPage() {
  return (
    <>
      <SchemaScript schema={combineSchemas(schema, buildBreadcrumbSchema({ items: [ { name: 'Home', url: 'https://dog.com/' }, { name: 'Breeds', url: 'https://dog.com/breeds' }, { name: 'French Bulldog', url: 'https://dog.com/breeds/french-bulldog' } ] }))} />
      <div className="grid lg:grid-cols-2 bg-brand-dark min-h-[440px] overflow-hidden">
        <div className="relative h-64 lg:h-auto">
          <Image src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&q=80&auto=format&fit=crop" alt="French Bulldog" fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="flex flex-col justify-center px-container-sm sm:px-container py-12 relative">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(ellipse at 80% 50%, rgba(232,98,42,0.3) 0%, transparent 60%)' }} aria-hidden="true" />
          <div className="relative z-10">
            <div className="flex gap-3 mb-4">
              <span className="text-2xs font-bold tracking-eyebrow uppercase px-3 py-1 rounded-pill bg-brand-primary/15 text-brand-primary">Non-Sporting</span>
              <span className="text-2xs font-bold tracking-eyebrow uppercase px-3 py-1 rounded-pill bg-brand-danger/15 text-brand-danger">⚠ High Medical Complexity</span>
            </div>
            <h1 className="font-display font-black text-white tracking-tighter leading-none mb-3" style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>French Bulldog</h1>
            <p className="text-base font-light text-white/60 leading-relaxed max-w-sm">Charming, adaptable, and low-exercise — but one of the most medically complex breeds in the world. Requires informed ownership, pet insurance from day one, and active health management throughout life.</p>
          </div>
        </div>
      </div>
      <div className="bg-brand-primary-pale border-b border-brand-border px-container-sm sm:px-container py-5">
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
          {[{ label: 'Size', value: 'Small' }, { label: 'Weight', value: '20–28 lbs' }, { label: 'Breathing', value: 'BOAS Risk: Very High', bad: true }, { label: 'IVDD Risk', value: 'Very High', bad: true }, { label: 'Exercise', value: 'Low' }].map(s => (
            <div key={s.label} className="text-center bg-white border border-brand-border rounded-lg py-3 px-2">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1.5">{s.label}</div>
              <div className={`text-xs font-bold ${(s as any).bad ? 'text-brand-danger' : 'text-brand-dark'}`}>{s.value}</div>
            </div>
          ))}
        </div>
      </div>
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/breeds" className="hover:text-brand-primary no-underline">Breeds</Link><span>›</span>
        <span className="text-brand-text-mid font-medium">French Bulldog</span>
      </nav>
      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_290px] gap-14">
          <article className="carloOS-article min-w-0">
            <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

            <CalloutBox variant="warning" title="BOAS — emergency awareness">
              Brachycephalic Airway Syndrome severely limits a Frenchie&apos;s ability to thermoregulate. Heat distress (frantic panting, blue/purple gums, collapse) is an emergency — cool the dog and transport to an ER immediately. Never leave a Frenchie in a parked car, even with windows cracked.
            </CalloutBox>

            <div style={{ background: 'rgba(200,74,42,0.05)', border: '1px solid rgba(200,74,42,0.15)', borderRadius: '10px', padding: '16px 20px', margin: '0 0 28px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C84A2A', marginBottom: '7px' }}>Before You Buy</div>
              <p style={{ fontSize: '14px', color: '#4A2E18', margin: 0, lineHeight: 1.6 }}>French Bulldogs cannot be naturally bred or born without human intervention. Many cannot breathe normally at rest. Average vet costs significantly exceed most other breeds. Pet insurance enrolled at purchase is essential, not optional.</p>
            </div>
            <h2>Health Conditions</h2>
            <BreedHealthCard name="BOAS (Brachycephalic Airway Syndrome)" riskLevel="very-high" description="Stenotic nares, elongated soft palate, narrow trachea. Restricts airflow at multiple levels. Most Frenchies have some degree of BOAS. Surgery (nares widening, soft palate shortening) significantly improves quality of life for Grade 2-3 dogs. Pursue early — secondary changes worsen outcomes." guideHref="/health/french-bulldog-health" guideLabel="Full French Bulldog health guide →" />
            <BreedHealthCard name="IVDD — Spinal Disc Disease" riskLevel="very-high" description="Chondrodystrophic breed — high disc disease risk. Range from pain alone to paralysis. Use ramps instead of jumping, maintain lean weight, avoid impact. Sudden neurological signs are a surgical emergency." />
            <BreedHealthCard name="Heat Intolerance" riskLevel="very-high" description="Compromised airway severely limits panting. Heatstroke can develop at temperatures comfortable for humans. Never in a parked car. Limit outdoor activity in warm weather. Walk only in cool morning/evening hours in summer." />
            <BreedHealthCard name="Skin Fold Infections" riskLevel="very-high" description="Facial folds, tail pocket, and body folds trap moisture and bacteria. Daily cleaning is non-negotiable maintenance. Veterinary treatment when infected. Severe cases may require surgical fold correction." />
            <h2>Financial Reality</h2>
            <p>Realistic lifetime medical costs for a Frenchie with typical challenges: BOAS surgery ($1,500–5,000), IVDD treatment ($5,000–8,000+ for surgery), ongoing skin fold management, regular ear and eye care. Enroll pet insurance before the first vet visit. Compare policies specifically for BOAS and spinal coverage.</p>
          </article>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <RelatedLinks title="French Bulldog Health Deep-Dive" links={[{ label: 'French Bulldog Health Issues & Screenings', href: '/breeds/french-bulldog/health' }]} />
            <RelatedLinks title="Health Resources" links={[{ label: 'French Bulldog Health Guide', href: '/health/french-bulldog-health' }, { label: 'Best Pet Insurance 2025', href: '/reviews/best-pet-insurance' }, { label: 'Find a Specialist', href: '/find-a-vet' }]} />
            <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance every Tuesday." source="breed-french-bulldog" />
          </aside>
        </div>
      </div>
    </>
  )
}
