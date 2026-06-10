import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "ER vs. Urgent Care vs. Regular Vet — Where to Go | Vets.co", description: "Knowing whether to go to the emergency hospital, an urgent care clinic, or your regular vet saves time, money, and sometimes lives. Here is how to decide.", path: '/guides/er-vs-urgent-care', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'ER vs. Urgent Care vs. Regular Vet', description: 'How to decide between the emergency hospital, urgent care, and your regular veterinarian.', url: 'https://vets.co/guides/er-vs-urgent-care', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })
const FAQS = [
  { question: "When should I go straight to the emergency hospital?", answer: "Go to the emergency hospital immediately for true emergencies: difficulty breathing, severe or uncontrolled bleeding, collapse or inability to stand, suspected bloat (a swollen abdomen with unproductive retching in a large dog), a male cat straining unable to urinate, seizures that do not stop or repeat, suspected poisoning, major trauma, or any rapid deterioration. These situations are time-critical and may not survive the wait for a regular appointment. When in doubt about a serious sign, an emergency hospital is the safest choice." },
  { question: "What is a pet urgent care clinic for?", answer: "Pet urgent care clinics fill the gap between routine appointments and the emergency room. They handle problems that need same-day attention but are not immediately life-threatening — such as minor wounds, ear infections, vomiting or diarrhea without collapse, limping, or eye irritation — often with shorter waits and lower costs than an emergency hospital. They are a good option when your regular vet is unavailable and the problem is urgent but stable. For anything life-threatening, however, go to a full emergency hospital." },
  { question: "Can my regular vet handle urgent problems?", answer: "Often yes, during business hours. Many general practices reserve time for same-day sick visits and can address acute but stable problems for established patients. Calling your regular clinic first is reasonable for non-emergencies — they know your pet's history and can advise whether to come in, go to urgent care, or head to the emergency hospital. The key is matching the severity and timing of the problem to the right setting, and never delaying genuine emergencies to wait for a regular appointment." },
]
export default function ERvsUrgentPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'ER vs. Urgent Care vs. Regular Vet', subtitle: 'When something is wrong with your pet, knowing where to go — the emergency hospital, an urgent care clinic, or your regular veterinarian — saves time, money, and sometimes your pet\'s life. This guide explains what each setting is for and how to match the severity and timing of a problem to the right level of care.', category: 'Owner Guide', authorName: 'Vets.co Editorial', publishedAt: 'June 2026', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides' }, { name: 'ER vs. Urgent Care', href: '/guides/er-vs-urgent-care' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Where to Go</div>
            {[['Emergency hospital', 'Life-threatening, 24/7'], ['Urgent care', 'Same-day, stable problems'], ['Regular vet', 'Routine and known issues'], ['Call first', 'When unsure and stable']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'When to Go to the Vet', href: '/guides/when-to-go-to-the-vet' }, { label: 'Emergency Vet Costs', href: '/guides/emergency-vet-costs' }, { label: 'Emergency Signs', href: '/health/emergency-signs' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Owner Newsletter" subtitle="Practical guidance weekly." source="guides-er-vs-urgent" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="warning" title="When in doubt about an emergency, go">
            If your pet shows a potentially life-threatening sign — trouble breathing, collapse, severe bleeding, suspected bloat, inability to urinate, repeated seizures — do not wait or try to decide on the cheapest option. Go to the emergency hospital. The cost of a precautionary visit is far smaller than the cost of waiting too long.
          </CalloutBox>

          <h2>The Three Levels of Care</h2>
          <p>Pet healthcare, like human healthcare, has tiers. Your <strong>regular veterinarian</strong> handles routine wellness, preventive care, chronic disease management, and many acute but stable problems during business hours. <strong>Urgent care</strong> clinics address same-day problems that are not life-threatening but should not wait days. The <strong>emergency hospital</strong> handles critical, time-sensitive situations around the clock with intensive-care capability. Matching the problem to the right tier gets your pet appropriate care efficiently.</p>

          <h2>When to Go to the Emergency Hospital</h2>
          <p>Some situations are unambiguous emergencies: difficulty breathing, severe or uncontrolled bleeding, collapse, suspected bloat, a male cat unable to urinate, seizures that repeat or do not stop, suspected poisoning, major trauma, and rapid deterioration. These cannot safely wait for a regular appointment and warrant going straight to a 24-hour emergency hospital. When a serious sign leaves you uncertain, treat it as an emergency, because the consequences of underreacting can be irreversible.</p>

          <h2>When Urgent Care Fits</h2>
          <p>Urgent care clinics serve the middle ground — problems needing same-day attention that are not immediately dangerous. Minor wounds, ear infections, vomiting or diarrhea in an otherwise stable pet, limping, and eye irritation often fit here. Urgent care typically offers shorter waits and lower costs than the emergency hospital while still providing prompt attention. It is especially useful when your regular vet is closed or fully booked and the problem is urgent but stable.</p>

          <h2>When Your Regular Vet Is Right</h2>
          <p>For routine care, preventive visits, ongoing management of chronic conditions, and many acute-but-stable problems during business hours, your regular veterinarian is the ideal choice. They know your pet's history, which improves both diagnosis and continuity. Many practices hold same-day sick slots for established patients. Calling your regular clinic first for a non-emergency is sensible — they can advise whether to come in, use urgent care, or escalate to the emergency hospital.</p>

          <h2>Making the Call Quickly</h2>
          <p>In the moment, two questions guide you: how severe is this, and how fast is it changing? Severe or rapidly worsening signs point to the emergency hospital. Urgent but stable problems suit urgent care or a same-day visit with your regular vet. Stable, non-urgent issues belong at your regular clinic. Keep the contact details for all three handy in advance — your regular vet, a nearby urgent care if available, and the nearest 24-hour emergency hospital — so you are not searching during a crisis.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />
        </div>
      </ArticleLayout>
    </>
  )
}
