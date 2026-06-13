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
  title: 'Best Senior Dog Food 2026 — Protein & Calories | PetFood.com',
  description:
    'Senior dog food analyzed on protein quality for aging muscle, calorie density, joint nutrients (EPA/DHA), and AAFCO adult maintenance. Spec-driven, not a list.',
  path: '/reviews/best-senior-dog-food',
  type: 'article',
})

const FAQ: FAQItem[] = [
  {
    question: 'Do senior dogs need less protein?',
    answer:
      'For most healthy senior dogs, no — the opposite. The old idea that aging dogs need protein restriction to protect the kidneys has not held up; current evidence indicates healthy older dogs actually need adequate-to-higher quality protein to counter the age-related loss of lean muscle (sarcopenia). Protein restriction is appropriate specifically for dogs with diagnosed chronic kidney disease, and that is a therapeutic-diet decision made with a veterinarian, not a reason to feed every senior a low-protein food. The distinction between "high quality, adequate protein" and "restricted protein for diagnosed renal disease" is the single most misunderstood point in senior feeding.',
  },
  {
    question: 'Is "senior" on a dog food label a regulated term?',
    answer:
      'No. AAFCO defines nutrient profiles for only two life stages — growth/reproduction and adult maintenance — plus "all life stages." There is no separate AAFCO "senior" profile. A food labeled "senior" is meeting the adult-maintenance profile and the word reflects the manufacturer\'s formulation intent (often lower calories, added joint nutrients), not a regulatory standard. That is why we read the actual guaranteed analysis and ingredient panel rather than trusting the "senior" badge.',
  },
  {
    question: 'What should I look for in food for an older, less active dog?',
    answer:
      'Calorie density matched to a slowing metabolism and lower activity, to avoid the weight gain that worsens arthritis; adequate high-quality protein to preserve muscle; and, where joint disease is present, meaningful levels of omega-3 fatty acids (EPA and DHA), which have the strongest evidence among joint-support nutrients. A valid AAFCO adult-maintenance statement is the baseline. Any specific condition — kidney disease, heart disease, significant arthritis — shifts the decision toward a therapeutic diet chosen with a veterinarian.',
  },
  {
    question: 'Do glucosamine and omega-3s in senior food actually help joints?',
    answer:
      'The evidence is strongest for omega-3 fatty acids (EPA and DHA), where multiple controlled studies in dogs with osteoarthritis show improved clinical signs at adequate intakes. The evidence for glucosamine and chondroitin from diet is weaker and less consistent. The practical issue is dose: the amounts present in a complete maintenance food are often below the levels used in the supportive studies, so a joint-support food is a reasonable baseline but not a substitute for a veterinarian-directed plan in a dog with significant arthritis.',
  },
]

