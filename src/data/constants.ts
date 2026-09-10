// Skills and Experience data

export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  DOCKER = "docker",
  VERCEL = "vercel",
  LINUX = "linux",
  LARAVEL = "laravel",
  PYTHON = "python",
  DOTNET = "dotnet",
  SOCKETIO = "socketio",
  REDIS = "redis",
  SQLITE = "sqlite",
  CSHARP = "csharp",
  PHP = "php",
  PRETTIER = "prettier",
  AWS = "aws",
  FIREBASE = "firebase",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription:
      "The foundation of the modern web, running everywhere! 💯🚀",
    color: "#f0db4f",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },

  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription:
      "JavaScript with a powerful static type system for safer development. 🔒💪",
    color: "#007acc",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },

  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription:
      "The standard markup language that defines the structure of web pages. 🏗️🔥",
    color: "#e34c26",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },

  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription:
      "The styling language that brings web interfaces to life. 💅✨",
    color: "#563d7c",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },

  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription:
      "A component-based library for building modern user interfaces. ⚛️🌟",
    color: "#61dafb",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },

  [SkillNames.NEXTJS]: {
    id: 6,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "A powerful React framework for building fast and scalable web applications. 👑📜",
    color: "#fff",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },

  [SkillNames.TAILWIND]: {
    id: 7,
    name: "tailwind",
    label: "Tailwind CSS",
    shortDescription:
      "A utility-first CSS framework for building fast and consistent designs. 🌪️🎨",
    color: "#38bdf8",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },

  [SkillNames.NODEJS]: {
    id: 8,
    name: "nodejs",
    label: "Node.js",
    shortDescription:
      "JavaScript runtime that brings server-side development to the web. 🔙🚀",
    color: "#6cc24a",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },

  [SkillNames.EXPRESS]: {
    id: 9,
    name: "express",
    label: "Express.js",
    shortDescription:
      "A fast and minimal web framework for Node.js applications. 🚂💨",
    color: "#fff",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },

  [SkillNames.POSTGRES]: {
    id: 10,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription:
      "A powerful and reliable relational database system. 🐘💎",
    color: "#336791",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },

  [SkillNames.MONGODB]: {
    id: 11,
    name: "mongodb",
    label: "MongoDB",
    shortDescription:
      "A flexible NoSQL database using document-based data storage. 🍃💪",
    color: "#4db33d",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },

  [SkillNames.GIT]: {
    id: 12,
    name: "git",
    label: "Git",
    shortDescription:
      "A distributed version control system for tracking and managing code. 🔄🛡️",
    color: "#f1502f",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },

  [SkillNames.GITHUB]: {
    id: 13,
    name: "github",
    label: "GitHub",
    shortDescription:
      "A platform for hosting code, collaboration, pull requests, and open-source projects. 🐙",
    color: "#000000",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },

  [SkillNames.DOCKER]: {
    id: 14,
    name: "docker",
    label: "Docker",
    shortDescription:
      "Containerization technology for creating consistent development and deployment environments. 🐳🔥",
    color: "#2496ed",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },

  [SkillNames.VERCEL]: {
    id: 15,
    name: "vercel",
    label: "Vercel",
    shortDescription:
      "A modern platform for fast and seamless web deployments. 🚀🌿",
    color: "#6cc24a",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },

  [SkillNames.LINUX]: {
    id: 16,
    name: "linux",
    label: "Linux",
    shortDescription:
      "An open-source operating system widely used for development and servers. 🐧🔓",
    color: "#fff",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },

  [SkillNames.LARAVEL]: {
    id: 17,
    name: "laravel",
    label: "Laravel",
    shortDescription:
      "A modern PHP framework designed for elegant and efficient web development. 🎯🔴",
    color: "#ff2d20",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },

  [SkillNames.PYTHON]: {
    id: 18,
    name: "python",
    label: "Python",
    shortDescription:
      "A versatile programming language widely used for automation, AI, and data science. 🐍🧠",
    color: "#3776ab",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },

  [SkillNames.DOTNET]: {
    id: 19,
    name: "dotnet",
    label: ".NET Core",
    shortDescription:
      "A cross-platform framework for building modern applications with .NET. 💜⚡",
    color: "#512bd4",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
  },

  [SkillNames.SOCKETIO]: {
    id: 20,
    name: "socketio",
    label: "Socket.io",
    shortDescription:
      "A real-time communication library for event-driven applications. ⚡🔌",
    color: "#010101",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  },

  [SkillNames.REDIS]: {
    id: 21,
    name: "redis",
    label: "Redis",
    shortDescription:
      "A fast in-memory data store commonly used for caching and real-time applications. ⚡🔴",
    color: "#dc382d",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },

  [SkillNames.SQLITE]: {
    id: 22,
    name: "sqlite",
    label: "SQLite",
    shortDescription:
      "A lightweight and portable embedded SQL database. 📦💾",
    color: "#003b57",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  },

  [SkillNames.CSHARP]: {
    id: 23,
    name: "csharp",
    label: "C# / .NET",
    shortDescription:
      "A modern, object-oriented, strongly typed programming language. 💜⚡",
    color: "#9b4993",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },

  [SkillNames.PHP]: {
    id: 24,
    name: "php",
    label: "PHP",
    shortDescription:
      "A widely used server-side scripting language for web development. 🐘💙",
    color: "#777bb4",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },

  [SkillNames.PRETTIER]: {
    id: 25,
    name: "prettier",
    label: "Prettier",
    shortDescription:
      "An opinionated code formatter that keeps your code clean and consistent. ✍️✨",
    color: "#f7b93e",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },

  [SkillNames.AWS]: {
    id: 26,
    name: "aws",
    label: "AWS",
    shortDescription:
      "A comprehensive cloud computing platform with a wide range of services. ☁️🌩️",
    color: "#ff9900",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },

  [SkillNames.FIREBASE]: {
    id: 27,
    name: "firebase",
    label: "Firebase",
    shortDescription:
      "A backend-as-a-service platform for building web and mobile applications quickly. 🗄️🔥",
    color: "#ffca28",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "April 2026",
    endDate: "June 2026",
    title: "Full-Stack Developer",
    company: "CollegeHai.com",
    description: [
      "Worked as a Full-Stack Developer for three months.",
      "Contributed to the development and improvement of web application features.",
      "Worked across frontend and backend development as part of the development workflow.",
    ],
    skills: [],
  },
];

export const themeDisclaimers = {
  light: [
    "Uyarı: Light mode göz kamaştırıcı parlaklıkta!",
    "Dikkat: Light mode aktif! Güneş gözlüğünüzü takın.",
    "Bu kadar parlaklığı sadece profesyoneller kaldırabilir!",
    "Light mode açılıyor... Gözleriniz hazır mı?",
    "Işık moduna geçiliyor — geleceğinizden daha parlak!",
  ],

  dark: [
    "Dark mode aktif! Karanlık tarafın gücü seninle olsun.",
    "Dark mode'a geri hoş geldin. Işık tarafında hayat nasıldı?",
    "Dark mode aktif! Kalbimin derinliklerinden ve gözlerimden teşekkürler.",
    "Gölgelere geri hoş geldin. Dışarıda hayat nasıldı?",
    "Dark mode açık! Sonunda gerçek zarafeti anlayan biri.",
  ],
};