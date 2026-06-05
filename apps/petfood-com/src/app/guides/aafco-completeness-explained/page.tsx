import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
  CrossPortfolioCard,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'AAFCO Completeness Explained — Profiles vs Trials',
  description:
    'How AAFCO nutritional adequacy statements work — formulation vs feeding trial, life-stage categories, and what AAFCO does not verify.',
  path: '/guides/aafco-completeness-explained',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'AAFCO Completeness Explained — Profiles vs Feeding Trials',
  description:
    'Reference guide to AAFCO nutritional adequacy statements, the formulation vs feeding-trial distinction, life-stage categories, and the regulatory limits of AAFCO oversight.',
  url: 'https://petfood.com/guides/aafco-completeness-explained',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

export default function AafcoCompletenessExplainedPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="guide"
      hero={{
        title: 'AAFCO Completeness Explained',
        subtitle:
          'Every commercial pet food label in the United States carries an AAFCO nutritional adequacy statement — a single sentence that determines whether the food is legally sold as a complete diet, who it is sold for, and how that completeness was demonstrated. The statement is short. It is also one of the most misread pieces of text in the category. This guide explains the language line by line and is honest about what AAFCO does and does not verify.',
        category: 'Foundational Guide',
        publishedAt: 'May 2026',
        readTime: '12 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Guides', href: '/guides' },
        { name: 'AAFCO Completeness Explained', href: '/guides/aafco-completeness-explained' },
      ]}
      relatedLinks={[
        { title: 'Guides Hub', href: '/guides' },
        { title: 'Reading a Pet Food Label', href: '/guides/reading-pet-food-labels' },
        { title: 'How to Choose a Pet Food', href: '/guides/how-to-choose-a-pet-food' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'What AAFCO Actually Is', href: '#what-aafco-is' },
              { label: 'The Two Pathways to "Complete"', href: '#two-pathways' },
              { label: 'Formulation vs Feeding Trial', href: '#formulation-vs-trial' },
              { label: 'Life-Stage Categories — Dogs', href: '#life-stage-dogs' },
              { label: 'Life-Stage Categories — Cats', href: '#life-stage-cats' },
              { label: 'Parsing the Statement', href: '#parsing' },
              { label: 'What AAFCO Does Not Verify', href: '#not-verified' },
              { label: 'How We Use It in Scoring', href: '#scoring' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Reading a Pet Food Label', href: '/guides/reading-pet-food-labels' },
              { label: 'Our Scoring Methodology', href: '/guides/methodology' },
              { label: 'Grain-Free and DCM — The FDA Record', href: '/ingredients/grain-free-dcm-risk' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="aafco-completeness-explained"
          />
          <CrossPortfolioCard currentSite="petfood-com" contentType="guide" variant="sidebar" />
        </>
      }
    >
      <div className="carloOS-article">
        <p>
          A pet food bag in the United States is regulated at two levels. The Food and Drug Administration&apos;s
          Center for Veterinary Medicine (FDA CVM) holds federal authority over pet food safety, labeling, and
          ingredient approval. State feed control officials enforce the labeling rules in each state.
          The Association of American Feed Control Officials — AAFCO — is the body those state officials
          coordinate through. AAFCO itself is not a regulator. It does not approve, certify, or test pet
          food. It publishes model regulations and nutrient profiles that almost every state then adopts
          into its own feed law. That distinction matters: when a bag says &quot;formulated to meet the
          nutritional levels established by the AAFCO Dog Food Nutrient Profiles,&quot; the manufacturer is
          claiming compliance with a model the state has adopted, not a clearance issued by AAFCO.
        </p>

        <h2 id="what-aafco-is">What AAFCO Actually Is</h2>
        <p>
          AAFCO is a non-profit organization composed of state, federal, and international feed regulators.
          Its principal product is the annual <em>AAFCO Official Publication</em>, which contains the
          model feed bill, ingredient definitions, and the dog and cat food nutrient profiles. The
          Official Publication is updated yearly; the nutrient profiles themselves are revised on a
          longer cadence, with the most recent major revisions to the dog and cat profiles coming
          from expert subcommittees that incorporated National Research Council (NRC) <em>Nutrient
          Requirements of Dogs and Cats</em> (2006) data and post-2006 research.
        </p>
        <p>
          AAFCO does not inspect plants, audit manufacturers, sample finished product from store shelves,
          or hold enforcement authority. Those activities sit with FDA CVM at the federal level and with
          the state department of agriculture (or equivalent) in each state. A common misreading of
          &quot;AAFCO-approved&quot; on marketing copy is to assume AAFCO has reviewed and cleared the
          product. AAFCO has not. The phrase &quot;AAFCO-approved&quot; is not one AAFCO endorses; the
          AAFCO statement on the label is a manufacturer self-attestation that the food meets one of
          the two pathways described below.
        </p>

        <h2 id="two-pathways">The Two Pathways to &quot;Complete and Balanced&quot;</h2>
        <p>
          Under the AAFCO model, a manufacturer can make a complete-and-balanced claim through one of
          two pathways. The label statement must disclose which pathway was used, and the two pathways
          are not equivalent in evidence quality. This is the single most important distinction on the bag.
        </p>
        <ol>
          <li>
            <strong>Formulation method</strong> — the manufacturer demonstrates, by laboratory analysis
            or by formulation calculation, that the food meets the AAFCO Dog Food Nutrient Profiles or
            Cat Food Nutrient Profiles for the specified life stage. The label reads, in substance,
            &quot;Formulated to meet the nutritional levels established by the AAFCO [Dog/Cat] Food
            Nutrient Profiles for [life stage].&quot;
          </li>
          <li>
            <strong>Feeding trial method</strong> — the manufacturer ran an AAFCO-protocol feeding
            trial on the formula (or a sufficiently similar family member) and the trial passed.
            The label reads, in substance, &quot;Animal feeding tests using AAFCO procedures substantiate
            that [Product] provides complete and balanced nutrition for [life stage].&quot;
          </li>
        </ol>
        <p>
          A third, less common option is the &quot;family rule&quot; — a formula can carry a feeding-trial
          statement if it is nutritionally similar to a tested lead product within the same product family.
          The family-rule designation does not appear in the consumer-facing statement; the bag simply
          carries the feeding-trial language.
        </p>

        <h2 id="formulation-vs-trial">Formulation vs Feeding Trial — Why the Difference Matters</h2>
        <p>
          The formulation method demonstrates that, on paper or in a wet-chemistry lab, the finished
          food meets the nutrient minimums and maximums in the AAFCO profile. It does not demonstrate
          that the nutrients in the food are bioavailable to the animal that eats it. A diet can be
          mathematically complete and still produce taurine depletion, deficiency-pattern weight loss,
          or coat-quality changes in long-term feeding, because bioavailability of amino acids,
          minerals, and vitamins varies with ingredient source, processing temperature, and dietary
          matrix. Formulation certification does not test for any of that.
        </p>
        <p>
          The feeding-trial method addresses some — not all — of that gap. The AAFCO feeding-trial
          protocol requires a minimum of eight animals to start, six to finish, a defined duration
          (26 weeks for adult maintenance; longer for growth and gestation/lactation), and specific
          endpoint criteria: body weight maintained within stated limits, defined clinical-chemistry
          values within reference ranges at trial end, and no animal removed for nutrition-related
          adverse events. A passing trial is real evidence the food sustains the small cohort of test
          animals over that window. It is not evidence of long-term outcomes across breeds, life
          situations, or generations — the trial does not run that long and does not include that many
          animals. The World Small Animal Veterinary Association (WSAVA) Global Nutrition Committee
          has consistently noted that feeding-trial certification, while preferable to formulation
          certification, is itself a minimum bar rather than a comprehensive nutritional proof.
        </p>
        <p>
          In practice: a feeding-trial statement is a stronger signal of completeness than a
          formulation statement, all else equal. It is one of the criteria the WSAVA Global Nutrition
          Committee asks owners to inquire about when selecting a manufacturer, and it is one of the
          criteria we weight in our own scoring. It is not, on its own, a guarantee.
        </p>

        <h2 id="life-stage-dogs">Life-Stage Categories — Dogs</h2>
        <p>
          AAFCO defines six life-stage designations under which a complete-and-balanced claim can be
          made for dog food. The categories carry different nutrient minimums and different maximums.
          A food labeled for one stage cannot be assumed to be appropriate for another.
        </p>
        <ul>
          <li>
            <strong>Growth</strong> — for puppies up to roughly twelve months of age. Higher minimums
            for protein, calcium, phosphorus, and several micronutrients than adult maintenance.
          </li>
          <li>
            <strong>Growth — Large Size (≥70 lb adult weight)</strong> — a sub-category of growth
            with tighter calcium and calcium-to-phosphorus ratio maximums, added in response to
            developmental orthopedic disease risk in large-breed puppies.
          </li>
          <li>
            <strong>Reproduction (Gestation/Lactation)</strong> — for pregnant and nursing dams. Highest
            energy, protein, calcium, and phosphorus requirements of any stage.
          </li>
          <li>
            <strong>Adult Maintenance</strong> — for healthy non-reproducing adult dogs at moderate
            activity. The least restrictive profile.
          </li>
          <li>
            <strong>All Life Stages</strong> — meets the more restrictive of growth and adult
            maintenance requirements. A food sold as &quot;All Life Stages&quot; that does not also
            meet the large-size growth caps cannot be safely fed to large-breed puppies.
          </li>
          <li>
            <strong>All Life Stages — Except Large Size Growth</strong> — explicitly carved out to
            address the gap above. Owners of large-breed puppies should verify the food is labeled
            for either &quot;growth — including growth of large size&quot; or &quot;all life stages —
            including growth of large size.&quot;
          </li>
        </ul>
        <p>
          A common pitfall: an &quot;all life stages&quot; food not validated for large-size growth
          can be fed to a Great Dane puppy and meet the letter of the label, but exceed the calcium
          ceiling tied to developmental orthopedic disease risk in giant breeds. The carve-out
          category exists precisely to flag this.
        </p>

        <h2 id="life-stage-cats">Life-Stage Categories — Cats</h2>
        <p>
          AAFCO defines four life-stage designations for cat food:
        </p>
        <ul>
          <li>
            <strong>Growth</strong> — for kittens. Higher protein, taurine, and several micronutrient
            minimums than adult maintenance.
          </li>
          <li>
            <strong>Reproduction (Gestation/Lactation)</strong> — for queens.
          </li>
          <li>
            <strong>Adult Maintenance</strong> — for healthy non-reproducing adult cats.
          </li>
          <li>
            <strong>All Life Stages</strong> — meets the more restrictive of growth and adult
            maintenance requirements for cats.
          </li>
        </ul>
        <p>
          Cats are obligate carnivores; the AAFCO cat profile sets explicit minimums for taurine,
          arachidonic acid, and several other nutrients dogs synthesize on their own. The categorical
          minimums differ meaningfully from dog food, which is why a dog food, regardless of life-stage
          label, is never adequate for a cat. There is no AAFCO &quot;senior&quot; or &quot;mature&quot;
          life stage. &quot;Senior&quot; on a cat or dog food label is a marketing term, not an AAFCO
          category; senior foods are sold under the adult-maintenance or all-life-stages designation.
        </p>

        <h2 id="parsing">Parsing the Nutritional Adequacy Statement</h2>
        <p>
          A complete nutritional adequacy statement contains three pieces of information: the pathway
          (formulation or feeding trial), the species, and the life stage. Worked example:
        </p>
        <p style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: '14px', background: 'rgba(31,26,20,0.05)', padding: '14px 18px', borderRadius: '8px', margin: '14px 0' }}>
          [Product Name] is formulated to meet the nutritional levels established by the AAFCO Dog Food
          Nutrient Profiles for All Life Stages, including growth of large size dogs (70 lb or more as
          an adult).
        </p>
        <p>
          That statement tells the reader: formulation pathway (lower-evidence than a feeding trial),
          dog species, all life stages, including the large-size growth carve-out. A different bag
          might read:
        </p>
        <p style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: '14px', background: 'rgba(31,26,20,0.05)', padding: '14px 18px', borderRadius: '8px', margin: '14px 0' }}>
          Animal feeding tests using AAFCO procedures substantiate that [Product Name] provides
          complete and balanced nutrition for maintenance of adult cats.
        </p>
        <p>
          That statement tells the reader: feeding-trial pathway (higher-evidence), cat species,
          adult maintenance only. This food is not validated for kittens, queens, or all life stages.
          Feeding it to a growing kitten is not consistent with the label claim.
        </p>
        <p>
          A bag without any nutritional adequacy statement, or carrying the phrase &quot;intended for
          intermittent or supplemental feeding only,&quot; is not a complete diet. Treats, mixers,
          broths, and most fresh toppers fall under this category. They are not failures — they are
          not sold as complete foods — but they cannot be used as the sole diet.
        </p>

        <h2 id="not-verified">What AAFCO Does Not Verify</h2>
        <p>
          The AAFCO statement is a useful baseline. It is not a comprehensive quality signal, and
          owners who treat &quot;AAFCO complete and balanced&quot; as the only relevant criterion
          miss most of what separates a defensible diet from a marginal one. AAFCO does not verify:
        </p>
        <ul>
          <li>
            <strong>Ingredient quality.</strong> AAFCO ingredient definitions describe what an
            ingredient can legally be, not how good a representative sample of that ingredient
            actually is. &quot;Chicken meal&quot; can be a high-protein rendered product from named
            poultry parts, or a lower-quality rendered product within the same regulatory definition.
            AAFCO does not grade or distinguish.
          </li>
          <li>
            <strong>Sourcing and country of origin.</strong> AAFCO does not require disclosure of where
            ingredients come from. Country-of-origin labeling for pet food is voluntary in most cases.
          </li>
          <li>
            <strong>Bioavailability.</strong> A nutrient that appears in the formula on paper may not
            be absorbed by the animal at the rate the calculation assumes, depending on the ingredient
            matrix, processing, and the animal&apos;s species and condition. AAFCO profiles do not
            measure bioavailability of the specific formula.
          </li>
          <li>
            <strong>Manufacturing standards.</strong> AAFCO does not audit plants. Whether the facility
            holds a Global Food Safety Initiative–benchmarked certification (such as SQF or BRCGS), how
            often it is audited, or whether it has been subject to FDA inspection findings is outside
            AAFCO&apos;s scope.
          </li>
          <li>
            <strong>Recall history.</strong> AAFCO does not maintain or publish a recall database; the
            FDA CVM Recalls &amp; Withdrawals database is the regulatory source of record.
          </li>
          <li>
            <strong>Long-term outcomes.</strong> Even feeding-trial certification covers 26 weeks for
            adult maintenance. Diet-related conditions that emerge over years — taurine depletion,
            renal markers, weight drift — are outside the trial window.
          </li>
          <li>
            <strong>Marketing claims.</strong> &quot;Natural,&quot; &quot;holistic,&quot; &quot;human-grade,&quot;
            and &quot;premium&quot; are not AAFCO terms. &quot;Natural&quot; has a narrow AAFCO definition;
            the other three have no enforceable definition at all.
          </li>
        </ul>

        <h2 id="scoring">How We Use the AAFCO Statement in Scoring</h2>
        <p>
          On every brand and formula page on PetFood.com, the AAFCO statement is one input among several.
          We weight it as follows: a feeding-trial statement for the appropriate life stage scores higher
          than a formulation-only statement, because the evidence is stronger and the manufacturer has
          chosen to invest in the trial. A formulation-only statement scores neutrally — adequate to meet
          the model, but not on its own. The absence of any complete-and-balanced statement on a product
          marketed as a daily diet is a serious concern and is flagged on the brand page.
        </p>
        <p>
          We do not double-count the AAFCO statement against the rest of the scoring rubric. Ingredient
          sourcing, manufacturer transparency, recall history, and audit posture are separate inputs.
          A bag can carry a strong feeding-trial statement and still score poorly on overall criteria;
          a bag can carry a formulation-only statement and still score well if the manufacturer publishes
          ingredient origin data and holds a current Global Food Safety Initiative audit. The full
          weighting is published on the <a href="/guides/methodology">methodology page</a>.
        </p>

        <h2 id="sources">Sources</h2>
        <ul>
          <li>
            Association of American Feed Control Officials. <em>2025 AAFCO Official Publication.</em>
            Chapter 4 (Model Feed Bill), Chapter 6 (Model Regulations for Pet Food and Specialty Pet
            Food), Dog and Cat Food Nutrient Profiles.
          </li>
          <li>
            World Small Animal Veterinary Association Global Nutrition Committee.
            <em> Guidelines on Selecting Pet Foods</em> and the <em>Recommendations on Selecting Pet Foods</em>
            owner handout.
          </li>
          <li>
            U.S. Food and Drug Administration, Center for Veterinary Medicine. <em>Pet Food Labels —
            General</em> and <em>Animal Food Ingredients: Regulatory Framework</em>.
          </li>
          <li>
            National Research Council. <em>Nutrient Requirements of Dogs and Cats.</em> National
            Academies Press, 2006.
          </li>
        </ul>
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. We do not provide individualized veterinary advice.
          Therapeutic diets, life-stage transitions for animals with diagnosed disease, and breed-specific
          nutritional concerns require a licensed veterinarian.
        </p>
      </div>
    </ArticleLayout>
  )
}
