import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, StockImage, SchemaScript, combineSchemas, buildOrganizationSchema, buildWebSiteSchema } from '@carloOS/ui'
import { BodyConditionScoreCalculator } from '../components/visual/BodyConditionScoreCalculator'
import { DisciplineFilter } from '../components/DisciplineFilter'
import { HomeHero } from '../components/HomeHero'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'The Reference for Horse Owners',
  description:
    'Horses.com — research-based reference for horse owners: breed guides, equine health, gear reviews, supplement evaluations, and the 90-day first-horse roadmap.',
  path: '/',
  type: 'website',
})

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <DisciplineFilter />
    </>
  )
}
