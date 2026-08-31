import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, RelatedLinks, CrossPortfolioCard, StockImage, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { BreedHealthCard } from '@carloOS/ui'
import { ArticleByline, CalloutBox } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'German Shepherd — Breed Guide, Temperament & Health | Dog.com', description: 'Complete German Shepherd breed profile. DM, hip dysplasia, GDV, EPI. One of the world\'s most capable working breeds', path: '/breeds/german-shepherd', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'German Shepherd Breed Guide', description: 'Complete German Shepherd breed profile.', url: 'https://dog.com/breeds/german-shepherd', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' })

const FAQS = [
  { question: 'What health problems do German Shepherds have?', answer: 'The four documented breed priorities are degenerative myelopathy (DM — GSDs are the most commonly affected breed), hip dysplasia, gastric dilatation-volvulus (GDV/bloat), and exocrine pancreatic insufficiency (EPI — again the most commonly affected breed). DNA testing identifies DM-at-risk dogs, OFA evaluation screens hips and elbows, and a serum TLI test diagnoses EPI. Build a screening plan with your veterinarian.' },
  { question: 'How much exercise does a German Shepherd need?', answer: '1-2+ hours of vigorous exercise daily, paired with mental stimulation — GSDs excel at obedience, agility, Schutzhund, herding, and tracking. Without adequate physical and mental outlets, German Shepherds develop anxiety, destructive behavior, and excessive vocalization. Training and socialization should begin from day one.' },
  { question: 'What is degenerative myelopathy in German Shepherds?', answer: 'DM is a progressive spinal cord disease causing gradual paralysis — often described as the canine equivalent of ALS. There is no cure; physical rehabilitation extends quality of life. A DNA test identifies at-risk dogs, and owners should watch for subtle gait changes from age 7 onward and raise them promptly with your veterinarian.' },
  { question: 'Are German Shepherds prone to bloat?', answer: 'Yes — GDV risk is rated very high in the breed. The stomach fills with gas and twists, which is fatal within hours without emergency surgery. Signs are a distended abdomen with unproductive retching, restlessness, and drooling — go to an emergency vet immediately. Prophylactic gastropexy at the time of spay/neuter is worth discussing with your veterinarian.' },
  { question: 'What is EPI in German Shepherds?', answer: 'Exocrine pancreatic insufficiency — the pancreas fails to produce digestive enzymes, and German Shepherds are the most commonly affected breed. The signature presentation is dramatic weight loss despite a ravenous appetite, with large-volume diarrhea. It is diagnosed with a serum TLI blood test and is manageable with enzyme supplementation prescribed by your veterinarian.' },
]

