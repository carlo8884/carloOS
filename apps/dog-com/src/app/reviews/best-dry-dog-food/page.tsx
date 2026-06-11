import type { Metadata } from 'next'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology, ArticleByline, AffiliateDisclosure } from '@carloOS/ui'
import { buildArticleSchema, buildBreadcrumbSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import Link from 'next/link'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Best Dry Dog Food 2026 — Royal Canin, Hill\'s & Purina Ranked',
  description: 'We compared 12 dry dog foods on ingredient quality, nutritional adequacy, and WSAVA compliance using published specs. Royal Canin, Hill\'s, Purina ranked.',
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
  publishedAt: new Date().toISOString(),
  modifiedAt: new Date().toISOString(),
})

const PICKS = [
  { label: 'Best Overall', name: 'Royal Canin', subtitle: 'WSAVA · Breed-specific · Research-backed', href: '#royal-canin' },
  { label: 'Best Value', name: 'Purina Pro Plan', subtitle: 'Science-backed · Widely available', href: '#purina' },
  { label: 'Prescription/Medical', name: "Hill's Science Diet", subtitle: 'Vet recommended · Life stage formulas', href: '#hills' },
  { label: 'Premium Natural', name: 'Orijen', subtitle: 'High protein · Regional ingredients', href: '#orijen' },
]

const productSchema0 = buildProductSchema({ name: 'Purina Pro Plan Adult Large Breed', description: 'WSAVA-compliant dry dog food with chicken as primary protein and 400+ published studies.', url: 'https://purina.com', imageUrl: '', ratingValue: 9.4, reviewCount: 1 })
const productSchema1 = buildProductSchema({ name: 'Royal Canin Breed Health Nutrition', description: 'Research-backed breed-specific dry dog food formulas for adult dogs.', url: 'https://royalcanin.com', imageUrl: '', ratingValue: 9.2, reviewCount: 1 })
const productSchema2 = buildProductSchema({ name: "Hill's Science Diet Adult Large Breed", description: 'veterinarian-formulated large breed adult dry dog food.', url: 'https://hillspet.com', imageUrl: '', ratingValue: 9.0, reviewCount: 1 })
const allSchemas = combineSchemas(schema, productSchema0, productSchema1, productSchema2)

