import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from "./_components/hero";
import About from "./_components/about";
import Skills from "./_components/skills";
import WorkExperience from "./_components/experience";
import Contact from './_components/contact';
import Certificate from './_components/certificate';



// TODO: Animation on scroll (AOS)

// const canUseDOM = typeof window !== 'undefined' && window.document;

// if (canUseDOM) {
//   AOS.init({
//     // Global settings:
//     offset: 10, // offset (in px) from the original trigger point
//     duration: 1000, // values from 0 to 3000, with step 50ms
//     easing: 'ease-in-sine',
//     // once: true, // whether animation should happen only once - while scrolling down
//   });
// }

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col">
      {/* Home */}
      <section id="home" className="min-h-dvh">
        <Hero />
      </section>
      <section id="about" className="min-h-dvh ">
        <About />
      </section>
      <section id="skills" className="min-h-dvh">
        <Skills />
      </section>
      <section id="work-experience" className="min-h-dvh flex flex-col my-5">
        <WorkExperience />
      </section>
      <section id="certificate" className="min-h-32">
        <Certificate />
      </section>
      <section id="contact-me" className="h-[100dvh]">
        <Contact />
      </section>
    </main>
  );
}
