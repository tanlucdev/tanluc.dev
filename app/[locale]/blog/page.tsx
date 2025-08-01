import { Metadata } from "next";
import { allBlogs } from ".contentlayer/generated";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Blog | Tan Luc",
  description:
    "I write about programming, design, and occasionally life updates!",
  openGraph: {
    title: "Blog | Tan Luc",
    description:
      "I write about programming, design, and occasionally life updates!",
    type: "website",
    url: "https://tanluc.dev/blog/Blog",
  },
};

export default function Blog() {
  const t = useTranslations();
  // Sort posts by date
  const posts = allBlogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight">Blog</h1>
        <p
          className="animate-in text-secondary"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          Technical articles about software engineering, machine learning, and development practices.
        </p>
      </div>
      {/* <div className="animate-in flex flex-col gap-8">
        {posts.length === 0 ? (
          <p className="text-secondary">No posts yet. Check back soon!</p>
        ) : (
          posts.map((post) => <PostCard key={post.slug} post={post} />)
        )}
      </div> */}
      <div className="animate-in flex flex-col gap-8">
        <p className="text-secondary">{t("No posts yet")}</p>
      </div>
    </div>
  );
}
