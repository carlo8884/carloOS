import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'saddle-com', title: 'Horse Trailer Guide — Buying, Types, Loading & Trailering Safety | Saddle.com', description: 'Horse trailer types (straight-load, slant-load, stock), what to inspect when buying used, loading a reluctant horse, and trailering safety for horse and driver.', path: '/guides/horse-trailer-guide', type: 'article' })
const schema = buildArticleSchema({ siteId: 'saddle-com', title: 'Horse Trailer Guide', description: 'Buying, types, loading, and trailering safety for horse trailers.', url: 'https://saddle.com/guides/horse-trailer-guide', imageUrl: '', authorName: 'Victoria Marsh, CSF', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function HorseTrailerGuidePage() {
  return (
    <ArticleLayout siteId="saddle-com"
      hero={{ title: 'Horse Trailer Guide', subtitle: 'A horse trailer is one of the largest equipment investments an equestrian makes — and one of the most safety-critical. A reliable, well-maintained trailer is essential for veterinary emergencies, show travel, and trail riding access. Understanding the types, what to inspect when buying used, and how to operate safely makes the difference between a tool and a liability.', category: 'Equestrian Guide', authorName: 'Victoria Marsh, CSF', authorCredentials: 'Certified Equine Professional', authorAvatar: '🐴', publishedAt: 'May 2025', readTime: '10 min' }}
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
      </div>
    </ArticleLayout>
  )
}
