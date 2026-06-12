import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, buildHowToSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'saddle-com', title: 'Tack Cleaning Schedule — Saddle, Bridle | Saddle.com', description: 'Complete tack cleaning schedule and leather care guide. What to clean after every ride, weekly deep clean protocol.', path: '/guides/tack-cleaning-schedule', type: 'article' })
const schema = buildArticleSchema({ siteId: 'saddle-com', title: 'Tack Cleaning Schedule', description: 'After-ride, weekly, and annual leather care for saddles and bridles.', url: 'https://saddle.com/guides/tack-cleaning-schedule', imageUrl: '', authorName: 'Saddle.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const howTo = buildHowToSchema({ name: 'How to Clean and Condition a Leather Saddle', description: 'Step-by-step leather saddle cleaning and conditioning process.', url: 'https://saddle.com/guides/tack-cleaning-schedule', steps: [
  { name: 'Remove loose dirt', text: 'Dry brush or wipe all leather surfaces with a dry cloth to remove loose dirt, hay, and debris before introducing any liquid.' },
  { name: 'Wipe with damp cloth', text: 'Wipe all leather with a slightly damp (not wet) cloth. Remove sweat, grime, and surface contamination. Do not soak leather — excess moisture damages grain structure.' },
  { name: 'Apply saddle soap', text: 'Apply Castile soap, Effax Leather Soap, or Leather Therapy Wash to a damp sponge. Work into all leather surfaces in small circular motions. Get into stitching lines and crevices.' },
  { name: 'Remove excess soap', text: 'Wipe off soap residue with a clean damp cloth. Soap left on leather attracts grime and can stiffen leather over time.' },
  { name: 'Condition the leather', text: 'Apply leather conditioner (Effax Leather Balsam, Leather Therapy Conditioner, or Passier Lederbalsam) with a soft cloth in thin, even layers. Allow to absorb — 15-30 minutes minimum.' },
  { name: 'Buff and hang to dry', text: 'Buff off any excess conditioner. Hang or rack the saddle in a cool, dry location — never in direct sun or near heat sources. Allow to dry completely before use.' },
]})
const combined = combineSchemas(schema, howTo)

