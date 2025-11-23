import Link from "next/link";
import { allHobbies } from "@/data/hobbies";

export default function Hobbies() {
  const displayedHobbies = allHobbies.slice(0, 3);
  const hasMoreHobbies = allHobbies.length > 3;

  return (
    <section className="w-full mb-16 text-center">
      <h2 className="text-3xl font-semibold text-white mb-6">
        Hobbies & Interests TBD
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {displayedHobbies.map((hobby, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-left"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {hobby.title}
            </h3>
            <p className="text-white">
              {hobby.description}
            </p>
          </div>
        ))}
      </div>
      {hasMoreHobbies && (
        <div className="mt-6 flex justify-center">
          <Link
            href="/hobbies"
            className="inline-block px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors"
          >
            View All Hobbies
          </Link>
        </div>
      )}
    </section>
  );
}

