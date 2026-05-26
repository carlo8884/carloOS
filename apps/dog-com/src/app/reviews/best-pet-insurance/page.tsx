import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, FAQAccordion, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Best Pet Insurance 2025 — Trupanion, Healthy Paws & Embrace Ranked | Dog.com',
  description: 'We compared 8 pet insurance companies on actual payout rates, exclusions, and what vets recommend. Trupanion, Healthy Paws, Embrace, and Figo ranked for dogs.',
  path: '/reviews/best-pet-insurance',
  category: 'Pet Insurance',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Best Pet Insurance 2025',
  description: 'Trupanion, Healthy Paws, Embrace, and Figo compared on payout rates and exclusions.',
  url: 'https://dog.com/reviews/best-pet-insurance',
  imageUrl: '',
  authorName: 'Dog.com Editorial Team',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2025-05-01T00:00:00Z',
})

const FAQS = [
  { question: 'When should I enroll my dog in pet insurance?', answer: 'Enroll before your first veterinary visit — ideally within the first week of bringing your dog home. Any condition noted in veterinary records before enrollment becomes a pre-existing condition and is permanently excluded. A puppy with a murmur noted at the first exam has a cardiac exclusion for life on most policies. The younger and healthier the dog at enrollment, the broader the coverage.', answerText: '' },
  { question: 'Is pet insurance worth it?', answer: 'For most dog owners, yes — particularly for breeds with known health predispositions. The expected value calculation depends on your breed, your financial situation, and your willingness to treat serious illness. Emergency surgeries ($3,000–8,000), specialist care ($2,000–15,000), and cancer treatment ($5,000–20,000) are common costs that insurance converts to a predictable monthly expense. For breeds like Golden Retrievers (60%+ lifetime cancer rate), Frenchies (BOAS surgery likely), or Labradors (hip dysplasia common), the math strongly favors insurance.', answerText: '' },
  { question: 'What does pet insurance not cover?', answer: 'All major insurers exclude: pre-existing conditions (anything documented before enrollment), preventive care (vaccines, annual exams, flea/tick prevention) unless you add a wellness rider, elective procedures, breeding costs, and experimental treatments. Many also exclude breed-specific conditions if the breed is known to be predisposed — this is why reading the policy before purchasing matters. Trupanion and Healthy Paws have notably fewer exclusions than budget insurers.', answerText: '' },
  { question: 'What reimbursement percentage should I choose?', answer: '90% reimbursement is the right choice for most owners. The difference in premium between 80% and 90% is usually $10–20/month — far less than the $100s difference in a large claim. At 90% with a $200 deductible, a $10,000 emergency costs you approximately $1,200 out of pocket. At 80%, that same claim costs $2,200. Pay slightly more monthly for 90%.', answerText: '' },
  { question: 'What is a per-incident vs annual deductible?', answer: 'Annual deductible: you pay the deductible once per policy year, then all claims are covered at your reimbursement rate for the rest of the year. Per-incident deductible: you pay the deductible every time a new condition or incident occurs. Annual deductibles are better for dogs with multiple health issues in a year. Trupanion uses per-incident; most others use annual.', answerText: '' },
]

const trupanionSchema = buildProductSchema({ name: 'Trupanion Pet Insurance', description: 'Pays vet directly, no payout limits, 90% reimbursement, per-incident deductible.', url: 'https://trupanion.com', imageUrl: '', ratingValue: 9.4, reviewCount: 1, priceRange: '40-120' })
const healthyPawsSchema = buildProductSchema({ name: 'Healthy Paws Pet Insurance', description: 'Fastest claims in category, no annual limits, annual deductible, 2-day claim processing.', url: 'https://healthypawspetinsurance.com', imageUrl: '', ratingValue: 9.2, reviewCount: 1, priceRange: '30-100' })
const embraceSchema = buildProductSchema({ name: 'Embrace Pet Insurance', description: 'Most customizable plans, diminishing deductible, wellness add-on available.', url: 'https://embracepetinsurance.com', imageUrl: '', ratingValue: 8.9, reviewCount: 1, priceRange: '35-110' })
const combinedSchema = combineSchemas(articleSchema, trupanionSchema, healthyPawsSchema, embraceSchema)

