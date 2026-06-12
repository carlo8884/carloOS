import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ArticleLayout, FAQAccordion, BreedHealthCard, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Beagle Dog Breed Guide — Health, Training & Care | Dog.com', description: 'Complete Beagle guide. Nose-driven escape artists with specific health concerns — epilepsy, hypothyroidism, and obesity.', path: '/breeds/beagle', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Beagle Breed Guide', description: 'Health, temperament, training, and care for Beagles.', url: 'https://dog.com/breeds/beagle', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' })

const FAQS = [
  { question: 'Are Beagles good family dogs?', answer: 'Yes — Beagles are sturdy, friendly, pack-oriented dogs that coexist well with children, other dogs, and most people; they rate as excellent with kids. The trade-offs are vocality (they bark and howl — they were bred to alert hunters), a powerful scent drive, and a very high escape risk that requires a secure fenced yard.' },
  { question: 'How much exercise does a Beagle need?', answer: 'A minimum of 30-60 minutes daily — nose work, leash walks, or fenced yard time. Mental stimulation matters just as much: snuffle mats, food puzzles, and structured scent-work classes address the Beagle\'s primary cognitive need. An under-stimulated Beagle becomes a destructive, vocal Beagle.' },
  { question: 'What health problems do Beagles have?', answer: 'The documented breed predispositions are idiopathic epilepsy (first seizure typically between 1-5 years), hypothyroidism (manageable with daily levothyroxine once diagnosed by blood test), and obesity — Beagles are among the most obesity-prone breeds and should always be fed measured portions. Discuss screening and weight management with your veterinarian.' },
  { question: 'Can Beagles be let off leash?', answer: 'Generally no. A Beagle\'s nose overrides recall training reliably — off-leash in an unfenced area, a Beagle that catches a scent trail can disappear. Use a leash at all times outdoors or a fenced yard with a 5+ foot fence, since Beagles will dig under or find gaps in lower fencing.' },
  { question: 'How long do Beagles live?', answer: 'Beagles typically live 12-15 years. They are a small-to-medium breed (20-30 lbs). Keeping a Beagle lean is one of the most meaningful things an owner can do for longevity, given the breed\'s strong tendency toward obesity — review body condition with your veterinarian at annual visits.' },
]
const combinedSchema = combineSchemas(schema, buildFAQSchema({ questions: FAQS }))

