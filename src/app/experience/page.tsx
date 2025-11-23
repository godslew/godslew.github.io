import Link from "next/link";
import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-[linear-gradient(to_bottom_right,#6842AB_30%,#68B39E_70%,#EBB4FE_100%)]">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-start justify-start pt-16 pb-32 px-8 sm:px-16">
        <div className="mb-8">
          <Link
            href="/"
            className="text-white hover:underline text-sm"
          >
            ← Back to Home
          </Link>
        </div>
        <section className="w-full">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Experience
          </h1>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10"
              >
                <div className="mb-4">
                  <h2 className="text-2xl font-semibold text-white mb-1">
                    {experience.position}
                  </h2>
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
        </section>
      </main>
    </div>
  );
}


