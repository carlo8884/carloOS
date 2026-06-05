import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ArticleLayout, ArticleByline, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'saddle-com', title: 'Stirrup Iron Guide 2025 — Safety Stirrups, Sizing | Saddle.com', description: 'Complete stirrup iron guide. Why safety stirrups matter, correct sizing (1 inch wider than boot), and which irons work for dressage, jumping, and trail riding.', path: '/guides/stirrup-iron-guide', type: 'article' })
const schema = buildArticleSchema({ siteId: 'saddle-com', title: 'Stirrup Iron Guide', description: 'Safety stirrups, sizing, and discipline selection for riders.', url: 'https://saddle.com/guides/stirrup-iron-guide', imageUrl: '', authorName: 'Saddle.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function StirrupIronGuidePage() {
  return (
    <ArticleLayout siteId="saddle-com"
      hero={{ title: 'Stirrup Iron Guide', subtitle: 'The stirrup iron is a safety-critical piece of equipment. A foot caught in a traditional stirrup during a fall drags the rider. Safety stirrups prevent this — and modern designs are both safer and more ergonomic than traditional alternatives.', category: 'Equipment Guide', authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides/saddle-fit-guide' }, { name: 'Stirrup Iron Guide', href: '/guides/stirrup-iron-guide' }]}
      schema={schema}
      relatedLinks={[
        { title: 'Guides Hub', href: '/guides', category: 'Hub' },
        { title: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide', category: 'Fitting' },
        { title: 'Best Stirrup Irons', href: '/reviews/best-stirrup-irons', category: 'Reviews' },
        { title: 'Best Riding Boots', href: '/reviews/best-riding-boots', category: 'Reviews' },
      ]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Sizing Rule</div>
          <p className="text-xs text-brand-text-mid leading-relaxed m-0">Stirrup width should be 1 inch wider than your boot at its widest point. Too narrow — foot gets stuck. Too wide — foot slides through. Measure your boot, add 1 inch.</p>
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide' }, { label: 'Best Riding Boots', href: '/reviews/best-riding-boots' }, { label: 'Best English Saddles', href: '/reviews/best-english-saddles' }]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Equipment Guides" subtitle="Expert reviews and fitting guides." source="guides-stirrups" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
        <h2>Why Safety Stirrups Matter</h2>
        <p>Traditional solid-sided stirrups (fillis irons) are a drag-risk in a fall. If the foot does not clear the iron, the rider is dragged. Every year, dragging accidents cause serious injury and death in equestrian sports. Modern safety stirrups — with breakaway sides, angled treads, or open designs — significantly reduce this risk. There is no competitive disadvantage to safety stirrups. There is a meaningful safety advantage. The question is not whether to use them but which design works best for your discipline and riding style.</p>

        <h2>Types of Safety Stirrups</h2>
        <p><strong>Peacock stirrups (rubber-band side):</strong> The original safety stirrup — one side of the iron is replaced by a rubber band that releases under pressure. Inexpensive ($30–50). Reliable if the band is replaced regularly (bands dry out and lose elasticity over time — replace annually). The release is not always consistent, and the asymmetric design affects some riders' position.</p>
        <p><strong>MDC Intelligent Stirrups / Jointed irons:</strong> A pivot at the tread allows the footpad to rotate with the rider's ankle, reducing knee and ankle strain over long rides. Not strictly a safety design — more ergonomic than traditional. Popular with dressage riders with joint issues.</p>
        <p><strong>Freejump stirrups (open outer branch):</strong> The outer branch of the stirrup is open — the foot can slide free laterally in a fall. Widely used in jumping. Durable, consistent release. More expensive ($100–250) but worth it for regular jumping riders.</p>
        <p><strong>Ophena magnetic stirrups:</strong> A magnet in the tread holds a metal clip on the boot in position — maintaining foot alignment — while releasing if the foot twists in a fall. Expensive ($300+). Require compatible boots with the metal clip. Best for dressage riders wanting foot position assistance.</p>
        <p><strong>Tagg stirrups / composite materials:</strong> Stainless steel alternatives made from aluminum or composite polymers are lighter (relevant for endurance and trail riders covering long distances on foot between rides).</p>

        <h2>Sizing — The One-Inch Rule</h2>
        <p>Measure the widest part of your riding boot. Add 1 inch. This is the correct stirrup tread width. A tread that is too narrow risks the foot getting stuck in the iron. Too wide and the foot slides through — also a drag risk. Most adult riders fall between 4.5 and 5.5 inches. Standard adult stirrups are typically 4.75 inches; wide versions run 5–5.25 inches. Measure rather than assuming.</p>

        <h2>By Discipline</h2>
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          {[
            { disc: 'Dressage', rec: 'Fillis or MDC jointed · Ophena for position focus · Safety over tradition', note: 'Wider tread for ankle stability' },
            { disc: 'Show Jumping', rec: 'Freejump or Sprenger offset · Open outer branch designs', note: 'Safety release critical at speed' },
            { disc: 'Eventing', rec: 'Freejump or safety design · Must release in cross-country falls', note: 'Safety is non-negotiable' },
            { disc: 'Trail / Endurance', rec: 'Lightweight composite · Wide tread for comfort · Peacock acceptable', note: 'Weight and comfort over elegance' },
          ].map(item => (
            <div key={item.disc} className="bg-brand-surface border border-brand-border rounded-lg p-4">
              <div className="font-bold text-brand-dark text-sm mb-1">{item.disc}</div>
              <div className="text-xs text-brand-primary font-semibold mb-1">{item.rec}</div>
              <div className="text-2xs text-brand-text-light">{item.note}</div>
            </div>
          ))}
        </div>

        <h2>Stirrup Leathers</h2>
        <p>The leather connecting the stirrup to the saddle matters as much as the iron. Leather stretches unevenly — after years of right-hand mounting (or left in UK tradition), one leather is longer than the other. Replace leathers in pairs every 2–3 years or when visible stretching creates uneven length. Synthetic leathers (nylon-core) are more consistent in length over time — used by serious competitive riders who want perfectly even leathers. Biothane leathers are waterproof and very durable for trail riding.</p>
      </div>
    </ArticleLayout>
  )
}
