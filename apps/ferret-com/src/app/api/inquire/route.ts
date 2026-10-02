import { handleInquirePost } from '@carloOS/ui/inquire'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export function POST(req: Request) {
  return handleInquirePost(req, { siteName: 'Ferret.com', siteHost: 'ferret.com' })
}
