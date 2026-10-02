/** Bare /go — log the click and send the reader to the disclosure. Never 404. */
import { createGoIndexGet } from '@carloOS/ui/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export const GET = createGoIndexGet('horses-com')
