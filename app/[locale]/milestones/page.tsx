import { allMilestones } from ".contentlayer/generated";
import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

import MilestonesList from "./components/MilestonesList";

type MilestonesPageProps = {
  params: { locale: string };
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Milestones");

  return {
    title: t("metaTitle"),
    description: t("intro"),
  };
}

export default async function MilestonesPage({ params }: MilestonesPageProps) {
  const t = await getTranslations("Milestones");
  const milestones = allMilestones
    .filter((milestone) => milestone.locale === params.locale)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const milestoneItems = milestones.map((milestone) => ({
    slug: milestone.slug,
    title: milestone.title,
    summary: milestone.summary,
    year: milestone.year,
    category: milestone.category,
    displayDate: milestone.displayDate,
    action: milestone.action,
    href: milestone.href,
    detail: milestone.detail,
  }));

  return (
    <main className="milestones-page -mx-6 -my-16 min-h-screen bg-[#fdfdfd] px-6 py-12 text-primary dark:bg-contrast md:-my-20 md:px-6 md:py-16">
      <section className="mb-10 max-w-3xl md:mb-14">
        <p className="animate-in mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-tertiary">
          2026
        </p>
        <h1
          className="animate-in mb-5 text-[40px] font-bold leading-[48px] text-primary md:text-[56px] md:leading-[64px]"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          {t("title")}
        </h1>
        <p
          className="animate-in mb-5 max-w-2xl text-base leading-7 text-secondary"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          {t("intro")}
        </p>
        <p
          className="animate-in max-w-2xl text-base leading-7 text-secondary"
          style={{ "--index": 3 } as React.CSSProperties}
        >
          {t("description")}
        </p>
      </section>

      <div
        className="animate-in"
        style={{ "--index": 4 } as React.CSSProperties}
      >
        <MilestonesList
          allLabel={t("all")}
          filtersLabel={t("filtersLabel")}
          locale={params.locale}
          milestones={milestoneItems}
        />
      </div>

      <section
        className="animate-in mx-auto flex max-w-3xl flex-col items-center rounded-lg border border-primary bg-secondary p-8 text-center md:p-12"
        style={{ "--index": 5 } as React.CSSProperties}
      >
        <h2 className="mb-4 text-3xl font-semibold leading-10 text-primary">
          {t("ctaTitle")}
        </h2>
        <p className="mb-8 max-w-md text-base leading-6 text-secondary">
          {t("ctaText")}
        </p>
        <Link
          href={`/${params.locale}/blog`}
          className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium leading-5 text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-black"
        >
          {t("ctaAction")}
        </Link>
      </section>
    </main>
  );
}
