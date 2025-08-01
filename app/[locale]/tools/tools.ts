import codePen from '/public/tools/codepen.svg';
import github from '/public/tools/github.svg';
import figma from '/public/tools/figma.svg';
import git from '/public/tools/git.svg';
import mongodb from '/public/tools/mongodb.svg';
import mysql from '/public/tools/workbench.svg';
import notion from '/public/tools/notion.svg';
import vercel from '/public/tools/vercel.svg';
import udemy from '/public/tools/udemy.svg';
import ted from '/public/tools/ted.svg';
import x from '/public/tools/x.svg';
import workBench from '/public/tools/workbench.svg';
import vscode from '/public/tools/vscode.svg';
import visualstudio from '/public/tools/visualstudio.svg';
import stackoverflow from '/public/tools/stackoverflow.svg';
import { StaticImageData } from 'next/image';

export const toolsTranslations = {
  title: "Tools",
  subTitle: "My toolbox",
  description: "These are the tools that I recommend",
  button: "Go",
};

type Tool = {
  name: string;
  category: string;
  image: StaticImageData;
  description: string;
  link: string;
};

export const tools: Tool[] = [
  {
    name: "Visual Studio Code",
    category: "Integrated Development Environments (IDE)",
    description: "Multi-platform code editor with various extensions",
    image: vscode,
    link: "https://code.visualstudio.com/"
  },
  {
    name: "Visual Studio",
    category: "Integrated Development Environments (IDE)",
    description: "Official code editor for .NET, C#, Visual Basic",
    image: visualstudio,
    link: "https://visualstudio.microsoft.com/"
  },
  {
    name: "Git",
    category: "Version Control and Collaboration Tools",
    description: "Distributed version control system",
    image: git,
    link: "https://git-scm.com/"
  },
  {
    name: "GitHub",
    category: "Version Control and Collaboration Tools",
    description: "Collaborative development platform for hosting projects",
    image: github,
    link: "https://github.com/"
  },
  {
    name: "Notion",
    category: "Project Management and Task Tracking Tools",
    description: "Note-taking and project management application",
    image: notion,
    link: "https://www.notion.so/"
  },
  {
    name: "GitHub (Project Management)",
    category: "Project Management and Task Tracking Tools",
    description: "Collaborative platform also used for project management",
    image: github,
    link: "https://github.com/"
  },
  {
    name: "Vercel",
    category: "Web Deployment and Hosting",
    description: "Cloud platform for websites and front-end applications",
    image: vercel,
    link: "https://vercel.com/"
  },
  {
    name: "Figma",
    category: "UX/UI and Graphic Design Tools",
    description: "Graphic design and interface prototyping tool",
    image: figma,
    link: "https://www.figma.com/"
  },
  {
    name: "MongoDB Compass",
    category: "Database Management and Exploration Tools",
    description: "GUI tool for MongoDB",
    image: mongodb,
    link: "https://www.mongodb.com/products/compass"
  },
  {
    name: "MySQL Workbench",
    category: "Database Management and Exploration Tools",
    description: "GUI tool for MySQL",
    image: workBench,
    link: "https://www.mysql.com/products/workbench/"
  },
  {
    name: "SQL Server Management Studio (SSMS)",
    category: "Database Management and Exploration Tools",
    description: "Management tool for SQL Server",
    image: mysql,
    link: "https://docs.microsoft.com/en-us/sql/ssms/sql-server-management-studio-ssms"
  },
  {
    name: "CodePen",
    category: "Technology Monitoring Tools",
    description: "Front-end development platform",
    image: codePen,
    link: "https://codepen.io/"
  },
  {
    name: "Udemy",
    category: "Technology Monitoring Tools",
    description: "Online learning and training platform",
    image: udemy,
    link: "https://www.udemy.com/"
  },
  {
    name: "Stack Overflow",
    category: "Technology Monitoring Tools",
    description: "Question and answer platform for developers",
    image: stackoverflow,
    link: "https://stackoverflow.com/"
  },
  {
    name: "TED Talks",
    category: "Tech Culture",
    description: "Series of talks on various subjects, including technology",
    image: ted,
    link: "https://www.ted.com/"
  },
  {
    name: "Twitter(X)",
    category: "Tech Culture",
    description: "Social platform for tech news and trends",
    image: x,
    link: "https://twitter.com/"
  }
];