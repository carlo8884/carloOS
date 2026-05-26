import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { getPost } from '@carloOS/db'

interface HealthPageProps { params: { slug: string } }
const KNOWN = ['reptile-feeding-guide', 'uvb-lighting-guide', 'sick-reptile-signs']

export async function generateStaticParams() { return KNOWN.map(slug => ({ slug })) }

export async function generateMetadata({ params }: HealthPageProps): Promise<Metadata> {
  try {
    const post = await getPost('lizard-com', params.slug)
    if (post) return buildMetadata({ siteId: 'lizard-com', title: post.meta_title ?? post.title, description: post.meta_description ?? '', path: '/health/' + params.slug, type: 'article' })
  } catch { /* */ }
  return buildMetadata({ siteId: 'lizard-com', title: params.slug.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' '), description: '', path: '/health/' + params.slug, type: 'article' })
}

export default async function LizardHealthPage({ params }: HealthPageProps) {
  let post; try { post = await getPost('lizard-com', params.slug) } catch { /* */ }
  if (!post && !KNOWN.includes(params.slug)) notFound()
  const title = post?.title ?? params.slug.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
  const schema = buildArticleSchema({ siteId: 'lizard-com', title, description: post?.excerpt ?? '', url: 'https://lizard.com/health/' + params.slug, imageUrl: '', authorName: 'Lizard.com Expert Team', publishedAt: new Date().toISOString(), modifiedAt: new Date().toISOString() })
  return (
    <ArticleLayout siteId="lizard-com" hero={{ title, category: 'Health & Husbandry', authorAvatar: '🦎', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: title, href: '/health/' + params.slug }]}
      schema={schema}
      sidebar={<>
        <RelatedLinks title="Related" links={[
          { label: 'UVB Lighting Guide', href: '/health/uvb-lighting-guide' },
          { label: 'Reptile Feeding Guide', href: '/health/reptile-feeding-guide' },
          { label: 'Sick Reptile Signs', href: '/health/sick-reptile-signs' },
        ]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="20 species — free for subscribers." source={'health-' + params.slug} ctaText="Download Free" />
      </>}
    >
      {post?.body_html ? <div className="carloOS-article" dangerouslySetInnerHTML={{ __html: post.body_html }} /> : <div className="carloOS-article"><p style={{ color: 'rgba(238,240,228,0.55)', fontStyle: 'italic' }}>Guide coming soon.</p></div>}
    </ArticleLayout>
  )
}
