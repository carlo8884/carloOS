import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  buildFAQSchema,
  combineSchemas,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
  BuyBox,
  AffiliateDisclosure,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Blue Buffalo — An Independent Evaluation',
  description:
    'Independent evaluation of Blue Buffalo — history, product lines, LifeSource Bits claims, recalls, the grain-free DCM listing, and General Mills ownership.',
  path: '/brands/blue-buffalo-evaluation',
  type: 'article',
})

const FAQ = [
  {
    question: 'Is Blue Buffalo a "bad" brand?',
    answer:
      "No. Blue Buffalo is a brand with above-average ingredient transparency, average AAFCO substantiation, a higher-than-peer recall frequency, and a marketing-claim depth larger than its published-evidence depth. None of those facts make it categorically unacceptable, and many BLUE SKUs are perfectly reasonable feeding choices. The evidence-based verdict is mixed, and an owner's decision should be made on the specific SKU and the specific animal's clinical context.",
  },
  {
    question: 'Should I switch off BLUE Wilderness because of the DCM listing?',
    answer:
      'That is a veterinary question, especially for owners of dogs in DCM-predisposed or atypical-signal breeds. The 2019 FDA CVM listing is informational, not regulatory, and the underlying investigation has not produced a settled mechanism. The conservative position for at-risk breeds is to discuss the diet with the treating veterinarian; the conservative position for low-risk breeds is to be aware of the listing as one factor in the evaluation.',
  },
  {
    question: 'Has the General Mills acquisition changed the formulation?',
    answer:
      'The published Blue Buffalo material since the 2018 acquisition does not indicate a fundamental reformulation. The brand has been operated as a stand-alone subsidiary and has continued to publish under the same recipe and ingredient frameworks. General Mills acquisitions of consumer brands in the packaged-foods space have historically been low-touch on formulation; the same pattern appears to apply here.',
  },
]

const schema = combineSchemas(
  buildArticleSchema({
    siteId: 'petfood-com',
    title: 'Blue Buffalo — An Independent Evaluation',
    description:
      "Independent evaluation of Blue Buffalo against the PetFood.com five-dimension scoring rubric — corporate context (General Mills 2018 acquisition), product lines, LifeSource Bits, recall history per FDA CVM, the 2018-2019 grain-free DCM investigation listing, and manufacturing footprint.",
    url: 'https://petfood.com/brands/blue-buffalo-evaluation',
    imageUrl: '',
    authorName: 'PetFood.com Editorial',
    publishedAt: '2026-05-29T00:00:00Z',
    modifiedAt: '2026-05-29T00:00:00Z',
  }),
  buildFAQSchema({ questions: FAQ }),
)

export default function BlueBuffaloEvaluationPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="brand"
      hero={{
        title: 'Blue Buffalo — An Independent Evaluation',
        subtitle:
          'Blue Buffalo (Blue Buffalo Pet Products, marketed as BLUE) is one of the most-marketed brands in U.S. pet food and a category-defining example of the 2010s premium-natural wave that ended in a series of large-brand acquisitions by mainstream consumer-products companies. This page evaluates Blue Buffalo against the PetFood.com five-dimension rubric — corporate context, product lines, marketing claims, manufacturing, recall history, and the brand-name listing in the FDA CVM 2018-2019 grain-free DCM investigation.',
        category: 'Brand Evaluation',
        publishedAt: 'May 2026',
        readTime: '16 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Brands' },
        { name: 'Blue Buffalo', href: '/brands/blue-buffalo-evaluation' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Corporate History', href: '#history' },
              { label: 'Product Line Breakdown', href: '#products' },
              { label: 'LifeSource Bits', href: '#lifesource' },
              { label: 'Manufacturing Footprint', href: '#manufacturing' },
              { label: 'Recall History', href: '#recalls' },
              { label: 'The 2018 DCM Listing', href: '#dcm' },
              { label: 'Litigation Record', href: '#litigation' },
              { label: 'Marketing vs Substance', href: '#marketing' },
              { label: 'PetFood.com Scoring', href: '#scoring' },
              { label: 'Common Questions', href: '#faq' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Our Scoring Methodology', href: '/guides/methodology' },
              { label: "Hill's vs Royal Canin", href: '/brands/hills-vs-royal-canin' },
              { label: 'Orijen vs Acana', href: '/brands/orijen-vs-acana-comparison' },
              { label: 'Grain-Free and DCM Risk', href: '/ingredients/grain-free-dcm-risk' },
              { label: 'Animal Protein Sources', href: '/ingredients/animal-protein-sources' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="blue-buffalo-evaluation"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>
          Blue Buffalo is one of the most-recognized brands in U.S. pet food, the largest brand
          in the &quot;wholesome natural&quot; segment as it emerged in the late 2000s and early
          2010s, and — since the 2018 acquisition by General Mills — a wholly-owned subsidiary
          of a large packaged-foods conglomerate. The brand is also one of the most-discussed in
          consumer pet food coverage, the subject of significant litigation, and one of 16
          brands named in the FDA CVM&apos;s 27 June 2019 update on the grain-free DCM
          investigation. An honest evaluation has to engage all of that.
        </p>

        <AffiliateDisclosure variant="inline" siteId="petfood-com" />
        <BuyBox
          label="Where to buy Blue Buffalo"
          disclosure="If after reading this evaluation you still want to buy Blue Buffalo, browse the full lineup on Chewy or Amazon. We earn an affiliate commission when you purchase through these links — at no extra cost to you."
          secondaryDisclosure="We never rank by commission."
          brands={[
            {
              name: 'Blue Buffalo',
              vendors: [
                { vendor: 'chewy', href: '/go/chewy-brand/Blue%20Buffalo?s=eval-blue-buffalo', label: 'Search on Chewy' },
                { vendor: 'amazon', href: '/go/amazon-brand/Blue%20Buffalo?s=eval-blue-buffalo', label: 'Search on Amazon' },
              ],
            },
          ]}
        />

        <h2 id="history">Corporate History</h2>
        <p>
          Blue Buffalo Pet Products was founded in 2002 in Wilton, Connecticut, by Bill Bishop
          and his sons Billy and Chris Bishop, following the death of the family Airedale (named
          Blue). The brand launched in 2003 and built distribution through the pet specialty
          channel (PetSmart, Petco) on the &quot;True Blue Promise&quot; positioning: no
          chicken by-product meals, no corn, no wheat, no soy, no artificial preservatives,
          flavors, or colors. The combination of pet-specialty distribution, premium pricing,
          and aggressive marketing — including a long-running television and print campaign
          comparing Blue Buffalo ingredient panels to those of mainstream brands — drove sales
          from roughly $4M in the first year to roughly $1.3B by 2017.
        </p>
        <p>
          In February 2018, General Mills, Inc. (NYSE: GIS) announced the acquisition of Blue
          Buffalo Pet Products for approximately $8.0 billion in cash, completing the
          transaction in April 2018. The acquisition was, at the time, the largest pet food
          deal in U.S. history and marked the formal end of the &quot;boutique-natural&quot;
          ownership era for Blue Buffalo. It was also one of a series of large acquisitions of
          premium-natural pet food brands by mainstream consumer-products companies in the
          2014-2022 period: J.M. Smucker acquired Big Heart Pet Brands (Meow Mix, Milk-Bone,
          Kibbles &apos;n Bits) in 2015 and Ainsworth Pet Nutrition (Rachael Ray Nutrish) in
          2018; Mars acquired Champion Petfoods (Orijen, Acana) in 2022; Post Holdings acquired
          Perfection Pet Foods in 2022 (and the Nutrish business from Smucker in 2023). Blue
          Buffalo&apos;s sale was an emblematic transaction of the wave.
        </p>
        <p>
          Blue Buffalo continues to operate as a stand-alone subsidiary within General Mills&apos;
          North America Pet segment, which is broken out in General Mills&apos; 10-K filings.
          The segment reported approximately $2.2 billion in net sales in fiscal year 2023,
          making Blue Buffalo one of the largest brands in the natural-and-premium pet food
          channel.
        </p>

        <h2 id="products">Product Line Breakdown</h2>
        <p>
          Blue Buffalo&apos;s catalog as of 2025-2026 includes several major lines, each with
          dry, wet, and treat SKUs:
        </p>
        <ul>
          <li>
            <strong>BLUE Life Protection Formula</strong> — the flagship adult and life-stage
            line. Grain-inclusive (brown rice, oatmeal, barley). Real meat as the first
            ingredient (deboned chicken, lamb, beef, salmon, depending on SKU). LifeSource Bits
            included. AAFCO formulated-to-meet substantiation on most SKUs.
          </li>
          <li>
            <strong>BLUE Wilderness</strong> — the grain-free line, introduced in the late
            2000s during the grain-free wave. Higher animal-ingredient inclusion (target ~35-40%
            crude protein on a dry-matter basis). Pulses and tubers as the primary carbohydrate
            base. Several SKUs were named in the FDA CVM 2018-2019 DCM investigation; see DCM
            section below.
          </li>
          <li>
            <strong>BLUE Basics</strong> — a limited-ingredient line for owners managing
            suspected protein intolerance. Single named protein (turkey, salmon, lamb, duck).
            Reduced ingredient list relative to Life Protection Formula. Grain-inclusive and
            grain-free SKUs.
          </li>
          <li>
            <strong>BLUE Freedom</strong> — grain-free without the Wilderness line&apos;s
            higher protein inclusion. Marketed as a lower-cost grain-free option.
          </li>
          <li>
            <strong>BLUE Natural Veterinary Diet</strong> — therapeutic line introduced to
            position Blue Buffalo in the veterinary channel against Hill&apos;s Prescription
            Diet and Royal Canin Veterinary Diet. Indications include renal (KS), urinary
            (W+U), hydrolyzed-protein (HF), gastrointestinal (GI), weight management (W+M),
            and others. Catalog breadth is smaller than Hill&apos;s or Royal Canin therapeutic
            lines. AAFCO formulated-to-meet substantiation on most SKUs.
          </li>
          <li>
            <strong>BLUE Tastefuls / True Solutions / Carnivora / Wholesome Essentials</strong>{' '}
            — additional sub-lines and cat-specific lines, with positioning ranging from
            grain-inclusive cat to specific-functional-claim lines (skin/coat, weight, hairball).
          </li>
        </ul>

        <h2 id="lifesource">LifeSource Bits</h2>
        <p>
          LifeSource Bits are a proprietary Blue Buffalo formulation feature — small dark-colored
          nuggets, mixed into the main kibble in most Blue Buffalo dry SKUs, marketed as a
          &quot;cold-formed&quot; vitamin, mineral, and antioxidant blend. The company&apos;s
          marketing position is that cold-forming preserves heat-labile nutrients that would be
          partially degraded by extrusion temperatures.
        </p>
        <p>
          The technical claim has partial support. Extrusion does degrade some heat-labile
          vitamins (vitamin C, several B-vitamins) at finished product, and supplementation
          formulations in many pet foods are designed to overshoot pre-extrusion to land at the
          AAFCO minima post-extrusion. A separately-cold-formed supplement nugget mixed in after
          extrusion is one way to address this — though not the only way, and not a Blue Buffalo
          original (multiple pet food makers use comparable approaches).
        </p>
        <p>
          The marketing-vs-substance question on LifeSource Bits is whether the proprietary
          format delivers a meaningful nutritional improvement over a well-designed integrated
          formulation. The published evidence is limited; Blue Buffalo has not published
          peer-reviewed comparative data demonstrating that the LifeSource format produces
          better finished-product vitamin profiles than integrated supplementation. The
          marketing claim depth exceeds the published substantiation depth, which is a pattern
          worth noting but not unique to Blue Buffalo in this segment.
        </p>

        <h2 id="manufacturing">Manufacturing Footprint</h2>
        <p>
          Blue Buffalo&apos;s manufacturing model differs from the WSAVA-aligned reference brands
          (Hill&apos;s, Royal Canin, Purina) in an important way: the brand historically used
          contract manufacturers rather than owned plants. Co-manufacturers identified in past
          public reporting include CJ Foods (Bern, Kansas; Pawnee City, Nebraska), American
          Nutrition (Ogden, Utah), and Tuffy&apos;s Pet Foods (Perham, Minnesota). After the
          General Mills acquisition, the company opened the BLUE Buffalo plant in Joplin,
          Missouri, which adds owned-plant capacity but does not, as of public reporting, fully
          replace co-manufacturing for the brand&apos;s SKU range.
        </p>
        <p>
          The contract-manufacturing model is common in the premium-natural segment (most
          boutique brands use it) and is not, on its own, a quality verdict. It does have
          implications for the WSAVA-aligned question framework — &quot;where is this made and
          who runs that plant?&quot; The answer for many Blue Buffalo SKUs has historically
          been &quot;a contract manufacturer the brand does not own,&quot; which is a different
          posture from Hill&apos;s and Royal Canin&apos;s owned-plant model.
        </p>

        <h2 id="recalls">Recall History</h2>
        <p>
          Blue Buffalo has appeared in the FDA CVM Recalls &amp; Withdrawals database multiple
          times over the past decade. The honest summary: Blue Buffalo has more recall events
          on file than the average premium brand, though no recurring single-supplier or
          single-pathogen pattern. Documented events include:
        </p>
        <ul>
          <li>
            <strong>2010</strong> — recall of select dry dog food SKUs for elevated vitamin D
            traced to a vitamin premix; the recall was disclosed via the FDA CVM database.
          </li>
          <li>
            <strong>2015-2016</strong> — recalls of select dog treats and wet dog food SKUs
            for potential moisture and packaging integrity concerns.
          </li>
          <li>
            <strong>2017</strong> — voluntary recall of select canned dog food SKUs for
            elevated beef thyroid hormone; the recall was disclosed via the FDA CVM database
            after consumer reports of hyperthyroid-like signs in dogs fed the product.
          </li>
          <li>
            <strong>2017</strong> — separate voluntary recall of select canned dog food SKUs
            for possible aluminum contamination from a packaging defect.
          </li>
          <li>
            Various smaller treat and topper recalls in subsequent years for label-content
            mismatches and minor specification deviations.
          </li>
        </ul>
        <p>
          For the authoritative SKU-and-lot-level record, query the FDA CVM Recalls &amp;
          Withdrawals database (Animal &amp; Veterinary section) directly; we do not maintain
          a real-time mirror. The pattern is one of multiple distinct recall events over the
          past decade, addressed with voluntary recall and corrective action, with no recurring
          fatal pattern. The frequency is higher than Hill&apos;s, Royal Canin, and Purina Pro
          Plan over the same period.
        </p>

        <h2 id="dcm">The 2018-2019 FDA CVM DCM Investigation Listing</h2>
        <p>
          On 27 June 2019, the FDA CVM published an update to its ongoing investigation into
          potential connection between certain diets and cases of canine dilated cardiomyopathy.
          The update included a brand-name list of the 16 brands most frequently named in the
          DCM case reports submitted to the agency between January 2014 and April 2019. Blue
          Buffalo was on that list, along with Acana, Zignature, Taste of the Wild, 4Health,
          Earthborn Holistic, Orijen, Nature&apos;s Domain, Fromm, Merrick, California Natural,
          Natural Balance, Canidae, Nutro, Rachael Ray Nutrish, and NutriSource.
        </p>
        <p>
          The FDA was explicit in the 2019 update that the listing was a frequency count from
          the case reports and did not constitute a regulatory finding of causation. The
          agency&apos;s subsequent updates (through December 2022) and the published peer-
          reviewed cardiology literature (Adin, Freid, Stern, Kaplan, and others) have refined
          the picture without producing a settled mechanism. The current state of evidence is
          discussed in detail on our{' '}
          <a href="/ingredients/grain-free-dcm-risk">grain-free and DCM page</a>.
        </p>
        <p>
          The Blue Buffalo SKUs most relevant to the DCM listing are the BLUE Wilderness grain-
          free recipes built on legume-and-tuber carbohydrate bases (peas, lentils, chickpeas,
          potato, sweet potato). The Life Protection Formula grain-inclusive line is not in the
          same formulation category as the SKUs named in the FDA correspondence. Owners of dogs
          in DCM-predisposed breeds (Doberman, Boxer, Great Dane, Irish Wolfhound, Cocker
          Spaniel) and in the atypical-breed signal (Golden Retriever) should raise the diet
          question with the treating veterinarian before committing to a BLUE Wilderness
          formulation; the grain-inclusive Life Protection Formula or Basics lines are different
          formulation categories.
        </p>

        <h2 id="litigation">Litigation Record</h2>
        <p>
          Blue Buffalo has been the subject of multiple consumer class-action lawsuits, most
          notably the 2014 Purina suit alleging that Blue Buffalo&apos;s &quot;True Blue
          Promise&quot; advertising was misleading because independent laboratory testing
          (commissioned by Purina) had detected chicken by-product meal, corn, and other
          ingredients in tested Blue Buffalo product despite the company&apos;s marketing
          claims that the brand contained none of these ingredients. Blue Buffalo subsequently
          filed a counter-suit and a separate suit against its ingredient supplier (Wilbur-Ellis)
          for allegedly mislabeling chicken by-product meal as chicken meal. In 2016, Blue
          Buffalo paid a $32 million class-action settlement to consumers in the Wilbur-Ellis
          ingredient-mislabeling case.
        </p>
        <p>
          Subsequent litigation has covered the elevated-vitamin-D recall (2010), the elevated-
          thyroid-hormone recall (2017), and ingredient and labeling questions raised by
          consumers. The litigation record is, by pet food brand standards, unusually extensive
          and is part of the published evidence on the brand&apos;s history. We report it
          without taking a position on the merits of individual cases.
        </p>

        <h2 id="marketing">Marketing Depth vs Substantive Differentiation</h2>
        <p>
          A through-line of the Blue Buffalo evaluation is that the marketing claim depth is
          larger than the substantive-differentiation depth on the published evidence. The
          &quot;True Blue Promise,&quot; the LifeSource Bits, the &quot;Pet Parent&quot;
          language, and the long-running advertising campaign comparing Blue Buffalo ingredient
          panels to mainstream-brand panels are well-developed marketing assets. The published
          peer-reviewed comparative data demonstrating that Blue Buffalo formulations
          outperform comparably-priced peer brands on completeness, digestibility, or clinical
          outcomes is limited. This is not unique to Blue Buffalo — the same pattern applies
          to many brands in the premium-natural segment — but it is more pronounced for Blue
          Buffalo given the size of the brand&apos;s marketing footprint.
        </p>
        <p>
          What the brand does well: ingredient transparency (named proteins early in the
          ingredient panel for most SKUs), grain-inclusive and grain-free options across price
          tiers, broad SKU range. What the brand does less well: WSAVA-aligned question
          framework coverage (the company has employed staff veterinary nutritionists in recent
          years but the disclosed depth is below Hill&apos;s and Royal Canin), recall frequency
          (above peer average), substantiation depth on proprietary claims (LifeSource Bits
          marketing exceeds published substantiation).
        </p>

        <h2 id="scoring">Scoring Against the PetFood.com Rubric</h2>
        <p>
          The PetFood.com methodology evaluates brands on five dimensions (see our{' '}
          <a href="/guides/methodology">methodology page</a>). Blue Buffalo, on the basis of the
          published evidence in this evaluation:
        </p>
        <ul>
          <li>
            <strong>Ingredient transparency</strong> — Above-average. Named proteins early in
            the panel for most SKUs; species-named meals; ingredient-origin disclosure has
            improved post-General-Mills.
          </li>
          <li>
            <strong>AAFCO substantiation</strong> — Average. Most SKUs use formulation-pathway
            substantiation. Few feeding-trial-substantiated SKUs in the catalog.
          </li>
          <li>
            <strong>Manufacturing transparency &amp; food safety</strong> — Below-average.
            Historical contract-manufacturing model with limited owned-plant footprint; recall
            frequency above peer average.
          </li>
          <li>
            <strong>Regulatory / advisory posture</strong> — Mixed. Brand-name listing in 2019
            FDA CVM DCM update affects BLUE Wilderness specifically; Life Protection Formula
            is not in the same formulation category.
          </li>
          <li>
            <strong>Marketing-to-substance ratio</strong> — Below-average. Marketing claim
            depth exceeds published substantiation depth, particularly for LifeSource Bits.
          </li>
        </ul>
        <p>
          We do not produce a single composite score because we do not believe a single number
          adequately represents the trade-offs an owner faces. The brand-page summary above is
          the substantive output of the evaluation; specific SKU pages apply the rubric at the
          SKU level.
        </p>

        <h2 id="faq">Common Questions</h2>
        <p><strong>Is Blue Buffalo a &quot;bad&quot; brand?</strong></p>
        <p>
          No. Blue Buffalo is a brand with above-average ingredient transparency, average AAFCO
          substantiation, a higher-than-peer recall frequency, and a marketing-claim depth
          larger than its published-evidence depth. None of those facts make it categorically
          unacceptable, and many BLUE SKUs are perfectly reasonable feeding choices. The
          evidence-based verdict is mixed, and an owner&apos;s decision should be made on the
          specific SKU and the specific animal&apos;s clinical context.
        </p>
        <p><strong>Should I switch off BLUE Wilderness because of the DCM listing?</strong></p>
        <p>
          That is a veterinary question, especially for owners of dogs in DCM-predisposed or
          atypical-signal breeds. The 2019 FDA CVM listing is informational, not regulatory,
          and the underlying investigation has not produced a settled mechanism. The
          conservative position for at-risk breeds is to discuss the diet with the treating
          veterinarian; the conservative position for low-risk breeds is to be aware of the
          listing as one factor in the evaluation.
        </p>
        <p><strong>Has the General Mills acquisition changed the formulation?</strong></p>
        <p>
          The published Blue Buffalo material since the 2018 acquisition does not indicate a
          fundamental reformulation. The brand has been operated as a stand-alone subsidiary
          and has continued to publish under the same recipe and ingredient frameworks.
          General Mills acquisitions of consumer brands in the packaged-foods space have
          historically been low-touch on formulation; the same pattern appears to apply here.
        </p>

        <h2 id="sources">Sources</h2>
        <ul>
          <li>
            U.S. Food and Drug Administration, Center for Veterinary Medicine. <em>FDA Provides
            Update on Investigation into Potential Connection Between Certain Diets and Cases
            of Canine Heart Disease</em> (27 June 2019); subsequent FDA CVM DCM updates
            through December 2022; <em>Recalls, Market Withdrawals and Safety Alerts</em>{' '}
            database (Animal &amp; Veterinary).
          </li>
          <li>
            General Mills, Inc. Annual Reports and 10-K filings (NYSE: GIS). North America Pet
            segment financial disclosure. Press release on the February 2018 Blue Buffalo
            acquisition announcement; closing announcements (April 2018).
          </li>
          <li>
            Blue Buffalo Pet Products, Inc. S-1 filing (2015 IPO) and subsequent 10-K filings
            (2015-2017, prior to the General Mills acquisition).
          </li>
          <li>
            Federal court records, Blue Buffalo / Nestlé Purina PetCare litigation (2014
            filings); Blue Buffalo / Wilbur-Ellis litigation; consumer class-action settlements.
            Cited as public-record litigation context.
          </li>
          <li>
            World Small Animal Veterinary Association (WSAVA) Global Nutrition Committee.
            <em> Recommendations on Selecting Pet Foods</em>.
          </li>
          <li>
            Association of American Feed Control Officials. <em>2025 AAFCO Official
            Publication</em>, Chapter 4 (nutritional adequacy substantiation procedures) and
            Chapter 6 (ingredient definitions).
          </li>
          <li>
            Adin D, DeFrancesco TC, Keene B, et al. Published peer-reviewed cardiology
            literature on diet-associated dilated cardiomyopathy in dogs (2018-2024) — see
            our <a href="/ingredients/grain-free-dcm-risk">grain-free and DCM page</a> for
            the citation set.
          </li>
        </ul>
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. We do not provide individualized veterinary advice
          and we do not endorse or condemn Blue Buffalo as a brand. Diet selection for a
          specific animal — especially one in a DCM-predisposed or DCM-signal breed — is a
          conversation for a licensed veterinarian and, where indicated, a board-certified
          veterinary cardiologist or nutritionist.
        </p>
      </div>
    </ArticleLayout>
  )
}
