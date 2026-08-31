/** /go/{vendor}/{sku} — shared hop helper. Never PLACEHOLDER. */
import { createGoGet } from '@carloOS/ui/server'
import { affiliateRoutes } from '@/data/affiliate-routes'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export const GET = createGoGet('dog-com', affiliateRoutes)
