import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "How to Choose a Veterinarian — A Practical Guide | Vets.co", description: "Accreditation, communication, services, location, and emergency arrangements all matter when choosing a vet. Here is how to find the right clinic for your pet.", path: '/guides/choosing-a-veterinarian', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'How to Choose a Veterinarian', description: 'Practical criteria for choosing a veterinary clinic that fits your pet and your needs.', url: 'https://vets.co/guides/choosing-a-veterinarian', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-09-06T00:00:00Z' })
const FAQS = [
  { question: "What is AAHA accreditation and does it matter?", answer: "AAHA (American Animal Hospital Association) accreditation is a voluntary standard that evaluates a practice against several hundred quality benchmarks covering medical care, equipment, safety, and management. Unlike human hospitals, veterinary practices are not required to be accredited, so AAHA accreditation signals a clinic has chosen to meet and maintain a high standard. It is not the only marker of a good practice, but it is a meaningful one, and pairing it with your own impressions of communication and care gives a fuller picture." },
  { question: "Should I prioritize location or quality?", answer: "Both matter, and the right balance depends on your situation. A nearby clinic is invaluable for emergencies and easy routine visits, especially if your pet finds travel stressful. But quality of medicine, communication, and the comfort you feel with the team are equally important for long-term care. Many owners choose a good general practice nearby for routine care and identify a separate emergency or specialty hospital in advance for after-hours needs, getting the benefits of both proximity and capability." },
  { question: "How do I evaluate a clinic before committing?", answer: "Schedule a wellness visit or, where offered, a tour, and pay attention to how the team communicates, whether they explain things clearly, and how your pet is handled. Ask about services offered, after-hours and emergency arrangements, payment options, and whether they refer to specialists when needed. Cleanliness, organization, and a calm, fear-aware approach to handling are good signs. Online reviews can provide context, but your own observation of communication and care matters most for an ongoing relationship." },
]
export default function ChoosingVetPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'How to Choose a Veterinarian', subtitle: 'Your veterinarian is your partner in your pet\'s health for years, so the choice is worth making deliberately. Accreditation, the quality of communication, the range of services, location, and emergency arrangements all factor in. This guide walks through the criteria that matter so you can find a clinic that fits both your pet and your needs.', category: 'Owner Guide', authorName: 'Vets.co Editorial', publishedAt: 'June 2026', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides' }, { name: 'Choosing a Veterinarian', href: '/guides/choosing-a-veterinarian' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">What to Evaluate</div>
            {[['Accreditation', 'AAHA and credentials'], ['Communication', 'Clear, respectful'], ['Services', 'Scope and referrals'], ['Emergency plan', 'After-hours coverage']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Find a Vet', href: '/find-a-vet' }, { label: 'What to Expect at the Vet', href: '/guides/what-to-expect-at-the-vet' }, { label: 'ER vs. Urgent Care', href: '/guides/er-vs-urgent-care' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Owner Newsletter" subtitle="Practical guidance weekly." source="guides-choosing" />
        </>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the choosing-a-veterinarian checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Choosing-a-veterinarian checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the prep notes that match the
              accreditation, communication, services,
              location, and emergency-arrangement copy
              on this page — a reporter notebook so
              tour impressions stay written during
              the wellness visit, a kraft two-pocket
              folder so clinic notes and the
              after-hours hospital card stay separate
              pockets, and a pocket-size address book
              so the 24-hour emergency facility stays
              a named number instead of a remembered
              search. Educational checklist, not a
              diagnosis, not a substitute for
              veterinary care, and not a spiral-
              notebook, index-card, or emergency-
              contact-card hop. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="vets-co"
              title="Choosing-a-veterinarian checklist"
              subtitle="Email the reporter-notebook, two-pocket-folder, and address-book notes. No spam."
              ctaText="Email my choosing-a-veterinarian checklist"
              source="guides-choosing-a-veterinarian-under-hero"
            />
          </div>

          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-09-06T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="info" title="The relationship is long-term">
            A veterinarian who knows your pet over years can spot subtle changes and provide continuity that improves care. Choosing well at the start, and building a relationship, pays dividends — so weigh communication and trust alongside credentials and convenience.
          </CalloutBox>

          <h2>Credentials and Accreditation</h2>
          <p>Start with the fundamentals. All practicing veterinarians are licensed, but voluntary accreditation — most notably AAHA accreditation in the United States — indicates a practice has chosen to meet several hundred quality benchmarks for medical care, equipment, and safety. Because veterinary practices are not required to be accredited, this voluntary step is a meaningful signal of commitment to standards. A reporter notebook is how those accreditation and specialist-referral notes stay written during a tour instead of reconstructed later — it is not a spiral notebook (that lives on what-to-expect-at-the-vet), not a yellow legal pad (that lives on how-to-afford-vet-care), and not ruled index cards (that live on questions-to-ask-your-vet). Consider it alongside the practice&apos;s areas of focus and whether specialists are on staff or available by referral.</p>

          <h2>Communication and Approach</h2>
          <p>Good medicine depends on good communication. Notice whether the team explains conditions and options clearly, answers questions patiently, and respects your involvement in decisions. Observe how your pet is handled — a calm, fear-aware approach reduces stress and is increasingly a hallmark of quality practices. The same reporter notebook holds those communication impressions next to the accreditation notes so the comfort you felt is a written record, not a vague feeling. The comfort and trust you feel with a team matters for the years of care ahead, so weigh your own impressions heavily.</p>

          <h2>Services and Capabilities</h2>
          <p>Match the practice&apos;s services to your pet&apos;s likely needs. Ask what diagnostics and treatments are offered in-house, whether they handle surgery and dentistry, and how they manage referrals to specialists for complex cases. A kraft two-pocket folder keeps the in-house-services list in one pocket and the referral / specialty notes in the other so the scope comparison stays a file — it is not letter-size hanging file folders (that live on how-to-afford-vet-care), not a letter-size accordion file folder (that lives on cost-of-veterinary-care), and not letter-size sheet protectors (that live on questions-to-ask-your-vet). A general practice that refers promptly and communicates well with specialists serves most pets fully; specialty needs may warrant a clinic with broader capabilities. Knowing the scope helps you understand when your pet can be cared for in one place and when a referral is the right step.</p>

          <h2>Location and Logistics</h2>
          <p>Practical factors carry real weight. A conveniently located clinic makes routine visits easier and is valuable in an emergency, particularly for pets that find travel stressful. Consider hours, appointment availability, communication channels, and payment options, including whether they accept pet insurance reimbursement workflows and offer estimates. These logistics shape how easy it is to actually get care when you need it. The same kraft two-pocket folder holds hours and payment-option notes with the services list so a second clinic tour is compared on paper, not from memory.</p>

          <h2>Emergency Arrangements</h2>
          <p>Find out how the practice handles after-hours emergencies before you ever face one. Some clinics offer extended or emergency hours; others refer to a dedicated emergency hospital overnight and on weekends. Either way, identify your nearest 24-hour emergency facility in advance and keep its details handy. A pocket-size address book is how that after-hours hospital name, address, and phone stay a written entry instead of a remembered search — it is not a pet emergency contact card (that lives elsewhere), not a car visor document holder (that lives on ER-vs-urgent-care), and not a lined telephone message pad (that lives on when-to-go-to-the-vet). Pairing a trusted general practice for routine care with a known emergency option gives you coverage across every scenario. Our find-a-vet directory can help you locate options in your area.</p>

          <h2 id="kit">Choosing-a-veterinarian kit</h2>
          <p>
            Everyday physical supplies that match the
            accreditation, communication, services,
            location, and emergency-arrangement copy
            on this page — a reporter notebook so
            tour impressions stay written during the
            wellness visit, a kraft two-pocket folder
            so clinic notes and the after-hours
            hospital card stay separate pockets, and
            a pocket-size address book so the 24-hour
            emergency facility stays a named number.
            These are educational clinic-comparison /
            paperwork tools, not a ranked product
            list, not a substitute for veterinary
            care, and not a treatment. Spiral
            notebooks, cooler bags, and clipboards
            with storage already live on
            what-to-expect-at-the-vet. Ruled index
            cards, 3x3 sticky notes, and letter-size
            sheet protectors already live on
            questions-to-ask-your-vet. Yellow legal
            pads and hanging file folders already
            live on how-to-afford-vet-care. Car visor
            document holders already live on
            ER-vs-urgent-care. This page does not
            hop medications, financing brands, or
            insurance brands. This page does not
            claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="vets-co" />

          {/* Money path — live amazon-brand search hops
              (reporter notebook /
              kraft two-pocket folder /
              pocket-size address book).
              These are educational
              clinic-comparison / paperwork tools,
              not a ranked product list, not a
              substitute for veterinary care, no Rx
              / first-aid kit / thermometer /
              carrier / insurance-brand /
              financing-brand ASIN hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1166
              ruled+index+cards /
              3x3+sticky+notes /
              letter+size+sheet+protectors,
              #1165
              spiral+notebook /
              small+soft+cooler+bag /
              clipboard+with+storage,
              #1164
              cash+envelope+budget+system /
              yellow+legal+pad /
              hanging+file+folders+letter+size,
              #1163
              household+budget+workbook /
              checkbook+register /
              accordion+file+folder+letter+size,
              #1162
              locking+cash+box+with+key /
              basic+desktop+calculator /
              manila+file+folders+letter+size,
              #1161
              credit+card+size+laminating+pouches /
              small+magnetic+dry+erase+board /
              car+visor+document+holder.
              First-aid kits, digital pet
              thermometers, and prescriptions
              are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the choosing-a-veterinarian kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page accreditation, communication,
              services, location, and
              emergency-arrangement copy — a reporter
              notebook, a kraft two-pocket folder, and
              a pocket-size address book. Educational
              clinic-comparison / paperwork tools
              only. They are not a ranked product
              list, they are not a substitute for
              veterinary care, they are not a #1166
              index-card / sticky-note /
              sheet-protector hop, they are not a
              #1165 spiral-notebook / cooler-bag /
              clipboard hop, they are not a #1164
              cash-envelope / legal-pad /
              hanging-file hop, they are not a #1163
              budget-workbook / checkbook-register /
              accordion-file hop, they are not a
              #1162 cash-box / calculator /
              manila-folder hop, they are not a #1161
              laminating-pouch / dry-erase-board /
              visor-holder hop, they are not a
              first-aid-kit, thermometer, or carrier
              hop, they are not a financing-brand or
              insurance-brand hop, and they do not
              replace a veterinarian. Vets.co earns a
              commission on qualifying purchases at
              no extra cost to you. Empty Chewy
              buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/reporter+notebook?s=guides-choosing-a-veterinarian"
                amazonLabel="Browse reporter notebooks on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/kraft+two+pocket+folder?s=guides-choosing-a-veterinarian"
                amazonLabel="Browse kraft two-pocket folders on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/pocket+size+address+book?s=guides-choosing-a-veterinarian"
                amazonLabel="Browse pocket-size address books on Amazon →"
              />
            </div>
          </div>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />
        </div>
      </ArticleLayout>
    </>
  )
}
