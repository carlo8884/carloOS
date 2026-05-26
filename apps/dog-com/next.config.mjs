/** @type {import('next').NextConfig} */
const nextConfig = {
  // Transpile shared packages in monorepo
  transpilePackages: ['@carloOS/ui', '@carloOS/config', '@carloOS/db'],

  // Image optimization — Unsplash CDN whitelisted
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '**.supabase.co' },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // Strict mode
  reactStrictMode: true,

  // Environment variables exposed to client
  env: {
    NEXT_PUBLIC_SITE_ID: 'dog-com',
  },
}

export default nextConfig
