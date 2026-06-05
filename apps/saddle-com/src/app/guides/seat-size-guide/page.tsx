import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Saddle Seat Size Guide — Find Your Correct Size | Saddle.com',
  description: 'Seat size is measured from seat bone width — not height or weight.',
  path: '/guides/seat-size-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: 'Saddle Seat Size Guide',
  description: 'A reference guide to seat bone measurement and seat size selection.',
  url: 'https://saddle.com/guides/seat-size-guide',
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2025-05-01T00:00:00Z',
})

const SIZE_TABLE = [
  { seatBone: 'Under 95mm', englishSize: '15" (children/XS adults)', westernSize: '13"–14"' },
  { seatBone: '95–105mm', englishSize: '15.5"', westernSize: '14"' },
  { seatBone: '105–120mm', englishSize: '16"–16.5"', westernSize: '14"–15"' },
  { seatBone: '120–135mm', englishSize: '17"', westernSize: '15"–16"' },
  { seatBone: '135–150mm', englishSize: '17.5"', westernSize: '16"' },
  { seatBone: 'Over 150mm', englishSize: '18"', westernSize: '16"–17"' },
]

export default function SeatSizeGuidePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{
        title: 'Saddle Seat Size Guide — Find Your Correct Size',
        subtitle: 'Seat size has nothing to do with how tall you are or how much you weigh. The correct size is determined by one measurement: the distance between your seat bones. Everything else follows from that.',
        category: 'Fitting Guide',
        authorName: 'Saddle.com Editorial',
        authorAvatar: '🐴',
        publishedAt: 'May 2025',
        readTime: '8 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Guides' },
        { name: 'Seat Size Guide', href: '/guides/seat-size-guide' },
      ]}
      schema={schema}
      relatedLinks={[
        { title: 'Guides Hub', href: '/guides', category: 'Hub' },
        { title: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide', category: 'Fitting' },
        { title: 'Used Saddle Buying Guide', href: '/guides/used-saddle-buying-guide', category: 'Buying' },
        { title: 'Best English Saddles', href: '/reviews/best-english-saddles', category: 'Reviews' },
      ]}
      sidebar={<>
        <TableOfContents items={[
          { label: 'The Core Concept', href: '#concept' },
          { label: 'How to Measure', href: '#measure' },
          { label: 'Size Chart', href: '#chart' },
          { label: 'Discipline Adjustments', href: '#discipline' },
          { label: 'Fitting by Feeling', href: '#feel' },
          { label: 'Common Mistakes', href: '#mistakes' },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide' },
          { label: 'Best English Saddles 2025', href: '/reviews/best-english-saddles' },
          { label: 'Buying a Used Saddle', href: '/guides/used-saddle-buying-guide' },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com"
          title="Free Buying Guide"
          subtitle="Saddle reviews and market intelligence."
          source="guide-seat-size" />
      </>}
    >
      <div className="carloOS-article">
        <h2 id="concept">The Core Concept</h2>
        <p>Saddle seat size is measured as the distance from the nail (the stud at the front of the seat) to the middle of the cantle. It determines how much room the rider has from front to back. Your seat bones — the bony protrusions at the base of your pelvis — determine how much width you need in the seat. The relationship between these two dimensions is what creates a well-fitting seat: enough room front-to-back that you can move freely, narrow enough that your seat bones are supported rather than sitting over the edges.</p>
        <p>Tall riders do not necessarily need larger seats. Short riders do not necessarily need smaller seats. A tall rider with narrow seat bones may ride well in a 16.5" that fits poorly on a short rider with wide seat bones. This is why riding in a saddle before purchasing — or working with a certified fitter — is valuable.</p>

        <h2 id="measure">How to Measure Your Seat Bones</h2>
        <p>The most accurate method:</p>
        <ol style={{ marginBottom: '16px', paddingLeft: '24px' }}>
          <li style={{ marginBottom: '10px', lineHeight: '1.75', color: 'var(--brand-text-mid)' }}>Place a sheet of aluminium foil or corrugated cardboard on a hard, level chair (not a cushioned seat)</li>
          <li style={{ marginBottom: '10px', lineHeight: '1.75', color: 'var(--brand-text-mid)' }}>Sit directly on the material in your riding position — upright, thighs parallel to each other, as you would sit in a saddle</li>
          <li style={{ marginBottom: '10px', lineHeight: '1.75', color: 'var(--brand-text-mid)' }}>Stand up carefully, preserving the two impressions left by your seat bones</li>
          <li style={{ marginBottom: '10px', lineHeight: '1.75', color: 'var(--brand-text-mid)' }}>Measure the distance between the center of each impression in millimetres</li>
          <li style={{ lineHeight: '1.75', color: 'var(--brand-text-mid)' }}>Add 10–15mm to this measurement to determine the seat bone width you need accommodated by the saddle</li>
        </ol>
        <p>Alternative: a certified saddle fitter can perform this measurement as part of a fitting assessment — their method typically uses a calibrated seat bone measuring device rather than the foil method.</p>

        <h2 id="chart">Seat Size Chart</h2>
        <div style={{ background: 'var(--brand-surface)', border: '1px solid var(--brand-border)', borderRadius: '12px', overflow: 'hidden', margin: '24px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ background: 'var(--brand-dark)' }}>
                <th style={{ padding: '12px 16px', textAlign: 'left', color: 'white', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Seat Bone Width</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', color: 'white', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>English Seat Size</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', color: 'white', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Western Seat Size</th>
              </tr>
            </thead>
            <tbody>
              {SIZE_TABLE.map((row, i) => (
                <tr key={row.seatBone} className={i % 2 === 0 ? '' : ''} style={{ background: i % 2 === 0 ? 'white' : 'var(--brand-surface)' }}>
                  <td style={{ padding: '11px 16px', borderTop: '1px solid var(--brand-border)', fontWeight: 600, color: 'var(--brand-dark)' }}>{row.seatBone}</td>
                  <td style={{ padding: '11px 16px', borderTop: '1px solid var(--brand-border)', color: 'var(--brand-text-mid)' }}>{row.englishSize}</td>
                  <td style={{ padding: '11px 16px', borderTop: '1px solid var(--brand-border)', color: 'var(--brand-text-mid)' }}>{row.westernSize}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', fontStyle: 'italic' }}>Note: This chart is a starting point. Brand variation, discipline, and personal preference all affect the final selection. Measurement in person with a qualified fitter gives the most accurate result.</p>

        <h2 id="discipline">Discipline Adjustments</h2>
        <p><strong>Dressage:</strong> Riders often choose a size 0.5"–1" larger than the base chart suggests. The deep dressage seat requires more room for hip rotation and following motion. A seat that is too small in dressage prevents the rider from sitting correctly and restricts the following seat.</p>
        <p><strong>Show jumping:</strong> Typically choose the base chart size or 0.5" smaller. Jumping position is more forward, with more weight in the stirrups and less in the seat. Excessive room in the seat creates instability over fences.</p>
        <p><strong>Eventing:</strong> Base chart size — the balanced position used across all phases benefits from a well-fitted seat without excess.</p>
        <p><strong>Western:</strong> Western seats run 2" larger than equivalent English sizes. A rider in a 17" English saddle would typically ride in a 15" western saddle. The measurement logic is different due to the swell and deeper seat geometry.</p>

        <h2 id="feel">Fitting by Feel — What a Correct Seat Feels Like</h2>
        <p>In a correctly sized seat, sitting in your normal riding position:</p>
        <ul>
          <li>You have 1–2 inches of clearance behind your seat bones and the cantle — room to move back slightly without being pushed out of the saddle</li>
          <li>You can fit approximately 4 fingers between your inner thigh and the swell or pommel at the front</li>
          <li>Your seat bones feel supported — you can feel the panels beneath you, not the edges of the seat</li>
          <li>You can tilt your pelvis forward and back without restriction</li>
        </ul>
        <p><strong>Too small:</strong> You feel perched, restricted in hip movement, possibly sitting on the cantle. Your seat bones sit over the edge of the panels.</p>
        <p><strong>Too large:</strong> You feel unstable, unable to anchor your position. You may slide side to side. You cannot develop an independent seat.</p>

        <h2 id="mistakes">Common Mistakes</h2>
        <ul>
          <li><strong>Using height or weight as proxy for seat size</strong> — there is no reliable correlation. Measure seat bones.</li>
          <li><strong>Going too small</strong> — the most common fitting error. Many riders instinctively want a &quot;snug&quot; fit and end up in a saddle that restricts hip movement and creates tension in the lower back.</li>
          <li><strong>Ignoring brand variation</strong> — a 17" Stubben and a 17" Collegiate are not the same size. Different brands have different seat geometries. This is why sitting in the specific saddle before purchase matters.</li>
          <li><strong>Not accounting for padding</strong> — your breeches, half chaps, and any additional padding between you and the seat affect the effective sizing. Fit in your normal riding clothes.</li>
        </ul>
      </div>
    </ArticleLayout>
  )
}