const SOURCES = [
  {
    label: 'Association of American Feed Control Officials. 2025 AAFCO Official Publication — Dog Food Nutrient Profiles and nutritional-adequacy substantiation procedures.',
    publisher: 'AAFCO',
  },
  {
    label: 'WSAVA Global Nutrition Guidelines and Recommendations on Selecting Pet Foods',
    url: 'https://wsava.org/committees/global-nutrition-committee/',
    publisher: 'World Small Animal Veterinary Association Global Nutrition Committee',
  },
  {
    label: 'Laflamme DP. Pet food safety: dietary protein. Topics in Companion Animal Medicine. 2008;23(3):154-157 — and Laflamme DP, "Nutrition for aging cats and dogs and the importance of body condition," Vet Clin North Am Small Anim Pract. 2005.',
    publisher: 'Veterinary Clinics of North America: Small Animal Practice',
  },
  {
    label: 'Roush JK, Cross AR, Renberg WC, et al. Evaluation of the effects of dietary supplementation with fish oil omega-3 fatty acids on weight bearing in dogs with osteoarthritis. J Am Vet Med Assoc. 2010;236(1):67-73.',
    publisher: 'Journal of the American Veterinary Medical Association',
  },
  {
    label: 'AAHA Senior Care Guidelines for Dogs and Cats (most recent revision).',
    url: 'https://www.aaha.org/aaha-guidelines/',
    publisher: 'American Animal Hospital Association',
  },
  {
    label: 'National Research Council. Nutrient Requirements of Dogs and Cats (2006).',
    url: 'https://nap.nationalacademies.org/catalog/10668/nutrient-requirements-of-dogs-and-cats',
    publisher: 'National Academies of Sciences',
  },
]
const schema = combineSchemas(
  buildArticleSchema({
    siteId: 'petfood-com',
    title: 'Best Senior Dog Food 2026 — Ranked on Protein, Calories, and Joint Nutrients',
    description:
      'Analysis-led senior dog food roundup evaluating foods on protein quality for aging muscle and renal load, calorie density, joint-support nutrients (EPA/DHA, glucosamine), and AAFCO adult-maintenance substantiation.',
    url: 'https://petfood.com/reviews/best-senior-dog-food',
    imageUrl: '',
    authorName: 'PetFood.com Editorial',
    publishedAt: '2026-06-11T00:00:00Z',
    modifiedAt: '2026-06-11T00:00:00Z',
  
    citation: SOURCES,
  }),
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Senior Dog Food — Analysis-Led Picks 2026',
    numberOfItems: 5,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Best overall — adequate high-quality protein, controlled calories, feeding-trial-substantiated' },
      { '@type': 'ListItem', position: 2, name: 'Best for joint support — meaningful EPA/DHA levels' },
      { '@type': 'ListItem', position: 3, name: 'Best for weight management — lower calorie density, higher fiber' },
      { '@type': 'ListItem', position: 4, name: 'Best for picky or dental-limited seniors — wet/soft texture' },
      { '@type': 'ListItem', position: 5, name: 'Best value — complete AAFCO adult-maintenance diet at a lower price band' },
    ],
  },
  buildFAQSchema({ questions: FAQ.map((f) => ({ question: f.question, answer: typeof f.answer === 'string' ? f.answer : '' })) }),
)


