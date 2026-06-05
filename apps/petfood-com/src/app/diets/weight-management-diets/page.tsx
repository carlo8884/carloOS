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

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Weight-Loss and Weight-Management Diets for Pets | PetFood.com',
  description:
    'How weight-loss diets work — calorie restriction, protein-sparing, fiber satiety, light vs therapeutic metabolic diets, and safe rate of loss.',
  path: '/diets/weight-management-diets',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Weight-Loss and Weight-Management Diets for Pets | PetFood.com',
  description:
    'How weight-loss diets work — calorie restriction, protein-sparing, fiber satiety, the difference between light and therapeutic metabolic diets, and safe rate of loss.',
  url: 'https://petfood.com/diets/weight-management-diets',
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
      label: "AAHA/ACVIM Consensus Guidelines — applicable condition-specific nutrition and management",
      url: "https://www.aaha.org/veterinary-resources/guidelines/",
      publisher: "American Animal Hospital Association / American College of Veterinary Internal Medicine",
    },
]

export default function WeightManagementDietsPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Weight-Management Diets',
        subtitle:
          'More than half of dogs and cats in many surveys are overweight or obese, and excess weight shortens lifespan and worsens nearly every chronic disease. Weight-management diets are designed to create a calorie deficit while preserving lean mass and keeping the animal satisfied. This page covers how they work, the difference between light foods and therapeutic metabolic diets, and how to lose weight safely.',
        category: 'Condition-Specific Diet',
        publishedAt: 'May 2026',
        readTime: '11 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Diets', href: '/diets' },
        { name: 'Weight-Management Diets', href: '/diets/weight-management-diets' },
      ]}
      relatedLinks={[
        { title: 'Diets Hub', href: '/diets' },
        { title: 'Kidney Disease Diets', href: '/diets/kidney-disease-diets' },
        { title: 'Food Allergy and Elimination Diets', href: '/diets/food-allergy-and-elimination-diets' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The Scale of the Problem', href: '#problem' },
              { label: 'How Weight-Loss Diets Work', href: '#howwork' },
              { label: 'Light vs Therapeutic Diets', href: '#lightvstherapeutic' },
              { label: 'Protein-Sparing', href: '#protein' },
              { label: 'Satiety and Fiber', href: '#satiety' },
              { label: 'Safe Rate of Loss', href: '#rate' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Body Condition Scoring', href: '/feeding/body-condition-scoring' },
              { label: 'Pet Food Calories and Energy Density', href: '/nutrition/calories-and-energy-density' },
              { label: 'Diabetic Diets for Dogs and Cats', href: '/diets/diabetic-diets' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="weight-management-diets"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
        <p>Obesity in pets is a clinical disease, not a cosmetic issue. Excess adipose tissue is metabolically active and pro-inflammatory, and obesity is associated with shortened lifespan, osteoarthritis, diabetes (especially in cats), respiratory compromise, and reduced quality of life. A landmark lifetime study in Labrador Retrievers found that dogs kept lean lived roughly two years longer than their overweight littermates. Weight management is among the highest-impact nutritional interventions available.</p>
        <h2 id="problem">The Scale of the Problem</h2>
        <p>Body condition is assessed on a 9-point body condition score (BCS), where 4 to 5 is ideal; each point above 5 represents roughly 10 to 15 percent over ideal weight. Most owners underestimate their pet&apos;s body condition. Establishing the ideal target weight is the first step, and it should be set by a veterinarian based on frame and BCS, not by breed-average tables. See <a href="/feeding/body-condition-scoring">Body Condition Scoring</a>.</p>
        <h2 id="howwork">How Weight-Loss Diets Work</h2>
        <p>Weight loss requires a sustained calorie deficit. A weight-loss diet achieves this while avoiding the trap of simply feeding less of a maintenance food — which would also cut protein, vitamins, and minerals below requirement. Instead, these diets are formulated with reduced calorie density and increased protein and micronutrient density, so the animal eats a satisfying volume and meets nutrient needs while taking in fewer calories. See <a href="/nutrition/calories-and-energy-density">Pet Food Calories and Energy Density</a>.</p>
        <h2 id="lightvstherapeutic">Light vs Therapeutic Metabolic Diets</h2>
        <p>Over-the-counter light or weight-management foods carry modest calorie reductions and are aimed at preventing gain or supporting gentle loss. Therapeutic metabolic diets, available through veterinarians, are more aggressively formulated for active weight loss in obese patients and are paired with a structured plan and monitoring. AAFCO defines the terms light, lean, and low calorie with specific maximum calorie thresholds, so those claims are meaningful, but they are not the same as a supervised therapeutic program.</p>
        <h2 id="protein">Protein-Sparing</h2>
        <p>During calorie restriction, the body can break down muscle as well as fat. Higher dietary protein during weight loss spares lean mass, so the weight lost is preferentially fat. This is why weight-loss diets are protein-dense relative to their calories. Preserving muscle matters for metabolic rate and for function, particularly in older animals. See <a href="/nutrition/dietary-protein-requirements">Dietary Protein Requirements</a>.</p>
        <h2 id="satiety">Satiety and Fiber</h2>
        <p>Eating less is hard on the animal and on the owner who faces the begging. Weight-loss diets use increased fiber and protein, and sometimes increased dietary water, to promote satiety so the animal feels full on fewer calories. Some diets manipulate the fiber blend specifically for the satiety effect. Measured feeding with a kitchen scale, scheduled meals, and substituting low-calorie enrichment for food treats all support adherence.</p>
        <h2 id="rate">Safe Rate of Loss</h2>
        <p>Weight should come off gradually: roughly 1 to 2 percent of body weight per week is a common safe target, individualized by the veterinarian. Cats in particular must not lose weight too fast — rapid weight loss or anorexia in an overweight cat can precipitate hepatic lipidosis, a life-threatening liver condition. Any weight-loss program should include regular weigh-ins and reassessment of the plan. See <a href="/feeding/body-condition-scoring">Body Condition Scoring</a>.</p>

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
