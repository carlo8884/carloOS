import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  buildFAQSchema,
  buildProductSchema,
  buildItemListSchema,
  combineSchemas,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
  ReviewCard,
  AffiliateDisclosure,
  ArticleSourcesList,
  ArticleByline,
  StockImage
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Wellness vs Merrick — Brand Comparison | PetFood.com',
  description:
    'Side-by-side evaluation of two natural-positioned brands — corporate ownership, formulation philosophy, AAFCO posture, manufacturing, and recall history.',
  path: '/brands/wellness-vs-merrick',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Wellness vs Merrick — Brand Comparison | PetFood.com',
  description:
    'Side-by-side evaluation of two natural-positioned brands — corporate ownership, formulation philosophy, AAFCO posture, manufacturing, and recall history.',
  url: 'https://petfood.com/brands/wellness-vs-merrick',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

// Editorial Product/Review schema for the two scored brands compared on this
// page (QC §1.4 — editorial Review only, never AggregateRating; ratings mirror
// the disclosed on-page editorial scores). ItemList captures the display order.
const wellnessSchema = buildProductSchema({
  name: 'Wellness',
  description:
    'Premium natural-positioned brand with named animal proteins early on the panel and grain-inclusive and grain-free lines, owned by a large pet-nutrition holding company. Evaluate the specific formula on its AAFCO substantiation pathway and ingredient panel.',
  reviewBody:
    'Premium natural-positioned brand, named-meat-forward, with grain-inclusive and grain-free lines under a large pet-nutrition holding company despite the artisan image. Judge the specific formula on its AAFCO substantiation and panel; grain-free formulas intersect the DCM question.',
  reviewAuthorName: 'PetFood.com Editorial',
  ratingValue: 8.2,
})
const merrickSchema = buildProductSchema({
  name: 'Merrick',
  description:
    'Premium whole-food natural brand with recognizable produce and named meats, acquired by Nestle Purina, which can bring research and quality-control resources behind the natural branding. Judge the specific formula on its panel and AAFCO statement.',
  reviewBody:
    'Premium whole-food natural brand under Nestle Purina, which can bring research and quality-control resources behind the natural branding. Judge the specific formula on its panel and AAFCO statement; treat grain-free legume-heavy recipes with the DCM caution.',
  reviewAuthorName: 'PetFood.com Editorial',
  ratingValue: 8.2,
})
const itemListSchema = buildItemListSchema({
  name: 'Wellness vs Merrick',
  items: [
    { name: 'Wellness', url: 'https://petfood.com/brands/wellness-vs-merrick#wellness-retail' },
    { name: 'Merrick', url: 'https://petfood.com/brands/wellness-vs-merrick#merrick-retail' },
  ],
})
// Content-aware FAQ derived from the sections above — calibrated, sourced-tone
// answers only (QC §1: no clinical claims, no superlatives).
const FAQ = [
  {
    question: 'Who owns Wellness and Merrick?',
    answer:
      'Both are owned by large corporate parents despite their independent-artisan brand image: Merrick was acquired by Nestle Purina, and Wellness (Wellness Pet Company) sits within a large pet-nutrition holding company. Corporate ownership is neither inherently good nor bad; it matters insofar as it brings — or fails to bring — research and quality-control resources.',
  },
  {
    question: 'Is Wellness or Merrick better?',
    answer:
      'On the published evidence, the two brands are substantively comparable on our five-dimension rubric: both are natural-positioned premium lines with named animal proteins early on the panel and both grain-inclusive and grain-free options. The meaningful comparison is at the formula level — judge the specific product on its ingredient panel and AAFCO substantiation statement rather than the brand image.',
  },
  {
    question: 'Does "natural" on the bag mean higher quality?',
    answer:
      'No. "Natural" is a narrowly defined AAFCO term, not a quality guarantee, and the absence of by-products is a marketing position rather than a nutritional upgrade. Both brands lean on natural and whole-ingredient framing; the substance is in the ingredient panel, the guaranteed analysis, and the AAFCO statement.',
  },
  {
    question: 'Do the grain-free lines from these brands raise the DCM question?',
    answer:
      'Yes — as with all grain-free, the legume-inclusive formulas from either brand intersect the FDA diet-associated DCM investigation, which identified an association rather than proven causation. Owners of DCM-predisposed breeds should discuss a legume-heavy grain-free formula with a veterinarian; both brands also offer grain-inclusive lines.',
  },
]

