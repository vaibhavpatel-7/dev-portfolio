import { BackgroundBeams } from "./_components/ui/background-beams";
import Navbar from "./_components/navbar";
import Hero from "./_components/hero";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col">
      <Navbar />
      {/* About me */}
      <section id="home" className="h-screen">
        <Hero />
      </section>
      <section id="about" className="h-screen ">
        About Me
      </section>
      <section id="skills" className="h-screen">
        Skills
      </section>
      <section id="work-exprience" className="h-screen">
        Work Exprience
      </section>
      <section id="contact-me" className="h-screen">
        Contact Me
      </section>
    </main>
  );
}
