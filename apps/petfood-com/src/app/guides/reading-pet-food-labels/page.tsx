import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
  CrossPortfolioCard,
  ArticleSourcesList
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'How to Read a Pet Food Label — Anatomy of a Bag',
  description:
    'Pet food label decoded — AAFCO product-name rules, guaranteed analysis, the splitting trick, caloric content, and feeding-guideline traps.',
  path: '/guides/reading-pet-food-labels',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'How to Read a Pet Food Label — Anatomy of a Bag',
  description:
    'Reference guide to every panel on a commercial pet food bag — product-name rules, guaranteed analysis, ingredient list, AAFCO statement, caloric content, and feeding guidelines.',
  url: 'https://petfood.com/guides/reading-pet-food-labels',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const SOURCES = [
    {
      label: "AAFCO Official Publication — Dog and Cat Food Nutrient Profiles (Ch. 4); Model Regulations for Pet Food (Ch. 6)",
      url: "https://www.aafco.org/resources/publications/",
      publisher: "Association of American Feed Control Officials, 2025",
    },
    {
      label: "U.S. Food and Drug Administration, Center for Veterinary Medicine. Pet Food Labels — General; Pet Food Labels — Product Name; Caloric Content of Pet Foods.",
    },
    {
      label: "Linder DE, Freeman LM. Evaluation of calorie density and feeding directions for commercially available diets designed for weight loss in dogs and cats. Journal of the American Veterinary Medical Association, 2010.",
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
]

export default function ReadingPetFoodLabelsPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="guide"
      hero={{
        title: 'Reading a Pet Food Label',
        subtitle:
          'A pet food bag in the United States contains six legally required pieces of information and a great deal of optional marketing copy. This guide walks the bag in the order an experienced reader walks it, calls out the four most common traps, and is honest about which pieces of text are regulated and which are not.',
        category: 'Foundational Guide',
        publishedAt: 'May 2026',
        readTime: '14 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Guides', href: '/guides' },
        { name: 'Reading a Pet Food Label', href: '/guides/reading-pet-food-labels' },
      ]}
      relatedLinks={[
        { title: 'Guides Hub', href: '/guides' },
        { title: 'How to Choose a Pet Food', href: '/guides/how-to-choose-a-pet-food' },
        { title: 'AAFCO Completeness Explained', href: '/guides/aafco-completeness-explained' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'What the Bag Must Carry', href: '#what-required' },
              { label: '1. Product Name Rules', href: '#product-name' },
              { label: '2. Guaranteed Analysis', href: '#guaranteed-analysis' },
              { label: 'As-Fed vs Dry Matter', href: '#as-fed' },
              { label: '3. Ingredient List', href: '#ingredients' },
              { label: 'The Splitting Trick', href: '#splitting' },
              { label: '4. AAFCO Statement', href: '#aafco' },
              { label: '5. Caloric Content', href: '#calories' },
              { label: '6. Feeding Guidelines', href: '#feeding' },
              { label: 'Reading Order Cheat Sheet', href: '#cheat-sheet' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="reading-pet-food-labels"
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'AAFCO Completeness Explained', href: '/guides/aafco-completeness-explained' },
              { label: 'Our Scoring Methodology', href: '/guides/methodology' },
              { label: 'Grain-Free and DCM — The FDA Record', href: '/ingredients/grain-free-dcm-risk' },
            ]}
          />
          <CrossPortfolioCard currentSite="petfood-com" contentType="guide" variant="sidebar" />
        </>
      }
    >
      <div className="carloOS-article">
        <p>
          Two bags can sit next to each other on a shelf, both labeled in big type as &quot;Beef Recipe
          Dog Food,&quot; both at a similar price, and yet contain a different proportion of beef, a
          different protein source mix, and a different level of regulatory evidence behind the
          completeness claim. The information that separates them is on the bag, but it is not in the
          marketing copy. It is in the six panels required by federal and state pet food labeling
          regulations. This guide walks those six panels in reading order.
        </p>

        <h2 id="what-required">What the Bag Must Carry</h2>
        <p>
          Under U.S. Food and Drug Administration (FDA) Center for Veterinary Medicine (CVM) labeling
          authority and the model regulations promulgated by the Association of American Feed Control
          Officials (AAFCO) — which states adopt into their own feed law — a commercial pet food label
          must contain the following:
        </p>
        <ul>
          <li>Product name and brand name (regulated; see Section 1).</li>
          <li>Net weight statement.</li>
          <li>Guaranteed analysis (minimums for crude protein and crude fat, maximums for crude fiber and moisture; some states require additional nutrients).</li>
          <li>Ingredient list, in descending order by weight at the time of mixing.</li>
          <li>Nutritional adequacy statement (the AAFCO statement; see our <a href="/guides/aafco-completeness-explained">separate guide</a>).</li>
          <li>Caloric content statement, expressed in kilocalories per kilogram and a common household measure (per cup, per can).</li>
          <li>Feeding directions (for foods sold as complete diets).</li>
          <li>Manufacturer or distributor name and address.</li>
        </ul>
        <p>
          Marketing claims — &quot;premium,&quot; &quot;holistic,&quot; &quot;super-premium,&quot;
          &quot;human-grade,&quot; &quot;ancestral,&quot; &quot;biologically appropriate&quot; — are
          not part of this list. Most carry no enforceable definition. &quot;Natural&quot; has a narrow
          AAFCO definition (essentially: no chemically synthesized ingredients except added vitamins
          and minerals, which must be disclosed). The other terms do not.
        </p>

        <h2 id="product-name">1. Product Name Rules — The Most Important Panel</h2>
        <p>
          AAFCO Model Regulations for Pet Food and Specialty Pet Food set five named rules for how a
          protein source can appear in a product name. Each rule corresponds to a different minimum
          percentage of that named ingredient in the formula. Reading the product name carefully is
          the single most effective thing an owner can do at the shelf, because the rule applied to
          the name dictates how much of the named protein is actually in the bag.
        </p>
        <div style={{ background: 'rgba(31,26,20,0.04)', border: '1px solid rgba(31,26,20,0.10)', borderRadius: '10px', padding: '18px 22px', margin: '20px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid rgba(31,26,20,0.18)' }}>
                <th style={{ textAlign: 'left', padding: '8px 6px', fontWeight: 700 }}>Name pattern</th>
                <th style={{ textAlign: 'left', padding: '8px 6px', fontWeight: 700 }}>AAFCO rule</th>
                <th style={{ textAlign: 'left', padding: '8px 6px', fontWeight: 700 }}>Minimum named protein (excluding moisture)</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid rgba(31,26,20,0.08)' }}>
                <td style={{ padding: '8px 6px' }}>&quot;Beef Dog Food&quot; (no qualifier)</td>
                <td style={{ padding: '8px 6px' }}>95% Rule</td>
                <td style={{ padding: '8px 6px' }}><strong>≥ 95%</strong> beef of total formula (excluding water for processing)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(31,26,20,0.08)' }}>
                <td style={{ padding: '8px 6px' }}>&quot;Beef for Dogs&quot; / &quot;Beef Dinner&quot; / &quot;Beef Entrée&quot;</td>
                <td style={{ padding: '8px 6px' }}>Dinner / 25% Rule</td>
                <td style={{ padding: '8px 6px' }}><strong>≥ 25%</strong> beef (excluding water for processing)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(31,26,20,0.08)' }}>
                <td style={{ padding: '8px 6px' }}>&quot;Beef Recipe&quot; / &quot;Beef Formula&quot; / &quot;Beef Platter&quot;</td>
                <td style={{ padding: '8px 6px' }}>Dinner / 25% Rule (recipe variant)</td>
                <td style={{ padding: '8px 6px' }}><strong>≥ 25%</strong> — same rule as Dinner</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(31,26,20,0.08)' }}>
                <td style={{ padding: '8px 6px' }}>&quot;Dog Food with Beef&quot;</td>
                <td style={{ padding: '8px 6px' }}>&quot;With&quot; Rule</td>
                <td style={{ padding: '8px 6px' }}><strong>≥ 3%</strong> beef</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 6px' }}>&quot;Beef Flavor Dog Food&quot;</td>
                <td style={{ padding: '8px 6px' }}>Flavor Rule</td>
                <td style={{ padding: '8px 6px' }}>No minimum percentage; must be a <em>detectable</em> flavor source</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The order matters, and the practical implications are large. A bag of &quot;Beef Dog Food&quot;
          is roughly 95% beef. A bag of &quot;Beef Recipe Dog Food,&quot; sitting next to it on the same
          shelf at a similar price, is only required to contain 25%. A bag of &quot;Beef Flavor Dog
          Food&quot; may contain no beef tissue at all — only a beef-derived flavor stock sufficient to
          be detected on analysis. The 70-percentage-point gap between &quot;Beef Dog Food&quot; and
          &quot;Beef Recipe&quot; is the single most important consumer-facing piece of information
          on the front panel, and it is invisible unless the reader knows which rule is being applied.
        </p>
        <p>
          When two protein sources appear in the name (e.g., &quot;Chicken &amp; Brown Rice Recipe&quot;),
          the combined named ingredients must together meet the rule for the variant used. Under the
          Dinner / 25% Rule, the named ingredients must total at least 25% of the formula and the second
          named ingredient must be at least 3%. Under the &quot;With&quot; Rule, each named ingredient
          after &quot;with&quot; must be at least 3% individually.
        </p>

        <h2 id="guaranteed-analysis">2. Guaranteed Analysis</h2>
        <p>
          The guaranteed analysis panel reports four minimums and maximums:
        </p>
        <ul>
          <li><strong>Crude protein</strong> — minimum.</li>
          <li><strong>Crude fat</strong> — minimum.</li>
          <li><strong>Crude fiber</strong> — maximum.</li>
          <li><strong>Moisture</strong> — maximum.</li>
        </ul>
        <p>
          Some states require additional disclosures (calcium, phosphorus, ash, omega-6, omega-3,
          taurine, glucosamine when the brand makes a glucosamine claim). The four items above are the
          baseline. &quot;Crude&quot; in this context is the analytical method, not a quality
          descriptor: crude protein is measured by total nitrogen content multiplied by a conversion
          factor, which is why a small amount of non-protein nitrogen contamination can inflate the
          reported number (the 2007 melamine adulteration was a deliberate exploitation of this
          measurement convention).
        </p>

        <h3 id="as-fed">As-Fed vs Dry Matter — The Comparison Trap</h3>
        <p>
          Guaranteed analysis is reported &quot;as-fed,&quot; meaning the percentages include the
          moisture in the bag or can. This makes direct comparison between a kibble (around 10%
          moisture) and a canned food (around 78% moisture) deeply misleading. A canned food with
          11% crude protein as-fed contains roughly 50% protein on a dry-matter basis. A kibble with
          26% crude protein as-fed contains roughly 29% protein on a dry-matter basis. As-fed, the
          kibble looks twice as protein-dense; dry-matter, the can is much higher.
        </p>
        <p>
          To convert as-fed to dry-matter:
        </p>
        <p style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: '14px', background: 'rgba(31,26,20,0.05)', padding: '14px 18px', borderRadius: '8px', margin: '14px 0' }}>
          Dry-Matter % = (As-Fed % ÷ (100 − Moisture %)) × 100
        </p>
        <p>
          A canned food reading 11% protein, 78% moisture: 11 ÷ (100 − 78) × 100 = 50% dry-matter
          protein. A kibble reading 26% protein, 10% moisture: 26 ÷ (100 − 10) × 100 = 28.9%
          dry-matter protein. Any cross-format comparison — kibble vs canned, kibble vs fresh, fresh
          vs raw — must be done on a dry-matter basis. As-fed comparison is the trap.
        </p>

        <h2 id="ingredients">3. Ingredient List — Ordering by Weight</h2>
        <p>
          The ingredient list is in descending order by weight at the time of mixing, before cooking.
          For a kibble, that &quot;time of mixing&quot; weight includes the moisture in the raw
          ingredients. Fresh chicken at the time of mixing is about 70% water; after extrusion and
          drying, the actual contribution of chicken solids to the finished kibble is roughly a third
          of what the as-mixed weight suggested. This is not an error in the labeling — it is the
          regulatory definition — but it does mean a fresh meat listed first is not necessarily the
          largest <em>finished</em> ingredient by dry weight. A &quot;chicken meal&quot; (already
          rendered and dried) listed third may contribute more chicken solids to the finished kibble
          than fresh chicken listed first.
        </p>

        <h3 id="splitting">The Splitting Trick</h3>
        <p>
          Because the ingredient list orders by weight, a manufacturer can shift the apparent
          composition of the food by splitting a single category of ingredient into multiple sub-forms
          that each appear lower on the list, allowing a different ingredient — typically a named
          protein — to occupy the first position. Worked example:
        </p>
        <p style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: '14px', background: 'rgba(31,26,20,0.05)', padding: '14px 18px', borderRadius: '8px', margin: '14px 0' }}>
          Chicken, ground corn, corn gluten meal, corn bran, chicken fat, ...
        </p>
        <p>
          Three corn-derived ingredients appear separately. If their combined weight exceeds the
          weight of chicken (which, at as-mixed weight, is roughly 70% water), corn is the largest
          ingredient by dry contribution to the finished food — but chicken is the one consumers
          read first. Splitting is legal under AAFCO labeling rules and is extremely common. It is
          not a defect; it is a label-reading skill. The defense is to read the first six to eight
          ingredients as a group and notice when sub-forms of a single source are stacked.
        </p>
        <p>
          A second pattern worth flagging is the appearance of &quot;named meat by-product&quot;
          (e.g., &quot;chicken by-product meal&quot;) versus &quot;meat by-product&quot; without a
          species. The named form is regulated to come from a single, identified species. The unnamed
          form is not. Owners with specific protein concerns — a confirmed elimination-diet result, an
          allergy diagnosis — should treat unnamed by-product as not-rule-out for any species.
        </p>

        <h2 id="aafco">4. AAFCO Nutritional Adequacy Statement</h2>
        <p>
          The AAFCO statement is the single most important regulatory text on the bag. It identifies
          (a) which life stage(s) the food is sold for, (b) the species, and (c) the pathway by which
          completeness was demonstrated — formulation or feeding trial. The two pathways are not
          equivalent in evidence quality. Because the parsing of this statement is a guide of its
          own, we cover it in depth on the
          <a href="/guides/aafco-completeness-explained"> AAFCO Completeness page</a>. The short
          version: feeding-trial certification is a stronger signal than formulation certification;
          the absence of any complete-and-balanced statement means the food is not sold as a complete
          diet and cannot be the sole long-term ration.
        </p>

        <h2 id="calories">5. Caloric Content Statement</h2>
        <p>
          Required since 2014, the caloric content statement reports metabolizable energy in kilocalories
          per kilogram and in a common household measure (kcal per cup for kibble; kcal per can for wet
          food). The kilocalorie used here is the dietary calorie — what consumers call &quot;a calorie&quot;
          — so a kibble at 380 kcal/cup delivers 380 dietary calories per cup.
        </p>
        <p>
          The caloric statement is what makes between-brand portion comparison possible. A bag at
          410 kcal/cup is denser than a bag at 340 kcal/cup; feeding the same volume of the first delivers
          21% more energy, which over weeks shows up as weight change. When switching brands, recalculate
          the daily portion against the new caloric density rather than carrying the old volume across.
        </p>

        <h2 id="feeding">6. Feeding Guidelines — Why They Often Overfeed</h2>
        <p>
          Feeding guidelines are required for foods sold as complete diets. They are based on the
          National Research Council&apos;s maintenance energy requirement (MER) calculations for
          healthy adult dogs and cats at moderate activity, with manufacturer-set scaling. In practice,
          the guidelines err on the side of generous portions across the industry. Veterinary nutrition
          research, including work by Linder and colleagues at Tufts and others, has documented that
          manufacturer feeding guidelines often exceed the calculated MER of a moderately active adult
          companion animal by 15–30%, particularly in the middle weight ranges where most pets sit.
        </p>
        <p>
          Two factors drive the gap. First, individual MER varies by a factor of roughly two between
          the least active and most active otherwise-similar pets, and the published guideline cannot
          target both. Second, AAFCO labeling permits a guideline range broad enough to cover the
          most active end of the distribution, which over-feeds the lower-activity middle. The
          practical consequence is that feeding the bag&apos;s &quot;cups per day for a 50 lb dog&quot;
          column without adjustment is a leading cause of subclinical weight gain.
        </p>
        <p>
          A defensible starting point is to compute MER from body weight, scale by activity, and treat
          the bag&apos;s guideline as a ceiling rather than a target. The simplest published MER
          formula for an adult dog at moderate activity is roughly 132 × (body weight in kg)
          <sup>0.75</sup> kcal per day, with downward adjustment for neutered, sedentary, or
          weight-prone animals. Cats run roughly 100 × (body weight in kg)<sup>0.67</sup> for adult
          maintenance, with similar adjustments. Body condition scoring (BCS) at four-week intervals
          is more reliable than any calculation; the calculation gets the starting portion close, BCS
          tunes it.
        </p>

        <h2 id="cheat-sheet">Reading Order Cheat Sheet</h2>
        <ol>
          <li>Read the product name first. Identify which AAFCO rule (95%, 25%, &quot;with,&quot; or Flavor) applies, and infer the minimum named-protein percentage from that.</li>
          <li>Read the AAFCO statement. Identify species, life stage, and pathway (formulation vs feeding trial).</li>
          <li>Read the first six to eight ingredients as a group. Note any splitting of a single source into sub-forms.</li>
          <li>Check the guaranteed analysis. If comparing to another product, convert both to dry-matter basis.</li>
          <li>Check the caloric content. Use it to compute daily portion against your pet&apos;s MER, not against the bag&apos;s feeding guideline alone.</li>
          <li>Treat marketing claims — &quot;premium,&quot; &quot;holistic,&quot; &quot;human-grade&quot; — as advertising, not evidence.</li>
        </ol>

        <ArticleSourcesList sources={SOURCES} />
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. We do not provide individualized veterinary advice.
          Therapeutic diets and weight-management programs for diagnosed conditions require a
          licensed veterinarian.
        </p>
      </div>
    </ArticleLayout>
  )
}
