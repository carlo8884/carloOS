/**
 * Dog.com Article Page — /health/[slug]
 * Server component. Fetches from Supabase, renders via shared ArticleLayout.
 * This is the template that all 200+ article pages will follow.
 */

import { notFound } from 'next/navigation'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { getPost, getPosts } from '@carloOS/db'
import type { Metadata } from 'next'

interface ArticlePageProps {
  params: { slug: string }
}

// ── Static generation ─────────────────────────────────────────────────────────

export async function generateStaticParams() {
  try {
    const posts = await getPosts('dog-com', 'article', 100)
    return posts.map((p) => ({ slug: p.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  try {
    const post = await getPost('dog-com', params.slug)
    if (!post) return {}

    return buildMetadata({
      siteId: 'dog-com',
      title: post.meta_title ?? post.title,
      description: post.meta_description ?? post.excerpt ?? '',
      path: post.path,
      ogImage: post.og_image ?? undefined,
      type: 'article',
      publishedAt: post.published_at ?? undefined,
      modifiedAt: post.updated_at,
      authorName: post.author_name ?? undefined,
    })
  } catch {
    return {}
  }
}

// ─────────────────────────────────────────────────────────────────────────────

export default async function ArticlePage({ params }: ArticlePageProps) {
  let post
  try {
    post = await getPost('dog-com', params.slug)
  } catch {
    // DB not connected — will show 404
  }

  if (!post) notFound()

  const schema = buildArticleSchema({
    siteId: 'dog-com',
    title: post.title,
    description: post.excerpt ?? '',
    url: `https://dog.com${post.path}`,
    imageUrl: post.og_image ?? '',
    authorName: post.author_name ?? 'Dog.com Editorial Team',
    publishedAt: post.published_at ?? post.created_at,
    modifiedAt: post.updated_at,
  })

  return (
    <ArticleLayout
      siteId="dog-com"
      hero={{
        title: post.title,
        subtitle: post.subtitle ?? undefined,
        category: post.content_type === 'article' ? 'Health Guide' : post.content_type,
        authorName: post.author_name ?? undefined,
        authorCredentials: post.author_credentials ?? undefined,
        authorAvatar: post.author_avatar ?? '👩‍⚕️',
        publishedAt: post.published_at
          ? new Date(post.published_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
          : undefined,
        readTime: '8 min',
        dvmReviewed: post.dvm_reviewed,
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Dog Health', href: '/health' },
        { name: post.title, href: post.path },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Overview', href: '#overview' },
              { label: 'Common Conditions', href: '#conditions' },
              { label: 'Preventive Care', href: '#preventive' },
              { label: 'When to See a Vet', href: '#vet' },
            ]}
          />
          <RelatedLinks
            title="Related Guides"
            links={[
              { label: 'Best Pet Insurance 2025', href: '/reviews/best-pet-insurance' },
              { label: 'Find a Specialist', href: '/find-a-vet' },
              { label: 'Dog Symptom Guide', href: '/health/dog-symptoms-guide' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="dog-com"
            title="Free Dog Health Tips"
            subtitle="DVM-written guidance every Tuesday."
            source={`article-${params.slug}`}
          />
        </>
      }
      relatedLinks={[
        { title: 'Golden Retriever Health Guide', href: '/health/golden-retriever-health', category: 'Breed Health' },
        { title: 'Labrador Retriever Health Guide', href: '/health/labrador-health', category: 'Breed Health' },
        { title: 'Dog Symptom Guide', href: '/health/dog-symptoms-guide', category: 'Emergency' },
      ]}
    >
      {/* Article body — rendered HTML from Supabase */}
      {post.body_html ? (
        <div
          className="carloOS-article"
          dangerouslySetInnerHTML={{ __html: post.body_html }}
        />
      ) : (
        <div className="carloOS-article">
          <p className="text-brand-text-light italic">Content coming soon.</p>
        </div>
      )}
    </ArticleLayout>
  )
}
