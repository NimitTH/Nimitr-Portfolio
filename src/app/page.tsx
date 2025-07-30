import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Projects } from "@/components/projects";
import { Skill } from "@/components/skill";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skill />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
