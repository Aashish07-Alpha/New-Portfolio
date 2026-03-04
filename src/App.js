import { useEffect, useState } from "react";
import Header from "./_components/Header";
import Mail from "./_components/Mail";
import Social from "./_components/Social";
import Hero from "./_components/Hero";
import { Loader } from "./_components/Loader";
import Projects from "./_components/Projects";
import Skills from "./_components/Skills";
import Experience from "./_components/Experience";
import Education from "./_components/Education";
import Achievements from "./_components/Achievements";
import Connect from "./_components/Connect";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ fontFamily: "Inter, sans-serif" }}>
      <Header />
      {loading ? (
        <div className="!overflow-hidden fixed inset-0 flex items-center justify-center !z-[100]">
          <Loader />
        </div>
      ) : (
        <main className="w-full pt-[10vh] md:pt-[15vh] overflow-x-hidden">
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Achievements />
          <Connect />
        </main>
      )}
      <Mail />
      <Social />
    </div>
  );
}
