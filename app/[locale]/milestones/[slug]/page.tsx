import { allMilestones } from ".contentlayer/generated";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import Mdx from "@/app/[locale]/blog/components/MdxWrapper";

type Params = { locale: string; slug: string };

function getMilestone(params: Params) {
  return allMilestones.find(
    (milestone) =>
      milestone.locale === params.locale &&
      milestone.slug === params.slug &&
      milestone.detail,
  );
}

export function generateStaticParams() {
  return allMilestones
    .filter((milestone) => milestone.detail)
    .map((milestone) => ({
      locale: milestone.locale,
      slug: milestone.slug,
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const milestone = getMilestone(params);

  if (!milestone) return {};

  return {
    title: `${milestone.title} - Tan Luc`,
    description: milestone.summary,
    openGraph: {
      title: milestone.title,
      description: milestone.summary,
      images: milestone.heroImage
        ? [{ url: milestone.heroImage, alt: milestone.title }]
        : undefined,
    },
  };
}

export default async function MilestoneDetailPage({
  params,
}: {
  params: Params;
}) {
  const milestone = getMilestone(params);
  const t = await getTranslations("Milestones");

  if (!milestone) notFound();

  const routeImage =
    milestone.routeImage && milestone.routeImage !== milestone.heroImage
      ? milestone.routeImage
      : null;

  return (
    <main className="-mx-6 -my-16 min-h-screen bg-[#fdfdfd] px-6 py-10 text-primary dark:bg-contrast md:-my-20 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="animate-in mb-8 border-b border-primary pb-5">
          <Link
            href={`/${params.locale}/milestones`}
            className="group inline-flex items-center gap-2 text-sm font-medium text-secondary transition-colors hover:text-primary"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              &larr;
            </span>
            {t("back")}
          </Link>
        </div>

        {milestone.heroImage ? (
          <div
            className="animate-in mb-12 overflow-hidden rounded-lg border border-primary bg-secondary md:mb-16"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={milestone.heroImage}
              alt={milestone.title}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        ) : null}

        <div className="mx-auto max-w-3xl">
          <section className="mb-10">
            <p
              className="animate-in mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-tertiary"
              style={{ "--index": 2 } as React.CSSProperties}
            >
              {milestone.category} / {milestone.displayDate || milestone.year}
            </p>
            <h1
              className="animate-in mb-6 text-[36px] font-bold leading-[44px] text-primary md:text-[52px] md:leading-[60px]"
              style={{ "--index": 3 } as React.CSSProperties}
            >
              {milestone.title}
            </h1>
            <p
              className="animate-in text-base leading-7 text-secondary"
              style={{ "--index": 4 } as React.CSSProperties}
            >
              {milestone.summary}
            </p>
          </section>

          {milestone.stats ? (
            <section
              className="animate-in mb-12 border-y border-primary py-6"
              style={{ "--index": 5 } as React.CSSProperties}
            >
              <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.08em] text-secondary">
                {milestone.statsTitle || t("stats")}
              </h2>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
                {milestone.stats.map(
                  (stat: { label: string; value: string }) => (
                    <div key={stat.label}>
                      <dt className="mb-1 text-xs font-semibold uppercase tracking-[0.05em] text-tertiary">
                        {stat.label}
                      </dt>
                      <dd className="text-lg font-semibold leading-7 text-primary">
                        {stat.value}
                      </dd>
                    </div>
                  ),
                )}
              </dl>
            </section>
          ) : null}

          {routeImage ? (
            <div
              className="animate-in mb-12 overflow-hidden rounded-lg border border-primary bg-secondary"
              style={{ "--index": 6 } as React.CSSProperties}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={routeImage}
                alt={t("routeImageAlt")}
                className="w-full object-contain"
              />
            </div>
          ) : null}

          <article
            className="prose prose-neutral max-w-none animate-in text-pretty text-base"
            style={{ "--index": 7 } as React.CSSProperties}
          >
            <Mdx code={milestone.body.code} />
          </article>
        </div>
      </div>
    </main>
  );
}
