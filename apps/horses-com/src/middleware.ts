import { NextResponse, type NextRequest } from 'next/server'
import { robotsTagForHost } from '@carloOS/config/indexing'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const tag = robotsTagForHost(request.headers.get('host'))
  if (tag) response.headers.set('X-Robots-Tag', tag)
  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
