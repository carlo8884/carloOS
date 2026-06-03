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
  title: "Hill's vs Royal Canin — Veterinary Channel Comparison",
  description:
    "Hill's Pet Nutrition vs Royal Canin compared — corporate ownership, manufacturing, recall history, AAFCO posture, vet diet lines, and WSAVA-aligned criteria.",
  path: '/brands/hills-vs-royal-canin',
  type: 'article',
})

const FAQ = [
  {
    question: "Is Hill's better than Royal Canin (or vice versa)?",
    answer:
      'No general answer. The two brands are substantively comparable on the WSAVA criteria, comparable on owned-plant manufacturing footprint, comparable on board-certified nutritionist staffing, and comparable on overall AAFCO substantiation breadth. Within a specific therapeutic indication — renal, urinary, hydrolyzed-protein, novel-protein — the SKUs differ in clinically meaningful ways and the choice should be made by the treating clinician on the basis of the case, not by brand loyalty.',
  },
  {
    question: "Why do my vet's shelves stock one and not the other?",
    answer:
      'Most U.S. small-animal clinics stock both, but inventory depth often favors one based on historical sales rep relationships, training the clinic team has received, and case mix. Vet-stocked inventory is not, in our view, a quality signal — it is a channel-and-relationship signal. The veterinarian\'s prescription is the signal that matters.',
  },
  {
    question: 'Can I switch between brands within a therapeutic indication?',
    answer:
      "For most indications, yes — under veterinary supervision. The formulations differ enough that a stepped transition over 7-10 days is appropriate; clinical monitoring (bloodwork, weight, urine specific gravity, etc. depending on indication) should accompany the switch if the patient's baseline is unstable. This is a clinical question, not one this page can answer for an individual animal.",
  },
  {
    question:
      'Are the maintenance lines (Science Diet, Royal Canin retail) the same as the therapeutic lines?',
    answer:
      'No. The therapeutic Prescription Diet and Veterinary Diet lines are formulated for specific disease states, are substantiated against different targets (e.g., phosphorus restriction for renal, mineral profile for urinary), and are intended for veterinary authorization. Substituting a maintenance SKU for a therapeutic SKU is not interchangeable and can be clinically harmful for the indication.',
  },
]

const schema = combineSchemas(
  buildArticleSchema({
    siteId: 'petfood-com',
    title: "Hill's vs Royal Canin — Veterinary Channel Comparison",
    description:
      "Independent comparison of Hill's Pet Nutrition and Royal Canin — the two largest brands in the U.S. veterinary therapeutic channel — across corporate ownership, manufacturing transparency, recall history, AAFCO statement types, and prescription/therapeutic diet portfolios.",
    url: 'https://petfood.com/brands/hills-vs-royal-canin',
    imageUrl: '',
    authorName: 'PetFood.com Editorial',
    publishedAt: '2026-05-29T00:00:00Z',
    modifiedAt: '2026-05-29T00:00:00Z',
  }),
  buildFAQSchema({ questions: FAQ }),
)

export default function HillsVsRoyalCaninPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="brand"
      hero={{
        title: "Hill's vs Royal Canin",
        subtitle:
          "Hill's Pet Nutrition and Royal Canin are the two largest companies in the U.S. veterinary therapeutic diet channel. Both have feeding-trial-tested adult lines and formulated-to-meet maintenance lines; both have recall history in the FDA CVM database; both publish WSAVA-aligned manufacturing disclosures. This page works the comparison through corporate ownership, manufacturing footprint, prescription diet portfolios, and the practical question of how a clinician or owner should evaluate the two side by side.",
        category: 'Brand Comparison',
        publishedAt: 'May 2026',
        readTime: '16 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Brands' },
        { name: "Hill's vs Royal Canin", href: '/brands/hills-vs-royal-canin' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Corporate Context', href: '#corporate' },
              { label: 'At-a-Glance Table', href: '#at-a-glance' },
              { label: 'Manufacturing Footprint', href: '#manufacturing' },
              { label: 'AAFCO Pathway', href: '#aafco' },
              { label: 'Veterinary Diet Lines', href: '#vet-diets' },
              { label: 'Recall History', href: '#recalls' },
              { label: 'WSAVA-Aligned Criteria', href: '#wsava' },
              { label: 'Pricing & Channel', href: '#price' },
              { label: 'Common Questions', href: '#faq' },
              { label: 'Verdict', href: '#verdict' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Our Scoring Methodology', href: '/guides/methodology' },
              { label: 'AAFCO Completeness Explained', href: '/guides/aafco-completeness-explained' },
              { label: 'Reading a Pet Food Label', href: '/guides/reading-pet-food-labels' },
              { label: 'Orijen vs Acana', href: '/brands/orijen-vs-acana-comparison' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="hills-vs-royal-canin"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>
          Hill&apos;s Pet Nutrition and Royal Canin are the two largest companies in the U.S.
          veterinary therapeutic diet channel. They are the two brands a small-animal clinician is
          most likely to write on a feeding recommendation in 2026, and they are the two brands
          most commonly named in the World Small Animal Veterinary Association (WSAVA) Global
          Nutrition Committee&apos;s published guidance because they are among the few large
          manufacturers that publish enough information to satisfy the committee&apos;s recommended
          owner questions. They are also competitors of comparable scale, comparable channel reach,
          and comparable price tier — so the comparison most often comes down to formulation
          specifics, condition-specific therapeutic options, and the clinician&apos;s personal
          experience.
        </p>

        <AffiliateDisclosure variant="inline" siteId="petfood-com" />
        <BuyBox
          label="Where to buy either brand (OTC retail lines only)"
          disclosure="Both brands are widely available on Chewy and Amazon. We earn an affiliate commission when you purchase through these links — at no extra cost to you."
          secondaryDisclosure="We never rank by commission."
          brands={[
            {
              name: "Hill's Science Diet",
              vendors: [
                { vendor: 'chewy', href: "/go/chewy-brand/Hill%27s%20Science%20Diet?s=hills-vs-rc" },
                { vendor: 'amazon', href: "/go/amazon-brand/Hill%27s%20Science%20Diet?s=hills-vs-rc" },
              ],
            },
            {
              name: 'Royal Canin',
              vendors: [
                { vendor: 'chewy', href: '/go/chewy-brand/Royal%20Canin?s=hills-vs-rc' },
                { vendor: 'amazon', href: '/go/amazon-brand/Royal%20Canin?s=hills-vs-rc' },
              ],
            },
          ]}
        />
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '-8px', marginBottom: '24px' }}>
          These links surface the over-the-counter retail lines only. Therapeutic and prescription
          diet lines (Hill&apos;s Prescription Diet, Royal Canin Veterinary Diet) require a
          veterinary authorization and are dispensed through your veterinarian or a licensed
          online pharmacy with a valid prescription. Therapeutic diets should be used only under
          veterinary guidance. This is not medical advice.
        </p>

        <h2 id="corporate">Corporate Context</h2>
        <p>
          Hill&apos;s Pet Nutrition is a wholly-owned subsidiary of Colgate-Palmolive Company, a
          publicly traded U.S. consumer-products company (NYSE: CL). Hill&apos;s was founded in 1907
          in Topeka, Kansas, and the relationship with Colgate-Palmolive dates to 1976.
          Hill&apos;s is broken out as a reportable segment in Colgate-Palmolive&apos;s 10-K
          filings, which gives the brand an unusually high degree of public-financial transparency
          relative to most pet food competitors. The segment reported approximately $4.0 billion in
          2023 net sales, according to Colgate-Palmolive&apos;s public filings.
        </p>
        <p>
          Royal Canin is a subsidiary of Mars, Incorporated, the privately-held U.S. conglomerate
          whose Mars Petcare division also owns Iams, Eukanuba, Pedigree, Nutro, Cesar, Whiskas,
          Sheba, Greenies, and — since 2022 — Champion Petfoods (Orijen and Acana). Royal Canin was
          founded in 1968 in Aimargues, France, by veterinarian Jean Cathary, and joined Mars in
          2002. Because Mars is private, segment-level financial disclosure for Royal Canin is more
          limited than for Hill&apos;s. Mars Petcare publishes consolidated revenue figures
          periodically but does not break Royal Canin out as a separate line item.
        </p>
        <p>
          Strategic positioning differs in one important respect. Hill&apos;s built its brand
          identity around veterinary clinical research from the start — the &quot;Hill&apos;s
          Prescription Diet&quot; line is one of the oldest continuously-marketed therapeutic pet
          food lines in the world (the original was developed in the 1940s in collaboration with
          ophthalmologist Mark Morris Sr. for a guide dog with renal failure). Royal Canin grew up
          on breed-specific and life-stage-specific formulation, then layered a therapeutic line on
          top once it had veterinary-channel distribution. Both companies now field both
          maintenance and therapeutic portfolios, but the historical center of gravity is different,
          and that shows up in catalog breadth.
        </p>

        <h2 id="at-a-glance">At-a-Glance Comparison</h2>
        <div style={{ background: 'rgba(31,26,20,0.04)', border: '1px solid rgba(31,26,20,0.10)', borderRadius: '10px', padding: '18px 22px', margin: '20px 0', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', minWidth: '560px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid rgba(31,26,20,0.18)' }}>
                <th style={{ textAlign: 'left', padding: '8px 6px', fontWeight: 700 }}>Dimension</th>
                <th style={{ textAlign: 'left', padding: '8px 6px', fontWeight: 700 }}>Hill&apos;s</th>
                <th style={{ textAlign: 'left', padding: '8px 6px', fontWeight: 700 }}>Royal Canin</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid rgba(31,26,20,0.08)' }}>
                <td style={{ padding: '8px 6px' }}>Parent</td>
                <td style={{ padding: '8px 6px' }}>Colgate-Palmolive (NYSE: CL)</td>
                <td style={{ padding: '8px 6px' }}>Mars, Incorporated (private)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(31,26,20,0.08)' }}>
                <td style={{ padding: '8px 6px' }}>Founded</td>
                <td style={{ padding: '8px 6px' }}>1907 (Topeka, Kansas)</td>
                <td style={{ padding: '8px 6px' }}>1968 (Aimargues, France)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(31,26,20,0.08)' }}>
                <td style={{ padding: '8px 6px' }}>Maintenance retail line</td>
                <td style={{ padding: '8px 6px' }}>Science Diet</td>
                <td style={{ padding: '8px 6px' }}>Royal Canin (size / breed / life-stage)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(31,26,20,0.08)' }}>
                <td style={{ padding: '8px 6px' }}>Veterinary therapeutic line</td>
                <td style={{ padding: '8px 6px' }}>Prescription Diet</td>
                <td style={{ padding: '8px 6px' }}>Veterinary Diet</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(31,26,20,0.08)' }}>
                <td style={{ padding: '8px 6px' }}>AAFCO pathway (most adult lines)</td>
                <td style={{ padding: '8px 6px' }}>Feeding trial on flagship adult; formulation on many therapeutic SKUs</td>
                <td style={{ padding: '8px 6px' }}>Feeding trial on flagship adult; formulation on many therapeutic SKUs</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(31,26,20,0.08)' }}>
                <td style={{ padding: '8px 6px' }}>Primary U.S. manufacturing</td>
                <td style={{ padding: '8px 6px' }}>Owned plants in Kansas, Indiana, Tennessee, Iowa</td>
                <td style={{ padding: '8px 6px' }}>Owned plants in South Dakota, Missouri</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(31,26,20,0.08)' }}>
                <td style={{ padding: '8px 6px' }}>FDA CVM recall history (last decade)</td>
                <td style={{ padding: '8px 6px' }}>Yes — 2019 canned excess vitamin D</td>
                <td style={{ padding: '8px 6px' }}>Yes — periodic limited withdrawals</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(31,26,20,0.08)' }}>
                <td style={{ padding: '8px 6px' }}>Board-certified veterinary nutritionists on staff</td>
                <td style={{ padding: '8px 6px' }}>Yes (disclosed; multiple DACVIM-Nutrition)</td>
                <td style={{ padding: '8px 6px' }}>Yes (disclosed; multiple DACVIM-Nutrition and ECVCN)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(31,26,20,0.08)' }}>
                <td style={{ padding: '8px 6px' }}>Approximate price per 100 kcal (U.S. retail, 2025-2026)</td>
                <td style={{ padding: '8px 6px' }}>$0.09–$0.20 (therapeutic higher)</td>
                <td style={{ padding: '8px 6px' }}>$0.10–$0.22 (therapeutic higher)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 6px' }}>Positioning</td>
                <td style={{ padding: '8px 6px' }}>Clinical/therapeutic heritage; broad veterinary channel</td>
                <td style={{ padding: '8px 6px' }}>Breed/size/life-stage segmentation; broad veterinary channel</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="manufacturing">Manufacturing Footprint</h2>
        <p>
          Both companies own and operate the bulk of their manufacturing rather than contract it
          out, which is one of the operational facts the WSAVA Global Nutrition Committee
          recommends owners ask about. Hill&apos;s operates company-owned facilities in Topeka,
          Kansas; Richmond, Indiana; Bowling Green, Kentucky; Emporia, Kansas; and additional U.S.
          and international sites. Royal Canin operates company-owned facilities in North Sioux
          City, South Dakota, and Rolla, Missouri, plus international plants in France, Brazil,
          China, and Russia (among others).
        </p>
        <p>
          Both companies publish Global Food Safety Initiative (GFSI)-benchmarked certification
          posture. Hill&apos;s and Royal Canin North American plants are most commonly certified
          under FSSC 22000 or SQF (Safe Quality Food). GFSI-benchmarked schemes require
          third-party audit, documented hazard analysis, allergen controls, and supplier
          verification programs. The certification itself is not a guarantee of recall-free
          operation (see below) but it does establish a documented food-safety management baseline.
        </p>
        <p>
          The owned-plant footprint matters because contract manufacturing — common in the
          boutique-brand segment — can mean a single facility runs multiple competitor brands on
          the same line, with cross-contamination risk and reduced traceability. For both
          Hill&apos;s and Royal Canin, the answer to &quot;where is this bag made and who runs
          that plant&quot; is &quot;we do.&quot; That is one operational reason the two brands
          come up frequently in WSAVA-aligned clinician guidance, not a quality claim about the
          finished product.
        </p>

        <h2 id="aafco">AAFCO Pathway</h2>
        <p>
          Both companies use a mix of AAFCO adequacy pathways depending on SKU. The flagship adult
          maintenance dry recipes — Hill&apos;s Science Diet Adult and Royal Canin&apos;s
          comparable size/life-stage dry recipes — are typically substantiated by AAFCO feeding
          trial on a representative product within a family, with related SKUs riding the family
          designation (an AAFCO procedural concept). Many therapeutic and specialty SKUs are
          substantiated by formulation. We cover the difference in detail on our{' '}
          <a href="/guides/aafco-completeness-explained">AAFCO completeness page</a>; the short
          version is that feeding-trial substantiation is a higher-evidence pathway, and the fact
          that the flagship adult lines from both companies use it is part of why the WSAVA
          guidance singles them out as candidates owners should consider.
        </p>
        <p>
          A clinician reading a Hill&apos;s or Royal Canin bag should always read the AAFCO
          statement on the specific SKU rather than assume the family designation carries over.
          Some therapeutic SKUs — particularly novel-protein and hydrolyzed-protein diets — are
          formulated to meet rather than feeding-trial tested because the test population for the
          trial would be impractical to assemble. That is a defensible technical choice and not
          a quality knock; it does, however, change how the SKU should be presented to an owner
          asking about evidence depth.
        </p>

        <h2 id="vet-diets">Veterinary Therapeutic Diet Lines</h2>
        <p>
          The therapeutic catalogs are the practical differentiator between the two companies. As
          of 2025-2026, both maintain therapeutic SKUs covering the major small-animal indications:
          renal, hepatic, hyperthyroid (cat), gastrointestinal, hydrolyzed-protein and
          novel-protein (allergy), weight management, urinary (struvite/oxalate dissolution and
          prevention), diabetic, mobility/joint, dermatologic, cardiac, dental, recovery/critical
          care, and several behavior-adjacent lines (calm, stress). The catalogs do not map one-to-one
          — there are indications where Hill&apos;s has more SKUs and indications where Royal
          Canin has more SKUs, and the specific formulations differ in clinically meaningful ways
          even within the same indication.
        </p>
        <p>
          Examples of where the differences matter:
        </p>
        <ul>
          <li>
            <strong>Renal (chronic kidney disease):</strong> Both companies publish flagship dry
            and wet renal diets (Hill&apos;s k/d; Royal Canin Renal Support). Phosphorus restriction,
            protein quantity and quality, omega-3 inclusion, and palatability differ; randomized
            controlled trials supporting feeding renal diets to dogs and cats with International
            Renal Interest Society (IRIS) stage 2-3 disease have been published for both brands,
            though direct head-to-head trials are sparse.
          </li>
          <li>
            <strong>Hydrolyzed protein:</strong> Hill&apos;s z/d and Royal Canin Hydrolyzed
            Protein/Anallergenic are commonly written for elimination trials. Hydrolysis degree
            differs (Royal Canin&apos;s Anallergenic uses a lower-molecular-weight hydrolysate);
            cross-reactivity risk and palatability differ accordingly.
          </li>
          <li>
            <strong>Urinary:</strong> Both companies publish struvite-dissolution diets with RSS
            (relative supersaturation) data; Hill&apos;s c/d Multicare and Royal Canin Urinary SO
            are commonly compared. The published RSS targets are similar; mineral content and
            sodium load differ.
          </li>
          <li>
            <strong>Novel protein (catalog breadth):</strong> Royal Canin&apos;s Veterinary line
            historically has carried more novel-protein options (rabbit, venison, duck) than
            Hill&apos;s; Hill&apos;s has historically leaned more heavily on hydrolysates.
          </li>
        </ul>
        <p>
          A clinician choosing between the two brands for a specific case is making a case-by-case
          decision, not a brand-loyalty decision, and the catalog overlaps so much that switching
          brands within an indication is operationally straightforward.
        </p>

        <h2 id="recalls">Recall History</h2>
        <p>
          Both brands have appeared in the FDA CVM Recalls &amp; Withdrawals database. The honest
          summary: neither is recall-free, and the existence of recalls is not, on its own, a
          quality verdict — recall transparency and the response to a recall is at least as
          important as recall count.
        </p>
        <p>
          The most prominent recent Hill&apos;s recall was a January 2019 voluntary recall of
          select canned dog food SKUs for elevated vitamin D, traced to a vitamin premix from a
          supplier. The recall was expanded in March 2019. Hill&apos;s subsequently faced class-action
          litigation related to the recall; the company published a corrective-action statement and
          changed its vitamin premix supplier verification process. The recall is documented in the
          FDA CVM database and remains the most significant Hill&apos;s recall in the past decade.
        </p>
        <p>
          Royal Canin&apos;s recall history includes periodic limited withdrawals of specific lots
          for labeling errors and minor specification deviations, plus older recalls (2007) related
          to the industry-wide melamine contamination of imported wheat gluten — an episode that
          affected dozens of pet food brands and led to the Pet Food Safety Working Group
          recommendations and provisions in the Food Safety Modernization Act. We do not list
          specific lot numbers here; the FDA CVM Recalls &amp; Withdrawals database (Animal &amp;
          Veterinary section) is the authoritative source for SKU-and-lot-level recall verification
          and we recommend readers query it directly for any current concern.
        </p>
        <p>
          The framework for evaluating a recall, in our view, is: was the issue identified by the
          company or by a regulator, how quickly was it disclosed, was the corrective action
          plausible, and did the company change supplier-verification or hazard-analysis processes
          as a result. Both Hill&apos;s and Royal Canin have published corrective-action material
          in response to past recalls. Neither has been the subject of a recurring pattern of
          recalls in the past decade.
        </p>

        <h2 id="wsava">WSAVA Global Nutrition Committee Alignment</h2>
        <p>
          The WSAVA Global Nutrition Committee publishes a short list of questions it recommends
          owners ask any pet food manufacturer (the &quot;Recommendations on Selecting Pet Foods&quot;
          document). The questions cover: employment of a full-time qualified nutritionist;
          formulation expertise; AAFCO statement type and substantiation; quality-control
          procedures; nutrient analysis and stability; willingness to publish typical-analysis data
          on request; and recall transparency. Both Hill&apos;s and Royal Canin score well on the
          WSAVA question framework — they employ board-certified veterinary nutritionists, publish
          AAFCO statement types, publish quality-control material at the corporate level, and
          provide typical-analysis data on request through their veterinary professional channels.
        </p>
        <p>
          The WSAVA framework does not score brands or rank them; it defines a question set, and
          a manufacturer that answers all the questions is in a small minority. Hill&apos;s, Royal
          Canin, Purina Pro Plan Veterinary, and a small number of other brands are the practical
          set that pass the framework cleanly. PetFood.com&apos;s methodology treats the WSAVA
          framework as one input to scoring rather than as the scoring itself; see our{' '}
          <a href="/guides/methodology">methodology page</a> for the full rubric.
        </p>

        <h2 id="price">Pricing and Channel</h2>
        <p>
          On a per-100-kcal basis, Hill&apos;s and Royal Canin retail dry recipes typically run
          $0.09 to $0.20 per 100 kcal for maintenance lines and higher for therapeutic SKUs (often
          $0.18 to $0.30 per 100 kcal). The two brands are not the cheapest premium options and
          are not the most expensive; they sit broadly in the same price band, with Royal Canin
          breed-specific SKUs sometimes priced slightly above Hill&apos;s maintenance equivalents.
        </p>
        <p>
          Both brands sell into the veterinary channel primarily — therapeutic SKUs require
          veterinary authorization in the U.S. — and into mass retail for maintenance lines (Chewy,
          Petco, PetSmart, Amazon). Channel selection affects pricing: clinic-purchased therapeutic
          SKUs are typically priced at clinic-determined markups; mail-order therapeutic SKUs
          (Chewy, Vetsource) are typically lower-priced. We do not score on price; cost per 100
          kcal is reported on each formula page so a reader can weigh it.
        </p>

        <h2 id="faq">Common Questions</h2>
        <p><strong>Is Hill&apos;s better than Royal Canin (or vice versa)?</strong></p>
        <p>
          No general answer. The two brands are substantively comparable on the WSAVA criteria,
          comparable on owned-plant manufacturing footprint, comparable on board-certified
          nutritionist staffing, and comparable on overall AAFCO substantiation breadth. Within a
          specific therapeutic indication — renal, urinary, hydrolyzed-protein, novel-protein —
          the SKUs differ in clinically meaningful ways and the choice should be made by the
          treating clinician on the basis of the case, not by brand loyalty.
        </p>
        <p><strong>Why do my vet&apos;s shelves stock one and not the other?</strong></p>
        <p>
          Most U.S. small-animal clinics stock both, but inventory depth often favors one based on
          historical sales rep relationships, training the clinic team has received, and case
          mix. Vet-stocked inventory is not, in our view, a quality signal — it is a channel-and-
          relationship signal. The veterinarian&apos;s prescription is the signal that matters.
        </p>
        <p><strong>Can I switch between brands within a therapeutic indication?</strong></p>
        <p>
          For most indications, yes — under veterinary supervision. The formulations differ enough
          that a stepped transition over 7-10 days is appropriate; clinical monitoring (bloodwork,
          weight, urine specific gravity, etc. depending on indication) should accompany the switch
          if the patient&apos;s baseline is unstable. This is a clinical question, not one this
          page can answer for an individual animal.
        </p>
        <p><strong>Are the maintenance lines (Science Diet, Royal Canin retail) the same as the therapeutic lines?</strong></p>
        <p>
          No. The therapeutic Prescription Diet and Veterinary Diet lines are formulated for
          specific disease states, are substantiated against different targets (e.g., phosphorus
          restriction for renal, mineral profile for urinary), and are intended for veterinary
          authorization. Substituting a maintenance SKU for a therapeutic SKU is not
          interchangeable and can be clinically harmful for the indication.
        </p>

        <h2 id="verdict">Verdict</h2>
        <p>
          Hill&apos;s and Royal Canin are the two largest veterinary-channel brands in North
          America and are substantively comparable on the manufacturing, nutritionist-staffing,
          AAFCO substantiation, and recall-transparency criteria that WSAVA-aligned clinicians
          weight most heavily. Both have non-trivial recall history in the past decade; neither
          has a pattern of recurring recalls. Both employ board-certified veterinary nutritionists
          and publish typical-analysis data on request. Differences between the two brands are
          most operationally meaningful within specific therapeutic indications and are best
          adjudicated by a treating clinician on a case-by-case basis. Neither brand wins this
          comparison on the basis of the available evidence; either brand is a defensible choice
          in most clinical contexts. PetFood.com does not declare a winner because the rubric does
          not support one.
        </p>

        <h2 id="sources">Sources</h2>
        <ul>
          <li>
            World Small Animal Veterinary Association (WSAVA) Global Nutrition Committee.
            <em> Recommendations on Selecting Pet Foods</em>; <em>Global Nutrition Guidelines</em>.
            Published guidance documents.
          </li>
          <li>
            U.S. Food and Drug Administration, Center for Veterinary Medicine. <em>Recalls,
            Market Withdrawals and Safety Alerts</em> database (Animal &amp; Veterinary).
            Hill&apos;s January 2019 voluntary canned dog food recall (elevated vitamin D),
            expanded March 2019. Industry-wide 2007 melamine-contamination recalls (multiple
            brands including Royal Canin USA).
          </li>
          <li>
            Colgate-Palmolive Company. Annual Reports and 10-K filings (NYSE: CL). Hill&apos;s
            Pet Nutrition segment financial disclosure.
          </li>
          <li>
            Mars, Incorporated; Mars Petcare. Public communications and segment overviews.
            Royal Canin acquisition by Mars in 2002.
          </li>
          <li>
            Global Food Safety Initiative. <em>GFSI Benchmarking Requirements</em>; FSSC 22000
            and SQF scheme documentation.
          </li>
          <li>
            International Renal Interest Society (IRIS). Staging and dietary management guidance
            referenced in the renal-diet discussion.
          </li>
          <li>
            Association of American Feed Control Officials. <em>2025 AAFCO Official Publication</em>,
            Chapter 4 (AAFCO nutritional adequacy substantiation procedures: formulation and
            feeding trial pathways).
          </li>
          <li>
            FDA Food Safety Modernization Act (FSMA) and the Pet Food Safety Working Group
            recommendations following the 2007 melamine contamination episode.
          </li>
        </ul>
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. We do not provide individualized veterinary advice and
          we do not endorse either brand. Selection of a therapeutic diet for a specific animal is
          a clinical decision that belongs to a treating veterinarian.
        </p>
      </div>
    </ArticleLayout>
  )
}
