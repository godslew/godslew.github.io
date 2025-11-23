import Link from "next/link";
import { notFound } from "next/navigation";
import { allSkills, getSkillByName, getSkillSlug } from "@/data/skills";

interface SkillDetailPageProps {
  params: {
    slug: string;
  };
}

export default function SkillDetailPage({ params }: SkillDetailPageProps) {
  const skillName = params.slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  const skill = getSkillByName(skillName);

  if (!skill) {
    notFound();
  }

  return (
    <div className="flex min-h-screen items-start justify-start font-sans bg-[linear-gradient(to_bottom_right,#6842AB_30%,#68B39E_70%,#EBB4FE_100%)]">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-start justify-start pt-16 pb-32 px-8 sm:px-16">
        <div className="mb-8">
          <Link
            href="/skills"
            className="text-white hover:underline text-sm"
          >
            ← Back to Skills
          </Link>
        </div>
        <section className="w-full">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {skill.name}
          </h1>
          <p className="text-lg text-white/80 mb-8">
            Experience: {skill.experience}
          </p>
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Description
              </h2>
              <p className="text-white">
                {skill.description}
              </p>
            </div>
            {skill.projects && skill.projects.length > 0 && (
              <div className="p-6 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Related Projects
                </h2>
                <ul className="space-y-2">
                  {skill.projects.map((project, index) => (
                    <li key={index} className="text-white">
                      • {project}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}


