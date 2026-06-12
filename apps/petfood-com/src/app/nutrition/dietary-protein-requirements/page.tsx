import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  buildMedicalWebPageSchema,
  combineSchemas,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
  CrossPortfolioCard,
  DropCap,
  PullQuote,
  CalloutBox,
  ArticleByline,
  ArticleSourcesList,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Dietary Protein Requirements for Dogs and Cats | PetFood.com',
  description:
    'How protein requirements differ between dogs and cats, what crude protein on the guaranteed analysis does not tell you, and how AAFCO sets the minima.',
  path: '/nutrition/dietary-protein-requirements',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Dietary Protein Requirements for Dogs and Cats | PetFood.com',
  description:
    'How protein requirements differ between dogs and cats, what crude protein on the guaranteed analysis does not tell you, and how AAFCO sets the minima.',
  url: 'https://petfood.com/nutrition/dietary-protein-requirements',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-05-30T00:00:00Z',
  modifiedAt: '2026-06-05T00:00:00Z',
})

const medicalSchema = buildMedicalWebPageSchema({
  name: 'Dietary Protein Requirements for Dogs and Cats | PetFood.com',
  description:
    'How protein requirements differ between dogs and cats, what crude protein on the guaranteed analysis does not tell you, and how AAFCO sets the minima.',
  url: 'https://petfood.com/nutrition/dietary-protein-requirements',
  authorName: 'PetFood.com Editorial',
  lastReviewed: '2026-06-05',
  medicalAudience: 'Caregiver',
})

const schema = combineSchemas(articleSchema, medicalSchema)

export default function DietaryProteinRequirementsPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Dietary Protein for Dogs and Cats',
        subtitle:
          'Protein is the most-marketed and least-understood macronutrient on a pet food bag. Crude protein on the guaranteed analysis is a nitrogen estimate, not a quality measure, and the species difference between dogs and cats is larger than most owners realize. This page works through requirements, digestibility, amino-acid completeness, and the gap between the headline percentage and the biological value of the protein in the bowl.',
        category: 'Nutrition Fundamentals',
        publishedAt: 'May 2026',
        readTime: '11 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Nutrition', href: '/nutrition' },
        { name: 'Dietary Protein for Dogs and Cats', href: '/nutrition/dietary-protein-requirements' },
      ]}
      relatedLinks={[
        { title: 'Nutrition Hub', href: '/nutrition' },
        { title: 'Dietary Fat and Fatty Acids', href: '/nutrition/dietary-fat-and-fatty-acids' },
        { title: 'Vitamins in Pet Food', href: '/nutrition/vitamins-in-pet-food' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'What Protein Does', href: '#function' },
              { label: 'Crude Protein vs Quality', href: '#crude' },
              { label: 'Cats — Obligate Carnivores', href: '#cats' },
              { label: 'Dogs — Facultative Omnivores', href: '#dogs' },
              { label: 'AAFCO Minimums', href: '#aafco' },
              { label: 'Reading the Label', href: '#label' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Nutrition Hub', href: '/nutrition' },
              { label: 'Animal Protein Sources', href: '/ingredients/animal-protein-sources' },
              { label: 'Dry-Matter Basis Explained', href: '/nutrition/dry-matter-basis-explained' },
              { label: 'AAFCO Completeness Explained', href: '/guides/aafco-completeness-explained' },
            ]}
          />
          <RelatedLinks
            title="Compare &amp; Evaluate Brands"
            links={[
              { label: 'Brand Evaluations', href: '/brands' },
              { label: 'Orijen vs Acana — High-Protein Lines', href: '/brands/orijen-vs-acana-comparison' },
              { label: 'Purina Pro Plan — Independent Evaluation', href: '/brands/purina-pro-plan-evaluation' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="dietary-protein-requirements"
          />
          <CrossPortfolioCard currentSite="petfood-com" contentType="nutrition" variant="sidebar" />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline
          siteName="PetFood.com Editorial"
          publishedAt="2026-05-30T00:00:00Z"
          updatedAt="2026-06-05T00:00:00Z"
          reviewedBy="Editorial team"
        />

        <DropCap>
          Protein supplies the amino acids an animal uses to build and repair tissue, synthesize
          enzymes and hormones, and (when dietary energy is short) generate glucose. Eleven amino
          acids are essential for dogs and eleven for cats, meaning the animal cannot synthesize
          them fast enough to meet its needs and must obtain them from the diet. Cats add taurine
          to that essential list because their hepatic synthesis from cysteine and methionine is
          inadequate. The total quantity of protein matters, but the amino-acid distribution and
          the digestibility of the protein source matter just as much.
        </DropCap>

        <h2 id="function">What Protein Does</h2>
        <p>Unlike carbohydrate and fat, protein is not stored in a dedicated reserve. The body maintains a small labile amino-acid pool and otherwise draws on functional tissue (muscle) when intake is inadequate. A diet that is low in usable protein produces muscle loss, poor coat quality, depressed immune function, and slowed wound healing before it produces any obvious clinical sign. Conversely, protein consumed beyond requirement is deaminated and the carbon skeleton used for energy or stored as fat; the nitrogen is excreted as urea. Healthy kidneys handle that load without difficulty.</p>

        <h2 id="crude">Crude Protein vs Protein Quality</h2>
        <p>The guaranteed analysis lists a crude protein minimum. Crude protein is calculated from total nitrogen multiplied by 6.25 &mdash; it measures nitrogen, not protein quality. Two foods can show identical crude protein and differ enormously in biological value. A diet built on highly digestible animal muscle delivers a complete, well-absorbed amino-acid profile; a diet padded with low-digestibility connective tissue or with a plant-protein isolate added to inflate the nitrogen number can hit the same crude-protein figure while delivering inferior amino-acid completeness. Digestibility &mdash; the fraction of ingested protein actually absorbed &mdash; typically ranges from roughly 75 percent for lower-grade ingredients to over 90 percent for high-quality animal protein. The label discloses none of this; the ingredient panel is the best available proxy. See <a href="/ingredients/animal-protein-sources">Animal Protein Sources</a>.</p>

        <PullQuote
          quote="Two foods can show identical crude protein and differ enormously in biological value."
          variant="inline"
        />

        <p>Crude protein is also reported on an as-fed basis, which makes wet and dry foods look incomparable. A canned food at 10 percent crude protein as-fed and a kibble at 30 percent are far closer once converted to a dry-matter basis, because the canned food is roughly 78 percent water. Any cross-format protein comparison must be done on a dry-matter basis. See <a href="/nutrition/dry-matter-basis-explained">Dry-Matter Basis Explained</a>.</p>

        <h2 id="cats">Cats &mdash; Obligate Carnivores</h2>
        <p>Cats have a higher absolute protein requirement than dogs and a limited ability to downregulate the hepatic enzymes that catabolize protein. Even when dietary protein is scarce, a cat continues to use amino acids for gluconeogenesis at a high rate, which is why protein-restricted diets are riskier for cats than for dogs. The AAFCO Cat Food Nutrient Profile sets a minimum crude protein of 30 percent dry-matter for adult maintenance and 30 percent for growth and reproduction, against the dog figures below. Cats also have specific requirements &mdash; taurine, arginine, and the sulfur amino acids &mdash; at levels that animal protein meets readily and plant protein meets poorly. A cat fed a predominantly plant-protein diet requires careful supplementation. See <a href="/species/dog-vs-cat-nutrition-overview">Dog vs Cat Nutrition</a>.</p>

        <CalloutBox variant="evidence" title="NRC on obligate-carnivore protein catabolism">
          <p>The National Research Council&apos;s <em>Nutrient Requirements of Dogs and Cats</em> (2006) documents that cats maintain high hepatic aminotransferase activity regardless of dietary protein intake &mdash; they cannot suppress protein catabolism the way dogs can. This is the mechanistic basis for their higher minimum protein requirement and their sensitivity to protein restriction.</p>
        </CalloutBox>

        <h2 id="dogs">Dogs &mdash; Facultative Omnivores</h2>
        <p>Dogs are metabolically more flexible. They can downregulate protein catabolism when intake is low, synthesize taurine adequately in most breeds, and derive usable nutrition from a broader ingredient base. The AAFCO Dog Food Nutrient Profile sets a minimum crude protein of 18 percent dry-matter for adult maintenance and 22.5 percent for growth and reproduction. These are minima for adequacy, not optima for every dog: working dogs, growing puppies, and pregnant or lactating dams benefit from intake well above the floor, while sedentary adults rarely need the very high protein levels marketed on some premium bags.</p>

        <h2 id="aafco">AAFCO Minimums</h2>
        <p>The AAFCO profiles express requirements as minimums (and, for some nutrients, maximums) on a dry-matter basis, assuming a food of typical energy density. Because requirements scale with energy intake, AAFCO also publishes the profiles on a per-1000-kcal metabolizable-energy basis; a very energy-dense food must carry proportionally more protein per kilogram to deliver the same amount per calorie eaten. A label statement of complete and balanced for a life stage means the manufacturer attests the food meets these profiles via formulation or feeding trial. See <a href="/guides/aafco-completeness-explained">AAFCO Completeness Explained</a>.</p>

        <h2 id="label">Reading the Protein Claim on a Label</h2>
        <ol>
          <li>Read crude protein on the guaranteed analysis as a floor, not a quality grade. A high number is not automatically better.</li>
          <li>Look at the first five ingredients. Named animal proteins early in the list signal a higher-quality amino-acid base than plant-protein isolates added to lift the nitrogen figure.</li>
          <li>Convert to dry-matter before comparing a canned food with a kibble.</li>
          <li>For cats, confirm animal protein leads the ingredient panel; obligate-carnivore amino-acid needs are met poorly by plants alone.</li>
          <li>Check the AAFCO statement for the correct life stage &mdash; growth and reproduction carry higher protein minima than adult maintenance.</li>
        </ol>

        <ArticleSourcesList
          title="Sources"
          sources={[
            {
              label: 'AAFCO Official Publication &mdash; Dog and Cat Food Nutrient Profiles (Chapter 4); Model Regulations for Pet Food (Chapter 6)',
              url: 'https://www.aafco.org/resources/publications/',
              publisher: 'Association of American Feed Control Officials, 2025',
            },
            {
              label: 'Nutrient Requirements of Dogs and Cats &mdash; species-specific nutrient-requirement reference underlying the AAFCO profiles',
              url: 'https://nap.nationalacademies.org/catalog/10668/nutrient-requirements-of-dogs-and-cats',
              publisher: 'National Research Council, National Academies Press, 2006',
            },
            {
              label: 'WSAVA Global Nutrition Guidelines and Recommendations on Selecting Pet Foods',
              url: 'https://wsava.org/committees/global-nutrition-committee/',
              publisher: 'World Small Animal Veterinary Association Global Nutrition Committee',
            },
          ]}
        />

        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. We do not provide individualized veterinary advice.
          Therapeutic diets, diagnosed disease, and breed-specific nutritional concerns require a
          licensed veterinarian and, where indicated, a board-certified veterinary nutritionist.
        </p>
      </div>
    </ArticleLayout>
  )
}
