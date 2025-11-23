export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    company: "Company Name",
    position: "Software Engineer",
    period: "2023 - Present",
    description: "Developed and maintained web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    technologies: ["React", "TypeScript", "Node.js", "AWS"],
  },
  {
    company: "Previous Company",
    position: "Frontend Developer",
    period: "2021 - 2023",
    description: "Built responsive web applications and improved user experience. Worked on optimizing application performance and implementing new features.",
    technologies: ["React", "JavaScript", "CSS", "Git"],
  },
  {
    company: "Another Company",
    position: "Junior Developer",
    period: "2020 - 2021",
    description: "Learned and applied software development best practices. Contributed to various projects and gained experience in full-stack development.",
    technologies: ["JavaScript", "Python", "SQL"],
  },
];

