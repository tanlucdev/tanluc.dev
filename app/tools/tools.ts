export const toolsTranslations = {
  title: "Tools",
  subTitle: "My toolbox",
  description: "These are the tools that I recommend",
  button: "Go",
};

type Tool = {
  name: string;
  category: string;
  image: string;
  description: string;
  link: string;
};

export const tools: Tool[] = [
  {
    name: "Visual Studio Code",
    category: "Integrated Development Environments (IDE)",
    description: "Multi-platform code editor with various extensions",
    image: "tools/vscode.svg",
    link: "https://code.visualstudio.com/"
  },
  {
    name: "Visual Studio",
    category: "Integrated Development Environments (IDE)",
    description: "Official code editor for .NET, C#, Visual Basic",
    image: "tools/visualstudio.svg",
    link: "https://visualstudio.microsoft.com/"
  },
  {
    name: "Git",
    category: "Version Control and Collaboration Tools",
    description: "Distributed version control system",
    image: "tools/git.svg",
    link: "https://git-scm.com/"
  },
  {
    name: "GitHub",
    category: "Version Control and Collaboration Tools",
    description: "Collaborative development platform for hosting projects",
    image: "tools/github.svg",
    link: "https://github.com/"
  },
  {
    name: "Notion",
    category: "Project Management and Task Tracking Tools",
    description: "Note-taking and project management application",
    image: "tools/notion.svg",
    link: "https://www.notion.so/"
  },
  {
    name: "GitHub (Project Management)",
    category: "Project Management and Task Tracking Tools",
    description: "Collaborative platform also used for project management",
    image: "tools/github.svg",
    link: "https://github.com/"
  },
  {
    name: "Vercel",
    category: "Web Deployment and Hosting",
    description: "Cloud platform for websites and front-end applications",
    image: "tools/vercel.svg",
    link: "https://vercel.com/"
  },
  {
    name: "Figma",
    category: "UX/UI and Graphic Design Tools",
    description: "Graphic design and interface prototyping tool",
    image: "tools/figma.svg",
    link: "https://www.figma.com/"
  },
  {
    name: "MongoDB Compass",
    category: "Database Management and Exploration Tools",
    description: "GUI tool for MongoDB",
    image: "tools/mongodb.svg",
    link: "https://www.mongodb.com/products/compass"
  },
  {
    name: "MySQL Workbench",
    category: "Database Management and Exploration Tools",
    description: "GUI tool for MySQL",
    image: "tools/workbench.svg",
    link: "https://www.mysql.com/products/workbench/"
  },
  {
    name: "SQL Server Management Studio (SSMS)",
    category: "Database Management and Exploration Tools",
    description: "Management tool for SQL Server",
    image: "tools/ssms.svg",
    link: "https://docs.microsoft.com/en-us/sql/ssms/sql-server-management-studio-ssms"
  },
  {
    name: "CodePen",
    category: "Technology Monitoring Tools",
    description: "Front-end development platform",
    image: "tools/codepen.svg",
    link: "https://codepen.io/"
  },
  {
    name: "Udemy",
    category: "Technology Monitoring Tools",
    description: "Online learning and training platform",
    image: "tools/udemy.svg",
    link: "https://www.udemy.com/"
  },
  {
    name: "Stack Overflow",
    category: "Technology Monitoring Tools",
    description: "Question and answer platform for developers",
    image: "tools/stackoverflow.svg",
    link: "https://stackoverflow.com/"
  },
  {
    name: "TED Talks",
    category: "Tech Culture",
    description: "Series of talks on various subjects, including technology",
    image: "tools/ted.svg",
    link: "https://www.ted.com/"
  },
  {
    name: "Twitter(X)",
    category: "Tech Culture",
    description: "Social platform for tech news and trends",
    image: "tools/x.svg",
    link: "https://twitter.com/"
  }
];