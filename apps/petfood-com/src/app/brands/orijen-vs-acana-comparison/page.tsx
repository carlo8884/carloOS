import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
  BuyBox,
  AffiliateDisclosure,
  ArticleSourcesList,
  ArticleByline,
  StockImage
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Orijen vs Acana — Same Parent, Different Lines',
  description:
    'Side-by-side reference comparison of Orijen and Acana (both Champion Petfoods) — ingredient panels, animal inclusion, AAFCO, recalls, and price per kcal.',
  path: '/brands/orijen-vs-acana-comparison',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Orijen vs Acana — Same Parent, Different Lines',
  description:
    'Independent side-by-side comparison of Champion Petfoods’ two flagship dog food lines, Orijen and Acana, against the PetFood.com five-dimension rubric.',
  url: 'https://petfood.com/brands/orijen-vs-acana-comparison',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const SOURCES = [
    {
      label: "Champion Petfoods. Transparency Reports, White Papers, and per-SKU ingredient panels published on the Orijen and Acana consumer sites. Treat as manufacturer-published material; verify against third-party sources where possible.",
    },
    {
      label: "FDA Investigation: Potential Link Between Certain Diets and Canine Dilated Cardiomyopathy",
      url: "https://www.fda.gov/animal-veterinary/news-events/fda-investigation-potential-link-between-certain-diets-and-canine-dilated-cardiomyopathy",
      publisher: "U.S. Food and Drug Administration, Center for Veterinary Medicine",
    },
    {
      label: "Mars Petcare. Public communications on the 2022 acquisition of Champion Petfoods.",
    },
    {
      label: "Global Food Safety Initiative. GFSI Benchmarking Requirements; SQF (Safe Quality Food) Level 2 scheme documentation.",
    },
    {
      label: "Federal court records, multi-district litigation against Champion Petfoods (2018 filings and subsequent rulings). Cited as public-record litigation context; allegations were contested and the cases were substantially dismissed at the federal level.",
    },
    {
      label: "AAFCO Official Publication — Dog and Cat Food Nutrient Profiles (Ch. 4); Model Regulations for Pet Food (Ch. 6)",
      url: "https://www.aafco.org/resources/publications/",
      publisher: "Association of American Feed Control Officials, 2025",
    },
]

export default function OrijenVsAcanaComparisonPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="brand"
      hero={{
        title: 'Orijen vs Acana',
        subtitle:
          'Orijen and Acana are both Champion Petfoods brands — same parent company, same internal nutrition group, two production sites, two distinct product lines. The most common question we see in this category is whether Orijen is meaningfully different from Acana or whether the price gap is mostly positioning. This page works the comparison through the five-dimension PetFood.com rubric.',
        category: 'Brand Comparison',
        publishedAt: 'May 2026',
        readTime: '14 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Brands', href: '/brands' },
        { name: 'Orijen vs Acana', href: '/brands/orijen-vs-acana-comparison' },
      ]}
      relatedLinks={[
        { title: 'Brands Hub', href: '/brands' },
        { title: 'Hill\'s vs Royal Canin', href: '/brands/hills-vs-royal-canin' },
        { title: 'Purina Pro Plan Evaluation', href: '/brands/purina-pro-plan-evaluation' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Parent Company Context', href: '#parent' },
              { label: 'At-a-Glance Table', href: '#at-a-glance' },
              { label: 'Ingredient Panels', href: '#ingredients' },
              { label: 'Named-Protein Percentages', href: '#protein' },
              { label: 'Manufacturing Footprint', href: '#manufacturing' },
              { label: 'AAFCO Statements', href: '#aafco' },
              { label: 'Recall History', href: '#recall' },
              { label: 'Price per 100 kcal', href: '#price' },
              { label: 'Common Buyer Questions', href: '#faq' },
              { label: 'Verdict', href: '#verdict' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Our Scoring Methodology', href: '/guides/methodology' },
              { label: 'AAFCO Completeness Explained', href: '/guides/aafco-completeness-explained' },
              { label: 'Grain-Free and DCM — The FDA Record', href: '/ingredients/grain-free-dcm-risk' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="orijen-vs-acana-comparison"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-05-28T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />
        <StockImage manifestKey="petfood-com:brand-orijen-vs-acana" fallbackKey="petfood-com:category-brands" priority aspect="16:9" variant="wide" caption="Orijen vs Acana — both Champion Petfoods lines compared on ingredients, sourcing, recalls, and price." />
        <p>
          The two brands sit close together in the premium grain-free category and are frequently
          cross-shopped. Because they share a parent (Champion Petfoods, headquartered in Edmonton,
          Alberta, with U.S. operations in Auburn, Kentucky) and a common formulation philosophy,
          the comparison is not a case of two unrelated brands. It is a case of one company running
          two product lines with distinct ingredient inclusion targets, distinct manufacturing
          facilities, and distinct price tiers.
        </p>

        <AffiliateDisclosure variant="inline" siteId="petfood-com" />
        <BuyBox
          label="Where to buy either line"
          disclosure="Both lines are available on Chewy and Amazon. We earn an affiliate commission when you purchase through these links — at no extra cost to you."
          secondaryDisclosure="We never rank by commission."
          brands={[
            {
              name: 'Orijen',
              vendors: [
                { vendor: 'chewy', href: '/go/chewy-brand/Orijen?s=orijen-vs-acana' },
                { vendor: 'amazon', href: '/go/amazon-brand/Orijen?s=orijen-vs-acana' },
              ],
            },
            {
              name: 'Acana',
              vendors: [
                { vendor: 'chewy', href: '/go/chewy-brand/Acana?s=orijen-vs-acana' },
                { vendor: 'amazon', href: '/go/amazon-brand/Acana?s=orijen-vs-acana' },
              ],
            },
          ]}
        />

        <h2 id="parent">Parent Company Context</h2>
        <p>
          Champion Petfoods was founded in 1985 in Morinville, Alberta. Acana launched first; Orijen
          followed in 2005, positioned at a higher inclusion of animal ingredients and a higher
          price point. Champion was acquired by Mars Petcare in 2022, which placed Orijen and Acana
          under the same corporate umbrella as several other premium brands (Royal Canin, IAMS, Eukanuba,
          Cesar, Pedigree, Whiskas, Nutro). The acquisition did not, on Champion&apos;s public
          statements, alter the formulation team or the two production sites; the lines continue to
          run as a distinct operating brand within Mars. Owners and clinicians who tracked the lines
          before and after the acquisition should be aware that change of ownership is a material
          fact when evaluating long-term continuity of formulation, but the operational footprint
          and the published formulation team have remained substantively stable through the
          transition.
        </p>
        <p>
          Champion publishes brand-level transparency documents on its public-facing site,
          including ingredient-origin material and feeding-trial posture, which is more disclosure
          than most peer brands in the segment offer. Independent verification of those claims is
          partial; we treat Champion-published material as a starting point and cross-reference it
          against the FDA CVM Recalls &amp; Withdrawals database and against the company&apos;s
          response to past litigation (see Recall section).
        </p>

        <h2 id="at-a-glance">At-a-Glance Comparison</h2>
        <div className="pf-compare">
          <div className="pf-compare-caption">Orijen vs Acana — side-by-side reference</div>
          <div className="pf-compare-scroll">
            <table>
              <thead>
                <tr>
                  <th scope="col">Dimension</th>
                  <th scope="col">Orijen</th>
                  <th scope="col">Acana</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Parent</th>
                  <td>Champion Petfoods (Mars Petcare)</td>
                  <td>Champion Petfoods (Mars Petcare)</td>
                </tr>
                <tr>
                  <th scope="row">Target animal-ingredient inclusion (dry recipes, published)</th>
                  <td>~85% (varies by SKU)</td>
                  <td>50–75% (varies by SKU and sub-line)</td>
                </tr>
                <tr>
                  <th scope="row">Grain-free vs grain-inclusive</th>
                  <td>Predominantly grain-free; pulses and lentils present in most SKUs</td>
                  <td>Both grain-free and grain-inclusive sub-lines (Singles, Classics)</td>
                </tr>
                <tr>
                  <th scope="row">Primary U.S. manufacturing site</th>
                  <td>DogStar Kitchens, Auburn, Kentucky</td>
                  <td>DogStar Kitchens, Auburn, Kentucky (U.S. SKUs); NorthStar Kitchens, Morinville, Alberta (Canadian SKUs)</td>
                </tr>
                <tr>
                  <th scope="row">AAFCO adequacy pathway (most SKUs)</th>
                  <td>Formulation</td>
                  <td>Formulation</td>
                </tr>
                <tr>
                  <th scope="row">FDA CVM 2018-2019 DCM dataset</th>
                  <td>Brand named in 2019 update</td>
                  <td>Brand named in 2019 update</td>
                </tr>
                <tr>
                  <th scope="row">Approximate price per 100 kcal (U.S., 2025-2026 typical)</th>
                  <td>$0.13–$0.18</td>
                  <td>$0.08–$0.12</td>
                </tr>
                <tr>
                  <th scope="row">Positioning</th>
                  <td>Higher animal-ingredient inclusion, higher price</td>
                  <td>Lower animal-ingredient inclusion, lower price, broader SKU range</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 id="ingredients">Ingredient Panels</h2>
        <p>
          Champion publishes per-SKU ingredient panels on its consumer-facing sites. Read the
          panel rather than the marketing copy. For Orijen&apos;s flagship dry recipes (e.g.,
          Original, Six Fish, Regional Red), the first ten ingredients are dominated by fresh and
          raw animal sources (chicken, turkey, eggs, multiple fish species) plus a relatively
          smaller pulse-and-tuber load than most grain-free competitors at the same price point.
          For Acana&apos;s grain-free recipes (e.g., Heritage, Wholesome Grains, Singles), the
          first ten ingredients carry a meaningful animal share but a higher relative contribution
          from pulses (red lentils, whole green peas, chickpeas) and tubers (whole potato, sweet
          potato) compared to Orijen.
        </p>
        <p>
          The Acana &quot;Singles&quot; sub-line is a limited-ingredient series built around one
          primary protein and a deliberately short ingredient list, designed for owners managing
          suspected protein intolerance. Acana &quot;Wholesome Grains&quot; is the brand&apos;s
          grain-inclusive answer to the FDA DCM-investigation period; it adds oats, sorghum, and
          millet in place of some of the pulse load. Orijen does not currently field a comparable
          grain-inclusive line in U.S. distribution.
        </p>
        <p>
          For both brands, the ingredient list reads as one of the more transparent in the
          category — named protein sources by species, named organ inclusions (liver, heart),
          named botanicals — and the published rationale for each major ingredient is documented
          on the brand site. Verification of supplier identity and country of origin is partial:
          Champion publishes regional sourcing claims by ingredient category, but does not, in
          most cases, publish supplier-level origin per SKU.
        </p>

        <h2 id="protein">Named-Protein Percentages and the &quot;Biologically Appropriate&quot; Claim</h2>
        <p>
          Champion markets both lines under the &quot;Biologically Appropriate&quot; tagline. This
          is a marketing term — it carries no AAFCO or FDA definition — and we score it at zero
          weight on its own. The substantive question is the published percentage of animal
          ingredients in each recipe.
        </p>
        <p>
          Orijen&apos;s dry recipes typically publish an animal-ingredient inclusion target around
          85% (with the remaining ~15% from vegetables, fruits, botanicals, and supplemental
          vitamins and minerals). Acana&apos;s recipes range more broadly — Heritage recipes
          typically publish around 60-65% animal inclusion; Singles and Wholesome Grains lines
          can run lower. The published percentages are inclusion targets in the formulation, not
          finished-protein percentages on the guaranteed analysis (which are reported as crude
          protein and are a function of both ingredient inclusion and dry-matter yield).
        </p>
        <p>
          On a dry-matter basis, Orijen&apos;s dry recipes typically deliver 38-42% crude protein;
          Acana Heritage recipes deliver roughly 29-34%; Acana Wholesome Grains delivers around
          27-29%. The price gap between the lines is in part a function of this animal-inclusion
          gap and in part a function of brand positioning. The two lines are not interchangeable
          on protein density; they are two distinct points on the same company&apos;s product
          gradient.
        </p>

        <h2 id="manufacturing">Manufacturing Footprint</h2>
        <p>
          Champion operates two principal facilities: DogStar Kitchens in Auburn, Kentucky (opened
          2016), and NorthStar Kitchens in Morinville, Alberta. U.S. distribution for both brands
          is primarily supplied by DogStar Kitchens; Canadian distribution is supplied by NorthStar.
          DogStar Kitchens was built specifically for the brand&apos;s pulse-and-fresh-meat
          extrusion process. Champion publishes the SQF (Safe Quality Food) Level 2 certification
          posture of both facilities, a Global Food Safety Initiative-benchmarked scheme.
        </p>
        <p>
          The two-facility footprint matters for a comparison because regional supply chains
          differ. U.S. SKUs draw on Kentucky-region fresh poultry and on regional fish and
          produce supply; Canadian SKUs draw on Alberta-region fresh meats and on Pacific-coast
          fish supply. The published ingredient lists are recipe-identical between the regions for
          most SKUs, but the upstream supply is not. Owners who care about country of origin
          specifically should verify, for any given SKU, which facility supplies it.
        </p>

        <h2 id="aafco">AAFCO Statements</h2>
        <p>
          For both lines, the majority of dry SKUs carry an AAFCO nutritional adequacy statement
          via the formulation pathway rather than via feeding trial. Sample statement language
          (paraphrased from the bag): &quot;[Product Name] is formulated to meet the nutritional
          levels established by the AAFCO Dog Food Nutrient Profiles for All Life Stages,
          including growth of large size dogs (70 lb or more as an adult).&quot;
        </p>
        <p>
          Under our methodology, formulation-pathway certification is scored neutrally — adequate
          to meet the model, but not as strong a signal of completeness as feeding-trial
          certification. A reader who places strong weight on the feeding-trial criterion (a
          position consistent with the WSAVA Global Nutrition Committee&apos;s guidance) will find
          both Orijen and Acana similarly positioned on this dimension: neither line is feeding-trial
          tested at the SKU level for most of its catalog. This is a category-wide pattern in the
          premium grain-free segment, not unique to Champion.
        </p>

        <h2 id="recall">Recall History</h2>
        <p>
          A search of the FDA CVM Recalls &amp; Withdrawals database for Champion Petfoods, Orijen,
          and Acana over the past decade does not return a Class I or Class II recall affecting
          U.S.-distributed product. Both brands have been the subject of consumer-facing
          litigation in the United States — most notably a multi-district lawsuit filed in 2018
          alleging trace heavy-metal and BPA contamination, which Champion has contested and
          which was substantially dismissed at the federal level in subsequent rulings. The
          litigation did not produce an FDA recall and did not result in withdrawal of any SKU.
        </p>
        <p>
          The brand-name listing in the FDA CVM&apos;s 27 June 2019 DCM update included both
          Orijen and Acana, among 16 brands disproportionately represented in the case-report
          dataset. As discussed on our <a href="/ingredients/grain-free-dcm-risk">grain-free and
          DCM page</a>, the FDA was explicit that the listing did not constitute a regulatory
          finding of causation, and the agency&apos;s position on the underlying investigation
          remains open. Champion has responded with public communications, partial reformulations
          of selected SKUs to reduce pulse content, and continued participation in industry
          research. The DCM signal is part of the published record for both lines and is
          disclosed on our brand pages.
        </p>

        <h2 id="price">Price per 100 kcal</h2>
        <p>
          On a typical 2025-2026 U.S. retail price at Chewy and major retailers, Orijen dry recipes
          run roughly $0.13 to $0.18 per 100 kcal of metabolizable energy; Acana dry recipes run
          roughly $0.08 to $0.12. The gap is a function of the higher animal-ingredient inclusion
          in Orijen, the corresponding lower carbohydrate dilution, and brand positioning. For a
          50-lb dog at a moderate-activity MER of approximately 1,100 kcal per day, the Orijen
          line delivers a daily cost roughly $0.40-$0.60 higher than the Acana line — meaningful
          over a year of feeding, but not by itself decisive.
        </p>
        <p>
          We do not score on price. Cost per kcal is reported as a fact on every formula page so a
          reader can weigh it against the rest of the rubric.
        </p>

        <h2 id="faq">Common Buyer Questions</h2>
        <p><strong>Is Orijen &quot;better&quot; than Acana?</strong></p>
        <p>
          On animal-ingredient inclusion, Orijen is higher. On price, Acana is lower. On AAFCO
          pathway, recall history, manufacturing certification, and ingredient transparency, the
          two lines are substantively comparable. &quot;Better&quot; depends on which dimension
          the owner is optimizing for. We do not assign one line a higher overall score on the
          basis of animal inclusion alone, because animal inclusion is one input into one
          dimension of our rubric.
        </p>
        <p><strong>Are both lines &quot;grain-free&quot; in the sense the FDA investigated?</strong></p>
        <p>
          Most Orijen and Acana Heritage SKUs are grain-free with pulses (lentils, peas,
          chickpeas) as a meaningful carbohydrate source. These are the formulation attributes
          that drew FDA CVM attention. Acana&apos;s Wholesome Grains sub-line is grain-inclusive
          and uses oats, sorghum, and millet in place of some of the pulse load; it is not in
          the same formulation category as the lines named in the 2019 update.
        </p>
        <p><strong>If my dog is in a DCM-predisposed breed, should I feed either of these?</strong></p>
        <p>
          That is a veterinary question, not a question the bag or this page can answer. The
          FDA CVM investigation, the 2018-2022 cardiology literature, and current ACVIM-aligned
          clinical practice all support a conversation with a veterinarian — ideally one familiar
          with the breed&apos;s established DCM risk and with the published diet-cardiac
          association — before committing to a pulse-heavy grain-free formulation for a dog in
          Doberman, Boxer, Great Dane, Irish Wolfhound, Cocker Spaniel, or — on the atypical-breed
          signal — Golden Retriever.
        </p>
        <p><strong>Are these the same food in different bags?</strong></p>
        <p>
          No. They share a manufacturer, a formulation team, and a U.S. production site, but the
          recipes are distinct, the animal-inclusion targets are distinct, the price tiers are
          distinct, and several Acana sub-lines (Singles, Wholesome Grains) have no Orijen
          counterpart. They are sibling product lines, not labeling variants of a single SKU.
        </p>

        <h2 id="verdict">Verdict</h2>
        <p>
          Within the premium grain-free segment, Orijen and Acana are among the more ingredient-
          transparent brands and operate on a published two-facility manufacturing footprint with
          GFSI-benchmarked certification. Neither line carries feeding-trial AAFCO certification
          on most SKUs, both are named in the FDA CVM 2019 DCM-investigation update, and both are
          built on pulse-and-tuber carbohydrate matrices that an owner of a DCM-predisposed or
          DCM-signal breed should consider in conversation with a veterinarian. Where the two
          lines differ — animal-ingredient inclusion, price, sub-line breadth — they differ in
          ways that map cleanly to owner preference rather than to one being categorically
          superior. The brand pages for each line on PetFood.com break the SKUs down individually
          and apply the five-dimension scoring rubric.
        </p>

        <ArticleSourcesList sources={SOURCES} />
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. We do not provide individualized veterinary advice
          and we do not endorse either brand. Diet selection for a specific animal — especially
          one in a DCM-predisposed or DCM-signal breed — is a conversation for a licensed
          veterinarian and, where indicated, a board-certified veterinary cardiologist or nutritionist.
        </p>
      </div>
    </ArticleLayout>
  )
}
