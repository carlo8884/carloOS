import type { Metadata } from 'next'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'askthevet',
  title: 'Privacy Policy',
  description: 'What data AskTheVet collects and how it’s used.',
  path: '/legal/privacy',
})

export default function Page() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-12 prose">
      <h1>Privacy Policy</h1>
      <p>
        AskTheVet stores the question you submit, the species you select, and the AI assessment
        we generate, so you can revisit the result via its URL. We do not require an account.
      </p>
      <p>
        If you opt in to email reminders, we share your email with Mailchimp. You can
        unsubscribe at any time. We use Google Analytics to measure traffic.
      </p>
    </article>
  )
}