const PICKS = [
  { label: 'Best Overall', emoji: '🏆', name: 'Trupanion', subtitle: 'Direct vet pay · No payout limits · 90%', href: '#trupanion' },
  { label: 'Fastest Claims', emoji: '⚡', name: 'Healthy Paws', subtitle: 'Best claims experience · No annual limits', href: '#healthy-paws' },
  { label: 'Most Customizable', emoji: '🎛️', name: 'Embrace', subtitle: 'Flexible deductible · Diminishing deductible', href: '#embrace' },
  { label: 'Best Budget', emoji: '💰', name: 'Figo', subtitle: 'Lower premiums · 100% reimbursement option', href: '#figo' },
]

export default function BestPetInsurancePage() {
  return (
    <>
      <SchemaScript schema={faqSchema} />
      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">🏆 DVM-Reviewed · May 2025</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl"
          style={{ fontSize: 'clamp(24px, 4vw, 46px)' }}>
          Best Pet Insurance 2025 — Ranked by Vets & Owners
        </h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
          We compared 8 pet insurance companies on actual payout rates, fine-print exclusions, and claims experience — not marketing promises. The gap between top and bottom tier is significant.
        </p>
      </div>

      <QuickPicks items={PICKS} />

      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid font-medium">Best Pet Insurance</span>
      </nav>

      <div className="px-container sm:px-container-sm py-14">
        <div className="grid lg:grid-cols-[1fr_290px] gap-14">
          <div>
            {/* Critical buying rule */}
            <div className="bg-brand-danger/5 border-l-4 border-brand-danger rounded-r-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">The One Rule That Matters Most</div>
              <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                <strong>Enroll before the first vet visit.</strong> Any condition in veterinary records before enrollment is a pre-existing condition — permanently excluded. A murmur noted at the first puppy exam = lifetime cardiac exclusion on most policies. Enroll the week you get the dog, before any appointment.
              </p>
            </div>

            <ReviewCard
              id="trupanion"
              badge="Best Overall"
              badgeEmoji="🏆"
              name="Trupanion"
              subtitle="Pays vet directly · No payout limits ever · 90% reimbursement · Per-incident deductible"
              score={9.4}
              winner
              description={<div>
                <p>Trupanion is the insurer most recommended by veterinarians — because their payment model is designed around actual veterinary economics. Trupanion pays the veterinary clinic directly at checkout (no reimbursement waiting), no annual or lifetime payout limits, and 90% reimbursement after the deductible. For a major claim ($10,000 surgery), you pay approximately $1,200 at the clinic, not $10,000 followed by weeks of reimbursement paperwork.</p>
                <p>The per-incident deductible ($0–$1,000, your choice) applies once per condition, not per year. A dog with an ongoing condition like allergies pays the deductible once — then Trupanion covers 90% of all related costs indefinitely. Their underwriting is strict on pre-existing conditions but transparent. Monthly premiums are higher than budget competitors; the extra cost is worth it for the claims experience.</p>
              </div>}
              specs={[
                { label: 'Reimbursement', value: '90%', highlight: 'good' },
                { label: 'Annual Limit', value: 'None — unlimited', highlight: 'good' },
                { label: 'Pays Vet Directly', value: 'Yes — at checkout', highlight: 'good' },
                { label: 'Deductible Type', value: 'Per-incident ($0–$1,000)' },
                { label: 'Waiting Period', value: '30 days illness, 5 days injury' },
                { label: 'Price Range', value: '$40–120/mo depending on breed/age' },
              ]}
              pros={['Pays vet directly — no float required', 'No annual or lifetime limits', 'Per-incident deductible favors chronic conditions', 'Most trusted by veterinarians', 'Covers hereditary and congenital conditions']}
              cons={['Higher monthly premiums than budget options', 'Per-incident deductible less ideal for dogs with many separate incidents', 'Wellness care not included (add separately)']}
              price="$40–120/month"
              priceNote="Breed and age dependent. Get a quote."
              ctaText="Get Trupanion Quote →"
              ctaHref="https://trupanion.com"
              ctaAffiliateProgram="trupanion"
              ctaAffiliateProduct="dog-insurance"
            />

            <ReviewCard
              id="healthy-paws"
              badge="Fastest Claims"
              badgeEmoji="⚡"
              name="Healthy Paws"
              subtitle="Claims paid in days · No annual limits · Simple flat-rate plans"
              score={9.2}
              description={<div>
                <p>Healthy Paws has the best claims processing speed of any insurer we reviewed — most claims resolved within 2 business days via their mobile app. No annual or lifetime limits. Simple plan structure (choose deductible and reimbursement percentage, done). 99% member satisfaction rate in independent surveys.</p>
                <p>Unlike Trupanion, Healthy Paws reimburses you rather than paying the vet directly — meaning you pay the full bill upfront and get reimbursed, which matters for very large unexpected bills. Their annual deductible means once you've met it, all claims that year are covered at your reimbursement rate — better for dogs with multiple conditions in a year.</p>
              </div>}
              specs={[
                { label: 'Reimbursement', value: '70–90% (your choice)', highlight: 'good' },
                { label: 'Annual Limit', value: 'None — unlimited', highlight: 'good' },
                { label: 'Claims Speed', value: '2 business days typical', highlight: 'good' },
                { label: 'Deductible Type', value: 'Annual ($100–$500)' },
                { label: 'Payment', value: 'Reimburses you (not vet direct)' },
                { label: 'Price Range', value: '$30–100/month' },
              ]}
              pros={['Fastest claims in category', 'No annual or lifetime limits', 'Annual deductible favors multiple conditions per year', 'Highly rated by policyholders', 'Simple plan structure']}
              cons={['Reimburses you, not vet — float required for large bills', 'No 24/7 vet helpline', 'No wellness add-on available']}
              price="$30–100/month"
              ctaText="Get Healthy Paws Quote →"
              ctaHref="https://healthypawspetinsurance.com"
              ctaAffiliateProgram="healthy-paws"
              ctaAffiliateProduct="dog-insurance"
            />

            <ReviewCard
              id="embrace"
              badge="Most Customizable"
              badgeEmoji="🎛️"
              name="Embrace Pet Insurance"
              subtitle="Diminishing deductible · Wellness add-on · Broad hereditary coverage"
              score={8.9}
              description={<p>Embrace offers the most customizable plan structure — deductible from $100 to $1,000, reimbursement from 70–90%, annual limits from $5,000 to unlimited. The standout feature is the diminishing deductible: your annual deductible decreases by $50 for every year you don't receive a claim payment. Over time, long-term healthy dogs see their effective deductible approach zero. The Wellness Rewards add-on covers preventive care (vaccines, annual exams, flea prevention) as a separate reimbursable allowance — useful for owners who want a single place for all pet health spending.</p>}
              specs={[
                { label: 'Reimbursement', value: '70–90% (flexible)', highlight: 'good' },
                { label: 'Diminishing Deductible', value: '-$50/yr no-claim', highlight: 'good' },
                { label: 'Wellness Add-on', value: 'Available', highlight: 'good' },
                { label: 'Annual Limit', value: '$5,000–unlimited' },
                { label: 'Deductible Type', value: 'Annual' },
              ]}
              pros={['Most flexible plan customization', 'Diminishing deductible rewards healthy dogs', 'Wellness coverage available', 'Covers hereditary and orthopedic conditions', '24/7 vet helpline included']}
              cons={['Complex plan options can be confusing', 'Claims take longer than Healthy Paws', 'Premiums increase more steeply with age']}
              price="$35–110/month"
              ctaText="Get Embrace Quote →"
              ctaHref="https://embracepetinsurance.com"
              ctaAffiliateProgram="embrace"
              ctaAffiliateProduct="dog-insurance"
            />

            <ReviewCard
              id="figo"
              badge="Best Budget Option"
              badgeEmoji="💰"
              name="Figo Pet Insurance"
              subtitle="100% reimbursement option · Cloud-based claims · Competitive premiums"
              score={8.5}
              description={<p>Figo offers the most competitive premiums of the insurers we recommend — and is the only provider offering a 100% reimbursement option (after deductible). The Pet Cloud mobile app handles claims and policy management cleanly. Veterinary exam fees are covered, which some competitors exclude. The trade-off for lower premiums is a lower annual limit on standard plans ($10,000 or $14,000 on most plans) compared to the unlimited coverage from Trupanion and Healthy Paws — for many owners, $10,000 annual limit is adequate; for breeds facing $20,000+ treatment scenarios (cancer, multiple orthopedic surgeries), go with unlimited.</p>}
              specs={[
                { label: 'Reimbursement', value: 'Up to 100%', highlight: 'good' },
                { label: 'Price', value: 'Most competitive premiums', highlight: 'good' },
                { label: 'Annual Limit', value: '$10,000–$14,000 (standard)' },
                { label: 'Exam Fees', value: 'Covered', highlight: 'good' },
                { label: 'Claims', value: 'Cloud-based mobile app' },
              ]}
              pros={['Lowest premiums of recommended options', '100% reimbursement available', 'Exam fees covered', 'Good mobile app experience']}
              cons={['Annual limits lower than Trupanion/Healthy Paws', 'Not ideal for breeds with very high-cost condition risk']}
              price="$25–80/month"
              ctaText="Get Figo Quote →"
              ctaHref="https://figopetinsurance.com"
              ctaAffiliateProgram="figo"
              ctaAffiliateProduct="dog-insurance"
            />

            <h2 className="font-display text-2xl font-bold text-brand-dark mt-12 mb-6">Frequently Asked Questions</h2>
            <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Breed Risk</div>
              {[
                { breed: 'Golden Retriever', pick: 'Trupanion — cancer rate 60%+, no limits essential' },
                { breed: 'French Bulldog', pick: 'Trupanion — BOAS surgery $2,500–5,000 likely' },
                { breed: 'Labrador', pick: 'Healthy Paws or Trupanion — hip dysplasia common' },
                { breed: 'German Shepherd', pick: 'Embrace — DM + GDV coverage, good value' },
                { breed: 'Small/healthy breeds', pick: 'Figo — lower risk, budget premiums adequate' },
              ].map(item => (
                <div key={item.breed} className="py-2.5 border-b border-brand-border last:border-0">
                  <div className="text-xs font-bold text-brand-dark mb-0.5">{item.breed}</div>
                  <div className="text-2xs text-brand-text-light leading-relaxed">{item.pick}</div>
                </div>
              ))}
            </div>

            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">What to Compare</div>
              <ul className="text-xs text-brand-text-mid space-y-1.5 m-0 p-0 list-none">
                {['Annual vs per-incident deductible', 'Lifetime/annual payout limits', 'Hereditary condition coverage', 'Waiting periods (injury vs illness)', 'How claims are paid (direct vs reimburse)', 'Premium increase history'].map(item => (
                  <li key={item} className="flex items-start gap-1.5"><span className="text-brand-primary mt-0.5">→</span>{item}</li>
                ))}
              </ul>
            </div>

            <RelatedLinks title="Related" links={[
              { label: 'Golden Retriever Health', href: '/health/golden-retriever-health' },
              { label: 'French Bulldog Health', href: '/health/french-bulldog-health' },
              { label: 'Emergency Vet Signs', href: '/health/dog-symptoms-guide' },
            ]} />
            <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="DVM-written guidance every Tuesday." source="review-pet-insurance" />
          </aside>
        </div>
      </div>
    </>
  )
}
