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
  // {
  //   path: "/",
  //   title: "Home",
  // },
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
  {
    path: "/milestones",
    title: "Milestones",
  },
] as const;

const homeLink = { path: "/", title: "Home" };
const mobileLinks = [homeLink, ...links];

const HamburgerButton = ({
  isOpen,
  onClick,
  theme,
}: {
  isOpen: boolean;
  onClick: () => void;
  theme: string | undefined;
}) => {
  return (
    <button
      onClick={onClick}
      className="flex h-8 w-8 flex-col items-center justify-center text-white"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <span
        className={`block h-0.5 w-5 ${theme === "dark" ? "bg-white" : "bg-black"} mb-1 transition-transform ${isOpen ? "translate-y-1.5 rotate-45" : ""}`}
      ></span>
      <span
        className={`block h-0.5 w-5 ${theme === "dark" ? "bg-white" : "bg-black"} transition-opacity ${isOpen ? "opacity-0" : ""}`}
      ></span>
      <span
        className={`block h-0.5 w-5 ${theme === "dark" ? "bg-white" : "bg-black"} mt-1 transition-transform ${isOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
      ></span>
    </button>
  );
};
export default function Navigation() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const theme = useTheme();
  const locale = useLocale();
  const [mounted, setMounted] = useState(false);
  const currentPath = pathname.replace(`/${locale}`, "") || "/";

  useEffect(() => setMounted(true), []);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="md:mt-6">
      <nav className="mx-auto flex max-w-[800px] items-center justify-between gap-3 px-4 py-3 md:px-6">
        {mounted && (
          <Link href="/" className="hidden shrink-0 text-primary md:block">
            {theme.theme === "dark" ? (
              <Image height={36} width={36} src={darkLogo} alt="Logo dark" />
            ) : (
              <Image height={36} width={36} src={lightLogo} alt="Logo light" />
            )}
          </Link>
        )}

        <div className="hidden gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.path}
              href={`/${locale}${link.path}`}
              className={`${
                currentPath === link.path ? "text-primary" : "text-secondary"
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
          {mounted && (
            <HamburgerButton
              isOpen={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              theme={theme.theme}
            />
          )}
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
          className="bg-background border-border border-t px-4 py-2 md:hidden"
        >
          <div className="flex flex-col items-start gap-2 py-2">
            {mobileLinks.map((link) => (
              <Link
                key={link.path}
                href={`/${locale}${link.path}`}
                className={`${
                  currentPath === link.path ? "text-primary" : "text-secondary"
                } relative w-full rounded-lg px-3 py-2 text-sm transition-colors`}
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
