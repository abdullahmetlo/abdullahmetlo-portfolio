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
    <div className="relative min-h-screen bg-[#eef2f6] dark:bg-[#05070c] text-slate-800 dark:text-zinc-100 flex flex-col selection:bg-[#0072b1] selection:text-white overflow-x-hidden transition-colors duration-300">
      {/* Interactive mouse-tracking background */}
      <InteractiveBackground />

      {/* Atmospheric ambient mesh glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-sky-200/25 dark:bg-[#0072b1]/10 blur-[180px] rounded-full" />
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-indigo-100/35 dark:bg-sky-500/10 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 left-10 w-[600px] h-[600px] bg-blue-100/30 dark:bg-indigo-950/20 blur-[180px] rounded-full" />
      </div>

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
