import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "When to Take Your Pet to the Vet — A Decision Guide | Vets.co", description: "Some signs warrant watchful waiting; others need same-day or emergency care. Learn which symptoms mean it is time to call the vet and which cannot wait.", path: '/guides/when-to-go-to-the-vet', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'When to Take Your Pet to the Vet', description: 'A decision guide for which symptoms warrant watchful waiting, same-day care, or emergency care.', url: 'https://vets.co/guides/when-to-go-to-the-vet', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })
const FAQS = [
  { question: "My pet vomited once but seems fine — should I worry?", answer: "A single episode of vomiting in an otherwise bright, alert pet that is still eating and drinking normally is often not urgent, and watchful waiting with a brief period of dietary care may be reasonable. However, you should seek care if vomiting repeats, if the pet becomes lethargic, stops eating or drinking, has a swollen or painful abdomen, vomits blood, or if you suspect they ate something dangerous. When uncertain or if your pet is very young, very old, or has existing conditions, call your veterinarian for guidance." },
  { question: "How do I know if something is a true emergency?", answer: "Certain signs are always emergencies: difficulty breathing, severe bleeding, collapse, repeated or non-stop seizures, suspected bloat, a male cat unable to urinate, suspected poisoning, major trauma, pale or blue gums, and a distended painful abdomen. These are time-critical and warrant going to an emergency hospital immediately. Beyond these, any rapid worsening, severe pain, or your strong instinct that something is seriously wrong justifies emergency care. It is always better to be checked unnecessarily than to wait too long." },
  { question: "When is watchful waiting reasonable?", answer: "Watchful waiting can be appropriate for mild, isolated signs in a pet that is otherwise bright, eating, drinking, and behaving normally — a single soft stool, brief mild vomiting, or minor stiffness that resolves. The key is to monitor closely for a short, defined period and seek care if signs persist beyond a day or two, worsen, or are joined by other symptoms. Watchful waiting is never appropriate for the emergency signs, for very young or very old pets, or for pets with serious underlying conditions, where prompt veterinary advice is safer." },
]
export default function WhenToGoPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'When to Take Your Pet to the Vet', subtitle: 'Pet owners constantly face the same question: is this something to watch, something to call about, or something that cannot wait? This decision guide sorts common signs into watchful waiting, same-day care, and emergency care — and gives clear rules for when to escalate — so you can act with confidence rather than worry.', category: 'Owner Guide', authorName: 'Vets.co Editorial', publishedAt: 'June 2026', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides' }, { name: 'When to Go to the Vet', href: '/guides/when-to-go-to-the-vet' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Three Buckets</div>
            {[['Watch', 'Mild, isolated, bright pet'], ['Same-day', 'Urgent but stable'], ['Emergency', 'Life-threatening, go now'], ['When unsure', 'Call your vet']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Emergency Signs', href: '/health/emergency-signs' }, { label: 'ER vs. Urgent Care', href: '/guides/er-vs-urgent-care' }, { label: 'What to Expect at the Vet', href: '/guides/what-to-expect-at-the-vet' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Owner Newsletter" subtitle="Practical guidance weekly." source="guides-when-to-go" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="warning" title="Trust your instinct on serious signs">
            You know your pet better than anyone. If your gut says something is seriously wrong — even if you cannot name the sign — it is reasonable to seek care. Owners are often the first to detect that something is off, and acting on that instinct saves lives.
          </CalloutBox>

          <h2>The Three Buckets</h2>
          <p>Most situations sort into three categories. <strong>Watchful waiting</strong> suits mild, isolated signs in a pet that is otherwise bright, eating, drinking, and acting normally. <strong>Same-day or urgent care</strong> is for problems that are not immediately life-threatening but should not wait days. <strong>Emergency care</strong> is for time-critical, life-threatening situations. Sorting a sign into the right bucket — and erring toward caution when unsure — is the core skill of responsible pet ownership.</p>

          <h2>Signs You Can Often Watch Briefly</h2>
          <p>For a pet that remains alert, eating, and behaving normally, mild and isolated signs can sometimes be monitored for a short, defined period: a single soft stool, one episode of mild vomiting, brief minor stiffness that resolves, or a small superficial scrape. Watch closely, and seek care if the sign persists beyond a day or two, worsens, or is joined by other symptoms. This watchful approach is never appropriate for very young or very old pets, or those with serious underlying conditions.</p>

          <h2>Signs That Warrant Same-Day Care</h2>
          <p>Some problems need prompt but not emergency attention: persistent vomiting or diarrhea without collapse, a limp that does not improve, an eye that is red or squinting, a wound that may need cleaning or closing, ear pain, a urinary issue in a pet still able to urinate, or a noticeable change in appetite, thirst, or energy. These warrant a call to your veterinarian or a visit to urgent care the same day, before they escalate.</p>

          <h2>Signs That Are Emergencies</h2>
          <p>Certain signs are always emergencies requiring immediate care: difficulty breathing; severe or uncontrolled bleeding; collapse or inability to stand; seizures that repeat or will not stop; a swollen abdomen with unproductive retching (suspected bloat); a male cat straining unable to urinate; suspected poisoning; major trauma; and pale, white, or blue gums. Do not wait or watch these — go to an emergency hospital. For a fuller list, see our emergency signs guide.</p>

          <h2>When You Are Not Sure</h2>
          <p>Uncertainty is common, and there is a simple rule: when in doubt, call. Your veterinary clinic, or an emergency hospital after hours, can help you decide whether to watch, come in, or treat the situation as an emergency, often with a few questions over the phone. Describing the sign, when it started, and how your pet is otherwise doing helps them advise you. It is always better to ask and be reassured than to wait on something serious.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />
        </div>
      </ArticleLayout>
    </>
  )
}
