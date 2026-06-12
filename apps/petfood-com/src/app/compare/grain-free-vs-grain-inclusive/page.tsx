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
  ArticleSourcesList,
  ArticleByline,
  StockImage
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Grain-Free vs Grain-Inclusive Pet Food | PetFood.com',
  description:
    'What grain-free actually changes, the grain-allergy myth, the FDA DCM investigation, and why grain-free is not the same as low-carbohydrate.',
  path: '/compare/grain-free-vs-grain-inclusive',
  type: 'article',
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
      label: "FDA Investigation: Potential Link Between Certain Diets and Canine Dilated Cardiomyopathy",
      url: "https://www.fda.gov/animal-veterinary/news-events/fda-investigation-potential-link-between-certain-diets-and-canine-dilated-cardiomyopathy",
      publisher: "U.S. Food and Drug Administration, Center for Veterinary Medicine",
    },
]
const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Grain-Free vs Grain-Inclusive Pet Food | PetFood.com',
  description:
    'What grain-free actually changes, the grain-allergy myth, the FDA DCM investigation, and why grain-free is not the same as low-carbohydrate.',
  url: 'https://petfood.com/compare/grain-free-vs-grain-inclusive',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
  speakable: true,

  citation: SOURCES,
})

// Content-aware FAQ derived from the sections below — calibrated, sourced-tone
// answers only. The DCM answers state the FDA investigation status (association,
// not proven causation), matching the page body; no verdict the page does not make.
const FAQ = [
  {
    question: 'Is grain-free food better for dogs and cats?',
    answer:
      'For most animals, no. Grain-free is a marketing position, not a quality tier: grains are an uncommon cause of food allergy, grain-free is usually not lower in carbohydrate, and the legume-heavy grain-free pattern has been associated with a heart-disease signal still under FDA investigation. Grain-free is genuinely appropriate in the uncommon case of a confirmed grain allergy diagnosed by elimination trial.',
  },
  {
    question: 'Does grain-free mean low-carbohydrate?',
    answer:
      'No. Extruded kibble requires starch for its structure, so grain-free kibble simply uses potato, pea, lentil, or tapioca starch in place of grain starch — and the total carbohydrate is often similar to a grain-inclusive food. A truly low-carbohydrate diet is more reliably achieved with canned food.',
  },
  {
    question: 'Did the FDA prove that grain-free diets cause heart disease?',
    answer:
      'No. From 2018 the FDA investigated reports of dilated cardiomyopathy (DCM) in dogs eating grain-free, legume-heavy diets. The investigation identified an association — not proven causation — between certain grain-free, legume-rich formulations and DCM, and the mechanism remains unresolved. The association is a reason for caution about legume-heavy grain-free formulations, particularly for DCM-predisposed breeds.',
  },
  {
    question: 'When does grain-free make sense?',
    answer:
      'In the uncommon case of a confirmed grain allergy diagnosed by an elimination trial. Outside that specific situation there is no general health advantage to grain-free, and a grain-inclusive diet from a reputable manufacturer is a sound default for most animals.',
  },
]

const pageSchema = combineSchemas(schema, buildFAQSchema({ questions: FAQ }))


