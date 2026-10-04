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
    NEXT_PUBLIC_SITE_ID: 'vets-co',
  },
  async redirects() {
    return [
      // Browsers request these even when the page links /icon.svg and /apple-icon.
      { source: '/favicon.ico', destination: '/icon.svg', permanent: true },
      { source: '/favicon.png', destination: '/apple-icon', permanent: true },
      { source: '/apple-touch-icon.png', destination: '/apple-icon', permanent: true },
      { source: '/apple-touch-icon-precomposed.png', destination: '/apple-icon', permanent: true },
    ]
  },
}

export default nextConfig
