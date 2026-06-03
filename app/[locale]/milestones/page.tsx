import type { Metadata } from "next";
import Link from "next/link";

type Milestone = {
  category: string;
  year: string;
  title: string;
  description: string;
  href?: string;
  action?: string;
};

const content = {
  en: {
    title: "Milestones",
    intro:
      "A collection of personal and professional moments that shaped how I learn, build, and grow.",
    description:
      "Beyond code, I enjoy running, trekking, learning, and building small things consistently. These milestones reflect the habits and experiences that shape how I approach software and life.",
    filters: ["All", "Running", "Trekking", "Career", "Learning", "Projects"],
    previous: "Previous",
    next: "Next",
    ctaTitle: "More than code",
    ctaText:
      "I believe the way we train, explore, and reflect also shapes the way we build.",
    ctaAction: "Read my blog",
    footer: "Built with precision and care.",
    milestones: [
      {
        category: "Running",
        year: "2026",
        title: "Completed my first half marathon",
        description:
          "A journey of discipline and early mornings. Pushing physical limits taught me more about consistency than any book could.",
        href: "/milestones/first-half-marathon",
        action: "Read story",
      },
      {
        category: "Trekking",
        year: "2026",
        title: "Explored trekking routes in Vietnam",
        description:
          "Spent weeks navigating dense forests and steep inclines. Disconnecting completely offered a fresh perspective on complex technical problems.",
      },
      {
        category: "Projects",
        year: "2026",
        title: "Built CafeMaps",
        description:
          "A passion project turned utility. Designed and developed a minimalist map interface to discover quiet, laptop-friendly cafes for focused work.",
        href: "/projects/cafemaps",
        action: "View project",
      },
      {
        category: "Learning",
        year: "2026",
        title: "Started documenting my learning journey",
        description:
          "Transitioned from passive reading to active writing. Publishing notes on system design and clean architecture helped solidify abstract concepts.",
        href: "/blog",
        action: "Read notes",
      },
    ] satisfies Milestone[],
  },
  vi: {
    title: "Dấu mốc",
    intro:
      "Những khoảnh khắc cá nhân và nghề nghiệp đã định hình cách mình học, xây dựng và trưởng thành.",
    description:
      "Bên cạnh code, mình thích chạy bộ, trekking, học hỏi và đều đặn xây những thứ nhỏ. Các dấu mốc này phản ánh thói quen và trải nghiệm ảnh hưởng đến cách mình tiếp cận phần mềm lẫn cuộc sống.",
    filters: ["Tất cả", "Chạy bộ", "Trekking", "Sự nghiệp", "Học tập", "Dự án"],
    previous: "Trước",
    next: "Sau",
    ctaTitle: "Không chỉ là code",
    ctaText:
      "Mình tin cách ta rèn luyện, khám phá và suy ngẫm cũng định hình cách ta xây dựng sản phẩm.",
    ctaAction: "Đọc blog",
    footer: "Xây dựng bằng sự tỉ mỉ và chỉn chu.",
    milestones: [
      {
        category: "Chạy bộ",
        year: "2026",
        title: "Hoàn thành half marathon đầu tiên",
        description:
          "Một hành trình của kỷ luật và những buổi sáng sớm. Việc vượt qua giới hạn thể chất dạy mình nhiều về sự bền bỉ.",
        href: "/milestones/first-half-marathon",
        action: "Đọc câu chuyện",
      },
      {
        category: "Trekking",
        year: "2026",
        title: "Khám phá các cung trekking ở Việt Nam",
        description:
          "Những ngày đi qua rừng và dốc cao giúp mình ngắt kết nối, rồi nhìn các vấn đề kỹ thuật phức tạp bằng một góc nhìn mới.",
      },
      {
        category: "Dự án",
        year: "2026",
        title: "Xây dựng CafeMaps",
        description:
          "Từ dự án yêu thích thành tiện ích nhỏ: một giao diện bản đồ tối giản để tìm quán cafe yên tĩnh, phù hợp làm việc tập trung.",
        href: "/projects/cafemaps",
        action: "Xem dự án",
      },
      {
        category: "Học tập",
        year: "2026",
        title: "Bắt đầu ghi lại hành trình học",
        description:
          "Từ đọc thụ động sang viết chủ động. Việc xuất bản ghi chú về system design và kiến trúc sạch giúp mình hiểu sâu hơn.",
        href: "/blog",
        action: "Đọc ghi chú",
      },
    ] satisfies Milestone[],
  },
} as const;

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const page = params.locale === "vi" ? content.vi : content.en;

  return {
    title: `${page.title} - Tan Luc`,
    description: page.intro,
  };
}

