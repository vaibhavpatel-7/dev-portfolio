import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import About from "./_components/about";
import Skills from "./_components/skills";
import WorkExprience from "./_components/work-exprience";


// TODO: Animation on scroll (AOS)

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col">
      <Navbar />
      {/* About me */}
      <section id="home" className="h-screen">
        <Hero />
      </section>
      <section id="about" className="h-screen ">
        <About />
      </section>
      <section id="skills" className="h-screen">
        <Skills />
      </section>
      <section id="work-exprience" className="h-screen">
        <WorkExprience />
      </section>
      <section id="contact-me" className="h-screen">
        Contact Me
      </section>
    </main>
  );
}
