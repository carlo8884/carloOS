import type { Metadata } from 'next'
import { HopDisclosure } from '../../components/HopDisclosure'
import Link from 'next/link'
import { TableShopLink, RelatedReads, ComparisonFoot, EmailCapture, PrimaryHop, buildMetadata, ReviewCard, QuickPicks, Breadcrumb, FAQAccordion, ShopCtas, PriceAsOf } from '@carloOS/ui'
import { buildArticleSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { HubMasthead } from '../../components/HubMasthead'

export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Best Pet Telehealth 2026 — Vetster, AskVet | Vets.co', description: 'Pet telehealth notes for Vetster, AskVet, and Chewy Connect. This page does not publish a scored ranking or a measured wait time.', path: '/telehealth', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Best Pet Telehealth 2026', description: 'Vetster, AskVet, and Chewy Connect listed by service type. This page does not publish a scored ranking or a measured wait time.', url: 'https://vets.co/telehealth', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-10-07T00:00:00Z' })

// Per-service Product schemas — editorial Review ratings mirror the on-page
// ReviewCard scores (no AggregateRating; see buildProductSchema contract).
const vetsterSchema = buildProductSchema({ name: 'Vetster', description: 'Single visits start at $102. Plus is $12/month, billed annually.', url: 'https://vets.co/go/vetster/telehealth?s=telehealth', imageUrl: '', priceRange: '102' })
const askVetSchema = buildProductSchema({ name: 'AskVet', description: 'The current askvet.app pages do not print a visit type. The current page does not print a flat monthly chat price.', url: 'https://vets.co/go/askvet/telehealth?s=telehealth', imageUrl: '', })
const chewyConnectSchema = buildProductSchema({ name: 'Chewy Connect with a Vet', description: 'Free veterinary-technician chat with a Chewy account, plus a separate licensed-vet video visit that Chewy prices at $49.99 and does not offer in every state.', url: 'https://vets.co/go/chewy/connect?s=telehealth', imageUrl: '' })
const combinedSchema = combineSchemas(schema, vetsterSchema, askVetSchema, chewyConnectSchema)

const FAQS = [
  { question: 'Can a telehealth vet prescribe medication for my pet?', answer: 'It depends on your state. Most states require a veterinarian-client-patient relationship (VCPR) before a vet can prescribe, and many states only allow a VCPR to be established through an in-person exam. A minority of states permit establishing a VCPR remotely. Vetster\'s help article, updated 2025-12-18, says it verifies an active license in the veterinarian\'s jurisdiction before they go live (https://help.vetster.com/en/articles/13184184-how-are-licenses-verified). It does not say the veterinarian is licensed where the owner is, or that a prescription is therefore valid. Chat-only services are generally more limited. For refills of existing prescriptions, your regular clinic is usually the faster route.' },
  { question: 'When is telehealth appropriate versus an in-person visit?', answer: 'Telehealth works well for triage ("does this need a clinic visit?"), minor illness assessment, medication and nutrition questions, post-op check-ins, and behavior concerns. It cannot replace a physical exam, blood work, imaging, surgery, or emergency care. Signs like breathing difficulty, pale gums, collapse, suspected poisoning, or inability to urinate need an emergency clinic immediately — not a telehealth appointment.' },
  { question: 'How much does a pet telehealth visit cost?', answer: 'Vetster lists a single-visit starting figure and a monthly Plus plan on its current page. AskVet does not print a flat monthly chat price — see the carrier\'s current terms. The current askvet.app pages do not print a visit type. Chewy\'s free chat is with a veterinary technician and comes with a Chewy account. The licensed-vet video price is on the Chewy card. A one-off video fits a single question. A chat plan fits frequent questions.' },
  { question: 'Does pet insurance cover telehealth visits?', answer: 'Coverage varies by carrier and plan. Some insurers reimburse telehealth consultations under illness or exam-fee coverage, and several carriers bundle their own 24/7 vet helplines with every policy. Check your policy\'s exam-fee and telehealth language before assuming a consult is reimbursable — wellness-only plans typically exclude it.' },
  { question: 'Are the vets on telehealth platforms actually licensed?', answer: 'Vetster\'s help article, updated 2025-12-18, says it verifies an active license in the veterinarian\'s jurisdiction before they go live (https://help.vetster.com/en/articles/13184184-how-are-licenses-verified). It does not say the veterinarian is licensed where the owner is, or that a prescription is therefore valid. Before using a platform this page has not described, confirm that it discloses how it checks licenses.' },
]

const PICKS = [
  { label: 'Video and chat', name: 'Vetster', subtitle: 'Video + chat · Licensed DVMs', href: '#vetster' },
  { label: 'Best Subscription', name: 'AskVet', subtitle: 'See the carrier\'s current terms', href: '#askvet' },
  { label: 'Chewy Integration', name: 'Chewy Connect', subtitle: 'Linked to Chewy Rx', href: '#chewy' },
]

export default function TelehealthPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
      <HubMasthead
        eyebrow="Telehealth Compared · June 2026"
        title="Best Pet Telehealth 2026"
        intro="Talk to a licensed vet tonight — without a waiting room. This page lists service types for the major platforms. It does not publish a scored ranking or a measured wait time."
        manifestKey="vets-co:category-telehealth"
        fallbackKey="vets-co:hero"
        imageAlt="A laptop and notepad on a desk, set up for a remote consultation"
        hop={
          <>
            <PrimaryHop href='/go/vetster/telehealth?s=telehealth' label='Visit Vetster →' />
            <HopDisclosure siteId="vets-co" href="/go/vetster/telehealth?s=telehealth" noteClassName="mt-3 mb-4 text-xs leading-relaxed text-white/80" />
          </>
        }
        primaryCta={{ href: '#vetster', label: 'See the video consult' }}
        secondaryCta={{ href: '/find-a-vet', label: 'Find an in-person vet' }}
      />
      <EmailCapture
        variant="inline"
        siteId="vets-co"
        addressOnly
        title="Shopping checklist"
        ctaText="Copy checklist"
        source="telehealth"
        checklist={[
          "A minority of states permit establishing a VCPR remotely.",
          "For refills of existing prescriptions, your regular clinic is usually the faster route.",
          "It cannot replace a physical exam, blood work, imaging, surgery, or emergency care.",
          "Chewy's free chat is with a veterinary technician and comes with a Chewy account.",
          "Check your policy's exam-fee and telehealth language before assuming a consult is reimbursable \u2014 wellness-only plans typically exclude it.",
          "Chewy's licensed-vet video visit is $49.99 and is not offered in every state.",
        ]}
      />

      <div className="px-container-sm sm:px-container pt-6">
        <PriceAsOf date="2026-10-07" />
      </div>
      <QuickPicks items={PICKS} />
      <Breadcrumb siteId="vets-co" items={[{ name: "Home", href: "/" }, { name: "Telehealth" }]} />

      <div className="px-container-sm sm:px-container py-12">
        <div className="grid lg:grid-cols-[1fr_270px] gap-12 min-w-0">
          <div className="min-w-0">
            {/* TL;DR — what AI engines should quote */}
            <p>Single visits start at $102. Plus is $12/month, billed annually. The licensed-vet video visit is $49.99 and is not offered in every state.</p>
            <p className="text-lg text-brand-text-mid leading-relaxed italic mb-8">
              <strong className="not-italic">TL;DR.</strong> Vetster is the video-and-chat option on this page — licensed vets, including specialists, with no monthly requirement. Vetster's help article, updated 2025-12-18, says it verifies an active license in the veterinarian's jurisdiction before they go live (<a className="break-all" href="https://help.vetster.com/en/articles/13184184-how-are-licenses-verified">https://help.vetster.com/en/articles/13184184-how-are-licenses-verified</a>). It does not say the veterinarian is licensed where the owner is, or that a prescription is therefore valid. AskVet is the chat option for frequent questions. See the carrier&apos;s current terms for a monthly chat price. Chewy&apos;s free chat is with a veterinary technician. None of them replace a physical exam — use telehealth for triage and questions, not emergencies.
            </p>
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-lg p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">When Telehealth Works — and When It Doesn&apos;t</div>
              <p className="text-sm text-brand-text-mid leading-relaxed m-0">Telehealth is ideal for: minor illness assessment, medication questions, post-op monitoring, behavioral concerns, nutrition advice, deciding whether an in-person visit is needed. It cannot replace: physical examination, blood work, X-rays, surgery, emergency care. If your pet is in crisis, go to an emergency vet — do not wait for a telehealth appointment. Unsure which setting fits? Use the <Link href="/tools/er-vs-clinic" className="text-brand-primary font-medium hover:underline">ER vs clinic vs telehealth</Link> tool.</p>
            </div>
            <p>Those figures are typical US ranges dated 2026-10-05.</p>
            <ReviewCard id="vetster" badge="Video and chat" name="Vetster" winner subtitle="Video + chat · Board-certified vets available · No monthly commitment"
              description={<p>Vetster is a comprehensive pet telehealth platform — licensed veterinarians available by video or chat. This page does not publish a wait time. Vetster's help article, updated 2025-12-18, says it verifies an active license in the veterinarian's jurisdiction before they go live (<a className="break-all" href="https://help.vetster.com/en/articles/13184184-how-are-licenses-verified">https://help.vetster.com/en/articles/13184184-how-are-licenses-verified</a>). It does not say the veterinarian is licensed where the owner is, or that a prescription is therefore valid. They offer both general practitioners and specialists (including veterinary behaviorists, dermatologists, and internal medicine specialists). A single visit does not require the Plus plan.</p>}
              specs={[{ label: 'Consultation Type', value: 'Video + chat', highlight: 'good' }, { label: 'Vet Credentials', value: 'Licensed DVMs required', highlight: 'good' }, { label: 'Wait Time', value: 'Not published on this page' }, { label: 'Specialists', value: 'Yes — multiple specialties', highlight: 'good' }, { label: 'Prescriptions', value: 'Yes (jurisdiction-dependent)' }, { label: 'Monthly Fee', value: 'Single visit or Plus' }]}
              pros={['Specialists available (behaviorists, dermatologists)', 'Rigorous licensing standards', 'A single visit does not require Plus', 'Prescription capability']}
              cons={['Higher per-consult cost than subscription services', 'Wait times can extend during peak hours']}
              priceNote="dated 2026-10-07."
              price="Single visits start at $102. Plus is $12/month, billed annually." ctaText="Visit Vetster →" ctaHref="/go/vetster/telehealth?s=telehealth" ctaAffiliateProgram="vetster" ctaAffiliateProduct="telehealth" />
            <ReviewCard id="askvet" badge="Best Subscription" name="AskVet" subtitle="Chat plan. See the carrier's current terms."
              description={<p>AskVet&apos;s current page does not print a flat monthly price for unlimited chat. See the carrier&apos;s current terms. The telehealth card marks chat only. The current askvet.app pages do not print a visit type.</p>}
              specs={[{ label: 'Visit type', value: 'Chat only' }, { label: 'Monthly price', value: 'See the carrier\'s current terms', highlight: 'good' }, { label: 'Wait Time', value: 'Not published on this page' }, { label: 'Specialists', value: 'General practice only' }, { label: 'Prescriptions', value: 'Limited' }]}
              pros={['See the carrier\'s current terms for the monthly chat price', 'Fits frequent questions']}
              cons={['Chat only — no video examination', 'Limited specialist access', 'Less comprehensive than Vetster for complex cases']}
              priceNote="not a printed monthly figure."
              price="See the carrier's current terms" ctaText="Visit AskVet →" ctaHref="/go/askvet/telehealth?s=telehealth" ctaAffiliateProgram="askvet" ctaAffiliateProduct="telehealth" />
            <ReviewCard id="chewy" badge="Best for Chewy Customers" name="Chewy Connect with a Vet" subtitle="Free technician chat · Separate vet video visit"
              description={<p>Chewy splits this into two services. Free live chat is with a veterinary technician and is available with a Chewy account; that chat does not prescribe. A licensed-veterinarian video visit is separate. Chewy prices that visit at $49.99, dated 2026-10-07, and offers it only in some states. A prescription from that visit can be filled through Chewy. This is not a benefit that comes only with a paid Chewy+ membership.</p>}
              specs={[{ label: 'Free chat', value: 'Veterinary technician', highlight: 'good' }, { label: 'Vet video', value: '$49.99, some states', highlight: 'good' }, { label: 'Prescriptions', value: 'From the vet visit, not the free chat' }, { label: 'Membership', value: 'Not required for the free chat' }]}
              pros={['Free technician chat with a Chewy account', 'Licensed-vet video where Chewy offers it', 'A vet-visit prescription can be filled through Chewy']}
              cons={['Vet video is not available in every state', 'Free chat cannot prescribe', 'Less specialist access than Vetster']}
              priceNote="dated 2026-10-07."
              price="$49.99 per vet video visit" ctaText="Check Chewy Connect on Chewy" ctaHref="/go/chewy/connect?s=telehealth" ctaAffiliateProgram="chewy" ctaAffiliateProduct="connect" />

            {/* Money path — live amazon-brand search hops (home-care prep kit).
                ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
                Category searches only — not a ranked list, not a diagnosis.
                Consult links above stay on their existing paths; this block does not re-rank Vetster / AskVet / Chewy. */}
            <div id="telehealth-prep-kit" className="mt-8 mb-8">
              <HopDisclosure siteId="vets-co" href={["/go/amazon-brand/pet+first+aid+kit?s=telehealth", "/go/amazon-brand/digital+pet+thermometer?s=telehealth", "/go/amazon-brand/digital+pet+scale?s=telehealth", "/go/amazon-brand/pet+calming+aid?s=telehealth", "/go/amazon-brand/pet+recovery+cone?s=telehealth"]} />
              <div className="mt-4 rounded-xl border border-brand-border bg-brand-surface p-5">
                <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                  Shop a telehealth prep kit
                </div>
                <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">Amazon search links go to general supplies. They are not a ranked product list and they do not replace veterinary care.</p>
                <div className="flex flex-col gap-3">
                  <ShopCtas
                    amazonHref="/go/amazon-brand/pet+first+aid+kit?s=telehealth"
                    amazonLabel="Browse pet first-aid kits on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/digital+pet+thermometer?s=telehealth"
                    amazonLabel="Browse digital pet thermometers on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/digital+pet+scale?s=telehealth"
                    amazonLabel="Browse digital pet scales on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/pet+calming+aid?s=telehealth"
                    amazonLabel="Browse pet calming aids on Amazon →"
                  />
                  <ShopCtas
                    amazonHref="/go/amazon-brand/pet+recovery+cone?s=telehealth"
                    amazonLabel="Browse pet recovery cones on Amazon →"
                  />
          </div>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-3">Who should use which service</h2>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-4">
                Prices and limits are the ones on the cards. None of these replace an emergency visit. Pale gums, trouble breathing, collapse, suspected poisoning, or a cat that cannot urinate is an in-person emergency.
              </p>
              <div className="overflow-x-auto max-w-full min-w-0">
                <p>Those figures are typical US ranges dated 2026-10-05.</p>
                <table className="w-full text-sm border-collapse table-fixed sm:table-auto min-w-0 sm:min-w-[36rem] [&_th]:break-words [&_td]:break-words">
                  <thead>
                    <tr className="bg-brand-surface border-b-2 border-brand-primary text-left">
                      <th className="p-3 font-bold text-brand-dark">If you need</th>
                      <th className="p-3 font-bold text-brand-dark">Use</th>
                      <th className="p-3 font-bold text-brand-dark">From the card</th>
                      <th className="p-3 font-bold text-brand-dark">Limit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">Video, a specialist, or a prescription where state rules allow</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#vetster" className="text-brand-primary">Vetster</a><TableShopLink href={"/go/vetster/telehealth?s=telehealth"} product={"Vetster"} /></td>
                      <td className="p-3 text-brand-text-mid">Video and chat. Single visits start at $102. Plus is $12/month, billed annually.</td>
                      <td className="p-3 text-brand-text-mid">Higher per visit than a subscription. Waits can stretch at peak hours</td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">Frequent chat questions, not a video exam</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#askvet" className="text-brand-primary">AskVet</a><TableShopLink href={"/go/askvet/telehealth?s=telehealth"} product={"AskVet"} /></td>
                      <td className="p-3 text-brand-text-mid">Best subscription. See the carrier&apos;s current terms. This page does not publish a wait time</td>
                      <td className="p-3 text-brand-text-mid">The telehealth card marks chat only. askvet.app does not print a visit type. General practice. Prescriptions are limited</td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">You want Chewy&apos;s free technician chat or a vet video visit</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#chewy" className="text-brand-primary">Chewy Connect</a><TableShopLink href={"/go/chewy/connect?s=telehealth"} product={"Chewy Connect"} /></td>
                      <td className="p-3 text-brand-text-mid">Free technician chat. Vet video is $49.99, dated 2026-10-07, and not in every state</td>
                      <td className="p-3 text-brand-text-mid">You need a specialist, or you are outside the states where Chewy offers the vet visit</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ComparisonFoot updated="2026-10-08" />
            </div>
            <h2 className="font-display text-2xl font-bold text-brand-dark mt-12 mb-6">Frequently Asked Questions</h2>
            <p>Those figures are typical US ranges dated 2026-10-05.</p>
            <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">When to Go to Emergency Instead</div>
              <p className="text-xs text-brand-text-mid leading-relaxed">Pale/blue gums, breathing difficulty, collapse, suspected poisoning, severe injury, inability to urinate (cats), or any rapidly worsening condition requires in-person emergency care immediately.</p>
              <Link href="/tools/er-vs-clinic" className="block mt-3 text-xs font-bold text-brand-primary no-underline hover:underline">ER vs clinic vs telehealth →</Link>
              <Link href="/find-a-vet" className="block mt-2 text-xs font-bold text-brand-primary no-underline hover:underline">Find an emergency vet →</Link>
              <Link href="/directory" className="block mt-2 text-xs font-bold text-brand-primary no-underline hover:underline">License-board directory →</Link>
            </div>
          </aside>
        </div>
      </div>
      <RelatedReads siteId="vets-co" path="/telehealth" />
    </>
  )
}
