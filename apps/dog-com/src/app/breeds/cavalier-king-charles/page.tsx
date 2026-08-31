import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, BreedHealthCard, EmailCapture, RelatedLinks, CrossPortfolioCard , ArticleByline } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Cavalier King Charles Spaniel Guide — MVD | Dog.com', description: 'CKCSs develop mitral valve disease — 100% will have a murmur by age 10. MVD Protocol cardiac screening, syringomyelia.', path: '/breeds/cavalier-king-charles', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Cavalier King Charles Spaniel Breed Guide', description: 'MVD cardiac disease, syringomyelia, and health screening for Cavalier King Charles Spaniels.', url: 'https://dog.com/breeds/cavalier-king-charles', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' })

const FAQS = [
  { question: 'What health problems do Cavalier King Charles Spaniels have?', answer: 'The defining concerns are mitral valve disease (MVD) — roughly 50% of Cavaliers have a murmur by age 5 and close to 100% by age 10 — Chiari-like malformation/syringomyelia (CM/SM, present on MRI in up to 70% of the breed), and episodic falling syndrome, a breed-specific genetic condition with an available DNA test. Annual cardiac auscultation from age 1 and prompt evaluation of any new signs with your veterinarian are the foundation of Cavalier care.' },
  { question: 'What is mitral valve disease in Cavaliers?', answer: 'MVD is degeneration of the mitral valve that lets blood leak backward with each heartbeat; the heart enlarges to compensate and eventually congestive heart failure can develop. In health-tested lines following the MVD Breeding Protocol, onset is pushed to 6-7+ years versus as early as 1-2 years in poorly bred dogs. Once cardiac enlargement is confirmed, pimobendan has been shown to delay heart failure onset — management decisions belong with your veterinarian and a cardiologist.' },
  { question: 'Are Cavalier King Charles Spaniels good family dogs?', answer: 'Temperamentally, Cavaliers are among the most affectionate and gentle family dogs in existence — gentle, calm, and people-oriented at 12-18 lbs. The breed\'s challenge is not behavior but health: predictable, expensive conditions that reward owners who buy from health-tested breeders and commit to lifelong screening.' },
  { question: 'Why does my Cavalier scratch at its neck without touching it?', answer: 'Phantom scratching — scratching motions toward the shoulder or neck without making contact, especially during excitement — is a characteristic (though not universal) sign of Chiari-like malformation/syringomyelia. An MRI is required to diagnose and stage CM/SM. If you see this sign, discuss neurological evaluation with your veterinarian.' },
  { question: 'How long do Cavalier King Charles Spaniels live?', answer: 'Cavaliers typically live 9-14 years. Where an individual falls in that range is heavily influenced by mitral valve disease progression, which is why buying from breeders who follow the MVD Breeding Protocol and keeping up annual cardiology-grade auscultation matters more in this breed than most.' },
]
const combinedSchema = combineSchemas(schema, buildFAQSchema({ questions: FAQS }))

