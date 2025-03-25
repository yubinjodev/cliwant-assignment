import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = new URL(request.url)
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/bids/request-for-proposal', request.url))
  }

  //   return NextResponse.next();
}
