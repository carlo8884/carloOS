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
  title: 'Best Cat Food 2026 — Ranked on Protein & Taurine | PetFood.com',
  description:
    'Cat food ranked for obligate carnivores: animal-protein content, supplemented taurine, AAFCO cat statements, and wet-vs-dry. Analysis-led, not a shopping list.',
  path: '/reviews/best-cat-food',
  type: 'article',
})

const FAQ: FAQItem[] = [
  {
    question: 'Is wet or dry food better for cats?',
    answer:
      'For most cats, an all-wet or wet-forward diet is the lower-risk default, primarily for hydration. Cats evolved from desert ancestors with a weak thirst drive and historically drew most of their water from prey; dry food at roughly 10 percent moisture leaves them in a state of chronic mild under-hydration that is implicated in the high feline rates of lower urinary tract disease. Canned food at roughly 75 percent moisture corrects this. Dry food is not categorically harmful and a complete, AAFCO-substantiated dry diet can be a reasonable choice for a cat that drinks well and has no urinary history, but the hydration argument is the single biggest reason the wet-versus-dry question matters more for cats than for dogs.',
  },
  {
    question: 'Do all complete cat foods contain enough taurine?',
    answer:
      'A food carrying a valid AAFCO cat nutritional-adequacy statement is formulated to meet the AAFCO minimum taurine level for its life stage, which is the practical floor of protection against deficiency. The historical caution is for foods that do not carry a complete-and-balanced AAFCO cat statement — home-prepared diets, some imported or boutique products, and dog food fed to cats — because taurine is an essential amino acid for cats that they cannot synthesize in adequate amounts, and deficiency causes feline dilated cardiomyopathy and central retinal degeneration. The AAFCO statement, not the marketing, is what tells you a food was formulated to supply it.',
  },
  {
    question: 'Can cats eat dog food?',
    answer:
      'Not as a sole diet. Dog food is formulated to the AAFCO dog profile, which has lower minimums for protein and several nutrients that cats require in higher amounts, and critically it is not formulated to guarantee taurine, arachidonic acid, or preformed vitamin A at feline levels. A cat fed dog food long-term is at real risk of taurine-deficiency cardiomyopathy and other deficiency disease. An accidental mouthful is not an emergency; a diet is.',
  },
  {
    question: 'What does "AAFCO cat food nutrient profile" on the label mean?',
    answer:
      'It means the food is formulated to meet the Association of American Feed Control Officials nutrient profile for cats, either for adult maintenance or for growth and reproduction (or "all life stages," which means it meets the more demanding growth-and-reproduction profile). The statement also indicates how adequacy was substantiated — "formulated to meet" (calculated to hit the profile) or substantiated by AAFCO feeding trials (actually fed to cats under protocol). Feeding-trial substantiation is the stronger validation. The statement is the most important single line on a cat food label.',
  },
]

const schema = combineSchemas(
  buildArticleSchema({
    siteId: 'petfood-com',
    title: 'Best Cat Food 2026 — Ranked on Protein, Taurine, and AAFCO Adequacy',
    description:
      'Analysis-led cat food roundup evaluating foods on animal-protein content, supplemented taurine, AAFCO cat nutritional-adequacy statements, and the wet-versus-dry hydration argument for obligate carnivores.',
    url: 'https://petfood.com/reviews/best-cat-food',
    imageUrl: '',
    authorName: 'PetFood.com Editorial',
    publishedAt: '2026-06-11T00:00:00Z',
    modifiedAt: '2026-06-11T00:00:00Z',
  }),
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Cat Food — Analysis-Led Picks 2026',
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    numberOfItems: 5,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Best overall analysis profile — high-animal-protein canned diet, feeding-trial-substantiated' },
      { '@type': 'ListItem', position: 2, name: 'Best for urinary/hydration concern — all-wet pate, high moisture' },
      { '@type': 'ListItem', position: 3, name: 'Best dry option — high-protein, feeding-trial-substantiated kibble' },
      { '@type': 'ListItem', position: 4, name: 'Best for kittens — AAFCO growth/all-life-stages, higher calorie density' },
      { '@type': 'ListItem', position: 5, name: 'Best value — complete-and-balanced AAFCO cat diet at a lower price band' },
    ],
  },
  buildFAQSchema({ questions: FAQ.map((f) => ({ question: f.question, answer: typeof f.answer === 'string' ? f.answer : '' })) }),
)

