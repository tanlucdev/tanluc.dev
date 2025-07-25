"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import ThemeSwitcher from "@/app/components/ThemeSwitcher";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState, useEffect } from "react";

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

export default function Navigation() {
  const pathname = `/${usePathname().split("/")[1]}`;
  const theme = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <header className="md:mt-6">
      <nav className="mx-auto flex max-w-[700px] items-center justify-between gap-3 px-4 py-3 md:px-6">
        {mounted && (
          <Link href="/" className="hidden shrink-0 text-primary md:block">
            {theme.theme === 'dark'
              ? <Image height={36} width={36} src={'/logo/tanlucdev-dark.png'} alt="Logo dark" />
              : <Image height={36} width={36} src={'/logo/tanlucdev-light.png'} alt="Logo light" />
            }

          </Link>
        )}

        <div className="flex gap-1">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`${pathname === link.path ? "text-primary" : "text-secondary"
                } relative rounded-lg px-3 py-1.5 text-sm transition-colors`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {pathname === link.path && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 -z-10 rounded-lg bg-tertiary"
                  // style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {link.title}
            </Link>
          ))}
        </div>

        <div className="flex h-8 w-8 items-center justify-center">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
