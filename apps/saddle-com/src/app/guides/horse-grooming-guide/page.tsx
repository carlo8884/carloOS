import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, ReviewCard, ScoreMethodology, AffiliateDisclosure } from '@carloOS/ui'
import { buildArticleSchema, buildHowToSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'saddle-com', title: 'Horse Grooming Guide — Tools, Sequence | Saddle.com', description: 'Complete horse grooming guide. The correct grooming sequence, essential tools, how to identify skin problems during grooming.', path: '/guides/horse-grooming-guide', type: 'article' })
const schema = buildArticleSchema({ siteId: 'saddle-com', title: 'Horse Grooming Guide', description: 'Grooming sequence, tools, and pre-ride routine for horses.', url: 'https://saddle.com/guides/horse-grooming-guide', imageUrl: '', authorName: 'Saddle.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const howTo = buildHowToSchema({ name: 'How to Groom a Horse', description: 'Step-by-step horse grooming routine for pre-ride preparation.', url: 'https://saddle.com/guides/horse-grooming-guide', totalTime: 'PT30M', steps: [
  { name: 'Secure the horse', text: 'Cross-tie or tie to a secure hitching post. Work in a safe area where the horse is accustomed to being groomed.' },
  { name: 'Curry comb', text: 'Use a rubber curry comb in circular motions to loosen mud, dried sweat, and dead hair. Work from neck to hindquarters on both sides. Avoid bony areas (legs, face, spine). This step does most of the actual cleaning.' },
  { name: 'Dandy brush', text: 'Firm-bristled brush in short flicking strokes following the hair direction. Removes the loosened debris from the curry comb step. Works from neck to tail, both sides. Can be used on legs.' },
  { name: 'Body brush', text: 'Soft-bristled brush for the finishing pass. Removes dust and fine particles. Can be used on face and lower legs. Restores coat sheen.' },
  { name: 'Hoof pick', text: 'Pick each hoof from heel to toe, clearing dirt, manure, and debris from the sulci (grooves beside the frog). Check for thrush (black, foul-smelling discharge), loose shoes, and bruising. This step is non-negotiable before riding.' },
  { name: 'Mane and tail', text: 'Detangle with a wide-tooth comb or fingers, working from ends upward. Use a detangler product if needed. Check for tangles, burs, or skin conditions at the tail base.' },
  { name: 'Face and ears', text: 'Soft cloth or soft brush for the face. Clean around eyes and nostrils. A horse that is comfortable with face handling is safer to work around.' },
  { name: 'Tack area check', text: 'After grooming, check the girth/cinch area, saddle area, and leg where boots will go for any swellings, rubs, or sensitivity before tacking up.' },
]})
const combined = combineSchemas(schema, howTo)
export default function HorseGroomingGuidePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="saddle-com"
        hero={{ title: 'Horse Grooming Guide', subtitle: 'Grooming is not cosmetic — it is the daily health inspection that keeps your horse safe to ride and allows you to detect developing problems before they become serious. A horse groomed correctly before riding is a horse whose tack area has been checked, whose feet have been picked, and whose skin has been assessed. This takes 20–30 minutes. Skipping it creates real risk.', category: 'Horse Care Guide', authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'May 2025', readTime: '8 min' }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides/saddle-fit-guide' }, { name: 'Horse Grooming', href: '/guides/horse-grooming-guide' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Essential Tools</div>
            {[['Rubber curry comb', 'Loosens mud and dead hair'], ['Dandy brush', 'Removes debris (firm bristles)'], ['Body brush', 'Finishing — soft bristles'], ['Hoof pick', 'Non-negotiable every ride'], ['Mane comb', 'Wide-tooth for tangles'], ['Soft cloth', 'Face and eye area'], ['Detangler spray', 'Mane and tail']].map(([t, d]) => (
              <div key={t} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{t}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Tack Cleaning Schedule', href: '/guides/tack-cleaning-schedule' }, { label: 'Leather Care Guide', href: '/guides/leather-care-guide' }, { label: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide' }]} />
          <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Equipment Guides" subtitle="Expert care and fitting guides." source="guides-grooming" />
        </>}
      >
        <div className="carloOS-article">
          <h2>Why Grooming Matters Beyond Appearance</h2>
          <p>Daily grooming is the primary health monitoring tool for horses. Handlers who groom regularly and thoroughly notice: the developing swelling over a tendon, the new rub mark from ill-fitting tack, the early signs of rain rot or ringworm, the sensitivity when a specific area is touched that indicates pain, the subtle weight loss visible from the topline, and the early discharge from an eye that indicates infection. These findings — discovered during grooming — allow early intervention before minor issues become serious.</p>

          <h2>The Hoof Pick — Every Single Time</h2>
          <p>No horse should be ridden with unpicked hooves. Rocks, manure compaction, and debris packed around the frog create bruising, stone bruise, and discomfort that the horse cannot communicate and the rider may interpret as behavioral problems. Thrush — a bacterial infection of the frog — begins as a soft, black, foul-smelling area in the central sulcus and lateral sulci. Caught early (during regular hoof picking), it is easily treated with topical antifungals and improved footing hygiene. Caught late, it invades sensitive tissue and causes lameness.</p>
          <p>Check each hoof for: foreign objects embedded in the sole or frog, loose or missing shoes, cracks in the hoof wall, unusual smell (thrush), warmth (inflammation), and bruising visible through the white sole.</p>

          <h2>What to Look For During Grooming</h2>
          <p><strong>Skin:</strong> Rain rot (Dermatophilus congolensis) appears as crusty, matted bumps along the topline and hindquarters. Ringworm appears as circular areas of hair loss with crusty centers. Sweet itch (mane and tail itching leading to hair loss and broken hairs) is a hypersensitivity to midge bites. All are contagious — isolate grooming tools used on affected horses.</p>
          <p><strong>Legs:</strong> Run your hands down each leg at every grooming. You are feeling for heat (inflammation), swelling (injury), and sensitivity (pain on palpation). A tendon that is warm and slightly swollen requires a veterinary call before riding — work on a compromised tendon causes serious injury that sidelines horses for months.</p>
          <p><strong>Weight and topline:</strong> Stand back and look at the horse from the side and behind. The topline (along the spine and over the hindquarters) should have muscling. A horse that is losing topline muscle may be losing weight, underfed, have back pain, or have a systemic health issue — worth noting and monitoring.</p>

          <h2>Post-Ride Grooming</h2>
          <p>After riding: rinse or scrape sweat from the girth area and under saddle, apply a sweat scraper, walk until cool before returning to the stable (a hot horse should not stand in a cold stable immediately). Pick hooves again after turnout or arena work — rocks picked up during riding should not stay in the hoof. A brief post-ride grooming also allows checking for new rubs from tack that indicates fit issues requiring attention.</p>

          <AffiliateDisclosure variant="inline" siteId="saddle-com" />

          <h2 id="picks">Grooming Kit Picks</h2>
          <p>
            Two picks that cover the essential-tools sidebar above: a hoof care set (the article&apos;s &ldquo;non-negotiable every ride&rdquo; tool) and a full grooming kit (curry / dandy / body brush / mane comb in one bundle). This is a documented-spec comparison drawing on widely-stocked products in US equestrian retail; this page does not claim hands-on testing.
          </p>
          <ScoreMethodology />
          <ReviewCard
            id="hoof-pick-brush"
            badge="Non-Negotiable"
            badgeEmoji="🪛"
            name="Hoof Pick + Brush Combination"
            subtitle="Pick on one end, stiff brush on the other — the everyday tool"
            score={9.0}
            winner
            description={
              <p>The single tool that should be in every grooming kit. Pick on one end for clearing the sulci and frog, stiff brush on the other for cleaning around the sole and frog after picking. Stainless-steel picks last decades; plastic-handled options work and cost less. Keep a second one in the trailer or car so &ldquo;I forgot the hoof pick&rdquo; never becomes a reason to ride with unpicked hooves.</p>
            }
            specs={[
              { label: 'Pick material', value: 'Steel (durable) or plastic (cheap)' },
              { label: 'Built-in brush', value: 'Yes', highlight: 'good' },
              { label: 'Use case', value: 'Daily / pre-ride / post-ride' },
              { label: 'Replacement cadence', value: 'Years (steel), 1–2 yrs (plastic)' },
            ]}
            pros={['Used every ride; the most-handled grooming tool', 'Cheap', 'Builds the daily-inspection habit (thrush, stone bruises, loose shoes)']}
            cons={['Easy to lose — keep spares', 'Cheap plastic handles fatigue and crack']}
            price="$5–18"
            ctaText="Find hoof picks"
            ctaHref="https://www.smartpakequine.com/"
            ctaAffiliateProgram="smartpak"
            ctaAffiliateProduct="hoof-pick-brush"
          />
          <ReviewCard
            id="grooming-kit-bundle"
            badge="Starter Kit"
            badgeEmoji="🧴"
            name="Grooming Kit Bundle (Curry + Dandy + Body Brush + Mane Comb)"
            subtitle="The 4-tool sequence in one purchase — Oster, Tough-1, Wahl, others"
            score={8.4}
            description={
              <p>A starter-bundle grooming kit puts the four sequence tools the article describes — rubber curry comb, stiff dandy brush, soft body brush, mane comb — in one purchase, usually with a tote. Brand choice matters less than picking firm-bristled tools that don&apos;t collapse after a season of use; mid-tier bundles ($25–60) outperform both the bargain $15 kits and the boutique $100+ kits on durability for the price. Add a sweat scraper and a soft face cloth separately.</p>
            }
            specs={[
              { label: 'Tools included', value: 'Curry, dandy, body brush, mane comb', highlight: 'good' },
              { label: 'Tote / storage', value: 'Usually included', highlight: 'good' },
              { label: 'Bristle quality', value: 'Mid-tier outperforms cheap bundles' },
              { label: 'Replacement cadence', value: '1–3 years' },
            ]}
            pros={['Whole grooming sequence in one purchase', 'Tote keeps the tools in one place at the barn', 'Cheaper than buying tools individually']}
            cons={['Bargain bundles use bristles that collapse fast', 'Sweat scraper and soft face cloth usually NOT included — buy separately', 'Mane combs in starter kits are often the weakest item']}
            price="$25–60"
            ctaText="Find grooming kit bundles"
            ctaHref="https://www.smartpakequine.com/"
            ctaAffiliateProgram="smartpak"
            ctaAffiliateProduct="grooming-kit-bundle"
          />
        </div>
      </ArticleLayout>
    </>
  )
}
