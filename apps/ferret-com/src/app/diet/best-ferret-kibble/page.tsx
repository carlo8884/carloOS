import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, EmailCapture, RelatedLinks, TableOfContents, ReviewCard, ScoreMethodology, AffiliateDisclosure } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'How to Choose a Ferret Kibble — Reading the Panel | Ferret.com',
  description:
    'How to evaluate a ferret kibble: animal-first ingredient panels, the protein/fat/carbohydrate window, the three commercial tiers, and the red flags to avoid.',
  path: '/diet/best-ferret-kibble',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'How to Choose a Ferret Kibble',
  description:
    'A framework for evaluating commercial ferret kibble by ingredient panel and macronutrient profile, with the three quality tiers and the red flags to avoid.',
  url: 'https://ferret.com/diet/best-ferret-kibble',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const med = buildMedicalWebPageSchema({
  name: 'How to Choose a Ferret Kibble',
  description:
    'Guidance on selecting an appropriate commercial dry diet for domestic ferrets based on ingredient and macronutrient panels.',
  url: 'https://ferret.com/diet/best-ferret-kibble',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})
const combined = combineSchemas(schema, med)

export default function BestFerretKibblePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'How to Choose a Ferret Kibble',
          subtitle:
            'Most of the work in feeding a ferret well is choosing the right dry food, then staying consistent. This page is a method, not a shopping list: how to read an ingredient panel, what macronutrient window to aim for, and the red flags that separate an appropriate formula from supermarket "ferret food" that exists only because owners keep buying it.',
          category: 'Diet & Nutrition',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '10 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Diet', href: '/diet' },
          { name: 'Choosing a Ferret Kibble', href: '/diet/best-ferret-kibble' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Read the Panel First', href: '#panel' },
                { label: 'The Macronutrient Window', href: '#macros' },
                { label: 'The Three Tiers', href: '#tiers' },
                { label: 'Red Flags', href: '#red-flags' },
                { label: 'Rotation & Food Fixation', href: '#rotation' },
                { label: 'Transitioning Brands', href: '#transition' },
                { label: 'Kibbles That Fit the Profile', href: '#picks' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Whole-Prey vs Kibble', href: '/diet/whole-prey-vs-kibble' },
                { label: 'Protein & Fat Requirements', href: '/diet/protein-and-fat-requirements' },
                { label: 'Kit vs Adult Feeding', href: '/diet/kit-vs-adult-feeding' },
                { label: 'Diet & Nutrition Hub', href: '/diet' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Nutrition Notes"
              subtitle="Evidence-based ferret feeding, monthly."
              source="diet-best-ferret-kibble"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Diet Hub', href: '/diet' },
          { title: 'Reading Food Labels', href: '/diet/reading-food-labels' },
          { title: 'Protein & Fat Requirements', href: '/diet/protein-and-fat-requirements' },
          { title: 'Transitioning Foods', href: '/diet/transitioning-foods' },
        ]}
>
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
            reviewedBy="Editorial team"
          />

          <h2 id="panel">Read the Panel First</h2>
          <p>
            The single most useful skill in ferret nutrition is reading an ingredient panel. Ingredients are listed by weight, so the first three to five entries define the formula. For a ferret kibble, those entries should be <strong>named animal proteins and animal fats</strong> — chicken, chicken meal, turkey, lamb, fish meal, chicken fat. If the first ingredient is a grain ("ground corn," "brewers rice," "wheat") or a plant-protein concentrate ("corn gluten meal," "pea protein," "soybean meal"), the formula is built on plant carbohydrate that a ferret cannot use, regardless of the marketing on the front of the bag.
          </p>
          <p>
            "Meal" is not a dirty word. Chicken meal is rendered, water-removed chicken and is actually more protein-dense by weight than fresh chicken, which is roughly 70% water. A panel reading "chicken, chicken meal, turkey meal, chicken fat" is a good sign, not a bad one.
          </p>

          <h2 id="macros">The Macronutrient Window</h2>
          <p>
            The profile cited across exotic-pet veterinary references is roughly 32–40% protein, 18–22% fat, and under 3% carbohydrate, all on a dry-matter basis, with supplemental taurine and fiber under 3%. Guaranteed-analysis labels report "as fed" rather than dry-matter, and they rarely list carbohydrate at all. You estimate carbohydrate <em>by difference</em>: subtract the listed protein, fat, moisture, ash, and fiber percentages from 100. Many supermarket "ferret" kibbles land at 15–30% carbohydrate by difference — that is a defect, not a feature. The full target window and the reasoning behind it are covered in <a href="/diet/protein-and-fat-requirements">protein and fat requirements</a>.
          </p>

          <h2 id="tiers">The Three Tiers</h2>
          <p>
            Commercial options sort into three broad tiers. The goal is to land on a formulation whose panel matches the obligate-carnivore profile, then stay consistent.
          </p>
          <p>
            <strong>Premium — animal-first, low-carb, grain-free.</strong> Starch-free or near-starch-free formulas whose panels read as named meats and organ meats, with carbohydrate by difference in the low single digits. The default choice when insulinoma risk is a concern (see <a href="/health/insulinoma">insulinoma in ferrets</a>). Higher price point and not always stocked in chain pet aisles.
          </p>
          <p>
            <strong>Mid — ferret-specific, mostly acceptable.</strong> Diets formulated specifically for ferrets rather than adapted from cat food, with protein and fat in the working ferret range. Panels are imperfect — some plant protein, some grain — but acceptable for healthy adults, affordable, and widely stocked.
          </p>
          <p>
            <strong>Entry — avoid where possible.</strong> Generic supermarket "ferret food" with corn, rice, or beet pulp in the first three ingredients, often bundled with fruit-and-vegetable "treats." These reflect what sells, not what ferrets need.
          </p>

          <h2 id="red-flags">Red Flags on a Bag</h2>
          <ul>
            <li>A grain or plant-protein concentrate as the first ingredient.</li>
            <li>Added fruit, vegetables, or "garden medley" — ferrets do not digest plant matter and added sugars stress pancreatic beta cells.</li>
            <li>Sweeteners: molasses, honey, cane sugar, fructose.</li>
            <li>Marketing language ("holistic," "natural," "veterinarian formulated") in place of a clean panel. The panel is the only thing that matters.</li>
            <li>A "ferret and rabbit" or "small animal" combo food — rabbits are herbivores; a food formulated for both is wrong for at least one.</li>
          </ul>

          <h2 id="rotation">Rotation & Food Fixation</h2>
          <p>
            Ferrets imprint on the textures and smells of food during their first six months and become reluctant to accept anything unfamiliar afterward — a behavior known as food fixation. A ferret that has only ever eaten one kibble may flatly refuse a new one, which becomes a serious problem if that product is discontinued or recalled. The defense is to rotate among two or three acceptable brands from kithood so the ferret remains flexible. For older ferrets that are already fixated, transition slowly.
          </p>

          <h2 id="transition">Transitioning Brands</h2>
          <p>
            Change foods over 7–14 days, mixing an increasing proportion of the new kibble into the old. Abrupt changes can cause loose stool, and a fixated ferret may simply stop eating, which is dangerous given how quickly ferrets can become hypoglycemic. If a ferret refuses the new food entirely, slow down further and consider crushing a little new kibble into a meat-based gravy to introduce the smell. Never let a ferret go without eating for an extended period during a transition.
          </p>

          <AffiliateDisclosure variant="inline" siteId="ferret-com" />

          <h2 id="picks">Kibbles That Fit the Profile</h2>
          <p>
            Three commercial dry diets whose published ingredient and macronutrient panels line up with the animal-first, low-carbohydrate window described above. This is a documented-spec comparison, not a hands-on test: inclusion reflects published panels and adoption patterns in keeper communities and at exotic-mammal shelters, not a lab evaluation.
          </p>
          <ScoreMethodology />
          <ReviewCard
            id="wysong-epigen-90"
            badge="Premium Tier"
            badgeEmoji="🥇"
            name="Wysong Epigen 90"
            subtitle="Starch-free, animal-first, lowest commercial carb load in wide ferret use"
            score={9.3}
            winner
            description={
              <p>The lowest-carbohydrate commercial kibble in wide ferret-keeping use. The panel reads as named meats and organ meats, and the starch-free system drives carbohydrate by difference into the low single digits. The default choice when insulinoma risk is the priority. Premium price per pound, and not always stocked in chain pet aisles.</p>
            }
            specs={[
              { label: 'Protein (dry-matter)', value: '~60%', highlight: 'good' },
              { label: 'Fat (dry-matter)', value: '~16%' },
              { label: 'Carbohydrate', value: 'Single digits', highlight: 'good' },
              { label: 'Grain-free', value: 'Yes', highlight: 'good' },
              { label: 'Distribution', value: 'Direct + specialty pet retail' },
            ]}
            pros={['Lowest commercial carb load in wide ferret use', 'Animal-first throughout', 'Starch-free system', 'Suitable for insulinoma-prone adults']}
            cons={['Premium price', 'Not always stocked at supermarket pet aisles']}
            price="$30–50 / 5 lb"
            ctaText="Find Wysong Epigen 90"
            ctaHref="/go/wysong/epigen-90?s=diet-best-ferret-kibble"
            ctaAffiliateProgram="wysong"
            ctaAffiliateProduct="epigen-90"
          />
          <ReviewCard
            id="marshall-premium-diet"
            badge="Mid Tier"
            badgeEmoji="🛒"
            name="Marshall Premium Ferret Diet"
            subtitle="Ferret-specific formulation, widely stocked, in-range macros"
            score={8.0}
            description={
              <p>The reference mid-tier ferret kibble in US pet retail — formulated specifically for ferrets rather than adapted from cat food, with a protein and fat profile in the working ferret range. The ingredient panel is imperfect (some plant protein) but acceptable for healthy adults, and the per-pound price is materially lower than the premium tier. The most likely appropriate brand to find on a chain shelf at short notice.</p>
            }
            specs={[
              { label: 'Protein (dry-matter)', value: '~38%', highlight: 'good' },
              { label: 'Fat (dry-matter)', value: '~20%', highlight: 'good' },
              { label: 'Carbohydrate', value: 'Mid teens', highlight: 'warn' },
              { label: 'Ferret-specific', value: 'Yes', highlight: 'good' },
              { label: 'Distribution', value: 'National chain pet retail' },
            ]}
            pros={['Ferret-specific formulation', 'Widely available', 'Affordable per pound', 'Long manufacturer track record in ferret retail']}
            cons={['Higher carb than premium tier', 'Plant protein in ingredient list']}
            price="$15–25 / 4 lb"
            ctaText="Find Marshall Premium Ferret Diet"
            ctaHref="/go/marshall/premium-ferret-diet?s=diet-best-ferret-kibble"
            ctaAffiliateProgram="marshall"
            ctaAffiliateProduct="premium-ferret-diet"
          />
          <ReviewCard
            id="carniwhole"
            badge="Direct-to-Consumer"
            badgeEmoji="📦"
            name="Carniwhole Ferret Food"
            subtitle="Direct-to-consumer, published macros, subscription-shipped"
            score={8.2}
            description={
              <p>A direct-to-consumer ferret food favoured by keepers who want ingredient transparency and a fresher product than long-shelf-stable kibble. Carniwhole publishes its ingredient and macronutrient panel and ships on a subscription model. Appeal: transparency and freshness. Trade-off: subscription logistics, no retail backup, and a shorter community track record than Marshall or Wysong.</p>
            }
            specs={[
              { label: 'Protein source', value: 'Animal-first, named meats', highlight: 'good' },
              { label: 'Distribution', value: 'Direct only (no retail)' },
              { label: 'Subscription model', value: 'Yes' },
              { label: 'Smaller-batch sourcing', value: 'Yes', highlight: 'good' },
            ]}
            pros={['Ingredient transparency', 'Fresh product', 'Animal-first panel', 'Direct support from a smaller brand']}
            cons={['Subscription logistics', 'No retail backup', 'Shorter community track record than Marshall or Wysong']}
            price="Subscription pricing"
            ctaText="Visit Carniwhole"
            ctaHref="/go/carniwhole/ferret-diet?s=diet-best-ferret-kibble"
            ctaAffiliateProgram="carniwhole"
            ctaAffiliateProduct="ferret-diet"
          />

          <h2 id="sources">Sources</h2>
          <p>
            Ingredient and macronutrient guidance draws on Quesenberry KE and Carpenter JW (eds.), <em>Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery</em> (Saunders/Elsevier), and Carpenter JW, <em>Exotic Animal Formulary</em>. The carbohydrate–insulinoma association is discussed in the <em>Veterinary Clinics of North America: Exotic Animal Practice</em> literature on ferret endocrine disease. The American Ferret Association publishes an owner-facing nutrition statement consistent with this framework. Locate primary sources by title, as URLs change.
          </p>
          <p className="text-sm text-brand-text-light">
            This page describes how to evaluate a diet, not a prescription for an individual animal. A ferret with a diagnosed condition should have diet decisions supervised by a veterinarian familiar with ferrets.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
