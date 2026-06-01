import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
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
        { name: 'Brands' },
        { name: 'Kirkland Signature — An Independent Evaluation', href: '/brands/kirkland-signature-evaluation' },
      ]}
      schema={schema}
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
        <p>Kirkland Signature is Costco&apos;s private-label brand, including a well-regarded pet food line evaluated here on the PetFood.com five-dimension rubric. Its standout feature is value — premium-positioned formulation at a notably lower price per pound than name-brand competitors. The store-brand model also raises the central question of who manufactures it and how much the supply chain is disclosed. The evaluation is independent and never influenced by any commercial relationship. See <a href="/tools/food-cost-calculator">Food Cost Calculator</a> and <a href="/guides/methodology">Scoring Methodology</a>.</p>
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

        <h2 id="sources">Sources</h2>
        <ul>
          <li>Association of American Feed Control Officials. <em>2025 AAFCO Official Publication</em> — Dog and Cat Food Nutrient Profiles (Chapter 4); ingredient definitions and Model Regulations for Pet Food (Chapter 6).</li>
          <li>National Research Council. <em>Nutrient Requirements of Dogs and Cats.</em> National Academies Press, 2006 — the authoritative species-specific nutrient-requirement reference underlying the AAFCO profiles.</li>
          <li>World Small Animal Veterinary Association (WSAVA) Global Nutrition Committee. <em>Global Nutrition Guidelines</em> and <em>Recommendations on Selecting Pet Foods</em> owner handout.</li>
          <li>U.S. Food and Drug Administration, Center for Veterinary Medicine. <em>Pet Food Labels — General</em>; <em>Animal Food Ingredients: Regulatory Framework</em>; FDA CVM Recalls &amp; Withdrawals database.</li>
        </ul>
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. We do not provide individualized veterinary advice.
          Therapeutic diets, diagnosed disease, and breed-specific nutritional concerns require a
          licensed veterinarian and, where indicated, a board-certified veterinary nutritionist.
        </p>
      </div>
    </ArticleLayout>
  )
}