export default function BeaglePage() {
  return (
    <>
    <SchemaScript schema={combinedSchema} />
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'Beagle Breed Guide', subtitle: 'One of the most popular breeds in America — for good reason. Beagles are sturdy, friendly, and endlessly curious. They are also motivated by their nose in ways that require specific management strategies.', category: 'Breed Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐕', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breeds', href: '/breeds' }, { name: 'Beagle', href: '/breeds/beagle' }]}
      relatedLinks={[{ title: 'Dog Breeds Hub', href: '/breeds', category: 'Hub' }, { title: 'Compare Breeds', href: '/compare', category: 'Breed Guide' }, { title: 'Dachshund Guide', href: '/breeds/dachshund', category: 'Breed Guide' }, { title: 'Cocker Spaniel Guide', href: '/breeds/cocker-spaniel', category: 'Breed Guide' }, { title: 'Dog Training Hub', href: '/training', category: 'Training' }, { title: 'Excessive Barking', href: '/training/excessive-barking', category: 'Training' }]}
      contentType="breed"
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">At a Glance</div>
          {[['Size', 'Small-medium (20-30 lbs)'], ['Lifespan', '12-15 years'], ['Energy', 'High'], ['Shedding', 'Moderate'], ['Trainability', 'Challenging (scent-driven)'], ['Good with kids', 'Excellent'], ['Escape risk', 'Very high — nose wins']].map(([k,v]) => (
            <div key={k} className="flex justify-between py-2 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Beagle Health Deep-Dive" links={[{ label: 'Beagle Health Issues & Screenings', href: '/breeds/beagle/health' }]} />
        <RelatedLinks title="Related Guides" links={[{ label: 'Beagle Feeding Guide', href: '/breeds/beagle/feeding' }, { label: 'Separation Anxiety', href: '/training/separation-anxiety' }, { label: 'Heartworm Prevention', href: '/health/heartworm-prevention' }, { label: 'Best Dog Harnesses', href: '/reviews/best-dog-harnesses' }]} />
        <RelatedLinks title="Breed Comparisons" links={[
          { label: 'Beagle vs Basset Hound', href: '/compare/beagle-vs-basset-hound' },
        ]} />
        <RelatedLinks title="Planning for Breed-Specific Costs" links={[{ label: 'Compare Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="breed" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="breed-beagle" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

        <h2>Temperament</h2>
        <DropCap>Beagles were bred to trail rabbit and hare by scent — this history defines their behavior in captivity. They are friendly, pack-oriented dogs that coexist well with other dogs, children, and most people. The challenges: they follow their nose with extraordinary single-mindedness, bark and howl vocally (they were bred to alert hunters), and have a low threshold for bolting after scent trails.</DropCap>
        <p>A Beagle off-leash in an unfenced area is a Beagle that can disappear — their nose overrides recall training reliably. Fenced yard or leash at all times outdoors. A high fence (5+ feet) is important — Beagles will dig under or find gaps in lower fences.</p>

        <CalloutBox variant="tip" title="Channel the nose">
          Structured nose work classes are the single most effective enrichment activity for Beagles. Their scent drive is a feature, not a flaw — directing it into a training activity reduces destructive behavior, vocalisation, and bolting. Many positive-reinforcement trainers offer beginner scent-work programs that suit pet Beagles.
        </CalloutBox>

        <h2>Training</h2>
        <p>Beagles are intelligent but not easily motivated by the same things as herding breeds. Food is the primary currency — they are highly food-motivated (which also predisposes them to obesity). Short sessions, high-value rewards, and environmental management (do not expect reliable off-leash recall). <em>Nose work</em> — structured scent detection training — is the discipline Beagles excel at and genuinely enjoy. It channels their primary drive into a structured activity.</p>

        <BreedHealthCard name="Epilepsy" riskLevel="high" description="Idiopathic epilepsy (primary epilepsy of unknown cause) is more common in Beagles than the general population. First seizure typically occurs between 1-5 years. Well-managed epilepsy with appropriate anticonvulsant medication (phenobarbital, potassium bromide, zonisamide) allows normal quality of life." signs={['First seizure typically 1-5 years', 'May have multiple seizures without medication']} management="Anticonvulsant medication after the second seizure or after a cluster seizure. Bloodwork monitoring for phenobarbital hepatotoxicity." />

        <BreedHealthCard name="Hypothyroidism" riskLevel="moderate" description="Low thyroid hormone production — causes weight gain, lethargy, cold intolerance, and skin and coat changes. Blood test (total T4, free T4) diagnoses it. Highly manageable with daily oral levothyroxine — most dogs normalize fully within weeks of starting treatment." signs={['Weight gain without diet change', 'Lethargy', 'Coat thinning, skin thickening', 'Cold intolerance']} management="Daily levothyroxine oral medication. T4 levels monitored at 4-6 weeks after starting, then every 6 months. Lifelong treatment." />

        <BreedHealthCard name="Obesity" riskLevel="very-high" description="Beagles are among the most obesity-prone breeds — they will eat everything available and never self-regulate. Obesity worsens joint health, cardiac function, and metabolic disease. Body condition scoring monthly is essential. Feed by measured portion, not free choice, always." signs={['Cannot feel ribs without pressing', 'No visible waist from above', 'Reluctance to exercise']} management="Measured portions at consistent times. No free feeding. Limit treats to under 10% of daily caloric intake. Daily exercise 30-60 minutes minimum." />

        <h2>Exercise and Enrichment</h2>
        <p>30-60 minutes of exercise daily minimum — nose work, leash walks, or fenced yard time. Mental stimulation is equally important: snuffle mats, food puzzles, and nose work classes address the Beagle's primary cognitive need. An under-stimulated Beagle becomes a destructive, vocal Beagle.</p>

        <h2>What to Ask Breeders</h2>
        <p>Ask about epilepsy in the line — any dogs that developed seizures, at what age, whether medicated. Ask about hip OFA clearances. Ask about hypothyroidism in the lines. Responsible Beagle breeders are aware of these predispositions and select against them.</p>

        <h2>Frequently Asked Questions</h2>
        <FAQAccordion items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
      </div>
    </ArticleLayout>
    </>
  )
}
