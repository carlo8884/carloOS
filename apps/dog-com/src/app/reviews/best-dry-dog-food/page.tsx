import type { Metadata } from 'next'
import { HopDisclosure } from '../../../components/HopDisclosure'
import { TableShopLink, RelatedReads, ComparisonFoot, EmailCapture, PrimaryHop, buildMetadata, ReviewCard, QuickPicks, RelatedLinks, ArticleByline, CrossPortfolioCard, FAQAccordion, PriceAsOf} from '@carloOS/ui'
import { buildArticleSchema, buildBreadcrumbSchema, buildProductSchema, combineSchemas, SchemaScript, buildItemListSchema} from '@carloOS/ui'
import Link from 'next/link'
import { crossSiteHref } from '@carloOS/config'


export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Best Dry Dog Food 2026 — Royal Canin, Hill\'s & Purina Ranked',
  description: 'Dry dog foods ranked on published ingredient, adequacy, and WSAVA criteria. Royal Canin, Hill\'s Science Diet, and Purina Pro Plan.',
  path: '/reviews/best-dry-dog-food',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Best Dry Dog Food 2026',
  description: 'Best dry dog foods ranked on ingredient quality, WSAVA compliance, and manufacturing standards.',
  url: 'https://dog.com/reviews/best-dry-dog-food',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2026-10-07T00:00:00Z',
})

const PICKS = [
  { label: 'Best Overall', name: 'Royal Canin', subtitle: 'WSAVA · Breed-specific · Research-backed', href: '#royal-canin', pickHop: '/go/chewy-brand/royal+canin+dry+dog+food?s=reviews-best-dry-dog-food' },
  { label: 'Best Value', name: 'Purina Pro Plan', subtitle: 'Science-backed · Widely available', href: '#purina' },
  { label: 'Prescription/Medical', name: "Hill's Science Diet", subtitle: 'Vet recommended · Life stage formulas', href: '#hills' },
  { label: 'Premium Natural', name: 'Orijen', subtitle: 'High protein · Regional ingredients', href: '#orijen' },
]

const productSchema0 = buildProductSchema({ name: 'Royal Canin', description: 'WSAVA-compliant dry dog food with breed and life-stage formulas and AAFCO feeding trials.', url: 'https://dog.com/go/chewy-brand/royal+canin+dry+dog+food?s=reviews-best-dry-dog-food', imageUrl: '', reviewBody: 'Top pick on this page: full WSAVA compliance and AAFCO feeding trials.' })
const productSchema1 = buildProductSchema({ name: 'Purina Pro Plan', description: 'Science-backed dry dog food. Pro Plan, not regular Purina, meets the WSAVA criteria used on this page.', url: 'https://dog.com/go/chewy-brand/purina+pro+plan+dry+dog+food?s=reviews-best-dry-dog-food', imageUrl: '', reviewBody: 'Best-value pick on this page at the same scientific standard as the top pick.' })
const productSchema2 = buildProductSchema({ name: "Hill's Science Diet", description: 'Veterinarian-formulated dry dog food, including prescription formulas.', url: 'https://dog.com/go/chewy-brand/hills+science+diet+dry+dog+food?s=reviews-best-dry-dog-food', imageUrl: '', reviewBody: 'Leads this page on prescription and life-stage formulas.' })
const productSchema3 = buildProductSchema({ name: 'Orijen', description: 'High-protein dry dog food. This page places it below the WSAVA-compliant picks.', url: 'https://dog.com/go/chewy-brand/orijen+dry+dog+food?s=reviews-best-dry-dog-food', imageUrl: '', reviewBody: 'Premium ingredient list. Weaker WSAVA compliance than Royal Canin or Purina Pro Plan on this page.' })
const allSchemas = combineSchemas(schema, productSchema0, productSchema1, productSchema2, productSchema3)

