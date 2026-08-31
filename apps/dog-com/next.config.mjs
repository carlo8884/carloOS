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
  },
  async redirects() {
    return [
      {
        source: '/reviews/best-pet-insurance',
        destination: 'https://vets.co/reviews/best-pet-insurance',
        permanent: false,
      },
      {
        source: '/talk-to-a-vet',
        destination: 'https://vets.co/telehealth',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
