/**
 * /moving/[slug] — relocating-with-a-ferret guide pages.
 *
 * Static-generated from MOVING_GUIDES. Distinct long-form, informational
 * pages via the shared GuideArticle template. Informational, not legal
 * advice; byline "Ferrets.com Editorial"; server component only.
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildMetadata } from '@carloOS/ui'
import { GuideArticle } from '@/components/GuideArticle'
import { MOVING_GUIDES, MOVING_SLUGS } from '@/data/guides/moving'

export function generateStaticParams() {
  return MOVING_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const guide = MOVING_GUIDES[slug]
  if (!guide) {
    return buildMetadata({
      siteId: 'ferrets-com',
      title: 'Moving Guide Not Found',
      description: 'The requested moving guide does not exist.',
      path: `/moving/${slug}`,
      noIndex: true,
    })
  }
  return buildMetadata({
    siteId: 'ferrets-com',
    title: guide.title,
    description: guide.dek,
    path: `/moving/${guide.slug}`,
    type: 'article',
    category: 'Moving',
  })
}

export default async function MovingGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const guide = MOVING_GUIDES[slug]
  if (!guide) notFound()

  return (
    <GuideArticle
      eyebrow={guide.eyebrow}
      title={guide.title}
      heading={guide.heading}
      dek={guide.dek}
      tldr={guide.tldr}
      path={`/moving/${guide.slug}`}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Moving', href: '/moving' },
        { name: guide.heading ?? guide.title, href: `/moving/${guide.slug}` },
      ]}
      sections={guide.sections}
      faqs={guide.faqs}
      related={guide.related}
      source={guide.source}
    />
  )
}
