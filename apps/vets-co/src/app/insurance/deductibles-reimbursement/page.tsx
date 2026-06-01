import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, ReviewCard, AffiliateDisclosure } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "Pet Insurance Deductibles & Reimbursement Explained | Vets.co", description: "Annual vs. per-condition deductibles, reimbursement rates, and annual limits all shape your real cost. Learn how to balance premium against out-of-pocket risk.", path: '/insurance/deductibles-reimbursement', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Pet Insurance Deductibles and Reimbursement', description: 'How deductibles, reimbursement rates, and annual limits interact to determine your real cost.', url: 'https://vets.co/insurance/deductibles-reimbursement', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })
const FAQS = [
  { question: "What is the difference between an annual and a per-condition deductible?", answer: "An annual deductible is paid once per policy year, after which all covered claims for the rest of the year are reimbursed without further deductible. A per-condition deductible is paid once for each new condition, but then never again for that condition in future years — useful for chronic illnesses that recur annually. Annual deductibles are simpler and common; per-condition deductibles can favor pets with long-term chronic diseases. Which is better depends on whether your pet faces many small problems or one ongoing condition." },
  { question: "Does a higher deductible always save money?", answer: "A higher deductible lowers your monthly premium, but it raises the amount you pay out of pocket before reimbursement begins. It saves money overall only if you rarely claim or if you are using insurance purely as catastrophe protection and can absorb the deductible when a big bill arrives. If your pet has frequent moderate expenses, a lower deductible may cost less in total despite the higher premium. The right choice depends on your cash reserves and how you expect to use the policy." },
  { question: "How do annual limits change the math?", answer: "The annual limit caps total reimbursement per year. With a low limit, a single major illness can exhaust your coverage, leaving you fully responsible for the rest — which undermines the whole point of insurance. Unlimited or high annual limits cost more in premium but provide true catastrophe protection, which is the main reason most people buy insurance in the first place. Many advisors suggest prioritizing a high annual limit even if it means accepting a higher deductible to keep the premium reasonable." },
]
export default function DeductiblesPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Deductibles and Reimbursement', subtitle: 'The deductible, reimbursement rate, and annual limit together determine what a pet insurance policy actually costs you when you file a claim. These three settings trade off against your monthly premium, and understanding how they interact lets you tune a policy to your budget and risk tolerance rather than guessing.', category: 'Insurance Guide', authorName: 'Vets.co Editorial', authorAvatar: '🐾', publishedAt: 'June 2026', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Insurance', href: '/insurance' }, { name: 'Deductibles & Reimbursement', href: '/insurance/deductibles-reimbursement' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Cost Levers</div>
            {[['Deductible', 'Higher = lower premium'], ['Reimbursement', 'Higher = higher premium'], ['Annual limit', 'Higher = higher premium'], ['Net cost', 'Premium + out-of-pocket']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'How Pet Insurance Works', href: '/insurance/how-pet-insurance-works' }, { label: 'Reading the Fine Print', href: '/insurance/reading-the-fine-print' }, { label: 'What Pet Insurance Covers', href: '/insurance/what-pet-insurance-covers' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Insurance Decision Guide" subtitle="Our plain-English checklist." source="insurance-deductibles" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="info" title="Optimize for the worst case, not the average">
            Because the purpose of insurance is to protect against rare catastrophic bills, it usually pays to prioritize a high annual limit and an acceptable reimbursement rate, then set the deductible at whatever level keeps the premium affordable. Skimping on the limit to lower the premium defeats the point.
          </CalloutBox>

          <h2>The Deductible</h2>
          <p>The deductible is the amount you pay out of pocket before the insurer begins reimbursing. It comes in two structures. An <strong>annual deductible</strong> is met once per policy year; after that, all covered claims that year are reimbursed without further deductible. A <strong>per-condition deductible</strong> applies once per new condition but does not reset each year, which can favor pets with chronic, recurring illnesses. A higher deductible lowers your premium but increases what you pay before coverage activates.</p>

          <h2>The Reimbursement Rate</h2>
          <p>After the deductible, the insurer reimburses a fixed percentage of covered costs — commonly 70%, 80%, or 90% — and you pay the remainder. A higher reimbursement rate reduces your share of each claim but raises your premium. For owners who want minimal surprise during a large claim, a 90% rate is attractive; for those prioritizing a low premium, 70% with a high annual limit can be a sensible trade.</p>

          <h2>The Annual Limit</h2>
          <p>The annual limit is the maximum the insurer will reimburse in a policy year, ranging from modest caps to unlimited. This number defines your catastrophe protection. A serious illness or major surgery can run into five figures, and a low annual limit can be exhausted in a single event, leaving you fully exposed thereafter. Because protecting against exactly these rare, ruinous bills is the core reason to insure, the annual limit deserves close attention.</p>

          <h2>How They Interact</h2>
          <p>These three settings trade off against your premium. Lowering the deductible, raising the reimbursement rate, or raising the annual limit each increases the premium; doing the opposite reduces it. The art is balancing predictable monthly cost against your exposure when a claim hits. Working an example through — pick a hypothetical $5,000 bill and calculate your out-of-pocket under different combinations — quickly reveals which structure fits your finances.</p>

          <h2>Choosing Your Settings</h2>
          <p>Start from your cash reality. If you keep an emergency fund and want catastrophe protection, choose a high annual limit, a moderate reimbursement rate, and a higher deductible to keep the premium down. If even moderate bills strain your budget, lean toward a lower deductible and higher reimbursement rate, accepting a higher premium for smoother costs. Either way, avoid sacrificing the annual limit, since that is the protection you are really buying.</p>

          <h2 id="quote">Model the Levers on Real Quotes</h2>
          <p>The fastest way to see how deductible, reimbursement rate, and annual limit move your premium is to run the same pet through a couple of carriers and adjust the sliders. The two below let you do that; for the full side-by-side, see our <a href="/reviews/best-pet-insurance">best pet insurance comparison</a>.</p>
          <AffiliateDisclosure variant="inline" siteId="vets-co" />
          <ReviewCard
            id="healthy-paws"
            badge="Simple Levers"
            badgeEmoji="⚡"
            name="Healthy Paws"
            subtitle="One plan, you set the deductible and reimbursement rate"
            score={8.7}
            winner
            description={
              <p>A single accident-and-illness plan where you choose the deductible and reimbursement rate, which makes the lever trade-offs easy to model. Known for fast reimbursement on the pay-then-claim model. Confirm the annual-limit structure when you quote — that is the catastrophe protection you are really buying.</p>
            }
            specs={[
              { label: 'Plan', value: 'Single A&I' },
              { label: 'Adjustable', value: 'Deductible + rate', highlight: 'good' },
              { label: 'Reimbursement', value: 'Fast', highlight: 'good' },
            ]}
            pros={['Easy to model levers', 'Fast claims', 'Simple single plan']}
            cons={['No wellness add-on', 'Confirm annual-limit structure']}
            price="Quote-based"
            ctaText="Get a Quote →"
            ctaHref="/go/healthy-paws/home?s=insurance-deductibles-reimbursement"
            ctaAffiliateProgram="healthy-paws"
            ctaAffiliateProduct="home"
          />
          <ReviewCard
            id="pets-best"
            badge="Tiered Options"
            badgeEmoji="🐾"
            name="Pets Best"
            subtitle="Multiple deductible and reimbursement combinations"
            score={8.2}
            description={
              <p>Offers several plan tiers with a range of deductible and reimbursement combinations, which is helpful when you want to compare how each lever shifts the premium. Run a hypothetical large bill through different settings to find the structure that matches your cash reality.</p>
            }
            specs={[
              { label: 'Plan tiers', value: 'Multiple', highlight: 'good' },
              { label: 'Lever range', value: 'Wide' },
              { label: 'Model', value: 'Pay-then-claim' },
            ]}
            pros={['Wide lever range to model', 'Several plan tiers', 'No upper age limit']}
            cons={['More options to compare', 'Standard exclusions apply']}
            price="Quote-based"
            ctaText="Get a Quote →"
            ctaHref="/go/pets-best/home?s=insurance-deductibles-reimbursement"
            ctaAffiliateProgram="pets-best"
            ctaAffiliateProduct="home"
          />

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />
        </div>
      </ArticleLayout>
    </>
  )
}
