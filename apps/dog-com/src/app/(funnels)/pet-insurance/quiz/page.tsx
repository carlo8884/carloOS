import type { Metadata } from 'next'
import { buildMetadata } from '@carloOS/ui'
import QuizClient from './quiz-client'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Pet Insurance Quiz — Find Your Best Match | Dog.com',
  description: '60-second quiz matches you to the right pet insurance carrier based on species, age, priority, and budget.',
  path: '/pet-insurance/quiz',
  type: 'website',
})

export default function Page() {
  return <QuizClient />
}
