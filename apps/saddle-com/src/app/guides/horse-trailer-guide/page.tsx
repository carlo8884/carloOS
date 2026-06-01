import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, ReviewCard, ScoreMethodology, AffiliateDisclosure } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'saddle-com', title: 'Horse Trailer Guide — Buying, Types, Loading | Saddle.com', description: 'Horse trailer types (straight-load, slant-load, stock), what to inspect when buying used, loading a reluctant horse, and trailering safety for horse and driver.', path: '/guides/horse-trailer-guide', type: 'article' })
const schema = buildArticleSchema({ siteId: 'saddle-com', title: 'Horse Trailer Guide', description: 'Buying, types, loading, and trailering safety for horse trailers.', url: 'https://saddle.com/guides/horse-trailer-guide', imageUrl: '', authorName: 'Saddle.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function HorseTrailerGuidePage() {
  return (
    <ArticleLayout siteId="saddle-com"
      hero={{ title: 'Horse Trailer Guide', subtitle: 'A horse trailer is one of the largest equipment investments an equestrian makes — and one of the most safety-critical. A reliable, well-maintained trailer is essential for veterinary emergencies, show travel, and trail riding access. Understanding the types, what to inspect when buying used, and how to operate safely makes the difference between a tool and a liability.', category: 'Equestrian Guide', authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'May 2025', readTime: '10 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides/saddle-fit-guide' }, { name: 'Horse Trailer Guide', href: '/guides/horse-trailer-guide' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Trailer Types</div>
          {[['Straight-load bumper pull', 'Most affordable · Horses face forward · Easier to find · 2-horse capacity'], ['Slant-load bumper pull', 'Horses face diagonal · More comfortable many claim · More horses per length'], ['Stock trailer', 'Open sides with bars · Multiple horses · Cows too · Economical'], ['Gooseneck', 'Attaches over truck bed · More stable than bumper pull · Larger capacity'], ['Living quarters', 'Gooseneck with tack/sleeping space · Show circuit standard · Expensive']].map(([type, desc]) => (
            <div key={type} className="py-2 border-b border-brand-border last:border-0">
              <div className="text-xs font-bold text-brand-dark">{type}</div>
              <div className="text-2xs text-brand-text-light">{desc}</div>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Horse First Aid Guide', href: '/guides/horse-first-aid-guide' }, { label: 'Buying First Horse', href: '/guides/buying-first-horse' }, { label: 'Trailer Loading Guide', href: '/guides/trailer-loading-guide' }]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Horse Care Guides" subtitle="Equipment and care guides." source="guides-trailer" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Bumper Pull vs Gooseneck</h2>
        <p>The fundamental trailer choice: bumper pull (attaches to a standard receiver hitch on the truck) versus gooseneck (attaches over the truck's bed via a ball hitch in the bed). Bumper pulls are more accessible — most trucks can pull a 2-horse bumper pull with appropriate towing capacity — and more affordable. Gooseneck trailers are more stable, particularly at highway speeds with loaded horses, and the hitch weight is distributed more favorably over the truck's rear axle. For 2-horse local transport, a quality bumper pull is entirely appropriate. For larger capacity, long distances, or show circuit use, the gooseneck's stability advantages become more significant.</p>

        <h2>Buying Used — What to Inspect</h2>
        <p>The floor is the most critical inspection point in a used horse trailer — a failed trailer floor during transport can kill a horse. Inspect the floor by: removing the mats (all of them — mats hide rot), probing the floor with an awl or screwdriver, and checking every square foot for soft spots, rot, or rust-through. Aluminum trailers don't rot but the wood floor over the frame can. Steel trailers rust. Any floor soft spots or rust-through is a disqualifier unless priced to reflect a full floor rebuild.</p>
        <p>Additional inspection points: wheel bearings (spin each wheel — roughness or noise is a bearing problem), brakes (each wheel should have functional electric or hydraulic brakes), lights (all running lights, brakes, turn signals), hitch and safety chains (wear and integrity), latches and dividers (all must function smoothly), roof and seams (water intrusion causes floor rot), and ventilation (adequate for horse comfort in summer).</p>
        <p>Have a used trailer inspected by a trailer mechanic before purchase — the cost of a pre-purchase inspection ($100-200) is a small fraction of repair costs for hidden problems. Particularly verify wheel bearing condition — failed wheel bearings cause trailer fires from heat and have caused fatalities.</p>

        <h2>Loading a Reluctant Horse</h2>
        <p>A horse that refuses to load is one of the most common horse management problems. The causes are usually one of: prior negative experience with trailers, inadequate training, claustrophobia in the enclosed space, or a specific fear trigger (noise, rattling, darkness). The solution in all cases is the same: desensitization through progressive exposure with positive reinforcement — not force.</p>
        <p>The approach: start with the trailer parked, doors open, ramp or step down. Feed the horse near the trailer over multiple sessions, then at the trailer entrance, then with front feet on, then step by step until loading is comfortable. This may take days to weeks for a seriously loading-resistant horse but produces a reliably loading horse. Rushing or forcing creates a worse loading problem and a dangerous situation. For a loading emergency (the horse needs to be at a vet now), a veterinarian can sedate the horse for a single loading event — this is the correct tool when there is no time for training.</p>

        <h2>Trailering Safety</h2>
        <p>Towing a loaded horse trailer requires different driving technique than towing empty or towing cargo: increase following distance significantly (loaded trailers require 2-3× the stopping distance), accelerate and brake gradually (horses lose balance with sudden changes), take turns slowly and wide, check mirrors continuously for horse movement, and never exceed speeds where trailer sway becomes a risk (typically 65 mph maximum with a loaded horse trailer, less if any sway is felt).</p>
        <p>Before every trip: verify tire pressure on both truck and trailer (trailer tires are the most common blowout cause — check cold pressure), check hitch connection and safety chains, verify all lights are functional with a second person walking the trailer, ensure horses have hay to occupy them during travel, and know the route including low bridges (horse trailers with tall horses require attention to clearance). Water horses before loading for long trips and plan rest stops for hauls over 4-5 hours.</p>

        <AffiliateDisclosure variant="inline" siteId="saddle-com" />

        <h2 id="picks">Trailering Supplies — Picks</h2>
        <p>
          Two picks tied to the safety and long-haul sections above: a tire-pressure monitoring system (the article calls out trailer tire failure as the most common blowout cause and a documented fatality source), and a trailer-mounted hay bag for hauls beyond 2 hours. This is a documented-spec comparison drawing on widely-stocked products in US equestrian retail; this page does not claim hands-on testing.
        </p>
        <ScoreMethodology />
        <ReviewCard
          id="trailer-tpms"
          badge="Safety-Critical"
          badgeEmoji="🚨"
          name="Trailer Tire Pressure Monitoring System (TPMS)"
          subtitle="Real-time tire-pressure and temperature monitoring from the truck cab"
          score={9.0}
          winner
          description={
            <p>The single most-cited preventable trailer disaster is wheel-bearing or under-inflated-tire failure on a loaded horse trailer — which often produces a tire fire, possible rollover, and risk to the horses inside. A wireless TPMS replaces the screw-on valve caps with sensors that report tire pressure and temperature to a cab display in real time. Alerts on rapid pressure loss or temperature rise (the early signal of a bearing or tire problem) give you minutes of warning instead of seconds. TST, EEZ Tire, and Tire-Safeguard are the standard brands in the equestrian and RV markets.</p>
          }
          specs={[
            { label: 'Sensor type', value: 'Wireless valve-stem cap', highlight: 'good' },
            { label: 'Alerts', value: 'Pressure loss + temperature rise', highlight: 'good' },
            { label: 'Display', value: 'In-cab unit, battery- or USB-powered' },
            { label: 'Coverage', value: '4 sensors (trailer-only) or 6+ (truck + trailer)' },
          ]}
          pros={['Minutes of warning vs no warning on the highest-impact trailer failure mode', 'Battery life on sensors is years', 'Re-usable across trailers (just move the sensors)']}
          cons={['Sensors can be stolen if left on the trailer publicly — bring them with you for long-term parking', 'Cab unit needs reliable power source (most have battery + USB)', 'Initial pairing is fiddly on some brands']}
          price="$150–350"
          ctaText="Find trailer TPMS"
          ctaHref="/go/smartpak/trailer-tpms?s=guides-horse-trailer-guide"
          ctaAffiliateProgram="smartpak"
          ctaAffiliateProduct="trailer-tpms"
        />
        <ReviewCard
          id="trailer-hay-bag"
          badge="Long-Haul"
          badgeEmoji="🌾"
          name="Trailer Hay Bag (Slow-Feed Mesh)"
          subtitle="Mounted hay bag designed for trailer use, slow-feed mesh to extend eating time"
          score={8.3}
          description={
            <p>For any haul over about 90 minutes the article&apos;s advice — &quot;ensure horses have hay to occupy them during travel&quot; — needs a trailer-specific hay bag. Solid mounting (snaps or carabiners) so it stays put on rough roads; slow-feed mesh (1–1.5″ openings) so a stressed horse doesn&apos;t inhale a flake in 15 minutes; large enough capacity for the trip duration. Most trailer hay bags are nylon or canvas; canvas wears better long-term but nylon is lighter and cheaper.</p>
          }
          specs={[
            { label: 'Mounting', value: 'Snaps / carabiners to trailer fixtures', highlight: 'good' },
            { label: 'Mesh', value: 'Slow-feed 1–1.5″', highlight: 'good' },
            { label: 'Capacity', value: 'Half-bale typical' },
            { label: 'Material', value: 'Canvas (durable) or nylon (lighter)' },
          ]}
          pros={['Reduces travel stress', 'Slow-feed mesh keeps hay available for the duration of the haul', 'Mountable to most trailer fixtures with carabiners']}
          cons={['Nylon bags fade and weaken in UV after a few seasons of outdoor storage', 'Cheap velcro closures fail on rough roads — buy snap-closure', 'Will not replace stopping for water on long hauls']}
          price="$20–55"
          ctaText="Find trailer hay bags"
          ctaHref="/go/smartpak/trailer-hay-bag?s=guides-horse-trailer-guide"
          ctaAffiliateProgram="smartpak"
          ctaAffiliateProduct="trailer-hay-bag"
        />
      </div>
    </ArticleLayout>
  )
}
