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
    NEXT_PUBLIC_SITE_ID: 'fish-com',
    NEXT_PUBLIC_SITE_ORIGIN_MODE: process.env.VERCEL_ENV === 'preview' ? 'preview' : 'apex',
  },
  async redirects() {
    return [
      {
        source: '/tools/fish-stocking-calculator',
        destination: '/tools/stocking-calculator',
        permanent: true,
      },
      {
        source: '/reviews/aquaclear-70-vs-fluval-307-guide',
        destination: '/reviews/hob-vs-canister-guide',
        permanent: true,
      },
      // Browsers request these even when the page links /icon.svg and /apple-icon.
      { source: '/favicon.ico', destination: '/icon.svg', permanent: true },
      { source: '/favicon.png', destination: '/apple-icon', permanent: true },
      { source: '/apple-touch-icon.png', destination: '/apple-icon', permanent: true },
      { source: '/apple-touch-icon-precomposed.png', destination: '/apple-icon', permanent: true },
    ]
  },
}

export default nextConfig
