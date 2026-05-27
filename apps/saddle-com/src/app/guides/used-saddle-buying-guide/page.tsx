import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Buying a Used Saddle — Complete Inspection Checklist | Saddle.com',
  description: 'A reference guide to buying a used saddle, drawing on Society of Master Saddlers inspection material.',
  path: '/guides/used-saddle-buying-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: 'Buying a Used Saddle — Complete Inspection Checklist',
  description: 'A reference guide to buying a used saddle, drawing on Society of Master Saddlers material.',
  url: 'https://saddle.com/guides/used-saddle-buying-guide',
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2025-05-01T00:00:00Z',
})

export default function UsedSaddleBuyingGuidePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      hero={{
        title: 'Buying a Used Saddle — Complete Inspection Checklist',
        subtitle: 'A used saddle from a reputable brand can deliver exceptional value — or a structural problem that injures your horse and costs more to repair than a new saddle. This guide covers every inspection point, in the order the Society of Master Saddlers recommends for an inspection.',
        category: 'Buying Guide',
        authorName: 'Saddle.com Editorial',
        authorAvatar: '🐴',
        publishedAt: 'May 2025',
        readTime: '13 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Guides' },
        { name: 'Buying a Used Saddle', href: '/guides/used-saddle-buying-guide' },
      ]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: 'Before You View', href: '#before' },
          { label: '1. Tree Integrity Test', href: '#tree' },
          { label: '2. Panel Inspection', href: '#panels' },
          { label: '3. Billet & Girth Straps', href: '#billets' },
          { label: '4. Leather Condition', href: '#leather' },
          { label: '5. Stitching Assessment', href: '#stitching' },
          { label: '6. Metal Hardware', href: '#metal' },
          { label: 'Price Guide', href: '#price' },
          { label: 'Red Flags — Walk Away', href: '#redflags' },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide' },
          { label: 'Leather Care Guide', href: '/guides/leather-care-guide' },
          { label: 'Best English Saddles 2025', href: '/reviews/best-english-saddles' },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com"
          title="Free Buyer\'s Guide"
          subtitle="Saddle reviews and market intelligence." source="guide-used-saddle" />
      </>}
    >
      <div className="carloOS-article">
        <p>The used saddle market offers genuine value — a well-maintained Stubben or Passier at 40–60% of new price is a better saddle than a new budget-brand at full price. But the used market also contains damaged saddles whose problems are cosmetically hidden, saddles that have been mis-stored, and saddles with tree damage that will injure your horse in ways that take months to diagnose.</p>
        <p>This checklist is what I walk through on every used saddle I inspect, in the order I do it. Each step builds on the last. If you find a serious problem in step one, you don&apos;t need to continue — the saddle is not worth considering at any price.</p>

        <h2 id="before">Before You View — What to Ask in Advance</h2>
        <p>Before making the trip, establish these facts by phone or message:</p>
        <ul>
          <li><strong>Reason for selling</strong> — not to judge, but to understand. Horse sold, changed discipline, changed horse shape, and bought new are all fine. Saddle &quot;doesn&apos;t fit my horse anymore&quot; requires follow-up: what fitting issues did it develop?</li>
          <li><strong>Storage history</strong> — has it been stored in a barn or garage? Temperature extremes and humidity fluctuations cause leather to dry, crack, and mold.</li>
          <li><strong>Any repairs or re-flocking?</strong> — professional re-flocking is routine and positive; amateur re-flocking is a problem.</li>
          <li><strong>Photos of: both billets, the underside of both panels, both flaps, the cantle from behind, and the pommel from the front.</strong> Any reluctance to photograph these areas is a flag.</li>
          <li><strong>Serial number and tree width</strong> — verify these match the brand&apos;s records if possible. Serial number forgeries exist on premium brand imitations.</li>
        </ul>

        <h2 id="tree">1. Tree Integrity — The Most Important Test</h2>
        <p>The tree is the internal structure of the saddle — the frame everything else is built on. A damaged tree cannot be safely repaired in the field. A saddle with a broken tree is worth zero. This is the first and most critical inspection.</p>
        <h3>The Twist Test</h3>
        <p>Hold the pommel firmly in one hand and the cantle in the other. Apply opposing rotational forces — twist the pommel left and the cantle right, then reverse. A sound tree will not flex or twist at all. Any twisting or creaking indicates tree damage.</p>
        <h3>The Flex Test</h3>
        <p>Place the pommel against your abdomen (padded clothing) and pull the cantle toward you with both hands. A sound tree should not bend. Any give suggests damaged or cracked tree points (the front arch of the tree).</p>
        <h3>The Pommel Arch Check</h3>
        <p>Look directly down the gullet (the channel running front to back under the saddle) from the pommel end. The arch should be symmetrical. Any asymmetry — one side higher, one side collapsed — indicates tree damage, often from a fall or improper storage.</p>
        <h3>The Cantle Check</h3>
        <p>Press firmly on both sides of the cantle. It should be completely rigid. Any give, creak, or movement indicates damage. On wooden-treed saddles, you may be able to hear cracking; on synthetic trees, look for stress marks in the leather over the cantle.</p>

        <div style={{ background: 'rgba(200,74,42,0.05)', border: '1px solid rgba(200,74,42,0.15)', borderRadius: '10px', padding: '18px 22px', margin: '24px 0' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C84A2A', marginBottom: '8px' }}>If the tree fails any test</div>
          <p style={{ fontSize: '15px', color: '#4A3018', margin: 0, lineHeight: 1.65 }}>Stop the inspection. Do not continue. A damaged tree is not repairable in the field and makes the saddle unsafe regardless of leather condition or price. Walk away.</p>
        </div>

        <h2 id="panels">2. Panel Inspection</h2>
        <p>The panels are the padded underside that contacts the horse&apos;s back. Panel problems cause back pain and are expensive to professionally address.</p>
        <ul>
          <li><strong>Run your hand across both panels</strong> — they should feel even and consistent. Lumps, hard spots, or areas of collapse indicate uneven or deteriorated flocking.</li>
          <li><strong>Check panel symmetry</strong> — lay the saddle on a flat surface and look from behind. Both panels should sit at the same height. An asymmetric panel creates uneven pressure and indicates either a tree problem or severe flocking deterioration.</li>
          <li><strong>Check for dried or cracked panel leather</strong> — look at the inner surface where the panel contacts the numnah. Cracked panel leather is expensive to replace.</li>
          <li><strong>Smell the panels</strong> — seriously. Mold has a distinctive smell. If the panels smell musty, the saddle has been stored in damp conditions and the stuffing may be compromised even if it isn&apos;t visible.</li>
          <li><strong>Ask about re-flocking history</strong> — wool-flocked panels can be professionally re-flocked (positive). Foam panels cannot be re-flocked and should be replaced when worn (negative for long-term use). If a wool panel has been amateur re-flocked, lumps are likely.</li>
        </ul>

        <h2 id="billets">3. Billet &amp; Girth Strap Inspection</h2>
        <p>Billets take enormous repetitive stress. Failed billets cause girths to release, which has caused serious falls. This is a safety-critical inspection point.</p>
        <ul>
          <li><strong>Inspect each billet hole</strong> — they should be clean and round, not torn, elongated, or cracking from the edge</li>
          <li><strong>Flex each billet</strong> — leather should be supple. Stiff, cracking, or dry billets need immediate replacement and indicate the saddle has been neglected or dried out</li>
          <li><strong>Check where the billets meet the saddle</strong> — look for stitching integrity at the billet tabs. This stitching should not be frayed, broken, or pulling</li>
          <li><strong>Count the billet holes</strong> — minimum 5 clean holes per billet is standard. Fewer suggests excessive wear</li>
          <li><strong>Check for replaced billets</strong> — replacement billets are not a problem if done professionally. Check that they are properly stitched and the same width as the originals</li>
        </ul>

        <h2 id="leather">4. Leather Condition Assessment</h2>
        <p>Leather condition tells you about the saddle&apos;s history — but does not automatically determine value. Dry, neglected leather can often be restored; mold damage often cannot.</p>
        <ul>
          <li><strong>Flex the flaps</strong> — leather should bend without cracking. Cracking under flex indicates severe dryness and structural compromise</li>
          <li><strong>Check for mold</strong> — white or grey powdery deposits, particularly in seams and on the underside of flaps, indicate mold. Surface mold can sometimes be treated; deep mold in the leather fibres cannot</li>
          <li><strong>Check for staining</strong> — oil stains, fence paint, and some chemical exposures permanently affect leather. Sweat staining is normal and manageable</li>
          <li><strong>Look at the seat leather</strong> — the seat takes the most rider wear. Check for polish wear-through, patching, or excessive compression</li>
        </ul>

        <h2 id="stitching">5. Stitching Assessment</h2>
        <p>Stitching integrity is both a safety and durability indicator. Check: cantle binding, panel binding, knee roll stitching, stirrup bar cover stitching, and all billet stitching. Any broken stitching in safety-critical areas (billets, stirrup bars) requires professional repair before the saddle is ridden.</p>

        <h2 id="metal">6. Metal Hardware</h2>
        <p>Check stirrup bars for function — they should release under pressure (safety function). Check the bar mechanism operates freely. Look for rust, which on structural bars weakens the metal over time. Blemish-level surface rust is manageable; deep pitting is a structural concern on safety components.</p>

        <h2 id="price">Used Saddle Price Guide (2025)</h2>
        <div style={{ background: 'var(--brand-surface)', border: '1px solid var(--brand-border)', borderRadius: '12px', overflow: 'hidden', margin: '20px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ background: 'var(--brand-dark)' }}>
                <th style={{ padding: '11px 15px', textAlign: 'left', color: 'white', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Brand / Type</th>
                <th style={{ padding: '11px 15px', textAlign: 'left', color: 'white', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Fair Price Range (Good Condition)</th>
                <th style={{ padding: '11px 15px', textAlign: 'left', color: 'white', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Walk Away If Over</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Stubben Roxane / Portos', '$1,200–2,200', '$2,800 without current service'],
                ['Pessoa Gen X / Legacy', '$900–1,600', '$2,200'],
                ['Passier dressage', '$1,100–2,000', '$2,500'],
                ['Bates Caprilli / CAIR', '$400–800', '$1,000'],
                ['Collegiate / mid-range', '$200–500', '$700'],
                ['Unknown brand / no paperwork', 'Max $200–300', 'Any higher without inspection cert'],
              ].map(([brand, price, max]) => (
                <tr key={brand}>
                  <td style={{ padding: '11px 15px', borderTop: '1px solid var(--brand-border)', fontWeight: 600, color: 'var(--brand-dark)' }}>{brand}</td>
                  <td style={{ padding: '11px 15px', borderTop: '1px solid var(--brand-border)', color: 'var(--brand-text-mid)' }}>{price}</td>
                  <td style={{ padding: '11px 15px', borderTop: '1px solid var(--brand-border)', color: '#C84A2A', fontWeight: 600, fontSize: '13px' }}>{max}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="redflags">Red Flags — Walk Away</h2>
        <ul>
          <li><strong>Any tree failure</strong> — no exceptions, no negotiation</li>
          <li><strong>Seller won&apos;t allow close inspection</strong> or refuses to let you flex the tree</li>
          <li><strong>Amateur re-flocking</strong> — lumpy, uneven panels with no professional documentation</li>
          <li><strong>Deep mold in leather or panels</strong></li>
          <li><strong>Billet leather that cracks under flex</strong></li>
          <li><strong>No serial number or it has been removed</strong></li>
          <li><strong>Price &quot;firm&quot; significantly above market rate</strong> for the condition</li>
          <li><strong>Urgency pressure</strong> — &quot;I have someone else looking at it tomorrow.&quot; A seller who won&apos;t let you take time to inspect is hiding something</li>
        </ul>
      </div>
    </ArticleLayout>
  )
}
