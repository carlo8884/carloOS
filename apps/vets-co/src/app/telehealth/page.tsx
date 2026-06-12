import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, ScoreMethodology, Breadcrumb, AffiliateDisclosure, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { HubMasthead } from '../../components/HubMasthead'

export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Best Pet Telehealth 2026 — Vetster, AskVet | Vets.co', description: 'We compared pet telehealth services on veterinarian credentials, wait times, consultation quality, and cost. Find the right service for your pet\'s needs.', path: '/telehealth', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Best Pet Telehealth 2026', description: 'Vetster, AskVet, and Chewy Connect compared by the Vets.co editorial team on credentials, wait times, consultation quality, and cost.', url: 'https://vets.co/telehealth', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' })

// Per-service Product schemas — editorial Review ratings mirror the on-page
// ReviewCard scores (no AggregateRating; see buildProductSchema contract).
const vetsterSchema = buildProductSchema({ name: 'Vetster', description: 'Pet telehealth platform — video and chat consultations with licensed veterinarians, including specialists. Pay per consultation.', url: 'https://vetster.com', imageUrl: '', ratingValue: 9.2, priceRange: '50-100' })
const askVetSchema = buildProductSchema({ name: 'AskVet', description: 'Subscription pet telehealth — unlimited chat consultations with licensed veterinarians for a flat monthly fee.', imageUrl: '', ratingValue: 8.8, priceRange: '30' })
const chewyConnectSchema = buildProductSchema({ name: 'Chewy Connect with a Vet', description: 'Telehealth service included with Chewy+ membership, with direct integration into the Chewy pharmacy for prescriptions.', url: 'https://chewy.com', imageUrl: '', ratingValue: 8.4 })
const combinedSchema = combineSchemas(schema, vetsterSchema, askVetSchema, chewyConnectSchema)

const FAQS = [
  { question: 'Can a telehealth vet prescribe medication for my pet?', answer: 'It depends on your state. Most states require a veterinarian-client-patient relationship (VCPR) before a vet can prescribe, and many states only allow a VCPR to be established through an in-person exam. A minority of states permit establishing a VCPR remotely. Platforms that match you with vets licensed in your state (such as Vetster) can prescribe where state rules allow it; chat-only services are generally more limited. For refills of existing prescriptions, your regular clinic is usually the faster route.' },
  { question: 'When is telehealth appropriate versus an in-person visit?', answer: 'Telehealth works well for triage ("does this need a clinic visit?"), minor illness assessment, medication and nutrition questions, post-op check-ins, and behavior concerns. It cannot replace a physical exam, blood work, imaging, surgery, or emergency care. Signs like breathing difficulty, pale gums, collapse, suspected poisoning, or inability to urinate need an emergency clinic immediately — not a telehealth appointment.' },
  { question: 'How much does a pet telehealth consultation cost?', answer: 'Pay-per-consult platforms typically run $50–100 per video consultation. Subscription services run around $30/month for unlimited chat consultations. Some retail memberships (such as Chewy+) include telehealth access as a bundled benefit. Per-consult video is generally better for one-off concerns; subscriptions favor owners with frequent questions — new puppies, senior pets, or multi-pet households.' },
  { question: 'Does pet insurance cover telehealth visits?', answer: 'Coverage varies by carrier and plan. Some insurers reimburse telehealth consultations under illness or exam-fee coverage, and several carriers bundle their own 24/7 vet helplines with every policy. Check your policy\'s exam-fee and telehealth language before assuming a consult is reimbursable — wellness-only plans typically exclude it.' },
  { question: 'Are the vets on telehealth platforms actually licensed?', answer: 'On the platforms we compared, yes — consultations are with licensed veterinarians, and the stronger platforms match you with a vet licensed in your own state or province, which is what makes any prescription legally valid. Before using a platform we have not reviewed, confirm that it discloses its veterinarians\' licensing rather than offering anonymous "pet experts."' },
]

const PICKS = [
  { label: 'Best Overall', name: 'Vetster', subtitle: 'Video + chat · Licensed DVMs', href: '#vetster' },
  { label: 'Best Subscription', name: 'AskVet', subtitle: 'Unlimited monthly · $30/mo', href: '#askvet' },
  { label: 'Chewy Integration', name: 'Chewy Connect', subtitle: 'Linked to Chewy Rx', href: '#chewy' },
]

