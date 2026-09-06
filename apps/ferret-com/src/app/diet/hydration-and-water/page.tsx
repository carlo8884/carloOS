import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, EmailCapture, RelatedLinks, TableOfContents, ReviewCard, ScoreMethodology, AffiliateDisclosure, CrossPortfolioCard } from '@carloOS/ui'
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
                { label: 'Bowl & Bottle Picks', href: '#picks' },
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
            <CrossPortfolioCard currentSite="ferret-com" contentType="diet" variant="sidebar" />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Diet Hub', href: '/diet' },
          { title: 'Diet Basics', href: '/care/diet-basics' },
          { title: 'Safe Treats', href: '/diet/safe-treats' },
          { title: 'Ferret Diarrhea Causes', href: '/health/ferret-diarrhea-causes' },
        ]}
>
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
            reviewedBy="Editorial team"
          />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the ferret-hydration checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Ferret-hydration checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the hydration notes that match
              the copy on this page — a heavy ceramic
              bowl as the primary source so a ferret
              can lap in volume, a sipper bottle only
              as a spill-free backup that is checked
              daily for a clogged valve, kibble-fed
              ferrets needing especially reliable
              water, and heat-stress risk above the
              high 70s. Educational hydration
              checklist, not a new product hop and
              not a substitute for an exotic-animal
              veterinarian. The existing ceramic-bowl
              and sipper-bottle Amazon searches stay
              below. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="ferret-com"
              title="Ferret-hydration checklist"
              subtitle="Email the bowl-first and backup-bottle notes. No spam."
              ctaText="Email my ferret-hydration checklist"
              source="diet-hydration-and-water-under-hero"
            />
          </div>

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

          <AffiliateDisclosure variant="inline" siteId="ferret-com" />

          <h2 id="picks">Bowl & Bottle Picks</h2>
          <p>
            The setup this page recommends is a heavy ceramic bowl as the primary water source, with a sipper bottle kept as a clean spill-free backup. Two options that fit that pattern, selected on published specs rather than a hands-on test.
          </p>
          <ScoreMethodology />
          <ReviewCard
            id="ceramic-water-bowl"
            badge="Primary Source"
            name="Heavy Ceramic Pet Water Bowl"
            subtitle="Low, wide, tip-resistant — lets a ferret lap naturally"
            score={8.8}
            winner
            description={
              <p>A heavy, low, wide-based ceramic dish is the primary water source most ferrets prefer — it lets them lap in volume the way a sipper bottle cannot, and the weight resists the digging and tipping ferrets are prone to. Refresh at least daily and wash regularly to prevent biofilm. A bar-clip version helps if your ferret still manages to flip a free-standing bowl.</p>
            }
            specs={[
              { label: 'Material', value: 'Glazed ceramic', highlight: 'good' },
              { label: 'Profile', value: 'Low and wide', highlight: 'good' },
              { label: 'Tip resistance', value: 'High (heavy base)', highlight: 'good' },
              { label: 'Cleaning', value: 'Dishwasher-safe (most)' },
            ]}
            pros={['Lets a ferret drink in natural volume', 'Heavy base resists tipping', 'Easy to clean, no biofilm traps', 'No mechanical valve to clog']}
            cons={['Ferrets may still dig in it', 'Needs refreshing more than once a day']}
            price="$8–18"
            ctaText="Find a Heavy Ceramic Bowl"
            ctaHref="/go/amazon-brand/heavy+ceramic+pet+water+bowl?s=diet-hydration-and-water"
            ctaAffiliateProgram="amazon-brand"
            ctaAffiliateProduct="heavy-ceramic-water-bowl"
          />
          <ReviewCard
            id="sipper-water-bottle"
            badge="Backup Source"
            name="Small-Animal Sipper Water Bottle"
            subtitle="Clean, spill-free backup — never the only source"
            score={7.5}
            description={
              <p>A sipper bottle earns its place as a clean, spill-free backup, not as the sole water supply. The ball valve dispenses slowly and can clog or air-lock in a warm room — the classic failure mode where a ferret looks like it has water but is getting none. If you use one, check daily that it actually dispenses and pair it with the ceramic bowl above.</p>
            }
            specs={[
              { label: 'Role', value: 'Backup, not primary', highlight: 'warn' },
              { label: 'Spill resistance', value: 'High', highlight: 'good' },
              { label: 'Failure mode', value: 'Valve can clog', highlight: 'warn' },
              { label: 'Mounting', value: 'Clips to cage bars' },
            ]}
            pros={['Stays clean and spill-free', 'Good travel and backup option', 'Easy cage mounting']}
            cons={['Slow drop-by-drop delivery', 'Ball valve can clog or air-lock', 'Must be checked daily — not a sole source']}
            price="$6–12"
            ctaText="Find a Sipper Water Bottle"
            ctaHref="/go/amazon-brand/small+animal+sipper+water+bottle?s=diet-hydration-and-water"
            ctaAffiliateProgram="amazon-brand"
            ctaAffiliateProduct="small-animal-water-bottle"
          />

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
