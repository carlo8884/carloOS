import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, BreedHealthCard, EmailCapture, RelatedLinks, CrossPortfolioCard , ArticleByline } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Cocker Spaniel Guide — Ear Infections, Eye Conditions | Dog.com', description: 'Cocker Spaniels have the highest rate of ear infections of any breed — their ear structure creates a perfect warm, dark environment for yeast and bacteria.', path: '/breeds/cocker-spaniel', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Cocker Spaniel Breed Guide', description: 'Ear infections, eye conditions, IMHA, and grooming for Cocker Spaniels.', url: 'https://dog.com/breeds/cocker-spaniel', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' })

const FAQS = [
  { question: 'Why do Cocker Spaniels get so many ear infections?', answer: 'American Cocker Spaniels have the highest rate of chronic ear infections of any breed — their long, pendulous, heavily feathered ear flaps create a warm, dark, poorly ventilated environment that promotes yeast and bacterial overgrowth, and the breed\'s allergy predisposition further inflames the ear canal. Monthly cleaning with a veterinary ear cleaner and drying the ears after swimming or bathing are essential maintenance.' },
  { question: 'What health problems do Cocker Spaniels have?', answer: 'The documented breed predispositions are chronic ear infections, hereditary eye conditions (progressive retinal atrophy and hereditary cataracts — annual CAER exams and a prcd-PRA DNA test exist for breeding dogs), immune-mediated hemolytic anemia (IMHA), allergies, moderate hip dysplasia rates, and skin infections secondary to coat matting. Discuss a screening and prevention plan with your veterinarian.' },
  { question: 'What are the emergency signs of IMHA in a Cocker Spaniel?', answer: 'Sudden extreme lethargy; pale, white, or yellow gums; rapid breathing at rest; weakness or collapse; and a yellow tint to the whites of the eyes. IMHA — where the immune system destroys the dog\'s own red blood cells — is a medical emergency, and Cocker owners should keep the nearest 24-hour veterinary clinic\'s number accessible.' },
  { question: 'How often should a Cocker Spaniel be groomed?', answer: 'Professional grooming every 6-8 weeks plus at-home brushing every 2-3 days to prevent matting — mats trap moisture and lead to skin infections beneath them. The "puppy cut" (coat clipped short and even) dramatically reduces the maintenance burden and is the most practical choice for owners who cannot commit to frequent grooming.' },
  { question: 'Are Cocker Spaniels good family dogs?', answer: 'Cocker Spaniels are gentle, affectionate companions — originally bred as hunting dogs for woodcock, now primarily family and show dogs. The ownership commitment is less about temperament than maintenance: consistent ear care, regular grooming, and attentiveness to the breed\'s eye and immune-system warning signs.' },
]
const combinedSchema = combineSchemas(schema, buildFAQSchema({ questions: FAQS }))

