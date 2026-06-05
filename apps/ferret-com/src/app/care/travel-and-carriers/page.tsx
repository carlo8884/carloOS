import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, EmailCapture, RelatedLinks, TableOfContents, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Traveling With a Ferret — Carriers & Car Trips | Ferret.com',
  description:
    'How to travel safely with a ferret: choosing a carrier, securing it in the car, temperature and water on the road, and reducing travel stress.',
  path: '/care/travel-and-carriers',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Traveling With a Ferret and Choosing a Carrier',
  description:
    'Carrier selection, car safety, temperature and hydration on the road, stress reduction, and the realities of air travel with a ferret.',
  url: 'https://ferret.com/care/travel-and-carriers',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})
const combined = combineSchemas(schema)

export default function TravelAndCarriersPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Travel & Carriers',
          subtitle:
            'Most ferret travel is short — a carrier ride to the vet and back. But the same principles that make a vet trip safe apply to a road trip or a move: the right carrier, a temperature-controlled vehicle, water on the road, and a plan for stress. Here is how to do it without turning a routine trip into an emergency.',
          category: 'Ferret Care',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '11 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ferret Care', href: '/care' },
          { name: 'Travel & Carriers', href: '/care/travel-and-carriers' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Choosing a Carrier', href: '#carrier' },
                { label: 'Securing It in the Car', href: '#car' },
                { label: 'Temperature on the Road', href: '#temperature' },
                { label: 'Water, Food & Litter', href: '#supplies' },
                { label: 'Reducing Travel Stress', href: '#stress' },
                { label: 'Longer Trips & Air Travel', href: '#long-trips' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Vet Visit Prep', href: '/health/vet-visit-prep' },
                { label: 'Heat Stroke Prevention', href: '/care/heat-stroke-prevention' },
                { label: 'Cage Setup', href: '/care/cage-setup' },
              ]}
            />
            <CrossPortfolioCard currentSite="ferret-com" contentType="care" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Evidence-based ferret husbandry, monthly."
              source="care-travel-and-carriers"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Care Hub', href: '/care' },
          { title: 'Traveling With a Ferret', href: '/ownership/traveling-with-a-ferret' },
          { title: 'Ferret Legality by State', href: '/ownership/ferret-legality-by-state' },
          { title: 'Vet Visit Prep', href: '/health/vet-visit-prep' },
        ]}
