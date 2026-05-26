import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { getPost } from '@carloOS/db'

interface HealthPageProps { params: { slug: string } }

const KNOWN = ['emergency-signs', 'golden-retriever-health', 'labrador-health', 'french-bulldog-health', 'german-shepherd-health']

export async function generateStaticParams() {
  return KNOWN.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: HealthPageProps): Promise<Metadata> {
  // Redirect known slugs to their static pages
  if (params.slug === 'emergency-signs') return buildMetadata({ siteId: 'vets-co', title: '15 Signs Your Pet Needs Emergency Care', description: 'Board-certified ER vet explains 15 symptoms requiring immediate care.', path: '/health/emergency-signs', type: 'article' })
  try {
    const post = await getPost('vets-co', params.slug)
    if (post) return buildMetadata({ siteId: 'vets-co', title: post.title, description: post.meta_description ?? '', path: `/health/${params.slug}`, type: 'article' })
  } catch { /* */ }
  const name = params.slug.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
  return buildMetadata({ siteId: 'vets-co', title: name, description: '', path: `/health/${params.slug}` })
}

export default async function VetsHealthPage({ params }: HealthPageProps) {
  let post; try { post = await getPost('vets-co', params.slug) } catch { /* */ }
  if (!post && !KNOWN.includes(params.slug)) notFound()

  const title = post?.title ?? params.slug.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
  const schema = buildArticleSchema({ siteId: 'vets-co', title, description: post?.excerpt ?? '', url: `https://vets.co/health/${params.slug}`, imageUrl: '', authorName: 'Vets.co Medical Team', publishedAt: new Date().toISOString(), modifiedAt: new Date().toISOString() })

  return (
    <ArticleLayout
      siteId="vets-co"
      hero={{ title, category: 'Pet Health Guide', authorAvatar: '👩‍⚕️', authorName: 'Vets.co Medical Team', publishedAt: 'May 2025', readTime: '9 min', dvmReviewed: true }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Pet Health', href: '/health' }, { name: title.split('—')[0].trim(), href: `/health/${params.slug}` }]}
      schema={schema}
      sidebar={<>
        <RelatedLinks title="Related Guides" links={[
          { label: 'Emergency Signs Guide', href: '/health/emergency-signs' },
          { label: 'Find a Specialist', href: '/find-a-vet' },
          { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' },
        ]} />
        <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="DVM-written guidance every Tuesday." source={`health-${params.slug}`} />
      </>}
    >
      {post?.body_html
        ? <div className="carloOS-article" dangerouslySetInnerHTML={{ __html: post.body_html }} />
        : <div className="carloOS-article"><p className="text-brand-text-light italic">Guide coming soon. See our <a href="/health/emergency-signs" className="text-brand-primary">emergency signs guide</a> or <a href="/find-a-vet" className="text-brand-primary">find a specialist</a>.</p></div>
      }
    </ArticleLayout>
  )
}
