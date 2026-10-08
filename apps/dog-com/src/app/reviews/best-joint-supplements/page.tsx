import type { Metadata } from 'next'
import { HopDisclosure } from '../../../components/HopDisclosure'
import Link from 'next/link'
import { TableShopLink, RelatedReads, ComparisonFoot, PrimaryHop, EmailCapture, buildMetadata, ReviewCard, QuickPicks, RelatedLinks, CrossPortfolioCard, FAQAccordion, PriceAsOf} from '@carloOS/ui'
import { buildArticleSchema, buildBreadcrumbSchema, buildProductSchema, combineSchemas, SchemaScript, buildItemListSchema} from '@carloOS/ui'
import { crossSiteHref } from '@carloOS/config'


export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Best Joint Supplements for Dogs 2026 — Cosequin | Dog.com',
  description: 'Evidence-graded joint supplements for dogs. Dasuquin, Cosequin DS, fish oil, and CBD ranked by the research',
  path: '/reviews/best-joint-supplements',
  category: 'Health Reviews',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Best Joint Supplements for Dogs 2026',
  description: 'Dasuquin, Cosequin, fish oil ranked by evidence for canine joint disease.',
  url: 'https://dog.com/reviews/best-joint-supplements',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2026-06-11T00:00:00Z',
})

const PICKS = [
  { label: 'Best Evidence', name: 'Dasuquin with MSM', subtitle: 'ASU + glucosamine + MSM · Best study support', href: '#dasuquin', pickHop: '/go/amazon-brand/dasuquin+with+msm?s=reviews-best-joint-supplements' },
  { label: 'Best Fish Oil', name: 'Nordic Naturals Omega-3', subtitle: 'Marine EPA/DHA · Anti-inflammatory', href: '#fish-oil' },
  { label: 'Best Budget', name: 'Cosequin DS', subtitle: 'Widely available · NASC certified', href: '#cosequin' },
  { label: 'Emerging', name: 'CBD (Vetri-CBD)', subtitle: 'Promising evidence · Vet-formulated', href: '#cbd' },
]

const productSchema0 = buildProductSchema({ name: 'Nutramax Dasuquin with MSM', description: 'Glucosamine, chondroitin, ASU and MSM joint supplement for dogs.', url: 'https://dog.com/go/amazon-brand/dasuquin+with+msm?s=reviews-best-joint-supplements', imageUrl: '' })
const productSchema1 = buildProductSchema({ name: 'Nordic Naturals Omega-3 Pet', description: 'Marine EPA and DHA omega-3 supplement for dogs.', url: 'https://dog.com/go/amazon-brand/nordic+naturals+omega+pet?s=reviews-best-joint-supplements', imageUrl: '' })
const productSchema2 = buildProductSchema({ name: 'Cosequin DS Maximum Strength', description: 'NASC-certified glucosamine and chondroitin supplement for dogs.', url: 'https://dog.com/go/amazon-brand/cosequin+ds+maximum+strength?s=reviews-best-joint-supplements', imageUrl: '' })
const allSchemas = combineSchemas(schema, productSchema0, productSchema1, productSchema2)

