import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, RelatedLinks, AffiliateDisclosure, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox, ArticleSourcesList } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Does Pet Insurance Cover Pre-Existing Conditions? | Vets.co', description: 'No pet insurer covers pre-existing conditions, though some re-cover curable ones after a symptom-free window. Why enrolling early matters most.', path: '/insurance/questions/does-pet-insurance-cover-pre-existing-conditions', type: 'article' })

const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Does Pet Insurance Cover Pre-Existing Conditions?', description: 'How pre-existing conditions are defined and excluded, the curable-versus-incurable distinction, and why enrolling early matters.', url: 'https://vets.co/insurance/questions/does-pet-insurance-cover-pre-existing-conditions', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-11T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' })

const FAQS = [
  { question: 'Can I insure a pet that already has a condition?', answer: 'Yes. You can still buy a policy for a pet with an existing condition — the policy simply will not pay claims related to that specific condition. New, unrelated illnesses and injuries can still be covered. A dog with managed hypothyroidism, for example, can still be insured against a future cruciate injury or cancer. The exclusion is condition-specific, not a blanket denial, so coverage often still has real value.' },
  { question: 'Do any insurers cover curable pre-existing conditions?', answer: 'Some do. A number of insurers distinguish curable from incurable pre-existing conditions and will resume covering a curable issue — such as a one-time ear infection or urinary tract infection — once the pet has been symptom-free and treatment-free for a defined period, commonly six to eighteen months depending on the insurer. Chronic or incurable conditions like diabetes, allergies, and most orthopedic disease stay permanently excluded everywhere.' },
  { question: 'What is a bilateral exclusion?', answer: 'A bilateral exclusion applies to paired body parts — knees, elbows, eyes, hips. If one side had a problem before coverage began, many insurers treat the matching side as pre-existing too, on the reasoning that the underlying predisposition was already present. This matters most for breeds prone to orthopedic disease, where an injury to one cruciate ligament can exclude the other knee from coverage.' },
]

