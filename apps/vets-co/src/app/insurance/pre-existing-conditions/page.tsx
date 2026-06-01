import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "Pre-Existing Conditions & Pet Insurance Explained | Vets.co", description: "Pre-existing conditions are the most important pet insurance concept. Learn the difference between curable and incurable, and why enrolling early matters.", path: '/insurance/pre-existing-conditions', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Pre-Existing Conditions and Pet Insurance', description: 'How pre-existing conditions work in pet insurance, including curable vs. incurable distinctions.', url: 'https://vets.co/insurance/pre-existing-conditions', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })
const FAQS = [
  { question: "What counts as a pre-existing condition?", answer: "A pre-existing condition is any illness or injury that showed signs, was diagnosed, or was treated before the policy started or during its waiting period — even if it was not formally diagnosed at the time. Insurers review your pet's medical records to determine this. Importantly, a noted symptom can count even without a diagnosis: if your vet recorded limping months before you enrolled, a later cruciate diagnosis may be deemed pre-existing. This is why enrolling a healthy young pet, before any conditions appear, maximizes coverage." },
  { question: "What is the difference between curable and incurable pre-existing conditions?", answer: "Some insurers distinguish between curable and incurable pre-existing conditions. Incurable or chronic conditions — diabetes, allergies, heart disease, cancer — are typically excluded permanently. Curable conditions — such as a one-time ear infection, a respiratory infection, or a urinary tract infection — may become eligible for coverage after the pet has been symptom-free and treatment-free for a defined period, often six to eighteen months, depending on the insurer. Not all insurers offer this, so it is a meaningful point of comparison." },
  { question: "Can I get any coverage if my pet already has a condition?", answer: "Yes — you can still insure a pet with a pre-existing condition; the policy simply will not cover claims related to that specific condition. Everything else — new, unrelated illnesses and injuries — can still be covered. So a dog with a managed thyroid condition can still be insured against future cancer, an injury, or other unrelated diseases. The pre-existing exclusion is condition-specific, not a blanket denial, which is why coverage still has value even for pets that are not perfectly healthy." },
]
export default function PreExistingPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Pre-Existing Conditions, Explained', subtitle: 'The single most important concept in pet insurance is the pre-existing condition. Because insurers do not cover conditions that existed before coverage began, the value of a policy is largely set the day you enroll. Understanding how pre-existing conditions are defined — and why timing matters so much — is essential before buying.', category: 'Insurance Guide', authorName: 'Vets.co Editorial', authorAvatar: '🐾', publishedAt: 'June 2026', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Insurance', href: '/insurance' }, { name: 'Pre-Existing Conditions', href: '/insurance/pre-existing-conditions' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Key Distinctions</div>
            {[['Incurable', 'Usually excluded permanently'], ['Curable', 'May become eligible after symptom-free period'], ['Bilateral', 'One side can exclude the other'], ['Waiting period', 'Conditions in it count as pre-existing']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'When to Enroll', href: '/insurance/when-to-enroll' }, { label: 'How Pet Insurance Works', href: '/insurance/how-pet-insurance-works' }, { label: 'Reading the Fine Print', href: '/insurance/reading-the-fine-print' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Insurance Decision Guide" subtitle="Our plain-English checklist." source="insurance-pre-existing" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="warning" title="Timing is everything">
            Every condition your pet develops before coverage starts becomes a permanent gap. This is why the most common piece of advice from veterinary teams is to enroll while a pet is young and healthy — not after the first worrying symptom appears.
          </CalloutBox>

          <h2>What a Pre-Existing Condition Is</h2>
          <p>A pre-existing condition is any injury or illness that began, showed signs, or was treated before your policy's coverage started, including during any waiting period. Insurers establish this by reviewing your pet's veterinary records. Crucially, a formal diagnosis is not required — a documented symptom can be enough. If your records note repeated scratching before enrollment, a later allergy diagnosis may be classified as pre-existing and excluded. The condition itself is excluded, but unrelated future conditions remain coverable.</p>

          <h2>Curable vs. Incurable</h2>
          <p>Many insurers separate pre-existing conditions into curable and incurable. Incurable or chronic conditions — diabetes, allergies, heart disease, cancer, kidney disease — are generally excluded for the life of the policy. Curable conditions — a single ear infection, a respiratory infection, a urinary tract infection that fully resolved — may become eligible for coverage after the pet has gone a defined symptom-free and treatment-free period, often six to eighteen months. Whether an insurer offers this curable-condition pathway, and how long the waiting period is, varies and is worth comparing.</p>

          <h2>Bilateral Conditions</h2>
          <p>A subtle but important rule involves bilateral conditions — those that can affect paired body parts, such as cruciate ligaments, hips, or eyes. Many insurers treat a problem on one side as making the other side pre-existing too. So if your dog tore one cruciate ligament before enrollment, the insurer may exclude the other knee as well, on the reasoning that the underlying predisposition was already present. Reading how a policy handles bilateral conditions matters for breeds prone to orthopedic disease.</p>

          <h2>Why Waiting Periods Matter</h2>
          <p>Policies impose waiting periods after enrollment before coverage begins — short for accidents, longer for illness, and often longest for orthopedic conditions. Anything that arises during a waiting period is treated as pre-existing. This is another reason to enroll before problems appear: a condition that emerges in the gap between signing up and coverage taking effect will not be covered.</p>

          <h2>The Practical Takeaway</h2>
          <p>Because pre-existing exclusions are permanent and broadly defined, the value of pet insurance is highest when you enroll a young, healthy pet with a clean record. Waiting until a pet shows symptoms — or worse, until after a diagnosis — locks out coverage for exactly the conditions most likely to generate large bills. If your pet already has a condition, insurance can still cover unrelated future problems, so it is rarely pointless, but enrolling early remains the most powerful decision an owner can make.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />
        </div>
      </ArticleLayout>
    </>
  )
}
