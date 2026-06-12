import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, BreedHealthCard, EmailCapture, RelatedLinks, CrossPortfolioCard , ArticleByline, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Shih Tzu Breed Guide — Brachycephalic Health, Grooming | Dog.com', description: 'Shih Tzus are brachycephalic with prominent eyes prone to corneal injuries. Daily eye cleaning, professional grooming every 6-8 weeks.', path: '/breeds/shih-tzu', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Shih Tzu Breed Guide', description: 'Brachycephalic health, eye care, grooming, and dental disease for Shih Tzus.', url: 'https://dog.com/breeds/shih-tzu', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' })

const FAQS = [
  {
    question: 'What health problems do Shih Tzus have?',
    answer: 'The documented breed concerns are brachycephalic obstructive airway syndrome (BOAS — from the flattened face), corneal injuries and ulcers (from their prominent, shallow-set eyes), early-onset dental disease (42 teeth in a compressed jaw), and a predisposition to renal dysplasia. Any eye squinting, tearing, or visible opacity warrants a same-day veterinary evaluation — corneal ulcers progress rapidly. Discuss breed-appropriate screening with your veterinarian.',
  },
  {
    question: 'How much grooming does a Shih Tzu need?',
    answer: 'Professional grooming every 6–8 weeks is the minimum — the coat grows continuously and mats rapidly. At-home brushing every 2–3 days prevents mat accumulation, and the "puppy cut" is the most practical everyday style for owners who cannot brush daily. Daily eye cleaning and drying of facial folds are also part of the routine to prevent skin fold dermatitis.',
  },
  {
    question: 'Are Shih Tzus good family dogs?',
    answer: 'Shih Tzus were bred as companion dogs for Chinese royalty and are adaptable, affectionate, friendly, and surprisingly sturdy for their 9–16 lb size. Their main requirements are the grooming commitment and awareness of their brachycephalic heat sensitivity.',
  },
  {
    question: 'How much exercise does a Shih Tzu need?',
    answer: 'Moderate exercise — around 20–30 minutes daily. As a brachycephalic breed they are heat sensitive, so warm-weather activity should be limited and supervised, and a lean body weight matters because obesity dramatically worsens airway compromise.',
  },
  {
    question: 'How long do Shih Tzus live?',
    answer: 'Shih Tzus typically live 10–18 years — a long-lived breed. Consistent dental care, weight management, and attention to their eye and airway needs support that longevity.',
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })
const combinedSchema = combineSchemas(schema, faqSchema)
export default function ShihTzuPage() {
  return (
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'Shih Tzu Breed Guide', subtitle: 'Originally bred as companion dogs for Chinese royalty, Shih Tzus are adaptable, affectionate, and surprisingly sturdy for their size. Their flattened face and prominent eyes come with specific health management requirements that every Shih Tzu owner needs to understand.', category: 'Breed Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐕', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breeds', href: '/breeds' }, { name: 'Shih Tzu', href: '/breeds/shih-tzu' }]}
      relatedLinks={[{ title: 'Dog Breeds Hub', href: '/breeds', category: 'Hub' }, { title: 'Cavalier King Charles Guide', href: '/breeds/cavalier-king-charles', category: 'Breed Guide' }, { title: 'Yorkshire Terrier Guide', href: '/breeds/yorkshire-terrier', category: 'Breed Guide' }, { title: 'Best Pet Insurance', href: '/reviews/best-pet-insurance', category: 'Reviews' }]}
      schema={combinedSchema}
      contentType="breed"
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">At a Glance</div>
          {[['Size', '9–16 lbs'], ['Lifespan', '10–18 years (long-lived)'], ['Grooming', 'Professional every 6-8 weeks'], ['Exercise', 'Moderate — 20-30 min daily'], ['Brachycephalic', 'Yes — heat sensitive'], ['Temperament', 'Affectionate, friendly, adaptable']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-2 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Cherry Eye', href: '/health/cherry-eye' }, { label: 'Dog Dental Care', href: '/health/dog-dental-care' }, { label: 'Luxating Patella', href: '/health/dog-luxating-patella' }]} />
        <RelatedLinks title="Breed Comparisons" links={[
          { label: 'Shih Tzu vs Maltese', href: '/compare/shih-tzu-vs-maltese' },
        ]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="breed" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="breed-shih-tzu" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
                <BreedHealthCard name="Brachycephalic Obstructive Airway Syndrome (BOAS)" riskLevel="high"
          description="The Shih Tzu's flat face compresses anatomical structures — stenotic nares (narrow nostrils), an elongated soft palate, and a hypoplastic trachea restrict airflow. Mild BOAS: snoring and occasional snorting. Moderate BOAS: significant exercise intolerance, loud breathing at rest, sleep apnea. Severe BOAS: open-mouth breathing, cyanosis during exertion, collapse risk. Surgical correction (nare widening, soft palate shortening) dramatically improves quality of life in moderate to severe cases."
          signs={['Loud snoring or snorting at rest', 'Exercise intolerance — tires quickly', 'Open-mouth breathing during activity', 'Gagging or regurgitation', 'Sleep apnea — waking suddenly']}
          management="Maintain lean body weight — obesity dramatically worsens BOAS. Avoid exercise in heat (heat sensitivity is severe in brachycephalics). Surgical correction for moderate to severe cases — referral to a surgeon experienced in BOAS procedures." />

        <BreedHealthCard name="Corneal Injury and Ulcers" riskLevel="high"
          description="Shih Tzus have prominent, shallow-set eyes that protrude beyond the normal orbital protection. Their eyes are easily scratched by plant material, rough surfaces, and other dogs' nails during play. Any eye squinting, excessive tearing, or visible opacity in a Shih Tzu is an ophthalmology emergency — corneal ulcers progress rapidly and can cause vision loss within days without treatment."
          signs={['Squinting or keeping eye partially closed', 'Excessive tearing or discharge', 'Visible cloudiness or opacity on the eye', 'Pawing at eye', 'Sensitivity to light']}
          management="Veterinary evaluation same day for any eye abnormality. Corneal ulcers treated with antibiotic eye drops, atropine for pain, and sometimes a soft contact lens as a bandage. Prevent injury: avoid rough play near sharp vegetation, keep hair trimmed away from eyes, check for ingrown eyelashes (trichiasis)." />

        <h2>Grooming — The Non-Negotiable Commitment</h2>
        <p>The Shih Tzu coat grows continuously and mats rapidly without regular maintenance. Professional grooming every 6–8 weeks is the minimum — shorter or longer coat styles both require this frequency. At-home brushing every 2–3 days prevents the mat accumulation that eventually requires a complete shave-down. The "puppy cut" (uniform short coat) is the most practical everyday style for owners who cannot commit to daily brushing of the longer show coat.</p>
        <p>Daily eye cleaning is part of the Shih Tzu grooming routine — the tear staining that develops around the prominent eyes is normal but should be gently cleaned with a damp cloth to prevent bacterial growth in the moist skin folds. Facial folds should be checked and dried daily — moisture trapped in folds leads to skin fold dermatitis and infection.</p>

        <h2>Dental Disease</h2>
        <p>Shih Tzus have 42 teeth in a significantly compressed jaw — teeth crowd, overlap, and trap plaque in positions that are difficult to clean. Dental disease develops earlier and progresses faster than in larger breeds with normal jaw structure. Daily toothbrushing with enzymatic toothpaste (CET, Vetradent) from puppyhood is the most effective prevention. Professional dental cleaning under anesthesia typically needed by age 3–4 and annually thereafter.</p>

        <h2>Renal Dysplasia — Know the Risk</h2>
        <p>Shih Tzus have a breed predisposition to renal dysplasia — a congenital developmental kidney abnormality. Affected dogs show signs of kidney disease at a young age (under 2 years): PU/PD, poor growth, vomiting. Not all Shih Tzus are affected — but the predisposition warrants including a urine specific gravity check in puppy wellness exams to catch early signs. Responsible breeders are aware of this condition.</p>

        <h2>Frequently Asked Questions</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema={false}
          allowMultiple
        />
      </div>
    </ArticleLayout>
  )
}
