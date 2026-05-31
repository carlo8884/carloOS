import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, ReviewCard, ScoreMethodology, AffiliateDisclosure } from '@carloOS/ui'
import { buildArticleSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Cage Setup — Size, Bedding, Litter, Enrichment | Ferret.com',
  description:
    'Ferrets are not cage animals. Minimum cage size, multi-level layout, hammocks vs loose bedding, corner litter boxes, out-of-cage time, and ferret-proofing the home.',
  path: '/care/cage-setup',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Cage Setup',
  description:
    'Practical cage and habitat guidance for domestic ferrets — sizing, multi-level layout, bedding, litter training, enrichment, out-of-cage time, and ferret-proofing.',
  url: 'https://ferret.com/care/cage-setup',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})
const combined = combineSchemas(schema)

export default function FerretCageSetupPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Ferret Cage Setup',
          subtitle:
            'A ferret cage is the bedroom, not the house. Ferrets sleep 14–18 hours a day, and during their waking 6–10 hours they need to be out of the cage exploring, playing, and running. The right cage is what they come back to between play sessions — secure, vertically interesting, and clean.',
          category: 'Ferret Care',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'May 2026',
          readTime: '12 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ferret Care', href: '/care/cage-setup' },
          { name: 'Cage Setup', href: '/care/cage-setup' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Sizing & Bar Spacing', href: '#sizing' },
                { label: 'Multi-Level Layout', href: '#layout' },
                { label: 'Bedding — Hammocks Over Shavings', href: '#bedding' },
                { label: 'Litter Box Training', href: '#litter' },
                { label: 'Enrichment & Toys', href: '#enrichment' },
                { label: 'Out-of-Cage Time', href: '#out-of-cage' },
                { label: 'Ferret-Proofing the Home', href: '#ferret-proof' },
                { label: 'Cage Picks', href: '#cage-picks' },
                { label: 'Bedding & Accessories', href: '#bedding-picks' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Diet Basics', href: '/care/diet-basics' },
                { label: 'Insulinoma', href: '/health/insulinoma' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Evidence-based ferret husbandry, monthly."
              source="care-cage-setup"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <h2 id="sizing">Cage Sizing and Bar Spacing</h2>
          <p>
            The American Ferret Association recommends a minimum cage floor area of roughly 24 × 24 inches with a minimum height of 18 inches per ferret, with strong preference for multi-level cages that increase usable habitat without growing the footprint. For two ferrets — and the practical default is two ferrets, because ferrets are social and a single ferret in an empty household is an under-stimulated ferret — most keepers settle on a 36 × 24-inch or larger footprint with at least three levels.
          </p>
          <p>
            Bar spacing matters more than total cage size for safety. <strong>One inch (2.5 cm) or less</strong> is the working ceiling for adult ferrets; <strong>half an inch or less</strong> is appropriate for kits, who can squeeze through openings that look implausibly small. A ferret can fit through any opening that its skull will pass through; the body deforms around the skeleton. Bars wider than one inch are how kits escape from "ferret-safe" cages.
          </p>
          <p>
            Other cage hardware to check on first inspection: door latches that a ferret cannot operate (ferrets are skilled at opening simple cam-latches and slide-bolts; carabiner-secured doors are standard), no large gaps where shelves meet walls, and a fully removable bottom tray for cleaning. Wire-floor cages are a defect — ferret feet are not designed for grid flooring, and bumblefoot and chronic foot abrasion are documented in the exotic-pet veterinary literature in ferrets housed on wire. The floor should be solid plastic or covered with a fitted liner.
          </p>

          <h2 id="layout">Multi-Level Layout</h2>
          <p>
            Ferrets are vertical climbers. A three-level cage with stable ramps gives them more usable habitat per square foot than a single-level model of the same footprint. Practical guidelines:
          </p>
          <ul>
            <li><strong>Ramps should be covered.</strong> A bare metal grid ramp is a fall risk. Most quality cages ship with PVC or fleece-covered ramps; if not, fleece ramp covers are inexpensive and standard.</li>
            <li><strong>No level should be more than 2 feet above the level below.</strong> Ferrets are not cats; they do not always land well. Falls of 3+ feet onto a hard surface are a documented cause of fractures in pet ferrets, particularly in older animals with reduced agility.</li>
            <li><strong>Hammocks across the upper third of the cage</strong> are the ferret default sleeping location. Most ferrets will preferentially sleep in hammocks or sleep sacks over any other option offered.</li>
            <li><strong>Litter box on the lowest level, food and water on a middle level.</strong> Ferrets prefer not to eat next to where they eliminate.</li>
          </ul>

          <h2 id="bedding">Bedding — Hammocks and Sleep Sacks, Not Loose Material</h2>
          <p>
            Ferrets are <strong>burrowers</strong>, and the right way to satisfy that drive is enclosed fabric — sleep sacks, fleece tubes, covered hammocks, "cube" beds. The wrong way is loose bedding: cedar or pine shavings, paper pulp bedding, or any loose substrate piled in the cage.
          </p>
          <p>Two specific concerns with loose bedding:</p>
          <ul>
            <li><strong>Respiratory.</strong> Aromatic softwood shavings (cedar, untreated pine) release phenols that are documented respiratory irritants in small mammals. Not appropriate for an animal that sleeps face-in for 16 hours a day.</li>
            <li><strong>Ingestion and obstruction.</strong> Foreign-body GI obstruction is one of the most common surgical presentations in pet ferrets reported in the <em>Journal of Exotic Pet Medicine</em> and the <em>Veterinary Clinics of North America: Exotic Animal Practice</em>, with bedding among the substrates implicated.</li>
          </ul>
          <p>
            Use instead: machine-washable fleece liners cut to fit each level; commercial sleep sacks and hammocks (Marshall, The Ferret Store, small fabric sellers); fleece tunnels; and one designated dig box where loose-substrate behavior is allowed in a controlled way.
          </p>

          <h2 id="litter">Litter Box Training</h2>
          <p>
            Ferrets default to eliminating in corners. The trainable behavior is "use one of these specific corners". The untrainable behavior is "stop preferring corners over middle-of-the-room". Work with the instinct.
          </p>
          <ul>
            <li><strong>Use corner-shaped litter boxes</strong> (triangular, raised back walls). Marshall and Kaytee both sell ferret-appropriate models.</li>
            <li><strong>Multiple boxes — one per cage level, plus one or two in each room</strong> the ferret has free access to. A ferret 20 feet from the nearest box will not return to the cage to use it.</li>
            <li><strong>No clumping clay litter.</strong> Sodium bentonite is dangerous if ingested. Use paper-pellet litter (Yesterday’s News, CareFresh) or non-aromatic wood pellets.</li>
            <li><strong>Spot-clean daily, full-replace weekly.</strong> A ferret unhappy with the box will eliminate immediately outside it.</li>
            <li><strong>Reinforce, do not punish.</strong> Treat (high-protein, not sugary) when the box is used. On misses, clean with enzymatic cleaner and move the soiled paper into the box — the scent cue teaches the location.</li>
          </ul>
          <p>
            Realistic expectation: most ferrets settle at 80–90% reliability. Perfect compliance is rare; plan for periodic clean-up.
          </p>

          <h2 id="enrichment">Enrichment and Toys</h2>
          <p>
            Failure modes of an under-stimulated ferret: excessive cage chewing and bar biting, and behavioral problems — nipping, frustration vocalizations, repetitive pacing.
          </p>
          <ul>
            <li><strong>Tunnels.</strong> Highest-value enrichment per dollar. Flexible accordion tunnels, fleece tube tunnels, cardboard concrete-form tubes. Ferrets will spend hours running circuits.</li>
            <li><strong>Dig boxes.</strong> A storage tote filled with washed river rocks, ferret-safe plastic balls, or rice. The dig drive is strong and is best satisfied in a designated container, not a houseplant.</li>
            <li><strong>Rotation of toys.</strong> Ten toys, three in the cage at a time, rotated weekly. Novelty matters more than quantity. Hard rubber and durable plastic only.</li>
            <li><strong>Puzzle feeders.</strong> Low-carb treats hidden in egg cartons, snuffle mats, or commercial puzzle feeders.</li>
          </ul>
          <p>
            What to avoid: soft rubber (sneaker soles, rubber bands, erasers, latex — the classic ferret GI obstruction surgical finding), foam (cushions, earplugs, foam balls), and string-type toys with ingestible fibers.
          </p>

          <h2 id="out-of-cage">Out-of-Cage Time — Non-Negotiable</h2>
          <p>
            Ferrets are not cage animals. A ferret that lives in its cage 24 hours a day is an under-stimulated, frustrated, and ultimately unhealthy ferret. The working minimum across the exotic-pet veterinary literature and the AFA owner-education materials is <strong>four hours of supervised out-of-cage time per day</strong>, in a fully ferret-proofed space. Six to eight hours is closer to ideal. This is the same order-of-magnitude commitment as a dog — and it is the part of ferret ownership that most first-time owners underestimate.
          </p>
          <p>
            Out-of-cage time does not have to be one continuous block. Two morning hours and two evening hours, aligned with the ferret’s crepuscular activity peaks, work well for most household schedules.
          </p>

          <h2 id="ferret-proof">Ferret-Proofing the Home</h2>
          <p>
            A ferret will find every gap and hazard in a room within its first hour. Ferret-proofing differs from puppy-proofing on three points: ferrets squeeze through any opening their skull fits, they investigate by mouthing soft objects, and they climb anything with texture.
          </p>
          <ul>
            <li><strong>Gap-block anything wider than one inch</strong> at floor level. Behind and under appliances is the highest-risk zone — ferrets that crawl into appliance interiors and contact heating elements or moving parts are a recurring exotic-mammal emergency presentation.</li>
            <li><strong>Recliners.</strong> The most frequently cited ferret fatality source in keeper communities — a ferret asleep in the mechanism is crushed when someone sits or reclines. Lock recliners open or block the room. No exceptions.</li>
            <li><strong>Carpet edges and baseboards.</strong> Ferrets dig at loose edges; the rubber backing is an ingestion hazard.</li>
            <li><strong>Soft rubber and foam.</strong> Shoe soles, rubber bands, foam earplugs, soft erasers, foam piping — the GI obstruction rate from rubber and foam is the most-cited surgical presentation in pet ferret case reports.</li>
            <li><strong>Houseplants.</strong> Lilies, pothos, philodendron, dieffenbachia are common toxic offenders. When in doubt, out of reach.</li>
            <li><strong>Electrical cords, toilets with the lid up, and unattended human food</strong> round out the standard list.</li>
          </ul>

          <AffiliateDisclosure variant="inline" siteId="ferret-com" />

          <h2 id="cage-picks">Cage Picks</h2>
          <p>
            Two cages that come up consistently in keeper communities and at exotic-mammal shelters. Both are widely available; each fills a different price/use niche.
          </p>
          <ScoreMethodology />
          <ReviewCard
            id="critter-nation"
            badge="Best Overall"
            badgeEmoji="🏆"
            name="MidWest Critter Nation Double Unit (Model 162)"
            subtitle="Two-level, 36×25×62 inches, 1/2-inch bar spacing on lower portion"
            score={9.4}
            winner
            description={
              <p>The default recommendation across the ferret-keeper community. Originally designed for rats and similar small mammals, the Critter Nation’s footprint, height, and bar spacing all land in the right zone for ferrets. Two large solid-floor levels with a connecting ramp, full-width double doors on each level (excellent access for cleaning and for getting a stubborn ferret out), and casters for moving the cage. Single-level (Model 161) and three-level expansion options exist. Expect to spend an afternoon on assembly.</p>
            }
            specs={[
              { label: 'Dimensions', value: '36×25×62 in (double unit)' },
              { label: 'Levels', value: '2 large, solid PVC floor', highlight: 'good' },
              { label: 'Bar Spacing', value: '~0.5 in (kit-safe)', highlight: 'good' },
              { label: 'Door Access', value: 'Full-width double doors per level', highlight: 'good' },
              { label: 'Assembly', value: 'Multi-hour, two-person preferred', highlight: 'warn' },
            ]}
            pros={['Bar spacing kit-safe out of the box', 'Excellent door access', 'Casters for moving', 'Solid floor — no wire-floor injuries', 'Modular — add a single-unit on top']}
            cons={['Heavy and large — measure before buying', 'Assembly is non-trivial', 'Ramp can be slippery without fleece cover']}
            price="$200–280"
            ctaText="Find Critter Nation cages"
            ctaHref="https://www.midwesthomes4pets.com/critter-nation/"
            ctaAffiliateProgram="amazon"
            ctaAffiliateProduct="critter-nation"
          />
          <ReviewCard
            id="marshall"
            badge="Best Starter"
            badgeEmoji="🛠️"
            name="Marshall Designer Ferret Cage"
            subtitle="Smaller footprint, three levels, ships with hammocks and starter accessories"
            score={8.2}
            description={
              <p>Marshall is the most familiar brand to anyone who has bought a ferret at a US pet retailer, and their starter cage is genuinely workable as a first cage for one or two ferrets. Three levels, ferret-appropriate bar spacing, and an included hammock, ramp covers, and litter pan reduce the per-item shopping list. The trade-off is footprint: the Marshall is materially smaller than the Critter Nation, and most keepers eventually upgrade as they add ferrets or want more enrichment space.</p>
            }
            specs={[
              { label: 'Dimensions', value: '~30×18×40 in' },
              { label: 'Levels', value: '3', highlight: 'good' },
              { label: 'Bar Spacing', value: '~0.5 in', highlight: 'good' },
              { label: 'Included Accessories', value: 'Hammock, ramp covers, pan', highlight: 'good' },
              { label: 'Long-term Capacity', value: 'One ferret comfortably; two tight', highlight: 'warn' },
            ]}
            pros={['Ferret-appropriate bar spacing', 'Ships with starter accessories', 'Footprint fits smaller apartments', 'Widely available in US pet retail']}
            cons={['Outgrown by a two-ferret household', 'Smaller pan area than Critter Nation', 'Plastic shelf wear in heavy-use households']}
            price="$140–200"
            ctaText="Find Marshall ferret cages"
            ctaHref="https://www.marshallpet.com/"
            ctaAffiliateProgram="amazon"
            ctaAffiliateProduct="marshall-designer-cage"
          />

          <h2 id="bedding-picks">Bedding and Accessories</h2>
          <p>
            Once the cage is sorted, two add-ons that significantly improve ferret quality of life inside it.
          </p>
          <ReviewCard
            id="marshall-hammock"
            badge="Bedding Default"
            badgeEmoji="🛏️"
            name="Marshall Triple Hammock"
            subtitle="Fabric sleep hammock — the default ferret sleep surface"
            score={8.8}
            description={
              <p>Ferrets preferentially sleep in enclosed or supported fabric rather than flat surfaces. The triple hammock clips to the cage bars at multiple points, holds two ferrets comfortably, and the fabric is machine-washable. Marshall's hammock line is the reference choice in US pet retail — the dimensions, clip hardware, and fabric durability are calibrated for ferret use.</p>
            }
            specs={[
              { label: 'Material', value: 'Machine-washable fleece', highlight: 'good' },
              { label: 'Attachment', value: 'Multi-point bar clips', highlight: 'good' },
              { label: 'Capacity', value: '2 ferrets', highlight: 'good' },
              { label: 'Washable', value: 'Yes', highlight: 'good' },
            ]}
            pros={['Matches ferret hammock-sleep preference', 'Machine-washable', 'Widely available', 'Multi-point clip attachment stays secure']}
            cons={['Needs weekly washing in heavy-use households', 'Clips occasionally stiffen with repeated washing']}
            price="$12–20"
            ctaText="Find Marshall hammocks"
            ctaHref="https://www.marshallpet.com/"
            ctaAffiliateProgram="marshall"
            ctaAffiliateProduct="triple-hammock"
          />
          <ReviewCard
            id="kaytee-corner-pan"
            badge="Litter Pan"
            badgeEmoji="🔻"
            name="Kaytee Ferret Corner Litter Pan"
            subtitle="Triangular corner pan, raised rear wall, ferret-appropriate entry"
            score={8.3}
            description={
              <p>The Kaytee corner pan is the alternative to Marshall's equivalent in US chain pet retail, with a similar triangular footprint, low entry lip, and raised rear wall. Available at lower per-unit cost than the Marshall model and commonly sold in multi-packs for multi-cage or multi-room households.</p>
            }
            specs={[
              { label: 'Shape', value: 'Triangular corner', highlight: 'good' },
              { label: 'Entry lip', value: 'Low', highlight: 'good' },
              { label: 'Rear wall', value: 'Raised splash guard', highlight: 'good' },
              { label: 'Per-unit price', value: 'Lower than Marshall', highlight: 'good' },
            ]}
            pros={['Triangular shape aligns with corner-elimination behaviour', 'Multi-pack available', 'Lower per-unit cost', 'Widely stocked']}
            cons={['Slightly smaller footprint than Marshall equivalent — ferrets need to back in cleanly']}
            price="$8–14"
            ctaText="Find Kaytee ferret corner pans"
            ctaHref="/go/chewy-brand/kaytee-ferret-corner-pan"
            ctaAffiliateProgram="chewy-brand"
            ctaAffiliateProduct="kaytee-ferret-corner-pan"
          />

          <h2 id="sources">Sources</h2>
          <p>
            Cage sizing, bar spacing, and out-of-cage time recommendations are drawn from American Ferret Association (AFA) owner-education materials. Bedding, foreign-body, and respiratory-irritant discussions reference Quesenberry &amp; Carpenter, <em>Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery</em> (Saunders/Elsevier), and case literature in the <em>Journal of Exotic Pet Medicine</em> and the <em>Veterinary Clinics of North America: Exotic Animal Practice</em>. Product picks are widely-stocked products observed in keeper communities and at exotic-mammal shelters; this page does not claim hands-on testing.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
