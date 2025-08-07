import { Metadata } from "next";
import { allBlogs } from ".contentlayer/generated";
import { useTranslations } from "next-intl";
import PostList from "./components/PostList";
import { getTranslations } from "next-intl/server";

// export const metadata: Metadata = {
//   title: "Blog | Tan Luc",
//   description:
//     "I write about programming, design, and occasionally life updates!",
//   openGraph: {
//     title: "Blog | Tan Luc",
//     description:
//       "I write about programming, design, and occasionally life updates!",
//     type: "website",
//     url: "https://tanluc.dev/blog/Blog",
//   },
// };

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Blog");
  return {
    title: t("title"),
  };
}

export default async function BlogPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations("Blog");
  const locale = params.locale;
  const blogs = allBlogs
    .filter(project => project.locale === locale)
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="animate-in text-3xl font-bold tracking-tight">Blog</h1>
          <p
            className="animate-in text-secondary"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            {blogs.length} {t("noPosts")}
          </p>
        </div>
      </div>
      <div
        className="animate-in"
        style={{ "--index": 2 } as React.CSSProperties}
      >
        <PostList posts={blogs} />
      </div>

    </div>
  );
}