export default function CavalierPage() {
  return (
    <>
    <SchemaScript schema={combinedSchema} />
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'Cavalier King Charles Spaniel', subtitle: 'One of the most affectionate and gentle family dogs in existence — and one of the most health-compromised breeds due to decades of selective breeding without sufficient health screening. Understanding the health landscape before acquiring a Cavalier changes the experience of owning one.', category: 'Breed Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '10 min',}}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breeds', href: '/breeds' }, { name: 'Cavalier King Charles', href: '/breeds/cavalier-king-charles' }]}
      relatedLinks={[{ title: 'Dog Breeds Hub', href: '/breeds', category: 'Hub' }, { title: 'Cocker Spaniel Guide', href: '/breeds/cocker-spaniel', category: 'Breed Guide' }, { title: 'Shih Tzu Guide', href: '/breeds/shih-tzu', category: 'Breed Guide' }, { title: 'Best Pet Insurance', href: 'https://vets.co/reviews/best-pet-insurance', category: 'Reviews' }]}
      contentType="breed"
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">At a Glance</div>
          {[['Size', '12–18 lbs'], ['Lifespan', '9–14 years'], ['MVD prevalence', '~50% have murmur by age 5'], ['MVD prevalence 10+', 'Close to 100%'], ['Syringomyelia', 'Up to 70% have CM/SM'], ['Temperament', 'Gentle, affectionate, calm']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-2 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Insurance for This Breed" links={[{ label: 'Is pet insurance worth it for a Cavalier King Charles Spaniel?', href: '/breeds/cavalier-king-charles/insurance' }, { label: 'Pet insurance by breed', href: '/breeds/insurance' }]} />
        <RelatedLinks title="Related Guides" links={[{ label: 'Dog Ear Infections', href: '/health/dog-ear-infections' }, { label: 'Best Pet Insurance', href: 'https://vets.co/reviews/best-pet-insurance' }, { label: 'Senior Dog Care', href: '/health/senior-dog-care' }]} />
        <RelatedLinks title="Breed Comparisons" links={[
          { label: 'Cavalier King Charles Spaniel vs Cocker Spaniel', href: '/compare/cavalier-king-charles-vs-cocker-spaniel' },
        ]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="breed" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="breed-cavalier" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
                <BreedHealthCard name="Mitral Valve Disease (MVD)" riskLevel="very-high"
          description="MVD is the defining health crisis of the Cavalier breed. The mitral valve degenerates over time, causing regurgitation of blood back into the left atrium with each heartbeat. The heart compensates by enlarging; eventually it cannot compensate and congestive heart failure develops. In poorly bred Cavaliers, MVD onset may be as early as 1–2 years of age. In health-tested lines following the MVD Breeding Protocol, onset is pushed to 6–7+ years. The difference — buying from health-tested breeders — is the difference between a dog that develops heart failure at 4 years and one that may not until 10."
          signs={['Heart murmur on auscultation (often first sign)', 'Coughing — especially at night', 'Reduced exercise tolerance', 'Rapid respiratory rate at rest', 'Fluid accumulation (congestive heart failure)']}
          management="Pimobendan (Vetmedin) is started when cardiac enlargement is confirmed by echo — EPIC trial data showed it delays CHF onset by 15+ months. ACE inhibitors and diuretics when CHF develops. Annual cardiac auscultation from age 1. Echo when murmur is detected. Cardiologist involvement for disease management." />

        <BreedHealthCard name="Chiari-like Malformation / Syringomyelia (CM/SM)" riskLevel="high"
          description="CM/SM is a neurological condition caused by the Cavalier's skull being too small for the brain — the cerebellum herniates through the foramen magnum (the opening at the skull base), blocking cerebrospinal fluid flow and causing a fluid-filled cavity (syrinx) within the spinal cord. Up to 70% of Cavaliers have the malformation on MRI; clinical signs vary from none to severe pain. The 'Cavalier scratch' — scratching at the shoulder or neck area without making contact, especially during excitement — is a characteristic but not universal sign."
          signs={['Phantom scratching at neck/shoulder', 'Apparent pain with neck/head movement', 'Facial rubbing and scooting', 'Weakness in limbs (severe cases)', 'Scoliosis visible in advanced cases']}
          management="Gabapentin, pregabalin for pain. NSAIDs for inflammation. Omeprazole reduces CSF production. Surgical decompression (foramen magnum decompression) for severe cases with skilled neurosurgeon. MRI required to diagnose and stage." />

        <BreedHealthCard name="Episodic Falling Syndrome (EFS)" riskLevel="moderate"
          description="A unique Cavalier condition — episodes of muscle rigidity and falling triggered by exercise, excitement, or stress. The dog's limbs become rigid and it falls, sometimes unable to rise for minutes. Caused by a genetic mutation affecting a glycine receptor. DNA test available — autosomal recessive. Responsible breeders DNA test breeding dogs. Mildly affected dogs may appear to 'freeze' briefly; severely affected dogs have major episodes during any excitement."
          signs={['Episodes of muscle rigidity during exercise', 'Falling or collapse during excitement', 'Recovery within minutes', 'Bowing or crabbing gait during episodes']}
          management="DNA test available — carriers do not show disease. Avoid stressful triggers. Medication (clonazepam) for severe cases. Many mildly affected dogs live well with trigger management." />

        <h2>The MVD Breeding Protocol — What to Ask Breeders</h2>
        <p>The MVD Breeding Protocol (developed by Cavalier health researchers and the breed clubs) recommends: no dog should be bred until age 2.5 years if it has a murmur; no dog should be bred at 2.5 years if parents had murmurs before age 5; both parents should be murmur-free at the age of breeding. Following this protocol significantly delays MVD onset in the offspring.</p>
        <p>Ask any Cavalier breeder: "What is the cardiac clearance status of both parents, certified by a veterinary cardiologist?" Clearances should be within 12 months of breeding. Both parents should be murmur-free on auscultation by a cardiologist at time of breeding. Breeders who cannot produce this information are not following health protocols.</p>

        <h2>Insurance — Get It Early</h2>
        <p>Pet health insurance for Cavaliers is worth serious consideration — the breed's health issues are predictable and expensive. A Cavalier that develops MVD will require cardiac ultrasounds, pimobendan (Vetmedin is not inexpensive), and eventually diuretics and ACE inhibitors. CM/SM management and potential surgery is even more costly. Getting insurance before any conditions are detected (while the dog is a puppy) is essential — pre-existing conditions are excluded in virtually all pet insurance policies.</p>

        <h2>Frequently Asked Questions</h2>
        <FAQAccordion items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
      </div>
    </ArticleLayout>
    </>
  )
}
