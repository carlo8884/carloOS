import type { MetadataRoute } from 'next'
import { headers } from 'next/headers'
import { shouldIndexHost } from '@carloOS/config/indexing'
import { buildRobots } from '@carloOS/config/robots'

export const dynamic = 'force-dynamic'

const APEX = 'https://fish.com'

export default function robots(): MetadataRoute.Robots {
  const host = headers().get('host')
  if (!shouldIndexHost(host)) {
    return { rules: { userAgent: '*', disallow: '/' } }
  }
  return buildRobots(APEX)
}
