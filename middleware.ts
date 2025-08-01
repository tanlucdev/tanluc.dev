import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// The middleware negotiates the locale (Accept-Language header, cookie, prefix, etc.)
export default createMiddleware(routing);

// Skip Next.js internals & public assets
export const config = {
  matcher: ['/((?!_next|favicon.ico|images|api).*)']
};