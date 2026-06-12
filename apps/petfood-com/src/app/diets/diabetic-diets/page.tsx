import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
  ArticleSourcesList,
  ArticleByline
} from '@carloOS/ui'
import { ArticleMasthead } from '../../../components/ArticleMasthead'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Diabetic Diets for Dogs and Cats | PetFood.com',
  description:
    'How diet supports diabetes management — low-carb feline vs high-fiber canine approaches, feeding consistency, and the link to weight and remission.',
  path: '/diets/diabetic-diets',
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
      label: "AAHA/ACVIM Consensus Guidelines — applicable condition-specific nutrition and management",
      url: "https://www.aaha.org/veterinary-resources/guidelines/",
      publisher: "American Animal Hospital Association / American College of Veterinary Internal Medicine",
    },
]
const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Diabetic Diets for Dogs and Cats | PetFood.com',
  description:
    'How diet supports diabetes management — the species split between low-carb feline and high-fiber canine approaches, consistency, and the link to weight and remission.',
  url: 'https://petfood.com/diets/diabetic-diets',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',

  citation: SOURCES,
})


export default function DiabeticDietsPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Diabetic Diets for Dogs and Cats',
        subtitle:
          'Diabetes mellitus is managed primarily with insulin, but diet is a powerful co-therapy — and the dietary approach differs sharply between cats and dogs because their diabetes differs. For cats, a low-carbohydrate diet can even support remission. This page covers the species split, the role of consistency, and the central importance of body weight.',
        category: 'Condition-Specific Diet',
        publishedAt: 'May 2026',
        readTime: '11 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Diets', href: '/diets' },
        { name: 'Diabetic Diets for Dogs and Cats', href: '/diets/diabetic-diets' },
      ]}
      relatedLinks={[
        { title: 'Diets Hub', href: '/diets' },
        { title: 'Kidney Disease Diets', href: '/diets/kidney-disease-diets' },
        { title: 'Weight-Management Diets', href: '/diets/weight-management-diets' },
        { title: 'Food Allergy and Elimination Diets', href: '/diets/food-allergy-and-elimination-diets' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Two Different Diseases', href: '#twodiseases' },
              { label: 'Feline — Low Carbohydrate', href: '#feline' },
              { label: 'Canine — Consistency and Fiber', href: '#canine' },
              { label: 'Consistency and Timing', href: '#consistency' },
              { label: 'Weight and Remission', href: '#weight' },
              { label: 'Coordinating with Insulin', href: '#insulin' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Carbohydrates in Pet Food', href: '/nutrition/carbohydrates-in-pet-food' },
              { label: 'Weight-Management Diets', href: '/diets/weight-management-diets' },
              { label: 'Body Condition Scoring', href: '/feeding/body-condition-scoring' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="diabetic-diets"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
        <ArticleMasthead
          manifestKey="petfood-com:category-conditions"
          alt="A therapeutic diabetic-management pet-food bag in clinical light"
          eyebrow="Condition-Specific Diet"
          priority
        />
        <p>Diabetes mellitus results from inadequate insulin action, leading to high blood glucose. The condition is common in middle-aged and older cats and dogs, and while insulin therapy is the foundation of treatment, diet meaningfully influences glycemic control, insulin requirements, and — in cats — the chance of remission. The right dietary approach depends on which species and which form of diabetes is present.</p>
        <h2 id="twodiseases">Two Different Diseases</h2>
        <p>Feline diabetes resembles human type 2 diabetes: it is closely tied to obesity and insulin resistance, and the high-carbohydrate diets historically common in cat food are implicated. Canine diabetes more often resembles type 1, with absolute insulin deficiency, frequently following pancreatitis or immune destruction of the beta cells. Because the underlying problem differs, the dietary strategy differs.</p>
        <h2 id="feline">Feline Diabetes — Low Carbohydrate</h2>
        <p>For diabetic cats, a low-carbohydrate, high-protein diet reduces post-meal glucose spikes and lowers insulin requirements. Multiple studies show diabetic cats fed low-carbohydrate diets are more likely to achieve remission — a state where they no longer require insulin — particularly when the diet is combined with weight loss and good glycemic control early in the disease. Canned diets make a low-carbohydrate target easier to hit than kibble. See <a href="/nutrition/carbohydrates-in-pet-food">Carbohydrates in Pet Food</a>.</p>
        <h2 id="canine">Canine Diabetes — Consistency and Fiber</h2>
        <p>For diabetic dogs, the emphasis is less on slashing carbohydrate and more on consistency and on moderating the glycemic response. Diets with increased fiber and complex carbohydrate slow glucose absorption and blunt post-meal spikes, smoothing the glucose curve that insulin must match. The most important dietary factor in dogs is feeding the same food in the same amount at the same times every day.</p>
        <h2 id="consistency">Consistency and Timing</h2>
        <p>Whatever the species, diabetic feeding must be consistent. Meals are typically timed to insulin injections so that the glucose load and the insulin peak coincide. Erratic feeding, treats of unknown calorie content, and free-choice grazing all destabilize glucose control. Diabetic management is built on a fixed, measured routine.</p>
        <h2 id="weight">Weight and Remission</h2>
        <p>Obesity drives insulin resistance, so weight loss in overweight diabetic animals improves control and, in cats, raises the chance of remission. Conversely, many diabetic dogs are diagnosed after weight loss and need their weight stabilized. Body condition management is integral to diabetic feeding. See <a href="/diets/weight-management-diets">Weight-Management Diets</a> and <a href="/feeding/body-condition-scoring">Body Condition Scoring</a>.</p>
        <h2 id="insulin">Coordinating with Insulin</h2>
        <p>Diet changes alter insulin requirements, so any dietary change in a diabetic animal must be coordinated with the veterinarian and accompanied by glucose monitoring — switching a diabetic cat to a low-carbohydrate diet can drop insulin needs quickly, risking hypoglycemia if the insulin dose is not adjusted. Diabetic diet selection is a medical decision made with the treating veterinarian, not a standalone choice.</p>

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
