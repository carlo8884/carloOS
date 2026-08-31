import { NextResponse } from 'next/server'
import { handleSubscribePost } from '@carloOS/config'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  const result = await handleSubscribePost(req, { site: 'fish.com' })
  return NextResponse.json(result.body, { status: result.status })
}
