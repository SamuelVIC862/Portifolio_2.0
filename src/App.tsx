import { useEffect, useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Section from "./ui/section";
import Home from "./components/home";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <section
      className={`pt-24 min-h-screen flex flex-col bg-background transition-all duration-300 bg-background`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="px-96 flex flex-col">
        <Section className={""}>
          <Home />
        </Section>
      </div>
      <Footer />
    </section>
  );
}

export default App;