export default function Page() {
  return (
    <>
      <SchemaScript schema={schema} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Does Pet Insurance Cover Pre-Existing Conditions?', subtitle: 'No pet insurer covers pre-existing conditions — and that single rule is why timing matters more than carrier choice. Some insurers will re-cover curable conditions after a symptom-free window, but chronic disease stays excluded everywhere.', category: 'Insurance Q&A', authorName: 'Vets.co Editorial', publishedAt: 'June 2026', readTime: '7 min' }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Insurance', href: '/insurance' }, { name: 'Questions', href: '/insurance/questions' }, { name: 'Pre-Existing Conditions', href: '/insurance/questions/does-pet-insurance-cover-pre-existing-conditions' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Answer</div>
            {[['Incurable', 'Excluded permanently'], ['Curable', 'May re-cover after symptom-free window'], ['Bilateral', 'One side can exclude the other'], ['Best move', 'Enroll while young and healthy']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Questions" links={[{ label: 'When should I get insurance?', href: '/insurance/questions/when-should-i-get-pet-insurance' }, { label: 'Pre-Existing Conditions Explained', href: '/insurance/pre-existing-conditions' }, { label: 'When to Enroll', href: '/insurance/when-to-enroll' }, { label: 'All insurance questions', href: '/insurance/questions' }]} />
          <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-11T00:00:00Z" updatedAt="2026-06-11T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="warning" title="The short answer">
            No pet insurer covers pre-existing conditions — any condition with signs, symptoms, or a diagnosis <strong>before</strong> coverage starts or during the waiting period. Some insurers will re-cover a previously <em>curable</em> condition after a defined symptom-free window; chronic and incurable conditions stay permanently excluded everywhere.
          </CalloutBox>

          <h2>What Counts as Pre-Existing</h2>
          <p>A pre-existing condition is any illness or injury that showed signs, was diagnosed, or was treated before your policy started — including anything that emerged during the waiting period after enrollment. Insurers establish this by reviewing your pet&apos;s veterinary records when you file a claim, and a formal diagnosis is not required: a documented symptom can be enough. If your records note limping months before you enrolled, a later cruciate diagnosis may be classed as pre-existing and excluded. This is why the value of a policy is largely set the day you buy it.</p>
          <p>Because every insurer reviews records at claim time, an undisclosed prior note can lead to a denied claim even if you did not realize it was relevant. The exclusion is not a judgment about honesty; it is how the product is designed. Insurance covers the unknown, and a condition already on the record is, by definition, known.</p>

          <h2>Curable vs. Incurable</h2>
          <p>The most important distinction in this area is curable versus incurable. Incurable or chronic conditions — diabetes, allergies, heart disease, cancer, kidney disease, most orthopedic disease — are generally excluded for the life of the policy, at every carrier. Curable conditions — a single ear infection, a respiratory infection, a urinary tract infection that fully resolved — may become eligible again at some insurers after the pet has gone a defined symptom-free and treatment-free period, often six to eighteen months.</p>
          <p>Not every insurer offers this curable-condition pathway, and the symptom-free window varies, which makes it a genuine point of comparison rather than a universal rule. If your pet has a resolved past issue, the exact wording of an insurer&apos;s curable-condition policy can change whether that condition is ever coverable again — so read it before you assume.</p>

          <h2>Bilateral Exclusions</h2>
          <p>A subtle rule that catches many owners off guard involves bilateral conditions — problems affecting paired body parts such as cruciate ligaments, hips, or eyes. Many insurers treat an issue on one side as making the other side pre-existing too. So if your dog tore one cruciate ligament before enrollment, the matching knee may be excluded as well, on the reasoning that the underlying predisposition was already present. For breeds prone to orthopedic disease, how a policy handles bilateral conditions can matter more than the headline premium.</p>

          <h2>Why This Is the Reason to Enroll Early</h2>
          <p>Because pre-existing exclusions are permanent and broadly defined, every condition your pet develops before coverage starts becomes a permanent gap. Enrolling a young, healthy pet — before anything is on the record — maximizes what a policy can ever cover. Waiting until a pet shows symptoms, or worse until after a diagnosis, locks out coverage for exactly the conditions most likely to generate large bills. This is the single most consequential decision in pet insurance, and it favors acting sooner rather than later.</p>

          <h2>What to Check Before You Buy</h2>
          <p>Two clauses deserve close reading. First, the insurer&apos;s exact definition of a curable condition and the length of the symptom-free window required before it can be re-covered. Second, the bilateral exclusion language, especially if your pet is a breed predisposed to joint or eye problems. Both are buried in the policy document rather than the marketing page, and both can quietly decide whether a future claim is paid. Our guide on <a href="/insurance/pre-existing-conditions">pre-existing conditions</a> walks through the full mechanics, and <a href="/insurance/reading-the-fine-print">reading the fine print</a> covers the surrounding clauses.</p>

          <h2 id="next-steps">Next Steps</h2>
          <p>If your pet is young and healthy, the highest-value move is to enroll before any condition appears. If your pet already has a condition, focus on whether unrelated coverage still makes sense and whether any curable-condition pathway applies.</p>
          <AffiliateDisclosure variant="inline" siteId="vets-co" />
          <ul>
            <li>See when timing helps most in <a href="/insurance/questions/when-should-i-get-pet-insurance">when should I get pet insurance</a>.</li>
            <li>Compare carriers — including how each treats curable conditions — in our <a href="/reviews/best-pet-insurance">best pet insurance comparison</a>.</li>
            <li>Narrow the field with the <a href="/tools/insurance-finder">pet insurance coverage finder</a>, or weigh the overall decision with the <a href="/tools/pet-insurance-worth-it-calculator">worth-it calculator</a>.</li>
          </ul>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />

          <ArticleSourcesList sources={[
            { label: 'A Consumer’s Guide to Pet Insurance', url: 'https://content.naic.org/cipr-topics/pet-insurance', publisher: 'NAIC' },
            { label: 'Pet Insurance Model Act (pre-existing condition definitions)', url: 'https://content.naic.org/', publisher: 'NAIC' },
            { label: 'Sample carrier policy documents (curable vs. incurable, bilateral exclusions)', publisher: 'General carrier policy disclosures (not an endorsement)' },
          ]} />
        </div>
      </ArticleLayout>

      <div className="px-container-sm sm:px-container pb-12">
        <CrossPortfolioCard currentSite="vets-co" contentType="health" />
      </div>
    </>
  )
}
