import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology, AffiliateDisclosure} from '@carloOS/ui'
import { buildArticleSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Best Joint Supplements for Dogs 2025 — Cosequin | Dog.com',
  description: 'Evidence-graded joint supplements for dogs. Dasuquin, Cosequin DS, fish oil, and CBD ranked by the research',
  path: '/reviews/best-joint-supplements',
  category: 'Health Reviews',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Best Joint Supplements for Dogs 2025',
  description: 'Dasuquin, Cosequin, fish oil ranked by evidence for canine joint disease.',
  url: 'https://dog.com/reviews/best-joint-supplements',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2025-05-01T00:00:00Z',
})

const PICKS = [
  { label: 'Best Evidence', emoji: '🏆', name: 'Dasuquin with MSM', subtitle: 'ASU + glucosamine + MSM · Best study support', href: '#dasuquin' },
  { label: 'Best Fish Oil', emoji: '🐟', name: 'Nordic Naturals Omega-3', subtitle: 'Marine EPA/DHA · Anti-inflammatory', href: '#fish-oil' },
  { label: 'Best Budget', emoji: '💰', name: 'Cosequin DS', subtitle: 'Widely available · NASC certified', href: '#cosequin' },
  { label: 'Emerging', emoji: '◎', name: 'CBD (Vetri-CBD)', subtitle: 'Promising evidence · Vet-formulated', href: '#cbd' },
]

const productSchema0 = buildProductSchema({ name: 'Nutramax Dasuquin with MSM', description: 'Glucosamine, chondroitin, ASU and MSM joint supplement for dogs.', url: 'https://nutramax.com', imageUrl: '', ratingValue: 9.2, reviewCount: 1 })
const productSchema1 = buildProductSchema({ name: 'Nordic Naturals Omega-3 Pet', description: 'Marine EPA and DHA omega-3 supplement for dogs.', url: 'https://nordicnaturals.com', imageUrl: '', ratingValue: 9.3, reviewCount: 1 })
const productSchema2 = buildProductSchema({ name: 'Cosequin DS Maximum Strength', description: 'NASC-certified glucosamine and chondroitin supplement for dogs.', url: 'https://nutramax.com', imageUrl: '', ratingValue: 8.8, reviewCount: 1 })
const allSchemas = combineSchemas(schema, productSchema0, productSchema1, productSchema2)

