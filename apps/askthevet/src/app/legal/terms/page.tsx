import type { Metadata } from 'next'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'askthevet',
  title: 'Terms of Service',
  description: 'Terms governing your use of AskTheVet.com.',
  path: '/legal/terms',
})

export default function Page() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-12 prose">
      <h1>Terms of Service</h1>
      <p>
        AskTheVet provides consumer health information for educational purposes only. It is not
        a substitute for veterinary care. Use of this site is at your own risk. In a
        life-threatening emergency, contact your nearest emergency veterinarian directly.
      </p>
    </article>
  )
}
