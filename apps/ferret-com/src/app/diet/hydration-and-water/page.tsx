import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Hydration & Water — Bowl vs Bottle | Ferret.com',
  description:
    'How ferrets drink and stay hydrated: bowl versus bottle, daily intake, dehydration warning signs, dietary moisture, and water safety in hot weather.',
  path: '/diet/hydration-and-water',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Hydration & Water',
  description:
    'A reference on ferret water needs: bowl versus bottle, daily intake, dehydration signs, dietary moisture, and hot-weather safety.',
  url: 'https://ferret.com/diet/hydration-and-water',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const med = buildMedicalWebPageSchema({
  name: 'Ferret Hydration & Water',
  description:
    'Reference on hydration and water provision for domestic ferrets.',
  url: 'https://ferret.com/diet/hydration-and-water',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})
const combined = combineSchemas(schema, med)

export default function HydrationAndWaterPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Ferret Hydration & Water',
          subtitle:
            'Water is the easiest part of ferret care to get wrong by accident — a clogged sipper bottle on a warm afternoon can put a small carnivore into a dehydration crisis surprisingly fast. This page covers how ferrets prefer to drink, how much they need, the warning signs of dehydration, and the seasonal hazards to watch.',
          category: 'Diet & Nutrition',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '8 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Diet', href: '/diet' },
          { name: 'Hydration & Water', href: '/diet/hydration-and-water' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Bowl vs Bottle', href: '#bowl-bottle' },
                { label: 'How Much Water', href: '#intake' },
                { label: 'Dietary Moisture', href: '#moisture' },
                { label: 'Signs of Dehydration', href: '#dehydration' },
                { label: 'Hot Weather & Heat Stress', href: '#heat' },
                { label: 'Water Quality', href: '#quality' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Whole-Prey vs Kibble', href: '/diet/whole-prey-vs-kibble' },
                { label: 'Weight Management', href: '/diet/weight-management' },
                { label: 'Cage Setup', href: '/care/cage-setup' },
                { label: 'Diet & Nutrition Hub', href: '/diet' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Nutrition Notes"
              subtitle="Evidence-based ferret feeding, monthly."
              source="diet-hydration-and-water"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <h2 id="bowl-bottle">Bowl vs Bottle</h2>
          <p>
            Most ferrets drink more readily and more comfortably from a <strong>heavy ceramic bowl</strong> than from a sipper bottle. A bowl lets a ferret lap naturally and in volume; a bottle's ball valve releases water a drop at a time, which is slow and can frustrate a thirsty animal. The practical drawback of a bowl is that ferrets are diggers and tippers, so use a heavy, low, wide-based ceramic dish, or one that clips to the cage bars, and expect to refresh it more than once a day.
          </p>
          <p>
            A sipper bottle is useful as a <strong>backup</strong> — it stays clean and spill-free — but should not be the only water source. The classic failure mode is a clogged or air-locked ball valve in a warm room: the ferret appears to have "water available" while actually getting none. If you use a bottle, check daily that it actually dispenses, and ideally offer a bowl as well.
          </p>

          <h2 id="intake">How Much Water</h2>
          <p>
            Ferrets are small, so absolute volumes are modest, but they are also active and run a high metabolism, so consistent access matters more than any target number. Intake varies with diet (kibble feeders drink more than raw feeders, see below), ambient temperature, and activity. Rather than measuring milliliters, watch the bowl: a ferret that suddenly drinks much more or much less than usual is worth noting, as both polydipsia and reduced drinking can signal illness.
          </p>

          <h2 id="moisture">Dietary Moisture</h2>
          <p>
            Diet meaningfully affects free-water needs. Dry kibble is only about 8–10% water, so kibble-fed ferrets rely heavily on their drinking water to stay hydrated. Raw and whole-prey diets are 65–75% water, supplying much of a ferret's hydration through food — which is one of the quieter advantages of raw feeding (see <a href="/diet/whole-prey-vs-kibble">whole-prey vs kibble</a>). This does not mean raw-fed ferrets need no water; it means kibble-fed ferrets need especially reliable water access.
          </p>

          <h2 id="dehydration">Signs of Dehydration</h2>
          <p>
            Dehydration in a small carnivore can progress quickly. Warning signs include lethargy, sunken or dull eyes, tacky or dry gums, reduced skin elasticity (a gently tented scruff that is slow to flatten), and reduced urine output. Dehydration is often secondary to another problem — heat, vomiting, diarrhea, or a ferret that has stopped eating and drinking because it is ill. Because ferrets can decline fast, a ferret showing these signs, especially alongside not eating, warrants prompt contact with a veterinarian familiar with ferrets rather than a wait-and-see approach.
          </p>

          <h2 id="heat">Hot Weather & Heat Stress</h2>
          <p>
            Ferrets tolerate cold far better than heat. They do not sweat effectively and are vulnerable to heat stress above roughly the high 70s to low 80s Fahrenheit, with risk rising sharply as temperatures climb. In warm conditions, ensure abundant fresh water, provide shade and airflow, and consider keeping the cage in the coolest part of the home. Never leave a ferret in a hot car or a sun-exposed enclosure. Heat stress is an emergency: a ferret that is flat, panting, or unresponsive in the heat needs immediate cooling and veterinary care.
          </p>

          <h2 id="quality">Water Quality</h2>
          <p>
            Clean, fresh water at all times is the standard. Refresh bowls daily and wash them regularly to prevent biofilm. Tap water that is safe for people is generally fine for ferrets; there is no need for special water unless your local supply has a known problem, in which case the same filtration you would use yourself is appropriate. The priority is simply that the water is present, clean, and actually accessible.
          </p>

          <h2 id="sources">Sources</h2>
          <p>
            Hydration, heat-stress vulnerability, and dietary-moisture considerations are covered in Quesenberry KE and Carpenter JW (eds.), <em>Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery</em> (Saunders/Elsevier), and Carpenter JW, <em>Exotic Animal Formulary</em>. Dehydration assessment reflects standard small-mammal clinical references. Locate primary publications by title.
          </p>
          <p className="text-sm text-brand-text-light">
            This page is general information, not individualized veterinary advice. A ferret showing signs of dehydration or heat stress should be seen promptly by a veterinarian familiar with ferrets.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
