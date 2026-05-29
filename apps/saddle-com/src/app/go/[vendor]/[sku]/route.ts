// Affiliate redirect — Architect Directive 2 / P2.
// See packages/ui/src/server/affiliate-redirect.ts for the handler.
// Mirror this file into every app under /go/[vendor]/[sku]/route.ts.

import { handleAffiliateRedirect } from '@carloOS/ui/server/affiliate-redirect'

export const GET = handleAffiliateRedirect('saddle-com')