const pageSchema = combineSchemas(schema, itemListSchema, wellnessSchema, merrickSchema, buildFAQSchema({ questions: FAQ }))

const SOURCES = [
    {
      label: "AAFCO Official Publication — Dog and Cat Food Nutrient Profiles (Ch. 4); Model Regulations for Pet Food (Ch. 6)",
      url: "https://www.aafco.org/resources/publications/",
      publisher: "Association of American Feed Control Officials, 2025",
    },
    {
      label: "Nutrient Requirements of Dogs and Cats",
      url: "https://nap.nationalacademies.org/catalog/10668/nutrient-requirements-of-dogs-and-cats",
      publisher: "National Research Council, National Academies Press, 2006",
    },
    {
      label: "WSAVA Global Nutrition Guidelines and Recommendations on Selecting Pet Foods",
      url: "https://wsava.org/committees/global-nutrition-committee/",
      publisher: "World Small Animal Veterinary Association Global Nutrition Committee",
    },
    {
      label: "Pet Food Labels — General; Animal Food Ingredients: Regulatory Framework; FDA CVM Recalls & Withdrawals",
      url: "https://www.fda.gov/animal-veterinary/animal-food-feeds/pet-food",
      publisher: "U.S. Food and Drug Administration, Center for Veterinary Medicine",
    },
]

