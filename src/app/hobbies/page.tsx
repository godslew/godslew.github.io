import Link from "next/link";
import { allHobbies } from "@/data/hobbies";

export default function HobbiesPage() {
  return (
    <div className="flex min-h-screen items-start justify-start font-sans bg-[linear-gradient(to_bottom_right,#6842AB_30%,#68B39E_70%,#EBB4FE_100%)]">
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
            Hobbies & Interests
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allHobbies.map((hobby, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10"
              >
                <h2 className="text-xl font-semibold text-white mb-2">
                  {hobby.title}
                </h2>
                <p className="text-white">
                  {hobby.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

