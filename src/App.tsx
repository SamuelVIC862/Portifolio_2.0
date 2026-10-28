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
    <section
      className={`min-h-screen w-full flex flex-col transition-all duration-300 overflow-hidden`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="flex flex-col justify-center">
        <Section className={"pt-24 bg-background"}>
          <div className="w-280">
            <Home />
          </div>
        </Section>
        <Section className={"bg-surface"}>
          <div className="w-280">
            <Experience />
          </div>
        </Section>
        <Section className={"bg-background"}>
          <div className="w-280">
            <Skills />
          </div>
        </Section>
        <Section className={"bg-surface"}>
          <div className="w-280">
            <Projects />
          </div>
        </Section>
      </div>
      <Footer />
    </section>
  );
}

export default App;
