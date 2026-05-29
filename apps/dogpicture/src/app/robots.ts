import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Preview + order pages are personal; keep them out of the index.
        disallow: ['/api/', '/preview/', '/order/'],
      },
    ],
    sitemap: 'https://dogpicture.com/sitemap.xml',
  }
}