const SOURCES = [
  {
    label: 'Nutrient Requirements of Dogs and Cats (2006)',
    url: 'https://nap.nationalacademies.org/catalog/10668/nutrient-requirements-of-dogs-and-cats',
    publisher: 'National Research Council of the National Academies, Committee on Animal Nutrition',
  },
  {
    label: 'Association of American Feed Control Officials. 2025 AAFCO Official Publication — Chapter 4: Model Bill and Regulations (nutritional adequacy substantiation) and the AAFCO Cat Food Nutrient Profiles.',
    publisher: 'AAFCO',
  },
  {
    label: 'WSAVA Global Nutrition Guidelines and Recommendations on Selecting Pet Foods',
    url: 'https://wsava.org/committees/global-nutrition-committee/',
    publisher: 'World Small Animal Veterinary Association Global Nutrition Committee',
  },
  {
    label: 'Pion PD, Kittleson MD, Rogers QR, Morris JG. Myocardial failure in cats associated with low plasma taurine: a reversible cardiomyopathy. Science. 1987;237(4816):764-768.',
    publisher: 'Science',
  },
  {
    label: 'Plantinga EA, Bosch G, Hendriks WH. Estimation of the dietary nutrient profile of free-roaming feral cats: possible implications for nutrition of domestic cats. British Journal of Nutrition. 2011;106(S1):S35-S48.',
    publisher: 'British Journal of Nutrition',
  },
  {
    label: 'Cornell Feline Health Center — Feeding Your Cat (nutrition and obligate-carnivore overview).',
    url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center',
    publisher: 'Cornell University College of Veterinary Medicine',
  },
]

