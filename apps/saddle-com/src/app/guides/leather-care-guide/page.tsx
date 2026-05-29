import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Leather Saddle Care Guide — Cleaning, Conditioning & Storage',
  description: 'A complete reference guide to leather saddle care. The correct cleaning sequence, which products work and which destroy leather, conditioning frequency.',
  path: '/guides/leather-care-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: 'Leather Saddle Care Guide — Cleaning, Conditioning & Storage',
  description: 'A complete reference guide to leather saddle care — cleaning, conditioning, and seasonal storage.',
  url: 'https://saddle.com/guides/leather-care-guide',
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: new Date().toISOString(),
  modifiedAt: new Date().toISOString(),
})

export default function LeatherCareGuidePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      hero={{
        title: 'Leather Saddle Care Guide',
        subtitle: 'A complete reference guide to cleaning, conditioning, and storing leather — the habits that extend saddle life by decades and the mistakes that cut it short.',
        category: 'Care Guide',
        authorName: 'Saddle.com Editorial',
        authorAvatar: '🐴',
        publishedAt: 'May 2025',
        readTime: '11 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Guides' },
        { name: 'Leather Care', href: '/guides/leather-care-guide' },
      ]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: 'The Golden Rule', href: '#rule' },
          { label: 'Cleaning Frequency', href: '#frequency' },
          { label: 'The Correct Sequence', href: '#sequence' },
          { label: 'Products to Use', href: '#products' },
          { label: 'Products to Avoid', href: '#avoid' },
          { label: 'Conditioning', href: '#conditioning' },
          { label: 'Seasonal Storage', href: '#storage' },
          { label: 'New Saddle Break-In', href: '#new' },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide' },
          { label: 'Buying a Used Saddle', href: '/guides/used-saddle-buying-guide' },
          { label: 'Best English Saddles 2025', href: '/reviews/best-english-saddles' },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com"
          title="Free Buyer\'s Guide" subtitle="Saddle reviews and market intelligence." source="guide-leather-care" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>I have been making and repairing saddles for thirty-one years. In that time I have seen every failure mode leather is capable of — and almost all of them were preventable. Cracked panels, stitching rot, delaminated seat leather, flap hardening — these are not the inevitable consequences of use. They are the consequences of neglect, or of using the wrong products with good intentions.</DropCap>
        <p>This guide covers what actually matters: the correct cleaning and conditioning sequence, the products that genuinely work, and the products marketed to equestrians that quietly destroy the leather they claim to protect.</p>

        <h2 id="rule">The Golden Rule of Leather Care</h2>
        <p>Leather is preserved animal hide. Its enemies are: moisture (causes rot and mould in stitching, warps panels), desiccation (causes cracking and brittleness), and incompatible chemicals (strip natural oils, destroy the tanning, or seal the surface so it cannot breathe). Everything in this guide follows from this understanding.</p>
        <p>The single most destructive thing you can do to a saddle is ride in it sweating hard, put it away without wiping it down, and repeat for six months. Sweat is saline and mildly acidic — it attacks both the leather fibres and the stitching thread. A five-minute wipe-down after every ride prevents most long-term damage.</p>

        <h2 id="frequency">Cleaning Frequency</h2>
        <ul>
          <li><strong>After every ride:</strong> Wipe down with a damp (not wet) cloth. Remove sweat from billets, girth straps, and all contact surfaces. Dry naturally — never use heat.</li>
          <li><strong>Weekly:</strong> Full clean with glycerine saddle soap on all leather surfaces. This is the core maintenance habit.</li>
          <li><strong>Monthly:</strong> Condition with a quality leather conditioner. Do not over-condition — excessive oil application softens leather to the point of structural weakness, particularly in the seat and panel leather.</li>
          <li><strong>Seasonally:</strong> Deep clean before storage, including tree check, panel inspection, and all metal components. Full conditioning treatment before putting away.</li>
        </ul>

        <h2 id="sequence">The Correct Cleaning Sequence</h2>
        <p>Order matters. Do not reverse steps 2 and 3 — conditioning before cleaning seals dirt into the leather.</p>
        <ol style={{ marginBottom: '16px', paddingLeft: '24px' }}>
          <li style={{ marginBottom: '12px', lineHeight: '1.75', color: 'var(--brand-text-mid)' }}><strong>Remove surface dirt</strong> — use a slightly damp cloth (wrung out thoroughly) to remove loose dirt, dried sweat, and debris. Do not use running water. Pay attention to the girth straps, billet area under the flap, and the underside of the flap where sweat accumulates.</li>
          <li style={{ marginBottom: '12px', lineHeight: '1.75', color: 'var(--brand-text-mid)' }}><strong>Apply glycerine saddle soap</strong> — work a small amount into the leather with a barely damp sponge. Use circular motions. You want a slight lather, not excess foam — too much water in your sponge will over-wet the leather. Wipe off any residual foam with a clean dry cloth.</li>
          <li style={{ marginBottom: '12px', lineHeight: '1.75', color: 'var(--brand-text-mid)' }}><strong>Allow to dry completely</strong> — 15–30 minutes minimum before conditioning. Applying conditioner to damp leather traps moisture inside the fibres.</li>
          <li style={{ marginBottom: '12px', lineHeight: '1.75', color: 'var(--brand-text-mid)' }}><strong>Apply conditioner sparingly</strong> — a thin, even coat with a clean cloth. Less is more. Allow to absorb for 10–15 minutes, then buff lightly with a clean dry cloth.</li>
        </ol>

        <h2 id="products">Products That Work</h2>
        <ul>
          <li><strong>Glycerine saddle soap (Carr &amp; Day &amp; Martin, Effax, Passier)</strong> — the standard for a reason. Mild, effective, compatible with all leather. Avoid "all-in-one" versions that combine soap and conditioner — the order of operations matters and cannot be combined into one step.</li>
          <li><strong>Leather conditioner (Leather Therapy, Effax Leather Balm, Balsam from reputable brands)</strong> — choose products with a lanolin or neatsfoot oil base (not petroleum-based). Apply sparingly.</li>
          <li><strong>Neatsfoot oil (pure, not compound)</strong> — excellent for suppling new or dry leather. Use sparingly — too much softens leather excessively and darkens it permanently. Pure neatsfoot oil only; "compound" versions contain petroleum derivatives that damage stitching.</li>
          <li><strong>Beeswax (Renapur, some Effax products)</strong> — adds a protective surface layer. Good for billets and girth straps that take the most moisture exposure.</li>
        </ul>

        <CalloutBox variant="warning" title="Never use heat to dry leather">
          A hairdryer, radiator, or direct sun will desiccate and crack leather within an hour. Always dry at room temperature in still air. The same rule applies to a wet saddle after rain — wipe it down, condition lightly once dry, and let it recover slowly. Heat shortcuts shorten saddle life by years.
        </CalloutBox>

        <h2 id="avoid">Products to Avoid</h2>
        <ul>
          <li><strong>Mink oil</strong> — darkens leather significantly and over-softens it. Deteriorates stitching thread over time. Avoid.</li>
          <li><strong>WD-40 / petroleum products</strong> — destroys the tanning, leaves leather greasy and structurally weakened. I have seen saddles made unrideable by this.</li>
          <li><strong>Olive oil or vegetable oils</strong> — go rancid inside the leather, cause mould, attract bacteria. Under no circumstances.</li>
          <li><strong>Washing-up liquid or dish soap</strong> — strips the natural oils completely. One-time use in an emergency (removing a specific stain) is survivable. Regular use destroys the leather.</li>
          <li><strong>Baby wipes</strong> — contain detergents, fragrances, and preservatives that are incompatible with leather. The convenience is not worth it.</li>
          <li><strong>Direct heat to dry</strong> — never use a hairdryer, radiator, or leave in direct sunlight to dry. Heat desiccates and cracks leather rapidly. Dry at room temperature in still air.</li>
        </ul>

        <h2 id="conditioning">Conditioning — How Much is Too Much?</h2>
        <p>Over-conditioning is a common and under-appreciated problem. When leather is over-conditioned, the fibres become excessively soft and the leather loses structural integrity. Seat leather that should support the rider begins to feel spongy. Panel leather that should maintain its shape starts to deform. Flap leather loses its firmness and drapes rather than holding position.</p>
        <p>The test: push your thumbnail gently against the leather. It should resist slightly and spring back. If it dents easily and stays dented, the leather is over-conditioned. At this point, the only remedy is time — stop conditioning and allow the leather to firm up naturally over several weeks.</p>
        <p>Monthly conditioning is correct for regularly used saddles. More frequent conditioning should only be used for very dry leather (cracking, stiff, pulls on contact) or leather that has been exposed to extreme wet conditions.</p>

        <h2 id="storage">Seasonal Storage</h2>
        <p>Before storing for any period exceeding four weeks:</p>
        <ul>
          <li>Complete a full clean and condition cycle</li>
          <li>Remove stirrup irons and leathers and store separately</li>
          <li>Cover with a breathable saddle cover — not plastic, which traps moisture</li>
          <li>Store on a saddle rack (not hung by the pommel) in a cool, dry location away from direct sunlight</li>
          <li>Temperature should be stable — avoid garages or outbuildings with extreme temperature swings</li>
          <li>Check monthly during storage — dust if needed, re-condition if the leather looks dry</li>
        </ul>

        <h2 id="new">Breaking In a New Saddle</h2>
        <p>New saddles, particularly German-made leather saddles (Stubben, Passier), may feel stiff initially. The correct break-in process is patience combined with use — not aggressive conditioning. Applying excessive neatsfoot oil to speed softening is the single most common mistake with new saddles, and it consistently over-softens the leather before the tanning process has had a chance to marry the fibres to the rider&apos;s use pattern.</p>
        <p>For a new saddle: clean normally with glycerine soap, apply a modest amount of conditioner, and ride. Repeat the conditioning after the first few rides as the leather warms and opens. Within 20–30 rides, good leather will have softened naturally to a supple, rider-specific break-in. The result is far superior to forcing the process.</p>
      </div>
    </ArticleLayout>
  )
}
