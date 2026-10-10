import { NextResponse, type NextRequest } from 'next/server'
import { wwwApexRedirect } from '@carloOS/config/apex-redirect'
import { robotsTagForHost } from '@carloOS/config/indexing'
import { applySecurityHeaders } from '@carloOS/config/security-headers'

export function middleware(request: NextRequest) {
  const dest = wwwApexRedirect(request.headers.get('host'), request.nextUrl.pathname, request.nextUrl.search)
  if (dest) {
    const redirect = NextResponse.redirect(dest, 308)
    applySecurityHeaders(redirect)
    return redirect
  }
  const response = NextResponse.next()
  const tag = robotsTagForHost(request.headers.get('host'))
  if (tag) response.headers.set('X-Robots-Tag', tag)
  applySecurityHeaders(response)
  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
