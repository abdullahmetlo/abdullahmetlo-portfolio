import Navbar from "./components/Navbar";
import InteractiveBackground from "./components/InteractiveBackground";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#05070c] text-zinc-100 flex flex-col selection:bg-emerald-500 selection:text-black overflow-x-hidden">
      {/* Interactive mouse-tracking background */}
      <InteractiveBackground />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
