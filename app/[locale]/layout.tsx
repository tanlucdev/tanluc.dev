import "../globals.css";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Inter } from "next/font/google";
import Script from "next/script";

import Navigation from "@/app/components/Navigation";
import { ThemeProvider } from "@/app/components/ThemeProvider";
import previewImage from "@/public/preview-image.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://tanluc.dev"),
  title: "Tan Luc",
  description:
    "Ho Chi Minh City based Software Engineer, sharing experience and and insights on technology.",
  verification: {
    google: "2DX2R2IaVQIeDR4rioa_gIlZ1njQDvftJGdkHxP4J6I",
  },
  openGraph: {
    title: "Tan Luc",
    url: "https://tanluc.dev/",
    images: [{ url: previewImage.src, alt: "tanluc.dev" }],
  },
};
const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
// Pre-render all locales (extend if you add more)
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "vi" }];
}

export default async function LocaleLayout({
  children,
  params: { locale },
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
      suppressHydrationWarning
    >
      <body
        className={`${inter.className} width-full bg-contrast text-primary antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navigation />
            <div className="mx-auto max-w-[800px] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
              {children}
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
        <Analytics />
        {googleAnalyticsId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAnalyticsId}');
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
