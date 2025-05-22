//middleware.ts
import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest } from 'next/server'

const I18nMiddleware = createI18nMiddleware({
  locales: ['ar', 'en'],
  defaultLocale: 'en',
  resolveLocaleFromRequest: () => 'en',
})

export default async function middleware(req: NextRequest) {
  return I18nMiddleware(req)
}

export const config = {
  matcher: [
    '/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)',
    '/account/:path*',
  ],
}
