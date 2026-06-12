import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, EmailCapture, RelatedLinks, TableOfContents, ReviewCard, ScoreMethodology, AffiliateDisclosure, StockImage, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Whole-Prey vs Kibble for Ferrets — Which Diet Model? | Ferret.com',
  description:
    'The central ferret feeding decision compared: whole-prey/raw versus commercial kibble on biological fit, convenience, cost, dental wear, and food safety.',
  path: '/diet/whole-prey-vs-kibble',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Whole-Prey vs Kibble for Ferrets',
  description:
    'A side-by-side comparison of the two dominant ferret feeding models — whole-prey/raw and commercial kibble — across biological fit, convenience, cost, dental wear, and food safety.',
  url: 'https://ferret.com/diet/whole-prey-vs-kibble',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const med = buildMedicalWebPageSchema({
  name: 'Whole-Prey vs Kibble for Ferrets',
  description:
    'Comparison of whole-prey/raw and commercial kibble feeding for domestic ferrets, an obligate-carnivore species.',
  url: 'https://ferret.com/diet/whole-prey-vs-kibble',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})
const combined = combineSchemas(schema, med)

export default function WholePreyVsKibblePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Whole-Prey vs Kibble for Ferrets',
          subtitle:
            'Almost every feeding question a ferret owner faces nests under one decision: do you feed a biologically appropriate raw or whole-prey diet, a high-quality commercial kibble, or a combination of the two? Each model has real advantages and real failure modes. This page compares them honestly rather than crowning a winner.',
          category: 'Diet & Nutrition',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '11 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Diet', href: '/diet' },
          { name: 'Whole-Prey vs Kibble', href: '/diet/whole-prey-vs-kibble' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'The Two Models', href: '#models' },
                { label: 'Biological Fit', href: '#biology' },
                { label: 'Convenience & Storage', href: '#convenience' },
                { label: 'Cost', href: '#cost' },
                { label: 'Dental Health', href: '#dental' },
                { label: 'Food Safety', href: '#safety' },
                { label: 'Nutritional Reliability', href: '#reliability' },
                { label: 'A Realistic Recommendation', href: '#recommendation' },
                { label: 'A Starter Pick for Each Model', href: '#picks' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Raw Feeding Guide', href: '/diet/raw-feeding-guide' },
                { label: 'Choosing a Ferret Kibble', href: '/diet/best-ferret-kibble' },
                { label: 'Protein & Fat Requirements', href: '/diet/protein-and-fat-requirements' },
                { label: 'Diet & Nutrition Hub', href: '/diet' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Nutrition Notes"
              subtitle="Evidence-based ferret feeding, monthly."
              source="diet-whole-prey-vs-kibble"
            />
            <CrossPortfolioCard currentSite="ferret-com" contentType="diet" variant="sidebar" />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Diet Hub', href: '/diet' },
          { title: 'Raw Feeding Guide', href: '/diet/raw-feeding-guide' },
          { title: 'Protein & Fat Requirements', href: '/diet/protein-and-fat-requirements' },
          { title: 'Insulinoma in Ferrets', href: '/health/insulinoma' },
          { title: 'Transitioning Foods', href: '/diet/transitioning-foods' },
          { title: 'Ferret Starter Kit', href: '/ferret-starter-kit' },
        ]}
