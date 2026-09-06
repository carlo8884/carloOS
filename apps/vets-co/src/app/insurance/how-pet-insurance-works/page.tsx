import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, ReviewCard, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "How Pet Insurance Works — A Plain-English Guide | Vets.co", description: "Pet insurance reimburses you for covered vet bills after a deductible. Learn how premiums, deductibles, reimbursement rates, and annual limits fit together.", path: '/insurance/how-pet-insurance-works', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'How Pet Insurance Works', description: 'A plain-English explanation of premiums, deductibles, reimbursement, and limits in pet insurance.', url: 'https://vets.co/insurance/how-pet-insurance-works', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-09-06T00:00:00Z' })
const FAQS = [
  { question: "Do I pay the vet directly or does insurance pay them?", answer: "With most pet insurers, you pay the veterinary clinic in full at the time of the visit, then submit a claim and the insurer reimburses you afterward — typically within days to a couple of weeks. This reimbursement model is different from most human health insurance. A few insurers offer direct payment to participating veterinarians, which can ease the cash-flow burden of a large bill, but the standard model is pay-then-claim. Budgeting for that upfront cost is part of using pet insurance effectively." },
  { question: "What is a reimbursement rate?", answer: "After you meet your deductible, the insurer pays a set percentage of the remaining covered costs — commonly 70%, 80%, or 90% — and you cover the rest. This percentage is the reimbursement rate. A higher reimbursement rate means lower out-of-pocket costs per claim but a higher monthly premium. Choosing a reimbursement rate is a trade-off between predictable monthly cost and exposure during an expensive claim." },
  { question: "What is an annual limit?", answer: "The annual limit is the maximum the insurer will reimburse in a policy year. Plans range from modest annual caps to unlimited coverage. A higher or unlimited limit costs more in premium but protects you against catastrophic bills — a single major surgery or cancer treatment can exceed lower caps. When comparing plans, the annual limit is one of the most important numbers, because it defines your worst-case protection." },
]
export default function HowPetInsuranceWorksPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'How Pet Insurance Works', subtitle: 'Pet insurance is medical insurance for your dog or cat, and it works on a reimbursement model: you pay the vet, then the insurer pays you back a percentage of covered costs after a deductible. Four numbers — premium, deductible, reimbursement rate, and annual limit — define every policy. Once you understand how they interact, comparing plans becomes straightforward.', category: 'Insurance Guide', authorName: 'Vets.co Editorial', publishedAt: 'June 2026', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Insurance', href: '/insurance' }, { name: 'How It Works', href: '/insurance/how-pet-insurance-works' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">The Four Levers</div>
            {[['Premium', 'What you pay monthly'], ['Deductible', 'You pay first, then coverage'], ['Reimbursement', 'Percent paid after deductible'], ['Annual limit', 'Yearly payout cap']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'What Pet Insurance Covers', href: '/insurance/what-pet-insurance-covers' }, { label: 'Deductibles & Reimbursement', href: '/insurance/deductibles-reimbursement' }, { label: 'When to Enroll', href: '/insurance/when-to-enroll' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Insurance Decision Guide" subtitle="Our plain-English checklist." source="insurance-how-works" />
        </>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the how-pet-insurance-works checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              How-pet-insurance-works checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the prep notes that match the
              reimbursement-model, four-levers, and
              pay-then-claim copy on this page — a
              four-column accounting pad so premium,
              deductible, reimbursement rate, and
              annual limit stay four written columns
              for the worked example, a letter-size
              poly envelope so the itemized invoice
              and records stay one claim packet, and
              a desktop receipt organizer so paid
              invoices stay filed until reimbursement
              lands. Educational checklist, not a
              diagnosis, not a substitute for
              veterinary care, and not a reporter-
              notebook, two-pocket-folder, or
              cash-envelope hop. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="vets-co"
              title="How-pet-insurance-works checklist"
              subtitle="Email the four-column, poly-envelope, and receipt-organizer notes. No spam."
              ctaText="Email my how-pet-insurance-works checklist"
              source="insurance-how-pet-insurance-works-under-hero"
            />
          </div>

          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-09-06T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="info" title="It protects against the big bills">
            Pet insurance is best thought of as protection against unexpected, large veterinary expenses — a torn ligament, a swallowed object, cancer, a chronic illness — not as a way to save money on routine care. The math works because it converts an unpredictable catastrophic risk into a predictable monthly cost.
          </CalloutBox>

          <h2>The Reimbursement Model</h2>
          <p>Unlike most human health insurance, pet insurance almost always works by reimbursement. You take your pet to any licensed veterinarian, pay the bill yourself, then submit a claim — usually by app or online — with the itemized invoice and records. A letter-size poly envelope is how that invoice and the records stay one claim packet instead of loose papers in the car — it is not letter-size sheet protectors (that live on questions-to-ask-your-vet), not a kraft two-pocket folder (that lives on choosing-a-veterinarian), and not letter-size hanging file folders (that live on how-to-afford-vet-care). The insurer reviews the claim and reimburses you for the covered portion. This means you need to be able to cover the bill upfront, which is an important practical consideration when choosing coverage.</p>

          <h2>The Four Levers</h2>
          <p>Every policy is defined by four interacting numbers. The <strong>premium</strong> is what you pay monthly to keep coverage active. The <strong>deductible</strong> is the amount you pay out of pocket before reimbursement kicks in, set either per year or per condition. The <strong>reimbursement rate</strong> is the percentage of covered costs the insurer pays after the deductible — often 70%, 80%, or 90%. The <strong>annual limit</strong> caps how much the insurer will reimburse in a policy year. A four-column accounting pad is how those four levers stay written columns instead of a remembered quote — it is not a household budget workbook (that lives on cost-of-veterinary-care), not a checkbook register (that lives on cost-of-veterinary-care), and not a basic desktop calculator (that lives on emergency-vet-costs). Raising your reimbursement rate or annual limit, or lowering your deductible, increases your premium; the levers trade off against each other.</p>

          <h2>A Worked Example</h2>
          <p>Suppose your dog needs a $4,000 surgery and your policy has a $500 annual deductible, an 80% reimbursement rate, and a generous annual limit. You pay the clinic $4,000. You then submit a claim. After subtracting the $500 deductible, $3,500 remains as covered cost; the insurer reimburses 80% of that, or $2,800. Your net out-of-pocket is $1,200 plus your monthly premiums. The same four-column accounting pad is where that $4,000 / $500 / 80% / leftover-limit arithmetic stays a written row. If you had chosen a 90% rate, you would have received more back but paid a higher premium all year.</p>

          <h2>What Affects Your Premium</h2>
          <p>Premiums are priced on the pet&apos;s species, breed, age, and location, plus your chosen deductible, reimbursement rate, and limit. Older pets and breeds with known hereditary risks cost more to insure. Premiums also tend to rise as a pet ages, since the likelihood of claims increases — an important reason many people enroll while pets are young, when premiums are lowest and few conditions are excluded.</p>

          <h2>Choosing a Structure</h2>
          <p>There is no single best plan; the right structure depends on your budget and risk tolerance. If you could comfortably absorb a few thousand dollars but not a $10,000 catastrophe, a higher deductible with a high or unlimited annual limit gives strong protection at a lower premium. If cash flow is tight even for moderate bills, a lower deductible and higher reimbursement rate smooth costs but raise the premium. A desktop receipt organizer is how paid clinic invoices stay filed until reimbursement lands — it is not a cash envelope budget system (that lives on how-to-afford-vet-care), not a locking cash box with a key (that lives on emergency-vet-costs), and not a pocket-size address book (that lives on choosing-a-veterinarian). Understanding the four levers lets you build a plan that matches your situation rather than chasing the cheapest or most expensive option.</p>

          <h2 id="kit">How-pet-insurance-works kit</h2>
          <p>
            Everyday physical supplies that match the
            reimbursement-model, four-levers, and
            pay-then-claim copy on this page — a
            four-column accounting pad so premium,
            deductible, reimbursement rate, and
            annual limit stay four written columns,
            a letter-size poly envelope so the
            itemized invoice and records stay one
            claim packet, and a desktop receipt
            organizer so paid invoices stay filed
            until reimbursement lands. These are
            educational insurance-education /
            paperwork tools, not a ranked product
            list, not a substitute for veterinary
            care, and not a treatment. Reporter
            notebooks, kraft two-pocket folders, and
            pocket-size address books already live
            on choosing-a-veterinarian. Ruled index
            cards, 3x3 sticky notes, and letter-size
            sheet protectors already live on
            questions-to-ask-your-vet. Household
            budget workbooks and checkbook registers
            already live on
            cost-of-veterinary-care. This page does
            not hop medications or insurance brands
            as Amazon searches. This page does not
            claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="vets-co" />

          {/* Money path — live amazon-brand search hops
              (four-column accounting pad /
              letter-size poly envelope /
              desktop receipt organizer).
              These are educational
              insurance-education / paperwork tools,
              not a ranked product list, not a
              substitute for veterinary care, no Rx
              / first-aid kit / thermometer /
              carrier / insurance-brand ASIN hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1167
              reporter+notebook /
              kraft+two+pocket+folder /
              pocket+size+address+book,
              #1166
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
              Carrier quote CTAs stay on
              /go/trupanion and /go/healthy-paws —
              not amazon-brand hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the how-pet-insurance-works kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page reimbursement-model, four-levers,
              and pay-then-claim copy — a four-column
              accounting pad, a letter-size poly
              envelope, and a desktop receipt
              organizer. Educational
              insurance-education / paperwork tools
              only. They are not a ranked product
              list, they are not a substitute for
              veterinary care, they are not a #1167
              reporter-notebook / two-pocket-folder /
              address-book hop, they are not a #1166
              index-card / sticky-note /
              sheet-protector hop, they are not a
              #1165 spiral-notebook / cooler-bag /
              clipboard hop, they are not a
              financing-brand or insurance-brand hop,
              and they do not replace a veterinarian.
              Vets.co earns a commission on
              qualifying purchases at no extra cost
              to you. Empty Chewy buttons stay
              hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/four+column+accounting+pad?s=insurance-how-pet-insurance-works"
                amazonLabel="Browse four-column accounting pads on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/letter+size+poly+envelope?s=insurance-how-pet-insurance-works"
                amazonLabel="Browse letter-size poly envelopes on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/desktop+receipt+organizer?s=insurance-how-pet-insurance-works"
                amazonLabel="Browse desktop receipt organizers on Amazon →"
              />
            </div>
          </div>

          <h2 id="quote">Compare a Couple of Insurers</h2>
          <p>Once the four levers make sense, the next step is to price your own pet on a couple of carriers and compare the premium against the deductible, reimbursement rate, and annual limit. The two below illustrate different models; for the full side-by-side, see our <a href="/reviews/best-pet-insurance">best pet insurance comparison</a>.</p>
          <AffiliateDisclosure variant="inline" siteId="vets-co" />
          <ReviewCard
            id="trupanion"
            badge="Direct-Pay Model"
            name="Trupanion"
            subtitle="Pays participating vets directly, per-condition deductible"
            score={9.0}
            winner
            description={
              <p>Notable for paying participating veterinarians directly at checkout, which sidesteps the pay-then-claim cash-flow burden described above. Uses a per-condition lifetime deductible rather than an annual one. Pricing reflects its model; run a quote for your pet to compare against the four levers.</p>
            }
            specs={[
              { label: 'Payout model', value: 'Direct-to-vet option', highlight: 'good' },
              { label: 'Deductible', value: 'Per-condition lifetime' },
              { label: 'Annual limit', value: 'Unlimited', highlight: 'good' },
            ]}
            pros={['Direct payment to participating vets', 'Unlimited payouts', 'No per-incident caps']}
            cons={['Premiums can run higher', 'No wellness/preventive add-on']}
            price="Quote-based"
            ctaText="Get a Quote →"
            ctaHref="/go/trupanion/home?s=insurance-how-pet-insurance-works"
            ctaAffiliateProgram="trupanion"
            ctaAffiliateProduct="home"
          />
          <ReviewCard
            id="healthy-paws"
            badge="Fast Reimbursement"
            name="Healthy Paws"
            subtitle="One simple accident-and-illness plan, fast claims"
            score={8.7}
            description={
              <p>A single straightforward accident-and-illness plan with a reputation for fast reimbursement on the pay-then-claim model. No tiered plan maze — you choose the deductible and reimbursement rate. Confirm the annual limit structure when you quote, and enroll while your pet is young to lock in lower premiums.</p>
            }
            specs={[
              { label: 'Plan structure', value: 'Single A&I plan' },
              { label: 'Reimbursement', value: 'Fast turnaround', highlight: 'good' },
              { label: 'Model', value: 'Pay-then-claim' },
            ]}
            pros={['Simple single plan', 'Fast claim processing', 'Choose deductible and rate']}
            cons={['No wellness add-on', 'No direct-vet payment']}
            price="Quote-based"
            ctaText="Get a Quote →"
            ctaHref="/go/healthy-paws/home?s=insurance-how-pet-insurance-works"
            ctaAffiliateProgram="healthy-paws"
            ctaAffiliateProduct="home"
          />

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />
        </div>
      </ArticleLayout>
    </>
  )
}
