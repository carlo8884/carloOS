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
  AffiliateDisclosure,
  ArticleSourcesList,
  ArticleByline,
  StockImage,
  FAQAccordion,
  CrossPortfolioCard,
} from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Best Puppy Food 2026 — Large vs Small Breed | PetFood.com',
  description:
    'Puppy food analyzed on the AAFCO growth statement, large-breed calcium limits, calcium/phosphorus ratios, and the grain-free/DCM question — honestly framed.',
  path: '/reviews/best-puppy-food',
  type: 'article',
})

const FAQ: FAQItem[] = [
  {
    question: 'Why do large-breed puppies need a different food?',
    answer:
      'Because excess calcium during rapid growth is harmful to large-breed puppies specifically. Large- and giant-breed puppies grow for longer and reach much greater adult size, and their developing skeletons are vulnerable to developmental orthopedic disease — including osteochondrosis and hip dysplasia — when fed too much calcium or too many calories. AAFCO addresses this with a separate maximum calcium limit for foods intended for the growth of large-size dogs (those expected to reach 70 lb or more as adults). A food whose AAFCO growth statement explicitly includes large-size dogs has been formulated to respect that calcium ceiling; one that says growth "except for large-size dogs" has not. For a large-breed puppy, that clause is the single most important line on the label.',
  },
  {
    question: 'What calcium-to-phosphorus ratio should puppy food have?',
    answer:
      'AAFCO sets a calcium-to-phosphorus ratio for growth in the range of roughly 1:1 to 2:1, with absolute minimum and maximum calcium levels that matter more than the ratio alone for large breeds. The ratio keeps the two minerals in balance for proper bone mineralization; the absolute calcium maximum is what protects large-breed puppies from over-supplementation. The practical takeaway is to feed a complete food carrying the appropriate AAFCO growth statement and avoid adding calcium supplements or mixing in large amounts of an unbalanced food, which can push calcium past the safe ceiling.',
  },
  {
    question: 'Is grain-free puppy food safe?',
    answer:
      'This is an area of genuine, unresolved scientific uncertainty and we frame it carefully: the FDA opened an investigation in 2018 into a possible association between certain grain-free, legume-heavy diets and canine dilated cardiomyopathy (DCM). The agency has consistently stated this is an association observed in case reports, not an established causal relationship, and no mechanism has been confirmed. There is no regulatory finding that grain-free food causes DCM. Given the unresolved question, a conservative default for a growing puppy is a complete grain-inclusive food with an appropriate AAFCO growth statement, while recognizing that many grain-free foods are nutritionally complete and the question remains open. Owners of at-risk breeds should discuss diet with their veterinarian.',
  },
  {
    question: 'When should a puppy switch to adult food?',
    answer:
      'Roughly when the puppy approaches its expected adult size, which depends heavily on breed size. Small breeds may reach near-adult size around 9 to 12 months; large and giant breeds keep growing to 18 to 24 months and should stay on an appropriate large-breed growth (or all-life-stages) food until then. Switching a large-breed puppy to adult food too early, or too late, both carry risk, so the timing is best confirmed with a veterinarian based on the individual dog\'s growth.',
  },
]