export default function GrainFreeVsGrainInclusivePage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Grain-Free vs Grain-Inclusive',
        subtitle:
          'Grain-free became one of the best-selling positions in pet food on the strength of a claim — that grain is a common allergen and an inferior filler — that the evidence does not support. The FDA investigation into grain-free diets and heart disease then complicated the picture further. This page separates what grain-free actually changes from the marketing around it.',
        category: 'Food-Type Comparison',
        publishedAt: 'May 2026',
        readTime: '11 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Compare', href: '/compare' },
        { name: 'Grain-Free vs Grain-Inclusive', href: '/compare/grain-free-vs-grain-inclusive' },
      ]}
      relatedLinks={[
        { title: 'Compare Hub', href: '/compare' },
        { title: 'Wet vs Dry Food', href: '/compare/wet-vs-dry-food' },
        { title: 'Fresh vs Kibble', href: '/compare/fresh-vs-kibble' },
      ]}
      schema={pageSchema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'At-a-Glance Table', href: '#at-a-glance' },
              { label: 'What Grain-Free Means', href: '#whatis' },
              { label: 'The Grain-Allergy Myth', href: '#allergy' },
              { label: 'Grain-Free Is Not Low-Carb', href: '#notlowcarb' },
              { label: 'The FDA DCM Investigation', href: '#dcm' },
              { label: 'When Grain-Free Makes Sense', href: '#whensense' },
              { label: 'The Bottom Line', href: '#bottomline' },
              { label: 'Common Questions', href: '#faq' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Food Allergies and Intolerances', href: '/conditions/food-allergies-and-intolerances' },
              { label: 'Grain-Free and DCM Risk', href: '/ingredients/grain-free-dcm-risk' },
              { label: 'Carbohydrates in Pet Food', href: '/nutrition/carbohydrates-in-pet-food' },
              { label: 'Food Allergy and Elimination Diets', href: '/diets/food-allergy-and-elimination-diets' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="grain-free-vs-grain-inclusive"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
        <StockImage manifestKey="petfood-com:compare-grain-free-vs-grain-inclusive" fallbackKey="petfood-com:compare-hero" priority aspect="16:9" variant="wide" caption="Grain-free versus grain-inclusive — the DCM question and what the evidence actually supports." />
        <p>Grain-free pet food replaces cereal grains (corn, wheat, rice) with other carbohydrate sources, most often potatoes, peas, lentils, and other legumes. The category was built on the marketing premise that grains are common allergens and low-quality fillers, and that a grain-free diet is therefore healthier. Neither premise holds up well, and the FDA later identified a possible association between some grain-free diets and canine heart disease. See <a href="/ingredients/grain-free-dcm-risk">Grain-Free and DCM Risk</a>.</p>

        <h2 id="at-a-glance">At-a-Glance Comparison</h2>
        <div className="pf-compare">
          <div className="pf-compare-caption">Grain-free vs grain-inclusive — side-by-side reference</div>
          <div className="pf-compare-scroll">
            <table>
              <thead>
                <tr>
                  <th scope="col">Dimension</th>
                  <th scope="col">Grain-Free</th>
                  <th scope="col">Grain-Inclusive</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">What it means</th>
                  <td>No cereal grains; starch from potato, peas, lentils, tapioca</td>
                  <td>Contains cereal grains (corn, wheat, rice, oats, barley)</td>
                </tr>
                <tr>
                  <th scope="row">Allergy relevance</th>
                  <td>No advantage for most animals — grains are an uncommon allergen</td>
                  <td>Appropriate unless a grain allergy is confirmed by elimination trial</td>
                </tr>
                <tr>
                  <th scope="row">Carbohydrate content</th>
                  <td>Often similar to grain-inclusive — kibble requires starch</td>
                  <td>Similar; format (kibble vs canned) drives carbohydrate more than grain status</td>
                </tr>
                <tr>
                  <th scope="row">FDA DCM investigation</th>
                  <td>Legume-heavy formulations associated — not proven causation; mechanism unresolved</td>
                  <td>Not the formulation pattern under investigation</td>
                </tr>
                <tr>
                  <th scope="row">When it makes sense</th>
                  <td>Confirmed grain allergy diagnosed by elimination trial (uncommon)</td>
                  <td>Sound default for most animals from a reputable manufacturer</td>
                </tr>
                <tr>
                  <th scope="row">Bottom line</th>
                  <td>A marketing position, not a quality tier</td>
                  <td>Not inherently better — judge formulation, transparency, and AAFCO substantiation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 id="whatis">What Grain-Free Means</h2>
        <p>Grain-free means only that the recipe contains no cereal grains. It says nothing about carbohydrate content, protein quality, or overall nutritional value, because the grains are simply replaced by other carbohydrate ingredients. The term is a marketing claim about one ingredient category, not a measure of diet quality.</p>
        <h2 id="allergy">The Grain-Allergy Myth</h2>
        <p>Grains are an uncommon cause of food allergy in dogs and cats; the most common food allergens are animal proteins — beef, dairy, chicken, fish — not grains. The frequent assumption that an itchy dog needs a grain-free diet is usually misplaced. True food allergy is diagnosed by an elimination trial, and the offending allergen is far more often a protein than a grain. See <a href="/diets/food-allergy-and-elimination-diets">Food Allergy and Elimination Diets</a>.</p>
        <h2 id="notlowcarb">Grain-Free Is Not Low-Carbohydrate</h2>
        <p>Because extruded kibble requires starch for its structure, grain-free kibble simply uses potato, pea, lentil, or tapioca starch in place of grain starch — and the total carbohydrate is often similar to a grain-inclusive food. Owners seeking a low-carbohydrate diet (for instance, for a diabetic cat) are frequently misled by grain-free into thinking they have one; a truly low-carbohydrate diet is more reliably achieved with canned food. See <a href="/nutrition/carbohydrates-in-pet-food">Carbohydrates in Pet Food</a>.</p>
        <h2 id="dcm">The FDA DCM Investigation</h2>
        <p>From 2018, the FDA investigated reports of dilated cardiomyopathy (DCM) in dogs eating grain-free, legume-heavy diets. The investigation identified an association — not proven causation — between certain grain-free, legume-rich formulations and DCM, and the mechanism remains unresolved. The episode turned the grain-free health claim on its head for many veterinarians. The full record is covered on our dedicated page. See <a href="/ingredients/grain-free-dcm-risk">Grain-Free and DCM Risk</a>.</p>
        <h2 id="whensense">When Grain-Free Makes Sense</h2>
        <p>Grain-free is genuinely appropriate in the uncommon case of a confirmed grain allergy diagnosed by elimination trial. Outside that specific situation, there is no general health advantage to grain-free, and the DCM association gives reason for caution about legume-heavy grain-free formulations in particular. A grain-inclusive diet from a reputable manufacturer is a sound default for most animals.</p>
        <h2 id="bottomline">The Bottom Line</h2>
        <p>Grain-free is a marketing position, not a quality tier. It does not reduce allergy risk for most animals, does not necessarily lower carbohydrate, and — in legume-heavy forms — has been associated with a heart-disease signal still under investigation. Choose a diet on its overall formulation, manufacturer transparency, and AAFCO substantiation rather than on the presence or absence of grain. See <a href="/myths">Pet Food Myths</a>.</p>

        <h2 id="faq">Common Questions</h2>
        {FAQ.map((f) => (
          <div key={f.question}>
            <p><strong>{f.question}</strong></p>
            <p>{f.answer}</p>
          </div>
        ))}

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