>
        <div className="carloOS-article">
          <StockImage
            manifestKey="ferret-com:diet-raw-vs-kibble"
            alt="Raw meat and dry kibble side by side — the ferret whole-prey versus kibble feeding decision"
            aspect="16:9"
            variant="inline"
            subtleCredit
          />
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
            reviewedBy="Editorial team"
          />

          <h2 id="models">The Two Models</h2>
          <p>
            Ferrets (<em>Mustela putorius furo</em>) are obligate carnivores descended from the European polecat. In the wild, their relatives eat whole small prey — rodents, rabbits, birds — consuming muscle, organ, bone, and a small amount of fur. Two feeding philosophies attempt to meet that requirement in a domestic setting. The <strong>whole-prey / raw model</strong> feeds animal tissue directly: whole frozen-thawed prey, or a "frankenprey" assembly of muscle meat, organ, and raw meaty bone. The <strong>commercial-kibble model</strong> feeds a dry, shelf-stable formula engineered to hit the ferret macronutrient profile from rendered animal ingredients.
          </p>
          <p>
            Most experienced keepers land somewhere on a spectrum rather than at a pure extreme: kibble as a convenient base with raw or whole-prey supplementation, or a primarily raw diet with kibble kept on hand for travel and boarding. Understanding the trade-offs lets you place yourself on that spectrum deliberately.
          </p>

          <h2 id="biology">Biological Fit</h2>
          <p>
            On pure biological appropriateness, whole prey wins. It supplies animal protein and fat in the proportions a ferret evolved to digest, with essentially zero plant carbohydrate, and it delivers moisture, taurine, and a natural calcium-to-phosphorus balance when bone is included. Kibble, even premium kibble, is a manufactured approximation: it must be extruded, which requires some binding starch, and it is dehydrated, removing the moisture a ferret would otherwise get from prey.
          </p>
          <p>
            That said, "biologically appropriate" only holds if the raw diet is correctly balanced. A frankenprey diet that is all muscle meat and no bone or organ is <em>less</em> appropriate than a good kibble, because it is deficient in calcium and several micronutrients. Biological fit is a property of a well-formulated raw diet, not of raw feeding in the abstract. See our <a href="/diet/protein-and-fat-requirements">protein and fat requirements</a> reference for the target window both models aim at.
          </p>

          <h2 id="convenience">Convenience & Storage</h2>
          <p>
            Kibble wins decisively here, and for many households this is the deciding factor. Kibble is shelf-stable, poured in seconds, easy to free-feed (ferrets graze 8–10 times a day and self-regulate), and trivial to hand to a pet-sitter or a boarding facility. Whole-prey and raw diets require freezer space, planned thawing, food-safe handling, and a sitter willing to manage all of it. A keeper who travels frequently or has limited freezer capacity may find raw feeding impractical regardless of its merits.
          </p>

          <h2 id="cost">Cost</h2>
          <p>
            Cost depends heavily on sourcing. Premium low-carb kibble runs roughly $30–50 per 5 lb bag and a single ferret eats modestly, so monthly kibble cost is usually contained. Whole-prey diets vary enormously: buying frozen whole prey in bulk from a reptile-feeder supplier can be cost-competitive, while boutique pre-made raw or small-quantity organ purchases can cost considerably more. Neither model is reliably cheaper; the variable is how much sourcing effort you are willing to invest. For the full ownership budget picture, see <a href="/ownership/cost-of-owning-a-ferret">cost of owning a ferret</a>.
          </p>

          <h2 id="dental">Dental Health</h2>
          <p>
            Whole prey and raw meaty bone provide mechanical abrasion that helps keep teeth clean, and many raw-feeding keepers report less tartar accumulation. Dry kibble offers minimal dental benefit — the notion that crunchy kibble "cleans teeth" is largely a marketing claim; ferret kibble pieces are small and swallowed quickly. Ferrets on any diet accumulate tartar and develop gingivitis by age two to three, so dental care is needed either way, but the raw model has a modest edge. See <a href="/health/dental-disease">dental disease in ferrets</a> for the clinical picture.
          </p>

          <h2 id="safety">Food Safety</h2>
          <p>
            This is kibble's strongest argument. Commercial and home-prepared raw products carry documented contamination rates for <em>Salmonella</em>, <em>Listeria</em>, and <em>Campylobacter</em>. These pathogens can be shed in a ferret's feces and saliva and reach immunocompromised, elderly, pregnant, or very young household members. Kibble's extrusion process effectively eliminates this risk. Raw feeding does not preclude safety — high-pressure-processed product, long freezing, and kitchen hygiene reduce risk substantially — but it requires ongoing discipline that kibble simply does not. The American Veterinary Medical Association maintains a cautionary policy on raw or undercooked animal-source protein in pet food for exactly these reasons.
          </p>

          <h2 id="reliability">Nutritional Reliability</h2>
          <p>
            A reputable commercial diet is formulated to a consistent specification every batch — its protein, fat, taurine, and micronutrient content are known quantities. A home-prepared raw diet is only as balanced as the person assembling it; the most common failure mode reported in the exotic-pet literature is an incorrect calcium-to-phosphorus ratio from under-feeding bone. Whole-prey feeding (feeding intact animals rather than assembled parts) sidesteps much of this because the prey arrives pre-balanced, but sourcing appropriately sized whole prey consistently is its own challenge.
          </p>

          <h2 id="recommendation">A Realistic Recommendation</h2>
          <p>
            There is no single correct answer, but a few defensible patterns emerge. For a first-time owner without an exotic-mammal vet already lined up, a high-quality low-carb kibble is the lower-risk starting point — it is forgiving, safe, and nutritionally reliable. For a committed keeper with freezer space and good kitchen discipline, a well-balanced raw or whole-prey diet is the closest match to ferret physiology and may pay dividends in dental health and stool quality. A pragmatic middle path — premium kibble as a base, with whole-prey or raw supplementation a few times a week — captures much of the upside of both while keeping a safe, convenient fallback. Whatever you choose, transition gradually: ferrets imprint on food in their first six months and resist change later (see <a href="/diet/kit-vs-adult-feeding">kit vs adult feeding</a>).
          </p>

          <AffiliateDisclosure variant="inline" siteId="ferret-com" />

          <h2 id="picks">A Starter Pick for Each Model</h2>
          <p>
            If the comparison above leaves you leaning one way, here is a defensible starting point for each model — and, for the pragmatic middle path, both together: a premium low-carb kibble as the base with frozen whole prey for supplementation. These are documented-spec selections, not hands-on tests.
          </p>
          <ScoreMethodology />
          <ReviewCard
            id="wysong-epigen-90"
            badge="Kibble Model"
            name="Wysong Epigen 90"
            subtitle="Starch-free premium kibble — the lower-risk base diet"
            score={9.3}
            winner
            description={
              <p>The lowest-carbohydrate commercial kibble in wide ferret-keeping use, and the lower-risk starting point for a first-time owner. Shelf-stable, easy to free-feed, and trivial to hand to a sitter — the convenience advantages that make kibble the practical default — while still landing close to the obligate-carnivore macro window. Also the natural base for the middle-path approach.</p>
            }
            specs={[
              { label: 'Carbohydrate', value: 'Single digits', highlight: 'good' },
              { label: 'Convenience', value: 'High — shelf-stable', highlight: 'good' },
              { label: 'Food-safety risk', value: 'Low', highlight: 'good' },
              { label: 'Distribution', value: 'Direct + specialty pet retail' },
            ]}
            pros={['Lowest commercial carb load in wide ferret use', 'Shelf-stable and sitter-friendly', 'Nutritionally consistent batch to batch', 'Good base for the middle path']}
            cons={['Premium price', 'Less dental abrasion than whole prey']}
            price="$30–50 / 5 lb"
            ctaText="Find Wysong Epigen 90"
            ctaHref="/go/wysong/epigen-90?s=diet-whole-prey-vs-kibble"
            ctaAffiliateProgram="wysong"
            ctaAffiliateProduct="epigen-90"
          />
          <ReviewCard
            id="frozen-feeder-prey"
            badge="Whole-Prey Model"
            name="Frozen Feeder Mice & Chicks (Reptile-Feeder Grade)"
            subtitle="Pre-balanced whole prey for the raw model or middle-path supplementation"
            score={8.4}
            description={
              <p>For the committed keeper with freezer space and kitchen discipline, frozen whole prey is the closest match to ferret physiology — intact muscle, organ, and bone in natural proportions, with the dental and stool-quality benefits raw feeders report. It also serves the middle path well as a few-times-a-week supplement on top of a kibble base. Freeze for at least 30 days, thaw in the refrigerator, and follow the food-safety discipline in our <a href="/diet/raw-feeding-guide">raw feeding guide</a>.</p>
            }
            specs={[
              { label: 'Biological fit', value: 'Closest to natural diet', highlight: 'good' },
              { label: 'Calcium balance', value: 'Built-in (intact bone)', highlight: 'good' },
              { label: 'Food-safety effort', value: 'Higher', highlight: 'warn' },
              { label: 'Freezer space', value: 'Required', highlight: 'warn' },
            ]}
            pros={['Best biological match', 'Natural calcium-to-phosphorus ratio', 'Strong dental abrasion', 'Works as a supplement or a sole diet']}
            cons={['Requires freezer space and handling discipline', 'Higher food-safety burden', 'Sourcing effort']}
            price="Varies by size and quantity"
            ctaText="Browse Frozen Feeder Prey"
            ctaHref="/go/chewy-brand/frozen+feeder+mice+reptile?s=diet-whole-prey-vs-kibble"
            ctaAffiliateProgram="chewy-brand"
            ctaAffiliateProduct="frozen-feeder-mice"
          />

          <h2 id="sources">Sources</h2>
          <p>
            Obligate-carnivore physiology and macronutrient targets are drawn from Quesenberry KE and Carpenter JW (eds.), <em>Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery</em> (Saunders/Elsevier), and Carpenter JW, <em>Exotic Animal Formulary</em>. Food-safety guidance reflects the American Veterinary Medical Association policy on raw or undercooked animal-source protein in pet food. The American Ferret Association maintains an owner-facing nutrition statement consistent with the high-protein, low-carbohydrate framework described here. Primary publications are best located by title, as URLs change over time.
          </p>
          <p className="text-sm text-brand-text-light">
            This page is general nutrition information, not individualized veterinary advice. Discuss any major diet change with a veterinarian familiar with ferrets, particularly for a ferret with a diagnosed endocrine or gastrointestinal condition.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
