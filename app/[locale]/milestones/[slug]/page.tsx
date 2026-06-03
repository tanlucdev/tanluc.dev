import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC34fBc2d9rzjdjEYseLNntvcIT-S9lNuLPdJL2QjOHZWFvV5adC-y-l_iI_g7T-eFe6iCkK_DOTv0vJm4RZ_2t89t2xA_XWCSk-SrsD88dU9IRS8GH4eIlJGFTGsNOlxE14dGGLZYk_RMa35V2D62HwMXpgW8RK1rcHtJmubBubQOV-7_3j7coPUastHRCo3HpR-QfPt4Aafq-vysf75VUssKOjluNzDyGF8h9lBSlTw-Jb1PNlYo0a5wZtqYacHdP4wtEnRlwVrSX";

const routeImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDDfCSUQ_6mJ6gZY_v12PfB9yaj-hlbzOch0iPHebCrSKAgDsZZsTxRb8uYPY92vxM8DvuIXSkHeFDGwlUj-QnPByl4ny_83JxXFSo9Hitr1QSIhs7ezf0R0-ZLnqpwMKsZggoUHD8VAxVuQ4NWWcC8_oRgNUdxkHJY7rZqPRQrhKW9uvu-8qHWkLXPYU7VhngwpGKkEsWEvJFpQIgORnfOURa4aRNX4FJ49RE5ZwNgNA9xL0qOx_90X_aQYCgHv2DWeZUWupc7N2EL";

const content = {
  en: {
    back: "All milestones",
    status: "Running",
    date: "October 2026",
    title: "Completed my first half marathon",
    intro:
      "A journey of 21.1 kilometers that taught me more about mental resilience than physical endurance. Moving from a non-runner to a half-marathoner in six months.",
    sections: [
      {
        title: "The challenge",
        paragraphs: [
          'For most of my adult life, I considered myself "not a runner." Moving continuously for more than two hours felt physically impossible and mentally monotonous.',
          "Ho Chi Minh City's humidity added another layer of difficulty. Training meant waking up at 4:30 AM, before the city warmed up and before the day could negotiate with my discipline.",
        ],
      },
      {
        title: "The process",
        paragraphs: [
          "I approached training like a software project: iterative, data-driven, and disciplined. A 16-week plan helped me increase mileage without collecting injuries along the way.",
        ],
        bullets: [
          "Phase 1: Build the foundation with short 5 km aerobic runs.",
          "Phase 2: Add interval sessions to improve cardiovascular efficiency.",
          "Phase 3: Long weekend runs, peaking at 18 km two weeks before race day.",
        ],
      },
      {
        title: "Lessons learned",
        paragraphs: [
          "Engineering and running share a useful rhythm: break a massive goal into manageable units. In code, it is functions and modules. In running, it is the next kilometer.",
          "Consistency beat intensity every time. It was not one heroic race-day effort that got me to the finish line. It was the 48 training runs I did even when I did not feel like doing them.",
        ],
      },
    ],
    statsTitle: "Key stats",
    stats: [
      ["Distance", "21.1 km"],
      ["Official time", "2:14:42"],
      ["Location", "HCM City"],
      ["Avg pace", "6'23\" /km"],
    ],
  },
  vi: {
    back: "Tất cả dấu mốc",
    status: "Chạy bộ",
    date: "Tháng 10, 2026",
    title: "Hoàn thành half marathon đầu tiên",
    intro:
      "Hành trình 21.1 km dạy mình nhiều về sức bền tinh thần hơn cả thể lực. Từ một người không nghĩ mình chạy được, mình trở thành người hoàn thành half marathon sau sáu tháng.",
    sections: [
      {
        title: "Thử thách",
        paragraphs: [
          'Trong phần lớn thời gian trưởng thành, mình tự xem bản thân là người "không hợp chạy bộ". Việc di chuyển liên tục hơn hai tiếng nghe vừa quá sức, vừa nhàm chán.',
          "Độ ẩm của Sài Gòn khiến mọi thứ khó hơn. Mình phải dậy lúc 4:30 sáng để chạy trước khi trời nóng lên, trước cả khi một ngày mới kịp mặc cả với kỷ luật của mình.",
        ],
      },
      {
        title: "Quá trình",
        paragraphs: [
          "Mình tập như cách làm một dự án phần mềm: lặp lại, đo lường, có kỷ luật. Kế hoạch 16 tuần giúp mình tăng quãng đường từ từ để tránh chấn thương.",
        ],
        bullets: [
          "Giai đoạn 1: Xây nền bằng các buổi chạy aerobic 5 km.",
          "Giai đoạn 2: Thêm interval để cải thiện tim mạch.",
          "Giai đoạn 3: Các buổi chạy dài cuối tuần, đạt 18 km trước ngày race hai tuần.",
        ],
      },
      {
        title: "Điều học được",
        paragraphs: [
          "Lập trình và chạy bộ có cùng một nhịp: chia mục tiêu lớn thành những phần đủ nhỏ để xử lý. Trong code là function và module. Trong chạy bộ là kilomet tiếp theo.",
          "Sự đều đặn thắng cường độ. Không phải một nỗ lực anh hùng trong ngày race đưa mình tới vạch đích, mà là 48 buổi tập mình vẫn làm dù có rất nhiều hôm không muốn làm.",
        ],
      },
    ],
    statsTitle: "Thông số chính",
    stats: [
      ["Quãng đường", "21.1 km"],
      ["Thời gian", "2:14:42"],
      ["Địa điểm", "TP.HCM"],
      ["Pace TB", "6'23\" /km"],
    ],
  },
} as const;