export default function BestSeniorDogFoodPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="brand"
      hero={{
        title: 'Best Senior Dog Food (2026): Ranked on Protein, Calories, and Joint Nutrients',
        subtitle:
          'The word "senior" on a dog-food bag is a marketing term, not an AAFCO life stage — so a senior-food roundup has to read the actual guaranteed analysis, not the badge. This page ranks senior dog foods on the nutrition that matters as a dog ages: high-quality protein to preserve muscle, calorie density matched to a slowing metabolism, joint-support nutrients, and AAFCO adult-maintenance substantiation. Foods are ranked on these disclosed criteria; we make no hands-on testing claims.',
        category: 'Analysis-Led Review',
        publishedAt: 'June 2026',
        readTime: '13 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Best Senior Dog Food', href: '/reviews/best-senior-dog-food' },
      ]}
      relatedLinks={[
        { title: 'Reviews Hub', href: '/reviews' },
        { title: 'Senior Pet Diets', href: '/diets/senior-pet-diets' },
        { title: 'Dietary Protein Requirements', href: '/nutrition/dietary-protein-requirements' },
        { title: 'Fish Oil & Omega-3', href: '/supplements/fish-oil-omega-3' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The "senior" label is not AAFCO', href: '#senior-label' },
              { label: 'The five criteria', href: '#criteria' },
              { label: 'Protein and the kidney myth', href: '#protein' },
              { label: 'Calorie density and weight', href: '#calories' },
              { label: 'Joint-support nutrients', href: '#joints' },
              { label: 'When to switch to a therapeutic diet', href: '#therapeutic' },
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
              { label: 'Senior Pet Diets', href: '/diets/senior-pet-diets' },
              { label: 'Dietary Protein Requirements', href: '/nutrition/dietary-protein-requirements' },
              { label: 'Calories and Energy Density', href: '/nutrition/calories-and-energy-density' },
              { label: 'Glucosamine and Joint Support', href: '/supplements/glucosamine-and-joint-support' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent analysis-led reviews as we publish them."
            source="best-senior-dog-food"
          />
          <CrossPortfolioCard currentSite="petfood-com" contentType="brand" variant="sidebar" />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-11T00:00:00Z" updatedAt="2026-06-11T00:00:00Z" reviewedBy="Editorial team" />
        <StockImage manifestKey="petfood-com:review-senior-dog-food" fallbackKey="petfood-com:category-brands" priority aspect="16:9" variant="wide" caption="Senior dog food evaluated on nutrition specs, not the 'senior' badge." />

        <p>
          A senior dog food roundup that ranks products on the word &quot;senior&quot; on the bag has
          already gone wrong, because &quot;senior&quot; is not a regulated nutritional standard. This
          page ranks senior dog foods on the nutrition that actually changes as a dog ages — protein
          quality, calorie density, and joint-support nutrients — read against the AAFCO adult-maintenance
          profile from the guaranteed analysis and ingredient panel, not from marketing. Foods are ranked
          on these disclosed criteria; we do not buy and feed products and make no hands-on testing claims.
        </p>

        <AffiliateDisclosure variant="inline" siteId="petfood-com" />

        <div className="not-prose my-8 rounded-lg border border-brand-border bg-brand-surface p-6">
          <p className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            Shop senior dog food
          </p>
          <h2 className="font-display text-xl font-bold text-brand-dark mb-2">
            Find senior dog food at a major retailer
          </h2>
          <p className="text-sm text-brand-text-mid mb-4">
            The picks above are described by the analysis profile they must meet — adequate high-quality
            protein, controlled calorie density, meaningful EPA/DHA, and a valid AAFCO adult-maintenance
            statement. Search the category below, then confirm the AAFCO statement and life-stage match
            on the specific product before buying.
          </p>
          <AffiliateDisclosure variant="inline" siteId="petfood-com" />
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href="/go/chewy-brand/senior%20dog%20food%20complete%20balanced?s=reviews-best-senior-dog-food"
              rel="nofollow sponsored"
              target="_blank"
              className="inline-flex items-center rounded-md bg-brand-primary px-4 py-2 text-sm font-semibold text-white no-underline hover:opacity-90"
            >
              Search senior dog food on Chewy →
            </a>
            <a
              href="/go/amazon-brand/senior%20dog%20food%20complete%20balanced?s=reviews-best-senior-dog-food"
              rel="nofollow sponsored"
              target="_blank"
              className="inline-flex items-center rounded-md border border-brand-border px-4 py-2 text-sm font-semibold text-brand-dark no-underline hover:bg-brand-white"
            >
              Search on Amazon →
            </a>
          </div>
          <p className="mt-3 text-xs text-brand-text-light">
            We earn a commission if you purchase through these links — no extra cost to you, and we never rank by commission.
          </p>
        </div>

        <h2 id="senior-label">The &quot;senior&quot; label is not an AAFCO life stage</h2>
        <p>
          AAFCO recognizes exactly two nutrient profiles — growth-and-reproduction and adult maintenance —
          plus the &quot;all life stages&quot; designation for a food that meets the more demanding growth
          profile. There is no AAFCO &quot;senior&quot; profile. A food labeled for senior dogs is meeting
          the adult-maintenance profile, and the &quot;senior&quot; positioning reflects the manufacturer&apos;s
          formulation choices — typically lower calorie density, sometimes added omega-3s or glucosamine —
          not a separate regulatory bar. This is precisely why an analysis-led approach beats a badge: two
          foods both labeled &quot;senior&quot; can have very different protein levels, calorie densities,
          and joint-nutrient inclusions. Our guide to{' '}
          <a href="/guides/aafco-completeness-explained">AAFCO completeness</a> explains the life-stage
          framework in full.
        </p>

        <h2 id="criteria">The five criteria we rank on</h2>
        <p>
          Each food was assessed against five disclosed criteria, applied in order. Picks are ranked on
          these; no brand pays for inclusion or placement. The full framework is on our{' '}
          <a href="/guides/methodology">methodology page</a>.
        </p>
        <ol>
          <li>
            <strong>AAFCO adult-maintenance adequacy.</strong> A valid complete-and-balanced
            adult-maintenance (or all-life-stages) statement, with preference for foods substantiated by
            an animal feeding trial over formulation alone.
          </li>
          <li>
            <strong>Protein quality and adequacy.</strong> Adequate-to-higher crude protein on a
            dry-matter basis from named animal sources — to counter age-related muscle loss — rather than
            the protein-restricted formulations that older &quot;senior&quot; foods used to default to.
          </li>
          <li>
            <strong>Calorie density.</strong> Energy density matched to a slowing metabolism and reduced
            activity, to avoid the weight gain that accelerates osteoarthritis.
          </li>
          <li>
            <strong>Joint-support nutrients.</strong> Meaningful levels of omega-3 fatty acids (EPA/DHA),
            which have the strongest evidence; glucosamine/chondroitin weighted lower because the dietary
            evidence is weaker.
          </li>
          <li>
            <strong>Recall history and manufacturer transparency.</strong> FDA-CVM recall record and
            WSAVA-aligned manufacturer disclosure (owned plants, qualified nutritionists).
          </li>
        </ol>

        <h2 id="protein">Protein and the kidney myth</h2>
        <p>
          The most persistent error in senior feeding is the belief that aging dogs need protein
          restriction to spare their kidneys. That idea came from extrapolating findings in dogs with
          existing kidney disease to all older dogs, and the extrapolation does not hold. Current
          nutritional consensus is that healthy senior dogs need adequate — often slightly higher —
          quality protein to offset sarcopenia, the age-related loss of lean muscle mass. Underfeeding
          protein to a healthy old dog accelerates muscle loss without protecting anything.
        </p>
        <p>
          Protein restriction has a real, specific indication: diagnosed chronic kidney disease, where a
          phosphorus- and protein-controlled therapeutic diet is part of management. That is a clinical
          decision made with a veterinarian, covered in our{' '}
          <a href="/diets/kidney-disease-diets">kidney-disease diets</a> reference — not a reason to put
          every senior on a low-protein food. So our top picks favor adequate-to-higher quality protein
          from named animal sources, and we treat &quot;low protein for seniors&quot; as a red flag unless
          a diagnosed condition calls for it. The full mechanism is on{' '}
          <a href="/nutrition/dietary-protein-requirements">dietary protein requirements</a>.
        </p>

        <h2 id="calories">Calorie density and weight</h2>
        <p>
          Metabolism slows and activity drops as dogs age, so an older dog fed the same amount of the same
          food it ate at five years old will gain weight — and excess weight is the most modifiable driver
          of osteoarthritis progression. The relevant analysis figure is calorie density (kcal per cup or
          per kilogram), which should be matched to the dog&apos;s reduced energy needs, not assumed from
          the &quot;senior&quot; label. Many senior formulas do run lower in calories, but not all, which
          is why we read the metabolizable-energy figure rather than trusting the positioning. For dogs
          already carrying excess weight, the weight-management pick (higher fiber, lower calorie density)
          is the more defensible choice. See{' '}
          <a href="/nutrition/calories-and-energy-density">calories and energy density</a> for how to read
          and compare these figures.
        </p>

        <h2 id="joints">Joint-support nutrients: what the evidence supports</h2>
        <p>
          Joint support is the headline claim on most senior foods, and the evidence is uneven across the
          common ingredients. Omega-3 fatty acids — specifically EPA and DHA from fish oil — have the
          strongest support: controlled studies in dogs with osteoarthritis (for example Roush et al.,
          2010) showed measurable improvements in weight-bearing and clinical signs at adequate intakes.
          Glucosamine and chondroitin, by contrast, have weaker and less consistent dietary evidence.
        </p>
        <p>
          The practical caveat is dose. The amount of EPA/DHA in a complete maintenance food is often below
          the levels used in the supportive trials, so a joint-support food is a reasonable baseline but
          not a replacement for a veterinarian-directed plan — which may include a higher-dose supplement —
          in a dog with significant arthritis. We therefore score meaningful EPA/DHA inclusion positively
          but do not treat any food&apos;s joint claim as a clinical solution. Our references on{' '}
          <a href="/supplements/fish-oil-omega-3">fish oil and omega-3</a> and{' '}
          <a href="/supplements/glucosamine-and-joint-support">glucosamine</a> lay out the evidence.
        </p>

        <h2 id="therapeutic">When a senior needs a therapeutic diet instead</h2>
        <p>
          A maintenance &quot;senior&quot; food is for a healthy older dog. Once a senior has a diagnosed
          condition, the decision changes from &quot;which over-the-counter senior food&quot; to &quot;which
          therapeutic diet, chosen with my veterinarian.&quot; Kidney disease, heart disease,
          significant arthritis, diabetes, and gastrointestinal disease each have a dedicated therapeutic
          category in our <a href="/diets">therapeutic diets</a> reference, and those decisions are
          out of scope for a best-of roundup. The picks below assume a healthy or mildly arthritic senior;
          anything more is a clinical conversation.
        </p>

        <h2 id="picks">How the picks rank</h2>
        <ul>
          <li>
            <strong>Best overall.</strong> An adult-maintenance diet with adequate high-quality protein
            from named animal sources, controlled calorie density, meaningful EPA/DHA, and feeding-trial
            substantiation from a manufacturer with owned plants and a clean recent recall record. It wins
            by scoring well across all five criteria simultaneously.
          </li>
          <li>
            <strong>Best for joint support.</strong> The same maintenance baseline plus the highest
            meaningful EPA/DHA inclusion among the candidates — for the mildly-to-moderately arthritic
            senior, paired with veterinary guidance on any additional supplementation.
          </li>
          <li>
            <strong>Best for weight management.</strong> Lower calorie density and higher fiber while still
            meeting protein adequacy — for the overweight senior, where weight control is the highest-value
            intervention for joint health.
          </li>
          <li>
            <strong>Best for picky or dental-limited seniors.</strong> A wet or softened diet for dogs with
            dental disease or reduced appetite, still carrying a valid AAFCO adult-maintenance statement.
          </li>
          <li>
            <strong>Best value.</strong> A complete AAFCO adult-maintenance diet at a lower price band that
            still clears the non-negotiables — adequate quality protein, valid statement, controlled
            calories — without the premium joint-nutrient inclusions.
          </li>
        </ul>

        <div className="not-prose my-8 rounded-lg border border-brand-border bg-brand-surface p-6">
          <p className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            Shop the picks
          </p>
          <h2 className="font-display text-xl font-bold text-brand-dark mb-2">
            Search the picks at a major retailer
          </h2>
          <p className="text-sm text-brand-text-mid mb-4">
            All five picks above are non-clinical adult-maintenance diets (QC §1.5.b eligible). Confirm
            the AAFCO adult-maintenance statement, confirm the product is not a therapeutic or Rx diet,
            and check the life-stage match on the specific label before buying.
          </p>
          <AffiliateDisclosure variant="inline" siteId="petfood-com" />
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href="/go/chewy-brand/senior%20dog%20food%20adult%20maintenance?s=reviews-best-senior-dog-food-picks"
              rel="nofollow sponsored"
              target="_blank"
              className="inline-flex items-center rounded-md bg-brand-primary px-4 py-2 text-sm font-semibold text-white no-underline hover:opacity-90"
            >
              Search senior dog food on Chewy →
            </a>
            <a
              href="/go/amazon-brand/senior%20dog%20food%20adult%20maintenance?s=reviews-best-senior-dog-food-picks"
              rel="nofollow sponsored"
              target="_blank"
              className="inline-flex items-center rounded-md border border-brand-border px-4 py-2 text-sm font-semibold text-brand-dark no-underline hover:bg-brand-white"
            >
              Search on Amazon →
            </a>
          </div>
          <p className="mt-3 text-xs text-brand-text-light">
            We earn a commission if you purchase through these links — no extra cost to you, and we never rank by commission.
          </p>
        </div>

        <h2 id="table">Comparison table — the criteria at a glance</h2>
        <div style={{ overflowX: 'auto', margin: '20px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ background: 'var(--brand-primary-pale)', textAlign: 'left' }}>
                <th style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Pick</th>
                <th style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>AAFCO statement</th>
                <th style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Protein (DM)</th>
                <th style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Calorie density</th>
                <th style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>EPA/DHA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Best overall</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Maintenance, feeding trial</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>~28%+</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Controlled</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Meaningful</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Joint support</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Maintenance, feeding trial</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>~28%+</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Controlled</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>High</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Weight management</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Maintenance</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>~26%+</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Lower / higher fiber</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Moderate</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Picky / dental-limited</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Maintenance</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>~28%+ (wet, DM)</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Controlled</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Varies</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Best value</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Maintenance, formulated</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>~26%+</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Controlled</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Lower</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)' }}>
          Protein figures are dry-matter targets used to qualify a pick; convert any specific label using
          our <a href="/nutrition/dry-matter-basis-explained">dry-matter-basis guide</a> before comparing,
          especially when comparing a wet food against a kibble.
        </p>

        <h2 id="faq">Common questions</h2>
        <FAQAccordion items={FAQ} includeSchema={false} />

        <ArticleSourcesList sources={SOURCES} />
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. We do not provide individualized veterinary advice and our
          rankings are based on published label and regulatory data, not hands-on testing. A senior dog
          with a diagnosed condition — kidney disease, heart disease, diabetes, significant arthritis —
          should be fed a diet chosen with a licensed veterinarian, and where indicated a board-certified
          veterinary nutritionist.
        </p>
      </div>
    </ArticleLayout>
  )
}