export default function TackCleaningSchedulePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="saddle-com"
        hero={{ title: 'Tack Cleaning Schedule', subtitle: 'Leather is a living material that degrades without care and lasts decades with it. A consistent cleaning and conditioning schedule is the difference between tack that lasts 30 years and tack that fails in 5.', category: 'Leather Care Guide', authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'May 2025', readTime: '9 min' }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides' }, { name: 'Tack Cleaning', href: '/guides/tack-cleaning-schedule' }]}
        relatedLinks={[
          { title: 'Guides Hub', href: '/guides', category: 'Hub' },
          { title: 'Leather Care Guide', href: '/guides/leather-care-guide', category: 'Care' },
          { title: 'Tack Room Organization', href: '/guides/tack-room-organization', category: 'Care' },
          { title: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide', category: 'Fitting' },
          { title: 'Best Saddle Pads', href: '/reviews/best-saddle-pads', category: 'Reviews' },
          { title: 'Best English Saddles', href: '/reviews/best-english-saddles', category: 'Reviews' },
        ]}
        sidebar={<>
          <TableOfContents items={[{ label: 'After Every Ride', href: '#after-ride' }, { label: 'Weekly Deep Clean', href: '#weekly' }, { label: 'Monthly', href: '#monthly' }, { label: 'Annual', href: '#annual' }, { label: 'Products', href: '#products' }]} />
          <RelatedLinks title="Related Guides" links={[{ label: 'Leather Care Guide', href: '/guides/leather-care-guide' }, { label: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide' }, { label: 'Best Saddle Pads', href: '/reviews/best-saddle-pads' }, { label: 'Best English Saddles', href: '/reviews/best-english-saddles' }]} />
          <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Equipment Guides" subtitle="Expert reviews and care guides." source="guides-tack-cleaning" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Saddle.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
          <h2 id="after-ride">After Every Ride (5 Minutes)</h2>
          <p>This is the most important step — sweat is the primary enemy of leather. Sweat contains salt, amino acids, and enzymes that break down leather fiber structure. Allowing sweat to dry on leather repeatedly causes irreversible damage — brittleness, cracking, and deterioration of the grain.</p>
          <ul>
            <li>Wipe the girth area (highest sweat exposure), the flaps where stirrup leathers contact, and the seat</li>
            <li>Wipe the bit and all metal parts — rinse the bit in water</li>
            <li>Hang the saddle on a proper rack — never on a fence rail that concentrates stress at one point</li>
            <li>This takes 5 minutes and prevents years of damage</li>
          </ul>

          <h2 id="weekly">Weekly Deep Clean</h2>
          <p>Once weekly for horses in regular work. For horses ridden occasionally, after every 3–4 rides.</p>
          <ol>
            <li>Strip the saddle — remove stirrup leathers, irons, girth. Remove noseband, reins, and cheekpieces from bridle. Clean each piece separately.</li>
            <li>Check stitching on all pieces — girth straps (billet straps), stirrup leather attachment, reins. Stitching failure at these points is a safety issue. Repair before riding if any stitching is frayed.</li>
            <li>Clean all leather surfaces with leather soap (Effax Leather Soap is our recommended product — gentle, pH appropriate, no silicone).</li>
            <li>Condition while leather is slightly damp from cleaning — conditioner absorbs better into open pores.</li>
            <li>Clean all metal — stirrup irons, bit, curb chain — with metal polish or warm water.</li>
          </ol>

          <h2 id="monthly">Monthly</h2>
          <ul>
            <li>Check tree (saddle tree) integrity — press down on the pommel with one hand while pulling the cantle toward you. There should be no flex or give. If the tree flexes, the saddle is damaged and not safe to ride.</li>
            <li>Check panel condition — run your hand under the panels for any lumps, hard spots, or voids in the flocking. Uneven panels cause pressure points.</li>
            <li>Check leather for any new cracks, particularly at stress points (girth straps, stirrup leather slots, billets).</li>
            <li>Apply heavier conditioning treatment to particularly dry areas (billets, stirrup leathers).</li>
          </ul>

          <h2 id="annual">Annual</h2>
          <ul>
            <li>Professional saddle fit check — horse's back changes with fitness, age, and condition. Annual fitting by a CSF confirms or adjusts.</li>
            <li>Professional flocking adjustment if needed — wool flocking compresses over time and can be topped up by a qualified saddler.</li>
            <li>Thorough leather inspection — have a saddler inspect stitching, tree integrity, and leather condition professionally once per year.</li>
            <li>Deep conditioning treatment — a full leather balsam treatment with 24-hour absorption time.</li>
          </ul>

          <h2 id="products">Our Top Picks</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[['Effax Leather Soap', 'Cleaning', 'Gentle, pH appropriate, rinse-free. Best daily cleaner.'], ['Effax Leather Balsam', 'Conditioning', 'Deep conditioner for natural leather. Excellent absorption.'], ['Leather Therapy Conditioner', 'Conditioning', 'Water-based, restores suppleness. Good for heavily dry leather.'], ['Passier Lederbalsam', 'Annual conditioning', 'Premium German leather balsam. Long-lasting protection.'], ['Nevr-Dull/Brasso', 'Metal polish', 'Stirrup irons, bit rings. Not for the bit mouthpiece.'], ['Avoid: mink oil', 'Never use', 'Darkens leather, can cause delamination over time.']].map(([p, t, d]) => (
              <div key={p} className="bg-brand-white border border-brand-border rounded-lg p-4">
                <div className="font-bold text-brand-dark text-sm">{p}</div>
                <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-1">{t}</div>
                <div className="text-xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </ArticleLayout>
    </>
  )
}
