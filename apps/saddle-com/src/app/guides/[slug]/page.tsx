import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { getPost } from '@carloOS/db'

interface GuidePageProps { params: { slug: string } }

const KNOWN = ['saddle-fit-guide', 'seat-size-guide', 'used-saddle-buying-guide', 'leather-care-guide']

const GUIDE_META: Record<string, { title: string; subtitle: string; toc: Array<{label: string; href: string}> }> = {
  'saddle-fit-guide': {
    title: 'Saddle Fit Guide — How to Check Fit for Horse and Rider',
    subtitle: 'A correctly fitted saddle is the foundation of every sound training programme. Certified fitter Victoria Marsh explains the 4-point check every owner should know.',
    toc: [{ label: 'Why Fit Matters', href: '#why' }, { label: 'The 4-Point Check', href: '#check' }, { label: 'Common Problems', href: '#problems' }, { label: 'When to Call a Fitter', href: '#fitter' }],
  },
  'seat-size-guide': {
    title: 'Saddle Seat Size Guide — Find Your Correct Seat Size',
    subtitle: 'Seat size affects balance, position, and comfort. The correct method uses seat bone measurement — not height or weight. This guide explains exactly how.',
    toc: [{ label: 'Seat Bone Measurement', href: '#measure' }, { label: 'Discipline Adjustments', href: '#discipline' }, { label: 'Fitting by Feel', href: '#feel' }],
  },
  'used-saddle-buying-guide': {
    title: 'Buying a Used Saddle — Complete Inspection Checklist',
    subtitle: 'Used saddles offer substantial savings — if you know what to check. A master saddler walks through tree integrity, billet condition, panel inspection, and pricing.',
    toc: [{ label: 'Tree Integrity Test', href: '#tree' }, { label: 'Billets & Girth Straps', href: '#billets' }, { label: 'Panel Inspection', href: '#panels' }, { label: 'Leather Condition', href: '#leather' }, { label: 'Fair Price Guide', href: '#price' }],
  },
  'leather-care-guide': {
    title: 'Leather Saddle Care Guide — Cleaning, Conditioning & Storage',
    subtitle: 'Proper leather care extends saddle life by decades and preserves resale value. A master saddler explains the correct sequence, products, and what never to use.',
    toc: [{ label: 'Cleaning Frequency', href: '#frequency' }, { label: 'Products to Use', href: '#products' }, { label: 'Products to Avoid', href: '#avoid' }, { label: 'Seasonal Storage', href: '#storage' }],
  },
}

export async function generateStaticParams() {
  return KNOWN.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const meta = GUIDE_META[params.slug]
  if (!meta) return {}
  return buildMetadata({ siteId: 'saddle-com', title: meta.title, description: meta.subtitle, path: `/guides/${params.slug}`, type: 'article' })
}

export default async function SaddleGuidePage({ params }: GuidePageProps) {
  const meta = GUIDE_META[params.slug]
  if (!meta && !KNOWN.includes(params.slug)) notFound()

  let post; try { post = await getPost('saddle-com', params.slug) } catch { /* */ }

  const schema = buildArticleSchema({
    siteId: 'saddle-com',
    title: meta?.title ?? params.slug,
    description: meta?.subtitle ?? '',
    url: `https://saddle.com/guides/${params.slug}`, imageUrl: '',
    authorName: 'Victoria Marsh, CSF + James Whitfield, Master Saddler',
    publishedAt: new Date().toISOString(), modifiedAt: new Date().toISOString(),
  })

  return (
    <ArticleLayout
      siteId="saddle-com"
      hero={{
        title: meta?.title ?? params.slug.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' '),
        subtitle: meta?.subtitle,
        category: 'Buying Guide',
        authorName: 'Victoria Marsh, CSF · James Whitfield, Master Saddler',
        authorAvatar: '🐴',
        publishedAt: 'May 2025',
        readTime: '10 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Guides', href: '/guides' },
        { name: meta?.title?.split('—')[0].trim() ?? params.slug, href: `/guides/${params.slug}` },
      ]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={meta?.toc ?? []} />
        <RelatedLinks title="Related" links={[
          { label: 'Best English Saddles 2025', href: '/reviews/best-english-saddles' },
          { label: 'Stubben Review 2025', href: '/reviews/stubben-saddle-review' },
          { label: 'Pessoa Review 2025', href: '/reviews/pessoa-saddle-review' },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buying Guide" subtitle="Saddle reviews and market intel." source={`guide-${params.slug}`} />
      </>}
    >
      {post?.body_html
        ? <div className="carloOS-article" dangerouslySetInnerHTML={{ __html: post.body_html }} />
        : <div className="carloOS-article"><p className="text-brand-text-light italic">Full guide coming soon.</p></div>
      }
    </ArticleLayout>
  )
}
