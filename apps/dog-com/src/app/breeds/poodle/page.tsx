import type { Metadata } from 'next'
import { AffiliateDisclosure, buildMetadata, ArticleLayout, BreedHealthCard, EmailCapture, RelatedLinks, ShopCtas, CrossPortfolioCard, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Poodle Breed Guide — Standard, Miniature & Toy | Dog.com', description: 'Poodles are the most intelligent dog breed. Three sizes with different health profiles — Standard Poodles at risk for GDV/bloat and Addison\'s disease.', path: '/breeds/poodle', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Poodle Breed Guide', description: 'Standard, Miniature, and Toy Poodle health profiles — Addison\'s disease, bloat, and PRA.', url: 'https://dog.com/breeds/poodle', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' })

const FAQS = [
  {
    question: 'What is the difference between Standard, Miniature, and Toy Poodles?',
    answer: 'Poodles come in three sizes with meaningfully different health profiles. Standard Poodles (40–70 lbs) carry elevated risk for Addison\'s disease, GDV/bloat, and sebaceous adenitis. Miniature Poodles (10–15 lbs) are predisposed to PRA, patellar luxation, and epilepsy. Toy Poodles (4–6 lbs) are predisposed to PRA, Legg-Calvé-Perthes disease, and hypoglycemia.',
  },
  {
    question: 'What health problems do Standard Poodles have?',
    answer: 'Standard Poodles have the highest breed predisposition to Addison\'s disease (hypoadrenocorticism), which can present with vague, episodic signs — recurring vomiting, lethargy, weakness — before an acute Addisonian crisis. They are also deep-chested and rank among the higher-risk breeds for GDV/bloat. Prophylactic gastropexy at the time of spay/neuter is offered by many surgeons for this breed — discuss it with your veterinarian before the surgery is scheduled.',
  },
  {
    question: 'Do Poodles shed?',
    answer: 'The Poodle coat grows continuously rather than shedding the way double-coated breeds do — dead hair tangles within the coat and mats if not brushed regularly. Professional grooming every 6–8 weeks is required for most coat styles, plus daily or every-other-day brushing between appointments to prevent mat accumulation.',
  },
  {
    question: 'Are Poodles smart?',
    answer: 'Poodles are consistently ranked first in canine intelligence assessments. The practical implication: they need substantial mental stimulation — training, puzzle toys, nose work, agility, or other structured activity. A bored Poodle invents its own entertainment, which is rarely what owners want; one left without mental engagement can develop anxious, destructive behaviors.',
  },
  {
    question: 'What is PRA in Poodles?',
    answer: 'Progressive retinal atrophy is a genetic degeneration of the retinal photoreceptors that leads to progressive blindness, and Poodles of all three sizes are predisposed. The prcd-PRA DNA test identifies carriers and affected dogs, so PRA testing should be a non-negotiable requirement when selecting any Poodle from a breeder. There is no treatment, but blind dogs adapt remarkably well to familiar environments.',
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })
const combinedSchema = combineSchemas(schema, faqSchema)
export default function PoodlePage() {
  return (
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'Poodle Breed Guide', subtitle: 'The most intelligent dog breed by most behavioral assessments — Poodles excel at every task they are trained for, from elite obedience to water retrieving to circus performance. They are also one of the few breeds with three distinctly different sizes (Standard, Miniature, Toy) that carry meaningfully different health profiles.', category: 'Breed Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breeds', href: '/breeds' }, { name: 'Poodle', href: '/breeds/poodle' }]}
      relatedLinks={[{ title: 'Dog Breeds Hub', href: '/breeds', category: 'Hub' }, { title: 'Compare Breeds', href: '/compare', category: 'Breed Guide' }, { title: 'Goldendoodle Guide', href: '/breeds/golden-doodle', category: 'Breed Guide' }, { title: 'Australian Shepherd Guide', href: '/breeds/australian-shepherd', category: 'Breed Guide' }, { title: 'Dog Training Hub', href: '/training', category: 'Training' }]}
      schema={combinedSchema}
      contentType="breed"
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Size</div>
          {[['Standard Poodle', '40–70 lbs · Addison\'s disease · Bloat risk · SA'], ['Miniature Poodle', '10–15 lbs · PRA · Patellar luxation · Epilepsy'], ['Toy Poodle', '4–6 lbs · PRA · Legg-Calvé-Perthes · Hypoglycemia']].map(([s, d]) => (
            <div key={s} className="py-2 border-b border-brand-border last:border-0">
              <div className="text-xs font-bold text-brand-dark">{s}</div>
              <div className="text-2xs text-brand-text-light">{d}</div>
            </div>
          ))}
        </div>
        <RelatedLinks title="Poodle Health Deep-Dive" links={[{ label: 'Poodle Health Issues & Screenings', href: '/breeds/poodle/health' }]} />
        <RelatedLinks title="Related Guides" links={[{ label: 'Poodle Feeding Guide', href: '/breeds/poodle/feeding' }, { label: 'Goldendoodle Guide', href: '/breeds/golden-doodle' }, { label: 'Dog Bloat / GDV', href: '/health/dog-bloat-gvd' }, { label: 'Best Pet Insurance', href: 'https://vets.co/reviews/best-pet-insurance' }]} />
        <RelatedLinks title="Breed Comparisons" links={[
          { label: 'Poodle vs Labradoodle', href: '/compare/poodle-vs-labradoodle' },
          { label: 'Poodle vs Goldendoodle', href: '/compare/poodle-vs-golden-doodle' },
        ]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="breed" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="breed-poodle" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the poodle checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Poodle checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-dog-poodle-prcd-pra-chart,
            dog-fridge-poodle-6to8wk-groom-card, and
            canine-first-owner-poodle-handbook notes that
            match the prcd-PRA DNA test, the 6–8 week
            professional grooming cycle, and first-time-owner
            notes on this page — a laminated dog Poodle
            prcd-PRA chart so the carrier-test requirement is
            posted on the fridge (not a Dachshund 25% IVDD
            chart, not an 1835 bull-baiting-ban chart), a
            fridge Poodle 6–8-week groom card so the
            every-other-day brush notes are labeled in the
            kitchen (not a 20-degree ramp card, not a crate
            hop), and a first-owner Poodle handbook so the
            YES-typically / three-size / mental-work grounding
            is a physical kitchen book (not a first-owner
            Dachshund handbook). Educational kitchen
            checklist, not a ranked product list, not a
            substitute for a veterinarian. Dog.com does not
            sell insurance. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="dog-com"
            title="Poodle checklist"
            subtitle="Email the prcd-PRA chart, 6–8-week groom card, and first-owner handbook notes. No spam."
            ctaText="Email my poodle checklist"
            source="breed-poodle-under-hero"
          />
        </div>

        <p>The working story starts with the German Pudel: a water retriever whose continuously growing coat is why a household Poodle still needs a 6–8 week clip, not a crate-only afternoon. Poodles are typically first-time-owner friendly when the household accepts professional grooming every 6–8 weeks, daily or every-other-day brushing, and the mental-work load of the breed ranked first in canine intelligence assessments.</p>

        <h2>Intelligence — The Practical Implications</h2>
        <DropCap>Poodles are consistently ranked first in canine intelligence assessments. This has practical implications beyond performance dog sports: a bored Poodle invents its own entertainment, which is rarely what owners want. Poodles need substantial mental stimulation — training, puzzle toys, nose work, agility, or any structured activity that engages their problem-solving capacity. A Poodle that receives training, enrichment, and interaction is an ideal companion; a Poodle left alone without mental engagement develops anxious, destructive behaviors.</DropCap>

        <CalloutBox variant="evidence" title="Standard Poodle GDV risk">
          Standard Poodles are deep-chested and rank among the highest-risk breeds for gastric dilatation-volvulus. A prophylactic gastropexy performed at the time of spay/neuter is offered by many surgeons for this breed — discuss with your veterinarian before the surgery is scheduled.
        </CalloutBox>

        <BreedHealthCard name="Addison's Disease (Standard Poodles)" riskLevel="high"
          description="Standard Poodles have the highest breed predisposition to Addison's disease (hypoadrenocorticism) of any breed. Addison's occurs when the adrenal glands produce insufficient cortisol and aldosterone. The condition is called 'the great pretender' because it can present with vague, intermittent signs — lethargy, vomiting, weight loss, weakness — that wax and wane. The classic presentation is an Addisonian crisis: acute collapse, severe vomiting, profound weakness, and potentially fatal electrolyte disturbances. Addison's disease is suspected in any Standard Poodle with recurring GI symptoms or episodic weakness. Diagnosis: ACTH stimulation test. Treatment: lifelong mineralocorticoid (Percorten-V or Florinef) and glucocorticoid (prednisone) supplementation."
          signs={['Episodic vomiting and lethargy', 'Weight loss over weeks to months', 'Weakness — worse during stress', 'Acute collapse (Addisonian crisis)', 'Bradycardia (slow heart rate)']}
          management="ACTH stimulation test for diagnosis. Lifelong Percorten-V (quarterly injection) plus low-dose prednisone daily. Regular electrolyte monitoring. Medical alert tag recommended — Addisonian dogs cannot mount appropriate stress response without supplemental steroids during illness, surgery, or trauma." />

        <BreedHealthCard name="GDV / Bloat (Standard Poodles)" riskLevel="high"
          description="Standard Poodles are a deep-chested breed predisposed to gastric dilatation-volvulus (GDV). The stomach fills with gas and twists on itself — a rapidly fatal emergency if not treated within hours. Standard Poodle owners should know the signs and have the location and number of the nearest 24-hour emergency vet ready before they ever need it."
          signs={['Unproductive retching', 'Distended abdomen', 'Restlessness then lethargy', 'Excessive drooling', 'Signs of shock']}
          management="Emergency surgery. Prevention: prophylactic gastropexy (stomach tacking — prevents rotation) at time of spay/neuter is offered by many surgeons for high-risk breeds. Discuss with your veterinarian." />

        <h2>Progressive Retinal Atrophy (All Three Sizes)</h2>
        <p>PRA is a genetic degeneration of the retinal photoreceptors leading to progressive blindness. Poodles of all three sizes are predisposed. The prcd-PRA DNA test identifies carriers and affected individuals — responsible breeders test all breeding dogs. Affected dogs progress from night blindness to complete blindness over months to years. There is no treatment, but blind dogs adapt remarkably well to familiar environments. PRA testing should be a non-negotiable requirement when selecting any Poodle from a breeder.</p>

        <h2>Coat — The Grooming Reality</h2>
        <p>The Poodle coat grows continuously and does not shed in the way double-coated breeds do — instead, dead hair tangles within the coat, causing mats if not brushed regularly. Professional grooming every 6–8 weeks is required for most coat styles. The classic "pet clip" (uniform length all over) is the most practical everyday style. The elaborate show clips (Continental, English Saddle) require significantly more maintenance and are not practical for most pet owners. Daily or every-other-day brushing between professional appointments prevents mat accumulation.</p>

        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the Poodle home kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the on-page
            prcd-PRA DNA test, the 6–8 week professional
            grooming cycle, and first-time-owner notes — a
            laminated dog Poodle prcd-PRA chart, a fridge
            Poodle 6–8-week groom card, and a first-owner
            Poodle handbook. Educational kitchen searches
            only. They are not a ranked product list, they
            are not a crate hop, they are not a generic
            dog-ramp hop, and they do not replace a
            veterinarian. Dog.com does not sell insurance.
            Dog.com earns a commission on qualifying purchases
            at no extra cost to you.
          </p>
          <AffiliateDisclosure variant="inline" siteId="dog-com" />
          <div className="flex flex-col gap-3 mt-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+dog+poodle+prcd+pra+chart?s=breed-poodle"
              amazonLabel="Browse laminated dog Poodle prcd-PRA charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/dog+fridge+poodle+6to8wk+groom+card?s=breed-poodle"
              amazonLabel="Browse fridge Poodle 6–8-week groom cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/canine+first+owner+poodle+handbook?s=breed-poodle"
              amazonLabel="Browse first-owner Poodle handbooks on Amazon →"
            />
          </div>
        </div>

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
