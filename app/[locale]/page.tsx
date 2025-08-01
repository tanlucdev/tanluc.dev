import { allBlogs } from ".contentlayer/generated";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import { allProjects } from ".contentlayer/generated";

import Link from "@/app/components/Link";
import PostList from "@/app/[locale]/blog/components/PostList";
import ProjectList from "@/app/[locale]/projects/components/ProjectList";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  const blogs = allBlogs
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    // 3 most recent
    .filter((_, i) => i < 3);

  const projects = allProjects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <h1 className="animate-in text-3xl font-semibold tracking-tight text-primary">
            {t("Intro")}
          </h1>
          <p
            className="max-w-lg animate-in text-secondary"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            {t("Short description")}
          </p>
        </div>
        <div
          className="flex animate-in gap-3 text-sm"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Link
            href="https://github.com/tanlucdev"
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
          >
            Github
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/tanlucdev/"
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
          >
            LinkedIn
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>
          <Link
            href="https://instagram.com/tanlucdev"
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
          >
            Instagram
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>

        </div>
      </div>

      <div
        className="flex animate-in flex-col gap-8"
        style={{ "--index": 4 } as React.CSSProperties}
      >
        <p className="tracking-tight text-secondary">{t("Pinned")}</p>
        <ProjectList projects={projects} />
      </div>
      <div
        className="flex animate-in flex-col gap-8"
        style={{ "--index": 4 } as React.CSSProperties}
      >
        <p className="tracking-tight text-secondary">{t("Skills")}</p>
        <SkillsSection />
      </div>

    </div>
  );
}

function ExperienceSection() {
  const experiences = [
    {
      company: "OneMedic JSC",
      role: "Front End Devloper",
      date: "March 2025 - Present",
      location: "District 1, Ho Chi Minh City",
      highlights: [
        "Fetched and synchronized data in the frontend using React Query.",
        "Performed client-side CRUD operations by interacting with PostgreSQL-backed APIs.",
        "Developed UI from Figma designs using React and CoreUI.",
        "Implemented complex form logic with React Hook Form, and managed global state with Redux and Thunk.",
        "Integrated i18n for multilingual support and content localization.",
        "Collaborated in developing core product features and improving performance.",
        "Participated in UI maintenance, refactoring, and optimization tasks."
      ],
    },
    {
      company: "New AI Viet Nam",
      role: "Front End Devloper Intern",
      date: "March 2024 - June 2024",
      location: "District 4, Ho Chi Minh City",
      highlights: [
        "Engineered a comprehensive testing framework for iOS mobile client to backend integration, leveraging Java, Objective-C, and Swift for automation, reducing testing time by 50%",
        "Led cross-functional collaboration with over 4 teams to define requirements and solutions for iOS client-backend integration, enhancing team synergy and project outcomes",
        "Spearheaded integration of iOS Authentication for tests, utilizing SSO Tokens, iOS Identity Kit and Google's Identity services",
        "Authored comprehensive integration tests for Google Fi's Android client, employing gRPC, Espresso, and Kotlin for robust end to end testing for mobile apps"
      ]
    }
  ];

  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-12">
        {experiences.map((exp, index) => (
          <div key={index} className="group relative grid pb-1 transition-all md:grid-cols-8 md:gap-8">
            <header className="md:col-span-2">
              <h3 className="font-medium text-primary">{exp.company}</h3>
              <p className="text-tertiary">{exp.location}</p>
              <p className="text-secondary">{exp.date}</p>
            </header>
            <div className="md:col-span-6">
              <h4 className="font-medium text-primary">{exp.role}</h4>
              <ul className="mt-2 text-secondary">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="mb-2">• {highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  const skills = {
    "Frontend": ["ReactJS", "NextJS", "Material UI", "Bootstrap", "TailwindCSS", "jQuery"],
    "Backend": ["NodeJS", "ExpressJS", "NestJS", "JWT", "Passport.js", "Auth0"],
    "Database": ["PostgreSQL", "MySQL", "MongoDB"],
    "Tools & Others": ["Prisma", "Axios", "React Hook Form", "React Router", "Agora API"]
  };

  return (
    <section className="flex flex-col gap-8">
      {/* <h2 className="text-xl font-bold text-primary">Skills</h2> */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="rounded-lg border border-primary bg-secondary p-4">
            <h3 className="mb-2 font-medium text-primary">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-primary px-3 py-1 text-xs text-secondary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
