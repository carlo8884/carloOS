import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'
import { BreedHealthCard } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'German Shepherd — Breed Guide, Temperament & Health | Dog.com', description: 'Complete German Shepherd breed profile. DM, hip dysplasia, GDV, EPI.', path: '/breeds/german-shepherd', type: 'article', ogImage: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=1200&q=80&auto=format&fit=crop' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'German Shepherd Breed Guide', description: 'Complete German Shepherd breed profile.', url: 'https://dog.com/breeds/german-shepherd', imageUrl: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=1200&q=80&auto=format&fit=crop', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function GermanShepherdBreedPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <div className="grid lg:grid-cols-2 bg-brand-dark min-h-[440px] overflow-hidden">
        <div className="relative h-64 lg:h-auto">
          <Image src="https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=800&q=80&auto=format&fit=crop" alt="German Shepherd" fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="flex flex-col justify-center px-container sm:px-container-sm py-12 relative">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(ellipse at 80% 50%, rgba(232,98,42,0.3) 0%, transparent 60%)' }} aria-hidden="true" />
          <div className="relative z-10">
            <div className="flex gap-3 mb-4">
              <span className="text-2xs font-bold tracking-eyebrow uppercase px-3 py-1 rounded-pill bg-brand-primary/15 text-brand-primary">Herding Group</span>
              <span className="text-2xs font-bold tracking-eyebrow uppercase px-3 py-1 rounded-pill" style={{ background: 'rgba(200,149,42,0.15)', color: '#E8C860' }}> </span>
            </div>
            <h1 className="font-display font-black text-white tracking-tighter leading-none mb-3" style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>German Shepherd</h1>
            <p className="text-base font-light text-white/60 leading-relaxed max-w-sm">One of the world&apos;s most capable working breeds — police, military, search and rescue, guide dogs. Requires informed owners who understand the breed&apos;s significant degenerative disease predispositions, particularly DM and GDV.</p>
          </div>
        </div>
      </div>
      <div className="bg-brand-primary-pale border-b border-brand-border px-container sm:px-container-sm py-5">
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
          {[{ label: 'Size', value: 'Large' }, { label: 'Weight', value: '50–90 lbs' }, { label: 'DM Risk', value: 'Very High', bad: true }, { label: 'Bloat Risk', value: 'High', warn: true }, { label: 'Exercise', value: 'Very High' }].map(s => (
            <div key={s.label} className="text-center bg-white border border-brand-border rounded-lg py-3 px-2">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1.5">{s.label}</div>
              <div className={`text-xs font-bold ${(s as any).bad ? 'text-brand-danger' : (s as any).warn ? 'text-brand-warning' : 'text-brand-dark'}`}>{s.value}</div>
            </div>
          ))}
        </div>
      </div>
      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/breeds" className="hover:text-brand-primary no-underline">Breeds</Link><span>›</span>
        <span className="text-brand-text-mid font-medium">German Shepherd</span>
      </nav>
      <div className="px-container sm:px-container-sm py-14">
        <div className="grid lg:grid-cols-[1fr_290px] gap-14">
          <article className="carloOS-article min-w-0">
            <h2>Health Conditions</h2>
            <BreedHealthCard name="Degenerative Myelopathy (DM)" riskLevel="very-high" description="Progressive spinal cord disease causing gradual paralysis — the canine equivalent of ALS. No cure. Physical rehabilitation extends quality of life. DNA test identifies at-risk dogs. Most commonly affected breed. Watch for subtle gait changes from age 7+." guideHref="/health/german-shepherd-health" guideLabel="Full GSD health guide →" />
            <BreedHealthCard name="Hip Dysplasia" riskLevel="high" description="Developmental joint disorder with strong genetic component. Buy from OFA-certified breeders. Working-line GSDs generally have better conformation than extreme show lines. Weight control most impactful non-surgical intervention." />
            <BreedHealthCard name="GDV / Bloat" riskLevel="very-high" description="Stomach fills with gas and twists — fatal within hours without surgery. Signs: distended abdomen with retching, restlessness, drooling. Emergency — go immediately. Consider prophylactic gastropexy at time of spay/neuter." />
            <BreedHealthCard name="Exocrine Pancreatic Insufficiency (EPI)" riskLevel="high" description="Pancreas fails to produce digestive enzymes. Most commonly affected breed. Signs: dramatic weight loss despite ravenous appetite, large-volume diarrhea, coprophagia. Diagnosed with serum TLI test. Manageable with enzyme supplementation." />
            <h2>Exercise &amp; Training</h2>
            <p>GSDs require 1–2+ hours of vigorous exercise daily with mental stimulation. Excellent at obedience, agility, Schutzhund, herding, and tracking. Without adequate physical and mental outlets, GSDs develop anxiety, destructive behavior, and excessive vocalization. Begin training and socialization from day one.</p>
          </article>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <RelatedLinks title="Health Resources" links={[{ label: 'German Shepherd Health Guide', href: '/health/german-shepherd-health' }, { label: 'Best Pet Insurance 2025', href: '/reviews/best-pet-insurance' }, { label: 'Find a Specialist', href: '/find-a-vet' }]} />
            <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance every Tuesday." source="breed-german-shepherd" />
          </aside>
        </div>
      </div>
    </>
  )
}
