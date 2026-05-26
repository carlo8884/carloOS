import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { getPost } from '@carloOS/db'

interface BreedHealthPageProps { params: { slug: string } }

const KNOWN = ['golden-retriever-health', 'labrador-health', 'french-bulldog-health', 'german-shepherd-health']

export async function generateStaticParams() {
  return KNOWN.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: BreedHealthPageProps): Promise<Metadata> {
  try {
    const post = await getPost('vets-co', params.slug)
    if (post) return buildMetadata({
      siteId: 'vets-co', title: post.meta_title ?? post.title,
      description: post.meta_description ?? '', path: `/breeds/${params.slug}`, type: 'article',
    })
  } catch { /* */ }
  const name = params.slug.replace(/-health$/, '').split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
  return buildMetadata({
    siteId: 'vets-co',
    title: `${name} Health Guide — Common Conditions & Preventive Care`,
    description: `Complete ${name} health guide. Common conditions, health risks, preventive care schedule, and when to see a veterinary specialist.`,
    path: `/breeds/${params.slug}`, type: 'article',
  })
}

export default async function BreedHealthPage({ params }: BreedHealthPageProps) {
  let post
  try { post = await getPost('vets-co', params.slug) } catch { /* */ }
  if (!post && !KNOWN.includes(params.slug)) notFound()

  const breedName = params.slug.replace(/-health$/, '').split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
  const schema = buildArticleSchema({
    siteId: 'vets-co',
    title: `${breedName} Health Guide`,
    description: `Common conditions, health risks, and preventive care for ${breedName}.`,
    url: `https://vets.co/breeds/${params.slug}`,
    imageUrl: '',
    authorName: 'Vets.co Medical Team',
    publishedAt: new Date().toISOString(),
    modifiedAt: new Date().toISOString(),
  })

  return (
    <ArticleLayout
      siteId="vets-co"
      hero={{
        title: `${breedName} Health Guide`,
        subtitle: `Common conditions, veterinary monitoring schedule, and specialist referral triggers for ${breedName} owners.`,
        category: 'Breed Health Guide',
        authorName: 'Vets.co Medical Team',
        authorAvatar: '👩‍⚕️',
        publishedAt: 'May 2025',
        readTime: '9 min',
        dvmReviewed: true,
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Breed Guides', href: '/breeds' },
        { name: `${breedName} Health`, href: `/breeds/${params.slug}` },
      ]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: 'Common Conditions', href: '#conditions' },
          { label: 'Preventive Schedule', href: '#preventive' },
          { label: 'When to See a Specialist', href: '#specialist' },
          { label: 'Pet Insurance', href: '#insurance' },
        ]} />
        <RelatedLinks title="Related" links={[
          { label: 'Best Pet Insurance 2025', href: '/reviews/best-pet-insurance' },
          { label: 'Find a Specialist', href: '/find-a-vet' },
          { label: 'Emergency Signs Guide', href: '/health/emergency-signs' },
        ]} />
        <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips"
          subtitle="DVM-written guidance every Tuesday." source={`breed-${params.slug}`} />
      </>}
    >
      {post?.body_html
        ? <div className="carloOS-article" dangerouslySetInnerHTML={{ __html: post.body_html }} />
        : <div className="carloOS-article">
            <p>Full {breedName} health guide coming soon. In the meantime,{' '}
              <a href="/find-a-vet">find a veterinary specialist</a> or{' '}
              <a href="/reviews/best-pet-insurance">compare pet insurance plans</a>.</p>
          </div>
      }
    </ArticleLayout>
  )
}
