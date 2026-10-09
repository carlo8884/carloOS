import type { Metadata } from 'next'
import { HopDisclosure } from '../../../components/HopDisclosure'
import { TableShopLink, ComparisonFoot, EmailCapture, PrimaryHop, buildMetadata, ArticleLayout, FAQAccordion, RelatedLinks, ReviewCard, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox } from '@carloOS/ui'

// Request-time env, same as the insurance comparison. A set partner tag
// renders the quote link; an unset tag stays a disabled button.
export const dynamic = 'force-dynamic'

export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "What Pet Insurance Covers (and Doesn't) | Vets.co", description: "Accident and illness plans cover injuries, illness, surgery, diagnostics, and often hereditary conditions. Learn what is typically covered and what is excluded.", path: '/insurance/what-pet-insurance-covers', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: "What Pet Insurance Covers and Doesn't", description: 'A breakdown of covered conditions, common exclusions, and plan types in pet insurance.', url: 'https://vets.co/insurance/what-pet-insurance-covers', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-09-06T00:00:00Z' })
const FAQS = [
  { question: "Does pet insurance cover routine and wellness care?", answer: "Standard accident-and-illness policies generally do not cover routine wellness care such as annual exams, vaccinations, flea and tick prevention, or dental cleanings. These are predictable, budgetable costs, and insurance is designed for unexpected expenses. Many insurers offer optional wellness or preventive-care add-ons for an extra premium that reimburse some routine costs, but these typically return roughly what you pay in and are better viewed as a budgeting tool than true insurance." },
  { question: "Are hereditary and congenital conditions covered?", answer: "Many modern accident-and-illness plans do cover hereditary and congenital conditions — such as hip dysplasia or heart defects — provided they were not pre-existing before the policy began and any breed-specific waiting periods have passed. This is a meaningful difference between plans, especially for purebred dogs with known genetic risks. Always confirm in the policy wording, because coverage of hereditary conditions and the associated waiting periods vary by insurer." },
  { question: "Does insurance cover dental disease?", answer: "Coverage of dental care varies widely. Most plans cover dental treatment resulting from accidents, such as a broken tooth, and many cover illness-related dental disease like extractions for periodontal disease, often with conditions such as proof of prior dental care. Routine cleanings are usually excluded unless you add a wellness rider. Because dental coverage is one of the most inconsistent areas across insurers, it is worth reading the specific policy language carefully." },
]
export default function WhatCoversPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <ArticleLayout siteId="vets-co"
        heroHop={<PrimaryHop href='/go/embrace/home?s=insurance-what-pet-insurance-covers' label='Get an Embrace quote →' holdWithoutPartnerId />}
        heroExtra={<HopDisclosure siteId="vets-co" href="/go/embrace/home?s=insurance-what-pet-insurance-covers" />}
        hero={{ title: "What Pet Insurance Covers (and Doesn't)", subtitle: 'Most pet insurance sold today is accident-and-illness coverage, which pays toward unexpected injuries and diseases — but every policy has exclusions, and the differences between plans live in the details. Knowing what is typically covered, what is usually excluded, and where plans diverge lets you choose coverage that fits your pet.', category: 'Insurance Guide', authorName: 'Vets.co Editorial', publishedAt: 'June 2026', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Insurance', href: '/insurance' }, { name: 'What It Covers', href: '/insurance/what-pet-insurance-covers' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Plan Types</div>
            {[['Accident-only', 'Injuries only, lowest cost'], ['Accident & illness', 'Most common, broad coverage'], ['Wellness add-on', 'Routine care budgeting']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Quote prep checklist', href: '/tools/insurance-quote-prep' }, { label: 'How Pet Insurance Works', href: '/insurance/how-pet-insurance-works' }, { label: 'Pre-Existing Conditions', href: '/insurance/pre-existing-conditions' }, { label: 'Wellness Plans vs. Insurance', href: '/insurance/wellness-plans-vs-insurance' }]} />

        </>}
      >
        <div className="carloOS-article">

          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-09-06T00:00:00Z" reviewedBy="Editorial team" />
          <EmailCapture
            variant="inline"
            siteId="vets-co"
            addressOnly
            title="Shopping checklist"
            ctaText="Copy checklist"
            source="insurance-what-pet-insurance-covers"
            checklist={[
              "These are predictable, budgetable costs, and insurance is designed for unexpected expenses.",
              "This is a meaningful difference between plans, especially for purebred dogs with known genetic risks.",
              "Always confirm in the policy wording, because coverage of hereditary conditions and the associated waiting periods vary by insurer.",
              "Routine cleanings are usually excluded unless you add a wellness rider.",
              "Because dental coverage is one of the most inconsistent areas across insurers, it is worth reading the specific policy language carefully.",
              "Pet insurance comes in three broad forms.",
            ]}
          />


          <CalloutBox variant="info" title="Read the policy, not the marketing">
            Two plans advertised as comprehensive can differ enormously in waiting periods, hereditary-condition coverage, dental rules, and exam-fee handling. The marketing page tells you what is covered in broad strokes; the policy document tells you what is actually covered. Always read the sample policy before enrolling.
          </CalloutBox>

          <h2>The Three Plan Types</h2>
          <p>Pet insurance comes in three broad forms. <strong>Accident-only</strong> plans cover injuries — fractures, lacerations, swallowed objects, toxin ingestion — and are the cheapest, suiting young or budget-constrained owners who want catastrophe protection. <strong>Accident-and-illness</strong> plans, the most common, add coverage for diseases ranging from infections to cancer, and are what most people mean by pet insurance. <strong>Wellness add-ons</strong> are optional riders that reimburse routine care; they are budgeting tools rather than true insurance. A 3-tab divider set is how those three categories stay labeled instead of one unmarked stack.</p>

          <h2>What Is Typically Covered</h2>
          <p>A standard accident-and-illness policy generally covers diagnostics (bloodwork, imaging, biopsies), surgery and hospitalization, prescription medications related to a covered condition, emergency and specialist care, cancer treatment, and treatment for chronic illnesses. Many modern plans also cover hereditary and congenital conditions, behavioral therapy, and alternative therapies, though these vary by insurer. The unifying principle is that the condition must be unexpected and not pre-existing. How a condition that showed signs before enrollment is treated is in the <a href="/insurance/pre-existing-conditions" className="text-brand-primary underline">pre-existing conditions guide</a>.</p>

          <h2>What Is Usually Excluded</h2>
          <p>Common exclusions include pre-existing conditions (anything showing signs before the policy or during waiting periods), routine and preventive care unless a wellness rider is added, breeding and pregnancy costs, cosmetic or elective procedures, and food or supplements. Some plans exclude or limit specific hereditary conditions for certain breeds, or impose waiting periods for orthopedic issues. An assorted highlighter set is how typical coverage and usual exclusions stay marked on the sample policy. Reading the exclusions list is as important as reading the coverage list.</p>

          <h2>Where Plans Diverge</h2>
          <p>The biggest differences between plans tend to be in four areas: whether exam or consultation fees are reimbursed, how hereditary and congenital conditions are handled, the length of waiting periods (especially for orthopedic conditions), and dental coverage rules. Removable page flags are how those exam-fee, hereditary, dental, and waiting-period clauses stay flagged on the sample policy . Two plans can look identical in headline coverage yet differ by thousands of dollars in a real claim because of these details. This is why side-by-side comparison of policy documents, not advertisements, is essential.</p>

          <h2>Matching Coverage to Your Pet</h2>
          <p>A young mixed-breed dog with no known risks may be well served by a straightforward accident-and-illness plan. A purebred with documented hereditary risk benefits from a plan that clearly covers those conditions with short waiting periods. An owner focused purely on catastrophe protection might choose accident-and-illness with a high deductible and high limit and skip the wellness rider. Understanding what each plan type covers — and excludes — lets you align coverage with your pet's specific risk profile.</p>

          <h2 id="kit">Supplies for reading a policy</h2>
          <p>A 3-tab divider set keeps accident-only, accident-and-illness, and a wellness add-on as three labeled categories. An assorted highlighter set marks typical coverage and usual exclusions on a sample policy. Removable page flags mark exam-fee, hereditary, dental, and waiting-period clauses. These are paperwork tools, not a treatment and not a ranked product list.</p>

          <HopDisclosure siteId="vets-co" href={["/go/amazon-brand/3+tab+dividers?s=insurance-what-pet-insurance-covers", "/go/amazon-brand/assorted+highlighter+set?s=insurance-what-pet-insurance-covers", "/go/amazon-brand/removable+page+flags?s=insurance-what-pet-insurance-covers"]} />

          {/* Money path — live amazon-brand search hops
              (3-tab dividers /
              assorted highlighter set /
              removable page flags).
              These are educational
              coverage / paperwork tools,
              not a ranked product list, not a
              substitute for veterinary care, no Rx
              / first-aid kit / thermometer /
              carrier / insurance-brand ASIN hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1169
              monthly+desk+pad+calendar /
              self+inking+date+stamp /
              letter+size+file+jacket,
              #1168
              four+column+accounting+pad /
              letter+size+poly+envelope /
              desktop+receipt+organizer,
              #1167
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
              hardcover+weekly+appointment+planner /
              wall+mounted+magnetic+monthly+planner.
              Carrier quote CTAs stay on
              /go/embrace and /go/lemonade —
              not amazon-brand hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop related supplies
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">Amazon search links go to general supplies. They are not a ranked product list and they do not replace veterinary care.</p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/3+tab+dividers?s=insurance-what-pet-insurance-covers"
                amazonLabel="Browse 3-tab dividers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/assorted+highlighter+set?s=insurance-what-pet-insurance-covers"
                amazonLabel="Browse assorted highlighter sets on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/removable+page+flags?s=insurance-what-pet-insurance-covers"
                amazonLabel="Browse removable page flags on Amazon →"
              />
          </div>
          </div>

          <h2 id="quote">Insurers With Different Coverage Models</h2>
          <p>What a plan covers — and whether wellness or preventive care can be added — varies by insurer. The two below take different approaches to that question; for the full side-by-side, see our <a href="/reviews/best-pet-insurance">best pet insurance comparison</a>. Always read the policy&apos;s coverage and exclusions before enrolling. The <a href="/tools/pet-insurance-worth-it-calculator">worth-it calculator</a> turns a quote into the eligible-cost level where that policy pays for itself. Enter illness and accident costs only.</p>
          <HopDisclosure siteId="vets-co" href={["/go/embrace/home?s=insurance-what-pet-insurance-covers", "/go/lemonade/home?s=insurance-what-pet-insurance-covers"]} />
          <ReviewCard
            id="embrace"
            badge="Wellness Add-On"
            name="Embrace"
            subtitle="Accident-and-illness with an optional wellness rewards plan"
            winner
            description={
              <p>An accident-and-illness insurer that also offers an optional Wellness Rewards plan, which can reimburse routine care that standard insurance excludes — useful if you want both catastrophic protection and help with preventive costs. Coverage and exclusions still apply to the core policy; read them when you quote.</p>
            }
            specs={[
              { label: 'Core', value: 'Accident and illness' },
              { label: 'Wellness option', value: 'Available add-on', highlight: 'good' },
              { label: 'Model', value: 'Pay-then-claim' },
            ]}
            pros={['Optional wellness/preventive add-on', 'Covers many hereditary conditions', 'Diminishing deductible feature']}
            cons={['Wellness add-on is a budgeted benefit, not insurance', 'Standard exclusions apply']}
            price="Quote-based"
            ctaText="Get a Quote →"
            ctaHref="/go/embrace/home?s=insurance-what-pet-insurance-covers" holdWithoutPartnerId
            ctaAffiliateProgram="embrace"
            ctaAffiliateProduct="home"
          />
          <ReviewCard
            id="lemonade"
            badge="App-First"
            name="Lemonade Pet"
            subtitle="Accident-and-illness with optional preventive packages"
            description={
              <p>An app-first insurer offering accident-and-illness coverage with optional preventive-care packages bundled on top. The digital claims flow is a draw for owners who want fast, app-based submission. Availability varies by state; confirm coverage details and exclusions for your location when you quote.</p>
            }
            specs={[
              { label: 'Core', value: 'Accident and illness' },
              { label: 'Preventive', value: 'Optional package', highlight: 'good' },
              { label: 'Claims', value: 'App-based' },
            ]}
            pros={['Fast app-based claims', 'Optional preventive packages', 'Often competitive premiums']}
            cons={['Availability varies by state', 'Preventive package is not insurance']}
            price="Quote-based"
            ctaText="Get a Quote →"
            ctaHref="/go/lemonade/home?s=insurance-what-pet-insurance-covers"
            ctaAffiliateProgram="lemonade"
            ctaAffiliateProduct="home"
          />

          <h2 id="who">Who should quote which</h2>
          <p>Both cards are quote-based. Wellness and preventive extras are already described as add-ons, not the insurance policy.</p>
          <div className="overflow-x-auto my-6 max-w-full">
            <table className="w-full text-sm border-collapse table-fixed sm:table-auto min-w-0 sm:min-w-[36rem] [&_th]:break-words [&_td]:break-words">
              <thead>
                <tr className="bg-brand-surface border-b-2 border-brand-primary text-left">
                  <th className="p-3 font-bold text-brand-dark">If you need</th>
                  <th className="p-3 font-bold text-brand-dark">Quote</th>
                  <th className="p-3 font-bold text-brand-dark">From the card</th>
                  <th className="p-3 font-bold text-brand-dark">Limit on the card</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-border">
                  <td className="p-3 text-brand-text-mid">Accident-and-illness plus an optional wellness rewards plan</td>
                  <td className="p-3 font-bold text-brand-dark"><a href="#embrace" className="text-brand-primary">Embrace</a><TableShopLink href={"/go/embrace/home?s=insurance-what-pet-insurance-covers"} product={"Embrace"} holdWithoutPartnerId /></td>
                  <td className="p-3 text-brand-text-mid">Wellness Add-On. Optional wellness plan. Diminishing deductible. Quote-based</td>
                  <td className="p-3 text-brand-text-mid">The wellness add-on is a budgeted benefit, not insurance. Standard exclusions apply</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 text-brand-text-mid">App-based claims, with preventive packages kept separate</td>
                  <td className="p-3 font-bold text-brand-dark"><a href="#lemonade" className="text-brand-primary">Lemonade Pet</a><TableShopLink href={"/go/lemonade/home?s=insurance-what-pet-insurance-covers"} product={"Lemonade Pet"} /></td>
                  <td className="p-3 text-brand-text-mid">App-First. Optional preventive packages. Quote-based</td>
                  <td className="p-3 text-brand-text-mid">Availability varies by state. The preventive package is not insurance</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ComparisonFoot updated="2026-10-09" />

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />
        </div>
      </ArticleLayout>
    </>
  )
}
