import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, BreedHealthCard, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Dachshund Breed Guide — IVDD Risk, Ramps Required | Dog.com', description: 'Dachshunds have a 25% lifetime risk of IVDD spinal disc disease. Ramps are not optional — they prevent the jumping that herniated discs.', path: '/breeds/dachshund', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Dachshund Breed Guide', description: 'IVDD risk, ramp requirements, and weight management for Dachshunds.', url: 'https://dog.com/breeds/dachshund', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' })

const FAQS = [
  { question: 'What health problems do Dachshunds have?', answer: 'Intervertebral disc disease (IVDD) is the defining concern — approximately 25% of Dachshunds experience at least one disc event in their lifetime, a consequence of the breed\'s long spine and chondrodystrophic build. Miniature Dachshunds additionally carry predispositions to patellar luxation, pattern baldness, and Lafora disease (a progressive epilepsy with an available DNA test). Discuss spinal-health management and screening with your veterinarian.' },
  { question: 'Do Dachshunds really need ramps?', answer: 'Yes. Eliminating jumping is the single most impactful IVDD prevention measure in a household Dachshund — a single jump off a couch can herniate an already-compromised disc. Ramps to every elevated surface the dog uses (couch, bed, car) should be in place from puppyhood, with a gentle gradient (roughly 20 degrees maximum) and a non-slip surface so the dog willingly uses them.' },
  { question: 'What are the warning signs of a back problem in a Dachshund?', answer: 'Early signs: yelping when picked up or touched along the spine, reluctance to jump, hunched posture, and stiffness after rest — these warrant a same-day call to your veterinarian. Wobbly or crossing hind legs, inability to walk, or loss of bladder or bowel control are emergencies: the neurological recovery window after paralysis is approximately 24-48 hours.' },
  { question: 'Why is weight so important for Dachshunds?', answer: 'Excess weight multiplies spinal loading on already-vulnerable discs — a Dachshund at 125% of ideal body weight carries 25% more load every hour of the day. Target a body condition score of 4-5 on the 9-point scale: ribs easily felt with light pressure and a visible waist. Measured meals and counted treats matter because the breed is strongly food-motivated.' },
  { question: 'Are some Dachshund coat types less prone to back problems?', answer: 'Wire-haired Dachshunds have documented lower IVDD rates than smooth and long-haired varieties — the wire coat was selected from a different genetic background that happens to include some protective variation. All varieties still warrant the same prevention measures: ramps, lean weight, and a harness rather than a neck collar.' },
]
const combinedSchema = combineSchemas(schema, buildFAQSchema({ questions: FAQS }))

