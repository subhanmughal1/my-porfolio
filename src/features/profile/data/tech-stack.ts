import type { TechStack } from "../types/tech-stack";

export const TECH_STACK: TechStack[] = [
  // Languages
  {
    title: "Python",
    href: "https://www.python.org/",
    categories: ["Language"],
  },
  {
    key: "js",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Language"],
  },

  // Frontend
  {
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    categories: ["Frontend"],
  },
  {
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    categories: ["Frontend"],
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    categories: ["Framework"],
  },

  // Backend Frameworks
  {
    title: "Django",
    href: "https://www.djangoproject.com/",
    categories: ["Framework", "Backend"],
  },
  {
    title: "FastAPI",
    href: "https://fastapi.tiangolo.com/",
    categories: ["Framework", "Backend"],
  },
  {
    title: "Flask",
    href: "https://flask.palletsprojects.com/",
    categories: ["Framework", "Backend"],
  },

  // Database
  {
    title: "SQLite3",
    href: "https://www.sqlite.org/",
    categories: ["Database"],
  },

  // Tools
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["Tools", "Version Control"],
  },
  {
    title: "GitHub",
    href: "https://github.com/",
    categories: ["Platform", "Version Control"],
    theme: true,
  },
  {
    title: "Postman",
    href: "https://www.postman.com/",
    categories: ["Tools", "API"],
  },
  {
    title: "VS Code",
    href: "https://code.visualstudio.com/",
    categories: ["Tools"],
  },
   {
    title: "n8n",
    href: "https://code.visualstudio.com/",
    categories: ["Tools"],
  },
  
];