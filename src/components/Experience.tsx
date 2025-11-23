import Link from "next/link";
import { experiences } from "@/data/experience";

export default function Experience() {
  const displayedExperiences = experiences.slice(0, 2);
  const hasMoreExperiences = experiences.length > 2;

  return (
    <section className="w-full mb-16 text-center">
      <h2 className="text-3xl font-semibold text-white mb-6">
        Experience TBD
      </h2>
      <div className="space-y-6">
        {displayedExperiences.map((experience, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-left"
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white mb-1">
                {experience.position}
              </h3>
              <p className="text-lg text-white/80 mb-1">
                {experience.company}
              </p>
              <p className="text-sm text-white/60">
                {experience.period}
              </p>
            </div>
            <p className="text-white mb-4">
              {experience.description}
            </p>
            {experience.technologies && experience.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-black/10 dark:bg-white/10 text-white text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      {hasMoreExperiences && (
        <div className="mt-6 flex justify-center">
          <Link
            href="/experience"
            className="inline-block px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors"
          >
            View All Experience
          </Link>
        </div>
      )}
    </section>
  );
}