export default function CockerSpanielPage() {
  return (
    <>
    <SchemaScript schema={combinedSchema} />
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'Cocker Spaniel Breed Guide', subtitle: 'The American Cocker Spaniel — originally bred as a hunting dog for woodcock, now primarily a companion and show dog. Gentle, affectionate, and beautiful, with a coat that requires significant maintenance and health predispositions that reward attentive owners who recognize the early warning signs.', category: 'Breed Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breeds', href: '/breeds' }, { name: 'Cocker Spaniel', href: '/breeds/cocker-spaniel' }]}
      relatedLinks={[{ title: 'Dog Breeds Hub', href: '/breeds', category: 'Hub' }, { title: 'Cavalier King Charles Guide', href: '/breeds/cavalier-king-charles', category: 'Breed Guide' }, { title: 'Beagle Guide', href: '/breeds/beagle', category: 'Breed Guide' }, { title: 'Dog Training Hub', href: '/training', category: 'Training' }]}
      contentType="breed"
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Health Priorities</div>
          {['Monthly ear cleaning — mandatory', 'Annual CAER eye exam from age 2', 'Watch for sudden pale gums (IMHA)', 'Phosphofructokinase deficiency DNA test for breeders', 'Regular grooming — mats lead to skin infections', 'Hip clearances — moderate dysplasia rate'].map(s => (
            <div key={s} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid flex gap-2">
              <span className="text-green-600 font-bold">✓</span>{s}
            </div>
          ))}
        </div>
        <RelatedLinks title="Insurance for This Breed" links={[{ label: 'Is pet insurance worth it for a Cocker Spaniel?', href: '/breeds/cocker-spaniel/insurance' }, { label: 'Pet insurance by breed', href: '/breeds/insurance' }]} />
        <RelatedLinks title="Related Guides" links={[{ label: 'Dog Ear Infections', href: '/health/dog-ear-infections' }, { label: 'Dog Skin Allergies', href: '/health/dog-skin-allergies' }, { label: 'Anemia in Dogs', href: '/health/anemia-in-dogs' }]} />
        <RelatedLinks title="Breed Comparisons" links={[
          { label: 'Cavalier King Charles Spaniel vs Cocker Spaniel', href: '/compare/cavalier-king-charles-vs-cocker-spaniel' },
        ]} />
        <RelatedLinks title="Planning for Breed-Specific Costs" links={[{ label: 'Compare Pet Insurance', href: 'https://vets.co/reviews/best-pet-insurance' }]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="breed" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="breed-cocker" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
                <BreedHealthCard name="Chronic Ear Infections (Otitis Externa)" riskLevel="very-high"
          description="American Cocker Spaniels have the highest rate of chronic ear infections of any breed — their long, pendulous, heavily feathered ear flaps create a warm, dark, poorly-ventilated environment that promotes yeast (Malassezia) and bacterial overgrowth. Allergies — which Cockers are also predisposed to — further inflame the ear canal and promote secondary infection. Without preventive maintenance, most Cockers develop chronic otitis within the first few years of life."
          signs={['Head shaking and ear scratching', 'Odor from the ears (yeast has a characteristic musty smell)', 'Brown or dark discharge when ear is cleaned', 'Redness and swelling of the ear canal opening', 'Pain when ear is touched or examined', 'Head tilt (inner ear involvement in severe cases)']}
          management="Monthly cleaning with a veterinary ear cleaner (not cotton swabs — which push debris deeper). Dry the ear canal after swimming or bathing. At the first sign of infection: veterinary cytology to identify whether yeast, bacteria, or both are present — treatment differs. Allergic ear disease requires management of the underlying allergy (Apoquel, Cytopoint, or allergen-specific immunotherapy) to prevent recurrence." />

        <BreedHealthCard name="Progressive Retinal Atrophy (PRA) and Hereditary Cataracts" riskLevel="high"
          description="Cocker Spaniels are predisposed to both progressive retinal atrophy (photoreceptor degeneration leading to blindness — DNA test available) and hereditary cataracts (lens opacity causing progressive vision loss — CAER examination). Both are hereditary. Responsible breeders perform OFA CAER examination annually from age 2 on all breeding dogs and DNA test for prcd-PRA."
          signs={['Difficulty seeing in low light (PRA — night blindness first)', 'Cloudiness or white opacity in the lens (cataracts)', 'Bumping into objects in dim light', 'Progressive vision loss over months to years (PRA)']}
          management="Annual CAER exam for all breeding dogs. DNA prcd-PRA test. Cataract surgery available at veterinary ophthalmologists — good outcomes for appropriate candidates. Blind dogs adapt remarkably well to familiar environments — keep furniture placement consistent." />

        <BreedHealthCard name="Immune-Mediated Hemolytic Anemia (IMHA)" riskLevel="high"
          description="American Cocker Spaniels are one of the most significantly predisposed breeds for IMHA — the immune system attacks and destroys the dog's own red blood cells. This is a medical emergency. Cocker owners should know the emergency signs and have the nearest 24-hour veterinary clinic's number readily accessible."
          signs={['Sudden extreme lethargy', 'Pale, white, or yellow (icteric) gums', 'Rapid breathing at rest', 'Weakness or collapse', 'Yellow color to whites of eyes']}
          management="Emergency veterinary care immediately. Immunosuppressive doses of prednisone. Often additional immunosuppressants (azathioprine, mycophenolate). Blood transfusion when critically anemic. Hospitalization during acute phase." />

        <h2>Grooming — The Ongoing Commitment</h2>
        <p>The Cocker Spaniel's beautiful coat requires significant maintenance or it becomes matted, which creates a warm, moisture-trapping environment that leads to skin infections (pyoderma) beneath the mats. Professional grooming every 6-8 weeks for trimming and maintenance. At-home brushing every 2-3 days prevents mat formation between professional appointments. The ears and chest feathering are the areas most prone to matting and require particular attention. The "puppy cut" (coat clipped short and even) dramatically reduces maintenance requirements while maintaining the breed's appearance — the most practical choice for owners who cannot commit to frequent grooming.</p>

        <h2>Frequently Asked Questions</h2>
        <FAQAccordion items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
      </div>
    </ArticleLayout>
    </>
  )
}
