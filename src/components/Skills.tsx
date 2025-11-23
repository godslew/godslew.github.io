import Link from "next/link";
import { allSkills, getSkillSlug } from "@/data/skills";

export default function Skills() {
  return (
    <section className="w-full mb-16 text-center">
      <h2 className="text-3xl font-semibold text-white mb-6">
        Skills TBD
      </h2>
      <div className="flex flex-wrap gap-3 justify-center mb-6">
        {allSkills.map((skill) => (
          <span
            key={skill.name}
            className="px-4 py-2 rounded-full bg-black/10 dark:bg-white/10 text-white text-sm font-medium"
          >
            {skill.name}
          </span>
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          href="/skills"
          className="inline-block px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors"
        >
          View Details →
        </Link>
      </div>
    </section>
  );
}

