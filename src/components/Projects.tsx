import Link from "next/link";
import { allProjects } from "@/data/projects";

export default function Projects() {
  const displayedProjects = allProjects.slice(0, 2);
  const hasMoreProjects = allProjects.length > 2;

  return (
    <section className="w-full mb-16 text-center">
      <h2 className="text-3xl font-semibold text-white mb-6">
        Projects TBD
      </h2>
      <div className="space-y-6">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-left"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-white mb-4">
              {project.description}
            </p>
            <div className="flex gap-4">
              <a
                href={project.projectUrl}
                className="text-sm text-white hover:underline"
              >
                View Project →
              </a>
              <a
                href={project.githubUrl}
                className="text-sm text-white hover:underline"
              >
                GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
      {hasMoreProjects && (
        <div className="mt-6 flex justify-center">
          <Link
            href="/projects"
            className="inline-block px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors"
          >
            View All Projects →
          </Link>
        </div>
      )}
    </section>
  );
}