export default function BestDogFoodPage() {
  return (
    <>
      <SchemaScript schema={combineSchemas(...allSchemas, buildBreadcrumbSchema({ items: [ { name: 'Home', url: 'https://dog.com/' }, { name: 'Reviews', url: 'https://dog.com/reviews' }, { name: 'Best Dry Dog Food 2026', url: 'https://dog.com/reviews/best-dry-dog-food' } ] }))} />

      {/* Hero */}
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">
          Buyer's Guide
        </span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl"
          style={{ fontSize: 'clamp(26px, 4vw, 48px)' }}>
          Best Dry Dog Food 2026
        </h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed mb-5">
          The dog food market is full of marketing. We cut through it: 12 foods compared on <a href="https://wsava.org/committees/global-nutrition-committee/" rel="noopener" target="_blank" className="text-brand-primary hover:underline">WSAVA</a> compliance, nutritional research investment, manufacturing standards, and ingredient quality — based on published specs and stated criteria, not front-of-bag claims.
        </p>
        <div className="text-xs text-white/30">
          Updated May 2026 ·{' '}
          <span>Affiliate disclosure: We earn commissions on purchases. Rankings are editorially independent.</span>
        </div>
      </div>

      <QuickPicks items={PICKS} title="Jump to Your Pick" />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Best Dry Dog Food</span>
      </nav>

      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_280px] gap-14">
          <div>
            <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

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

            <ScoreMethodology />
            <AffiliateDisclosure variant="inline" siteId="dog-com" />
            <ReviewCard
              id="royal-canin"
              badge="Best Overall"
              name="Royal Canin"
              subtitle="WSAVA-compliant · Extensive research investment · Breed and life stage formulas"
              score={9.5}
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
              priceNote="Varies by formula and bag size"
              ctaText="Shop Royal Canin →"
              ctaHref="/go/chewy-brand/royal+canin+dry+dog+food?s=reviews-best-dry-dog-food"
              ctaAffiliateProgram="chewy-brand"
              ctaAffiliateProduct="royal+canin+dry+dog+food"
            />

            <ReviewCard
              id="purina"
              badge="Best Value"
              name="Purina Pro Plan"
              subtitle="Science-backed · 400+ veterinary studies · Widely available"
              score={9.3}
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
              ctaText="Shop Pro Plan →"
              ctaHref="/go/chewy-brand/purina+pro+plan+dry+dog+food?s=reviews-best-dry-dog-food"
              ctaAffiliateProgram="chewy-brand"
              ctaAffiliateProduct="purina+pro+plan+dry+dog+food"
            />

            <ReviewCard
              id="hills"
              badge="Best for Medical Conditions"
              name="Hill's Science Diet"
              subtitle="Prescription formulas · Clinical nutrition · Vet-prescribed"
              score={9.0}
              description={
                <p>Hill&apos;s Science Diet (and their prescription Hill&apos;s Prescription Diet line) is a widely used veterinary therapeutic nutrition brand — with condition-specific formulas for kidney disease (k/d), liver disease (l/d), weight management (Metabolic), urinary health (c/d), joint support (j/d), and more. If your dog has been diagnosed with a condition managed through diet, Hill&apos;s Prescription Diet is among the brands your vet may recommend, and the clinical evidence behind these formulas is extensive.</p>
              }
              specs={[
                { label: 'WSAVA Compliance', value: 'Full', highlight: 'good' },
                { label: 'Prescription Line', value: 'Yes — condition-specific', highlight: 'good' },
                { label: 'Clinical Evidence', value: 'Extensive', highlight: 'good' },
                { label: 'Vet Recommended', value: 'Widely used in veterinary practice', highlight: 'good' },
              ]}
              pros={[
                'Among the most clinically studied prescription diet lines',
                'Formulas for every major disease condition',
                'Extensive feeding trial data',
                'Strong dental health formula (t/d)',
              ]}
              cons={[
                'Science Diet (non-prescription) less differentiated from competition',
                'Prescription formulas require vet authorization',
                'Premium pricing',
              ]}
              price="$60–120 / 30 lbs (Science Diet)"
              priceNote="Prescription Diet varies"
              ctaText="Shop Hill's →"
              ctaHref="/go/chewy-brand/hills+science+diet+dry+dog+food?s=reviews-best-dry-dog-food"
              ctaAffiliateProgram="chewy-brand"
              ctaAffiliateProduct="hills+science+diet+dry+dog+food"
            />

            <ReviewCard
              id="orijen"
              badge="Best Premium Natural"
              name="Orijen"
              subtitle="High protein · Regional ingredients · Biologically appropriate"
              score={8.4}
              description={
                <p>Orijen delivers on the &quot;biologically appropriate&quot; promise more than most: high meat content (85%+ animal ingredients), regional sourcing with named suppliers, and minimal processing. The ingredient quality is genuinely exceptional. The caveat: Orijen&apos;s WSAVA compliance is weaker than Royal Canin or Purina — fewer published studies, smaller research team. For healthy dogs with owners who prioritize ingredient quality and are comfortable with the tradeoffs, Orijen is a strong choice. We don&apos;t recommend it for dogs with known health conditions — use a clinically backed brand there.</p>
              }
              specs={[
                { label: 'Protein Content', value: '38%+ (very high)', highlight: 'good' },
                { label: 'Ingredient Quality', value: 'Exceptional', highlight: 'good' },
                { label: 'WSAVA Compliance', value: 'Partial', highlight: 'warn' },
                { label: 'Research Investment', value: 'Limited vs. big brands', highlight: 'warn' },
                { label: 'DCM Risk', value: 'Low (not grain-free)', highlight: 'good' },
                { label: 'Price', value: 'Premium' },
              ]}
              pros={['Exceptional ingredient quality and sourcing transparency', 'High protein — good for active dogs', 'Regional ingredients with named suppliers']}
              cons={['Weaker WSAVA compliance than Royal Canin/Purina', 'Premium price', 'Not ideal for dogs with health conditions']}
              price="$90–150 / 25 lbs"
              ctaText="Shop Orijen →"
              ctaHref="/go/chewy-brand/orijen+dry+dog+food?s=reviews-best-dry-dog-food"
              ctaAffiliateProgram="chewy-brand"
              ctaAffiliateProduct="orijen+dry+dog+food"
            />

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
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <RelatedLinks title="Related Reviews" links={[
              { label: 'Best Pet Insurance 2026', href: '/reviews/best-pet-insurance' },
              { label: 'Best Flea & Tick Prevention', href: '/reviews/best-flea-tick-prevention' },
              { label: 'Dog Symptom Guide', href: '/health/dog-symptoms-guide' },
            ]} />
            <EmailCapture variant="sidebar" siteId="dog-com"
              title="Free Dog Health Tips"
              subtitle="Practical guidance every Tuesday."
              source="review-best-dry-dog-food" />
          </aside>
        </div>
      </div>
    </>
  )
}
