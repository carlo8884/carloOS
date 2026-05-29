/**
 * GET /api/order?session_id=cs_test_xxx
 *
 * Polled by /order/[session_id] to surface webhook progress. Returns the
 * minimal status payload — never the full order row, since this endpoint
 * is unauthenticated and we don't want to enumerate customer emails.
 */

import { NextResponse } from 'next/server'
import { getOrderBySession } from '@/lib/orders'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(req: Request) {
  const url = new URL(req.url)
  const sessionId = url.searchParams.get('session_id')
  if (!sessionId) return NextResponse.json({ error: 'session_id required' }, { status: 400 })

  const order = await getOrderBySession(sessionId)
  if (!order) return NextResponse.json({ status: null })

  return NextResponse.json({
    status: order.status,
    productType: order.product_type,
    hasDigital: !!order.image_url,
  })
}
