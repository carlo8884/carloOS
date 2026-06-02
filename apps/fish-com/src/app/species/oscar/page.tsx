import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Oscar Fish Care Guide — Large Tank, Personality | Fish.com', description: 'Oscars are the most personable large cichlid. They recognize owners, beg for food, and rearrange their tank. 75+ gallons required, high protein diet.', path: '/species/oscar', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Oscar Fish Care Guide', description: 'Large tank requirements, personality, HITH disease, and feeding for Oscar cichlids.', url: 'https://fish.com/species/oscar', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function OscarPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Oscar Fish Care Guide', subtitle: 'Astronotus ocellatus — the most personable large cichlid in the hobby. Oscars recognize their owners, react to their approach, beg for food at feeding time, and rearrange decorations to suit their preferences. They can live 10–15 years and become genuinely interactive animals. The commitment: they require at minimum 75 gallons, produce enormous waste, and will eat anything smaller than themselves.', category: 'Species Guide — Intermediate', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Oscar', href: '/species/oscar' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Scientific name', 'Astronotus ocellatus'], ['Adult size', '12–18 inches'], ['Min tank', '75 gallons (1 oscar)'], ['Two oscars', '125+ gallons minimum'], ['Temperature', '74–81°F'], ['pH', '6.0–8.0 (adaptable)'], ['Lifespan', '10–15 years'], ['HITH', 'Most common disease — preventable']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'African Cichlid', href: '/species/african-cichlid' }, { label: 'Puffer Fish', href: '/species/puffer-fish' }, { label: 'Best Canister Filters', href: '/reviews/best-canister-filters' }]} />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-oscar" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Tank Size — The Most Common Mistake</h2>
        <p>Oscars are sold as juveniles (2–4 inches) in fish stores and grow to 12–18 inches within 12–18 months at the rate of approximately 1 inch per month in good conditions. A 30-gallon tank that seems spacious for a 3-inch juvenile is severely cramped for an 18-inch adult — and oscars do not stop growing until conditions limit them (stunted fish are unhealthy fish). Minimum tank for one oscar: 75 gallons. For two oscars: 125+ gallons. Two oscars in a 75-gallon tank will eventually result in one dead oscar when they reach territorial adult size.</p>
        <p>The waste production of a 15-inch oscar is significant — comparable to a heavily stocked community tank alone. Heavy filtration is required: canister filter rated for 3-4× tank volume, or multiple filters. Weekly 25-30% water changes are the baseline — Oscars in poor water quality develop HITH (see below) and their immune function declines. The tank maintenance commitment scales with the fish size.</p>

        <h2>HITH — Hole in the Head Disease</h2>
        <p>Hole-in-the-Head (HITH), also called Head and Lateral Line Erosion (HLLE), is the most common disease in captive oscars and cichlids generally. It presents as pitting lesions on the head and along the lateral line — small holes that can expand into significant tissue erosion. The appearance — small craters on the head — is unmistakable.</p>
        <p>Cause: HITH in oscars is associated with poor water quality (elevated nitrate above 20 ppm is consistently implicated), dietary deficiency (vitamin C and vitamin D deficiency), and possibly Hexamita or Spironucleus protozoan involvement. It is almost certainly a multifactorial condition where nutritional and water quality factors allow opportunistic pathogens to establish. Prevention: pristine water quality (nitrate under 20 ppm through large, frequent water changes), varied diet with high-quality commercial foods rather than exclusive feeder fish feeding, and vitamin supplementation if feeding a limited diet.</p>
        <p>Treatment: if caught early — water quality improvement and dietary correction allows the pits to partially heal. Active Hexamita/Spironucleus involvement: metronidazole (Seachem MetroPlex) in food and/or water. Advanced HITH with extensive tissue erosion has limited healing potential even with treatment — prevention is far more effective than cure.</p>

        <h2>Diet — What Oscars Should Actually Eat</h2>
        <p>A common and damaging practice: feeding oscars exclusively feeder goldfish or feeder minnows. Feeder fish are nutritionally incomplete (thiaminase-containing species like goldfish deplete vitamin B1), carry disease risk (feeder fish in pet store tanks are often disease reservoirs), and can contain external and internal parasites. An oscar fed exclusively feeder fish will develop nutritional deficiencies and HITH over years.</p>
        <p>Appropriate primary diet: high-quality large cichlid pellets (Hikari Cichlid Gold, New Life Spectrum Large Fish, Omega One Super Color). These are nutritionally complete and should form the majority of the diet. Supplement with frozen foods: frozen krill (excellent protein and color-enhancing carotenoids), frozen mysis shrimp, frozen silversides. Earthworms are an excellent live or frozen supplement. Feeder fish can be an occasional treat but should not be the dietary staple.</p>

        <h2>Personality and Interaction</h2>
        <p>Oscars develop genuine recognitions of their keepers. They come to the front of the tank when their owner approaches, ignore strangers, beg at feeding time with clear anticipation, and some learn to take food from fingers (be careful — oscar bites break skin). They also rearrange their tank — moving gravel, shifting decorations, uprooting any plants placed in the tank. This is not destructive behavior — it is territory management that is part of their normal behavioral repertoire. Oscar tanks should be decorated with items that can be moved without causing injury: large smooth rocks, driftwood, nothing sharp-edged or easily broken.</p>
        <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Oscar — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for oscar care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/oscar%20tank%20setup?s=species-oscar" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Oscar Setup on Amazon →</a>
            <a href="/go/chewy-brand/oscar%20tank%20setup?s=species-oscar" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

      </div>
      </ArticleLayout>
  )
}
