import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, ScoreMethodology, Breadcrumb} from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Best Pet Telehealth 2025 — Vetster, AskVet | Vets.co', description: 'We compared pet telehealth services on veterinarian credentials, wait times, consultation quality, and cost. Find the right service for your pet\'s needs.', path: '/telehealth', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Best Pet Telehealth 2025', description: 'Vetster, AskVet, and Chewy Connect compared by veterinarians.', url: 'https://vets.co/telehealth', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

const PICKS = [
  { label: 'Best Overall', emoji: '🏆', name: 'Vetster', subtitle: 'Video + chat · Licensed DVMs', href: '#vetster' },
  { label: 'Best Subscription', emoji: '📋', name: 'AskVet', subtitle: 'Unlimited monthly · $30/mo', href: '#askvet' },
  { label: 'Chewy Integration', emoji: '🐾', name: 'Chewy Connect', subtitle: 'Linked to Chewy Rx', href: '#chewy' },
]

export default function TelehealthPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-4">Telehealth Compared · May 2025</span>
        <h1 className="font-display font-bold text-white tracking-tight leading-tight mb-4 max-w-2xl" style={{ fontSize: 'clamp(26px, 4vw, 48px)' }}>Best Pet Telehealth 2025</h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">Talk to a licensed vet tonight — without a waiting room. We compared the major platforms on credential requirements, wait times, and consultation quality.</p>
      </div>
      <QuickPicks items={PICKS} />
      <Breadcrumb siteId="vets-co" items={[{ name: "Home", href: "/" }, { name: "Telehealth" }]} />
      <div className="px-container-sm sm:px-container py-12">
        <div className="grid lg:grid-cols-[1fr_270px] gap-12">
          <div>
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-lg p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">When Telehealth Works — and When It Doesn&apos;t</div>
              <p className="text-sm text-brand-text-mid leading-relaxed m-0">Telehealth is ideal for: minor illness assessment, medication questions, post-op monitoring, behavioral concerns, nutrition advice, deciding whether an in-person visit is needed. It cannot replace: physical examination, blood work, X-rays, surgery, emergency care. If your pet is in crisis, go to an emergency vet — do not wait for a telehealth appointment.</p>
            </div>
            <ScoreMethodology />
            <ReviewCard id="vetster" badge="Best Overall" badgeEmoji="🏆" name="Vetster" winner subtitle="Video + chat · Board-certified vets available · No monthly commitment" score={9.2}
              description={<p>Vetster is the most comprehensive pet telehealth platform — licensed veterinarians available by video or chat, typically within minutes during peak hours. Their credentialing standards are rigorous: all vets are licensed in the jurisdiction where the pet owner is located, making prescriptions legally valid. They offer both general practitioners and specialists (including veterinary behaviorists, dermatologists, and internal medicine specialists). Pay per consultation — no monthly commitment required.</p>}
              specs={[{ label: 'Consultation Type', value: 'Video + chat', highlight: 'good' }, { label: 'Vet Credentials', value: 'Licensed DVMs required', highlight: 'good' }, { label: 'Wait Time', value: '< 15 min typical', highlight: 'good' }, { label: 'Specialists', value: 'Yes — multiple specialties', highlight: 'good' }, { label: 'Prescriptions', value: 'Yes (jurisdiction-dependent)' }, { label: 'Monthly Fee', value: 'Pay-per-consult' }]}
              pros={['Specialists available (behaviorists, dermatologists)', 'Rigorous licensing standards', 'No monthly commitment', 'Prescription capability']}
              cons={['Higher per-consult cost than subscription services', 'Wait times can extend during peak hours']}
              price="$50–100 per consultation" ctaText="Book a Consultation →" ctaHref="/go/vetster/telehealth" ctaAffiliateProgram="vetster" ctaAffiliateProduct="telehealth" />
            <ReviewCard id="askvet" badge="Best Subscription" badgeEmoji="📋" name="AskVet" subtitle="Unlimited monthly consultations · $30/month" score={8.8}
              description={<p>AskVet offers an unlimited monthly subscription model — $30/month for unlimited chat consultations with licensed veterinarians. For pet owners who have frequent questions (new puppy, senior pet, multiple pets, chronic conditions), the subscription model represents excellent value compared to per-consult pricing. Chat-only (no video) limits the depth of physical assessment, but the convenience and value are genuine for appropriate use cases.</p>}
              specs={[{ label: 'Consultation Type', value: 'Chat only' }, { label: 'Monthly Cost', value: '$30/month unlimited', highlight: 'good' }, { label: 'Wait Time', value: '< 5 min typical', highlight: 'good' }, { label: 'Specialists', value: 'General practice only' }, { label: 'Prescriptions', value: 'Limited' }]}
              pros={['Unlimited consultations for $30/month', 'Very fast response times', 'Good for frequent questions']}
              cons={['Chat only — no video examination', 'Limited specialist access', 'Less comprehensive than Vetster for complex cases']}
              price="$30/month unlimited" ctaText="Start Free Trial →" ctaHref="/go/askvet/telehealth" ctaAffiliateProgram="askvet" ctaAffiliateProduct="telehealth" />
            <ReviewCard id="chewy" badge="Best for Chewy Customers" badgeEmoji="🐾" name="Chewy Connect with a Vet" subtitle="Integrated with Chewy pharmacy · Free with Chewy+ membership" score={8.4}
              description={<p>Chewy Connect with a Vet is included with Chewy+ membership ($19.99/month, which also provides free shipping and other benefits). The integration with Chewy&apos;s pharmacy is the standout feature — prescriptions from Connect consultations can be filled directly through Chewy and shipped to your door. Best suited for Chewy customers who already have the membership for shipping benefits; the telehealth access is a meaningful bonus rather than the primary value proposition.</p>}
              specs={[{ label: 'Cost', value: 'Included with Chewy+', highlight: 'good' }, { label: 'Chewy Pharmacy', value: 'Direct integration', highlight: 'good' }, { label: 'Consultation Type', value: 'Video + chat' }, { label: 'Availability', value: 'Extended hours' }]}
              pros={['Included with Chewy+ membership', 'Direct Chewy pharmacy integration', 'Convenient for existing Chewy customers']}
              cons={['Only valuable if you already use Chewy+', 'Less specialist access than Vetster']}
              price="Included with Chewy+ ($19.99/month)" ctaText="Explore Chewy+ →" ctaHref="/go/chewy/chewy-connect" ctaAffiliateProgram="chewy" ctaAffiliateProduct="chewy-connect" />
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