export default function MilestonesPage({
  params,
}: {
  params: { locale: string };
}) {
  const page = params.locale === "vi" ? content.vi : content.en;
  const localize = (href: string) => `/${params.locale}${href}`;

  return (
    <main className="milestones-page -mx-6 -my-16 min-h-screen bg-[#fdfdfd] px-6 py-12 text-primary dark:bg-contrast md:-my-20 md:px-6 md:py-16">
      <section className="mb-12 md:mb-16">
        <h1 className="mb-4 text-[40px] font-bold leading-[48px] text-primary">
          {page.title}
        </h1>
        <p className="mb-6 max-w-2xl text-lg leading-7 text-secondary">
          {page.intro}
        </p>
        <p className="max-w-2xl text-base leading-6 text-secondary">
          {page.description}
        </p>
      </section>

      <section
        className="mb-10 flex flex-wrap gap-2"
        aria-label="Milestone filters"
      >
        {page.filters.map((filter, index) => (
          <button
            key={filter}
            type="button"
            className={
              index === 0
                ? "rounded-full border border-transparent bg-tertiary px-4 py-1.5 text-sm font-medium leading-5 text-primary transition-colors hover:border-primary"
                : "rounded-full border border-primary bg-contrast px-4 py-1.5 text-sm font-medium leading-5 text-secondary transition-colors hover:bg-tertiary hover:text-primary"
            }
          >
            {filter}
          </button>
        ))}
      </section>

      <section className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2">
        {page.milestones.map((milestone) => (
          <article
            key={milestone.title}
            className="milestone-card flex h-full flex-col rounded-lg border border-primary bg-white p-6 transition duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] dark:bg-secondary dark:hover:bg-tertiary dark:hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <span className="rounded-full bg-tertiary px-2 py-1 text-xs font-semibold uppercase leading-4 tracking-[0.05em] text-secondary">
                {milestone.category}
              </span>
              <span className="text-sm font-medium leading-5 text-secondary">
                {milestone.year}
              </span>
            </div>
            <h2 className="mb-3 text-xl font-semibold leading-7 text-primary">
              {milestone.title}
            </h2>
            <p className="mb-4 flex-grow text-base leading-6 text-secondary">
              {milestone.description}
            </p>
            {milestone.href && milestone.action ? (
              <Link
                href={localize(milestone.href)}
                className="group mt-auto inline-flex items-center gap-1 text-sm font-medium leading-5 text-primary transition-colors hover:text-secondary"
              >
                {milestone.action}
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ) : null}
          </article>
        ))}
      </section>

      <nav
        aria-label="Pagination"
        className="mb-20 flex items-center justify-between border-t border-primary pt-6"
      >
        <button
          className="flex items-center gap-2 text-sm font-medium leading-5 text-secondary opacity-50"
          disabled
          type="button"
        >
          <span>←</span>
          {page.previous}
        </button>
        <div className="flex gap-2">
          {[1, 2, 3].map((pageNumber) => (
            <button
              key={pageNumber}
              type="button"
              className={
                pageNumber === 1
                  ? "flex h-8 w-8 items-center justify-center rounded-full bg-tertiary text-sm font-medium leading-5 text-primary"
                  : "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium leading-5 text-secondary transition-colors hover:bg-tertiary hover:text-primary"
              }
            >
              {pageNumber}
            </button>
          ))}
        </div>
        <button
          className="flex items-center gap-2 text-sm font-medium leading-5 text-primary transition-colors hover:text-secondary"
          type="button"
        >
          {page.next}
          <span>→</span>
        </button>
      </nav>

      <section className="mx-auto flex max-w-3xl flex-col items-center rounded-xl border border-primary bg-secondary p-8 text-center md:p-12">
        <h2 className="mb-4 text-3xl font-semibold leading-10 text-primary">
          {page.ctaTitle}
        </h2>
        <p className="mb-8 max-w-md text-base leading-6 text-secondary">
          {page.ctaText}
        </p>
        <Link
          href={localize("/blog")}
          className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium leading-5 text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-black"
        >
          {page.ctaAction}
        </Link>
      </section>

      <footer className="mt-16 border-t border-primary pt-8 text-sm font-medium leading-5 text-tertiary md:mt-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p>© 2026 Tan Luc. {page.footer}</p>
          <div className="flex gap-4">
            <Link
              className="transition-colors hover:text-primary"
              href="https://github.com/tanlucdev"
            >
              Github
            </Link>
            <Link
              className="transition-colors hover:text-primary"
              href="https://www.linkedin.com/in/tanlucdev/"
            >
              LinkedIn
            </Link>
            <Link
              className="transition-colors hover:text-primary"
              href={localize("/blog")}
            >
              RSS
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