export default function WellnessVsMerrickPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Wellness vs Merrick',
        subtitle:
          'Wellness and Merrick are two natural-positioned premium brands that occupy similar shelf space, both now under large corporate ownership despite their independent-brand image. This independent comparison runs both through the PetFood.com five-dimension rubric — ownership, formulation, AAFCO posture, manufacturing, and recalls. Never paid placement.',
        category: 'Brand Evaluation',
        publishedAt: 'May 2026',
        readTime: '11 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Brands', href: '/brands' },
        { name: 'Wellness vs Merrick', href: '/brands/wellness-vs-merrick' },
      ]}
      relatedLinks={[
        { title: 'Brands Hub', href: '/brands' },
        { title: 'Hill\'s vs Royal Canin', href: '/brands/hills-vs-royal-canin' },
        { title: 'Purina Pro Plan Evaluation', href: '/brands/purina-pro-plan-evaluation' },
        { title: 'Orijen vs Acana Comparison', href: '/brands/orijen-vs-acana-comparison' },
      ]}
      schema={pageSchema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Two Natural Brands', href: '#twobrands' },
              { label: 'Corporate Ownership', href: '#ownership' },
              { label: 'Formulation Philosophy', href: '#formulation' },
              { label: 'AAFCO Posture', href: '#aafco' },
              { label: 'Manufacturing', href: '#manufacturing' },
              { label: 'Recall History', href: '#recall' },
              { label: 'Where to Buy', href: '#buy' },
              { label: 'Common Questions', href: '#faq' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'The By-Products Myth', href: '/myths/by-products-myth' },
              { label: 'Pet Food Marketing Terms', href: '/myths/marketing-terms-decoded' },
              { label: 'How to Choose a Pet Food', href: '/guides/how-to-choose-a-pet-food' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="wellness-vs-merrick"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
        <StockImage manifestKey="petfood-com:brand-wellness-vs-merrick" fallbackKey="petfood-com:category-brands" priority aspect="16:9" variant="wide" caption="Wellness vs Merrick — two natural-positioned premium brands compared on formulation, AAFCO posture, and recalls." />
        <p>Wellness and Merrick are premium brands positioned on natural ingredients and recognizable whole foods, and both compete for the same buyer. This comparison evaluates them side by side on the PetFood.com five-dimension rubric, independent of any commercial relationship. A recurring theme is that both, despite an artisanal brand image, are owned by large corporations — a reminder that brand image and corporate reality often differ. See <a href="/myths/marketing-terms-decoded">Pet Food Marketing Terms</a> and <a href="/guides/methodology">Scoring Methodology</a>.</p>

        <div style={{ margin: '24px 0', padding: '18px 20px', borderRadius: '12px', border: '1px solid var(--brand-border)', borderLeft: '4px solid var(--brand-primary)', background: 'var(--brand-surface)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--brand-primary-dark)', marginBottom: '8px' }}>Bottom Line</div>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: 'var(--brand-text-mid)' }}>
            Wellness and Merrick are closely matched natural-positioned premium brands competing for the same buyer — and both, despite an artisanal image, are owned by large corporations (Merrick by Nestle Purina; Wellness within a large pet-nutrition holding company). Neither wins categorically on the rubric; judge the specific formula on its ingredient panel and AAFCO statement, not the natural framing. For grain-free formulas from either, the legume-inclusive DCM question applies.
          </p>
        </div>

        <h2 id="twobrands">Two Natural Brands</h2>
        <p>Both brands lean on natural and whole-ingredient marketing, with named meats, recognizable produce, and an emphasis on what they exclude (artificial colors, certain by-products). As covered elsewhere, natural is a narrowly defined AAFCO term and not a quality guarantee, and the absence of by-products is a marketing position rather than a nutritional upgrade. The brands should be judged on substance, not the natural framing. See <a href="/myths/by-products-myth">The By-Products Myth</a>.</p>
        <h2 id="ownership">Corporate Ownership</h2>
        <p>Wellness (Wellness Pet Company) and Merrick are both owned by large corporate parents — Merrick was acquired by Nestle Purina, and Wellness sits within a large pet-nutrition holding company. The independent-artisan brand image of both predates and obscures this corporate ownership. Corporate ownership is neither inherently good nor bad; it matters insofar as it brings (or fails to bring) research and quality-control resources. The point for buyers is to evaluate the reality, not the image.</p>
        <h2 id="formulation">Formulation Philosophy</h2>
        <p>Both offer grain-inclusive and grain-free lines; as with all grain-free, the legume-inclusive formulas intersect with the DCM question and the grain-free-is-not-low-carb point. Both emphasize named animal proteins early in the ingredient list, which is a transparency positive, though ingredient order can be affected by fresh-meat-first ranking and ingredient splitting. Judge the specific formula on its panel and analysis, not the brand&apos;s general philosophy. See <a href="/ingredients/ingredient-splitting">Ingredient Splitting</a> and <a href="/compare/grain-free-vs-grain-inclusive">Grain-Free vs Grain-Inclusive</a>.</p>
        <h2 id="aafco">AAFCO Posture</h2>
        <p>The key questions for both are whether diets are substantiated by feeding trial or formulation alone, whether the company employs a board-certified veterinary nutritionist, and whether it conducts research — the WSAVA-favored signals. Larger corporate ownership can bring more of this capacity, but it must be verified per brand and per formula. Owners should confirm the AAFCO statement on the specific product and ask the WSAVA questions of each company. See <a href="/guides/aafco-completeness-explained">AAFCO Completeness Explained</a>.</p>
        <h2 id="manufacturing">Manufacturing</h2>
        <p>Manufacturing arrangements (owned plants versus co-packing) and disclosed quality-control practices differ and should be evaluated per brand. Corporate ownership by a large manufacturer can provide established quality-control infrastructure. As always, the meaningful signal is transparency about where and how the food is made and what testing is done, rather than the brand&apos;s marketing. See <a href="/guides/how-to-choose-a-pet-food">How to Choose a Pet Food</a>.</p>
        <h2 id="recall">Recall History</h2>
        <p>Both brands have had recalls over the years, as most established brands have; they should be assessed by cause, severity, and response rather than count. The FDA CVM Recalls and Withdrawals database is the source of record for each brand&apos;s current history. A balanced comparison weighs the recall record alongside the other four dimensions rather than treating any single recall as decisive. See <a href="/guides/pet-food-recalls-and-fda">Pet Food Recalls and the FDA</a>.</p>

        <h2 id="buy">Where to Buy</h2>
        <p>Both are premium natural-positioned brands competing for the same buyer; judge the specific formula on its panel and AAFCO statement rather than the brand image. For grain-free formulas from either brand, the legume-inclusive DCM question applies. The brand-search links below surface the current lineups. We earn an affiliate commission on purchases through these links at no extra cost to you, and we never rank by commission.</p>
        <AffiliateDisclosure variant="inline" siteId="petfood-com" />
        <ReviewCard
          id="wellness-retail"
          badge="Natural Premium"
          badgeEmoji="🌿"
          name="Wellness"
          subtitle="Named-meat-forward natural line (grain-inclusive and grain-free)"
          score={8.2}
          description={
            <p>A premium natural-positioned brand with named animal proteins early on the panel and grain-inclusive and grain-free lines. Owned by a large pet-nutrition holding company despite the artisan image. Evaluate the specific formula on its AAFCO substantiation pathway and ingredient panel; prefer grain-inclusive unless there is a specific reason to choose grain-free.</p>
          }
          specs={[
            { label: 'Positioning', value: 'Natural premium' },
            { label: 'Lines', value: 'Grain-inclusive + grain-free' },
            { label: 'Protein listing', value: 'Named meats early', highlight: 'good' },
          ]}
          pros={['Named-meat-forward panels', 'Broad lineup', 'Grain-inclusive options']}
          cons={['Artisan image obscures corporate ownership', 'Grain-free formulas intersect the DCM question']}
          price="$$ premium"
          ctaText="Search Wellness on Chewy"
          ctaHref="/go/chewy-brand/Wellness%20pet%20food?s=wellness-vs-merrick"
          ctaAffiliateProgram="chewy-brand"
          ctaAffiliateProduct="Wellness%20pet%20food"
        />
        <ReviewCard
          id="merrick-retail"
          badge="Natural Premium"
          badgeEmoji="🍖"
          name="Merrick"
          subtitle="Whole-food natural line, now under Nestle Purina"
          score={8.2}
          description={
            <p>A premium whole-food natural brand with recognizable produce and named meats, acquired by Nestle Purina — which can bring research and quality-control resources behind the natural branding. As with Wellness, judge the specific formula on its panel and AAFCO statement, and treat grain-free legume-heavy recipes with the DCM caution.</p>
          }
          specs={[
            { label: 'Positioning', value: 'Natural premium' },
            { label: 'Owner', value: 'Nestle Purina' },
            { label: 'Lines', value: 'Grain-inclusive + grain-free' },
          ]}
          pros={['Whole-food ingredient panels', 'Large-parent QC resources', 'Named meats early']}
          cons={['Natural branding predates corporate ownership', 'Grain-free formulas intersect the DCM question']}
          price="$$ premium"
          ctaText="Search Merrick on Chewy"
          ctaHref="/go/chewy-brand/Merrick%20pet%20food?s=wellness-vs-merrick"
          ctaAffiliateProgram="chewy-brand"
          ctaAffiliateProduct="Merrick%20pet%20food"
        />

        <h2 id="faq">Common Questions</h2>
        {FAQ.map((f) => (
          <div key={f.question}>
            <p><strong>{f.question}</strong></p>
            <p>{f.answer}</p>
          </div>
        ))}

        <ArticleSourcesList sources={SOURCES} />
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. We do not provide individualized veterinary advice.
          Therapeutic diets, diagnosed disease, and breed-specific nutritional concerns require a
          licensed veterinarian and, where indicated, a board-certified veterinary nutritionist.
        </p>
      </div>
    </ArticleLayout>
  )
}
