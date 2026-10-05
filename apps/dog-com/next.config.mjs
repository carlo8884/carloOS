import { crossSiteHref } from '../../packages/config/site-origin.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@carloOS/ui', '@carloOS/config', '@carloOS/db'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '**.supabase.co' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SITE_ID: 'dog-com',
    // Apex in production. Preview builds link the public Vercel alias, not SSO deployment URLs.
    NEXT_PUBLIC_SITE_ORIGIN_MODE: process.env.VERCEL_ENV === 'preview' ? 'preview' : 'apex',
  },
  async redirects() {
    return [
      {
        source: '/reviews/best-pet-insurance',
        destination: crossSiteHref('vets-co', '/reviews/best-pet-insurance'),
        permanent: false,
      },
      {
        source: '/talk-to-a-vet',
        destination: crossSiteHref('vets-co', '/telehealth'),
        permanent: false,
      },
      // Browsers request these even when the page links /icon.svg and /apple-icon.
      {
        source: '/reviews/easy-walk-vs-front-range-guide',
        destination: '/reviews/front-clip-vs-back-clip-guide',
        permanent: true,
      },
      { source: '/favicon.ico', destination: '/icon.svg', permanent: true },
      { source: '/favicon.png', destination: '/apple-icon', permanent: true },
      { source: '/apple-touch-icon.png', destination: '/apple-icon', permanent: true },
      { source: '/apple-touch-icon-precomposed.png', destination: '/apple-icon', permanent: true },
    ]
  },
}

export default nextConfig
