/**
 * /acquiring/[slug] — logistics-of-getting-a-ferret guide pages.
 *
 * Static-generated from ACQUIRING_GUIDES. Distinct long-form, informational
 * pages via the shared GuideArticle template. No affiliate CTAs; byline
 * "Ferrets.com Editorial"; server component only.
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildMetadata } from '@carloOS/ui'
import { GuideArticle } from '@/components/GuideArticle'
import { ACQUIRING_GUIDES, ACQUIRING_SLUGS } from '@/data/guides/acquiring'

export function generateStaticParams() {
  return ACQUIRING_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const guide = ACQUIRING_GUIDES[slug]
  if (!guide) {
    return buildMetadata({
      siteId: 'ferrets-com',
      title: 'Guide Not Found',
      description: 'The requested acquiring guide does not exist.',
      path: `/acquiring/${slug}`,
      noIndex: true,
    })
  }
  return buildMetadata({
    siteId: 'ferrets-com',
    title: guide.title,
    description: guide.dek,
    path: `/acquiring/${guide.slug}`,
    type: 'article',
    category: 'Acquiring',
  })
}

export default async function AcquiringGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const guide = ACQUIRING_GUIDES[slug]
  if (!guide) notFound()

  return (
    <GuideArticle
      eyebrow={guide.eyebrow}
      title={guide.title}
      heading={guide.heading}
      dek={guide.dek}
      tldr={guide.tldr}
      path={`/acquiring/${guide.slug}`}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Acquiring', href: '/acquiring' },
        { name: guide.heading ?? guide.title, href: `/acquiring/${guide.slug}` },
      ]}
      sections={guide.sections}
      faqs={guide.faqs}
      related={guide.related}
      source={guide.source}
    />
  )
}