const SOURCES = [
  {
    label: 'Association of American Feed Control Officials. 2025 AAFCO Official Publication — Dog Food Nutrient Profiles, including the maximum calcium provision for growth of large-size dogs.',
    publisher: 'AAFCO',
  },
  {
    label: 'Hazewinkel HAW, Tryfonidou MA. Calcium metabolism in growing dogs and developmental orthopedic disease. Reviewed in veterinary nutrition literature on large-breed growth.',
    publisher: 'Domestic Animal Endocrinology / veterinary nutrition literature',
  },
  {
    label: 'WSAVA Global Nutrition Guidelines and Recommendations on Selecting Pet Foods',
    url: 'https://wsava.org/committees/global-nutrition-committee/',
    publisher: 'World Small Animal Veterinary Association Global Nutrition Committee',
  },
  {
    label: 'FDA Investigation into Potential Link between Certain Diets and Canine Dilated Cardiomyopathy (2018-2022 updates).',
    url: 'https://www.fda.gov/animal-veterinary/news-events/fda-investigation-potential-link-between-certain-diets-and-canine-dilated-cardiomyopathy',
    publisher: 'U.S. Food and Drug Administration, Center for Veterinary Medicine',
  },
  {
    label: 'National Research Council. Nutrient Requirements of Dogs and Cats (2006) — calcium and phosphorus requirements for growth.',
    url: 'https://nap.nationalacademies.org/catalog/10668/nutrient-requirements-of-dogs-and-cats',
    publisher: 'National Academies of Sciences',
  },
  {
    label: 'AAHA Nutritional Assessment Guidelines for Dogs and Cats.',
    url: 'https://www.aaha.org/aaha-guidelines/',
    publisher: 'American Animal Hospital Association',
  },
]
const schema = combineSchemas(
  buildArticleSchema({
    siteId: 'petfood-com',
    title: 'Best Puppy Food 2026 — Ranked on AAFCO Growth, Calcium Limits, and Breed Size',
    description:
      'Analysis-led puppy food roundup evaluating foods on the AAFCO growth nutritional-adequacy statement, large-breed calcium maximums and calcium-to-phosphorus ratios, calorie density, and the grain-free/DCM association framed as association not causation.',
    url: 'https://petfood.com/reviews/best-puppy-food',
    imageUrl: '',
    authorName: 'PetFood.com Editorial',
    publishedAt: '2026-06-11T00:00:00Z',
    modifiedAt: '2026-06-11T00:00:00Z',
  
    citation: SOURCES,
  }),
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Puppy Food — Analysis-Led Picks 2026',
    numberOfItems: 5,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Best overall — AAFCO growth, feeding-trial-substantiated, balanced calcium' },
      { '@type': 'ListItem', position: 2, name: 'Best for large-breed puppies — AAFCO growth including large-size dogs, controlled calcium' },
      { '@type': 'ListItem', position: 3, name: 'Best for small-breed puppies — higher calorie density, small kibble' },
      { '@type': 'ListItem', position: 4, name: 'Best all-life-stages — meets growth profile, family-pack flexibility' },
      { '@type': 'ListItem', position: 5, name: 'Best value — complete AAFCO growth diet at a lower price band' },
    ],
  },
  buildFAQSchema({ questions: FAQ.map((f) => ({ question: f.question, answer: typeof f.answer === 'string' ? f.answer : '' })) }),
)


