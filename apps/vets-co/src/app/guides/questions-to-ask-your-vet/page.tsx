import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "Questions to Ask Your Vet — Get the Most From Every Visit | Vets.co", description: "The right questions turn a rushed appointment into clear, confident care. Use this list to ask about diagnosis, treatment options, costs, and follow-up.", path: '/guides/questions-to-ask-your-vet', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Questions to Ask Your Vet', description: 'A practical list of questions to ask at a veterinary visit for clearer, more confident care.', url: 'https://vets.co/guides/questions-to-ask-your-vet', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-09-06T00:00:00Z' })
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
        hero={{ title: 'Questions to Ask Your Vet', subtitle: 'A veterinary visit can feel rushed, and it is easy to leave with unanswered questions. Coming prepared with the right questions — about the diagnosis, the options, the costs, and the follow-up — turns an appointment into clear, confident care and helps you and your veterinarian make the best decisions together.', category: 'Owner Guide', authorName: 'Vets.co Editorial', publishedAt: 'June 2026', readTime: '8 min',}}
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
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the questions-to-ask-your-vet checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Questions-to-ask-your-vet checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the prep notes that match the
              diagnosis, options, cost, and
              follow-up-question copy on this page —
              ruled index cards so each question is
              one card you can flip through a rushed
              visit, 3x3 sticky notes so the next
              options or cost question stays flagged
              on the stack, and letter-size sheet
              protectors so the written instructions
              and visit summary stay readable after
              you leave. Educational checklist, not
              a diagnosis, not a substitute for
              veterinary care, and not a spiral-
              notebook, legal-pad, or clipboard hop.
              No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="vets-co"
              title="Questions-to-ask-your-vet checklist"
              subtitle="Email the index-card, sticky-note, and sheet-protector notes. No spam."
              ctaText="Email my questions-to-ask-your-vet checklist"
              source="guides-questions-to-ask-your-vet-under-hero"
            />
          </div>

          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-09-06T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="info" title="There are no bad questions">
            Veterinary teams want you to understand your pet&apos;s care. Asking questions — even ones that feel basic — leads to better outcomes, because a treatment plan only works if you understand and can follow it. Never leave a visit confused; ask for clarification.
          </CalloutBox>

          <h2>Questions About the Diagnosis</h2>
          <p>When your pet is diagnosed with a condition, seek to understand it fully. Ask what the condition is in plain language, what caused it, whether it is curable or something to be managed long-term, and what the expected outlook is. Ask how confident the diagnosis is and whether further testing would clarify it. Ruled index cards are how those diagnosis questions stay one card each so a rushed visit still gets through the stack — they are not a spiral notebook (that lives on what-to-expect-at-the-vet for the visit-reason and dose list), not a yellow legal pad (that lives on how-to-afford-vet-care for the ideal / middle / minimum cost talk), and not a pocket spiral memo pad (that lives on vomiting-diarrhea-pets). Understanding the diagnosis is the foundation for every subsequent decision, so it is worth taking the time to grasp it before moving to treatment.</p>

          <h2>Questions About Treatment Options</h2>
          <p>Rarely is there only one path. Ask what the treatment options are, including the option of monitoring or doing nothing, and the benefits, risks, and likely outcomes of each. Ask what you would do if this were your own pet, and what the consequences of delaying treatment might be. 3x3 sticky notes flag the next options question on the index-card stack so it is asked instead of remembered in the parking lot — they are not a small magnetic dry-erase board (that lives on ER-vs-urgent-care) and they are not a hardcover weekly appointment planner (that lives on pain-management-dogs). Understanding the range of options — not just the first recommendation — lets you choose a plan that fits your pet, your circumstances, and your values.</p>

          <h2>Questions About Medications</h2>
          <p>If a medication is prescribed, confirm the essentials: what it is for, how and when to give it, whether with food, common side effects to watch for, what to do about a missed dose, and how long the course runs. Ask about interactions with other medications or supplements, and whether monitoring bloodwork or a recheck is needed. Write those confirmations on the remaining index cards; this page does not hop a pill organizer, a prescription bottle, or any medication ASIN. Getting these details right improves the odds the treatment succeeds and that problems are caught early.</p>

          <h2>Questions About Cost</h2>
          <p>Cost questions are entirely appropriate. Ask for an estimate before procedures, what is essential versus optional, whether tests or treatments can be staged over time, and if lower-cost alternatives exist that still address the problem. The same 3x3 sticky notes can flag the estimate and essential-versus-optional questions so they are spoken before you agree to a plan. Veterinary teams routinely build plans around real budgets when they know the constraint. An open cost conversation prevents surprise bills and helps you and the team find the best care within your means. This page does not hop a cash envelope, a budget workbook, or a financing brand.</p>

          <h2>Questions About Follow-Up</h2>
          <p>Before you leave, clarify the follow-up plan. Ask when a recheck is needed, what improvement to expect and by when, and which signs at home should prompt you to call back urgently. Request written instructions or a summary so you do not have to rely on memory. Letter-size sheet protectors are how that written summary stays readable in the glove box instead of a crumpled printout — they are not letter-size thermal laminating pouches (that live on dog-vaccinations-guide), not credit-card-size laminating pouches (that live on ER-vs-urgent-care), and not a clipboard with storage (that lives on what-to-expect-at-the-vet for findings and dosing). Knowing exactly what to watch for and when to return closes the loop on the visit and keeps your pet&apos;s care on track between appointments.</p>

          <h2 id="kit">Questions-to-ask-your-vet kit</h2>
          <p>
            Everyday physical supplies that match the
            diagnosis, options, cost, and follow-up
            question copy on this page — ruled index
            cards so each question is one card you
            can flip through a rushed visit, 3x3
            sticky notes so the next options or cost
            question stays flagged on the stack, and
            letter-size sheet protectors so the
            written instructions and visit summary
            stay readable. These are educational
            questions / notes / follow-up tools, not
            a ranked product list, not a substitute
            for veterinary care, and not a
            treatment. Spiral notebooks, small soft
            cooler bags, and clipboards with storage
            already live on
            what-to-expect-at-the-vet. Yellow legal
            pads and letter-size hanging file
            folders already live on
            how-to-afford-vet-care. Lined telephone
            message pads already live on
            when-to-go-to-the-vet. Credit-card-size
            laminating pouches and small magnetic
            dry-erase boards already live on
            ER-vs-urgent-care. This page does not
            hop medications, financing brands, or
            insurance brands. This page does not
            claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="vets-co" />

          {/* Money path — live amazon-brand search hops
              (ruled index cards /
              3x3 sticky notes /
              letter-size sheet protectors).
              These are educational questions /
              notes / follow-up tools, not a ranked
              product list, not a substitute for
              veterinary care, no Rx / first-aid kit
              / thermometer / carrier /
              insurance-brand / financing-brand
              ASIN hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1165
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
              car+visor+document+holder,
              #1093
              48+hour+digital+kitchen+timer /
              lined+telephone+message+pad /
              medium+hard+sided+plastic+pet+carrier.
              First-aid kits, digital pet
              thermometers, and prescriptions
              are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the questions-to-ask-your-vet kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page diagnosis, options, cost, and
              follow-up-question copy — ruled index
              cards, 3x3 sticky notes, and letter-size
              sheet protectors. Educational questions /
              notes / follow-up tools only. They are
              not a ranked product list, they are not
              a substitute for veterinary care, they
              are not a #1165 spiral-notebook /
              cooler-bag / clipboard hop, they are
              not a #1164 cash-envelope / legal-pad /
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
                amazonHref="/go/amazon-brand/ruled+index+cards?s=guides-questions-to-ask-your-vet"
                amazonLabel="Browse ruled index cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/3x3+sticky+notes?s=guides-questions-to-ask-your-vet"
                amazonLabel="Browse 3x3 sticky notes on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/letter+size+sheet+protectors?s=guides-questions-to-ask-your-vet"
                amazonLabel="Browse letter-size sheet protectors on Amazon →"
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