export default function DachshundPage() {
  return (
    <>
    <SchemaScript schema={combinedSchema} />
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'Dachshund Breed Guide', subtitle: 'The long body and short legs that make Dachshunds distinctive also make their spine uniquely vulnerable. With a 25% lifetime risk of intervertebral disc disease (IVDD), spinal health management is not optional for Dachshund owners — it is a daily practice that begins day one.', category: 'Breed Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breeds', href: '/breeds' }, { name: 'Dachshund', href: '/breeds/dachshund' }]}
      relatedLinks={[{ title: 'Dog Breeds Hub', href: '/breeds', category: 'Hub' }, { title: 'Beagle Guide', href: '/breeds/beagle', category: 'Breed Guide' }, { title: 'Yorkshire Terrier Guide', href: '/breeds/yorkshire-terrier', category: 'Breed Guide' }, { title: 'Best Dog Beds', href: '/reviews/best-dog-beds', category: 'Reviews' }]}
      contentType="breed"
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">IVDD Prevention Checklist</div>
          {['Ramps to couch and bed — always', 'No jumping on/off furniture', 'Stairs: limit and support', 'Healthy weight — never overweight', 'Harness only — no neck collar', 'No rough play with larger dogs', 'Know nearest emergency vet'].map(s => (
            <div key={s} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid flex gap-2"><span className="text-green-600">✓</span>{s}</div>
          ))}
        </div>
        <RelatedLinks title="Insurance for This Breed" links={[{ label: 'Is pet insurance worth it for a Dachshund?', href: '/breeds/dachshund/insurance' }, { label: 'Pet insurance by breed', href: '/breeds/insurance' }]} />
        <RelatedLinks title="Related Guides" links={[{ label: 'IVDD Complete Guide', href: '/health/intervertebral-disc-disease' }, { label: 'Best Joint Supplements', href: '/reviews/best-joint-supplements' }, { label: 'Best Pet Insurance', href: 'https://vets.co/reviews/best-pet-insurance' }]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="breed" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="breed-dachshund" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

        <BreedHealthCard name="Intervertebral Disc Disease (IVDD)" riskLevel="very-high"
          description="Dachshunds are the breed most commonly affected by IVDD — approximately 25% will experience at least one disc event in their lifetime. Their long spine and chondrodystrophic build causes premature disc mineralization. A disc can herniate suddenly — often triggered by jumping from furniture — compressing the spinal cord. Severity ranges from back pain (Grade 1) to complete hind limb paralysis (Grade 5). Speed matters: the neurological recovery window after paralysis is 24–48 hours. Every Dachshund owner should know the emergency signs and have the nearest 24-hour vet's number saved before they ever need it."
          signs={['Back pain — yelping when touched, hunched posture', 'Reluctance to jump or climb stairs', 'Wobbly or crossing hind legs', 'Hind leg weakness or stumbling', 'Inability to walk on hind legs — emergency', 'Loss of bladder or bowel control — emergency']}
          management="Ramps and steps to all elevated surfaces. Weight management to ideal BCS. No jumping. When IVDD occurs: immediate neurological assessment, MRI for surgical planning, surgery within 24-48 hours for Grade 3-5 cases for best recovery odds. Conservative management (strict crate rest + NSAIDs) for Grade 1-2 without neurological deficits. Rehabilitation post-surgery." />

        <h2>Ramps — Not Optional, Not Decorative</h2>
        <DropCap>The single most impactful IVDD prevention measure in a household Dachshund is eliminating jumping. A Dachshund jumping off a couch generates significant spinal impact — repeated over years, this contributes to disc degeneration. A single jump can herniate an already-compromised disc. Ramps to every piece of furniture the dog accesses — couch, bed, car seats — eliminate the jumping force. Ramps should be in place from puppyhood, before any disc events occur, not after.</DropCap>

        <CalloutBox variant="warning" title="Emergency window is hours, not days">
          A Dachshund that loses the ability to walk on its hind legs or loses bladder control is a same-day surgical emergency. The neurological recovery window after paralysis is approximately 24–48 hours. Have the address and number of the nearest 24-hour vet saved in your phone before an event occurs — not after.
        </CalloutBox>
        <p>Ramp gradient: gentle enough that the dog willingly uses it. A steep ramp the dog refuses to use provides no protection. Maximum gradient approximately 20 degrees. Non-slip surface is essential. Carpeted or rubber-treaded ramps are safer than smooth surfaces. Get ramps before the dog comes home — changing the environment after the dog has established jumping habits is harder than preventing the habit from forming.</p>

        <h2>Weight — The Multiplier</h2>
        <p>Excess weight increases spinal loading with every step. A Dachshund at 125% of ideal body weight is placing 25% more load on already-vulnerable discs for every hour of the day. Weight management is arguably the second most important IVDD prevention measure after ramps. Ideal BCS: 4–5 on a 9-point scale. Ribs easily palpable with light pressure. Visible waist. Dachshunds are not naturally lean — they are food-motivated and prone to weight gain. Measured meals, no free-feeding, treats counted against daily caloric intake.</p>

        <h2>Standard vs Miniature — Different Health Profiles</h2>
        <p>Standard Dachshunds (over 11 lbs) and Miniature Dachshunds (under 11 lbs) share the IVDD predisposition but have different secondary concerns. Miniature Dachshunds are predisposed to Pattern Baldness (progressive hair loss — cosmetic, not medical), patellar luxation (small breed joint problem — check annually), and Lafora disease (progressive myoclonic epilepsy) — a DNA test is available for Lafora. Wire-haired Dachshunds have lower IVDD rates than smooth and long-haired varieties — the wire coat was selected from a different genetic background that happens to include some protective variation.</p>

        <h2>Back Pain Signs — Learn These Before an Emergency</h2>
        <p>Dachshund owners should be able to recognize IVDD signs before they become Grade 4 or 5 emergencies. Early signs: yelping when picked up or when touched along the spine, reluctance to jump (may refuse a ramp they previously used willingly), hunched back posture, stiffness after rest. These signs in a Dachshund should prompt a same-day veterinary call — they are not "just stiff from sleeping wrong." Catching and treating at Grade 1–2 allows conservative management; waiting until Grade 3–5 means surgery and a tighter recovery window.</p>

        <h2>Frequently Asked Questions</h2>
        <FAQAccordion items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
      </div>
    </ArticleLayout>
    </>
  )
}