export default function BestCatFoodPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="brand"
      hero={{
        title: 'Best Cat Food (2026): Ranked on Protein, Taurine, and AAFCO Adequacy',
        subtitle:
          'A cat is an obligate carnivore, not a small dog — so a cat-food roundup that scores foods the way a dog-food list does misses the points that matter most. This page ranks cat foods on the nutritional record an owner can verify: animal-protein content, supplemented taurine, the AAFCO cat nutritional-adequacy statement, and the wet-versus-dry hydration question. Foods are ranked on these disclosed criteria — we do not buy and feed products and make no hands-on testing claims.',
        category: 'Analysis-Led Review',
        publishedAt: 'June 2026',
        readTime: '14 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Best Cat Food', href: '/reviews/best-cat-food' },
      ]}
      relatedLinks={[
        { title: 'Reviews Hub', href: '/reviews' },
        { title: 'Cats Are Obligate Carnivores', href: '/species/cats-are-obligate-carnivores' },
        { title: 'Taurine and Amino Acids', href: '/nutrition/taurine-and-amino-acids' },
        { title: 'Kibble vs Canned for Cats', href: '/compare/kibble-vs-canned-for-cats' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Why cats are scored differently', href: '#why-cats' },
              { label: 'The five criteria', href: '#criteria' },
              { label: 'Taurine: the non-negotiable', href: '#taurine' },
              { label: 'Protein: quantity and source', href: '#protein' },
              { label: 'Wet vs dry for cats', href: '#wet-dry' },
              { label: 'The AAFCO cat statement', href: '#aafco' },
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
              { label: 'Cats Are Obligate Carnivores', href: '/species/cats-are-obligate-carnivores' },
              { label: 'Taurine and Amino Acids', href: '/nutrition/taurine-and-amino-acids' },
              { label: 'Dietary Protein Requirements', href: '/nutrition/dietary-protein-requirements' },
              { label: 'Water and Hydration', href: '/nutrition/water-and-hydration' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent analysis-led reviews as we publish them."
            source="best-cat-food"
          />
          <CrossPortfolioCard currentSite="petfood-com" contentType="brand" variant="sidebar" />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-11T00:00:00Z" updatedAt="2026-06-11T00:00:00Z" reviewedBy="Editorial team" />
        <StockImage manifestKey="petfood-com:review-cat-food" fallbackKey="petfood-com:category-brands" priority aspect="16:9" variant="wide" caption="Cat food evaluated through an obligate-carnivore nutrition lens." />

        <p>
          Search &quot;best cat food&quot; and most results are shopping lists assembled the same way
          a dog-food roundup is: a row of bags, a price, a star rating. But a cat is not a small dog.
          A cat is an obligate carnivore, with a metabolism that has absolute, non-substitutable
          requirements a dog&apos;s does not — and the foods that win a generic roundup are not
          necessarily the ones that satisfy feline biology. This page ranks cat foods on the
          nutritional record that actually matters for a cat, drawn from the label and public data:
          animal-protein content, supplemented taurine, the AAFCO cat nutritional-adequacy statement,
          and the wet-versus-dry hydration question.
        </p>

        <AffiliateDisclosure variant="inline" siteId="petfood-com" />

        {/* MONETIZATION: buy-box slot — top-of-page cat-food picks CTA. Per QC §1.5.b
            this is a non-clinical commercial category (complete-and-balanced maintenance
            diets), so a buy-box is permissible here. Monetization Bot owns the BuyBox
            component, /go affiliate routes, and disclosure copy. Do not invent routes. */}

        <h2 id="why-cats">Why cat food has to be scored differently</h2>
        <p>
          Dogs are dietary generalists — facultative carnivores that digest starch well and can
          maintain health across a wide range of formulations. Cats cannot. Through millions of years
          as strict hunters of small prey, the domestic cat lost or never developed several metabolic
          pathways that other mammals rely on. The consequences are specific and clinically important:
        </p>
        <ul>
          <li>
            <strong>Taurine is essential.</strong> Cats cannot synthesize enough taurine from cysteine
            and methionine the way dogs can, and they lose taurine continuously in bile. A taurine-poor
            diet causes feline dilated cardiomyopathy and central retinal degeneration — the landmark
            1987 Pion et al. work in <em>Science</em> established the link and showed it was reversible
            with supplementation, which is why every complete cat food now supplements taurine.
          </li>
          <li>
            <strong>Protein requirement is higher and less flexible.</strong> Cats run a constitutively
            high rate of protein catabolism for gluconeogenesis and cannot down-regulate it when dietary
            protein is low, so they will break down body muscle to fuel metabolism on a low-protein diet.
          </li>
          <li>
            <strong>Several nutrients must come preformed from animal tissue.</strong> Cats cannot
            convert beta-carotene to vitamin A (they need preformed retinol), cannot synthesize
            arachidonic acid from linoleic acid in adequate amounts, and have a limited ability to
            convert tryptophan to niacin.
          </li>
        </ul>
        <p>
          None of these facts appears on the front of a bag, and none is captured by a star rating. They
          are the reason this roundup is built around feline-specific criteria rather than retrofitted
          from a dog template. For the underlying biology, see our reference page on{' '}
          <a href="/species/cats-are-obligate-carnivores">why cats are obligate carnivores</a>.
        </p>

        <h2 id="criteria">The five criteria we rank on</h2>
        <p>
          Each food considered for this page was assessed against five disclosed criteria, applied in
          the order below. Picks are ranked on these; nothing here reflects price-per-click or sponsored
          placement, and no brand pays for inclusion. The full framework is on our{' '}
          <a href="/guides/methodology">methodology page</a>.
        </p>
        <ol>
          <li>
            <strong>AAFCO cat adequacy statement.</strong> Does the label carry a complete-and-balanced
            AAFCO cat statement, for which life stage, and was it substantiated by formulation or by an
            animal feeding trial? Feeding-trial substantiation scores higher.
          </li>
          <li>
            <strong>Animal-protein content and source.</strong> Crude protein on a dry-matter basis,
            and — more importantly — whether the protein is predominantly from named animal sources high
            in the ingredient panel rather than from plant-protein concentrates used to inflate the
            guaranteed-analysis number.
          </li>
          <li>
            <strong>Taurine assurance.</strong> Supplemented taurine present on the ingredient list, and
            preference for feeding-trial substantiation, which validates real-world taurine status rather
            than calculated adequacy alone.
          </li>
          <li>
            <strong>Moisture / format fit.</strong> For cats, hydration is a scored criterion: wet
            formats earn an advantage for the urinary-health reasons discussed below; dry diets are
            penalized only where a cat has urinary risk, not categorically.
          </li>
          <li>
            <strong>Recall history and manufacturer transparency.</strong> FDA-CVM recall record and
            whether the manufacturer discloses where and how the food is made and employs qualified
            nutritionists, per the WSAVA selection criteria.
          </li>
        </ol>

        <h2 id="taurine">Taurine: the non-negotiable</h2>
        <p>
          Taurine deficiency is the cautionary tale that defines modern cat-food formulation. Before the
          1980s, taurine was not routinely supplemented and feline dilated cardiomyopathy (DCM) was
          common; after Pion and colleagues demonstrated in 1987 that low plasma taurine caused a
          reversible DCM in cats, the industry raised supplementation and feline DCM became rare. The
          lesson for a buyer is simple: a food&apos;s taurine assurance is only as good as its formulation
          discipline.
        </p>
        <p>
          A valid AAFCO cat statement means the food is formulated to meet the AAFCO minimum taurine
          level (the minimum differs for dry versus canned because processing and ingredient matrix
          affect bioavailability). The stronger signal is feeding-trial substantiation, which confirms
          cats maintained adequate status on the actual product. The foods that rank highest here all
          supplement taurine and carry complete-and-balanced cat statements; the top picks add
          feeding-trial substantiation. Diets that should raise a flag — and that we exclude from these
          picks — are those without a complete-and-balanced AAFCO cat statement: most home-prepared
          recipes, some boutique and imported products, and (obviously) dog food. See our deep dive on{' '}
          <a href="/nutrition/taurine-and-amino-acids">taurine and amino acids</a> for the mechanism.
        </p>

        <h2 id="protein">Protein: quantity and source</h2>
        <p>
          Because cats cannot down-regulate protein catabolism, dietary protein quantity and quality
          carry more weight than they do for dogs. On a dry-matter basis, the foods that rank well here
          sit comfortably above the AAFCO adult-cat minimum (26 percent crude protein DM for maintenance;
          30 percent for growth and reproduction), with the strongest profiles typically in the
          40-percent-plus DM range for the canned picks.
        </p>
        <p>
          The number alone, though, is not enough — which is exactly where the analysis lens beats a star
          rating. A guaranteed-analysis protein figure can be inflated with plant-protein concentrates
          (pea protein, corn gluten meal) that raise the crude-protein number without supplying the full
          complement of feline-essential amino acids in the ratios animal tissue does. So we read the
          ingredient panel, not just the percentage: named animal proteins (chicken, turkey, salmon,
          rabbit) high on the list, with plant-protein concentrates absent or low, score better than a
          high-percentage food propped up by plant concentrates. For the full picture, see{' '}
          <a href="/nutrition/dietary-protein-requirements">dietary protein requirements</a> and{' '}
          <a href="/nutrition/dry-matter-basis-explained">dry-matter-basis conversion</a>.
        </p>

        <h2 id="wet-dry">Wet vs dry for cats</h2>
        <p>
          The wet-versus-dry debate is louder for cats than for dogs, and for a real physiological reason.
          The domestic cat descends from a desert-dwelling ancestor with a blunted thirst drive; in the
          wild it took most of its water from prey, which is roughly 70 percent water. Dry kibble is
          around 10 percent moisture, and cats fed exclusively dry food do not reliably make up the
          difference by drinking. The result is a state of chronic mild under-hydration that is plausibly
          linked to the high feline prevalence of lower urinary tract disease.
        </p>
        <p>
          Canned food at roughly 75 percent moisture sidesteps the problem. This is why our scoring gives
          wet formats an advantage and why the urinary-and-hydration pick is an all-wet pâté. None of this
          makes dry food unacceptable: a complete, AAFCO-substantiated dry diet is a reasonable choice for
          a cat that drinks well and has no urinary history, and our best-dry pick reflects that. But the
          hydration argument is the single biggest reason format matters more for cats. We treat it as a
          scored criterion rather than a slogan; the trade-offs are laid out in full on{' '}
          <a href="/compare/kibble-vs-canned-for-cats">kibble vs canned for cats</a>.
        </p>

        <h2 id="aafco">Reading the AAFCO cat statement</h2>
        <p>
          The most important line on any cat-food label is the AAFCO nutritional-adequacy statement, and
          it answers three questions at once: is the food complete and balanced, for which life stage, and
          how was that substantiated? &quot;Complete and balanced for adult maintenance&quot; means the
          food meets the maintenance profile; &quot;for all life stages&quot; means it meets the more
          demanding growth-and-reproduction profile and is suitable for kittens too. The substantiation
          clause — &quot;formulated to meet&quot; versus &quot;animal feeding tests using AAFCO
          procedures&quot; — tells you whether adequacy was calculated on paper or validated by feeding
          the actual product to cats. Feeding-trial substantiation is the stronger evidence, particularly
          for a nutrient like taurine whose bioavailability depends on the ingredient matrix and
          processing. A food with no complete-and-balanced cat statement is, by definition, not validated
          as a sole diet — that is the bright line this roundup will not cross. Our guide to{' '}
          <a href="/guides/aafco-completeness-explained">AAFCO completeness</a> walks through every clause.
        </p>

        <h2 id="picks">How the picks rank</h2>
        <p>
          Applying the five criteria, the picks below are organized by the job a buyer is trying to do.
          Specific products and current SKUs change with reformulations, so we describe each pick by the
          analysis profile that earns its place; the comparison table below states the criteria so a
          reader can apply them to a current label.
        </p>
        <ul>
          <li>
            <strong>Best overall analysis profile.</strong> A high-animal-protein canned diet, named
            animal proteins leading the panel, supplemented taurine, complete-and-balanced AAFCO cat
            statement substantiated by an animal feeding trial, from a manufacturer with owned plants and
            a clean recent recall record. It wins because it scores at or near the top on every one of the
            five criteria at once, not because of any single number.
          </li>
          <li>
            <strong>Best for urinary or hydration concern.</strong> An all-wet pâté at roughly 75 percent
            moisture, complete-and-balanced for the cat&apos;s life stage. The moisture criterion drives
            this pick; for a cat with a urinary history it is the most defensible default, though any
            urinary-disease management is a veterinary decision and may call for a therapeutic diet from
            our <a href="/diets/urinary-tract-diets">urinary-tract diets</a> reference.
          </li>
          <li>
            <strong>Best dry option.</strong> A high-protein kibble with named animal proteins leading,
            supplemented taurine, and — the differentiator among dry foods — feeding-trial substantiation.
            For a cat that drinks well and has no urinary history this is a sound, convenient choice.
          </li>
          <li>
            <strong>Best for kittens.</strong> A diet carrying the AAFCO growth-and-reproduction or
            all-life-stages statement, higher in calorie density and protein to support rapid growth.
            Kittens should never be fed an adult-maintenance-only food as a sole diet.
          </li>
          <li>
            <strong>Best value.</strong> A complete-and-balanced AAFCO cat diet at a lower price band that
            still clears every non-negotiable — taurine supplemented, a valid cat statement, no red-flag
            plant-protein inflation. The point of a value pick is that the floor is non-negotiable even
            when the budget is.
          </li>
        </ul>

        {/* MONETIZATION: buy-box slot — per-pick retailer CTAs for the five picks above.
            Non-clinical maintenance/growth diets are buy-box-eligible under QC §1.5.b.
            Monetization Bot to wire BuyBox + /go routes + disclosure. Do not invent routes here. */}

        <h2 id="table">Comparison table — the criteria at a glance</h2>
        <p>
          The table summarizes the analysis profile each pick has to meet. It is a criteria table, not a
          star ranking: read a current label against these columns to confirm a food still qualifies.
        </p>
        <div style={{ overflowX: 'auto', margin: '20px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ background: 'var(--brand-primary-pale)', textAlign: 'left' }}>
                <th style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Pick</th>
                <th style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>AAFCO cat statement</th>
                <th style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Protein (DM)</th>
                <th style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Moisture</th>
                <th style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Taurine</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Best overall (canned)</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>All life stages, feeding trial</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>~40%+</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>~75%</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Supplemented</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Urinary / hydration (wet pâté)</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Maintenance, formulated/trial</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>~38%+</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>~78%</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Supplemented</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Best dry</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Maintenance, feeding trial</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>~36%+</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>~10%</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Supplemented</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Best for kittens</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Growth / all life stages</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>~42%+</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>varies</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Supplemented</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Best value</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Maintenance, formulated</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>~30%+</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>varies</td>
                <td style={{ padding: '10px', border: '1px solid var(--brand-border)' }}>Supplemented</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)' }}>
          Protein figures are dry-matter targets used to qualify a pick, derived from typical
          guaranteed-analysis values for foods meeting each profile; convert any specific label using our{' '}
          <a href="/nutrition/dry-matter-basis-explained">dry-matter-basis guide</a> before comparing.
        </p>

        <h2 id="faq">Common questions</h2>
        <FAQAccordion items={FAQ} includeSchema={false} />

        <ArticleSourcesList sources={SOURCES} />
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. We do not provide individualized veterinary advice and our
          rankings are based on published label and regulatory data, not hands-on testing. Diet selection
          for a cat with a diagnosed condition — urinary disease, kidney disease, diabetes — is a decision
          for a licensed veterinarian and, where indicated, a board-certified veterinary nutritionist.
        </p>
      </div>
    </ArticleLayout>
  )
}
