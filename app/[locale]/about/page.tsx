import { Metadata } from "next";
import Image from "next/image";

import Gallery from "@/app/[locale]/about/components/Gallery";
import Workplaces from "@/app/[locale]/about/components/Workplaces";
import ConnectLinks from "@/app/components/ConnectLinks";
import Link from "@/app/components/Link";
import Section from "@/app/components/Section";

import newAiLogo from "public/work/newai-logo.webp";
import oneMedicLogo from "public/work/onemedic-logo.png";

import saigon from "public/gallery/saigon.webp";
import dalat from "public/gallery/dalat.jpg";
import forest from "public/gallery/forest.jpg";
import mylove from "public/gallery/me-mt.jpg";
import Greeting from "./components/Greeting";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "About | Tan Luc",
  description:
    "Devloper base in Sai Gon, Viet Nam",
};

export default async function About() {
  const t = await getTranslations("About");
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
          {t("About")}
        </h1>
        <p
          className="animate-in text-secondary"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          {t("A glimpse into me")}
        </p>
      </div>
      <div className="mb-8 md:hidden">
        <div
          className="animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={saigon}
            alt={"Saigon.jpg"}
            width={324}
            height={139}
            className="pointer-events-none relative inset-0 h-52 w-60 -rotate-6 rounded-xl bg-neutral-400 object-cover object-right shadow-md"
            priority
          />
        </div>

        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Image
            src={dalat}
            alt={"Da Lat, Vietnam"}
            width={160}
            height={180}
            className="pointer-events-none absolute inset-0 -top-44 left-[40%] w-48 rotate-6 rounded-xl bg-neutral-400 object-cover shadow-md md:left-[60%] md:w-56"
            priority
          />
        </div>
      </div>
      <div className="hidden md:block">
        <Gallery />
      </div>
      <div
        className="flex animate-in flex-col gap-16 md:gap-24 mt-10 md:mt-0"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <Section heading="About me" headingAlignment="left">
          <div className="flex flex-col gap-6">
            {/* <p>
              <Greeting /> I&apos;m Tan Luc! Originally from Viet Nam,
              I&apos;m now based in the vibrant place that is Ho Chi Minh City.
            </p> */}
            <p>
              <Greeting /> {t("intro")}
            </p>
            <p>
              {t("career", { years: new Date().getFullYear() - 2023 })}
            </p>
            <p>
              {t("hobbies")}
            </p>
            {/* <p>
              My curiosity for computers began at age 14, which naturally led me
              to pursue a career in tech. I&apos;ve been working as a frontend developer, specializing in full-stack development and design, for{" "}
              {new Date().getFullYear() - 2023} years now!
            </p>
            <p>
              When I&apos;m not at my desk, you can find me at the gym, running
              or enjoying some coffee at a local
              shop!
            </p> */}
          </div>
        </Section>
        <Section heading="Connect" headingAlignment="left">
          <ul className="animated-list grid flex-grow grid-cols-1 gap-3 md:grid-cols-2">
            {ConnectLinks.map((link) => (
              <li className="col-span-1 transition-opacity" key={link.label}>
                <Link
                  href={link.href}
                  className="inline-grid w-full rounded-lg bg-secondary p-4 no-underline transition-opacity "
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{link.icon}</span>
                    {link.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="ml-auto h-5 w-5 text-secondary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
        <Section heading="Work" headingAlignment="left">
          <div className="flex w-full flex-col gap-8">
            <p>
              {t("work")}
            </p>
            <Workplaces items={workplaces} />
          </div>
        </Section>
        {/* <Section heading="Skills" headingAlignment="left">
        </Section> */}

      </div>
    </div>
  );
}

const workplaces = [
  {
    title: "Fresher Frontend Developer",
    company: "OneMedic",
    date: "2025 - ",
    imageSrc: oneMedicLogo,
    link: "https://onemedic.vn/",
  },
  {
    title: "Intern Frontend Developer",
    company: "NewAI Viet Nam",
    date: "2024 - 2025",
    imageSrc: newAiLogo,
    link: "https://www.newai.vn/en",
  },

];

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
