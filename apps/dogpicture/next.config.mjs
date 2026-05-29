/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@carloOS/ui', '@carloOS/config', '@carloOS/db'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '**.supabase.co' },
      { protocol: 'https', hostname: 'oaidalleapiprodscus.blob.core.windows.net' },
      { protocol: 'https', hostname: 'cdn.openai.com' },
      { protocol: 'https', hostname: 'images.printify.com' },
      { protocol: 'https', hostname: 'placehold.co' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SITE_ID: 'dogpicture',
  },
}

export default nextConfig
