"use client";

import { ReactNode, use } from "react";
import clsx from "clsx";
import { useTranslations } from "next-intl";

type SectionProps = {
  heading: string;
  headingAlignment?: "right" | "left";
  children: ReactNode;
};

export default function Section({
  heading,
  headingAlignment,
  children,
}: SectionProps) {
  const t = useTranslations();
  return (
    <section
      className="col-reverse flex flex-col gap-2 md:flex-row md:gap-9"
      id={heading.toLowerCase().replace(/\s/g, "-")}
    >
      <h2
        className={clsx(
          "shrink-0 text-secondary md:w-32",
          headingAlignment === "right" && "md:text-right",
        )}
      >
        {t(heading)}
      </h2>
      {children}
    </section>
  );
}