export default function TelehealthPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
      <HubMasthead
        eyebrow="Telehealth Compared · June 2026"
        title="Best Pet Telehealth 2026"
        intro="Talk to a licensed vet tonight — without a waiting room. We compared the major platforms on credential requirements, wait times, and consultation quality."
        manifestKey="vets-co:category-telehealth"
        fallbackKey="vets-co:hero"
        imageAlt="A laptop and notepad on a desk, set up for a remote consultation"
        primaryCta={{ href: '#vetster', label: 'See the top pick' }}
        secondaryCta={{ href: '/find-a-vet', label: 'Find an in-person vet' }}
      />
      <QuickPicks items={PICKS} />
      <Breadcrumb siteId="vets-co" items={[{ name: "Home", href: "/" }, { name: "Telehealth" }]} />
      <div className="px-container-sm sm:px-container py-12">
        <div className="grid lg:grid-cols-[1fr_270px] gap-12">
          <div>
            {/* TL;DR — what AI engines should quote */}
            <p className="text-lg text-brand-text-mid leading-relaxed italic mb-8">
              <strong className="not-italic">TL;DR.</strong> Vetster is our recommended overall pick for 2026 — video and chat consultations with licensed vets (including specialists), no monthly commitment, and rigorous state-level licensing that makes prescriptions valid where state rules allow. AskVet is the value pick for frequent questions at $30/month for unlimited chat. Chewy Connect makes sense mainly if you already hold a Chewy+ membership. None of them replace a physical exam — use telehealth for triage and questions, not emergencies.
            </p>
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-lg p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">When Telehealth Works — and When It Doesn&apos;t</div>
              <p className="text-sm text-brand-text-mid leading-relaxed m-0">Telehealth is ideal for: minor illness assessment, medication questions, post-op monitoring, behavioral concerns, nutrition advice, deciding whether an in-person visit is needed. It cannot replace: physical examination, blood work, X-rays, surgery, emergency care. If your pet is in crisis, go to an emergency vet — do not wait for a telehealth appointment.</p>
            </div>
            <ScoreMethodology />
            <AffiliateDisclosure variant="inline" siteId="vets-co" />
            <ReviewCard id="vetster" badge="Best Overall" name="Vetster" winner subtitle="Video + chat · Board-certified vets available · No monthly commitment" score={9.2}
              description={<p>Vetster is a comprehensive pet telehealth platform — licensed veterinarians available by video or chat, typically within minutes during peak hours. Their credentialing standards are rigorous: all vets are licensed in the jurisdiction where the pet owner is located, making prescriptions legally valid. They offer both general practitioners and specialists (including veterinary behaviorists, dermatologists, and internal medicine specialists). Pay per consultation — no monthly commitment required.</p>}
              specs={[{ label: 'Consultation Type', value: 'Video + chat', highlight: 'good' }, { label: 'Vet Credentials', value: 'Licensed DVMs required', highlight: 'good' }, { label: 'Wait Time', value: '< 15 min typical', highlight: 'good' }, { label: 'Specialists', value: 'Yes — multiple specialties', highlight: 'good' }, { label: 'Prescriptions', value: 'Yes (jurisdiction-dependent)' }, { label: 'Monthly Fee', value: 'Pay-per-consult' }]}
              pros={['Specialists available (behaviorists, dermatologists)', 'Rigorous licensing standards', 'No monthly commitment', 'Prescription capability']}
              cons={['Higher per-consult cost than subscription services', 'Wait times can extend during peak hours']}
              price="$50–100 per consultation" ctaText="Book a Consultation →" ctaHref="/go/vetster/telehealth" ctaAffiliateProgram="vetster" ctaAffiliateProduct="telehealth" />
            <ReviewCard id="askvet" badge="Best Subscription" name="AskVet" subtitle="Unlimited monthly consultations · $30/month" score={8.8}
              description={<p>AskVet offers an unlimited monthly subscription model — $30/month for unlimited chat consultations with licensed veterinarians. For pet owners who have frequent questions (new puppy, senior pet, multiple pets, chronic conditions), the subscription model represents excellent value compared to per-consult pricing. Chat-only (no video) limits the depth of physical assessment, but the convenience and value are genuine for appropriate use cases.</p>}
              specs={[{ label: 'Consultation Type', value: 'Chat only' }, { label: 'Monthly Cost', value: '$30/month unlimited', highlight: 'good' }, { label: 'Wait Time', value: '< 5 min typical', highlight: 'good' }, { label: 'Specialists', value: 'General practice only' }, { label: 'Prescriptions', value: 'Limited' }]}
              pros={['Unlimited consultations for $30/month', 'Very fast response times', 'Good for frequent questions']}
              cons={['Chat only — no video examination', 'Limited specialist access', 'Less comprehensive than Vetster for complex cases']}
              price="$30/month unlimited" ctaText="Start Free Trial →" ctaHref="/go/askvet/telehealth" ctaAffiliateProgram="askvet" ctaAffiliateProduct="telehealth" />
            <ReviewCard id="chewy" badge="Best for Chewy Customers" name="Chewy Connect with a Vet" subtitle="Integrated with Chewy pharmacy · Free with Chewy+ membership" score={8.4}
              description={<p>Chewy Connect with a Vet is included with Chewy+ membership ($19.99/month, which also provides free shipping and other benefits). The integration with Chewy&apos;s pharmacy is the standout feature — prescriptions from Connect consultations can be filled directly through Chewy and shipped to your door. Best suited for Chewy customers who already have the membership for shipping benefits; the telehealth access is a meaningful bonus rather than the primary value proposition.</p>}
              specs={[{ label: 'Cost', value: 'Included with Chewy+', highlight: 'good' }, { label: 'Chewy Pharmacy', value: 'Direct integration', highlight: 'good' }, { label: 'Consultation Type', value: 'Video + chat' }, { label: 'Availability', value: 'Extended hours' }]}
              pros={['Included with Chewy+ membership', 'Direct Chewy pharmacy integration', 'Convenient for existing Chewy customers']}
              cons={['Only valuable if you already use Chewy+', 'Less specialist access than Vetster']}
              price="Included with Chewy+ ($19.99/month)" editorial />

            <h2 className="font-display text-2xl font-bold text-brand-dark mt-12 mb-6">Frequently Asked Questions</h2>
            <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">When to Go to Emergency Instead</div>
              <p className="text-xs text-brand-text-mid leading-relaxed">Pale/blue gums, breathing difficulty, collapse, suspected poisoning, severe injury, inability to urinate (cats), or any rapidly worsening condition requires in-person emergency care immediately.</p>
              <Link href="/find-a-vet" className="block mt-3 text-xs font-bold text-brand-primary no-underline hover:underline">Find an emergency vet →</Link>
            </div>
            <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance every Tuesday." source="telehealth-review" />
          </aside>
        </div>
      </div>
    </>
  )
}