const itemList = buildItemListSchema({
  name: "Best Joint Supplements for Dogs 2026",
  items: PICKS.map((pick) => ({ name: pick.name, url: ({ 'Dasuquin with MSM': 'https://dog.com/go/amazon-brand/dasuquin+with+msm?s=reviews-best-joint-supplements', 'Nordic Naturals Omega-3': 'https://dog.com/go/amazon-brand/nordic+naturals+omega+pet?s=reviews-best-joint-supplements', 'Cosequin DS': 'https://dog.com/go/amazon-brand/cosequin+ds+maximum+strength?s=reviews-best-joint-supplements' }[pick.name] ?? `https://dog.com/reviews/best-joint-supplements${pick.href}`) })),
})
export default function BestJointSupplementsPage() {
  return (
    <>
      <SchemaScript schema={combineSchemas(...allSchemas, itemList, buildBreadcrumbSchema({ items: [ { name: 'Home', url: 'https://dog.com/' }, { name: 'Reviews', url: 'https://dog.com/reviews' }, { name: 'Best Joint Supplements for Dogs 2026', url: 'https://dog.com/reviews/best-joint-supplements' } ] }))} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">⚕️ Evidence-Based · June 2026</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl"
          style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>
          Best Joint Supplements for Dogs 2026
        </h1>
        <p data-fold="answer" className="text-base text-white/85 leading-snug max-w-2xl mb-4">Nutramax Dasuquin with MSM is the top joint supplement because the label combines glucosamine, chondroitin, and MSM.</p>
        <PriceAsOf date="2026-10-05" tone="dark" />
        <div data-fold="offer">
          <PrimaryHop href='/go/amazon-brand/dasuquin+with+msm?s=reviews-best-joint-supplements' label='Check price of Nutramax Dasuquin with MSM on Amazon' />
        <HopDisclosure tone="on-dark" siteId="dog-com" href="/go/amazon-brand/dasuquin+with+msm?s=reviews-best-joint-supplements" />
        </div>
        <EmailCapture
          variant="inline"
          siteId="dog-com"
          addressOnly
          title="Shopping checklist"
          ctaText="Copy checklist"
          source="reviews-best-joint-supplements"
          checklist={[
            "Nutramax Dasuquin with MSM, marked Best Evidence, and marked the winner.",
            "The card says the dose has to be calculated because label suggestions are often too low.",
            "The CBD card prints no price, and the button goes to the vet finder.",
            "The card says many products are misrepresented and a veterinarian should decide whether it fits.",
            "The pet supplement market is full of products with minimal evidence.",
            "Dogs with diagnosed osteoarthritis or significant joint disease need veterinary management — typically NSAIDs (Galliprant, Carprofen, Meloxicam) alongside supplements.",
          ]}
        />
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
          Joint supplements on this page are ranked by the published research — what works, what&apos;s promising, and what&apos;s expensive placebo.
        </p>
      </div>

      <QuickPicks items={PICKS} />

      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid" aria-current="page">Best Joint Supplements for Dogs 2026</span>
      </nav>

      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-14 min-w-0">
          <div className="min-w-0">
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-lg p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Supplements Are Not a Substitute for NSAIDs</div>
              <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                Dogs with diagnosed osteoarthritis or significant joint disease need veterinary management — typically NSAIDs (Galliprant, Carprofen, Meloxicam) alongside supplements. Joint supplements reduce inflammation and support joint structure; they do not replace pain management. The correct approach is both. If your dog is limping or showing signs of joint pain, veterinary evaluation comes first.
              </p>
            </div>

            <HopDisclosure siteId="dog-com" href={["/go/amazon-brand/dasuquin+with+msm?s=reviews-best-joint-supplements", "/go/amazon-brand/nordic+naturals+omega+pet?s=reviews-best-joint-supplements", "/go/amazon-brand/cosequin+ds+maximum+strength?s=reviews-best-joint-supplements"]} />
            <ReviewCard
              id="dasuquin"
              badge="Best Evidence"
              name="Nutramax Dasuquin with MSM"
              subtitle="Avocado/Soybean Unsaponifiables (ASU) + Glucosamine + Chondroitin + MSM"
              winner
              description={<div>
                <p>Dasuquin is the most evidence-supported joint supplement for dogs. The key differentiator from basic glucosamine products is the addition of Avocado/Soybean Unsaponifiables (ASU) — a plant extract with documented cartilage protection and anti-inflammatory effects in human and canine clinical trials. The <a href="https://nasc.cc" rel="noopener" target="_blank" className="text-brand-primary hover:underline">NASC</a> quality seal confirms manufacturing standards. Made by Nutramax, which has the most robust research investment of any pet supplement company.</p>
                <p>The MSM (methylsulfonylmethane) component adds additional anti-inflammatory support. Clinical effect: a 2014 study in JAVMA showed significant improvement in force plate analysis (objective measurement of weight-bearing) in osteoarthritic dogs given Dasuquin vs placebo. Allow 4–6 weeks for measurable effect — onset is gradual.</p>
              </div>}
              specs={[
                { label: 'Active Ingredients', value: 'ASU + Glucosamine + Chondroitin + MSM', highlight: 'good' },
                { label: 'NASC Certified', value: 'Yes', highlight: 'good' },
                { label: 'Research', value: 'JAVMA clinical study published', highlight: 'good' },
                { label: 'Formulations', value: 'Chewables or sprinkle capsules' },
                { label: 'Onset', value: '4–6 weeks for clinical effect' },
              ]}
              pros={['Best research support of any glucosamine product', 'ASU component with documented benefit', 'NASC quality certified', 'Nutramax research investment']}
              cons={['More expensive than basic glucosamine', 'Takes 4–6 weeks for effect — long evaluation window', 'Not a substitute for NSAIDs in severe arthritis']}
              price="$40–70 for 84-count"
              priceNote="dated 2026-10-05."
              ctaText="Shop Dasuquin with MSM on Amazon →"
              ctaHref="/go/amazon-brand/dasuquin+with+msm?s=reviews-best-joint-supplements"
              ctaAffiliateProgram="amazon-brand"
              ctaAffiliateProduct="dasuquin+with+msm"
            />

            <ReviewCard
              id="fish-oil"
              badge="Best Anti-Inflammatory"
              name="Nordic Naturals Omega-3 Pet"
              subtitle="Marine EPA + DHA · Anti-inflammatory · Skin, coat, cognitive benefit"
              description={<p>Fish oil (EPA and DHA omega-3 fatty acids) has among the strongest published evidence of any joint supplement (Roush et al., JAVMA 2010; multiple ACVS-cited reviews) — for joint inflammation, skin and coat, cardiovascular support, and emerging cognitive benefit in senior dogs. The anti-inflammatory mechanism of EPA and DHA is well-established and clinically relevant for osteoarthritis management. Nordic Naturals publishes third-party heavy-metal testing and is widely recommended for pet omega-3 supplementation. Published therapeutic ranges for joint benefit fall around 20–55 mg combined EPA/DHA per kg body weight daily — often more than label suggestions — but confirm the right dose with your veterinarian and calculate from EPA/DHA content, not total fish oil volume.</p>}
              specs={[
                { label: 'Active Ingredients', value: 'EPA + DHA (marine)', highlight: 'good' },
                { label: 'Third-Party Tested', value: 'Yes (heavy metals)', highlight: 'good' },
                { label: 'Evidence Level', value: 'Strong — among the most studied supplements', highlight: 'good' },
                { label: 'Additional Benefits', value: 'Skin, coat, cardiovascular, cognitive' },
                { label: 'Published range', value: '20–55mg EPA+DHA per kg/day (confirm with vet)' },
              ]}
              pros={['Among the strongest evidence of any supplement category', 'Multiple additional health benefits', 'Third-party heavy metal tested', 'Widely available']}
              cons={['Dose calculation required — label suggestions are often too low', 'Some dogs refuse fish-flavored supplements', 'Blood thinner at very high doses — discuss with vet']}
              price="$25–45"
              priceNote="Calculate dose by EPA+DHA content dated 2026-10-05."
              ctaText="Shop Nordic Naturals omega pet on Amazon →"
              ctaHref="/go/amazon-brand/nordic+naturals+omega+pet?s=reviews-best-joint-supplements"
              ctaAffiliateProgram="amazon-brand"
              ctaAffiliateProduct="nordic+naturals+omega+pet"
            />

            <ReviewCard
              id="cosequin"
              badge="Best Budget Glucosamine"
              name="Cosequin DS Maximum Strength"
              subtitle="Glucosamine + Chondroitin · NASC certified · Widely available"
              description={<p>Cosequin DS is a widely used glucosamine-chondroitin supplement in veterinary practice — it has the NASC quality seal, has been on the market long enough to have clinical feedback, and is significantly more affordable than Dasuquin. Clinical evidence for plain glucosamine-chondroitin (without ASU) is moderate — some dogs show meaningful improvement, others do not respond. The 4–6 week trial is warranted for any dog with joint disease. If Cosequin DS does not produce visible improvement after 6 weeks, stepping up to Dasuquin (with ASU) is a reasonable next step.</p>}
              specs={[
                { label: 'Active Ingredients', value: 'Glucosamine + Chondroitin' },
                { label: 'NASC Certified', value: 'Yes', highlight: 'good' },
                { label: 'Evidence Level', value: 'Moderate' },
                { label: 'Price', value: 'Most affordable NASC option', highlight: 'good' },
                { label: 'vs Dasuquin', value: 'No ASU — slightly weaker evidence' },
              ]}
              pros={['Most affordable NASC-certified glucosamine product', 'Widely available', 'Long track record of veterinary use', 'Reasonable starting point before Dasuquin']}
              cons={['Less evidence than Dasuquin (no ASU)', 'Significant non-response rate in some dogs']}
              price="$25–45 for 120-count"
              priceNote="dated 2026-10-05."
              ctaText="Shop Cosequin DS Maximum Strength on Amazon →"
              ctaHref="/go/amazon-brand/cosequin+ds+maximum+strength?s=reviews-best-joint-supplements"
              ctaAffiliateProgram="amazon-brand"
              ctaAffiliateProduct="cosequin+ds+maximum+strength"
            />

            <ReviewCard
              id="cbd"
              badge="Emerging Evidence"
              name="CBD for Dogs (Vetri-CBD, ElleVet)"
              subtitle="2018 Cornell study · Pain reduction in arthritic dogs · Use vet-formulated brands"
              description={<p>A 2018 Cornell University study (JAVMA) showed statistically significant reduction in pain and improvement in mobility in arthritic dogs given CBD versus placebo — measured by force plate analysis and pain scoring. The evidence base is early but the 2018 Cornell study is the most rigorous clinical trial in the field to date. The major caveat: the CBD market has minimal quality control — many products contain significantly less CBD than labeled, or contain THC (toxic to dogs). CBD is not a substitute for veterinary care; if you are considering it, use products with a Certificate of Analysis from a third-party lab, use dog-specific formulations, and have your veterinarian determine whether it is appropriate and at what dose. Do not use human CBD products on dogs.</p>}
              specs={[
                { label: 'Evidence Level', value: 'Emerging — Cornell 2018 study', highlight: 'good' },
                { label: 'Dosing', value: 'Veterinarian-determined only' },
                { label: 'Quality Control', value: 'Highly variable — use COA-verified brands', highlight: 'warn' },
                { label: 'THC', value: 'Must be 0% — toxic to dogs', highlight: 'warn' },
              ]}
              pros={['Cornell clinical trial shows real effect', 'Non-NSAID mechanism useful as adjunct', 'Look for COA-verified, dog-specific formulations']}
              cons={['Market quality control is poor — many products misrepresented', 'More expensive than glucosamine', 'Discuss appropriateness, brand, and dose with your vet first']}
              ctaText="Find a Vet to Discuss CBD →"
              ctaHref="/find-a-vet"
            />
            <div className="mt-10">
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-3">Who should buy which supplement</h2>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-4">
                Four supplements have review cards. The CBD card does not print a price, and its button goes to the vet finder.
              </p>
              <div className="overflow-x-auto max-w-full min-w-0 mb-8">
                <table className="w-full text-sm border-collapse table-fixed sm:table-auto min-w-0 sm:min-w-[36rem] [&_th]:break-words [&_td]:break-words">
                  <thead>
                    <tr className="bg-brand-surface border-b-2 border-brand-primary text-left">
                      <th className="p-3 font-bold text-brand-dark">If you need</th>
                      <th className="p-3 font-bold text-brand-dark">Buy</th>
                      <th className="p-3 font-bold text-brand-dark">From the card</th>
                      <th className="p-3 font-bold text-brand-dark">Skip it when</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">The supplement with the ASU evidence</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#dasuquin" className="text-brand-primary">Nutramax Dasuquin with MSM</a><TableShopLink href={"/go/amazon-brand/dasuquin+with+msm?s=reviews-best-joint-supplements"} product={"Nutramax Dasuquin with MSM"} /></td>
                      <td className="p-3 text-brand-text-mid">Best Evidence. $40–70 for 84-count</td>
                      <td className="p-3 text-brand-text-mid">Severe arthritis that needs an NSAID. The card says this does not replace that, and the effect takes 4–6 weeks</td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">An omega-3 for inflammation</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#fish-oil" className="text-brand-primary">Nordic Naturals Omega-3 Pet</a><TableShopLink href={"/go/amazon-brand/nordic+naturals+omega+pet?s=reviews-best-joint-supplements"} product={"Nordic Naturals Omega-3 Pet"} /></td>
                      <td className="p-3 text-brand-text-mid">Best Anti-Inflammatory. $25–45</td>
                      <td className="p-3 text-brand-text-mid">The dog refuses fish flavor, or you have not worked out the dose. The card says label suggestions are often too low</td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">A lower-priced glucosamine</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#cosequin" className="text-brand-primary">Cosequin DS Maximum Strength</a><TableShopLink href={"/go/amazon-brand/cosequin+ds+maximum+strength?s=reviews-best-joint-supplements"} product={"Cosequin DS Maximum Strength"} /></td>
                      <td className="p-3 text-brand-text-mid">Best Budget Glucosamine. $25–45 for 120-count</td>
                      <td className="p-3 text-brand-text-mid">You want the ASU evidence. The card says Cosequin has less evidence than Dasuquin</td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">A CBD discussion with a vet</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#cbd" className="text-brand-primary">CBD for dogs</a></td>
                      <td className="p-3 text-brand-text-mid">Emerging Evidence. No printed price. Button goes to the vet finder</td>
                      <td className="p-3 text-brand-text-mid">You want a shop link. The card says market quality control is poor and a vet should pick the product and the dose</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ComparisonFoot updated="2026-10-08" />
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">Which joint supplement fits</h2>
              <FAQAccordion items={[
                {
                  question: 'Which supplement does this page mark as the evidence pick?',
                  answer: 'Nutramax Dasuquin with MSM, marked Best Evidence, and marked the winner. The printed price is $40–70 for an 84-count. The card says it does not replace an NSAID in severe arthritis and the effect takes 4–6 weeks.',
                },
                {
                  question: 'Which supplement does this page pick for inflammation?',
                  answer: 'Nordic Naturals Omega-3 Pet. The printed price is $25–45. The card says the dose has to be calculated because label suggestions are often too low.',
                },
                {
                  question: 'Does the CBD card name a price or a shop?',
                  answer: 'No. The CBD card prints no price, and the button goes to the vet finder. The card says many products are misrepresented and a veterinarian should decide whether it fits.',
                },
              ]} />
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Condition</div>
              {[
                { cond: 'Mild joint disease / prevention', pick: 'Fish oil + Cosequin DS' },
                { cond: 'Moderate osteoarthritis', pick: 'Dasuquin + Fish oil + vet NSAIDs' },
                { cond: 'Non-NSAID candidate', pick: 'Dasuquin + Fish oil + CBD' },
                { cond: 'Post-surgical recovery', pick: 'Dasuquin + Fish oil + physical therapy' },
                { cond: 'Prevention (large breed)', pick: 'Fish oil from young adult' },
              ].map(item => (
                <div key={item.cond} className="py-2.5 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light mb-0.5">{item.cond}</div>
                  <div className="text-xs font-bold text-brand-dark">→ {item.pick}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[
              { label: 'Dog Supplements Guide', href: '/nutrition/dog-supplements' },
              { label: 'Senior Dog Care', href: '/health/senior-dog-care' },
              { label: 'Best Pet Insurance', href: crossSiteHref('vets-co', '/reviews/best-pet-insurance') },
            ]} />

          </aside>
        </div>
      </div>
      <CrossPortfolioCard currentSite="dog-com" contentType="review" variant="footer" />
      <RelatedReads siteId="dog-com" path="/reviews/best-joint-supplements" />
    </>
  )
}
