import type { ReactNode } from 'react'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

const articleSchema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Dog Age in Human Years Calculator',
  description: 'Convert a dog\'s age to a human-year equivalent with a banded planning figure. Not an AVMA or AAHA chart, and not the multiply-by-7 rule.',
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
