import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Stubben vs Pessoa Saddle Comparison 2025 — Which Is Right? | Saddle.com',
  description: 'Stubben Roxane vs Pessoa Gen X Pro head-to-head. Tree, leather, geometry, resale, fit, and price compared in detail. Plus when each brand is the wrong choice.',
  path: '/guides/stubben-vs-pessoa',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: 'Stubben vs Pessoa Saddle Comparison 2025',
  description: 'Head-to-head comparison of Stubben and Pessoa English saddles — tree systems, leather, geometry, resale, fit, and the right brand for each rider.',
  url: 'https://saddle.com/guides/stubben-vs-pessoa',
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2025-05-15T00:00:00Z',
  modifiedAt: '2025-05-15T00:00:00Z',
})

export default function StubbenVsPessoaPage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      hero={{ title: 'Stubben vs Pessoa — The Head-to-Head Comparison', subtitle: 'Two of the most-respected English saddle brands, built for different disciplines and different riders. Here\'s how they actually compare on the things that matter — and which one is right for you.', category: 'Brand Comparison', authorName: 'Saddle.com Editorial', authorAvatar: '⚖️', publishedAt: 'May 2025', readTime: '11 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: 'Stubben vs Pessoa', href: '/guides/stubben-vs-pessoa' }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: 'The Quick Answer', href: '#quick' },
          { label: 'Brand Heritage', href: '#heritage' },
          { label: 'Tree Systems', href: '#tree' },
          { label: 'Leather & Build', href: '#leather' },
          { label: 'Geometry & Fit', href: '#geometry' },
          { label: 'Price & Resale', href: '#price' },
          { label: 'Side-by-Side Table', href: '#table' },
          { label: 'Which Should You Buy?', href: '#decision' },
        ]} />
        <RelatedLinks title="Related" links={[
          { label: 'Stubben Full Review', href: '/reviews/stubben-saddle-review' },
          { label: 'Pessoa Full Review', href: '/reviews/pessoa-saddle-review' },
          { label: 'Best English Saddles', href: '/reviews/best-english-saddles' },
          { label: 'All Saddle Brands', href: '/brands' },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Brand reviews and market intelligence." source="stubben-vs-pessoa" />
      </>}
    >
      <div className="carloOS-article">
        <h2 id="quick">The Quick Answer</h2>
        <p>If you ride dressage, choose <strong>Stubben Roxane</strong>. If you compete in show jumping at 1.10m or above, choose <strong>Pessoa Gen X Pro</strong>. For everything in between — eventing, hunters, all-purpose work — the decision is closer and the right answer depends on your specific discipline, horse, and budget.</p>
        <p>This is a head-to-head of the brands&apos; flagship saddles. The Stubben Roxane (dressage) and the Pessoa Gen X Pro (jumping) are not actually direct competitors — they are designed for different disciplines. The reason riders compare them is that they are both at the top of their respective categories, and many riders are choosing between &quot;invest in a serious dressage saddle&quot; or &quot;invest in a serious jumping saddle&quot; rather than between two interchangeable products.</p>

        <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-lg p-5 my-6 not-prose">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">In one sentence</div>
          <p className="text-sm text-brand-text-mid m-0 leading-relaxed">Stubben is German heritage engineering with adjustable trees and the best dressage seat in production; Pessoa is Brazilian-American jumping pedigree with the close-contact geometry favored by Olympic show jumpers.</p>
        </div>

        <h2 id="heritage">Brand Heritage</h2>
        <p><strong>Stubben</strong> has been making saddles in Germany since 1894. The brand is family-owned across multiple generations and produces what many consider the benchmark of German saddlery — heritage construction, hand-finished leather, and a commitment to long-term ownership (Stubbens are routinely usable 30+ years after purchase). The Quick-Change tree system, introduced in the 2000s, was a meaningful technical innovation that the rest of the industry has not fully replicated.</p>
        <p><strong>Pessoa</strong> was founded by Nelson Pessoa, the legendary Brazilian show jumper and Olympic medalist, with manufacturing now based in the US and Brazil. The brand&apos;s identity is built on its jumping pedigree — the Gen X Pro is ridden by an extraordinary number of upper-level show jumpers, including multiple Olympic and World Championship competitors. Where Stubben is rooted in German classical riding, Pessoa is rooted in international show jumping at the highest competitive levels.</p>

        <h2 id="tree">Tree Systems</h2>
        <p>This is where the brands differ most technically.</p>
        <p><strong>Stubben&apos;s Quick-Change tree</strong> allows width adjustment across five widths (Narrow, Medium-Narrow, Medium, Medium-Wide, Wide) without removing the panels or sending the saddle to a workshop. A trained owner can adjust width in under five minutes. For riders whose horses change shape seasonally, for riders sharing one saddle across multiple horses, or for any horse expected to develop topline over the next few years, this is genuinely valuable.</p>
        <p><strong>Pessoa uses traditional fixed-tree construction.</strong> Each saddle is built in a specific width that does not change without sending the saddle to a saddler for tree adjustment (a $200–$500 process with weeks of turnaround). For competitive jumpers who have their horse and saddle fitted once and ride that combination for years, this is not a problem. For multi-horse riders, it is a meaningful limitation.</p>

        <h2 id="leather">Leather & Build</h2>
        <p>Both brands use top-grain leather. Both will develop a beautiful patina if cared for properly. The differences are real but subtle:</p>
        <ul>
          <li><strong>Stubben&apos;s German leather</strong> is hand-finished, slightly heavier, and develops a particularly even patina over 10+ years. The brand is famous for the longevity of its leather — well-cared-for 20-year-old Stubbens are still in active competition.</li>
          <li><strong>Pessoa&apos;s leather</strong> is supple from new, with a softer initial feel that many riders prefer. Breaking-in time is shorter. The leather may show wear slightly faster than Stubben at the 10–15 year mark, but few jumping saddles see 30 years of competition use anyway.</li>
        </ul>
        <p>For riders who keep a saddle for 25+ years, Stubben holds the edge. For riders who upgrade every 8–10 years, the leather difference is negligible.</p>

        <h2 id="geometry">Geometry & Fit</h2>
        <p>This is the most important section, because it explains why these brands are not actually substitutes.</p>
        <p><strong>The Roxane is a dressage saddle.</strong> Deep seat. Straight-cut flap. The rider sits in a specific vertical alignment over the horse&apos;s center of motion. The geometry is wrong for jumping — the deep seat traps the rider on landing, the straight flap doesn&apos;t accommodate the shortened jumping leg, and the close-to-the-horse panels can interfere with the horse&apos;s shoulder rotation in flight.</p>
        <p><strong>The Gen X Pro is a close-contact jumping saddle.</strong> Forward-cut flap. Flatter, shallower seat for two-point freedom. Minimal panel bulk to maximize the rider&apos;s feel of the horse at speed. The geometry is wrong for dressage — there is insufficient seat depth for collected work, the forward flap puts the rider&apos;s leg in the wrong position for direct contact, and the rider cannot achieve the classical dressage alignment.</p>
        <p>For all-purpose, eventing, or hunter riding — where one saddle must do both disciplines — neither flagship is the right tool. Stubben&apos;s Aramis (their AP model) and the Pessoa Legacy or Heritage AP are more appropriate. But the comparison most riders are actually making is &quot;Stubben for dressage&quot; vs &quot;Pessoa for jumping&quot; — the flagships in their respective disciplines.</p>

        <h2 id="price">Price & Resale</h2>
        <p>Both brands carry premium pricing. Both have meaningful resale value relative to lower-tier brands.</p>
        <ul>
          <li><strong>Stubben Roxane:</strong> $3,200–$4,500 new; $1,200–$2,400 used. Retains roughly 40–60% of original value at 10 years.</li>
          <li><strong>Pessoa Gen X Pro:</strong> $2,400–$3,200 new; $900–$1,800 used. Retains roughly 35–50% of original value at 10 years.</li>
        </ul>
        <p>The slightly stronger Stubben resale reflects the brand&apos;s reputation for longevity and the desirability of the Quick-Change tree on the used market — a used Roxane fits more horses than a used fixed-tree saddle, which sustains demand. Both brands hold value far better than budget brands; a used Collegiate at 5 years is worth roughly 20% of its original price, where a used Stubben or Pessoa at the same age is worth 50–60%.</p>

        <h2 id="table">Side-by-Side</h2>
        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-brand-dark text-white">
                <th className="text-left px-4 py-3 font-bold text-2xs tracking-wider uppercase">Attribute</th>
                <th className="text-left px-4 py-3 font-bold text-2xs tracking-wider uppercase">Stubben Roxane</th>
                <th className="text-left px-4 py-3 font-bold text-2xs tracking-wider uppercase">Pessoa Gen X Pro</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Discipline', 'Dressage', 'Show Jumping'],
                ['Country', 'Germany', 'Brazil / USA'],
                ['Founded', '1894', '1980'],
                ['Tree', 'Quick-Change (5 widths)', 'Fixed (per saddle)'],
                ['Seat', 'Deep dressage', 'Flat / close-contact'],
                ['Flap', 'Straight-cut', 'Forward-cut'],
                ['Leather', 'German hand-finished', 'Brazilian top-grain'],
                ['Best at', 'First through Grand Prix dressage', '1.10m+ show jumping'],
                ['Wrong for', 'Show jumping', 'Dressage'],
                ['New price', '$3,200–$4,500', '$2,400–$3,200'],
                ['Used price', '$1,200–$2,400', '$900–$1,800'],
                ['Resale at 10y', '40–60% retained', '35–50% retained'],
                ['CSF / SMS reference', 'Yes', 'Yes'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-brand-white' : 'bg-brand-surface'}>
                  <td className="px-4 py-3 font-bold text-brand-dark border-b border-brand-border">{row[0]}</td>
                  <td className="px-4 py-3 text-brand-text-mid border-b border-brand-border">{row[1]}</td>
                  <td className="px-4 py-3 text-brand-text-mid border-b border-brand-border">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="decision">Which Should You Buy?</h2>
        <p>The decision is almost entirely determined by what you ride and how you compete.</p>

        <h3>Buy Stubben if:</h3>
        <ul>
          <li>You ride dressage seriously (Training Level and above)</li>
          <li>Your horse&apos;s back is expected to change — young horse, returning from injury, seasonal topline variation</li>
          <li>You ride multiple horses and want one saddle that adjusts</li>
          <li>You expect to keep your saddle 20+ years</li>
          <li>Resale value matters to you</li>
        </ul>

        <h3>Buy Pessoa if:</h3>
        <ul>
          <li>You compete in show jumping at 1.10m or above</li>
          <li>You prioritize close-contact feel and minimal bulk between yourself and the horse</li>
          <li>You have one horse, one consistent fit, and don&apos;t need an adjustable tree</li>
          <li>You want a saddle with elite competition pedigree</li>
        </ul>

        <h3>Don&apos;t buy either if:</h3>
        <ul>
          <li>You ride all-purpose or recreational — a Bates Caprilli or used Bates is more practical at lower cost (<Link href="/brands/bates">see Bates review</Link>)</li>
          <li>You ride trail or endurance — a Wintec Pro Endurance or Western trail saddle is the right tool (<Link href="/brands/wintec">see Wintec review</Link>)</li>
          <li>Your budget is sub-$2,000 new — used Stubben or Pessoa is better value than buying the cheapest model in either lineup</li>
        </ul>

        <h2>The Used-Market Angle</h2>
        <p>A serious consideration most riders miss: <strong>used Stubben or Pessoa is usually a better purchase than new mid-tier brand.</strong> A used Roxane at $1,500–$2,000 typically out-builds a new Bates or Collegiate at the same price point. The used market for both Stubben and Pessoa is well-developed and trustworthy — see our <Link href="/guides/used-saddle-buying-guide">used saddle buying guide</Link> for the inspection protocol. For riders with $1,500–$2,500 budgets, the used premium market is the smartest place to shop.</p>

        <h2>Next Steps</h2>
        <ul>
          <li>Read the full <Link href="/reviews/stubben-saddle-review">Stubben Roxane, Portos & Aramis review</Link></li>
          <li>Read the full <Link href="/reviews/pessoa-saddle-review">Pessoa Gen X Pro, Legacy & Optimum review</Link></li>
          <li>Browse all <Link href="/reviews/best-english-saddles">best English saddles ranked by discipline</Link></li>
          <li>Browse the <Link href="/reviews/best-dressage-saddles">dedicated dressage saddle buyer&apos;s guide</Link></li>
          <li>If you&apos;re fitting a horse for either brand, start with the <Link href="/guides/saddle-fit-guide">saddle fit guide</Link></li>
        </ul>
      </div>
    </ArticleLayout>
  )
}
