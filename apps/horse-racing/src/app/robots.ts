import { MetadataRoute } from 'next'
import { getSiteConfig } from '@carloOS/config'

export default function robots(): MetadataRoute.Robots {
  const base = getSiteConfig('horse-racing').theme.siteUrl
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${base}/sitemap.xml`,
  }
}