export default function BestJointSupplementsPage() {
  return (
    <AffiliateDisclosure variant="banner">
      <SchemaScript schema={allSchemas} />
      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">⚕️ Evidence-Based · May 2025</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl"
          style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>
          Best Joint Supplements for Dogs 2025
        </h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
          The pet supplement market is full of products with minimal evidence. We graded each major joint supplement category by the actual research — what works, what&apos;s promising, and what&apos;s expensive placebo.
        </p>
      </div>

      <QuickPicks items={PICKS} />

      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid">Best Joint Supplements</span>
      </nav>

      <div className="px-container sm:px-container-sm py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-14">
          <div>
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-lg p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Supplements Are Not a Substitute for NSAIDs</div>
              <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                Dogs with diagnosed osteoarthritis or significant joint disease need veterinary management — typically NSAIDs (Galliprant, Carprofen, Meloxicam) alongside supplements. Joint supplements reduce inflammation and support joint structure; they do not replace pain management. The correct approach is both. If your dog is limping or showing signs of joint pain, veterinary evaluation comes first.
              </p>
            </div>

            <ScoreMethodology />
            <ReviewCard
              id="dasuquin"
              badge="Best Evidence"
              badgeEmoji="🏆"
              name="Nutramax Dasuquin with MSM"
              subtitle="Avocado/Soybean Unsaponifiables (ASU) + Glucosamine + Chondroitin + MSM"
              score={9.2}
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
              ctaText="Shop Dasuquin →"
              ctaHref="https://www.amazon.com/s?k=dasuquin+with+msm"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="dasuquin-msm"
            />

            <ReviewCard
              id="fish-oil"
              badge="Best Anti-Inflammatory"
              badgeEmoji="🐟"
              name="Nordic Naturals Omega-3 Pet"
              subtitle="Marine EPA + DHA · Anti-inflammatory · Skin, coat, cognitive benefit"
              score={9.3}
              description={<p>Fish oil (EPA and DHA omega-3 fatty acids) has among the strongest published evidence of any joint supplement (Roush et al., JAVMA 2010; multiple ACVS-cited reviews) — for joint inflammation, skin and coat, cardiovascular support, and emerging cognitive benefit in senior dogs. The anti-inflammatory mechanism of EPA and DHA is well-established and clinically relevant for osteoarthritis management. Nordic Naturals publishes third-party heavy-metal testing and is widely recommended for pet omega-3 supplementation. Dose for joint benefit: 20–55mg combined EPA/DHA per kg body weight daily — significantly more than most fish oil products suggest on the label. Calculate the dose based on EPA/DHA content, not total fish oil volume.</p>}
              specs={[
                { label: 'Active Ingredients', value: 'EPA + DHA (marine)', highlight: 'good' },
                { label: 'Third-Party Tested', value: 'Yes (heavy metals)', highlight: 'good' },
                { label: 'Evidence Level', value: 'Strong — most studied supplement', highlight: 'good' },
                { label: 'Additional Benefits', value: 'Skin, coat, cardiovascular, cognitive' },
                { label: 'Dose', value: '20–55mg EPA+DHA per kg/day' },
              ]}
              pros={['Strongest evidence of any supplement category', 'Multiple additional health benefits', 'Third-party heavy metal tested', 'Widely available']}
              cons={['Dose calculation required — label suggestions are often too low', 'Some dogs refuse fish-flavored supplements', 'Blood thinner at very high doses — discuss with vet']}
              price="$25–45"
              priceNote="Calculate dose by EPA+DHA content"
              ctaText="Shop Nordic Naturals →"
              ctaHref="https://www.amazon.com/s?k=nordic+naturals+omega+pet"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="nordic-naturals-omega-pet"
            />

            <ReviewCard
              id="cosequin"
              badge="Best Budget Glucosamine"
              badgeEmoji="💰"
              name="Cosequin DS Maximum Strength"
              subtitle="Glucosamine + Chondroitin · NASC certified · Widely available"
              score={8.8}
              description={<p>Cosequin DS is the most widely prescribed glucosamine-chondroitin supplement by veterinarians — because it has the NASC quality seal, it has been on the market long enough to have clinical feedback, and it is significantly more affordable than Dasuquin. Clinical evidence for plain glucosamine-chondroitin (without ASU) is moderate — some dogs show meaningful improvement, others do not respond. The 4–6 week trial is warranted for any dog with joint disease. If Cosequin DS does not produce visible improvement after 6 weeks, stepping up to Dasuquin (with ASU) is a reasonable next step.</p>}
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
              ctaText="Shop Cosequin DS →"
              ctaHref="https://www.amazon.com/s?k=cosequin+ds+maximum+strength"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="cosequin-ds"
            />

            <ReviewCard
              id="cbd"
              badge="Emerging Evidence"
              badgeEmoji="◎"
              name="CBD for Dogs (Vetri-CBD, ElleVet)"
              subtitle="2018 Cornell study · Pain reduction in arthritic dogs · Use vet-formulated brands"
              score={8.4}
              description={<p>A 2018 Cornell University study (JAVMA) showed statistically significant reduction in pain and improvement in mobility in arthritic dogs given CBD at 2mg/kg twice daily vs placebo — measured by force plate analysis and pain scoring. The evidence base is early but the 2018 Cornell study is the most rigorous clinical trial in the field to date. The major caveat: the CBD market has minimal quality control — many products contain significantly less CBD than labeled, or contain THC (toxic to dogs). If trying CBD: use products with a Certificate of Analysis from a third-party lab (ElleVet and Vetri-Science are both transparent on this), use dog-specific formulations, and discuss dose with your vet. Do not use human CBD products on dogs.</p>}
              specs={[
                { label: 'Evidence Level', value: 'Emerging — Cornell 2018 study', highlight: 'good' },
                { label: 'Effective Dose', value: '2mg/kg twice daily (Cornell)' },
                { label: 'Quality Control', value: 'Highly variable — use COA-verified brands', highlight: 'warn' },
                { label: 'THC', value: 'Must be 0% — toxic to dogs', highlight: 'warn' },
              ]}
              pros={['Cornell clinical trial shows real effect', 'Non-NSAID mechanism useful as adjunct', 'ElleVet and Vetri-CBD are quality-verified']}
              cons={['Market quality control is poor — many products misrepresented', 'More expensive than glucosamine', 'Discuss dose and brand with your vet before using']}
              price="$40–80/month at therapeutic dose"
              ctaText="Shop ElleVet CBD →"
              ctaHref="https://www.ellevetsciences.com"
              ctaAffiliateProgram="ellevet"
              ctaAffiliateProduct="ellevet-cbd"
            />
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
              { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' },
            ]} />
            <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance every Tuesday." source="review-joint-supplements" />
          </aside>
        </div>
      </div>
    </AffiliateDisclosure>
  )
}
