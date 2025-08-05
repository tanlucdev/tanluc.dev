import { allProjects } from ".contentlayer/generated";
import { notFound } from "next/navigation";

import Avatar from "@/app/components/Avatar";
import Link from "@/app/components/Link";
import Mdx from "@/app/[locale]/blog/components/MdxWrapper";
import { useLocale } from "next-intl";
import { useTranslations } from "use-intl";
import { getTranslations } from "next-intl/server";

export default function Project({ params }: { params: any }) {
  const locale = useLocale();
  // const t = await getTranslations("Project");
  const project = allProjects.find((project) => project.slug === params.slug && project.locale === locale);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-20">
      <article>
        <div className="flex flex-col gap-8">
          <div className="flex max-w-xl flex-col gap-4 text-pretty">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary">
              {project.title}
            </h1>
            <p className="text-secondary">
              {project.longSummary || project.summary}
            </p>
          </div>
          <div className="flex max-w-none items-center gap-4">
            <div className="leading-tight">
              <p>Tan Luc</p>
              <p className="text-secondary">
                <time dateTime={project.date}>{project.date}</time>
                {" · "}

                <Link underline href={project.url || ""}>
                  {/* {t("Visit project")} */}
                  Visit project
                </Link>
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags?.map((tag: string) => (
              <span
                key={tag}
                className="rounded-full bg-primary px-3 py-1 text-xs text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="h-16" />
        <div className="project prose prose-neutral">
          <Mdx code={project.body.code} />
        </div>
      </article>

    </div>
  );
}
