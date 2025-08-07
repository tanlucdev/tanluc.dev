"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import ThemeSwitcher from "@/app/components/ThemeSwitcher";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState, useEffect, use } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations, useLocale } from "next-intl";
import LanguageChange from "./LanguageChange";
import darkLogo from "@/public/logo/tanlucdev-dark.png";
import lightLogo from "@/public/logo/tanlucdev-light.png";

const links = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/blog",
    title: "Blog",
  },
  {
    path: "/tools",
    title: "Tools",
  },
] as const;
const HamburgerButton = ({ isOpen, onClick, theme }: { isOpen: boolean; onClick: () => void, theme: string | undefined }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-center items-center w-8 h-8 text-white"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <span className={`block w-5 h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-black'} mb-1 transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
      <span className={`block w-5 h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-black'} transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
      <span className={`block w-5 h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-black'} mt-1 transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
    </button>
  );
};
export default function Navigation() {
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const theme = useTheme();
  const locale = useLocale();
  const [mounted, setMounted] = useState(false);
  const currentPath = pathname.replace(`/${locale}`, '') || '/';

  useEffect(() => setMounted(true), []);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="md:mt-6">
      <nav className="mx-auto flex max-w-[700px] items-center justify-between gap-3 px-4 py-3 md:px-6">
        {mounted && (
          <Link href="/" className="hidden shrink-0 text-primary md:block">
            {theme.theme === 'dark'
              ? <Image height={36} width={36} src={darkLogo} alt="Logo dark" />
              : <Image height={36} width={36} src={lightLogo} alt="Logo light" />
            }

          </Link>
        )}

        <div className="hidden md:flex gap-1">
          {links.map((link) => (
            <Link
              key={link.path}
              href={`/${locale}${link.path === '/' ? '' : link.path}`}
              className={`${currentPath === link.path ? "text-primary" : "text-secondary"
                } relative rounded-lg px-3 py-1.5 text-sm transition-colors`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {currentPath === link.path && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 -z-10 rounded-lg bg-tertiary"
                  // style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {t(link.title)}
            </Link>
          ))}
        </div>


        <div className="md:hidden">
          {
            mounted && (
              <HamburgerButton
                isOpen={mobileMenuOpen}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                theme={theme.theme}
              />
            )
          }

        </div>


        <div className="flex h-8 w-14 items-center justify-center">
          <LanguageChange />
          <ThemeSwitcher />

        </div>
      </nav>
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden px-4 py-2 bg-background border-t border-border"
        >
          <div className="flex flex-col items-start gap-2 py-2">
            {links.map((link) => (
              <Link
                key={link.path}
                href={`/${locale}${link.path === '/' ? '' : link.path}`}
                className={`${currentPath === link.path ? "text-primary" : "text-secondary"
                  } relative rounded-lg px-3 py-2 text-sm transition-colors w-full`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {currentPath === link.path && (
                  <motion.span
                    layoutId="mobile-bubble"
                    className="absolute inset-0 -z-10 rounded-lg bg-tertiary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {t(link.title)}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