const FOOD_FAQS = [
  {
    question: 'Which dry dog food is the top pick on this page?',
    answer: 'Royal Canin is the top pick on this page because the manufacturer employs veterinary nutritionists, runs AAFCO feeding trials, and publishes research — the WSAVA criteria used here. Purina Pro Plan is the best-value pick at the same standard. Hill\'s Science Diet leads on prescription formulas.',
  },
  {
    question: 'What does WSAVA compliance mean on this page?',
    answer: 'Whether the manufacturer employs qualified nutritionists, conducts feeding trials rather than formulation-only testing, and can answer questions about manufacturing. Price and palatability are secondary on this ranking.',
  },
  {
    question: 'Why does this page flag grain-free formulas with peas, lentils, or chickpeas?',
    answer: 'The FDA\'s dilated cardiomyopathy investigation identified high-legume grain-free formulas as a risk factor. This page treats that as a reason to avoid those formulas even when the ingredient list looks appealing.',
  },
]

const itemList = buildItemListSchema({
  name: "Best Dry Dog Food 2026",
  items: PICKS.map((pick) => ({ name: pick.name, url: ({ "Royal Canin": "https://dog.com/go/chewy-brand/royal+canin+dry+dog+food?s=reviews-best-dry-dog-food", "Purina Pro Plan": "https://dog.com/go/chewy-brand/purina+pro+plan+dry+dog+food?s=reviews-best-dry-dog-food", "Orijen": "https://dog.com/go/chewy-brand/orijen+dry+dog+food?s=reviews-best-dry-dog-food" }[pick.name] ?? `https://dog.com/reviews/best-dry-dog-food${pick.href}`) })),
})
export default function BestDogFoodPage() {
  return (
    <>
      <SchemaScript schema={combineSchemas(...allSchemas, itemList, buildBreadcrumbSchema({ items: [ { name: 'Home', url: 'https://dog.com/' }, { name: 'Reviews', url: 'https://dog.com/reviews' }, { name: 'Best Dry Dog Food 2026', url: 'https://dog.com/reviews/best-dry-dog-food' } ] }))} />

      {/* Hero */}
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">
          Buyer's Guide
        </span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl"
          style={{ fontSize: 'clamp(26px, 4vw, 48px)' }}>
          Best Dry Dog Food 2026
        </h1>
        <p data-fold="answer" className="text-base text-white/85 leading-snug max-w-2xl mb-4">Royal Canin is the top dry dog food because the maker runs AAFCO feeding trials and employs veterinary nutritionists.</p>
        <PriceAsOf date="2026-10-03" tone="dark" />
        <div data-fold="offer">
          <PrimaryHop href='/go/chewy-brand/royal+canin+dry+dog+food?s=reviews-best-dry-dog-food' label='Check price of Royal Canin dry dog food on Amazon' />
        <HopDisclosure siteId="dog-com" href="/go/chewy-brand/royal+canin+dry+dog+food?s=reviews-best-dry-dog-food" />
        </div>
        <EmailCapture
          variant="inline"
          siteId="dog-com"
          addressOnly
          title="Shopping checklist"
          ctaText="Copy checklist"
          source="reviews-best-dry-dog-food"
          checklist={[
            "Purina Pro Plan is the best-value pick at the same standard.",
            "Hill's Science Diet leads on prescription formulas.",
            "Price and palatability are secondary on this ranking.",
            "The FDA's dilated cardiomyopathy investigation identified high-legume grain-free formulas as a risk factor.",
            "This page treats that as a reason to avoid those formulas even when the ingredient list looks appealing.",
          ]}
        />

        <div className="mt-5 [&_.text-brand-primary]:!text-brand-dark">
          <QuickPicks items={PICKS} title="Jump to Your Pick" embedded />
        </div>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed mb-5">
          Twelve dry foods are compared on <a href="https://wsava.org/committees/global-nutrition-committee/" rel="noopener" target="_blank" className="text-brand-primary underline underline-offset-2">WSAVA</a> compliance, nutritional research investment, manufacturing standards, and ingredient quality — based on published specs and stated criteria, not front-of-bag claims.
        </p>
        <div className="text-xs text-white/80">
          Updated May 2026 ·{' '}
          <span>Rankings are editorially independent.</span>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium" aria-current="page">Best Dry Dog Food 2026</span>
      </nav>

      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_280px] gap-14 min-w-0">
          <div className="min-w-0">
            <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-10-07T00:00:00Z" reviewedBy="Editorial team" />

            {/* TL;DR */}
            <p className="text-lg text-brand-text-mid leading-relaxed italic mb-8">
              <strong className="not-italic">TL;DR.</strong> Royal Canin is our top dry dog food pick — it meets WSAVA guidelines, runs AAFCO feeding trials, and employs board-certified veterinary nutritionists. Purina Pro Plan is the best value at the same scientific standard. Hill&apos;s Science Diet leads on prescription formulas. Avoid grain-free formulas heavy in peas, lentils, or chickpeas — the FDA flagged these in its DCM investigation.
            </p>

            {/* Methodology callout */}
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-lg p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">How We Ranked</div>
              <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                Our ranking criteria: <strong>WSAVA compliance</strong> (does the manufacturer employ qualified nutritionists, conduct feeding trials, and publish research?), <strong>nutritional adequacy</strong> (AAFCO statement type — formulation vs feeding trial), <strong>ingredient quality and sourcing transparency</strong>, and <strong>DCM risk</strong> (avoiding high-legume grain-free formulas under FDA investigation). Price and palatability are secondary factors.
              </p>
            </div>

            <HopDisclosure siteId="dog-com" href={["/go/chewy-brand/royal+canin+dry+dog+food?s=reviews-best-dry-dog-food", "/go/chewy-brand/purina+pro+plan+dry+dog+food?s=reviews-best-dry-dog-food", "/go/chewy-brand/hills+science+diet+dry+dog+food?s=reviews-best-dry-dog-food", "/go/chewy-brand/orijen+dry+dog+food?s=reviews-best-dry-dog-food"]} />
            <ReviewCard
              id="royal-canin"
              badge="Best Overall"
              name="Royal Canin"
              subtitle="WSAVA-compliant · Extensive research investment · Breed and life stage formulas"
              winner
              description={
                <div>
                  <p>Royal Canin is among the most widely veterinarian-recommended dog food brands — not because of marketing spend, but because of genuine investment in nutritional science. Per the company, they employ over 600 scientists, conduct extensive feeding trials, and publish research. Their breed-specific formulas (Labrador, Golden Retriever, French Bulldog, German Shepherd) are genuinely differentiated for breed-specific nutritional needs and kibble geometry, not just marketing segmentation.</p>
                  <p>Full WSAVA compliance: they employ board-certified veterinary nutritionists, conduct AAFCO feeding trials (not just formulation testing), and can answer detailed questions about ingredient sourcing and manufacturing. This level of transparency is the benchmark the rest of the industry should meet.</p>
                </div>
              }
              specs={[
                { label: 'WSAVA Compliance', value: 'Full', highlight: 'good' },
                { label: 'Nutritional Testing', value: 'AAFCO feeding trials', highlight: 'good' },
                { label: 'In-house Nutritionists', value: '600+ scientists', highlight: 'good' },
                { label: 'Breed-Specific', value: 'Yes — genuine', highlight: 'good' },
                { label: 'DCM Risk', value: 'Low', highlight: 'good' },
                { label: 'Price Point', value: 'Mid-premium' },
              ]}
              pros={[
                'Among the most research-backed brands in the industry',
                'Full WSAVA compliance — strong sourcing transparency',
                'Breed-specific formulas with genuine nutritional differentiation',
                'AAFCO feeding trials (not just formulation testing)',
                'Widely available through vets, Chewy, Amazon',
              ]}
              cons={[
                'Not the most appealing ingredient list for "natural" seekers',
                'Mid-premium price — not the cheapest option',
                'Some breed formulas feel overly segmented',
              ]}
              priceLabel="Price Range"
              price="$55–110 / 30 lbs"
              priceNote="Varies by formula and bag size dated 2026-10-03."
              ctaText="Check price of Royal Canin dry dog food on Amazon"
              ctaHref="/go/chewy-brand/royal+canin+dry+dog+food?s=reviews-best-dry-dog-food"
              ctaAffiliateProgram="chewy-brand"
              ctaAffiliateProduct="royal+canin+dry+dog+food"
            />

            <ReviewCard
              id="purina"
              badge="Best Value"
              name="Purina Pro Plan"
              subtitle="Science-backed · 400+ veterinary studies · Widely available"
              description={
                <div>
                  <p>Purina Pro Plan is frequently cited among the brands veterinarians choose for their own dogs — an anecdotal pattern, not a formal survey. Purina is among the larger investors in nutritional research in the pet food category, with over 400 published studies per the company. They were one of the first to develop the link between taurine and DCM, and they have consistently been on the right side of the grain-free controversy.</p>
                  <p>Pro Plan specifically (not regular Purina) meets WSAVA guidelines and uses AAFCO feeding trials. The Sport, Sensitive Skin & Stomach, and Adult formulas are among the most evidence-backed dog foods available at their price point. Widely available, excellent palatability, consistent quality.</p>
                </div>
              }
              specs={[
                { label: 'WSAVA Compliance', value: 'Full', highlight: 'good' },
                { label: 'Research', value: '400+ published studies', highlight: 'good' },
                { label: 'DCM Risk', value: 'Low', highlight: 'good' },
                { label: 'Palatability', value: 'Excellent', highlight: 'good' },
                { label: 'Availability', value: 'Everywhere', highlight: 'good' },
                { label: 'Price Point', value: 'Mid-range (great value)' },
              ]}
              pros={[
                'Frequently cited among vets\' choices for their own dogs (anecdotal)',
                'Extensive research investment — 400+ studies per the company',
                'Excellent palatability — picky eaters usually accept it',
                'Strong value at price point',
              ]}
              cons={[
                'Some formulas include artificial colors/preservatives',
                'Not "clean label" for owners who prioritize ingredient aesthetics',
              ]}
              price="$45–90 / 30 lbs"
              priceNote="dated 2026-10-03."
              ctaText="Shop Purina Pro Plan dry dog food on Amazon →"
              ctaHref="/go/chewy-brand/purina+pro+plan+dry+dog+food?s=reviews-best-dry-dog-food"
              ctaAffiliateProgram="chewy-brand"
              ctaAffiliateProduct="purina+pro+plan+dry+dog+food"
            />

            <ReviewCard
              id="hills"
              badge="Best for Medical Conditions"
              name="Hill's Science Diet"
              subtitle="Prescription formulas · Clinical nutrition · Vet-prescribed"
              description={
                <p>Hill&apos;s Science Diet (and their prescription Hill&apos;s Prescription Diet line) is a widely used veterinary therapeutic nutrition brand — with condition-specific formulas for kidney disease (k/d), liver disease (l/d), weight management (Metabolic), urinary health (c/d), joint support (j/d), and more. If your dog has been diagnosed with a condition managed through diet, Hill&apos;s Prescription Diet is among the brands your vet may recommend. Check the prescribed formula label for what that page prints. Weighing the kibble in a weight-management formula is the habit on the <a href="/health/dog-obesity" className="text-brand-primary underline">dog obesity guide</a>.</p>
              }
              specs={[
                { label: 'WSAVA Compliance', value: 'Full', highlight: 'good' },
                { label: 'Prescription Line', value: 'Yes — condition-specific', highlight: 'good' },
                { label: 'Clinical Evidence', value: 'Check the prescribed formula label' },
                { label: 'Vet Recommended', value: 'Widely used in veterinary practice', highlight: 'good' },
              ]}
              pros={[
                'Prescription formulas are sold through a veterinarian. Check that formula label.',
                'Formulas for every major disease condition',
                'Check the prescribed formula label for feeding-trial language',
                'Strong dental health formula (t/d)',
              ]}
              cons={[
                'Science Diet (non-prescription) less differentiated from competition',
                'Prescription formulas require vet authorization',
                'Premium pricing',
              ]}
              price="$60–120 / 30 lbs (Science Diet)"
              priceNote="Prescription Diet varies dated 2026-10-03."
              ctaText="Shop Hill's Science Diet dry dog food on Amazon →"
              ctaHref="/go/chewy-brand/hills+science+diet+dry+dog+food?s=reviews-best-dry-dog-food"
              ctaAffiliateProgram="chewy-brand"
              ctaAffiliateProduct="hills+science+diet+dry+dog+food"
            />

            <ReviewCard
              id="orijen"
              badge="Best Premium Natural"
              name="Orijen"
              subtitle="High protein · Regional ingredients · Biologically appropriate"
              description={
                <p>The current US Orijen Original page lists 85% quality animal ingredients and crude protein minimum 38%. The same ingredient list includes whole red lentils, chickpeas, peas, and lentil fiber. This page does not call that list grain-free. Orijen&apos;s WSAVA compliance is weaker than Royal Canin or Purina — fewer published studies, smaller research team. For healthy dogs with owners who prioritize ingredient quality and are comfortable with the tradeoffs, Orijen is a strong choice. We don&apos;t recommend it for dogs with known health conditions — use a clinically backed brand there.</p>
              }
              specs={[
                { label: 'Protein Content', value: '38%+ (very high)', highlight: 'good' },
                { label: 'Ingredient Quality', value: 'Exceptional', highlight: 'good' },
                { label: 'WSAVA Compliance', value: 'Partial', highlight: 'warn' },
                { label: 'Research Investment', value: 'Limited vs. big brands', highlight: 'warn' },
                { label: 'DCM Risk', value: 'Ingredient list includes lentils, peas, and chickpeas', highlight: 'warn' },
                { label: 'Price', value: 'Premium' },
              ]}
              pros={['Exceptional ingredient quality and sourcing transparency', 'High protein — good for active dogs', 'Regional ingredients with named suppliers']}
              cons={['Weaker WSAVA compliance than Royal Canin/Purina', 'Premium price', 'Not ideal for dogs with health conditions']}
              price="$90–150 / 25 lbs"
              priceNote="dated 2026-10-03."
              ctaText="Shop Orijen on Amazon →"
              ctaHref="/go/chewy-brand/orijen+dry+dog+food?s=reviews-best-dry-dog-food"
              ctaAffiliateProgram="chewy-brand"
              ctaAffiliateProduct="orijen+dry+dog+food"
            />

            <div className="mt-10">
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-3">Who should buy which</h2>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-4">
                Each row restates the badge, price range, and tradeoff already on the card above. The prices are the ranges printed on those cards.
              </p>
              <div className="overflow-x-auto max-w-full min-w-0">
                <table className="w-full text-sm border-collapse table-fixed sm:table-auto min-w-0 sm:min-w-[36rem] [&_th]:break-words [&_td]:break-words">
                  <thead>
                    <tr className="bg-brand-surface border-b-2 border-brand-primary text-left">
                      <th className="p-3 font-bold text-brand-dark">If this is the dog</th>
                      <th className="p-3 font-bold text-brand-dark">Buy</th>
                      <th className="p-3 font-bold text-brand-dark">Already on the card</th>
                      <th className="p-3 font-bold text-brand-dark">Tradeoff</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">Healthy dog, and you want the research standard</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#royal-canin" className="text-brand-primary">Royal Canin</a><TableShopLink href={"/go/chewy-brand/royal+canin+dry+dog+food?s=reviews-best-dry-dog-food"} product={"Royal Canin"} /></td>
                      <td className="p-3 text-brand-text-mid">Best Overall. Full WSAVA, AAFCO feeding trials. $55–110 / 30 lbs</td>
                      <td className="p-3 text-brand-text-mid">Mid-premium, and the ingredient list is not a “natural” label</td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">Same scientific bar, lower spend</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#purina" className="text-brand-primary">Purina Pro Plan</a><TableShopLink href={"/go/chewy-brand/purina+pro+plan+dry+dog+food?s=reviews-best-dry-dog-food"} product={"Purina Pro Plan"} /></td>
                      <td className="p-3 text-brand-text-mid">Best Value. Full WSAVA. $45–90 / 30 lbs</td>
                      <td className="p-3 text-brand-text-mid">Some formulas include artificial colors or preservatives</td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">A diagnosed condition the vet is managing with diet</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#hills" className="text-brand-primary">Hill&apos;s Science Diet</a><TableShopLink href={"/go/chewy-brand/hills+science+diet+dry+dog+food?s=reviews-best-dry-dog-food"} product={"Hill&apos;s Science Diet"} /></td>
                      <td className="p-3 text-brand-text-mid">Best for Medical Conditions. Prescription line needs vet authorization. Science Diet $60–120 / 30 lbs</td>
                      <td className="p-3 text-brand-text-mid">Non-prescription Science Diet is less differentiated; Prescription Diet is the clinical line</td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">Healthy dog, and ingredient sourcing is the priority</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#orijen" className="text-brand-primary">Orijen</a><TableShopLink href={"/go/chewy-brand/orijen+dry+dog+food?s=reviews-best-dry-dog-food"} product={"Orijen"} /></td>
                      <td className="p-3 text-brand-text-mid">Best Premium Natural. 38%+ protein. Partial WSAVA. $90–150 / 25 lbs</td>
                      <td className="p-3 text-brand-text-mid">This page does not recommend it for dogs with known health conditions</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ComparisonFoot updated="2026-10-08" />
            </div>

            {/* Key buying guidance */}
            <div className="mt-10 bg-brand-surface border border-brand-border rounded-lg p-7">
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">The One Thing to Know</h2>
              <p className="text-base text-brand-text-mid leading-relaxed mb-4">
                The most important thing when choosing a dog food is not the ingredient list — it&apos;s the manufacturer&apos;s commitment to nutritional science. Ask: Do they employ board-certified veterinary nutritionists? Do they conduct AAFCO feeding trials (not just formulation testing)? Can they answer detailed questions about their manufacturing?
              </p>
              <p className="text-base text-brand-text-mid leading-relaxed">
                Avoid grain-free diets with high legume content (peas, lentils, chickpeas as primary ingredients) — the FDA&apos;s DCM investigation identified these as a risk factor. This rules out most &quot;boutique&quot; brand formulas regardless of how appealing the ingredient list looks.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">Questions this ranking answers</h2>
              <FAQAccordion items={FOOD_FAQS} />
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <RelatedLinks title="Related Reviews" links={[
              { label: 'Daily food grams', href: '/tools/dog-food-amount-calculator' },
              { label: 'Best Pet Insurance 2026', href: crossSiteHref('vets-co', '/reviews/best-pet-insurance') },
              { label: 'Best Flea & Tick Prevention', href: '/reviews/best-flea-tick-prevention' },
              { label: 'Dog Symptom Guide', href: '/health/dog-symptoms-guide' },
            ]} />

          </aside>
        </div>
      </div>
      <CrossPortfolioCard currentSite="dog-com" contentType="review" variant="footer" />
      <RelatedReads siteId="dog-com" path="/reviews/best-dry-dog-food" />
    </>
  )
}
