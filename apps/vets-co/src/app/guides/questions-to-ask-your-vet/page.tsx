import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "Questions to Ask Your Vet — Get the Most From Every Visit | Vets.co", description: "The right questions turn a rushed appointment into clear, confident care. Use this list to ask about diagnosis, treatment options, costs, and follow-up.", path: '/guides/questions-to-ask-your-vet', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Questions to Ask Your Vet', description: 'A practical list of questions to ask at a veterinary visit for clearer, more confident care.', url: 'https://vets.co/guides/questions-to-ask-your-vet', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })
const FAQS = [
  { question: "Is it okay to ask the vet about cost?", answer: "Absolutely — asking about cost is reasonable and expected, and a good veterinary team welcomes the conversation. You can ask for an estimate before procedures, what is essential versus optional, whether tests can be staged, and if there are lower-cost alternatives that still address the problem. Veterinary teams routinely tailor plans to budgets when they understand the constraint. Far from being awkward, an open cost discussion leads to better decisions and prevents the surprise of an unexpected bill." },
  { question: "What should I ask when my pet is prescribed a new medication?", answer: "Ask what the medication is for, how and when to give it, whether it should be given with food, what side effects to watch for, what to do if you miss a dose, and how long the course lasts. Confirm how it interacts with any other medications or supplements your pet takes. Also ask whether and when a recheck or follow-up bloodwork is needed. Understanding these points improves the chance the treatment works and that you catch any problems early." },
  { question: "How do I make sure I understand the diagnosis?", answer: "Ask the veterinarian to explain the diagnosis in plain language, what caused it, whether it is curable or manageable, and what the outlook is. Ask what the treatment options are, including doing nothing, and the pros and cons of each. Request written instructions or a summary, and ask what signs at home should prompt you to call back. It is always appropriate to say you do not understand something and ask for clarification — clear communication is part of good veterinary care." },
]
export default function QuestionsToAskPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Questions to Ask Your Vet', subtitle: 'A veterinary visit can feel rushed, and it is easy to leave with unanswered questions. Coming prepared with the right questions — about the diagnosis, the options, the costs, and the follow-up — turns an appointment into clear, confident care and helps you and your veterinarian make the best decisions together.', category: 'Owner Guide', authorName: 'Vets.co Editorial', authorAvatar: '🐾', publishedAt: 'June 2026', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides' }, { name: 'Questions to Ask', href: '/guides/questions-to-ask-your-vet' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Ask About</div>
            {[['Diagnosis', 'What and why'], ['Options', 'Including doing nothing'], ['Cost', 'Estimate and alternatives'], ['Follow-up', 'Rechecks and warning signs']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'What to Expect at the Vet', href: '/guides/what-to-expect-at-the-vet' }, { label: 'Choosing a Veterinarian', href: '/guides/choosing-a-veterinarian' }, { label: 'How to Afford Vet Care', href: '/guides/how-to-afford-vet-care' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Owner Newsletter" subtitle="Practical guidance weekly." source="guides-questions" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="info" title="There are no bad questions">
            Veterinary teams want you to understand your pet's care. Asking questions — even ones that feel basic — leads to better outcomes, because a treatment plan only works if you understand and can follow it. Never leave a visit confused; ask for clarification.
          </CalloutBox>

          <h2>Questions About the Diagnosis</h2>
          <p>When your pet is diagnosed with a condition, seek to understand it fully. Ask what the condition is in plain language, what caused it, whether it is curable or something to be managed long-term, and what the expected outlook is. Ask how confident the diagnosis is and whether further testing would clarify it. Understanding the diagnosis is the foundation for every subsequent decision, so it is worth taking the time to grasp it before moving to treatment.</p>

          <h2>Questions About Treatment Options</h2>
          <p>Rarely is there only one path. Ask what the treatment options are, including the option of monitoring or doing nothing, and the benefits, risks, and likely outcomes of each. Ask what you would do if this were your own pet, and what the consequences of delaying treatment might be. Understanding the range of options — not just the first recommendation — lets you choose a plan that fits your pet, your circumstances, and your values.</p>

          <h2>Questions About Medications</h2>
          <p>If a medication is prescribed, confirm the essentials: what it is for, how and when to give it, whether with food, common side effects to watch for, what to do about a missed dose, and how long the course runs. Ask about interactions with other medications or supplements, and whether monitoring bloodwork or a recheck is needed. Getting these details right improves the odds the treatment succeeds and that problems are caught early.</p>

          <h2>Questions About Cost</h2>
          <p>Cost questions are entirely appropriate. Ask for an estimate before procedures, what is essential versus optional, whether tests or treatments can be staged over time, and if lower-cost alternatives exist that still address the problem. Veterinary teams routinely build plans around real budgets when they know the constraint. An open cost conversation prevents surprise bills and helps you and the team find the best care within your means.</p>

          <h2>Questions About Follow-Up</h2>
          <p>Before you leave, clarify the follow-up plan. Ask when a recheck is needed, what improvement to expect and by when, and which signs at home should prompt you to call back urgently. Request written instructions or a summary so you do not have to rely on memory. Knowing exactly what to watch for and when to return closes the loop on the visit and keeps your pet's care on track between appointments.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />
        </div>
      </ArticleLayout>
    </>
  )
}
