import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "English Saddle Makers — Stubben, County, Bates, Wintec | Saddle.com",
  description: "The major English saddle makers: Stubben, County, Bates, Wintec, Custom Saddlery, and Pessoa — origins, specialties, and house styles.",
  path: "/guides/english-saddle-makers",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "English Saddle Makers",
  description: "Stubben, County, Bates, Wintec, Collegiate, Custom Saddlery, and Pessoa — origins, specialties, and characteristics of major saddle makers.",
  url: "https://saddle.com/guides/english-saddle-makers",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function EnglishSaddleMakersPage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "English Saddle Makers — A Maker Reference", subtitle: "Beyond the French bespoke houses, a set of established makers defines the English saddle market — from German steel-sprung trees to Australian adjustable systems and American made-to-measure dressage.", category: "Brand Reference", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "11 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "English Saddle Makers", href: "/guides/english-saddle-makers" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "A Diverse Market", href: "#market" },
          { label: "Stubben", href: "#stubben" },
          { label: "County", href: "#county" },
          { label: "Bates & Wintec", href: "#bates" },
          { label: "Custom Saddlery", href: "#custom" },
          { label: "Pessoa & Collegiate", href: "#others" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Best English Saddles", href: "/reviews/best-english-saddles" },
          { label: "French Saddle Makers", href: "/guides/french-saddle-makers" },
          { label: "Saddle Brands by Price", href: "/guides/saddle-brands-by-price" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-english-saddle-makers" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>The English saddle market — meaning English-style saddles, made worldwide — runs on a handful of established makers, each with a distinct philosophy: German steel-sprung longevity, English wool-flocked rebuildability, Australian adjustable engineering, American made-to-measure dressage. Knowing what each maker stands for narrows the search before you ever sit in a saddle.</DropCap>

        <CalloutBox variant="tip" title="Match the maker philosophy to your situation">
          Each maker is built around a philosophy — adjustability, rebuildability, bespoke fit, or value. The best maker for you is the one whose philosophy matches your horse and circumstances: an adjustable brand for a changing horse, a rebuildable wool brand for long-term ownership, a bespoke maker for a hard-to-fit pair. Buy the philosophy that fits your life, not just the badge.
        </CalloutBox>

        <h2 id="market">A Diverse Market</h2>
        <p>The makers below appear with fuller profiles in the <a href="/reviews/best-english-saddles">English saddle reviews</a>; this guide is the maker-level reference. They complement the bespoke French houses in the <a href="/guides/french-saddle-makers">French saddle makers reference</a>, and their price positioning is mapped in the <a href="/guides/saddle-brands-by-price">brands by price guide</a>.</p>

        <h2 id="stubben">Stübben</h2>
        <p>Stübben (Switzerland/Germany, established 1894) is the German dressage standard: hand-finished bridle leather, a durable steel-sprung tree, and the Quick-Change tree-width system that lets a saddler swap between widths without rebuilding the saddle. Stübbens are heavier and longer-lived than mass-produced alternatives, with an excellent resale market — a decade-old Stübben in good condition is often the best-value premium English saddle going. Best for dressage, classical riders, and long-term owners.</p>

        <h2 id="county">County Saddlery</h2>
        <p>County (originally English, now US-headquartered) is the wool-flocked specialist: traditional rebuildable wool panels and a serious in-house fitting program. The wool panel can be reflocked and reshaped as a horse changes over years, dramatically extending the saddle&apos;s life — the rebuildability that underpins its strong resale (see the <a href="/guides/saddle-resale-value">resale value guide</a>). Best for hunters and dressage riders who prefer the connected feel of wool and commit to periodic saddler service.</p>

        <h2 id="bates">Bates &amp; Wintec</h2>
        <p>Bates (Australia) pioneered the CAIR air-panel system and the EASY-CHANGE adjustable gullet, making it the adjustable-system specialist — ideal for horses that change shape and riders wanting one saddle across horses. <strong>Wintec</strong> is its synthetic sister brand: lighter, washable, weatherproof, sharing the CAIR and EASY-CHANGE technology at a lower price. Together they own the adjustable and synthetic space, spanning all-purpose to specialist geometries. Best for changeable horses, foul weather, and value-conscious adjustability.</p>

        <h2 id="custom">Custom Saddlery</h2>
        <p>Custom Saddlery (USA, Virginia) builds made-to-measure dressage saddles, with a representative taking wither tracings and rider measurements to specify the tree, panel, flap, and twist for the individual pair. Models like the Wolfgang and Icon have strong followings at small-tour and grand-prix dressage. Best for hard-to-fit horses, riders with seat-fit issues production trees do not resolve, and serious dressage competitors — with the bespoke trade-off of a longer build time and a narrower resale.</p>

        <h2 id="others">Pessoa &amp; Collegiate</h2>
        <p><strong>Pessoa</strong> (Brazil/France, Nelson Pessoa heritage) is the showjumper&apos;s saddle: designed by top-of-the-sport competitors, with forward-flap, close-contact, minimal-bulk geometry engineered for grand-prix jumping. Best for show jumping, hunters, and equitation. <strong>Collegiate</strong> (Weatherbeeta group, India) is the practical entry brand: real leather, adjustable gullet, accessible price, serviceable for several years — best for first saddles, lesson programs, and growing horses, as the <a href="/guides/saddle-brands-by-price">brands by price guide</a> places it.</p>
        <p>From German longevity to Australian adjustability to American made-to-measure, the English-saddle makers offer a philosophy for every situation. Identify the philosophy that matches your horse and circumstances, then let fit on the horse choose the model. The <a href="/reviews/best-english-saddles">English saddle reviews</a> rank specific saddles within each maker.</p>

        <CalloutBox variant="note" title="Sources">
          Manufacturer published documentation (Stübben, County, Bates, Wintec, Custom Saddlery, Pessoa, Collegiate). Society of Master Saddlers references, <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">mastersaddlers.co.uk</a>. Used-saddle market context. Competition-use observation.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
