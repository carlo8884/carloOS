import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
  ReviewCard,
  AffiliateDisclosure,
  ArticleSourcesList,
  ArticleByline,
  StockImage
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Purina Pro Plan — Independent Evaluation | PetFood.com',
  description:
    'Five-dimension evaluation of Purina Pro Plan — Nestle Purina ownership, research depth, manufacturing, AAFCO posture, and recall history.',
  path: '/brands/purina-pro-plan-evaluation',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Purina Pro Plan — Independent Evaluation | PetFood.com',
  description:
    'Five-dimension evaluation of Purina Pro Plan — Nestle Purina corporate context, research and nutritionist depth, manufacturing, AAFCO posture, and recall history.',
  url: 'https://petfood.com/brands/purina-pro-plan-evaluation',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const SOURCES = [
    {
      label: "AAFCO Official Publication — Dog and Cat Food Nutrient Profiles (Ch. 4); Model Regulations for Pet Food (Ch. 6)",
      url: "https://www.aafco.org/resources/publications/",
      publisher: "Association of American Feed Control Officials, 2025",
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
    {
      label: "Pet Food Labels — General; Animal Food Ingredients: Regulatory Framework; FDA CVM Recalls & Withdrawals",
      url: "https://www.fda.gov/animal-veterinary/animal-food-feeds/pet-food",
      publisher: "U.S. Food and Drug Administration, Center for Veterinary Medicine",
    },
]

export default function PurinaProPlanEvaluationPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Purina Pro Plan — An Independent Evaluation',
        subtitle:
          'Purina Pro Plan is one of the highest-volume mainstream premium lines and one of the brands the WSAVA selection criteria tend to favor, because its parent invests heavily in nutrition research and feeding trials. This independent evaluation runs Pro Plan through the PetFood.com five-dimension rubric — corporate context, research depth, manufacturing, AAFCO posture, and recall history. Never paid placement.',
        category: 'Brand Evaluation',
        publishedAt: 'May 2026',
        readTime: '11 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Brands', href: '/brands' },
        { name: 'Purina Pro Plan — An Independent Evaluation', href: '/brands/purina-pro-plan-evaluation' },
      ]}
      relatedLinks={[
        { title: 'Brands Hub', href: '/brands' },
        { title: 'Hill\'s vs Royal Canin', href: '/brands/hills-vs-royal-canin' },
        { title: 'Orijen vs Acana Comparison', href: '/brands/orijen-vs-acana-comparison' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Corporate Context', href: '#corporate' },
              { label: 'Research and Nutritionists', href: '#research' },
              { label: 'Product Lines', href: '#lines' },
              { label: 'Manufacturing', href: '#manufacturing' },
              { label: 'AAFCO Posture', href: '#aafco' },
              { label: 'Recall History', href: '#recall' },
              { label: 'Where to Buy', href: '#buy' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'How to Choose a Pet Food', href: '/guides/how-to-choose-a-pet-food' },
              { label: 'Scoring Methodology', href: '/guides/methodology' },
              { label: "Hill's vs Royal Canin", href: '/brands/hills-vs-royal-canin' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="purina-pro-plan-evaluation"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
        <StockImage manifestKey="petfood-com:brand-purina-pro-plan" priority aspect="16:9" variant="wide" caption="Purina Pro Plan — an independent five-dimension evaluation of the Nestle Purina premium line." />
        <p>Purina Pro Plan is the premium line of Nestle Purina PetCare, evaluated here against the PetFood.com five-dimension rubric: corporate context, ingredient sourcing and research, manufacturing, AAFCO substantiation, and recall history. The evaluation is independent and never influenced by any commercial relationship. Pro Plan is notable for the depth of nutrition research and feeding-trial substantiation behind it, which aligns with the WSAVA selection criteria. See <a href="/guides/how-to-choose-a-pet-food">How to Choose a Pet Food</a> and <a href="/guides/methodology">Scoring Methodology</a>.</p>
        <h2 id="corporate">Corporate Context</h2>
        <p>Nestle Purina PetCare is one of the largest pet food companies in the world, a division of Nestle, with deep resources for research and manufacturing. Scale brings both advantages (research budgets, quality-control infrastructure, feeding-trial capacity) and the usual scrutiny that attaches to large corporate ownership. For evaluating a diet, the relevant corporate question is whether that scale is directed toward nutritional rigor — and Purina is among the manufacturers that most visibly invest in it.</p>
        <h2 id="research">Research and Nutritionists</h2>
        <p>Purina employs board-certified veterinary nutritionists and PhD animal nutritionists and operates a substantial research program, publishing peer-reviewed studies (including a notable lifetime study on the lifespan benefit of lean body condition in dogs). On the WSAVA criteria — qualified nutritionists on staff, feeding-trial testing, and published research — Pro Plan scores strongly. This research depth is one of the clearest points in its favor on our rubric. See <a href="/guides/pet-obesity-epidemic">The Pet Obesity Epidemic</a>.</p>
        <h2 id="lines">Product Lines</h2>
        <p>Pro Plan spans a wide range — life-stage diets, large- and small-breed formulas, sensitive-skin-and-stomach lines, performance diets, and specialized formulas — plus the separate Purina Pro Plan Veterinary Diets therapeutic range sold through veterinarians. The breadth means an owner can usually match a specific need within the line, and the veterinary therapeutic diets carry disease-specific formulation and, in cases, supporting evidence. See <a href="/compare/prescription-vs-otc-diets">Prescription vs OTC Diets</a>.</p>
        <h2 id="manufacturing">Manufacturing</h2>
        <p>Purina owns and operates its manufacturing facilities rather than relying on anonymous co-packing, which supports quality-control accountability — a positive signal under our manufacturing dimension and the WSAVA criteria. Owning the plants allows direct control over process, sourcing verification, and testing. As with any manufacturer, the meaningful detail is the specific quality-control and audit posture, which Purina discloses more than many smaller brands. See <a href="/guides/how-to-choose-a-pet-food">How to Choose a Pet Food</a>.</p>
        <h2 id="aafco">AAFCO Posture</h2>
        <p>Many Pro Plan diets are substantiated by AAFCO feeding trials rather than formulation alone — the higher-evidence pathway — which is a meaningful strength on our rubric, since feeding-trial substantiation is one of the WSAVA-favored signals. Owners should still confirm the specific formula and life-stage statement on the bag they buy, since substantiation can vary by product. See <a href="/guides/aafco-completeness-explained">AAFCO Completeness Explained</a>.</p>
        <h2 id="recall">Recall History</h2>
        <p>Like nearly every large manufacturer, Purina has had recalls over the years, which should be evaluated by cause, severity, and response rather than by count alone — a large-volume manufacturer naturally has more total product subject to recall. The relevant questions are whether recalls were handled transparently and what corrective action followed. The FDA CVM Recalls and Withdrawals database is the source of record for the current picture. See <a href="/guides/pet-food-recalls-and-fda">Pet Food Recalls and the FDA</a>.</p>

        <h2 id="buy">Where to Buy</h2>
        <p>The links below surface the over-the-counter Purina Pro Plan retail lineup — life-stage, breed-size, and sensitive-skin-and-stomach formulas. The separate Purina Pro Plan Veterinary Diets therapeutic range is prescription-channel and sold through your veterinarian; it is not linked here. We earn an affiliate commission on purchases through these links at no extra cost to you, and we never rank by commission.</p>
        <AffiliateDisclosure variant="inline" siteId="petfood-com" />
        <ReviewCard
          id="purina-pro-plan-retail"
          badge="Research-Backed"
          badgeEmoji="🔬"
          name="Purina Pro Plan (Retail Line)"
          subtitle="Feeding-trial substantiation and deep nutrition research"
          score={9.0}
          winner
          description={
            <p>One of the strongest scorers on the WSAVA selection criteria: board-certified veterinary nutritionists on staff, company-owned manufacturing, published peer-reviewed research, and many diets substantiated by AAFCO feeding trial rather than formulation alone. The breadth of the retail line means most life-stage and special-need cases can be matched. Confirm the specific formula and life-stage statement on the bag you buy.</p>
          }
          specs={[
            { label: 'Research depth', value: 'Strong', highlight: 'good' },
            { label: 'AAFCO substantiation', value: 'Often feeding trial', highlight: 'good' },
            { label: 'Manufacturing', value: 'Company-owned plants', highlight: 'good' },
            { label: 'Line', value: 'OTC retail (not Rx)' },
          ]}
          pros={['Feeding-trial substantiation on many diets', 'Board-certified nutritionists on staff', 'Owned manufacturing', 'Broad life-stage lineup']}
          cons={['Large-corporate scrutiny', 'Some formulas vary in substantiation pathway']}
          price="$$ premium"
          ctaText="Search Purina Pro Plan on Chewy"
          ctaHref="/go/chewy-brand/Purina%20Pro%20Plan?s=eval-purina-pro-plan"
          ctaAffiliateProgram="chewy-brand"
          ctaAffiliateProduct="Purina%20Pro%20Plan"
        />

        <ArticleSourcesList sources={SOURCES} />
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. We do not provide individualized veterinary advice.
          Therapeutic diets, diagnosed disease, and breed-specific nutritional concerns require a
          licensed veterinarian and, where indicated, a board-certified veterinary nutritionist.
        </p>
      </div>
    </ArticleLayout>
  )
}
