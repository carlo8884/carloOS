import type { ReactNode } from 'react'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

const articleSchema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Dog Age in Human Years Calculator',
  description: 'Convert your dog\'s age to a human-year equivalent using the AVMA/AAHA-style banded model -- not the inaccurate multiply-by-7 rule. Enter your dog\'s age and size to get an estimate and life-stage label.',
  url: 'https://dog.com/tools/dog-age-calculator',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
})

export default function DogAgeCalculatorArticleLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      {children}
    </>
  )
}