export default function GermanShepherdBreedPage() {
  return (
    <>
      <SchemaScript schema={combineSchemas(schema, buildBreadcrumbSchema({ items: [ { name: 'Home', url: 'https://dog.com/' }, { name: 'Breeds', url: 'https://dog.com/breeds' }, { name: 'German Shepherd', url: 'https://dog.com/breeds/german-shepherd' } ] }), buildFAQSchema({ questions: FAQS }))} />
      <div className="grid lg:grid-cols-2 bg-brand-dark min-h-[440px] overflow-hidden">
        <div className="[&>figure]:my-0 [&>figure]:rounded-none overflow-hidden">
          <StockImage manifestKey="dog-com:breed-german-shepherd" alt="German Shepherd" aspect="4:3" priority />
        </div>
        <div className="flex flex-col justify-center px-container-sm sm:px-container py-12 relative">
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
      <div className="bg-brand-primary-pale border-b border-brand-border px-container-sm sm:px-container py-5">
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
          {[{ label: 'Size', value: 'Large' }, { label: 'Weight', value: '50–90 lbs' }, { label: 'DM Risk', value: 'Very High', bad: true }, { label: 'Bloat Risk', value: 'High', warn: true }, { label: 'Exercise', value: 'Very High' }].map(s => (
            <div key={s.label} className="text-center bg-white border border-brand-border rounded-lg py-3 px-2">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1.5">{s.label}</div>
              <div className={`text-xs font-bold ${(s as any).bad ? 'text-brand-danger' : (s as any).warn ? 'text-brand-warning' : 'text-brand-dark'}`}>{s.value}</div>
            </div>
          ))}
        </div>
      </div>
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/breeds" className="hover:text-brand-primary no-underline">Breeds</Link><span>›</span>
        <span className="text-brand-text-mid font-medium">German Shepherd</span>
      </nav>
      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_290px] gap-14">
          <article className="carloOS-article min-w-0">
            <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

            <CalloutBox variant="evidence" title="Evidence-anchored">
              Hip dysplasia screening in German Shepherds uses the <strong>Orthopedic Foundation for Animals (OFA)</strong> hip evaluation. Working-line dogs generally have better conformation than extreme show lines — require OFA hip and elbow clearances on both sire and dam regardless of line.
            </CalloutBox>

            <h2>Health Conditions</h2>
            <BreedHealthCard name="Degenerative Myelopathy (DM)" riskLevel="very-high" description="Progressive spinal cord disease causing gradual paralysis — the canine equivalent of ALS. No cure. Physical rehabilitation extends quality of life. DNA test identifies at-risk dogs. Most commonly affected breed. Watch for subtle gait changes from age 7+." guideHref="/health/german-shepherd-health" guideLabel="Full GSD health guide →" />
            <BreedHealthCard name="Hip Dysplasia" riskLevel="high" description="Developmental joint disorder with strong genetic component. Buy from OFA-certified breeders. Working-line GSDs generally have better conformation than extreme show lines. Weight control most impactful non-surgical intervention." />
            <BreedHealthCard name="GDV / Bloat" riskLevel="very-high" description="Stomach fills with gas and twists — fatal within hours without surgery. Signs: distended abdomen with retching, restlessness, drooling. Emergency — go immediately. Consider prophylactic gastropexy at time of spay/neuter." />
            <BreedHealthCard name="Exocrine Pancreatic Insufficiency (EPI)" riskLevel="high" description="Pancreas fails to produce digestive enzymes. Most commonly affected breed. Signs: dramatic weight loss despite ravenous appetite, large-volume diarrhea, coprophagia. Diagnosed with serum TLI test. Manageable with enzyme supplementation." />
            <h2>Exercise &amp; Training</h2>
            <p>GSDs require 1–2+ hours of vigorous exercise daily with mental stimulation. Excellent at obedience, agility, Schutzhund, herding, and tracking. Without adequate physical and mental outlets, GSDs develop anxiety, destructive behavior, and excessive vocalization. Begin training and socialization from day one.</p>

            <h2>Frequently Asked Questions</h2>
            <FAQAccordion items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
          </article>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <RelatedLinks title="Insurance for This Breed" links={[{ label: 'Is pet insurance worth it for a German Shepherd?', href: '/breeds/german-shepherd/insurance' }, { label: 'Pet insurance by breed', href: '/breeds/insurance' }]} />
            <RelatedLinks title="All Breeds" links={[{ label: 'All Dog Breeds', href: '/breeds' }, { label: 'Rottweiler', href: '/breeds/rottweiler' }, { label: 'Doberman Pinscher', href: '/breeds/doberman-pinscher' }]} />
            <RelatedLinks title="German Shepherd Health Deep-Dive" links={[{ label: 'German Shepherd Health Issues & Screenings', href: '/breeds/german-shepherd/health' }]} />
            <RelatedLinks title="Health Resources" links={[{ label: 'German Shepherd Health Guide', href: '/health/german-shepherd-health' }, { label: 'Best Pet Insurance', href: 'https://vets.co/reviews/best-pet-insurance' }, { label: 'Find a Specialist', href: '/find-a-vet' }]} />
            <RelatedLinks title="Breed Comparisons" links={[
              { label: 'German Shepherd vs Belgian Malinois', href: '/compare/german-shepherd-vs-belgian-malinois' },
              { label: 'German Shepherd vs Rottweiler', href: '/compare/german-shepherd-vs-rottweiler' },
              { label: 'Labrador Retriever vs German Shepherd', href: '/compare/labrador-retriever-vs-german-shepherd' },
            ]} />
            <CrossPortfolioCard currentSite="dog-com" contentType="breed" variant="sidebar" />
            <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance every Tuesday." source="breed-german-shepherd" />
          </aside>
        </div>
      </div>
    </>
  )
}
