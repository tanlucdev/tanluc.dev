"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type MilestoneListItem = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  category: string;
  displayDate?: string;
  action?: string;
  href?: string;
  detail?: boolean;
};

type MilestonesListProps = {
  allLabel: string;
  filtersLabel: string;
  locale: string;
  milestones: MilestoneListItem[];
};

function getMilestoneHref(milestone: MilestoneListItem) {
  if (milestone.detail) return `/milestones/${milestone.slug}`;
  if (milestone.href) return milestone.href;

  return null;
}

function localizeHref(locale: string, href: string) {
  if (href.startsWith("http")) return href;

  return `/${locale}${href}`;
}

export default function MilestonesList({
  allLabel,
  filtersLabel,
  locale,
  milestones,
}: MilestonesListProps) {
  const [activeFilter, setActiveFilter] = useState(allLabel);
  const categories = useMemo(
    () => Array.from(new Set(milestones.map((milestone) => milestone.category))),
    [milestones],
  );
  const filters = [allLabel, ...categories];
  const visibleMilestones =
    activeFilter === allLabel
      ? milestones
      : milestones.filter((milestone) => milestone.category === activeFilter);

  return (
    <>
      <section
        className="mb-10 flex flex-wrap gap-2 border-y border-primary py-4"
        aria-label={filtersLabel}
      >
        {filters.map((filter) => {
          const isActive = filter === activeFilter;
          const count =
            filter === allLabel
              ? milestones.length
              : milestones.filter((milestone) => milestone.category === filter)
                  .length;

          return (
            <button
              key={filter}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveFilter(filter)}
              className={
                isActive
                  ? "inline-flex items-center gap-2 rounded-full border border-primary bg-black px-4 py-2 text-sm font-medium leading-5 text-white transition-colors dark:bg-white dark:text-black"
                  : "inline-flex items-center gap-2 rounded-full border border-primary bg-white px-4 py-2 text-sm font-medium leading-5 text-secondary transition-colors hover:bg-tertiary hover:text-primary dark:bg-secondary"
              }
            >
              <span>{filter}</span>
              <span
                className={
                  isActive
                    ? "text-xs text-white/70 dark:text-black/60"
                    : "text-xs text-tertiary"
                }
              >
                {count}
              </span>
            </button>
          );
        })}
      </section>

      <section className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-2">
        {visibleMilestones.map((milestone, index) => {
          const href = getMilestoneHref(milestone);

          return (
            <article
              key={`${activeFilter}-${milestone.slug}`}
              className="group relative flex h-full min-h-[260px] animate-in flex-col overflow-hidden rounded-lg border border-primary bg-white p-6 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)] dark:bg-secondary dark:hover:bg-tertiary dark:hover:shadow-[0_18px_45px_rgba(0,0,0,0.32)]"
              style={{ "--index": index } as React.CSSProperties}
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-full border border-primary bg-tertiary text-sm font-semibold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full bg-tertiary px-2.5 py-1 text-xs font-semibold uppercase leading-4 tracking-[0.05em] text-secondary">
                    {milestone.category}
                  </span>
                </div>
                <span className="text-sm font-medium leading-5 text-secondary">
                  {milestone.displayDate || milestone.year}
                </span>
              </div>

              <h2 className="mb-3 text-2xl font-semibold leading-8 text-primary">
                {milestone.title}
              </h2>
              <p className="mb-6 flex-grow text-base leading-7 text-secondary">
                {milestone.summary}
              </p>

              {href && milestone.action ? (
                <Link
                  href={localizeHref(locale, href)}
                  className="mt-auto inline-flex w-fit items-center gap-2 text-sm font-semibold leading-5 text-primary transition-colors hover:text-secondary"
                >
                  {milestone.action}
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              ) : null}
            </article>
          );
        })}
      </section>
    </>
  );
}
