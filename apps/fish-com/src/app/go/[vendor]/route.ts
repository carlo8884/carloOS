/** Empty /go/{vendor} — 302 to partner home. Shared helper. */
import { createGoGet } from '@carloOS/ui/server'
import { affiliateRoutes } from '@/data/affiliate-routes'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export const GET = createGoGet('fish-com', affiliateRoutes)
