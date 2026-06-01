import { notFound } from "next/navigation"
import { buildBreadcrumbSchema, SchemaScript } from '@carloOS/ui'

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://fish.com/' },
    { name: 'Species', url: 'https://fish.com/species' },
  ],
})

export default function SlugPage() {
  notFound()
  return <SchemaScript schema={breadcrumbSchema} />
}

export function generateStaticParams() { return [] }
