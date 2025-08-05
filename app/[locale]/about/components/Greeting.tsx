'use client';

import { useTranslations } from 'next-intl';
import { use, useEffect, useState } from 'react';

export default function Greeting() {
  const [greeting, setGreeting] = useState("Hi there");
  const t = useTranslations("Greeting");
  useEffect(() => {
    const currentHour = new Date().getHours();
    const newGreeting =
      currentHour >= 5 && currentHour < 12
        ? t("Good morning")
        : currentHour >= 12 && currentHour < 17
          ? t("Good afternoon")
          : currentHour >= 17 && currentHour < 23
            ? t("Good evening")
            : t("Hello, night owl!");

    setGreeting(newGreeting);
  }, []);

  return <span>{greeting}</span>;
} 