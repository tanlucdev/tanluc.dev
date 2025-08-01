import { defineRouting } from 'next-intl/routing';

// Supported locales
export const locales = ['en', 'vi'] as const;
export type AppLocale = (typeof locales)[number];

// Default locale
export const defaultLocale: AppLocale = 'en';

// Shared routing configuration used by middleware & navigation helpers
export const routing = defineRouting({
  locales,
  defaultLocale,
  // Show locale prefix for all locales – change to 'as-needed' if you want to drop the prefix for the default locale
  localePrefix: 'always',

  // Optional: Localized pathnames (extend as required)
  pathnames: {
    '/': {
      vi: '/',
      en: '/'
    },
    '/about': {
      vi: '/about',
      en: '/about'
    },
    '/blog': {
      vi: '/blog',
      en: '/blog'
    },
    '/tools': {
      vi: '/tools',
      en: '/tools'
    }
  }
});