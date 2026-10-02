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
  },
  async redirects() {
    return [
      {
        source: '/tools/fish-stocking-calculator',
        destination: '/tools/stocking-calculator',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
