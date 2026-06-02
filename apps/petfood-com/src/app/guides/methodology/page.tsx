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
  title: 'How PetFood.com Scores — Methodology v1.0',
  description:
    'The PetFood.com scoring rubric — AAFCO completeness, ingredient sourcing, recall history, manufacturing standards, and what we do not score on.',
  path: '/guides/methodology',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'How PetFood.com Scores — Methodology v1.0',
  description:
    'Published rubric used to score pet food brands and formulas on PetFood.com. Versioned, citation-anchored, and re-runnable on demand.',
  url: 'https://petfood.com/guides/methodology',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

export default function MethodologyPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="guide"
      hero={{
        title: 'How PetFood.com Scores',
        subtitle:
          'Every brand and formula reviewed on this site runs through the same rubric. The rubric is published in full, versioned, and re-run when it changes. This page is binding: any score that contradicts what is written here is a defect, and we want to hear about it.',
        category: 'Methodology · v1.0',
        publishedAt: 'May 2026',
        readTime: '11 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Guides' },
        { name: 'Methodology', href: '/guides/methodology' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'What We Score', href: '#what' },
              { label: 'What We Do Not Score', href: '#not' },
              { label: '1. AAFCO Completeness', href: '#aafco' },
              { label: '2. Ingredient Sourcing Transparency', href: '#sourcing' },
              { label: '3. Recall History', href: '#recall' },
              { label: '4. Manufacturing Standards', href: '#manufacturing' },
              { label: '5. Feeding-Outcome Literature', href: '#literature' },
              { label: 'Score Aggregation', href: '#aggregation' },
              { label: 'Why We Differ', href: '#differ' },
              { label: 'Versioning & Re-Scoring', href: '#versioning' },
              { label: 'Conflicts of Interest', href: '#coi' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'AAFCO Completeness Explained', href: '/guides/aafco-completeness-explained' },
              { label: 'Reading a Pet Food Label', href: '/guides/reading-pet-food-labels' },
              { label: 'Grain-Free and DCM — The FDA Record', href: '/ingredients/grain-free-dcm-risk' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="methodology"
          />
          <CrossPortfolioCard currentSite="petfood-com" contentType="guide" variant="sidebar" />
        </>
      }
    >
      <div className="carloOS-article">
        <p>
          PetFood.com exists to answer one question per product, with citations: <em>compared to its
          category peers, how does this food rate on a fixed set of criteria that matter?</em> The
          rubric below is the one we apply to every review, and it is structured so that a careful
          reader can reconstruct any score from the brand page&apos;s factual claims.
        </p>

        <h2 id="what">What We Score On — Five Dimensions</h2>
        <p>
          A formula or brand carries a score on each of five dimensions. The dimensions are weighted
          to produce an overall score on a ten-point scale. The dimensions are:
        </p>
        <ol>
          <li><strong>AAFCO completeness</strong> — what does the nutritional adequacy statement say, and was it earned by feeding trial or by formulation only?</li>
          <li><strong>Ingredient sourcing transparency</strong> — to what degree does the manufacturer disclose protein source, country of origin, and supplier audit posture?</li>
          <li><strong>Recall history</strong> — what is the manufacturer&apos;s record in the FDA CVM Recalls &amp; Withdrawals database over the past ten years, weighted by severity and root cause?</li>
          <li><strong>Manufacturing standards</strong> — does the production facility hold a Global Food Safety Initiative–benchmarked certification, and is the audit posture transparent to outsiders?</li>
          <li><strong>Feeding-outcome literature</strong> — where peer-reviewed evidence exists for the formula or product family, what does it say?</li>
        </ol>

        <h2 id="not">What We Do Not Score On — The Anti-Criteria</h2>
        <p>
          What a rubric excludes shapes its conclusions as much as what it includes. We do not score
          on, and do not allow upward influence from, the following:
        </p>
        <ul>
          <li>
            <strong>Marketing claims.</strong> &quot;Premium,&quot; &quot;super-premium,&quot;
            &quot;holistic,&quot; &quot;biologically appropriate,&quot; &quot;ancestral,&quot;
            &quot;veterinarian-recommended&quot; (when not tied to a published recommendation),
            and similar adjectives carry no enforceable definition and receive zero weight.
          </li>
          <li>
            <strong>&quot;Natural&quot; labeling.</strong> AAFCO does define &quot;natural,&quot; but
            the definition is permissive (no chemically synthesized ingredients except added vitamins
            and minerals, which must be disclosed). A natural label, by itself, is neither
            higher-quality nor lower-quality than a non-natural label and receives zero weight.
          </li>
          <li>
            <strong>Grain-free as a virtue.</strong> Grain-free is the absence of corn, wheat, and
            rice. It is not, on its own, a health claim. Our coverage of the FDA CVM investigation
            into a possible association between grain-free pulse-heavy diets and dilated cardiomyopathy
            is documented separately and is reflected in formula-level commentary, not as a categorical
            score deduction.
          </li>
          <li>
            <strong>Price as a quality proxy.</strong> A more expensive formula is not, by virtue of
            price, scored higher. We report price per 100 kcal as a fact on every formula page; the
            number does not enter the score.
          </li>
          <li>
            <strong>Anecdotal user reviews.</strong> Customer review counts and aggregate star ratings
            on retailer sites do not enter the score. Where a recurring pattern in user reports
            (palatability, stool changes, vomiting) is corroborated by independent reporting or by
            recall data, the pattern is described qualitatively on the formula page. It is not
            quantified into the score.
          </li>
          <li>
            <strong>Veterinary endorsement without a named source.</strong> &quot;Recommended by
            veterinarians&quot; without a specific identifiable recommendation receives zero weight.
            Specific endorsements from named institutions (WSAVA Global Nutrition Committee
            recommendations, ACVN Diplomate publications) are cited as evidence on the relevant
            dimension.
          </li>
        </ul>

        <h2 id="aafco">Dimension 1: AAFCO Completeness</h2>
        <p>
          We score on three sub-criteria within this dimension:
        </p>
        <ul>
          <li>
            <strong>Presence of an adequacy statement</strong> — a complete-and-balanced statement
            for the labeled life stage is required for a daily-feeding product. Absence is a serious
            penalty.
          </li>
          <li>
            <strong>Pathway</strong> — feeding-trial certification scores meaningfully higher than
            formulation-only certification, in line with the WSAVA Global Nutrition Committee
            position that feeding trials provide stronger evidence of completeness.
          </li>
          <li>
            <strong>Life-stage appropriateness</strong> — for foods marketed to a specific cohort
            (large-breed puppies, kittens, gestation/lactation), we verify the statement covers that
            cohort. An &quot;all life stages&quot; statement without the large-size growth carve-out
            does not adequately serve a Great Dane puppy, and we flag the gap.
          </li>
        </ul>
        <p>
          This dimension is sourced from the bag itself and the manufacturer&apos;s product
          documentation. Disagreement between the two is itself a finding, and is noted on the
          brand page.
        </p>

        <h2 id="sourcing">Dimension 2: Ingredient Sourcing Transparency</h2>
        <p>
          The WSAVA Global Nutrition Committee, in its <em>Guidelines on Selecting Pet Foods</em>,
          recommends owners ask the manufacturer specific questions: do you have a veterinary
          nutritionist on staff or on retainer? Who formulates your diets, and what are their
          credentials? Where are your ingredients sourced from? Where are your diets manufactured?
          Do you conduct feeding trials? What quality-control measures do you use? We score
          ingredient-sourcing transparency on whether the manufacturer publishes answers to these
          questions and on how specific the answers are.
        </p>
        <p>
          Sub-criteria:
        </p>
        <ul>
          <li>
            <strong>Named protein sources.</strong> &quot;Chicken,&quot; &quot;salmon,&quot; and
            &quot;beef&quot; are named. &quot;Meat,&quot; &quot;poultry by-product,&quot; and
            &quot;animal fat&quot; without species are not. Named sources are scored higher because
            an owner managing a confirmed protein allergy can act on the disclosure.
          </li>
          <li>
            <strong>Country-of-origin disclosure.</strong> Voluntary in U.S. pet food labeling.
            Manufacturers who publish country of origin on the bag, on the website, or in response
            to a documented inquiry score higher.
          </li>
          <li>
            <strong>Supplier audit posture.</strong> Manufacturers who publish supplier qualification
            criteria, supplier audit frequency, and incoming-ingredient testing protocols score
            higher. We rely on the manufacturer&apos;s own published documentation; where a brand
            declines to disclose, we say so on the brand page.
          </li>
          <li>
            <strong>Nutritionist disclosure.</strong> Whether the manufacturer employs (or retains)
            a board-certified veterinary nutritionist (ACVN or ECVCN Diplomate) and whether that
            person&apos;s name is published.
          </li>
        </ul>

        <h2 id="recall">Dimension 3: Recall History</h2>
        <p>
          The FDA CVM Recalls &amp; Withdrawals database is the regulatory source of record for U.S.
          pet food recalls. We pull a manufacturer&apos;s history over the past ten years (the
          window most often available with consistent documentation), classify each event by root
          cause and severity, and weight by Class I, II, and III FDA designations.
        </p>
        <ul>
          <li>
            <strong>Class I</strong> recalls (reasonable probability of serious adverse health
            consequences or death) carry the heaviest weight. <em>Salmonella</em> contamination in
            a dry pet food, mycotoxin contamination above tolerance, and elevated vitamin D from a
            premix mis-add are typical Class I cases.
          </li>
          <li>
            <strong>Class II</strong> recalls (temporary or reversible adverse health consequences)
            are weighted at a fraction of Class I.
          </li>
          <li>
            <strong>Class III</strong> recalls and voluntary withdrawals not associated with patient
            harm are noted on the brand page but carry minimal score impact.
          </li>
        </ul>
        <p>
          We distinguish between recalls of the manufacturer&apos;s own brand and recalls of
          contract-co-packed product (which can implicate the same facility). We do not penalize
          a brand for a competitor&apos;s recall at the same co-packer unless contemporaneous
          inspection findings tie the two.
        </p>

        <h2 id="manufacturing">Dimension 4: Manufacturing Standards</h2>
        <p>
          The Global Food Safety Initiative (GFSI) benchmarks several certification schemes that
          pet food plants pursue, most commonly SQF (Safe Quality Food) and BRCGS. A current GFSI
          benchmarked certification provides third-party-verified evidence of a documented food
          safety system, an annual unannounced or semi-announced audit, and corrective action
          tracking on findings. We score on:
        </p>
        <ul>
          <li>Whether the manufacturing facility (or facilities) hold a current GFSI-benchmarked certification.</li>
          <li>Whether the manufacturer discloses the scheme (SQF, BRCGS, FSSC 22000) and certification number on its public-facing materials.</li>
          <li>Whether contract co-packing is disclosed, and if so, whether co-packer facilities are also certified.</li>
          <li>FDA Form 483 inspection observations and warning letters in the past five years (public records).</li>
        </ul>

        <h2 id="literature">Dimension 5: Feeding-Outcome Literature</h2>
        <p>
          A small but meaningful number of commercial pet food formulas have been the subject of
          peer-reviewed research — most often therapeutic diets (renal, urinary, glycemic, allergic)
          where the brand has sponsored or co-authored studies. Where such literature exists, we
          cite it on the formula page and treat it as a positive signal if the studies are
          adequately powered, published in indexed veterinary journals, and either independent of
          the manufacturer or transparently disclosed as manufacturer-sponsored.
        </p>
        <p>
          Where no peer-reviewed literature exists — the typical case for over-the-counter formulas —
          this dimension is scored neutrally rather than negatively. Absence of evidence is not
          evidence of failure; it reflects the structure of the pet food research economy, which
          publishes most heavily on therapeutic SKUs.
        </p>

        <h2 id="aggregation">Score Aggregation</h2>
        <p>
          Dimension scores are combined into an overall ten-point score using a fixed weight vector
          published with this rubric. v1.0 weights: AAFCO completeness 25%, ingredient sourcing
          transparency 25%, recall history 20%, manufacturing standards 20%, feeding-outcome
          literature 10%. The overall score is rounded to one decimal place; on every brand page,
          the dimension scores are shown alongside the overall, so a reader can recompute or
          override the weighting.
        </p>
        <p>
          We do not collapse multi-formula brands into a single brand score. Each formula carries
          its own score because the AAFCO statement, ingredient panel, and (sometimes) the
          manufacturing facility differ between formulas. A brand-level page averages the
          published formula scores and explicitly shows the spread.
        </p>

        <h2 id="differ">Why Our Methodology Differs from Other Pet Food Sites</h2>
        <p>
          The pet food review landscape has three established formats:
        </p>
        <ul>
          <li>
            <strong>Dog Food Advisor</strong> — the most widely-read independent dog food review
            site. Single-species (dogs only). Scoring rationale is qualitative and not consistently
            tied to a published, dimensioned rubric of the type above. Our methodology covers cats
            and dogs equally, publishes the weights, and is reproducible from the cited facts.
          </li>
          <li>
            <strong>All About Pet Food</strong> — closest comparable in independence and rubric
            discipline. UK-leaning, with regulatory frame oriented to EU FEDIAF rather than U.S.
            AAFCO. Our orientation is U.S.-first; we cite WSAVA, AAFCO, and FDA CVM as primary.
          </li>
          <li>
            <strong>Brand-affiliated and retailer review sites</strong> — content surfaces designed
            to move inventory, with no independent scoring rubric and no separation between
            editorial and commercial. We carry affiliate links for retailer click-out (most often
            Chewy), but no affiliate relationship influences a score. The scoring rubric is sealed
            from the affiliate stack.
          </li>
        </ul>

        <h2 id="versioning">Versioning and Re-Scoring</h2>
        <p>
          This rubric is v1.0. When the rubric changes, we increment the version, publish a
          changelog, and re-run prior scores against the new rubric. Both the old and new scores
          are visible on the brand page for a window of at least 90 days after the change. We do
          not silently re-weight; methodology drift without disclosure is the single most common
          failure of long-running review sites and is the failure we are most committed to
          avoiding.
        </p>
        <p>
          Individual formulas are re-scored on a published cadence — annually at minimum, immediately
          on any of the following triggers: a new FDA CVM Class I or Class II recall affecting the
          formula or facility; a formula change that alters the ingredient panel or AAFCO statement;
          new peer-reviewed literature directly evaluating the formula or its therapeutic claim.
        </p>

        <h2 id="coi">Conflicts of Interest</h2>
        <p>
          PetFood.com carries affiliate links to retailers (Chewy is the primary partner; others are
          disclosed in the site footer). Affiliate revenue does not influence scores. We do not
          accept product samples in exchange for review; products evaluated on the site are
          purchased at retail or, in the case of out-of-stock or regional SKUs, obtained at fair
          market value with the purchase logged. We do not accept brand-sponsored content. We do
          not run paid placements in any list, comparison table, or buying guide. Brand pages do
          not allow brand-supplied imagery in the hero placement; product photography is in-house
          or unused.
        </p>
        <p>
          When a conflict exists — for example, a brand we cover has retained the editorial lead as
          a consulting expert in any unrelated capacity — that fact is disclosed on the brand page.
          The default policy is that editorial leads do not take consulting work from brands they
          cover.
        </p>

        <h2 id="sources">Sources</h2>
        <ul>
          <li>
            World Small Animal Veterinary Association Global Nutrition Committee. <em>Guidelines on
            Selecting Pet Foods</em> and <em>Recommendations on Selecting Pet Foods</em>.
          </li>
          <li>
            Association of American Feed Control Officials. <em>2025 AAFCO Official Publication</em>,
            Chapter 6 (Model Regulations for Pet Food and Specialty Pet Food); Dog and Cat Food
            Nutrient Profiles.
          </li>
          <li>
            U.S. Food and Drug Administration. <em>Recalls, Market Withdrawals and Safety Alerts</em>
            (Animal &amp; Veterinary); FDA CVM <em>Inspection Observations</em> (Form 483) and
            warning letters.
          </li>
          <li>
            Global Food Safety Initiative. <em>GFSI Benchmarking Requirements</em>. Recognized
            schemes include SQF, BRCGS, FSSC 22000, and IFS.
          </li>
          <li>
            American College of Veterinary Nutrition (ACVN) Diplomate directory; European College
            of Veterinary and Comparative Nutrition (ECVCN) Diplomate directory.
          </li>
        </ul>
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. We do not provide individualized veterinary advice.
          Therapeutic diet selection and management of diagnosed disease require a licensed
          veterinarian.
        </p>
      </div>
    </ArticleLayout>
  )
}
