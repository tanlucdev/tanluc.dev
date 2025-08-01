import '../globals.css';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Inter } from 'next/font/google';

import Navigation from '@/app/components/Navigation';
import { ThemeProvider } from '@/app/components/ThemeProvider';

export const metadata: Metadata = {
  metadataBase: new URL("https://tanluc.dev"),
  title: 'Tan Luc',
  description:
    'New York City based Software Engineer and a Content Creator, sharing insights on well-designed products and technology advancements.',
  openGraph: {
    title: "Tan Luc",
    url: "https://tanluc.dev/",
    images: [{ url: "https://tanluc.dev/api/og?title=tanluc.dev", alt: "tanluc.dev" }],
  },
};
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
// Pre-render all locales (extend if you add more)
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'vi' }];
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Makes the `useLocale()` hook work in server components
  setRequestLocale(locale);

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    // If the locale file is missing, Next.js will render the 404 page
    return null;
  }

  return (
    <html
      lang={locale}
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className={`${inter.className} width-full bg-contrast text-primary antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navigation />
            <div className="mx-auto max-w-[700px] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
              {children}
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}