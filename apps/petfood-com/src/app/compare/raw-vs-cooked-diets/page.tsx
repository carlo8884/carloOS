import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
  ArticleSourcesList,
  ArticleByline,
  StockImage
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Raw vs Cooked Pet Diets — The Evidence | PetFood.com',
  description:
    'How raw and cooked diets compare on digestibility, pathogen risk, nutrient availability, and the veterinary consensus, with a harm-reduction framing.',
  path: '/compare/raw-vs-cooked-diets',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Raw vs Cooked Pet Diets — The Evidence | PetFood.com',
  description:
    'How raw and cooked diets compare on digestibility, pathogen risk, nutrient availability, and the veterinary consensus, with a harm-reduction framing.',
  url: 'https://petfood.com/compare/raw-vs-cooked-diets',
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

export default function RawVsCookedDietsPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Raw vs Cooked Diets',
        subtitle:
          'Raw versus cooked is the most polarized comparison in pet nutrition, and the evidence is more one-sided than the debate suggests: the major veterinary bodies caution against raw diets primarily on pathogen-safety grounds. This page compares the two on digestibility, safety, and nutrient availability, and lays out a harm-reduction approach for owners who choose raw anyway.',
        category: 'Food-Type Comparison',
        publishedAt: 'May 2026',
        readTime: '11 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Compare', href: '/compare' },
        { name: 'Raw vs Cooked Diets', href: '/compare/raw-vs-cooked-diets' },
      ]}
      relatedLinks={[
        { title: 'Compare Hub', href: '/compare' },
        { title: 'Wet vs Dry Food', href: '/compare/wet-vs-dry-food' },
        { title: 'Grain-Free vs Grain-Inclusive', href: '/compare/grain-free-vs-grain-inclusive' },
        { title: 'Fresh vs Kibble', href: '/compare/fresh-vs-kibble' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'What Cooking Does', href: '#cooking' },
              { label: 'Pathogen Risk', href: '#pathogen' },
              { label: 'Digestibility and Nutrients', href: '#digestibility' },
              { label: 'The Veterinary Consensus', href: '#consensus' },
              { label: 'Completeness and Balance', href: '#completeness' },
              { label: 'Harm Reduction', href: '#harmreduction' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Raw Pet Food Evaluation', href: '/guides/raw-pet-food-evaluation' },
              { label: 'Home-Cooked vs Commercial Diets', href: '/compare/home-cooked-vs-commercial' },
              { label: 'Pet Food Storage and Safety', href: '/feeding/food-storage-and-safety' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="raw-vs-cooked-diets"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
        <StockImage manifestKey="petfood-com:compare-raw-vs-cooked-diets" fallbackKey="petfood-com:compare-hero" priority aspect="16:9" variant="wide" caption="Raw versus cooked diets — the pathogen-safety evidence and a harm-reduction framing." />
        <p>Cooking transforms food in ways that matter nutritionally and microbiologically. Proponents of raw feeding argue that cooking destroys enzymes and nutrients and that raw is more natural; the veterinary professional bodies counter that cooking&apos;s pathogen-control benefit outweighs its costs and that the naturalness argument is overstated for domesticated animals. This page weighs the specific claims. For the full treatment, see the <a href="/guides/raw-pet-food-evaluation">Raw Pet Food Evaluation</a>.</p>
        <h2 id="cooking">What Cooking Does</h2>
        <p>Heat denatures proteins (which can improve digestibility of some and reduce it for others), gelatinizes starch (making it digestible), destroys most pathogenic bacteria, inactivates certain anti-nutritional factors, and degrades some heat-sensitive vitamins (which is why cooked commercial diets are vitamin-supplemented). The claim that raw food retains beneficial enzymes is largely irrelevant: dietary enzymes are denatured by stomach acid and do not contribute meaningfully to the animal&apos;s own digestion.</p>
        <h2 id="pathogen">Pathogen Risk</h2>
        <p>This is the crux. Raw meat diets carry documented contamination with Salmonella, Listeria, Campylobacter, and other pathogens, posing risk both to the pet and — through shed bacteria and contaminated surfaces — to people in the household, especially the immunocompromised, children, and the elderly. Studies repeatedly find pathogen contamination in commercial raw diets. Cooking eliminates this risk, and high-pressure processing (HPP) reduces it in some commercial raw products without heat. See <a href="/feeding/food-storage-and-safety">Pet Food Storage and Safety</a>.</p>
        <h2 id="digestibility">Digestibility and Nutrients</h2>
        <p>Raw diets can be highly digestible, and some animals do well on a properly formulated raw diet. But raw is not inherently more digestible than a well-made cooked diet, and the nutrient-availability claims cut both ways — cooking improves the availability of some nutrients (notably starch) while reducing others. The decisive nutritional issue is usually not raw versus cooked but whether the diet is complete and balanced, which many home-prepared raw diets are not. See <a href="/ingredients/animal-protein-sources">Animal Protein Sources</a>.</p>
        <h2 id="consensus">The Veterinary Consensus</h2>
        <p>The WSAVA, AVMA, AAHA, and FDA have all published statements cautioning against raw meat-based diets, principally on the basis of pathogen risk to pets and humans, and (for home-prepared raw) the high rate of nutritional imbalance. This is a clear professional consensus. It does not mean every raw-fed animal will become ill, but it reflects a population-level risk assessment that owners should weigh honestly.</p>
        <h2 id="completeness">Completeness and Balance</h2>
        <p>Home-prepared raw diets are frequently nutritionally incomplete — analyses have found widespread deficiencies and imbalances, particularly in calcium-to-phosphorus ratio and several micronutrients. An all-meat raw diet without proper calcium balancing is a classic cause of skeletal disease. A complete cooked commercial diet (or a properly formulated raw diet validated against AAFCO profiles) avoids this. See <a href="/compare/home-cooked-vs-commercial">Home-Cooked vs Commercial Diets</a> and <a href="/nutrition/minerals-in-pet-food">Minerals in Pet Food</a>.</p>
        <h2 id="harmreduction">Harm Reduction</h2>
        <p>For owners who choose raw despite the consensus, harm reduction means: select a commercial raw diet formulated to meet AAFCO profiles (ideally HPP-treated) rather than an unbalanced home recipe, or work with a board-certified veterinary nutritionist on a balanced formulation; handle the food with strict hygiene; and avoid raw feeding in households with immunocompromised members, young children, or pregnant people. These steps mitigate but do not eliminate the documented risks. See the <a href="/guides/raw-pet-food-evaluation">Raw Pet Food Evaluation</a>.</p>

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