export default function BestPuppyFoodPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="brand"
      hero={{
        title: 'Best Puppy Food (2026): Ranked on AAFCO Growth, Calcium Limits, and Breed Size',
        subtitle:
          'Puppy food is the one category where getting the analysis wrong can cause permanent skeletal harm — particularly for large-breed puppies, where excess calcium during growth drives developmental orthopedic disease. This page ranks puppy foods on the AAFCO growth statement, the large-breed calcium maximum, the calcium-to-phosphorus ratio, and the grain-free/DCM question, which we frame as an open association rather than established causation. Foods are ranked on these disclosed criteria; we make no hands-on testing claims.',
        category: 'Analysis-Led Review',
        publishedAt: 'June 2026',
        readTime: '13 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Best Puppy Food', href: '/reviews/best-puppy-food' },
      ]}
      relatedLinks={[
        { title: 'Reviews Hub', href: '/reviews' },
        { title: 'Large-Breed Puppy Nutrition', href: '/feeding/large-breed-puppy-nutrition' },
        { title: 'Puppy & Kitten Growth Diets', href: '/diets/puppy-and-kitten-growth-diets' },
        { title: 'Grain-Free and DCM Risk', href: '/ingredients/grain-free-dcm-risk' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Why puppy food is higher-stakes', href: '#stakes' },
              { label: 'The five criteria', href: '#criteria' },
              { label: 'The AAFCO growth statement', href: '#aafco-growth' },
              { label: 'Large-breed vs small-breed', href: '#breed-size' },
              { label: 'Calcium and phosphorus', href: '#calcium' },
              { label: 'The grain-free / DCM question', href: '#dcm' },
              { label: 'How the picks rank', href: '#picks' },
              { label: 'Comparison table', href: '#table' },
              { label: 'Common questions', href: '#faq' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Our Scoring Methodology', href: '/guides/methodology' },
              { label: 'Large-Breed Puppy Nutrition', href: '/feeding/large-breed-puppy-nutrition' },
              { label: 'Puppy & Kitten Growth Diets', href: '/diets/puppy-and-kitten-growth-diets' },
              { label: 'Minerals in Pet Food', href: '/nutrition/minerals-in-pet-food' },
              { label: 'Grain-Free and DCM Risk', href: '/ingredients/grain-free-dcm-risk' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent analysis-led reviews as we publish them."
            source="best-puppy-food"
          />
          <CrossPortfolioCard currentSite="petfood-com" contentType="brand" variant="sidebar" />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-11T00:00:00Z" updatedAt="2026-06-11T00:00:00Z" reviewedBy="Editorial team" />
        <StockImage manifestKey="petfood-com:review-puppy-food" fallbackKey="petfood-com:category-brands" priority aspect="16:9" variant="wide" caption="Puppy food evaluated on AAFCO growth specs and large-breed calcium limits." />

        <p>
          Puppy food is the category where the analysis lens matters most, because getting the nutrition
          wrong during growth can cause permanent skeletal harm — especially in large-breed puppies, where
          excess calcium drives developmental orthopedic disease. This page ranks puppy foods on the
          specifications that govern healthy growth: the AAFCO growth nutritional-adequacy statement, the
          large-breed calcium maximum, the calcium-to-phosphorus ratio, and the grain-free/DCM question,
          which we frame honestly as an unresolved association rather than established causation. Foods are
          ranked on these disclosed criteria; we do not buy and feed products and make no testing claims.
        </p>

        <AffiliateDisclosure variant="inline" siteId="petfood-com" />

        {/* MONETIZATION: buy-box slot — top-of-page puppy-food picks CTA. Non-clinical growth
            diets are buy-box-eligible under QC §1.5.b. Monetization Bot owns the BuyBox
            component, /go affiliate routes, and disclosure copy. Do not invent routes here. */}

        <h2 id="stakes">Why puppy food is higher-stakes than any other category</h2>
        <p>
          For an adult dog, a suboptimal-but-complete food is a minor issue; for a growing puppy, the wrong
          mineral balance can produce lifelong orthopedic disease. Rapid skeletal growth is unforgiving of
          calcium excess. This is why puppy food is the one best-of category where the AAFCO statement is
          not a formality but a safety control — and why a roundup that ignores the large-breed calcium
          clause is doing the reader a genuine disservice. The picks below are organized around getting
          that control right first, and everything else second.
        </p>

        <h2 id="criteria">The five criteria we rank on</h2>
        <p>
          Each food was assessed against five disclosed criteria, applied in order. Picks are ranked on
          these; no brand pays for inclusion. The full framework is on our{' '}
          <a href="/guides/methodology">methodology page</a>.
        </p>
        <ol>
          <li>
            <strong>AAFCO growth adequacy.</strong> A valid complete-and-balanced statement for growth (or
            all life stages), and — critically for large breeds — whether that statement includes the
            growth of large-size dogs. Feeding-trial substantiation preferred over formulation alone.
          </li>
          <li>
            <strong>Calcium maximum and Ca:P ratio.</strong> For large-breed foods, adherence to the AAFCO
            calcium ceiling for growth of large-size dogs; for all foods, a calcium-to-phosphorus ratio in
            the safe range.
          </li>
          <li>
            <strong>Calorie density and protein for growth.</strong> Adequate energy and high-quality
            animal protein to support growth without overfeeding, which itself accelerates growth too fast
            in large breeds.
          </li>
          <li>
            <strong>Ingredient quality and the DCM question.</strong> Named animal proteins leading the
            panel; legume-heavy grain-free formulations weighted cautiously given the open FDA DCM
            investigation (see below).
          </li>
          <li>
            <strong>Recall history and manufacturer transparency.</strong> FDA-CVM recall record and
            WSAVA-aligned manufacturer disclosure.
          </li>
        </ol>

        <h2 id="aafco-growth">The AAFCO growth statement is the safety control</h2>
        <p>
          A puppy food must carry an AAFCO nutritional-adequacy statement for &quot;growth&quot; or for
          &quot;all life stages&quot; (which meets the growth-and-reproduction profile). An
          adult-maintenance-only food is not adequate for a puppy. But the clause that matters most for a
          large-breed puppy is the qualifier about large-size dogs. AAFCO requires that a food intended for
          the growth of large-size dogs (those expected to reach 70 lb or more as adults) meet a stricter
          maximum calcium limit. A label may therefore read &quot;for growth, including growth of large-size
          dogs&quot; — which is what a large-breed puppy needs — or &quot;for growth, except for the growth
          of large-size dogs,&quot; which signals the food has not been formulated to the large-breed
          calcium ceiling. Reading that clause correctly is the most consequential thing an owner of a
          large-breed puppy can do. Our guide to{' '}
          <a href="/guides/aafco-completeness-explained">AAFCO completeness</a> covers the statement in
          full.
        </p>

        <h2 id="breed-size">Large-breed vs small-breed growth</h2>
        <p>
          The two ends of the breed-size spectrum have genuinely different needs. Large- and giant-breed
          puppies grow for 18 to 24 months and reach great size; their risk is growing <em>too fast</em>,
          so their foods are formulated with controlled calcium and energy density to slow and steady the
          growth curve. Small-breed puppies, by contrast, have high metabolic rates and tiny stomachs, mature
          faster (often by 9 to 12 months), and are prone to juvenile hypoglycemia if underfed; their foods
          run higher in calorie density with small kibble sized for small mouths.
        </p>
        <p>
          This is why we split the picks by breed size rather than naming a single &quot;best puppy
          food.&quot; A nutrient profile that is correct for a Chihuahua puppy can be wrong for a Great Dane
          puppy and vice versa. Our reference on{' '}
          <a href="/feeding/large-breed-puppy-nutrition">large-breed puppy nutrition</a> goes deeper on the
          growth-curve management that makes the large-breed pick distinct.
        </p>

        <h2 id="calcium">Calcium, phosphorus, and the ratio</h2>
        <p>
          Calcium and phosphorus must be present in the right amounts and in the right balance for proper
          bone mineralization. AAFCO sets a calcium-to-phosphorus ratio for growth in the approximate range
          of 1:1 to 2:1, alongside absolute minimum and maximum calcium levels. For large-breed puppies the
          absolute maximum is the critical figure: too much calcium during rapid growth interferes with
          normal skeletal remodeling and is associated with developmental orthopedic disease such as
          osteochondrosis. Crucially, this is not a &quot;more is better&quot; nutrient — over-supplementing
          a growing large-breed puppy with calcium is actively harmful, which is why adding calcium
          supplements or mixing in large amounts of an unbalanced food is a mistake. Feed a complete food
          with the correct AAFCO growth statement and let the formulation control the calcium. The mineral
          details are on <a href="/nutrition/minerals-in-pet-food">minerals in pet food</a>.
        </p>

        <h2 id="dcm">The grain-free / DCM question, framed honestly</h2>
        <p>
          No puppy-food roundup can responsibly ignore the grain-free dilated cardiomyopathy question, and
          none should overstate it. Here is the careful version: in 2018 the FDA opened an investigation
          into a possible association between certain grain-free diets — typically those heavy in legumes
          (peas, lentils, chickpeas) and potatoes — and canine DCM, after a cluster of case reports. The FDA
          has been consistent that this is an <strong>association observed in case reports, not an
          established causal relationship</strong>, and through its later updates no mechanism has been
          confirmed. There is no regulatory finding that grain-free food causes DCM.
        </p>
        <p>
          Given an unresolved question and a growing animal, our scoring takes the conservative path: a
          complete grain-inclusive food with the appropriate AAFCO growth statement is the lower-uncertainty
          default for the top picks, while we acknowledge that many grain-free foods are nutritionally
          complete and that the science is genuinely open. We do not claim grain-free food is dangerous, and
          we do not dismiss the FDA signal — both would misrepresent the evidence. The full state of the
          investigation, including the named-brand 2019 frequency list and the peer-reviewed cardiology
          literature, is on our <a href="/ingredients/grain-free-dcm-risk">grain-free and DCM page</a>.
          Owners of DCM-predisposed breeds should raise diet with their veterinarian.
        </p>

        <h2 id="picks">How the picks rank</h2>
        <ul>
          <li>
            <strong>Best overall.</strong> A growth (or all-life-stages) diet, feeding-trial-substantiated,
            with named animal proteins leading, a balanced calcium-to-phosphorus ratio, and a clean recall
            record from a transparent manufacturer. Grain-inclusive, reflecting the conservative DCM stance.
          </li>
          <li>
            <strong>Best for large-breed puppies.</strong> The differentiator is an AAFCO growth statement
            that explicitly includes the growth of large-size dogs, with controlled calcium and calorie
            density to manage the growth curve. For any puppy expected to exceed 70 lb, this is the pick
            that matters.
          </li>
          <li>
            <strong>Best for small-breed puppies.</strong> Higher calorie density to meet a fast metabolism
            and small kibble sized for small mouths, on the same AAFCO growth baseline.
          </li>
          <li>
            <strong>Best all-life-stages.</strong> A food meeting the growth profile and suitable across
            life stages — useful for multi-dog households — provided it carries the large-size-dog clause if
            a large-breed puppy is in the home.
          </li>
          <li>
            <strong>Best value.</strong> A complete AAFCO growth diet at a lower price band that still clears
            the non-negotiables — valid growth statement, safe calcium, named proteins — without premium
            inclusions.
          </li>
        </ul>

        {/* MONETIZATION: buy-box slot — per-pick retailer CTAs for the five picks above.
            Non-clinical growth diets are buy-box-eligible under QC §1.5.b. Monetization Bot to
            wire BuyBox + /go routes + disclosure. Do not invent routes here. */}

        <h2 id="table">Comparison table — the criteria at a glance</h2>
        <div style={{ overflowX: 'auto', margin: '20px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ background: 'var(--brand-primary-pale)', textAlign: 'left' }}>
                <th style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Pick</th>
                <th style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>AAFCO statement</th>
                <th style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Large-size clause</th>
                <th style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Calorie density</th>
                <th style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Carb base</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Best overall</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Growth, feeding trial</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Included</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Standard</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Grain-inclusive</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Large-breed</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Growth, feeding trial</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Required / included</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Controlled</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Grain-inclusive</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Small-breed</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Growth</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>N/A</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Higher</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Grain-inclusive</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>All life stages</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>All life stages</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Check label</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Standard</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Grain-inclusive</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Best value</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Growth, formulated</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Check label</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Standard</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Grain-inclusive</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)' }}>
          For any large-breed puppy, confirm the food&apos;s AAFCO statement includes the growth of
          large-size dogs before purchase — that clause, not the price or the brand, is the decisive figure.
        </p>

        <h2 id="faq">Common questions</h2>
        <FAQAccordion items={FAQ} includeSchema={false} />

        <ArticleSourcesList sources={SOURCES} />
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. We do not provide individualized veterinary advice and our
          rankings are based on published label and regulatory data, not hands-on testing. Growth-diet
          selection for a large- or giant-breed puppy, and any diet decision for a puppy in a
          DCM-predisposed breed, should be confirmed with a licensed veterinarian.
        </p>
      </div>
    </ArticleLayout>
  )
}
