import { useEffect, useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Section from "./ui/section";
import Home from "./components/home";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Projects from "./components/projects";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <section className="min-h-screen w-full flex flex-col overflow-x-clip transition-all duration-300">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="flex flex-col justify-center">
        <Section id="Home" className={"pt-24 bg-background"}>
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Home />
          </div>
        </Section>
        <Section id="About" className={"bg-surface"}>
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Experience />
          </div>
        </Section>
        <Section id="Skills" className={"bg-background"}>
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Skills />
          </div>
        </Section>
        <Section id="Projects" className={"bg-surface"}>
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Projects />
          </div>
        </Section>
      </div>
      <Footer />
    </section>
  );
}

export default App;
