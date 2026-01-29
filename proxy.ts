import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from './i18n';

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameParts = pathname.split('/');
  const potentialLocale = pathnameParts[1];

  const isLocalePath = locales.some(
    locale => potentialLocale.toLowerCase() === locale.toLowerCase()
  );

  if (isLocalePath) {
    const normalizedPathname = pathname.toLowerCase();

    if (pathname !== normalizedPathname) {
      const url = request.nextUrl.clone();
      url.pathname = normalizedPathname;
      return NextResponse.rewrite(url);
    }
  }

  return createMiddleware({
    locales,
    defaultLocale,
    localePrefix: 'always',
    localeDetection: true,
  })(request);
}

export const config = {
  matcher: [
    '/((?!api|_next|_vercel|.*\\.[a-z0-9]+$).*)'
  ],
};
