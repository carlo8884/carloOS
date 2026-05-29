import type { Metadata } from 'next'
import { AffiliateDisclosure, buildMetadata } from '@carloOS/ui'
import { QuickQuiz } from '../QuickQuiz'

export const metadata: Metadata = buildMetadata({
  siteId: 'hardmoneyloans',
  title: '60-Second Hard Money Lender Match Quiz',
  description: 'Answer 5 questions about your deal — loan amount, property type, purpose, state, and credit — to see the 3 lenders most likely to fund it.',
  path: '/quiz',
})

export default function QuizPage() {
  return (
    <>
      <AffiliateDisclosure />
      <section className="px-container sm:px-container-sm py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl font-black tracking-tight mb-2">
            60-Second Lender Match
          </h1>
          <p className="text-brand-text-mid mb-8">
            Five questions about your deal. We&apos;ll surface the lenders most likely to fund it — ranked by editorial score and filtered to those licensed in your state.
          </p>
          <QuickQuiz />
        </div>
      </section>
    </>
  )
}
