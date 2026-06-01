import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Feeding Multiple Pets in One Household | PetFood.com',
  description:
    'How to feed multi-pet households with different needs, preventing food stealing, feeding dogs and cats separately, and managing therapeutic diets in a group.',
  path: '/feeding/feeding-multiple-pets',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Feeding Multiple Pets in One Household | PetFood.com',
  description:
    'How to feed multi-pet households with different needs, preventing food stealing, feeding dogs and cats separately, and managing therapeutic diets in a group.',
  url: 'https://petfood.com/feeding/feeding-multiple-pets',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function FeedingMultiplePetsPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Feeding Multiple Pets in One Household',
        subtitle:
          'Multi-pet households turn feeding into a logistics problem: different animals need different amounts, different foods, and sometimes a therapeutic diet that must not be eaten by the others. Free-feeding a group almost guarantees that someone is over- and someone under-fed. This page covers separation strategies, dog-and-cat dynamics, and managing prescription diets in a group.',
        category: 'Feeding Guide',
        publishedAt: 'May 2026',
        readTime: '8 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Feeding' },
        { name: 'Feeding Multiple Pets in One Household', href: '/feeding/feeding-multiple-pets' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The Core Problem', href: '#problem' },
              { label: 'Separated Meal Feeding', href: '#separated' },
              { label: 'Dogs and Cats Together', href: '#dogscats' },
              { label: 'Therapeutic Diets in a Group', href: '#therapeutic' },
              { label: 'Microchip and Selective Feeders', href: '#feeders' },
              { label: 'Monitoring Each Animal', href: '#monitoring' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'How Much to Feed a Dog', href: '/feeding/how-much-to-feed-a-dog' },
              { label: 'Dog vs Cat Nutrition', href: '/species/dog-vs-cat-nutrition-overview' },
              { label: 'Food Allergy and Elimination Diets', href: '/diets/food-allergy-and-elimination-diets' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="feeding-multiple-pets"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>When several animals share a home, free-choice feeding makes it impossible to know who ate what, and it lets the fastest or most food-motivated animal overeat while a slower or sicker one is crowded out. The solution is structured, separated feeding, with portions matched to each animal&apos;s needs. This matters most when animals differ in size, life stage, body condition, or medical needs.</p>
        <h2 id="problem">The Core Problem</h2>
        <p>Different animals have different calorie needs, different life-stage diets, and sometimes a therapeutic diet that is harmful if eaten by the wrong animal. A shared bowl cannot meet these differing needs and obscures intake. The first principle of multi-pet feeding is that each animal&apos;s portion must be controllable and observable. See <a href="/feeding/how-much-to-feed-a-dog">How Much to Feed a Dog</a>.</p>
        <h2 id="separated">Separated Meal Feeding</h2>
        <p>The simplest reliable approach is scheduled meals with animals fed in separate locations — different rooms, crates, or sides of a barrier — for the duration of the meal, with bowls picked up afterward. This guarantees each animal gets its own portion and prevents stealing. It also lets you see exactly how much each animal eats, which is the earliest sign many illnesses give. See <a href="/feeding/feeding-frequency-and-schedules">Feeding Frequency and Schedules</a>.</p>
        <h2 id="dogscats">Dogs and Cats Together</h2>
        <p>Dogs frequently raid cat food, which is higher in protein and fat and can drive canine weight gain, and they raid litter boxes. Cat food is also nutritionally inappropriate as a dog&apos;s main diet and vice versa — a cat cannot live on dog food, which lacks adequate taurine, arachidonic acid, and pre-formed vitamin A. Feed cats on elevated surfaces or behind cat-sized barriers the dog cannot pass, and keep the species on their own species-appropriate diets. See <a href="/species/dog-vs-cat-nutrition-overview">Dog vs Cat Nutrition</a>.</p>
        <h2 id="therapeutic">Therapeutic Diets in a Group</h2>
        <p>When one animal needs a prescription diet, the others should not eat it (it may be inappropriate for them), and the patient must not eat the others&apos; food (which defeats the therapeutic purpose, especially during an elimination-diet trial). Strict separation at mealtimes, no free-choice food anywhere, and household-wide discipline on treats are essential. An elimination-diet trial in a multi-pet home is only valid if the patient eats nothing but the trial diet. See <a href="/diets/food-allergy-and-elimination-diets">Food Allergy and Elimination Diets</a>.</p>
        <h2 id="feeders">Microchip and Selective Feeders</h2>
        <p>Microchip-activated feeders open only for the registered animal, allowing free-access feeding tailored to each pet — useful for cats that graze, for protecting a therapeutic diet, or for keeping one animal out of another&apos;s food. They are a practical tool in homes where strict mealtime separation is hard to maintain, though they work best for cats and small dogs and require the animals to accept them.</p>
        <h2 id="monitoring">Monitoring Each Animal</h2>
        <p>Separated feeding makes individual monitoring possible: track each animal&apos;s intake, weigh and body-condition-score each one regularly, and watch for changes in appetite that a shared bowl would hide. In a multi-pet home, a drop in one animal&apos;s appetite is easy to miss without separation, yet it is often the first sign of illness. See <a href="/feeding/body-condition-scoring">Body Condition Scoring</a>.</p>

        <h2 id="sources">Sources</h2>
        <ul>
          <li>Association of American Feed Control Officials. <em>2025 AAFCO Official Publication</em> — Dog and Cat Food Nutrient Profiles (Chapter 4); ingredient definitions and Model Regulations for Pet Food (Chapter 6).</li>
          <li>National Research Council. <em>Nutrient Requirements of Dogs and Cats.</em> National Academies Press, 2006 — the authoritative species-specific nutrient-requirement reference underlying the AAFCO profiles.</li>
          <li>World Small Animal Veterinary Association (WSAVA) Global Nutrition Committee. <em>Global Nutrition Guidelines</em> and <em>Recommendations on Selecting Pet Foods</em> owner handout.</li>
        </ul>
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. We do not provide individualized veterinary advice.
          Therapeutic diets, diagnosed disease, and breed-specific nutritional concerns require a
          licensed veterinarian and, where indicated, a board-certified veterinary nutritionist.
        </p>
      </div>
    </ArticleLayout>
  )
}
