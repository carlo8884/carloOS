import { NextResponse } from 'next/server'

const DESTINATION = '/training/puppy-schedule'

function redirect(request: Request) {
  return NextResponse.redirect(new URL(DESTINATION, request.url), 301)
}

export function GET(request: Request) {
  return redirect(request)
}

export function HEAD(request: Request) {
  return redirect(request)
}
