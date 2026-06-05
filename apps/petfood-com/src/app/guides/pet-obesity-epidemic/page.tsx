import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
  CrossPortfolioCard,
  ArticleSourcesList
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'The Pet Obesity Epidemic — Causes and Costs | PetFood.com',
  description:
    'How widespread pet obesity is, why it shortens lifespan and worsens disease, the feeding and behavioral causes, and the evidence that lean pets live longer.',
  path: '/guides/pet-obesity-epidemic',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'The Pet Obesity Epidemic — Causes and Costs | PetFood.com',
  description:
    'How widespread pet obesity is, why it shortens lifespan and worsens disease, the feeding and behavioral causes, and the evidence that lean pets live longer.',
  url: 'https://petfood.com/guides/pet-obesity-epidemic',
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
]

export default function PetObesityEpidemicPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'The Pet Obesity Epidemic',
        subtitle:
          'Pet obesity is the most common preventable health problem in dogs and cats, affecting a majority of animals in many surveys, and it shortens lifespan and worsens nearly every chronic disease. It is also among the most fixable through feeding decisions. This page covers the scale, the causes, the costs, and the strong evidence that keeping a pet lean adds years.',
        category: 'Foundational Guide',
        publishedAt: 'May 2026',
        readTime: '10 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Guides', href: '/guides' },
        { name: 'The Pet Obesity Epidemic', href: '/guides/pet-obesity-epidemic' },
      ]}
      relatedLinks={[
        { title: 'Guides Hub', href: '/guides' },
        { title: 'Reading a Pet Food Label', href: '/guides/reading-pet-food-labels' },
        { title: 'How to Choose a Pet Food', href: '/guides/how-to-choose-a-pet-food' },
        { title: 'AAFCO Completeness Explained', href: '/guides/aafco-completeness-explained' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'How Widespread', href: '#widespread' },
              { label: 'Why It Matters', href: '#whymatters' },
              { label: 'The Lifespan Evidence', href: '#lifespan' },
              { label: 'Causes', href: '#causes' },
              { label: 'Owner Perception', href: '#perception' },
              { label: 'Reversing It', href: '#reversing' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Weight-Management Diets', href: '/diets/weight-management-diets' },
              { label: 'Body Condition Scoring', href: '/feeding/body-condition-scoring' },
              { label: 'How Much to Feed a Dog', href: '/feeding/how-much-to-feed-a-dog' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="pet-obesity-epidemic"
          />
          <CrossPortfolioCard currentSite="petfood-com" contentType="guide" variant="sidebar" />
        </>
      }
    >
      <div className="carloOS-article">
        <p>Surveys consistently find that more than half of dogs and cats in many countries are overweight or obese, making it the most common nutrition-related disorder in companion animals. Unlike many diseases, obesity is largely preventable and reversible through feeding and activity. Its consequences are serious and well-documented, and the benefits of keeping a pet lean are among the clearest findings in companion-animal nutrition. See <a href="/diets/weight-management-diets">Weight-Management Diets</a>.</p>
        <h2 id="widespread">How Widespread</h2>
        <p>Estimates from veterinary surveys regularly put the overweight-or-obese share of pet dogs and cats above 50 percent, and rising over recent decades. The trend mirrors the human obesity trend and shares causes: energy-dense food, sedentary lifestyles, and overfeeding. Because obesity develops gradually and is normalized, it is often unrecognized until it causes a problem. See <a href="/feeding/body-condition-scoring">Body Condition Scoring</a>.</p>
        <h2 id="whymatters">Why It Matters</h2>
        <p>Excess fat is not inert — adipose tissue is metabolically active and pro-inflammatory. Obesity is associated with osteoarthritis, diabetes mellitus (especially in cats), respiratory and cardiovascular strain, increased anesthetic and surgical risk, certain cancers, urinary disease, and reduced quality of life and activity. It worsens the management of nearly every concurrent chronic condition. The health cost is broad and substantial.</p>
        <h2 id="lifespan">The Lifespan Evidence</h2>
        <p>The most compelling evidence comes from a lifetime study of Labrador Retrievers in which littermates were fed either to a lean body condition or 25 percent more. The lean-fed dogs lived a median of roughly two years longer, developed signs of chronic disease later, and needed treatment for osteoarthritis later. Keeping a dog lean measurably extended both lifespan and healthspan. Few nutritional interventions have evidence this strong. See <a href="/diets/weight-management-diets">Weight-Management Diets</a>.</p>
        <h2 id="causes">Causes</h2>
        <p>The causes are mostly about energy balance: overfeeding (often by following bag guidelines that overestimate, or by free-feeding), uncounted treats and table scraps, energy-dense diets fed by volume rather than calories, neutering (which lowers energy needs), reduced activity in indoor and aging animals, and breed predispositions. Most cases are driven by feeding more calories than the animal expends. See <a href="/feeding/how-much-to-feed-a-dog">How Much to Feed a Dog</a> and <a href="/feeding/treats-and-the-ten-percent-rule">Treats and the 10 Percent Rule</a>.</p>
        <h2 id="perception">Owner Perception</h2>
        <p>A persistent obstacle is that many owners do not recognize their pet as overweight, in part because the overweight body shape has become normalized. Studies show owners systematically underestimate their pet&apos;s body condition. Objective tools — body condition scoring and a target weight set by the veterinarian — counter this perception gap, which is why hands-on assessment beats visual impression. See <a href="/feeding/body-condition-scoring">Body Condition Scoring</a>.</p>
        <h2 id="reversing">Reversing It</h2>
        <p>Obesity is reversible with a structured plan: a veterinarian-set target weight, a calorie deficit (ideally via a weight-management diet that preserves protein and nutrients), measured feeding with a kitchen scale, treat discipline within the 10 percent rule, increased activity, and regular reweighing. Loss should be gradual — and especially careful in cats to avoid hepatic lipidosis. The payoff, in years of healthier life, is large. See <a href="/diets/weight-management-diets">Weight-Management Diets</a>.</p>

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