>
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
            reviewedBy="Editorial team"
          />

          <h2 id="carrier">Choosing a Carrier</h2>
          <p>
            A ferret carrier needs three things a generic small-pet box often lacks: secure latching, ventilation, and an interior the ferret cannot turn into an escape puzzle. A hard-sided plastic carrier of the type sold for cats and small dogs works well and is easy to clean if there is a litter accident. Soft-sided carriers are lighter and cozier but must have zippers a ferret cannot work open — ferrets are skilled at manipulating zippers and latches, and a determined ferret will test every seam.
          </p>
          <ul>
            <li><strong>Right size:</strong> large enough for the ferret to turn around, lie flat, and hold a small litter pan, but not so cavernous that it slides around inside on turns.</li>
            <li><strong>Ventilation on multiple sides</strong> so air moves and the interior does not become a heat trap.</li>
            <li><strong>Escape-proof closure:</strong> a latch or zipper a ferret cannot open. Many keepers add a clip or carabiner as backup, the same logic as cage-door security.</li>
            <li><strong>A familiar sleep sack or fleece liner inside</strong> gives the ferret somewhere to burrow and carries home scent, which lowers stress.</li>
          </ul>
          <p>
            This page describes carrier features editorially; it does not recommend a specific product to purchase.
          </p>

          <h2 id="car">Securing the Carrier in the Car</h2>
          <p>
            A carrier loose on a car seat becomes a projectile in a sudden stop and a misery for the ferret on every turn. Secure it: run the seat belt through the carrier's handle or strap loops, or wedge it on the floor behind a seat where it cannot slide. The back seat or footwell is safer than the front, away from any airbag.
          </p>
          <ul>
            <li>Never let a ferret roam loose in a moving vehicle — it will go for the pedals, the wiring, or any gap, and it can be injured or cause an accident.</li>
            <li>Keep the carrier out of direct sun coming through the windows, which can overheat the interior even with the air conditioning on.</li>
            <li>Drive smoothly; ferrets handle gentle, predictable motion far better than jerky stops and sharp turns.</li>
          </ul>

          <h2 id="temperature">Temperature on the Road</h2>
          <p>
            Heat is the single greatest travel danger to a ferret, because ferrets cannot sweat and overheat with frightening speed. The car's climate control must keep the cabin in the cool comfortable range — broadly the 60s into the low 70s Fahrenheit — for the whole trip, and the carrier must sit where that cooled air actually reaches it, not in a sun-baked corner.
          </p>
          <p>
            The non-negotiable rule: <strong>never leave a ferret in a parked car, even for a few minutes, even with windows cracked.</strong> A parked vehicle's interior climbs far above the outside temperature within minutes, and a ferret can suffer fatal heat stroke in the time it takes to run one errand. On warm days, plan trips so the ferret is never left in the vehicle. The full picture of ferret heat physiology and emergency cooling is in our <a href="/care/heat-stroke-prevention">heat stroke prevention</a> guide.
          </p>

          <h2 id="supplies">Water, Food, and Litter</h2>
          <p>
            For a short vet run, the ferret needs little beyond a comfortable, secure carrier. For anything longer, plan for water, food, and elimination.
          </p>
          <ul>
            <li><strong>Water:</strong> a spill-resistant clip-on water source, offered at stops rather than left sloshing during motion. A ferret will drink at rest stops. Dehydration compounds heat risk, so offer water regularly on warm-weather trips.</li>
            <li><strong>Food:</strong> ferrets have a fast metabolism and short gut transit, so do not expect them to go many hours without eating. Offer their normal food at stops; bring the diet they already eat rather than switching foods on the road, which invites digestive upset.</li>
            <li><strong>Litter:</strong> a small low-sided pan in a larger carrier, or simply plan stops and a clean-up kit. Line the carrier with an absorbent washable liner in case of accidents.</li>
          </ul>

          <h2 id="stress">Reducing Travel Stress</h2>
          <p>
            Most ferrets find travel mildly to moderately stressful, and a few signs — heavy panting, frantic scrabbling, or refusing to settle — warrant attention because panting can also signal overheating. Lower the baseline stress with familiar scent (the home sleep sack), a partially covered carrier so the ferret feels den-like and secure, and a calm, quiet vehicle. A bonded cage mate riding in the same carrier often settles both ferrets, provided they already live together harmoniously — see our <a href="/care/introducing-a-second-ferret">introducing a second ferret</a> guide for what "harmoniously" requires.
          </p>
          <p>
            For the specific case of a vet visit — the most common ferret trip — our <a href="/health/vet-visit-prep">vet visit prep</a> guide covers what to bring, how to describe symptoms, and why having an exotics-capable clinic identified in advance matters.
          </p>

          <h2 id="long-trips">Longer Trips and Air Travel</h2>
          <p>
            For a multi-day road trip or a move, the priorities scale up: maintain the temperature-controlled environment throughout, build in regular stops for water and food, never leave the ferret in the parked vehicle, and re-establish a familiar cage setup at the destination as quickly as possible so the ferret has a secure home base.
          </p>
          <p>
            Air travel is more involved and far less routine. Airline policies on ferrets vary widely and many carriers do not accept them in the cabin or as cargo at all; some jurisdictions restrict or prohibit ferrets entirely, which makes destination legality a real concern. Anyone planning to fly with a ferret should confirm the specific airline's current pet policy in writing and verify that ferrets are legal at the destination well before booking. Health documentation and a recent veterinary check are typically required. Because the rules change and differ by carrier and region, treat air travel as something to research case by case rather than assume.
          </p>

          <h2 id="sources">Sources</h2>
          <p>
            Travel-safety, thermoregulation, and metabolism discussion draws on Quesenberry &amp; Carpenter, <em>Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery</em> (Saunders/Elsevier), and American Ferret Association (AFA) owner-education materials. Airline and destination-legality policies vary and should be confirmed directly with the carrier and relevant authorities. This page is general guidance and does not recommend specific products to purchase. Return to the <a href="/care">Ferret Care hub</a>.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
