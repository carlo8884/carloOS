import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  buildFAQSchema,
  buildProductSchema,
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
  title: 'Kirkland Signature Pet Food — Independent Evaluation | PetFood.com',
  description:
    'Five-dimension evaluation of Costco Kirkland Signature pet food — the value proposition, who manufactures it, AAFCO posture, transparency, and recall history.',
  path: '/brands/kirkland-signature-evaluation',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Kirkland Signature Pet Food — Independent Evaluation | PetFood.com',
  description:
    'Five-dimension evaluation of Costco Kirkland Signature pet food — the value proposition, who manufactures it, AAFCO posture, transparency, and recall history.',
  url: 'https://petfood.com/brands/kirkland-signature-evaluation',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

// Editorial Product/Review schema for the single scored pick on this page
// (QC §1.4 — editorial Review only, never AggregateRating; the rating mirrors
// the disclosed on-page editorial score).
const productSchema = buildProductSchema({
  name: 'Kirkland Signature Pet Food',
  description:
    'Premium-positioned, named-meat-forward store-brand diet at a notably lower price per pound. The main rubric weakness is thinner supply-chain transparency as a contract-manufactured store brand. Confirm the AAFCO statement and life stage on the specific bag.',
  reviewBody:
    'One of the strongest value options — premium-positioned, named-meat-forward formulas at a notably lower price per pound, useful for large dogs. Thinner sourcing and quality-control disclosure than brands that own their plants. Confirm the AAFCO statement and life stage on the bag.',
  reviewAuthorName: 'PetFood.com Editorial',
  ratingValue: 8.0,
})
// Content-aware FAQ derived from the sections above — calibrated, sourced-tone
// answers only (QC §1: no clinical claims, no superlatives).
const FAQ = [
  {
    question: 'Who actually makes Kirkland Signature pet food?',
    answer:
      'As a Costco store brand, Kirkland Signature pet food is manufactured by a contract producer rather than by Costco itself; Diamond Pet Foods has been a known manufacturer of certain Kirkland lines. The store brand inherits the contract manufacturer’s quality-control and recall record, which is why identifying the maker matters when evaluating it.',
  },
  {
    question: 'Is Kirkland Signature comparable to premium name brands?',
    answer:
      'On price-to-formulation value, it is one of the stronger options: named-meat-forward, premium-positioned formulas at a notably lower price per pound. The main rubric weakness is transparency — contract manufacturer, sourcing, and quality-control disclosure are thinner than for brands that own their plants and publish research. That is a disclosure gap, not a quality verdict.',
  },
  {
    question: 'Has Kirkland Signature pet food been recalled?',
    answer:
      'Because Kirkland pet food has been made by Diamond Pet Foods, its recall exposure is tied to that manufacturer’s record, including the major 2012 Salmonella recall that affected Diamond-made products. Recall history should be evaluated by cause, severity, and corrective response, with the FDA CVM Recalls and Withdrawals database as the source of record.',
  },
  {
    question: 'Does the grain-free DCM question apply to Kirkland formulas?',
    answer:
      'Kirkland lines include both grain-inclusive and grain-free formulas. For the grain-free SKUs, the standard evaluation applies: check whether the formula is legume-heavy, since the legume-inclusive grain-free pattern is the one associated — though not proven causally — with the FDA diet-associated DCM investigation. Owners of DCM-predisposed breeds should raise the question with a veterinarian.',
  },
]

const pageSchema = combineSchemas(schema, productSchema, buildFAQSchema({ questions: FAQ }))

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

export default function KirklandSignatureEvaluationPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Kirkland Signature — An Independent Evaluation',
        subtitle:
          "Kirkland Signature, Costco's store brand, is among the best-value premium-positioned pet foods on the market, and its value-to-quality ratio is genuinely strong on several dimensions. But store-brand status raises specific questions about who actually makes it and how transparent the supply chain is. This independent evaluation applies the PetFood.com five-dimension rubric. Never paid placement.",
        category: 'Brand Evaluation',
        publishedAt: 'May 2026',
        readTime: '10 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Brands', href: '/brands' },
        { name: 'Kirkland Signature — An Independent Evaluation', href: '/brands/kirkland-signature-evaluation' },
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
              { label: 'The Value Proposition', href: '#value' },
              { label: 'Who Makes It', href: '#whomakes' },
              { label: 'Formulation', href: '#formulation' },
              { label: 'AAFCO Posture', href: '#aafco' },
              { label: 'Transparency', href: '#transparency' },
              { label: 'Recall History', href: '#recall' },
              { label: 'Where to Buy', href: '#buy' },
              { label: 'Common Questions', href: '#faq' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'How to Choose a Pet Food', href: '/guides/how-to-choose-a-pet-food' },
              { label: 'Pet Food Recalls and the FDA', href: '/guides/pet-food-recalls-and-fda' },
              { label: 'Ingredient Splitting', href: '/ingredients/ingredient-splitting' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="kirkland-signature-evaluation"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
        <StockImage manifestKey="petfood-com:brand-kirkland-signature" fallbackKey="petfood-com:category-brands" priority aspect="16:9" variant="wide" caption="Kirkland Signature — Costco's store brand evaluated on value, the who-makes-it question, and recall exposure." />
        <p>Kirkland Signature is Costco&apos;s private-label brand, including a well-regarded pet food line evaluated here on the PetFood.com five-dimension rubric. Its standout feature is value — premium-positioned formulation at a notably lower price per pound than name-brand competitors. The store-brand model also raises the central question of who manufactures it and how much the supply chain is disclosed. The evaluation is independent and never influenced by any commercial relationship. See <a href="/tools/food-cost-calculator">Food Cost Calculator</a> and <a href="/guides/methodology">Scoring Methodology</a>.</p>

        <div style={{ margin: '24px 0', padding: '18px 20px', borderRadius: '12px', border: '1px solid var(--brand-border)', borderLeft: '4px solid var(--brand-primary)', background: 'var(--brand-surface)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--brand-primary-dark)', marginBottom: '8px' }}>Bottom Line</div>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: 'var(--brand-text-mid)' }}>
            On price-to-formulation value, Kirkland Signature is one of the stronger options — named-meat-forward, premium-positioned formulas at a notably lower price per pound. Its main rubric weakness is transparency: as a contract-manufactured store brand (Diamond Pet Foods has made certain lines), sourcing and quality-control disclosure are thinner than for brands that own their plants and publish research. That is a disclosure gap, not a quality verdict.
          </p>
        </div>

        <h2 id="value">The Value Proposition</h2>
        <p>Kirkland Signature pet food is consistently priced below comparable premium name brands while offering named-meat-forward formulas, which makes it one of the strongest value options for cost-conscious owners who still want a premium-positioned diet. For large dogs especially, where food cost is significant, the per-calorie savings are meaningful. Value, however, is only one dimension — it must be weighed against transparency and substantiation. See the <a href="/tools/food-cost-calculator">Food Cost Calculator</a>.</p>
        <h2 id="whomakes">Who Makes It</h2>
        <p>As a store brand, Kirkland Signature pet food is manufactured by a contract producer rather than by Costco itself; Diamond Pet Foods has been a known manufacturer of certain Kirkland lines. This matters because the store brand inherits the contract manufacturer&apos;s quality-control and recall record, and because the manufacturer relationship may not be prominently disclosed on the package. Knowing who makes a store-brand food is part of evaluating it. See <a href="/guides/pet-food-recalls-and-fda">Pet Food Recalls and the FDA</a>.</p>
        <h2 id="formulation">Formulation</h2>
        <p>Kirkland lines include grain-inclusive and grain-free formulas with named animal proteins prominent on the panel. The standard formulation evaluation applies: read the ingredient panel with ingredient-splitting and fresh-meat-first effects in mind, note whether grain-free formulas are legume-heavy (relevant to the DCM question), and check the guaranteed analysis on a dry-matter basis. The formulation is generally competitive for the price. See <a href="/ingredients/ingredient-splitting">Ingredient Splitting</a> and <a href="/ingredients/grain-free-dcm-risk">Grain-Free and DCM Risk</a>.</p>
        <h2 id="aafco">AAFCO Posture</h2>
        <p>Confirm the AAFCO nutritional adequacy statement on the specific Kirkland formula and life stage, and note whether substantiation is by feeding trial or formulation. Because the food is contract-manufactured, the depth of nutritionist involvement and research behind it depends on the manufacturer, and is less prominently disclosed than for the largest research-driven brands. The WSAVA questions are worth directing to Costco or the manufacturer. See <a href="/guides/aafco-completeness-explained">AAFCO Completeness Explained</a>.</p>
        <h2 id="transparency">Transparency</h2>
        <p>The main rubric weakness for store brands is transparency: the contract manufacturer, sourcing, quality-control practices, and nutritionist involvement are often less disclosed than for brands that own their plants and publish their research. This is not a quality verdict — the food may be well made — but the disclosure gap limits how much an owner can verify. Greater supply-chain transparency would strengthen the brand on our rubric. See <a href="/guides/how-to-choose-a-pet-food">How to Choose a Pet Food</a>.</p>
        <h2 id="recall">Recall History</h2>
        <p>Because Kirkland pet food has been made by Diamond Pet Foods, its recall exposure is tied to that manufacturer&apos;s record, including the major 2012 Salmonella recall that affected Diamond-made products. Recall history should be evaluated by cause, severity, and corrective response, with the FDA CVM database as the source of record. The store-brand model means recall risk follows the contract manufacturer, which is why identifying the maker matters. See <a href="/guides/pet-food-recalls-and-fda">Pet Food Recalls and the FDA</a>.</p>

        <h2 id="buy">Where to Buy</h2>
        <p>Kirkland Signature pet food is sold primarily at Costco, with limited availability through major retailers. If this evaluation leaves you comfortable with the value-versus-transparency trade-off, the brand-search link below surfaces the current lineup. We earn an affiliate commission on purchases made through these links at no extra cost to you, and we never rank by commission.</p>
        <AffiliateDisclosure variant="inline" siteId="petfood-com" />
        <ReviewCard
          id="kirkland-signature-retail"
          badge="Best Value"
          badgeEmoji="🛒"
          name="Kirkland Signature Pet Food"
          subtitle="Premium-positioned formula at a notably lower price per pound"
          score={8.0}
          winner
          description={
            <p>One of the strongest value options for owners who want a premium-positioned, named-meat-forward diet at a notably lower price per pound — especially for large dogs, where food cost is significant. The main rubric weakness is transparency: as a contract-manufactured store brand, sourcing and quality-control disclosure is thinner than for brands that own their plants. Confirm the AAFCO statement and life stage on the specific bag.</p>
          }
          specs={[
            { label: 'Positioning', value: 'Premium value', highlight: 'good' },
            { label: 'Price per pound', value: 'Below name brands', highlight: 'good' },
            { label: 'Transparency', value: 'Limited (store brand)', highlight: 'warn' },
            { label: 'Primary retail', value: 'Costco' },
          ]}
          pros={['Strong value per pound', 'Named-meat-forward formulas', 'Grain-inclusive and grain-free options']}
          cons={['Thinner supply-chain transparency', 'Contract-manufactured', 'Limited retail availability outside Costco']}
          price="$$ value tier"
          ctaText="Search Kirkland Signature on Amazon"
          ctaHref="/go/amazon-brand/Kirkland%20Signature%20pet%20food?s=eval-kirkland"
          ctaAffiliateProgram="amazon-brand"
          ctaAffiliateProduct="Kirkland%20Signature%20pet%20food"
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
