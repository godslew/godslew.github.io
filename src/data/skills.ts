export interface Skill {
  name: string;
  description: string;
  experience: string;
  projects?: string[];
}

export const allSkills: Skill[] = [
  {
    name: "Kotlin",
    description: "Primary programming language for Android development. Experienced in writing clean, maintainable code using Kotlin's modern features.",
    experience: "3+ years",
    projects: ["Android App A", "Android App B"],
  },
  {
    name: "Android",
    description: "Deep understanding of Android framework, lifecycle, and best practices. Experienced in building native Android applications.",
    experience: "3+ years",
    projects: ["Android App A", "Android App B"],
  },
  {
    name: "Golang",
    description: "Backend development using Go. Building scalable and efficient server-side applications.",
    experience: "2+ years",
    projects: ["Backend Service A"],
  },
  {
    name: "MySQL",
    description: "Database design and optimization. Writing efficient queries and managing database schemas.",
    experience: "2+ years",
    projects: ["Backend Service A"],
  },
  {
    name: "Kotlin Multiplatform",
    description: "Building cross-platform applications using Kotlin Multiplatform Mobile (KMM). Sharing business logic between Android and iOS.",
    experience: "1+ year",
    projects: ["Cross-platform App"],
  },
  {
    name: "Agile",
    description: "Experience with Agile methodologies including Scrum and Kanban. Participating in sprint planning, daily standups, and retrospectives.",
    experience: "3+ years",
    projects: [],
  },
  {
    name: "Git",
    description: "Version control and collaboration using Git. Experience with branching strategies, code reviews, and CI/CD pipelines.",
    experience: "3+ years",
    projects: [],
  },
];

export function getSkillByName(name: string): Skill | undefined {
  return allSkills.find(skill => skill.name.toLowerCase() === name.toLowerCase());
}

export function getSkillSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-');
}

