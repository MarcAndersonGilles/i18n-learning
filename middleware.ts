// import createMiddleware from 'next-intl/middleware';
 
// export default createMiddleware({
//   // A list of all locales that are supported
//   locales: ['en', 'fr'],
 
//   // Used when no locale matches
//   defaultLocale: 'fr'
// });
 
// export const config = {
//   // Match only internationalized pathnames
//   matcher: ['/', '/(fr|en)/:path*']
// };

import { i18nRouter } from 'next-i18n-router';
import i18nConfig from './i18nConfig';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  return i18nRouter(request, i18nConfig);
}

// applies this middleware only to files in the app directory
export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)'
};