import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans animated-gradient">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-start justify-start pt-16 pb-32 px-8 sm:px-16">
        <Header />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Hobbies />
        <Contact />
      </main>
    </div>
  );
}
