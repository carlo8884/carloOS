import type { Metadata } from 'next'
import { buildMetadata, SchemaScript, combineSchemas, buildOrganizationSchema, buildWebSiteSchema } from '@carloOS/ui'
import { HomeHero } from '../components/HomeHero'
import { HomeTriage } from '../components/HomeTriage'
import { HomeGuides } from '../components/HomeGuides'

const homeSchema = combineSchemas(
  buildOrganizationSchema({ siteId: 'fish-com', name: 'Fish.com', url: 'https://fish.com' }),
  buildWebSiteSchema({ siteId: 'fish-com', name: 'Fish.com', url: 'https://fish.com' }),
)

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: "Fish.com — The Aquarist's Tank Control Center",
  description:
    'Cloudy water, ammonia spikes, fish gasping, algae, stocking — practical aquarium guides to help you fix or plan your tank.',
  path: '/',
  type: 'website',
})

export default function HomePage() {
  return (
    <>
      <SchemaScript schema={homeSchema} />
      <HomeHero />
      <HomeTriage />
      <HomeGuides />
    </>
  )
}