type Params = { locale: string; slug: string };

export function generateStaticParams() {
  return [
    { locale: "en", slug: "first-half-marathon" },
    { locale: "vi", slug: "first-half-marathon" },
  ];
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  if (params.slug !== "first-half-marathon") return {};

  const page = params.locale === "vi" ? content.vi : content.en;

  return {
    title: `${page.title} - Tan Luc`,
    description: page.intro,
    openGraph: {
      title: page.title,
      description: page.intro,
      images: [{ url: heroImage, alt: page.title }],
    },
  };
}

export default function MilestoneDetailPage({ params }: { params: Params }) {
  if (params.slug !== "first-half-marathon") notFound();

  const page = params.locale === "vi" ? content.vi : content.en;
  const milestonesHref = `/${params.locale}/milestones`;

  return (
    <main className="-mx-6 -my-16 min-h-screen bg-[#fdfdfd] px-6 py-10 text-primary dark:bg-contrast md:-my-20 md:py-16">
      <div className="mx-auto max-w-[800px]">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href={milestonesHref}
            className="group inline-flex items-center gap-2 text-sm font-medium text-secondary transition-colors hover:text-primary"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              &larr;
            </span>
            {page.back}
          </Link>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-tertiary px-3 py-1 text-xs font-semibold uppercase tracking-[0.05em] text-secondary">
              {page.status}
            </span>
            <span className="text-sm font-medium text-tertiary">
              {page.date}
            </span>
          </div>
        </div>

        <section className="mb-12">
          <h1 className="mb-6 text-[36px] font-bold leading-[44px] text-primary md:text-[40px] md:leading-[48px]">
            {page.title}
          </h1>
          <p className="max-w-[640px] text-lg leading-7 text-secondary">
            {page.intro}
          </p>
        </section>

        <div className="mb-16 overflow-hidden rounded-3xl border border-primary bg-secondary">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroImage}
            alt={page.title}
            className="aspect-[16/9] w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-12 lg:flex-row">
          <article className="flex-1 space-y-12">
            {page.sections.map((section) => (
              <section key={section.title}>
                <h2 className="mb-4 text-xl font-semibold leading-7 text-primary">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-7 text-secondary"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {"bullets" in section ? (
                  <ul className="mt-5 space-y-3">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-black dark:bg-white" />
                        <span className="text-base leading-7 text-secondary">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </article>

          <aside className="w-full space-y-8 lg:w-64">
            <section className="rounded-xl border border-primary bg-white p-6 dark:bg-secondary">
              <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.08em] text-secondary">
                {page.statsTitle}
              </h2>
              <dl className="space-y-6">
                {page.stats.map(([label, value], index) => (
                  <div
                    key={label}
                    className={index === 3 ? "border-t border-primary pt-4" : ""}
                  >
                    <dt className="mb-1 text-xs font-semibold uppercase tracking-[0.05em] text-tertiary">
                      {label}
                    </dt>
                    <dd
                      className={
                        index === 3
                          ? "text-base font-medium text-primary"
                          : "text-xl font-semibold leading-7 text-primary"
                      }
                    >
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <div className="hidden overflow-hidden rounded-xl border border-primary bg-secondary lg:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={routeImage}
                alt="Minimal running route map"
                className="aspect-square w-full object-cover grayscale transition duration-500 hover:grayscale-0"
              />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
