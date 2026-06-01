import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Senior Ferret Nutrition — Feeding the Older Ferret | Ferret.com',
  description:
    'How feeding changes for senior ferrets: maintaining protein, easing eating with dental wear, watching body condition, and the diseases that drive diet changes.',
  path: '/diet/senior-ferret-nutrition',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Senior Ferret Nutrition',
  description:
    'A reference on feeding older ferrets, covering protein needs, dental and appetite changes, body-condition monitoring, and disease-driven diet adjustments.',
  url: 'https://ferret.com/diet/senior-ferret-nutrition',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const med = buildMedicalWebPageSchema({
  name: 'Senior Ferret Nutrition',
  description:
    'Reference on dietary management of the aging domestic ferret.',
  url: 'https://ferret.com/diet/senior-ferret-nutrition',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})
const combined = combineSchemas(schema, med)

export default function SeniorFerretNutritionPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Senior Ferret Nutrition',
          subtitle:
            'Ferrets are considered senior from around four to five years of age. The diet rarely needs a dramatic overhaul, but it does need closer attention: protein stays high, eating gets harder as teeth wear, and several age-related diseases reshape what and how a ferret should be fed.',
          category: 'Diet & Nutrition',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '9 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Diet', href: '/diet' },
          { name: 'Senior Ferret Nutrition', href: '/diet/senior-ferret-nutrition' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'When a Ferret Becomes Senior', href: '#when' },
                { label: 'Protein Stays High', href: '#protein' },
                { label: 'Dental Wear & Easier Eating', href: '#dental' },
                { label: 'Body Condition & Muscle Loss', href: '#condition' },
                { label: 'Disease-Driven Diet Changes', href: '#disease' },
                { label: 'Hydration in Older Ferrets', href: '#hydration' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Kit vs Adult Feeding', href: '/diet/kit-vs-adult-feeding' },
                { label: 'Weight Management', href: '/diet/weight-management' },
                { label: 'Protein & Fat Requirements', href: '/diet/protein-and-fat-requirements' },
                { label: 'Diet & Nutrition Hub', href: '/diet' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Nutrition Notes"
              subtitle="Evidence-based ferret feeding, monthly."
              source="diet-senior-nutrition"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <h2 id="when">When a Ferret Becomes Senior</h2>
          <p>
            Ferrets are generally considered senior from around four to five
            years of age, though the threshold is a guideline rather than a hard
            line. The transition into the senior years is less about changing the
            food category and more about increasing the frequency of monitoring:
            weighing more often, watching how the ferret eats, and catching the
            age-related diseases early. Our{' '}
            <a href="/diet/kit-vs-adult-feeding">kit versus adult feeding guide</a>{' '}
            covers the life-stage progression that leads up to this point.
          </p>

          <h2 id="protein">Protein Stays High</h2>
          <p>
            A common misconception, borrowed from senior dog and cat advice, is
            that older animals need reduced protein. For a healthy senior ferret
            the opposite is true: an obligate carnivore needs high-quality animal
            protein throughout life, and a healthy older ferret should stay on a
            high-protein, high-fat, low-carbohydrate diet within the published
            targets in our{' '}
            <a href="/diet/protein-and-fat-requirements">protein and fat requirements guide</a>.
            Protein is only restricted when a specific diagnosed condition — most
            often advanced kidney disease — calls for it, and that decision belongs
            to a veterinarian, not to a general age rule.
          </p>
          <CalloutBox variant="warning" title="Do not cut protein on age alone">
            <p>
              Reducing protein for a healthy senior ferret can accelerate muscle
              loss and undernourishment. Protein adjustments should follow a
              diagnosis from an exotic-pet veterinarian, never an assumption based
              on the ferret&apos;s age.
            </p>
          </CalloutBox>

          <h2 id="dental">Dental Wear and Easier Eating</h2>
          <p>
            Older ferrets often have worn, broken, or extracted teeth, and dental
            disease is common with age. A senior ferret that has started leaving
            kibble, dropping food, or eating slowly may be finding hard kibble
            painful. Practical adjustments:
          </p>
          <ul>
            <li>
              <strong>Soften the kibble.</strong> Soaking dry food in warm water
              until it softens makes it far easier for a sore mouth to manage.
            </li>
            <li>
              <strong>Offer a meat-based soft option.</strong> A high-quality
              meat-based paste or a soft, complete diet keeps protein intake up
              when chewing is difficult.
            </li>
            <li>
              <strong>Schedule a dental check.</strong> Reluctance to eat hard
              food is a reason for a veterinary dental exam, not just a menu
              change — untreated dental disease is painful and progressive.
            </li>
          </ul>

          <h2 id="condition">Body Condition and Muscle Loss</h2>
          <p>
            Senior ferrets are prone to gradual muscle loss, and a slow decline in
            body condition is easy to miss day to day. Weigh the ferret regularly
            — a kitchen scale and a written log catch trends a hand cannot — and
            run body-condition checks as described in our{' '}
            <a href="/diet/weight-management">weight management guide</a>. Steady,
            unexplained weight loss in an older ferret is one of the most reliable
            early signals of disease and should prompt a veterinary work-up rather
            than simply more food.
          </p>

          <h2 id="disease">Disease-Driven Diet Changes</h2>
          <p>
            Several diseases that cluster in older ferrets reshape feeding:
          </p>
          <ul>
            <li>
              <strong>Insulinoma.</strong> This common senior-ferret tumor causes
              episodes of low blood sugar. Feeding management centers on frequent,
              meat-based meals and strict avoidance of sugary foods, all under
              veterinary direction. Specific feeding plans for an insulinoma ferret
              should come from the treating veterinarian.
            </li>
            <li>
              <strong>Kidney disease.</strong> Advanced renal disease is one of the
              few scenarios where a veterinarian may adjust protein, and it
              increases the importance of hydration.
            </li>
            <li>
              <strong>Dental and GI disease.</strong> Both can quietly suppress
              appetite and intake; a soft, palatable, meat-based diet helps maintain
              calories during treatment.
            </li>
          </ul>

          <h2 id="hydration">Hydration in Older Ferrets</h2>
          <p>
            Hydration matters more with age, especially with kidney involvement or
            a kibble-heavy diet. Make sure water is always easy to reach, consider
            adding moisture through softened food, and watch for the dehydration
            warning signs covered in our{' '}
            <a href="/diet/hydration-and-water">hydration and water guide</a>. A
            senior ferret that goes off both food and water needs prompt veterinary
            attention.
          </p>

          <h2 id="sources">Sources</h2>
          <p>
            Senior ferret nutritional needs, insulinoma feeding management, and the
            relationship between dental disease and intake are drawn from
            Quesenberry KE and Carpenter JW (eds.), <em>Ferrets, Rabbits, and
            Rodents: Clinical Medicine and Surgery</em> (Saunders/Elsevier), and the{' '}
            <em>Veterinary Clinics of North America: Exotic Animal Practice</em>{' '}
            literature on geriatric ferret medicine and endocrine disease. Locate
            primary publications by title.
          </p>
          <p className="text-sm text-brand-text-light">
            This page is general nutrition information, not individualized
            veterinary advice. Diet changes for a senior ferret with insulinoma,
            kidney disease, or dental disease should be supervised by a
            veterinarian familiar with ferrets.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
